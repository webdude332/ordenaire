import React, { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: ReactNode;
  trend?: string;
  trendType?: 'positive' | 'negative';
  trendIcon?: string; 
}

const StatCard = ({ 
  title, 
  value, 
  trend, 
  trendType = 'positive', 
  trendIcon = '' 
}: StatCardProps) => {
  
  const isPositive = trendType === 'positive';
  
  return (
    <div className="bg-white p-6 transition-shadow">
      {/* Title */}
      <p className="text-sm text-gray-600 font-medium mb-3">
        {title}
      </p>
      
      {/* Value */}
      <div className="text-3xl font-bold text-gray-900 mb-3">
        {value}
      </div>
      
      {/* Trend */}
      {trend && (
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-500 font-medium">Trend</span>
          
          {/* 2. REPLACED SVGs WITH IMG TAG */}
          {trendIcon ? (
            <img 
              src={trendIcon} 
              alt="trend icon" 
              className="w-3.5 h-3.5 flex-shrink-0 object-contain" 
            />
          ) : (
            /* Optional: Keep SVG as fallback if no icon provided */
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={isPositive ? "#10B981" : "#EF4444"} 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              {isPositive 
                ? <path d="M7 17L17 7M17 17V7H7"/> 
                : <path d="M7 7L17 17M7 7h10v10"/>
              }
            </svg>
          )}
          
          {/* Trend Value */}
          <span className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
            {trend}
          </span>
        </div>
      )}
    </div>
  );
};

export default StatCard;