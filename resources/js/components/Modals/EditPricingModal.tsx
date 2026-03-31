import Modal from '@/components/Modal';
import CustomDropdown from '@/components/ui/CustomDropdown';
import { Input, Label } from '@/components/ui/FormElements';
import patternBg from '@/images/icons/patternBg.svg';
import { PencilIcon, Plus, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Options ──────────────────────────────────────────────────────────────────

const PRICING_MODEL_OPTIONS = [
    { label: 'Free', value: 'free' },
    { label: 'One-Time License', value: 'one_time' },
    { label: 'Recurring (Subscription)', value: 'recurring' },
];

const FREE_TRIAL_OPTIONS = [
    { label: 'No Trial', value: 'no_trial' },
    { label: '7 Days', value: '7_days' },
    { label: '14 Days', value: '14_days' },
    { label: '30 Days', value: '30_days' },
];

const REGION_OPTIONS = [
    { label: 'Kuwait', value: 'kuwait' },
    { label: 'UAE', value: 'uae' },
    { label: 'KSA', value: 'ksa' },
    { label: 'Qatar', value: 'qatar' },
];

const OVERRIDE_RATES: Record<
    string,
    { label: string; flag: string; rate: string; currency: string }
> = {
    uae: {
        label: 'UAE Dirham (AED)',
        flag: '🇦🇪',
        rate: '122.45',
        currency: 'AED',
    },
    ksa: {
        label: 'Saudi Riyal (SAR)',
        flag: '🇸🇦',
        rate: '130.00',
        currency: 'SAR',
    },
    qatar: {
        label: 'Qatari Riyal (QAR)',
        flag: '🇶🇦',
        rate: '125.40',
        currency: 'QAR',
    },
    kuwait: {
        label: 'Kuwaiti Dinar (KWD)',
        flag: '🇰🇼',
        rate: '1.00',
        currency: 'KWD',
    },
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface AppPricingItem {
    id: number;
    name: string;
    strategy: string;
    basePrice: string;
}

interface EditPricingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: PricingFormData) => void;
    app: AppPricingItem | null;
}

interface PricingFormData {
    pricingModel: string;
    basePrice: string;
    supportedRegions: string[];
    freeTrialDuration: string;
    customOverridePricing: boolean;
    overridePrices: Record<string, string>;
}

// ─── Region Multi-select ──────────────────────────────────────────────────────

