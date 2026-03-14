import Badge from '@/components/Badge';
import Modal from '@/components/Modal';
import { Building2, FileText, Layers, Percent, Rocket } from 'lucide-react';
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

interface ViewSubscriptionProps {
    isOpen: boolean;
    onClose: () => void;
    onApprove: () => void;
    onReject: () => void;
    request: ApprovalRequest | null;
}

export default function ViewSubscription({
    isOpen,
    onClose,
    onApprove,
    onReject,
    request,
}: ViewSubscriptionProps) {
    if (!request) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ──────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
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
                    </div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-base font-semibold text-gray-900">
                            {request.reqId}: Subscription Discount
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

                {/* ── Body ────────────────────────────────────────────── */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Left col */}
                    <div className="space-y-4">
                        {/* Business Profile */}
                        <div className="rounded-xl border border-gray-200 p-5">
                            <div className="mb-3 flex items-center gap-2">
                                <Building2 className="h-4 w-4 text-gray-700" />
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Business Profile
                                </h3>
                            </div>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Business Name
                            </p>
                            <p className="mb-1 text-base font-bold text-gray-900">
                                {request.businessName} • {request.bizId}
                            </p>
                            <a
                                href="#"
                                className="mb-3 block text-xs text-gray-500 underline"
                            >
                                View Business Profile
                            </a>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Market
                            </p>
                            <p className="mb-3 text-sm font-bold text-gray-900">
                                UAE (Base Currency: AED)
                            </p>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Contract Start
                            </p>
                            <p className="text-sm font-bold text-gray-900">
                                29 Aug 2025
                            </p>
                        </div>
                        {/* Plan Selection */}
                        <div className="rounded-xl border border-gray-200 p-5">
                            <div className="mb-3 flex items-center gap-2">
                                <Layers className="h-4 w-4 text-gray-700" />
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Plan Selection
                                </h3>
                            </div>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Subscription Tier
                            </p>
                            <p className="mb-3 text-sm font-bold text-gray-900">
                                Pro Plan
                            </p>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Billing Frequency
                            </p>
                            <p className="mb-3 text-sm font-bold text-gray-900">
                                Yearly
                            </p>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Trial Period
                            </p>
                            <p className="text-sm font-bold text-gray-900">
                                14 Days
                            </p>
                        </div>
                    </div>

                    {/* Right col */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        {/* Subscription Pricing */}
                        <div className="mb-4">
                            <div className="mb-3 flex items-center gap-2">
                                <Percent className="h-4 w-4 text-gray-700" />
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Subscription Pricing
                                </h3>
                            </div>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Standard Price
                            </p>
                            <p className="mb-3 text-sm font-bold text-gray-900">
                                12,000.00 AED
                            </p>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Discount Applied (10%)
                            </p>
                            <p className="mb-3 text-sm font-bold text-orange-500">
                                - 1,200.00 AED
                            </p>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Net Subscription
                            </p>
                            <p className="text-sm font-bold text-gray-900">
                                10,800.00 AED
                            </p>
                        </div>
                        <hr className="mb-4 border-gray-200" />
                        {/* Onboarding Fee */}
                        <div className="mb-4">
                            <div className="mb-3 flex items-center gap-2">
                                <Rocket className="h-4 w-4 text-gray-700" />
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Onboarding / Setup Fee
                                </h3>
                            </div>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Proposed Fee
                            </p>
                            <p className="text-sm font-bold text-gray-900">
                                0.000 AED
                            </p>
                        </div>
                        <hr className="mb-4 border-gray-200" />
                        {/* Total Initial Invoice */}
                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <FileText className="h-4 w-4 text-gray-700" />
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Total Initial Invoice
                                </h3>
                            </div>
                            <p className="mb-0.5 text-xs font-medium text-gray-500">
                                Final Amount
                            </p>
                            <p className="text-sm font-bold text-gray-900">
                                10,800.00 AED
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <button
                    onClick={onReject}
                    className="w-full rounded-lg border border-red-400 px-4 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
                >
                    Reject Request
                </button>
                <Button className="w-full" onClick={onApprove}>
                    Approve Request
                </Button>
            </div>
        </Modal>
    );
}
