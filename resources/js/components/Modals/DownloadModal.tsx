// import Badge from '@/components/Badge';
// import Modal from '@/components/Modal';
// import FileText from '@/images/icons/saveCheck.svg?react';
// import { Download, Mail } from 'lucide-react';

// // --- Types ---
// interface LineItem {
//     description: string;
//     subDescription?: string;
//     billingCycle: string;
//     qty: number;
//     unitPrice: string;
//     currency: string;
//     amount: string;
// }

// interface InvoiceTimeline {
//     time: string;
//     label: string;
//     subText?: string;
// }

// interface DownloadInvoiceModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     invoice: {
//         invoiceNumber: string;
//         issuedDate: string;
//         status: {
//             label: 'Active' | 'Overdue' | 'Pending' | 'Refunded';
//             subText: string;
//         };
//         billedTo: {
//             name: string;
//             busId: string;
//             location: string;
//         };
//         amount: {
//             primary: string;
//             secondary: string;
//         };
//     };
// }

// // --- Mock line items & timeline per invoice (in real app, fetch from API) ---
// const getMockInvoiceDetails = (invoiceNumber: string) => ({
//     paymentMethod: 'via Wallet & Visa **** 4242',
//     billToAddress: '123 Marina Walk, Dubai, UAE',
//     billToEmail: `billing@business.ae`,
//     dueDate: 'Due on Receipt',
//     exchangeRate: '1 KWD = 12.00 AED',
//     baseValue: '391.666 KWD (System Record)',
//     timeline: [
//         {
//             time: 'Oct 12, 10:00 AM',
//             label: 'Invoice Created',
//         },
//         {
//             time: 'Oct 12, 10:01 AM',
//             label: 'Invoice Sent to Client (Automatic)',
//         },
//         {
//             time: 'Oct 12, 02:30 PM',
//             label: 'Payment Success',
//             subText: '(Stripe ID: ch_12)\n(Wallet Deduction: WAL-999)',
//         },
//     ] as InvoiceTimeline[],
//     lineItems: [
//         {
//             description: 'Enterprise Plan',
//             subDescription: 'Oct 12, 2026 - Oct 12, 2027',
//             billingCycle: 'Yearly',
//             qty: 1,
//             unitPrice: '4,000.000',
//             currency: 'AED',
//             amount: '4,000.000',
//         },
//         {
//             description: 'Add-on',
//             subDescription: 'Dedicated Support',
//             billingCycle: 'Yearly',
//             qty: 1,
//             unitPrice: '500.000',
//             currency: 'AED',
//             amount: '500.000',
//         },
//     ] as LineItem[],
//     subtotal: '4,500.000',
//     tax: '225.000',
//     creditsUsed: '-25.000',
//     totalPaid: '4,700.000 AED',
//     currency: 'AED',
// });

// const getStatusBadgeVariant = (status: string) => {
//     switch (status) {
//         case 'Active':
//             return 'success';
//         case 'Overdue':
//             return 'warning';
//         case 'Pending':
//             return 'blue';
//         case 'Refunded':
//             return 'error';
//         default:
//             return 'gray';
//     }
// };

// const getStatusBgClass = (status: string) => {
//     switch (status) {
//         case 'Active':
//             return 'bg-[#F0FAE5] border-[#C9EBA0]';
//         case 'Overdue':
//             return 'bg-orange-50 border-orange-200';
//         case 'Pending':
//             return 'bg-blue-50 border-blue-200';
//         case 'Refunded':
//             return 'bg-red-50 border-red-200';
//         default:
//             return 'bg-gray-50 border-gray-200';
//     }
// };

// export default function DownloadInvoiceModal({
//     isOpen,
//     onClose,
//     invoice,
// }: DownloadInvoiceModalProps) {
//     const details = getMockInvoiceDetails(invoice.invoiceNumber);

//     const handleDownloadPDF = () => {
//         // Simulate download — replace with real API call
//         const link = document.createElement('a');
//         link.href = '#';
//         link.download = `${invoice.invoiceNumber}.pdf`;
//         link.click();
//     };

