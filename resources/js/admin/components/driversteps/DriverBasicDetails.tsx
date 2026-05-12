// export default function DriverBasicDetails() {
//     return <div>DriverBasicDetails</div>;
// }

import UploadDocumentModal from '@/shared/sharedcomponents/modals/UploadDocumentModal';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import { useState } from 'react';

interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext?: () => void;
    onBack: () => void;
    canNext?: boolean;
    isEditMode?: boolean;
    onSave?: () => void;
}

const DriverBasicDetails = ({
    data,
    update,
    onNext,
    onBack,
    canNext = true,
    isEditMode = false,
    onSave,
}: StepProps) => {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const statusOptions = [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
    ];

    return (
        <div className="space-y-8 pt-4">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Basic Details
                    </h3>
                </div>
                <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                    {/* User Photo */}
                    <div className="space-y-2 border-b border-gray-100 pb-6">
                        <Label className="text-sm font-medium text-gray-700">
                            User photo
                        </Label>
                        <p className="text-xs text-gray-500">
                            This will be displayed on the profile.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                                {data.image ? (
                                    <img
                                        src={URL.createObjectURL(data.image)}
                                        alt="preview"
                                        className="h-16 w-16 rounded-full object-cover"
                                    />
                                ) : (
                                    <svg
                                        className="h-8 w-8 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                )}
                            </div>
                            <IconButton
                                type="button"
                                onClick={() => setIsImageModalOpen(true)}
                            >
                                {data.image ? 'Replace Photo' : 'Upload photo'}
                            </IconButton>
                        </div>
                    </div>

                    {/* ID & Name */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Staff ID (auto-generated)
                            </Label>
                            <Input
                                value={data.staffId || 'STF-0001'}
                                disabled
                                placeholder="STF-0001"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Full name{' '}
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <Input
                                placeholder="e.g., Noah Pierre"
                                value={data.fullName || ''}
                                onChange={(e) =>
                                    update('fullName', e.target.value)
                                }
                            />
                        </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Email address{' '}
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </span>
                                <Input
                                    placeholder="e.g., noah@ordenaire.com"
                                    value={data.email || ''}
                                    onChange={(e) =>
                                        update('email', e.target.value)
                                    }
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Phone number{' '}
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <Input
                                placeholder="+965 66557788"
                                value={data.phone || ''}
                                onChange={(e) =>
                                    update('phone', e.target.value)
                                }
                            />
                        </div>
                    </div>

                    {/* Status Only (No Job Title for Drivers) */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <Label className="mb-2 text-sm font-medium text-gray-700">
                                Employment Status{' '}
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <CustomDropdown
                                label=""
                                options={statusOptions}
                                value={data.status || 'active'}
                                onChange={(val) => update('status', val)}
                                placeholder="Select status"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                <IconButton onClick={onBack}>Cancel</IconButton>
                {isEditMode ? (
                    <Button onClick={onSave} disabled={!canNext}>
                        Save Changes
                    </Button>
                ) : (
                    <Button onClick={onNext} disabled={!canNext}>
                        Next: Compensation & Documents
                    </Button>
                )}
            </div>

            <UploadDocumentModal
                isOpen={isImageModalOpen}
                onClose={() => setIsImageModalOpen(false)}
                title="Upload Profile Photo"
                primaryBtnText="Add Image"
                successBtnText="Save Image"
                cancelBtnText="Cancel"
                onUpload={() => setIsImageModalOpen(false)}
            />
        </div>
    );
};

export default DriverBasicDetails;
