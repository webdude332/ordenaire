import { useState } from 'react';
import EditIcon from '../images/icons/boldPencilModal.svg?react';
import patternBg from '../images/icons/patternBg.svg';
import Modal from './Modal';
import Button from './ui/Button';
import CustomDropdown from './ui/CustomDropdown';
import { Input, Label } from './ui/FormElements';
import IconButton from './ui/IconButton';

interface EditNewFeatureModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

export default function EditNewFeatureModal({
    isOpen,
    onClose,
    onSave,
}: EditNewFeatureModalProps) {
    // --- State (Pre-filled for Edit) ---
    const [feature, setFeature] = useState('biz0051');
    const [category, setCategory] = useState('operations');
    const [description, setDescription] = useState(
        'Live Chat support for assistance',
    );
    const [isEnabled, setIsEnabled] = useState(true);
    const [regions, setRegions] = useState(['UAE', 'Saudi Arabia', 'Qatar']);
    const [plans, setPlans] = useState({
        standard: false,
        pro: true,
        enterprise: true,
    });
    const [notifications, setNotifications] = useState({
        email: false,
        inApp: true,
    });

    // --- Mock Data ---
    const featureOptions = [{ label: 'BIZ-0051', value: 'biz0051' }];
    const categoryOptions = [{ label: 'Operations', value: 'operations' }];

    // --- Handlers ---
    const removeRegion = (regionToRemove: string) => {
        setRegions(regions.filter((r) => r !== regionToRemove));
    };

    const togglePlan = (plan: keyof typeof plans) => {
        setPlans((prev) => ({ ...prev, [plan]: !prev[plan] }));
    };

    const toggleNotification = (type: keyof typeof notifications) => {
        setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="4xl">
            <div className="relative overflow-hidden rounded-xl bg-white">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
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

                {/* Content Wrapper */}
                <div className="relative z-0 p-8 pb-4">
                    {/* Header */}
                    <div className="mb-8 flex flex-col items-start gap-4">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                            {/* Pattern */}
                            <div className="pointer-events-none absolute inset-0 top-22 left-22 flex items-center justify-center">
                                <img
                                    src={patternBg}
                                    alt=""
                                    className="max-w-none"
                                    style={{
                                        transform: 'scale(1.1)',
                                        opacity: 1,
                                    }}
                                />
                            </div>

                            {/* Icon */}
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-100 bg-white p-3">
                                    <EditIcon className="h-6 w-6 text-gray-700" />
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-md font-medium text-gray-900">
                                Edit Feature
                            </h3>
                        </div>
                    </div>

                    {/* --- Form Fields --- */}
                    <div className="relative z-10 space-y-6">
                        {/* 1. Basic Info */}
                        <div className="rounded-lg border border-[#E8E6EA] bg-white p-6 shadow-xs">
                            <h4 className="mb-6 text-base font-semibold text-gray-900">
                                Basic Info
                            </h4>
                            <div className="mb-5 grid grid-cols-2 gap-5">
                                <div>
                                    <Label className="mb-2 block text-sm font-medium text-gray-700">
                                        Select Feature
                                        <span className="text-[#8AC926]">
                                            *
                                        </span>
                                    </Label>
                                    <CustomDropdown
                                        options={featureOptions}
                                        label=""
                                        value={feature}
                                        onChange={setFeature}
                                    />
                                </div>
                                <div>
                                    <Label className="mb-2 block text-sm font-medium text-gray-700">
                                        Display Name
                                        <span className="text-[#8AC926]">
                                            *
                                        </span>
                                    </Label>
                                    <Input defaultValue="Live Chat Support" />
                                </div>
                            </div>
                            <div className="mb-5">
                                <Label className="mb-2 block text-sm font-medium text-gray-700">
                                    Category
                                    <span className="text-[#8AC926]">*</span>
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={categoryOptions}
                                    value={category}
                                    onChange={setCategory}
                                />
                            </div>
                            <div>
                                <Label className="mb-2 block text-sm font-medium text-gray-700">
                                    Description
                                </Label>
                                <textarea
                                    className="w-full rounded-lg border border-gray-300 p-3 text-sm placeholder-gray-400 focus:border-[#8AC926] focus:ring-1 focus:ring-[#8AC926] focus:outline-none"
                                    rows={4}
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* 2. Availability */}
                        <div className="rounded-lg border border-[#E8E6EA] bg-white p-6 shadow-xs">
                            <h4 className="mb-6 text-base font-semibold text-gray-900">
                                Availability & Scope
                            </h4>

                            <div className="mb-6">
                                <Label className="mb-2 block text-sm font-medium text-gray-700">
                                    Applicable Regions
                                </Label>
                                <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                        <span className="text-sm">
                                            Type Regions to Add...
                                        </span>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-3">
                                    {regions.map((region) => (
                                        <span
                                            key={region}
                                            className="inline-flex items-center gap-1.5 rounded border border-[#D9D6FE] bg-[#F0F4FF] px-3 py-1.5 text-xs font-medium text-[#444CE7]"
                                        >
                                            {region}
                                            <button
                                                onClick={() =>
                                                    removeRegion(region)
                                                }
                                                className="cursor-pointer text-[#444CE7] hover:text-indigo-800"
                                            >
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <Label className="mb-3 block text-sm font-medium text-gray-700">
                                    Applicable Subscription plan
                                </Label>
                                <div className="flex items-center gap-8">
                                    {/* Standard */}
                                    <div
                                        className="flex cursor-pointer items-center gap-2"
                                        onClick={() => togglePlan('standard')}
                                    >
                                        <div
                                            className={`flex h-5 w-5 items-center justify-center rounded border ${plans.standard ? 'border-[#8AC926] bg-[#8AC926]' : 'border-gray-300 bg-white'}`}
                                        >
                                            {plans.standard && (
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-sm text-gray-700">
                                            Standard
                                        </span>
                                    </div>
                                    {/* Pro */}
                                    <div
                                        className="flex cursor-pointer items-center gap-2"
                                        onClick={() => togglePlan('pro')}
                                    >
                                        <div
                                            className={`flex h-5 w-5 items-center justify-center rounded border ${plans.pro ? 'border-[#8AC926] bg-[#8AC926]' : 'border-gray-300 bg-white'}`}
                                        >
                                            {plans.pro && (
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-sm text-gray-700">
                                            Pro
                                        </span>
                                    </div>
                                    {/* Enterprise */}
                                    <div
                                        className="flex cursor-pointer items-center gap-2"
                                        onClick={() => togglePlan('enterprise')}
                                    >
                                        <div
                                            className={`flex h-5 w-5 items-center justify-center rounded border ${plans.enterprise ? 'border-[#8AC926] bg-[#8AC926]' : 'border-gray-300 bg-white'}`}
                                        >
                                            {plans.enterprise && (
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-sm text-gray-700">
                                            Enterprise
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Label className="mb-2 block text-sm font-medium text-gray-700">
                                    Enable/Disable Immediately
                                </Label>
                                <div className="mt-3 flex items-center gap-3">
                                    <button
                                        onClick={() => setIsEnabled(!isEnabled)}
                                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isEnabled ? 'bg-[#8AC926]' : 'bg-gray-200'}`}
                                    >
                                        <span
                                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isEnabled ? 'translate-x-5' : 'translate-x-0'}`}
                                        />
                                    </button>
                                    <span className="text-sm text-gray-700">
                                        {isEnabled ? 'Enable' : 'Disable'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 3. Notification */}
                        <div className="rounded-lg border border-[#E8E6EA] bg-white p-6 shadow-xs">
                            <h4 className="mb-6 text-base font-semibold text-gray-900">
                                Notification
                            </h4>
                            <div className="mb-6">
                                <Label className="mb-3 block text-sm font-medium text-gray-700">
                                    Notification Channels
                                </Label>
                                <div className="flex items-center gap-8">
                                    <div
                                        className="flex cursor-pointer items-center gap-2"
                                        onClick={() =>
                                            toggleNotification('email')
                                        }
                                    >
                                        <div
                                            className={`flex h-5 w-5 items-center justify-center rounded border ${notifications.email ? 'border-[#8AC926] bg-[#8AC926]' : 'border-gray-300 bg-white'}`}
                                        >
                                            {notifications.email && (
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-sm text-gray-700">
                                            Email
                                        </span>
                                    </div>
                                    <div
                                        className="flex cursor-pointer items-center gap-2"
                                        onClick={() =>
                                            toggleNotification('inApp')
                                        }
                                    >
                                        <div
                                            className={`flex h-5 w-5 items-center justify-center rounded border ${notifications.inApp ? 'border-[#8AC926] bg-[#8AC926]' : 'border-gray-300 bg-white'}`}
                                        >
                                            {notifications.inApp && (
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-sm text-gray-700">
                                            In-App
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Rich Text Editor Mock */}
                            <div>
                                <Label className="mb-2 block text-sm font-medium text-gray-700">
                                    Message to Participants
                                </Label>
                                <div className="overflow-hidden rounded-lg border border-gray-300">
                                    {/* Toolbar */}
                                    <div className="flex items-center gap-3 border-b border-gray-200 bg-white px-3 py-2">
                                        <div className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                            Inter{' '}
                                            <svg
                                                className="h-3 w-3 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                            16px{' '}
                                            <svg
                                                className="h-3 w-3 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-4 w-px bg-gray-200"></div>
                                        <button className="font-serif font-bold text-gray-400 hover:text-gray-600">
                                            B
                                        </button>
                                        <button className="font-serif text-gray-400 italic hover:text-gray-600">
                                            I
                                        </button>
                                        <button className="font-serif text-gray-400 underline hover:text-gray-600">
                                            U
                                        </button>
                                        <div className="h-4 w-px bg-gray-200"></div>
                                        <div className="h-3 w-3 rounded-full bg-black"></div>
                                        <div className="h-4 w-px bg-gray-200"></div>
                                        <div className="flex gap-2">
                                            <svg
                                                className="h-4 w-4 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                            <svg
                                                className="h-4 w-4 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 6h16M4 12h10M4 18h16"
                                                />
                                            </svg>
                                            <svg
                                                className="h-4 w-4 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 6h16M4 12h16M4 18h7"
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-4 w-px bg-gray-200"></div>
                                        <div className="flex gap-2">
                                            <svg
                                                className="h-4 w-4 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                />
                                            </svg>
                                            <svg
                                                className="h-4 w-4 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="min-h-[150px] bg-white p-4">
                                        <p className="text-sm leading-relaxed text-gray-700">
                                            Dear Clients,
                                            <br />
                                            Our system will undergo scheduled
                                            maintenance on Sept 15, 2025, from
                                            2:00 AM to 4:00 AM KSA time.
                                            <br />
                                            During this period, services may be
                                            temporarily unavailable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-2 flex gap-4 border-t border-gray-100 bg-white px-8 py-5">
                    <div className="flex-1">
                        <IconButton
                            onClick={onClose}
                            className="w-full justify-center"
                        >
                            Cancel
                        </IconButton>
                    </div>
                    {/* Delete Feature Button (Specific to Edit Modal) */}
                    <div className="flex-1">
                        {/* <Button
                            onClick={() => console.log('Delete')}
                            className="w-full justify-center border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        >
                            Delete Feature
                        </Button> */}
                        <IconButton className="w-full">
                            Delete Feature
                        </IconButton>
                    </div>
                    <div className="flex-1">
                        <Button
                            onClick={onSave}
                            className="w-full justify-center border-none bg-[#8AC926] hover:bg-[#78b31f]"
                        >
                            Update Feature
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
