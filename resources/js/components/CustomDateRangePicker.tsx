// // import React, { useState } from 'react';
// // import { DayPicker, DateRange, SelectRangeEventHandler } from 'react-day-picker';
// // import { 
// //   format, 
// //   subDays, 
// //   startOfWeek, 
// //   endOfWeek, 
// //   startOfMonth, 
// //   endOfMonth, 
// //   startOfYear, 
// //   subMonths, 
// //   subYears 
// // } from 'date-fns';
// // import { clsx, type ClassValue } from 'clsx';
// // import { twMerge } from 'tailwind-merge';

// // // --- Utility for Tailwind classes ---
// // function cn(...inputs: ClassValue[]) {
// //   return twMerge(clsx(inputs));
// // }

// // // --- Icons (Renamed to avoid conflict) ---
// // const ChevronLeftIcon = () => (
// //   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
// //     <path d="m15 18-6-6 6-6"/>
// //   </svg>
// // );
// // const ChevronRightIcon = () => (
// //   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
// //     <path d="m9 18 6-6-6-6"/>
// //   </svg>
// // );

// // // --- Presets Logic ---
// // const PRESETS = [
// //   { label: 'Today', getValue: () => ({ from: new Date(), to: new Date() }) },
// //   { label: 'Yesterday', getValue: () => ({ from: subDays(new Date(), 1), to: subDays(new Date(), 1) }) },
// //   { label: 'This week', getValue: () => ({ from: startOfWeek(new Date()), to: endOfWeek(new Date()) }) },
// //   { label: 'Last week', getValue: () => ({ from: subDays(startOfWeek(new Date()), 7), to: subDays(endOfWeek(new Date()), 7) }) },
// //   { label: 'This month', getValue: () => ({ from: startOfMonth(new Date()), to: endOfMonth(new Date()) }) },
// //   { label: 'Last month', getValue: () => ({ from: startOfMonth(subMonths(new Date(), 1)), to: endOfMonth(subMonths(new Date(), 1)) }) },
// //   { label: 'This year', getValue: () => ({ from: startOfYear(new Date()), to: new Date() }) },
// //   { label: 'Last year', getValue: () => ({ from: startOfYear(subYears(new Date(), 1)), to: new Date(subYears(new Date(), 1).getFullYear(), 11, 31) }) },
// //   { label: 'All time', getValue: () => ({ from: new Date(2020, 0, 1), to: new Date() }) },
// // ];

// // interface CustomDateRangePickerProps {
// //     onClose?: () => void;
// // }

// // export default function CustomDateRangePicker({ onClose }: CustomDateRangePickerProps) {
// //   // Default selection: Jan 10 - Jan 16 (matching your design)
// //   const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
// //     from: new Date(2025, 0, 10), 
// //     to: new Date(2025, 0, 16),
// //   });

// //   const [activePreset, setActivePreset] = useState<string | null>('Last week');

// //   const handlePresetClick = (preset: typeof PRESETS[0]) => {
// //     setActivePreset(preset.label);
// //     setSelectedRange(preset.getValue());
// //   };

// //   const handleRangeSelect: SelectRangeEventHandler = (range) => {
// //     setActivePreset(null);
// //     setSelectedRange(range);
// //   };

// //   return (
// //     <div className="inline-flex bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden font-sans">
      
// //       {/* --- SIDEBAR --- */}
// //       <div className="w-48 flex flex-col border-r border-gray-100 py-6 px-4 gap-1">
// //         {PRESETS.map((preset) => (
// //           <button
// //             key={preset.label}
// //             onClick={() => handlePresetClick(preset)}
// //             className={cn(
// //               "px-4 py-2.5 text-sm font-medium rounded-lg text-left transition-colors",
// //               activePreset === preset.label
// //                 ? "bg-gray-50 text-gray-900" 
// //                 : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
// //             )}
// //           >
// //             {preset.label}
// //           </button>
// //         ))}
// //       </div>

// //       {/* --- MAIN CALENDAR AREA --- */}
// //       <div className="flex flex-col">
// //         <div className="p-8">
// //           <style>{`
// //             .rdp-root { margin: 0; }
// //             .rdp-nav_button { color: #9CA3AF; } 
// //             .rdp-nav_button:hover { color: #111827; }
// //             .rdp-caption_label { 
// //               font-size: 1rem; font-weight: 600; color: #4B5563; text-transform: capitalize;
// //             }
// //             .rdp-head_cell { 
// //               color: #6B7280; font-weight: 500; font-size: 0.875rem; padding-bottom: 16px;
// //             }
// //             .rdp-day { 
// //               width: 40px; height: 40px; font-size: 0.9rem; color: #374151;
// //             }
// //             .rdp-day:hover:not(.rdp-day_selected):not(.rdp-selected) { 
// //               background-color: #F3F4F6; border-radius: 50%;
// //             }

// //             /* --- RANGE STYLING (Updated for v9 compatibility) --- */
            
// //             /* Middle of range (Light Gray) */
// //             .rdp-day_selected:not(.rdp-day_range_start):not(.rdp-day_range_end),
// //             .rdp-selected:not(.rdp-range_start):not(.rdp-range_end) {
// //               background-color: #F3F4F6 !important; color: #111827; border-radius: 0;
// //             }
            
// //             /* Start of range (Green Circle) */
// //             .rdp-day_range_start, .rdp-range_start {
// //               background-color: #79B800 !important; color: white !important; border-radius: 50% !important; position: relative; z-index: 10;
// //             }
            
// //             /* Connector behind Start */
// //             .rdp-day_range_start:not(.rdp-day_range_end)::after,
// //             .rdp-range_start:not(.rdp-range_end)::after {
// //               content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 50%; background-color: #F3F4F6; z-index: -1;
// //             }
            
// //             /* End of range (Green Circle) */
// //             .rdp-day_range_end, .rdp-range_end {
// //               background-color: #79B800 !important; color: white !important; border-radius: 50% !important; position: relative; z-index: 10;
// //             }
            
// //             /* Connector behind End */
// //             .rdp-day_range_end:not(.rdp-day_range_start)::before,
// //             .rdp-range_end:not(.rdp-range_start)::before {
// //               content: ''; position: absolute; top: 0; left: 0; bottom: 0; right: 50%; background-color: #F3F4F6; z-index: -1;
// //             }
// //           `}</style>

// //           <DayPicker
// //             mode="range"
// //             selected={selectedRange}
// //             onSelect={handleRangeSelect}
// //             numberOfMonths={2}
// //             pagedNavigation
// //             showOutsideDays={false}
// //             classNames={{
// //               months: "flex gap-8",
// //               table: "w-full border-collapse",
// //             }}
// //             // FIX: Use ChevronLeft and ChevronRight keys for Version 9
// //             components={{
// //                 ChevronLeft: () => <ChevronLeftIcon />,
// //                 ChevronRight: () => <ChevronRightIcon />,
// //             }}
// //           />
// //         </div>

// //         {/* --- FOOTER --- */}
// //         <div className="flex items-center justify-between px-8 py-6 border-t border-gray-100">
// //           <div className="flex items-center gap-4">
// //             <div className="relative">
// //               <input 
// //                 type="text" 
// //                 readOnly
// //                 value={selectedRange?.from ? format(selectedRange.from, 'MMM dd, yyyy') : ''}
// //                 className="w-40 py-2.5 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#79B800]"
// //               />
// //             </div>
// //             <span className="text-gray-300 text-xl font-light">–</span>
// //             <div className="relative">
// //               <input 
// //                 type="text" 
// //                 readOnly
// //                 value={selectedRange?.to ? format(selectedRange.to, 'MMM dd, yyyy') : ''}
// //                 className="w-40 py-2.5 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#79B800]"
// //               />
// //             </div>
// //           </div>

// //           <div className="flex items-center gap-3">
// //             <button 
// //                 onClick={() => onClose?.()}
// //                 className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //             >
// //               Cancel
// //             </button>
// //             <button 
// //                 onClick={() => {
// //                     onClose?.();
// //                 }}
// //                 className="px-6 py-2.5 text-sm font-semibold text-white bg-[#79B800] rounded-lg hover:bg-[#65a30d] transition-colors shadow-sm"
// //             >
// //               Apply
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }








