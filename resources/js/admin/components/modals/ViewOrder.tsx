// import Modal from '@/shared/sharedcomponents/modals/Modal';
// import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';

// import ClockIcon from '@/shared/images/icons/adClock.svg?react';
// import ClipboardIcon from '@/shared/images/icons/clipboard1.svg?react';
// import EyeIcon from '@/shared/images/icons/eyeIcon.svg?react';
// import UserIcon from '@/shared/images/icons/user.svg?react';

// export interface OrderItem {
//     name: string;
//     modifier?: string;
//     price: number;
// }

// export interface ViewOrderData {
//     orderId: string | number;
//     orderType?: string;
//     status?: string;
//     items?: OrderItem[];
//     subTotal?: number;
//     taxPercent?: number;
//     taxAmount?: number;
//     totalPayment?: number;
//     currency?: string;
//     customer?: {
//         name?: string;
//         phone?: string;
//         address?: string;
//     };
//     timeline?: string[];
// }

// interface ViewOrderProps {
//     isOpen: boolean;
//     onClose: () => void;
//     data: ViewOrderData;
//     onResendToKitchen?: () => void;
//     onIssueRefund?: () => void;
//     onPrintReceipt?: () => void;
// }

// const statusVariantMap: Record<string, BadgeVariant> = {
//     Completed: 'success',
//     Pending: 'warning',
//     Cancelled: 'error',
//     Refunded: 'warning',
// };

// export default function ViewOrder({
//     isOpen,
//     onClose,
//     data,
//     onResendToKitchen,
//     onIssueRefund,
//     onPrintReceipt,
// }: ViewOrderProps) {
//     const items = data.items ?? [];
//     const subTotal = data.subTotal ?? 0;
//     const taxPercent = data.taxPercent ?? 0;
//     const taxAmount = data.taxAmount ?? 0;
//     const totalPayment = data.totalPayment ?? 0;
//     const currency = data.currency ?? 'KWD';
//     const timeline = data.timeline ?? [];
//     const customer = data.customer ?? {};

//     return (
//         <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
//             <div className="p-6 sm:p-8">
//                 {/* Header */}
//                 <div className="mb-5">
//                     <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
//                         <EyeIcon className="h-5 w-5 text-gray-700" />
//                     </div>
//                     <h2 className="text-base font-semibold text-gray-900">
//                         Order ID: #{data.orderId}
//                     </h2>
//                     <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
//                         {data.orderType ?? 'Dine-In'}
//                         {data.status && (
//                             <Badge
//                                 variant={
//                                     statusVariantMap[data.status] ?? 'gray'
//                                 }
//                                 withDot
//                                 rounded="md"
//                             >
//                                 {data.status}
//                             </Badge>
//                         )}
//                     </div>
//                 </div>

//                 {/* Two-column card */}
//                 <div className="flex gap-4 rounded-xl border border-gray-200 p-5">
//                     {/* Left: Order Breakdown */}
//                     <div className="flex-1">
//                         <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-gray-900">
//                             <ClipboardIcon className="h-5 w-5 text-gray-700" />
//                             Order Breakdown
//                         </h3>

//                         <div className="space-y-3">
//                             {items.map((item, idx) => (
//                                 <div key={idx}>
//                                     <div className="flex items-center justify-between">
//                                         <span className="text-sm font-medium text-gray-900">
//                                             {item.name}
//                                         </span>
//                                         <span className="text-sm text-gray-700">
//                                             {item.price.toFixed(3)}
//                                         </span>
//                                     </div>
//                                     {item.modifier && (
//                                         <p className="mt-0.5 text-xs text-gray-400">
//                                             {item.modifier}
//                                         </p>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>

//                         <hr className="my-4 border-gray-200" />

//                         <div className="space-y-2">
//                             <div className="flex items-center justify-between text-sm text-gray-500">
//                                 <span>Sub Total</span>
//                                 <span>{subTotal.toFixed(3)}</span>
//                             </div>
//                             <div className="flex items-center justify-between text-sm text-gray-500">
//                                 <span>Tax {taxPercent}%</span>
//                                 <span>{taxAmount.toFixed(3)}</span>
//                             </div>
//                             <div className="flex items-center justify-between text-sm font-bold text-gray-900">
//                                 <span>Total Payment</span>
//                                 <span>
//                                     {currency} {totalPayment.toFixed(3)}
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Vertical divider */}
//                     <div className="w-px bg-gray-200" />

