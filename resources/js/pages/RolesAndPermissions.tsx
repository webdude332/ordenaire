import { Link } from '@inertiajs/react';
import { useState } from 'react'; // Added useState
import Button from '../components/ui/Button';
import addUser from '../images/icons/addUserIcon.svg';
import InfoIcon from '../images/icons/gray-info.svg?react';
import PencilIcon from '../images/icons/pencilIcon.svg?react';
import tickIcon from '../images/icons/tickIcon.png';

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

                // Logic: Toggle between Boolean or cycle through string types if needed
                // If it's boolean, just flip it.
                // If you want 'View' to be toggleable, you can add logic here.
                if (typeof currentVal === 'boolean') {
                    newVal = !currentVal;
                } else if (currentVal === 'View') {
                    newVal = true; // Switch View to Full Access, or false for No access
                } else {
                    newVal = true;
                }

                return { ...row, [roleKey]: newVal };
            }),
        );
    };

    return (
        <div className="space-y-6">
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

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="w-1/4 px-6 py-3 text-left text-xs font-bold text-gray-500">
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
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
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
                                                            <img
                                                                src={tickIcon}
                                                                alt=""
                                                                className="h-3 w-3"
                                                            />
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
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                    Action
                                </td>
                                {ROLE_KEYS.map((_, i) => (
                                    <td
                                        key={i}
                                        className="px-4 py-4 text-center whitespace-nowrap"
                                    >
                                        <div className="flex justify-center">
                                            <Link href="/users/editrole">
                                                <button className="cursor-pointer rounded-lg border border-gray-200 p-1.5 text-gray-400 transition-colors hover:bg-gray-50">
                                                    <PencilIcon className="h-4 w-4" />
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
                    <InfoIcon className="h-10 w-10" />
                    <h3 className="text-sm font-semibold text-gray-700">
                        Permission Types Legend
                    </h3>
                </div>
                <div className="space-y-3 px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                        <img
                            src={tickIcon}
                            className="h-4 w-4 rounded-sm bg-[#79B800] p-0.5"
                            alt=""
                        />
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
