import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react'; // Added useEffect
import BusinessStatusBadge from '../ui/BusinessStatusBadge';
import Button from '../ui/Button';

// Icons
import Suchi from '../../images/icons/Suchi.svg?react';
import RightArrow from '../../images/icons/arrowRight.svg?react';
import BackArrow from '../../images/icons/backArrow.svg?react';
import BranchIcon from '../../images/icons/branchIcon.svg?react';
import Burger from '../../images/icons/burger.svg?react';
import Cafe from '../../images/icons/cafeIcon.svg?react';
import Desert from '../../images/icons/desert.svg?react';
import EyeIcon from '../../images/icons/eyeIcon.svg?react';
import GridIcon from '../../images/icons/gridIcon.svg?react';
import Search from '../../images/icons/inputSearch.svg?react';
import ListIcon from '../../images/icons/listsIcon.svg?react';
import Pasta from '../../images/icons/pasta.svg?react';
import PencilIcon from '../../images/icons/pencilIcon.svg?react';
import Pizza from '../../images/icons/pizza_one.svg?react';
import PlusIcon from '../../images/icons/plus.svg?react';
import Salad from '../../images/icons/salad.svg?react';
import SelectorIcon from '../../images/icons/selectorIcon.svg?react';
import Snack from '../../images/icons/snack.svg?react';
import Tea from '../../images/icons/teaIcon.svg?react';
import ActionButton from '../ui/ActionButton';
import CustomDropdown from '../ui/CustomDropdown';

