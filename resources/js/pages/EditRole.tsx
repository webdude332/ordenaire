import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { Link } from '@inertiajs/react';
import Info from '../images/icons/gray-info.svg?react';

// Icons
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import BackArrow from '../images/icons/backArrow.svg?react';
import DashBoardIcon from '../images/icons/dashBaordSvg.svg';

// --- Types ---
interface PermissionRowProps {
    label: string;
    name: string;
}

const EditRole = () => {
    // 1. Setup Breadcrumbs
    const breadcrumbs = [
        { label: 'Internal User Management', isActive: false },
        { label: 'Roles & Permissions', isActive: false },
        { label: 'Edit Role', isActive: true },
    ];

    // 2. Setup Tabs
    // In the screenshot, the tab bar IS visible with "Roles & Permissions" active.
    const tabs = [
        {
            label: 'User Profiles',
            isActive: false,
            href: '/user-profiles',
        },
        {
            label: 'Roles & Permissions',
            isActive: true, // This tab is active in the design
            href: '/roles-permissions',
        },
    ];

    // 3. Permission Data List
    const permissionsList = [
        'Dashboard',
        'Internal User Management',
        'Business Management',
        'Subscription & Billing',
        'System Config',
        'Maintenance & Support',
        'Communication Mgmt',
        'Marketplace & Integrations',
        'Manage Approvals',
        'My Tickets',
    ];

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <SidePannel />

            {/* Main Content */}
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Edit Role"
                    icon={DashBoardIcon}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />

                <div className="flex-1 overflow-y-auto px-8 py-6">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link href="/roles-permissions">
                            <IconButton className="">
                                <BackArrow className='w-5 h-5 text-[#B5B0BA]'/>
                                Back to Roles & Permissions
                            </IconButton>
                        </Link>
                    </div>

                    {/* --- MAIN FORM CONTENT --- */}
                    <form className="space-y-8 pb-20">
                        {/* 1. ROLE DETAILS SECTION */}
                        <div className="grid grid-cols-1 gap-8 border-t border-[#E8E6EA] pt-8 lg:grid-cols-3">
                            {/* Left: Section Label */}
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-semibold text-[#19161A]">
                                    Role Details
                                </h3>
                            </div>

                            {/* Right: Inputs Card */}
                            <div className="rounded-xl border border-[#E8E6EA] bg-white p-4 shadow-xs lg:col-span-2">
                                <div className="space-y-8">
                                    {/* Role Name */}
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                            Role Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Finance Manager"
                                            className="w-full rounded-lg border border-[#E8E6EA] px-3 py-2 text-[#19161A] placeholder-gray-500 shadow-xs outline-none focus:border-[#7AB621] focus:ring-[#7AB621]"
                                        />
                                    </div>

                                    {/* Role Description */}
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                            Role Description
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Enter a description..."
                                            className="w-full resize-none rounded-lg border border-[#CFCBD2] px-3 py-2 text-[#19161A] placeholder-gray-500 shadow-xs outline-none focus:border-[#7AB621] focus:ring-[#7AB621]"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. ASSIGN PERMISSIONS SECTION */}
                        <div className="grid grid-cols-1 gap-8 border-t border-[#E8E6EA] pt-8 lg:grid-cols-3">
                            {/* Left: Section Label */}
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-semibold text-[#19161A]">
                                    Assign Permissions
                                </h3>
                            </div>

                            {/* Right: Permissions List */}
                            <div className="lg:col-span-2">
                                <div className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
                                    {permissionsList.map((perm, index) => (
                                        <PermissionRow
                                            key={index}
                                            label={perm}
                                            name={`perm_${index}`}
                                        />
                                    ))}
                                </div>
                                {/* Legend Box */}{' '}
                                <div className="mt-4 rounded-xl border border-[#CFCBD2] bg-white p-4 shadow-xs">
                                    <div className="mb-2 flex items-center gap-2">
                                        {/* Simple info icon SVG */}
                                        <Info className="h-10 w-10" />
                                        <div className="w-full border-b border-[#E8E6EA] pb-2">
                                            <p className="w-full text-sm font-semibold text-gray-900">
                                                Permission Types Legend
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 pl-10">
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium text-gray-700">
                                                "✓"
                                            </span>{' '}
                                            = Full access (view, add, edit,
                                            delete)
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium text-gray-700">
                                                "View"
                                            </span>{' '}
                                            = Read only
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium text-gray-700">
                                                "-"
                                            </span>{' '}
                                            = No access
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3. FOOTER BUTTONS */}
                        <div className="flex justify-end gap-3 border-t border-gray-200 pt-4">
                            <IconButton>Delete Role </IconButton>
                            <IconButton>Cancel</IconButton>
                            <Button>Add Role</Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

// --- Helper Component for Permission Rows ---
// This handles the layout of "Label .......... Radio | Radio | Radio"
const PermissionRow = ({ label, name }: PermissionRowProps) => {
    return (
        <div className="flex flex-col justify-between gap-3 border-b border-[#E8E6EA] py-1.5">
            <span className="mb-2 w-1/3 text-sm font-medium text-gray-900 sm:mb-0">
                {label}
            </span>
            <div className="flex w-2/3 items-center gap-6 pb-4">
                {/* Option 1: Full Access */}
                <label className="group flex cursor-pointer items-center">
                    <div className="relative flex items-center justify-center">
                        <input
                            type="radio"
                            name={name}
                            className="peer sr-only"
                        />
                        {/* Custom Green Ring Radio Style */}
                        <div className="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-[6px] peer-checked:border-[#7AB621]"></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
                        Full access
                    </span>
                </label>

                {/* Option 2: View */}
                <label className="group flex cursor-pointer items-center">
                    <div className="relative flex items-center justify-center">
                        <input
                            type="radio"
                            name={name}
                            className="peer sr-only"
                        />
                        <div className="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-[6px] peer-checked:border-[#7AB621]"></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
                        View
                    </span>
                </label>

                {/* Option 3: No Access (Default Checked) */}
                <label className="group flex cursor-pointer items-center">
                    <div className="relative flex items-center justify-center">
                        <input
                            type="radio"
                            name={name}
                            defaultChecked
                            className="peer sr-only"
                        />
                        <div className="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-[6px] peer-checked:border-[#7AB621]"></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
                        No access
                    </span>
                </label>
            </div>
        </div>
    );
};

export default EditRole;
