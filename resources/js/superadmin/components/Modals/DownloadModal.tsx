import Badge, { BadgeVariant } from '@/superadmin/components/Badge';
import Modal from '@/superadmin/components/Modal';
import ClipboardList from '@shared/images/icons/detailsIcon.svg?react';
import SaveCheck from '@shared/images/icons/saveCheck.svg?react';
import Send from '@shared/images/icons/sendIcon.svg?react';
import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../OuterTable';
import SuccessToast from '../toasts/SuccessToast';
import IconButton from '../ui/IconButton';

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
            // subLines: ['(Stripe ID: ch_12)', '(Wallet Deduction: WAL-999)'],
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
    const [showDownloadToast, setDownloadToast] = useState(false);
    const [emailToast, setEmailToast] = useState(false);

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
                            <IconButton
                                onClick={() => setDownloadToast(true)}
                                className="bg-white"
                            >
                                Download PDF
                            </IconButton>
                            {/* <button
                                onClick={handleSendEmail}
                                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition hover:bg-gray-50 active:scale-95"
                            >
                                Send Email
                            </button> */}
                            <IconButton
                                onClick={() => setEmailToast(true)}
                                className="bg-white"
                            >
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
                                        <p className="text-[15px] font-semibold text-gray-900">
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
                                            <TableRow
                                                key={index}
                                                className="border-b border-borderColor"
                                            >
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
                                    </TableBody>
                                </Table>
                                <div className="flex justify-end px-6 py-4">
                                    <div className="w-64 space-y-1.5">
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Subtotal</span>
                                            <span className="font-medium text-gray-900">
                                                {d.subtotal}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Tax (5% VAT)</span>
                                            <span className="font-medium text-gray-900">
                                                {d.tax}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Credits Used</span>
                                            <span className="font-medium text-gray-900">
                                                {d.creditsUsed}
                                            </span>
                                        </div>
                                        {/* Divider + Total */}
                                        <div className="flex justify-between border-t border-gray-900 pt-3 text-sm font-bold text-gray-900">
                                            <span>TOTAL PAID</span>
                                            <span>{d.totalPaid}</span>
                                        </div>
                                    </div>
                                </div>
                            </TableContainerOne>
                        </div>
                    </div>
                </div>
            </div>
            {showDownloadToast && (
                <SuccessToast
                    title="Download Successful"
                    message="Please Check your Downloads"
                    actionText=""
                    onAction={() => console.log('Action clicked')}
                    onClose={() => setDownloadToast(false)}
                />
            )}
            {emailToast && (
                <SuccessToast
                    title="Email Sent"
                    message="Please Check your Email"
                    actionText=""
                    onAction={() => console.log('Action clicked')}
                    onClose={() => setEmailToast(false)}
                />
            )}
        </Modal>
    );
}
