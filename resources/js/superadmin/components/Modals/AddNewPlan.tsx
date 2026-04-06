import Modal from '@/superadmin/components/Modal';
import {
    Checkbox,
    Input,
    Label,
} from '@/superadmin/components/ui/FormElements';
import RadioGroup from '@/superadmin/components/ui/RadioGroup';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AddNewPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: PlanFormData) => void;
}

interface PlanFormData {
    planName: string;
    monthlyPrice: string;
    yearlyPrice: string;
    features: Record<string, boolean>;
    maxBranches: string;
    storageLimit: string;
    menuItems: string;
    staffSeats: string;
    status: 'active' | 'archived';
}

// ─── Feature Groups ───────────────────────────────────────────────────────────

const featureGroups = [
    {
        title: 'In-Store Management (POS)',
        features: [
            { key: 'pos_access', label: 'POS Access (Point of Sale)' },
            { key: 'kds', label: 'KDS (Kitchen Display System)' },
            {
                key: 'front_counter',
                label: 'Front Counter Display (Order Status)',
            },
            { key: 'multi_branch', label: 'Multi-Branch Management' },
            { key: 'reporting', label: 'Advanced Reporting & Analytics' },
            {
                key: 'table_reservation',
                label: 'Table & Reservation Management',
            },
        ],
    },
    {
        title: 'Team & Controls',
        features: [
            { key: 'staff_mgmt', label: 'Staff Management & Roles' },
            { key: 'approval_workflows', label: 'Approval Workflows' },
            { key: 'audit_logs', label: 'Audit Logs' },
        ],
    },
    {
        title: 'Digital Channels',
        features: [
            {
                key: 'ordering_website',
                label: 'Ordering Website (White-label)',
            },
            { key: 'kiosk', label: 'Kiosk Machine Support' },
            { key: 'marketplace', label: '3rd Party Marketplace Integrations' },
        ],
    },
    {
        title: 'Inventory & Stock',
        features: [
            { key: 'basic_inventory', label: 'Basic Inventory Management' },
            {
                key: 'advanced_inventory',
                label: 'Advanced Inventory (Recipes/Wastage)',
            },
        ],
    },
    {
        title: 'Communication & Support',
        features: [
            { key: 'whatsapp', label: 'WhatsApp Integration' },
            { key: 'account_manager', label: 'Dedicated Account Manager' },
        ],
    },
];

// Build initial feature state (all unchecked)
const initialFeatures: Record<string, boolean> = {};
featureGroups.forEach((group) =>
    group.features.forEach((f) => (initialFeatures[f.key] = false)),
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function AddNewPlanModal({
    isOpen,
    onClose,
    onConfirm,
}: AddNewPlanModalProps) {
    const [planName, setPlanName] = useState('');
    const [monthlyPrice, setMonthlyPrice] = useState('');
    const [yearlyPrice, setYearlyPrice] = useState('');
    const [features, setFeatures] =
        useState<Record<string, boolean>>(initialFeatures);
    const [maxBranches, setMaxBranches] = useState('10');
    const [storageLimit, setStorageLimit] = useState('10');
    const [menuItems, setMenuItems] = useState('150');
    const [staffSeats, setStaffSeats] = useState('10');
    const [status, setStatus] = useState<'active' | 'archived'>('active');

    const toggleFeature = (key: string) => {
        setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSubmit = () => {
        onConfirm({
            planName,
            monthlyPrice,
            yearlyPrice,
            features,
            maxBranches,
            storageLimit,
            menuItems,
            staffSeats,
            status,
        });
        onClose();
    };

    // Split feature groups into left (index 0, 2, 4) and right (index 1, 3)
    const leftGroups = [featureGroups[0], featureGroups[2], featureGroups[4]];
    const rightGroups = [featureGroups[1], featureGroups[3]];

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ─────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Plus className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add new plan
                    </h2>
                </div>

                <div className="space-y-5">
                    {/* ── Plan Details ────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-base font-semibold text-gray-900">
                            Plan Details
                        </h3>

                        {/* Plan Name */}
                        <div className="mb-4">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Plan Name
                                <span className="text-primary">*</span>
                            </Label>
                            <Input
                                placeholder="Name of the plan"
                                value={planName}
                                onChange={(e) => setPlanName(e.target.value)}
                            />
                        </div>

                        {/* Pricing row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Monthly Price (KWD)
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    placeholder="Price per month"
                                    value={monthlyPrice}
                                    onChange={(e) =>
                                        setMonthlyPrice(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Yearly Price (KWD)
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    placeholder="Price per year"
                                    value={yearlyPrice}
                                    onChange={(e) =>
                                        setYearlyPrice(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Features & Modules ──────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-base font-semibold text-gray-900">
                            Features & Modules
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Left column */}
                            <div className="space-y-4">
                                {leftGroups.map((group) => (
                                    <div
                                        key={group.title}
                                        className="rounded-xl border border-gray-200 p-4"
                                    >
                                        <p className="mb-3 text-sm font-semibold text-gray-900">
                                            {group.title}
                                        </p>
                                        <div className="space-y-2.5">
                                            {group.features.map((feature) => (
                                                <Checkbox
                                                    key={feature.key}
                                                    label={feature.label}
                                                    checked={
                                                        features[feature.key]
                                                    }
                                                    onChange={() =>
                                                        toggleFeature(
                                                            feature.key,
                                                        )
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right column */}
                            <div className="space-y-4">
                                {rightGroups.map((group) => (
                                    <div
                                        key={group.title}
                                        className="rounded-xl border border-gray-200 p-4"
                                    >
                                        <p className="mb-3 text-sm font-semibold text-gray-900">
                                            {group.title}
                                        </p>
                                        <div className="space-y-2.5">
                                            {group.features.map((feature) => (
                                                <Checkbox
                                                    key={feature.key}
                                                    label={feature.label}
                                                    checked={
                                                        features[feature.key]
                                                    }
                                                    onChange={() =>
                                                        toggleFeature(
                                                            feature.key,
                                                        )
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Usage Limits ────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-base font-semibold text-gray-900">
                            Usage Limits
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Max Branches
                                </Label>
                                <Input
                                    placeholder="10"
                                    value={maxBranches}
                                    onChange={(e) =>
                                        setMaxBranches(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Storage Limit
                                </Label>
                                <div className="relative">
                                    <Input
                                        placeholder="10"
                                        value={storageLimit}
                                        onChange={(e) =>
                                            setStorageLimit(e.target.value)
                                        }
                                        className="pr-10"
                                    />
                                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                        GB
                                    </span>
                                </div>
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Menu Items
                                </Label>
                                <Input
                                    placeholder="150"
                                    value={menuItems}
                                    onChange={(e) =>
                                        setMenuItems(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Staff/User Seats
                                </Label>
                                <Input
                                    placeholder="10"
                                    value={staffSeats}
                                    onChange={(e) =>
                                        setStaffSeats(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Status and Availability ─────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-base font-semibold text-gray-900">
                            Status and Availability
                        </h3>
                        <RadioGroup
                            name="plan_status_add"
                            label="Status"
                            value={status}
                            onChange={(val) =>
                                setStatus(val as 'active' | 'archived')
                            }
                            options={[
                                { value: 'active', label: 'Public (Active)' },
                                {
                                    value: 'archived',
                                    label: 'Hidden (Archived)',
                                },
                            ]}
                            gap="gap-6"
                        />
                    </div>
                </div>
            </div>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Create Plan
                </Button>
            </div>
        </Modal>
    );
}
