import SidePannel from '@/components/SidePannel';
import { Link } from '@inertiajs/react';
import TopBar from '@/components/TopBar';
import { useState } from 'react';
import Button from '../components/ui/Button';
import Suchi from '../images/icons/Suchi.svg?react';
import BranchIcon from '../images/icons/branchIcon.svg?react';
import Burger from '../images/icons/burger.svg?react';
import Cafe from '../images/icons/cafeIcon.svg?react';
import Dashboard from '../images/icons/dashBaordSvg.svg';
import Desert from '../images/icons/desert.svg?react';
// import FilterIcon from '../images/icons/filterIcon.svg?react';
import RightArrow from '../images/icons/arrowRight.svg?react';
import BackArrow from '../images/icons/backArrow.svg?react';
import ArrowDown from '../images/icons/chevron-down.svg?react';
import GridIcon from '../images/icons/gridIcon.svg?react';
import Search from '../images/icons/inputSearch.svg?react';
import ListIcon from '../images/icons/listsIcon.svg?react';
import Pasta from '../images/icons/pasta.svg?react';
import Pizza from '../images/icons/pizza_one.svg?react';
import PlusIcon from '../images/icons/plus.svg?react';
import Salad from '../images/icons/salad.svg?react';
import Snack from '../images/icons/snack.svg?react';
import Tea from '../images/icons/teaIcon.svg?react';
import EyeIcon from '../images/icons/eyeIcon.svg?react'
import PencilIcon from '../images/icons/pencilIcon.svg?react'

const BusinessManagement = () => {
    const [activeTab, setActiveTab] = useState<
        'profiles' | 'tenancy' | 'feature'
    >('profiles');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Breadcrumbs
    const breadcrumbs = [
        {
            label: 'Business Management',
            isActive: false,
            href: '/business-management',
        },
        { label: 'Business Profiles', isActive: true },
    ];

    // Tabs
    const tabs = [
        {
            label: 'Business Profiles',
            isActive: activeTab === 'profiles',
            onClick: () => setActiveTab('profiles'),
        },
        {
            label: 'Multi-Tenancy & Franchise',
            isActive: activeTab === 'tenancy',
            onClick: () => setActiveTab('tenancy'),
        },
        {
            label: 'Feature Access & Beta',
            isActive: activeTab === 'feature',
            onClick: () => setActiveTab('feature'),
        },
    ];

    // Business data
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
            parent: 'Tea Time HQ',
            bgColor: '#FCE7F3',
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
            parent: 'Tea Time HQ',
            bgColor: '#FEE2E2',
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

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'border-[#ABEFC6] bg-[#ECFDF3] text-[#067647]';
            case 'Expired':
                return 'border-[#FDBA74] bg-[#FFF7ED] text-[#C2410C]';
            case 'Archived':
                return 'border-[#D1D5DB] bg-[#F3F4F6] text-[#6B7280]';
            default:
                return 'border-gray-200 bg-gray-100 text-gray-600';
        }
    };

    const getStatusDot = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-[#067647]';
            case 'Expired':
                return 'bg-[#C2410C]';
            case 'Archived':
                return 'bg-[#6B7280]';
            default:
                return 'bg-gray-400';
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <SidePannel />

            {/* Main Content */}
            <main className="flex flex-1 flex-col">
                {/* TopBar */}
                <TopBar
                    title="Business Profiles"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />

                {/* Content Area */}
                <div className="flex-1 px-8 py-6">
                    {/* Search & Filters Row */}
                    <div className="mb-6 flex items-center justify-between">
                        {/* Left Side: Search & Filters */}
                        <div className="flex items-center gap-3">
                            {/* Search Input */}
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Search />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-80 rounded-lg border border-gray-300 py-2 pr-4 pl-10 text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                />
                            </div>

                            {/* Filters Button */}
<details className="relative group">
    {/* 1. The Trigger Button (Visible part) */}
    <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8CDD05]">
        <span>Status All</span>
        {/* Arrow Icon that rotates when opened */}
        <ArrowDown className="h-4 w-4 transition-transform group-open:rotate-180" />
    </summary>

    {/* 2. The Dropdown Menu (Hidden part) */}
    <div className="absolute left-0 z-20 mt-2 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
        <ul className="py-1">
            {['All', 'Active', 'Expired', 'Archived'].map((item) => (
                <li key={item}>
                    <button 
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-[#F9F7FA]"
                        onClick={(e) => {
                            // This tiny line closes the menu after clicking
                            e.currentTarget.closest('details')?.removeAttribute('open');
                        }}
                    >
                        Status: {item}
                    </button>
                </li>
            ))}
        </ul>
    </div>
    
    {/* Optional: Invisible full-screen div to close menu when clicking outside */}
    <div 
        className="fixed inset-0 z-10 hidden h-full w-full bg-transparent group-open:block" 
        onClick={(e) => {
             e.currentTarget.parentElement?.removeAttribute('open');
        }}
    />
</details>
                            

                            {/* View Mode Toggles */}
                            <div className="inline-flex overflow-hidden rounded-xl border border-gray-300">
                                {/* List Button */}
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`flex items-center gap-2 px-5 py-2 text-sm font-medium transition ${
                                        viewMode === 'list'
                                            ? 'bg-[#F8FFEB] text-[#578500]'
                                            : 'bg-white text-gray-500 hover:bg-gray-50'
                                    }`}
                                >
                                    <ListIcon className="h-5 w-5" />
                                    List
                                </button>

                                {/* Divider */}
                                <div className="w-px bg-gray-300" />

                                {/* Grid Button */}
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`flex items-center gap-2 px-5 py-2 text-sm font-medium transition ${
                                        viewMode === 'grid'
                                            ? 'bg-[#F8FFEB] text-[#578500]'
                                            : 'bg-white text-gray-500 hover:bg-gray-50'
                                    }`}
                                >
                                    <GridIcon className="h-5 w-5" />
                                    Grid
                                </button>
                            </div>
                        </div>
