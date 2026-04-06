import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  TooltipProps,
} from 'recharts';

interface ChartData {
  name: string;
  value: number;
}

const data: ChartData[] = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 7500 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 6000 },
  { name: 'May', value: 2000 },
  { name: 'Jun', value: 6800 },
  { name: 'Jul', value: 6000 },
  { name: 'Aug', value: 83234 },
  { name: 'Sep', value: 6200 },
  { name: 'Oct', value: 7000 },
  { name: 'Nov', value: 8000 },
  { name: 'Dec', value: 5500 },
];

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
        {payload[0].value?.toLocaleString()}
      </div>
    );
  }
  return null;
};

interface CustomCursorProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const CustomCursor = (props: CustomCursorProps) => {
  const { x, y, width, height } = props;

  if (x === undefined || y === undefined || width === undefined || height === undefined) {
    return null;
  }

  const centerX = x + width / 2;

  return (
    <g>
      <line
        x1={centerX}
        y1={y}
        x2={centerX}
        y2={y + height}
        stroke="#F59E0B"
        strokeWidth={2}
      />
      <circle cx={centerX} cy={y + height} r={3} fill="#F59E0B" />
    </g>
  );
};

export default function MonthlyGrowthChart() {
  return (
    <div className="w-full bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-lg font-bold text-gray-900">Monthly Net Growth</h2>
        <button className="text-gray-400 hover:text-gray-600 -mt-1">
          <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
            <circle cx="2" cy="2" r="2"/>
            <circle cx="2" cy="8" r="2"/>
            <circle cx="2" cy="14" r="2"/>
          </svg>
        </button>
      </div>

      {/* Chart */}
      <div className="h-[250px] w-full">
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid
              vertical={false}
              stroke="#E5E7EB"
              strokeDasharray="0"
            />
            
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              dy={10}
            />

            <Tooltip
              content={<CustomTooltip />} 
              cursor={<CustomCursor />}
              allowEscapeViewBox={{ x: true, y: true }}
            />

            <Bar
              dataKey="value"
              fill="#8CDD05"
              radius={[6, 6, 0, 0]}
              barSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-100">
        <div>
          <p className="text-gray-500 text-sm mb-1.5">Target</p>
          <div className="flex items-center gap-1.5 text-green-500 font-bold text-base">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 17V7H7"/>
            </svg>
            841
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1.5">Last Month</p>
          <div className="flex items-center gap-1.5 text-red-500 font-bold text-base">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7L17 17M7 7h10v10"/>
            </svg>
            234
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1.5">This month</p>
          <div className="flex items-center gap-1.5 text-green-500 font-bold text-base">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 17V7H7"/>
            </svg>
            3,278
          </div>
        </div>
      </div>
    </div>
  );
}