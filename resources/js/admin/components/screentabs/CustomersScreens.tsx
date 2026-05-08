import LaunchIcon from '@/shared/images/icons/launchIcon.svg?react';
import EditIcon from '@/shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';
import ReloadIcon from '@/shared/images/icons/reloadIcon.svg?react';
import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
import Button from '@/shared/sharedcomponents/ui/Button';
import { useState } from 'react';
import AddNewOss from '../modals/AddNewOss';
import EditOss from '../modals/EditOss';

interface OssRecord {
    id: number;
    title: string;
    status: string;
    displayMode: string;
    adIntegration: string;
    hardware: string;
    software: string;
    deviceName: string;
    initialDisplayMode: string;
    initialSoundAlerts: string;
    pairingCode: string;
}

const MegaphoneIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
    </svg>
);

export default function CustomersScreens() {
    const statusVariantMap: Record<string, BadgeVariant> = {
        Online: 'success',
        Offline: 'error',
    };

    const ossData: OssRecord[] = [
        {
            id: 1,
            title: 'The Main TV',
            status: 'Online',
            displayMode: 'Ready & Preparing',
            adIntegration: 'Ads Active',
            hardware: 'Samsung Smart TV 55"',
            software: 'Tizen Browser • v2.4.0',
            deviceName: 'The Main TV',
            initialDisplayMode: 'ready_preparing',
            initialSoundAlerts: 'ping_ready',
            pairingCode: '492 - 118',
        },
        {
            id: 2,
            title: 'The Quick Pickup',
            status: 'Online',
            displayMode: 'Ready Orders Only',
            adIntegration: 'Ads Disabled',
            hardware: 'iPad Air (Gen 4)',
            software: 'Safari • v2.4.0',
            deviceName: 'The Quick Pickup',
            initialDisplayMode: 'ready_only',
            initialSoundAlerts: 'disabled',
            pairingCode: '123 - 456',
        },
    ];

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedOss, setSelectedOss] = useState<OssRecord | null>(null);

    const handleEditClick = (record: OssRecord) => {
        setSelectedOss(record);
        setIsEditModalOpen(true);
    };

    return (
        <div className="w-full">
            {/** Header & Buttons */}
            <div className="mb-6 flex items-center justify-end gap-3">
                <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                    <MegaphoneIcon className="h-4 w-4 text-gray-500" />
                    Manage TV Ads
                </button>
                <Button onClick={() => setIsAddModalOpen(true)}>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Add New OSS Screen
                </Button>
            </div>

            {/** Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {ossData.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col overflow-hidden rounded-xl border border-borderColor bg-white shadow-sm"
                    >
                        <div className="flex-1 p-6">
                            <h2 className="mb-5 text-lg font-semibold text-gray-900">
                                {item.title}
                            </h2>
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Status
                                    </span>
                                    <Badge
                                        variant={
                                            statusVariantMap[item.status] ||
                                            'gray'
                                        }
                                        withDot={true}
                                        rounded="md"
                                    >
                                        {item.status}
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Display Mode
                                    </span>
                                    <span className="text-sm font-medium text-gray-800">
                                        {item.displayMode}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Ad Integration
                                    </span>
                                    <span
                                        className={`rounded px-2 py-0.5 text-xs font-medium ${item.adIntegration === 'Ads Active' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'}`}
                                    >
                                        {item.adIntegration}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Hardware
                                    </span>
                                    <span className="text-sm font-medium text-gray-800">
                                        {item.hardware}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Software
                                    </span>
                                    <span className="text-sm font-medium text-gray-800">
                                        {item.software}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
                            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                <LaunchIcon className="h-4 w-4" />
                                Launch
                            </button>
                            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                <ReloadIcon className="h-4 w-4" />
                                Reload
                            </button>
                            <button
                                onClick={() => handleEditClick(item)}
                                className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
                            >
                                <EditIcon className="h-4 w-4 text-iconColor" />
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <AddNewOss
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSave={() => setIsAddModalOpen(false)}
            />

            <EditOss
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={() => setIsEditModalOpen(false)}
                onUnpair={() => setIsEditModalOpen(false)}
                initialDeviceName={selectedOss?.deviceName}
                initialDisplayMode={selectedOss?.initialDisplayMode}
                initialSoundAlerts={selectedOss?.initialSoundAlerts}
                pairingCode={selectedOss?.pairingCode}
            />
        </div>
    );
}
