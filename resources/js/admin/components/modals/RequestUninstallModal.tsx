import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import { useState } from 'react';

interface RequestUninstallModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (reason: string, details: string) => void;
    appName: string;
}

const cancellationReasons = [
    { label: 'Too expensive', value: 'too_expensive' },
    { label: 'Missing features I need', value: 'missing_features' },
    { label: 'Switching to another solution', value: 'switching' },
    { label: 'Technical issues', value: 'technical_issues' },
    { label: 'No longer needed', value: 'no_longer_needed' },
    { label: 'Other', value: 'other' },
];

export default function RequestUninstallModal({
    isOpen,
    onClose,
    onSubmit,
    appName,
}: RequestUninstallModalProps) {
    const [reason, setReason] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = () => {
        if (!reason) return;
        onSubmit(reason, details);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        {/* Trash icon */}
                        <svg
                            className="h-5 w-5 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold text-gray-900">
                            Request Uninstall
                        </h2>
                        <p className="text-sm text-gray-500">{appName}</p>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-5 rounded-xl border border-borderColor bg-white p-6">
                    <div>
                        <Label className="mb-1.5 text-sm font-medium text-gray-700">
                            Reason for cancellation{' '}
                            <span className="text-[#8AC926]">*</span>
                        </Label>
                        <CustomDropdown
                            label="Reason"
                            options={cancellationReasons}
                            value={reason}
                            onChange={setReason}
                            placeholder="Select a reason..."
                        />
                    </div>

                    <div>
                        <Label className="mb-1.5 text-sm font-medium text-gray-700">
                            Additional Details (Optional)
                        </Label>
                        <Input
                            as="textarea"
                            rows={5}
                            placeholder="e.g., The features didn't match our restaurant's workflow, or we encountered technical issues."
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        />
                    </div>

                    {/* Info notice */}
                    <div className="flex items-start gap-3 rounded-xl border border-borderColor p-4">
                        <svg
                            className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">
                                Submitting this request will notify our support
                                team.
                            </span>{' '}
                            Your access will remain active until the request is
                            processed.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex gap-2 border-t border-borderColor px-6 py-5">
                <div className="w-1/2">
                    <IconButton className="w-full" onClick={onClose}>
                        Keep Subscription
                    </IconButton>
                </div>
                <div className="w-1/2">
                    <Button
                        className={`w-full text-white ${reason ? 'bg-[#F04438] hover:bg-[#d03025]' : 'cursor-not-allowed bg-gray-300'}`}
                        disabled={!reason}
                        onClick={handleSubmit}
                    >
                        Submit Request
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
