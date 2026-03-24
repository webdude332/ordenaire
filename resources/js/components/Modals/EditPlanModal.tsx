import Badge from '@/components/Badge';
import Modal from '@/components/Modal';
import CheckIcon from '@/images/icons/checkIcon.svg?react';
import Layers from '@/images/icons/layers.svg?react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import RadioGroup from '../ui/RadioGroup';
type BillingFrequency = 'monthly' | 'yearly';
type DiscountType = 'percentage' | 'amount';

interface Plan {
    id: string;
    price: string;
    frequency: string;
    name: string;
    description: string;
    isCustom?: boolean;
}

interface EditPlanModalProps {
    businessName?: string;
    currentPlan?: string;
    currentBilling?: string;
    onClose: () => void;
    onSubmit?: (data: {
        planId: string;
        frequency: BillingFrequency;
        customAmount?: string;
        discountType: DiscountType;
        discountValue: string;
    }) => void;
}

const PLANS: Plan[] = [
    {
        id: 'starter',
        price: '10 AED',
        frequency: '/ year',
        name: 'Started',
        description: 'Basic Support',
    },
    {
        id: 'pro',
        price: '10 AED',
        frequency: '/ year',
        name: 'Pro',
        description: 'Priority Support',
    },
    {
        id: 'enterprise',
        price: '',
        frequency: '',
        name: 'Entreprise',
        description: '24/7 Agent',
        isCustom: true,
    },
];

