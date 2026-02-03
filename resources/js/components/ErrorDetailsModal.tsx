import Shop from '@/images/icons/shop.svg?react';
import { useState } from 'react';
import Alert from '../images/icons/alertBlack.svg?react';
import Copy from '../images/icons/copy.svg?react';
import patternBg from '../images/icons/patternBg.png';
import Modal from './Modal';
import Button from './ui/Button';
import IconButton from './ui/IconButton';

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
            <div className="relative overflow-hidden p-6 sm:p-8">
                <div className="mb-8 flex flex-col items-start gap-4">
                    {/* --- ICON WRAPPER WITH PATTERN --- */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                        {/* 1. The Pattern Background (Centered behind icon) */}
                        <div className="pointer-events-none absolute inset-0 top-0 left-0 flex items-center justify-center">
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
                            <Alert className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                        </div>
                    </div>
                </div>
                <div className="relative z-10 flex-1">
                    <h3 className="text-md mb-4 font-semibold text-gray-900">
                        Error Details: Annual Report
                    </h3>
                </div>
                <div className="relative z-10 rounded-xl border border-gray-200 bg-white px-4 pt-4">
                    <div className="mb-6">
                        <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2 py-0.5">
                            <span className="h-2 w-2 rounded-full bg-red-500"></span>
                            <span className="text-sm font-medium text-red-700">
                                Generation Failed
                            </span>
                        </span>
                    </div>
                    <div className="mb-6 rounded-xl border border-gray-200 p-4">
                        <div className="grid grid-cols-2 gap-4 divide-x divide-[#E8E6EA] py-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100">
                                        <Shop className="h-5 w-5" />
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
                    <div className="mb-6">
                        <h4 className="mb-3 text-sm font-semibold text-gray-900">
                            Error Summary
                        </h4>
                        <div className="rounded-lg border border-gray-200 p-4">
                            <p className="text-sm text-gray-700">
                                "The system could not send the email because the
                                recipient mail server rejected the address."
                            </p>
                        </div>
                    </div>
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
                            className="mt-3 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-gray-800"
                        >
                            <Copy className="h-4 w-4" />
                            {copied ? 'Copied!' : 'Copy Log to Clipboard'}
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 border-t border-gray-200 px-4 pt-4 pb-4">
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
