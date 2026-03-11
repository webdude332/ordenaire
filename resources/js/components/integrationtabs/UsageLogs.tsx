import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import {
    AlertCircle,
    ChevronDown,
    Eye,
    Phone,
    Search,
    Zap,
} from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../OuterTable';

type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';
type LogStatus = '201 Created' | '401 Unauth' | '500 Error';

interface LogItem {
    id: number;
    time: string;
    date: string;
    method: HttpMethod;
    endpoint: string;
    client: string;
    status: LogStatus;
    latency: string;
}

const LOGS: LogItem[] = [
    {
        id: 1,
        time: '14:30:05',
        date: '3 Sep 2025',
        method: 'POST',
        endpoint: '/api/v1/orders',
        client: 'QuickPay',
        status: '201 Created',
        latency: '350ms',
    },
    {
        id: 2,
        time: '14:28:10',
        date: '3 Sep 2025',
        method: 'GET',
        endpoint: '/api/v1/users',
        client: 'AdTrack360',
        status: '401 Unauth',
        latency: '12ms',
    },
    {
        id: 3,
        time: '14:15:00',
        date: '3 Sep 2025',
        method: 'POST',
        endpoint: '/api/v1/sync',
        client: 'Internal',
        status: '500 Error',
        latency: '5.0s',
    },
];

const methodStyle = (m: HttpMethod) => {
    if (m === 'POST') return 'bg-blue-100 text-blue-700 border border-blue-200';
    if (m === 'GET') return 'bg-gray-100 text-gray-600 border border-gray-200';
    if (m === 'PUT')
        return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
    return 'bg-red-100 text-red-700 border border-red-200';
};

const statusStyle = (s: LogStatus) => {
    if (s === '201 Created')
        return 'bg-green-50 text-green-700 border border-green-200';
    if (s === '401 Unauth')
        return 'bg-orange-50 text-orange-600 border border-orange-200';
    return 'bg-red-50 text-red-600 border border-red-200';
};

const statusDot = (s: LogStatus) => {
    if (s === '201 Created') return 'bg-green-500';
    if (s === '401 Unauth') return 'bg-orange-500';
    return 'bg-red-500';
};

export default function UsageLogs() {
    return (
        <div className="space-y-6">
            {/* ── Stat Cards ───────────────────────────────────────── */}
            <div className="grid grid-cols-3 gap-4">
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <Phone className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Calls</p>
                        <div className="mt-0.5 flex items-center gap-2">
                            <p className="text-2xl font-bold text-gray-900">
                                1.2M calls
                            </p>
                            <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-600">
                                ↗ 7.4% vs last month
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <AlertCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Error Rate</p>
                        <div className="mt-0.5 flex items-center gap-2">
                            <p className="text-2xl font-bold text-gray-900">
                                1.2%
                            </p>
                            <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-600">
                                ↘ 0.5% vs last month
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <Zap className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Avg Latency</p>
                        <p className="mt-0.5 text-2xl font-bold text-gray-900">
                            350ms
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Filters ───────────────────────────────────────────── */}
            <div className="flex items-center justify-between">
                <div className="relative">
                    <Search className="pointer-events-none absolute inset-y-0 left-3 my-auto h-4 w-4 text-gray-400" />
                    <input
                        placeholder="Search Request ID..."
                        className="w-64 rounded-lg border border-gray-300 py-2 pr-3 pl-9 text-sm outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                    />
                </div>
                <div className="flex items-center gap-2">
                    {['Method: All', 'Status: All', 'Date: Last 24h'].map(
                        (label) => (
                            <button
                                key={label}
                                className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                {label}{' '}
                                <ChevronDown className="h-4 w-4 text-gray-400" />
                            </button>
                        ),
                    )}
                </div>
            </div>

            {/* ── Activity Logs Table ───────────────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="px-6 pb-4">
                    <h2 className="text-base font-semibold text-gray-900">
                        API Key Activity Logs
                    </h2>
                </div>
                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Timestamp <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Method <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Endpoint Path
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Client
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Latency <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {LOGS.map((log) => (
                                <TableRow key={log.id}>
                                    <TableCell>
                                        <div className="font-medium text-gray-900">
                                            {log.time}
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            {log.date}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <span
                                            className={`rounded px-2.5 py-1 text-xs font-semibold ${methodStyle(log.method)}`}
                                        >
                                            {log.method}
                                        </span>
                                    </TableCell>
                                    <TableCell className="font-mono text-sm text-gray-600">
                                        {log.endpoint}
                                    </TableCell>
                                    <TableCell className="text-gray-700">
                                        {log.client}
                                    </TableCell>
                                    <TableCell>
                                        <span
                                            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle(log.status)}`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${statusDot(log.status)}`}
                                            />
                                            {log.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {log.latency}
                                    </TableCell>
                                    <TableCell>
                                        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
                                            <Eye className="h-4 w-4" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
            </div>
        </div>
    );
}
