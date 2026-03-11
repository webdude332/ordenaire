import Badge from '@/components/Badge';
import ActionButton from '@/components/ui/ActionButton';
import Button from '@/components/ui/Button';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import { Download, Plus, Search, ShoppingBag, Wallet } from 'lucide-react';
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

// ─── Types ────────────────────────────────────────────────────────────────────

type AppStatus = 'Active' | 'Maintenance' | 'Inactive';

interface AppItem {
    id: number;
    name: string;
    category: string;
    status: AppStatus;
    pricing: string;
    installCount: number;
    lastUpdated: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TOP_APPS = [
    { name: 'Talabat', installs: '12,450' },
    { name: 'MyFatoorah', installs: '10,230' },
    { name: 'Deliveroo', installs: '8,125' },
    { name: 'Zyda', installs: '3,400' },
];

const CATALOGUE: AppItem[] = [
    {
        id: 1,
        name: 'Talabat',
        category: 'Delivery',
        status: 'Active',
        pricing: 'Free',
        installCount: 12450,
        lastUpdated: '03 Sept 2025',
    },
    {
        id: 2,
        name: 'MyFatoorah',
        category: 'Finance',
        status: 'Active',
        pricing: 'Free',
        installCount: 10230,
        lastUpdated: '04 Sept 2025',
    },
    {
        id: 3,
        name: 'Deliveroo',
        category: 'Delivery',
        status: 'Active',
        pricing: 'Free',
        installCount: 8125,
        lastUpdated: '05 Sept 2025',
    },
    {
        id: 4,
        name: 'QuickBooks',
        category: 'Finance',
        status: 'Active',
        pricing: '15 KWD',
        installCount: 550,
        lastUpdated: '06 Sept 2025',
    },
    {
        id: 5,
        name: 'Zyda',
        category: 'Marketing',
        status: 'Maintenance',
        pricing: '45 KWD',
        installCount: 3400,
        lastUpdated: '07 Sept 2025',
    },
    {
        id: 6,
        name: 'Cari',
        category: 'Delivery',
        status: 'Inactive',
        pricing: 'Free',
        installCount: 650,
        lastUpdated: '08 Sept 2025',
    },
];

const statusVariant = (s: AppStatus) =>
    s === 'Active' ? 'success' : s === 'Maintenance' ? 'warning' : 'gray';

// ─── Component ────────────────────────────────────────────────────────────────

export default function Overview() {
    const [search, setSearch] = useState('');

    const filtered = CATALOGUE.filter((a) =>
        a.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="space-y-6">
            {/* ── Stat Cards ───────────────────────────────────────── */}
            <div className="grid grid-cols-3 gap-4">
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <ShoppingBag className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">
                            Total Published Apps
                        </p>
                        <p className="mt-0.5 text-2xl font-bold text-gray-900">
                            145
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                            12 New this month
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <Download className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">
                            Active Installations
                        </p>
                        <p className="mt-0.5 text-2xl font-bold text-gray-900">
                            142,540
                        </p>
                        <p className="mt-0.5 flex items-center gap-1 text-xs text-green-600">
                            <span>↗ 8.2%</span>
                            <span className="text-gray-400">vs last month</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <Wallet className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">
                            Marketplace Revenue (MTD)
                        </p>
                        <p className="mt-0.5 text-2xl font-bold text-gray-900">
                            KWD 42,000
                        </p>
                        <p className="mt-0.5 flex items-center gap-1 text-xs text-green-600">
                            <span>↗ 12%</span>
                            <span className="text-gray-400">vs last month</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Top Performing Apps ───────────────────────────────── */}
            <div>
                <h2 className="mb-3 text-base font-semibold text-gray-900">
                    Top Performing Apps
                </h2>
                <div className="grid grid-cols-4 gap-4">
                    {TOP_APPS.map((app) => (
                        <div
                            key={app.name}
                            className="rounded-xl border border-gray-200 p-4"
                        >
                            <p className="text-sm text-gray-500">{app.name}</p>
                            <p className="mt-1 text-xl font-bold text-gray-900">
                                {app.installs} Installs
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── App Catalogue ─────────────────────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="text-base font-semibold text-gray-900">
                        App Catalogue
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="pointer-events-none absolute inset-y-0 left-3 my-auto h-4 w-4 text-gray-400" />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search"
                                className="rounded-lg border border-gray-300 py-2 pr-3 pl-9 text-sm outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                            />
                        </div>
                        <Button>
                            <Plus className="mr-1.5 h-4 w-4" />
                            Add New App
                        </Button>
                    </div>
                </div>
                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                App Name
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Category
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Pricing
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Install Count <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Last Updated <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {filtered.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell className="font-medium text-gray-900">
                                        {app.name}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {app.category}
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
                                    <TableCell className="text-gray-500">
                                        {app.pricing}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {app.installCount.toLocaleString()}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {app.lastUpdated}
                                    </TableCell>
                                    <TableCell>
                                        <ActionButton>
                                            <PencilIcon className="h-4 w-4 text-gray-400" />
                                        </ActionButton>
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
