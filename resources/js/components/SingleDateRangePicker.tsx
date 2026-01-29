// import React, { useState } from 'react';

// // --- Icons (Matching your style) ---
// const ChevronLeftIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="m15 18-6-6 6-6"/>
//   </svg>
// );

// const ChevronRightIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="m9 18 6-6-6-6"/>
//   </svg>
// );

// // --- Component ---
// export default function SingleDatePicker() {
//   const today = new Date();
//   // State for the month the user is viewing
//   const [viewDate, setViewDate] = useState(new Date(2025, 0, 1)); 
//   // State for the specific clicked date
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 0, 10));

//   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

//   // Navigation Logic
//   const handlePrevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
//   const handleNextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
//   const handleToday = () => {
//     const now = new Date();
//     setViewDate(new Date(now.getFullYear(), now.getMonth(), 1));
//     setSelectedDate(now);
//   };

//   // Calendar Grid Math
//   const year = viewDate.getFullYear();
//   const month = viewDate.getMonth();
  
//   // Calculate start of month (Adjusted for Monday start)
//   const firstDayOfMonth = new Date(year, month, 1).getDay();
//   const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; 
  
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const daysInPrevMonth = new Date(year, month, 0).getDate();

//   const days = [];
//   // Fill Previous Month Days
//   for (let i = startOffset - 1; i >= 0; i--) {
//     days.push({ day: daysInPrevMonth - i, current: false, date: new Date(year, month - 1, daysInPrevMonth - i) });
//   }
//   // Fill Current Month Days
//   for (let i = 1; i <= daysInMonth; i++) {
//     days.push({ day: i, current: true, date: new Date(year, month, i) });
//   }
//   // Fill Next Month Days
//   while (days.length < 42) {
//     const nextDay = days.length - daysInMonth - startOffset + 1;
//     days.push({ day: nextDay, current: false, date: new Date(year, month + 1, nextDay) });
//   }

//   const isSameDay = (d1: Date, d2: Date) => d1.toDateString() === d2.toDateString();

//   return (
//     <div className="w-[380px] bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden font-sans p-7">
      
//       {/* Month Header */}
//       <div className="flex items-center justify-between mb-6 px-2">
//         <button onClick={handlePrevMonth} className="p-2 text-gray-300 hover:text-gray-600 transition-colors">
//           <ChevronLeftIcon />
//         </button>
//         <span className="text-[18px] font-bold text-[#555b6d]">
//           {monthNames[month]} {year}
//         </span>
//         <button onClick={handleNextMonth} className="p-2 text-gray-300 hover:text-gray-600 transition-colors">
//           <ChevronRightIcon />
//         </button>
//       </div>

//       {/* Input Field Row */}
//       <div className="flex gap-3 mb-8">
//         <div className="relative flex-1">
//           <input 
//             type="text" 
//             readOnly 
//             value={`${monthNames[selectedDate.getMonth()].slice(0,3)} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`}
//             className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[16px] text-gray-700 focus:outline-none focus:border-[#79B800] transition-all"
//           />
//         </div>
//         <button 
//           onClick={handleToday}
//           className="px-6 py-3 border border-gray-200 rounded-xl text-[16px] font-bold text-gray-800 hover:bg-gray-50 transition-all active:scale-95"
//         >
//           Today
//         </button>
//       </div>

//       {/* Weekday Labels */}
//       <div className="grid grid-cols-7 mb-2">
//         {weekDays.map(d => (
//           <div key={d} className="text-center text-[14px] font-medium text-gray-500 py-2">{d}</div>
//         ))}
//       </div>

//       {/* Days Grid */}
//       <div className="grid grid-cols-7 gap-y-1 mb-8">
//         {days.map((item, idx) => {
//           const isSelected = isSameDay(item.date, selectedDate);
//           const isCurrentToday = isSameDay(item.date, today);
          
