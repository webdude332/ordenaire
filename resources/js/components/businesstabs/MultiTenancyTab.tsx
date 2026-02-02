import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import Button from '@/components/ui/Button';
import PlusIcon from '@/images/icons/plus.svg?react';
import SelecterIcon from '@/images/icons/selectorIcon.svg?react';
import ArrowDown from '../../images/icons/chevron-down.svg?react';
import EyeIcon from '../../images/icons/eyeIcon.svg?react';
import Search from '../../images/icons/inputSearch.svg?react';
import PencilIcon from '../../images/icons/pencilIcon.svg?react';

// UI Components
import CustomDropdown from '@/components/ui/CustomDropdown';
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
    // Defaulting to first ID for preview purposes
    const [expandedRowId, setExpandedRowId] = useState<string | null>(
        'BIZ-2050',
    );
    const [selectedStatus, setSelectedStatus] = useState('');

    const toggleRow = (id: string) => {
        setExpandedRowId((prev) => (prev === id ? null : id));
    };

    const tenancyData = [
        {
            id: 'BIZ-2050',
            name: 'Tea Time',
            status: 'Active',
            admin: 'Noah Pierre',
            outlets: 6,
            location: 'Dubai Marina, Dubai',
            outletDetails: [
                {
                    name: 'StarBites - Marina',
                    id: 'BIZ-2050',
                    status: 'Active',
                    admin: 'Lucas Williams',
                    package: 'Standard',
                    address: 'The Dubai Mall, Downtown...',
                },
                {
                    name: 'SushiWorld - Jumeirah...',
                    id: 'BIZ-2051',
                    status: 'Active',
                    admin: 'Emma Johnson',
                    package: 'Pro',
                    address: 'Mall of the Emirates, Al Ba...',
                },
                {
                    name: 'PastaPalace - Downto...',
                    id: 'BIZ-2057',
                    status: 'Active',
                    admin: 'Ava Martinez',
                    package: 'Pro',
                    address: 'City Walk, Jumeirah',
                },
                {
                    name: 'VeganVibes - Dubai M...',
                    id: 'BIZ-2058',
                    status: 'Active',
                    admin: 'Ethan Brown',
                    package: 'Pro',
                    address: 'Ibn Battuta Mall, Jebel Ali',
                },
            ],
        },
        {
            id: 'BIZ-2051',
            name: 'Coffee Break',
            status: 'Active',
            admin: 'Emma Johnson',
            outlets: 7,
            location: 'Jumeirah Beach, Dubai',
            outletDetails: [],
        },
        {
            id: 'BIZ-2052',
            name: 'Lunch Meeting',
            status: 'Active',
            admin: 'Liam Smith',
            outlets: 8,
            location: 'Downtown Dubai, Dubai',
            outletDetails: [],
        },
    ];

    return (
        <div className="w-full">
            {/* Filters & Search Row */}
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <Search className="h-4 w-4" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by business name, ID..."
                            className="w-80 rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm text-gray-700 shadow-sm placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <CustomDropdown
                            label=""
                            options={[
                                {
                                    label: 'Location: All',
                                    value: 'all',
                                },
                                {
                                    label: 'UAE',
                                    value: 'UAE',
                                },
                                {
                                    label: 'Saudi Arabia',
                                    value: 'saudiArabia',
                                },
                                {
                                    label: 'Qatar',
                                    value: 'Qatar',
                                },
                                {
                                    label: 'Bahrain',
                                    value: 'Bahrain',
                                },
                            ]}
                            value={selectedStatus}
                            onChange={setSelectedStatus}
                            placeholder="Location: All"
                        />
                    </div>

                    <div className="relative">
                        <CustomDropdown
                            label=""
                            options={[
                                {
                                    label: 'Status: All',
                                    value: 'all',
                                },
                                {
                                    label: 'Active',
                                    value: 'Expired',
                                },
                                {
                                    label: 'Archived',
                                    value: 'Archived',
                                },
                                {
                                    label: 'Pending',
                                    value: 'Pending',
                                },
                            ]}
                            value={selectedStatus}
                            onChange={setSelectedStatus}
                            placeholder="Status: All"
                        />
                    </div>
                </div>
            </div>

            {/* Expandable Table Implementation */}
            <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
                <Table>
                    {/* Header Border */}
                    <TableHeader>
                        <TableHead className="py-4 pl-6 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                            Business Name
                        </TableHead>
                        <TableHead className="py-4">
                            <div className="flex items-center gap-1 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                Status
                                <SelecterIcon className="h-4 w-4 text-gray-400" />
                            </div>
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                            Admin
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                            Outlets
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                            Primary Location
                        </TableHead>
                        <TableHead className="py-4 pr-6 text-right text-xs font-semibold tracking-wider text-gray-500 uppercase">
                            Actions
                        </TableHead>
                    </TableHeader>
                    <TableBody>
                        {tenancyData.map((item, idx) => {
                            const isExpanded = expandedRowId === item.id;

                            return (
                                <div key={idx} style={{ display: 'contents' }}>
                                    {/* Main Row - Added border-b border-gray-200 */}
                                    <TableRow
                                        className={`group border-b border-gray-200 transition-colors hover:bg-gray-50 ${isExpanded ? 'bg-gray-50' : 'bg-white'}`}
                                    >
                                        <TableCell className="py-4 pl-6">
                                            <div className="font-semibold text-gray-900">
                                                {item.name}
                                            </div>
                                            <div className="mt-0.5 text-xs text-gray-500">
                                                {item.id}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <BusinessStatusBadge
                                                status={item.status}
                                            />
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="font-medium text-gray-700">
                                                {item.admin}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="font-medium text-gray-700">
                                                {item.outlets}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="text-gray-500">
                                                {item.location}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 pr-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href="/business/businessoverview">
                                                    <ActionButton>
                                                        <EyeIcon className="h-4 w-4 text-gray-400" />
                                                    </ActionButton>
                                                </Link>
                                                <Link href="/business/editbusiness">
                                                    <ActionButton>
                                                        <PencilIcon className="h-4 w-4 text-gray-400" />
                                                    </ActionButton>
                                                </Link>
                                                <ActionButton
                                                    onClick={() =>
                                                        toggleRow(item.id)
                                                    }
                                                >
                                                    <ArrowDown
                                                        className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                                                            isExpanded
                                                                ? 'rotate-180'
                                                                : ''
                                                        }`}
                                                    />
                                                </ActionButton>
                                            </div>
                                        </TableCell>
                                    </TableRow>

                                    {/* Expanded Row - Added border-b border-gray-200 to separate from next item */}
                                    {isExpanded && (
                                        <tr className="border-b border-gray-200 bg-[#F8FFEB]">
                                            <td
                                                colSpan={6}
                                                className="border-none p-0"
                                            >
                                                {/* Nested Table Container */}
                                                <div className="w-full">
                                                    {/* Nested Header */}
                                                    <div className="grid grid-cols-12 gap-4 border-b border-[#E0F2C3] bg-[#F9F7FA] px-6 py-3 text-xs font-semibold text-gray-500">
                                                        <div className="col-span-3">
                                                            Outlet Info
                                                        </div>
                                                        <div className="col-span-2">
                                                            Status
                                                        </div>
                                                        <div className="col-span-2">
                                                            Branch Admin
                                                        </div>
                                                        <div className="col-span-1">
                                                            Package
                                                        </div>
                                                        <div className="col-span-3">
                                                            Address
                                                        </div>
                                                        <div className="col-span-1 text-right">
                                                            Actions
                                                        </div>
                                                    </div>

                                                    {/* Nested Rows */}
                                                    <div className="max-h-[400px] overflow-y-auto bg-[#F8FFEB]">
                                                        {item.outletDetails.map(
                                                            (
                                                                outlet,
                                                                outletIdx,
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        outletIdx
                                                                    }
                                                                    className="grid grid-cols-12 gap-4 border-b border-[#E0F2C3] px-6 py-4 text-sm transition-colors last:border-b-0 hover:bg-[#EBF7D5]"
                                                                >
                                                                    {/* Outlet Info */}
                                                                    <div className="col-span-3">
                                                                        <div className="font-semibold text-gray-900">
                                                                            {
                                                                                outlet.name
                                                                            }
                                                                        </div>
                                                                        <div className="mt-0.5 text-xs text-gray-500">
                                                                            {
                                                                                outlet.id
                                                                            }
                                                                        </div>
                                                                    </div>

                                                                    {/* Status */}
                                                                    <div className="col-span-2 flex items-center">
                                                                        <BusinessStatusBadge
                                                                            status={
                                                                                outlet.status
                                                                            }
                                                                        />
                                                                    </div>

                                                                    {/* Admin */}
                                                                    <div className="col-span-2 flex items-center font-medium text-gray-700">
                                                                        {
                                                                            outlet.admin
                                                                        }
                                                                    </div>

                                                                    {/* Package */}
                                                                    <div className="col-span-1 flex items-center text-gray-700">
                                                                        {
                                                                            outlet.package
                                                                        }
                                                                    </div>

                                                                    {/* Address */}
                                                                    <div className="col-span-3 flex items-center truncate text-gray-500">
                                                                        {
                                                                            outlet.address
                                                                        }
                                                                    </div>

                                                                    {/* Actions */}
                                                                    <div className="col-span-1 flex items-center justify-end gap-2">
                                                                        <Link href="/business/businessoverviewchild">
                                                                            <ActionButton>
                                                                                <EyeIcon className="h-4 w-4 text-gray-400" />
                                                                            </ActionButton>
                                                                        </Link>
                                                                        <Link href="/business/editbusiness">
                                                                            <ActionButton>
                                                                                <PencilIcon className="h-4 w-4 text-gray-400" />
                                                                            </ActionButton>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>

                                                    {/* Footer Action */}
                                                    <div className="border-t border-[#E0F2C3] bg-[#F8FFEB] px-6 py-4">
                                                        <Link href="/business/registerwizard">
                                                            <Button>
                                                                <PlusIcon className="h-4 w-4" />
                                                                Add new outlet
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </div>
                            );
                        })}
                    </TableBody>
                </Table>

                {/* Pagination */}
                <div className="">
                    <Pagination />
                </div>
            </TableContainer>
        </div>
    );
};

export default MultiTenancyTab;