//     const handleSendEmail = () => {
//         console.log('Send email for', invoice.invoiceNumber);
//     };

//     return (
//         <Modal isOpen={isOpen} onClose={onClose} maxWidth="2xl">
//             <div className="p-6 sm:p-8">
//                 {/* Header */}
//                 <div className="mb-5 flex items-center gap-3">
//                     <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border-2 border-gray-200 bg-white">
//                         <FileText className="h-5 w-5 text-gray-700" />
//                     </div>
//                     <h2 className="text-xl font-semibold text-gray-900">
//                         Invoice #{invoice.invoiceNumber}
//                     </h2>
//                 </div>

//                 {/* Status Banner */}
//                 <div
//                     className={`mb-6 rounded-xl border p-4 ${getStatusBgClass(invoice.status.label)}`}
//                 >
//                     <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
//                         <Badge
//                             variant={
//                                 getStatusBadgeVariant(
//                                     invoice.status.label,
//                                 ) as any
//                             }
//                             withDot={true}
//                         >
//                             {invoice.status.subText}
//                         </Badge>
//                         <span>·</span>
//                         <span>
//                             {invoice.issuedDate.replace('Issued: ', '')}
//                         </span>
//                         <span>·</span>
//                         <span>{details.paymentMethod}</span>
//                     </div>
//                     {/* Divider line */}
//                     <div className="mb-3 h-px bg-green-200 opacity-60" />
//                     <div className="flex flex-wrap gap-3">
//                         <button
//                             onClick={handleDownloadPDF}
//                             className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition hover:bg-gray-50"
//                         >
//                             <Download className="h-4 w-4" />
//                             Download PDF
//                         </button>
//                         <button
//                             onClick={handleSendEmail}
//                             className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition hover:bg-gray-50"
//                         >
//                             <Mail className="h-4 w-4" />
//                             Send Email
//                         </button>
//                     </div>
//                 </div>

//                 {/* Bill To + Timeline — 2 columns */}
//                 <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
//                     {/* Bill To + Details */}
//                     <div className="rounded-xl border border-gray-200 p-5">
//                         {/* Bill To */}
//                         <div className="mb-4">
//                             <p className="mb-1 text-xs font-semibold tracking-wider text-gray-400 uppercase">
//                                 Bill To
//                             </p>
//                             <p className="font-semibold text-gray-900">
//                                 {invoice.billedTo.name}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                                 {invoice.billedTo.busId}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                                 {details.billToAddress}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                                 {details.billToEmail}
//                             </p>
//                         </div>

//                         {/* Divider */}
//                         <div className="mb-4 h-px bg-gray-100" />

