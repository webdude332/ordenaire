import { Link } from '@inertiajs/react';
import { useState } from 'react';
import addUser from '../../shared/images/icons/addUserIcon.svg';
import InfoIcon from '../../shared/images/icons/gray-info.svg?react';
import PencilIcon from '../../shared/images/icons/pencilIcon.svg?react';
import Button from '../components/ui/Button';

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

const ROLE_KEYS = [
    'super',
    'org',
    'accounts',
    'onboard',
    'manager',
    'crm',
] as const;
type RoleKey = (typeof ROLE_KEYS)[number];
type PermValue = boolean | 'View';

const cycleValue = (val: PermValue): PermValue => {
    if (val === true) return 'View';
    if (val === 'View') return false;
    return true;
};

const CheckIcon = ({ className }: { className?: string }) => (
    <svg
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M1 5.5L5 9.5L13 1.5"
            stroke="#344054"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function RolesAndPermissionsTable() {
    const [permissions, setPermissions] = useState(INITIAL_PERMISSIONS);
    const [editingCol, setEditingCol] = useState<RoleKey | null>(null);

    const togglePermission = (rowIndex: number, roleKey: RoleKey) => {
        setPermissions((prev) =>
            prev.map((row, idx) => {
                if (idx !== rowIndex) return row;
                const currentVal = row[
                    roleKey as keyof typeof row
                ] as PermValue;
                return { ...row, [roleKey]: cycleValue(currentVal) };
            }),
        );
    };

    const handlePencilClick = (roleKey: RoleKey) => {
        if (roleKey === 'super') return;
        setEditingCol((prev) => (prev === roleKey ? null : roleKey));
    };

    return (
        <div className="space-y-6">
            <style>{`
                .scrollbar-custom::-webkit-scrollbar { height: 8px; width: 8px; }
                .scrollbar-custom::-webkit-scrollbar-track { background: #F2F4F7; border-radius: 4px; }
                .scrollbar-custom::-webkit-scrollbar-thumb { background: #D0D5DD; border-radius: 4px; }
                .scrollbar-custom::-webkit-scrollbar-thumb:hover { background: #98A2B3; }
            `}</style>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Role & Permissions
                    </h2>
                    <Link href="/superadmin/users/addrole">
                        <Button className="flex items-center justify-center gap-2 rounded-lg bg-[#8CDD05] px-3 py-2 text-white hover:bg-[#7bc204]">
                            <img src={addUser} alt="" className="h-4 w-4" />
                            Add Role
                        </Button>
                    </Link>
                </div>

                {/* Table */}
                <div className="scrollbar-custom overflow-x-auto pb-3">
                    <table className="w-full min-w-[1200px] divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="sticky left-0 z-10 w-1/4 bg-gray-50 px-6 py-3 text-left text-xs font-semibold text-gray-500 shadow-[1px_0_0_0_rgba(0,0,0,0.05)]">
                                    Feature/Section
                                </th>
                                {(
                                    [
                                        'Super Admin',
                                        'Org Admin',
                                        'Accounts',
                                        'Onboarding',
                                        'Manager',
                                        'CRM',
                                    ] as const
                                ).map((role, i) => {
                                    const key = ROLE_KEYS[i];
                                    const isEditing = editingCol === key;
                                    return (
                                        <th
                                            key={role}
                                            className={`px-4 py-3 text-center text-xs font-semibold transition-colors ${
                                                isEditing
                                                    ? 'bg-[#F6FDE8] text-[#5A9200]'
                                                    : 'text-gray-500'
                                            }`}
                                        >
                                            {role}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 bg-white">
                            {permissions.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    <td className="sticky left-0 z-10 bg-white px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 shadow-[1px_0_0_0_rgba(0,0,0,0.05)]">
                                        {row.section}
                                    </td>

                                    {ROLE_KEYS.map((roleKey, colIndex) => {
                                        const val = row[
                                            roleKey as keyof typeof row
                                        ] as PermValue;
                                        const isEditing =
                                            editingCol === roleKey;

                                        return (
                                            <td
                                                key={colIndex}
                                                // ✅ NO background on cells — only header gets the tint
                                                className="px-4 py-4 text-center whitespace-nowrap"
                                            >
                                                <div className="flex justify-center">
                                                    {isEditing ? (
                                                        /* EDIT MODE: dashed border box, no background */
                                                        <button
                                                            onClick={() =>
                                                                togglePermission(
                                                                    rowIndex,
                                                                    roleKey,
                                                                )
                                                            }
                                                            className="flex h-7 w-7 items-center justify-center rounded-md border border-dashed border-gray-300 bg-white transition-colors hover:border-[#8CDD05]"
                                                            title="Click to cycle permission"
                                                        >
                                                            {val === true ? (
                                                                <CheckIcon className="h-3.5 w-3.5" />
                                                            ) : val ===
                                                              'View' ? (
                                                                <span className="text-xs font-medium text-gray-500">
                                                                    V
                                                                </span>
                                                            ) : (
                                                                <span className="text-sm font-medium text-gray-300">
                                                                    —
                                                                </span>
                                                            )}
                                                        </button>
                                                    ) : (
                                                        /* VIEW MODE: plain display */
                                                        <>
                                                            {val === true ? (
                                                                <CheckIcon className="h-3.5 w-3.5" />
                                                            ) : val ===
                                                              'View' ? (
                                                                <span className="text-sm text-gray-400">
                                                                    View
                                                                </span>
                                                            ) : (
                                                                <span className="text-sm text-gray-400">
                                                                    —
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}

                            {/* Action Row */}
                            <tr className="bg-white">
                                <td className="sticky left-0 z-10 bg-white px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 shadow-[1px_0_0_0_rgba(0,0,0,0.05)]">
                                    Action
                                </td>
                                {ROLE_KEYS.map((roleKey, i) => {
                                    const isSuperAdmin = roleKey === 'super';
                                    const isEditing = editingCol === roleKey;

                                    return (
                                        <td
                                            key={i}
                                            className="px-4 py-4 text-center whitespace-nowrap"
                                        >
                                            <div className="flex justify-center">
                                                {isSuperAdmin ? (
                                                    /* Super Admin — always disabled, no Link */
                                                    <div
                                                        className="cursor-not-allowed rounded-lg border border-gray-100 bg-gray-50 p-1.5"
                                                        title="Super Admin cannot be edited"
                                                    >
                                                        <PencilIcon className="h-4 w-4 text-gray-300" />
                                                    </div>
                                                ) : (
                                                    /* ✅ Restored: Link navigates to /users/editrole */
                                                    <Link href="/superadmin/users/editrole">
                                                        <button
                                                            onClick={() =>
                                                                handlePencilClick(
                                                                    roleKey,
                                                                )
                                                            }
                                                            className={`cursor-pointer rounded-lg border p-1.5 transition-colors ${
                                                                isEditing
                                                                    ? 'border-[#8CDD05] bg-[#F6FDE8] text-[#5A9200] hover:bg-[#edfacc]'
                                                                    : 'border-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-600'
                                                            }`}
                                                            title="Edit this role's permissions"
                                                        >
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

            {/* Legend */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#E8E6EA] pb-4">
                    <InfoIcon className="h-10 w-10" />
                    <h3 className="text-sm font-semibold text-gray-700">
                        Permission Types Legend
                    </h3>
                </div>
                <div className="space-y-3 px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                        <CheckIcon className="h-3.5 w-3.5" />
                        <span>= Full access (view, add, edit, delete)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="font-medium text-gray-600">
                            "View"
                        </span>
                        <span>= Read only</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-gray-400">—</span>
                        <span>= No access</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
