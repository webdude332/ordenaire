// AddNewAdvertisement.tsx
// Matches design: images 3 & 4 (Add_AD_-_1.jpg and Add_AD_-_2.jpg)

import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import { useRef, useState } from 'react';

import ClockIcon from '@/shared/images/icons/adClock.svg?react';
import CalendarIcon from '@/shared/images/icons/calendar.svg?react';
import ChevronDown from '@/shared/images/icons/chevron-down.svg?react';
import CropIcon from '@/shared/images/icons/cropIcon.svg?react'; // ⊡ icon
import PlusIcon from '@/shared/images/icons/plus.svg?react';
import ReplaceIcon from '@/shared/images/icons/replace.svg?react'; // ↺ icon
import UploadCloudIcon from '@/shared/images/icons/upload.svg?react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface AddNewAdvertisementProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: AdFormData) => void;
}

export interface AdFormData {
    mediaFile: File | null;
    adName: string;
    duration: number;
    startDate: string;
    endDate: string;
    dailyStartTime: string;
    dailyEndTime: string;
    displayStatus: boolean;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TIME_OPTIONS = [
    '12:00 AM',
    '12:30 AM',
    '1:00 AM',
    '1:30 AM',
    '2:00 AM',
    '2:30 AM',
    '3:00 AM',
    '3:30 AM',
    '4:00 AM',
    '4:30 AM',
    '5:00 AM',
    '5:30 AM',
    '6:00 AM',
    '6:30 AM',
    '7:00 AM',
    '7:30 AM',
    '8:00 AM',
    '8:30 AM',
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
    '10:30 PM',
    '11:00 PM',
    '11:30 PM',
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AddNewAdvertisement({
    isOpen,
    onClose,
    onConfirm,
}: AddNewAdvertisementProps) {
    const today = new Date();
    const formattedToday = today.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }); // e.g. "04 Sep 2025"

    // Form state
    const [mediaFile, setMediaFile] = useState<File | null>(null);
    const [mediaPreview, setMediaPreview] = useState<string | null>(null);
    const [adName, setAdName] = useState('');
    const [duration, setDuration] = useState(10);
    const [startDate] = useState(formattedToday);
    const [endDate, setEndDate] = useState('');
    const [dailyStartTime, setDailyStartTime] = useState('12:00 AM');
    const [dailyEndTime, setDailyEndTime] = useState('12:00 AM');
    const [displayStatus, setDisplayStatus] = useState(true);
    const [isDragging, setIsDragging] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // ── Media helpers ──────────────────────────────────────────────────────────

    const handleFile = (file: File) => {
        setMediaFile(file);
        const url = URL.createObjectURL(file);
        setMediaPreview(url);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    };

    const handleReplace = () => {
        fileInputRef.current?.click();
    };

    const handleAdjustCrop = () => {
        // Wire up your crop library here
        console.log('Adjust Crop clicked');
    };

    // ── Submit ─────────────────────────────────────────────────────────────────

    const handleSubmit = () => {
        onConfirm({
            mediaFile,
            adName,
            duration,
            startDate,
            endDate,
            dailyStartTime,
            dailyEndTime,
            displayStatus,
        });
        onClose();
    };

    // ── Render ─────────────────────────────────────────────────────────────────

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,video/mp4"
                className="hidden"
                onChange={handleFileInput}
            />

            <div className="p-6 sm:p-8">
                {/* ── Header ── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <PlusIcon className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add New Advertisement
                    </h2>
                </div>

                {/* ── Body Card ── */}
                <div className="flex gap-4 rounded-xl border border-gray-200 p-5">
                    {/* ── LEFT: Media Upload ── */}
                    <div className="w-[40%] shrink-0">
                        <p className="mb-3 text-sm font-semibold text-gray-900">
                            Media Upload
                        </p>

