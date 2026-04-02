// import { useState } from 'react';
// import Button from './ui/Button';
// import IconButton from './ui/IconButton';

// const ChevronLeftIcon = () => (
//     <svg
//         width="20"
//         height="20"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//     >
//         <path d="m15 18-6-6 6-6" />
//     </svg>
// );

// const ChevronRightIcon = () => (
//     <svg
//         width="20"
//         height="20"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//     >
//         <path d="m9 18 6-6-6-6" />
//     </svg>
// );

// const formatDate = (date: Date) => {
//     const months = [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dec',
//     ];
//     return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
// };

// const isSameDay = (d1: Date | null, d2: Date | null) => {
//     if (!d1 || !d2) return false;
//     return d1.toDateString() === d2.toDateString();
// };

// const isToday = (date: Date) => {
//     return isSameDay(date, new Date());
// };

// const getDaysInMonth = (year: number, month: number) => {
//     return new Date(year, month + 1, 0).getDate();
// };

// const getFirstDayOfMonth = (year: number, month: number) => {
//     const day = new Date(year, month, 1).getDay();
//     return (day + 6) % 7;
// };

// const startOfDay = (d: Date) =>
//     new Date(d.getFullYear(), d.getMonth(), d.getDate());

// const PRESETS = [
//     {
//         label: 'Today',
//         getValue: () => {
//             const d = startOfDay(new Date());
//             return { from: d, to: new Date(d) };
//         },
//     },
//     {
//         label: 'Yesterday',
//         getValue: () => {
//             const d = new Date();
//             d.setDate(d.getDate() - 1);
//             const day = startOfDay(d);
//             return { from: day, to: new Date(day) };
//         },
//     },
//     {
//         label: 'This week',
//         getValue: () => {
//             const today = new Date();
//             const diffToMon = (today.getDay() + 6) % 7;
//             const start = startOfDay(new Date(today));
//             start.setDate(today.getDate() - diffToMon);
//             const end = new Date(start);
//             end.setDate(start.getDate() + 6);
//             return { from: start, to: end };
//         },
//     },
//     {
//         label: 'Last week',
//         getValue: () => {
//             const today = new Date();
//             const diffToMon = (today.getDay() + 6) % 7;
//             const start = startOfDay(new Date(today));
//             start.setDate(today.getDate() - diffToMon - 7);
//             const end = new Date(start);
//             end.setDate(start.getDate() + 6);
//             return { from: start, to: end };
//         },
//     },
//     {
//         label: 'This month',
//         getValue: () => {
//             const today = new Date();
//             return {
//                 from: new Date(today.getFullYear(), today.getMonth(), 1),
//                 to: new Date(today.getFullYear(), today.getMonth() + 1, 0),
//             };
//         },
//     },
//     {
//         label: 'Last month',
//         getValue: () => {
//             const today = new Date();
//             return {
//                 from: new Date(today.getFullYear(), today.getMonth() - 1, 1),
//                 to: new Date(today.getFullYear(), today.getMonth(), 0),
//             };
//         },
//     },
//     {
//         label: 'This year',
//         getValue: () => {
//             const today = new Date();
//             return {
//                 from: new Date(today.getFullYear(), 0, 1),
//                 to: startOfDay(today),
//             };
//         },
//     },
//     {
//         label: 'Last year',
//         getValue: () => {
//             const today = new Date();
//             return {
//                 from: new Date(today.getFullYear() - 1, 0, 1),
//                 to: new Date(today.getFullYear() - 1, 11, 31),
//             };
//         },
//     },
//     {
//         label: 'All time',
//         getValue: () => ({
//             from: new Date(2020, 0, 1),
//             to: startOfDay(new Date()),
//         }),
//     },
// ];

// // ── Change 1: added maxDate prop to Calendar ──────────────────────────────────
// const Calendar = ({
//     year,
//     month,
//     selectedRange,
//     onDateClick,
//     maxDate,
// }: any) => {
//     const daysInMonth = getDaysInMonth(year, month);
//     const firstDay = getFirstDayOfMonth(year, month);
//     const days: { day: number; isCurrentMonth: boolean; date: Date }[] = [];
//     const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

