// import Emp from '@/shared/images/icons/empsheduling.svg?react';
// import Badge from '@/shared/sharedcomponents/ui/Badge';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';

// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/shared/sharedcomponents/ui/Table';
// import { useState } from 'react';
// import RequestUninstallModal from '../components/modals/RequestUninstallModal';

// // mode drives which variant of the page is shown
// type SubscriptionMode = 'active' | 'renew' | 'reactivate';

// interface SubscriptionDetailsProps {
//     mode?: SubscriptionMode;
// }

// const invoices = [
//     {
//         id: 'INV-2025-004',
//         date: '03 Oct 2025',
//         amount: 'KWD 5.000',
//         card: 'Visa ···· 1234',
//         status: 'failed' as const,
//     },
//     {
//         id: 'INV-2025-003',
//         date: '03 Sep 2025',
//         amount: 'KWD 5.000',
//         card: 'Visa ···· 1234',
//         status: 'paid' as const,
//     },
//     {
//         id: 'INV-2025-002',
//         date: '03 Aug 2025',
//         amount: 'KWD 5.000',
//         card: 'Visa ···· 1234',
//         status: 'paid' as const,
//     },
// ];

// const invoicesActive = [
//     {
//         id: 'INV-2025-002',
//         date: '03 Sep 2025',
//         amount: 'KWD 5.000',
//         card: 'Visa ···· 1234',
//         status: 'paid' as const,
//     },
//     {
//         id: 'INV-2025-003',
//         date: '03 Aug 2025',
//         amount: 'KWD 5.000',
//         card: 'Visa ···· 1234',
//         status: 'paid' as const,
//     },
//     {
//         id: 'INV-2025-004',
//         date: '03 Jul 2025',
//         amount: 'KWD 5.000',
//         card: 'Visa ···· 1234',
//         status: 'paid' as const,
//     },
// ];

// type InvoiceStatus = 'paid' | 'failed' | 'cancelled';

// function InvoiceStatusBadge({ status }: { status: InvoiceStatus }) {
//     if (status === 'paid')
//         return (
//             <Badge variant="success" withDot>
//                 Paid
//             </Badge>
//         );
//     if (status === 'failed')
//         return (
//             <Badge variant="error" withDot>
//                 Failed
//             </Badge>
//         );
//     return (
//         <Badge variant="warning" withDot>
//             Cancelled
//         </Badge>
//     );
// }

// export default function SubscriptionDetails({
//     mode = 'active',
// }: SubscriptionDetailsProps) {
//     const [isUninstallOpen, setIsUninstallOpen] = useState(false);

//     const isFailed = mode === 'renew';
//     const isExpired = mode === 'reactivate';
//     const isActive = mode === 'active';

//     const billingData = {
//         frequency: 'Monthly',
//         amount: 'KWD 5.000',
//         dateLabel: isActive
//             ? 'Next Billing Date'
//             : isExpired
//               ? 'Expired On'
//               : 'Overdue Since',
//         dateValue: '03 Oct 2025',
//         statusLabel: isActive
//             ? 'Active'
//             : isExpired
//               ? 'Expired'
//               : 'Payment Failed',
//         statusVariant: isActive ? 'success' : isExpired ? 'error' : 'warning',
//     } as const;

//     const displayInvoices = isActive ? invoicesActive : invoices;

//     return (
//         <div className="flex flex-1 flex-col gap-6">
//             {/* Alert banner */}
//             {isFailed && (
//                 <p className="text-sm font-medium text-orange-600">
//                     <span className="font-bold">Action Required:</span> Your
//                     automatic renewal payment failed. Please update your payment
//                     method to avoid service interruption.
//                 </p>
//             )}
//             {isExpired && (
//                 <p className="text-sm font-medium text-orange-600">
//                     <span className="font-bold">Service Suspended:</span> Your
//                     subscription has expired. Reactivate now to restore access
//                     to your data.
//                 </p>
//             )}

//             {/* Top actions */}
//             <div className="flex items-center justify-between">
//                 <IconButton href="/marketplace/my-apps">
//                     <svg
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                         />
//                     </svg>
//                     Back to My Apps
//                 </IconButton>

//                 {isExpired && <Button>Reactivate Subscription</Button>}
//             </div>

