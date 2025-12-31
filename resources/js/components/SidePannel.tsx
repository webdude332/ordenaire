import React from 'react';

// --- IMPORTS ---
import searchIcon from '../images/icons/search-icon.png';
import usersIcon from '../images/icons/users-edit.png'; 
import businessIcon from '../images/icons/cart-icon.png';
import blackLogo from '../images/black-logo.png';
import chartIcon from '../images/icons/chart-logo.png';
import userEditIcon from '../images/icons/users-edit.png';
import repeatIcon from '../images/icons/repeat-icon.png';
import monitorIcon from '../images/icons/monitor-icon.png';
import supportIcon from '../images/icons/gear-icon.png';
import chatIcon from '../images/icons/chat-icon.png';
import linkIcon from '../images/icons/link-icon.png';
import approvalIcon from '../images/icons/verified-icon.png';
import ticketsIcon from '../images/icons/tickets-icon.png';
import profileImg from '../images/icons/profile.png';
import { Link } from '@inertiajs/react';

// --- DATA CONFIGURATION ---
const MENU_ITEMS = [
    { label: "Dashboard", icon: chartIcon, active: true, route: '/dashboard' }, 
    { label: "Internal User Management", icon: userEditIcon, hasSubmenu: true, route: '/usermanagement' },
    { label: "Business Management", icon: businessIcon, hasSubmenu: true, route: '/busines-management' },
    { label: "Subscription & Billing", icon: repeatIcon, hasSubmenu: true, route: '/subscription-and-billing' },
    { label: "System config", icon: monitorIcon, hasSubmenu: true, route: '/system-config' },
    { label: "Maintenance & Support", icon: supportIcon, hasSubmenu: true, route: '/maintinance-and-support' },
    { label: "Communication Mgmt", icon: chatIcon, badge: 10, hasSubmenu: true, route: '/communication-management' },
    { label: "Marketplace & Integrations", icon: linkIcon, hasSubmenu: true, route: '/marketplace-and-intigrations' },
    { label: "Manage Approvals", icon: approvalIcon, badge: 10, hasSubmenu: true, route: '/manage-approvals' },
    { label: "My Tickets", icon: ticketsIcon, badge: 10, hasSubmenu: true, route: '/my-tickets' },
];

export default function SidePannel() {
    return (
        <aside className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col sticky top-0 font-sans z-20 flex-shrink-0 hidden lg:flex">
            
            {/* --- 1. HEADER LOGO --- */}
            <div className="px-6 py-8">
                <div className="flex items-center gap-2 mb-8">
                    {/* Adjust width if your actual logo file is huge */}
                    <img src={blackLogo} alt="Orderaire" className="h-6 w-auto object-contain" />
                </div>

                {/* --- 2. SEARCH BAR --- */}
                <div className="relative group">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img src={searchIcon} alt="search" className="w-4 h-4 opacity-40" />
                    </span>
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-full py-2.5 pl-10 pr-10 text-sm text-gray-700 bg-white border border-[#CFCBD2] rounded-lg focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-100 transition-all shadow-sm placeholder-gray-400"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                         <kbd className="px-2 py-0.5 text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-200 rounded">⌘K</kbd>
                    </span>
                </div>
            </div>

            {/* --- 3. NAVIGATION --- */}
            <div className="flex-1 overflow-y-auto px-4 space-y-1 no-scrollbar pb-4">
                {MENU_ITEMS.map((item, index) => (
                    <Link 
                        key={index} 
                        href={item.route || 'usermanagement'}
                        className={`
                            group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                            ${item.active 
                                ? 'bg-[#F8FFEB] text-gray-900 border border-lime-100' // Active State (Lime-50)
                                : 'text-gray-600 border border-transparent hover:bg-gray-50 hover:text-gray-900' 
                            }
                        `}
                    >
                        <div className="flex items-center gap-3">
                            <img 
                                src={item.icon} 
                                alt={item.label}
                                className={`w-5 h-5 object-contain transition-opacity ${item.active ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`} 
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
                ))}
            </div>

            {/* --- 4. FOOTER --- */}
            <div className="p-4 border-t border-gray-200 bg-white">
                <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 transition-colors mb-1">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
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