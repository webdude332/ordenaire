// import Modal from '@/components/Modal';
// import CustomDropdown from '@/components/ui/CustomDropdown';
// import patternBg from '@/images/icons/patternBg.svg';
// import { router } from '@inertiajs/react'; // ─── Added Inertia Router
// import {
//     Bold,
//     Clipboard,
//     Eye,
//     Image,
//     Italic,
//     Link,
//     Paperclip,
//     Underline,
//     X,
// } from 'lucide-react';
// import { useState } from 'react';
// import Button from '../ui/Button';
// import IconButton from '../ui/IconButton';

// // ─── Options ──────────────────────────────────────────────────────────────────

// const STATUS_OPTIONS = [
//     { label: 'Open', value: 'open' },
//     { label: 'In Progress', value: 'in_progress' },
//     { label: 'Pending', value: 'pending' },
//     { label: 'Resolved', value: 'resolved' },
//     { label: 'Closed', value: 'closed' },
// ];

// const ASSIGNEE_OPTIONS = [
//     { label: 'Noah (Manager)', value: 'noah' },
//     { label: 'Sarah (Support)', value: 'sarah' },
//     { label: 'Ali (Tech)', value: 'ali' },
//     { label: 'Ahamed (Support)', value: 'ahamed' },
// ];

// const MENTION_OPTIONS = [
//     { label: 'Noah', value: 'noah' },
//     { label: 'Sarah', value: 'sarah' },
//     { label: 'Ali', value: 'ali' },
//     { label: 'Ahamed', value: 'ahamed' },
//     { label: 'Lucas', value: 'lucas' },
// ];

// interface TicketItem {
//     id: number;
//     ticketId: string;
//     businessName: string;
//     subject: string;
//     priority: string;
//     status: string;
//     timeAgo: string;
// }

// interface TicketsDetailModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     ticket: TicketItem | null;
// }

// export default function TicketsDetailModal({
//     isOpen,
//     onClose,
//     ticket,
// }: TicketsDetailModalProps) {
//     const [status, setStatus] = useState('open');
//     const [assignee, setAssignee] = useState('');
//     const [mentions, setMentions] = useState<string[]>(['ahamed', 'ali']);
//     const [mentionInput, setMentionInput] = useState('');
//     const [showMentionDrop, setShowMentionDrop] = useState(false);
//     const [internalNote, setInternalNote] = useState('');

//     if (!ticket) return null;

//     const addMention = (val: string) => {
//         if (!mentions.includes(val)) setMentions((prev) => [...prev, val]);
//         setMentionInput('');
//         setShowMentionDrop(false);
//     };

//     const removeMention = (val: string) =>
//         setMentions((prev) => prev.filter((m) => m !== val));

//     const getMentionLabel = (val: string) =>
//         MENTION_OPTIONS.find((m) => m.value === val)?.label ?? val;

//     const availableMentions = MENTION_OPTIONS.filter(
//         (m) =>
//             !mentions.includes(m.value) &&
//             (mentionInput === '' ||
//                 m.label.toLowerCase().includes(mentionInput.toLowerCase())),
//     );

//     // ─── Custom Update Handler ───────────────────────────────────────────────
//     const handleUpdate = () => {
//         // You can place your backend update logic here first (e.g., axios.post)

//         if (status === 'resolved') {
//             // Redirects to "My Tickets".
//             // NOTE: Adjust the query parameter '?tab=assigned' to match whatever
//             // URL structure your app uses to open the "Assigned to Me" tab.
//             router.visit('/my-tickets?tab=resolved');
//         } else {
//             // Close normally if it's not resolved
//             onClose();
//         }
//     };

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
//                     <h2 className="text-base font-semibold text-gray-900">
//                         Ticket #{ticket.ticketId}: {ticket.subject}
//                     </h2>
//                     <p className="mt-0.5 text-sm text-gray-500">
//                         Submitted by {ticket.businessName}
//                     </p>
//                 </div>

