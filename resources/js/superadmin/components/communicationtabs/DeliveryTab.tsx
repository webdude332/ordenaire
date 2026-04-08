import DeliveryReportModal from '@/superadmin/components/Modals/DeliveryReportModal';
import ActionButton from '@/superadmin/components/ui/ActionButton';
import Badges from '@/superadmin/components/ui/Badges';
import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import DateRangeButton from '../DateRangeButton';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../OuterTable';

// Type

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

// Static data

const deliveryLogs: DeliveryLogItem[] = [
    {
        id: 1,
        campaignTitle: 'Scheduled Maintenance',
        sentDate: '03 Sept 2025\n11:30 AM',
        channels: ['Email', 'Dashboard Notification'],
        audienceScope: 'Global\nAll Users',
        status: 'Sending',
        engagement: '45% Opened',
        totalAudience: 1250,
        successRate: 98.5,
        messagePreview:
            'Dear Partners, we are scheduling a brief maintenance window on Saturday at 3:00 AM...',
    },
    {
        id: 2,
        campaignTitle: "New 'Split Bill' Feature",
        sentDate: '04 Sept 2025\n01:15 PM',
        channels: ['WhatsApp', 'Dashboard Notification'],
        audienceScope: 'UAE, KSA\nPro Plan',
        status: 'Failed',
        engagement: '0% Opened',
        totalAudience: 430,
        successRate: 0,
        messagePreview:
            'Hey! The new Split Bill feature is live. Update your app now...',
    },
    {
        id: 3,
        campaignTitle: 'Eid Promo Blast',
        sentDate: '05 Sept 2025\n09:45 AM',
        channels: ['WhatsApp'],
        audienceScope: 'KSA\nAll Plans',
        status: 'Delivered',
        engagement: '72% Opened',
        totalAudience: 980,
        successRate: 100,
        messagePreview: 'Eid Mubarak! Enjoy special discounts this Eid season.',
    },
];

//Filter options

const STATUS_OPTIONS = [
    { label: <span className="font-medium">Status: All</span>, value: 'all' },
    { label: '🟢 Delivered', value: 'delivered' },
    { label: '🔴 Failed', value: 'failed' },
    { label: '🔵 Sending', value: 'sending' },
];

const CHANNEL_OPTIONS = [
    { label: <span className="font-medium">Channel: All</span>, value: 'all' },
    { label: 'WhatsApp', value: 'whatsapp' },
    { label: 'Email', value: 'email' },
    { label: 'Dashboard Notification', value: 'dashboard_notification' },
];

const DATE_OPTIONS = [
    { label: 'Last 30 Days', value: 'last_30' },
    { label: 'Last 7 Days', value: 'last_7' },
    { label: 'Last 90 Days', value: 'last_90' },
];

const getStatusVariant = (status: DeliveryLogItem['status']) => {
    switch (status) {
        case 'Delivered':
            return 'success';
        case 'Failed':
            return 'error';
        case 'Sending':
            return 'blue';
    }
};

// Component

export default function DeliveryTab() {
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const [selectedLog, setSelectedLog] = useState<DeliveryLogItem | null>(
        null,
    );
    const [statusFilter, setStatusFilter] = useState('all');
    const [channelFilter, setChannelFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('last_30');
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 6;

    const filteredLogs = deliveryLogs.filter((item) => {
        const matchesStatus =
            statusFilter === 'all' ||
            item.status.toLowerCase() === statusFilter;
        const matchesChannel =
            channelFilter === 'all' ||
            item.channels.some(
                (c) => c.toLowerCase().replace(' ', '_') === channelFilter,
            );
        return matchesStatus && matchesChannel;
    });

    return (
        <div>
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Delivery logs
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="w-36">
                            <CustomDropdown
                                label=""
                                options={STATUS_OPTIONS}
                                value={statusFilter}
                                onChange={setStatusFilter}
                                placeholder=""
                            />
                        </div>
                        <div className="w-36">
                            <CustomDropdown
                                label=""
                                options={CHANNEL_OPTIONS}
                                value={channelFilter}
                                onChange={setChannelFilter}
                                placeholder="Channel: All"
                            />
                        </div>
                        <DateRangeButton></DateRangeButton>
                    </div>
                </div>

                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Campaign Title
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Sent Date <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Channels
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Audience Scope
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Engagement
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {filteredLogs.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium text-gray-900">
                                        {item.campaignTitle}
                                    </TableCell>
                                    <TableCell>
                                        {item.sentDate
                                            .split('\n')
                                            .map((line, i) => (
                                                <div
                                                    key={i}
                                                    className={
                                                        i === 0
                                                            ? 'font-medium text-gray-900'
                                                            : 'text-sm text-gray-500'
                                                    }
                                                >
                                                    {line}
                                                </div>
                                            ))}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.channels
                                            .join(',\n')
                                            .split('\n')
                                            .map((line, i) => (
                                                <div key={i}>{line}</div>
                                            ))}
                                    </TableCell>
                                    <TableCell>
                                        {item.audienceScope
                                            .split('\n')
                                            .map((line, i) => (
                                                <div
                                                    key={i}
                                                    className={
                                                        i === 0
                                                            ? 'font-medium text-gray-900'
                                                            : 'text-sm text-gray-500'
                                                    }
                                                >
                                                    {line}
                                                </div>
                                            ))}
                                    </TableCell>
                                    <TableCell>
                                        <Badges
                                            variant={getStatusVariant(
                                                item.status,
                                            )}
                                            withDot={true}
                                            rounded="full"
                                        >
                                            {item.status}
                                        </Badges>
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.engagement}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <ActionButton
                                            onClick={() => {
                                                setSelectedLog(item);
                                                setIsReportModalOpen(true);
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-gray-400"
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
                                        </ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>

                {/* ── Pagination ───────────────────────────────────────── */}
                <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
                    <ActionButton
                        onClick={() =>
                            setCurrentPage((p) => Math.max(1, p - 1))
                        }
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4 text-gray-500" />
                    </ActionButton>
                    <div className="flex items-center gap-1">
                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1,
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors ${page === currentPage ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                    <ActionButton
                        onClick={() =>
                            setCurrentPage((p) => Math.min(totalPages, p + 1))
                        }
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                    </ActionButton>
                </div>
            </div>

            <DeliveryReportModal
                isOpen={isReportModalOpen}
                onClose={() => {
                    setIsReportModalOpen(false);
                    setSelectedLog(null);
                }}
                log={selectedLog}
            />
        </div>
    );
}
