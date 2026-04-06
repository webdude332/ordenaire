import Badge from '@/superadmin/components/Badge';
import EditReleaseModal from '@/superadmin/components/Modals/EditRelaeaseModal';
import LogReleaseModal from '@/superadmin/components/Modals/LogRealeaseModal';
import ReleaseDetailsModal from '@/superadmin/components/Modals/ReleaseDetails';
import ActionButton from '@/superadmin/components/ui/ActionButton';
import Button from '@/superadmin/components/ui/Button';
import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
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

// ─── Types ────────────────────────────────────────────────────────────────────

interface ReleaseItem {
    id: number;
    platform: string;
    version: string;
    releaseDate: string;
    target: string;
    status: 'Live' | 'In Review' | 'Scheduled' | 'Rolled Back';
    link: string;
    changelog: string;
    loggedBy: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

const ReleaseMgmt = () => {
    const [isLogModalOpen, setIsLogModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ReleaseItem | null>(null);

    const releaseData: ReleaseItem[] = [
        {
            id: 1,
            platform: 'Merchant Portal',
            version: 'v5.3.3',
            releaseDate: '05 Sept 2025',
            target: 'Web',
            status: 'Live',
            link: 'https://apps.apple.com/...',
            changelog:
                "Added new split-payment feature for large groups. Fixed crash issue when selecting 'Cash' on offline mode. Updated UI for login screen.",
            loggedBy: 'Olivia Rhye (Admin) on 05 Sept 2025',
        },
        {
            id: 2,
            platform: 'POS App',
            version: 'v5.3.4',
            releaseDate: '06 Sept 2025',
            target: 'iPad',
            status: 'In Review',
            link: 'https://apps.apple.com/...',
            changelog:
                "Added new split-payment feature for large groups. Fixed crash issue when selecting 'Cash' on offline mode. Updated UI for login screen.",
            loggedBy: 'Olivia Rhye (Admin) on 06 Sept 2025',
        },
        {
            id: 3,
            platform: 'KDS System',
            version: 'v5.3.5',
            releaseDate: '07 Sept 2025',
            target: 'Android Tablet',
            status: 'Live',
            link: '',
            changelog: 'Performance improvements and bug fixes.',
            loggedBy: 'Olivia Rhye (Admin) on 07 Sept 2025',
        },
        {
            id: 4,
            platform: 'Consumer App',
            version: 'v5.4.0',
            releaseDate: '08 Sept 2025',
            target: 'Mobile Web',
            status: 'Live',
            link: '',
            changelog: 'New consumer ordering interface.',
            loggedBy: 'Olivia Rhye (Admin) on 08 Sept 2025',
        },
        {
            id: 5,
            platform: 'Kiosk Machine',
            version: 'v5.4.1',
            releaseDate: '09 Sept 2025',
            target: 'Hardware',
            status: 'Rolled Back',
            link: '',
            changelog: 'Critical hotfix for payment processing.',
            loggedBy: 'Olivia Rhye (Admin) on 09 Sept 2025',
        },
        {
            id: 6,
            platform: 'WhatsApp Marketing',
            version: 'v5.4.1',
            releaseDate: '09 Sept 2025',
            target: 'Web',
            status: 'Live',
            link: '',
            changelog: 'WhatsApp campaign automation improvements.',
            loggedBy: 'Olivia Rhye (Admin) on 09 Sept 2025',
        },
    ];

    const getStatusVariant = (status: ReleaseItem['status']) => {
        switch (status) {
            case 'Live':
                return 'success';
            case 'In Review':
                return 'warning';
            case 'Scheduled':
                return 'gray';
            case 'Rolled Back':
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
                        Unified Release History
                    </h2>
                    <Button onClick={() => setIsLogModalOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Log New Release
                    </Button>
                </div>

                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Platform
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Version
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Release Date <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Target
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Link
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {releaseData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium text-gray-900">
                                        {item.platform}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.version}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.releaseDate}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.target}
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
                                    <TableCell>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                className="text-sm"
                                            >
                                                Open
                                            </a>
                                        ) : (
                                            <span className="text-sm text-gray-400">
                                                —
                                            </span>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <ActionButton
                                                onClick={() => {
                                                    setSelectedItem(item);
                                                    setIsDetailsModalOpen(true);
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
                                            <ActionButton
                                                onClick={() => {
                                                    setSelectedItem(item);
                                                    setIsEditModalOpen(true);
                                                }}
                                            >
                                                <PencilIcon className="h-4 w-4 text-gray-400" />
                                            </ActionButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
            </div>

            {/* ── Modals ────────────────────────────────────────────────── */}
            <LogReleaseModal
                isOpen={isLogModalOpen}
                onClose={() => setIsLogModalOpen(false)}
                onConfirm={() => setIsLogModalOpen(false)}
            />

            <EditReleaseModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedItem(null);
                }}
                onConfirm={() => {
                    setIsEditModalOpen(false);
                    setSelectedItem(null);
                }}
                release={selectedItem}
            />

            <ReleaseDetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => {
                    setIsDetailsModalOpen(false);
                    setSelectedItem(null);
                }}
                release={selectedItem}
            />
        </div>
    );
};

export default ReleaseMgmt;
