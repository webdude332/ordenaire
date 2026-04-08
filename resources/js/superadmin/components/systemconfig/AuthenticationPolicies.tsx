import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import {
    Checkbox,
    Input,
    Label,
} from '@/superadmin/components/ui/FormElements';
import { useState } from 'react';
import SuccessToast from '../toasts/SuccessToast';
import WarningToast from '../toasts/WarningToast';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const passwordExpiryOptions = [
    { label: 'Never Expires', value: 'never' },
    { label: '30 Days', value: '30' },
    { label: '60 Days', value: '60' },
    { label: '90 Days', value: '90' },
    { label: '180 Days', value: '180' },
    { label: '365 Days', value: '365' },
];

const passwordReuseOptions = [
    { label: 'Allow Reuse Immediately (Not Recommended)', value: 'allow' },
    { label: 'Block Last 1 Password', value: '1' },
    { label: 'Block Last 3 Passwords', value: '3' },
    { label: 'Block Last 5 Passwords', value: '5' },
];

const Section = ({ title, children }: SectionProps) => (
    <div className="flex gap-8 pt-8 last:border-none">
        <div className="w-56 shrink-0">
            <p className="text-sm font-semibold text-gray-800">{title}</p>
        </div>
        <div className="flex-1 rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
            {children}
        </div>
    </div>
);

export default function AuthenticationPolicies() {
    // Password rules
    const [minLength, setMinLength] = useState(10);
    const [requireUppercase, setRequireUppercase] = useState(true);
    const [requireNumbers, setRequireNumbers] = useState(true);
    const [requireSpecial, setRequireSpecial] = useState(true);
    const [passwordExpiry, setPasswordExpiry] = useState('365');
    const [passwordReuse, setPasswordReuse] = useState('5');
    const [maxFailedAttempts, setMaxFailedAttempts] = useState('');
    //toasts
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showWarningToast, setShowWarningToast] = useState(false);

    const handleReset = () => {
        setMinLength(10);
        setRequireUppercase(true);
        setRequireNumbers(true);
        setRequireSpecial(true);
        setPasswordExpiry('365');
        setPasswordReuse('5');
        setMaxFailedAttempts('');
        setShowWarningToast(true);
    };

    const handleSave = () => {
        console.log({
            minLength,
            requirements: {
                uppercase: requireUppercase,
                numbers: requireNumbers,
                special: requireSpecial,
            },
            passwordExpiry,
            passwordReuse,
            maxFailedAttempts,
        });
        setShowSuccessToast(true);
    };

    return (
        <div>
            <Section title="Password Rules">
                {/* Minimum Length Slider */}
                <div className="mb-6">
                    <p className="mb-3 text-sm font-semibold text-gray-700">
                        Minimum length
                    </p>
                    <div className="relative w-1/2">
                        <input
                            type="range"
                            min={6}
                            max={32}
                            value={minLength}
                            onChange={(e) =>
                                setMinLength(Number(e.target.value))
                            }
                            className="h-2 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#79B800] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md"
                            style={{
                                background: `linear-gradient(to right, #79B800 0%, #79B800 ${
                                    ((minLength - 6) / (32 - 6)) * 100
                                }%, #E5E7EB ${
                                    ((minLength - 6) / (32 - 6)) * 100
                                }%, #E5E7EB 100%)`,
                            }}
                        />
                    </div>
                    <div className="flex w-1/2 items-center justify-center">
                        <p className="mt-2 text-sm text-gray-500">
                            {minLength} Characters
                        </p>
                    </div>
                </div>

                {/* Requirement Checkboxes */}
                <div className="mb-6">
                    <p className="mb-3 text-sm font-medium text-gray-600">
                        Select from the following Requirement options
                    </p>
                    <div className="flex items-center gap-6">
                        <Checkbox
                            label="Uppercase"
                            checked={requireUppercase}
                            onChange={(e) =>
                                setRequireUppercase(e.target.checked)
                            }
                        />
                        <Checkbox
                            label="Numbers"
                            checked={requireNumbers}
                            onChange={(e) =>
                                setRequireNumbers(e.target.checked)
                            }
                        />
                        <Checkbox
                            label="Special Characters"
                            checked={requireSpecial}
                            onChange={(e) =>
                                setRequireSpecial(e.target.checked)
                            }
                        />
                    </div>
                </div>

                {/* Password Expiry + Password Reuse */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            Password Expiry
                        </Label>
                        <CustomDropdown
                            label="Password Expiry"
                            options={passwordExpiryOptions}
                            value={passwordExpiry}
                            onChange={setPasswordExpiry}
                            placeholder="Select expiry"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            Password Reuse
                        </Label>
                        <CustomDropdown
                            label="Password Reuse"
                            options={passwordReuseOptions}
                            value={passwordReuse}
                            onChange={setPasswordReuse}
                            placeholder="Select reuse policy"
                        />
                    </div>
                </div>

                {/* Max Failed Attempts – half width */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            Max Failed Attempts
                        </Label>
                        <Input
                            placeholder="e.g., 5 attempts"
                            value={maxFailedAttempts}
                            onChange={(e) =>
                                setMaxFailedAttempts(e.target.value)
                            }
                        />
                    </div>
                </div>

                {/* ── Action Buttons (inside card) ── */}
                <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
                    <IconButton onClick={handleReset}>
                        Reset to default
                    </IconButton>
                    <Button onClick={handleSave}>Save changes</Button>
                </div>
            </Section>
            <Section title="">
                <div className="">
                    <p className="text-sm font-semibold text-gray-700">
                        Last Modified: alice, On: 18 Nov 2025
                    </p>
                </div>
            </Section>
            {showSuccessToast && (
                <SuccessToast
                    title="Settings Saved"
                    message="Your configuration has been updated successfully."
                    onClose={() => setShowSuccessToast(false)}
                    actionText=""
                    onAction={() => {}}
                />
            )}
            {showWarningToast && (
                <WarningToast
                    title="Settings Reset to Default"
                    message="Your configuration has been reset to default."
                    onClose={() => setShowWarningToast(false)}
                    actionText=""
                    onAction={() => {}}
                />
            )}
        </div>
    );
}
