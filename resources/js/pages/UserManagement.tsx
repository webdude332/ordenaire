import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import SidePannel from '@/components/SidePannel';
import NewTopBar from '../components/NewTopBar';
import Button from '../components/Button';
// import RolesAndPermissionsTable from '../components/RolesAndPermissionsTable'; // <--- Import the new component
import RolesAndPermissionsTable from './RolesAndPermissions';

// --- ICONS ---
import leonprice from '../images/icons/leonprice.png'
import BakerFinch from '../images/icons/BakerFinch.png'
import pencilIcon from '../images/icons/pencil-icon.png'
import downArrow from '../images/icons/chevron-down.png'
import delIcon from '../images/icons/del-icon.png'
import eyeIcon from '../images/icons/eyeIcon.png'
import searchIcon from '../images/icons/search-icon.png'
import addUser from '../images/icons/addUserIcon.svg'
import exportIcon from '../images/icons/exportIcon.svg';

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

    return (
        <div className="flex h-screen">
            <Head title="User Management" />

            {/* SIDEBAR */}
            <SidePannel />

            {/* MAIN LAYOUT */}
            <div className="flex-1 flex flex-col overflow-hidden">
                
                {/* TOP BAR */}
                <NewTopBar 
                    activeTab={activeTab} 
                    onTabChange={setActiveTab}
                />

                {/* SCROLLABLE CONTENT AREA */}
                <main className="flex-1 overflow-y-auto p-8">
                    
                    {/* --- TAB 1: PROFILES (Your exact code) --- */}
                    {activeTab === 'profiles' && (
                        <div className="space-y-6">
                            
                            {/* --- A. FILTERS ROW --- */}
                            <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
                                
                                {/* Search Input */}
                                <div className="w-full sm:w-auto">
                                    <label className="block text-xs font-medium text-gray-500 mb-1">Search</label>
                                    <div className="relative w-[300px]">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <img src={searchIcon} alt="" className="w-4 h-4 opacity-50" />
                                        </span>
                                        <input 
                                            type="text" 
                                            placeholder="Search" 
                                            className="w-full pl-10 pr-10 py-2 bg-white border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 shadow-sm"
                                        />
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <kbd className="px-2 py-0.5 text-[10px] text-gray-400 border border-gray-200 rounded bg-gray-50">⌘K</kbd>
                                        </span>
                                    </div>
                                </div>

                                {/* Filters */}
                                <div className="flex gap-4 w-full sm:w-auto">
                                    {/* Role Filter */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Filter by role</label>
                                        <div className="relative">
                                            <select className="w-full sm:w-40 py-2.5 pl-3 pr-10 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05] focus:bg-[#F8FFEB] transition-colors shadow-sm appearance-none cursor-pointer">
                                                <option>All</option>
                                                <option>Admin</option>
                                                <option>Accounts</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5">
                                                <img src={downArrow} alt="" className="h-3 w-3 opacity-60" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status Filter */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Filter by Status</label>
                                        <div className="relative">
                                            <select className="w-full sm:w-40 py-2.5 pl-3 pr-10 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05] focus:bg-[#F8FFEB] transition-colors shadow-sm appearance-none cursor-pointer">
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

                            {/* --- B. TABLE CARD --- */}
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                
                                {/* Table Header */}
                                <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-lg font-semibold text-gray-900">All users</h2>
                                        <span className="px-2.5 py-1 rounded-lg text-xs font-medium text-gray-600 border border-[#CFCBD2]">
                                            48 users
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {/* Export Button */}
                                        <button className="flex items-center gap-2 px-3 py-2 bg-white border border-[#CFCBD2] rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 inset-shadow-sm-[#0A0D120D] transition-colors">
                                            <img src={exportIcon} alt="Export" className="h-4 w-4" />
                                            Export
                                        </button>
                                        <Button className='flex justify-center items-center gap-3 px-2 py-2'>
                                            <img src={addUser} alt="" />
                                            Add User
                                        </Button>
                                    </div>
                                </div>

                                {/* Table Content */}
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email address</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roles</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {USERS.map((user) => (
                                                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
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
                                                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full items-center gap-1.5 border ${
                                                            user.status === 'Active' 
                                                            ? 'bg-[#ECFDF3] text-green-700 border-[#ABEFC6]' 
                                                            : 'bg-[#F9F7FA] text-gray-600 border-[#E8E6EA]'
                                                        }`}>
                                                            <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                                                            {user.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {user.role}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {user.lastActive}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <button className="p-1.5 text-gray-400 hover:text-gray-600 border border-[#CFCBD2] rounded-lg hover:bg-gray-50 transition-colors">
                                                                <img src={eyeIcon} alt="" />
                                                            </button>
                                                            <button className="p-1.5 text-gray-400 hover:text-gray-600 border border-[#CFCBD2] rounded-lg hover:bg-gray-50 transition-colors">
                                                                <img src={pencilIcon} alt="" />
                                                            </button>
                                                            <button className="p-1.5 text-gray-400 hover:text-gray-600 border border-[#CFCBD2] rounded-lg hover:bg-gray-50 transition-colors">
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
                    {activeTab === 'roles' && (
                        <RolesAndPermissionsTable />
                    )}
                </main>
            </div>
        </div>
    );
}