//                 {/* ── Top section: Description + Controls ─────────────── */}
//                 <div className="mb-4 grid grid-cols-5 gap-4">
//                     {/* Description (3/5) */}
//                     <div className="col-span-3 rounded-xl border border-gray-200 bg-gray-100 p-5">
//                         <div className="mb-3 flex items-center gap-2">
//                             <Clipboard className="h-6 w-6 text-gray-700" />
//                             <h3 className="text-lg font-semibold text-gray-900">
//                                 Description
//                             </h3>
//                         </div>
//                         <p className="mb-5 pl-8 text-sm text-gray-600">
//                             We are trying to punch in orders but the screen
//                             keeps showing 'Network Error 503'. Our internet is
//                             working fine on other devices. Please help, we have
//                             a queue of customers!
//                         </p>
//                         <div className="flex items-center gap-2">
//                             <Paperclip className="h-6 w-6 text-gray-700" />
//                             <h3 className="text-lg font-semibold text-gray-900">
//                                 Attachments
//                             </h3>
//                         </div>
//                         <a
//                             href="#"
//                             className="mt-1 block pl-8 text-xs text-gray-500 underline"
//                         >
//                             Invoice_#0025.pdf
//                         </a>
//                     </div>

//                     {/* Controls (2/5) */}
//                     <div className="col-span-2 rounded-xl border border-gray-200 bg-gray-100 p-5">
//                         <div className="mb-4 flex items-center gap-2">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-4 w-4 text-gray-700"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
//                                 />
//                             </svg>
//                             <h3 className="text-sm font-semibold text-gray-900">
//                                 Controls
//                             </h3>
//                         </div>

//                         {/* Status */}
//                         <div className="mb-3">
//                             <p className="mb-1.5 text-xs font-medium text-gray-500">
//                                 Status
//                             </p>
//                             <CustomDropdown
//                                 label=""
//                                 options={STATUS_OPTIONS}
//                                 value={status}
//                                 onChange={setStatus}
//                                 placeholder="Open"
//                             />
//                         </div>

//                         {/* Assigned To */}
//                         <div className="mb-3">
//                             <p className="mb-1.5 text-xs font-medium text-gray-500">
//                                 Assigned To
//                             </p>
//                             <CustomDropdown
//                                 label=""
//                                 options={ASSIGNEE_OPTIONS}
//                                 value={assignee}
//                                 onChange={setAssignee}
//                                 placeholder="Assign..."
//                             />
//                         </div>

