import Modal from '@/superadmin/components/Modal';
import patternBg from '@shared/images/icons/patternBg.svg';
import { AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

interface RevokeKeyProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    keyName?: string;
}

export default function RevokeKey({
    isOpen,
    onClose,
    onConfirm,
    keyName,
}: RevokeKeyProps) {
    const [confirmed, setConfirmed] = useState(false);

    useEffect(() => {
        if (isOpen) setConfirmed(false);
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header */}
                {/* <div className="mb-6">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-orange-200 bg-orange-50">
                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                    </div>
                    <h2 className="text-sm font-semibold text-gray-900">
                        Revoke Access
                    </h2>
                </div> */}
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
                                <AlertTriangle className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 text-[#B45309] shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Revoke Access
                    </h2>
                </div>

                {/* Card */}
                <div className="rounded-xl border border-gray-200 p-8">
                    <div className="mb-5 text-center">
                        <h3 className="mb-5 text-2xl font-bold text-gray-900">
                            Revoke Access Key?
                        </h3>

                        {/* Red warning circle icon */}
                        <div className="mb-5 flex justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
                                <AlertTriangle className="h-8 w-8 text-white" />
                            </div>
                        </div>

                        <p className="mb-2 text-sm text-gray-700">
                            You are about to revoke the key{' '}
                            <span className="font-bold">
                                {keyName ?? '[Key Name / ID]'}.
                            </span>
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                            This will immediately disconnect the associated
                            application. Any ongoing orders or data syncs
                            relying on this key will fail. Are you sure you want
                            to proceed?
                        </p>
                    </div>

                    {/* Confirm checkbox */}
                    <div className="mt-4 rounded-xl border border-gray-200 py-4 pl-6">
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

            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    No, Cancel!
                </IconButton>
                <Button
                    className={`w-full text-white ${confirmed ? 'bg-[#F04438] hover:bg-[#FF0000]' : 'cursor-not-allowed bg-gray-300'}`}
                    disabled={!confirmed}
                    onClick={onConfirm}
                >
                    Yes, Revoke Key
                </Button>
            </div>
        </Modal>
    );
}
