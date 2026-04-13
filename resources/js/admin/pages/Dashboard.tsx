import AdCircle from '@/shared/images/icons/adCircleCheck.svg?react';
import AdCube from '@/shared/images/icons/adCube.svg?react';
import AdCube1 from '@/shared/images/icons/adCube1.svg?react';
import AdDb from '@/shared/images/icons/adDb.svg?react';
import adDelivery from '@/shared/images/icons/adDelivery.svg';
import dish from '@/shared/images/icons/adDish.svg';
import AdDollar from '@/shared/images/icons/adDolloar.svg?react';
import adFinance from '@/shared/images/icons/adFinance.svg';
import adKitchen from '@/shared/images/icons/adKitchen.svg';
import adMgmt from '@/shared/images/icons/adMgmt.svg';
import adNewUsers from '@/shared/images/icons/adNewUsers.svg';
import AdNote from '@/shared/images/icons/adNote.svg?react';
import AdTimer from '@/shared/images/icons/adTimer.svg?react';
import VerticalMenu from '@/shared/images/icons/menuVertical.svg?react';
import TrendGreen from '@/shared/images/icons/trendGreen.svg?react';
import TrendRed from '@/shared/images/icons/trendRed.svg?react';
import { Head } from '@inertiajs/react';
import chartIcon from '@shared/images/icons/dashBaordSvg.svg';
import { useState } from 'react';
import AdminStatCard from '../components/AdminStatCard';
import LineChart from '../components/LineChart';
import NotificationPanel from '../components/NotificationPanel';
import OrderSummaryBar from '../components/OrderSummaryBar';
import SidePannel from '../components/SidePannel';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '../components/Table';
import TopBar from '../components/TopBar';

