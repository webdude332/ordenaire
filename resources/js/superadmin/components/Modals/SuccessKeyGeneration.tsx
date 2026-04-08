import Modal from '@/superadmin/components/Modal';
import Key from '@shared/images/icons/key.svg?react';
import patternBg from '@shared/images/icons/patternBg.svg';
import SuccessIcon from '@shared/images/icons/successIcon.svg?react';
import { Copy, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';

interface SuccessKeyGenerationProps {
    isOpen: boolean;
    onClose: () => void;
    clientId?: string;
    clientSecret?: string;
}

export default function SuccessKeyGeneration({
    isOpen,
    onClose,
    clientId = 'API-8923-TALABAT-V2',
    clientSecret = 'sk_live_89234...9982',
}: SuccessKeyGenerationProps) {
    const [showSecret, setShowSecret] = useState(false);
    const [copiedId, setCopiedId] = useState(false);
    const [copiedSecret, setCopiedSecret] = useState(false);
    const [secured, setSecured] = useState(false);

    const handleCopyId = () => {
        navigator.clipboard.writeText(clientId).catch(() => {});
        setCopiedId(true);
        setTimeout(() => setCopiedId(false), 2000);
    };

    const handleCopySecret = () => {
        navigator.clipboard.writeText(clientSecret).catch(() => {});
        setCopiedSecret(true);
        setTimeout(() => setCopiedSecret(false), 2000);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Key className="h-4 w-4 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        API Key Generated
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
                                <Key className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        API Key Generated
                    </h2>
                </div>

                {/* Card */}
                <div className="rounded-xl border border-gray-200 p-8">
                    {/* Title + icon */}
                    <div className="mb-5 text-center">
                        <h3 className="mb-4 text-2xl font-bold text-gray-900">
                            Key Generated Successfully
                        </h3>
                        <div className="flex justify-center">
                            <SuccessIcon className="h-16 w-16" />
                        </div>
                    </div>

                    {/* Warning */}
                    <p className="mb-5 text-center text-sm font-semibold text-orange-500">
                        Warning: Copy the Client Secret now. We will never show
                        it again.
                    </p>

                    {/* Client ID + Secret side by side */}
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        {/* Client ID */}
                        <div>
                            <p className="mb-1.5 text-xs font-medium text-gray-700">
                                Client ID
                            </p>
                            <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5">
                                <span className="flex-1 text-sm text-gray-900">
                                    {clientId}
                                </span>
                                <button
                                    onClick={handleCopyId}
                                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700"
                                >
                                    <Copy className="h-3.5 w-3.5" />
                                    {copiedId ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                            <p className="mt-1 text-xs text-gray-400">
                                This is public/visible later
                            </p>
                        </div>

                        {/* Client Secret */}
                        <div>
                            <p className="mb-1.5 text-xs font-medium text-gray-700">
                                Client Secret (The Password)
                            </p>
                            <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5">
                                <input
                                    type={showSecret ? 'text' : 'password'}
                                    value={clientSecret}
                                    readOnly
                                    className="flex-1 text-sm text-gray-900 outline-none"
                                />
                                <button
                                    onClick={() => setShowSecret((s) => !s)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    {showSecret ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                                <div className="h-4 w-px bg-gray-200" />
                                <button
                                    onClick={handleCopySecret}
                                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700"
                                >
                                    <Copy className="h-3.5 w-3.5" />
                                    {copiedSecret ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Confirm copied checkbox */}
                    <div className="rounded-xl border border-gray-200 py-4 pl-6">
                        <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                checked={secured}
                                onChange={(e) => setSecured(e.target.checked)}
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
                            I have copied and secured the Client Secret.
                        </label>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 px-6 py-5">
                <Button
                    className={`w-full ${secured ? '' : 'cursor-not-allowed bg-gray-200 text-gray-400 hover:bg-gray-200'}`}
                    disabled={!secured}
                    onClick={onClose}
                >
                    Done
                </Button>
            </div>
        </Modal>
    );
}