                        {mediaPreview ? (
                            /* Uploaded state */
                            <div>
                                <div className="overflow-hidden rounded-xl">
                                    <img
                                        src={mediaPreview}
                                        alt="Ad preview"
                                        className="h-[230px] w-full object-cover"
                                    />
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                    <button
                                        onClick={handleReplace}
                                        className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        <ReplaceIcon className="h-3.5 w-3.5" />
                                        Replace
                                    </button>
                                    <button
                                        onClick={handleAdjustCrop}
                                        className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        <CropIcon className="h-3.5 w-3.5" />
                                        Adjust Crop
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* Empty / drag-drop state */
                            <div
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    setIsDragging(true);
                                }}
                                onDragLeave={() => setIsDragging(false)}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                                className={`flex h-[230px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-colors ${
                                    isDragging
                                        ? 'border-[#7AB621] bg-green-50'
                                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                                }`}
                            >
                                <UploadCloudIcon className="mb-2 h-8 w-8 text-gray-400" />
                                <span className="text-sm font-medium text-[#7AB621]">
                                    Drag &amp; Drop
                                </span>
                            </div>
                        )}

                        {/* Hint text — always visible */}
                        {!mediaPreview && (
                            <p className="mt-3 text-center text-xs text-gray-400">
                                Supports JPG, MP4 (Max 50MB)
                                <br />
                                Recommended Ratio: 8:9
                            </p>
                        )}
                    </div>

                    {/* ── RIGHT: Ad Details ── */}
                    <div className="flex-1 space-y-4">
                        <p className="text-sm font-semibold text-gray-900">
                            Ad Details
                        </p>

                        {/* Row 1: Ad Name + Duration */}
                        <div className="flex items-start gap-4">
                            {/* Ad Name */}
                            <div className="flex-1">
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Ad Name
                                    <span className="ml-0.5 text-red-500">
                                        *
                                    </span>
                                </Label>
                                <Input
                                    placeholder="e.g. Summer Shake"
                                    value={adName}
                                    onChange={(e) => setAdName(e.target.value)}
                                />
                            </div>

                            {/* Duration */}
                            <div className="w-28 shrink-0">
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Duration
                                    <span className="ml-0.5 text-red-500">
                                        *
                                    </span>
                                </Label>
                                <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:border-[#7AB621] focus-within:ring-1 focus-within:ring-[#7AB621]">
                                    <input
                                        type="number"
                                        min={1}
                                        value={duration}
                                        onChange={(e) =>
                                            setDuration(Number(e.target.value))
                                        }
                                        className="w-full bg-transparent px-3 py-2.5 text-sm text-gray-700 focus:outline-none"
                                    />
                                    <span className="shrink-0 pr-3 text-sm text-gray-400">
                                        Sec
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Start Date + End Date */}
                        <div className="flex items-start gap-4">
                            {/* Start Date (read-only today) */}
                            <div className="flex-1">
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Start Date
                                    <span className="ml-0.5 text-red-500">
                                        *
                                    </span>
                                </Label>
                                <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2.5">
                                    <CalendarIcon className="h-4 w-4 shrink-0 text-gray-400" />
                                    <span className="text-sm text-gray-700">
                                        {startDate}
                                    </span>
                                </div>
                            </div>

                            {/* End Date */}
                            <div className="flex-1">
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    End Date
                                </Label>
                                <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2.5">
                                    <CalendarIcon className="h-4 w-4 shrink-0 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Select End Date"
                                        value={endDate}
                                        onChange={(e) =>
                                            setEndDate(e.target.value)
                                        }
                                        className="w-full bg-transparent text-sm text-gray-500 placeholder:text-gray-400 focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Daily Start Time + Daily End Time */}
                        <div className="flex items-start gap-4">
                            {/* Daily Start Time */}
                            <div className="flex-1">
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Daily Start Time
                                    <span className="ml-0.5 text-red-500">
                                        *
                                    </span>
                                </Label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                        <ClockIcon className="h-4 w-4 text-gray-400" />
                                    </span>
                                    <select
                                        value={dailyStartTime}
                                        onChange={(e) =>
                                            setDailyStartTime(e.target.value)
                                        }
                                        className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-9 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                    >
                                        {TIME_OPTIONS.map((t) => (
                                            <option key={t} value={t}>
                                                {t}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <ChevronDown className="h-4 w-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Daily End Time */}
                            <div className="flex-1">
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Daily End Time
                                    <span className="ml-0.5 text-red-500">
                                        *
                                    </span>
                                </Label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                        <ClockIcon className="h-4 w-4 text-gray-400" />
                                    </span>
                                    <select
                                        value={dailyEndTime}
                                        onChange={(e) =>
                                            setDailyEndTime(e.target.value)
                                        }
                                        className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-9 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                    >
                                        {TIME_OPTIONS.map((t) => (
                                            <option key={t} value={t}>
                                                {t}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <ChevronDown className="h-4 w-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 4: Initial Display Status */}
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Initial Display Status
                            </Label>
                            <div className="flex items-center gap-3">
                                {/* Toggle */}
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked={displayStatus}
                                    onClick={() => setDisplayStatus((v) => !v)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                                        displayStatus
                                            ? 'bg-[#7AB621]'
                                            : 'bg-gray-300'
                                    }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                                            displayStatus
                                                ? 'translate-x-6'
                                                : 'translate-x-1'
                                        }`}
                                    />
                                </button>
                                <span className="text-sm font-medium text-gray-700">
                                    {displayStatus ? 'ON' : 'OFF'}
                                </span>
                            </div>
                            <p className="mt-2 text-xs text-gray-400">
                                "You can change this anytime from the OSS
                                Carousel Ad list."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Footer ── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Upload &amp; Save
                </Button>
            </div>
        </Modal>
    );
}
