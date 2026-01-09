// import React, { ReactNode, ComponentType, SVGProps } from 'react';
// import RightArrow from '../images/icons/chevron-right.svg?react';

// // --- Types ---
// interface TabItem {
//     label: string;
//     isActive: boolean;
//     onClick?: () => void;
//     href?: string;
// }

// interface TopBarProps {
//     title: string;
//     icon: string | ComponentType<SVGProps<SVGSVGElement>>;
//     breadcrumbs: { label: string; isActive?: boolean }[];
//     tabs?: TabItem[];
//     children?: ReactNode;
//     iconClassName?: string; // 1. Added optional prop for custom styling
// }

// export default function TopBar({
//     title,
//     icon,
//     breadcrumbs,
//     tabs,
//     children,
//     iconClassName = '', // 2. Default to empty string
// }: TopBarProps) {
//     const isIconComponent = typeof icon !== 'string';
//     const IconComponent = isIconComponent ? (icon as ComponentType<SVGProps<SVGSVGElement>>) : null;

//     // 3. Combine default classes with your custom classes
//     // Use tailwind classes like '!opacity-100' or '!h-8' in usage if you need to force override
//     const finalIconClass = `h-5 w-5 object-contain opacity-60 ${iconClassName}`;

//     return (
//         <header className="bg-white">
//             {/* TOP ROW: Breadcrumbs & Title */}
//             <div className="px-8 py-6">
//                 <div className="flex items-start justify-between">
//                     {/* LEFT SIDE */}
//                     <div>
//                         {/* Breadcrumb Row */}
//                         <div className="mb-2 flex items-center text-sm text-gray-500">
                            
//                             {/* The Main Icon */}
//                             {isIconComponent && IconComponent ? (
//                                 <IconComponent className={finalIconClass} />
//                             ) : (
//                                 <img
//                                     src={icon as string}
//                                     alt="icon"
//                                     className={finalIconClass}
//                                 />
//                             )}

//                             {/* Breadcrumb Loop */}
//                             {breadcrumbs.map((item, index) => (
//                                 <React.Fragment key={index}>
//                                     <span className="mx-2">
//                                         <RightArrow
//                                             width={16}
//                                             height={16}
//                                             className="text-[#B5B0BA]"
//                                         />
//                                     </span>
//                                     {item.isActive ? (
//                                         <span className="rounded-md bg-[#F9F7FA] px-2 py-1 font-semibold text-[#696170]">
//                                             {item.label}
//                                         </span>
//                                     ) : (
//                                         <span className="font-medium text-[#9C94A3]">
//                                             {item.label}
//                                         </span>
//                                     )}
//                                 </React.Fragment>
//                             ))}
//                         </div>

//                         <h1 className="text-2xl font-semibold text-gray-900">
//                             {title}
//                         </h1>
//                     </div>

//                     {/* RIGHT SIDE: Action Buttons */}
//                     <div className="flex items-center space-x-3">
//                         {children}
//                     </div>
//                 </div>
//             </div>

//             {/* BOTTOM ROW: Tabs */}
//             {tabs && tabs.length > 0 && (
//                 <div className="mt-2 px-8">
//                     <div className="flex space-x-8 border-b border-gray-200">
//                         {tabs.map((tab, index) => {
//                             const activeClass = 'border-lime-500 text-[#578500]';
//                             const inactiveClass = 'border-transparent text-[#9C94A3] hover:text-gray-700';
//                             const commonClasses = 'pb-3 text-sm font-semibold border-b-2 transition-colors';

//                             return tab.href ? (
//                                 <a
//                                     key={index}
//                                     href={tab.href}
//                                     className={`${commonClasses} ${tab.isActive ? activeClass : inactiveClass}`}
//                                 >
//                                     {tab.label}
//                                 </a>
//                             ) : (
//                                 <button
//                                     key={index}
//                                     onClick={tab.onClick}
//                                     className={`${commonClasses} ${tab.isActive ? activeClass : inactiveClass}`}
//                                 >
//                                     {tab.label}
//                                 </button>
//                             );
//                         })}
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }




