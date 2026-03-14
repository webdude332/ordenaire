import Modal from '@/components/Modal';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

interface TicketItem {
    id: number;
    ticketId: string;
    businessName: string;
    subject: string;
    priority: string;
    status: string;
    timeAgo: string;
}

interface TicketsStatusProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    ticket: TicketItem | null;
}

export default function TicketsStatus({
    isOpen,
    onClose,
    onConfirm,
    ticket,
}: TicketsStatusProps) {
    const [note, setNote] = useState('');
    const [skipNote, setSkipNote] = useState(false);

    const MAX = 275;
    const canConfirm = skipNote || note.trim().length > 0;

    useEffect(() => {
        if (isOpen) {
            setNote('');
            setSkipNote(false);
        }
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ──────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <CheckCircle className="h-5 w-5 text-gray-500" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Update Status
                    </h2>
                </div>

                {/* ── Card ────────────────────────────────────────────── */}
                <div className="rounded-xl border border-gray-200 p-8">
                    <div className="mb-6 text-center">
                        <h3 className="mb-2 text-2xl font-bold text-gray-900">
                            Mark Ticket #{ticket?.ticketId} as Resolved?
                        </h3>
                        <p className="text-sm font-semibold text-gray-600">
                            This will notify the client that the issue is fixed.
                        </p>
                    </div>

                    {/* Resolution Note */}
                    <div className="mb-4">
                        <p className="mb-1.5 text-sm font-semibold text-gray-900">
                            Resolution Note (Internal & Client View)
                        </p>
                        <textarea
                            rows={6}
                            value={note}
                            maxLength={MAX}
                            onChange={(e) => setNote(e.target.value)}
                            disabled={skipNote}
                            placeholder="e.g., Restarted the POS terminal and verified connection."
                            className={`w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] ${skipNote ? 'cursor-not-allowed bg-gray-50 text-gray-400' : ''}`}
                        />
                        <p className="mt-1 text-xs text-gray-400">
                            {MAX - note.length} characters left
                        </p>
                    </div>

                    {/* Skip checkbox */}
                    <div className="rounded-xl border border-gray-200 py-4 pl-5">
                        <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                checked={skipNote}
                                onChange={(e) => setSkipNote(e.target.checked)}
                                className="peer sr-only"
                            />
                            <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white transition-all peer-checked:border-[#79B800] peer-checked:bg-[#79B800]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 text-white"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M2 6l3 3 5-5" />
                                </svg>
                            </div>
                            Resolve without adding a note
                        </label>
                    </div>
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button
                    className={`w-full ${canConfirm ? '' : 'cursor-not-allowed !bg-gray-200 !text-gray-400 hover:!bg-gray-200'}`}
                    disabled={!canConfirm}
                    onClick={onConfirm}
                >
                    Confirm Resolution
                </Button>
            </div>
        </Modal>
    );
}