//     const prevMonthDays = getDaysInMonth(year, month - 1);
//     for (let i = firstDay - 1; i >= 0; i--) {
//         days.push({
//             day: prevMonthDays - i,
//             isCurrentMonth: false,
//             date: new Date(year, month - 1, prevMonthDays - i),
//         });
//     }
//     for (let i = 1; i <= daysInMonth; i++) {
//         days.push({
//             day: i,
//             isCurrentMonth: true,
//             date: new Date(year, month, i),
//         });
//     }
//     const remaining = 42 - days.length;
//     for (let i = 1; i <= remaining; i++) {
//         days.push({
//             day: i,
//             isCurrentMonth: false,
//             date: new Date(year, month + 1, i),
//         });
//     }

//     const isInRange = (date: Date) => {
//         if (!selectedRange?.from || !selectedRange?.to) return false;
//         return date >= selectedRange.from && date <= selectedRange.to;
//     };
//     const isRangeStart = (date: Date) =>
//         selectedRange?.from && isSameDay(date, selectedRange.from);
//     const isRangeEnd = (date: Date) =>
//         selectedRange?.to && isSameDay(date, selectedRange.to);

//     const monthNames = [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December',
//     ];

//     return (
//         <div className="flex-1">
//             <div className="mb-4 flex items-center justify-center">
//                 <div className="text-sm font-semibold text-gray-900">
//                     {monthNames[month]} {year}
//                 </div>
//             </div>
//             <div className="grid grid-cols-7 gap-1">
//                 {weekDays.map((day) => (
//                     <div
//                         key={day}
//                         className="pb-2 text-center text-xs font-medium text-gray-500"
//                     >
//                         {day}
//                     </div>
//                 ))}
//                 {days.map((d, idx) => {
//                     const isStart = isRangeStart(d.date);
//                     const isEnd = isRangeEnd(d.date);
//                     const inRange = isInRange(d.date) && !isStart && !isEnd;
//                     const showToday = isToday(d.date);
//                     // ── Change 2: disable future dates ───────────────────
//                     const isDisabled = maxDate && d.date > maxDate;

//                     return (
//                         <div key={idx} className="relative">
//                             <button
//                                 onClick={() =>
//                                     !isDisabled && onDateClick(d.date)
//                                 }
//                                 disabled={isDisabled}
//                                 className={`relative flex h-9 w-9 items-center justify-center rounded-full text-sm ${isDisabled ? 'cursor-not-allowed text-gray-200' : ''} ${!isDisabled && !d.isCurrentMonth ? 'text-gray-300' : ''} ${!isDisabled && d.isCurrentMonth && !isStart && !isEnd ? 'text-gray-700' : ''} ${isStart || isEnd ? 'z-10 bg-[#79B800] font-medium text-white' : ''} ${inRange && !isDisabled ? 'bg-green-50' : ''} ${!isStart && !isEnd && !inRange && !isDisabled ? 'hover:bg-gray-100' : ''} `}
//                             >
//                                 {d.day}
//                                 {showToday && !isStart && !isEnd && (
//                                     <div className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#79B800]" />
//                                 )}
//                             </button>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// // ── Change 3: added maxDate to Props ─────────────────────────────────────────
// interface Props {
//     onClose?: () => void;
//     onApply?: (range: { from: Date; to: Date }) => void;
//     maxDate?: Date;
// }

// export default function CustomDateRangePicker({
//     onClose,
//     onApply,
//     maxDate,
// }: Props) {
//     const today = new Date();

//     const [currentDate, setCurrentDate] = useState(
//         new Date(today.getFullYear(), today.getMonth(), 1),
//     );
//     const [selectedRange, setSelectedRange] = useState<{
//         from: Date | null;
//         to: Date | null;
//     }>({
//         from: null,
//         to: null,
//     });
//     const [activePreset, setActivePreset] = useState<string | null>(null);

//     const handlePresetClick = (preset: (typeof PRESETS)[0]) => {
//         const range = preset.getValue();
//         // ── Change 4: cap preset `to` at maxDate if provided ─────────
//         const cappedTo =
//             maxDate && range.to > maxDate ? new Date(maxDate) : range.to;
//         setActivePreset(preset.label);
//         setSelectedRange({ from: range.from, to: cappedTo });
//         setCurrentDate(
//             new Date(range.from.getFullYear(), range.from.getMonth(), 1),
//         );
//     };

//     const handleDateClick = (date: Date) => {
//         setActivePreset(null);
//         if (!selectedRange.from || (selectedRange.from && selectedRange.to)) {
//             setSelectedRange({ from: date, to: null });
//         } else if (date < selectedRange.from) {
//             setSelectedRange({ from: date, to: selectedRange.from });
//         } else {
//             setSelectedRange({ from: selectedRange.from, to: date });
//         }
//     };

//     const handleCancel = () => onClose?.();

