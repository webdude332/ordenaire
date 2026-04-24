// export default function EditReservation() {
//     return <div>EditReservation</div>;
// }

import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';
import { useState } from 'react';

import ClockIcon from '@/shared/images/icons/adClock.svg?react';
import CalendarIcon from '@/shared/images/icons/calendar.svg?react';
import ChevronDown from '@/shared/images/icons/chevron-down.svg?react';
import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
import EditIcon from '@/shared/images/icons/pencilIcon.svg?react';

interface EditReservationProps {
    isOpen: boolean;
    onClose: () => void;
    onUpdate: (data: ReservationFormData) => void;
    onCancel: () => void;
    initialData: ReservationFormData;
}

export interface ReservationFormData {
    customerName: string;
    countryCode: string;
    phoneNumber: string;
    date: string;
    time: string;
    floor: string;
    tablePreference: string;
    pax: number;
    babyChair: 'yes' | 'no';
    specialRequests: string;
}

const COUNTRY_CODES = [
    { label: '+965', value: '+965' },
    { label: '+966', value: '+966' },
    { label: '+971', value: '+971' },
    { label: '+92', value: '+92' },
    { label: '+1', value: '+1' },
    { label: '+44', value: '+44' },
];

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

const FLOOR_OPTIONS = [
    { label: 'Select Floor', value: '' },
    { label: '1st Floor', value: '1st_floor' },
    { label: '2nd Floor', value: '2nd_floor' },
    { label: '3rd Floor', value: '3rd_floor' },
    { label: 'Rooftop', value: 'rooftop' },
];

const TABLE_OPTIONS = [
    { label: 'Select Table', value: '' },
    { label: 'Table 01', value: 'table_01' },
    { label: 'Table 02', value: 'table_02' },
    { label: 'Table 03', value: 'table_03' },
    { label: 'Table 04', value: 'table_04' },
    { label: 'Table 05', value: 'table_05' },
];

const MAX_SPECIAL_REQUESTS = 128;

