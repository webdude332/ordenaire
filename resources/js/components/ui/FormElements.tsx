import React from 'react';
import DownArrow from '@/images/icons/chevron-down.svg?react';
import checkIcon from '@/images/icons/checkIcon.svg';
 import ErrorIcon from '@/images/icons/errorIcon.svg?react'; 
// import RenderIcon from './RenderIcon';

// --- 1. RenderIcon Helper ---
export const RenderIcon = ({ icon, className = '', ...props }: { icon: any; className?: string; [key: string]: any }) => {
    if (!icon) return null;
    if (typeof icon === 'function' || (typeof icon === 'object' && icon !== null && !icon.src)) {
        const IconComponent = icon;
        return <IconComponent className={className} {...props} />;
    }
    return <img src={icon} alt="" className={className} {...props} />;
};

interface LabelProps {
    children: React.ReactNode;
    className?: string;
}

export const Label = ({ children, className = '' }: LabelProps) => (
    <label className={`block ${className}`}>
        {children}
    </label>
);

// export const Input = ({ 
//     placeholder, 
//     value,
//     onChange,
//     disabled,
//     icon, 
//     iconClassName = 'text-gray-400',
//     className = '',
//     as = 'input',
//     rows = 4,
//     error, // New prop
//     required // New prop
// }: { 
//     placeholder: string; 
//     icon?: any; 
//     iconClassName?: string;
//     className?: string;
//     value?: string;
//     disabled?: boolean;
//     as?: 'input' | 'textarea';
//     rows?: number;
//     error?: string; // Type for error message
//     required?: boolean;
//     onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
// }) => {
//     // Dynamic border and ring colors based on error state
//     const stateStyles = error 
//         ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
//         : 'border-gray-300 focus:border-[#84cc16] focus:ring-[#84cc16]';

//     const sharedClassName = `w-full rounded-lg border bg-white py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 shadow-xs focus:ring-1 focus:outline-none transition-colors ${
//         icon ? 'pl-10' : 'pl-3'
//     } ${stateStyles} ${className}`;

//     return (
//         <div className="w-full">
//             <div className="relative">
//                 {/* Left Icon */}
//                 {icon && (
//                     <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                         <RenderIcon icon={icon} className={`h-5 w-5 ${iconClassName}`} />
//                     </span>
//                 )}

//                 {as === 'textarea' ? (
//                     <textarea
//                         placeholder={placeholder}
//                         value={value}
//                         disabled={disabled}
//                         onChange={onChange}
//                         rows={rows}
//                         className={sharedClassName}
//                         required={required}
//                     />
//                 ) : (
//                     <input
//                         type="text"
//                         placeholder={placeholder}
//                         value={value}
//                         disabled={disabled}
//                         onChange={onChange}
//                         className={sharedClassName}
//                         required={required}
//                     />
//                 )}

//                 {/* Right Error Icon - Shown only when error exists */}
//                 {error && (
//                     <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
//                         <RenderIcon icon={ErrorIcon} className="h-5 w-5 text-red-500" />
//                     </span>
//                 )}
//             </div>
            
//             {/* Error Message Text */}
//             {error && (
//                 <p className="mt-1.5 text-xs text-red-600 font-medium">
//                     {error}
//                 </p>
//             )}
//         </div>
//     );
// };

// --- 4. Select Component ---


// export const Input = ({ 
//     placeholder, 
//     value,
//     onChange,
//     disabled,
//     icon, 
//     iconClassName = 'text-gray-400',
//     className = '',
//     as = 'input',
//     rows = 4,
//     error,
// }: { 
//     placeholder: string; 
//     icon?: any; 
//     iconClassName?: string;
//     className?: string;
//     value?: string;
//     disabled?: boolean;
//     as?: 'input' | 'textarea';
//     rows?: number;
//     error?: string;
//     onChange?: (e: React.ChangeEvent<any>) => void; 
// }) => {
//     // Red border when error exists, standard green/gray otherwise
//     const stateStyles = error 
//         ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
//         : 'border-gray-300 focus:border-[#84cc16] focus:ring-[#84cc16]';