//                         {/* Details */}
//                         <div>
//                             <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
//                                 Details
//                             </p>
//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-500">
//                                         Issued
//                                     </span>
//                                     <span className="font-medium text-gray-900">
//                                         {invoice.issuedDate.replace(
//                                             'Issued: ',
//                                             '',
//                                         )}
//                                     </span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-500">
//                                         Due Date
//                                     </span>
//                                     <span className="font-medium text-gray-900">
//                                         {invoice.issuedDate.replace(
//                                             'Issued: ',
//                                             '',
//                                         )}{' '}
//                                         ({details.dueDate})
//                                     </span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-500">
//                                         Exchange Rate
//                                     </span>
//                                     <span className="font-medium text-gray-900">
//                                         {details.exchangeRate}
//                                     </span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="text-gray-500">
//                                         Base Value
//                                     </span>
//                                     <span className="font-medium text-gray-900">
//                                         {details.baseValue}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Timeline */}
//                     <div className="rounded-xl border border-gray-200 p-5">
//                         <p className="mb-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">
//                             Timeline
//                         </p>
//                         <div className="space-y-5">
//                             {details.timeline.map((event, index) => (
//                                 <div key={index}>
//                                     <p className="font-semibold text-gray-900">
//                                         {event.time}
//                                     </p>
//                                     <p className="text-sm text-gray-500">
//                                         {event.label}
//                                     </p>
//                                     {event.subText && (
//                                         <p className="text-xs whitespace-pre-line text-gray-400">
//                                             {event.subText}
//                                         </p>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Line Items */}
//                 <div className="rounded-xl border border-gray-200">
//                     <div className="border-b border-gray-100 px-5 py-3">
//                         <h3 className="font-semibold text-gray-900">
//                             Line Items
//                         </h3>
//                     </div>
//                     <table className="w-full text-sm">
//                         <thead>
//                             <tr className="border-b border-gray-100 text-left text-xs font-semibold tracking-wider text-gray-400 uppercase">
//                                 <th className="px-5 py-3">Description</th>
//                                 <th className="px-3 py-3">Billing Cycle</th>
//                                 <th className="px-3 py-3">Qty</th>
//                                 <th className="px-3 py-3 text-right">
//                                     Unit Price
//                                 </th>
//                                 <th className="px-5 py-3 text-right">Amount</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {details.lineItems.map((item, index) => (
//                                 <tr
//                                     key={index}
//                                     className="border-b border-gray-50 last:border-0"
//                                 >
//                                     <td className="px-5 py-3">
//                                         <p className="font-medium text-gray-900">
//                                             {item.description}
//                                         </p>
//                                         {item.subDescription && (
//                                             <p className="text-xs text-gray-400">
//                                                 {item.subDescription}
//                                             </p>
//                                         )}
//                                     </td>
//                                     <td className="px-3 py-3 text-gray-600">
//                                         {item.billingCycle}
//                                     </td>
//                                     <td className="px-3 py-3 text-gray-600">
//                                         {item.qty}
//                                     </td>
//                                     <td className="px-3 py-3 text-right">
//                                         <p className="font-medium text-gray-900">
//                                             {item.unitPrice}
//                                         </p>
//                                         <p className="text-xs text-gray-400">
//                                             {item.currency}
//                                         </p>
//                                     </td>
//                                     <td className="px-5 py-3 text-right">
//                                         <p className="font-medium text-gray-900">
//                                             {item.amount}
//                                         </p>
//                                         <p className="text-xs text-gray-400">
//                                             {item.currency}
//                                         </p>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     {/* Totals */}
//                     <div className="border-t border-gray-100 px-5 py-4">
//                         <div className="ml-auto w-64 space-y-2 text-sm">
//                             <div className="flex justify-between text-gray-600">
//                                 <span>Subtotal</span>
//                                 <span>{details.subtotal}</span>
//                             </div>
//                             <div className="flex justify-between text-gray-600">
//                                 <span>Tax (5% VAT)</span>
//                                 <span>{details.tax}</span>
//                             </div>
//                             <div className="flex justify-between text-gray-600">
//                                 <span>Credits Used</span>
//                                 <span>{details.creditsUsed}</span>
//                             </div>
//                             <div className="flex justify-between border-t border-gray-200 pt-2 font-semibold text-gray-900">
//                                 <span>TOTAL PAID</span>
//                                 <span>{details.totalPaid}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Modal>
//     );
// }

// download modal claude

import Badge, { BadgeVariant } from '@/components/Badge';
import Modal from '@/components/Modal';
import SaveCheck from '@/images/icons/saveCheck.svg?react';
// import { ClipboardList } from 'lucide-react';
import ClipboardList from '@/images/icons/detailsIcon.svg?react';
import Send from '@/images/icons/sendIcon.svg?react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../OuterTable';
import IconButton from '../ui/IconButton';

// ─── Types ───────────────────────────────────────────────────────────────────

interface LineItem {
    description: string;
    subDescription?: string;
    billingCycle: string;
    qty: number;
    unitPrice: string;
    currency: string;
    amount: string;
}

interface TimelineEvent {
    time: string;
    label: string;
    subLines?: string[];
}

