import React, { useState, useRef, useEffect } from 'react';
import CustomDateRangePicker from './CustomDateRangePicker'; // Ensure path is correct

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

export default function DateRangeButton() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`
          flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all
          ${isOpen ? 'border-[#79B800] ring-1 ring-[#79B800]' : 'border-gray-300 hover:bg-gray-50'}
          text-gray-700
        `}
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