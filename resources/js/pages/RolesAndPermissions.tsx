import { Link } from '@inertiajs/react';
import Button from '../components/Button';
// --- ICONS ---
import addUser from '../images/icons/addUserIcon.svg';
import infoIcon from '../images/icons/newInfo.png';
import pencilIcon from '../images/icons/pencil-icon.png';
import tickIcon from '../images/icons/tickIcon.png';

// --- MOCK DATA ---
const PERMISSIONS = [
    {
        section: 'Dashboard',
        super: true,
        org: true,
        accounts: true,
        onboard: true,
        manager: true,
        crm: true,
    },
    {
        section: 'Internal User Management',
        super: true,
        org: true,
        accounts: 'View',
        onboard: false,
        manager: 'View',
        crm: false,
    },
    {
        section: 'Business Management',
        super: true,
        org: true,
        accounts: 'View',
        onboard: false,
        manager: true,
        crm: false,
    },
    {
        section: 'Subscription & Billing',
        super: true,
        org: true,
        accounts: true,
        onboard: false,
        manager: 'View',
        crm: false,
    },
    {
        section: 'System Config',
        super: true,
        org: true,
        accounts: false,
        onboard: false,
        manager: false,
        crm: false,
    },
    {
        section: 'Maintenance & Support',
        super: true,
        org: true,
        accounts: 'View',
        onboard: false,
        manager: true,
        crm: false,
    },
    {
        section: 'Communication Mgmt',
        super: true,
        org: true,
        accounts: false,
        onboard: false,
        manager: 'View',
        crm: true,
    },
    {
        section: 'Marketplace & Integrations',
        super: true,
        org: true,
        accounts: false,
        onboard: false,
        manager: true,
        crm: false,
    },
    {
        section: 'Manage Approvals',
        super: true,
        org: true,
        accounts: false,
        onboard: false,
        manager: true,
        crm: false,
    },
    {
        section: 'My Tickets',
        super: true,
        org: true,
        accounts: true,
        onboard: true,
        manager: true,
        crm: true,
    },
];

export default function RolesAndPermissionsTable() {
    return (
        <div className="space-y-6">
            {/* Table Card */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Role & Permissions
                    </h2>
                    <Link href="/users/addrole">
                                        <Button className="flex items-center justify-center gap-2 rounded-lg bg-[#8CDD05] px-3 py-2 text-white hover:bg-[#7bc204]">
                        <img src={addUser} alt="" className="h-4 w-4" />
                        Add Role
                    </Button>
                    </Link>
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="w-1/4 px-6 py-3 text-left text-xs font-bold tracking-wider text-gray-500 uppercase">
                                    Feature/Section
                                </th>
                                {[
                                    'Super Admin',
                                    'Org Admin',
                                    'Accounts',
                                    'Onboarding',
                                    'Manager',
                                    'CRM',
                                ].map((role) => (
                                    <th
                                        key={role}
                                        className="px-4 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        {role}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {PERMISSIONS.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                        {row.section}
                                    </td>
                                    {[
                                        row.super,
                                        row.org,
                                        row.accounts,
                                        row.onboard,
                                        row.manager,
                                        row.crm,
                                    ].map((val, i) => (
                                        <td
                                            key={i}
                                            className="px-4 py-4 text-center whitespace-nowrap"
                                        >
                                            <div className="flex justify-center">
                                                {val === true ? (
                                                    // GREEN SQUARE CHECKBOX
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-[#79B800] text-white">
                                                        {/* <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg> */}
                                                        <img
                                                            src={tickIcon}
                                                            alt=""
                                                        />
                                                    </span>
                                                ) : val === 'View' ? (
                                                    <span className="text-sm font-medium text-gray-400">
                                                        View
                                                    </span>
                                                ) : (
                                                    // GRAY CIRCLE DASH
                                                    <span className="flex h-5 w-5 items-center justify-center rounded bg-[#D0D5DD] text-white">
                                                        <span className="h-0.5 w-2.5 bg-white"></span>
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            {/* Action Row */}
                            <tr className="bg-white">
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                    Action
                                </td>
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <td
                                        key={i}
                                        className="px-4 py-4 text-center whitespace-nowrap"
                                    >
                                        <div className="flex justify-center">
                                            <Link href="/users/editrole">
                                                                                        <button className="rounded-[6px] border border-gray-200 p-1.5 text-gray-400 transition-colors hover:bg-gray-50">
                                                <img
                                                    src={pencilIcon}
                                                    alt="Edit"
                                                    className="h-4 w-4 opacity-50"
                                                />
                                            </button>
                                            </Link>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Legend Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#E8E6EA] pb-4">
                    <img src={infoIcon} alt="" />
                    <h3 className="text-sm font-semibold text-gray-700">
                        Permission Types Legend
                    </h3>
                </div>
                <div className="space-y-3 px-6 py-4 text-sm text-gray-500">
                    {/* 1. Full Access: Simple Checkmark (No Green Box) */}
                    <div className="flex items-center gap-3">
                        <svg
                            className="h-4 w-4 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>= Full access (view, add, edit, delete)</span>
                    </div>

                    {/* 2. Read Only: "View" Text */}
                    <div className="flex items-center gap-3">
                        <span className="font-medium text-gray-600">
                            "View"
                        </span>
                        <span>= Read only</span>
                    </div>

                    {/* 3. No Access: "-" Text (No Gray Circle) */}
                    <div className="flex items-center gap-3">
                        <span className="font-medium text-gray-600">"-"</span>
                        <span>= No access</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
