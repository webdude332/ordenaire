// export default function DriverCompensation() {
//     return <div>DriverCompensation</div>;
// }

import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';

interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext?: () => void;
    onBack: () => void;
    canNext?: boolean;
    isEditMode?: boolean;
    onSave?: () => void;
}

const DriverCompensation = ({
    data,
    update,
    onNext,
    onBack,
    canNext = true,
    isEditMode = false,
    onSave,
}: StepProps) => {
    const employmentOptions = [
        { label: 'Full-time', value: 'full_time' },
        { label: 'Part-time', value: 'part_time' },
        { label: 'Contract', value: 'contract' },
    ];

    return (
        <div className="space-y-8 pt-4">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Salary & Wages
                    </h3>
                </div>
                <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <Label className="mb-2 text-sm font-medium text-gray-700">
                                Employment type{' '}
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <CustomDropdown
                                label=""
                                options={employmentOptions}
                                value={data.employmentType || 'full_time'}
                                onChange={(val) =>
                                    update('employmentType', val)
                                }
                                placeholder="Select type"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Base Salary{' '}
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <div className="relative">
                                <Input
                                    placeholder="0.000"
                                    value={data.baseSalary || ''}
                                    onChange={(e) =>
                                        update('baseSalary', e.target.value)
                                    }
                                    className="pr-24"
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    KWD / month
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Standard Work Hours
                            </Label>
                            <div className="relative">
                                <Input
                                    placeholder="8"
                                    value={data.workHours || ''}
                                    onChange={(e) =>
                                        update('workHours', e.target.value)
                                    }
                                    className="pr-24"
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    Hours / Day
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Work Days
                            </Label>
                            <div className="relative">
                                <Input
                                    placeholder="6"
                                    value={data.workDays || ''}
                                    onChange={(e) =>
                                        update('workDays', e.target.value)
                                    }
                                    className="pr-24"
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    Days / Week
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Bank Information
                    </h3>
                </div>
                <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                            Bank Name (Optional)
                        </Label>
                        <Input
                            placeholder="e.g. National Bank of Kuwait"
                            value={data.bankName || ''}
                            onChange={(e) => update('bankName', e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                            Account Holder Name (Optional)
                        </Label>
                        <Input
                            placeholder="e.g. Noah Pierre"
                            value={data.accountHolder || ''}
                            onChange={(e) =>
                                update('accountHolder', e.target.value)
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                            IBAN / Account Number (Optional)
                        </Label>
                        <Input
                            placeholder="e.g. KW99 NBKK..."
                            value={data.iban || ''}
                            onChange={(e) => update('iban', e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Add Document (Optional)
                    </h3>
                </div>
                <div className="col-span-9 flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                    <span className="text-sm font-medium text-gray-900">
                        No documents uploaded
                    </span>
                    <IconButton
                        onClick={() => alert('Open document upload modal')}
                    >
                        <svg
                            className="mr-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                        Add document
                    </IconButton>
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
                        Next: Review
                    </Button>
                )}
            </div>
        </div>
    );
};

export default DriverCompensation;
