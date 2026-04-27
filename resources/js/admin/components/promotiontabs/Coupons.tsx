import Trash from '@/shared/images/icons/delIcon.svg?react';
import search from '@/shared/images/icons/inputSearch.svg';
import Plus from '@/shared/images/icons/plus.svg?react';
import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input } from '@/shared/sharedcomponents/ui/FormElements';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import ActionButton from '../ActionButton';
import AddNewCoupon, { type CouponFormData } from '../modals/AddNewCoupon';
import EditCoupon from '../modals/EditCoupon';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '../Table';
const SAMPLE_COUPON: CouponFormData = {
    couponName: 'Summer Shake',
    discountValue: 15,
    startDate: '2025-09-04',
    endDate: '2025-09-04',
    minimumOrderAmount: '5000',
    scope: 'entire_order',
    eligibleItems: [],
};
export default function Coupons() {
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedSource, setSelectedSource] = useState('all');
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editData, setEditData] = useState<CouponFormData | null>(null);
    const couponsData = [
        {
            id: 1,
            couponDetail: 'Summer Shake',
            couponValue: '15% OFF',
            couponRule: 'Min: 5.000 KD',
            validUntil: '04 Sep 2025',
            status: 'Active',
        },
        {
            id: 2,
            couponDetail: 'Eid Special',
            couponValue: '25% OFF',
            couponRule: 'Min: 5.000 KWD',
            validUntil: '03 Sep - 03 Oct',
            status: 'Scheduled',
        },
        {
            id: 3,
            couponDetail: 'Fairy Discount',
            couponValue: '15% OFF',
            couponRule: 'No Min Order',
            validUntil: '05 Sep 2025',
            status: 'Active',
        },
        {
            id: 4,
            couponDetail: 'Dinner Deal',
            couponValue: '15% OFF',
            couponRule: 'Min: 10.000 KWD',
            validUntil: '04 Sep 2025',
            status: 'Active',
        },
        {
            id: 5,
            couponDetail: 'Dinner Deal',
            couponValue: '15% OFF',
            couponRule: 'Min: 10.000 KWD',
            validUntil: '04 Sep - 04 Oct',
            status: 'Expired',
        },
    ];
    const statusVariantMap: Record<string, BadgeVariant> = {
        Active: 'success', // Renders the green badge
        Scheduled: 'blue', // Renders the red badge
        Expired: 'warning', // Renders the orange/yellow badge
    };
    return (
        <div>
            {/**Header */}
            <div className="flex justify-between">
                <div className="w-1/4">
                    <Input
                        placeholder="Search Coupon Name or Code..."
                        icon={search}
                    />
                </div>
                <div className="flex gap-4">
                    <CustomDropdown
                        label=""
                        options={[
                            {
                                label: (
                                    <span className="font-medium text-gray-700">
                                        Status: All
                                    </span>
                                ),
                                value: 'all',
                            },
                            { label: 'Completed', value: 'completed' },
                            { label: 'Cancelled', value: 'cancelled' },
                            { label: 'Refunded', value: 'refunded' },
                        ]}
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                        placeholder=""
                    />
                    <CustomDropdown
                        label=""
                        options={[
                            {
                                label: (
                                    <span className="font-medium text-gray-700">
                                        Source: All
                                    </span>
                                ),
                                value: 'all',
                            },
                            { label: 'Dine-in', value: 'dine-in' },
                            { label: 'Take-Away', value: 'take-away' },
                            { label: 'Delivery', value: 'delivery' },
                            { label: 'Quick Order', value: 'quick order' },
                        ]}
                        value={selectedSource}
                        onChange={setSelectedSource}
                        placeholder=""
                    />
                    <Button onClick={() => setIsAddOpen(true)}>
                        <Plus />
                        Add Coupon
                    </Button>
                </div>
            </div>
            {/**Table */}
            <div className="pt-12">
                <TableContainer>
                    <Table>
                        <TableHeader>
                            <TableHead>Coupon Details</TableHead>
                            <TableHead>Value (Discount + Rules)</TableHead>
                            <TableHead>Valid Until</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {couponsData.map((coupon) => (
                                <TableRow key={coupon.id}>
                                    <TableCell className="font-medium text-gray-800">
                                        {coupon.couponDetail}
                                    </TableCell>
                                    <TableCell>
                                        <p className="font-medium text-gray-800">
                                            {coupon.couponValue}
                                        </p>
                                        <p>{coupon.couponRule}</p>
                                    </TableCell>
                                    <TableCell className="font-medium text-gray-800">
                                        {coupon.validUntil}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                statusVariantMap[
                                                    coupon.status
                                                ] || 'gray'
                                            }
                                            withDot={true}
                                            rounded="md"
                                        >
                                            {coupon.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        <ActionButton
                                            onClick={() =>
                                                setEditData(SAMPLE_COUPON)
                                            }
                                        >
                                            <Pencil className="h-4 w-4 text-iconColor" />
                                        </ActionButton>
                                        <ActionButton>
                                            <Trash className="h-4 w-4 text-iconColor" />
                                        </ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <AddNewCoupon
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onConfirm={(data) => {
                    console.log('Created:', data);
                    setIsAddOpen(false);
                }}
            />

            <EditCoupon
                isOpen={!!editData}
                onClose={() => setEditData(null)}
                onConfirm={(data) => {
                    console.log('Saved:', data);
                    setEditData(null);
                }}
                // initialData={editData!}
                initialData={editData!}
            />
        </div>
    );
}
