// import Modal from '@superadmin/components/Modal';
// import CustomDropdown from '@superadmin/components/ui/CustomDropdown';
// import Paperclipp from '@shared/images/icons/clipboard1.svg?react';
// import patternBg from '@shared/images/icons/patternBg.svg';
// import {
//     Bold,
//     Eye,
//     Image,
//     Italic,
//     Link,
//     Paperclip,
//     Settings2,
//     Underline,
// } from 'lucide-react';
// import { useState } from 'react';
// import Button from '../ui/Button';
// import IconButton from '../ui/IconButton';

// // ─── Types ────────────────────────────────────────────────────────────────────

// interface TicketItem {
//     id: number;
//     ticketId: string;
//     submitter: string;
//     category: string;
//     time: string;
//     priority: 'Low' | 'Medium' | 'High';
//     status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
//     description?: string;
//     attachments?: string[];
//     assignedTo?: string;
//     mentions?: string[];
// }

// interface TicketsModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     onConfirm: (data: TicketUpdateData) => void;
//     ticket: TicketItem | null;
// }

// interface TicketUpdateData {
//     status: string;
//     assignedTo: string;
//     mentions: string[];
//     internalNote: string;
// }

// // ─── Options ──────────────────────────────────────────────────────────────────

// const STATUS_OPTIONS = [
//     { label: 'Open', value: 'open' },
//     { label: 'In Progress', value: 'in_progress' },
//     { label: 'Resolved', value: 'resolved' },
//     { label: 'Closed', value: 'closed' },
// ];

// const ASSIGN_OPTIONS = [
//     { label: 'Ahamed', value: 'ahamed' },
//     { label: 'Ali', value: 'ali' },
//     { label: 'Olivia', value: 'olivia' },
//     { label: 'Sara', value: 'sara' },
// ];