//                     {/* Right: Customer Profile + Order Timeline */}
//                     <div className="w-56 shrink-0 space-y-6">
//                         <div>
//                             <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-gray-900">
//                                 <UserIcon className="h-5 w-5 text-gray-700" />
//                                 Customer Profile
//                             </h3>
//                             <div className="space-y-3">
//                                 <div>
//                                     <p className="text-xs text-gray-400">
//                                         Name
//                                     </p>
//                                     <p className="text-sm font-semibold text-gray-900">
//                                         {customer.name ?? '-'}
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <p className="text-xs text-gray-400">
//                                         Phone No.
//                                     </p>
//                                     <p className="text-sm font-semibold text-gray-900">
//                                         {customer.phone ?? '-'}
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <p className="text-xs text-gray-400">
//                                         Address
//                                     </p>
//                                     <p className="text-sm font-semibold text-gray-900">
//                                         {customer.address ?? '-'}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-gray-900">
//                                 <ClockIcon className="h-5 w-5 text-gray-700" />
//                                 Order Timeline
//                             </h3>
//                             <ul className="space-y-1.5">
//                                 {timeline.map((event, idx) => (
//                                     <li
//                                         key={idx}
//                                         className="flex items-start gap-1.5 text-sm text-gray-600"
//                                     >
//                                         <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                                         {event}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <div className="flex items-center justify-between border-t border-gray-200 px-6 py-5">
//                 <button
//                     onClick={onResendToKitchen}
//                     className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
//                 >
//                     Re-Send to Kitchen
//                 </button>
//                 <div className="flex gap-3">
//                     <IconButton onClick={onIssueRefund}>
//                         Issue Refund
//                     </IconButton>
//                     <Button onClick={onPrintReceipt}>Print Receipt</Button>
//                 </div>
//             </div>
//         </Modal>
//     );
// }

// import Modal from '@/shared/sharedcomponents/modals/Modal';
// import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';

// import ClockIcon from '@/shared/images/icons/adClock.svg?react';
// import ClipboardIcon from '@/shared/images/icons/clipboard1.svg?react';
// import EyeIcon from '@/shared/images/icons/eyeIcon.svg?react';
// import UserIcon from '@/shared/images/icons/user.svg?react';

// export interface OrderItem {
//     name: string;
//     modifier?: string;
//     price: number;
// }

// export interface ViewOrderData {
//     orderId: string | number;
//     orderType?: string;
//     status?: string;
//     items?: OrderItem[];
//     subTotal?: number;
//     taxPercent?: number;
//     taxAmount?: number;
//     totalPayment?: number;
//     currency?: string;
//     customer?: {
//         name?: string;
//         phone?: string;
//         address?: string;
//     };
//     timeline?: string[];
// }

// interface ViewOrderProps {
//     isOpen: boolean;
//     onClose: () => void;
//     data: ViewOrderData;
//     onResendToKitchen?: () => void;
//     onIssueRefund?: () => void;
//     onPrintReceipt?: () => void;
// }

// const statusVariantMap: Record<string, BadgeVariant> = {
//     Completed: 'success',
//     Pending: 'warning',
//     Cancelled: 'error',
//     Refunded: 'warning',
// };

// export default function ViewOrder({
//     isOpen,
//     onClose,
//     data,
//     onResendToKitchen,
//     onIssueRefund,
//     onPrintReceipt,
// }: ViewOrderProps) {
//     const items = data.items ?? [];
//     const subTotal = data.subTotal ?? 0;
//     const taxPercent = data.taxPercent ?? 0;
//     const taxAmount = data.taxAmount ?? 0;
//     const totalPayment = data.totalPayment ?? 0;
//     const currency = data.currency ?? 'KWD';
//     const timeline = data.timeline ?? [];
//     const customer = data.customer ?? {};

//     return (
//         <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
//             {/* ── Header ─────────────────────────────────────────── */}
//             <div className="px-6 pt-6 pb-4 sm:px-8 sm:pt-8">
//                 {/* Icon */}
//                 <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
//                     <EyeIcon className="h-5 w-5 text-gray-700" />
//                 </div>

//                 {/* Title */}
//                 <h2 className="text-base font-semibold text-gray-900">
//                     Order ID: #{data.orderId}
//                 </h2>

