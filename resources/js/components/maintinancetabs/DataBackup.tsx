import Badge from '@/components/Badge';
import ManualBackupModal from '@/components/Modals/ManualBackupModal';
import ActionButton from '@/components/ui/ActionButton';
import Button from '@/components/ui/Button';
import CustomDropdown from '@/components/ui/CustomDropdown';
import Upload from '@/images/icons/cloud.svg?react';
import Reverse from '@/images/icons/reverse.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import HardDrive from '@/images/icons/server.svg?react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
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

interface BackupItem {
    id: number;
    backupType: string;
    dayTime: string;
    scope: string;
    size: string;
    status: 'Success' | 'In Progress' | 'Failed';
}

// ─── Static data ─────────────────────────────────────────────────────────────

const backupData: BackupItem[] = [
    {
        id: 1,
        backupType: 'Full System',
        dayTime: '05 Sept 2025\n4:00 PM',
        scope: 'All Data',
        size: '1.1 TB',
        status: 'Success',
    },
    {
        id: 2,
        backupType: 'Incremental',
        dayTime: '06 Sept 2025\n5:00 PM',
        scope: 'Changes Only',
        size: '320 MB',
        status: 'In Progress',
    },
    {
        id: 3,
        backupType: 'Incremental',
        dayTime: '07 Sept 2025\n6:00 PM',
        scope: 'Changes Only',
        size: '12 MB',
        status: 'Failed',
    },
];

// ─── Filter options ───────────────────────────────────────────────────────────

const STATUS_OPTIONS = [
    { label: <span className="font-medium">Status: All</span>, value: 'all' },
    { label: '🟢 Success', value: 'success' },
    { label: '🔴 Failed', value: 'failed' },
    { label: '🔵 In Progress', value: 'in_progress' },
];

const TYPE_OPTIONS = [
    { label: <span className="font-medium">Type: All</span>, value: 'all' },
    { label: 'Full System', value: 'full_system' },
    { label: 'Incremental', value: 'incremental' },
    { label: 'Merchant Snapshot', value: 'merchant_snapshot' },
    { label: 'Manual Trigger', value: 'manual_trigger' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getStatusVariant = (status: BackupItem['status']) => {
    switch (status) {
        case 'Success':
            return 'success';
        case 'In Progress':
            return 'active';
        case 'Failed':
            return 'error';
    }
};

// ─── Component ────────────────────────────────────────────────────────────────

const DataBackup = () => {
    const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 6;

    const filteredBackups = backupData.filter((item) => {
        const matchesStatus =
            statusFilter === 'all' ||
            item.status.toLowerCase().replace(' ', '_') === statusFilter;
        const matchesType =
            typeFilter === 'all' ||
            item.backupType.toLowerCase().replace(' ', '_') === typeFilter;
        return matchesStatus && matchesType;
    });

    return (
        <div className="space-y-6">
            {/* ── Summary Cards ────────────────────────────────────────── */}
            <div className="grid grid-cols-2 gap-4">
                {/* Last Successful Backup */}
                {/* <div className="rounded-xl border border-borderColor p-6">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                        <Upload className="h-5 w-5 text-gray-600" />
                    </div>
                    <p className="mb-1 text-sm text-gray-500">
                        Last Successful Backup
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                        2 hrs ago
                    </p>
                </div> */}
                <div className="rounded-xl border border-borderColor p-6">
                    <div className="flex items-center gap-3">
                        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                            <Upload className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-semibold">
                                Last Successful Backup
                            </p>
                        </div>
                    </div>
                    <p className="mt-4 text-2xl font-semibold text-gray-900">
                        2 hours ago
                    </p>
                </div>

                {/* Storage Used */}
                <div className="rounded-xl border border-borderColor p-6">
                    <div className="flex items-center gap-3">
                        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                            <HardDrive className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-semibold">
                                Storage Used
                            </p>
                        </div>
                    </div>
                    <p className="mt-4 text-2xl font-semibold text-gray-900">
                        1.2 TB / 5 TB
                    </p>
                </div>
            </div>

            {/* ── System Backups Table ─────────────────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        System Backups
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="w-40">
                            <CustomDropdown
                                label=""
                                options={STATUS_OPTIONS}
                                value={statusFilter}
                                onChange={setStatusFilter}
                                placeholder="Status: All"
                            />
                        </div>
                        <div className="w-40">
                            <CustomDropdown
                                label=""
                                options={TYPE_OPTIONS}
                                value={typeFilter}
                                onChange={setTypeFilter}
                                placeholder="Type: All"
                            />
                        </div>
                        <Button onClick={() => setIsBackupModalOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" />
                            Trigger Manual Backup
                        </Button>
                    </div>
                </div>

                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Backup type
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Day/Time <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Scope
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Size <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Action
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {filteredBackups.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium text-gray-900">
                                        {item.backupType}
                                    </TableCell>
                                    <TableCell>
                                        {item.dayTime
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
                                        {item.scope}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.size}
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
                                    <TableCell className="flex justify-end">
                                        {item.status === 'Failed' && (
                                            <ActionButton
                                                onClick={() =>
                                                    setIsBackupModalOpen(true)
                                                }
                                            >
                                                <Reverse className="h-4 w-4" />
                                            </ActionButton>
                                        )}
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
                                className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                                    page === currentPage
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-500 hover:bg-gray-50'
                                }`}
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

            {/* ── Modal ─────────────────────────────────────────────────── */}
            <ManualBackupModal
                isOpen={isBackupModalOpen}
                onClose={() => setIsBackupModalOpen(false)}
                onConfirm={() => setIsBackupModalOpen(false)}
            />
        </div>
    );
};

export default DataBackup;
