import Badge from '@/components/Badge';
import AddAppModal from '@/components/Modals/AddAppModal';
import EditAppModal from '@/components/Modals/EditAppModal';
import ActionButton from '@/components/ui/ActionButton';
import Button from '@/components/ui/Button';
import Download from '@/images/icons/donwloadgreen.svg?react';
import SearchIcon from '@/images/icons/inputSearch.svg?react';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import Publish from '@/images/icons/publish.svg?react';
import Revenue from '@/images/icons/revenuegreen.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import TrendIcon from '@/images/icons/trendGreen.svg?react';
import { Plus } from 'lucide-react';
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
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);

    const filtered = CATALOGUE.filter((a) =>
        a.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="space-y-6">
            {/* ── Stat Cards ───────────────────────────────────────── */}
            <div className="grid grid-cols-3 gap-4">
                <IconCard
                    icon={Publish}
                    title="Total Subscribers"
                    value="71,897"
                    description="12 New This Month"
                />
                <IconCard
                    icon={Download}
                    title="Active Installations"
                    value="142,540"
                    trendIcon={TrendIcon}
                    trendValue="8.2 %"
                    description=" vs last Month"
                />
                <IconCard
                    icon={Revenue}
                    title="Market Place Revenew (MTD)"
                    value="KWD 42,000"
                    trendIcon={TrendIcon}
                    trendValue="12 %"
                    description="VS Last Month"
                />
            </div>

            {/* ── Top Performing Apps ───────────────────────────────── */}
            <div>
                <h2 className="mb-3 text-lg font-semibold text-gray-900">
                    Top Performing Apps
                </h2>
                <div className="grid grid-cols-4 gap-4">
                    {TOP_APPS.map((app) => (
                        <div
                            key={app.name}
                            className="rounded-xl border border-gray-200 p-5"
                        >
                            <p className="text-sm font-medium text-gray-500">
                                {app.name}
                            </p>
                            <p className="mt-1 text-xl font-semibold text-gray-900">
                                {app.installs} Installs
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="shrink-0 text-lg font-semibold text-gray-900">
                        App Catalogue
                    </h2>
                    <div className="flex items-center gap-3">
                        <Input
                            className=""
                            placeholder="Search"
                            icon={SearchIcon}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button
                            className="flex shrink-0 items-center py-2.5 whitespace-nowrap"
                            onClick={() => setIsAddModalOpen(true)}
                        >
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
                                        <ActionButton
                                            onClick={() => {
                                                setSelectedApp(app);
                                                setIsEditModalOpen(true);
                                            }}
                                        >
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

            {/* ── Modals ─────────────────────────────────────────────── */}
            <AddAppModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onConfirm={() => setIsAddModalOpen(false)}
            />

            <EditAppModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedApp(null);
                }}
                onConfirm={() => {
                    setIsEditModalOpen(false);
                    setSelectedApp(null);
                }}
                app={selectedApp}
            />
        </div>
    );
}
