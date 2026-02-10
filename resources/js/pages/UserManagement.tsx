import DeleteModal from '@/components/DeleteModal';
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import ActionButton from '@/components/ui/ActionButton';
import CustomDropdown from '@/components/ui/CustomDropdown';
import Pagination from '@/components/ui/Pagination';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Button from '../components/ui/Button';
import BakerFinch from '../images/icons/BakerFinch.png';
import DashBoardSvg from '../images/icons/dashBaordSvg.svg?react';
import DelIcon from '../images/icons/delIcon.svg?react';
import EyeIcon from '../images/icons/eyeIcon.svg?react';
import leonprice from '../images/icons/leonprice.png';
import PencilIcon from '../images/icons/pencilIcon.svg?react';
import AddUser from '../images/icons/plus.svg?react';
import SearchIcon from '../images/icons/searchIcon.svg?react';
import RolesAndPermissionsTable from './RolesAndPermissions';
// --- MOCK DATA ---
const USERS = [
    {
        id: 1,
        name: 'Leon Price',
        email: 'leon@ordemark.com',
        status: 'Active',
        role: 'Accounts',
        lastActive: '1 minute ago',
        avatar: leonprice,
    },
    {
        id: 2,
        name: 'Baker Finch',
        email: 'baker@ordemark.com',
        status: 'Active',
        role: 'Onboarding',
        lastActive: '21 minute ago',
        avatar: BakerFinch,
    },
    {
        id: 3,
        name: 'Neil Strauss',
        email: 'neil@ordemark.com',
        status: 'Active',
        role: 'CR',
        lastActive: '15 minute ago',
        avatar: 'https://i.pravatar.cc/150?u=3',
    },
    {
        id: 4,
        name: 'Willis Day',
        email: 'willis@ordemark.com',
        status: 'Inactive',
        role: 'Admin',
        lastActive: '10 minutes ago',
        avatar: 'https://i.pravatar.cc/150?u=4',
    },
    {
        id: 5,
        name: 'Clyde Woods',
        email: 'clyde@ordemark.com',
        status: 'Active',
        role: 'Accounts',
        lastActive: '15 minute ago',
        avatar: 'https://i.pravatar.cc/150?u=5',
    },
    {
        id: 6,
        name: 'Oliver North',
        email: 'oliver@ordemark.com',
        status: 'Active',
        role: 'Onboarding',
        lastActive: '5 minutes ago',
        avatar: 'https://i.pravatar.cc/150?u=6',
    },
    {
        id: 7,
        name: 'Drew Cano',
        email: 'drew@ordemark.com',
        status: 'Active',
        role: 'CR',
        lastActive: '15 minute ago',
        avatar: 'https://i.pravatar.cc/150?u=7',
    },
    {
        id: 8,
        name: 'Orlando Diggs',
        email: 'orlando@ordemark.com',
        status: 'Active',
        role: 'Admin',
        lastActive: '30 minutes ago',
        avatar: 'https://i.pravatar.cc/150?u=8',
    },
];