//           return (
//             <div key={idx} className="relative flex items-center justify-center">
//               <button
//                 onClick={() => setSelectedDate(item.date)}
//                 className={`
//                   relative h-11 w-11 flex items-center justify-center text-[15px] rounded-full transition-all
//                   ${!item.current ? 'text-gray-300' : 'text-gray-700'}
//                   ${isSelected ? 'bg-[#79B800] !text-white font-bold z-10' : 'hover:bg-gray-100'}
//                 `}
//               >
//                 {item.day}
//                 {/* The "Today" Green Dot (as seen on the 30th and 1st in your image) */}
//                 {isCurrentToday && !isSelected && (
//                   <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#79B800] rounded-full" />
//                 )}
//                 {/* Example of other dots from your UI (like Jan 1st) */}
//                 {isSameDay(item.date, new Date(2025, 0, 1)) && !isSelected && (
//                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#79B800] rounded-full" />
//                 )}
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* Footer Buttons */}
//       <div className="flex gap-3 pt-2">
//         <button className="flex-1 py-4 text-[16px] font-bold text-gray-700 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all">
//           Cancel
//         </button>
//         <button className="flex-1 py-4 text-[16px] font-bold text-white bg-[#79B800] rounded-2xl hover:bg-[#6aa100] shadow-lg shadow-lime-100 transition-all active:scale-95">
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from 'react';

// // --- Simple Icons ---
// const ChevronLeftIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="m15 18-6-6 6-6"/>
//   </svg>
// );

// const ChevronRightIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="m9 18 6-6-6-6"/>
//   </svg>
// );

// const SingleDatePicker = () => {
//   const today = new Date();
//   const [viewDate, setViewDate] = useState(new Date(2025, 0, 1)); 
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 0, 10));

//   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

//   // Calendar Logic
//   const year = viewDate.getFullYear();
//   const month = viewDate.getMonth();
//   const firstDay = (new Date(year, month, 1).getDay() + 6) % 7; 
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const prevMonthDays = new Date(year, month, 0).getDate();

//   const days = [];
//   for (let i = firstDay - 1; i >= 0; i--) {
//     days.push({ day: prevMonthDays - i, current: false, date: new Date(year, month - 1, prevMonthDays - i) });
//   }
//   for (let i = 1; i <= daysInMonth; i++) {
//     days.push({ day: i, current: true, date: new Date(year, month, i) });
//   }
//   while (days.length < 42) {
//     const nextDay = days.length - daysInMonth - firstDay + 1;
//     days.push({ day: nextDay, current: false, date: new Date(year, month + 1, nextDay) });
//   }

//   const isSameDay = (d1: Date, d2: Date) => d1.toDateString() === d2.toDateString();

//   return (
//     <div className="w-[360px] bg-white rounded-[28px] shadow-xl border border-gray-100 p-6 font-sans">
//       {/* Header Navigation */}
//       <div className="flex items-center justify-between mb-5 px-1">
//         <button onClick={() => setViewDate(new Date(year, month - 1, 1))} className="text-gray-300 hover:text-gray-600">
//           <ChevronLeftIcon />
//         </button>
//         <span className="text-[17px] font-bold text-gray-600">{monthNames[month]} {year}</span>
//         <button onClick={() => setViewDate(new Date(year, month + 1, 1))} className="text-gray-300 hover:text-gray-600">
//           <ChevronRightIcon />
//         </button>
//       </div>

//       {/* Input Row */}
//       <div className="flex gap-2 mb-6">
//         <input 
//           readOnly 
//           value={`${monthNames[selectedDate.getMonth()].slice(0,3)} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`}
//           className="flex-1 border border-gray-200 rounded-xl px-4 py-2 text-[15px] text-gray-700 outline-none"
//         />
//         <button 
//           onClick={() => { setViewDate(new Date()); setSelectedDate(new Date()); }}
//           className="px-5 py-2 border border-gray-200 rounded-xl text-[15px] font-bold text-gray-800 hover:bg-gray-50"
//         >
//           Today
//         </button>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-7 mb-2">
//         {weekDays.map(d => <div key={d} className="text-center text-[13px] font-medium text-gray-400 py-2">{d}</div>)}
//         {days.map((item, idx) => {
//           const isSelected = isSameDay(item.date, selectedDate);
//           const isCurrentToday = isSameDay(item.date, today);
//           return (
//             <button
//               key={idx}
//               onClick={() => setSelectedDate(item.date)}
//               className={`relative h-11 w-11 mx-auto flex items-center justify-center text-[15px] rounded-full transition-all
//                 ${!item.current ? 'text-gray-200' : 'text-gray-700'}
//                 ${isSelected ? 'bg-[#79B800] !text-white font-bold' : 'hover:bg-gray-50'}`}
//             >
//               {item.day}
//               {(isCurrentToday || isSameDay(item.date, new Date(2025, 0, 1)) || isSameDay(item.date, new Date(2025, 0, 30))) && !isSelected && (
//                 <span className="absolute bottom-1.5 w-1.5 h-1.5 bg-[#79B800] rounded-full" />
//               )}
//             </button>
//           );
//         })}
//       </div>

