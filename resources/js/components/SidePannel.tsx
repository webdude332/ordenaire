import React from 'react';
import { Link, usePage } from '@inertiajs/react';

// --- IMPORTS ---
import searchIcon from '../images/icons/inputSearch.svg';
import usersIcon from '../images/icons/users-edit.png'; 
import businessIcon from '../images/icons/businessManagement.svg';
import blackLogo from '../images/icons/applogo.svg';
import chartIcon from '../images/icons/dashBaordSvg.svg';
import userEditIcon from '../images/icons/usermgmt.svg';
import repeatIcon from '../images/icons/subscriptionAndBilling.svg';
import monitorIcon from '../images/icons/systemConfig.svg';
import supportIcon from '../images/icons/maintinanceAndSupport.svg';
import chatIcon from '../images/icons/communicationManagement.svg';
import linkIcon from '../images/icons/marketPlace.svg';
import approvalIcon from '../images/icons/manageApprovals.svg';
import ticketsIcon from '../images/icons/at-sign.svg';
import profileImg from '../images/icons/profile.png';
import settingIcon from '../images/icons/settings.svg'
import tickets from '../images/icons/tickets.svg'

// --- DATA CONFIGURATION ---
const MENU_ITEMS = [
    { label: "Dashboard", icon: chartIcon, route: '/dashboard' }, 
    { label: "Internal User Management", icon: userEditIcon, hasSubmenu: true, route: '/usermanagement' },
    { label: "Business Management", icon: businessIcon, hasSubmenu: true, route: '/busines-management' },
    { label: "Subscription & Billing", icon: repeatIcon, hasSubmenu: true, route: '/subscription-and-billing' },
    { label: "System config", icon: monitorIcon, hasSubmenu: true, route: '/system-config' },
    { label: "Maintenance & Support", icon: supportIcon, hasSubmenu: true, route: '/maintinance-and-support' },
    { label: "Communication Mgmt", icon: chatIcon, badge: 10, hasSubmenu: true, route: '/communication-management' },
    { label: "Marketplace & Integrations", icon: linkIcon, hasSubmenu: true, route: '/marketplace-and-intigrations' },
    { label: "Manage Approvals", icon: approvalIcon, badge: 10, hasSubmenu: true, route: '/manage-approvals' },
    { label: "My Tickets", icon: tickets, badge: 10, hasSubmenu: true, route: '/my-tickets' },
];

export default function SidePannel() {
    const { url } = usePage();

    return (
        <aside className="w-[320px] h-screen bg-white border-r border-gray-200 flex flex-col sticky top-0 font-sans z-20 flex-shrink-0 hidden lg:flex">
            
            {/* --- 1. HEADER LOGO --- */}
            <div className="px-6 pt-8 pb-4">
                <div className="flex items-center mb-4">
                    <img src={blackLogo} alt="Orderaire" className="h-6 w-auto object-contain" />
                </div>

                {/* --- 2. SEARCH BAR --- */}
<div className="relative group w-full">
    {/* Left Icon Wrapper */}
    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <div 
            className="w-4 h-4 bg-[#9C94A3]"
            style={{
                maskImage: `url(${searchIcon})`,
                WebkitMaskImage: `url(${searchIcon})`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
            }}
        />
    </span>

    {/* The Input Field */}
    <input 
        type="text" 
        placeholder="Search" 
        className="w-full py-2.5 pl-10 pr-14 text-[14px] text-gray-700 bg-white border border-[#CFCBD2] rounded-lg placeholder-[#9C94A3] placeholder-medium focus:outline-none focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] transition-all shadow-sm"
    />

    {/* Right Shortcut Badge */}
    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
        <kbd className="inline-flex items-center justify-center h-7 min-w-[34px] px-1.5 text-[#9C94A3] bg-white border border-[#E8E6EA] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.05)] select-none">
            {/* Command Symbol - slightly adjusted down for alignment */}
            <span className="text-[13px] leading-none font-medium translate-y-[1px]">⌘</span>
            {/* Letter K - increased size to match visual weight */}
            <span className="text-[13px] font-medium leading-none ml-0.5">K</span>
        </kbd>
    </span>
</div>
            </div>

            {/* --- 3. NAVIGATION --- */}
            <div className="flex-1 overflow-y-auto px-4 space-y-1 no-scrollbar pb-4">
                {MENU_ITEMS.map((item, index) => {
                    const isActive = url.startsWith(item.route);

                    return (
                        <Link 
                            key={index} 
                            href={item.route || '#'}
                            className={`
                                group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                                ${isActive 
                                    ? 'bg-[#F8FFEB] text-gray-900 border border-lime-100' 
                                    : 'text-gray-600 border border-transparent hover:bg-gray-50 hover:text-gray-900' 
                                }
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <div 
                                    className={`
                                        w-5 h-5 transition-colors duration-200
                                        ${isActive 
                                            ? 'bg-[#8CDD05]'  
                                            : 'bg-gray-400 group-hover:bg-gray-600' 
                                        }
                                    `}
                                    style={{
                                        maskImage: `url(${item.icon})`,
                                        WebkitMaskImage: `url(${item.icon})`,
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center'
                                    }}
                                />
                                <span>{item.label}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                {item.badge && (
                                    <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-gray-200">
                                        {item.badge}
                                    </span>
                                )}
                                {item.hasSubmenu && (
                                    <svg className="w-3.5 h-3.5 text-gray-400 transition-transform group-hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* --- 4. FOOTER --- */}
            <div className="p-4 border-t border-gray-200 bg-white">
                <a href="#" className="flex gap-2 items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 transition-colors mb-1">
                    <img src={settingIcon} alt="" />
                    Settings
                </a>
                <div className="flex items-center justify-between p-2 mt-2 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group shadow-sm">
                    <div className="flex items-center">
                        <img src={profileImg} alt="User" className="w-9 h-9 rounded-full object-cover border border-gray-200" />
                        <div className="ml-3">
                            <p className="text-sm font-semibold text-gray-700 leading-tight">Olivia Rhye</p>
                            <p className="text-xs text-gray-500">olivia@untitled.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}