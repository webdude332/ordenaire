import Modal from '@/components/Modal';
import CustomDropdown from '@/components/ui/CustomDropdown';
import { Input, Label } from '@/components/ui/FormElements';
import { Eye, EyeOff, Plus, RefreshCw, X } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Options ──────────────────────────────────────────────────────────────────

const CATEGORY_OPTIONS = [
    { label: 'Delivery', value: 'delivery' },
    { label: 'Finance', value: 'finance' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Analytics', value: 'analytics' },
    { label: 'Inventory', value: 'inventory' },
];

const PRICING_MODEL_OPTIONS = [
    { label: 'Free', value: 'free' },
    { label: 'Recurring (Monthly)', value: 'recurring_monthly' },
    { label: 'Recurring (Yearly)', value: 'recurring_yearly' },
    { label: 'One-Time', value: 'one_time' },
];

const FREE_TRIAL_OPTIONS = [
    { label: 'No Trial', value: 'no_trial' },
    { label: '7 Days', value: '7_days' },
    { label: '14 Days', value: '14_days' },
    { label: '30 Days', value: '30_days' },
];

const REGION_OPTIONS = [
    { label: 'Kuwait', value: 'kuwait' },
    { label: 'UAE', value: 'uae' },
    { label: 'Qatar', value: 'qatar' },
    { label: 'KSA', value: 'ksa' },
];

const SCOPE_OPTIONS = [
    { label: 'Manage Orders', value: 'manage_orders' },
    { label: 'Update customer details', value: 'update_customer' },
    { label: 'View Analytics', value: 'view_analytics' },
    { label: 'Manage Inventory', value: 'manage_inventory' },
    { label: 'Process Payments', value: 'process_payments' },
];

const OVERRIDE_RATES: Record<
    string,
    { label: string; flag: string; rate: string; currency: string }
> = {
    uae: {
        label: 'UAE Dirham (AED)',
        flag: '🇦🇪',
        rate: '122.45',
        currency: 'AED',
    },
    qatar: {
        label: 'Qatari Riyal (QAR)',
        flag: '🇶🇦',
        rate: '125.40',
        currency: 'QAR',
    },
    ksa: {
        label: 'Saudi Riyal (SAR)',
        flag: '🇸🇦',
        rate: '130.00',
        currency: 'SAR',
    },
    kuwait: {
        label: 'Kuwaiti Dinar (KWD)',
        flag: '🇰🇼',
        rate: '1.00',
        currency: 'KWD',
    },
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface AddAppModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: AppFormData) => void;
}

interface AppFormData {
    appName: string;
    category: string;
    description: string;
    developerName: string;
    officialWebsite: string;
    supportEmail: string;
    keyFeatures: string[];
    pricingModel: string;
    basePrice: string;
    supportedRegions: string[];
    freeTrialDuration: string;
    customOverridePricing: boolean;
    overridePrices: Record<string, string>;
    appClientId: string;
    appClientSecret: string;
    webhookUrl: string;
    scopes: string[];
}

// ─── Tag Input ────────────────────────────────────────────────────────────────

