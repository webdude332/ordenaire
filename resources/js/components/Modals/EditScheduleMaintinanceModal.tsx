import Modal from '@/components/Modal';
import CustomDropdown from '@/components/ui/CustomDropdown';
import { Checkbox, Input, Label } from '@/components/ui/FormElements';
import RadioGroup from '@/components/ui/RadioGroup';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import {
    AlignCenter,
    AlignLeft,
    Bold,
    Calendar,
    Italic,
    List,
    MoreVertical,
    Underline,
} from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface EditScheduleMaintenanceModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

// ─── Options ──────────────────────────────────────────────────────────────────

const PLATFORM_OPTIONS = [
    { label: 'POS App (iPad)', value: 'pos_ipad' },
    { label: 'Merchant Portal (Web)', value: 'merchant_portal' },
    { label: 'Consumer Ordering App', value: 'consumer_ordering' },
    { label: 'Kiosk Machine', value: 'kiosk_machine' },
];

const VERSION_OPTIONS = [
    { label: 'v5.4.0 (Scheduled Release)', value: 'v5.4.0' },
    { label: 'v5.3.1 (Scheduled Release)', value: 'v5.3.1' },
    { label: 'v5.2.0 (Scheduled Release)', value: 'v5.2.0' },
    { label: 'Maintenance Only (No Version)', value: 'maintenance_only' },
];

const REGION_OPTIONS = [
    { label: 'Global', value: 'global' },
    { label: 'UAE Servers', value: 'uae' },
    { label: 'KSA Servers', value: 'ksa' },
    { label: 'Kuwait Servers', value: 'kuwait' },
    { label: 'Qatar Servers', value: 'qatar' },
];

