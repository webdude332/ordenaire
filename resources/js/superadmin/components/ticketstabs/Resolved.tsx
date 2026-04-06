// export default function Resolved() {
//     return <div>Resolved</div>;
// }

import Badge from '@/superadmin/components/Badge';
import TicketsDetailReadOnlyModal from '@/superadmin/components/Modals/TicketsDetailReadOnlyModal';
import Eye from '@shared/images/icons/eyeIcon.svg?react';
import SearchIcon from '@shared/images/icons/inputSearch.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
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
import { Input } from '../ui/FormElements';

// ─── Types ────────────────────────────────────────────────────────────────────

type Priority = 'low' | 'medium' | 'high';

interface ResolvedTicketItem {
    id: number;
    ticketId: string;
    businessName: string;
    subject: string;
    priority: Priority;
    resolvedLabel: string; // e.g. "Resolved 1d ago" | "Resolved Jan 14"
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TICKETS: ResolvedTicketItem[] = [
    {
        id: 1,
        ticketId: 'TKT-10002',
        businessName: 'KFC - Dubai Mall',
        subject: 'POS Offline during',
        priority: 'low',
        resolvedLabel: 'Resolved 1d ago',
    },
    {
        id: 2,
        ticketId: 'TKT-10003',
        businessName: 'Pizza Palace',
        subject: 'Menu Sync Failed',
        priority: 'medium',
        resolvedLabel: 'Resolved 1d ago',
    },
    {
        id: 3,
        ticketId: 'TKT-10004',
        businessName: 'Subway',
        subject: 'Report Export Bug',
        priority: 'high',
        resolvedLabel: 'Resolved Jan 14',
    },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const priorityVariant = (p: Priority) =>
    p === 'low' ? 'blue' : p === 'medium' ? 'warning' : 'error';

const priorityLabel = (p: Priority) =>
    p === 'low' ? 'low' : p === 'medium' ? 'Medium' : 'High';

// ─── Component ────────────────────────────────────────────────────────────────

export default function Resolved() {
    const [search, setSearch] = useState('');

    // ── Modal state ───────────────────────────────────────────────────────────
    const [selectedTicket, setSelectedTicket] =
        useState<ResolvedTicketItem | null>(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const filtered = TICKETS.filter(
        (t) =>
            t.ticketId.toLowerCase().includes(search.toLowerCase()) ||
            t.businessName.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div>
            {/* ── Filters row ──────────────────────────────────────────── */}
            <div className="mb-5">
                <Input
                    placeholder="Search Ticket ID..."
                    icon={SearchIcon}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-64"
                />
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
                                            {ticket.resolvedLabel}
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
                                        <div className="flex items-center justify-end gap-2">
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

            {/* ── Read-only Modal ─────────────────────────────────────── */}
            <TicketsDetailReadOnlyModal
                isOpen={isDetailOpen}
                onClose={() => {
                    setIsDetailOpen(false);
                    setSelectedTicket(null);
                }}
                ticket={selectedTicket}
            />
        </div>
    );
}
