// import { Head } from '@inertiajs/react';
// import chartIcon from '@shared/images/icons/dashBaordSvg.svg';
// import { useState } from 'react';
// import AdminStatCard from '../components/AdminStatCard';
// import LineChart from '../components/LineChart';
// import NotificationPanel from '../components/NotificationPanel';
// import SidePannel from '../components/SidePannel';
// import TopBar from '../components/TopBar';
// import TopSellingItems from '../components/TopSellingItems';
// import WorkforceStatus from '../components/WorkforceStatus';

// export default function Dashboard() {
//     const [notifOpen, setNotifOpen] = useState(false);
//     const notifCount = 5;

//     return (
//         <div className="flex h-screen overflow-hidden font-sans">
//             <Head title="Admin Dashboard" />

//             {/* ── SIDEBAR ── */}
//             <SidePannel />

//             {/* ── MAIN AREA ── */}
//             <div className="no-scrollbar relative flex min-w-0 flex-1 flex-col overflow-x-hidden overflow-y-auto">
//                 {/* ── TOP BAR ── */}
//                 <TopBar
//                     title="Good Afternoon! John Doe"
//                     icon={chartIcon}
//                     breadcrumbs={[{ label: 'Dashboard', isActive: true }]}
//                 >
//                     {/* Branch selector */}
//                     <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
//                         <svg
//                             className="h-4 w-4 text-gray-400"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                             />
//                         </svg>
//                         Mirpur-1(Main)
//                         <svg
//                             className="h-3.5 w-3.5 text-gray-400"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M19 9l-7 7-7-7"
//                             />
//                         </svg>
//                     </button>

//                     {/* Language */}
//                     <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
//                         <span>🌐</span>
//                         English
//                         <svg
//                             className="h-3.5 w-3.5 text-gray-400"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M19 9l-7 7-7-7"
//                             />
//                         </svg>
//                     </button>

//                     {/* Open POS */}
//                     <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
//                         <svg
//                             className="h-4 w-4 text-gray-500"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                             />
//                         </svg>
//                         Open POS
//                     </button>

//                     {/* Bell */}
//                     <button
//                         onClick={() => setNotifOpen(true)}
//                         className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white transition-colors hover:bg-gray-50"
//                     >
//                         <svg
//                             className="h-4 w-4 text-gray-600"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                             />
//                         </svg>
//                         {notifCount > 0 && (
//                             <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
//                                 {notifCount}
//                             </span>
//                         )}
//                     </button>
//                 </TopBar>

//                 {/* ── PAGE CONTENT ── */}
//                 <main className="flex-1 space-y-6 p-8 pb-20">
//                     {/* ── OVERVIEW STAT CARDS ── */}
//                     <div>
//                         <p className="mb-3 text-xs font-semibold tracking-wide text-gray-400 uppercase">
//                             Overview
//                         </p>
//                         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//                             <AdminStatCard
//                                 title="Total Sales"
//                                 value="KWD 230.870"
//                                 iconBg="#FEF9C3"
//                                 iconBorderColor="#FDE68A"
//                                 icon={
//                                     <svg
//                                         className="h-5 w-5 text-yellow-500"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                                         />
//                                     </svg>
//                                 }
//                             />
//                             <AdminStatCard
//                                 title="Total Order"
//                                 value="17"
//                                 iconBg="#F5F3FF"
//                                 iconBorderColor="#DDD6FE"
//                                 icon={
//                                     <svg
//                                         className="h-5 w-5 text-purple-500"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
//                                         />
//                                     </svg>
//                                 }
//                             />
//                             <AdminStatCard
//                                 title="Average Order Value"
//                                 value="KWD 32.900"
//                                 iconBg="#EFF6FF"
//                                 iconBorderColor="#BFDBFE"
//                                 icon={
//                                     <svg
//                                         className="h-5 w-5 text-blue-500"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                                         />
//                                     </svg>
//                                 }
//                             />
//                             <AdminStatCard
//                                 title="Low Stock Items"
//                                 value={
//                                     <span className="text-red-600">
//                                         3 Items Critical
//                                     </span>
//                                 }
//                                 iconBg="#FEF2F2"
//                                 iconBorderColor="#FECACA"
//                                 icon={
//                                     <svg
//                                         className="h-5 w-5 text-red-500"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//                                         />
//                                     </svg>
//                                 }
//                             />
//                         </div>
//                     </div>