//     const handleApply = () => {
//         if (selectedRange.from && selectedRange.to) {
//             onApply?.({ from: selectedRange.from, to: selectedRange.to });
//         }
//         onClose?.();
//     };

//     const handlePrevMonth = () => {
//         setCurrentDate(
//             new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
//         );
//     };

//     const handleNextMonth = () => {
//         setCurrentDate(
//             new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
//         );
//     };

//     const nextYear =
//         currentDate.getMonth() === 11
//             ? currentDate.getFullYear() + 1
//             : currentDate.getFullYear();
//     const nextMonth =
//         currentDate.getMonth() === 11 ? 0 : currentDate.getMonth() + 1;

//     return (
//         <div className="inline-flex overflow-hidden rounded-2xl border border-gray-200 bg-white font-sans">
//             {/* SIDEBAR */}
//             <div className="flex w-44 flex-col gap-0.5 border-r border-gray-200 bg-white px-3 py-4">
//                 {PRESETS.map((preset) => (
//                     <button
//                         key={preset.label}
//                         onClick={() => handlePresetClick(preset)}
//                         className={`rounded-md px-3 py-2 text-left text-sm font-normal transition-colors ${
//                             activePreset === preset.label
//                                 ? 'bg-[#F9F7FA] text-gray-900'
//                                 : 'text-gray-600 hover:bg-[#F9F7FA] hover:text-gray-900'
//                         }`}
//                     >
//                         {preset.label}
//                     </button>
//                 ))}
//             </div>

//             {/* MAIN CALENDAR AREA */}
//             <div className="flex flex-col">
//                 <div className="p-6">
//                     <div className="mb-4 flex items-start justify-between">
//                         <button
//                             onClick={handlePrevMonth}
//                             className="rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900"
//                         >
//                             <ChevronLeftIcon />
//                         </button>

//                         <div className="flex flex-1 justify-center gap-12">
//                             <Calendar
//                                 year={currentDate.getFullYear()}
//                                 month={currentDate.getMonth()}
//                                 selectedRange={selectedRange}
//                                 onDateClick={handleDateClick}
//                                 maxDate={maxDate}
//                             />
//                             <Calendar
//                                 year={nextYear}
//                                 month={nextMonth}
//                                 selectedRange={selectedRange}
//                                 onDateClick={handleDateClick}
//                                 maxDate={maxDate}
//                             />
//                         </div>

//                         <button
//                             onClick={handleNextMonth}
//                             className="rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900"
//                         >
//                             <ChevronRightIcon />
//                         </button>
//                     </div>
//                 </div>

//                 {/* FOOTER */}
//                 <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
//                     <div className="flex items-center gap-3">
//                         <input
//                             type="text"
//                             readOnly
//                             value={
//                                 selectedRange?.from
//                                     ? formatDate(selectedRange.from)
//                                     : ''
//                             }
//                             className="w-36 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-lime-500 focus:outline-none"
//                             placeholder="Start date"
//                         />
//                         <span className="text-sm text-gray-400">–</span>
//                         <input
//                             type="text"
//                             readOnly
//                             value={
//                                 selectedRange?.to
//                                     ? formatDate(selectedRange.to)
//                                     : ''
//                             }
//                             className="w-36 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-lime-500 focus:outline-none"
//                             placeholder="End date"
//                         />
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <IconButton onClick={handleCancel}>Cancel</IconButton>
//                         <Button onClick={handleApply}>Apply</Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useState } from 'react';
import Button from './ui/Button';
import IconButton from './ui/IconButton';

// --- Icons ---
const CalendarIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-400"
    >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m15 18-6-6 6-6" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

// --- Helpers ---
const formatDate = (date: Date) => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const isSameDay = (d1: Date | null, d2: Date | null) => {
    if (!d1 || !d2) return false;
    return d1.toDateString() === d2.toDateString();
};

const isToday = (date: Date) => {
    return isSameDay(date, new Date());
};

const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return (day + 6) % 7;
};

const startOfDay = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate());

