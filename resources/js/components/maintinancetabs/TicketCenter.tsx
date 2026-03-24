import TicketsModal from '@/components/Modals/TicketsModal';
import ActionButton from '@/components/ui/ActionButton';
import Badges from '@/components/ui/Badges';
import CustomDropdown from '@/components/ui/CustomDropdown';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Search,
    UserCircle,
} from 'lucide-react';
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

// ─── Types ────────────────────────────────────────────────────────────────────

interface TicketItem {
    id: number;
    ticketId: string;
    submitter: string;
    category: string;
    time: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
    assignedTo?: string;
    assignedAvatar?: string;
    description?: string;
    attachments?: string[];
    mentions?: string[];
}

// ─── Static data ─────────────────────────────────────────────────────────────

const ticketsData: TicketItem[] = [
    {
        id: 1,
        ticketId: 'TKT-10041',
        submitter: 'KFC - Jumeirah',
        category: 'POS & Hardware',
        time: '10m',
        priority: 'Low',
        status: 'Open',
        assignedTo: '',
        description:
            "We are trying to punch in orders but the screen keeps showing 'Network Error 503'. Our internet is working fine on other devices. Please help, we have a queue of customers!",
        attachments: ['Invoice_#0025.pdf'],
        mentions: ['Ahamed', 'Ali', '+1'],
    },
    {
        id: 2,
        ticketId: 'TKT-10042',
        submitter: "McDonald's - Downtown",
        category: 'Menu & Pricing',
        time: '2h',
        priority: 'Medium',
        status: 'In Progress',
        assignedTo: 'Ahamed',
        description: 'Menu items are showing incorrect prices.',
        attachments: [],
        mentions: [],
    },
    {
        id: 3,
        ticketId: 'TKT-10043',
        submitter: 'Subway - Marina Mall',
        category: 'Financial & Billing',
        time: '1d',
        priority: 'High',
        status: 'Resolved',
        assignedTo: 'Ahamed',
        description: 'Billing discrepancy on last invoice.',
        attachments: [],
        mentions: [],
    },
];

// ─── Filter options ───────────────────────────────────────────────────────────

const PRIORITY_OPTIONS = [
    { label: 'Prirority: All', value: 'all' },
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
];

