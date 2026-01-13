import Button from '@/components/Button';
import CustomDropdown from '@/components/CustomDropdown'; // Reuse your dropdown
import IconButton from '@/components/IconButton';
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { Link } from '@inertiajs/react';
import { Check, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';
import LeftArrow from '../images/icons/backArrow.svg?react';
import ColorRight from '../images/icons/colorRight.svg?react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

const TeamAccess = () => {
    // --- Form State ---
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        role: 'Select Role',
    });

    // --- Mock Data for the Queue ---
    const [inviteList, setInviteList] = useState([
        {
            id: 1,
            name: 'Omar Ali',
            email: 'omar@teatime.com',
            role: 'Primary Owner',
            roleColor: 'bg-[#F9F5FF] text-[#6941C6] border-[#E9D7FE]', // Purple
        },
        {
            id: 2,
            name: 'Sarah Lee',
            email: 'sarah@teatime.com',
            role: 'Super Admin',
            roleColor: 'bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]', // Blue
        },
        {
            id: 3,
            name: 'Noah Pierre',
            email: 'noah@ordemark.com',
            role: 'Admin',
            roleColor: 'bg-[#F2F4F7] text-[#344054] border-[#D0D5DD]', // Gray
        },
    ]);

    // Role Options for Dropdown
    const roleOptions = [
        { label: 'Super Admin', value: 'Super Admin' },
        { label: 'Admin', value: 'Admin' },
        { label: 'Manager', value: 'Manager' },
        { label: 'Viewer', value: 'Viewer' },
    ];

    const updateForm = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Breadcrumbs
    const breadcrumbs = [
        {
            label: 'Business Management',
            isActive: false,
            href: '/business-management',
        },
        {
            label: 'Business Profiles',
            isActive: false,
            href: '/business-management',
        },
        { label: 'Register New Businesses', isActive: true },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />

            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Business Management"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={[
                        { label: 'Business Profiles', isActive: true, onClick: () => {} },
                        { label: 'Multi-Tenancy & Franchise', isActive: false, onClick: () => {} },
                        { label: 'Feature Access & Beta', isActive: false, onClick: () => {} },
                    ]}
                />

                <div className="flex-1 px-8 py-6">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link href="/business/subscription-compliance">
                            <button className="text-md flex cursor-pointer items-center gap-2 rounded-lg border border-[#B5B0BA] bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                                <LeftArrow className="h-5 w-5 text-[#B5B0BA]" />
                                Go Back
                            </button>
                        </Link>
                    </div>

                    {/* Page Title */}
                    <h2 className="mb-8 text-xl font-semibold text-gray-900">
                        Register New Businesses
                    </h2>

                    {/* ================= TIMELINE STEPPER ================= */}


                    {/* ================= FORM SECTIONS ================= */}
                    <div className="space-y-10 pt-6">
                        
                        {/* 1. Invite Management Team */}
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-3">
                                <h3 className="text-sm font-semibold text-gray-700">Invite Management Team</h3>
                                <p className="text-xs text-gray-500">Grant access to key staff members.</p>
                            </div>
                            <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">Full name<span className="text-[#8CDD05]">*</span></label>
                                        <input 
                                            type="text" 
                                            placeholder="Enter Full name" 
                                            value={formData.fullName}
                                            onChange={(e) => updateForm('fullName', e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">Email address<span className="text-[#8CDD05]">*</span></label>
                                        <input 
                                            type="email" 
                                            placeholder="Enter Email address" 
                                            value={formData.email}
                                            onChange={(e) => updateForm('email', e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        {/* User Role Dropdown */}
                                        <CustomDropdown
                                            label="User Role"
                                            required
                                            placeholder="Select Role"
                                            value={formData.role}
                                            onChange={(val) => updateForm('role', val)}
                                            options={roleOptions}
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
                                        Add to List
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 2. The Invite Queue */}
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-3">
                                <h3 className="text-sm font-semibold text-gray-700">The Invite Queue</h3>
                            </div>
                            <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white shadow-xs overflow-hidden">
                                <table className="w-full text-left text-sm text-gray-500">
                                    <thead className="bg-gray-50 text-xs text-gray-500">
                                        <tr>
                                            <th className="px-6 py-4 font-medium">User Details</th>
                                            <th className="px-6 py-4 font-medium">Role</th>
                                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {inviteList.map((user) => (
                                            <tr key={user.id}>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium text-gray-900">{user.name}</span>
                                                        <span className="text-gray-500">{user.email}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${user.roleColor} ${user.roleColor.includes('border') ? '' : 'border-transparent'}`}>
                                                        <div className={`mr-1.5 h-1.5 w-1.5 rounded-full ${user.roleColor.includes('purple') ? 'bg-[#9B51E0]' : user.roleColor.includes('blue') ? 'bg-[#175CD3]' : 'bg-[#667085]'}`}></div>
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    {user.role !== 'Primary Owner' && (
                                                        <div className="flex items-center justify-end gap-2">
                                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                                                <Edit2 className="h-4 w-4" />
                                                            </button>
                                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-red-600">
                                                                <Trash2 className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
                    <Link href="/business/subscription-compliance">
                        <IconButton className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">Back</IconButton>
                    </Link>
                    <Button>
                        Next: Review & Confirm
                        <ColorRight />
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default TeamAccess;