import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar'; // Uses the unified component
import Button from '../components/Button';
import RolesAndPermissionsTable from './RolesAndPermissions';
import dashBoardSvg from '../images/icons/dashBaordSvg.svg'; // User Management uses SVG
import addUser from '../images/icons/addUserIcon.svg';
import exportIcon from '../images/icons/exportIcon.svg';
import downArrow from '../images/icons/chevron-down.png';
import searchIcon from '../images/icons/search-icon.png';
import eyeIcon from '../images/icons/eyeIcon.png';
import leonprice from '../images/icons/leonprice.png';
import pencilIcon from '../images/icons/pencil-icon.png';
import delIcon from '../images/icons/del-icon.png';
import BakerFinch from '../images/icons/BakerFinch.png';

// --- MOCK DATA ---
const USERS = [
    { id: 1, name: 'Leon Price', email: 'leon@ordemark.com', status: 'Active', role: 'Accounts', lastActive: '1 minute ago', avatar: leonprice },
    { id: 2, name: 'Baker Finch', email: 'baker@ordemark.com', status: 'Active', role: 'Onboarding', lastActive: '21 minute ago', avatar: BakerFinch },
    { id: 3, name: 'Neil Strauss', email: 'neil@ordemark.com', status: 'Active', role: 'CR', lastActive: '15 minute ago', avatar: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, name: 'Willis Day', email: 'willis@ordemark.com', status: 'Inactive', role: 'Admin', lastActive: '10 minutes ago', avatar: 'https://i.pravatar.cc/150?u=4' },
    { id: 5, name: 'Clyde Woods', email: 'clyde@ordemark.com', status: 'Active', role: 'Accounts', lastActive: '15 minute ago', avatar: 'https://i.pravatar.cc/150?u=5' },
    { id: 6, name: 'Oliver North', email: 'oliver@ordemark.com', status: 'Active', role: 'Onboarding', lastActive: '5 minutes ago', avatar: 'https://i.pravatar.cc/150?u=6' },
    { id: 7, name: 'Drew Cano', email: 'drew@ordemark.com', status: 'Active', role: 'CR', lastActive: '15 minute ago', avatar: 'https://i.pravatar.cc/150?u=7' },
    { id: 8, name: 'Orlando Diggs', email: 'orlando@ordemark.com', status: 'Active', role: 'Admin', lastActive: '30 minutes ago', avatar: 'https://i.pravatar.cc/150?u=8' },
];

export default function UserManagement() {
    const [activeTab, setActiveTab] = useState<'profiles' | 'roles'>('profiles');
    const pageTitle = activeTab === 'profiles' ? 'Internal User Management' : 'Internal Role & Permissions';
    
    return (
        <div className="flex h-screen font-montserrat">
            <Head title="User Management" />
            <SidePannel />

            <div className="flex flex-1 flex-col overflow-hidden">
                
                {/* --- UNIFIED TOPBAR --- */}
                <TopBar 
                    title={pageTitle}
                    icon={dashBoardSvg} // Passing SVG icon here
                    breadcrumbs={[
                        { label: 'Internal User Management', isActive: false },
                        { label: activeTab === 'profiles' ? 'User Profiles' : 'Roles & Permissions', isActive: true }
                    ]}
                    tabs={[
                        { 
                            label: 'User Profiles', 
                            isActive: activeTab === 'profiles', 
                            onClick: () => setActiveTab('profiles') 
                        },
                        { 
                            label: 'Roles & Permissions', 
                            isActive: activeTab === 'roles', 
                            onClick: () => setActiveTab('roles') 
                        }
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
                                    <label className="mb-1 block text-xs font-medium text-gray-500">Search</label>
                                    <div className="relative w-[300px]">
                                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <img src={searchIcon} alt="" className="h-4 w-4 opacity-50" />
                                        </span>
                                        <input type="text" placeholder="Search" className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-10 text-sm placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-lime-500 focus:outline-none" />
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <kbd className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] text-gray-400">⌘K</kbd>
                                        </span>
                                    </div>
                                </div>

                                {/* Filters */}
                                <div className="flex w-full gap-4 sm:w-auto">
                                    <div>
                                        <label className="mb-1 block text-xs font-medium text-gray-500">Filter by role</label>
                                        <div className="relative">
                                            <select className="w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pr-10 pl-3 text-sm text-gray-700 placeholder-gray-400 shadow-sm transition-colors focus:border-[#8CDD05] focus:bg-[#F8FFEB] focus:ring-1 focus:ring-[#8CDD05] focus:outline-none sm:w-40">
                                                <option>All</option>
                                                <option>Admin</option>
                                                <option>Accounts</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5">
                                                <img src={downArrow} alt="" className="h-3 w-3 opacity-60" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-xs font-medium text-gray-500">Filter by Status</label>
                                        <div className="relative">
                                            <select className="w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pr-10 pl-3 text-sm text-gray-700 placeholder-gray-400 shadow-sm transition-colors focus:border-[#8CDD05] focus:bg-[#F8FFEB] focus:ring-1 focus:ring-[#8CDD05] focus:outline-none sm:w-40">
                                                <option>All</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5">
                                                <img src={downArrow} alt="" className="h-3 w-3 opacity-60" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* TABLE */}
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs">
                                <div className="flex flex-col items-center justify-between gap-4 border-b border-gray-200 px-6 py-4 sm:flex-row">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-lg font-semibold text-gray-900">All users</h2>
                                        <span className="rounded-lg border border-[#CFCBD2] px-2.5 py-1 text-xs font-medium text-gray-600">48 users</span>
                                    </div>
                                                                        {/* Action Buttons */}
                                    <div className="flex items-end gap-3 items-center">
                                        <button className="flex items-center gap-2 rounded-lg border border-[#CFCBD2] bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                                            <img src={exportIcon} alt="Export" className="h-4 w-4" />
                                            Export
                                        </button>
                                        <Button href="/users/create" className="flex items-center justify-center gap-3 px-2 py-2">
                                            <img src={addUser} alt="" />
                                            Add User
                                        </Button>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                {['Name', 'Email address', 'Status', 'Roles', 'Last Active', 'Actions'].map((header) => (
                                                    <th key={header} className={`px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase ${header === 'Actions' ? 'text-right' : 'text-left'}`}>
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {USERS.map((user) => (
                                                <tr key={user.id} className="transition-colors hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <img className="h-12 w-12 rounded-full object-cover" src={user.avatar} alt="" />
                                                            <div className="ml-3">
                                                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">{user.email}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-xs leading-5 font-semibold ${user.status === 'Active' ? 'border-[#ABEFC6] bg-[#ECFDF3] text-green-700' : 'border-[#E8E6EA] bg-[#F9F7FA] text-gray-600'}`}>
                                                            <span className={`h-1.5 w-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                                                            {user.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{user.role}</td>
                                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{user.lastActive}</td>
                                                    <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <Link href="/users/profile" className="rounded-lg border border-[#CFCBD2] p-1.5 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600">
                                                                <img src={eyeIcon} alt="" />
                                                            </Link>
                                                            <Link href="/users/edit" className="rounded-lg border border-[#CFCBD2] p-1.5 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600">
                                                                <img src={pencilIcon} alt="" />
                                                            </Link>
                                                            <button className="rounded-lg border border-[#CFCBD2] p-1.5 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600">
                                                                <img src={delIcon} alt="" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- TAB 2: ROLES --- */}
                    {activeTab === 'roles' && <RolesAndPermissionsTable />}
                </main>
            </div>
        </div>
    );
}