export default function Dashboard() {
    const [notifOpen, setNotifOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'Sales' | 'Order Summary'>(
        'Sales',
    );
    const [activeFilter, setActiveFilter] = useState('7 days');

    const notifCount = 5;
    const workforceData = [
        {
            team: 'Front of House',
            count: 4,
            status: 'Present',
            emoji: adNewUsers,
        },
        { team: 'Kitchen Team', count: 8, status: 'Present', emoji: adKitchen },
        { team: 'Management', count: 2, status: 'Online', emoji: adMgmt },
        { team: 'Finance', count: 0, status: 'Online', emoji: adFinance },
        {
            team: 'Delivery Fleet',
            count: 14,
            status: 'Online',
            emoji: adDelivery,
        },
    ];
    const topSellingData = [
        {
            name: 'Grilled Lemon Herb Chicken',
            category: 'Main course',
            orders: '72 orders',
            price: 'KWD 3.000',
            emoji: dish, // Your single placeholder icon
        },
        {
            name: 'Creamy Avocado Toast',
            category: 'Breakfast',
            orders: '42 orders',
            price: 'KWD 3.200',
            emoji: dish,
        },
        {
            name: 'Wild Mushroom Risotto',
            category: 'Vegetarian',
            orders: '15 orders',
            price: 'KWD 3.200',
            emoji: dish,
        },
        {
            name: 'Zesty Shrimp Tacos',
            category: 'Seafood',
            orders: '12 orders',
            price: 'KWD 2.000',
            emoji: dish,
        },
        {
            name: 'Chocolate Lava Cake',
            category: 'Dessert',
            orders: '10 orders',
            price: 'KWD 2.200',
            emoji: dish,
        },
    ];

    return (
        <div className="flex h-screen overflow-hidden font-sans">
            <Head title="Admin Dashboard" />

            {/* ── SIDEBAR ── */}
            <SidePannel />

            {/* ── MAIN AREA ── */}
            <div className="no-scrollbar relative flex min-w-0 flex-1 flex-col overflow-x-hidden overflow-y-auto">
                {/* ── TOP BAR ── */}
                <TopBar
                    title="Good Afternoon! John Doe"
                    icon={chartIcon}
                    breadcrumbs={[
                        {
                            label: 'Dashboard',
                            isActive: true,
                            href: '/admin/dashboard',
                        },
                    ]}
                ></TopBar>

                {/* ── PAGE CONTENT ── */}
                <main className="flex-1 space-y-6 p-8 pb-20">
                    {/* ── OVERVIEW STAT CARDS ── */}
                    <div>
                        <p className="mb-3 text-lg font-semibold tracking-wide text-gray-900">
                            Overview
                        </p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <AdminStatCard
                                title="Total Sales"
                                value="KWD 230.870"
                                ringColor="#EAB308"
                                icon={<AdDollar className="h-6 w-6" />}
                            />
                            <AdminStatCard
                                title="Total Order"
                                value="17"
                                ringColor="#D444F1"
                                icon={<AdCube className="h-6 w-6" />}
                            />
                            <AdminStatCard
                                title="Average Order Value"
                                value="KWD 32.900"
                                ringColor="#00C0E8"
                                icon={<AdDb className="h-6 w-6" />}
                            />
                            <AdminStatCard
                                title="Low Stock Items"
                                value="3 Items Critical"
                                ringColor="#FF0019"
                                icon={<AdNote className="h-6 w-6" />}
                            />
                        </div>
                    </div>

                    {/* ── LIVE OPERATIONS ── */}
                    <div>
                        <p className="mb-3 text-lg font-semibold text-gray-900">
                            Live Operations
                        </p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-7 shadow-xs">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FDA29B]">
                                    <AdCube1 className="h-6 w-6" />
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
                            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-7 shadow-xs">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FEC84B]">
                                    <AdTimer className="h-6 w-6" />
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
                            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-7 shadow-xs">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#A6EF67]">
                                    <AdCircle className="h-6 w-6" />
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

                        <div className="rounded-xl border border-gray-200 bg-white shadow-xs">
                            <div className="flex items-center px-8 pt-6">
                                <div className="flex items-center gap-2 rounded-lg border border-borderColor bg-gray-50 px-1.5 py-1">
                                    <button
                                        onClick={() => setActiveTab('Sales')}
                                        className={`cursor-pointer rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                                            activeTab === 'Sales'
                                                ? 'border border-gray-200 bg-white text-gray-900 shadow-sm'
                                                : 'border border-transparent text-gray-500 hover:text-gray-900'
                                        }`}
                                    >
                                        Sales
                                    </button>
                                    <button
                                        onClick={() =>
                                            setActiveTab('Order Summary')
                                        }
                                        className={`cursor-pointer rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                                            activeTab === 'Order Summary'
                                                ? 'border border-gray-200 bg-white text-gray-900 shadow-sm'
                                                : 'border border-transparent text-gray-500 hover:text-gray-900'
                                        }`}
                                    >
                                        Order Summary
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 mb-6 flex flex-col gap-4 rounded-t-xl border-t border-borderColor pt-6 lg:flex-row lg:items-start lg:justify-between">
                                {/* Conditional Left Top Stats (Only for Sales) */}
                                {activeTab === 'Sales' ? (
                                    <div className="flex flex-wrap gap-4 px-8">
                                        {/* Total Sales */}
                                        <div className="min-w-[200px] rounded-xl border border-gray-200 p-4">
                                            <p className="mb-1 text-sm font-medium text-gray-500">
                                                Total sales
                                            </p>
                                            <p className="mb-1 text-xl font-bold text-gray-900">
                                                48,000 KWD
                                            </p>
                                            <p className="flex items-center text-xs font-medium text-green-500">
                                                <TrendGreen />
                                                12.5% vs last week
                                            </p>
                                        </div>
                                        {/* Avg Sales Per Day */}
                                        <div className="min-w-[200px] rounded-xl border border-[#79B800] p-4">
                                            <p className="mb-1 text-sm font-medium text-gray-500">
                                                Avg. sales per day
                                            </p>
                                            <p className="mb-1 text-xl font-bold text-gray-900">
                                                32.900 KWD
                                            </p>
                                            <p className="flex items-center text-xs font-medium text-red-500">
                                                <TrendRed />
                                                12.5% vs last week
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="hidden lg:block"></div>
                                )}

                                {/* Date Filters (Present on both tabs) */}
                                <div className="flex shrink-0 items-center gap-2 overflow-x-auto px-8 pb-2 lg:pb-0">
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
                            <div className="h-[420px] w-full">
                                {activeTab === 'Sales' ? (
                                    <LineChart />
                                ) : (
                                    <OrderSummaryBar />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ── BOTTOM ROW ── */}
                    <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* <WorkforceStatus /> */}
                        <TableContainer>
                            {/* Card Header (Kept outside the actual table tag) */}
                            <div className="flex justify-between border-b border-borderColor px-6 py-5">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Live Workforce Status
                                </h2>
                                <VerticalMenu />
                            </div>

                            {/* The Table Content */}
                            <Table>
                                <TableBody>
                                    {workforceData.map((item, i) => (
                                        <TableRow
                                            key={i}
                                            className="hover:bg-transparent"
                                        >
                                            {/* Left Cell: Icon and Team Name */}
                                            <TableCell className="py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                                                        {typeof item.emoji ===
                                                        'string' ? (
                                                            <img
                                                                src={item.emoji}
                                                                alt={item.team}
                                                                className="h-5 w-5 object-contain opacity-80"
                                                            />
                                                        ) : (
                                                            <span>
                                                                {item.emoji}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900">
                                                        {item.team}
                                                    </span>
                                                </div>
                                            </TableCell>

                                            {/* Right Cell: Count and Status */}
                                            <TableCell className="py-4">
                                                <span className="text-sm text-gray-500">
                                                    {item.count} {item.status}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* <TopSellingItems /> */}
                        <TableContainer>
                            {/* Card Header */}
                            <div className="flex justify-between border-b border-borderColor px-6 py-5">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Top Selling Items
                                </h2>
                                <VerticalMenu />
                            </div>

                            {/* Table Content */}
                            <Table>
                                <TableBody>
                                    {topSellingData.map((item, i) => (
                                        <TableRow
                                            key={i}
                                            className="hover:bg-transparent"
                                        >
                                            {/* Left Cell: Icon + Name & Category */}
                                            <TableCell className="py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                                                        {typeof item.emoji ===
                                                        'string' ? (
                                                            <img
                                                                src={item.emoji}
                                                                alt={item.name}
                                                                className="h-5 w-5 object-contain opacity-80"
                                                            />
                                                        ) : (
                                                            <span>
                                                                {item.emoji}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="text-sm font-medium text-gray-900">
                                                            {item.name}
                                                        </span>
                                                        <span className="text-sm text-gray-400">
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                </div>
                                            </TableCell>

                                            {/* Right Cell: Orders & Price */}
                                            <TableCell className="py-4 text-right">
                                                <div className="flex flex-col items-end gap-0.5">
                                                    <span className="text-sm font-semibold text-gray-900">
                                                        {item.orders}
                                                    </span>
                                                    <span className="text-sm text-gray-400">
                                                        {item.price}
                                                    </span>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
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
