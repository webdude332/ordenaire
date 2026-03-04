import Modal from '@/components/Modal';
import RadioGroup from '@/components/ui/RadioGroup';
import BookmarkIcon from '@/images/icons/detailsIcon.svg?react';
import Dp from '@/images/icons/pizzaPalaceDp.svg?react';
import { Bold, Image, Italic, Link, Underline } from 'lucide-react';
import { useMemo, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface BillingActionsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onChargeNow: (data: BillingActionData) => void;
    item?: {
        businessName: string;
        busId: string;
        currentPlan: string;
        chargeRule: string;
        description: string;
        date: string;
        originalAmount: number;
        currency?: string;
    };
}

interface BillingActionData {
    discountType: 'percentage' | 'amount';
    discountValue: string;
    finalAmount: number;
    note: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BillingActionsModal({
    isOpen,
    onClose,
    onChargeNow,
    item,
}: BillingActionsModalProps) {
    const defaultItem = {
        businessName: 'PizzaPalace',
        busId: 'BIZ-2050',
        currentPlan: 'Pro (Monthly)',
        chargeRule: 'Active Staff',
        description: '7 Users (Limit: 5)',
        date: '05 Jan 2026',
        originalAmount: 2.0,
        currency: 'KWD',
    };

    const data = item ?? defaultItem;
    const [isApplied, setIsApplied] = useState(false);

    const [discountType, setDiscountType] = useState<'percentage' | 'amount'>(
        'percentage',
    );
    const [discountValue, setDiscountValue] = useState('50');
    const [note, setNote] = useState('');

    const { discountAmount, finalAmount } = useMemo(() => {
        const val = parseFloat(discountValue) || 0;
        let discount = 0;
        if (discountType === 'percentage') {
            discount = (data.originalAmount * val) / 100;
        } else {
            discount = Math.min(val, data.originalAmount);
        }
        return {
            discountAmount: discount.toFixed(3),
            finalAmount: (data.originalAmount + discount).toFixed(3),
        };
    }, [discountType, discountValue, data.originalAmount]);

    const handleChargeNow = () => {
        onChargeNow({
            discountType,
            discountValue,
            finalAmount: parseFloat(finalAmount),
            note,
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ─────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <BookmarkIcon className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Billing Actions
                    </h2>
                </div>

                <div className="space-y-5">
                    {/* ── Item Details ────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-base font-semibold text-gray-900">
                            Item Details
                        </h3>

                        <div className="rounded-xl border border-[#D1F0A2] bg-[#F4FFEB] p-4">
                            <div className="flex gap-3">
                                {/* Left: Logo */}
                                <Dp className="h-10 w-10 flex-shrink-0 rounded-full" />

                                {/* Right: Content Wrapper (Contains BOTH rows) */}
                                <div className="flex w-full flex-col gap-4">
                                    {/* Row 1: Business Name + Current Plan */}
                                    <div className="grid grid-cols-3">
                                        <div>
                                            <p className="text-xs text-gray-500">
                                                Business Name
                                            </p>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {data.businessName} •{' '}
                                                {data.busId}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">
                                                Current Plan
                                            </p>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {data.currentPlan}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Row 2: Charge Rule + Description + Date */}
                                    <div className="grid grid-cols-3">
                                        <div>
                                            <p className="text-xs text-gray-500">
                                                Charge Rule
                                            </p>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {data.chargeRule}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">
                                                Description
                                            </p>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {data.description}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">
                                                Date
                                            </p>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {data.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Payment Summary ──────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-base font-semibold text-gray-900">
                            Payment Summary
                        </h3>

                        {/* Original Amount */}
                        <div className="mb-4 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">
                                Original Amount
                            </span>
                            <span className="text-sm font-semibold text-gray-900">
                                {data.originalAmount.toFixed(3)} {data.currency}
                            </span>
                        </div>

                        {/* Discount type radios */}
                        <div className="mb-3">
                            <RadioGroup
                                name="discount_type"
                                value={discountType}
                                onChange={(val) =>
                                    setDiscountType(
                                        val as 'percentage' | 'amount',
                                    )
                                }
                                options={[
                                    {
                                        value: 'percentage',
                                        label: 'Percentage (%)',
                                    },
                                    { value: 'amount', label: 'Amount' },
                                ]}
                                gap="gap-6"
                            />
                        </div>

                        {/* Discount input + Apply + live value */}
                        <div className="mb-1 flex items-center gap-3">
                            <div className="flex overflow-hidden rounded-lg border border-gray-300">
                                <span className="border-r border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500">
                                    {discountType === 'percentage'
                                        ? '%'
                                        : 'KWD'}
                                </span>
                                <input
                                    type="text"
                                    value={discountValue}
                                    onChange={(e) => {
                                        setDiscountValue(e.target.value);
                                        setIsApplied(false); // Reset when user types
                                    }}
                                    className="w-32 px-3 py-2.5 text-sm text-gray-900 focus:outline-none"
                                />
                            </div>

                            {/* Updated Apply Button */}
                            <button
                                onClick={() => {
                                    // Your apply calculation logic goes here
                                    setIsApplied(true);
                                }}
                                disabled={isApplied}
                                className={`flex items-center gap-1 text-sm font-semibold ${
                                    isApplied
                                        ? 'cursor-default text-[#7AB621]' // No underline, default cursor, keeps the green color for success
                                        : 'cursor-pointer text-[#7AB621] hover:underline' // Original state
                                }`}
                            >
                                {isApplied && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                                {isApplied ? 'Applied' : 'Apply'}
                            </button>

                            <span className="ml-auto text-sm font-semibold text-gray-900">
                                -{discountAmount} {data.currency}
                            </span>
                        </div>

                        <div className="my-3 border-t border-gray-200" />

                        {/* Final Charge Amount */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">
                                Final Charge Amount
                            </span>
                            <span className="text-sm font-semibold text-gray-900">
                                {finalAmount} {data.currency}
                            </span>
                        </div>
                    </div>

                    {/* ── Internal Note ────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-base font-semibold text-gray-900">
                            Internal Note (For Approver)
                        </h3>

                        {/* Formatting toolbar */}
                        <div className="mb-2 flex items-center gap-1 border-b border-gray-200 pb-2">
                            {[
                                { Icon: Bold },
                                { Icon: Italic },
                                { Icon: Underline },
                            ].map(({ Icon }, i) => (
                                <button
                                    key={i}
                                    className="rounded p-1.5 text-gray-500 hover:bg-gray-100"
                                >
                                    <Icon className="h-4 w-4" />
                                </button>
                            ))}
                            <div className="mx-1 h-4 w-px bg-gray-300" />
                            {[{ Icon: Link }, { Icon: Image }].map(
                                ({ Icon }, i) => (
                                    <button
                                        key={i}
                                        className="rounded p-1.5 text-gray-500 hover:bg-gray-100"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </button>
                                ),
                            )}
                        </div>

                        <textarea
                            rows={4}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="e.g., Approved based on the renewal agreement discussed with the client."
                            className="w-full resize-none rounded-lg border border-gray-300 p-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleChargeNow}>
                    Charge Now
                </Button>
            </div>
        </Modal>
    );
}
