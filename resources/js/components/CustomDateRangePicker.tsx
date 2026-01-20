import React, { useState } from 'react';
import IconButton from './ui/IconButton';
import Button from './ui/Button';

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
                  ${isStart || isEnd ? 'bg-[#79B800] text-white font-medium z-10' : ''}
                  ${inRange ? 'bg-green-50' : ''}
                  ${!isStart && !isEnd && !inRange ? 'hover:bg-gray-100' : ''}
                `}
              >
                {d.day}
                {showToday && !isStart && !isEnd && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#79B800] rounded-full"></div>
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
    <div className="inline-flex bg-white rounded-2xl  border border-gray-200 overflow-hidden font-sans">
      
      {/* SIDEBAR */}
      <div className="w-44 flex flex-col border-r border-gray-200 py-4 px-3 gap-0.5 bg-white">
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => handlePresetClick(preset)}
            className={`
              px-3 py-2 text-sm font-normal rounded-md text-left transition-colors
              ${activePreset === preset.label 
                ? 'bg-[#F9F7FA] text-gray-900' 
                : 'text-gray-600 hover:bg-[#F9F7FA] hover:text-gray-900'
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
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
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
            <IconButton>
              Cancel
            </IconButton>
            <Button>
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}