//                     {/* ── LIVE OPERATIONS ── */}
//                     <div>
//                         <p className="mb-3 text-xs font-semibold tracking-wide text-gray-400 uppercase">
//                             Live Operations
//                         </p>
//                         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//                             <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
//                                 <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
//                                     <svg
//                                         className="h-6 w-6 text-red-500"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-gray-500">
//                                         Pending
//                                     </p>
//                                     <p className="text-3xl font-bold text-gray-900">
//                                         17
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
//                                 <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
//                                     <svg
//                                         className="h-6 w-6 text-amber-500"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-gray-500">
//                                         Cooking/Preparing
//                                     </p>
//                                     <p className="text-3xl font-bold text-gray-900">
//                                         0
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
//                                 <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
//                                     <svg
//                                         className="h-6 w-6 text-green-500"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-gray-500">
//                                         Order Prepared
//                                     </p>
//                                     <p className="text-3xl font-bold text-gray-900">
//                                         3
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ── LINE CHART ── */}
//                     <div className="h-[420px]">
//                         <LineChart />
//                     </div>

//                     {/* ── BOTTOM ROW ── */}
//                     <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//                         <WorkforceStatus />
//                         <TopSellingItems />
//                     </div>
//                 </main>
//             </div>

//             {/* ── NOTIFICATION PANEL ── */}
//             <NotificationPanel
//                 open={notifOpen}
//                 onClose={() => setNotifOpen(false)}
//             />
//         </div>
//     );
// }

import { Head } from '@inertiajs/react';
import chartIcon from '@shared/images/icons/dashBaordSvg.svg';
import { useState } from 'react';
import AdminStatCard from '../components/AdminStatCard';
import LineChart from '../components/LineChart';
import NotificationPanel from '../components/NotificationPanel';
import OrderSummaryBar from '../components/OrderSummaryBar';
import SidePannel from '../components/SidePannel';
import TopBar from '../components/TopBar';
import TopSellingItems from '../components/TopSellingItems';
import WorkforceStatus from '../components/WorkforceStatus';

