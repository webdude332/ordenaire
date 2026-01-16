// import React, { ButtonHTMLAttributes } from 'react';
// import { Link } from '@inertiajs/react';

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     className?: string;
//     children: React.ReactNode;
//     href?: string;
// }

// export default function IconButton({ className = '', children, href, ...props }: ButtonProps) {
    
//     // The shared styles for both Link and Button
//     const complexStyles = {
//         boxShadow: `
//             inset 0 0 0 2px rgba(255, 255, 255, 0.12),
//             inset 0 0 0 2px rgba(255, 255, 255, 0),
//             inset 0px -2px 0px rgba(10, 13, 18, 0.05),
//             0px 1px 2px rgba(10, 13, 18, 0.05)
//         `,
//     };

//     const baseClasses = `
//         flex items-center justify-center gap-[6px] 
//         rounded-lg bg-[transparent] px-4 py-2 
//         text-sm font-medium text-[#4F4955] 
//         transition-colors hover:bg-gray-50 
//         border border-[#CFCBD2]
//         cursor-pointer
//         ${className}
//     `;

//     // 1. If an href is provided, render a Link
//     if (href) {
//         return (
//             <Link 
//                 href={href} 
//                 className={baseClasses} 
//                 style={complexStyles}
//             >
//                 {children}
//             </Link>
//         );
//     }

//     // 2. Otherwise, render a standard Button
//     return (
//         <button 
//             {...props} 
//             className={baseClasses} 
//             style={complexStyles}
//         >
//             {children}
//         </button>
//     );
// }




import React, { ButtonHTMLAttributes } from 'react';
import { Link } from '@inertiajs/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    href?: string;
}

export default function IconButton({ className = '', children, href, disabled = false, ...props }: ButtonProps) {
    
    // The shared styles for both Link and Button
    const complexStyles = {
        boxShadow: `
            inset 0 0 0 2px rgba(255, 255, 255, 0.12),
            inset 0 0 0 2px rgba(255, 255, 255, 0),
            inset 0px -2px 0px rgba(10, 13, 18, 0.05),
            0px 1px 2px rgba(10, 13, 18, 0.05)
        `,
    };

    const baseClasses = `
        flex items-center justify-center gap-[6px] 
        rounded-lg px-4 py-2 
        text-sm font-medium
        transition-colors
        ${disabled
            ? 'bg-gray-50 text-gray-400 border border-gray-200 cursor-not-allowed'
            : 'bg-[transparent] text-[#4F4955] hover:bg-gray-50 border border-[#CFCBD2] cursor-pointer'
        }
        ${className}
    `;

    // 1. If an href is provided, render a Link
    if (href) {
        return (
            <Link 
                href={href} 
                className={baseClasses} 
                style={complexStyles}
            >
                {children}
            </Link>
        );
    }

    // 2. Otherwise, render a standard Button
    return (
        <button 
            {...props}
            disabled={disabled}
            className={baseClasses} 
            style={disabled ? undefined : complexStyles}
        >
            {children}
        </button>
    );
}