//             {/* App info + billing stats */}
//             <div className="rounded-xl border border-borderColor bg-white p-6 shadow-xs">
//                 {/* App header */}
//                 <div className="mb-5 flex items-center gap-4">
//                     <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center">
//                         <Emp className="h-14 w-14" />
//                     </div>
//                     <div>
//                         <h1 className="text-xl font-semibold text-gray-900">
//                             Employee Scheduling
//                         </h1>
//                         <p className="mt-1 flex items-center gap-1.5 text-base text-gray-500">
//                             By Ordinaire
//                             <a
//                                 href="#"
//                                 className="text-gray-400 transition-colors hover:text-gray-600"
//                             >
//                                 <svg
//                                     className="h-4 w-4"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                                     />
//                                 </svg>
//                             </a>
//                         </p>
//                     </div>
//                 </div>

//                 {/* Stats row */}
//                 <div className="grid grid-cols-4 divide-x divide-borderColor rounded-xl border border-borderColor">
//                     {[
//                         {
//                             label: 'Billing Frequency',
//                             value: billingData.frequency,
//                         },
//                         { label: 'Amount', value: billingData.amount },
//                         {
//                             label: billingData.dateLabel,
//                             value: billingData.dateValue,
//                         },
//                         {
//                             label: 'Current status',
//                             value: (
//                                 <Badge
//                                     variant={billingData.statusVariant}
//                                     withDot
//                                 >
//                                     {billingData.statusLabel}
//                                 </Badge>
//                             ),
//                         },
//                     ].map((stat, i) => (
//                         <div key={i} className="flex flex-col gap-2 p-4">
//                             <span className="text-sm text-gray-500">
//                                 {stat.label}
//                             </span>
//                             <span className="text-base font-semibold text-gray-900">
//                                 {stat.value}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Billing History */}
//             <div className="rounded-xl border border-borderColor bg-white shadow-xs">
//                 <div className="border-b border-borderColor px-6 py-4">
//                     <h2 className="text-lg font-semibold text-gray-900">
//                         Billing History
//                     </h2>
//                 </div>
//                 <Table>
//                     <TableHeader>
//                         <TableHead>Invoice ID</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead>Amount</TableHead>
//                         <TableHead>Status</TableHead>
//                         <TableHead>Actions</TableHead>
//                     </TableHeader>
//                     <TableBody>
//                         {displayInvoices.map((inv) => (
//                             <TableRow key={inv.id}>
//                                 <TableCell className="font-medium text-gray-900">
//                                     {inv.id}
//                                 </TableCell>
//                                 <TableCell className="text-gray-600">
//                                     {inv.date}
//                                 </TableCell>
//                                 <TableCell>
//                                     <div className="font-medium text-gray-900">
//                                         {inv.amount}
//                                     </div>
//                                     <div className="text-xs text-gray-500">
//                                         via {inv.card}
//                                     </div>
//                                 </TableCell>
//                                 <TableCell>
//                                     <InvoiceStatusBadge status={inv.status} />
//                                 </TableCell>
//                                 <TableCell>
//                                     {inv.status === 'failed' ? (
//                                         <Button className="gap-2 px-3 py-1.5 text-xs">
//                                             <svg
//                                                 className="h-3.5 w-3.5"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 stroke="currentColor"
//                                                 strokeWidth={2}
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                                                 />
//                                             </svg>
//                                             Pay Now
//                                         </Button>
//                                     ) : (
//                                         <IconButton className="gap-2 px-3 py-1.5 text-xs">
//                                             <svg
//                                                 className="h-3.5 w-3.5"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 stroke="currentColor"
//                                                 strokeWidth={2}
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                                                 />
//                                             </svg>
//                                             PDF
//                                         </IconButton>
//                                     )}
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </div>

//             {/* Bottom info box */}
//             <div className="rounded-xl border border-borderColor bg-white p-5 shadow-xs">
//                 <div className="flex items-start gap-3">
//                     <svg
//                         className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                     </svg>
//                     <div>
//                         <p className="text-sm font-semibold text-gray-900">
//                             {isActive || isFailed
//                                 ? 'Need to make change or cancel subscription?'
//                                 : 'Need help restoring your access?'}
//                         </p>
//                         <p className="mt-0.5 text-sm text-gray-500">
//                             {isActive || isFailed
//                                 ? 'To cancel your subscription or modify your plan, please contact our support team.'
//                                 : 'If you are having trouble reactivating your subscription, please contact our support team.'}
//                         </p>
//                         <div className="mt-3 flex items-center gap-3">
//                             <IconButton className="px-3 py-1.5 text-xs">
//                                 Contact Support
//                             </IconButton>
//                             {(isActive || isFailed) && (
//                                 <button
//                                     onClick={() => setIsUninstallOpen(true)}
//                                     className="cursor-pointer rounded-lg border border-red-300 px-3 py-1.5 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
//                                 >
//                                     Request Uninstall
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <RequestUninstallModal
//                 isOpen={isUninstallOpen}
//                 onClose={() => setIsUninstallOpen(false)}
//                 onSubmit={(reason, details) => {
//                     console.log('Uninstall requested:', { reason, details });
//                     setIsUninstallOpen(false);
//                 }}
//                 appName="Employee Scheduling"
//             />
//         </div>
//     );
// }

