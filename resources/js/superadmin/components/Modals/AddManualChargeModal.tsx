import Modal from '@/superadmin/components/Modal';
import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import { Input, Label } from '@/superadmin/components/ui/FormElements';
import { Calendar, Plus } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AddManualChargeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSaveAndBill: (data: ManualChargeData) => void;
    onAddToQueue: (data: ManualChargeData) => void;
}

interface ManualChargeData {
    business: string;
    chargeRule: string;
    description: string;
    startDate: string;
    chargeFrequency: string;
    unitPrice: string;
    quantity: string;
}

const CHARGE_RULE_OPTIONS = [
    { label: 'Kiosk Machine', value: 'kiosk_machine' },
    { label: 'Active Staff', value: 'active_staff' },
    { label: 'Storage Overage', value: 'storage_overage' },
    { label: 'Menu Items', value: 'menu_items' },
    { label: 'One-Time Setup', value: 'one_time_setup' },
];

const FREQUENCY_OPTIONS = [
    { label: 'One-Time', value: 'one_time' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Quarterly', value: 'quarterly' },
    { label: 'Yearly', value: 'yearly' },
];

const BUSINESS_OPTIONS = [
    { label: 'PizzaPalace • BIZ-2050', value: 'pizzapalace' },
    { label: 'BurgerHub • BIZ-2051', value: 'burgerhub' },
    { label: 'SushiWorld • BIZ-2052', value: 'sushiworld' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AddManualChargeModal({
    isOpen,
    onClose,
    onSaveAndBill,
    onAddToQueue,
}: AddManualChargeModalProps) {
    const [business, setBusiness] = useState('');
    const [chargeRule, setChargeRule] = useState('kiosk_machine');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('29 Aug 2025');
    const [chargeFrequency, setChargeFrequency] = useState('');
    const [unitPrice, setUnitPrice] = useState('50.000');
    const [quantity, setQuantity] = useState('1');

    const totalCharge =
        (parseFloat(unitPrice.replace(',', '')) || 0) *
        (parseInt(quantity) || 0);

    const buildData = (): ManualChargeData => ({
        business,
        chargeRule,
        description,
        startDate,
        chargeFrequency,
        unitPrice,
        quantity,
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ─────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Plus className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add Manual Charge
                    </h2>
                </div>

                <div className="space-y-4">
                    {/* ── Charge Details ───────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Charge Details
                        </h3>

                        {/* Row 1: Select Business + Charge Rule */}
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Select Business
                                    <span className="text-primary">*</span>
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={BUSINESS_OPTIONS}
                                    value={business}
                                    onChange={setBusiness}
                                    placeholder="Search or select business..."
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Charge Rule / SKU
                                    <span className="text-primary">*</span>
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={CHARGE_RULE_OPTIONS}
                                    value={chargeRule}
                                    onChange={setChargeRule}
                                    placeholder="Select charge rule"
                                />
                            </div>
                        </div>

                        {/* Description / Justification */}
                        <div className="mb-4">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Description / Justification
                            </Label>
                            <textarea
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="e.g. 1 Device (Manual Entry)"
                                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                            />
                        </div>

                        {/* Row 2: Start Date + Charge Frequency */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Start Date
                                    <span className="text-primary">*</span>
                                </Label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                    </span>
                                    <input
                                        type="text"
                                        value={startDate}
                                        onChange={(e) =>
                                            setStartDate(e.target.value)
                                        }
                                        placeholder="DD MMM YYYY"
                                        className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-9 text-sm text-gray-900 placeholder-gray-400 shadow-xs outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Charge Frequency
                                    <span className="text-primary">*</span>
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={FREQUENCY_OPTIONS}
                                    value={chargeFrequency}
                                    onChange={setChargeFrequency}
                                    placeholder="Select frequency"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Pricing ──────────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Pricing
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Unit Price (KWD)
                                </Label>
                                <Input
                                    placeholder="0.000"
                                    value={unitPrice}
                                    onChange={(e) =>
                                        setUnitPrice(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Quantity
                                </Label>
                                <Input
                                    placeholder="1"
                                    value={quantity}
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* Total Charge */}
                        <div className="mt-4 flex items-center justify-end gap-6">
                            <span className="text-sm font-medium text-gray-700">
                                Total Charge
                            </span>
                            <span className="text-sm font-semibold text-gray-900">
                                {totalCharge.toFixed(3)} KWD
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                {/* Cancel */}
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>

                {/* Save & Bill Now — outlined style */}
                <button
                    onClick={() => {
                        onSaveAndBill(buildData());
                        onClose();
                    }}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                    Save & Bill Now
                </button>

                {/* Add to Queue — primary green */}
                <Button
                    className="w-full"
                    onClick={() => {
                        onAddToQueue(buildData());
                        onClose();
                    }}
                >
                    Add to Queue
                </Button>
            </div>
        </Modal>
    );
}
