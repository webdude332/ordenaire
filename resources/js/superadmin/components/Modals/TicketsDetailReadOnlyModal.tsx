import Modal from '@/superadmin/components/Modal';
import patternBg from '@shared/images/icons/patternBg.svg';
import { Clipboard, Eye, Paperclip, User } from 'lucide-react';
import IconButton from '../ui/IconButton';

//  Static mock data for the read-only panel

const MOCK_MENTIONS = [
    { value: 'ahamed', label: 'Ahamed' },
    { value: 'ali', label: 'Ali' },
    { value: 'noah', label: 'Noah' },
];

const MOCK_ASSIGNEE = 'Ahamed';
const MOCK_STATUS = 'Resolved';

const ACTIVITY = [
    {
        name: 'Noah (Manager)',
        date: 'Oct 24',
        time: '2:15 PM',
        msg: '"Escalating this to you because you handled the previous POS integration issue. Please check the API logs."',
    },
    {
        name: 'Sarah (Support)',
        date: 'Oct 24',
        time: '2:15 PM',
        msg: '"I have verified the logs, this seems to be a timeout issue."',
    },
];

interface ResolvedTicketItem {
    id: number;
    ticketId: string;
    businessName: string;
    subject: string;
    priority: string;
    resolvedLabel: string;
}

interface TicketsDetailReadOnlyModalProps {
    isOpen: boolean;
    onClose: () => void;
    ticket: ResolvedTicketItem | null;
}

export default function TicketsDetailReadOnlyModal({
    isOpen,
    onClose,
    ticket,
}: TicketsDetailReadOnlyModalProps) {
    if (!ticket) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                <div className="mb-5">
                    <div className="mb-5">
                        <div className="relative mb-6 flex items-start gap-4">
                            <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                                <img
                                    src={patternBg}
                                    alt=""
                                    className="max-w-none"
                                    style={{
                                        transform: 'scale(1.1)',
                                        opacity: 0.7,
                                    }}
                                />
                            </div>
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <Eye className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Ticket #{ticket.ticketId}: {ticket.subject}
                    </h2>
                    <p className="mt-0.5 text-sm text-gray-500">
                        Submitted by {ticket.businessName}
                    </p>
                </div>

                <div className="mb-4 grid grid-cols-5 gap-4">
                    {/* Description (3/5) */}
                    <div className="col-span-3 rounded-xl border border-gray-200 bg-gray-100 p-5">
                        <div className="mb-3 flex items-center gap-2">
                            <Clipboard className="h-6 w-6 text-gray-700" />
                            <h3 className="text-lg font-semibold text-gray-900">
                                Description
                            </h3>
                        </div>
                        <p className="mb-5 pl-8 text-sm text-gray-600">
                            We are trying to punch in orders but the screen
                            keeps showing 'Network Error 503'. Our internet is
                            working fine on other devices. Please help, we have
                            a queue of customers!
                        </p>
                        <div className="flex items-center gap-2">
                            <Paperclip className="h-6 w-6 text-gray-700" />
                            <h3 className="text-lg font-semibold text-gray-900">
                                Attachments
                            </h3>
                        </div>
                        <a
                            href="#"
                            className="mt-1 block pl-8 text-xs text-gray-500 underline"
                        >
                            Invoice_#0025.pdf
                        </a>
                    </div>

                    {/* Ticket Details read-only (2/5) */}
                    <div className="col-span-2 rounded-xl border border-gray-200 bg-gray-100 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            {/* Asterisk / sparkle icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-700"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="12" y1="2" x2="12" y2="22" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <line
                                    x1="4.93"
                                    y1="4.93"
                                    x2="19.07"
                                    y2="19.07"
                                />
                                <line
                                    x1="19.07"
                                    y1="4.93"
                                    x2="4.93"
                                    y2="19.07"
                                />
                            </svg>
                            <h3 className="text-sm font-semibold text-gray-900">
                                Ticket Details
                            </h3>
                        </div>

                        {/* Status */}
                        <div className="mb-4">
                            <p className="mb-1.5 text-xs font-medium text-gray-500">
                                Status
                            </p>
                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                {MOCK_STATUS}
                            </span>
                        </div>

                        {/* Assigned To */}
                        <div className="mb-4">
                            <p className="mb-1.5 text-xs font-medium text-gray-500">
                                Assigned To
                            </p>
                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-transparent px-3 py-1.5 text-sm font-medium text-gray-700">
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg> */}
                                <User className="h-4 w-4 text-iconColor" />
                                {MOCK_ASSIGNEE}
                            </span>
                        </div>

                        {/* Mentions CC */}
                        <div>
                            <p className="mb-1.5 text-xs font-medium text-gray-500">
                                Mentions (CC)
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {MOCK_MENTIONS.slice(0, 2).map((m) => (
                                    <span
                                        key={m.value}
                                        className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-transparent px-3 py-1.5 text-sm font-medium text-gray-700"
                                    >
                                        <User className="h-4 w-4 text-iconColor" />

                                        {m.label}
                                    </span>
                                ))}
                                {MOCK_MENTIONS.length > 2 && (
                                    <span className="inline-flex items-center rounded-md border border-gray-200 bg-transparent px-3 py-1.5 text-sm font-medium text-gray-700">
                                        +{MOCK_MENTIONS.length - 2}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Activity History ─────────────────────────────────── */}
                <div className="rounded-xl border border-gray-200 p-5">
                    <h3 className="mb-4 text-sm font-semibold text-gray-900">
                        Activity History
                    </h3>
                    <div className="space-y-4">
                        {ACTIVITY.map((entry, i) => (
                            <div key={i}>
                                <div className="mb-1 flex items-center gap-2">
                                    <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        {entry.name}
                                    </div>
                                    <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                                        {entry.date} · {entry.time}
                                    </span>
                                </div>
                                <p className="ml-1 text-sm text-gray-600">
                                    {entry.msg}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Close
                </IconButton>
            </div>
        </Modal>
    );
}