export default function EditReservation({
    isOpen,
    onClose,
    onUpdate,
    onCancel,
    initialData,
}: EditReservationProps) {
    const [customerName, setCustomerName] = useState(initialData.customerName);
    const [countryCode, setCountryCode] = useState(initialData.countryCode);
    const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber);
    const [date] = useState(initialData.date);
    const [time, setTime] = useState(initialData.time);
    const [floor, setFloor] = useState(initialData.floor);
    const [tablePreference, setTablePreference] = useState(
        initialData.tablePreference,
    );
    const [pax, setPax] = useState(initialData.pax);
    const [babyChair, setBabyChair] = useState<'yes' | 'no'>(
        initialData.babyChair,
    );
    const [specialRequests, setSpecialRequests] = useState(
        initialData.specialRequests,
    );

    const charsLeft = MAX_SPECIAL_REQUESTS - specialRequests.length;

    const handleUpdate = () => {
        onUpdate({
            customerName,
            countryCode,
            phoneNumber,
            date,
            time,
            floor,
            tablePreference,
            pax,
            babyChair,
            specialRequests,
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <EditIcon className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Edit Reservation
                    </h2>
                </div>

                {/* Form Card */}
                <div className="space-y-5 rounded-xl border border-gray-200 p-5">
                    {/* Row 1: Customer Name + Phone Number */}
                    <div className="flex items-start gap-4">
                        {/* Customer Name */}
                        <div className="flex-1">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Customer Name
                                <span className="ml-0.5 text-red-500">*</span>
                            </Label>
                            <Input
                                placeholder="Customer Name"
                                value={customerName}
                                onChange={(e) =>
                                    setCustomerName(e.target.value)
                                }
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex-1">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Phone Number
                                <span className="ml-0.5 text-red-500">*</span>
                            </Label>
                            <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 focus-within:border-[#7AB621] focus-within:ring-1 focus-within:ring-[#7AB621]">
                                {/* Country Code */}
                                <div className="relative flex items-center border-r border-gray-300 bg-white">
                                    <select
                                        value={countryCode}
                                        onChange={(e) =>
                                            setCountryCode(e.target.value)
                                        }
                                        className="appearance-none bg-transparent py-2.5 pr-6 pl-3 text-sm text-gray-700 focus:outline-none"
                                    >
                                        {COUNTRY_CODES.map((c) => (
                                            <option
                                                key={c.value}
                                                value={c.value}
                                            >
                                                {c.label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="pointer-events-none absolute right-1 h-3.5 w-3.5 text-gray-400" />
                                </div>
                                {/* Phone input */}
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                    className="flex-1 bg-white px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Date + Time */}
                    <div className="flex items-start gap-4">
                        {/* Date */}
                        <div className="flex-1">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Date
                                <span className="ml-0.5 text-red-500">*</span>
                            </Label>
                            <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2.5">
                                <CalendarIcon className="h-4 w-4 shrink-0 text-gray-400" />
                                <span className="text-sm text-gray-700">
                                    {date}
                                </span>
                            </div>
                        </div>

                        {/* Time */}
                        <div className="flex-1">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Time
                                <span className="ml-0.5 text-red-500">*</span>
                            </Label>
                            <div className="relative">
                                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                    <ClockIcon className="h-4 w-4 text-gray-400" />
                                </span>
                                <select
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
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

                    {/* Row 3: Select Floor + Table Preference */}
                    <div className="flex items-start gap-4">
                        {/* Floor */}
                        <div className="flex-1">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Select Floor
                            </Label>
                            <div className="relative">
                                <select
                                    value={floor}
                                    onChange={(e) => setFloor(e.target.value)}
                                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                >
                                    {FLOOR_OPTIONS.map((f) => (
                                        <option key={f.value} value={f.value}>
                                            {f.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                    <ChevronDown className="h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Table Preference (Optional) */}
                        <div className="flex-1">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Table Preference (Optional)
                            </Label>
                            <div className="relative">
                                <select
                                    value={tablePreference}
                                    onChange={(e) =>
                                        setTablePreference(e.target.value)
                                    }
                                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                >
                                    {TABLE_OPTIONS.map((t) => (
                                        <option key={t.value} value={t.value}>
                                            {t.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                    <ChevronDown className="h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Pax (Guests) + Baby Chair */}
                    <div className="flex items-start gap-4">
                        {/* Pax */}
                        <div className="flex-1">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Pax (Guests)
                                <span className="ml-0.5 text-red-500">*</span>
                            </Label>
                            <Input
                                type="number"
                                placeholder="2"
                                value={pax}
                                min={1}
                                onChange={(e) => setPax(Number(e.target.value))}
                            />
                        </div>

                        {/* Baby Chair */}
                        <div className="flex-1">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Baby Chair
                            </Label>
                            <div className="flex items-center gap-4 pt-2">
                                <RadioGroup
                                    name="edit_baby_chair"
                                    label=""
                                    value={babyChair}
                                    onChange={(val) =>
                                        setBabyChair(val as 'yes' | 'no')
                                    }
                                    options={[
                                        { value: 'yes', label: 'Yes' },
                                        { value: 'no', label: 'No' },
                                    ]}
                                    gap="gap-4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 5: Special Requests / Occasion */}
                    <div>
                        <Label className="mb-1.5 text-sm font-medium text-gray-700">
                            Special Requests / Occasion
                        </Label>
                        <textarea
                            placeholder="e.g. Birthday"
                            value={specialRequests}
                            maxLength={MAX_SPECIAL_REQUESTS}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                            rows={3}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                        />
                        <p className="mt-1 text-xs text-gray-400">
                            {charsLeft} characters left
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 border-t border-gray-200 px-6 py-5">
                {/* Cancel Reservation — danger outlined */}
                <button
                    onClick={onCancel}
                    className="flex items-center gap-2 rounded-lg border border-red-400 px-4 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
                >
                    <TrashIcon className="h-4 w-4" />
                    Cancel Reservation
                </button>

                <div className="flex flex-1 justify-end gap-3">
                    <IconButton onClick={onClose}>Close</IconButton>
                    <Button onClick={handleUpdate}>Update Reservation</Button>
                </div>
            </div>
        </Modal>
    );
}