const BusinessProfilesTab = () => {
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>(() => {
        const savedView = localStorage.getItem('business_view_preference');
        return savedView === 'grid' || savedView === 'list'
            ? savedView
            : 'grid';
    });

    // Update localStorage whenever viewMode
    useEffect(() => {
        localStorage.setItem('business_view_preference', viewMode);
    }, [viewMode]);

    const businesses = [
        {
            id: 'BIZ-2049',
            name: 'Tea Time HQ',
            icon: Cafe,
            status: 'Active',
            type: 'Parent',
            admin: 'Rahul Raj',
            lastActive: 'Aug 18, 2025',
            branches: 5,
            bgColor: '#FEF3C7',
        },
        {
            id: 'BIZ-2051',
            name: 'Tea Time',
            icon: Tea,
            status: 'Active',
            type: 'Parent',
            admin: 'Omar Ali',
            lastActive: 'Jul 5, 2025',
            branches: 2,
            bgColor: '#E0E7FF',
        },
        {
            id: 'BIZ-2053',
            name: 'Sushi Spot',
            icon: Suchi,
            status: 'Active',
            type: 'Branch',
            admin: 'Kenji Takahashi',
            lastActive: 'Nov 22, 2025',
            parent: 'Tea Time HQ (BIZ-2055)',
            bgColor: '#FCE7F3',
            location: 'Jumeirah',
        },
        {
            id: 'BIZ-2054',
            name: 'Pizza Pan',
            icon: Pizza,
            status: 'Active',
            type: 'Parent',
            admin: 'Elena Petrova',
            lastActive: 'Dec 1, 2025',
            branches: 7,
            bgColor: '#FED7AA',
        },
        {
            id: 'BIZ-2055',
            name: 'Pasta Palace',
            icon: Pasta,
            status: 'Expired',
            type: 'Branch',
            admin: 'Luca Bianchi',
            lastActive: 'Jan 15, 2026',
            parent: 'Tea Time HQ (BIZ-2053)',
            bgColor: '#FEE2E2',
            location: 'Dubai Mall',
        },
        {
            id: 'BIZ-2056',
            name: 'Salad Station',
            icon: Salad,
            status: 'Archived',
            type: 'Parent',
            admin: 'Aisha Salim',
            lastActive: 'Feb 20, 2026',
            branches: 2,
            bgColor: '#D1D5DB',
        },
        {
            id: 'BIZ-2057',
            name: 'Dessert Oasis',
            icon: Desert,
            status: 'Active',
            type: 'Parent',
            admin: 'Nadia Alsayed',
            lastActive: 'Mar 28, 2026',
            branches: 3,
            bgColor: '#DBEAFE',
        },
        {
            id: 'BIZ-2052',
            name: 'Burger Castle',
            icon: Burger,
            status: 'Archived',
            type: 'Parent',
            admin: 'Fatima Khan',
            lastActive: 'Oct 10, 2025',
            branches: 4,
            bgColor: '#E5E7EB',
        },
        {
            id: 'BIZ-2058',
            name: 'Snack Shop',
            icon: Snack,
            status: 'Active',
            type: 'Branch',
            admin: 'Samir Patel',
            lastActive: 'Apr 10, 2026',
            parent: 'Tea Time HQ',
            bgColor: '#FEF3C7',
        },
    ];

    return (
        <>
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search />
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-80 rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                        />
                    </div>
                    <div className="relative w-32">
                        <CustomDropdown
                            label=""
                            options={[
                                {
                                    label: 'Status All',
                                    value: 'all',
                                },
                                {
                                    label: 'Admin',
                                    value: 'admin',
                                },
                                {
                                    label: 'Accounts',
                                    value: 'accounts',
                                },
                            ]}
                            value={selectedStatus}
                            onChange={setSelectedStatus}
                            placeholder="Status All"
                        />
                    </div>
                    {/* View Switcher */}
                    <div className="inline-flex overflow-hidden rounded-xl border border-gray-300">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex cursor-pointer items-center gap-2 px-5 py-2.5 text-sm font-medium transition ${viewMode === 'grid' ? 'bg-[#F8FFEB] text-[#578500]' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                        >
                            <GridIcon className="h-5 w-5" /> Grid
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`flex cursor-pointer items-center gap-2 px-5 py-2 text-sm font-medium transition ${viewMode === 'list' ? 'bg-[#F8FFEB] text-[#578500]' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                        >
                            <ListIcon className="h-5 w-5" /> List
                        </button>
                        <div className="w-px bg-gray-300" />
                    </div>
                </div>
                <Link href="/business/registerwizard">
                    <Button className="cursor-pointer py-2.5">
                        <PlusIcon className="h-5 w-5 text-[#C4FF52]" /> Register
                        New Businesses
                    </Button>
                </Link>
            </div>

            {viewMode === 'grid' ? (
                <div className="grid grid-cols-3 gap-6">
                    {businesses.map((business) => (
                        <div
                            key={business.id}
                            className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                        >
                            <div className="flex items-start justify-between p-6 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                                        <business.icon className="h-9 w-9" />
                                    </div>
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {business.name}
                                    </h3>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <BusinessStatusBadge
                                        status={business.status}
                                    />
                                    <span
                                        className={`inline-block rounded-lg px-2 py-0.5 text-xs font-medium ${business.type === 'Parent' ? 'border border-[#D5D9EB] bg-[#F8F9FC] text-[#363F72]' : 'border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]'}`}
                                    >
                                        {business.type}
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2 px-6 pb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">
                                        Admin:
                                    </span>
                                    <span className="font-medium text-gray-900">
                                        {business.admin}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">
                                        Last active:
                                    </span>
                                    <span className="font-medium text-gray-900">
                                        {business.lastActive}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2 text-sm">
                                    <span className="text-gray-500">ID:</span>
                                    <span className="font-medium text-gray-900">
                                        {business.id}
                                    </span>
                                </div>
                                {business.branches ? (
                                    <div className="flex items-center gap-1.5 pt-2 text-sm text-gray-600">
                                        <BranchIcon className="h-4 w-4" />
                                        <span>
                                            {business.branches} Branches
                                        </span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1.5 pt-2 text-sm text-gray-600">
                                        <BranchIcon className="h-4 w-4" />
                                        <span>
                                            Parent:{' '}
                                            <a
                                                href="#"
                                                className="font-medium text-green-700 underline hover:underline"
                                            >
                                                {business.parent}
                                            </a>
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-end gap-3 border-t border-gray-100 px-6 py-3">
                                <Link href="/business/businessoverview">
                                    <button className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900">
                                        View
                                    </button>
                                </Link>
                                <Link href="/business/editbusiness">
                                    <button className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900">
                                        Edit
                                    </button>
                                </Link>
                                <button className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900">
                                    Login
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <table className="w-full text-left text-sm text-gray-500">
                        <thead className="border-b border-borderColor bg-gray-50 text-xs text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-semibold">
                                    <div className="flex items-center gap-1">
                                        Business ID
                                        <span>
                                            <SelectorIcon className="h-3 w-3 text-iconColor" />
                                        </span>
                                    </div>
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    Name
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    <div className="flex items-center gap-1">
                                        Type
                                        <span>
                                            <SelectorIcon className="h-3 w-3 text-iconColor" />
                                        </span>
                                    </div>
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    Parent Business
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    <div className="flex items-center gap-1">
                                        Status
                                        <span>
                                            <SelectorIcon className="h-3 w-3 text-iconColor" />
                                        </span>
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-right font-semibold">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {businesses.map((business) => (
                                <tr
                                    key={business.id}
                                    className="hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 text-gray-900">
                                        {business.id}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-900">
                                                {business.name}
                                            </span>

                                            {business.location && (
                                                <span className="text-sm font-normal text-gray-500">
                                                    {business.location}
                                                </span>
                                            )}
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-block rounded-lg px-2 py-0.5 text-xs font-medium ${business.type === 'Parent' ? 'border border-[#D5D9EB] bg-[#F8F9FC] text-[#363F72]' : 'border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]'}`}
                                        >
                                            {business.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {business.parent || '-'}
                                    </td>
                                    <td className="px-6 py-4">
                                        <BusinessStatusBadge
                                            status={business.status}
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href="/business/businessoverview">
                                                {/* <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                                    <EyeIcon className="h-4 w-4 text-[#B5B0BA]" />
                                                </button> */}
                                                <ActionButton>
                                                    <EyeIcon className="h-4 w-4 text-[#B5B0BA]" />
                                                </ActionButton>
                                            </Link>
                                            <Link href="/business/editbusiness">
                                                {/* <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                                    <PencilIcon className="h-4 w-4 text-[#B5B0BA]" />
                                                </button> */}
                                                <ActionButton>
                                                    <PencilIcon className="h-4 w-4 text-[#B5B0BA]" />
                                                </ActionButton>
                                            </Link>
                                            <Link>
                                                {/* <button className="cursor-pointer rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-semibold text-[#B5B0BA] hover:bg-gray-50 hover:text-gray-900">
                                                    Login
                                                </button> */}
                                                <ActionButton>
                                                    Login
                                                </ActionButton>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Pagination - Unchanged */}
                    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4">
                        <button className="flex items-center justify-center rounded-lg border border-[#B5B0BA] bg-white p-1">
                            <BackArrow className="h-5 w-5 text-[#B5B0BA]" />
                        </button>
                        <div className="flex items-center justify-between gap-2">
                            <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-sm font-medium text-[#578500]">
                                1
                            </button>
                            <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                2
                            </button>
                            <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                3
                            </button>
                        </div>
                        <button className="flex items-center justify-center rounded-lg border border-[#B5B0BA] bg-white p-1">
                            <RightArrow className="h-5 w-5 text-[#B5B0BA]" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default BusinessProfilesTab;