//       {/* Footer */}
//       <div className="flex gap-3 pt-4 border-t border-gray-50">
//         <button className="flex-1 py-3 text-[16px] font-bold text-gray-700 border border-gray-200 rounded-2xl">Cancel</button>
//         <button className="flex-1 py-3 text-[16px] font-bold text-white bg-[#79B800] rounded-2xl shadow-lg shadow-lime-100">Apply</button>
//       </div>
//     </div>
//   );
// };

// export default SingleDatePicker;






// import React, { useState, useRef, useEffect } from 'react';

// // --- Icons ---
// const CalendarIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
//     <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>
//   </svg>
// );

// const ChevronLeftIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
// );

// const ChevronRightIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
// );

// const SingleDatePicker = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 0, 10));
//   const [viewDate, setViewDate] = useState(new Date(2025, 0, 1));
//   const containerRef = useRef<HTMLDivElement>(null);

//   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
//   // Close when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const formatDate = (date: Date) => `${monthNames[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}`;

//   // Calendar Grid Logic
//   const year = viewDate.getFullYear();
//   const month = viewDate.getMonth();
//   const firstDay = (new Date(year, month, 1).getDay() + 6) % 7; 
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const prevMonthDays = new Date(year, month, 0).getDate();
//   const days = [];

//   for (let i = firstDay - 1; i >= 0; i--) days.push({ day: prevMonthDays - i, current: false, date: new Date(year, month - 1, prevMonthDays - i) });
//   for (let i = 1; i <= daysInMonth; i++) days.push({ day: i, current: true, date: new Date(year, month, i) });
//   while (days.length < 42) days.push({ day: days.length - daysInMonth - firstDay + 1, current: false, date: new Date(year, month + 1, days.length - daysInMonth - firstDay + 1) });

//   return (
//     <div className="relative inline-block w-full max-w-[300px]" ref={containerRef}>
//       {/* THE INPUT TRIGGER */}
//       <div 
//         onClick={() => setIsOpen(!isOpen)}
//         className={`flex items-center justify-between px-4 py-3 bg-white border rounded-xl cursor-pointer transition-all
//           ${isOpen ? 'border-[#79B800] ring-2 ring-lime-50' : 'border-gray-200 hover:border-gray-300'}`}
//       >
//         <span className="text-gray-700 text-[15px]">{formatDate(selectedDate)}</span>
//         <CalendarIcon />
//       </div>

//       {/* THE PICKER DROPDOWN */}
//       {isOpen && (
//         <div className="absolute left-0 mt-2 z-50 w-[360px] bg-white rounded-[28px] shadow-2xl border border-gray-100 p-6 animate-in fade-in zoom-in duration-150 origin-top-left">
//           <div className="flex items-center justify-between mb-5 px-1">
//             <button onClick={() => setViewDate(new Date(year, month - 1, 1))} className="text-gray-300 hover:text-gray-600"><ChevronLeftIcon /></button>
//             <span className="text-[17px] font-bold text-gray-600">{monthNames[month]} {year}</span>
//             <button onClick={() => setViewDate(new Date(year, month + 1, 1))} className="text-gray-300 hover:text-gray-600"><ChevronRightIcon /></button>
//           </div>

//           <div className="grid grid-cols-7 mb-2">
//             {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
//               <div key={d} className="text-center text-[13px] font-medium text-gray-400 py-2">{d}</div>
//             ))}
//             {days.map((item, idx) => {
//               const isSelected = selectedDate.toDateString() === item.date.toDateString();
//               const isToday = new Date().toDateString() === item.date.toDateString();
//               return (
//                 <button
//                   key={idx}
//                   onClick={() => setSelectedDate(item.date)}
//                   className={`relative h-11 w-11 mx-auto flex items-center justify-center text-[15px] rounded-full transition-all
//                     ${!item.current ? 'text-gray-200' : 'text-gray-700'}
//                     ${isSelected ? 'bg-[#79B800] !text-white font-bold' : 'hover:bg-gray-50'}`}
//                 >
//                   {item.day}
//                   {isToday && !isSelected && <span className="absolute bottom-1.5 w-1.5 h-1.5 bg-[#79B800] rounded-full" />}
//                 </button>
//               );
//             })}
//           </div>

