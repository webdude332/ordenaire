import { useState } from 'react';
// Icons
import Minimize from '@/images/icons/minimize.svg?react';
import SelecterIcon from '@/images/icons/selectorIcon.svg?react';
import ArrowDown from '../../images/icons/chevron-down.svg?react';
import EyeIcon from '../../images/icons/eyeIcon.svg?react';
import Search from '../../images/icons/inputSearch.svg?react';
import PencilIcon from '../../images/icons/pencilIcon.svg?react';

// UI Components
import ActionButton from '../ui/ActionButton';
import BusinessStatusBadge from '../ui/BusinessStatusBadge';
import Pagination from '../ui/Pagination';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/Table';

const MultiTenancyTab = () => {
//     const [expandedRowId, setExpandedRowId] = useState(null);

// const toggleRow = (id) => {
//     setExpandedRowId(prev => prev === id ? null : id);
// };
    const tenancyData = [
        {
            id: 'BIZ-2050',
            name: 'Tea Time',
            status: 'Active',
            admin: 'Noah Pierre',
            outlets: 6,
            location: 'Dubai Marina, Dubai',
        },
        {
            id: 'BIZ-2051',
            name: 'Coffee Break',
            status: 'Active',
            admin: 'Emma Johnson',
            outlets: 7,
            location: 'Jumeirah Beach, Dubai',
        },
        {
            id: 'BIZ-2052',
            name: 'Lunch Meeting',
            status: 'Active',
            admin: 'Liam Smith',
            outlets: 8,
            location: 'Downtown Dubai, Dubai',
        },
        {
            id: 'BIZ-2050',
            name: 'Tea Time',
            status: 'Active',
            admin: 'Ava Brown',
            outlets: 6,
            location: 'Al Fahidi, Dubai',
        },
        {
            id: 'BIZ-2053',
            name: 'Team Huddle',
            status: 'Active',
            admin: 'Elijah Garcia',
            outlets: 9,
            location: 'Palm Jumeirah, Dubai',
        },
        {
            id: 'BIZ-2054',
            name: 'Project Review',
            status: 'Active',
            admin: 'Sophia Martinez',
            outlets: 10,
            location: 'Bur Dubai, Dubai',
        },
        {
            id: 'BIZ-2055',
            name: 'Strategy Session',
            status: 'Active',
            admin: 'Mason White',
            outlets: 11,
            location: 'Dubai Creek, Dubai',
        },
        {
            id: 'BIZ-2056',
            name: 'Client Check-In',
            status: 'Expired',
            admin: 'Isabella Lee',
            outlets: 12,
            location: 'Design District, Dubai',
        },
        {
            id: 'BIZ-2057',
            name: 'Brainstorming Hour',
            status: 'Archived',
            admin: 'Lucas Williams',
            outlets: 13,
            location: 'Al Quoz, Dubai',
        },
    ];

    return (
        <>
            {/* Filters & Search Row */}
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by business name, ID..."
                            className="w-68 rounded-lg border border-gray-300 py-2 pr-4 pl-10 text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#8CDD05] focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Location Filter */}
                    <details className="group relative">
                        <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:ring-2 focus:ring-[#8CDD05] focus:outline-none">
                            <span>Location: All</span>
                            <ArrowDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                            <ul className="py-1">
                                {['All', 'Dubai', 'Abu Dhabi'].map((item) => (
                                    <li key={item}>
                                        <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-[#F9F7FA]">
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className="fixed inset-0 z-10 hidden h-full w-full bg-transparent group-open:block"
                            onClick={(e) => {
                                e.currentTarget.parentElement?.removeAttribute(
                                    'open',
                                );
                            }}
                        />
                    </details>

                    {/* Status Filter */}
                    <details className="group relative">
                        <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:ring-2 focus:ring-[#8CDD05] focus:outline-none">
                            <span>Status: All</span>
                            <ArrowDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                            <ul className="py-1">
                                {['All', 'Active', 'Expired', 'Archived'].map(
                                    (item) => (
                                        <li key={item}>
                                            <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-[#F9F7FA]">
                                                {item}
                                            </button>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                        <div
                            className="fixed inset-0 z-10 hidden h-full w-full bg-transparent group-open:block"
                            onClick={(e) => {
                                e.currentTarget.parentElement?.removeAttribute(
                                    'open',
                                );
                            }}
                        />
                    </details>
                </div>
            </div>

            {/* Reusable Table Implementation */}
            <TableContainer>
                <Table>
                    <TableHeader>
                        <TableHead>Business Name</TableHead>
                        <TableHead>
                            <div className="flex items-center">
                                Status
                                <span className="ml-1 flex items-center">
                                    <SelecterIcon />
                                </span>
                            </div>
                        </TableHead>
                        <TableHead>Branch Admin</TableHead>
                        <TableHead>Outlets</TableHead>
                        <TableHead>Primary Location</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableHeader>
                    <TableBody>
                        {tenancyData.map((item, idx) => (
                            <TableRow key={idx}>
                                <TableCell>
                                    <div className="font-medium text-gray-900">
                                        {item.name}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {item.id}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <BusinessStatusBadge status={item.status} />
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium text-gray-900">
                                        {item.admin}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium text-gray-900">
                                        {item.outlets}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="text-gray-500">
                                        {item.location}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <ActionButton>
                                            <EyeIcon className="h-4 w-4 text-[#B5B0BA]" />
                                        </ActionButton>
                                        <ActionButton>
                                            <PencilIcon className="h-4 w-4 text-[#B5B0BA]" />
                                        </ActionButton>
                                        <ActionButton>
                                            <Minimize className="h-4 w-4 text-[#B5B0BA]" />
                                        </ActionButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Reusable Pagination */}
                <Pagination />
            </TableContainer>
        </>
    );
};

export default MultiTenancyTab;