//                 {/* Sub-title row */}
//                 <div className="mt-1 flex items-center gap-3">
//                     <span className="text-sm text-gray-500">
//                         {data.orderType ?? 'Dine-In'}
//                     </span>
//                     {data.status && (
//                         <Badge
//                             variant={statusVariantMap[data.status] ?? 'gray'}
//                             withDot
//                             rounded="md"
//                         >
//                             {data.status}
//                         </Badge>
//                     )}
//                 </div>
//             </div>

//             {/* ── Body card (outer gray wrapper) ─────────────────── */}
//             <div className="mx-6 mb-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
//                 <div className="flex gap-3">
//                     {/* ── LEFT: Order Breakdown ─────────────────────── */}
//                     <div className="flex-1 rounded-xl bg-white p-5 shadow-sm">
//                         {/* Section heading */}
//                         <div className="mb-4 flex items-center gap-2">
//                             <ClipboardIcon className="h-5 w-5 text-gray-700" />
//                             <h3 className="text-base font-semibold text-gray-900">
//                                 Order Breakdown
//                             </h3>
//                         </div>

//                         {/* Items */}
//                         <div className="space-y-3 pl-1">
//                             {items.map((item, idx) => (
//                                 <div key={idx}>
//                                     <div className="flex items-baseline justify-between">
//                                         <span className="text-sm font-medium text-gray-900">
//                                             {item.name}
//                                         </span>
//                                         <span className="ml-4 shrink-0 text-sm text-gray-700">
//                                             {item.price.toFixed(3)}
//                                         </span>
//                                     </div>
//                                     {item.modifier && (
//                                         <p className="mt-0.5 text-xs text-gray-400">
//                                             {item.modifier}
//                                         </p>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Divider */}
//                         <hr className="my-4 border-gray-200" />

//                         {/* Totals */}
//                         <div className="space-y-2">
//                             <div className="flex items-center justify-between">
//                                 <span className="text-sm text-gray-500">
//                                     Sub Total
//                                 </span>
//                                 <span className="text-sm text-gray-700">
//                                     {subTotal.toFixed(3)}
//                                 </span>
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <span className="text-sm text-gray-500">
//                                     Tax {taxPercent}%
//                                 </span>
//                                 <span className="text-sm text-gray-700">
//                                     {taxAmount.toFixed(3)}
//                                 </span>
//                             </div>
//                             <div className="flex items-center justify-between pt-0.5">
//                                 <span className="text-sm font-bold text-gray-900">
//                                     Total Payment
//                                 </span>
//                                 <span className="text-sm font-bold text-gray-900">
//                                     {currency} {totalPayment.toFixed(3)}
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ── RIGHT: Customer Profile + Timeline ────────── */}
//                     <div className="w-56 shrink-0 rounded-xl bg-white p-5 shadow-sm">
//                         {/* Customer Profile */}
//                         <div className="mb-5">
//                             <div className="mb-3 flex items-center gap-2">
//                                 <UserIcon className="h-5 w-5 text-gray-700" />
//                                 <h3 className="text-base font-semibold text-gray-900">
//                                     Customer Profile
//                                 </h3>
//                             </div>

//                             <div className="space-y-3">
//                                 <div>
//                                     <p className="text-xs text-gray-400">
//                                         Name
//                                     </p>
//                                     <p className="text-sm font-semibold text-gray-900">
//                                         {customer.name ?? '-'}
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <p className="text-xs text-gray-400">
//                                         Phone No.
//                                     </p>
//                                     <p className="text-sm font-semibold text-gray-900">
//                                         {customer.phone ?? '-'}
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <p className="text-xs text-gray-400">
//                                         Address
//                                     </p>
//                                     <p className="text-sm font-semibold text-gray-900">
//                                         {customer.address ?? '-'}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Divider between profile and timeline */}
//                         <hr className="mb-5 border-gray-100" />

//                         {/* Order Timeline */}
//                         <div>
//                             <div className="mb-3 flex items-center gap-2">
//                                 <ClockIcon className="h-5 w-5 text-gray-700" />
//                                 <h3 className="text-base font-semibold text-gray-900">
//                                     Order Timeline
//                                 </h3>
//                             </div>

//                             <ul className="space-y-2">
//                                 {timeline.map((event, idx) => (
//                                     <li
//                                         key={idx}
//                                         className="flex items-start gap-2 text-sm text-gray-600"
//                                     >
//                                         <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
//                                         {event}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* ── Footer ─────────────────────────────────────────── */}
//             <div className="flex items-center justify-between border-t border-gray-200 px-6 py-5 sm:px-8">
//                 {/* Left: Re-Send to Kitchen */}
//                 <button
//                     onClick={onResendToKitchen}
//                     className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
//                 >
//                     Re-Send to Kitchen
//                 </button>