interface DownloadInvoiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    invoice: {
        invoiceNumber: string;
        issuedDate: string;
        status: {
            label: 'Active' | 'Overdue' | 'Pending' | 'Refunded';
            subText: string;
        };
        billedTo: {
            name: string;
            busId: string;
            location: string;
        };
        amount: {
            primary: string;
            secondary: string;
        };
    };
}

// ─── Mock details (replace with API call) ────────────────────────────────────

const getMockInvoiceDetails = (
    invoice: DownloadInvoiceModalProps['invoice'],
) => ({
    paymentMethod: 'via Wallet & Visa **** 4242',
    billToAddress: '123 Marina Walk, Dubai, UAE',
    billToEmail: `billing@${invoice.billedTo.name.toLowerCase().replace(/\s/g, '')}.com`,
    dueDate: `${invoice.issuedDate.replace('Issued: ', '')} (Due on Receipt)`,
    exchangeRate: '1 KWD = 12.00 AED',
    baseValue: '391.666 KWD (System Record)',
    timeline: [
        {
            time: 'Oct 12, 10:00 AM',
            label: 'Invoice Created',
        },
        {
            time: 'Oct 12, 10:01 AM',
            label: 'Invoice Sent to Client (Automatic)',
        },
        {
            time: 'Oct 12, 02:30 PM',
            label: 'Payment Success',
            subLines: ['(Stripe ID: ch_12)', '(Wallet Deduction: WAL-999)'],
        },
    ] as TimelineEvent[],
    lineItems: [
        {
            description: 'Enterprise Plan',
            subDescription: 'Oct 12, 2026 - Oct 12, 2027',
            billingCycle: 'Yearly',
            qty: 1,
            unitPrice: '4,000.000',
            currency: 'AED',
            amount: '4,000.000',
        },
        {
            description: 'Add-on',
            subDescription: 'Dedicated Support',
            billingCycle: 'Yearly',
            qty: 1,
            unitPrice: '500.000',
            currency: 'AED',
            amount: '500.000',
        },
    ] as LineItem[],
    subtotal: '4,500.000',
    tax: '225.000',
    creditsUsed: '-25.000',
    totalPaid: '4,700.000 AED',
});

// ─── Status helpers ───────────────────────────────────────────────────────────

const getStatusBadgeVariant = (status: string): BadgeVariant => {
    switch (status) {
        case 'Active':
            return 'success';
        case 'Overdue':
            return 'warning';
        case 'Pending':
            return 'blue';
        case 'Refunded':
            return 'error';
        default:
            return 'gray';
    }
};