//                         {/* Mentions CC */}
//                         <div>
//                             <p className="mb-1.5 text-xs font-medium text-gray-500">
//                                 Mentions (CC)
//                             </p>
//                             <div className="relative flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="h-4 w-4 text-gray-400"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                     />
//                                 </svg>
//                                 <input
//                                     type="text"
//                                     value={mentionInput}
//                                     onChange={(e) => {
//                                         setMentionInput(e.target.value);
//                                         setShowMentionDrop(true);
//                                     }}
//                                     onFocus={() => setShowMentionDrop(true)}
//                                     placeholder="Add Person"
//                                     className="flex-1 text-sm text-gray-900 placeholder-gray-400 outline-none"
//                                 />
//                                 <button
//                                     onClick={() =>
//                                         setShowMentionDrop((o) => !o)
//                                     }
//                                     className="text-gray-400 hover:text-gray-600"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-4 w-4"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M12 4v16m8-8H4"
//                                         />
//                                     </svg>
//                                 </button>
//                                 {showMentionDrop &&
//                                     availableMentions.length > 0 && (
//                                         <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
//                                             {availableMentions.map((m) => (
//                                                 <button
//                                                     key={m.value}
//                                                     className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
//                                                     onClick={() =>
//                                                         addMention(m.value)
//                                                     }
//                                                 >
//                                                     {m.label}
//                                                 </button>
//                                             ))}
//                                         </div>
//                                     )}
//                             </div>
//                             {mentions.length > 0 && (
//                                 <div className="mt-2 flex flex-wrap gap-1.5">
//                                     {mentions.map((m) => (
//                                         <span
//                                             key={m}
//                                             className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700"
//                                         >
//                                             {getMentionLabel(m)}
//                                             <button
//                                                 onClick={() => removeMention(m)}
//                                                 className="text-gray-400 hover:text-gray-600"
//                                             >
//                                                 <X className="h-3 w-3" />
//                                             </button>
//                                         </span>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* ── Activity History ─────────────────────────────────── */}
//                 <div className="mb-4 rounded-xl border border-gray-200 p-5">
//                     <h3 className="mb-4 text-sm font-semibold text-gray-900">
//                         Activity History
//                     </h3>
//                     <div className="space-y-4">
//                         {[
//                             {
//                                 name: 'Noah (Manager)',
//                                 time: '2:15 PM',
//                                 msg: '"Escalating this to you because you handled the previous POS integration issue. Please check the API logs."',
//                             },
//                             {
//                                 name: 'Sarah (Support)',
//                                 time: '2:15 PM',
//                                 msg: '"I have verified the logs, this seems to be a timeout issue."',
//                             },
//                         ].map((entry, i) => (
//                             <div key={i}>
//                                 <div className="mb-1 flex items-center gap-2">
//                                     <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="h-3 w-3 text-gray-400"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                             />
//                                         </svg>
//                                         {entry.name}
//                                     </div>
//                                     <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
//                                         {entry.time}
//                                     </span>
//                                 </div>
//                                 <p className="ml-1 text-sm text-gray-600">
//                                     {entry.msg}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* ── Internal Note ────────────────────────────────────── */}
//                 <div className="rounded-xl border border-gray-200 p-5">
//                     <h3 className="mb-3 text-sm font-semibold text-gray-900">
//                         Internal Note
//                     </h3>
//                     {/* Toolbar */}
//                     <div className="mb-0 flex items-center gap-1 rounded-t-lg border border-b-0 border-gray-200 px-2 py-1.5">
//                         <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
//                             <Bold className="h-3.5 w-3.5" />
//                         </button>
//                         <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
//                             <Italic className="h-3.5 w-3.5" />
//                         </button>
//                         <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
//                             <Underline className="h-3.5 w-3.5" />
//                         </button>
//                         <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
//                             <Link className="h-3.5 w-3.5" />
//                         </button>
//                         <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
//                             <Image className="h-3.5 w-3.5" />
//                         </button>
//                     </div>
//                     <textarea
//                         rows={4}
//                         value={internalNote}
//                         onChange={(e) => setInternalNote(e.target.value)}
//                         placeholder="e.g. Investigating the server logs now. Found a timeout error on port 443..."
//                         className="w-full resize-none rounded-b-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
//                     />
//                 </div>
//             </div>

//             {/* ── Footer ──────────────────────────────────────────────── */}
//             <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
//                 <IconButton className="w-full" onClick={onClose}>
//                     Close
//                 </IconButton>
//                 {/* ── Changed onClick to handleUpdate ── */}
//                 <Button className="w-full" onClick={handleUpdate}>
//                     Update Ticket
//                 </Button>
//             </div>
//         </Modal>
//     );
// }

import Modal from '@/components/Modal';
import CustomDropdown from '@/components/ui/CustomDropdown';
import patternBg from '@/images/icons/patternBg.svg';
import { router } from '@inertiajs/react'; // ─── Added Inertia Router
import {
    Bold,
    Clipboard,
    Eye,
    Image,
    Italic,
    Link,
    Paperclip,
    Underline,
    X,
} from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Options ──────────────────────────────────────────────────────────────────

