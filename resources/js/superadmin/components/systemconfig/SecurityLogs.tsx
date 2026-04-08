import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';

import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '@/superadmin/components/ui/Table'; // adjust path as needed
import { useMemo, useState } from 'react';

interface LogEntry {
    id: number;
    date: string;
    time: string;
    userName: string;
    userRole: string;
    event: string;
    action: string;
    ipAddress: string;
    type: string;
}

const LOG_DATA: LogEntry[] = [
    {
        id: 1,
        date: '09 Sept 2025',
        time: '04:50 PM',
        userName: 'Alice',
        userRole: 'Finance',
        event: 'Updated Retention Policy',
        action: 'Changed Logs from 1yr to 2yrs',
        ipAddress: '192.168.1.105',
        type: 'policy',
    },
    {
        id: 2,
        date: '08 Sept 2025',
        time: '03:20 PM',
        userName: 'Bob',
        userRole: 'CRM',
        event: 'Failed Login Attempt',
        action: 'Invalid Password (3x)',
        ipAddress: '192.168.1.110',
        type: 'login',
    },
    {
        id: 3,
        date: '07 Sept 2025',
        time: '09:00 AM',
        userName: 'Charlie',
        userRole: 'CRM',
        event: 'Terminated All Sessions',
        action: 'Manual Override',
        ipAddress: '192.168.1.115',
        type: 'session',
    },
    {
        id: 4,
        date: '06 Sept 2025',
        time: '11:45 AM',
        userName: 'Diana',
        userRole: 'Admin',
        event: 'Updated Password Policy',
        action: 'Min length 8 to 10',
        ipAddress: '192.168.1.120',
        type: 'policy',
    },
    {
        id: 5,
        date: '05 Sept 2025',
        time: '02:30 PM',
        userName: 'Ethan',
        userRole: 'Sales',
        event: 'Terminated All Active Sessions',
        action: 'Manual Override',
        ipAddress: '192.168.1.120',
        type: 'session',
    },
    {
        id: 6,
        date: '04 Sept 2025',
        time: '01:15 PM',
        userName: 'Fiona',
        userRole: 'CRM',
        event: 'New Device Login',
        action: 'Chrome on MacOS (Kuwait)',
        ipAddress: '192.168.1.120',
        type: 'login',
    },
];

const eventTypeOptions = [
    { label: 'All', value: 'all' },
    { label: 'Policy', value: 'policy' },
    { label: 'Login', value: 'login' },
    { label: 'Session', value: 'session' },
];

export default function SecurityLogs() {
    const [search, setSearch] = useState('');
    const [eventType, setEventType] = useState('all');

    const filtered = useMemo(() => {
        return LOG_DATA.filter((log) => {
            const matchesSearch =
                search === '' ||
                log.userName.toLowerCase().includes(search.toLowerCase()) ||
                log.ipAddress.includes(search);

            const matchesType = eventType === 'all' || log.type === eventType;

            return matchesSearch && matchesType;
        });
    }, [search, eventType]);

    return (
        <div>
            <TableContainerOne className="rounded-xl border border-gray-200">
                {/* ── Header row ── */}
                <div className="flex items-center justify-between px-6 py-4">
                    <h2 className="text-base font-semibold text-gray-800">
                        Activity Log
                    </h2>

                    <div className="flex items-center gap-3">
                        {/* Search */}
                        <div className="relative">
                            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                <svg
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search IP or User..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-64 rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-9 text-sm text-gray-700 placeholder-gray-400 shadow-xs focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] focus:outline-none"
                            />
                        </div>

                        {/* Event Type filter */}
                        <CustomDropdown
                            label="Event Type"
                            options={eventTypeOptions}
                            value={eventType}
                            onChange={setEventType}
                            placeholder="Event Type: All"
                            containerClassName="w-44"
                        />
                    </div>
                </div>

                {/* ── Table ── */}
                <Table>
                    <TableHeader>
                        <TableHead>
                            <span className="flex items-center gap-1">
                                Date/Time
                                <svg
                                    className="h-3.5 w-3.5 text-gray-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4"
                                    />
                                </svg>
                            </span>
                        </TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Event / Action</TableHead>
                        <TableHead>IP Address</TableHead>
                    </TableHeader>

                    <TableBody>
                        {filtered.length > 0 ? (
                            filtered.map((log) => (
                                <TableRow key={log.id}>
                                    {/* Date / Time */}
                                    <TableCell>
                                        <p className="font-medium text-gray-800">
                                            {log.date}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {log.time}
                                        </p>
                                    </TableCell>

                                    {/* User */}
                                    <TableCell>
                                        <p className="font-medium text-gray-800">
                                            {log.userName}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {log.userRole}
                                        </p>
                                    </TableCell>

                                    {/* Event / Action */}
                                    <TableCell>
                                        <p className="font-medium text-gray-800">
                                            {log.event}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {log.action}
                                        </p>
                                    </TableCell>

                                    {/* IP Address */}
                                    <TableCell className="text-gray-500">
                                        {log.ipAddress}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell className="py-12 text-center text-gray-400">
                                    No logs found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainerOne>
        </div>
    );
}
