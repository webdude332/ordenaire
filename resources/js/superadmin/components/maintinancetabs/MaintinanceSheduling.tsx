import Badge from '@/superadmin/components/Badge';
import CancelScheduleMaintenanceModal from '@/superadmin/components/Modals/CancelScheduleMaintinanceModal';
import EditScheduleMaintenanceModal from '@/superadmin/components/Modals/EditScheduleMaintinanceModal';
import ScheduleMaintenanceModal from '@/superadmin/components/Modals/ScheduleMaintinanceModal';
import ActionButton from '@/superadmin/components/ui/ActionButton';
import Button from '@/superadmin/components/ui/Button';
import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
import XIcon from '@shared/images/icons/x.svg?react';
import { Plus } from 'lucide-react';
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

interface MaintenanceItem {
    id: number;
    date: string;
    time: string;
    platform: string;
    scope: string;
    version: string;
    status: 'In Progress' | 'Scheduled' | 'Completed' | 'Cancelled';
}

const MaintenanceScheduling = () => {
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<MaintenanceItem | null>(
        null,
    );

    const maintenanceData: MaintenanceItem[] = [
        {
            id: 1,
            date: '05 Sept 2025',
            time: '10:00 PM – 02:00 AM (+1)',
            platform: 'POS App (iPad)',
            scope: 'Global (All Regio...',
            version: 'v5.4.0',
            status: 'In Progress',
        },
        {
            id: 2,
            date: '06 Sept 2025',
            time: '03:00 AM – 05:00 AM',
            platform: 'Merchant Portal',
            scope: 'UAE',
            version: 'Maintenance',
            status: 'Scheduled',
        },
        {
            id: 3,
            date: '07 Sept 2025',
            time: '01:00 AM – 02:00 AM',
            platform: 'Kiosk Machine',
            scope: 'Global',
            version: 'v1.5.0',
            status: 'Scheduled',
        },
    ];

    const getStatusVariant = (status: MaintenanceItem['status']) => {
        switch (status) {
            case 'In Progress':
                return 'success';
            case 'Scheduled':
                return 'gray';
            case 'Completed':
                return 'active';
            case 'Cancelled':
                return 'error';
            default:
                return 'gray';
        }
    };

    return (
        <div>
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Upcoming Scheduled Maintenance
                    </h2>
                    <Button onClick={() => setIsScheduleModalOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Schedule New Maintenance
                    </Button>
                </div>

                <TableContainerOne className="rounded-b-xl">
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Date/Time <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Platform
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Scope
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Version
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Link
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {maintenanceData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <div className="font-medium text-gray-900">
                                            {item.date}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {item.time}
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-medium text-gray-900">
                                        {item.platform}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.scope}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.version}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={getStatusVariant(
                                                item.status,
                                            )}
                                            withDot={true}
                                            rounded="full"
                                        >
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <ActionButton
                                                onClick={() => {
                                                    setSelectedItem(item);
                                                    setIsEditModalOpen(true);
                                                }}
                                            >
                                                <PencilIcon className="h-4 w-4 text-gray-400" />
                                            </ActionButton>
                                            <ActionButton
                                                onClick={() => {
                                                    setSelectedItem(item);
                                                    setIsCancelModalOpen(true);
                                                }}
                                            >
                                                <XIcon className="h-3 w-3 text-gray-400" />
                                            </ActionButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
            </div>

            <ScheduleMaintenanceModal
                isOpen={isScheduleModalOpen}
                onClose={() => setIsScheduleModalOpen(false)}
                onConfirm={() => setIsScheduleModalOpen(false)}
            />

            <EditScheduleMaintenanceModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedItem(null);
                }}
                onConfirm={() => {
                    setIsEditModalOpen(false);
                    setSelectedItem(null);
                }}
            />

            <CancelScheduleMaintenanceModal
                isOpen={isCancelModalOpen}
                onClose={() => {
                    setIsCancelModalOpen(false);
                    setSelectedItem(null);
                }}
                onConfirm={() => {
                    setIsCancelModalOpen(false);
                    setSelectedItem(null);
                }}
            />
        </div>
    );
};

export default MaintenanceScheduling;
