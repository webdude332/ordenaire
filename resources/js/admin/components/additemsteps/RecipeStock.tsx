// is edit mode

import InfoIcon from '@/shared/images/icons/infoRing.svg?react';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';

// UPDATED: Added isEditMode and onSave, made onNext optional
interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext?: () => void;
    onBack: () => void;
    canNext?: boolean;
    isEditMode?: boolean;
    onSave?: () => void;
}

const RecipeStock = ({
    data,
    update,
    onNext,
    onBack,
    canNext = true,
    isEditMode = false,
    onSave,
}: StepProps) => {
    const basePrice = parseFloat(data.basePrice) || 0;
    const estimatedCost = parseFloat(data.estimatedCost) || 0;
    const netMargin = basePrice - estimatedCost;
    const marginPct =
        basePrice > 0 ? Math.round((netMargin / basePrice) * 100) : 0;

    const taxOptions = [
        { label: 'Manual Assignment', value: 'manual' },
        { label: 'VAT (5%)', value: 'vat_5' },
        { label: 'Excise Tax (50%)', value: 'excise_50' },
        { label: 'No Tax', value: 'none' },
    ];

    return (
        <div className="space-y-8 border-t border-gray-200 pt-8">
            {/* Inventory Tracking */}
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Inventory Tracking
                    </h3>
                </div>
                <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                    {/* Track Stock Toggle */}
                    <div className="space-y-3">
                        <Label className="text-sm font-medium text-gray-700">
                            Track Stock?
                        </Label>
                        <RadioGroup
                            name="track_stock"
                            label=""
                            value={data.trackStock ? 'on' : 'off'}
                            onChange={(val) =>
                                update('trackStock', val === 'on')
                            }
                            options={[
                                { value: 'off', label: 'OFF' },
                                { value: 'on', label: 'ON' },
                            ]}
                            gap="gap-6"
                        />
                    </div>

                    {/* Info when OFF */}
                    {!data.trackStock && (
                        <div className="flex items-center gap-3 rounded-xl border border-borderColor bg-white px-4 py-3">
                            <span className="">
                                <InfoIcon className="h-8 w-8" />
                            </span>
                            <p className="text-sm text-gray-600">
                                This item is not tracked in stock. (Unlimited
                                Quantity).
                            </p>
                        </div>
                    )}

                    {/* Estimated Cost */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                            Estimated Cost Price
                        </Label>
                        <div className="relative w-64">
                            <input
                                type="number"
                                step="0.001"
                                value={data.estimatedCost}
                                onChange={(e) =>
                                    update('estimatedCost', e.target.value)
                                }
                                placeholder="0.000"
                                className="w-full rounded-lg border border-gray-300 py-2.5 pr-16 pl-3 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                            />
                            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                KWD
                            </span>
                        </div>
                        <p className="text-xs text-gray-400">
                            Optional, for simple profit reporting
                        </p>
                    </div>

                    {/* Base Price + Manual Tax */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Base Price
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <div className="relative">
                                <input
                                    type="number"
                                    step="0.001"
                                    value={data.basePrice}
                                    onChange={(e) =>
                                        update('basePrice', e.target.value)
                                    }
                                    placeholder="0.000"
                                    className="w-full rounded-lg border border-gray-300 py-2.5 pr-16 pl-3 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    KWD
                                </span>
                            </div>
                        </div>
                        <div>
                            <Label className="mb-2 text-sm font-medium text-gray-700">
                                Manual Tax
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <CustomDropdown
                                label=""
                                options={taxOptions}
                                value={data.manualTax}
                                onChange={(val) => update('manualTax', val)}
                                placeholder="Manual Assignment"
                            />
                            <p className="mt-1.5 text-sm text-gray-400">
                                Global taxes (like VAT) are applied
                                automatically at checkout and won't show here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            {/* Cost & Margin */}
            <div className="">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Cost & Margin (per serve)
                    </h3>
                </div>
                <div className="col-span-9 mt-8">
                    <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
                        {/* Total Cost */}
                        <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                            <p className="mb-1 text-sm text-gray-500">
                                Total Cost
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                                {estimatedCost.toFixed(3)}
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                                Manual Estimate
                            </p>
                        </div>

                        {/* Selling Price */}
                        <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                            <p className="mb-1 text-sm text-gray-500">
                                Selling Price
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                                Customer Pays: {basePrice.toFixed(3)} KWD
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                                Global taxes (VAT) will be applied at checkout,
                                if configured.
                            </p>
                        </div>

                        {/* Net Profit Margin */}
                        <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                            <p className="mb-1 text-sm text-gray-500">
                                Net Profit Margin
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                                {netMargin.toFixed(3)} KWD
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                                {marginPct}% Profit
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* UPDATED DYNAMIC FOOTER */}
            {isEditMode ? (
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                    <IconButton onClick={onBack}>Cancel</IconButton>
                    <Button onClick={onSave} disabled={!canNext}>
                        Save Changes
                    </Button>
                </div>
            ) : (
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                    <IconButton onClick={onBack}>Go Back</IconButton>
                    <IconButton onClick={() => console.log('Save as Draft')}>
                        Save as Draft
                    </IconButton>
                    <Button onClick={onNext} disabled={!canNext}>
                        Continue to Variants & Add-ons
                    </Button>
                </div>
            )}
        </div>
    );
};

export default RecipeStock;