// // single date picker
// import React, { useState } from 'react';
// import { 
//   DayPicker, 
//   SelectSingleEventHandler
// } from 'react-day-picker';
// import { 
//   format, 
//   addMonths, 
//   subMonths
// } from 'date-fns';
// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// // --- Utility for Tailwind classes ---
// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// // --- Icons ---
// const ChevronLeftIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
//     <path d="m15 18-6-6 6-6"/>
//   </svg>
// );
// const ChevronRightIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
//     <path d="m9 18 6-6-6-6"/>
//   </svg>
// );

// interface CustomDateRangePickerProps {
//     onClose?: () => void;
// }

// export default function CustomDateRangePicker({ onClose }: CustomDateRangePickerProps) {
//   // Default selection: Jan 23, 2025
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date(2025, 0, 23));
//   const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2025, 0, 1)); 

//   // Define dates that should have a dot
//   const dotDates = [
//     new Date(2025, 0, 1),
//     new Date(2025, 0, 15),
//     new Date(2025, 0, 30)
//   ];

//   // --- HANDLERS ---
//   const handleSingleSelect: SelectSingleEventHandler = (date) => {
//     setSelectedDate(date);
//   };

//   const handleTodayClick = () => {
//     const today = new Date();
//     setSelectedDate(today);
//     setCurrentMonth(today); 
//   };

//   const handlePrevMonth = () => setCurrentMonth(prev => subMonths(prev, 1));
//   const handleNextMonth = () => setCurrentMonth(prev => addMonths(prev, 1));

//   return (
//     <div className="inline-flex bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden font-sans">
      
//       {/* --- MAIN CALENDAR AREA --- */}
//       <div className="flex flex-col w-[400px]">
        
//         {/* --- HEADER --- */}
//         <div className="pt-6 px-6">
//             {/* 1. Month Navigation */}
//             <div className="flex items-center justify-between mb-5">
//                 <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
//                     <ChevronLeftIcon />
//                 </button>
//                 <span className="text-lg font-bold text-gray-800 select-none">
//                     {format(currentMonth, 'MMMM yyyy')}
//                 </span>
//                 <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
//                     <ChevronRightIcon />
//                 </button>
//             </div>

//             {/* 2. Input and Today Button */}
//             <div className="flex gap-3 mb-6">
//                 <div className="relative flex-1">
//                     <input 
//                         type="text" 
//                         readOnly
//                         placeholder="Select date"
//                         value={selectedDate ? format(selectedDate, 'MMM dd, yyyy') : ''}
//                         className="w-full py-2.5 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#79B800] transition-colors"
//                     />
//                 </div>
//                 <button 
//                     onClick={handleTodayClick}
//                     className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
//                 >
//                     Today
//                 </button>
//             </div>
//         </div>

//         <div className="px-6 pb-4">
//           <style>{`
//             .rdp-root { 
//               margin: 0; 
//               --rdp-cell-size: 44px;
//               --rdp-accent-color: #79B800;
//             }
            
//             /* Hide Default Header/Caption */
//             .rdp-caption, .rdp-caption_label, .rdp-nav { 
//               display: none !important; 
//             } 
            
//             /* Table */
//             .rdp-table {
//               width: 100%;
//               max-width: 100%;
//             }

//             /* Header Cells (Mo, Tu, We...) */
//             .rdp-head_cell { 
//               color: #000000; 
//               font-weight: 600; 
//               font-size: 0.875rem; 
//               padding-bottom: 12px;
//               width: 44px;
//               height: auto;
//               text-align: center;
//             }

//             /* Day Button Base */
//             .rdp-day_button { 
//               width: 44px !important; 
//               height: 44px !important; 
//               font-size: 0.9375rem; 
//               color: #1F2937;
//               font-weight: 500;
//               border: none;
//               background: transparent;
//               border-radius: 50%;
//               cursor: pointer;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               position: relative;
//             }

//             /* Hover State */
//             .rdp-day_button:hover:not([disabled]):not(.rdp-day_selected .rdp-day_button) { 
//               background-color: #F3F4F6; 
//             }

