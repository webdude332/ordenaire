import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, PieLabelRenderProps } from 'recharts';

// Data with correct percentages
const data = [
  { name: '85 Standard', value: 20, color: '#8CDD05' },    // Green - 43%
  { name: '190 Enterprise', value: 35, color: '#7A5AF8' }, // Purple - 25%
  { name: '230 Pro', value: 45, color: '#D444F1' },        // Magenta - 32%
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: '18px',
        fontWeight: '600',
        fontFamily: 'montserrat',
      }}
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PlanDistributionChart() {
  return (
    <div className="w-full h-full bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-gray-900 text-lg font-semibold mb-1">Plan Distribution</h3>
        <p className="text-gray-500 text-sm">March 2020</p>
      </div>

      {/* Chart - Fixed Height Container */}
      <div className="flex-1 flex justify-center items-center mb-6" style={{ minHeight: '280px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="80%"
              startAngle={100}
              endAngle={-280}
              labelLine={false}
              label={renderCustomizedLabel}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 pt-4 border-t border-gray-100">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600 font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}