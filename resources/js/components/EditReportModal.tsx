import SearchIcon from '@/images/icons/searchIcon.svg?react';
import { useState } from 'react';
import EditIcon from '../images/icons/boldPencilModal.svg?react';
import patternBg from '../images/icons/patternBg.svg';
import Modal from './Modal';
import Button from './ui/Button';
import CustomDropdown from './ui/CustomDropdown';
import { Input } from './ui/FormElements';
import IconButton from './ui/IconButton';
import RadioGroup from './ui/RadioGroup';

interface EditReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

export default function EditReportModal({
    isOpen,
    onClose,
    onSave,
}: EditReportModalProps) {
    const [exportFormat, setExportFormat] = useState('excel');
    const [reportTemplate, setReportTemplate] = useState('');
    const [frequency, setFrequency] = useState('weekly');
    const [notifications, setNotifications] = useState({
        email: true,
        whatsapp: false,
        sms: false,
    });
    const templateOptions = [
        { label: 'Sales', value: 'sales' },
        { label: 'Usage', value: 'usage' },
        { label: 'Financial', value: 'financial' },
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="4xl">
            {/* Added overflow-hidden to clip the pattern if it scales too big */}
            <div className="relative overflow-hidden rounded-xl bg-white">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 text-gray-400 transition-colors hover:text-gray-600"
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

                {/* Modal Content */}
                <div className="relative z-0 p-8 pb-4">
                    {/* Header */}
                    <div className="mb-8 flex flex-col items-start gap-4">
                        {/* --- ICON WRAPPER WITH PATTERN --- */}
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                            {/* 1. The Pattern Background (Centered behind icon) */}
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

                            {/* 2. The Edit Icon (Sitting on top) */}
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <EditIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Edit Scheduled Report
                            </h3>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="relative z-10 rounded-lg border border-[#E8E6EA] bg-white p-4 shadow-xs">
                        <div className="relative z-10 space-y-6">
                            {/* Row 1: Tenant and Recipients */}
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Assign to Tenant / Organization
                                    </label>
                                    <div className="relative">
                                        <Input
                                            placeholder="Search for tenant..."
                                            icon={SearchIcon}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Select Data Range
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            defaultValue="Jan 10, 2025 - Jul 10, 2025"
                                            className="h-11 w-full rounded-lg border border-gray-200 px-4 pl-10 text-sm font-medium text-gray-900 transition-all focus:border-transparent focus:ring-2 focus:ring-lime-500 focus:outline-none"
                                        />
                                        <svg
                                            className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Report Title and Template */}
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Report Title
                                    </label>
                                    <Input placeholder='e.g., "Monthly Performance Report"' />
                                </div>
                                <div>
                                    <div className="relative">
                                        {/* CHANGED: Removed labelClassName to use the default style */}
                                        <CustomDropdown
                                            label="Report Template"
                                            options={templateOptions}
                                            value={reportTemplate}
                                            onChange={setReportTemplate}
                                            placeholder="templates—Sales, Usage, Financial"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Date Range */}
                            <div className="grid grid-cols-2 gap-5"></div>

                            <div className="mt-6 mb-8 space-y-6 border-t border-gray-100 pt-6">
                                <div>
                                    <RadioGroup
                                        label="Export format"
                                        name="format"
                                        options={['CSV', 'PDF', 'Excel']}
                                        defaultValue="Excel"
                                    />
                                </div>
                                <div>
                                    <RadioGroup
                                        label="Frequency"
                                        name="frequency"
                                        options={[
                                            'Once',
                                            'Daily',
                                            'Weekly',
                                            'Monthly',
                                        ]}
                                        defaultValue="Weekly"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer / Action Buttons */}
                <div className="mt-2 flex gap-4 border-t border-gray-100 bg-white px-8 py-5">
                    <div className="flex-1">
                        <IconButton className="w-full">Cancel</IconButton>
                    </div>
                    <div className="flex-1">
                        <Button onClick={onSave} className="w-full">
                            Save changes
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