const getBanner = (status: string) => {
    switch (status) {
        case 'Active':
            return {
                bg: 'bg-[#F6FCF0]',
                border: 'border-[#D4EDAA]',
                divider: 'bg-[#C5E58A]',
            };
        case 'Overdue':
            return {
                bg: 'bg-orange-50',
                border: 'border-orange-200',
                divider: 'bg-orange-200',
            };
        case 'Pending':
            return {
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                divider: 'bg-blue-200',
            };
        case 'Refunded':
            return {
                bg: 'bg-red-50',
                border: 'border-red-200',
                divider: 'bg-red-200',
            };
        default:
            return {
                bg: 'bg-gray-50',
                border: 'border-gray-200',
                divider: 'bg-gray-200',
            };
    }
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function DownloadInvoiceModal({
    isOpen,
    onClose,
    invoice,
}: DownloadInvoiceModalProps) {
    const d = getMockInvoiceDetails(invoice);
    const banner = getBanner(invoice.status.label);

    const handleDownloadPDF = () => {
        // TODO: replace with real API call
        console.log('Download PDF for', invoice.invoiceNumber);
    };

    const handleSendEmail = () => {
        // TODO: replace with real API call
        console.log('Send email for', invoice.invoiceNumber);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ─────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <SaveCheck className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-medium text-gray-900">
                        Invoice #{invoice.invoiceNumber}
                    </h2>
                </div>
                {/**main container */}
                <div className="rounded-xl border border-borderColor p-4">
                    {/* ── Status Banner ───────────────────────────────────── */}
                    <div
                        className={`mb-5 rounded-xl border border-borderColor bg-[#F8FFEB] px-5 py-4`}
                    >
                        {/* Badge + date + method */}
                        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
                            <Badge
                                variant={getStatusBadgeVariant(
                                    invoice.status.label,
                                )}
                                withDot={true}
                            >
                                {invoice.status.subText}
                            </Badge>
                            <div className="flex gap-4 pl-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-1 w-1 rounded-full bg-gray-500"></span>
                                    <span className="font-medium text-gray-700">
                                        {invoice.issuedDate.replace(
                                            'Issued: ',
                                            '',
                                        )}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-1 w-1 rounded-full bg-gray-500"></span>
                                    <span className="font-medium text-gray-700">
                                        {d.paymentMethod}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className={`mb-4 h-px w-full bg-[#8CDD05]`} />

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3">
                            {/* <button
                                onClick={handleDownloadPDF}
                                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition hover:bg-gray-50 active:scale-95"
                            >
                                Download PDF
                            </button> */}
                            <IconButton className="bg-white">
                                Download PDF
                            </IconButton>
                            {/* <button
                                onClick={handleSendEmail}
                                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition hover:bg-gray-50 active:scale-95"
                            >
                                Send Email
                            </button> */}
                            <IconButton className="bg-white">
                                Send Email
                            </IconButton>
                        </div>
                    </div>

                    {/* ── Bill To + Timeline ──────────────────────────────── */}
                    <div className="grid grid-cols-[3fr_2fr] gap-4">
                        <div>
                            <div className="rounded-xl border border-gray-200 bg-[#F9FAFB] p-5">
                                {/* Bill To */}
                                <div className="mb-5">
                                    <div className="mb-3 flex items-center gap-2">
                                        <Send className="h-6 w-6 text-gray-500" />
                                        <span className="text-lg font-semibold text-gray-900">
                                            Bill To
                                        </span>
                                    </div>
                                    <div className="space-y-0.5 pl-1 text-sm">
                                        <p className="text-gray-900">
                                            {invoice.billedTo.name}
                                        </p>
                                        <p className="text-gray-900">
                                            {invoice.billedTo.busId}
                                        </p>
                                        <p className="text-gray-900">
                                            {d.billToAddress}
                                        </p>
                                        <p className="text-gray-900">
                                            {d.billToEmail}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="mb-5 h-px bg-gray-900" />

                                {/* Details */}
                                <div>
                                    <div className="mb-3 flex items-center gap-2">
                                        <ClipboardList className="h-6 w-6 text-gray-500" />
                                        <span className="text-lg font-semibold text-gray-900">
                                            Details
                                        </span>
                                    </div>
                                    <div className="space-y-2 pl-1 text-sm">
                                        {[
                                            {
                                                label: 'Issued',
                                                value: invoice.issuedDate.replace(
                                                    'Issued: ',
                                                    '',
                                                ),
                                            },
                                            {
                                                label: 'Due Date',
                                                value: d.dueDate,
                                            },
                                            {
                                                label: 'Exchange Rate',
                                                value: d.exchangeRate,
                                            },
                                            {
                                                label: 'Base Value',
                                                value: d.baseValue,
                                            },
                                        ].map((row) => (
                                            <div
                                                key={row.label}
                                                className="grid grid-cols-2"
                                            >
                                                <span className="flex-shrink-0 text-gray-900">
                                                    {row.label}
                                                </span>
                                                <span className="text-left text-gray-900">
                                                    {row.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                            <div className="space-y-6">
                                {d.timeline.map((event, index) => (
                                    <div key={index}>
                                        <p className="text-[15px] font-bold text-gray-900">
                                            {event.time}
                                        </p>
                                        <p className="mt-0.5 text-sm text-gray-900">
                                            {event.label}
                                        </p>
                                        {event.subLines?.map((line, i) => (
                                            <p
                                                key={i}
                                                className="text-xs text-gray-900"
                                            >
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Line Items ──────────────────────────────────────── */}
                    <div className="mt-4">
                        <h3 className="mb-3 text-base font-semibold text-gray-900">
                            Line Items
                        </h3>

                        <div className="overflow-hidden rounded-xl border border-gray-200">
                            <TableContainerOne className="rounded-xl border border-gray-200 shadow-sm">
                                <Table>
                                    {/* Header */}
                                    <TableHeader className="!border-t-0 border-b border-gray-200 bg-gray-50">
                                        <TableHead className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                                            Description
                                        </TableHead>
                                        <TableHead className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                                            Billing Cycle
                                        </TableHead>
                                        <TableHead className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                                            Qty
                                        </TableHead>
                                        <TableHead className="px-6 py-3 text-right text-xs font-semibold text-gray-500">
                                            Unit Price
                                        </TableHead>
                                        <TableHead className="px-6 py-3 text-right text-xs font-semibold text-gray-500">
                                            Amount
                                        </TableHead>
                                    </TableHeader>

                                    <TableBody>
                                        {/* Line item rows */}
                                        {d.lineItems.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <p className="font-semibold text-gray-900">
                                                        {item.description}
                                                    </p>
                                                    {item.subDescription && (
                                                        <p className="mt-0.5 text-xs text-gray-400">
                                                            {
                                                                item.subDescription
                                                            }
                                                        </p>
                                                    )}
                                                </TableCell>
                                                <TableCell className="font-medium text-gray-600">
                                                    {item.billingCycle}
                                                </TableCell>
                                                <TableCell className="font-medium text-gray-600">
                                                    {item.qty}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <p className="font-medium text-gray-900">
                                                        {item.unitPrice}
                                                    </p>
                                                    <p className="mt-0.5 text-xs text-gray-400">
                                                        {item.currency}
                                                    </p>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <p className="font-medium text-gray-900">
                                                        {item.amount}
                                                    </p>
                                                    <p className="mt-0.5 text-xs text-gray-400">
                                                        {item.currency}
                                                    </p>
                                                </TableCell>
                                            </TableRow>
                                        ))}

                                        {/* Subtotal */}
                                        <TableRow className="!border-t border-gray-100 hover:bg-transparent">
                                            {/* Using standard <td> here so colSpan is respected */}
                                            <td
                                                colSpan={3}
                                                className="px-6 py-3"
                                            />
                                            <td className="px-6 py-3 text-left text-sm text-gray-600">
                                                Subtotal
                                            </td>
                                            <td className="px-6 py-3 text-right text-sm font-medium text-gray-900">
                                                {d.subtotal}
                                            </td>
                                        </TableRow>

                                        {/* Tax */}
                                        <TableRow className="!border-t-0 hover:bg-transparent">
                                            <td
                                                colSpan={3}
                                                className="px-6 py-1.5"
                                            />
                                            <td className="px-6 py-1.5 text-left text-sm text-gray-600">
                                                Tax (5% VAT)
                                            </td>
                                            <td className="px-6 py-1.5 text-right text-sm font-medium text-gray-900">
                                                {d.tax}
                                            </td>
                                        </TableRow>

                                        {/* Credits Used */}
                                        <TableRow className="!border-t-0 hover:bg-transparent">
                                            <td
                                                colSpan={3}
                                                className="px-6 py-1.5"
                                            />
                                            <td className="px-6 py-1.5 text-left text-sm text-gray-600">
                                                Credits Used
                                            </td>
                                            <td className="px-6 py-1.5 text-right text-sm font-medium text-gray-900">
                                                {d.creditsUsed}
                                            </td>
                                        </TableRow>

                                        {/* TOTAL PAID */}
                                        <TableRow className="!border-t-0 hover:bg-transparent">
                                            <td
                                                colSpan={3}
                                                className="px-6 py-4"
                                            />
                                            <td className="border-t border-gray-900 px-6 py-4 text-left text-sm font-bold text-gray-900">
                                                TOTAL PAID
                                            </td>
                                            <td className="border-t border-gray-900 px-6 py-4 text-right text-sm font-bold text-gray-900">
                                                {d.totalPaid}
                                            </td>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainerOne>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