//                 {/* Right: Issue Refund + Print Receipt */}
//                 <div className="flex items-center gap-3">
//                     <IconButton onClick={onIssueRefund}>
//                         Issue Refund
//                     </IconButton>
//                     <Button onClick={onPrintReceipt}>Print Receipt</Button>
//                 </div>
//             </div>
//         </Modal>
//     );
// }

import Modal from '@/shared/sharedcomponents/modals/Modal';
import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
import Button from '@/shared/sharedcomponents/ui/Button';

import ClockIcon from '@/shared/images/icons/adClock.svg?react';
import ClipboardIcon from '@/shared/images/icons/clipboard1.svg?react';
import EyeIcon from '@/shared/images/icons/eyeIcon.svg?react';
import UserIcon from '@/shared/images/icons/user.svg?react';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface OrderItem {
    name: string;
    modifier?: string;
    price: number;
}

export interface ViewOrderData {
    orderId: string | number;
    orderType?: string;
    status?: string;
    items?: OrderItem[];
    subTotal?: number;
    taxPercent?: number;
    taxAmount?: number;
    totalPayment?: number;
    currency?: string;
    customer?: {
        name?: string;
        phone?: string;
        address?: string;
    };
    timeline?: string[];
}

interface ViewOrderProps {
    isOpen: boolean;
    onClose: () => void;
    data?: ViewOrderData; // ✅ made optional so hardcoded fallback kicks in
    onResendToKitchen?: () => void;
    onIssueRefund?: () => void;
    onPrintReceipt?: () => void;
}

// ── Status badge map ──────────────────────────────────────────────────────────

const statusVariantMap: Record<string, BadgeVariant> = {
    Completed: 'success',
    Pending: 'warning',
    Cancelled: 'error',
    Refunded: 'warning',
};

// ── Hardcoded fallback data (matches the design exactly) ──────────────────────

