import EditCampaignModal from '@/superadmin/components/Modals/EditCampaignModal';
import ActionButton from '@/superadmin/components/ui/ActionButton';
import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
import { Trash2 } from 'lucide-react';
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

// Types

interface ScheduledItem {
    id: number;
    campaignTitle: string;
    channels: string[];
    audienceScope: string;
    scheduledFor: string;
    region?: string;
    segment?: string;
    role?: string;
    language?: string;
    body?: string;
}

// Static data

const scheduledData: ScheduledItem[] = [
    {
        id: 1,
        campaignTitle: 'Scheduled Maintenance',
        channels: ['Email', 'Dashboard Notification'],
        audienceScope: 'Global\nAll Users',
        scheduledFor: '03 Sept 2025\n11:30 AM',
        region: 'all_regions',
        segment: 'all_active',
        role: 'all_users',
        language: 'english',
        body: 'Dear Partners, we are scheduling a brief maintenance window on Saturday at 3:00 AM. Please ensure all active orders are closed before this time.',
    },
    {
        id: 2,
        campaignTitle: "New 'Split Bill' Feature",
        channels: ['WhatsApp', 'Dashboard Notification'],
        audienceScope: 'UAE, KSA\nPro Plan',
        scheduledFor: '04 Sept 2025\n01:15 PM',
        region: 'uae',
        segment: 'pro_plan',
        role: 'all_users',
        language: 'english',
        body: 'Hey! The new Split Bill feature is live. Update your app now!',
    },
    {
        id: 3,
        campaignTitle: 'Eid Promo Blast',
        channels: ['WhatsApp'],
        audienceScope: 'KSA\nAll Plans',
        scheduledFor: '05 Sept 2025\n09:45 AM',
        region: 'ksa',
        segment: 'all_active',
        role: 'all_users',
        language: 'arabic',
        body: 'Eid Mubarak! Enjoy special discounts this Eid season.',
    },
];

// Component

export default function ScheduleTab() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedCampaign, setSelectedCampaign] =
        useState<ScheduledItem | null>(null);
    const [data, setData] = useState(scheduledData);

    const handleDelete = (id: number) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div>
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="px-6 pb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Scheduled Queue
                    </h2>
                </div>

                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Campaign Title
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Channels
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Audience Scope
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Scheduled For <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium text-gray-900">
                                        {item.campaignTitle}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.channels.join(', ')}
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
                                        {item.scheduledFor
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
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <ActionButton
                                                onClick={() => {
                                                    setSelectedCampaign(item);
                                                    setIsEditModalOpen(true);
                                                }}
                                            >
                                                <PencilIcon className="h-4 w-4 text-gray-400" />
                                            </ActionButton>
                                            <ActionButton
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            >
                                                <Trash2 className="h-4 w-4 text-gray-400" />
                                            </ActionButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
            </div>

            <EditCampaignModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedCampaign(null);
                }}
                onConfirm={() => {
                    setIsEditModalOpen(false);
                    setSelectedCampaign(null);
                }}
                campaign={selectedCampaign}
            />
        </div>
    );
}
