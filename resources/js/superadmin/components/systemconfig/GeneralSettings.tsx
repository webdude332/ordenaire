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

const timezoneOptions = [
    { label: '(GMT+03:00) Riyadh', value: 'Asia/Riyadh' },
    { label: '(GMT+04:00) Dubai', value: 'Asia/Dubai' },
    { label: '(GMT+03:00) Kuwait', value: 'Asia/Kuwait' },
    { label: '(GMT+03:00) Qatar', value: 'Asia/Qatar' },
    { label: '(GMT+03:00) Bahrain', value: 'Asia/Bahrain' },
    { label: '(GMT+00:00) UTC', value: 'UTC' },
];

const dateFormatOptions = [
    { label: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
    { label: 'MM/DD/YYYY', value: 'MM/DD/YYYY' },
    { label: 'DD MMM YYYY', value: 'DD MMM YYYY' },
];

const currencyOptions = [
    { label: 'UAE Dirham (AED)', value: 'AED' },
    { label: 'Saudi Riyal (SAR)', value: 'SAR' },
    { label: 'Kuwaiti Dinar (KWD)', value: 'KWD' },
    { label: 'Qatari Riyal (QAR)', value: 'QAR' },
    { label: 'Bahraini Dinar (BHD)', value: 'BHD' },
    { label: 'US Dollar (USD)', value: 'USD' },
];

const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Arabic', value: 'ar' },
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

const GeneralSettings = () => {
    // Regional
    const [timezone, setTimezone] = useState('Asia/Riyadh');
    const [dateFormat, setDateFormat] = useState('DD MMM YYYY');
    const [currency, setCurrency] = useState('KWD');

    // Language
    const [langEnglish, setLangEnglish] = useState(true);
    const [langArabic, setLangArabic] = useState(true);
    const [defaultLang, setDefaultLang] = useState('en');

    // Support
    const [supportEmail, setSupportEmail] = useState('');
    const [supportPhone, setSupportPhone] = useState('');

    //toasts
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showWarningToast, setShowWarningToast] = useState(false);

    const handleReset = () => {
        setTimezone('Asia/Riyadh');
        setDateFormat('DD MMM YYYY');
        setCurrency('KWD');
        setLangEnglish(true);
        setLangArabic(true);
        setDefaultLang('en');
        setSupportEmail('');
        setSupportPhone('');
        setShowWarningToast(true);
    };

    const handleSave = () => {
        console.log({
            timezone,
            dateFormat,
            currency,
            languages: { english: langEnglish, arabic: langArabic },
            defaultLang,
            supportEmail,
            supportPhone,
        });
        setShowSuccessToast(true);
    };

    return (
        <div>
            {/* ── Regional & Platform Defaults ── */}
            <Section title="Regional & Platform Defaults">
                <p className="mb-4 text-sm font-semibold text-gray-700">
                    Regional Settings
                </p>

                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            Timezone
                        </Label>
                        <CustomDropdown
                            label="Timezone"
                            options={timezoneOptions}
                            value={timezone}
                            onChange={setTimezone}
                            placeholder="Select timezone"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            Date Format
                        </Label>
                        <CustomDropdown
                            label="Date Format"
                            options={dateFormatOptions}
                            value={dateFormat}
                            onChange={setDateFormat}
                            placeholder="Select date format"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            Base Currency
                        </Label>
                        <CustomDropdown
                            label="Base Currency"
                            options={currencyOptions}
                            value={currency}
                            onChange={setCurrency}
                            placeholder="Select currency"
                        />
                    </div>
                </div>
            </Section>

            {/* ── Language & Localization ── */}
            <Section title="Language & Localization">
                <p className="mb-4 text-sm font-semibold text-gray-700">
                    Supported Languages
                </p>

                <div className="mb-5 flex items-center gap-6">
                    <Checkbox
                        label="English"
                        disabled={true}
                        checked={langEnglish}
                        onChange={(e) => setLangEnglish(e.target.checked)}
                    />
                    <Checkbox
                        label="Arabic"
                        disabled={true}
                        checked={langArabic}
                        onChange={(e) => setLangArabic(e.target.checked)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            Default System Language
                        </Label>
                        <CustomDropdown
                            label="Default System Language"
                            options={languageOptions}
                            value={defaultLang}
                            onChange={setDefaultLang}
                            placeholder="Select language"
                            disabled={true}
                        />
                    </div>
                </div>
            </Section>

            {/* ── Platform Support Contact ── */}
            <Section title="Platform Support Contact">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            Support Email
                        </Label>
                        <Input
                            placeholder="e.g., support@ordenaire.com"
                            value={supportEmail}
                            onChange={(e) => setSupportEmail(e.target.value)}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-600">
                            Support Phone
                        </Label>
                        <Input
                            placeholder="e.g., +965 5000 1234"
                            value={supportPhone}
                            onChange={(e) => setSupportPhone(e.target.value)}
                        />
                    </div>
                </div>
            </Section>

            {/* ── Action Buttons ── */}
            <div className="mt-6 flex justify-end gap-3">
                <IconButton onClick={handleReset}>Reset to Default</IconButton>
                <Button onClick={handleSave}>Save Changes</Button>
            </div>
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
};

export default GeneralSettings;
