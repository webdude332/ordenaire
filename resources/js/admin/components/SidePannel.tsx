// import { Link, usePage } from '@inertiajs/react';

// // --- IMPORTS ---
// import adAccounts from '@/shared/images/icons/adAccounts.svg';
// import adCustomers from '@/shared/images/icons/adCustomers.svg';
// import adGlobe from '@/shared/images/icons/adGlobe.svg';
// import adInventory from '@/shared/images/icons/adInventory.svg';
// import adMarket from '@/shared/images/icons/adMarket.svg';
// import adMenu from '@/shared/images/icons/adMenu.svg';
// import adOrders from '@/shared/images/icons/adOrders.svg';
// import adPromotion from '@/shared/images/icons/adPromotion.svg';
// import adReports from '@/shared/images/icons/adReports.svg';
// import adScreen from '@/shared/images/icons/adScreen.svg';
// import adUsers from '@/shared/images/icons/adUsers.svg';
// import adWhatsapp from '@/shared/images/icons/adWhatsapp.svg';
// import BlackLogo from '../../shared/images/icons/applogo.svg?react';
// import chartIcon from '../../shared/images/icons/dashBaordSvg.svg';
// import searchIcon from '../../shared/images/icons/inputSearch.svg';
// import profileImg from '../../shared/images/icons/profile.svg';
// import settingIcon from '../../shared/images/icons/settings.svg';
// // --- DATA CONFIGURATION ---
// const MENU_ITEMS = [
//     { label: 'Dashboard', icon: chartIcon, route: '/admin/dashboard' },
//     {
//         label: 'Menu',
//         icon: adMenu,
//         hasSubmenu: true,
//         route: '/admin/menu',
//     },
//     {
//         label: 'Orders',
//         icon: adOrders,
//         hasSubmenu: true,
//         route: '/admin/orders',
//     },
//     {
//         label: 'Inventory',
//         icon: adInventory,
//         badge: 8,
//         hasSubmenu: true,
//         route: '/admin/inventory',
//     },
//     {
//         label: 'Online Store',
//         icon: adGlobe,
//         hasSubmenu: true,
//         route: '/admin/onlinestore',
//     },
//     {
//         label: 'Promotions',
//         icon: adPromotion,
//         hasSubmenu: true,
//         route: '/admin/promotions',
//     },
//     {
//         label: 'Engage by ordenaire',
//         icon: adWhatsapp,
//         badge: 10,
//         hasSubmenu: true,
//         route: '/admin/engagebyordenaire',
//     },
//     {
//         label: 'Customers',
//         icon: adCustomers,
//         hasSubmenu: true,
//         badge: 10,
//         route: '/admin/customers',
//     },
//     {
//         label: 'Screens & Devices',
//         icon: adScreen,
//         badge: 10,
//         hasSubmenu: true,
//         route: '/admin/screensanddevices',
//     },
//     {
//         label: 'Accounts',
//         icon: adAccounts,
//         badge: 10,
//         hasSubmenu: true,
//         route: '/admin/accounts',
//     },
//     {
//         label: 'Internal users',
//         icon: adUsers,
//         badge: 10,
//         hasSubmenu: true,
//         route: '/admin/internalusers',
//     },
//     {
//         label: 'Reports',
//         icon: adReports,
//         badge: 10,
//         hasSubmenu: true,
//         route: '/admin/reports',
//     },
//     {
//         label: 'Marketplace',
//         icon: adMarket,
//         badge: 10,
//         hasSubmenu: true,
//         route: '/admin/marketplace',
//     },
// ];

// export default function SidePannel() {
//     const { url } = usePage();

//     return (
//         <aside className="sticky top-0 z-20 flex hidden h-screen w-[320px] flex-shrink-0 flex-col border-r border-gray-200 bg-white font-sans lg:flex">
//             {/* --- 1. HEADER LOGO --- */}
//             <div className="px-6 pt-8 pb-4">
//                 <div className="mb-4 flex items-center">
//                     <Link href="/admin/dashboard">
//                         {/* <img  src={blackLogo} alt="Orderaire" className="h-6 w-auto object-contain" /> */}
//                         <BlackLogo className="h-10 w-48 object-contain" />
//                     </Link>
//                 </div>

//                 {/* --- 2. SEARCH BAR --- */}
//                 <div className="group relative w-full">
//                     {/* Left Icon Wrapper */}
//                     <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
//                         <div
//                             className="h-4 w-4 bg-[#9C94A3]"
//                             style={{
//                                 maskImage: `url(${searchIcon})`,
//                                 WebkitMaskImage: `url(${searchIcon})`,
//                                 maskSize: 'contain',
//                                 WebkitMaskSize: 'contain',
//                                 maskRepeat: 'no-repeat',
//                                 WebkitMaskRepeat: 'no-repeat',
//                                 maskPosition: 'center',
//                             }}
//                         />
//                     </span>

