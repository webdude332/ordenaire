import React, { ReactNode } from 'react';

interface StatCardProps {
  title: ReactNode;
  value: ReactNode;
  trendType?: 'positive' | 'negative';
}

const BusinessPlan = ({
  title,
  value,
  trendType,
}: StatCardProps) => {
  return (
    <div className="bg-white px-6 py-1 transition-shadow">
      {/* Title */}
      <p className="text-sm text-gray-600 font-medium mb-1">
        {title}
      </p>

      {/* Value */}
      <div className="text-xl font-medium text-gray-900 mb-1">
        {value}
      </div>

      {/* Status badge (Auto Renew) */}
      {trendType && (
        <div className="mt-1">
          <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
              trendType === 'positive'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-600 border border-red-200'
            }`}
          >
            {trendType === 'positive' ? 'Enabled' : 'Disabled'}
          </span>
        </div>
      )}
    </div>
  );
};

export default BusinessPlan;
