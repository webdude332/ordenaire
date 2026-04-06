// import React from 'react';

// interface RadioOption {
//     value: string;
//     label: string;
// }

// interface RadioGroupProps {
//     label?: string;
//     name: string;
//     options: RadioOption[] | string[];
//     defaultValue?: string;
//     value?: string;
//     onChange?: (value: string) => void;
//     className?: string;
//     gap?: string;
// }

// const RadioGroup = ({
//     label,
//     name,
//     options,
//     defaultValue,
//     value,
//     onChange,
//     className = '',
//     gap = 'gap-6'
// }: RadioGroupProps) => {
//     // Normalize options to always be an array of objects
//     const normalizedOptions: RadioOption[] = options.map(option => 
//         typeof option === 'string' 
//             ? { value: option, label: option }
//             : option
//     );

//     const handleChange = (optionValue: string) => {
//         if (onChange) {
//             onChange(optionValue);
//         }
//     };

//     return (
//         <div className={className}>
//             {label && (
//                 <label className="block text-md font-semibold text-gray-700 mb-2">
//                     {label}
//                 </label>
//             )}
//             <div className={`flex items-center ${gap}`}>
//                 {normalizedOptions.map((option) => (
//                     <label
//                         key={option.value}
//                         className="group flex cursor-pointer items-center gap-2 text-sm text-gray-700"
//                     >
//                         <input
//                             type="radio"
//                             name={name}
//                             value={option.value}
//                             defaultChecked={defaultValue === option.value}
//                             checked={value !== undefined ? value === option.value : undefined}
//                             onChange={() => handleChange(option.value)}
//                             className="peer sr-only"
//                         />
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300 transition-all peer-checked:border-[5px] peer-checked:border-[#79B800]"></div>
//                         {option.label}
//                     </label>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RadioGroup;



// import React, { ReactNode } from 'react';

// // 1. Add 'suffix' to the interface
// interface RadioOption {
//     value: string;
//     label: string;
//     suffix?: ReactNode; 
// }

// interface RadioGroupProps {
//     label?: string;
//     name: string;
//     options: RadioOption[] | string[];
//     defaultValue?: string;
//     value?: string;
//     onChange?: (value: string) => void;
//     className?: string;
//     gap?: string;
// }

// const RadioGroup = ({
//     label,
//     name,
//     options,
//     defaultValue,
//     value,
//     onChange,
//     className = '',
//     gap = 'gap-6'
// }: RadioGroupProps) => {
//     // Normalize options to always be an array of objects
//     const normalizedOptions: RadioOption[] = options.map(option => 
//         typeof option === 'string' 
//             ? { value: option, label: option }
//             : option
//     );

//     const handleChange = (optionValue: string) => {
//         if (onChange) {
//             onChange(optionValue);
//         }
//     };

//     return (
//         <div className={className}>
//             {label && (
//                 <label className="block text-md font-semibold text-gray-700 mb-2">
//                     {label}
//                 </label>
//             )}
//             {/* Kept your exact gap logic */}
//             <div className={`flex items-center ${gap}`}>
//                 {normalizedOptions.map((option) => (
//                     // 2. Wrap the label and potential suffix in a flex div
//                     <div key={option.value} className="flex flex-row items-center gap-4">
//                         <label
//                             className="group flex cursor-pointer items-center gap-2 text-sm text-gray-700"
//                         >
//                             <input
//                                 type="radio"
//                                 name={name}
//                                 value={option.value}
//                                 defaultChecked={defaultValue === option.value}
//                                 checked={value !== undefined ? value === option.value : undefined}
//                                 onChange={() => handleChange(option.value)}
//                                 className="peer sr-only"
//                             />
//                             {/* Your custom radio styling untouched */}
//                             <div className="h-4 w-4 rounded-full border-2 border-gray-300 transition-all peer-checked:border-[5px] peer-checked:border-[#79B800]"></div>
//                             {option.label}
//                         </label>
                        
//                         {/* 3. Render the suffix if passed */}
//                         {option.suffix && (
//                             <div>{option.suffix}</div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RadioGroup;



import React, { ReactNode } from 'react';

interface RadioOption {
    value: string;
    label: string;
    suffix?: ReactNode; 
}

interface RadioGroupProps {
    label?: string;
    name: string;
    options: RadioOption[] | string[];
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    gap?: string;
}

const RadioGroup = ({
    label,
    name,
    options,
    defaultValue,
    value,
    onChange,
    className = '',
    gap = 'gap-6'
}: RadioGroupProps) => {
    
    const normalizedOptions: RadioOption[] = options.map(option => 
        typeof option === 'string' 
            ? { value: option, label: option }
            : option
    );

    const handleChange = (optionValue: string) => {
        if (onChange) {
            onChange(optionValue);
        }
    };

    return (
        <div className={className}>
            {label && (
                <label className="block text-md font-semibold text-gray-700 mb-2">
                    {label}
                </label>
            )}
            {/* Conditional alignment: items-start for columns, items-center for rows */}
            <div className={`flex ${gap.includes('col') ? 'items-start' : 'items-center'} ${gap}`}>
                {normalizedOptions.map((option) => (
                    <div key={option.value} className="flex flex-row items-center gap-4">
                        <label
                            className="group flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                        >
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                defaultChecked={defaultValue === option.value}
                                checked={value !== undefined ? value === option.value : undefined}
                                onChange={() => handleChange(option.value)}
                                className="peer sr-only"
                            />
                            <div className="h-4 w-4 rounded-full border-2 border-gray-300 transition-all peer-checked:border-[5px] peer-checked:border-[#79B800]"></div>
                            {option.label}
                        </label>
                        
                        {option.suffix && (
                            <div>{option.suffix}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;