//             /* Outside month days */
//             .rdp-outside .rdp-day_button {
//               color: #D1D5DB;
//             }

//             /* Selected State - Perfect Circle with Green Background */
//             .rdp-day_selected .rdp-day_button {
//               background-color: #79B800 !important; 
//               color: white !important; 
//               font-weight: 600 !important;
//             }
            
//             .rdp-day_selected .rdp-day_button:hover {
//               background-color: #6BA000 !important;
//             }

//             /* Dot Styling */
//             .has-dot .rdp-day_button::after {
//               content: '';
//               position: absolute;
//               bottom: 4px; 
//               left: 50%;
//               transform: translateX(-50%);
//               width: 3px;
//               height: 3px;
//               background-color: #79B800;
//               border-radius: 50%;
//             }
            
//             /* Hide dot on selected date */
//             .rdp-day_selected.has-dot .rdp-day_button::after {
//               display: none;
//             }

//             /* Disabled days */
//             .rdp-day_button:disabled {
//               opacity: 0.5;
//               cursor: not-allowed;
//             }
//           `}</style>

//           <DayPicker
//             mode="single"
//             selected={selectedDate}
//             onSelect={handleSingleSelect}
//             month={currentMonth}
//             onMonthChange={setCurrentMonth}
//             numberOfMonths={1}
//             showOutsideDays={true}
//             weekStartsOn={1}
//             classNames={{
//               months: "flex flex-col",
//               month: "space-y-4",
//               table: "w-full border-collapse space-y-1",
//               head_row: "flex justify-between",
//               row: "flex justify-between w-full mt-2"
//             }}
//             modifiers={{
//               hasDot: dotDates
//             }}
//             modifiersClassNames={{
//               hasDot: 'has-dot'
//             }}
//           />
//         </div>

//         {/* --- FOOTER --- */}
//         <div className="flex items-center justify-between px-6 py-5 border-t border-gray-100 gap-3">
//             <button 
//                 onClick={() => onClose?.()}
//                 className="flex-1 px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
//             >
//               Cancel
//             </button>
//             <button 
//                 onClick={() => onClose?.()}
//                 className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-[#79B800] rounded-xl hover:bg-[#6BA000] transition-colors shadow-sm"
//             >
//               Apply
//             </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

const ChevronLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

// Helper functions
const formatDate = (date: Date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
  return new Date(year, month, 1).getDay();
};

const PRESETS = [
  { label: 'Today', getValue: () => ({ from: new Date(), to: new Date() }) },
  { 
    label: 'Yesterday', 
    getValue: () => {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      return { from: d, to: new Date(d) };
    }
  },
  { 
    label: 'This week', 
    getValue: () => {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const start = new Date(today);
      start.setDate(today.getDate() - dayOfWeek);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return { from: start, to: end };
    }
  },
  { 
    label: 'Last week', 
    getValue: () => {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const start = new Date(today);
      start.setDate(today.getDate() - dayOfWeek - 7);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return { from: start, to: end };
    }
  },
  { 
    label: 'This month', 
    getValue: () => {
      const today = new Date();
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      return { from: start, to: end };
    }
  },
  { 
    label: 'Last month', 
    getValue: () => {
      const today = new Date();
      const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const end = new Date(today.getFullYear(), today.getMonth(), 0);
      return { from: start, to: end };
    }
  },
  { 
    label: 'This year', 
    getValue: () => {
      const today = new Date();
      return { from: new Date(today.getFullYear(), 0, 1), to: today };
    }
  },
  { 
    label: 'Last year', 
    getValue: () => {
      const today = new Date();
      return { 
        from: new Date(today.getFullYear() - 1, 0, 1), 
        to: new Date(today.getFullYear() - 1, 11, 31) 
      };
    }
  },
  { label: 'All time', getValue: () => ({ from: new Date(2020, 0, 1), to: new Date() }) },
];

