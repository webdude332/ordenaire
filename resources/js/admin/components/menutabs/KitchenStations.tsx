import { useState } from 'react';

// Shared UI Components
import ActionButton from '@/shared/sharedcomponents/ui/ActionButton';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import Pagination from '@/shared/sharedcomponents/ui/Pagination';
import StatusBadge from '@/shared/sharedcomponents/ui/StatusBadge';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '@/shared/sharedcomponents/ui/Table';

// TODO: Replace these with your actual icon imports
import TrashIcon from '@/shared/images/icons/delBold.svg?react';
import ChevronDown from '@shared/images/icons/chevron-down.svg?react';
import ExportIcon from '@shared/images/icons/exportIcon.svg?react';
import SearchIcon from '@shared/images/icons/inputSearch.svg?react';
import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@shared/images/icons/plus.svg?react';

const KitchenStations = () => {
    const [selectedStatus, setSelectedStatus] = useState('');

    const stationsData = [
        {
            id: '1',
            name: 'Hot Kitchen',
            kdsScreens: 1,
            printers: 2,
            categoriesAssigned: 14,
            status: 'Active',
        },
        {
            id: '2',
            name: 'Cold Section',
            kdsScreens: 1,
            printers: 0,
            categoriesAssigned: 4,
            status: 'Active',
        },
        {
            id: '3',
            name: 'Bar',
            kdsScreens: 0,
            printers: 0,
            categoriesAssigned: 0,
            status: 'Inactive',
        },
    ];

    return (
        <div className="w-full">
            {/* Filters Row */}
            <div className="mb-6 flex items-center justify-between">
                {/* Search */}
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <SearchIcon className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search stations..."
                        className="w-80 rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm text-gray-700 shadow-sm placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                    />
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        <ExportIcon className="h-4 w-4" />
                        Export
                        <ChevronDown className="h-4 w-4" />
                    </button>
                    <CustomDropdown
                        label=""
                        options={[
                            { label: 'Status: All', value: 'all' },
                            { label: 'Active', value: 'active' },
                            { label: 'Inactive', value: 'inactive' },
                        ]}
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                        placeholder="Status: All"
                    />
                    <Button>
                        <PlusIcon className="h-4 w-4" />
                        Add Station
                    </Button>
                </div>
            </div>

            {/* Table */}
            <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Kitchen Stations List
                    </h2>
                </div>

                <Table>
                    <TableHeader>
                        <TableHead className="py-4 pl-6 text-xs font-semibold text-gray-500">
                            Station Name
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Connected Devices
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Assignment Status
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Status
                        </TableHead>
                        <TableHead className="py-4 pr-6 text-right text-xs font-semibold text-gray-500">
                            Actions
                        </TableHead>
                    </TableHeader>
                    <TableBody>
                        {stationsData.map((station) => (
                            <TableRow
                                key={station.id}
                                className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                            >
                                {/* Station Name */}
                                <TableCell className="py-4 pl-6">
                                    <div className="font-semibold text-gray-900">
                                        {station.name}
                                    </div>
                                </TableCell>

                                {/* Connected Devices */}
                                <TableCell className="py-4">
                                    <div className="text-gray-700">
                                        {station.kdsScreens} KDS Screen
                                    </div>
                                    <div className="mt-0.5 text-xs text-gray-500">
                                        {station.printers} Printers
                                    </div>
                                </TableCell>

                                {/* Assignment Status */}
                                <TableCell className="py-4">
                                    <div className="text-gray-700">
                                        {station.categoriesAssigned} Categories
                                        assigned
                                    </div>
                                </TableCell>

                                {/* Status */}
                                <TableCell className="py-4">
                                    <StatusBadge status={station.status} />
                                </TableCell>

                                {/* Actions */}
                                <TableCell className="py-4 pr-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <ActionButton>
                                            <PencilIcon className="h-4 w-4 text-gray-400" />
                                        </ActionButton>
                                        <ActionButton>
                                            <TrashIcon className="h-4 w-4 text-gray-400" />
                                        </ActionButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div>
                    <Pagination />
                </div>
            </TableContainer>
        </div>
    );
};

export default KitchenStations;
