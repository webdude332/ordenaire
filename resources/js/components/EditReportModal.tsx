import { useState } from 'react';
import Button from '../components/Button';
// import editIcon from '../images/icons/editIcon.png';
import EditIcon from '../images/icons/boldPencilModal.svg?react'
import Modal from './Modal';
import patternBg from '../images/icons/patternBg.svg'; 

// import checkIcon from '../images/icons/check-icon.png'; 

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
    const [frequency, setFrequency] = useState('weekly');
    const [notifications, setNotifications] = useState({
        email: true,
        whatsapp: false,
        sms: false,
    });

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
                    <div className="mb-8 flex flex-col items-start gap-4    ">
                        
                        {/* --- ICON WRAPPER WITH PATTERN --- */}
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                            
                            {/* 1. The Pattern Background (Centered behind icon) */}
                            <div className="absolute inset-0 top-22 left-22 flex items-center justify-center pointer-events-none">
                                <img 
                                    src={patternBg} 
                                    alt="" 
                                    className="max-w-none" 
                                    style={{ 
                                        transform: 'scale(1.1)', // Adjust scale to match the previous modal's look
                                        opacity: 1 
                                    }} 
                                />
                            </div>

                            {/* 2. The Edit Icon (Sitting on top) */}
                            <div className='relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center'>
                            {/* <img
                                src={editIcon}
                                alt="Edit"
                                className="relative z-10 h-12 w-12"
                            /> */}
                            <EditIcon className='w-12 h-12 bg-white p-3 border-2 border-gray-200 rounded-lg  '/>
                            </div>
                        </div>

                        <div className='relative z-10'>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Edit Scheduled Report
                            </h3>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className='relative z-10 bg-white border border-[#E8E6EA] p-4 rounded-lg shadow-xs'>
                                            <div className=" relative z-10 space-y-6">
                        {/* Row 1: Tenant and Recipients */}
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="mb-2 block text-[13px] text-gray-500">
                                    Assign to Tenant / Organization
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search for tenant..."
                                        className="h-11 w-full rounded-lg border border-gray-200 px-4 pl-10 text-sm text-gray-700 placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-lime-500 focus:outline-none"
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
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                                                        <div>
                                <label className="mb-2 block text-[13px] text-gray-500">
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
                                <label className="mb-2 block text-[13px] text-gray-500">
                                    Report Title
                                </label>
                                <input
                                    type="text"
                                    placeholder='e.g., "Monthly Performance Report"'
                                    className="h-11 w-full rounded-lg border border-gray-200 px-4 text-sm text-gray-700 placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-lime-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-[13px] text-gray-500">
                                    Report Template
                                </label>
                                <div className="relative">
                                    <div className="flex h-11 w-full items-center rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-500">
                                        templates—Sales, Usage, Financial
                                    </div>
                                    <svg
                                        className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Date Range */}
                        <div className="grid grid-cols-2 gap-5">
                        </div>

                        {/* Export Format */}
                        <div>
                            <label className="mb-3 block text-sm font-bold text-gray-900">
                                Export format
                            </label>
                            <div className="flex gap-8">
                                {['csv', 'pdf', 'excel'].map((fmt) => (
                                    <label
                                        key={fmt}
                                        className="group flex cursor-pointer items-center gap-2"
                                    >
                                        <input
                                            type="radio"
                                            name="exportFormat"
                                            value={fmt}
                                            checked={exportFormat === fmt}
                                            onChange={(e) =>
                                                setExportFormat(e.target.value)
                                            }
                                            className="h-4 w-4 cursor-pointer border-gray-300 text-lime-600 accent-lime-600 focus:ring-lime-500"
                                        />
                                        <span
                                            className={`text-sm ${exportFormat === fmt ? 'font-medium text-gray-900' : 'text-gray-500'} uppercase`}
                                        >
                                            {fmt}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Frequency */}
                        <div>
                            <label className="mb-3 block text-sm font-bold text-gray-900">
                                Frequency
                            </label>
                            <div className="flex gap-8">
                                {['once', 'daily', 'weekly', 'monthly'].map(
                                    (freq) => (
                                        <label
                                            key={freq}
                                            className="group flex cursor-pointer items-center gap-2"
                                        >
                                            <input
                                                type="radio"
                                                name="frequency"
                                                value={freq}
                                                checked={frequency === freq}
                                                onChange={(e) =>
                                                    setFrequency(e.target.value)
                                                }
                                                className="h-4 w-4 cursor-pointer border-gray-300 text-lime-600 accent-lime-600 focus:ring-lime-500"
                                            />
                                            <span
                                                className={`text-sm ${frequency === freq ? 'font-medium text-gray-900' : 'text-gray-500'} capitalize`}
                                            >
                                                {freq}
                                            </span>
                                        </label>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Footer / Action Buttons */}
                <div className="mt-2 flex gap-4 border-t border-gray-100 bg-white px-8 py-5">
                    <button
                        onClick={onClose}
                        className="flex-1 rounded-lg border border-gray-300 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <div className="flex-1">
                        <Button
                            onClick={onSave}
                            className='w-full'
                        >
                            Save changes
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}