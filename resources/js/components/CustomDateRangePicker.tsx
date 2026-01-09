import React, { useState } from 'react';
import { DayPicker, DateRange, SelectRangeEventHandler } from 'react-day-picker';
import { 
  format, 
  subDays, 
  startOfWeek, 
  endOfWeek, 
  startOfMonth, 
  endOfMonth, 
  startOfYear, 
  subMonths, 
  subYears 
} from 'date-fns';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility for Tailwind classes ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Icons (Renamed to avoid conflict) ---
const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);
const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

// --- Presets Logic ---
const PRESETS = [
  { label: 'Today', getValue: () => ({ from: new Date(), to: new Date() }) },
  { label: 'Yesterday', getValue: () => ({ from: subDays(new Date(), 1), to: subDays(new Date(), 1) }) },
  { label: 'This week', getValue: () => ({ from: startOfWeek(new Date()), to: endOfWeek(new Date()) }) },
  { label: 'Last week', getValue: () => ({ from: subDays(startOfWeek(new Date()), 7), to: subDays(endOfWeek(new Date()), 7) }) },
  { label: 'This month', getValue: () => ({ from: startOfMonth(new Date()), to: endOfMonth(new Date()) }) },
  { label: 'Last month', getValue: () => ({ from: startOfMonth(subMonths(new Date(), 1)), to: endOfMonth(subMonths(new Date(), 1)) }) },
  { label: 'This year', getValue: () => ({ from: startOfYear(new Date()), to: new Date() }) },
  { label: 'Last year', getValue: () => ({ from: startOfYear(subYears(new Date(), 1)), to: new Date(subYears(new Date(), 1).getFullYear(), 11, 31) }) },
  { label: 'All time', getValue: () => ({ from: new Date(2020, 0, 1), to: new Date() }) },
];

interface CustomDateRangePickerProps {
    onClose?: () => void;
}

export default function CustomDateRangePicker({ onClose }: CustomDateRangePickerProps) {
  // Default selection: Jan 10 - Jan 16 (matching your design)
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 10), 
    to: new Date(2025, 0, 16),
  });

  const [activePreset, setActivePreset] = useState<string | null>('Last week');

  const handlePresetClick = (preset: typeof PRESETS[0]) => {
    setActivePreset(preset.label);
    setSelectedRange(preset.getValue());
  };

  const handleRangeSelect: SelectRangeEventHandler = (range) => {
    setActivePreset(null);
    setSelectedRange(range);
  };

  return (
    <div className="inline-flex bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden font-sans">
      
      {/* --- SIDEBAR --- */}
      <div className="w-48 flex flex-col border-r border-gray-100 py-6 px-4 gap-1">
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => handlePresetClick(preset)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium rounded-lg text-left transition-colors",
              activePreset === preset.label
                ? "bg-gray-50 text-gray-900" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* --- MAIN CALENDAR AREA --- */}
      <div className="flex flex-col">
        <div className="p-8">
          <style>{`
            .rdp-root { margin: 0; }
            .rdp-nav_button { color: #9CA3AF; } 
            .rdp-nav_button:hover { color: #111827; }
            .rdp-caption_label { 
              font-size: 1rem; font-weight: 600; color: #4B5563; text-transform: capitalize;
            }
            .rdp-head_cell { 
              color: #6B7280; font-weight: 500; font-size: 0.875rem; padding-bottom: 16px;
            }
            .rdp-day { 
              width: 40px; height: 40px; font-size: 0.9rem; color: #374151;
            }
            .rdp-day:hover:not(.rdp-day_selected):not(.rdp-selected) { 
              background-color: #F3F4F6; border-radius: 50%;
            }

            /* --- RANGE STYLING (Updated for v9 compatibility) --- */
            
            /* Middle of range (Light Gray) */
            .rdp-day_selected:not(.rdp-day_range_start):not(.rdp-day_range_end),
            .rdp-selected:not(.rdp-range_start):not(.rdp-range_end) {
              background-color: #F3F4F6 !important; color: #111827; border-radius: 0;
            }
            
            /* Start of range (Green Circle) */
            .rdp-day_range_start, .rdp-range_start {
              background-color: #79B800 !important; color: white !important; border-radius: 50% !important; position: relative; z-index: 10;
            }
            
            /* Connector behind Start */
            .rdp-day_range_start:not(.rdp-day_range_end)::after,
            .rdp-range_start:not(.rdp-range_end)::after {
              content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 50%; background-color: #F3F4F6; z-index: -1;
            }
            
            /* End of range (Green Circle) */
            .rdp-day_range_end, .rdp-range_end {
              background-color: #79B800 !important; color: white !important; border-radius: 50% !important; position: relative; z-index: 10;
            }
            
            /* Connector behind End */
            .rdp-day_range_end:not(.rdp-day_range_start)::before,
            .rdp-range_end:not(.rdp-range_start)::before {
              content: ''; position: absolute; top: 0; left: 0; bottom: 0; right: 50%; background-color: #F3F4F6; z-index: -1;
            }
          `}</style>

          <DayPicker
            mode="range"
            selected={selectedRange}
            onSelect={handleRangeSelect}
            numberOfMonths={2}
            pagedNavigation
            showOutsideDays={false}
            classNames={{
              months: "flex gap-8",
              table: "w-full border-collapse",
            }}
            // FIX: Use ChevronLeft and ChevronRight keys for Version 9
            components={{
                ChevronLeft: () => <ChevronLeftIcon />,
                ChevronRight: () => <ChevronRightIcon />,
            }}
          />
        </div>

        {/* --- FOOTER --- */}
        <div className="flex items-center justify-between px-8 py-6 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                readOnly
                value={selectedRange?.from ? format(selectedRange.from, 'MMM dd, yyyy') : ''}
                className="w-40 py-2.5 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#79B800]"
              />
            </div>
            <span className="text-gray-300 text-xl font-light">–</span>
            <div className="relative">
              <input 
                type="text" 
                readOnly
                value={selectedRange?.to ? format(selectedRange.to, 'MMM dd, yyyy') : ''}
                className="w-40 py-2.5 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#79B800]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
                onClick={() => onClose?.()}
                className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
                onClick={() => {
                    onClose?.();
                }}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-[#79B800] rounded-lg hover:bg-[#65a30d] transition-colors shadow-sm"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}