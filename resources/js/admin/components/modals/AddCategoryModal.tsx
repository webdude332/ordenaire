import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';
import { useState } from 'react';

// TODO: replace with your actual icon
import ChevronDown from '@/shared/images/icons/chevron-down.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';

interface AddCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: CategoryFormData) => void;
}

export interface CategoryFormData {
    name: string;
    description: string;
    status: 'active' | 'inactive';
    kitchenStation: string;
    scheduleType: 'always' | 'custom';
    fromTime: string;
    toTime: string;
    days: string[];
}

const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const TIME_OPTIONS = [
    '12:00 AM',
    '1:00 AM',
    '2:00 AM',
    '3:00 AM',
    '4:00 AM',
    '5:00 AM',
    '6:00 AM',
    '7:00 AM',
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
    '10:00 PM',
    '11:00 PM',
];

const KITCHEN_STATIONS = [
    { label: 'Select Kitchen Station', value: '' },
    { label: 'Hot Station', value: 'hot_station' },
    { label: 'Cold Section', value: 'cold_section' },
    { label: 'Bar', value: 'bar' },
];

export default function AddCategoryModal({
    isOpen,
    onClose,
    onConfirm,
}: AddCategoryModalProps) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<'active' | 'inactive'>('active');
    const [kitchenStation, setKitchenStation] = useState('');
    const [scheduleType, setScheduleType] = useState<'always' | 'custom'>(
        'always',
    );
    const [fromTime, setFromTime] = useState('8:00 AM');
    const [toTime, setToTime] = useState('11:00 PM');
    const [days, setDays] = useState<string[]>([]);

    const toggleDay = (day: string) => {
        setDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
        );
    };

    const handleSubmit = () => {
        onConfirm({
            name,
            description,
            status,
            kitchenStation,
            scheduleType,
            fromTime,
            toTime,
            days,
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <PlusIcon className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add Category
                    </h2>
                </div>

                <div className="space-y-5">
                    {/* Basic Details */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-base font-semibold text-gray-900">
                            Basic Details
                        </h3>

                        {/* Category Name + Status */}
                        <div className="mb-4 flex items-start gap-6">
                            <div className="flex-1">
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Category Name
                                </Label>
                                <Input
                                    placeholder="e.g. Starters"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Status
                                </Label>
                                <div className="flex items-center gap-4 pt-2">
                                    <RadioGroup
                                        name="add_status"
                                        label=""
                                        value={status}
                                        onChange={(val) =>
                                            setStatus(
                                                val as 'active' | 'inactive',
                                            )
                                        }
                                        options={[
                                            {
                                                value: 'active',
                                                label: 'Active',
                                            },
                                            {
                                                value: 'inactive',
                                                label: 'Inactive',
                                            },
                                        ]}
                                        gap="gap-4"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Description
                            </Label>
                            <textarea
                                placeholder="e.g. Small bites and appetizers"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={3}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                            />
                            <p className="mt-1 text-xs text-gray-400">
                                Displayed on the Customer QR Menu.
                            </p>
                        </div>
                    </div>

                    {/* Category Defaults */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-1 text-base font-semibold text-gray-900">
                            Category Defaults
                        </h3>
                        <p className="mb-4 text-xs text-gray-500">
                            New items will auto-inherit these settings and can
                            be adjusted when adding the item.
                        </p>

                        <Label className="mb-1.5 text-sm font-medium text-gray-700">
                            Default Kitchen Station (optional)
                        </Label>
                        <div className="relative">
                            <select
                                value={kitchenStation}
                                onChange={(e) =>
                                    setKitchenStation(e.target.value)
                                }
                                className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                            >
                                {KITCHEN_STATIONS.map((s) => (
                                    <option key={s.value} value={s.value}>
                                        {s.label}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                <ChevronDown className="h-4 w-4 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-base font-semibold text-gray-900">
                            Availability
                        </h3>

                        <Label className="mb-2 text-sm font-medium text-gray-700">
                            Schedule Type
                        </Label>
                        <RadioGroup
                            name="add_schedule"
                            label=""
                            value={scheduleType}
                            onChange={(val) =>
                                setScheduleType(val as 'always' | 'custom')
                            }
                            options={[
                                { value: 'always', label: 'Always Available' },
                                { value: 'custom', label: 'Custom Schedule' },
                            ]}
                            gap="gap-6"
                        />

                        {/* Custom Schedule fields */}
                        {scheduleType === 'custom' && (
                            <div className="mt-4 space-y-4">
                                {/* Active Hours */}
                                <div>
                                    <Label className="mb-2 text-sm font-medium text-gray-700">
                                        Set Active Hours
                                    </Label>
                                    <div className="flex items-center gap-3">
                                        {/* From */}
                                        <div className="relative">
                                            <select
                                                value={fromTime}
                                                onChange={(e) =>
                                                    setFromTime(e.target.value)
                                                }
                                                className="appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pr-8 pl-9 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                            >
                                                {TIME_OPTIONS.map((t) => (
                                                    <option key={t} value={t}>
                                                        {t}
                                                    </option>
                                                ))}
                                            </select>
                                            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                                                🕐
                                            </span>
                                            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                                                <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
                                            </div>
                                        </div>

                                        <span className="text-sm text-gray-500">
                                            To
                                        </span>

                                        {/* To */}
                                        <div className="relative">
                                            <select
                                                value={toTime}
                                                onChange={(e) =>
                                                    setToTime(e.target.value)
                                                }
                                                className="appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pr-8 pl-9 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                            >
                                                {TIME_OPTIONS.map((t) => (
                                                    <option key={t} value={t}>
                                                        {t}
                                                    </option>
                                                ))}
                                            </select>
                                            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                                                🕐
                                            </span>
                                            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                                                <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Days */}
                                <div>
                                    <Label className="mb-2 text-sm font-medium text-gray-700">
                                        Apply on Days
                                    </Label>
                                    <div className="flex flex-wrap gap-2">
                                        {DAYS.map((day) => (
                                            <label
                                                key={day}
                                                className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={days.includes(day)}
                                                    onChange={() =>
                                                        toggleDay(day)
                                                    }
                                                    className="h-4 w-4 rounded border-gray-300 accent-[#7AB621]"
                                                />
                                                {day}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Add Category
                </Button>
            </div>
        </Modal>
    );
}
