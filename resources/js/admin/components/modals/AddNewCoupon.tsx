import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';
import { useState } from 'react';

import CalendarIcon from '@/shared/images/icons/calendar.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';

interface AddNewCouponProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: CouponFormData) => void;
}

export interface CouponFormData {
    couponName: string;
    discountValue: number;
    startDate: string;
    endDate: string;
    minimumOrderAmount: string;
    scope: 'entire_order' | 'specific_items';
    eligibleItems: string[];
}

// Replace / extend with your real menu items or fetch from API
const MOCK_ITEMS = [
    'Burgers',
    'Spicy Chicken Burger',
    'Classic Burger',
    'Veggie Burger',
    'Drinks',
    'Fries',
    'Desserts',
    'Salads',
];

const todayISO = new Date().toISOString().split('T')[0];

export default function AddNewCoupon({
    isOpen,
    onClose,
    onConfirm,
}: AddNewCouponProps) {
    const [couponName, setCouponName] = useState('');
    const [discountValue, setDiscountValue] = useState(0);
    const [startDate, setStartDate] = useState(todayISO);
    const [endDate, setEndDate] = useState('');
    const [minimumOrderAmount, setMinimumOrderAmount] = useState('');
    const [scope, setScope] = useState<'entire_order' | 'specific_items'>(
        'entire_order',
    );
    const [eligibleItems, setEligibleItems] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const filteredItems = MOCK_ITEMS.filter(
        (item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !eligibleItems.includes(item),
    );

    const addItem = (item: string) => {
        setEligibleItems((prev) => [...prev, item]);
        setSearchQuery('');
        setShowDropdown(false);
    };

    const removeItem = (item: string) => {
        setEligibleItems((prev) => prev.filter((i) => i !== item));
    };

    const resetForm = () => {
        setCouponName('');
        setDiscountValue(0);
        setStartDate(todayISO);
        setEndDate('');
        setMinimumOrderAmount('');
        setScope('entire_order');
        setEligibleItems([]);
        setSearchQuery('');
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = () => {
        onConfirm({
            couponName,
            discountValue,
            startDate,
            endDate,
            minimumOrderAmount,
            scope,
            eligibleItems,
        });
        handleClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <PlusIcon className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Create New Coupon
                    </h2>
                </div>

                <div className="space-y-5">
                    {/* ── Basic Details ── */}
                    <div>
                        <h3 className="mb-3 text-sm font-semibold text-gray-900">
                            Basic Details
                        </h3>
                        <div className="space-y-4 rounded-xl border border-gray-200 p-5">
                            {/* Row 1 – Coupon Name + Discount Value */}
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Coupon Name
                                        <span className="ml-0.5 text-primary">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        placeholder="e.g. Summer Special"
                                        value={couponName}
                                        onChange={(e) =>
                                            setCouponName(e.target.value)
                                        }
                                    />
                                    <p className="mt-1 text-xs text-gray-400">
                                        Internal name for managers.
                                    </p>
                                </div>

                                <div className="flex-1">
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Discount Value
                                        <span className="ml-0.5 text-primary">
                                            *
                                        </span>
                                    </Label>
                                    <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 focus-within:border-[#7AB621] focus-within:ring-1 focus-within:ring-[#7AB621]">
                                        <input
                                            type="number"
                                            value={discountValue}
                                            min={0}
                                            max={100}
                                            onChange={(e) =>
                                                setDiscountValue(
                                                    Number(e.target.value),
                                                )
                                            }
                                            className="flex-1 bg-white px-3 py-2.5 text-sm text-gray-700 focus:outline-none"
                                        />
                                        <span className="flex items-center self-stretch border-l border-gray-300 bg-white px-3 text-sm text-gray-400">
                                            %
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2 – Start Date + End Date */}
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Start Date
                                        <span className="ml-0.5 text-primary">
                                            *
                                        </span>
                                    </Label>
                                    <div className="relative">
                                        {/* <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) =>
                                                setStartDate(e.target.value)
                                            }
                                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                        /> */}
                                        <Input placeholder="04/27/2026" />
                                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                            <CalendarIcon className="h-4 w-4 text-gray-400" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        End Date
                                    </Label>
                                    <div className="relative">
                                        {/* <input
                                            type="date"
                                            value={endDate}
                                            onChange={(e) =>
                                                setEndDate(e.target.value)
                                            }
                                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                        /> */}
                                        <Input placeholder="mm/dd/yyyy" />
                                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                            <CalendarIcon className="h-4 w-4 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3 – Minimum Order Amount (half width) */}
                            <div className="w-1/2 pr-2">
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Minimum Order Amount (Optional)
                                </Label>
                                <Input
                                    type="number"
                                    placeholder="0.000"
                                    value={minimumOrderAmount}
                                    onChange={(e) =>
                                        setMinimumOrderAmount(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Applies to ── */}
                    <div>
                        <h3 className="mb-3 text-sm font-semibold text-gray-900">
                            Applies to
                        </h3>
                        <div className="space-y-4 rounded-xl border border-gray-200 p-5">
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-700">
                                    Scope
                                </p>
                                <RadioGroup
                                    name="add_coupon_scope"
                                    label=""
                                    value={scope}
                                    onChange={(val) =>
                                        setScope(
                                            val as
                                                | 'entire_order'
                                                | 'specific_items',
                                        )
                                    }
                                    options={[
                                        {
                                            value: 'entire_order',
                                            label: 'Entire Order',
                                        },
                                        {
                                            value: 'specific_items',
                                            label: 'Specific Items',
                                        },
                                    ]}
                                    gap="gap-6"
                                />
                            </div>

                            {scope === 'specific_items' && (
                                <div>
                                    <Label className="mb-2 text-sm font-medium text-gray-700">
                                        Eligible items
                                        <span className="ml-0.5 text-primary">
                                            *
                                        </span>
                                    </Label>
                                    <div className="space-y-3 rounded-lg border border-gray-200 p-3">
                                        <p className="text-xs text-gray-400">
                                            Search items to apply...
                                        </p>

                                        {/* Search input */}
                                        <div className="relative">
                                            <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 focus-within:border-[#7AB621] focus-within:ring-1 focus-within:ring-[#7AB621]">
                                                {/* Inline search icon — swap for your own if you have one */}
                                                <svg
                                                    className="h-4 w-4 shrink-0 text-gray-400"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    />
                                                </svg>
                                                <input
                                                    type="text"
                                                    placeholder="Search Items or Categories..."
                                                    value={searchQuery}
                                                    onChange={(e) => {
                                                        setSearchQuery(
                                                            e.target.value,
                                                        );
                                                        setShowDropdown(true);
                                                    }}
                                                    onFocus={() =>
                                                        setShowDropdown(true)
                                                    }
                                                    onBlur={() =>
                                                        setTimeout(
                                                            () =>
                                                                setShowDropdown(
                                                                    false,
                                                                ),
                                                            150,
                                                        )
                                                    }
                                                    className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                                                />
                                            </div>

                                            {/* Dropdown */}
                                            {showDropdown &&
                                                filteredItems.length > 0 && (
                                                    <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                                                        {filteredItems.map(
                                                            (item) => (
                                                                <button
                                                                    key={item}
                                                                    type="button"
                                                                    onMouseDown={() =>
                                                                        addItem(
                                                                            item,
                                                                        )
                                                                    }
                                                                    className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                                                >
                                                                    {item}
                                                                </button>
                                                            ),
                                                        )}
                                                    </div>
                                                )}
                                        </div>

                                        {/* Tags */}
                                        {eligibleItems.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {eligibleItems.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700"
                                                    >
                                                        {item}
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeItem(item)
                                                            }
                                                            className="text-gray-400 hover:text-gray-600"
                                                        >
                                                            {/* Inline X icon — swap for your own */}
                                                            <svg
                                                                className="h-3.5 w-3.5"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M6 18L18 6M6 6l12 12"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={handleClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Create Coupon
                </Button>
            </div>
        </Modal>
    );
}