<Link href="/business/registerwizard">
    <Button className="py-2.5 cursor-pointer">
        <PlusIcon className="h-5 w-5 text-[#C4FF52]" />
        Register New Businesses
    </Button>
</Link>
                    </div>

                    {/* CONTENT SWITCHER */}
                    {viewMode === 'grid' ? (
                        /* ============ GRID VIEW ============ */
                        <div className="grid grid-cols-3 gap-6">
                            {businesses.map((business) => (
                                <div
                                    key={business.id}
                                    className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                                >
                                    {/* Card Header - Icon/Name on LEFT, Badges on RIGHT */}
                                    <div className="flex items-start justify-between p-6 pb-4">
                                        {/* LEFT: Icon + Name */}
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                                                <business.icon className="h-9 w-9" />
                                            </div>
                                            <div>
                                                <h3 className="text-base font-semibold text-gray-900">
                                                    {business.name}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* RIGHT: Status and Type Badges stacked */}
                                        <div className="flex flex-col items-end gap-2">
                                            {/* Status Badge */}
                                            <span
                                                className={`inline-flex items-center rounded-lg border border-[#ABEFC6] px-2 py-0.5 text-sm font-medium ${getStatusColor(
                                                    business.status,
                                                )}`}
                                            >
                                                <span
                                                    className={`mr-1.5 h-2 w-2 rounded-lg ${getStatusDot(
                                                        business.status,
                                                    )}`}
                                                ></span>
                                                {business.status}
                                            </span>

                                            {/* Type Badge */}
                                            <span
                                                className={`inline-block rounded-lg px-2 py-0.5 text-xs font-medium ${
                                                    business.type === 'Parent'
                                                        ? 'border border-[#D5D9EB] bg-[#F8F9FC] text-[#363F72]'
                                                        : 'border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]'
                                                }`}
                                            >
                                                {business.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Body - Business Info */}
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
                                            <span className="text-gray-500">
                                                ID:
                                            </span>
                                            <span className="font-medium text-gray-900">
                                                {business.id}
                                            </span>
                                        </div>

                                        {/* Branches or Parent Info */}
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

                                    {/* Card Footer - Action Buttons */}
                                    <div className="flex items-center justify-end gap-3 border-t border-gray-100 px-6 py-3">
                                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
                                            View
                                        </button>
                                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
                                            Edit
                                        </button>
                                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* ============ LIST VIEW ============ */
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                            <table className="w-full text-left text-sm text-gray-500">
                                <thead className="bg-gray-50 text-xs text-gray-500">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 font-medium"
                                        >
                                            Business ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 font-medium"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 font-medium"
                                        >
                                            Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 font-medium"
                                        >
                                            Parent Business
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 font-medium"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 font-medium"
                                        >
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
                                                {business.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-block rounded-lg px-2 py-0.5 text-xs font-medium ${
                                                        business.type ===
                                                        'Parent'
                                                            ? 'border border-[#D5D9EB] bg-[#F8F9FC] text-[#363F72]'
                                                            : 'border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]'
                                                    }`}
                                                >
                                                    {business.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500">
                                                {business.parent
                                                    ? business.parent
                                                    : '-'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-flex items-center rounded-lg border border-[#ABEFC6] px-2 py-0.5 text-sm font-medium ${getStatusColor(
                                                        business.status,
                                                    )}`}
                                                >
                                                    <span
                                                        className={`mr-1.5 h-2 w-2 rounded-lg ${getStatusDot(
                                                            business.status,
                                                        )}`}
                                                    ></span>
                                                    {business.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    {/* Eye Icon */}
                                                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                                        <EyeIcon className='w-4 h-4 text-[#B5B0BA]'/>
                                                    </button>
                                                    {/* Pencil Icon */}
                                                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                                        <PencilIcon className='w-4 h-4 text-[#B5B0BA]'/>
                                                    </button>
                                                    {/* Login Button */}
                                                    <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-semibold text-[#B5B0BA] hover:bg-gray-50 hover:text-gray-900">
                                                        Login
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* ============ PAGINATION ADDED HERE ============ */}
                            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4">
                                {/* Right side buttons */}
                                <div>
                                    <button className="flex items-center justify-center rounded-lg border border-[#B5B0BA] bg-white p-1">
                                        <BackArrow className="h-5 w-5 text-[#B5B0BA]" />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    {/* Active page 1 (Green style) */}
                                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-sm font-medium text-[#578500]">
                                        1
                                    </button>

                                    {/* Inactive pages */}
                                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                        2
                                    </button>
                                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                        3
                                    </button>
                                </div>
                                <div>
                                    <button className="flex items-center justify-center rounded-lg border border-[#B5B0BA] bg-white p-1">
                                        <RightArrow className="h-5 w-5 text-[#B5B0BA]" />
                                    </button>
                                </div>
                            </div>
                            {/* ============ END PAGINATION ============ */}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default BusinessManagement;