// const statusToValue = (s: TicketItem['status']) =>
//     s.toLowerCase().replace(' ', '_');

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function TicketsModal({
//     isOpen,
//     onClose,
//     onConfirm,
//     ticket,
// }: TicketsModalProps) {
//     const [status, setStatus] = useState('open');
//     const [assignedTo, setAssignedTo] = useState('');
//     const [mentions, setMentions] = useState<string[]>(['Ahamed', 'Ali', '+1']);
//     const [internalNote, setInternalNote] = useState('');

//     const handleSubmit = () => {
//         onConfirm({ status, assignedTo, mentions, internalNote });
//         onClose();
//     };

//     const removeMention = (tag: string) => {
//         setMentions((prev) => prev.filter((m) => m !== tag));
//     };

//     if (!ticket) return null;

//     return (
//         <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
//             <div className="p-6 sm:p-8">
//                 {/* ── Header ──────────────────────────────────────────── */}
//                 <div className="mb-5">
//                     <div className="mb-5">
//                         <div className="relative mb-6 flex items-start gap-4">
//                             <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
//                                 <img
//                                     src={patternBg}
//                                     alt=""
//                                     className="max-w-none"
//                                     style={{
//                                         transform: 'scale(1.1)',
//                                         opacity: 0.7,
//                                     }}
//                                 />
//                             </div>
//                             <div>
//                                 <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
//                                     <Eye className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Dynamic title */}
//                     <h2 className="text-base font-semibold text-gray-900">
//                         Ticket #{ticket.ticketId}: {ticket.category}
//                     </h2>
//                     <p className="mt-0.5 text-sm text-gray-500">
//                         Submitted by {ticket.submitter}
//                     </p>
//                 </div>

//                 <div className="rounded-xl border border-borderColor p-4">
//                     <div className="mb-4 grid grid-cols-5 gap-4">
//                         {/* Description + Attachments — left col (3/5) */}
//                         <div className="col-span-3 rounded-xl border border-gray-200 bg-gray-50 p-5">
//                             {/* Description */}
//                             <div className="mb-5">
//                                 <div className="mb-2 flex items-center gap-2">
//                                     <Paperclipp className="h-5 w-5 text-gray-700" />
//                                     <h3 className="text-md font-semibold text-gray-900">
//                                         Description
//                                     </h3>
//                                 </div>
//                                 <p className="pl-7 text-sm text-gray-600">
//                                     {ticket.description ||
//                                         "We are trying to punch in orders but the screen keeps showing 'Network Error 503'. Our internet is working fine on other devices. Please help, we have a queue of customers!"}
//                                 </p>
//                             </div>

//                             {/* Attachments */}
//                             <div className="mt-10">
//                                 <div className="mb-2 flex items-center gap-2">
//                                     <Paperclip className="h-5 w-5 text-gray-700" />
//                                     <h3 className="text-md font-semibold text-gray-900">
//                                         Attachments
//                                     </h3>
//                                 </div>
//                                 {(
//                                     ticket.attachments ?? ['Invoice_#0025.pdf']
//                                 ).map((file) => (
//                                     <a
//                                         key={file}
//                                         href="#"
//                                         className="pl-7 text-sm text-blue-600 underline"
//                                     >
//                                         {file}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Controls — right col (2/5) */}
//                         <div className="col-span-2 rounded-xl border border-gray-200 bg-gray-50 p-5">
//                             <div className="mb-3 flex items-center gap-2">
//                                 <Settings2 className="h-5 w-5 text-gray-700" />
//                                 <h3 className="text-md font-semibold text-gray-900">
//                                     Controls
//                                 </h3>
//                             </div>

//                             {/* Status */}
//                             <div className="mb-3">
//                                 <p className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Status
//                                 </p>
//                                 <CustomDropdown
//                                     label=""
//                                     options={STATUS_OPTIONS}
//                                     value={status}
//                                     onChange={setStatus}
//                                     placeholder="Select status"
//                                 />
//                             </div>

//                             {/* Assigned To */}
//                             <div className="mb-3">
//                                 <p className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Assigned To
//                                 </p>
//                                 <CustomDropdown
//                                     label=""
//                                     options={ASSIGN_OPTIONS}
//                                     value={assignedTo}
//                                     onChange={setAssignedTo}
//                                     placeholder="Assign..."
//                                 />
//                             </div>

//                             {/* Mentions (CC) */}
//                             <div>
//                                 <p className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Mentions (CC)
//                                 </p>
//                                 <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-4 w-4 text-gray-400"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                         />
//                                     </svg>
//                                     <span className="flex-1 text-sm text-gray-400">
//                                         Add Person
//                                     </span>
//                                     <button className="text-gray-400 hover:text-gray-600">
//                                         +
//                                     </button>
//                                 </div>
//                                 {/* Tags */}
//                                 <div className="mt-2 flex flex-wrap gap-1.5">
//                                     {mentions.map((tag) => (
//                                         <span
//                                             key={tag}
//                                             className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-700"
//                                         >
//                                             {tag}
//                                             <button
//                                                 onClick={() =>
//                                                     removeMention(tag)
//                                                 }
//                                                 className="text-gray-400 hover:text-gray-600"
//                                             >
//                                                 ×
//                                             </button>
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ── Internal Note ────────────────────────────────────── */}
//                     <div className="rounded-xl border border-gray-200 p-5">
//                         <h3 className="mb-3 text-sm font-semibold text-gray-900">
//                             Internal Note
//                         </h3>
//                         {/* Toolbar */}
//                         <div className="mb-2 flex items-center gap-1 border-gray-200 pb-2">
//                             <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
//                                 <Bold className="h-4 w-4" />
//                             </button>
//                             <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
//                                 <Italic className="h-4 w-4" />
//                             </button>
//                             <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
//                                 <Underline className="h-4 w-4" />
//                             </button>
//                             <div className="mx-1 h-4 w-px bg-gray-200" />
//                             <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
//                                 <Link className="h-4 w-4" />
//                             </button>
//                             <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
//                                 <Image className="h-4 w-4" />
//                             </button>
//                         </div>
//                         <textarea
//                             rows={4}
//                             value={internalNote}
//                             onChange={(e) => setInternalNote(e.target.value)}
//                             placeholder="e.g., Pre-deployment safety snapshot for v5.4 Release."
//                             className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* ── Footer ──────────────────────────────────────────────── */}
//             <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
//                 <IconButton className="w-full" onClick={onClose}>
//                     Close
//                 </IconButton>
//                 <Button className="w-full" onClick={handleSubmit}>
//                     Update Ticket
//                 </Button>
//             </div>
//         </Modal>
//     );
// }
// working disabled button,
import Modal from '@/superadmin/components/Modal';
import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import Paperclipp from '@shared/images/icons/clipboard1.svg?react';
import patternBg from '@shared/images/icons/patternBg.svg';
import {
    Bold,
    Eye,
    Image,
    Italic,
    Link,
    Paperclip,
    Settings2,
    Underline,
} from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TicketItem {
    id: number;
    ticketId: string;
    submitter: string;
    category: string;
    time: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
    description?: string;
    attachments?: string[];
    assignedTo?: string;
    mentions?: string[];
}

interface TicketsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: TicketUpdateData) => void;
    ticket: TicketItem | null;
}

