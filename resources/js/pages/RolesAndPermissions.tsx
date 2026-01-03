import React from 'react';
import Button from '../components/Button';
// --- ICONS ---
import pencilIcon from '../images/icons/pencil-icon.png';
import addUser from '../images/icons/addUserIcon.svg';
import tickIcon from '../images/icons/tickIcon.png'
import infoIcon from '../images/icons/newInfo.png'

// --- MOCK DATA ---
const PERMISSIONS = [
    { section: 'Dashboard', super: true, org: true, accounts: true, onboard: true, manager: true, crm: true },
    { section: 'Internal User Management', super: true, org: true, accounts: 'View', onboard: false, manager: 'View', crm: false },
    { section: 'Business Management', super: true, org: true, accounts: 'View', onboard: false, manager: true, crm: false },
    { section: 'Subscription & Billing', super: true, org: true, accounts: true, onboard: false, manager: 'View', crm: false },
    { section: 'System Config', super: true, org: true, accounts: false, onboard: false, manager: false, crm: false },
    { section: 'Maintenance & Support', super: true, org: true, accounts: 'View', onboard: false, manager: true, crm: false },
    { section: 'Communication Mgmt', super: true, org: true, accounts: false, onboard: false, manager: 'View', crm: true },
    { section: 'Marketplace & Integrations', super: true, org: true, accounts: false, onboard: false, manager: true, crm: false },
    { section: 'Manage Approvals', super: true, org: true, accounts: false, onboard: false, manager: true, crm: false },
    { section: 'My Tickets', super: true, org: true, accounts: true, onboard: true, manager: true, crm: true },
];

export default function RolesAndPermissionsTable() {
    return (
        <div className="space-y-6">
            
            {/* Table Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">Role & Permissions</h2>
                    <Button className="flex justify-center items-center gap-2 px-3 py-2 bg-[#8CDD05] hover:bg-[#7bc204] text-white rounded-lg">
                        <img src={addUser} alt="" className="h-4 w-4" />
                        Add Role
                    </Button>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-1/4">Feature/Section</th>
                                {['Super Admin', 'Org Admin', 'Accounts', 'Onboarding', 'Manager', 'CRM'].map(role => (
                                    <th key={role} className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{role}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {PERMISSIONS.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {row.section}
                                    </td>
                                    {[row.super, row.org, row.accounts, row.onboard, row.manager, row.crm].map((val, i) => (
                                        <td key={i} className="px-4 py-4 text-center whitespace-nowrap">
                                            <div className="flex justify-center">
                                                {val === true ? (
                                                    // GREEN SQUARE CHECKBOX
                                                    <span className="w-5 h-5 bg-[#79B800] rounded-[4px] flex items-center justify-center text-white">
                                                        {/* <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg> */}
                                                        <img src={tickIcon} alt="" />
                                                    </span>
                                                ) : val === 'View' ? (
                                                    <span className="text-sm text-gray-400 font-medium">View</span>
                                                ) : (
                                                    // GRAY CIRCLE DASH
                                                    <span className="w-5 h-5 bg-[#D0D5DD] rounded flex items-center justify-center text-white">
                                                        <span className="w-2.5 h-0.5 bg-white"></span>
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            {/* Action Row */}
                            <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Action</td>
                                {[1,2,3,4,5,6].map((i) => (
                                    <td key={i} className="px-4 py-4 text-center whitespace-nowrap">
                                            <div className="flex justify-center">
                                            <button className="p-1.5 text-gray-400 border border-gray-200 rounded-[6px] hover:bg-gray-50 transition-colors">
                                                <img src={pencilIcon} alt="Edit" className="w-4 h-4 opacity-50" />
                                            </button>
                                            </div>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            {/* Legend Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2  border-b border-[#E8E6EA] pb-4 ">
                    <img src={infoIcon} alt="" />
                    <h3 className="text-sm font-semibold text-gray-700">Permission Types Legend</h3>
                </div>
<div className="space-y-3 text-sm text-gray-500 px-6 py-4">
    
    {/* 1. Full Access: Simple Checkmark (No Green Box) */}
    <div className="flex items-center gap-3">
        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>= Full access (view, add, edit, delete)</span>
    </div>

    {/* 2. Read Only: "View" Text */}
    <div className="flex items-center gap-3">
        <span className="text-gray-600 font-medium">"View"</span>
        <span>= Read only</span>
    </div>

    {/* 3. No Access: "-" Text (No Gray Circle) */}
    <div className="flex items-center gap-3">
        <span className="text-gray-600 font-medium">"-"</span>
        <span>= No access</span>
    </div>
</div>
            </div>
        </div>
    );
}