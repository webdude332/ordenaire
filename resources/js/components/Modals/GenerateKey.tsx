import Modal from '@/components/Modal';
import CustomDropdown from '@/components/ui/CustomDropdown';
import { Input, Label } from '@/components/ui/FormElements';
import patternBg from '@/images/icons/patternBg.svg';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

const APP_OPTIONS = [
    { label: 'QuickPay', value: 'quickpay' },
    { label: 'FoodieCart', value: 'foodiecart' },
    { label: 'AdTrack360', value: 'adtrack360' },
    { label: 'CleanRideGo', value: 'cleanridego' },
    { label: 'Talabat', value: 'talabat' },
];

const EXPIRY_OPTIONS = [
    { label: 'Never Expires', value: 'never' },
    { label: '30 Days', value: '30d' },
    { label: '90 Days', value: '90d' },
    { label: '1 Year', value: '1y' },
];

const PERMISSIONS = [
    { label: 'Read Orders', value: 'read_orders' },
    { label: 'Write/Update Orders', value: 'write_orders' },
    { label: 'Read Customer PII', value: 'read_customer' },
    { label: 'Manage Inventory', value: 'manage_inventory' },
];

interface GenerateKeyProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function GenerateKey({
    isOpen,
    onClose,
    onConfirm,
}: GenerateKeyProps) {
    const [keyName, setKeyName] = useState('');
    const [connectedApp, setConnectedApp] = useState('');
    const [permissions, setPermissions] = useState<string[]>([
        'write_orders',
        'read_customer',
        'manage_inventory',
    ]);
    const [expiration, setExpiration] = useState('never');

    const togglePerm = (p: string) =>
        setPermissions((prev) =>
            prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
        );

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6">
                {/* Header */}
                {/* <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Plus className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Generate External Access Key
                    </h2>
                </div> */}
                <div className="mb-5">
                    <div className="relative mb-6 flex items-start gap-4">
                        <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                            <img
                                src={patternBg}
                                alt=""
                                className="max-w-none"
                                style={{
                                    transform: 'scale(1.1)',
                                    opacity: 0.7,
                                }}
                            />
                        </div>
                        <div>
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <Plus className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add App to Marketplace
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                    <p className="mb-4 text-sm font-semibold text-gray-900">
                        Configuration
                    </p>

                    {/* Key Name + App */}
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Key Label / Name
                            </Label>
                            <Input
                                value={keyName}
                                onChange={(e) => setKeyName(e.target.value)}
                                placeholder="e.g., Logistics Integration - Warehouse A"
                            />
                            <p className="mt-1 text-xs text-gray-400">
                                This name will appear in your security logs.
                            </p>
                        </div>
                        <div className="">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Connect to App
                            </Label>
                            <CustomDropdown
                                label=""
                                options={APP_OPTIONS}
                                value={connectedApp}
                                onChange={setConnectedApp}
                                placeholder="Select App..."
                            />
                        </div>
                    </div>

                    {/* Permissions */}
                    <div className="mb-4">
                        <p className="mb-3 text-sm font-semibold text-gray-900">
                            Permissions
                        </p>
                        <div className="flex flex-wrap gap-6">
                            {PERMISSIONS.map((p) => (
                                <label
                                    key={p.value}
                                    className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                                >
                                    <input
                                        type="checkbox"
                                        checked={permissions.includes(p.value)}
                                        onChange={() => togglePerm(p.value)}
                                        className="peer sr-only"
                                    />
                                    <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white transition-all peer-checked:border-[#79B800] peer-checked:bg-[#79B800]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-white"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M2 6l3 3 5-5" />
                                        </svg>
                                    </div>
                                    {p.label}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Expiration */}
                    <div className="w-1/2 pr-2">
                        <Label className="mb-1.5 text-sm font-medium text-gray-700">
                            Expiration
                        </Label>
                        <CustomDropdown
                            label=""
                            options={EXPIRY_OPTIONS}
                            value={expiration}
                            onChange={setExpiration}
                            placeholder="Never Expires"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={onConfirm}>
                    Generate Key
                </Button>
            </div>
        </Modal>
    );
}
