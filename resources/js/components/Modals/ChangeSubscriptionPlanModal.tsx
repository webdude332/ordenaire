import Modal from '@/components/Modal'; // Assuming same path as previous files
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import { useState } from 'react';

interface ChangeSubscriptionPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

export default function ChangeSubscriptionPlanModal({
    isOpen,
    onClose,
    onSave,
}: ChangeSubscriptionPlanModalProps) {
    // --- State ---
    const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('yearly');
    const [selectedPlan, setSelectedPlan] = useState<
        'started' | 'pro' | 'enterprise'
    >('pro');
    const [customAmount, setCustomAmount] = useState('35');
    const [discountType, setDiscountType] = useState<'percentage' | 'amount'>(
        'percentage',
    );
    const [discountValue, setDiscountValue] = useState('50');

    // --- Components ---

    // SVG Icon for the Header (Stacked Layers)
    const StackIcon = () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="#374151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 17L12 22L22 17"
                stroke="#374151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 12L12 17L22 12"
                stroke="#374151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    // Custom Checkbox Icon for Cards
    const Checkbox = ({ checked }: { checked: boolean }) => {
        if (checked) {
            return (
                <div className="flex h-5 w-5 items-center justify-center rounded bg-[#8AC926]">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            );
        }
        return (
            <div className="h-5 w-5 rounded border border-gray-300 bg-white"></div>
        );
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="4xl">
            <div className="relative overflow-hidden rounded-xl bg-white">
                {/* --- Close Button --- */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* --- Content Wrapper --- */}
                <div className="p-8 pb-2">
                    {/* Header */}
                    <div className="mb-8 flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                            <StackIcon />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">
                                Change Subscription Plan
                            </h3>
                            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                                <span>Current Plan:</span>
                                <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-xs font-medium text-[#166534]">
                                    Pro (Billed monthly)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Frequency Toggle */}
                    <div className="mb-8 flex flex-col items-center justify-center">
                        <span className="mb-3 text-base font-semibold text-gray-900">
                            Select new plan frequency:
                        </span>
                        <div className="flex items-center rounded-lg border border-gray-100 bg-gray-50 p-1">
                            <button
                                onClick={() => setFrequency('monthly')}
                                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                                    frequency === 'monthly'
                                        ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setFrequency('yearly')}
                                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                                    frequency === 'yearly'
                                        ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Yearly (Save 20%)
                            </button>
                        </div>
                    </div>

                    {/* Plan Selection Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        {/* 1. Started Plan */}
                        <div
                            onClick={() => setSelectedPlan('started')}
                            className={`relative cursor-pointer rounded-xl border p-5 transition-all ${
                                selectedPlan === 'started'
                                    ? 'border-[#8AC926] ring-1 ring-[#8AC926]'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className="absolute top-4 right-4">
                                <Checkbox
                                    checked={selectedPlan === 'started'}
                                />
                            </div>
                            <div className="mt-1">
                                <h4 className="text-xl font-bold text-gray-900">
                                    10 AED / year
                                </h4>
                                <p className="mt-1 font-semibold text-gray-900">
                                    Started
                                </p>
                                <p className="text-sm text-gray-500">
                                    Basic Support
                                </p>
                            </div>
                        </div>

                        {/* 2. Pro Plan */}
                        <div
                            onClick={() => setSelectedPlan('pro')}
                            className={`relative cursor-pointer rounded-xl border p-5 transition-all ${
                                selectedPlan === 'pro'
                                    ? 'border-[#8AC926] ring-1 ring-[#8AC926]'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className="absolute top-4 right-4">
                                <Checkbox checked={selectedPlan === 'pro'} />
                            </div>
                            <div className="mt-1">
                                <h4 className="text-xl font-bold text-gray-900">
                                    10 AED / year
                                </h4>
                                <p className="mt-1 font-semibold text-gray-900">
                                    Pro
                                </p>
                                <p className="text-sm text-gray-500">
                                    Priority Supoort
                                </p>
                            </div>
                        </div>

                        {/* 3. Enterprise Plan */}
                        <div
                            onClick={() => setSelectedPlan('enterprise')}
                            className={`relative cursor-pointer rounded-xl border p-5 transition-all ${
                                selectedPlan === 'enterprise'
                                    ? 'border-[#8AC926] ring-1 ring-[#8AC926]'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className="absolute top-4 right-4">
                                <Checkbox
                                    checked={selectedPlan === 'enterprise'}
                                />
                            </div>
                            <div className="mt-1 mb-4">
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Enter custom amount
                                </label>
                                <div className="flex overflow-hidden rounded-md border border-gray-300 shadow-sm">
                                    <span className="border-r border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500">
                                        AED
                                    </span>
                                    <input
                                        type="text"
                                        value={customAmount}
                                        onChange={(e) =>
                                            setCustomAmount(e.target.value)
                                        }
                                        className="w-full px-3 py-2 text-sm focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">
                                    Entreprise
                                </p>
                                <p className="text-sm text-gray-500">
                                    24/7 Agent
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Discount Section */}
                    <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                        {/* Green Header */}
                        <div className="bg-[#EFFFD6] px-5 py-3">
                            <h5 className="text-sm font-semibold text-gray-900">
                                Enter discount and apply
                            </h5>
                        </div>
                        {/* Content */}
                        <div className="p-5">
                            <div className="flex items-center gap-6">
                                <label className="flex cursor-pointer items-center gap-2">
                                    <div
                                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${discountType === 'percentage' ? 'border-[#8AC926]' : 'border-gray-300'}`}
                                    >
                                        {discountType === 'percentage' && (
                                            <div className="h-2.5 w-2.5 rounded-full bg-[#8AC926]" />
                                        )}
                                    </div>
                                    <span className="text-sm text-gray-700">
                                        Percentage (%)
                                    </span>
                                    <input
                                        type="radio"
                                        name="discount"
                                        className="hidden"
                                        checked={discountType === 'percentage'}
                                        onChange={() =>
                                            setDiscountType('percentage')
                                        }
                                    />
                                </label>
                                <label className="flex cursor-pointer items-center gap-2">
                                    <div
                                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${discountType === 'amount' ? 'border-[#8AC926]' : 'border-gray-300'}`}
                                    >
                                        {discountType === 'amount' && (
                                            <div className="h-2.5 w-2.5 rounded-full bg-[#8AC926]" />
                                        )}
                                    </div>
                                    <span className="text-sm text-gray-700">
                                        Amount
                                    </span>
                                    <input
                                        type="radio"
                                        name="discount"
                                        className="hidden"
                                        checked={discountType === 'amount'}
                                        onChange={() =>
                                            setDiscountType('amount')
                                        }
                                    />
                                </label>
                            </div>

                            <div className="mt-4 flex items-center gap-4">
                                <div className="flex w-48 overflow-hidden rounded-md border border-gray-300 shadow-sm">
                                    <span className="border-r border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500">
                                        %
                                    </span>
                                    <input
                                        type="text"
                                        value={discountValue}
                                        onChange={(e) =>
                                            setDiscountValue(e.target.value)
                                        }
                                        className="w-full px-3 py-2 text-sm focus:outline-none"
                                    />
                                </div>
                                <button className="text-sm font-semibold text-[#8AC926] hover:text-[#78b31f]">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Footer --- */}
                <div className="mt-2 flex gap-4 border-t border-gray-100 bg-white px-8 py-5">
                    <div className="flex-1">
                        <IconButton
                            onClick={onClose}
                            className="w-full justify-center"
                        >
                            Cancel
                        </IconButton>
                    </div>
                    <div className="flex-1">
                        <Button
                            onClick={onSave}
                            className="w-full justify-center border-none bg-[#8AC926] hover:bg-[#78b31f]"
                        >
                            Submit for Approval
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
