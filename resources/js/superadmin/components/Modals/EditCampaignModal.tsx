import Modal from '@/superadmin/components/Modal';
// import RadioGroup from '@superadmin/components/RadioGroup';
import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import { Input, Label } from '@/superadmin/components/ui/FormElements';
import patternBg from '@shared/images/icons/patternBg.svg';
import {
    AlignCenter,
    AlignLeft,
    AlignRight,
    Bold,
    Calendar,
    Italic,
    List,
    PencilIcon,
    Underline,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import RadioGroup from '../ui/RadioGroup';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ScheduledItem {
    id: number;
    campaignTitle: string;
    channels: string[];
    audienceScope: string;
    scheduledFor: string;
    region?: string;
    segment?: string;
    role?: string;
    language?: string;
    body?: string;
}

interface EditCampaignModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: CampaignFormData) => void;
    campaign: ScheduledItem | null;
}

interface CampaignFormData {
    title: string;
    body: string;
    channels: string[];
    region: string;
    segment: string;
    role: string;
    language: string;
    deliveryTiming: 'immediately' | 'scheduled';
    scheduledDateTime: string;
}

// ─── Options ──────────────────────────────────────────────────────────────────

const REGION_OPTIONS = [
    { label: 'All Regions', value: 'all_regions' },
    { label: 'UAE', value: 'uae' },
    { label: 'KSA', value: 'ksa' },
    { label: 'Kuwait', value: 'kuwait' },
    { label: 'Qatar', value: 'qatar' },
];

const SEGMENT_OPTIONS = [
    { label: 'All Active Merchants', value: 'all_active' },
    { label: 'Pro Plan', value: 'pro_plan' },
    { label: 'Enterprise Plan', value: 'enterprise_plan' },
    { label: 'Franchise Business', value: 'franchise' },
    { label: 'Standard Plan', value: 'standard_plan' },
    { label: 'Suspended Accounts', value: 'suspended' },
];

const ROLE_OPTIONS = [
    { label: 'All Users', value: 'all_users' },
    { label: 'Super Admins', value: 'super_admins' },
    { label: 'Admins', value: 'admins' },
    { label: 'Employees (Branch Manager)', value: 'employees' },
];

const LANGUAGE_OPTIONS = [
    { label: '🇺🇸 English', value: 'english' },
    { label: '🇸🇦 Arabic', value: 'arabic' },
];

const CHANNELS = ['Email', 'Dashboard Notification', 'WhatsApp', 'POS'];

// ─── Checkbox component inline ────────────────────────────────────────────────