//           <div className="flex gap-3 pt-4 border-t border-gray-50">
//             <button onClick={() => setIsOpen(false)} className="flex-1 py-3 text-[15px] font-bold text-gray-600 border border-gray-200 rounded-2xl hover:bg-gray-50">Cancel</button>
//             <button onClick={() => setIsOpen(false)} className="flex-1 py-3 text-[15px] font-bold text-white bg-[#79B800] rounded-2xl shadow-lg shadow-lime-100 active:scale-95 transition-transform">Apply</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SingleDatePicker;










// import React, { useState, useRef, useEffect } from 'react';

// // --- Icons ---
// const CalendarIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
//     <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>
//   </svg>
// );

// const ChevronLeftIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
// );

// const ChevronRightIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
// );

// const SingleDatePicker = () => {
//   const today = new Date();
//   today.setHours(0, 0, 0, 0); // Normalize today's time

//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState<Date>(today);
//   const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
//   const containerRef = useRef<HTMLDivElement>(null);

//   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
//   // Close when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const formatDate = (date: Date) => `${monthNames[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}`;

//   // Calendar Grid Logic
//   const year = viewDate.getFullYear();
//   const month = viewDate.getMonth();
//   const firstDay = (new Date(year, month, 1).getDay() + 6) % 7; 
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const prevMonthDays = new Date(year, month, 0).getDate();
//   const days = [];

//   for (let i = firstDay - 1; i >= 0; i--) days.push({ day: prevMonthDays - i, current: false, date: new Date(year, month - 1, prevMonthDays - i) });
//   for (let i = 1; i <= daysInMonth; i++) days.push({ day: i, current: true, date: new Date(year, month, i) });
//   while (days.length < 42) days.push({ day: days.length - daysInMonth - firstDay + 1, current: false, date: new Date(year, month + 1, days.length - daysInMonth - firstDay + 1) });

//   return (
//     <div className="relative inline-block w-full max-w-[240px]" ref={containerRef}>
//       {/* THE INPUT TRIGGER (Reduced Padding/Size) */}
//       <div 
//         onClick={() => setIsOpen(!isOpen)}
//         className={`flex items-center justify-between px-3 py-2 bg-white border rounded-lg cursor-pointer transition-all
//           ${isOpen ? 'border-[#79B800] ring-2 ring-lime-50' : 'border-gray-200 hover:border-gray-300'}`}
//       >
//         <span className="text-gray-700 text-[14px] font-medium">{formatDate(selectedDate)}</span>
//         <CalendarIcon />
//       </div>

//       {/* THE PICKER DROPDOWN (Scaled down slightly) */}
//       {isOpen && (
//         <div className="absolute left-0 mt-2 z-50 w-[300px] bg-white rounded-[20px] shadow-2xl border border-gray-100 p-4 origin-top-left">
//           <div className="flex items-center justify-between mb-4 px-1">
//             <button 
//               onClick={() => setViewDate(new Date(year, month - 1, 1))} 
//               className="text-gray-300 hover:text-gray-600 p-1"
//             >
//               <ChevronLeftIcon />
//             </button>
//             <span className="text-[15px] font-bold text-gray-700">{monthNames[month]} {year}</span>
//             <button 
//               onClick={() => setViewDate(new Date(year, month + 1, 1))} 
//               className="text-gray-300 hover:text-gray-600 p-1"
//             >
//               <ChevronRightIcon />
//             </button>
//           </div>

//           <div className="grid grid-cols-7 mb-1">
//             {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
//               <div key={d} className="text-center text-[11px] font-bold text-gray-400 py-1">{d}</div>
//             ))}
//             {days.map((item, idx) => {
//               const isSelected = selectedDate.toDateString() === item.date.toDateString();
//               const isDateToday = today.toDateString() === item.date.toDateString();
//               const isFuture = item.date > today;
              
//               return (
//                 <button
//                   key={idx}
//                   disabled={isFuture}
//                   onClick={() => setSelectedDate(item.date)}
//                   className={`relative h-9 w-9 mx-auto flex items-center justify-center text-[13px] rounded-full transition-all
//                     ${!item.current || isFuture ? 'text-gray-200 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}
//                     ${isSelected ? 'bg-[#79B800] !text-white font-bold' : ''}`}
//                 >
//                   {item.day}
//                   {isDateToday && !isSelected && <span className="absolute bottom-1 w-1 h-1 bg-[#79B800] rounded-full" />}
//                 </button>
//               );
//             })}
//           </div>

