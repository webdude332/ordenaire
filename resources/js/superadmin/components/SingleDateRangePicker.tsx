import { useEffect, useRef, useState } from 'react';
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
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m15 18-6-6 6-6" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

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

const formatDate = (date: Date) =>
    `${monthNames[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`;

const startOfDay = (d: Date) => {
    const c = new Date(d);
    c.setHours(0, 0, 0, 0);
    return c;
};

interface Props {
    onApply?: (date: Date) => void;
    onClose?: () => void;
    allowFuture?: boolean; // ← expiry mode: future dates enabled, past dates disabled
    openUpward?: boolean; // ← opens dropdown above the trigger
    className?: string; // ─── NEW: Added className prop for sizing
}

const SingleDatePicker = ({
    onApply,
    onClose,
    allowFuture = false,
    openUpward = false,
    className = '', // ─── Default to empty string
}: Props) => {
    const today = startOfDay(new Date());

    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(today);
    const [committedDate, setCommittedDate] = useState<Date>(today);
    const [viewDate, setViewDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1),
    );
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                handleCancel();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [committedDate]);

    const handleOpen = () => {
        setSelectedDate(committedDate);
        setViewDate(
            new Date(committedDate.getFullYear(), committedDate.getMonth(), 1),
        );
        setIsOpen(true);
    };

    const handleCancel = () => {
        setSelectedDate(committedDate);
        setIsOpen(false);
        onClose?.();
    };

    const handleApply = () => {
        setCommittedDate(selectedDate);
        setIsOpen(false);
        onApply?.(selectedDate);
        onClose?.();
    };

    const handleTodayClick = () => {
        setSelectedDate(today);
        setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
    };

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const days: { day: number; current: boolean; date: Date }[] = [];

    for (let i = firstDay - 1; i >= 0; i--)
        days.push({
            day: prevMonthDays - i,
            current: false,
            date: new Date(year, month - 1, prevMonthDays - i),
        });

    for (let i = 1; i <= daysInMonth; i++)
        days.push({ day: i, current: true, date: new Date(year, month, i) });

    while (days.length < 42)
        days.push({
            day: days.length - daysInMonth - firstDay + 1,
            current: false,
            date: new Date(
                year,
                month + 1,
                days.length - daysInMonth - firstDay + 1,
            ),
        });

    return (
        <div
            // ─── Applied className here. Defaults to max-w-[240px] if no class is passed ───
            className={`relative inline-block w-full ${className || 'max-w-[240px]'}`}
            ref={containerRef}
        >
            {/* TRIGGER */}
            <div
                onClick={handleOpen}
                className={`flex cursor-pointer items-center justify-between rounded-lg border bg-white px-3 py-2 transition-all ${isOpen ? 'border-[#79B800] ring-2 ring-lime-50' : 'border-gray-200 hover:border-gray-300'}`}
            >
                <span className="text-[14px] font-medium text-gray-700 select-none">
                    {formatDate(committedDate)}
                </span>
                <CalendarIcon />
            </div>

            {/* DROPDOWN */}
            {isOpen && (
                <div
                    className={`absolute left-0 z-50 w-[310px] rounded-[20px] border border-gray-100 bg-white p-4 shadow-2xl ${
                        openUpward
                            ? 'bottom-full mb-2' // ← opens upward
                            : 'top-full mt-2' // ← default: opens downward
                    }`}
                >
                    {/* DATE INPUT + TODAY BUTTON */}
                    <div className="mb-4 flex items-center gap-2">
                        <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                            <span className="flex-1 text-[13px] font-medium text-gray-700 select-none">
                                {formatDate(selectedDate)}
                            </span>
                        </div>
                        <button
                            onClick={handleTodayClick}
                            className="rounded-lg border border-gray-200 px-3 py-2 text-[13px] font-medium whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            Today
                        </button>
                    </div>

                    {/* MONTH NAVIGATION */}
                    <div className="mb-3 flex items-center justify-between px-1">
                        <button
                            onClick={() =>
                                setViewDate(new Date(year, month - 1, 1))
                            }
                            className="cursor-pointer rounded p-1 text-gray-300 transition-colors hover:text-gray-600"
                        >
                            <ChevronLeftIcon />
                        </button>
                        <span className="text-[14px] font-bold text-gray-700 select-none">
                            {monthNames[month]} {year}
                        </span>
                        <button
                            onClick={() =>
                                setViewDate(new Date(year, month + 1, 1))
                            }
                            className="cursor-pointer rounded p-1 text-gray-300 transition-colors hover:text-gray-600"
                        >
                            <ChevronRightIcon />
                        </button>
                    </div>

                    {/* CALENDAR GRID */}
                    <div className="mb-1 grid grid-cols-7">
                        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
                            <div
                                key={d}
                                className="py-1 text-center text-[11px] font-bold text-gray-400 select-none"
                            >
                                {d}
                            </div>
                        ))}

                        {days.map((item, idx) => {
                            const isSelected =
                                selectedDate.toDateString() ===
                                item.date.toDateString();
                            const isDateToday =
                                today.toDateString() ===
                                item.date.toDateString();

                            // ── Disabled logic ──────────────────────────────────
                            // allowFuture (expiry mode): disable past dates
                            // default mode:              disable future dates
                            const isDisabled = allowFuture
                                ? item.date < today // expiry: past is disabled
                                : item.date > today; // default: future is disabled

                            return (
                                <button
                                    key={idx}
                                    disabled={isDisabled}
                                    onClick={() =>
                                        setSelectedDate(startOfDay(item.date))
                                    }
                                    className={`relative mx-auto flex h-9 w-9 items-center justify-center rounded-full text-[13px] transition-all outline-none ${isDisabled ? 'cursor-not-allowed text-gray-200' : 'cursor-pointer'} ${!item.current && !isDisabled ? 'text-gray-300 hover:bg-gray-50' : ''} ${item.current && !isSelected && !isDisabled ? 'text-gray-700 hover:bg-gray-50' : ''} ${isSelected ? 'bg-[#79B800] font-bold !text-white shadow-sm' : ''} `}
                                >
                                    <span className="relative z-10">
                                        {item.day}
                                    </span>
                                    {isDateToday && !isSelected && (
                                        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#79B800]" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* FOOTER */}
                    <div className="mt-2 flex gap-2 border-t border-gray-100 pt-3">
                        <IconButton onClick={handleCancel}>Cancel</IconButton>
                        <Button onClick={handleApply}>Apply</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleDatePicker;