const CheckItem = ({
    label,
    checked,
    onChange,
}: {
    label: string;
    checked: boolean;
    onChange: (v: boolean) => void;
}) => (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="peer sr-only"
        />
        <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white transition-all peer-checked:border-[#79B800] peer-checked:bg-[#79B800]">
            <svg
                className="hidden h-3 w-3 text-white peer-checked:block"
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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M2 6l3 3 5-5" />
            </svg>
        </div>
        {label}
    </label>
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function EditCampaignModal({
    isOpen,
    onClose,
    onConfirm,
    campaign,
}: EditCampaignModalProps) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [channels, setChannels] = useState<string[]>([
        'Email',
        'Dashboard Notification',
        'WhatsApp',
        'POS',
    ]);
    const [region, setRegion] = useState('all_regions');
    const [segment, setSegment] = useState('pro_plan');
    const [role, setRole] = useState('all_users');
    const [language, setLanguage] = useState('english');
    const [deliveryTiming, setDeliveryTiming] = useState<
        'immediately' | 'scheduled'
    >('scheduled');
    const [scheduledDateTime, setScheduledDateTime] = useState(
        '05 Sept 2025 - 10:00 AM',
    );

    useEffect(() => {
        if (campaign) {
            setTitle(campaign.campaignTitle);
            setBody(
                campaign.body ??
                    'Dear Partners, we are scheduling a brief maintenance window on Saturday at 3:00 AM. Please ensure all active orders are closed before this time.',
            );
            setChannels(
                campaign.channels ?? [
                    'Email',
                    'Dashboard Notification',
                    'WhatsApp',
                    'POS',
                ],
            );
            setScheduledDateTime(
                campaign.scheduledFor ?? '05 Sept 2025 - 10:00 AM',
            );
        }
    }, [campaign]);

    const toggleChannel = (ch: string) => {
        setChannels((prev) =>
            prev.includes(ch) ? prev.filter((c) => c !== ch) : [...prev, ch],
        );
    };

    const handleSubmit = () => {
        onConfirm({
            title,
            body,
            channels,
            region,
            segment,
            role,
            language,
            deliveryTiming,
            scheduledDateTime,
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ──────────────────────────────────────────── */}
                {/* <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Pencil className="h-4 w-4 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Edit Campaign
                    </h2>
                </div> */}
                <div className="mb-5">
                    <div className="relative mb-6 flex items-start gap-4">
                        <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                            <img
                                src={patternBg}
                                alt=""
                                className="max-w-none"
                                style={{
                                    transform: 'scale(1.1)',
                                    opacity: 0.7,
                                }}
                            />
                        </div>
                        <div>
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <PencilIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Edit Campaign
                    </h2>
                </div>

                <div className="space-y-5">
                    {/* ── Message Title & Body ─────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Message Title & Body
                        </h3>
                        <div className="mb-3">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Title
                            </Label>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter message subject or headline..."
                            />
                        </div>
                        {/* Toolbar */}
                        <div className="mb-2 flex items-center gap-1 rounded-t-lg px-2">
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <Bold className="h-3.5 w-3.5" />
                            </button>
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <Italic className="h-3.5 w-3.5" />
                            </button>
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <Underline className="h-3.5 w-3.5" />
                            </button>
                            <div className="mx-1 h-4 w-px bg-gray-200" />
                            <button className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 text-xs text-white">
                                A
                            </button>
                            <div className="mx-1 h-4 w-px bg-gray-200" />
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <AlignLeft className="h-3.5 w-3.5" />
                            </button>
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <AlignCenter className="h-3.5 w-3.5" />
                            </button>
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <AlignRight className="h-3.5 w-3.5" />
                            </button>
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <List className="h-3.5 w-3.5" />
                            </button>
                        </div>
                        <textarea
                            rows={4}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder='e.g., "Dear Partners, we are scheduling a brief maintenance window..."'
                            className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                        />
                    </div>

                    {/* ── Channel ──────────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Channel
                        </h3>
                        <div className="flex flex-wrap gap-6">
                            {CHANNELS.map((ch) => (
                                <label
                                    key={ch}
                                    className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                                >
                                    <input
                                        type="checkbox"
                                        checked={channels.includes(ch)}
                                        onChange={() => toggleChannel(ch)}
                                        className="peer sr-only"
                                    />
                                    <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white transition-all peer-checked:border-[#79B800] peer-checked:bg-[#79B800]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-white"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M2 6l3 3 5-5" />
                                        </svg>
                                    </div>
                                    {ch}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* ── Audience Targeting ───────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Audience Targeting
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Region
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={REGION_OPTIONS}
                                    value={region}
                                    onChange={setRegion}
                                    placeholder="All Regions"
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Segment (Plan Type)
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={SEGMENT_OPTIONS}
                                    value={segment}
                                    onChange={setSegment}
                                    placeholder="All Active Merchants"
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Role
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={ROLE_OPTIONS}
                                    value={role}
                                    onChange={setRole}
                                    placeholder="All Users"
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Preferred Language
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={LANGUAGE_OPTIONS}
                                    value={language}
                                    onChange={setLanguage}
                                    placeholder="English"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Delivery Timing ──────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Delivery Timing
                        </h3>
                        <div className="flex items-center gap-8">
                            <RadioGroup
                                name="deliveryTimingEdit"
                                options={[
                                    {
                                        value: 'immediately',
                                        label: 'Send Immediately',
                                    },
                                    {
                                        value: 'scheduled',
                                        label: 'Schedule for Later',
                                    },
                                ]}
                                value={deliveryTiming}
                                onChange={(v) =>
                                    setDeliveryTiming(
                                        v as 'immediately' | 'scheduled',
                                    )
                                }
                            />
                            {deliveryTiming === 'scheduled' && (
                                <div className="flex-1 pl-10">
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Date/Time
                                    </Label>
                                    <div className="relative">
                                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                            <Calendar className="h-4 w-4 text-gray-400" />
                                        </span>
                                        <input
                                            type="text"
                                            value={scheduledDateTime}
                                            onChange={(e) =>
                                                setScheduledDateTime(
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-9 text-sm text-gray-900 placeholder-gray-400 shadow-xs outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Update Schedule
                </Button>
            </div>
        </Modal>
    );
}