//                     {/* The Input Field */}
//                     <input
//                         type="text"
//                         placeholder="Search"
//                         className="placeholder-medium w-full rounded-lg border border-[#CFCBD2] bg-white py-2.5 pr-14 pl-10 text-[14px] text-gray-700 placeholder-[#9C94A3] shadow-sm transition-all focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                     />

//                     {/* Right Shortcut Badge */}
//                     <span className="absolute inset-y-0 right-0 flex items-center pr-4"></span>
//                 </div>
//             </div>

//             {/* --- 3. NAVIGATION --- */}
//             <div className="no-scrollbar flex-1 space-y-1 overflow-y-auto px-4 pb-4">
//                 {MENU_ITEMS.map((item, index) => {
//                     const isActive = url.startsWith(item.route);

//                     return (
//                         <Link
//                             key={index}
//                             href={item.route || '#'}
//                             className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
//                                 isActive
//                                     ? 'border border-lime-100 bg-[#F8FFEB] text-gray-900'
//                                     : 'border border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                             } `}
//                         >
//                             <div className="flex items-center gap-3">
//                                 <div
//                                     className={`h-5 w-5 transition-colors duration-200 ${
//                                         isActive
//                                             ? 'bg-[#8CDD05]'
//                                             : 'bg-gray-400 group-hover:bg-gray-600'
//                                     } `}
//                                     style={{
//                                         maskImage: `url(${item.icon})`,
//                                         WebkitMaskImage: `url(${item.icon})`,
//                                         maskSize: 'contain',
//                                         WebkitMaskSize: 'contain',
//                                         maskRepeat: 'no-repeat',
//                                         WebkitMaskRepeat: 'no-repeat',
//                                         maskPosition: 'center',
//                                         WebkitMaskPosition: 'center',
//                                     }}
//                                 />
//                                 <span>{item.label}</span>
//                             </div>

//                             <div className="flex items-center gap-2">
//                                 {item.badge && (
//                                     <span className="rounded-full border border-gray-200 bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-600">
//                                         {item.badge}
//                                     </span>
//                                 )}
//                                 {item.hasSubmenu && (
//                                     <svg
//                                         className="h-3.5 w-3.5 text-gray-400 transition-transform group-hover:text-gray-600"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M19 9l-7 7-7-7"
//                                         />
//                                     </svg>
//                                 )}
//                             </div>
//                         </Link>
//                     );
//                 })}
//             </div>

//             {/* --- 4. FOOTER --- */}
//             <div className="border-gray-200 bg-white p-4">
//                 <Link
//                     href="/admin/settings"
//                     className={`group mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
//                         url.startsWith('/admin/settings')
//                             ? 'border border-lime-100 bg-[#F8FFEB] text-gray-900'
//                             : 'border border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                     }`}
//                 >
//                     <div
//                         className={`h-5 w-5 transition-colors duration-200 ${
//                             url.startsWith('/admin/settings')
//                                 ? 'bg-[#8CDD05]'
//                                 : 'bg-gray-400 group-hover:bg-gray-600'
//                         }`}
//                         style={{
//                             maskImage: `url(${settingIcon})`,
//                             WebkitMaskImage: `url(${settingIcon})`,
//                             maskSize: 'contain',
//                             WebkitMaskSize: 'contain',
//                             maskRepeat: 'no-repeat',
//                             WebkitMaskRepeat: 'no-repeat',
//                             maskPosition: 'center',
//                             WebkitMaskPosition: 'center',
//                         }}
//                     />
//                     Settings
//                 </Link>
//                 <Link href="/admin/myprofile">
//                     <div className="group mt-2 flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-2 shadow-sm transition-colors hover:bg-gray-50">
//                         <div className="flex items-center">
//                             {/* 1. Image Container with Relative Positioning */}
//                             <div className="relative">
//                                 <img
//                                     src={profileImg}
//                                     alt="User"
//                                     className="h-10 w-10 rounded-full object-cover"
//                                 />
//                                 {/* 2. Green Status Dot */}
//                                 <span className="absolute right-0 bottom-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
//                             </div>

//                             {/* 3. Text Details */}
//                             <div className="ml-3">
//                                 <p className="text-sm font-semibold text-gray-700">
//                                     Olivia Rhye
//                                 </p>
//                                 <p className="text-xs text-gray-500">
//                                     olivia@untitledui.com
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </Link>
//             </div>
//         </aside>
//     );
// }

