import ActionButton from '@/components/ui/ActionButton';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import { ChevronDown, CreditCard, LayoutGrid, Search, Tag } from 'lucide-react';
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

interface RegionalOverride {
    flag: string;
    price: string;
    currency: string;
}

interface AppPricing {
    id: number;
    name: string;
    strategy: string;
    basePrice: string;
    overrides: RegionalOverride[] | 'Auto-Converted' | null;
}

const DATA: AppPricing[] = [
    {
        id: 1,
        name: 'QuickPay',
        strategy: 'Recurring (Subscription)',
        basePrice: '10.000 KWD',
        overrides: [
            { flag: '🇸🇦', price: '125', currency: 'SAR' },
            { flag: '🇶🇦', price: '125', currency: 'QAR' },
            { flag: '🇧🇭', price: '125', currency: 'BHD' },
        ],
    },
    {
        id: 2,
        name: 'FoodieCart',
        strategy: 'Recurring (Subscription)',
        basePrice: '50.000 KWD',
        overrides: 'Auto-Converted',
    },
    {
        id: 3,
        name: 'AdTrack360',
        strategy: 'Free Tier',
        basePrice: '0.000 KWD',
        overrides: null,
    },
    {
        id: 4,
        name: 'CleanRideGo',
        strategy: 'One-time License',
        basePrice: '100.000 KWD',
        overrides: [{ flag: '🇸🇦', price: '1,800', currency: 'SAR' }],
    },
];

export default function Monitizations() {
    const [search, setSearch] = useState('');

    const filtered = DATA.filter((d) =>
        d.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="space-y-6">
            {/* ── Stat Cards ───────────────────────────────────────── */}
            <div className="grid grid-cols-3 gap-4">
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <LayoutGrid className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Free Apps</p>
                        <p className="mt-0.5 text-2xl font-bold text-gray-900">
                            12
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <CreditCard className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Paid Apps</p>
                        <p className="mt-0.5 text-2xl font-bold text-gray-900">
                            8
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <Tag className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Avg. App Price</p>
                        <p className="mt-0.5 text-2xl font-bold text-gray-900">
                            15.000 KWD
                        </p>
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
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        Pricing: All{' '}
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        Status: Live Apps{' '}
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                </div>
            </div>

            {/* ── Pricing Table ─────────────────────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="px-6 pb-4">
                    <h2 className="text-base font-semibold text-gray-900">
                        Pricing Table (per app)
                    </h2>
                </div>
                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                App Name
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Pricing Strategy
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Base Price (KWD)
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Regional Overrides
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
                                        {app.strategy}
                                    </TableCell>
                                    <TableCell className="font-medium text-gray-900">
                                        {app.basePrice}
                                    </TableCell>
                                    <TableCell>
                                        {app.overrides === null && (
                                            <span className="text-gray-400">
                                                -
                                            </span>
                                        )}
                                        {app.overrides === 'Auto-Converted' && (
                                            <span className="text-sm text-gray-500">
                                                Auto-Converted
                                            </span>
                                        )}
                                        {Array.isArray(app.overrides) && (
                                            <div className="flex items-center gap-2">
                                                {(
                                                    app.overrides as RegionalOverride[]
                                                ).map((o, i) => (
                                                    <span
                                                        key={i}
                                                        className="flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                                                    >
                                                        <span>{o.flag}</span>
                                                        <span>
                                                            {o.price}{' '}
                                                            {o.currency}
                                                        </span>
                                                    </span>
                                                ))}
                                            </div>
                                        )}
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
