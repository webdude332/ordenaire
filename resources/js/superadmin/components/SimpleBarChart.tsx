  import React from 'react';
  import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Cell,
    LabelList,
  } from 'recharts';

  const data = [
    { name: 'High', value: 9, percentage: 30, color: '#F59E0B' },   // Orange
    { name: 'Medium', value: 12, percentage: 40, color: '#FBBF24' }, // Yellow
    { name: 'Low', value: 9, percentage: 30, color: '#84CC16' },    // Green
  ];

  // 1. Label for the Name (Top Left)
  const CustomNameLabel = (props: any) => {
    const { x, y, value } = props;
    return (
      <text 
        x={x} 
        y={y - 12} // Moved up slightly to clear the bar
        fill="#1F2937" 
        fontSize={14} 
        fontWeight={600} 
        textAnchor="start"
        dominantBaseline="auto" // Ensures text sits on top of the bar
      >
        {value}
      </text>
    );
  };

  // 2. Label for the Value/Percentage (Far Right)
  const CustomValueLabel = (props: any) => {
    const { x, y, width, height, index } = props;
    const item = data[index];
    
    // LOGIC: Reverse calculate the full track width based on the percentage
    // If the colored bar (width) is 30% of the total, the total is (width * 100) / 30.
    // Since your domain max is 120, we use 120.
    const totalTrackWidth = (width * 120) / item.percentage;
    
    return (
      <text 
        // Position: Start (x) + Full Track Width + Padding (10px)
        x={x + totalTrackWidth + 12} 
        y={y + height / 2 + 1} // Centered vertically
        fill="#4B5563" 
        fontSize={14} 
        fontWeight={500}
        textAnchor="start"
        dominantBaseline="middle"
      >
        {/* Matches format: "9 (30%)" */}
        {item.value} ({item.percentage}%)
      </text>
    );
  };

  export default function SupportTicketsChart() {
    return (
      <div className="w-full bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col h-full">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">Support Tickets</h2>
          <p className="text-gray-500 text-sm mt-1 font-medium">
            Total Open: 31
          </p>
        </div>

        {/* Chart */}
        <div className="flex-1 w-full min-h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={data}
              // Increased right margin to fit the text "9 (30%)"
              margin={{ top: 10, right: 100, left: 0, bottom: 10 }}
              barSize={10}
              barGap={0} // Gap handled by height/margin usually, but 0 is fine here
            >
              {/* Domain is crucial for the math in CustomValueLabel */}
              <XAxis type="number" hide domain={[0, 120]} /> 
              <YAxis type="category" dataKey="name" hide />

              <Bar 
                dataKey="percentage"
                radius={[10, 10, 10, 10]}
                background={{ fill: '#F3F4F6', radius: 10 }} 
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}

                <LabelList 
                  dataKey="name" 
                  content={<CustomNameLabel />} 
                />

                <LabelList 
                  dataKey="value" 
                  content={<CustomValueLabel />} 
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }