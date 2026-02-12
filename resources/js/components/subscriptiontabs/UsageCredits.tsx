// const UsageCredits = () => {
//     return <div>UsageCredits</div>;
// };

// export default UsageCredits;

import { useState } from 'react';

// --- ICONS ---
// Ensure these paths match your project structure
import BellIcon from '@/images/icons/bell.svg?react'; // Assuming you have a bell icon
import ArrowDown from '@/images/icons/chevron-down.svg?react';
import EyeIcon from '@/images/icons/eyeIcon.svg?react'; // Assuming you have an eye icon, or replace with SVG
import Search from '@/images/icons/inputSearch.svg?react';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/images/icons/plus.svg?react';
import XIcon from '@/images/icons/x.svg?react'; // Close icon

// --- UI COMPONENTS ---
import Badge from '../Badge'; // Using your perfected Badge component
import ActionButton from '../ui/ActionButton';
import Button from '../ui/Button'; // Assuming you have a Button component
import { Input } from '../ui/FormElements'; // Assuming you have an Input component
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/Table';

// --- HELPER COMPONENTS ---
const FlagIcon = ({ code }: { code: string }) => {
    // Replace with your actual SVG imports if available
    const flags: Record<string, string> = {
        UAE: '🇦🇪',
        KSA: '🇸🇦',
        QAR: '🇶🇦',
        USA: '🇺🇸',
    };
    return (
        <span className="mr-2 text-lg leading-none">{flags[code] || '🏳️'}</span>
    );
};

const UsageAndCredits = () => {
    // --- STATE MANAGEMENT ---
    const [activeTab, setActiveTab] = useState<
        'chargeQueue' | 'creditBalances' | 'configurations'
    >('chargeQueue');

    // --- DATA: CHARGE QUEUE ---
    const chargeQueueData = [
        {
            id: 1,
            businessName: 'BurgerTown',
            busId: 'BIZ-4101',
            chargeRule: 'Active Staff',
            justification: {
                main: '7 Users (Limit: 5)',
                sub: 'Detected: 05 Jan',
            },
            status: 'Active', // Red-ish badge in image
            overageRate: '4.000 KWD',
            actions: ['Bill', 'Dismiss'],
        },
        {
            id: 2,
            businessName: 'Pasta Palace',
            busId: 'BIZ-4102',
            chargeRule: 'Menu Items',
            justification: { main: '+3 Extra Items', sub: 'Detected: 01 Jan' },
            status: 'Resolved', // Green badge
            overageRate: '2.000 KWD',
            actions: ['Bill', 'Dismiss'],
        },
        {
            id: 3,
            businessName: 'Sushi Central',
            busId: 'BIZ-4103',
            chargeRule: 'Kiosk Machine',
            justification: { main: '1 Device', sub: 'Purchased: 02 Jan' },
            status: 'One-Time', // Blue badge
            overageRate: '50.000 KWD',
            actions: ['Bill', 'Dismiss'],
        },
        {
            id: 4,
            businessName: 'Taco Haven',
            busId: 'BIZ-4104',
            chargeRule: 'Storage',
            justification: {
                main: '12 GB (Limit: 10)',
                sub: 'Detected: 01 Jan',
            },
            status: 'Waived', // Gray badge
            overageRate: '0.000 KWD',
            actions: [], // No actions shown for Waived
        },
        {
            id: 5,
            businessName: 'Pizza Paradise',
            busId: 'BIZ-4105',
            chargeRule: 'Menu Items',
            justification: { main: '+3 Extra Items', sub: 'Detected: 01 Jan' },
            status: 'Invoiced', // Purple badge
            overageRate: '2.000 KWD',
            actions: [], // No actions shown for Invoiced
        },
    ];

    // --- DATA: CREDIT BALANCES ---
    const creditBalancesData = [
        {
            id: 1,
            businessName: 'BurgerTown',
            busId: 'BIZ-4101',
            currentBalance: '120.000 KWD',
            status: 'Healthy', // Green Pill
            autoRecharge: 'ON',
            lastTopUp: '01 Jan 2026',
        },
        {
            id: 2,
            businessName: 'Pasta Palace',
            busId: 'BIZ-4102',
            currentBalance: '5.000 KWD',
            status: 'Low', // Orange Pill
            autoRecharge: 'OFF',
            lastTopUp: '02 Jan 2026',
        },
        {
            id: 3,
            businessName: 'Sushi Central',
            busId: 'BIZ-4103',
            currentBalance: '0.000 KWD',
            status: 'Empty', // Red Pill
            autoRecharge: 'OFF',
            lastTopUp: '-',
        },
        {
            id: 4,
            businessName: 'SpiceHub',
            busId: 'BIZ-4109',
            currentBalance: '0.000 KWD',
            status: 'Empty', // Red Pill
            autoRecharge: 'OFF',
            lastTopUp: '03 Jan 2026',
        },
    ];

    // --- DATA: CONFIGURATIONS (Usage Rates) ---
    const usageRatesData = [
        {
            activity: 'Active Staff',
            plan: 'Pro',
            limit: '5 Users',
            overage: '1.000 KWD',
            freq: 'Per 5 User / Monthly',
            status: 'Enabled',
        },
        {
            activity: 'Menu Items',
            plan: 'Enterprise',
            limit: '150 Items',
            overage: '2.000 KWD',
            freq: 'Per 50 Items / Monthly',
            status: 'Enabled',
        },
        {
            activity: 'Menu Items',
            plan: 'Pro',
            limit: '100 Items',
            overage: '2.000 KWD',
            freq: 'Per 50 Items / Monthly',
            status: 'Enabled',
        },
        {
            activity: 'POS Licenses',
            plan: 'Standard',
            limit: '3 Devices',
            overage: '5.000 KWD',
            freq: 'Per Device / Monthly',
            status: 'Enabled',
        },
        {
            activity: 'Kiosk Machines',
            plan: 'All Plans',
            limit: '0',
            overage: '50.000 KWD',
            freq: 'Per Device / Monthly',
            status: 'Enabled',
        },
        {
            activity: 'GenAI Usage',
            plan: 'Pro',
            limit: '1,000 Req',
            overage: '0.100 KWD',
            freq: 'Per 100 Req / Monthly',
            status: 'Disabled',
        },
    ];

    // --- DATA: CONFIGURATIONS (Currency) ---
    const currencyData = [
        {
            region: 'UAE Dirham (AED)',
            code: 'UAE',
            rate: '12.000',
            preview: '12.00 AED',
        },
        {
            region: 'Saudi Riyal (SAR)',
            code: 'KSA',
            rate: '12.250',
            preview: '12.25 SAR',
        },
        {
            region: 'Qatari Riyal (QAR)',
            code: 'QAR',
            rate: '12.100',
            preview: '12.10 QAR',
        },
        {
            region: 'US Dollar (USD)',
            code: 'USA',
            rate: '3.250',
            preview: '3.25 USD',
        },
    ];

    // --- HELPER: Get Badge Variant for Charge Queue ---
    const getChargeStatusVariant = (status: string): any => {
        switch (status) {
            case 'Active':
                return 'error'; // Using 'error' for Red/Orange look
            case 'Resolved':
                return 'success';
            case 'One-Time':
                return 'blue';
            case 'Waived':
                return 'gray';
            case 'Invoiced':
                return 'purple';
            default:
                return 'gray';
        }
    };

    // --- HELPER: Get Badge Variant for Credit Balance ---
    const getCreditStatusVariant = (status: string): any => {
        switch (status) {
            case 'Healthy':
                return 'success';
            case 'Low':
                return 'warning';
            case 'Empty':
                return 'error';
            default:
                return 'gray';
        }
    };

    return (
        <div className="w-full space-y-6">
            {/* --- TOP HEADER & TABS --- */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Usage & Credits
                </h1>

                {/* Navigation Row */}
                <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Pill Tabs */}
                    <div className="flex w-fit gap-1 rounded-lg bg-gray-50 p-1">
                        <button
                            onClick={() => setActiveTab('chargeQueue')}
                            className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === 'chargeQueue'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Charge Queue{' '}
                            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                100
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('creditBalances')}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === 'creditBalances'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Credit Balances
                        </button>
                        <button
                            onClick={() => setActiveTab('configurations')}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === 'configurations'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Configurations
                        </button>
                    </div>

                    {/* Search Bar (Only for Charge Queue & Credit Balances) */}
                    {activeTab !== 'configurations' && (
                        <div className="w-full md:w-80">
                            <Input
                                placeholder="Search by Business Name, ID..."
                                icon={Search}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* --- TAB CONTENT: CHARGE QUEUE --- */}
            {activeTab === 'chargeQueue' && (
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                        <h2 className="text-base font-semibold text-gray-900">
                            Usage Metrics Table
                        </h2>
                        <div className="flex gap-2">
                            {/* Mock Dropdown */}
                            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                Status: All{' '}
                                <ArrowDown className="h-4 w-4 text-gray-500" />
                            </button>
                            <Button className="bg-[#7AB621] hover:bg-[#6ba31b]">
                                <PlusIcon className="mr-2 h-4 w-4" /> Add Manual
                                Charge
                            </Button>
                        </div>
                    </div>
                    <TableContainerOne className="border-none shadow-none">
                        <Table>
                            <TableHeader>
                                <TableHead className="py-4 pl-6 text-xs font-semibold">
                                    Business Name
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Charge Rule / SKU
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Charge Justification
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Status
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Overage Rate
                                </TableHead>
                                <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
                                    Actions
                                </TableHead>
                            </TableHeader>
                            <TableBody>
                                {chargeQueueData.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                    >
                                        <TableCell className="py-4 pl-6">
                                            <div className="font-semibold text-gray-900">
                                                {item.businessName}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.busId}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 text-gray-600">
                                            {item.chargeRule}
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="font-medium text-gray-900">
                                                {item.justification.main}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.justification.sub}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <Badge
                                                variant={getChargeStatusVariant(
                                                    item.status,
                                                )}
                                                withDot={true}
                                                rounded="md"
                                            >
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="font-medium text-gray-900">
                                                {item.overageRate.split(' ')[0]}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.overageRate.split(' ')[1]}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 pr-6 text-right">
                                            {item.actions.length > 0 && (
                                                <div className="flex justify-end gap-2">
                                                    <button className="rounded-md border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
                                                        Bill
                                                    </button>
                                                    <button className="rounded-md border border-gray-300 p-1 text-gray-500 hover:bg-gray-50">
                                                        <XIcon className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainerOne>
                </div>
            )}

            {/* --- TAB CONTENT: CREDIT BALANCES --- */}
            {activeTab === 'creditBalances' && (
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                        <h2 className="text-base font-semibold text-gray-900">
                            Credit Balances Table
                        </h2>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                Status: All{' '}
                                <ArrowDown className="h-4 w-4 text-gray-500" />
                            </button>
                            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                All Configs{' '}
                                <ArrowDown className="h-4 w-4 text-gray-500" />
                            </button>
                        </div>
                    </div>
                    <TableContainerOne className="border-none shadow-none">
                        <Table>
                            <TableHeader>
                                <TableHead className="py-4 pl-6 text-xs font-semibold">
                                    Business Name
                                </TableHead>
                                <TableHead className="py-4 text-center text-xs font-semibold">
                                    Current Balance
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Status
                                </TableHead>
                                <TableHead className="py-4 text-center text-xs font-semibold">
                                    Auto-Recharge
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Last Top-up
                                </TableHead>
                                <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
                                    Actions
                                </TableHead>
                            </TableHeader>
                            <TableBody>
                                {creditBalancesData.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                    >
                                        <TableCell className="py-4 pl-6">
                                            <div className="font-semibold text-gray-900">
                                                {item.businessName}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.busId}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 text-center">
                                            <div className="font-medium text-gray-900">
                                                {
                                                    item.currentBalance.split(
                                                        ' ',
                                                    )[0]
                                                }
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {
                                                    item.currentBalance.split(
                                                        ' ',
                                                    )[1]
                                                }
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <Badge
                                                variant={getCreditStatusVariant(
                                                    item.status,
                                                )}
                                                withDot={true}
                                            >
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="py-4 text-center">
                                            <span
                                                className={`rounded-md border px-2 py-0.5 text-xs font-medium ${item.autoRecharge === 'ON' ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-gray-200 bg-gray-50 text-gray-500'}`}
                                            >
                                                {item.autoRecharge === 'ON'
                                                    ? '● ON'
                                                    : '● OFF'}
                                            </span>
                                        </TableCell>
                                        <TableCell className="py-4 text-sm text-gray-600">
                                            {item.lastTopUp}
                                        </TableCell>
                                        <TableCell className="py-4 pr-6 text-right">
                                            <div className="flex justify-end gap-2">
                                                {item.currentBalance ===
                                                    '0.000 KWD' ||
                                                item.currentBalance ===
                                                    '5.000 KWD' ? (
                                                    <button className="flex items-center gap-1 rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
                                                        <BellIcon className="h-3 w-3" />{' '}
                                                        Remind
                                                    </button>
                                                ) : null}
                                                <button className="flex items-center gap-1 rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
                                                    <EyeIcon className="h-3 w-3" />{' '}
                                                    History
                                                </button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainerOne>
                </div>
            )}

            {/* --- TAB CONTENT: CONFIGURATIONS --- */}
            {activeTab === 'configurations' && (
                <div className="space-y-6">
                    {/* 1. Usage & Add-on Rates Table */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <h2 className="text-base font-semibold text-gray-900">
                                Usage & Add-on Rates
                            </h2>
                            <Button className="bg-[#7AB621] hover:bg-[#6ba31b]">
                                <PlusIcon className="mr-2 h-4 w-4" /> Add New
                                Rate
                            </Button>
                        </div>
                        <TableContainerOne className="border-none shadow-none">
                            <Table>
                                <TableHeader>
                                    <TableHead className="py-4 pl-6 text-xs font-semibold">
                                        Activity / SKU
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Plan
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Included Limit
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Overage Rate
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Frequency
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Status
                                    </TableHead>
                                    <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {usageRatesData.map((item, idx) => (
                                        <TableRow
                                            key={idx}
                                            className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                        >
                                            <TableCell className="py-4 pl-6 font-medium text-gray-900">
                                                {item.activity}
                                            </TableCell>
                                            <TableCell className="py-4 text-gray-600">
                                                {item.plan}
                                            </TableCell>
                                            <TableCell className="py-4 text-gray-600">
                                                {item.limit}
                                            </TableCell>
                                            <TableCell className="py-4">
                                                <div className="font-medium text-gray-900">
                                                    {item.overage.split(' ')[0]}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {item.overage.split(' ')[1]}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 text-xs text-gray-600">
                                                {item.freq
                                                    .split(' / ')
                                                    .map((line, i) => (
                                                        <div key={i}>
                                                            {line}
                                                        </div>
                                                    ))}
                                            </TableCell>
                                            <TableCell className="py-4">
                                                <Badge
                                                    // Map 'Enabled' to 'active' (Green) and 'Disabled' to 'archived' (Red/Gray)
                                                    variant={
                                                        item.status ===
                                                        'Enabled'
                                                            ? 'active'
                                                            : 'archived'
                                                    }
                                                    withDot={true}
                                                    rounded="md"
                                                >
                                                    {item.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="py-4 pr-6 text-right">
                                                <ActionButton>
                                                    <PencilIcon className="h-4 w-4 text-gray-400" />
                                                </ActionButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </div>

                    {/* 2. Currency Conversion Rules */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <div>
                                <h2 className="text-base font-semibold text-gray-900">
                                    Currency Conversion Rules
                                </h2>
                                <p className="mt-1 text-xs text-gray-500">
                                    Manage fixed exchange rates for automatic
                                    overage pricing (Base Currency: KWD).
                                </p>
                            </div>
                            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                <PlusIcon className="h-4 w-4" /> Add Currency
                            </button>
                        </div>
                        <div className="space-y-4 p-6">
                            {currencyData.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                                >
                                    <div className="flex w-1/3 items-center gap-2">
                                        <FlagIcon code={item.code} />
                                        <span className="text-sm font-medium text-gray-900">
                                            {item.region}
                                        </span>
                                    </div>
                                    <div className="w-1/3">
                                        <input
                                            type="text"
                                            defaultValue={item.rate}
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621]"
                                        />
                                    </div>
                                    <div className="w-1/3 text-right text-sm font-medium text-gray-900">
                                        {item.preview}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="rounded-b-xl border-t border-gray-200 bg-gray-50 px-6 py-3 text-right">
                            <Button className="bg-[#7AB621] hover:bg-[#6ba31b]">
                                Update Rates
                            </Button>
                        </div>
                    </div>

                    {/* 3. Credit Rules */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="border-b border-gray-200 px-6 py-4">
                            <h2 className="text-base font-semibold text-gray-900">
                                Credit Rules
                            </h2>
                        </div>
                        <div className="p-6">
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Low Balance Threshold
                            </label>
                            <div className="relative max-w-sm">
                                <input
                                    type="text"
                                    defaultValue="20.000"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621]"
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <span className="text-gray-500 sm:text-sm">
                                        KWD
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-[#7AB621] focus:ring-[#7AB621]"
                                />
                                <span className="text-sm text-gray-700">
                                    Send email alert to customer when balance
                                    hits this
                                </span>
                            </div>
                        </div>
                        <div className="rounded-b-xl border-t border-gray-200 bg-gray-50 px-6 py-3 text-right">
                            <Button className="bg-[#7AB621] hover:bg-[#6ba31b]">
                                Update Rules
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsageAndCredits;
