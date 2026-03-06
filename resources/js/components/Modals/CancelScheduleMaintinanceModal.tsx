import Modal from '@/components/Modal';
import DelIcon from '@/images/icons/delIcon.svg?react';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface CancelScheduleMaintenanceModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CancelScheduleMaintenanceModal({
    isOpen,
    onClose,
    onConfirm,
}: CancelScheduleMaintenanceModalProps) {
    const [sendNotice, setSendNotice] = useState(true);

    useEffect(() => {
        if (isOpen) setSendNotice(true);
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header Icon ────────────────────────────────────── */}
                <div className="mb-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <DelIcon className="h-5 w-5 text-gray-700" />
                    </div>
                </div>

                {/* ── Main Card ───────────────────────────────────────── */}
                <div className="rounded-xl border border-gray-200 p-8">
                    <div className="mb-10 text-center">
                        <h3 className="mb-3 text-4xl font-bold text-gray-900">
                            Cancel Scheduled Maintenance?
                        </h3>
                        <p className="text-base font-semibold text-gray-700">
                            This will remove the scheduled downtime. The system
                            will remain online.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 px-5 py-4">
                        <label className="flex cursor-pointer items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setSendNotice(!sendNotice)}
                                className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded transition-colors ${sendNotice ? 'bg-[#79B800]' : 'border-2 border-gray-300 bg-white'}`}
                            >
                                {sendNotice && (
                                    <svg
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 6l3 3 5-5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </button>
                            <span className="text-sm text-gray-700">
                                Send cancellation notice to users
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Keep Schedule
                </IconButton>
                <Button
                    className="w-full bg-[#F04438] text-white hover:bg-[#D93025]"
                    onClick={() => {
                        onConfirm();
                        onClose();
                    }}
                >
                    Yes, Cancel Maintenance
                </Button>
            </div>
        </Modal>
    );
}