const STATUS_OPTIONS = [
    { label: 'Open', value: 'open' },
    { label: 'In Progress', value: 'in_progress' },
    { label: 'Pending', value: 'pending' },
    { label: 'Resolved', value: 'resolved' },
    { label: 'Closed', value: 'closed' },
];

const ASSIGNEE_OPTIONS = [
    { label: 'Noah (Manager)', value: 'noah' },
    { label: 'Sarah (Support)', value: 'sarah' },
    { label: 'Ali (Tech)', value: 'ali' },
    { label: 'Ahamed (Support)', value: 'ahamed' },
];

const MENTION_OPTIONS = [
    { label: 'Noah', value: 'noah' },
    { label: 'Sarah', value: 'sarah' },
    { label: 'Ali', value: 'ali' },
    { label: 'Ahamed', value: 'ahamed' },
    { label: 'Lucas', value: 'lucas' },
];

interface TicketItem {
    id: number;
    ticketId: string;
    businessName: string;
    subject: string;
    priority: string;
    status: string;
    timeAgo: string;
}

interface TicketsDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    ticket: TicketItem | null;
    isMentionedView?: boolean; // ─── Added this new prop
}

export default function TicketsDetailModal({
    isOpen,
    onClose,
    ticket,
    isMentionedView = false, // ─── Added default value
}: TicketsDetailModalProps) {
    const [status, setStatus] = useState('open');
    const [assignee, setAssignee] = useState('');
    const [mentions, setMentions] = useState<string[]>(['ahamed', 'ali']);
    const [mentionInput, setMentionInput] = useState('');
    const [showMentionDrop, setShowMentionDrop] = useState(false);
    const [internalNote, setInternalNote] = useState('');

    if (!ticket) return null;

    const addMention = (val: string) => {
        if (!mentions.includes(val)) setMentions((prev) => [...prev, val]);
        setMentionInput('');
        setShowMentionDrop(false);
    };

    const removeMention = (val: string) =>
        setMentions((prev) => prev.filter((m) => m !== val));

    const getMentionLabel = (val: string) =>
        MENTION_OPTIONS.find((m) => m.value === val)?.label ?? val;

    const availableMentions = MENTION_OPTIONS.filter(
        (m) =>
            !mentions.includes(m.value) &&
            (mentionInput === '' ||
                m.label.toLowerCase().includes(mentionInput.toLowerCase())),
    );

    // ─── Custom Update Handler ───────────────────────────────────────────────
    const handleUpdate = () => {
        // You can place your backend update logic here first (e.g., axios.post)

        if (status === 'resolved') {
            // Redirects to "My Tickets".
            // NOTE: Adjust the query parameter '?tab=assigned' to match whatever
            // URL structure your app uses to open the "Assigned to Me" tab.
            router.visit('/my-tickets?tab=resolved');
        } else {
            // Close normally if it's not resolved
            onClose();
        }
    };

    // ─── Filter Status Options dynamically ───
    const activeStatusOptions = isMentionedView
        ? STATUS_OPTIONS.filter((opt) => opt.value !== 'resolved')
        : STATUS_OPTIONS;

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
                    <h2 className="text-base font-semibold text-gray-900">
                        Ticket #{ticket.ticketId}: {ticket.subject}
                    </h2>
                    <p className="mt-0.5 text-sm text-gray-500">
                        Submitted by {ticket.businessName}
                    </p>
                </div>

                {/* ── Top section: Description + Controls ─────────────── */}
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

                    {/* Controls (2/5) */}
                    <div className="col-span-2 rounded-xl border border-gray-200 bg-gray-100 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                />
                            </svg>
                            <h3 className="text-sm font-semibold text-gray-900">
                                Controls
                            </h3>
                        </div>

                        {/* Status */}
                        <div className="mb-3">
                            <p className="mb-1.5 text-xs font-medium text-gray-500">
                                Status
                            </p>
                            <CustomDropdown
                                label=""
                                options={activeStatusOptions} // ─── Use filtered options here
                                value={status}
                                onChange={setStatus}
                                placeholder="Open"
                            />
                        </div>

                        {/* Assigned To */}
                        <div className="mb-3">
                            <p className="mb-1.5 text-xs font-medium text-gray-500">
                                Assigned To
                            </p>
                            <CustomDropdown
                                label=""
                                options={ASSIGNEE_OPTIONS}
                                value={assignee}
                                onChange={setAssignee}
                                placeholder="Assign..."
                            />
                        </div>

                        {/* Mentions CC */}
                        <div>
                            <p className="mb-1.5 text-xs font-medium text-gray-500">
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
                                <input
                                    type="text"
                                    value={mentionInput}
                                    onChange={(e) => {
                                        setMentionInput(e.target.value);
                                        setShowMentionDrop(true);
                                    }}
                                    onFocus={() => setShowMentionDrop(true)}
                                    placeholder="Add Person"
                                    className="flex-1 text-sm text-gray-900 placeholder-gray-400 outline-none"
                                />
                                <button
                                    onClick={() =>
                                        setShowMentionDrop((o) => !o)
                                    }
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                                {showMentionDrop &&
                                    availableMentions.length > 0 && (
                                        <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                                            {availableMentions.map((m) => (
                                                <button
                                                    key={m.value}
                                                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                                    onClick={() =>
                                                        addMention(m.value)
                                                    }
                                                >
                                                    {m.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                            </div>
                            {mentions.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                    {mentions.map((m) => (
                                        <span
                                            key={m}
                                            className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700"
                                        >
                                            {getMentionLabel(m)}
                                            <button
                                                onClick={() => removeMention(m)}
                                                className="text-gray-400 hover:text-gray-600"
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* ── Activity History ─────────────────────────────────── */}
                <div className="mb-4 rounded-xl border border-gray-200 p-5">
                    <h3 className="mb-4 text-sm font-semibold text-gray-900">
                        Activity History
                    </h3>
                    <div className="space-y-4">
                        {[
                            {
                                name: 'Noah (Manager)',
                                time: '2:15 PM',
                                msg: '"Escalating this to you because you handled the previous POS integration issue. Please check the API logs."',
                            },
                            {
                                name: 'Sarah (Support)',
                                time: '2:15 PM',
                                msg: '"I have verified the logs, this seems to be a timeout issue."',
                            },
                        ].map((entry, i) => (
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
                                        {entry.time}
                                    </span>
                                </div>
                                <p className="ml-1 text-sm text-gray-600">
                                    {entry.msg}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Internal Note ────────────────────────────────────── */}
                <div className="rounded-xl border border-gray-200 p-5">
                    <h3 className="mb-3 text-sm font-semibold text-gray-900">
                        Internal Note
                    </h3>
                    {/* Toolbar */}
                    <div className="mb-0 flex items-center gap-1 rounded-t-lg border border-b-0 border-gray-200 px-2 py-1.5">
                        <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                            <Bold className="h-3.5 w-3.5" />
                        </button>
                        <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                            <Italic className="h-3.5 w-3.5" />
                        </button>
                        <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                            <Underline className="h-3.5 w-3.5" />
                        </button>
                        <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                            <Link className="h-3.5 w-3.5" />
                        </button>
                        <button className="rounded p-1.5 text-gray-500 hover:bg-gray-100">
                            <Image className="h-3.5 w-3.5" />
                        </button>
                    </div>
                    <textarea
                        rows={4}
                        value={internalNote}
                        onChange={(e) => setInternalNote(e.target.value)}
                        placeholder="e.g. Investigating the server logs now. Found a timeout error on port 443..."
                        className="w-full resize-none rounded-b-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                    />
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Close
                </IconButton>
                {/* ── Changed onClick to handleUpdate ── */}
                <Button className="w-full" onClick={handleUpdate}>
                    Update Ticket
                </Button>
            </div>
        </Modal>
    );
}