const FALLBACK_DATA: ViewOrderData = {
    orderId: '1028',
    orderType: 'Dine-In',
    status: 'Completed',
    items: [
        {
            name: 'x2 Lemon Butter Dory',
            modifier: 'x1 Extra Sauce',
            price: 101.0,
        },
        {
            name: 'x2 Lemon Butter Dory',
            modifier: 'x1 Extra Sauce',
            price: 101.0,
        },
        {
            name: 'x2 Lemon Butter Dory',
            modifier: 'x1 Extra Sauce',
            price: 101.0,
        },
        {
            name: 'x2 Lemon Butter Dory',
            modifier: 'x1 Extra Sauce',
            price: 101.0,
        },
    ],
    subTotal: 216.99,
    taxPercent: 12,
    taxAmount: 25.56,
    totalPayment: 241.55,
    currency: 'KWD',
    customer: {
        name: 'Ahamed Ali',
        phone: '+9656665554',
        address: '-',
    },
    timeline: [
        '05:00 PM: Order Created',
        '05:02 PM: Sent to Kitchen',
        '05:15 PM: Order Completed.',
    ],
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function ViewOrder({
    isOpen,
    onClose,
    data = FALLBACK_DATA, // ✅ fallback data used if nothing is passed in
    onResendToKitchen,
    onIssueRefund,
    onPrintReceipt,
}: ViewOrderProps) {
    const items = data.items ?? FALLBACK_DATA.items!;
    const subTotal = data.subTotal ?? FALLBACK_DATA.subTotal!;
    const taxPercent = data.taxPercent ?? FALLBACK_DATA.taxPercent!;
    const taxAmount = data.taxAmount ?? FALLBACK_DATA.taxAmount!;
    const totalPayment = data.totalPayment ?? FALLBACK_DATA.totalPayment!;
    const currency = data.currency ?? FALLBACK_DATA.currency!;
    const timeline = data.timeline ?? FALLBACK_DATA.timeline!;
    const customer = data.customer ?? FALLBACK_DATA.customer!;

    // strip any accidental leading '#' so we never get '##1028'
    const orderId = String(data.orderId ?? FALLBACK_DATA.orderId).replace(
        /^#/,
        '',
    );

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* ── Header ───────────────────────────────────────── */}
            <div className="px-7 pt-6 pb-4">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                    <EyeIcon className="h-5 w-5 text-gray-700" />
                </div>

                <h2 className="text-[15px] font-semibold text-gray-900">
                    Order ID: #{orderId}
                </h2>

                <div className="mt-1.5 flex items-center gap-3">
                    <span className="text-sm text-gray-500">
                        {data.orderType ?? FALLBACK_DATA.orderType}
                    </span>
                    {(data.status ?? FALLBACK_DATA.status) && (
                        <Badge
                            variant={
                                statusVariantMap[
                                    data.status ?? FALLBACK_DATA.status!
                                ] ?? 'gray'
                            }
                            withDot
                            rounded="md"
                        >
                            {data.status ?? FALLBACK_DATA.status}
                        </Badge>
                    )}
                </div>
            </div>

            {/* ── Body ─────────────────────────────────────────── */}
            <div className="mx-4 mb-4 rounded-xl border border-gray-200 bg-gray-50 p-3.5">
                <div className="flex gap-3">
                    {/* LEFT: Order Breakdown */}
                    <div className="flex-1 rounded-xl border border-gray-100 bg-white p-[18px]">
                        <div className="mb-4 flex items-center gap-2">
                            <ClipboardIcon className="h-[17px] w-[17px] text-gray-700" />
                            <h3 className="text-sm font-semibold text-gray-900">
                                Order Breakdown
                            </h3>
                        </div>

                        <div className="space-y-2.5 pl-1">
                            {items.map((item: OrderItem, idx: number) => (
                                <div key={idx}>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-[13px] font-medium text-gray-900">
                                            {item.name}
                                        </span>
                                        <span className="ml-3 shrink-0 text-[13px] text-gray-500">
                                            {item.price.toFixed(3)}
                                        </span>
                                    </div>
                                    {item.modifier && (
                                        <p className="mt-0.5 text-xs text-gray-400">
                                            {item.modifier}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <hr className="my-4 border-gray-200" />

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[13px] text-gray-500">
                                    Sub Total
                                </span>
                                <span className="text-[13px] text-gray-500">
                                    {subTotal.toFixed(3)}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[13px] text-gray-500">
                                    Tax {taxPercent}%
                                </span>
                                <span className="text-[13px] text-gray-500">
                                    {taxAmount.toFixed(3)}
                                </span>
                            </div>
                            <div className="flex items-center justify-between pt-0.5">
                                <span className="text-[13px] font-bold text-gray-900">
                                    Total Payment
                                </span>
                                <span className="text-[13px] font-bold text-gray-900">
                                    {currency} {totalPayment.toFixed(3)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Customer Profile + Timeline */}
                    <div className="w-[220px] shrink-0 rounded-xl border border-gray-100 bg-white p-[18px]">
                        {/* Customer Profile */}
                        <div className="mb-[18px]">
                            <div className="mb-3.5 flex items-center gap-2">
                                <UserIcon className="h-[17px] w-[17px] text-gray-700" />
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Customer Profile
                                </h3>
                            </div>
                            <div className="space-y-2.5">
                                <div>
                                    <p className="text-[11px] text-gray-400">
                                        Name
                                    </p>
                                    <p className="text-[13px] font-semibold text-gray-900">
                                        {customer.name ?? '-'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400">
                                        Phone No.
                                    </p>
                                    <p className="text-[13px] font-semibold text-gray-900">
                                        {customer.phone ?? '-'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400">
                                        Address
                                    </p>
                                    <p className="text-[13px] font-semibold text-gray-900">
                                        {customer.address ?? '-'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className="mb-[18px] border-gray-100" />

                        {/* Order Timeline */}
                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <ClockIcon className="h-[17px] w-[17px] text-gray-700" />
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Order Timeline
                                </h3>
                            </div>
                            <ul className="space-y-2">
                                {timeline.map((event: string, idx: number) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-xs text-gray-500"
                                    >
                                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                                        {event}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Footer ───────────────────────────────────────── */}
            <div className="flex items-center justify-between border-t border-gray-200 px-7 py-4">
                <button
                    onClick={onResendToKitchen}
                    className="text-[13px] font-medium text-gray-500 transition-colors hover:text-gray-900"
                >
                    Re-Send to Kitchen
                </button>

                <div className="flex items-center gap-2.5">
                    <button
                        onClick={onIssueRefund}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-[13px] font-medium text-gray-800 transition-colors hover:bg-gray-50"
                    >
                        Issue Refund
                    </button>
                    <Button onClick={onPrintReceipt}>Print Receipt</Button>
                </div>
            </div>
        </Modal>
    );
}
