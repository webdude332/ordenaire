import { Link } from '@inertiajs/react';
import { useState } from 'react';
import Button from '../components/ui/Button';
import addUser from '../images/icons/addUserIcon.svg';
import InfoIcon from '../images/icons/gray-info.svg?react';
import PencilIcon from '../images/icons/pencilIcon.svg?react';

// --- INITIAL DATA ---
const INITIAL_PERMISSIONS = [
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

// Map column index to keys for easier state updates
const ROLE_KEYS = [
    'super',
    'org',
    'accounts',
    'onboard',
    'manager',
    'crm',
] as const;

// Reusable SVG Check Icon to replace the image file
const CheckIconSVG = ({ className }: { className?: string }) => (
    <svg
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M9 1L3.5 6.5L1 4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function RolesAndPermissionsTable() {
    // 1. Initialize State
    const [permissions, setPermissions] = useState(INITIAL_PERMISSIONS);

    // 2. Toggle Function
    const togglePermission = (
        rowIndex: number,
        roleKey: (typeof ROLE_KEYS)[number],
    ) => {
        setPermissions((prev) =>
            prev.map((row, idx) => {
                if (idx !== rowIndex) return row;

                const currentVal = row[roleKey as keyof typeof row];
                let newVal: any;

                if (typeof currentVal === 'boolean') {
                    newVal = !currentVal;
                } else if (currentVal === 'View') {
                    newVal = true;
                } else {
                    newVal = true;
                }

                return { ...row, [roleKey]: newVal };
            }),
        );
    };

    return (
        <div className="space-y-6">
            {/* Custom Scrollbar Styles */}
            <style>{`
                .scrollbar-custom::-webkit-scrollbar {
                    height: 8px;
                    width: 8px;
                }
                .scrollbar-custom::-webkit-scrollbar-track {
                    background: #F2F4F7;
                    border-radius: 4px;
                    margin: 0 20px; /* Slight offset from edges like image */
                }
                .scrollbar-custom::-webkit-scrollbar-thumb {
                    background: #D0D5DD;
                    border-radius: 4px;
                }
                .scrollbar-custom::-webkit-scrollbar-thumb:hover {
                    background: #98A2B3;
                }
            `}</style>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
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

                {/* Horizontal Scroll Container */}
                <div className="scrollbar-custom overflow-x-auto pb-3">
                    <table className="w-full min-w-[1200px] divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="sticky left-0 z-10 w-1/4 bg-gray-50 px-6 py-3 text-left text-xs font-bold text-gray-500 shadow-[1px_0_0_0_rgba(0,0,0,0.05)] sm:shadow-none">
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
                                        className="px-4 py-3 text-center text-xs font-medium text-gray-500"
                                    >
                                        {role}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {permissions.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    <td className="sticky left-0 z-10 bg-white px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 shadow-[1px_0_0_0_rgba(0,0,0,0.05)] sm:shadow-none">
                                        {row.section}
                                    </td>
                                    {ROLE_KEYS.map((roleKey, colIndex) => {
                                        const val =
                                            row[roleKey as keyof typeof row];
                                        return (
                                            <td
                                                key={colIndex}
                                                className="px-4 py-4 text-center whitespace-nowrap"
                                            >
                                                <div className="flex justify-center">
                                                    {val === true ? (
                                                        <button
                                                            onClick={() =>
                                                                togglePermission(
                                                                    rowIndex,
                                                                    roleKey,
                                                                )
                                                            }
                                                            className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-[4px] bg-[#79B800] text-white transition-transform active:scale-90"
                                                        >
                                                            <CheckIconSVG className="h-2.5 w-2.5" />
                                                        </button>
                                                    ) : val === 'View' ? (
                                                        <button
                                                            onClick={() =>
                                                                togglePermission(
                                                                    rowIndex,
                                                                    roleKey,
                                                                )
                                                            }
                                                            className="text-sm font-medium text-gray-400 transition-colors hover:text-[#79B800]"
                                                        >
                                                            View
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() =>
                                                                togglePermission(
                                                                    rowIndex,
                                                                    roleKey,
                                                                )
                                                            }
                                                            className="flex h-5 w-5 cursor-pointer items-center justify-center rounded bg-[#D0D5DD] text-white transition-transform active:scale-90"
                                                        >
                                                            <span className="h-0.5 w-2.5 bg-white"></span>
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                            {/* Action Row */}
                            <tr className="bg-white">
                                <td className="sticky left-0 z-10 bg-white px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 shadow-[1px_0_0_0_rgba(0,0,0,0.05)] sm:shadow-none">
                                    Action
                                </td>
                                {ROLE_KEYS.map((roleKey, i) => {
                                    const isAllSelected = permissions.every(
                                        (row) => row[roleKey] === true,
                                    );

                                    return (
                                        <td
                                            key={i}
                                            className="px-4 py-4 text-center whitespace-nowrap"
                                        >
                                            <div className="flex justify-center">
                                                {isAllSelected ? (
                                                    // Dull/Disabled State
                                                    <div className="rounded-lg border border-gray-100 bg-gray-50 p-1.5 text-gray-300">
                                                        <PencilIcon className="h-4 w-4 opacity-50" />
                                                    </div>
                                                ) : (
                                                    // Active State
                                                    <Link href="/users/editrole">
                                                        <button className="cursor-pointer rounded-lg border border-gray-200 p-1.5 text-gray-400 transition-colors hover:bg-gray-50">
                                                            <PencilIcon className="h-4 w-4" />
                                                        </button>
                                                    </Link>
                                                )}
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Legend Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#E8E6EA] pb-4">
                    <InfoIcon className="h-10 w-10" />
                    <h3 className="text-sm font-semibold text-gray-700">
                        Permission Types Legend
                    </h3>
                </div>
                <div className="space-y-3 px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-[#79B800]">
                            <CheckIconSVG className="h-2.5 w-2.5" />
                        </div>
                        <span>= Full access (view, add, edit, delete)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="font-medium text-gray-600">
                            "View"
                        </span>
                        <span>= Read only</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="flex h-4 w-4 items-center justify-center rounded bg-[#D0D5DD]">
                            <span className="h-0.5 w-2 bg-white"></span>
                        </span>
                        <span>= No access</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
