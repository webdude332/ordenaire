import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';

interface DataPoint {
  name: string;
  value: number;
}

const data: DataPoint[] = [
  { name: 'Jan', value: 45000 },
  { name: 'Feb', value: 52000 },
  { name: 'Mar', value: 48000 },
  { name: 'Apr', value: 61000 },
  { name: 'May', value: 55000 },
  { name: 'Jun', value: 67000 },
  { name: 'Jul', value: 60000 },
  { name: 'Aug', value: 72000 },
  { name: 'Sep', value: 65000 },
  { name: 'Oct', value: 83234 },
  { name: 'Nov', value: 78000 },
  { name: 'Dec', value: 92000 },
];

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white text-sm font-bold py-1.5 px-3 rounded-lg shadow-xl">
        ${payload[0].value?.toLocaleString()}
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <div className="w-full h-full bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col">
      
      {/* Header Section */}
      <div className="mb-6">
        <h3 className="text-gray-500 text-sm font-medium mb-2">Revenue</h3>
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-gray-900">
            $165,750.23
          </span>
          <span className="flex items-center gap-1 bg-green-50 text-green-600 text-xs font-bold px-2.5 py-1 rounded-md border border-green-200">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
            2.4%
          </span>
        </div>
      </div>

      {/* Chart Section - Fixed Height */}
      <div className="flex-1" style={{ minHeight: '280px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              dy={10}
            />
            <YAxis hide domain={['dataMin - 10000', 'auto']} />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: '#F59E0B',
                strokeWidth: 2,
                strokeDasharray: '0',
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#84CC16"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: '#ffffff',
                stroke: '#F59E0B',
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}