import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

// --- IMPORTS ---
import adAccounts from '@/shared/images/icons/adAccounts.svg';
import adCustomers from '@/shared/images/icons/adCustomers.svg';
import adGlobe from '@/shared/images/icons/adGlobe.svg';
import adInventory from '@/shared/images/icons/adInventory.svg';
import adMarket from '@/shared/images/icons/adMarket.svg';
import adMenu from '@/shared/images/icons/adMenu.svg';
import adOrders from '@/shared/images/icons/adOrders.svg';
import adPromotion from '@/shared/images/icons/adPromotion.svg';
import adReports from '@/shared/images/icons/adReports.svg';
import adScreen from '@/shared/images/icons/adScreen.svg';
import adUsers from '@/shared/images/icons/adUsers.svg';
import adWhatsapp from '@/shared/images/icons/adWhatsapp.svg';
import BlackLogo from '../../shared/images/icons/applogo.svg?react';
import chartIcon from '../../shared/images/icons/dashBaordSvg.svg';
import searchIcon from '../../shared/images/icons/inputSearch.svg';
import profileImg from '../../shared/images/icons/profile.svg';
import settingIcon from '../../shared/images/icons/settings.svg';

// --- DATA CONFIGURATION ---
const MENU_ITEMS = [
    { label: 'Dashboard', icon: chartIcon, route: '/admin/dashboard' },
    { label: 'Menu', icon: adMenu, hasSubmenu: true, route: '/admin/menu' },
    {
        label: 'Orders',
        icon: adOrders,
        hasSubmenu: true,
        route: '/admin/orders',
    },
    {
        label: 'Inventory',
        icon: adInventory,
        badge: 8,
        hasSubmenu: true,
        route: '/admin/inventory',
    },
    {
        label: 'Online Store',
        icon: adGlobe,
        hasSubmenu: true,
        route: '/admin/onlinestore',
    },
    {
        label: 'Promotions',
        icon: adPromotion,
        hasSubmenu: true,
        route: '/admin/promotions',
    },
    {
        label: 'Engage by ordenaire',
        icon: adWhatsapp,
        badge: 10,
        hasSubmenu: true,
        route: '/admin/engagebyordenaire',
    },
    {
        label: 'Customers',
        icon: adCustomers,
        hasSubmenu: true,
        badge: 10,
        route: '/admin/customers',
    },
    {
        label: 'Screens & Devices',
        icon: adScreen,
        badge: 10,
        hasSubmenu: true,
        route: '/admin/screensanddevices',
    },
    {
        label: 'Accounts',
        icon: adAccounts,
        badge: 10,
        hasSubmenu: true,
        route: '/admin/accounts',
    },
    {
        label: 'Internal users',
        icon: adUsers,
        badge: 10,
        hasSubmenu: true,
        route: '/admin/internalusers',
    },
    {
        label: 'Reports',
        icon: adReports,
        badge: 10,
        hasSubmenu: true,
        route: '/admin/reports',
    },
    {
        label: 'Marketplace',
        icon: adMarket,
        badge: 10,
        hasSubmenu: true,
        route: '/admin/marketplace',
    },
];

const iconMaskStyle = (icon) => ({
    maskImage: `url(${icon})`,
    WebkitMaskImage: `url(${icon})`,
    maskSize: 'contain',
    WebkitMaskSize: 'contain',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: 'center',
    WebkitMaskPosition: 'center',
});

