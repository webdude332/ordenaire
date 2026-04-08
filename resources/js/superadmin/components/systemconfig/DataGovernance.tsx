import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import { Label } from '@/superadmin/components/ui/FormElements';
import { useState } from 'react';
import SuccessToast from '../toasts/SuccessToast';
import WarningToast from '../toasts/WarningToast';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const financialRetentionOptions = [
    { label: '1 Year', value: '1y' },
    { label: '3 Years', value: '3y' },
    { label: '5 Years', value: '5y' },
    { label: '7 Years', value: '7y' },
    { label: '10 Years', value: '10y' },
];

const securityLogsOptions = [
    { label: '1 Month', value: '1m' },
    { label: '3 Months', value: '3m' },
    { label: '6 Months', value: '6m' },
    { label: '12 Months', value: '12m' },
    { label: '24 Months', value: '24m' },
];

const Section = ({ title, children }: SectionProps) => (
    <div className="flex gap-8 border-b border-borderColor py-8 last:border-none">
        <div className="w-56 shrink-0">
            <p className="text-sm font-semibold text-gray-800">{title}</p>
        </div>
        <div className="flex-1 rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
            {children}
        </div>
    </div>
);

const DaysSlider = ({
    value,
    min = 30,
    max = 180,
    onChange,
}: {
    value: number;
    min?: number;
    max?: number;
    onChange: (v: number) => void;
}) => {
    const pct = ((value - min) / (max - min)) * 100;

    return (
        <div className="w-full">
            <style>{`
                .days-slider {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 100%;
                    height: 6px;
                    border-radius: 9999px;
                    outline: none;
                    cursor: pointer;
                }
                .days-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #ffffff;
                    border: 2.5px solid #79B800;
                    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
                    cursor: pointer;
                }
                .days-slider::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #ffffff;
                    border: 2.5px solid #79B800;
                    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
                    cursor: pointer;
                }
            `}</style>

            <div className="relative mb-6">
                {/* Tooltip above thumb */}
                <div
                    className="absolute -top-8 flex -translate-x-1/2 items-center justify-center"
                    style={{ left: `calc(${pct}% + ${10 - pct * 0.2}px)` }}
                >
                    <div className="relative rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                        {value} Days
                        {/* Tooltip arrow */}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-200" />
                        <span
                            className="absolute top-full left-1/2 -translate-x-1/2 border-[3px] border-transparent border-t-white"
                            style={{ marginTop: '-1px' }}
                        />
                    </div>
                </div>

                <input
                    type="range"
                    min={min}
                    max={max}
                    step={5}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="days-slider"
                    style={{
                        background: `linear-gradient(to right, #79B800 0%, #79B800 ${pct}%, #E5E7EB ${pct}%, #E5E7EB 100%)`,
                    }}
                />
            </div>

            {/* Min / Max labels */}
            <div className="flex justify-between text-xs text-gray-400">
                <span>{min} Days</span>
                <span>{max} Days</span>
            </div>
        </div>
    );
};

export default function DataGovernance() {
    const [financialRetention, setFinancialRetention] = useState('7y');
    const [securityLogs, setSecurityLogs] = useState('6m');
    const [inactiveDays, setInactiveDays] = useState(90);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showWarningToast, setShowWarningToast] = useState(false);

    const handleReset = () => {
        setFinancialRetention('7y');
        setSecurityLogs('6m');
        setInactiveDays(90);
        setShowWarningToast(true);
    };

    const handleSave = () => {
        console.log({ financialRetention, securityLogs, inactiveDays });
        setShowSuccessToast(true);
    };

    return (
        <div>
            {/* ── Data Retention ── */}
            <Section title="Data Retention">
                {/* Financial Records + Security Logs dropdowns */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            Financial Records (Invoices &amp; Transactions)
                        </Label>
                        <CustomDropdown
                            label="Financial Records"
                            options={financialRetentionOptions}
                            value={financialRetention}
                            onChange={setFinancialRetention}
                            placeholder="Select period"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            System &amp; Security Logs
                        </Label>
                        <CustomDropdown
                            label="System & Security Logs"
                            options={securityLogsOptions}
                            value={securityLogs}
                            onChange={setSecurityLogs}
                            placeholder="Select period"
                        />
                    </div>
                </div>

                {/* Inactive / Deleted Accounts Slider */}
                <div className="mb-6">
                    <p className="mb-8 text-sm font-semibold text-gray-700">
                        Inactive / Deleted Accounts
                    </p>
                    <div className="w-1/2">
                        <DaysSlider
                            value={inactiveDays}
                            onChange={setInactiveDays}
                        />
                    </div>
                </div>

                {/* Action Buttons — inside card */}
                <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
                    <IconButton onClick={handleReset}>
                        Reset to default
                    </IconButton>
                    <Button onClick={handleSave}>Save changes</Button>
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
