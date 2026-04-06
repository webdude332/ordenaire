import Modal from '@/superadmin/components/Modal';
import DelIcon from '@shared/images/icons/delIcon.svg?react';
import patternBg from '@shared/images/icons/patternBg.svg';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
// import patternBg from '@shared/images/icons/patternBg.svg';

interface DeleteAccessKeyProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function DeleteAccessKey({
    isOpen,
    onClose,
    onConfirm,
}: DeleteAccessKeyProps) {
    const [confirmed, setConfirmed] = useState(false);

    useEffect(() => {
        if (isOpen) setConfirmed(false);
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="relative overflow-hidden p-6 sm:p-8">
                {/* Header icon */}
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
                                <DelIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                            </div>
                        </div>
                        <div className="relative z-10 text-sm font-semibold text-gray-900">
                            <h3>Delete Record</h3>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div className="relative z-10 rounded-xl border border-borderColor bg-white p-8 shadow-xs">
                    <div className="mb-10 text-center">
                        <h3 className="mb-3 text-3xl font-bold text-gray-900">
                            Delete Access Key?
                        </h3>
                        <p className="text-sm font-semibold text-gray-600">
                            This will permanently remove this key from the
                            database. This action cannot be undone.
                        </p>
                    </div>

                    <div className="rounded-xl border border-borderColor py-4 pl-6">
                        <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                checked={confirmed}
                                onChange={(e) => setConfirmed(e.target.checked)}
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
                            I confirm to proceed
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex gap-2 border-t border-borderColor px-4 py-6">
                <div className="w-1/2">
                    <IconButton className="w-full" onClick={onClose}>
                        No, Cancel!
                    </IconButton>
                </div>
                <div className="w-1/2">
                    <Button
                        className={`w-full text-white ${confirmed ? 'bg-[#F04438] hover:bg-[#FF0000]' : 'cursor-not-allowed bg-gray-300'}`}
                        disabled={!confirmed}
                        onClick={onConfirm}
                    >
                        Yes, Delete it!
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
