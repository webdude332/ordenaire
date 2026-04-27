import Button from '@/shared/sharedcomponents/ui/Button';
import { useState } from 'react';
import AddNewCoupon, { type CouponFormData } from './AddNewCoupon';
import EditCoupon from './EditCoupon';

// Mock existing coupons — replace with your real data / API
const INITIAL_COUPONS: (CouponFormData & { id: number })[] = [
    {
        id: 1,
        couponName: 'Summer Shake',
        discountValue: 15,
        startDate: '2025-09-04',
        endDate: '2025-09-04',
        minimumOrderAmount: '5000',
        scope: 'entire_order',
        eligibleItems: [],
    },
];

export default function CreateNewCoupon() {
    const [coupons, setCoupons] = useState(INITIAL_COUPONS);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editTarget, setEditTarget] = useState<
        (CouponFormData & { id: number }) | null
    >(null);

    const handleAdd = (data: CouponFormData) => {
        setCoupons((prev) => [...prev, { ...data, id: Date.now() }]);
    };

    const handleEdit = (data: CouponFormData) => {
        if (!editTarget) return;
        setCoupons((prev) =>
            prev.map((c) =>
                c.id === editTarget.id ? { ...data, id: c.id } : c,
            ),
        );
        setEditTarget(null);
    };

    return (
        <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-lg font-semibold text-gray-900">Coupons</h1>
                <Button onClick={() => setIsAddOpen(true)}>Add Coupon</Button>
            </div>

            {/* Simple coupon list */}
            <div className="space-y-3">
                {coupons.map((coupon) => (
                    <div
                        key={coupon.id}
                        className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
                    >
                        <div>
                            <p className="text-sm font-medium text-gray-900">
                                {coupon.couponName}
                            </p>
                            <p className="text-xs text-gray-400">
                                {coupon.discountValue}% off
                            </p>
                        </div>
                        <button
                            onClick={() => setEditTarget(coupon)}
                            className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                        >
                            Edit
                        </button>
                    </div>
                ))}
            </div>

            {/* ── Add Modal ── */}
            <AddNewCoupon
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onConfirm={handleAdd}
            />

            {/* ── Edit Modal ── */}
            {editTarget && (
                <EditCoupon
                    isOpen={!!editTarget}
                    onClose={() => setEditTarget(null)}
                    onConfirm={handleEdit}
                    initialData={editTarget}
                />
            )}
        </div>
    );
}
