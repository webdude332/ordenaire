import React from 'react';
import DownArrow from '@/images/icons/chevron-down.svg?react';
import checkIcon from '@/images/icons/checkIcon.svg';

// --- 1. RenderIcon Helper ---
export const RenderIcon = ({ icon, className = '', ...props }: { icon: any; className?: string; [key: string]: any }) => {
    if (!icon) return null;
    if (typeof icon === 'function' || (typeof icon === 'object' && icon !== null && !icon.src)) {
        const IconComponent = icon;
        return <IconComponent className={className} {...props} />;
    }
    return <img src={icon} alt="" className={className} {...props} />;
};

// --- 2. Label Component ---
// export const Label = ({ children }: { children: React.ReactNode }) => (
//     <label className="mb-1.5 block text-sm font-semibold">{children}</label>
// );

interface LabelProps {
    children: React.ReactNode;
    className?: string;
}

export const Label = ({ children, className = '' }: LabelProps) => (
    <label className={`block ${className}`}>
        {children}
    </label>
);

// --- 3. Input Component ---
// export const Input = ({ placeholder, icon, iconClassName = 'text-gray-400' }: { placeholder: string; icon?: any; iconClassName?: string }) => (
//     <div className="relative">
//         {icon && (
//             <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                 <RenderIcon icon={icon} className={`h-5 w-5 ${iconClassName}`} />
//             </span>
//         )}
//         <input
//             type="text"
//             placeholder={placeholder}
//             className={`w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-3 text-sm text-gray-900 placeholder-gray-400 shadow-xs focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] focus:outline-none ${icon ? 'pl-10' : 'pl-3'}`}
//         />
//     </div>
// );


export const Input = ({ 
    placeholder, 
    icon, 
    iconClassName = 'text-gray-400',
    className = ''
}: { 
    placeholder: string; 
    icon?: any; 
    iconClassName?: string;
    className?: string;
}) => (
    <div className="relative">
        {icon && (
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <RenderIcon icon={icon} className={`h-5 w-5 ${iconClassName}`} />
            </span>
        )}
        <input
            type="text"
            placeholder={placeholder}
            className={`w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-3 text-sm text-gray-900 placeholder-gray-400 shadow-xs focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] focus:outline-none ${icon ? 'pl-10' : 'pl-3'} ${className}`}
        />
    </div>
);

// --- 4. Select Component ---
export const Select = ({ placeholder, options, icon = DownArrow }: { placeholder: string; options?: string[]; icon?: any }) => (
    <div className="relative">
        <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-3 text-sm text-gray-900 shadow-sm focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] focus:outline-none">
            <option>{placeholder}</option>
            {options?.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <RenderIcon icon={icon} className="h-5 w-5 text-[#B5B0BA]" />
        </span>
    </div>
);

// --- 5. Checkbox Component ---
export const Checkbox = ({ label, defaultChecked, icon = checkIcon }: { label: string; defaultChecked?: boolean; icon?: any }) => {
    return (
        <label className="group flex cursor-pointer items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" defaultChecked={defaultChecked} className="peer sr-only" />
            <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white transition-all peer-checked:border-[#79B800] peer-checked:bg-[#79B800] [&_img]:hidden peer-checked:[&_img]:block [&_svg]:hidden peer-checked:[&_svg]:block">
                <RenderIcon icon={icon} className="h-3 w-3 text-white" />
            </div>
            {label}
        </label>
    );
};