//new

import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import marketplaceIcon from '@/shared/images/icons/dashBaordSvg.svg';
import Emp from '@/shared/images/icons/empsheduling.svg?react';
import Badge from '@/shared/sharedcomponents/ui/Badge';
import Button from '@/shared/sharedcomponents/ui/Button';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/shared/sharedcomponents/ui/Table';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import RequestUninstallModal from '../components/modals/RequestUninstallModal';

type SubscriptionMode = 'active' | 'renew' | 'reactivate';

const invoices = [
    {
        id: 'INV-2025-004',
        date: '03 Oct 2025',
        amount: 'KWD 5.000',
        card: 'Visa ···· 1234',
        status: 'failed' as const,
    },
    {
        id: 'INV-2025-003',
        date: '03 Sep 2025',
        amount: 'KWD 5.000',
        card: 'Visa ···· 1234',
        status: 'paid' as const,
    },
    {
        id: 'INV-2025-002',
        date: '03 Aug 2025',
        amount: 'KWD 5.000',
        card: 'Visa ···· 1234',
        status: 'paid' as const,
    },
];

const invoicesActive = [
    {
        id: 'INV-2025-002',
        date: '03 Sep 2025',
        amount: 'KWD 5.000',
        card: 'Visa ···· 1234',
        status: 'paid' as const,
    },
    {
        id: 'INV-2025-003',
        date: '03 Aug 2025',
        amount: 'KWD 5.000',
        card: 'Visa ···· 1234',
        status: 'paid' as const,
    },
    {
        id: 'INV-2025-004',
        date: '03 Jul 2025',
        amount: 'KWD 5.000',
        card: 'Visa ···· 1234',
        status: 'paid' as const,
    },
];

type InvoiceStatus = 'paid' | 'failed' | 'cancelled';

function InvoiceStatusBadge({ status }: { status: InvoiceStatus }) {
    if (status === 'paid')
        return (
            <Badge variant="success" withDot>
                Paid
            </Badge>
        );
    if (status === 'failed')
        return (
            <Badge variant="error" withDot>
                Failed
            </Badge>
        );
    return (
        <Badge variant="warning" withDot>
            Cancelled
        </Badge>
    );
}

