import Modal from '@/components/Modal';
import { Ban } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import CustomDropdown from '../ui/CustomDropdown';
import { Label } from '../ui/FormElements';
import IconButton from '../ui/IconButton';

interface CancelSubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    subscriber: {
        name: string;
        location: string;
        accessUntil: string; // e.g. "12 Oct 2026"
    };
    onConfirm: () => void;
}

const CANCELLATION_REASONS = [
    'Too expensive',
    'Switching to a competitor',
    'Missing features',
    'Technical issues',
    'Business closing',
    'Other',
];

export default function CancelSubscriptionModal({
    isOpen,
    onClose,
    subscriber,
    onConfirm,
}: CancelSubscriptionModalProps) {
    const [reason, setReason] = useState('');
    const [notes, setNotes] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const canSubmit = reason !== '';

    const handleConfirm = () => {
        if (!canSubmit) return;
        onConfirm();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6">
                {/* ── Header ─────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Ban
                            className="h-5 w-5 text-gray-700"
                            strokeWidth={2}
                        />
                    </div>
                    <h2 className="text-md font-semibold text-gray-900">
                        Cancel Subscription: {subscriber.name} ·{' '}
                        {subscriber.location}
                    </h2>
                </div>

                {/* ── Main Card ──────────────────────────────────────── */}
                <div className="mb-4 rounded-xl border border-gray-200 p-6">
                    {/* Warning text */}
                    <p className="mb-1 text-base font-semibold text-gray-900">
                        Are you sure you want to cancel this subscription?
                    </p>
                    <p className="mb-6 text-sm text-gray-500">
                        This action will immediately stop billing. The user will
                        lose access on:{' '}
                        <span className="font-medium text-gray-700">
                            {subscriber.accessUntil}
                        </span>
                        .
                    </p>

                    {/* Reason for Cancellation */}
                    <div className="w-1/2">
                        <div className="mb-5">
                            <Label className="mb-2">
                                Reason for Cancellation
                                <span className="text-primary">*</span>
                            </Label>
                            <div className="relative">
                                <CustomDropdown
                                    label=""
                                    options={CANCELLATION_REASONS.map((r) => ({
                                        label: r,
                                        value: r,
                                    }))}
                                    value={reason}
                                    onChange={setReason}
                                    placeholder="Select a reason..."
                                    labelClassName="mb-2 text-sm font-medium"
                                />
                                {dropdownOpen && (
                                    <div className="absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                                        {CANCELLATION_REASONS.map((r) => (
                                            <button
                                                key={r}
                                                type="button"
                                                onClick={() => {
                                                    setReason(r);
                                                    setDropdownOpen(false);
                                                }}
                                                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                {r}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="pr-4">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            Additional Notes (Optional)
                        </label>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows={4}
                            placeholder="Specify the reason for cancellation for internal records."
                            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-primary focus:outline-none"
                        />
                    </div>
                </div>
            </div>
            {/* ── Footer Buttons ─────────────────────────────────── */}
            <div className="flex gap-3 border-t border-borderColor px-6 py-6">
                <div className="w-1/2">
                    <IconButton className="w-full" onClick={onClose}>
                        Keep Subscription
                    </IconButton>
                </div>

                <div className="w-1/2">
                    <Button
                        onClick={handleConfirm}
                        disabled={!canSubmit}
                        // canSubmit={`w-full bg-[#FF0019] hover:bg-[#D00015]`: }
                        className={` ${
                            canSubmit
                                ? 'w-full cursor-pointer bg-[#FF0019] text-white hover:bg-[#D00015]'
                                : 'w-full cursor-not-allowed bg-gray-200 text-gray-400'
                        }`}
                    >
                        Cancel Subscription
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
