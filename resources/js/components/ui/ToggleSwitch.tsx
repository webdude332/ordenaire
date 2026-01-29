import React from 'react';

// Define the types for your props here
interface ToggleSwitchProps {
  label?: string;
  statusLabel?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
  statusLabel = "Active",
  checked, 
  onChange 
}) => {
  return (
    <div>
      <div className="flex items-center">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={checked}
            onChange={onChange}
          />
          {/* Exact styling preserved */}
          <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-[#7AB621] peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          <span className="ml-3 text-sm font-medium text-gray-600">
            {statusLabel}
          </span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;