import Badge from '@/components/Badge';
import TicketsDetailModal from '@/components/Modals/TicketsDetailModal';
import TicketsStatus from '@/components/Modals/TicketsStatus';
import ActionButton from '@/components/ui/ActionButton';
import CircleTick from '@/images/icons/circleTick.svg?react';
import Eye from '@/images/icons/eyeIcon.svg?react';
import SearchIcon from '@/images/icons/inputSearch.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
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
import CustomDropdown from '../ui/CustomDropdown';
import { Input } from '../ui/FormElements';

// ─── Types ────────────────────────────────────────────────────────────────────

type Priority = 'low' | 'medium' | 'high';
type TicketStatus = 'Open' | 'In Progress' | 'Pending' | 'Resolved' | 'Closed';

interface TicketItem {
    id: number;
    ticketId: string;
    businessName: string;
    subject: string;
    priority: Priority;
    status: TicketStatus;
    timeAgo: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TICKETS: TicketItem[] = [
    {
        id: 1,
        ticketId: 'TKT-10002',
        businessName: 'KFC - Dubai Mall',
        subject: 'POS Offline during',
        priority: 'low',
        status: 'In Progress',
        timeAgo: '1d ago',
    },
    {
        id: 2,
        ticketId: 'TKT-10003',
        businessName: 'Pizza Palace',
        subject: 'Menu Sync Failed',
        priority: 'medium',
        status: 'Pending',
        timeAgo: '3d ago',
    },
    {
        id: 3,
        ticketId: 'TKT-10004',
        businessName: 'Subway',
        subject: 'Report Export Bug',
        priority: 'high',
        status: 'Open',
        timeAgo: '5d ago',
    },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

// const priorityVariant = (p: Priority) =>
//     p === 'low' ? 'active' : p === 'medium' ? 'warning' : 'error';

const priorityVariant = (p: Priority) =>
    p === 'low' ? 'blue' : p === 'medium' ? 'warning' : 'error';

const priorityLabel = (p: Priority) =>
    p === 'low' ? 'low' : p === 'medium' ? 'Medium' : 'High';

// const statusVariant = (s: TicketStatus) => {
//     switch (s) {
//         case 'Open':
//             return 'gray';
//         case 'In Progress':
//             return 'active';
//         case 'Pending':
//             return 'warning';
//         case 'Resolved':
//             return 'success';
//         case 'Closed':
//             return 'gray';
//     }
// };
const statusVariant = (s: TicketStatus) => {
    switch (s) {
        case 'Open':
            return 'gray';
        case 'In Progress':
            return 'blue';
        case 'Pending':
            return 'warning';
        case 'Resolved':
            return 'success';
        case 'Closed':
            return 'gray';
    }
};

const PRIORITY_OPTIONS = [
    {
        label: <span className="font-medium">Prirority: All</span>,
        value: 'all',
    },
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
];

const STATUS_OPTIONS = [
    { label: <span className="font-medium">Status: All</span>, value: 'all' },
    { label: 'Open', value: 'open' },
    { label: 'In Progress', value: 'in_progress' },
    { label: 'Pending', value: 'pending' },
    { label: 'Resolved', value: 'resolved' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Assigned() {
    const [search, setSearch] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 6;

    // ── Modal states ──────────────────────────────────────────────────────────
    const [selectedTicket, setSelectedTicket] = useState<TicketItem | null>(
        null,
    );
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);

    const filtered = TICKETS.filter((t) => {
        const matchSearch =
            t.ticketId.toLowerCase().includes(search.toLowerCase()) ||
            t.businessName.toLowerCase().includes(search.toLowerCase());
        const matchPriority =
            priorityFilter === 'all' || t.priority === priorityFilter;
        const matchStatus =
            statusFilter === 'all' ||
            t.status.toLowerCase().replace(' ', '_') === statusFilter;
        return matchSearch && matchPriority && matchStatus;
    });

    return (
        <div>
            {/* ── Filters row ──────────────────────────────────────────── */}
            <div className="mb-5 flex items-center justify-between">
                <div className="w-1/3">
                    <Input
                        placeholder="Search Ticket ID..."
                        icon={SearchIcon}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-64"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-40">
                        <CustomDropdown
                            label=""
                            options={PRIORITY_OPTIONS}
                            value={priorityFilter}
                            onChange={setPriorityFilter}
                            placeholder="Priority: All"
                        />
                    </div>
                    <div className="w-40">
                        <CustomDropdown
                            label=""
                            options={STATUS_OPTIONS}
                            value={statusFilter}
                            onChange={setStatusFilter}
                            placeholder="Status: All"
                        />
                    </div>
                </div>
            </div>

            {/* ── Table ────────────────────────────────────────────────── */}
            <div className="rounded-xl border border-borderColor">
                <TableContainerOne className="rounded-t-xl">
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Ticket Info
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Business Name
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Subject
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Priority <SelectorIcon />
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
                            {filtered.map((ticket) => (
                                <TableRow key={ticket.id}>
                                    <TableCell>
                                        <p className="font-medium text-gray-900">
                                            {ticket.ticketId}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {ticket.timeAgo}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <a
                                            href="#"
                                            className="text-sm font-medium text-gray-900 underline decoration-gray-400 underline-offset-2"
                                        >
                                            {ticket.businessName}
                                        </a>
                                    </TableCell>
                                    <TableCell className="text-gray-700">
                                        {ticket.subject}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={priorityVariant(
                                                ticket.priority,
                                            )}
                                            withDot
                                            rounded="md"
                                        >
                                            {priorityLabel(ticket.priority)}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={statusVariant(
                                                ticket.status,
                                            )}
                                            withDot
                                            rounded="md"
                                        >
                                            {ticket.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center justify-end gap-2">
                                            {/* Mark as resolved */}
                                            {/* <button
                                                onClick={() => {
                                                    setSelectedTicket(ticket);
                                                    setIsStatusOpen(true);
                                                }}
                                                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#79B800] text-white transition-colors hover:bg-[#6aa300]"
                                            >
                                                <CircleTick className="h-4 w-4" />
                                            </button> */}
                                            <ActionButton
                                                className="!bg-primary"
                                                onClick={() => {
                                                    setSelectedTicket(ticket);
                                                    setIsStatusOpen(true);
                                                }}
                                            >
                                                <CircleTick className="h-4 w-4" />
                                            </ActionButton>
                                            {/* View detail */}
                                            <ActionButton
                                                onClick={() => {
                                                    setSelectedTicket(ticket);
                                                    setIsDetailOpen(true);
                                                }}
                                            >
                                                <Eye className="h-4 w-4 text-iconColor" />
                                            </ActionButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>

                <Pagination />
            </div>

            {/* ── Modals ─────────────────────────────────────────────── */}
            <TicketsDetailModal
                isOpen={isDetailOpen}
                onClose={() => {
                    setIsDetailOpen(false);
                    setSelectedTicket(null);
                }}
                ticket={selectedTicket}
            />
            <TicketsStatus
                isOpen={isStatusOpen}
                onClose={() => {
                    setIsStatusOpen(false);
                    setSelectedTicket(null);
                }}
                onConfirm={() => {
                    setIsStatusOpen(false);
                    setSelectedTicket(null);
                }}
                ticket={selectedTicket}
            />
        </div>
    );
}