// --- Presets (Updated to never exceed today) ---
const PRESETS = [
    {
        label: 'Today',
        getValue: () => {
            const d = startOfDay(new Date());
            return { from: d, to: new Date(d) };
        },
    },
    {
        label: 'Yesterday',
        getValue: () => {
            const d = new Date();
            d.setDate(d.getDate() - 1);
            const day = startOfDay(d);
            return { from: day, to: new Date(day) };
        },
    },
    {
        label: 'This week',
        getValue: () => {
            const today = new Date();
            const diffToMon = (today.getDay() + 6) % 7;
            const start = startOfDay(new Date(today));
            start.setDate(today.getDate() - diffToMon);
            const end = new Date(start);
            end.setDate(start.getDate() + 6);

            // Cap at today
            const cappedEnd = end > today ? startOfDay(today) : end;
            return { from: start, to: cappedEnd };
        },
    },
    {
        label: 'Last week',
        getValue: () => {
            const today = new Date();
            const diffToMon = (today.getDay() + 6) % 7;
            const start = startOfDay(new Date(today));
            start.setDate(today.getDate() - diffToMon - 7);
            const end = new Date(start);
            end.setDate(start.getDate() + 6);
            return { from: start, to: end };
        },
    },
    {
        label: 'This month',
        getValue: () => {
            const today = new Date();
            return {
                from: new Date(today.getFullYear(), today.getMonth(), 1),
                to: startOfDay(today), // Capped at today
            };
        },
    },
    {
        label: 'Last month',
        getValue: () => {
            const today = new Date();
            return {
                from: new Date(today.getFullYear(), today.getMonth() - 1, 1),
                to: new Date(today.getFullYear(), today.getMonth(), 0),
            };
        },
    },
    {
        label: 'This year',
        getValue: () => {
            const today = new Date();
            return {
                from: new Date(today.getFullYear(), 0, 1),
                to: startOfDay(today), // Capped at today
            };
        },
    },
    {
        label: 'Last year',
        getValue: () => {
            const today = new Date();
            return {
                from: new Date(today.getFullYear() - 1, 0, 1),
                to: new Date(today.getFullYear() - 1, 11, 31),
            };
        },
    },
    {
        label: 'All time',
        getValue: () => ({
            from: new Date(2020, 0, 1),
            to: startOfDay(new Date()),
        }),
    },
];

