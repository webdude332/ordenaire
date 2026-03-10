import Badge from '@/components/Badge';
import Modal from '@/components/Modal';
import { Clipboard, Link2 } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface DeliveryLogItem {
    id: number;
    campaignTitle: string;
    sentDate: string;
    channels: string[];
    audienceScope: string;
    status: 'Sending' | 'Failed' | 'Delivered';
    engagement: string;
    totalAudience?: number;
    successRate?: number;
    messagePreview?: string;
}

interface DeliveryReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    log: DeliveryLogItem | null;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getSuccessRateVariant = (rate: number) => {
    if (rate >= 90) return 'success';
    if (rate >= 75) return 'warning';
    return 'error';
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function DeliveryReportModal({
    isOpen,
    onClose,
    log,
}: DeliveryReportModalProps) {
    if (!log) return null;

    const successRate = log.successRate ?? 98.5;
    const totalAudience = log.totalAudience ?? 1250;
    const engagementPct = parseInt(log.engagement) || 45;

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
                    {/* Dynamic title */}
                    <h2 className="text-base font-semibold text-gray-900">
                        Report: {log.campaignTitle}
                    </h2>
                </div>

                {/* ── Stats Cards ─────────────────────────────────────── */}
                <div className="mb-4 grid grid-cols-3 gap-4">
                    <div className="rounded-xl border border-gray-200 p-4">
                        <p className="mb-1 text-sm text-gray-500">
                            Total Audience
                        </p>
                        <p className="text-2xl font-semibold text-gray-900">
                            {totalAudience.toLocaleString()}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">Recipients</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 p-4">
                        <p className="mb-2 text-sm text-gray-500">
                            Success Rate
                        </p>
                        <Badge
                            variant={getSuccessRateVariant(successRate)}
                            withDot={true}
                            rounded="full"
                        >
                            {successRate}
                        </Badge>
                        <p className="mt-2 text-xs text-gray-400">
                            Delivered Successfully
                        </p>
                    </div>
                    <div className="rounded-xl border border-gray-200 p-4">
                        <p className="mb-1 text-sm text-gray-500">Engagement</p>
                        <p className="text-2xl font-semibold text-gray-900">
                            {engagementPct}%
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                            Opened Message
                        </p>
                    </div>
                </div>

                {/* ── Channel Breakdown + Message Preview ─────────────── */}
                <div className="rounded-xl border border-gray-200 p-5">
                    {/* Channel Breakdown */}
                    <div className="mb-5">
                        <div className="mb-3 flex items-center gap-2">
                            <Link2 className="h-4 w-4 text-gray-700" />
                            <h3 className="text-sm font-semibold text-gray-900">
                                Channel Breakdown
                            </h3>
                        </div>
                        <div className="space-y-1.5">
                            <div className="grid grid-cols-3 text-sm">
                                <span className="text-gray-700">Email</span>
                                <span className="text-gray-500">800 Sent</span>
                                <span className="text-gray-500">
                                    42% Opened
                                </span>
                            </div>
                            <div className="grid grid-cols-3 text-sm">
                                <span className="text-gray-700">
                                    Mobile Push
                                </span>
                                <span className="text-gray-500">450 Sent</span>
                                <span className="text-gray-500">
                                    12% Clicked
                                </span>
                            </div>
                            <div className="grid grid-cols-3 text-sm">
                                <span className="text-gray-700">Failures</span>
                                <span className="text-gray-500">20 Users</span>
                                <span />
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Message Preview */}
                    <div className="mt-5">
                        <div className="mb-2 flex items-center gap-2">
                            <Clipboard className="h-4 w-4 text-gray-700" />
                            <h3 className="text-sm font-semibold text-gray-900">
                                Message Preview
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600">
                            {log.messagePreview ??
                                'Hey! The new Split Bill feature is live. Update your app now...'}
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
