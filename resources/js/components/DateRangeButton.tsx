import Calender from '@/images/icons/calendar.svg?react';
import { useEffect, useRef, useState } from 'react';
import CustomDateRangePicker from './CustomDateRangePicker'; // Ensure path is correct

const CalendarIcon = () => <Calender className="h-5 w-5" />;

export default function DateRangeButton() {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={popoverRef}>
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`flex cursor-pointer items-center gap-2 rounded-lg border bg-white px-4 py-2.5 text-sm font-medium shadow-sm transition-all ${isOpen ? 'border-[#79B800] ring-1 ring-[#79B800]' : 'border-gray-300 hover:bg-gray-50'} text-gray-700`}
            >
                <CalendarIcon />
                <span>Date-range</span>
            </button>

            {/* Popover */}
            {isOpen && (
                <div className="absolute right-0 z-50 mt-2 origin-top-right">
                    <CustomDateRangePicker onClose={() => setIsOpen(false)} />
                </div>
            )}
        </div>
    );
}
