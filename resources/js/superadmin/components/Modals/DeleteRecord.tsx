import Modal from '@/superadmin/components/Modal';
import { DelCheckbox } from '@/superadmin/components/ui/FormElements';
import DelIcon from '@shared/images/icons/delIcon.svg?react';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface DeleteRecordModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    subtitle?: string; // e.g. "Reverts this region to the Kuwait pricing."
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function DeleteRecordModal({
    isOpen,
    onClose,
    onConfirm,
    subtitle = 'Reverts this region to the Kuwait pricing.',
}: DeleteRecordModalProps) {
    const [confirmed, setConfirmed] = useState(false);

    // Reset checkbox every time modal opens
    useEffect(() => {
        if (isOpen) setConfirmed(false);
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ─────────────────────────────────────────── */}
                <div className="mb-6">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <DelIcon className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Delete Record
                    </h2>
                </div>

                {/* ── Main Card ───────────────────────────────────────── */}
                <div className="rounded-xl border border-gray-200 p-8">
                    {/* Are you sure text */}
                    <div className="mb-10 text-center">
                        <h3 className="mb-3 text-4xl font-bold text-gray-900">
                            Are you sure?
                        </h3>
                        <p className="text-base font-semibold text-gray-700">
                            You will not be able to recover the deleted record!
                        </p>
                        {subtitle && (
                            <p className="mt-1 text-base font-semibold text-gray-700">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* Confirm checkbox */}
                    <div className="rounded-xl border border-gray-200 py-4 pl-6">
                        <DelCheckbox
                            label="I confirm to proceed"
                            checked={confirmed}
                            onChange={(e) => setConfirmed(e.target.checked)}
                        />
                    </div>
                </div>
            </div>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    No, Cancel!
                </IconButton>
                <Button
                    className={`w-full text-white ${
                        confirmed
                            ? 'bg-[#F04438] hover:bg-[#D93025]'
                            : 'cursor-not-allowed bg-gray-300'
                    }`}
                    disabled={!confirmed}
                    onClick={onConfirm}
                >
                    Yes, Delete it!
                </Button>
            </div>
        </Modal>
    );
}
