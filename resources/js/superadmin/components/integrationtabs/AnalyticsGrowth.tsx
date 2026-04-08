import Badge from '@/superadmin/components/Badge';
import Download from '@shared/images/icons/donwloadgreen.svg?react';
import SearchIcon from '@shared/images/icons/inputSearch.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
import Sparkles from '@shared/images/icons/sparkles.svg?react';
import TrendIcon from '@shared/images/icons/trendGreen.svg?react';
import Trophy from '@shared/images/icons/trophy.svg?react';
import { ChevronDown } from 'lucide-react';
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
import { Input } from '../ui/FormElements';
import { IconCard } from '../ui/IconCard';

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
            {/*Analytics Panel*/}
            <div>
                <h2 className="mb-3 text-base font-semibold text-gray-900">
                    Analytics Panel
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    <IconCard
                        icon={Download}
                        title="Active Installations"
                        value="12,540"
                        trendIcon={TrendIcon}
                        trendValue="8.2 %"
                        description="vs last month"
                    />
                    <IconCard
                        icon={Trophy}
                        title="Top performing App"
                        value="Quick Pay"
                        // trendIcon={TrendIcon}
                        trendValue=""
                        description="35% of total installs"
                    />
                    <IconCard
                        icon={Sparkles}
                        title="New Installs "
                        value="850"
                        trendIcon={TrendIcon}
                        trendValue="12 %"
                        description="vs last month"
                    />
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between">
                <div className="relative">
                    <Input
                        className=""
                        placeholder="Search"
                        icon={SearchIcon}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Status: {statusFilter}{' '}
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
            </div>

            {/* App Performance Report */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="px-6 pb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
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
                                            rounded="md"
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
