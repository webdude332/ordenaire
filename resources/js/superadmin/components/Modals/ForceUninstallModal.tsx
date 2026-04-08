import Modal from '@/superadmin/components/Modal';
import Trash from '@shared/images/icons/delBold.svg?react';
import ExternalLink from '@shared/images/icons/employeeScheduling.svg?react';
import { ComponentType, useState } from 'react';
import Button from '../ui/Button';
import CustomDropdown from '../ui/CustomDropdown';
import IconButton from '../ui/IconButton';

interface ForceUninstallModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    businessName?: string;
    businessId?: string;
    appName?: string;
    appProvider?: string;
    currentStatus?: string;
    AppIcon?: ComponentType<{ className?: string }>;
}

const REMOVAL_REASONS = [
    'Too expensive',
    'Not useful',
    'Switching to another app',
    'Technical issues',
    'Other',
];

export default function ForceUninstallModal({
    isOpen,
    onClose,
    onConfirm,
    businessName = 'PizzaPalace',
    businessId = 'BIZ-2050',
    appName = 'Employee Scheduling',
    appProvider = 'Ordenaire',
    currentStatus = 'Active',
    AppIcon,
}: ForceUninstallModalProps) {
    const [terminateChecked, setTerminateChecked] = useState(true);
    const [revokeChecked, setRevokeChecked] = useState(true);
    const [notifyChecked, setNotifyChecked] = useState(false);
    const [reason, setReason] = useState('');

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                    <Trash className="h-5 w-5 text-gray-700" />
                </div>

                <div className="mb-5">
                    <h2 className="text-base font-semibold text-gray-900">
                        Force Uninstall App
                    </h2>
                    <p className="text-sm text-gray-500">
                        Revoke access for {businessName} &bull; {businessId}
                    </p>
                </div>

                <div className="rounded-xl border border-borderColor p-5">
                    {/* App Info Row */}
                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {AppIcon ? (
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF4405]">
                                    <AppIcon className="h-6 w-6 text-white" />
                                </div>
                            ) : (
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF4405] text-sm font-bold text-white">
                                    {appName?.charAt(0)}
                                </div>
                            )}
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    {appName}
                                </p>
                                <a
                                    href="#"
                                    className="flex items-center gap-1 text-xs text-gray-500 hover:underline"
                                >
                                    By {appProvider}
                                    <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </div>

                        {/* Current Status Badge */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Current Status:</span>
                            <span className="flex items-center gap-1.5 rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-medium text-green-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                {currentStatus}
                            </span>
                        </div>
                    </div>

                    {/* Reason for Action */}
                    <div className="mb-5 w-1/2">
                        <p className="mb-2 text-sm font-semibold text-gray-800">
                            Reason for Action
                        </p>
                        <CustomDropdown
                            label=""
                            options={REMOVAL_REASONS.map((r) => ({
                                label: r,
                                value: r,
                            }))}
                            value={reason}
                            onChange={setReason}
                            placeholder="Select Reason for Removal"
                        />
                    </div>

                    {/* Admin Actions */}
                    <div className="space-y-4 p-4">
                        <p className="text-sm font-semibold text-gray-800">
                            Admin Actions
                        </p>

                        {/* Terminate Subscription */}
                        {/* <Checkbox
                            // checked={terminateChecked}
                            checked={true}
                            onChange={() =>
                                setTerminateChecked(!terminateChecked)
                            }
                            label="Terminate Subscription"
                            description="Stops  monthly charge immediately."
                        /> */}
                        <div style={{ pointerEvents: 'none', opacity: 0.5 }}>
                            <Checkbox
                                checked={true}
                                onChange={() => {}}
                                label="Terminate Subscription"
                                description="Stops monthly charge immediately."
                            />
                        </div>

                        {/* Revoke Access */}
                        <Checkbox
                            checked={revokeChecked}
                            onChange={() => setRevokeChecked(!revokeChecked)}
                            label="Revoke Access"
                            description="User will lose access to the app instantly"
                        />

                        {/* Notify User via Email */}
                        <Checkbox
                            checked={notifyChecked}
                            onChange={() => setNotifyChecked(!notifyChecked)}
                            label="Notify User via Email"
                            description={`Send them an automated "Your app was removed" email`}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-borderColor px-6 py-5">
                <IconButton onClick={onClose}>Cancel</IconButton>
                <Button
                    onClick={onConfirm}
                    className="bg-[#FF0019] hover:bg-[#D00015]"
                >
                    Uninstall App
                </Button>
            </div>
        </Modal>
    );
}

function Checkbox({
    checked,
    onChange,
    label,
    description,
}: {
    checked: boolean;
    onChange: () => void;
    label: string;
    description: string;
}) {
    return (
        <div className="flex items-start gap-3">
            <button
                type="button"
                onClick={onChange}
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 cursor-pointer items-center justify-center rounded transition-colors ${
                    checked
                        ? 'bg-[#79B800]'
                        : 'border-2 border-gray-300 bg-white'
                }`}
            >
                {checked && (
                    <svg
                        className="h-4 w-4 text-white"
                        viewBox="0 0 12 12"
                        fill="none"
                    >
                        <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
            <div>
                <p className="text-sm font-medium text-gray-800">{label}</p>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
        </div>
    );
}