const STATUS_OPTIONS = [
    { label: 'Status: Unassigned', value: 'unassigned' },
    { label: 'All', value: 'all' },
    { label: 'Open', value: 'open' },
    { label: 'In Progress', value: 'in_progress' },
    { label: 'Resolved', value: 'resolved' },
    { label: 'Closed', value: 'closed' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getPriorityVariant = (priority: TicketItem['priority']) => {
    switch (priority?.toLocaleLowerCase()) {
        case 'low':
            return 'low';
        case 'medium':
            return 'medium';
        case 'high':
            return 'high';
        default:
            return 'gray'; // Fallback
    }
};

const getStatusVariant = (status: TicketItem['status']) => {
    switch (status?.toLocaleLowerCase()) {
        case 'open':
            return 'status-open';
        case 'in progress':
            return 'status-progress';
        case 'resolved':
            return 'status-resolved';
        case 'closed':
            return 'gray';
        default:
            return 'gray'; // Fallback
    }
};

// ─── Component ────────────────────────────────────────────────────────────────

const TicketCenter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<TicketItem | null>(
        null,
    );
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('unassigned');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [assignMap, setAssignMap] = useState<Record<number, string>>({});

    const totalPages = 6;

    const filteredTickets = ticketsData.filter((item) => {
        const matchesPriority =
            priorityFilter === 'all' ||
            item.priority.toLowerCase() === priorityFilter;
        const matchesStatus =
            statusFilter === 'all' ||
            statusFilter === 'unassigned' ||
            item.status.toLowerCase().replace(' ', '_') === statusFilter;
        const matchesSearch =
            !searchQuery ||
            item.ticketId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.submitter.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesPriority && matchesStatus && matchesSearch;
    });

    const ASSIGN_OPTIONS = [
        { label: 'Assign...', value: '' },
        { label: 'Ahamed', value: 'ahamed' },
        { label: 'Ali', value: 'ali' },
        { label: 'Olivia', value: 'olivia' },
        { label: 'Sara', value: 'sara' },
    ];

    return (
        <div>
            {/* ── Filters Bar ──────────────────────────────────────────── */}
            <div className="mb-4 flex items-center justify-between gap-3">
                {/* Search */}
                <div className="relative w-80">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                        <Search className="h-4 w-4 text-gray-400" />
                    </span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by Ticket ID, Business Na..."
                        className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-9 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                    />
                </div>

                <div className="flex items-center gap-3">
                    {/* Priority filter */}
                    <div className="w-40">
                        <CustomDropdown
                            label=""
                            options={PRIORITY_OPTIONS}
                            value={priorityFilter}
                            onChange={setPriorityFilter}
                            placeholder="Priority: All"
                        />
                    </div>
                    {/* Status filter */}
                    <div className="w-48">
                        <CustomDropdown
                            label=""
                            options={STATUS_OPTIONS}
                            value={statusFilter}
                            onChange={setStatusFilter}
                            placeholder="Status: Unassigned"
                        />
                    </div>
                </div>
            </div>

            {/* ── Tickets Table ─────────────────────────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="px-6 pb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Tickets Table
                    </h2>
                </div>

                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Ticket ID
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Submitter (Merchant)
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Category
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Time
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
                            {filteredTickets.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium text-gray-900">
                                        {item.ticketId}
                                    </TableCell>
                                    <TableCell className="text-gray-700">
                                        {item.submitter}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.category}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.time}
                                    </TableCell>
                                    <TableCell>
                                        <Badges
                                            variant={getPriorityVariant(
                                                item.priority,
                                            )}
                                            withDot={true}
                                            rounded="md"
                                        >
                                            {item.priority}
                                        </Badges>
                                    </TableCell>
                                    <TableCell>
                                        <Badges
                                            variant={getStatusVariant(
                                                item.status,
                                            )}
                                            withDot={true}
                                            rounded="md"
                                        >
                                            {item.status}
                                        </Badges>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {/* Assign dropdown inline */}
                                            <div className="flex w-[140px] cursor-pointer items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
                                                {item.assignedTo ? (
                                                    <>
                                                        <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">
                                                            {item.assignedTo.charAt(
                                                                0,
                                                            )}
                                                        </span>
                                                        <span className="ml-1 flex-1 truncate text-left">
                                                            {item.assignedTo}
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <UserCircle className="h-4 w-4 flex-shrink-0 text-gray-400" />
                                                        <span className="ml-1 flex-1 truncate text-left text-gray-400">
                                                            Assign...
                                                        </span>
                                                    </>
                                                )}
                                                <ChevronDown className="h-3.5 w-3.5 flex-shrink-0 text-gray-400" />
                                            </div>

                                            {/* View icon */}
                                            <ActionButton
                                                onClick={() => {
                                                    setSelectedTicket(item);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 text-gray-400"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </ActionButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>

                {/* ── Pagination ───────────────────────────────────────── */}
                <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
                    <ActionButton
                        onClick={() =>
                            setCurrentPage((p) => Math.max(1, p - 1))
                        }
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4 text-gray-500" />
                    </ActionButton>

                    <div className="flex items-center gap-1">
                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1,
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                                    page === currentPage
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-500 hover:bg-gray-50'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <ActionButton
                        onClick={() =>
                            setCurrentPage((p) => Math.min(totalPages, p + 1))
                        }
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                    </ActionButton>
                </div>
            </div>

            {/* ── Modal ─────────────────────────────────────────────────── */}
            <TicketsModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedTicket(null);
                }}
                onConfirm={() => {
                    setIsModalOpen(false);
                    setSelectedTicket(null);
                }}
                ticket={selectedTicket}
            />
        </div>
    );
};

export default TicketCenter;