const RegionMultiSelect = ({
    selected,
    onAdd,
    onRemove,
}: {
    selected: string[];
    onAdd: (v: string) => void;
    onRemove: (v: string) => void;
}) => {
    const available = REGION_OPTIONS.filter((r) => !selected.includes(r.value));
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="relative flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5">
                <span className="flex-1 text-sm text-gray-400">
                    Available In
                </span>
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <Plus className="h-4 w-4" />
                </button>
                {open && available.length > 0 && (
                    <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                        {available.map((r) => (
                            <button
                                key={r.value}
                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                onClick={() => {
                                    onAdd(r.value);
                                    setOpen(false);
                                }}
                            >
                                {r.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {selected.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {selected.map((v) => {
                        const opt = REGION_OPTIONS.find((r) => r.value === v);
                        return (
                            <span
                                key={v}
                                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                            >
                                {opt?.label}
                                <button
                                    onClick={() => onRemove(v)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function EditPricingModal({
    isOpen,
    onClose,
    onConfirm,
    app,
}: EditPricingModalProps) {
    const [pricingModel, setPricingModel] = useState('recurring');
    const [basePrice, setBasePrice] = useState('10.000');
    const [supportedRegions, setSupportedRegions] = useState<string[]>([
        'kuwait',
        'uae',
        'qatar',
    ]);
    const [freeTrialDuration, setFreeTrialDuration] = useState('no_trial');
    const [customOverridePricing, setCustomOverridePricing] = useState(true);
    const [overridePrices, setOverridePrices] = useState<
        Record<string, string>
    >({ uae: '120.00' });

    const isFree = pricingModel === 'free';

    useEffect(() => {
        if (app) {
            setBasePrice(app.basePrice ?? '10.000');
            // Map strategy string back to dropdown value
            const stratMap: Record<string, string> = {
                Recurring: 'recurring',
                'Free Tier': 'free',
                'One-time License': 'one_time',
            };
            setPricingModel(stratMap[app.strategy] ?? 'recurring');
        }
    }, [app]);

    // When model switches to free, clear base price
    useEffect(() => {
        if (isFree) setBasePrice('0.000');
    }, [isFree]);

    const handleSubmit = () => {
        onConfirm({
            pricingModel,
            basePrice,
            supportedRegions,
            freeTrialDuration,
            customOverridePricing,
            overridePrices,
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                <div className="mb-5">
                    <div className="relative mb-6 flex items-start gap-4">
                        <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                            <img
                                src={patternBg}
                                alt=""
                                className="max-w-none"
                                style={{
                                    transform: 'scale(1.1)',
                                    opacity: 0.7,
                                }}
                            />
                        </div>
                        <div>
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <PencilIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Edit Pricing{app?.name ? `: ${app.name}` : ''}
                    </h2>
                </div>

                {/* ── Pricing & Region ────────────────────────────────── */}
                <div className="rounded-xl border border-gray-200 p-5">
                    <h3 className="mb-4 text-sm font-semibold text-gray-900">
                        Pricing & Region
                    </h3>

                    {/* Row 1: Pricing Model + Base Price */}
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Pricing Model
                            </Label>
                            <CustomDropdown
                                label=""
                                options={PRICING_MODEL_OPTIONS}
                                value={pricingModel}
                                onChange={setPricingModel}
                                placeholder="Select pricing model"
                            />
                        </div>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Base Price (KWD)
                            </Label>
                            <Input
                                placeholder="0.000"
                                value={isFree ? '0.000' : basePrice}
                                onChange={(e) => setBasePrice(e.target.value)}
                                disabled={isFree}
                                className={
                                    isFree
                                        ? 'cursor-not-allowed bg-gray-50 text-gray-400'
                                        : ''
                                }
                            />
                        </div>
                    </div>

                    {/* Row 2: Supported Regions + Free Trial */}
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Supported Regions
                            </Label>
                            <RegionMultiSelect
                                selected={supportedRegions}
                                onAdd={(v) =>
                                    setSupportedRegions((prev) => [...prev, v])
                                }
                                onRemove={(v) =>
                                    setSupportedRegions((prev) =>
                                        prev.filter((r) => r !== v),
                                    )
                                }
                            />
                        </div>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Free Trial Duration
                            </Label>
                            <CustomDropdown
                                label=""
                                options={FREE_TRIAL_OPTIONS}
                                value={freeTrialDuration}
                                onChange={setFreeTrialDuration}
                                disabled={isFree}
                                placeholder="No Trial"
                            />
                        </div>
                    </div>

                    {/* Override pricing checkbox */}
                    <div className="rounded-lg border border-gray-200 p-3">
                        <label className="flex cursor-pointer items-center gap-3">
                            <input
                                type="checkbox"
                                checked={customOverridePricing}
                                onChange={(e) =>
                                    setCustomOverridePricing(e.target.checked)
                                }
                                className="peer sr-only"
                            />
                            <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white transition-all peer-checked:border-[#79B800] peer-checked:bg-[#79B800]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 text-white"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M2 6l3 3 5-5" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-700">
                                Set custom fixed prices for specific regions
                            </span>
                        </label>
                    </div>

                    {/* Override Pricing Table */}
                    {customOverridePricing && (
                        <div className="mt-4 rounded-xl border border-gray-200 p-4">
                            <h4 className="mb-3 text-sm font-semibold text-gray-900">
                                The Override Pricing
                            </h4>
                            <div className="overflow-hidden rounded-lg border border-gray-200">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2.5 text-left text-xs font-medium text-gray-500">
                                                Region
                                            </th>
                                            <th className="px-4 py-2.5 text-left text-xs font-medium text-gray-500">
                                                Standard auto-rate
                                            </th>
                                            <th className="px-4 py-2.5 text-left text-xs font-medium text-gray-500">
                                                Custom Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {supportedRegions
                                            .filter((r) => r !== 'kuwait')
                                            .map((r) => {
                                                const info = OVERRIDE_RATES[r];
                                                if (!info) return null;
                                                return (
                                                    <tr key={r}>
                                                        <td className="px-4 py-3 text-gray-700">
                                                            <span className="mr-1.5">
                                                                {info.flag}
                                                            </span>
                                                            {info.label}
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-500">
                                                            {info.rate}{' '}
                                                            {info.currency}
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <input
                                                                type="text"
                                                                placeholder="Auto"
                                                                value={
                                                                    overridePrices[
                                                                        r
                                                                    ] ?? ''
                                                                }
                                                                onChange={(e) =>
                                                                    setOverridePrices(
                                                                        (
                                                                            prev,
                                                                        ) => ({
                                                                            ...prev,
                                                                            [r]: e
                                                                                .target
                                                                                .value,
                                                                        }),
                                                                    )
                                                                }
                                                                className="w-24 rounded-lg border border-gray-300 px-2.5 py-1.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                                                            />
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-2 text-xs text-gray-400">
                                If left blank, the system reverts to the
                                auto-exchange rate.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </div>
        </Modal>
    );
}
