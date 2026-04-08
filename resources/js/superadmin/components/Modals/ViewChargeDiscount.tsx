import Badge from '@/superadmin/components/Badge';
import Modal from '@/superadmin/components/Modal';
import patternBg from '@shared/images/icons/patternBg.svg';
import Building2 from '@shared/images/icons/shopone.svg?react';
import { Clipboard, CreditCard, Eye, Paperclip, Percent } from 'lucide-react';
import Button from '../ui/Button';

interface ApprovalRequest {
    id: number;
    reqId: string;
    timeAgo: string;
    requesterName: string;
    requesterRole: string;
    businessName: string;
    bizId: string;
    requestType: string;
    requestSubType: string;
    valueLabel: string;
    valueAmount: string;
}

interface ViewChargeDiscountProps {
    isOpen: boolean;
    onClose: () => void;
    onApprove: () => void;
    onReject: () => void;
    request: ApprovalRequest | null;
}

export default function ViewChargeDiscount({
    isOpen,
    onClose,
    onApprove,
    onReject,
    request,
}: ViewChargeDiscountProps) {
    if (!request) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                <div className="mb-5">
                    {/* <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    </div> */}
                    <div className="mb-5">
                        <div className="relative mb-6 flex items-start gap-4">
                            <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                                <img
                                    src={patternBg}
                                    alt=""
                                    className="max-w-none"
                                    style={{
                                        transform: 'scale(1.1)',
                                        opacity: 0.7,
                                    }}
                                />
                            </div>
                            <div>
                                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                    <Eye className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                                </div>
                            </div>
                        </div>
                        {/* <h2 className="text-base font-semibold text-gray-900">
                        Add App to Marketplace
                    </h2> */}
                    </div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-base font-semibold text-gray-900">
                            {request.reqId}: Charge Discount
                        </h2>
                        <Badge variant="warning" withDot rounded="full">
                            Pending Approval
                        </Badge>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                        Submitted by {request.requesterName} (
                        {request.requesterRole}) • {request.timeAgo}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Left col */}
                    <div className="rounded-xl border border-gray-200 bg-gray-100 p-5">
                        {/* Business Details */}
                        <div className="mb-4">
                            <div className="mb-3 flex items-center gap-2">
                                <Building2 className="h-6 w-6 text-gray-700" />
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Business Details
                                </h3>
                            </div>
                            <p className="mb-0.5 pl-8 text-xs font-medium text-gray-500">
                                Business Name
                            </p>
                            <p className="mb-1 pl-8 text-base font-bold text-gray-900">
                                {request.businessName} • {request.bizId}
                            </p>
                            <a
                                href="#"
                                className="mb-3 block pl-8 text-xs text-gray-500 underline"
                            >
                                View Business Profile
                            </a>
                            <p className="mb-0.5 pl-8 text-xs font-medium text-gray-500">
                                Current Plan
                            </p>
                            <p className="pl-8 text-sm font-bold text-gray-900">
                                Pro Monthly
                            </p>
                        </div>
                        <hr className="mb-4 border-gray-200" />
                        {/* Charge Details */}
                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <CreditCard className="h-6 w-6 text-gray-700" />
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Charge Details
                                </h3>
                            </div>
                            <p className="mb-0.5 pl-8 text-xs font-medium text-gray-500">
                                Charge Rule
                            </p>
                            <p className="mb-3 pl-8 text-sm font-bold text-gray-900">
                                Active Staff / Overages
                            </p>
                            <p className="mb-0.5 pl-8 text-xs font-medium text-gray-500">
                                Description
                            </p>
                            <p className="mb-3 pl-8 text-sm font-bold text-gray-900">
                                7 Users (Limit: 5)
                            </p>
                            <p className="mb-0.5 pl-8 text-xs font-medium text-gray-500">
                                Date
                            </p>
                            <p className="pl-8 text-sm font-bold text-gray-900">
                                05 Jan 2026
                            </p>
                        </div>
                    </div>

                    {/* Right col */}
                    <div className="space-y-4">
                        {/* Reason + Attachments */}
                        <div className="rounded-xl border border-gray-200 bg-gray-100 p-5">
                            <div className="mb-2 flex items-center gap-2">
                                <Clipboard className="h-4 w-4 text-gray-700" />
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Reason for Request
                                </h3>
                            </div>
                            <p className="mb-4 pl-6 text-sm text-gray-600">
                                Customer complained that they removed the extra
                                users 2 days ago but were still flagged. I am
                                waiving 50% of the overage fee as a goodwill
                                gesture to keep them happy.
                            </p>
                            <div className="mb-2 flex items-center gap-2">
                                <Paperclip className="h-4 w-4 text-gray-700" />
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Attachments
                                </h3>
                            </div>
                            <div className="space-y-1 pl-6">
                                <a
                                    href="#"
                                    className="block text-xs text-gray-500 underline"
                                >
                                    Invoice_#0025.pdf
                                </a>
                                <a
                                    href="#"
                                    className="block text-xs text-gray-500 underline"
                                >
                                    Bank_Statement.jpg
                                </a>
                            </div>
                        </div>
                        {/* Financials */}
                        <div className="rounded-xl border border-gray-200 bg-gray-100 p-5">
                            <div className="mb-3 flex items-center gap-2">
                                <Percent className="h-4 w-4 text-gray-700" />
                                <h3 className="text-sm font-semibold text-gray-900">
                                    The Financials
                                </h3>
                            </div>
                            <p className="mb-0.5 pl-6 text-xs font-medium text-gray-500">
                                Original Charge Amount
                            </p>
                            <p className="mb-3 pl-6 text-sm font-bold text-gray-900">
                                KWD 2.000
                            </p>
                            <p className="mb-0.5 pl-6 text-xs font-medium text-gray-500">
                                Discount Value
                            </p>
                            <p className="mb-0.5 pl-6 text-sm font-bold text-orange-500">
                                - KWD 1.000
                            </p>
                            <p className="mb-3 pl-6 text-xs text-gray-400">
                                Flat Amount
                            </p>
                            <p className="mb-0.5 pl-6 text-xs font-medium text-gray-500">
                                Final Charge to Client
                            </p>
                            <p className="pl-6 text-sm font-bold text-gray-900">
                                KWD 1.000
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <button
                    onClick={onReject}
                    className="w-full cursor-pointer rounded-lg border border-red-400 px-4 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
                >
                    Reject Request
                </button>
                <Button className="w-full" onClick={onApprove}>
                    Approve Discount
                </Button>
            </div>
        </Modal>
    );
}