//           <div className="flex gap-2 pt-3 border-t border-gray-50 mt-2">
//             <button 
//               onClick={() => setIsOpen(false)} 
//               className="flex-1 py-2 text-[13px] font-bold text-gray-500 hover:bg-gray-50 rounded-xl"
//             >
//               Cancel
//             </button>
//             <button 
//               onClick={() => setIsOpen(false)} 
//               className="flex-1 py-2 text-[13px] font-bold text-white bg-[#79B800] rounded-xl shadow-md shadow-lime-100 active:scale-95 transition-transform"
//             >
//               Apply
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SingleDatePicker;


















import React, { useState, useRef, useEffect } from 'react';
import IconButton from './ui/IconButton';
import Button from './ui/Button';

// --- Icons ---
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const SingleDatePicker = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const containerRef = useRef<HTMLDivElement>(null);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date: Date) => `${monthNames[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}`;

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7; 
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();
  const days = [];

  for (let i = firstDay - 1; i >= 0; i--) days.push({ day: prevMonthDays - i, current: false, date: new Date(year, month - 1, prevMonthDays - i) });
  for (let i = 1; i <= daysInMonth; i++) days.push({ day: i, current: true, date: new Date(year, month, i) });
  while (days.length < 42) days.push({ day: days.length - daysInMonth - firstDay + 1, current: false, date: new Date(year, month + 1, days.length - daysInMonth - firstDay + 1) });

  return (
    <div className="relative inline-block w-full max-w-[240px]" ref={containerRef}>
      {/* TRIGGER */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between px-3 py-2 bg-white border rounded-lg cursor-pointer transition-all
          ${isOpen ? 'border-[#79B800] ring-2 ring-lime-50' : 'border-gray-200 hover:border-gray-300'}`}
      >
        <span className="text-gray-700 text-[14px] font-medium select-none">{formatDate(selectedDate)}</span>
        <CalendarIcon />
      </div>

      {/* DROPDOWN */}
      {isOpen && (
        <div className="absolute left-0 mt-2 z-50 w-[300px] bg-white rounded-[20px] shadow-2xl border border-gray-100 p-4 animate-in fade-in zoom-in duration-100 origin-top-left">
          <div className="flex items-center justify-between mb-4 px-1">
            <button 
              onClick={() => setViewDate(new Date(year, month - 1, 1))} 
              className="text-gray-300 hover:text-gray-600 p-1 cursor-pointer"
            >
              <ChevronLeftIcon />
            </button>
            <span className="text-[15px] font-bold text-gray-700 select-none">{monthNames[month]} {year}</span>
            <button 
              onClick={() => setViewDate(new Date(year, month + 1, 1))} 
              className="text-gray-300 hover:text-gray-600 p-1 cursor-pointer"
            >
              <ChevronRightIcon />
            </button>
          </div>

          <div className="grid grid-cols-7 mb-1">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
              <div key={d} className="text-center text-[11px] font-bold text-gray-400 py-1 select-none">{d}</div>
            ))}
            {days.map((item, idx) => {
              const isSelected = selectedDate.toDateString() === item.date.toDateString();
              const isDateToday = today.toDateString() === item.date.toDateString();
              const isFuture = item.date > today;
              
              return (
                <button
                  key={idx}
                  disabled={isFuture}
                  onClick={() => setSelectedDate(item.date)}
                  className={`relative h-9 w-9 mx-auto flex items-center justify-center text-[13px] rounded-full transition-all outline-none
                    ${isFuture ? 'text-gray-200 cursor-not-allowed' : 'cursor-pointer'}
                    ${!item.current && !isFuture ? 'text-gray-300 hover:bg-gray-50' : ''}
                    ${item.current && !isSelected && !isFuture ? 'text-gray-700 hover:bg-gray-50' : ''}
                    ${isSelected ? 'bg-[#79B800] !text-white font-bold shadow-sm' : ''}`}
                >
                  <span className="relative z-10">{item.day}</span>
                  {isDateToday && !isSelected && (
                    <span className="absolute bottom-1 w-1 h-1 bg-[#79B800] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex gap-2 pt-3 border-t border-gray-50 mt-2">
            <IconButton 
              onClick={() => setIsOpen(false)} >
                Cancel
            </IconButton>
            <Button 
              onClick={() => setIsOpen(false)} >
                Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleDatePicker;