import Badge from '@/components/Badge';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import { ChevronDown, Download, Search, Sparkles, Trophy } from 'lucide-react';
import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../OuterTable';
import Pagination from '../Pagination';

type AppStatus = 'Active' | 'Maintenance' | 'Inactive';

interface AppPerf {
    id: number;
    name: string;
    totalInstalls: number;
    monthlyGrowth: string;
    topRegion: string;
    topRegionFlag: string;
    topRegionPct: string;
    status: AppStatus;
}

const APPS: AppPerf[] = [
    {
        id: 1,
        name: 'QuickPay',
        totalInstalls: 4375,
        monthlyGrowth: '+12%',
        topRegion: 'Saudi Arabia',
        topRegionFlag: '🇸🇦',
        topRegionPct: '30%',
        status: 'Active',
    },
    {
        id: 2,
        name: 'FoodieCart',
        totalInstalls: 2750,
        monthlyGrowth: '+9%',
        topRegion: 'Kuwait',
        topRegionFlag: '🇰🇼',
        topRegionPct: '28%',
        status: 'Active',
    },
    {
        id: 3,
        name: 'AdTrack360',
        totalInstalls: 2250,
        monthlyGrowth: '+7%',
        topRegion: 'Qatar',
        topRegionFlag: '🇶🇦',
        topRegionPct: '15%',
        status: 'Maintenance',
    },
    {
        id: 4,
        name: 'CleanRideGo',
        totalInstalls: 1625,
        monthlyGrowth: '+5%',
        topRegion: 'Egypt',
        topRegionFlag: '🇪🇬',
        topRegionPct: '20%',
        status: 'Inactive',
    },
];

const statusVariant = (s: AppStatus) =>
    s === 'Active' ? 'success' : s === 'Maintenance' ? 'warning' : 'gray';

export default function AnalyticsGrowth() {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const filtered = APPS.filter(
        (a) =>
            a.name.toLowerCase().includes(search.toLowerCase()) &&
            (statusFilter === 'All' || a.status === statusFilter),
    );

    return (
        <div className="space-y-6">
            {/* ── Analytics Panel ───────────────────────────────────── */}
            <div>
                <h2 className="mb-3 text-base font-semibold text-gray-900">
                    Analytics Panel
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                            <Download className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">
                                Active Installations
                            </p>
                            <p className="mt-0.5 text-2xl font-bold text-gray-900">
                                12,540
                            </p>
                            <p className="mt-0.5 flex items-center gap-1 text-xs text-green-600">
                                <span>↗ 8.2%</span>
                                <span className="text-gray-400">
                                    vs last month
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                            <Trophy className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">
                                Top Performing App
                            </p>
                            <p className="mt-0.5 text-2xl font-bold text-gray-900">
                                QuickPay
                            </p>
                            <p className="mt-0.5 text-xs text-gray-400">
                                35% of total installs
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                            <Sparkles className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">
                                New Installs (Last 30 Days)
                            </p>
                            <p className="mt-0.5 text-2xl font-bold text-gray-900">
                                850
                            </p>
                            <p className="mt-0.5 flex items-center gap-1 text-xs text-green-600">
                                <span>↗ 12%</span>
                                <span className="text-gray-400">
                                    vs last month
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Filters ───────────────────────────────────────────── */}
            <div className="flex items-center justify-between">
                <div className="relative">
                    <Search className="pointer-events-none absolute inset-y-0 left-3 my-auto h-4 w-4 text-gray-400" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search apps..."
                        className="w-60 rounded-lg border border-gray-300 py-2 pr-3 pl-9 text-sm outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                    />
                </div>
                <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Status: {statusFilter}{' '}
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
            </div>

            {/* ── App Performance Report ────────────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="px-6 pb-4">
                    <h2 className="text-base font-semibold text-gray-900">
                        App Performance Report
                    </h2>
                </div>
                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                App Name
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Total Installs <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Monthly Growth <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Top Regions
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {filtered.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell className="font-medium text-gray-900">
                                        {app.name}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {app.totalInstalls.toLocaleString()}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {app.monthlyGrowth}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-base">
                                                {app.topRegionFlag}
                                            </span>
                                            <span className="text-sm text-gray-700">
                                                {app.topRegion} (
                                                {app.topRegionPct})
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={statusVariant(app.status)}
                                            withDot
                                            rounded="full"
                                        >
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
                <Pagination />
            </div>
        </div>
    );
}
