import Modal from '@/components/Modal';
import Trash from '@/images/icons/delBold.svg?react';
import MailIcon from '@/images/icons/email.svg?react';
import ExternalLink from '@/images/icons/employeeScheduling.svg?react';
import ClipboardIcon from '@/images/icons/issue.svg?react';
import { ComponentType, useState } from 'react';

interface UninstallModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    businessName?: string;
    businessId?: string;
    appName?: string;
    appProvider?: string;
    requestSource?: string;
    requestType?: string;
    requestDate?: string;
    cancellationReason?: string;
    cancellationNote?: string;
    AppIcon?: ComponentType<{ className?: string }>;
}

export default function UninstallModal({
    isOpen,
    onClose,
    onConfirm,
    businessName = 'PizzaPalace',
    businessId = 'BIZ-2050',
    appName = 'Employee Scheduling',
    appProvider = 'Ordenaire',
    AppIcon,
    requestSource = 'John Doe',
    requestType = 'User Requested',
    requestDate = '03 Oct 2025',
    cancellationReason = 'Too expensive',
    cancellationNote = 'The integration works perfectly for 90% of orders, but we are seeing a sync delay during peak hours. Orders arrive 10 minutes late on the POS.',
}: UninstallModalProps) {
    const [terminateChecked, setTerminateChecked] = useState(true);
    const [revokeChecked, setRevokeChecked] = useState(true);

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header Icon */}
                <div className="mb-6 flex items-start gap-3">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white p-2">
                        <Trash className="h-5 w-5 text-gray-700" />
                    </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-5">
                    <h2 className="text-base font-semibold text-gray-900">
                        Process App Uninstallation
                    </h2>
                    <p className="text-sm text-gray-500">
                        Manage cancellation for {businessName} &bull;{' '}
                        {businessId}
                    </p>
                </div>

                <div className="rounded-xl border border-borderColor px-6 py-4">
                    {/* App Info */}
                    <div className="mb-5 flex items-center gap-3">
                        {(() => {
                            const Icon = AppIcon;
                            return Icon ? (
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF4405]">
                                    <Icon className="h-6 w-6 text-gray-700" />
                                </div>
                            ) : (
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-sm font-bold text-white">
                                    {appName?.charAt(0)}
                                </div>
                            );
                        })()}
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

                    {/* Two Cards */}
                    <div className="mb-5 grid grid-cols-[1.3fr_2fr] gap-6">
                        {/* Request Details */}
                        <div className="rounded-xl border border-gray-200 p-6">
                            {/* Header */}
                            <div className="flex items-center gap-3 text-lg font-bold text-gray-900">
                                <MailIcon className="h-6 w-6" />
                                Request Details
                            </div>

                            {/* Content (Indented to align with the text, not the icon) */}
                            <div className="mt-5 space-y-5 pl-9">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">
                                        Request Source
                                    </p>
                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        {requestSource}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-400">
                                        {requestType}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-500">
                                        Request Date
                                    </p>
                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        {requestDate}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Reason for Cancellation */}
                        <div className="rounded-xl border border-gray-200 p-6">
                            {/* Header */}
                            <div className="flex items-center gap-3 text-lg font-bold text-gray-900">
                                <ClipboardIcon className="h-6 w-6" />
                                Reason for Cancellation
                            </div>

                            {/* Content */}
                            <div className="mt-4 pl-9">
                                <p className="text-base leading-relaxed text-gray-600">
                                    <span className="font-bold text-gray-800">
                                        {cancellationReason}:
                                    </span>{' '}
                                    "{cancellationNote}"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Admin Actions */}
                    <div className="mb-6 space-y-3 rounded-xl border border-gray-200 p-4">
                        <p className="text-sm font-semibold text-gray-800">
                            Admin Actions
                        </p>

                        {/* Terminate Subscription */}
                        <div className="flex items-start gap-3">
                            <button
                                type="button"
                                onClick={() =>
                                    setTerminateChecked(!terminateChecked)
                                }
                                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded transition-colors ${
                                    terminateChecked
                                        ? 'bg-green-500'
                                        : 'border-2 border-gray-300 bg-white'
                                }`}
                            >
                                {terminateChecked && (
                                    <svg
                                        className="h-3 w-3 text-white"
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
                                <p className="text-sm font-medium text-gray-800">
                                    Terminate Subscription
                                </p>
                                <p className="text-xs text-gray-500">
                                    Stops monthly charge immediately.
                                </p>
                            </div>
                        </div>

                        {/* Revoke Access */}
                        <div className="flex items-start gap-3">
                            <button
                                type="button"
                                onClick={() => setRevokeChecked(!revokeChecked)}
                                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded transition-colors ${
                                    revokeChecked
                                        ? 'bg-green-500'
                                        : 'border-2 border-gray-300 bg-white'
                                }`}
                            >
                                {revokeChecked && (
                                    <svg
                                        className="h-3 w-3 text-white"
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
                                <p className="text-sm font-medium text-gray-800">
                                    Revoke Access
                                </p>
                                <p className="text-xs text-gray-500">
                                    User will lose access to the app instantly
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-borderColor px-6 py-4">
                {/* Footer Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
                    >
                        Confirm Uninstallation
                    </button>
                </div>
            </div>
        </Modal>
    );
}
