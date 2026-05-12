// export default function AccessSecurity() {
//     return <div>AccessSecurity</div>;
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

const AccessSecurity = ({
    data,
    update,
    onNext,
    onBack,
    canNext = true,
    isEditMode = false,
    onSave,
}: StepProps) => {
    const posPermissionOptions = [
        { label: 'Select Permission Level...', value: '' },
        { label: 'Manager', value: 'manager' },
        { label: 'Cashier', value: 'cashier' },
    ];

    const systemRoleOptions = [
        { label: 'Select System Role...', value: '' },
        { label: 'Super Admin', value: 'super_admin' },
        { label: 'Branch Manager', value: 'branch_manager' },
    ];

    const generateRandomPin = () => {
        const pin = Math.floor(100000 + Math.random() * 900000).toString();
        update('posPin', pin);
    };

    // A simple reusable toggle component to match the screenshot
    const ToggleSwitch = ({
        checked,
        onChange,
    }: {
        checked: boolean;
        onChange: () => void;
    }) => (
        <button
            type="button"
            className={`${checked ? 'bg-[#7AB621]' : 'bg-gray-200'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
            onClick={onChange}
        >
            <span
                className={`${checked ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            />
        </button>
    );

    return (
        <div className="space-y-8 border-t border-gray-200 pt-8">
            {/* POS Configuration */}
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        POS Configuration (Floor Access)
                    </h3>
                </div>
                <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                        <span className="font-semibold text-gray-900">
                            Allow login on POS App ?
                        </span>
                        <ToggleSwitch
                            checked={data.allowPosLogin || false}
                            onChange={() =>
                                update('allowPosLogin', !data.allowPosLogin)
                            }
                        />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <Label className="mb-2 text-sm font-medium text-gray-700">
                                POS Permission Level{' '}
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <CustomDropdown
                                label=""
                                options={posPermissionOptions}
                                value={data.posPermission || ''}
                                onChange={(val) => update('posPermission', val)}
                                placeholder="Select Permission Level..."
                            />
                            <p className="mt-2 text-sm text-gray-500">
                                Determines what actions this user can perform
                                (e.g., refunds, voids).
                            </p>
                        </div>

                        <div>
                            <Label className="mb-2 text-sm font-medium text-gray-700">
                                Universal PIN (6-Digits){' '}
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <div className="flex gap-4">
                                <div className="relative flex-1">
                                    <Input
                                        type="password"
                                        placeholder="******"
                                        value={data.posPin || ''}
                                        onChange={(e) =>
                                            update('posPin', e.target.value)
                                        }
                                        maxLength={6}
                                    />
                                    <span className="absolute inset-y-0 right-3 flex cursor-pointer items-center text-gray-400">
                                        {/* Simple Eye icon */}
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <Button
                                    type="button"
                                    onClick={generateRandomPin}
                                    className="whitespace-nowrap"
                                >
                                    Generate Random
                                </Button>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                                This PIN is used for POS, and Inventory access.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            {/* Web Dashboard Access */}
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Web Dashboard Access
                    </h3>
                </div>
                <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                        <div className="space-y-1">
                            <span className="font-semibold text-gray-900">
                                Allow login to Admin Dashboard?
                            </span>
                            <p className="text-sm text-gray-500">
                                Enable this for Managers, Accountants, or Owners
                                who need to view reports and change settings.
                            </p>
                        </div>
                        <ToggleSwitch
                            checked={data.allowWebLogin || false}
                            onChange={() =>
                                update('allowWebLogin', !data.allowWebLogin)
                            }
                        />
                    </div>

                    <div>
                        <Label className="mb-2 text-sm font-medium text-gray-700">
                            System Role{' '}
                            <span className="text-[#7AB621]">*</span>
                        </Label>
                        <CustomDropdown
                            label=""
                            options={systemRoleOptions}
                            value={data.systemRole || ''}
                            onChange={(val) => update('systemRole', val)}
                            placeholder="Select System Role..."
                        />
                        <p className="mt-2 text-sm text-gray-500">
                            {isEditMode
                                ? 'This defines capabilities (e.g., Can they delete items?)'
                                : 'If you need to create new system roles, please go to Settings → System Roles & Permissions.'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Only show Security notice on Add Mode usually, but keeping it visible as per screenshot */}
            {!isEditMode && (
                <>
                    <div className="h-px w-full bg-gray-200" />
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-3">
                            <h3 className="text-sm font-semibold text-gray-900">
                                Security
                            </h3>
                        </div>
                        <div className="col-span-9 rounded-xl border border-gray-200 bg-gray-50 px-6 py-6">
                            <div className="flex items-start gap-4">
                                <svg
                                    className="mt-1 h-6 w-6 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <div>
                                    <h4 className="font-medium text-gray-900">
                                        System Behaviour
                                    </h4>
                                    <p className="mt-1 font-medium text-gray-700">
                                        First-time login flow
                                    </p>
                                    <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-gray-600">
                                        <li>
                                            When you save this admin, they can
                                            sign in using their email.
                                        </li>
                                        <li>
                                            On first login, we send a one-time
                                            code to their email.
                                        </li>
                                        <li>
                                            After entering the code, they will
                                            set their own password and complete
                                            setup.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Dynamic Footer */}
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

export default AccessSecurity;