//     // Pr-10 ensures text doesn't overlap the right-side error icon
//     const sharedClassName = `w-full rounded-lg border bg-white py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 shadow-xs focus:ring-1 focus:outline-none transition-colors ${
//         icon ? 'pl-10' : 'pl-3'
//     } ${stateStyles} ${className}`;

//     return (
//         <div className="w-full">
//             <div className="relative">
//                 {/* Left Icon (e.g., Mail) */}
//                 {icon && (
//                     <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                         <RenderIcon icon={icon} className={`h-5 w-5 ${iconClassName}`} />
//                     </span>
//                 )}

//                 {as === 'textarea' ? (
//                     <textarea 
//                         placeholder={placeholder} 
//                         value={value} 
//                         disabled={disabled} 
//                         onChange={onChange} 
//                         rows={rows} 
//                         className={sharedClassName} 
//                     />
//                 ) : (
//                     <input 
//                         type="text" 
//                         placeholder={placeholder} 
//                         value={value} 
//                         disabled={disabled} 
//                         onChange={onChange} 
//                         className={sharedClassName} 
//                     />
//                 )}

//                 {/* Right Error Icon - Only shows if error exists */}
//                 {error && (
//                     <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
//                         <RenderIcon icon={ErrorIcon} className="h-5 w-5 text-red-500" />
//                     </span>
//                 )}
//             </div>
            
//             {/* Error Message Text */}
//             {error && (
//                 <p className="mt-1.5 text-xs text-red-600 font-medium">
//                     {error}
//                 </p>
//             )}
//         </div>
//     );
// };



// disabled input. 


export const Input = ({ 
    placeholder, 
    value,
    onChange,
    disabled,
    icon, 
    iconClassName = 'text-gray-400',
    className = '',
    as = 'input',
    rows = 4,
    error,
}: { 
    placeholder: string; 
    icon?: any; 
    iconClassName?: string;
    className?: string;
    value?: string;
    disabled?: boolean;
    as?: 'input' | 'textarea';
    rows?: number;
    error?: string;
    onChange?: (e: React.ChangeEvent<any>) => void; 
}) => {
    // Red border when error exists, standard green/gray otherwise
    const stateStyles = error 
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
        : 'border-gray-300 focus:border-[#84cc16] focus:ring-[#84cc16]';

    // NEW: Handle background color and cursor for disabled state
    const backgroundStyles = disabled 
        ? 'bg-[#F9F7FA] cursor-not-allowed text-gray-500' 
        : 'bg-white text-gray-900';

    // Pr-10 ensures text doesn't overlap the right-side error icon
    const sharedClassName = `w-full rounded-lg border py-2.5 pr-10 text-sm placeholder-gray-400 shadow-xs focus:ring-1 focus:outline-none transition-colors ${
        icon ? 'pl-10' : 'pl-3'
    } ${stateStyles} ${backgroundStyles} ${className}`;

    return (
        <div className="w-full">
            <div className="relative">
                {/* Left Icon (e.g., Mail) */}
                {icon && (
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <RenderIcon icon={icon} className={`h-5 w-5 ${iconClassName}`} />
                    </span>
                )}

                {as === 'textarea' ? (
                    <textarea 
                        placeholder={placeholder} 
                        value={value} 
                        disabled={disabled} 
                        onChange={onChange} 
                        rows={rows} 
                        className={sharedClassName} 
                    />
                ) : (
                    <input 
                        type="text" 
                        placeholder={placeholder} 
                        value={value} 
                        disabled={disabled} 
                        onChange={onChange} 
                        className={sharedClassName} 
                    />
                )}

                {/* Right Error Icon - Only shows if error exists */}
                {error && (
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <RenderIcon icon={ErrorIcon} className="h-5 w-5 text-red-500" />
                    </span>
                )}
            </div>
            
            {/* Error Message Text */}
            {error && (
                <p className="mt-1.5 text-xs text-red-600 font-medium">
                    {error}
                </p>
            )}
        </div>
    );
};

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
