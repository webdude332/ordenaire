import Button from '@/components/Button';
import SidePannel from '@/components/SidePannel';
import { Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';

// --- Modal Imports ---
import EditReportModal from '../components/EditReportModal';
import ErrorDetailsModal from '../components/ErrorDetailsModal';
import RunReportModal from '../components/RunReportModal';
import SimpleErrorModal from '../components/SimpleErrorModal';
import SuccessModal from '../components/SuccessModal';

// --- ASSETS ---
// SVGs (Use these when you need to change colors)
import ArrowBack from '../images/icons/backArrow.svg?react';
import CalenderIconSVG from '../images/icons/calendar.svg?react'; // The new SVG for the Input
import DownArrow from '../images/icons/chevron-down.svg?react';
import ArrowRight from '../images/icons/chevron-right.svg?react';
import AnalyticsIcon from '../images/icons/dashBaordSvg.svg?react'; 
import SearchIcon from '../images/icons/searchIcon.svg?react';

// PNGs (Use these for buttons/badges where color doesn't change)
import calenderPng from '../images/icons/calender-icon.png';
import checkIcon from '../images/icons/checkIcon.svg';
import DelBtn from '../images/icons/delIcon.svg?react';
import DownloadBtn from '../images/icons/downloadIcon.svg?react';
import PencilBtn from '../images/icons/pencilIcon.svg?react';
import RunBtn from '../images/icons/runNow.svg?react';
import SelectorIcon from '../images/icons/selectorIcon.svg?react'

// --- Mock Data ---
const upcomingReports = [
    {
        title: 'Monthly Summary',
        tenant: 'Acme Corp',
        frequency: 'Monthly',
        nextRun: '03 Sept 2025 7:30 AM',
        status: 'Scheduled',
    },
    {
        title: 'Weekly Update',
        tenant: 'Acme Corp',
        frequency: 'Weekly',
        nextRun: '04 Sept 2025 01:15 PM',
        status: 'Completed',
    },
    {
        title: 'Weekly Review',
        tenant: 'Stark Ind.',
        frequency: 'Weekly',
        nextRun: '05 Sept 2025 09:45 AM',
        status: 'In Progress',
    },
    {
        title: 'Daily Report',
        tenant: 'Pizza Hut',
        frequency: 'Daily',
        nextRun: '05 Sept 2025 09:45 AM',
        status: 'Pending',
    },
];

const historyReports = [
    {
        title: 'Monthly Summary',
        tenant: 'Acme Corp',
        sentOn: '03 Sept 2025 7:30 AM',
        recipients: 'abc@gmail.com',
        status: 'Sent',
    },
    {
        title: 'Weekly Update',
        tenant: 'Acme Corp',
        sentOn: '04 Sept 2025 01:15 PM',
        recipients: 'xyz@example.com',
        status: 'Sent',
    },
    {
        title: 'Quarterly Review',
        tenant: 'Stark Ind.',
        sentOn: '05 Sept 2025 09:45 AM',
        recipients: 'info@company.com',
        status: 'Sent',
    },
    {
        title: 'Annual Report',
        tenant: 'Pizza Hut',
        sentOn: '05 Sept 2025 09:45 AM',
        recipients: 'contact@business...',
        status: 'Failed',
    },
];

// =========================================================================
// === UNIVERSAL ICON HELPER (The Global Fix) ===
// =========================================================================
const RenderIcon = ({ icon, className = '', ...props }: { icon: any; className?: string; [key: string]: any }) => {
    if (!icon) return null;
    
    // Check if it is a React Component (SVG)
    if (typeof icon === 'function' || (typeof icon === 'object' && icon !== null && !icon.src)) {
        const IconComponent = icon;
        return <IconComponent className={className} {...props} />;
    }
    
    // Otherwise treat it as a string (PNG/JPG URL)
    return <img src={icon} alt="" className={className} {...props} />;
};

// --- Sub-Components ---
const StatusBadge = ({ status }: { status: string }) => {
    const dotColors: Record<string, string> = {
        Scheduled: 'bg-pink-500',
        Completed: 'bg-green-500',
        'In Progress': 'bg-blue-500',
        Pending: 'bg-orange-400',
        Sent: 'bg-green-500',
        Failed: 'bg-orange-500',
    };
    const dotColor = dotColors[status] || 'bg-gray-400';

    return (
        <span className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1 text-sm font-medium text-gray-600 shadow-sm">
            <span className={`h-2 w-2 rounded-full ${dotColor}`} />
            {status}
        </span>
    );
};

const Label = ({ children }: { children: React.ReactNode }) => (
    <label className="mb-1.5 block text-sm font-bold text-gray-900">
        {children}
    </label>
);

// === UPDATED INPUT (Accepts iconClassName) ===
const Input = ({
    placeholder,
    icon,
    iconClassName = "text-gray-400"
}: {
    placeholder: string;
    icon?: any;
    iconClassName?: string;
}) => (
    <div className="relative">
        {icon && (
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <RenderIcon icon={icon} className={`h-5 w-5 ${iconClassName}`} />
            </span>
        )}
        <input
            type="text"
            placeholder={placeholder}
            className={`w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] focus:outline-none ${icon ? 'pl-10' : 'pl-3'}`}
        />
    </div>
);

// === UPDATED SELECT (Uses RenderIcon) ===
const Select = ({
    placeholder,
    options,
    icon = DownArrow,
}: {
    placeholder: string;
    options?: string[];
    icon?: any;
}) => (
    <div className="relative">
        <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-3 text-sm text-gray-900 shadow-sm focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] focus:outline-none">
            <option>{placeholder}</option>
            {options?.map((opt) => (
                <option key={opt}>{opt}</option>
            ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <RenderIcon icon={icon} className="h-5 w-5 text-[#B5B0BA]" />
        </span>
    </div>
);

// === UPDATED CHECKBOX (Uses RenderIcon) ===
const Checkbox = ({
    label,
    defaultChecked,
    icon = checkIcon
}: {
    label: string;
    defaultChecked?: boolean;
    icon?: any;
}) => {
    return (
        <label className="group flex cursor-pointer items-center gap-2 text-sm text-gray-700">
            <input
                type="checkbox"
                defaultChecked={defaultChecked}
                className="peer sr-only"
            />
            <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white transition-all peer-checked:border-[#79B800] peer-checked:bg-[#79B800] [&_img]:hidden peer-checked:[&_img]:block [&_svg]:hidden peer-checked:[&_svg]:block">
                <RenderIcon icon={icon} className="w-3 h-3 text-white" />
            </div>
            {label}
        </label>
    );
};

// === MAIN PAGE COMPONENT ===
export default function ReportsPage() {
    const [isRunModalOpen, setIsRunModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isErrorDetailsModalOpen, setIsErrorDetailsModalOpen] =
        useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [selectedReport, setSelectedReport] = useState<string | null>(null);

    // --- HANDLERS ---
    const openRunModal = (title: string) => {
        setSelectedReport(title);
        setIsRunModalOpen(true);
    };
    const openEditModal = (title: string) => {
        setSelectedReport(title);
        setIsEditModalOpen(true);
    };
    const openDeleteModal = (title: string) => {
        setSelectedReport(title);
        setIsDeleteModalOpen(true);
    };
    const openErrorDetailsModal = () => {
        setIsErrorDetailsModalOpen(true);
    };

    const handleRunConfirm = () => {
        setIsRunModalOpen(false);
        setTimeout(() => setIsSuccessModalOpen(true), 500);
    };
    const handleEditSave = () => {
        setIsEditModalOpen(false);
        setTimeout(() => setIsSuccessModalOpen(true), 500);
    };
    const handleDelete = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-[#F9FAFB] font-montserrat">
            <Head title="Reports Page" />
            <SidePannel />

            <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
                <header className="sticky top-0 z-10 bg-white px-8 pt-6">
                    <nav className="mb-3 flex items-center text-xs font-medium text-gray-500">
                        <span>
                            <RenderIcon icon={AnalyticsIcon} className="h-4 w-4 text-gray-400" />
                        </span>
                        <span className="mx-2 text-gray-300">
                            <RenderIcon icon={ArrowRight} className="h-4 w-4 text-[#B5B0BA]" />
                        </span>
                        <span className="font-semibold text-[#82798B]">
                            Dashboard
                        </span>
                        <span className="mx-2 text-gray-300">
                             <RenderIcon icon={ArrowRight} className="h-4 w-4 text-[#B5B0BA]" />
                        </span>
                        <span className="rounded-sm bg-[#F9F7FA] px-3 py-1.5 font-semibold text-[#4F4955]">
                            Reports page
                        </span>
                    </nav>
                    <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">
                        Reports page
                    </h1>
                    <div className="flex space-x-8 border-b border-gray-200 text-sm font-medium text-gray-500">
                        <span className="border-b-2 border-[#79B800] pb-3">
                            <p className="font-semibold text-[#578500]">
                                Dashboard
                            </p>
                        </span>
                    </div>
                </header>

                <main className="custom-scrollbar flex-1 overflow-y-auto bg-white p-8">
                    <Link
                        href="/dashboard"
                        className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#CFCBD2] bg-white px-4 py-2 text-sm font-medium text-[#4F4955] shadow-sm transition-colors hover:bg-gray-50"
                    >
                        <RenderIcon icon={ArrowBack} className="h-5 w-5 text-[#B5B0BA]" />
                        <span className="font-[600] text-[#4F4955]">
                            Back to Dashboard
                        </span>
                    </Link>

                    {/* --- CARD 1: Report Scheduling & Export --- */}
                    <div className="mb-8 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-200 bg-[#F9F7FA] px-6 py-4">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Report Scheduling & Export
                            </h2>
                            <button className="text-gray-400 hover:text-gray-600">
                                <RenderIcon icon={DownArrow} className="h-5 w-5 text-[#B5B0BA]" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-6 px-6 pt-6 md:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <Label>
                                        Assign to Tenant / Organization
                                    </Label>
                                    <Input
                                        placeholder="Search for tenant..."
                                        icon={SearchIcon}
                                    />
                                </div>
                                <div>
                                    <Label>Report Title</Label>
                                    <Input placeholder='e.g., "Monthly Performance Report"' />
                                </div>
                                <div>
                                    <Label>Select Data Range</Label>
                                    {/* FIXED: Using SVG Icon + iconClassName for color */}
                                    <Input
                                        placeholder="Jan 10, 2025 - Jul 10, 2025"
                                        icon={CalenderIconSVG} 
                                        iconClassName="text-[#B5B0BA]" 
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <Label>Recipients</Label>
                                    <Select placeholder="abc@gmail.com, Admins, billing" />
                                </div>
                                <div>
                                    <Label>Report Template</Label>
                                    <Select placeholder="templates—Sales, Usage, Financial" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 mb-8 space-y-6 border-t border-gray-100 px-6 pt-6">
                            <div>
                                <Label>Export format</Label>
                                <div className="mt-2 flex items-center gap-6">
                                    {['CSV', 'PDF', 'Excel'].map((format) => (
                                        <label
                                            key={format}
                                            className="group flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                                        >
                                            <input
                                                type="radio"
                                                name="format"
                                                defaultChecked={
                                                    format === 'Excel'
                                                }
                                                className="peer sr-only"
                                            />
                                            <div className="h-4 w-4 rounded-full border-2 border-gray-300 transition-all peer-checked:border-[5px] peer-checked:border-[#79B800]"></div>
                                            {format}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <Label>Frequency</Label>
                                <div className="mt-2 flex items-center gap-6">
                                    {['Once', 'Daily', 'Weekly', 'Monthly'].map(
                                        (freq) => (
                                            <label
                                                key={freq}
                                                className="group flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                                            >
                                                <input
                                                    type="radio"
                                                    name="freq"
                                                    defaultChecked={
                                                        freq === 'Weekly'
                                                    }
                                                    className="peer sr-only"
                                                />
                                                <div className="h-4 w-4 rounded-full border-2 border-gray-300 transition-all peer-checked:border-[5px] peer-checked:border-[#79B800]"></div>
                                                {freq}
                                            </label>
                                        ),
                                    )}
                                </div>
                            </div>

                            {/* <div>
                                <Label>Notification channel</Label>
                                <div className="mt-2 mt-4 flex items-center gap-6">
                                    <Checkbox
                                        label="Emails"
                                        defaultChecked={true}
                                    />
                                    <Checkbox label="Whatsapp" />
                                    <Checkbox label="SMS" />
                                </div>
                            </div> */}
                        </div>

                        <div className="flex justify-end gap-3 border-t border-gray-100 px-6 py-4">
                            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                                Cancel
                            </button>
                            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                                Download Report
                            </button>
                            <Button href="">Schedule</Button>
                        </div>
                    </div>

                    {/* --- CARD 2: Upcoming Scheduled Reports --- */}
                    <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex flex-col items-center justify-between gap-4 border-b border-gray-200 p-6 md:flex-row">
                            <h2 className="text-lg font-bold text-gray-900">
                                Upcoming Scheduled Reports
                            </h2>
                            <div className="flex w-full gap-3 md:w-auto">
                                <div className="relative flex-1 md:w-64">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <RenderIcon icon={SearchIcon} className="h-5 w-5 text-[#B5B0BA]" />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10 text-sm shadow-sm focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] focus:outline-none"
                                    />
                                </div>
                                <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                                    {/* Used PNG for button as per design */}
                                    <RenderIcon icon={calenderPng} /> Date-range
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-[#F9F7FA]">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            Report Title
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            Tenant
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            Frequency
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            <div className="flex cursor-pointer items-center gap-1">
                                                Next Run{' '}
                                                <RenderIcon icon={SelectorIcon} className="h-4 w-4 text-[#B5B0BA]" />
                                            </div>
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            <div className="flex cursor-pointer items-center gap-1">
                                                Status{' '}
                                                <RenderIcon icon={SelectorIcon} className="h-4 w-4 text-[#B5B0BA]" />
                                            </div>
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {upcomingReports.map((item, idx) => (
                                        <tr
                                            key={idx}
                                            className="transition-colors hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                                {item.title}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                                {item.tenant}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                                {item.frequency}
                                            </td>

                                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-gray-900">
                                                        {item.nextRun.split(' 2025')[0]} 2025
                                                    </span>
                                                    <span className="font-medium text-gray-500">
                                                        {item.nextRun.split(' 2025')[1]}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <StatusBadge status={item.status} />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => openRunModal(item.title)}
                                                        className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-1.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 active:scale-95"
                                                    >
                                                        <RenderIcon icon={RunBtn} className="h-4 w-4 text-[#B5B0BA]" />
                                                        Run Now
                                                    </button>

                                                    <button
                                                        onClick={() => openEditModal(item.title)}
                                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white shadow-sm transition-all hover:bg-gray-50 hover:text-gray-600 active:scale-95"
                                                    >
                                                        <RenderIcon icon={PencilBtn} className="h-4 w-4 text-[#B5B0BA]" />
                                                    </button>

                                                    <button
                                                        onClick={() => openDeleteModal(item.title)}
                                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white shadow-sm transition-all hover:border-red-200 hover:bg-red-50 active:scale-95"
                                                    >
                                                        <RenderIcon icon={DelBtn} className="h-4 w-4 text-[#B5B0BA]" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* --- PAGINATION --- */}
                        <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white shadow-sm transition-colors hover:bg-gray-50">
                                <RenderIcon icon={ArrowBack} className="h-4 w-4 text-gray-500" />
                            </button>

                            <div className="flex items-center gap-2">
                                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                                    1
                                </button>
                                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                    2
                                </button>
                                {/* ... other page buttons ... */}
                            </div>

                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white shadow-sm transition-colors hover:bg-gray-50">
                                <RenderIcon icon={ArrowRight} className="h-4 w-4 text-gray-500" />
                            </button>
                        </div>
                    </div>

                    {/* --- CARD 3: History --- */}
                    <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <div className="border-b border-gray-200 p-6">
                            <h2 className="text-lg font-bold text-gray-900">
                                History
                            </h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-[#F9F7FA]">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            Report Title
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            Tenant
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            Sent On
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            Recipients
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            <div className="flex cursor-pointer items-center gap-1">
                                                Status{' '}
                                                <RenderIcon icon={SelectorIcon} className="h-4 w-4 text-[#B5B0BA]" />
                                            </div>
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500 ">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {historyReports.map((item, idx) => (
                                        <tr
                                            key={idx}
                                            className="transition-colors hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                                {item.title}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                                {item.tenant}
                                            </td>

                                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-gray-900">
                                                        {item.sentOn.split(' 2025')[0]} 2025
                                                    </span>
                                                    <span className="font-medium text-gray-500">
                                                        {item.sentOn.split(' 2025')[1]}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="max-w-xs truncate px-6 py-4 text-sm text-gray-500">
                                                {item.recipients}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <StatusBadge status={item.status} />
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                                {item.status === 'Failed' ? (
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={openErrorDetailsModal}
                                                            className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                                                        >
                                                            View Error
                                                        </button>
                                                        <button
                                                            onClick={() => {}}
                                                            className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                                                        >
                                                            Retry
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                                                        <RenderIcon icon={DownloadBtn} className='w-4 h-4 text-[#B5B0BA]' />
                                                        Download
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>

            {/* --- MODALS --- */}
            <RunReportModal
                isOpen={isRunModalOpen}
                onClose={() => setIsRunModalOpen(false)}
                onConfirm={handleRunConfirm}
            />
            <EditReportModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={handleEditSave}
            />
            <SimpleErrorModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onRetry={handleDelete}
            />
            <ErrorDetailsModal
                isOpen={isErrorDetailsModalOpen}
                onClose={() => setIsErrorDetailsModalOpen(false)}
                onRetry={() => {}}
            />
            <SuccessModal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
            />
        </div>
    );
}