export default function SidePannel() {
    const { url } = usePage();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={`sticky top-0 z-20 hidden h-screen flex-shrink-0 flex-col border-r border-gray-200 bg-white font-sans transition-all duration-300 ease-in-out lg:flex ${
                collapsed ? 'w-[72px]' : 'w-[320px]'
            }`}
        >
            {/* --- 1. HEADER LOGO + TOGGLE --- */}
            <div
                className={`relative px-4 pt-8 pb-4 ${collapsed ? 'flex justify-center' : 'px-6'}`}
            >
                {/* Logo — hidden when collapsed */}
                {!collapsed && (
                    <div className="mb-4 flex items-center">
                        <Link href="/admin/dashboard">
                            <BlackLogo className="h-10 w-48 object-contain" />
                        </Link>
                    </div>
                )}

                {/* Toggle button */}
                <button
                    onClick={() => setCollapsed((prev) => !prev)}
                    className={`absolute flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 ${
                        collapsed
                            ? 'top-4 right-[-12px]'
                            : 'top-9 right-[-12px]'
                    }`}
                    aria-label={
                        collapsed ? 'Expand sidebar' : 'Collapse sidebar'
                    }
                >
                    <svg
                        className={`h-3 w-3 text-gray-500 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Search bar — hidden when collapsed */}
                {!collapsed && (
                    <div className="group relative w-full">
                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                            <div
                                className="h-4 w-4 bg-[#9C94A3]"
                                style={iconMaskStyle(searchIcon)}
                            />
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="placeholder-medium w-full rounded-lg border border-[#CFCBD2] bg-white py-2.5 pr-14 pl-10 text-[14px] text-gray-700 placeholder-[#9C94A3] shadow-sm transition-all focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                        />
                    </div>
                )}

                {/* Search icon button when collapsed */}
                {collapsed && (
                    <div className="mt-10 flex justify-center">
                        <div
                            className="h-5 w-5 bg-gray-400"
                            style={iconMaskStyle(searchIcon)}
                        />
                    </div>
                )}
            </div>

            {/* --- 3. NAVIGATION --- */}
            <div className="no-scrollbar flex-1 space-y-1 overflow-y-auto px-2 pb-4">
                {MENU_ITEMS.map((item, index) => {
                    const isActive = url.startsWith(item.route);

                    return (
                        <Link
                            key={index}
                            href={item.route || '#'}
                            title={collapsed ? item.label : undefined}
                            className={`group relative flex items-center rounded-lg px-2 py-2.5 text-sm font-medium transition-all duration-200 ${
                                collapsed
                                    ? 'justify-center'
                                    : 'justify-between px-3'
                            } ${
                                isActive
                                    ? 'border border-lime-100 bg-[#F8FFEB] text-gray-900'
                                    : 'border border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                            <div
                                className={`flex items-center ${collapsed ? '' : 'gap-3'}`}
                            >
                                {/* Badge dot on icon when collapsed */}
                                <div className="relative flex-shrink-0">
                                    <div
                                        className={`h-5 w-5 transition-colors duration-200 ${
                                            isActive
                                                ? 'bg-[#8CDD05]'
                                                : 'bg-gray-400 group-hover:bg-gray-600'
                                        }`}
                                        style={iconMaskStyle(item.icon)}
                                    />
                                    {collapsed && item.badge && (
                                        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gray-500 text-[8px] font-bold text-white">
                                            {item.badge > 9 ? '9+' : item.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Label — hidden when collapsed */}
                                {!collapsed && <span>{item.label}</span>}
                            </div>

                            {/* Badge + chevron — hidden when collapsed */}
                            {!collapsed && (
                                <div className="flex items-center gap-2">
                                    {item.badge && (
                                        <span className="rounded-full border border-gray-200 bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-600">
                                            {item.badge}
                                        </span>
                                    )}
                                    {item.hasSubmenu && (
                                        <svg
                                            className="h-3.5 w-3.5 text-gray-400 transition-transform group-hover:text-gray-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    )}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* --- 4. FOOTER --- */}
            <div className="border-t border-gray-200 bg-white p-2">
                {/* Settings */}
                <Link
                    href="/admin/settings"
                    title={collapsed ? 'Settings' : undefined}
                    className={`group mb-1 flex items-center rounded-lg px-2 py-2.5 text-sm font-medium transition-colors duration-200 ${
                        collapsed ? 'justify-center' : 'gap-3 px-3'
                    } ${
                        url.startsWith('/admin/settings')
                            ? 'border border-lime-100 bg-[#F8FFEB] text-gray-900'
                            : 'border border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                    <div
                        className={`h-5 w-5 flex-shrink-0 transition-colors duration-200 ${
                            url.startsWith('/admin/settings')
                                ? 'bg-[#8CDD05]'
                                : 'bg-gray-400 group-hover:bg-gray-600'
                        }`}
                        style={iconMaskStyle(settingIcon)}
                    />
                    {!collapsed && 'Settings'}
                </Link>

                {/* Profile */}
                <Link href="/admin/myprofile">
                    <div
                        className={`group mt-2 flex cursor-pointer items-center rounded-lg border border-gray-100 p-2 shadow-sm transition-colors hover:bg-gray-50 ${
                            collapsed ? 'justify-center' : 'justify-between'
                        }`}
                        title={collapsed ? 'Olivia Rhye' : undefined}
                    >
                        <div
                            className={`flex items-center ${collapsed ? '' : ''}`}
                        >
                            <div className="relative flex-shrink-0">
                                <img
                                    src={profileImg}
                                    alt="User"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <span className="absolute right-0 bottom-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                            </div>

                            {!collapsed && (
                                <div className="ml-3">
                                    <p className="text-sm font-semibold text-gray-700">
                                        Olivia Rhye
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        olivia@untitledui.com
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </Link>
            </div>
        </aside>
    );
}
