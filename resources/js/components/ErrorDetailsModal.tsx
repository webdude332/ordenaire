import React, { useState } from 'react';
import Modal from './Modal';

interface ErrorDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRetry: () => void;
}

export default function ErrorDetailsModal({ isOpen, onClose, onRetry }: ErrorDetailsModalProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const logText = `Error: 550 5.1.1 <contact@...>: Recipient address rejected at SMTPTransport._send (node_modules/nodemailer/lib...)`;
        navigator.clipboard.writeText(logText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="2xl">
            <div className="p-6 sm:p-8">
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center bg-white">
                        <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">Error Details: Annual Report</h3>
                    </div>
                </div>

                {/* Generation Failed Badge */}
                <div className="mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="text-sm font-medium text-red-700">Generation Failed</span>
                    </span>
                </div>

                {/* Tenant Info Card */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg border border-gray-300 bg-white flex items-center justify-center">
                                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Tenant</p>
                                    <p className="text-base font-semibold text-gray-900">Pizza Hut</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Failed On</p>
                            <p className="text-base font-semibold text-gray-900">05 Sept 2025, 09:45 AM</p>
                        </div>
                    </div>
                </div>

                {/* Error Summary */}
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Error Summary</h4>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-700">"The system could not send the email because the recipient mail server rejected the address."</p>
                    </div>
                </div>

                {/* Technical System Log */}
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technical System Log</h4>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-xs text-gray-700 relative">
                        <pre className="whitespace-pre-wrap break-words">Error: 550 5.1.1 &lt;contact@...&gt;: Recipient address rejected at SMTPTransport._send (node_modules/nodemailer/lib...)</pre>
                    </div>
                    <button 
                        onClick={copyToClipboard}
                        className="mt-3 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        {copied ? 'Copied!' : 'Copy Log to Clipboard'}
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Close
                    </button>
                    <button
                        onClick={onRetry}
                        className="flex-1 px-4 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        </Modal>
    );
}