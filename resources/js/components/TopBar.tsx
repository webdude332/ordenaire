import React, { ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import rightArrow from '../images/icons/chevron-right.png';

// --- Types ---
interface TabItem {
    label: string;
    isActive: boolean;
    onClick?: () => void;
    href?: string; 
}

interface TopBarProps {
    title: string;
    icon: string; // Pass the specific icon (dashboardIcon vs dashBoardSvg)
    breadcrumbs: { label: string; isActive?: boolean }[];
    tabs?: TabItem[];
    children?: ReactNode; // For the right-side buttons
}

export default function TopBar({ title, icon, breadcrumbs, tabs, children }: TopBarProps) {
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
                            <img 
                                src={icon} 
                                alt="icon" 
                                className="w-5 h-5 object-contain opacity-60" 
                            />
                            
                            {/* Breadcrumb Loop */}
                            {breadcrumbs.map((item, index) => (
                                <React.Fragment key={index}>
                                    <span className="mx-2">
                                        <img src={rightArrow} alt="" className="w-3 h-3" />
                                    </span>
                                    {/* Using YOUR exact classes for active vs inactive */}
                                    {item.isActive ? (
                                        <span className="font-semibold bg-[#F9F7FA] px-2 py-1 rounded-md text-[#696170]">
                                            {item.label}
                                        </span>
                                    ) : (
                                        <span className="font-medium text-[#9C94A3]">
                                            {item.label}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Main Title - Your exact class */}
                        <h1 className="text-2xl font-bold text-gray-900">
                            {title}
                        </h1>
                    </div>

                    {/* RIGHT SIDE: Action Buttons (Injected) */}
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
                            // YOUR exact tab styling logic
                            const activeClass = "border-lime-500 text-[#578500]";
                            const inactiveClass = "border-transparent text-[#9C94A3] hover:text-gray-700";
                            
                            const commonClasses = "pb-3 text-sm font-semibold border-b-2 transition-colors";

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