import { useState } from 'react';
import patternBg from '../images/icons/patternBg.png';
import Button from './Button';
import IconButton from './IconButton';
import Modal from './Modal';
import Shop from '@/images/icons/shop.svg?react'

interface ErrorDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRetry: () => void;
}

export default function ErrorDetailsModal({
    isOpen,
    onClose,
    onRetry,
}: ErrorDetailsModalProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const logText = `Error: 550 5.1.1 <contact@...>: Recipient address rejected at SMTPTransport._send (node_modules/nodemailer/lib...)`;
        navigator.clipboard.writeText(logText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* Added relative overflow-hidden to clip the pattern */}
            <div className="relative overflow-hidden p-6 sm:p-8">
                {/* Header with Icon */}
                <div className="relative mb-6 flex items-start gap-4">
                    {/* Icon Container: Made relative to anchor the pattern */}
                    <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        {/* --- PATTERN BACKGROUND --- */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <img
                                src={patternBg}
                                alt=""
                                className="max-w-none"
                                style={{ transform: 'scale(1.5)', opacity: 1 }}
                            />
                        </div>

                        {/* Actual Icon: z-10 to sit on top */}
                        <svg
                            className="relative z-10 h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="relative z-10 flex-1">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                        Error Details: Annual Report
                    </h3>
                </div>
                {/* Content Z-Index wrapper to ensure text sits above pattern if it overlaps */}
                <div className="relative z-10 rounded-xl border border-gray-200 px-4 pt-4 bg-white">
                    {/* Generation Failed Badge */}

                    <div className="mb-6">
                        <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2 py-0.5">
                            <span className="h-2 w-2 rounded-full bg-red-500"></span>
                            <span className="text-sm font-medium text-red-700">
                                Generation Failed
                            </span>
                        </span>
                    </div>

                    {/* Tenant Info Card */}
                    <div className="mb-6 rounded-xl border border-gray-200 p-4">
                        <div className="grid grid-cols-2 gap-4 divide-x divide-[#E8E6EA]">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100">
                                        <Shop className='w-5 h-5'/>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-xs text-gray-500">
                                            Tenant
                                        </p>
                                        <p className="text-base font-semibold text-gray-900">
                                            Pizza Hut
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="mb-1 text-xs text-gray-500">
                                    Failed On
                                </p>
                                <p className="text-base font-semibold text-gray-900">
                                    05 Sept 2025, 09:45 AM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Error Summary */}
                    <div className="mb-6">
                        <h4 className="mb-3 text-sm font-semibold text-gray-900">
                            Error Summary
                        </h4>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                            <p className="text-sm text-gray-700">
                                "The system could not send the email because the
                                recipient mail server rejected the address."
                            </p>
                        </div>
                    </div>

                    {/* Technical System Log */}
                    <div className="mb-6">
                        <h4 className="mb-3 text-sm font-semibold text-gray-900">
                            Technical System Log
                        </h4>
                        <div className="relative rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono text-xs text-gray-700">
                            <pre className="break-words whitespace-pre-wrap">
                                Error: 550 5.1.1 &lt;contact@...&gt;: Recipient
                                address rejected at SMTPTransport._send
                                (node_modules/nodemailer/lib...)
                            </pre>
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="mt-3 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-800"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                            {copied ? 'Copied!' : 'Copy Log to Clipboard'}
                        </button>
                    </div>

                    {/* Action Buttons */}
                </div>
            </div>
            <div className="flex gap-3 pt-4 px-4 pb-4 border-t border-gray-200">
                <IconButton className="flex-1" onClick={onClose}>
                    Close
                </IconButton>
                <Button className="flex-1" onClick={onRetry}>
                    Retry
                </Button>
            </div>
        </Modal>
    );
}