export default function Dashboard() {
    const [notifOpen, setNotifOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'Sales' | 'Order Summary'>(
        'Sales',
    );
    const [activeFilter, setActiveFilter] = useState('7 days');

    const notifCount = 5;

    return (
        <div className="flex h-screen overflow-hidden font-sans">
            <Head title="Admin Dashboard" />

            {/* ── SIDEBAR ── */}
            <SidePannel />

            {/* ── MAIN AREA ── */}
            <div className="no-scrollbar relative flex min-w-0 flex-1 flex-col overflow-x-hidden overflow-y-auto bg-[#FAFAFA]">
                {/* ── TOP BAR ── */}
                <TopBar
                    title="Good Afternoon! John Doe"
                    icon={chartIcon}
                    breadcrumbs={[{ label: 'Dashboard', isActive: true }]}
                >
                    {/* Branch selector */}
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        <svg
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                        </svg>
                        Mirpur-1(Main)
                        <svg
                            className="h-3.5 w-3.5 text-gray-400"
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
                    </button>

                    {/* Language */}
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        <span>🌐</span>
                        English
                        <svg
                            className="h-3.5 w-3.5 text-gray-400"
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
                    </button>

                    {/* Open POS */}
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        <svg
                            className="h-4 w-4 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        Open POS
                    </button>

                    {/* Bell */}
                    <button
                        onClick={() => setNotifOpen(true)}
                        className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white transition-colors hover:bg-gray-50"
                    >
                        <svg
                            className="h-4 w-4 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                        {notifCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                                {notifCount}
                            </span>
                        )}
                    </button>
                </TopBar>

                {/* ── PAGE CONTENT ── */}
                <main className="flex-1 space-y-6 p-8 pb-20">
                    {/* ── OVERVIEW STAT CARDS ── */}
                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                            Overview
                        </p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <AdminStatCard
                                title="Total Sales"
                                value="KWD 230.870"
                                iconBg="#FEF9C3"
                                iconBorderColor="#FDE68A"
                                icon={
                                    <svg
                                        className="h-5 w-5 text-yellow-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                }
                            />
                            <AdminStatCard
                                title="Total Order"
                                value="17"
                                iconBg="#F5F3FF"
                                iconBorderColor="#DDD6FE"
                                icon={
                                    <svg
                                        className="h-5 w-5 text-purple-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                        />
                                    </svg>
                                }
                            />
                            <AdminStatCard
                                title="Average Order Value"
                                value="KWD 32.900"
                                iconBg="#EFF6FF"
                                iconBorderColor="#BFDBFE"
                                icon={
                                    <svg
                                        className="h-5 w-5 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                }
                            />
                            <AdminStatCard
                                title="Low Stock Items"
                                value={
                                    <span className="text-red-600">
                                        3 Items Critical
                                    </span>
                                }
                                iconBg="#FEF2F2"
                                iconBorderColor="#FECACA"
                                icon={
                                    <svg
                                        className="h-5 w-5 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                }
                            />
                        </div>
                    </div>

                    {/* ── LIVE OPERATIONS ── */}
                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                            Live Operations
                        </p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                                    <svg
                                        className="h-6 w-6 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Pending
                                    </p>
                                    <p className="text-3xl font-bold text-gray-900">
                                        17
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                                    <svg
                                        className="h-6 w-6 text-amber-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Cooking/Preparing
                                    </p>
                                    <p className="text-3xl font-bold text-gray-900">
                                        0
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                                    <svg
                                        className="h-6 w-6 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Order Prepared
                                    </p>
                                    <p className="text-3xl font-bold text-gray-900">
                                        3
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── CHARTS WITH TABS ── */}
                    <div className="flex flex-col gap-3">
                        {/* Tabs Row */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setActiveTab('Sales')}
                                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                                    activeTab === 'Sales'
                                        ? 'border border-gray-200 bg-white text-gray-900 shadow-sm'
                                        : 'border border-transparent text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                Sales
                            </button>
                            <button
                                onClick={() => setActiveTab('Order Summary')}
                                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                                    activeTab === 'Order Summary'
                                        ? 'border border-gray-200 bg-white text-gray-900 shadow-sm'
                                        : 'border border-transparent text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                Order Summary
                            </button>
                        </div>

                        {/* Graph Card */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
                            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                {/* Conditional Left Top Stats (Only for Sales) */}
                                {activeTab === 'Sales' ? (
                                    <div className="flex flex-wrap gap-4">
                                        {/* Total Sales */}
                                        <div className="min-w-[160px] rounded-xl border border-gray-200 p-4">
                                            <p className="mb-1 text-sm font-medium text-gray-500">
                                                Total sales
                                            </p>
                                            <p className="mb-1 text-xl font-bold text-gray-900">
                                                48,000 KWD
                                            </p>
                                            <p className="flex items-center text-xs font-medium text-green-500">
                                                <svg
                                                    className="mr-1 h-3.5 w-3.5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M7 17L17 7M17 17V7H7"
                                                    />
                                                </svg>
                                                12.5% vs last week
                                            </p>
                                        </div>
                                        {/* Avg Sales Per Day */}
                                        <div className="min-w-[160px] rounded-xl border border-[#79B800] p-4">
                                            <p className="mb-1 text-sm font-medium text-gray-500">
                                                Avg. sales per day
                                            </p>
                                            <p className="mb-1 text-xl font-bold text-gray-900">
                                                32.900 KWD
                                            </p>
                                            <p className="flex items-center text-xs font-medium text-red-500">
                                                <svg
                                                    className="mr-1 h-3.5 w-3.5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M7 7L17 17M17 7v10H7"
                                                    />
                                                </svg>
                                                12.5% vs last week
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="hidden lg:block"></div>
                                )}

                                {/* Date Filters (Present on both tabs) */}
                                <div className="flex shrink-0 items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
                                    <div className="flex shrink-0 items-center rounded-lg border border-gray-200 bg-white p-1">
                                        {[
                                            '12 months',
                                            '30 days',
                                            '7 days',
                                            '24 hours',
                                        ].map((filter) => (
                                            <button
                                                key={filter}
                                                onClick={() =>
                                                    setActiveFilter(filter)
                                                }
                                                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                                                    activeFilter === filter
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-500 hover:text-gray-900'
                                                }`}
                                            >
                                                {filter}
                                            </button>
                                        ))}
                                    </div>
                                    <button className="flex shrink-0 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50">
                                        <svg
                                            className="h-4 w-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        Select dates
                                    </button>
                                </div>
                            </div>

                            {/* Chart Display Area */}
                            <div className="h-[320px] w-full">
                                {activeTab === 'Sales' ? (
                                    <LineChart />
                                ) : (
                                    <OrderSummaryBar />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ── BOTTOM ROW ── */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <WorkforceStatus />
                        <TopSellingItems />
                    </div>
                </main>
            </div>

            {/* ── NOTIFICATION PANEL ── */}
            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
}