export default function SubscriptionDetails() {
    const { mode = 'active' } = usePage<{ mode: SubscriptionMode }>().props;
    const [isUninstallOpen, setIsUninstallOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);

    const isFailed = mode === 'renew';
    const isExpired = mode === 'reactivate';
    const isActive = mode === 'active';

    const billingData = {
        frequency: 'Monthly',
        amount: 'KWD 5.000',
        dateLabel: isActive
            ? 'Next Billing Date'
            : isExpired
              ? 'Expired On'
              : 'Overdue Since',
        dateValue: '03 Oct 2025',
        statusLabel: isActive
            ? 'Active'
            : isExpired
              ? 'Expired'
              : 'Payment Failed',
        statusVariant: isActive ? 'success' : isExpired ? 'error' : 'warning',
    } as const;

    const displayInvoices = isActive ? invoicesActive : invoices;

    const breadcrumbs = [
        { label: 'Marketplace', href: '/admin/marketplace', isActive: false },
        { label: 'My Apps', href: '/admin/marketplace', isActive: false },
        {
            label: isActive ? 'Manage' : isExpired ? 'Reactivate' : 'Renew Now',
            isActive: true,
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Subscription Details"
                    icon={marketplaceIcon}
                    breadcrumbs={breadcrumbs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    <div className="flex flex-1 flex-col gap-6">
                        {/* Alert banners */}
                        {isFailed && (
                            <p className="text-sm font-medium text-orange-600">
                                <span className="font-bold">
                                    Action Required:
                                </span>{' '}
                                Your automatic renewal payment failed. Please
                                update your payment method to avoid service
                                interruption.
                            </p>
                        )}
                        {isExpired && (
                            <p className="text-sm font-medium text-orange-600">
                                <span className="font-bold">
                                    Service Suspended:
                                </span>{' '}
                                Your subscription has expired. Reactivate now to
                                restore access to your data.
                            </p>
                        )}

                        {/* Top actions */}
                        <div className="flex items-center justify-between">
                            <IconButton href="/admin/marketplace">
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                Back to My Apps
                            </IconButton>
                            {isExpired && (
                                <Button>Reactivate Subscription</Button>
                            )}
                        </div>

                        {/* App info + billing stats */}
                        <div className="rounded-xl border border-borderColor bg-white p-6 shadow-xs">
                            <div className="mb-5 flex items-center gap-4">
                                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center">
                                    <Emp className="h-14 w-14" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold text-gray-900">
                                        Employee Scheduling
                                    </h1>
                                    <p className="mt-1 flex items-center gap-1.5 text-base text-gray-500">
                                        By Ordinaire
                                        <a
                                            href="#"
                                            className="text-gray-400 transition-colors hover:text-gray-600"
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 divide-x divide-borderColor rounded-xl border border-borderColor">
                                {[
                                    {
                                        label: 'Billing Frequency',
                                        value: billingData.frequency,
                                    },
                                    {
                                        label: 'Amount',
                                        value: billingData.amount,
                                    },
                                    {
                                        label: billingData.dateLabel,
                                        value: billingData.dateValue,
                                    },
                                    {
                                        label: 'Current status',
                                        value: (
                                            <Badge
                                                variant={
                                                    billingData.statusVariant
                                                }
                                                withDot
                                            >
                                                {billingData.statusLabel}
                                            </Badge>
                                        ),
                                    },
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col gap-2 p-4"
                                    >
                                        <span className="text-sm text-gray-500">
                                            {stat.label}
                                        </span>
                                        <span className="text-base font-semibold text-gray-900">
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Billing History */}
                        <div className="rounded-xl border border-borderColor bg-white shadow-xs">
                            <div className="border-b border-borderColor px-6 py-4">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Billing History
                                </h2>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableHead>Invoice ID</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableHeader>
                                <TableBody>
                                    {displayInvoices.map((inv) => (
                                        <TableRow key={inv.id}>
                                            <TableCell className="font-medium text-gray-900">
                                                {inv.id}
                                            </TableCell>
                                            <TableCell className="text-gray-600">
                                                {inv.date}
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium text-gray-900">
                                                    {inv.amount}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    via {inv.card}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <InvoiceStatusBadge
                                                    status={inv.status}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                {inv.status === 'failed' ? (
                                                    <Button className="gap-2 px-3 py-1.5 text-xs">
                                                        <svg
                                                            className="h-3.5 w-3.5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                                            />
                                                        </svg>
                                                        Pay Now
                                                    </Button>
                                                ) : (
                                                    <IconButton className="gap-2 px-3 py-1.5 text-xs">
                                                        <svg
                                                            className="h-3.5 w-3.5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                            />
                                                        </svg>
                                                        PDF
                                                    </IconButton>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        {/* Bottom info box */}
                        <div className="rounded-xl border border-borderColor bg-white p-5 shadow-xs">
                            <div className="flex items-start gap-3">
                                <svg
                                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {isActive || isFailed
                                            ? 'Need to make change or cancel subscription?'
                                            : 'Need help restoring your access?'}
                                    </p>
                                    <p className="mt-0.5 text-sm text-gray-500">
                                        {isActive || isFailed
                                            ? 'To cancel your subscription or modify your plan, please contact our support team.'
                                            : 'If you are having trouble reactivating your subscription, please contact our support team.'}
                                    </p>
                                    <div className="mt-3 flex items-center gap-3">
                                        <IconButton className="px-3 py-1.5 text-xs">
                                            Contact Support
                                        </IconButton>
                                        {(isActive || isFailed) && (
                                            <button
                                                onClick={() =>
                                                    setIsUninstallOpen(true)
                                                }
                                                className="cursor-pointer rounded-lg border border-red-300 px-3 py-1.5 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
                                            >
                                                Request Uninstall
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
            <RequestUninstallModal
                isOpen={isUninstallOpen}
                onClose={() => setIsUninstallOpen(false)}
                onSubmit={(reason, details) => {
                    console.log('Uninstall requested:', { reason, details });
                    setIsUninstallOpen(false);
                }}
                appName="Employee Scheduling"
            />
        </div>
    );
}
