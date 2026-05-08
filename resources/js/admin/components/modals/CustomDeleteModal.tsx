import DelIcon from '@/shared/images/icons/delIcon.svg?react';
import patternBg from '@/shared/images/icons/patternBg.svg';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import { DelCheckbox } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import { useEffect, useState } from 'react';

interface SimpleErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRetry: () => void;
    title: string;
    // --- New optional props with defaults ---
    heading?: string;
    subheading?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    showCheckbox?: boolean;
}

export default function DeleteModal({
    isOpen,
    onClose,
    onRetry,
    title,
    heading = 'Are you sure?',
    subheading = 'You will not be able to recover the deleted record!',
    confirmLabel = 'Yes, Delete it!',
    cancelLabel = 'No, Cancel',
    showCheckbox = true,
}: SimpleErrorModalProps) {
    const [confirmed, setConfirmed] = useState(false);

    useEffect(() => {
        if (isOpen) setConfirmed(false);
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="relative overflow-hidden p-6 sm:p-8">
                <div className="relative mb-6">
                    <div className="flex flex-col items-start gap-4">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                            <div className="pointer-events-none absolute inset-0 top-22 left-22 flex items-center justify-center">
                                <img
                                    src={patternBg}
                                    alt=""
                                    className="max-w-none"
                                    style={{
                                        transform: 'scale(1.1)',
                                        opacity: 1,
                                    }}
                                />
                            </div>
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <DelIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 text-iconColor" />
                            </div>
                        </div>
                        <div className="text-md relative z-10 font-semibold">
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 rounded-xl border border-borderColor bg-white p-8 shadow-xs">
                    <div
                        className={`text-center ${showCheckbox ? 'mb-20' : 'mb-4'}`}
                    >
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">
                            {heading}
                        </h3>
                        <p className="text-lg font-semibold text-gray-600">
                            {subheading}
                        </p>
                    </div>

                    {showCheckbox && (
                        <div className="mt-12 rounded-xl border border-borderColor py-4 pl-6">
                            <DelCheckbox
                                label="I confirm to proceed"
                                checked={confirmed}
                                onChange={(e) => setConfirmed(e.target.checked)}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-2 border-t border-borderColor px-4 py-6">
                <div className="w-1/2">
                    <IconButton className="w-full" onClick={onClose}>
                        {cancelLabel}
                    </IconButton>
                </div>
                <div className="w-1/2">
                    <Button
                        className={`w-full text-white ${
                            !showCheckbox || confirmed
                                ? 'bg-[#F04438] hover:bg-[#FF0000]'
                                : 'cursor-not-allowed bg-gray-300'
                        }`}
                        disabled={showCheckbox && !confirmed}
                        onClick={onRetry}
                    >
                        {confirmLabel}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
