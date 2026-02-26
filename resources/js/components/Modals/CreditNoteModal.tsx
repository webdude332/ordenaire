import Badge from '@/components/Badge';
import Modal from '@/components/Modal';

import ClipboardList from '@/images/icons/clipboard1.svg?react';
import Eye from '@/images/icons/eyeIcon.svg?react';
import MessageSquare from '@/images/icons/messageSquareIcon.svg?react';
import LayoutGrid from '@/images/icons/shopone.svg?react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface CreditNoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    invoice: {
        invoiceNumber: string;
        billedTo: {
            name: string;
            busId: string;
            location: string;
        };
        amount: {
            primary: string;
            secondary: string;
        };
        status: {
            label: 'Active' | 'Overdue' | 'Pending' | 'Refunded';
            subText: string;
        };
    };
}

// ─── Mock data (replace with API call) ────────────────────────────────────────

const getMockCreditNoteDetails = (
    invoice: CreditNoteModalProps['invoice'],
) => ({
    refundRef: 'REQ-202',
    targetInvoice: invoice.invoiceNumber,
    originalAmount:
        invoice.amount.secondary !== 'Base'
            ? invoice.amount.secondary
            : '900.000 SAR',
    approvalStatus: 'Refunded' as const,
    refundType: 'Partial Refund',
    refundAmount: '- AED 450.00',
    netRevenue: 'AED 1,550.00',
    businessName: `${invoice.billedTo.name} - ${invoice.billedTo.location}`,
    busId: invoice.billedTo.busId,
    reasonForRequest:
        'The customer reported a double charge on their last invoice (#INV-0025). The system logs confirm a timeout error during payment processing, resulting in two transactions. I have verified the bank statement attached.',
    approverName: 'Sarah Smith',
    approvalDateTime: '10:30 AM, 25 Feb 2026',
});

// ─── Component ────────────────────────────────────────────────────────────────

export default function CreditNoteModal({
    isOpen,
    onClose,
    invoice,
}: CreditNoteModalProps) {
    const d = getMockCreditNoteDetails(invoice);

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ─────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Eye
                            className="h-5 w-5 text-gray-700 text-iconColor"
                            strokeWidth={1.8}
                        />
                    </div>
                    <h2 className="text-lg font-medium text-gray-900">
                        Request Finalized: Refund #{d.refundRef}
                    </h2>
                </div>

                {/* ── Main container ─────────────────────────────────── */}
                <div className="rounded-xl border border-borderColor p-4">
                    <div className="grid grid-cols-[3fr_2fr] gap-4">
                        {/* ── Left column ──────────────────────────────── */}
                        <div className="space-y-6 rounded-xl border border-gray-200 bg-[#F9FAFB] p-5">
                            {/* Business Details */}
                            <div>
                                <div className="mb-3 flex items-center gap-2">
                                    <LayoutGrid
                                        className="h-5 w-5 text-gray-700"
                                        strokeWidth={1.8}
                                    />
                                    <span className="text-lg font-semibold text-gray-900">
                                        Business Details
                                    </span>
                                </div>
                                <div className="space-y-0.5 pl-7">
                                    <p className="text-xs font-semibold tracking-wide text-gray-500">
                                        Business Name
                                    </p>
                                    <p className="text-base font-bold text-gray-900">
                                        {d.businessName} · {d.busId}
                                    </p>
                                    <button
                                        className="cursor-pointer text-sm font-medium text-gray-500 underline underline-offset-2 transition-colors"
                                        onClick={() =>
                                            console.log('View Business Profile')
                                        }
                                    >
                                        View Business Profile
                                    </button>
                                </div>
                            </div>

                            {/* Reason for Request */}
                            <div>
                                <div className="mb-3 flex items-center gap-2">
                                    <ClipboardList
                                        className="h-5 w-5 text-gray-700"
                                        strokeWidth={1.8}
                                    />
                                    <span className="text-lg font-semibold text-gray-900">
                                        Reason for Request
                                    </span>
                                </div>
                                <p className="pl-7 text-sm leading-relaxed text-gray-500">
                                    {d.reasonForRequest}
                                </p>
                            </div>

                            {/* Approval Information */}
                            <div>
                                <div className="mb-3 flex items-center gap-2">
                                    <MessageSquare
                                        className="h-5 w-5 text-gray-700"
                                        strokeWidth={1.8}
                                    />
                                    <span className="text-lg font-semibold text-gray-900">
                                        Approval Information
                                    </span>
                                </div>
                                <div className="space-y-3 pl-1">
                                    <div className="pl-6">
                                        <p className="text-xs font-semibold tracking-wide text-gray-500">
                                            Approver Name
                                        </p>
                                        <p className="text-base font-bold text-gray-900">
                                            {d.approverName}
                                        </p>
                                    </div>
                                    <div className="pl-6">
                                        <p className="text-xs font-semibold tracking-wide text-gray-500">
                                            Approval Date/Time
                                        </p>
                                        <p className="text-base font-bold text-gray-900">
                                            {d.approvalDateTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Right column ─────────────────────────────── */}
                        <div className="flex flex-col gap-4">
                            {/* Top card: Target Item, Original Amount, Approval Status */}
                            <div className="space-y-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
                                <div>
                                    <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500">
                                        Target Item
                                    </p>
                                    <p className="text-base font-bold text-gray-900">
                                        Invoice #{d.targetInvoice}
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500">
                                        Original Amount
                                    </p>
                                    <p className="text-base font-bold text-gray-900">
                                        {d.originalAmount}
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500">
                                        Approval Status
                                    </p>
                                    <Badge
                                        variant="warning"
                                        withDot={true}
                                        rounded="full"
                                    >
                                        {d.approvalStatus}
                                    </Badge>
                                </div>
                            </div>

                            {/* Bottom card: Refund Type, Refund Amount, Net Revenue */}
                            <div className="space-y-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
                                <div>
                                    <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500">
                                        Refund Type
                                    </p>
                                    <p className="text-base font-bold text-gray-900">
                                        {d.refundType}
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500">
                                        Refund Amount
                                    </p>
                                    <p className="text-base font-bold text-[#B45309]">
                                        {d.refundAmount}
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500">
                                        Net Revenue (After Refund)
                                    </p>
                                    <p className="text-base font-bold text-gray-900">
                                        {d.netRevenue}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