// --- Calendar Component ---
const Calendar = ({ year, month, selectedRange, onDateClick }: any) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days: { day: number; isCurrentMonth: boolean; date: Date }[] = [];
    const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
        days.push({
            day: prevMonthDays - i,
            isCurrentMonth: false,
            date: new Date(year, month - 1, prevMonthDays - i),
        });
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            day: i,
            isCurrentMonth: true,
            date: new Date(year, month, i),
        });
    }
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
        days.push({
            day: i,
            isCurrentMonth: false,
            date: new Date(year, month + 1, i),
        });
    }

    const isInRange = (date: Date) => {
        if (!selectedRange?.from || !selectedRange?.to) return false;
        return date >= selectedRange.from && date <= selectedRange.to;
    };
    const isRangeStart = (date: Date) =>
        selectedRange?.from && isSameDay(date, selectedRange.from);
    const isRangeEnd = (date: Date) =>
        selectedRange?.to && isSameDay(date, selectedRange.to);

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    // ─── MAGIC FIX: Define exactly what "Today" is at midnight ───
    const todayMidnight = startOfDay(new Date());

    return (
        <div className="flex-1">
            <div className="mb-4 flex items-center justify-center">
                <div className="text-sm font-semibold text-gray-900">
                    {monthNames[month]} {year}
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {weekDays.map((day) => (
                    <div
                        key={day}
                        className="pb-2 text-center text-xs font-medium text-gray-500"
                    >
                        {day}
                    </div>
                ))}
                {days.map((d, idx) => {
                    const isStart = isRangeStart(d.date);
                    const isEnd = isRangeEnd(d.date);
                    const inRange = isInRange(d.date) && !isStart && !isEnd;
                    const showToday = isToday(d.date);

                    // ─── MAGIC FIX: If the date is greater than today, disable it ───
                    const isDisabled = d.date > todayMidnight;

                    return (
                        <div key={idx} className="relative">
                            <button
                                onClick={() =>
                                    !isDisabled && onDateClick(d.date)
                                }
                                disabled={isDisabled}
                                className={`relative flex h-9 w-9 items-center justify-center rounded-full text-sm ${
                                    isDisabled
                                        ? 'cursor-not-allowed text-gray-200'
                                        : ''
                                } ${
                                    !isDisabled && !d.isCurrentMonth
                                        ? 'text-gray-300'
                                        : ''
                                } ${
                                    !isDisabled &&
                                    d.isCurrentMonth &&
                                    !isStart &&
                                    !isEnd
                                        ? 'text-gray-700'
                                        : ''
                                } ${
                                    isStart || isEnd
                                        ? 'z-10 bg-[#79B800] font-medium text-white'
                                        : ''
                                } ${
                                    inRange && !isDisabled ? 'bg-green-50' : ''
                                } ${
                                    !isStart &&
                                    !isEnd &&
                                    !inRange &&
                                    !isDisabled
                                        ? 'hover:bg-gray-100'
                                        : ''
                                } `}
                            >
                                {d.day}
                                {showToday && !isStart && !isEnd && (
                                    <div className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#79B800]" />
                                )}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// --- Main Component ---
interface Props {
    onClose?: () => void;
    onApply?: (range: { from: Date; to: Date }) => void;
}

export default function CustomDateRangePicker({ onClose, onApply }: Props) {
    const today = new Date();

    const [currentDate, setCurrentDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1),
    );
    const [selectedRange, setSelectedRange] = useState<{
        from: Date | null;
        to: Date | null;
    }>({
        from: null,
        to: null,
    });
    const [activePreset, setActivePreset] = useState<string | null>(null);

    const handlePresetClick = (preset: (typeof PRESETS)[0]) => {
        const range = preset.getValue();
        setActivePreset(preset.label);
        setSelectedRange({ from: range.from, to: range.to });
        setCurrentDate(
            new Date(range.from.getFullYear(), range.from.getMonth(), 1),
        );
    };

    const handleDateClick = (date: Date) => {
        setActivePreset(null);
        if (!selectedRange.from || (selectedRange.from && selectedRange.to)) {
            setSelectedRange({ from: date, to: null });
        } else if (date < selectedRange.from) {
            setSelectedRange({ from: date, to: selectedRange.from });
        } else {
            setSelectedRange({ from: selectedRange.from, to: date });
        }
    };

    const handleCancel = () => onClose?.();

    const handleApply = () => {
        if (selectedRange.from && selectedRange.to) {
            onApply?.({ from: selectedRange.from, to: selectedRange.to });
        }
        onClose?.();
    };

    const handlePrevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
        );
    };

    const handleNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
        );
    };

    const nextYear =
        currentDate.getMonth() === 11
            ? currentDate.getFullYear() + 1
            : currentDate.getFullYear();
    const nextMonth =
        currentDate.getMonth() === 11 ? 0 : currentDate.getMonth() + 1;

    return (
        <div className="inline-flex overflow-hidden rounded-2xl border border-gray-200 bg-white font-sans shadow-lg">
            {/* SIDEBAR */}
            <div className="flex w-44 flex-col gap-0.5 border-r border-gray-200 bg-white px-3 py-4">
                {PRESETS.map((preset) => (
                    <button
                        key={preset.label}
                        onClick={() => handlePresetClick(preset)}
                        className={`rounded-md px-3 py-2 text-left text-sm font-normal transition-colors ${
                            activePreset === preset.label
                                ? 'bg-[#F9F7FA] text-gray-900'
                                : 'text-gray-600 hover:bg-[#F9F7FA] hover:text-gray-900'
                        }`}
                    >
                        {preset.label}
                    </button>
                ))}
            </div>

            {/* MAIN CALENDAR AREA */}
            <div className="flex flex-col">
                <div className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                        <button
                            onClick={handlePrevMonth}
                            className="rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900"
                        >
                            <ChevronLeftIcon />
                        </button>

                        <div className="flex flex-1 justify-center gap-12">
                            <Calendar
                                year={currentDate.getFullYear()}
                                month={currentDate.getMonth()}
                                selectedRange={selectedRange}
                                onDateClick={handleDateClick}
                            />
                            <Calendar
                                year={nextYear}
                                month={nextMonth}
                                selectedRange={selectedRange}
                                onDateClick={handleDateClick}
                            />
                        </div>

                        <button
                            onClick={handleNextMonth}
                            className="rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900"
                        >
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50/50 px-6 py-4">
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            readOnly
                            value={
                                selectedRange?.from
                                    ? formatDate(selectedRange.from)
                                    : ''
                            }
                            className="w-36 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-lime-500 focus:outline-none"
                            placeholder="Start date"
                        />
                        <span className="text-sm text-gray-400">–</span>
                        <input
                            type="text"
                            readOnly
                            value={
                                selectedRange?.to
                                    ? formatDate(selectedRange.to)
                                    : ''
                            }
                            className="w-36 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-lime-500 focus:outline-none"
                            placeholder="End date"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <IconButton onClick={handleCancel}>Cancel</IconButton>
                        <Button
                            onClick={handleApply}
                            disabled={!selectedRange.from || !selectedRange.to}
                        >
                            Apply
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