export default function UserManagement() {
    const handleDelete = () => setIsDeleteModalOpen(false);
    const [selectedRole, setSelectedRole] = useState('all');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [activeTab, setActiveTab] = useState<'profiles' | 'roles'>(
        'profiles',
    );
    const pageTitle =
        activeTab === 'profiles'
            ? 'Internal User Management'
            : 'Internal Role & Permissions';

    return (
        <div className="flex h-screen font-montserrat">
            <Head title="User Management" />
            <SidePannel />

            <div className="flex flex-1 flex-col overflow-hidden">
                {/* --- UNIFIED TOPBAR --- */}
                <TopBar
                    title={pageTitle}
                    icon={DashBoardSvg} // Passing SVG icon here
                    breadcrumbs={[
                        {
                            label: 'Internal User Management',
                            isActive: false,
                            href: '/usermanagement',
                        },
                        {
                            label:
                                activeTab === 'profiles'
                                    ? 'User Profiles'
                                    : 'Roles & Permissions',
                            isActive: true,
                        },
                    ]}
                    tabs={[
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
                    ]}
                >
                    {/* No buttons in the header for this page, just like your design */}
                </TopBar>

                <main className="flex-1 overflow-y-auto p-8">
                    {/* --- TAB 1: PROFILES --- */}
                    {activeTab === 'profiles' && (
                        <div className="space-y-6">
                            {/* FILTERS AND SEARCH */}
                            <div className="flex flex-col items-end justify-between gap-4 sm:flex-row sm:items-center">
                                {/* Search */}
                                <div className="w-full sm:w-auto">
                                    <div className="relative w-[300px]">
                                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <SearchIcon className="h-4 w-4 text-[#B5B0BA]" />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-10 text-sm placeholder-gray-400 focus:ring-1 focus:ring-[#8CDD05] focus:outline-none"
                                        />
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
                                    </div>
                                </div>

                                {/* Filters */}
                                <div className="flex w-full gap-4 sm:w-auto">
                                    <div>
                                        <div className="relative w-48">
                                            <CustomDropdown
                                                label=""
                                                options={[
                                                    {
                                                        label: 'Role: All',
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
                                                placeholder="Select role"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        {/* <label className="mb-1 block text-xs font-medium text-gray-500">
                                            Filter by Status
                                        </label> */}
                                        <div className="relative w-48">
                                            <CustomDropdown
                                                label=""
                                                options={[
                                                    {
                                                        label: 'Status: All',
                                                        value: 'all',
                                                    },
                                                    {
                                                        label: 'Active',
                                                        value: 'active',
                                                    },
                                                    {
                                                        label: 'Inactive',
                                                        value: 'inactive',
                                                    },
                                                ]}
                                                value={selectedRole}
                                                onChange={setSelectedRole}
                                                placeholder="Select role"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TABLE */}
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs">
                                <div className="flex flex-col items-center justify-between gap-4 border-b border-gray-200 px-6 py-4 sm:flex-row">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-lg font-semibold text-gray-900">
                                            All users
                                        </h2>
                                        <span className="rounded-lg border border-[#CFCBD2] px-2.5 py-1 text-xs font-medium text-gray-600">
                                            48 users
                                        </span>
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="flex items-center items-end gap-3">
                                        <Button
                                            href="/users/create"
                                            className="flex items-center justify-center gap-3 px-2 py-2"
                                        >
                                            <AddUser className="h-5 w-5 text-[#C4FF52]" />
                                            Add User
                                        </Button>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                {[
                                                    'Name',
                                                    'Email address',
                                                    'Status',
                                                    'Roles',
                                                    'Last Active',
                                                    'Actions',
                                                ].map((header) => {
                                                    const hasIcon = [
                                                        'Name',
                                                        'Status',
                                                        'Roles',
                                                        'Last Active',
                                                    ].includes(header);

                                                    return (
                                                        <th
                                                            key={header}
                                                            className={`px-6 py-3 text-sm font-medium text-[#9C94A3] ${header === 'Actions' ? 'text-right' : 'text-left'}`}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                {header}
                                                                {hasIcon && (
                                                                    <SelectorIcon />
                                                                )}
                                                            </div>
                                                        </th>
                                                    );
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {USERS.map((user) => (
                                                <tr
                                                    key={user.id}
                                                    className="transition-colors hover:bg-gray-50"
                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <img
                                                                className="h-12 w-12 rounded-full object-cover"
                                                                src={
                                                                    user.avatar
                                                                }
                                                                alt=""
                                                            />
                                                            <div className="ml-3">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {user.name}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">
                                                            {user.email}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span
                                                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs leading-5 font-semibold ${user.status === 'Active' ? 'border-[#ABEFC6] bg-[#ECFDF3] text-green-700' : 'border-[#E8E6EA] bg-[#F9F7FA] text-gray-600'}`}
                                                        >
                                                            <span
                                                                className={`h-1.5 w-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}
                                                            ></span>
                                                            {user.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                                        {user.role}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                                        {user.lastActive}
                                                    </td>
                                                    <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <Link
                                                                href="/users/profile"
                                                                className=""
                                                            >
                                                                {/* <EyeIcon
                                                                className='w-4 h-4 text-[#B5B0BA]'
                                                                /> */}
                                                                <ActionButton>
                                                                    <EyeIcon className="h-4 w-4 text-iconColor" />
                                                                </ActionButton>
                                                            </Link>
                                                            <Link
                                                                href="/users/edit"
                                                                className=""
                                                            >
                                                                <ActionButton>
                                                                    <PencilIcon className="h-4 w-4 text-iconColor" />
                                                                </ActionButton>
                                                            </Link>
                                                            <Link
                                                                onClick={(e) =>
                                                                    e.preventDefault()
                                                                }
                                                            >
                                                                <ActionButton
                                                                    onClick={() =>
                                                                        setIsDeleteModalOpen(
                                                                            true,
                                                                        )
                                                                    }
                                                                >
                                                                    <DelIcon className="h-4 w-4 text-iconColor" />
                                                                </ActionButton>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination />
                            </div>
                        </div>
                    )}

                    {/* --- TAB 2: ROLES --- */}
                    {activeTab === 'roles' && <RolesAndPermissionsTable />}
                </main>
            </div>
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onRetry={handleDelete}
            />
        </div>
    );
}