export default function EditPlanModal({
    currentPlan = 'Pro',
    currentBilling = 'Billed monthly',
    onClose,
    onSubmit,
}: EditPlanModalProps) {
    const [frequency, setFrequency] = useState<BillingFrequency>('yearly');
    const [selectedPlanId, setSelectedPlanId] = useState<string>('pro');
    const [customAmount, setCustomAmount] = useState<string>('35');
    const [discountType, setDiscountType] =
        useState<DiscountType>('percentage');
    const [discountValue, setDiscountValue] = useState<string>('50');
    const [discountApplied, setDiscountApplied] = useState<boolean>(false);

    const handleApplyDiscount = () => {
        setDiscountApplied(true);
    };

    const handleSubmit = () => {
        onSubmit?.({
            planId: selectedPlanId,
            frequency,
            customAmount:
                selectedPlanId === 'enterprise' ? customAmount : undefined,
            discountType,
            discountValue,
        });
    };

    return (
        <Modal isOpen={true} onClose={onClose} maxWidth="xl">
            <div className="relative overflow-hidden p-6 sm:p-8">
                {/* Header */}
                <div className="relative mb-6 flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                        <Layers className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                    </div>
                </div>

                {/* Title + Current Plan Badge */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                        Change Subscription Plan
                    </h3>
                    <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                            Curent Plan:
                        </span>
                        <Badge variant="success" withDot={false} rounded="full">
                            {currentPlan} ({currentBilling})
                        </Badge>
                    </div>
                </div>

                {/* Main Card */}
                <div className="relative z-10 rounded-xl border border-gray-200 bg-white shadow-xs">
                    <div className="space-y-6 p-6">
                        {/* Frequency Toggle */}
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-base font-semibold text-gray-800">
                                Select new plan frequency:
                            </p>
                            <div className="flex items-center gap-0 rounded-lg border border-gray-200 bg-gray-50 p-1">
                                <button
                                    type="button"
                                    onClick={() => setFrequency('monthly')}
                                    className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${
                                        frequency === 'monthly'
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    Monthly
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFrequency('yearly')}
                                    className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${
                                        frequency === 'yearly'
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    Yearly (Save 20%)
                                </button>
                            </div>
                        </div>

                        {/* Plan Cards */}
                        <div className="grid grid-cols-3 items-start gap-4">
                            {PLANS.map((plan) => {
                                const isSelected = selectedPlanId === plan.id;
                                return (
                                    <button
                                        key={plan.id}
                                        type="button"
                                        onClick={() =>
                                            setSelectedPlanId(plan.id)
                                        }
                                        className={`relative flex w-full flex-col rounded-xl border-2 p-4 text-left transition-all ${
                                            isSelected
                                                ? 'border-[#79B800] bg-white shadow-sm'
                                                : 'border-gray-200 bg-white hover:border-gray-300'
                                        }`}
                                    >
                                        {/* Checkbox */}
                                        <div
                                            className={`absolute top-4 right-4 flex h-5 w-5 items-center justify-center rounded border transition-all ${
                                                isSelected
                                                    ? 'border-[#79B800] bg-[#79B800]'
                                                    : 'border-gray-300 bg-white'
                                            }`}
                                        >
                                            {isSelected && (
                                                <CheckIcon className="h-3.5 w-3.5 text-white" />
                                            )}
                                        </div>

                                        {/* Content Area */}
                                        {plan.isCustom ? (
                                            <div className="w-full">
                                                <p className="mb-3 pr-8 text-sm font-bold text-gray-900">
                                                    Enter custom amount
                                                </p>
                                                <div className="mb-4 flex overflow-hidden rounded-lg border border-gray-300 focus-within:border-[#79B800] focus-within:ring-1 focus-within:ring-[#79B800]">
                                                    <span className="flex items-center border-r border-gray-300 bg-gray-50 px-3 text-sm font-medium text-gray-500">
                                                        AED
                                                    </span>
                                                    <input
                                                        type="number"
                                                        value={customAmount}
                                                        onChange={(e) =>
                                                            setCustomAmount(
                                                                e.target.value,
                                                            )
                                                        }
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedPlanId(
                                                                plan.id,
                                                            );
                                                        }}
                                                        className="w-full bg-white px-3 py-2 text-sm font-medium text-gray-900 outline-none"
                                                        placeholder="35"
                                                    />
                                                </div>
                                                {/* Thin divider line matching your screenshot */}
                                                <div className="mb-3 border-t border-gray-100"></div>
                                            </div>
                                        ) : (
                                            <div className="mb-6 pr-8">
                                                <span className="text-[1.15rem] font-bold text-gray-900">
                                                    {plan.price}
                                                </span>
                                                <span className="text-[1.15rem] font-bold text-gray-900">
                                                    {' '}
                                                    {plan.frequency}
                                                </span>
                                            </div>
                                        )}

                                        {/* Plan Title & Subtitle (Always pushed to the bottom if cards grew) */}
                                        <div className="mt-auto">
                                            <p className="text-sm font-bold text-gray-900">
                                                {plan.name}
                                            </p>
                                            <p className="mt-0.5 text-xs text-gray-500">
                                                {plan.description}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Divider */}
                        <hr className="border-gray-200" />

                        {/* Discount Section */}
                        <div className="overflow-hidden">
                            {/* Green Header */}
                            <div className="rounded-t-xl bg-[#E7FFB8] px-4 py-3 pb-4">
                                <p className="text-sm font-semibold text-gray-800">
                                    Enter discount and apply
                                </p>
                            </div>

                            {/* Discount Body */}
                            <div className="relative z-10 -mt-2 space-y-3 rounded-xl border border-borderColor bg-white p-4">
                                {/* Radio Buttons */}
                                <div className="flex items-center gap-6">
                                    <div>
                                        <RadioGroup
                                            name="discountType"
                                            value={discountType}
                                            onChange={(val) =>
                                                setDiscountType(
                                                    val as DiscountType,
                                                )
                                            }
                                            options={[
                                                {
                                                    value: 'percentage',
                                                    label: 'Percentage (%)',
                                                },
                                                {
                                                    value: 'amount',
                                                    label: 'Amount',
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>

                                {/* Input + Apply */}
                                <div className="flex items-center gap-3">
                                    <div className="flex overflow-hidden rounded-lg border border-gray-300">
                                        <span className="flex items-center bg-gray-50 px-3 text-sm font-medium text-gray-500">
                                            {discountType === 'percentage'
                                                ? '%'
                                                : 'AED'}
                                        </span>
                                        <input
                                            type="number"
                                            value={discountValue}
                                            onChange={(e) => {
                                                setDiscountValue(
                                                    e.target.value,
                                                );
                                                setDiscountApplied(false);
                                            }}
                                            className="w-40 bg-white px-3 py-2 text-sm font-medium text-gray-900 outline-none"
                                            placeholder="0"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleApplyDiscount}
                                        className="text-sm font-semibold text-[#5A8C00] transition-colors hover:text-[#4a7300]"
                                    >
                                        {discountApplied
                                            ? 'Applied ✓'
                                            : 'Apply'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <IconButton onClick={onClose}>Cancel</IconButton>

                    <Button onClick={onClose}>Submit for Approval</Button>
                </div>
            </div>
        </Modal>
    );
}
