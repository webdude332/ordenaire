import React from 'react';

interface StatusBadgeProps {
  status: 'enabled' | 'disabled';
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isEnabled = status === 'enabled';

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
        isEnabled
          ? 'bg-green-50 text-green-700 border border-green-200'
          : 'bg-red-50 text-red-600 border border-red-200'
      }`}
    >
      {isEnabled ? 'Enabled' : 'Disabled'}
    </span>
  );
};

export default StatusBadge;
