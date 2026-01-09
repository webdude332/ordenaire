import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar'; 
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Images
import DownloadIcon from '@/images/icons/downloadIcon.svg?react';
import DelIcon from '../images/icons/delIcon.svg?react';
import PlusIcon from '../images/icons/plus.svg?react';
import backArrow from '../images/icons/backArrow.png';
import UsersIcon from '../images/icons/dashBaordSvg.svg?react'; 
import IconButton from '@/components/IconButton';


const ProfilePage = () => {
    // State for TopBar tabs
    const [activeTab, setActiveTab] = useState<'profiles' | 'roles'>('profiles');

    // 1. Define Breadcrumbs Structure
const breadcrumbs = [
    { 
        label: 'User Management', 
        isActive: false,
        href: '/usermanagement'  
    },
    { 
        label: 'User Profiles', 
        isActive: false,
        href: '/usermanagement'  
    },
    { 
        label: 'View', 
        isActive: true 
    },
];

    // 2. Define Tabs Structure
    const tabs = [
        {
            label: 'User Profiles',
            isActive: activeTab === 'profiles',
            onClick: () => setActiveTab('profiles'),
        },
        {
            label: 'Roles & Permissions',
            isActive: activeTab === 'roles',
            onClick: () => setActiveTab('roles'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            {/* 1. Sidebar */}
            <SidePannel />

            {/* 2. Main Content Area */}
            <main className="flex flex-1 flex-col">
                {/* ✅ Dynamic TopBar Integrated */}
                <TopBar
                    title="User Management"
                    icon={UsersIcon}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                >
                </TopBar>
                <div className="flex-1 overflow-y-auto px-8 py-6">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link
                            href="/usermanagement"
                            className="inline-flex gap-2 items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-500 shadow-sm transition-colors hover:bg-gray-50"
                        >
                            <img src={backArrow} alt="" />
                            Back to User Profiles
                        </Link>
                    </div>

                    {/* --- PROFILE CARD SECTION --- */}
                    <div className="mb-8 overflow-hidden">
                        {/* 1. Green Banner */}
                        <div
                            className="relative h-48 w-full rounded-xl"
                            style={{
                                background:
                                    'var(--gradient-brand-80060045-deg, linear-gradient(45deg, var(--Colors-Brand-800, #42690B) 0%, var(--Colors-Brand-600, #79B800) 100%))',
                            }}
                        ></div>

                        {/* 2. Profile Info Header */}
                        <div className="px-8 pb-8">
                            <div className="flex items-start justify-between">
                                {/* Left Side: Avatar & Name */}
                                <div className="flex gap-6">
                                    {/* Avatar */}
                                    <div className="relative -mt-12">
                                        <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md">
                                            <img
                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt="Noah Pierre"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Name & Role */}
                                    <div className="pt-3">
                                        <div className="mb-1 flex items-center gap-3">
                                            <h2 className="text-2xl font-semibold text-gray-900">
                                                Noah Pierre
                                            </h2>
                                            <span className="rounded-full border border-[#D5FF85] bg-[#F8FFEB] px-2 py-1 text-xs font-medium text-[#578500]">
                                                Customer relationship manager
                                            </span>
                                        </div>
                                        <div className="mb-3 text-sm text-gray-500">
                                            Noah@ordemark.com
                                        </div>
                                        <button className="rounded-lg border border-[#CFCBD2] px-4 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50">
                                            Send Password Reset Link
                                        </button>
                                    </div>
                                </div>

                                {/* Right Side: Status */}
                                <div className="flex items-center gap-2 pt-4">
                                    <span className="text-sm text-gray-500">
                                        Current status:
                                    </span>
                                    <span className="inline-flex items-center rounded-lg border border-[#ABEFC6] bg-[#ECFDF3] px-2 py-0.5 text-xs font-medium text-green-800">
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600 text-[#067647]"></span>
                                        Active
                                    </span>
                                </div>
                            </div>

                            {/* 3. Info Grid (Footer of Card) */}
                        </div>
                                                    <div className="mt-8  rounded-xl border border-[#E8E6EA] bg-[#F8FFEB] px-6 pb-6 pt-6">
                                <div className="grid grid-cols-4 gap-8 border-b border-[#8CDD05] py-6">
                                    {/* Column 1 */}
                                    <div>
                                        <div className="mb-2 text-xs font-medium text-gray-500">
                                            Phone Number
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">
                                            +91 89211 6114
                                        </div>
                                    </div>

                                    {/* Column 2 */}
                                    <div>
                                        <div className="mb-2 text-xs font-medium text-gray-500">
                                            Joining Date
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">
                                            22 Aug 2025
                                        </div>
                                    </div>

                                    {/* Column 3 */}
                                    <div>
                                        <div className="mb-2 text-xs font-medium text-gray-500">
                                            Account Expiry
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">
                                            22 Aug 2026
                                        </div>
                                    </div>

                                    {/* Column 4 */}
                                    <div>
                                        <div className="mb-1 text-xs font-medium text-gray-500">
                                            Multi-Factor Authentication
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">
                                            Active
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    {/* --- QUICK STATS SECTION --- */}
<div className="mb-8">
    <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Quick Stats
    </h3>
    {/* 1. Kept 'py-6' here to create the floating effect */}
    {/* 2. Removed 'items-start' so all dividers stretch to the same height */}
    <div className="flex w-full divide-x divide-[#E8E6EA] rounded-xl border border-[#E8E6EA] bg-white shadow-xs py-6">
        
        {/* Column 1: Removed 'py-6', kept 'px-8' */}
        <div className="flex-1 px-8">
            <p className="mb-2 text-sm text-[#696969]">
                Tickets Solved (This month)
            </p>
            <p className="text-base font-medium text-[#1A1A1A]">
                19 solved
            </p>
        </div>

        {/* Column 2: Removed 'py-6', kept 'px-8' */}
        <div className="flex-1 px-8">
            <p className="mb-2 text-sm text-[#696969]">
                Pending Action Items
            </p>
            <p className="text-base font-medium text-[#1A1A1A]">
                9 available
            </p>
        </div>

        {/* Column 3: Removed 'py-6', kept 'px-8' */}
        <div className="flex-1 px-8">
            <p className="mb-2 text-sm text-[#696969]">
                Last Active
            </p>
            <div className="text-base font-medium text-[#1A1A1A]">
                04 Sept 2025
                <span className="mt-1 block text-sm font-normal text-[#9CA3AF]">
                    01:15 PM
                </span>
            </div>
        </div>
    </div>
</div>

                    {/* --- DOCUMENTS SECTION --- */}
                    <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs">
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <h3 className="text-md font-semibold text-gray-900">
                                Documents
                            </h3>
                            <button className="flex items-center gap-2 rounded-lg border border-gray-400 px-3 font-medium py-1.5 text-sm text-[#4F4955] hover:bg-gray-50">
                                <PlusIcon className='w-4 h-4 text-[#B5B0BA]'/>
                                Add Docs
                            </button>
                        </div>
                        <table className="min-w-full divide-y divide-gray-100">
                            <thead className="bg-[#F9F9FB]">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                                        Document Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                                        Document Type
                                    </th>
                                    <th className="flex items-center gap-1 px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                                        Expiry Date
                                        <svg
                                            className="h-3 w-3 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                            />
                                        </svg>
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                {/* Row 1 */}
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                        Passport.pdf
                                    </td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                        Passport
                                    </td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                        -
                                    </td>
                                    <td className="flex gap-2 px-6 py-4 whitespace-nowrap">
                                        <button className="rounded border border-gray-200 p-1.5 hover:bg-gray-50">
                                            <DownloadIcon className="w-4 h-4 text-[#B5B0BA]"/>
                                        </button>
                                        <button className="rounded border border-gray-200 p-1.5 hover:bg-gray-50">
                                            <DelIcon className="w-4 h-4 text-[#B5B0BA]"/>
                                        </button>
                                    </td>
                                </tr>
                                {/* Row 2 */}
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                        Visa.jpg
                                    </td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                        Visa
                                    </td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                        20 Nov 2028
                                    </td>
                                    <td className="flex gap-2 px-6 py-4 whitespace-nowrap">
                                        <button className="rounded border border-gray-200 p-1.5 hover:bg-gray-50">
                                            <DownloadIcon className="w-4 h-4 text-[#B5B0BA]"/>
                                        </button>
                                        <button className="rounded border border-gray-200 p-1.5 hover:bg-gray-50">
                                            <DelIcon className="w-4 h-4 text-[#B5B0BA]"/>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* --- NOTES SECTION --- */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Notes
                        </h3>

                        {/* Read-only Log */}
                        <div className="mb-2 h-32 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white p-3 font-mono text-sm text-gray-800">
                            <p className="mb-2">
                                Jan 17, 2025{' '}
                                <span className="text-gray-400">→</span> Admin
                                "Sneha" created a new plan
                            </p>
                            <p>
                                Nov 01, 2024{' '}
                                <span className="text-gray-400">→</span> Tenant
                                upgraded from Standard{' '}
                                <span className="text-gray-400">→</span> Pro
                            </p>
                        </div>
                        <div className="mb-6 text-xs text-gray-400">
                            Showing the 7 most recent notes. Older entries are
                            automatically removed.
                        </div>

                        {/* Input Area */}
                        <div className="mb-4">
                            <label className="mb-1 block text-sm text-gray-600 font-medium">
                                Text area
                            </label>
                            <textarea
                                className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-[#7AB621] focus:ring-[#7AB621]"
                                rows={3}
                                placeholder='Admin "Sneha" created a new plan'
                            ></textarea>
                        </div>

                        {/* Add Button */}
                        <IconButton>
                            Add to Note
                        </IconButton>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;