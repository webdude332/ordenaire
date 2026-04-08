import { Link, usePage } from '@inertiajs/react';

// --- IMPORTS ---
import BlackLogo from '../../shared/images/icons/applogo.svg?react';
import businessIcon from '../../shared/images/icons/businessManagement.svg';
import chatIcon from '../../shared/images/icons/communicationManagement.svg';
import chartIcon from '../../shared/images/icons/dashBaordSvg.svg';
import searchIcon from '../../shared/images/icons/inputSearch.svg';
import supportIcon from '../../shared/images/icons/maintinanceAndSupport.svg';
import approvalIcon from '../../shared/images/icons/manageApprovals.svg';
import linkIcon from '../../shared/images/icons/marketPlace.svg';
import profileImg from '../../shared/images/icons/profile.svg';
import settingIcon from '../../shared/images/icons/settings.svg';
import repeatIcon from '../../shared/images/icons/subscriptionAndBilling.svg';
import monitorIcon from '../../shared/images/icons/systemConfig.svg';
import tickets from '../../shared/images/icons/tickets.svg';
import userEditIcon from '../../shared/images/icons/usermgmt.svg';

// --- DATA CONFIGURATION ---
const MENU_ITEMS = [
    { label: 'Dashboard', icon: chartIcon, route: '/superadmin/dashboard' },
    {
        label: 'Internal User Management',
        icon: userEditIcon,
        hasSubmenu: true,
        route: '/superadmin/usermanagement',
    },
    {
        label: 'Business Management',
        icon: businessIcon,
        hasSubmenu: true,
        route: '/superadmin/business-management',
    },
    {
        label: 'Subscription & Billing',
        icon: repeatIcon,
        badge: 8,
        hasSubmenu: true,
        route: '/superadmin/subscription-and-billing',
    },
    {
        label: 'System config',
        icon: monitorIcon,
        hasSubmenu: true,
        route: '/superadmin/system-config',
    },
    {
        label: 'Maintenance & Support',
        icon: supportIcon,
        hasSubmenu: true,
        route: '/superadmin/maintinance-and-support',
    },
    {
        label: 'Communication Mgmt',
        icon: chatIcon,
        badge: 10,
        hasSubmenu: true,
        route: '/superadmin/communication-management',
    },
    {
        label: 'Marketplace & Apps',
        icon: linkIcon,
        hasSubmenu: true,
        badge: 10,
        route: '/superadmin/marketplace-and-apps',
    },
    {
        label: 'Manage Approvals',
        icon: approvalIcon,
        badge: 10,
        hasSubmenu: true,
        route: '/superadmin/manage-approvals',
    },
    {
        label: 'My Tickets',
        icon: tickets,
        badge: 10,
        hasSubmenu: true,
        route: '/superadmin/my-tickets',
    },
];

export default function SidePannel() {
    const { url } = usePage();

    return (
        <aside className="sticky top-0 z-20 flex hidden h-screen w-[320px] flex-shrink-0 flex-col border-r border-gray-200 bg-white font-sans lg:flex">
            {/* --- 1. HEADER LOGO --- */}
            <div className="px-6 pt-8 pb-4">
                <div className="mb-4 flex items-center">
                    <Link href="/superadmin/dashboard">
                        {/* <img  src={blackLogo} alt="Orderaire" className="h-6 w-auto object-contain" /> */}
                        <BlackLogo className="h-10 w-48 object-contain" />
                    </Link>
                </div>

                {/* --- 2. SEARCH BAR --- */}
                <div className="group relative w-full">
                    {/* Left Icon Wrapper */}
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <div
                            className="h-4 w-4 bg-[#9C94A3]"
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
                        className="placeholder-medium w-full rounded-lg border border-[#CFCBD2] bg-white py-2.5 pr-14 pl-10 text-[14px] text-gray-700 placeholder-[#9C94A3] shadow-sm transition-all focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                    />

                    {/* Right Shortcut Badge */}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4"></span>
                </div>
            </div>

            {/* --- 3. NAVIGATION --- */}
            <div className="no-scrollbar flex-1 space-y-1 overflow-y-auto px-4 pb-4">
                {MENU_ITEMS.map((item, index) => {
                    const isActive = url.startsWith(item.route);

                    return (
                        <Link
                            key={index}
                            href={item.route || '#'}
                            className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                                isActive
                                    ? 'border border-lime-100 bg-[#F8FFEB] text-gray-900'
                                    : 'border border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            } `}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`h-5 w-5 transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-[#8CDD05]'
                                            : 'bg-gray-400 group-hover:bg-gray-600'
                                    } `}
                                    style={{
                                        maskImage: `url(${item.icon})`,
                                        WebkitMaskImage: `url(${item.icon})`,
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center',
                                    }}
                                />
                                <span>{item.label}</span>
                            </div>

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
                        </Link>
                    );
                })}
            </div>

            {/* --- 4. FOOTER --- */}
            <div className="border-gray-200 bg-white p-4">
                <Link
                    href="/superadmin/settings"
                    className={`group mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                        url.startsWith('/superadmin/settings')
                            ? 'border border-lime-100 bg-[#F8FFEB] text-gray-900'
                            : 'border border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                    <div
                        className={`h-5 w-5 transition-colors duration-200 ${
                            url.startsWith('/superadmin/settings')
                                ? 'bg-[#8CDD05]'
                                : 'bg-gray-400 group-hover:bg-gray-600'
                        }`}
                        style={{
                            maskImage: `url(${settingIcon})`,
                            WebkitMaskImage: `url(${settingIcon})`,
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center',
                        }}
                    />
                    Settings
                </Link>
                <Link href="/superadmin/myprofile">
                    <div className="group mt-2 flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-2 shadow-sm transition-colors hover:bg-gray-50">
                        <div className="flex items-center">
                            {/* 1. Image Container with Relative Positioning */}
                            <div className="relative">
                                <img
                                    src={profileImg}
                                    alt="User"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                {/* 2. Green Status Dot */}
                                <span className="absolute right-0 bottom-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                            </div>

                            {/* 3. Text Details */}
                            <div className="ml-3">
                                <p className="text-sm font-semibold text-gray-700">
                                    Olivia Rhye
                                </p>
                                <p className="text-xs text-gray-500">
                                    olivia@untitledui.com
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </aside>
    );
}