const Calendar = ({ year, month, selectedRange, onDateClick }: any) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days = [];
  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  // Previous month days
  const prevMonthDays = getDaysInMonth(year, month - 1);
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      date: new Date(year, month - 1, prevMonthDays - i)
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      isCurrentMonth: true,
      date: new Date(year, month, i)
    });
  }

  // Next month days to fill the grid
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      day: i,
      isCurrentMonth: false,
      date: new Date(year, month + 1, i)
    });
  }

  const isInRange = (date: Date) => {
    if (!selectedRange?.from || !selectedRange?.to) return false;
    return date >= selectedRange.from && date <= selectedRange.to;
  };

  const isRangeStart = (date: Date) => {
    return selectedRange?.from && isSameDay(date, selectedRange.from);
  };

  const isRangeEnd = (date: Date) => {
    return selectedRange?.to && isSameDay(date, selectedRange.to);
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="flex-1">
      <div className="flex items-center justify-center mb-4">
        <div className="text-sm font-semibold text-gray-900">{monthNames[month]} {year}</div>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 pb-2">
            {day}
          </div>
        ))}
        
        {days.map((d, idx) => {
          const isStart = isRangeStart(d.date);
          const isEnd = isRangeEnd(d.date);
          const inRange = isInRange(d.date) && !isStart && !isEnd;
          const showToday = isToday(d.date);
          
          return (
            <div key={idx} className="relative">
              <button
                onClick={() => onDateClick(d.date)}
                className={`
                  w-9 h-9 text-sm rounded-full flex items-center justify-center relative
                  ${!d.isCurrentMonth ? 'text-gray-300' : 'text-gray-700'}
                  ${isStart || isEnd ? 'bg-lime-500 text-white font-medium z-10' : ''}
                  ${inRange ? 'bg-green-50' : ''}
                  ${!isStart && !isEnd && !inRange ? 'hover:bg-gray-100' : ''}
                `}
              >
                {d.day}
                {showToday && !isStart && !isEnd && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-lime-500 rounded-full"></div>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function CustomDateRangePicker() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1));
  const [selectedRange, setSelectedRange] = useState<{from: Date | null, to: Date | null}>({
    from: new Date(2025, 0, 10),
    to: new Date(2025, 0, 16)
  });
  const [activePreset, setActivePreset] = useState<string | null>('Last week');

  const handlePresetClick = (preset: typeof PRESETS[0]) => {
    setActivePreset(preset.label);
    const range = preset.getValue();
    setSelectedRange({ from: range.from, to: range.to });
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

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="inline-flex bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden font-sans">
      
      {/* SIDEBAR */}
      <div className="w-44 flex flex-col border-r border-gray-200 py-4 px-3 gap-0.5 bg-gray-50">
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => handlePresetClick(preset)}
            className={`
              px-3 py-2 text-sm font-normal rounded-md text-left transition-colors
              ${activePreset === preset.label 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:bg-white hover:text-gray-900'
              }
            `}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* MAIN CALENDAR AREA */}
      <div className="flex flex-col">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <button 
              onClick={handlePrevMonth}
              className="p-1 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronLeftIcon />
            </button>
            
            <div className="flex gap-12 flex-1 justify-center">
              <Calendar 
                year={currentDate.getFullYear()}
                month={currentDate.getMonth()}
                selectedRange={selectedRange}
                onDateClick={handleDateClick}
              />
              <Calendar 
                year={currentDate.getMonth() === 11 ? currentDate.getFullYear() + 1 : currentDate.getFullYear()}
                month={currentDate.getMonth() === 11 ? 0 : currentDate.getMonth() + 1}
                selectedRange={selectedRange}
                onDateClick={handleDateClick}
              />
            </div>
            
            <button 
              onClick={handleNextMonth}
              className="p-1 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <input 
              type="text" 
              readOnly
              value={selectedRange?.from ? formatDate(selectedRange.from) : ''}
              className="w-36 py-2 px-3 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
              placeholder="Start date"
            />
            <span className="text-gray-400 text-sm">–</span>
            <input 
              type="text" 
              readOnly
              value={selectedRange?.to ? formatDate(selectedRange.to) : ''}
              className="w-36 py-2 px-3 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
              placeholder="End date"
            />
          </div>

          <div className="flex items-center gap-2">
            <button 
              className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              className="px-5 py-2 text-sm font-medium text-white bg-lime-500 rounded-lg hover:bg-lime-600 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}