interface TicketUpdateData {
    status: string;
    assignedTo: string;
    mentions: string[];
    internalNote: string;
}

// ─── Options ──────────────────────────────────────────────────────────────────

const STATUS_OPTIONS = [
    { label: 'Open', value: 'open' },
    { label: 'In Progress', value: 'in_progress' },
    { label: 'Resolved', value: 'resolved' },
    { label: 'Closed', value: 'closed' },
];

const ASSIGN_OPTIONS = [
    { label: 'Ahamed', value: 'ahamed' },
    { label: 'Ali', value: 'ali' },
    { label: 'Olivia', value: 'olivia' },
    { label: 'Sara', value: 'sara' },
];

const statusToValue = (s: TicketItem['status']) =>
    s.toLowerCase().replace(' ', '_');

// ─── Component ────────────────────────────────────────────────────────────────

export default function TicketsModal({
    isOpen,
    onClose,
    onConfirm,
    ticket,
}: TicketsModalProps) {
    const [status, setStatus] = useState('open');
    const [assignedTo, setAssignedTo] = useState('');
    const [mentions, setMentions] = useState<string[]>(['Ahamed', 'Ali', '+1']);
    const [internalNote, setInternalNote] = useState('');

    // ─── New state for mentions input ───
    const [mentionInput, setMentionInput] = useState('');
    const [showMentionDrop, setShowMentionDrop] = useState(false);

    const handleSubmit = () => {
        onConfirm({ status, assignedTo, mentions, internalNote });
        onClose();
    };

    // ─── New helper functions for mentions ───
    const addMention = (val: string) => {
        if (!mentions.includes(val)) setMentions((prev) => [...prev, val]);
        setMentionInput('');
        setShowMentionDrop(false);
    };

    const removeMention = (tag: string) => {
        setMentions((prev) => prev.filter((m) => m !== tag));
    };

    const availableMentions = ASSIGN_OPTIONS.filter(
        (m) =>
            !mentions.includes(m.label) &&
            (mentionInput === '' ||
                m.label.toLowerCase().includes(mentionInput.toLowerCase())),
    );

    if (!ticket) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ──────────────────────────────────────────── */}
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
                            <div>
                                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                    <Eye className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Dynamic title */}
                    <h2 className="text-base font-semibold text-gray-900">
                        Ticket #{ticket.ticketId}: {ticket.category}
                    </h2>
                    <p className="mt-0.5 text-sm text-gray-500">
                        Submitted by {ticket.submitter}
                    </p>
                </div>

                <div className="rounded-xl border border-borderColor p-4">
                    <div className="mb-4 grid grid-cols-5 gap-4">
                        {/* Description + Attachments — left col (3/5) */}
                        <div className="col-span-3 rounded-xl border border-gray-200 bg-gray-50 p-5">
                            {/* Description */}
                            <div className="mb-5">
                                <div className="mb-2 flex items-center gap-2">
                                    <Paperclipp className="h-5 w-5 text-gray-700" />
                                    <h3 className="text-md font-semibold text-gray-900">
                                        Description
                                    </h3>
                                </div>
                                <p className="pl-7 text-sm text-gray-600">
                                    {ticket.description ||
                                        "We are trying to punch in orders but the screen keeps showing 'Network Error 503'. Our internet is working fine on other devices. Please help, we have a queue of customers!"}
                                </p>
                            </div>

                            {/* Attachments */}
                            <div className="mt-10">
                                <div className="mb-2 flex items-center gap-2">
                                    <Paperclip className="h-5 w-5 text-gray-700" />
                                    <h3 className="text-md font-semibold text-gray-900">
                                        Attachments
                                    </h3>
                                </div>
                                {(
                                    ticket.attachments ?? ['Invoice_#0025.pdf']
                                ).map((file) => (
                                    <a
                                        key={file}
                                        href="#"
                                        className="pl-7 text-sm text-blue-600 underline"
                                    >
                                        {file}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Controls — right col (2/5) */}
                        <div className="col-span-2 rounded-xl border border-gray-200 bg-gray-50 p-5">
                            <div className="mb-3 flex items-center gap-2">
                                <Settings2 className="h-5 w-5 text-gray-700" />
                                <h3 className="text-md font-semibold text-gray-900">
                                    Controls
                                </h3>
                            </div>

                            {/* Status */}
                            <div className="mb-3">
                                <p className="mb-1.5 text-sm font-medium text-gray-700">
                                    Status
                                </p>
                                <CustomDropdown
                                    label=""
                                    options={STATUS_OPTIONS}
                                    value={status}
                                    onChange={setStatus}
                                    placeholder="Select status"
                                />
                            </div>

                            {/* Assigned To */}
                            <div className="mb-3">
                                <p className="mb-1.5 text-sm font-medium text-gray-700">
                                    Assigned To
                                </p>
                                <CustomDropdown
                                    label=""
                                    options={ASSIGN_OPTIONS}
                                    value={assignedTo}
                                    onChange={setAssignedTo}
                                    placeholder="Assign..."
                                />
                            </div>

                            {/* Mentions (CC) */}
                            <div>
                                <p className="mb-1.5 text-sm font-medium text-gray-700">
                                    Mentions (CC)
                                </p>
                                <div className="relative flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2">
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
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                    {/* ─── Replaced span with functional input ─── */}
                                    <input
                                        type="text"
                                        value={mentionInput}
                                        onChange={(e) => {
                                            setMentionInput(e.target.value);
                                            setShowMentionDrop(true);
                                        }}
                                        onFocus={() => setShowMentionDrop(true)}
                                        placeholder="Add Person"
                                        className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowMentionDrop((o) => !o)
                                        }
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        +
                                    </button>

                                    {/* ─── Dropdown List ─── */}
                                    {showMentionDrop &&
                                        availableMentions.length > 0 && (
                                            <div className="absolute top-full left-0 z-50 mt-1 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                                                {availableMentions.map((m) => (
                                                    <button
                                                        key={m.value}
                                                        type="button"
                                                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                                        onClick={() =>
                                                            addMention(m.label)
                                                        }
                                                    >
                                                        {m.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                </div>
                                {/* Tags */}
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                    {mentions.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                                        >
                                            {tag}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeMention(tag)
                                                }
                                                className="text-gray-400 hover:text-gray-600"
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Internal Note ────────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-3 text-sm font-semibold text-gray-900">
                            Internal Note
                        </h3>
                        {/* Toolbar */}
                        <div className="mb-2 flex items-center gap-1 border-gray-200 pb-2">
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <Bold className="h-4 w-4" />
                            </button>
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <Italic className="h-4 w-4" />
                            </button>
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <Underline className="h-4 w-4" />
                            </button>
                            <div className="mx-1 h-4 w-px bg-gray-200" />
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <Link className="h-4 w-4" />
                            </button>
                            <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                                <Image className="h-4 w-4" />
                            </button>
                        </div>
                        <textarea
                            rows={4}
                            value={internalNote}
                            onChange={(e) => setInternalNote(e.target.value)}
                            placeholder="e.g., Pre-deployment safety snapshot for v5.4 Release."
                            className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                        />
                    </div>
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Close
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Update Ticket
                </Button>
            </div>
        </Modal>
    );
}