const CHANNEL_LIST = [
    { key: 'email', label: 'Email' },
    { key: 'dashboard', label: 'Dashboard Notification' },
    { key: 'whatsapp', label: 'WhatsApp' },
    { key: 'pos', label: 'POS' },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function EditScheduleMaintenanceModal({
    isOpen,
    onClose,
    onConfirm,
}: EditScheduleMaintenanceModalProps) {
    const [startDate, setStartDate] = useState('02 Sep 2025 – 10:00 PM');
    const [endDate, setEndDate] = useState('03 Sep 2025 – 2:00 AM');
    const [platform, setPlatform] = useState('pos_ipad');
    const [version, setVersion] = useState('v5.4.0');
    const [region, setRegion] = useState('global');
    const [englishMsg, setEnglishMsg] = useState(
        'Dear Clients,\nOur system will undergo scheduled maintenance on Sept 15, 2025, from 2:00 AM to 4:00 AM KSA time.\nDuring this period, services may be temporarily unavailable.',
    );
    const [arabicMsg, setArabicMsg] = useState(
        'عملاؤنا الكرام، سيخضع نظامنا لصيانة دورية يوم 15 سبتمبر 2025، من الساعة 2:00 صباحًا إلى 4:00 صباحًا بتوقيت المملكة العربية السعودية. خلال هذه الفترة، قد تكون الخدمات غير متاحة مؤقتًا.',
    );
    const [channels, setChannels] = useState<Record<string, boolean>>({
        email: true,
        dashboard: true,
        whatsapp: false,
        pos: false,
    });
    const [timing, setTiming] = useState('immediately');
    const [resendNotification, setResend] = useState(true);
    const totalDuration = '4 Hours';

    const toggleChannel = (key: string) =>
        setChannels((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ─────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <PencilIcon className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Edit Scheduled Maintenance
                    </h2>
                </div>

                <div className="space-y-4">
                    {/* ── Schedule Details ─────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <div className="mb-4 grid grid-cols-3 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Start Date
                                </Label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                    </span>
                                    <input
                                        type="text"
                                        value={startDate}
                                        onChange={(e) =>
                                            setStartDate(e.target.value)
                                        }
                                        placeholder="DD MMM YYYY – HH:MM"
                                        className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-9 text-sm text-gray-900 placeholder-gray-400 shadow-xs outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    End date
                                </Label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                    </span>
                                    <input
                                        type="text"
                                        value={endDate}
                                        onChange={(e) =>
                                            setEndDate(e.target.value)
                                        }
                                        placeholder="DD MMM YYYY – HH:MM"
                                        className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-9 text-sm text-gray-900 placeholder-gray-400 shadow-xs outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Total duration
                                </Label>
                                <Input
                                    value={totalDuration}
                                    placeholder="Auto-calculated"
                                    className="bg-gray-50 text-gray-500"
                                    disabled={true}
                                />
                            </div>
                        </div>

                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Platform
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={PLATFORM_OPTIONS}
                                    value={platform}
                                    onChange={setPlatform}
                                    placeholder="Select platform"
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Version
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={VERSION_OPTIONS}
                                    value={version}
                                    onChange={setVersion}
                                    placeholder="Select version"
                                />
                            </div>
                        </div>

                        <div className="w-1/2 pr-2">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Region / Zone
                            </Label>
                            <CustomDropdown
                                label=""
                                options={REGION_OPTIONS}
                                value={region}
                                onChange={setRegion}
                                placeholder="Select region"
                            />
                        </div>
                    </div>

                    {/* ── User Notification Editor ─────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <div className="mb-3 flex items-start justify-between">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    User Notification Editor
                                </h3>
                                <p className="mt-0.5 text-xs text-gray-400">
                                    Alert Template (English &amp; Arabic)
                                </p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreVertical className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="mb-3 flex items-center gap-1 border-b border-gray-100 pb-3">
                            {[
                                { Icon: Bold, title: 'Bold' },
                                { Icon: Italic, title: 'Italic' },
                                { Icon: Underline, title: 'Underline' },
                            ].map(({ Icon, title }) => (
                                <button
                                    key={title}
                                    title={title}
                                    className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100"
                                >
                                    <Icon className="h-3.5 w-3.5 text-gray-600" />
                                </button>
                            ))}
                            <div className="mx-1 h-5 w-px bg-gray-200" />
                            <button className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100">
                                <span className="h-4 w-4 rounded-full bg-gray-900" />
                            </button>
                            <div className="mx-1 h-5 w-px bg-gray-200" />
                            {[
                                { Icon: AlignLeft, title: 'Align Left' },
                                { Icon: AlignCenter, title: 'Align Center' },
                                { Icon: List, title: 'List' },
                            ].map(({ Icon, title }) => (
                                <button
                                    key={title}
                                    title={title}
                                    className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100"
                                >
                                    <Icon className="h-3.5 w-3.5 text-gray-600" />
                                </button>
                            ))}
                        </div>

                        <div className="mb-3">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                English
                            </Label>
                            <textarea
                                rows={4}
                                value={englishMsg}
                                onChange={(e) => setEnglishMsg(e.target.value)}
                                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                            />
                        </div>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Arabic
                            </Label>
                            <textarea
                                rows={4}
                                dir="rtl"
                                value={arabicMsg}
                                onChange={(e) => setArabicMsg(e.target.value)}
                                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                            />
                        </div>
                    </div>

                    {/* ── Channel ──────────────────────────────────────── */}

                    {/* 1. Channel Section */}
                    <div className="rounded-xl border border-gray-200 px-5 py-4">
                        <h3 className="mb-4 text-base font-semibold text-slate-800">
                            Channel
                        </h3>
                        <div className="flex flex-wrap items-center gap-6">
                            {CHANNEL_LIST.map(({ key, label }) => (
                                <Checkbox
                                    key={key}
                                    label={label}
                                    checked={channels[key]}
                                    onChange={() => toggleChannel(key)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── Notification Timing ──────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <RadioGroup
                            name="edit_notification_timing"
                            label="Notification Timing"
                            value={timing}
                            onChange={setTiming}
                            options={[
                                {
                                    value: 'immediately',
                                    label: 'Send Immediately',
                                },
                                { value: '1h_before', label: '1 Hour Before' },
                                {
                                    value: '24h_before',
                                    label: '24 Hours Before',
                                },
                                {
                                    value: 'do_not_notify',
                                    label: 'Do Not Notify',
                                },
                            ]}
                            gap="gap-6"
                        />
                    </div>

                    {/* ── Resend notification ───────────────────────────── */}

                    <div className="rounded-xl border border-gray-200 px-5 py-4">
                        <Checkbox
                            label="Resend notification to users with updated details"
                            checked={resendNotification}
                            onChange={() => setResend(!resendNotification)}
                        />
                    </div>
                </div>
            </div>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button
                    className="w-full"
                    onClick={() => {
                        onConfirm();
                        onClose();
                    }}
                >
                    Save Changes
                </Button>
            </div>
        </Modal>
    );
}