const TagInput = ({
    tags,
    onAdd,
    onRemove,
    placeholder,
    max,
}: {
    tags: string[];
    onAdd: (v: string) => void;
    onRemove: (v: string) => void;
    placeholder: string;
    max: number;
}) => {
    const [val, setVal] = useState('');
    const addTag = () => {
        const t = val.trim();
        if (t && !tags.includes(t) && tags.length < max) {
            onAdd(t);
            setVal('');
        }
    };
    return (
        <div>
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5">
                <input
                    type="text"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                    onKeyDown={(e) =>
                        e.key === 'Enter' && (e.preventDefault(), addTag())
                    }
                    placeholder={placeholder}
                    className="flex-1 text-sm text-gray-900 placeholder-gray-400 outline-none"
                />
                <button
                    onClick={addTag}
                    disabled={tags.length >= max}
                    className="text-gray-400 hover:text-gray-600 disabled:opacity-40"
                >
                    <Plus className="h-4 w-4" />
                </button>
            </div>
            <p className="mt-1 text-xs text-gray-400">
                You can add a maximum of {max} key features.
            </p>
            {tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                            {tag}
                            <button
                                onClick={() => onRemove(tag)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

// ─── Region Multi-select ──────────────────────────────────────────────────────

const RegionMultiSelect = ({
    selected,
    onAdd,
    onRemove,
}: {
    selected: string[];
    onAdd: (v: string) => void;
    onRemove: (v: string) => void;
}) => {
    const available = REGION_OPTIONS.filter((r) => !selected.includes(r.value));
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="relative flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5">
                <span className="flex-1 text-sm text-gray-400">
                    Available In
                </span>
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <Plus className="h-4 w-4" />
                </button>
                {open && available.length > 0 && (
                    <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                        {available.map((r) => (
                            <button
                                key={r.value}
                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                onClick={() => {
                                    onAdd(r.value);
                                    setOpen(false);
                                }}
                            >
                                {r.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {selected.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {selected.map((v) => {
                        const opt = REGION_OPTIONS.find((r) => r.value === v);
                        return (
                            <span
                                key={v}
                                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                            >
                                {opt?.label}
                                <button
                                    onClick={() => onRemove(v)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// ─── Scope Multi-select ───────────────────────────────────────────────────────

const ScopeSelect = ({
    selected,
    onAdd,
    onRemove,
}: {
    selected: string[];
    onAdd: (v: string) => void;
    onRemove: (v: string) => void;
}) => {
    const available = SCOPE_OPTIONS.filter((s) => !selected.includes(s.value));
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="relative flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5">
                <span className="flex-1 text-sm text-gray-400">
                    Select Permissions...
                </span>
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <Plus className="h-4 w-4" />
                </button>
                {open && available.length > 0 && (
                    <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                        {available.map((s) => (
                            <button
                                key={s.value}
                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                onClick={() => {
                                    onAdd(s.value);
                                    setOpen(false);
                                }}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {selected.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {selected.map((v) => {
                        const opt = SCOPE_OPTIONS.find((s) => s.value === v);
                        return (
                            <span
                                key={v}
                                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                            >
                                {opt?.label}
                                <button
                                    onClick={() => onRemove(v)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function AddAppModal({
    isOpen,
    onClose,
    onConfirm,
}: AddAppModalProps) {
    const [appName, setAppName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [developerName, setDeveloperName] = useState('');
    const [officialWebsite, setOfficialWebsite] = useState('');
    const [supportEmail, setSupportEmail] = useState('');
    const [keyFeatures, setKeyFeatures] = useState<string[]>([
        'Syncs orders in real-time',
        'Automated refund handling',
    ]);
    const [pricingModel, setPricingModel] = useState('free');
    const [basePrice, setBasePrice] = useState('0.000');
    const [supportedRegions, setSupportedRegions] = useState<string[]>([
        'kuwait',
        'uae',
        'qatar',
    ]);
    const [freeTrialDuration, setFreeTrialDuration] = useState('no_trial');
    const [customOverridePricing, setCustomOverridePricing] = useState(false);
    const [overridePrices, setOverridePrices] = useState<
        Record<string, string>
    >({});
    const [appClientId, setAppClientId] = useState('');
    const [appClientSecret, setAppClientSecret] = useState('');
    const [showSecret, setShowSecret] = useState(false);
    const [webhookUrl, setWebhookUrl] = useState('');
    const [scopes, setScopes] = useState<string[]>([
        'manage_orders',
        'update_customer',
    ]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);

    const MAX_DESCRIPTION = 275;

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setLogoPreview(URL.createObjectURL(file));
    };

    const generateClientId = () => {
        setAppClientId(
            `app_id_${Math.floor(10000 + Math.random() * 90000)}_${appName.toLowerCase().replace(/\s+/g, '_') || 'app'}`,
        );
    };

    const handleSubmit = () => {
        onConfirm({
            appName,
            category,
            description,
            developerName,
            officialWebsite,
            supportEmail,
            keyFeatures,
            pricingModel,
            basePrice,
            supportedRegions,
            freeTrialDuration,
            customOverridePricing,
            overridePrices,
            appClientId,
            appClientSecret,
            webhookUrl,
            scopes,
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ──────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Plus className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add App to Marketplace
                    </h2>
                </div>

                <div className="space-y-5">
                    {/* ── App Details ─────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            App Details
                        </h3>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    App name
                                </Label>
                                <Input
                                    placeholder="e.g., SuperLogistics Connect"
                                    value={appName}
                                    onChange={(e) => setAppName(e.target.value)}
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Category
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={CATEGORY_OPTIONS}
                                    value={category}
                                    onChange={setCategory}
                                    placeholder="Select Category"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <Label className="mb-0.5 text-sm font-medium text-gray-700">
                                App logo
                            </Label>
                            <p className="mb-2 text-xs text-gray-400">
                                Recommended size: 512×512px (PNG/JPG).
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-purple-600">
                                    {logoPreview ? (
                                        <img
                                            src={logoPreview}
                                            alt="logo"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-lg font-bold text-white">
                                            ◑
                                        </span>
                                    )}
                                </div>
                                <button
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Replace logo
                                </button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleLogoChange}
                                />
                            </div>
                        </div>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Description
                            </Label>
                            <textarea
                                rows={4}
                                value={description}
                                maxLength={MAX_DESCRIPTION}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe the core functionality and benefits of this integration..."
                                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                            />
                            <p className="mt-1 text-xs text-gray-400">
                                {MAX_DESCRIPTION - description.length}{' '}
                                characters left
                            </p>
                        </div>
                    </div>

                    {/* ── Provider Information ─────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Provider Information
                        </h3>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Developer / Company Name
                                </Label>
                                <Input
                                    placeholder="e.g., Global Tech Solutions"
                                    value={developerName}
                                    onChange={(e) =>
                                        setDeveloperName(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Official Website
                                </Label>
                                <Input
                                    placeholder="https://www.example.com"
                                    value={officialWebsite}
                                    onChange={(e) =>
                                        setOfficialWebsite(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="w-1/2 pr-2">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Support Email or URL
                            </Label>
                            <Input
                                placeholder="support@example.com"
                                value={supportEmail}
                                onChange={(e) =>
                                    setSupportEmail(e.target.value)
                                }
                            />
                        </div>
                    </div>

                    {/* ── Key Features ────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Key Features
                        </h3>
                        <TagInput
                            tags={keyFeatures}
                            onAdd={(v) =>
                                setKeyFeatures((prev) => [...prev, v])
                            }
                            onRemove={(v) =>
                                setKeyFeatures((prev) =>
                                    prev.filter((t) => t !== v),
                                )
                            }
                            placeholder="Enter a feature highlight..."
                            max={4}
                        />
                    </div>

                    {/* ── Pricing & Region ────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Pricing & Region
                        </h3>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Pricing Model
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={PRICING_MODEL_OPTIONS}
                                    value={pricingModel}
                                    onChange={setPricingModel}
                                    placeholder="Select pricing model"
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Base Price (KWD)
                                </Label>
                                <Input
                                    placeholder="0.000"
                                    value={basePrice}
                                    onChange={(e) =>
                                        setBasePrice(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Supported Regions
                                </Label>
                                <RegionMultiSelect
                                    selected={supportedRegions}
                                    onAdd={(v) =>
                                        setSupportedRegions((prev) => [
                                            ...prev,
                                            v,
                                        ])
                                    }
                                    onRemove={(v) =>
                                        setSupportedRegions((prev) =>
                                            prev.filter((r) => r !== v),
                                        )
                                    }
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Free Trial Duration
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={FREE_TRIAL_OPTIONS}
                                    value={freeTrialDuration}
                                    onChange={setFreeTrialDuration}
                                    placeholder="No Trial"
                                />
                            </div>
                        </div>
                        {/* Override pricing checkbox */}
                        <div className="rounded-lg border border-gray-200 p-3">
                            <label className="flex cursor-pointer items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={customOverridePricing}
                                    onChange={(e) =>
                                        setCustomOverridePricing(
                                            e.target.checked,
                                        )
                                    }
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
                                <span className="text-sm text-gray-700">
                                    Set custom fixed prices for specific regions
                                </span>
                            </label>
                        </div>
                        {customOverridePricing && (
                            <div className="mt-4 rounded-xl border border-gray-200 p-4">
                                <h4 className="mb-3 text-sm font-semibold text-gray-900">
                                    The Override Pricing
                                </h4>
                                <div className="overflow-hidden rounded-lg border border-gray-200">
                                    <table className="w-full text-sm">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-2.5 text-left text-xs font-medium text-gray-500">
                                                    Region
                                                </th>
                                                <th className="px-4 py-2.5 text-left text-xs font-medium text-gray-500">
                                                    Standard auto-rate
                                                </th>
                                                <th className="px-4 py-2.5 text-left text-xs font-medium text-gray-500">
                                                    Custom Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {supportedRegions
                                                .filter((r) => r !== 'kuwait')
                                                .map((r) => {
                                                    const info =
                                                        OVERRIDE_RATES[r];
                                                    if (!info) return null;
                                                    return (
                                                        <tr key={r}>
                                                            <td className="px-4 py-3 text-gray-700">
                                                                <span className="mr-1.5">
                                                                    {info.flag}
                                                                </span>
                                                                {info.label}
                                                            </td>
                                                            <td className="px-4 py-3 text-gray-500">
                                                                {info.rate}{' '}
                                                                {info.currency}
                                                            </td>
                                                            <td className="px-4 py-3">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Auto"
                                                                    value={
                                                                        overridePrices[
                                                                            r
                                                                        ] ?? ''
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        setOverridePrices(
                                                                            (
                                                                                prev,
                                                                            ) => ({
                                                                                ...prev,
                                                                                [r]: e
                                                                                    .target
                                                                                    .value,
                                                                            }),
                                                                        )
                                                                    }
                                                                    className="w-24 rounded-lg border border-gray-300 px-2.5 py-1.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                                                                />
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ── Technical Configuration ──────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Technical Configuration
                        </h3>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    App Client ID
                                </Label>
                                <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5">
                                    <input
                                        type="text"
                                        value={appClientId}
                                        onChange={(e) =>
                                            setAppClientId(e.target.value)
                                        }
                                        placeholder="System generated"
                                        className="flex-1 text-sm text-gray-900 placeholder-gray-400 outline-none"
                                    />
                                    <button
                                        onClick={generateClientId}
                                        className="flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        <RefreshCw className="h-3 w-3" />
                                        Auto-Generate
                                    </button>
                                </div>
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    App Client Secret
                                </Label>
                                <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5">
                                    <input
                                        type={showSecret ? 'text' : 'password'}
                                        value={appClientSecret}
                                        onChange={(e) =>
                                            setAppClientSecret(e.target.value)
                                        }
                                        placeholder="••••••••••••••••••"
                                        className="flex-1 text-sm text-gray-900 placeholder-gray-400 outline-none"
                                    />
                                    <button
                                        onClick={() => setShowSecret((s) => !s)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        {showSecret ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Webhook Endpoint URL
                                </Label>
                                <Input
                                    placeholder="https://api.partner.com/webhooks/orders"
                                    value={webhookUrl}
                                    onChange={(e) =>
                                        setWebhookUrl(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Required Data Access (Scopes)
                                </Label>
                                <ScopeSelect
                                    selected={scopes}
                                    onAdd={(v) =>
                                        setScopes((prev) => [...prev, v])
                                    }
                                    onRemove={(v) =>
                                        setScopes((prev) =>
                                            prev.filter((s) => s !== v),
                                        )
                                    }
                                />
                            </div>
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
                    Publish App
                </Button>
            </div>
        </Modal>
    );
}