//claude 


import React, { ReactNode, ComponentType, SVGProps } from 'react';
import RightArrow from '../images/icons/chevron-right.svg?react';

// --- Types ---
interface TabItem {
    label: string;
    isActive: boolean;
    onClick?: () => void;
    href?: string;
}

interface BreadcrumbItem {
    label: string;
    isActive?: boolean;
    href?: string; // Added href for clickable breadcrumbs
    onClick?: () => void; // Added onClick for custom click handlers
}

interface TopBarProps {
    title: string;
    icon: string | ComponentType<SVGProps<SVGSVGElement>>;
    breadcrumbs: BreadcrumbItem[]; // Updated type
    tabs?: TabItem[];
    children?: ReactNode;
    iconClassName?: string;
}

export default function TopBar({
    title,
    icon,
    breadcrumbs,
    tabs,
    children,
    iconClassName = '',
}: TopBarProps) {
    const isIconComponent = typeof icon !== 'string';
    const IconComponent = isIconComponent ? (icon as ComponentType<SVGProps<SVGSVGElement>>) : null;

    const finalIconClass = `h-5 w-5 object-contain opacity-60 ${iconClassName}`;

    return (
        <header className="bg-white">
            {/* TOP ROW: Breadcrumbs & Title */}
            <div className="px-8 py-6">
                <div className="flex items-start justify-between">
                    {/* LEFT SIDE */}
                    <div>
                        {/* Breadcrumb Row */}
                        <div className="mb-2 flex items-center text-sm text-gray-500">
                            
                            {/* The Main Icon */}
                            {isIconComponent && IconComponent ? (
                                <IconComponent className={finalIconClass} />
                            ) : (
                                <img
                                    src={icon as string}
                                    alt="icon"
                                    className={finalIconClass}
                                />
                            )}

                            {/* Breadcrumb Loop */}
                            {breadcrumbs.map((item, index) => (
                                <React.Fragment key={index}>
                                    <span className="mx-2">
                                        <RightArrow
                                            width={16}
                                            height={16}
                                            className="text-[#B5B0BA]"
                                        />
                                    </span>
                                    {item.isActive ? (
                                        <span className="rounded-md bg-[#F9F7FA] px-2 py-1 font-semibold text-[#696170]">
                                            {item.label}
                                        </span>
                                    ) : item.href ? (
                                        <a
                                            href={item.href}
                                            onClick={item.onClick}
                                            className="font-medium text-[#9C94A3] hover:text-gray-700 transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ) : item.onClick ? (
                                        <button
                                            onClick={item.onClick}
                                            className="font-medium text-[#9C94A3] hover:text-gray-700 transition-colors"
                                        >
                                            {item.label}
                                        </button>
                                    ) : (
                                        <span className="font-medium text-[#9C94A3]">
                                            {item.label}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <h1 className="text-2xl font-semibold text-gray-900">
                            {title}
                        </h1>
                    </div>

                    {/* RIGHT SIDE: Action Buttons */}
                    <div className="flex items-center space-x-3">
                        {children}
                    </div>
                </div>
            </div>

            {/* BOTTOM ROW: Tabs */}
            {tabs && tabs.length > 0 && (
                <div className="mt-2 px-8">
                    <div className="flex space-x-8 border-b border-gray-200">
                        {tabs.map((tab, index) => {
                            const activeClass = 'border-lime-500 text-[#578500]';
                            const inactiveClass = 'border-transparent text-[#9C94A3] hover:text-gray-700';
                            const commonClasses = 'pb-3 text-sm font-semibold border-b-2 transition-colors';

                            return tab.href ? (
                                <a
                                    key={index}
                                    href={tab.href}
                                    className={`${commonClasses} ${tab.isActive ? activeClass : inactiveClass}`}
                                >
                                    {tab.label}
                                </a>
                            ) : (
                                <button
                                    key={index}
                                    onClick={tab.onClick}
                                    className={`${commonClasses} ${tab.isActive ? activeClass : inactiveClass}`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}