import React, { useState } from 'react';
import Modal from './Modal';

interface EditReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

export default function EditReportModal({ isOpen, onClose, onSave }: EditReportModalProps) {
    const [exportFormat, setExportFormat] = useState('excel');
    const [frequency, setFrequency] = useState('weekly-monthly');
    const [notifications, setNotifications] = useState({ email: true, whatsapp: false, sms: false });

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center bg-white">
                        <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">Edit Scheduled Report</h3>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-5">
                    {/* Row 1: Tenant and Recipients */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Assign to Tenant / Organization
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for tenant..."
                                    className="w-full px-4 py-2.5 pl-10 rounded-lg border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Recipients
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    defaultValue="abc@gmail.com, Admins, billing"
                                    className="w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Report Title and Template */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Report Title
                            </label>
                            <input
                                type="text"
                                placeholder='e.g., "Monthly Performance Report"'
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Report Template
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    defaultValue="templates—Sales, Usage, Financial"
                                    className="w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Date Range */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Select Data Range
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    defaultValue="Jan 10, 2025 - Jul 10, 2025"
                                    className="w-full px-4 py-2.5 pl-10 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Export Format */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-3">
                            Export format
                        </label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="exportFormat"
                                    value="csv"
                                    checked={exportFormat === 'csv'}
                                    onChange={(e) => setExportFormat(e.target.value)}
                                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700">CSV</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="exportFormat"
                                    value="pdf"
                                    checked={exportFormat === 'pdf'}
                                    onChange={(e) => setExportFormat(e.target.value)}
                                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700">PDF</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="exportFormat"
                                    value="excel"
                                    checked={exportFormat === 'excel'}
                                    onChange={(e) => setExportFormat(e.target.value)}
                                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700 font-medium">Excel</span>
                            </label>
                        </div>
                    </div>

                    {/* Frequency */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-3">
                            Frequency
                        </label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="frequency"
                                    value="once"
                                    checked={frequency === 'once'}
                                    onChange={(e) => setFrequency(e.target.value)}
                                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700">Once</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="frequency"
                                    value="daily"
                                    checked={frequency === 'daily'}
                                    onChange={(e) => setFrequency(e.target.value)}
                                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700">Daily</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="frequency"
                                    value="weekly"
                                    checked={frequency === 'weekly'}
                                    onChange={(e) => setFrequency(e.target.value)}
                                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700 font-medium">Weekly</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="frequency"
                                    value="monthly"
                                    checked={frequency === 'monthly'}
                                    onChange={(e) => setFrequency(e.target.value)}
                                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700 font-medium">Monthly</span>
                            </label>
                        </div>
                    </div>

                    {/* Notification Channel */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-3">
                            Notification channel
                        </label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={notifications.email}
                                    onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700 font-medium">Emails</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={notifications.whatsapp}
                                    onChange={(e) => setNotifications({ ...notifications, whatsapp: e.target.checked })}
                                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700">Whatsapp</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={notifications.sms}
                                    onChange={(e) => setNotifications({ ...notifications, sms: e.target.checked })}
                                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700">SMS</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-8">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSave}
                        className="flex-1 px-4 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                    >
                        Save changes
                    </button>
                </div>
            </div>
        </Modal>
    );
}