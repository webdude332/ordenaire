import Badge from '@/components/Badge';
import Menu from '@/images/icons/menuVertical.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import { Search } from 'lucide-react';
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
import ActionButton from '../ui/ActionButton';
import IconButton from '../ui/IconButton';

type InstallStatus = 'Pending' | 'Active' | 'Cancelled';

interface InstallItem {
    id: number;
    tenant: string;
    bizId: string;
    app: string;
    purchasedOn: string;
    status: InstallStatus;
}

const DATA: InstallItem[] = [
    {
        id: 1,
        tenant: 'BurgerTown',
        bizId: 'BIZ-2055',
        app: 'SMS Gateway',
        purchasedOn: '03 Sept 2025',
        status: 'Pending',
    },
    {
        id: 2,
        tenant: 'PizzaPalace',
        bizId: 'BIZ-2075',
        app: 'POS Sync',
        purchasedOn: '04 Sept 2025',
        status: 'Active',
    },
    {
        id: 3,
        tenant: 'TacoHaven',
        bizId: 'BIZ-2074',
        app: 'Email Marketing',
        purchasedOn: '05 Sept 2025',
        status: 'Cancelled',
    },
];

const statusVariant = (s: InstallStatus) =>
    s === 'Active' ? 'success' : s === 'Pending' ? 'warning' : 'gray';

export default function Installations() {
    const [search, setSearch] = useState('');

    const filtered = DATA.filter((d) =>
        d.tenant.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div>
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="text-base font-semibold text-gray-900">
                        Installation Requests
                    </h2>
                    <div className="relative">
                        <Search className="pointer-events-none absolute inset-y-0 left-3 my-auto h-4 w-4 text-gray-400" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by Business Name"
                            className="w-64 rounded-lg border border-gray-300 py-2 pr-3 pl-9 text-sm outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                        />
                    </div>
                </div>
                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Tenant / Business
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                App / Integration
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Purchased On <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {filtered.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <div className="font-medium text-gray-900">
                                            {item.tenant}
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            {item.bizId}
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-medium text-gray-900">
                                        {item.app}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.purchasedOn}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={statusVariant(item.status)}
                                            withDot
                                            rounded="md"
                                        >
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="flex justify-end">
                                        {item.status === 'Pending' && (
                                            <div className="flex items-center gap-2">
                                                <IconButton>
                                                    Mark as done
                                                </IconButton>
                                                <ActionButton>
                                                    <Menu />
                                                </ActionButton>
                                            </div>
                                        )}
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
