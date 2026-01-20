import Button from '@/components/ui/Button';
import CloudIcon from '@/images/icons/cloudIcon.svg?react';
import UploadPlus from '@/images/icons/filePlus.svg?react';
import patternBg from '@/images/icons/patternBg.svg';
import { useState } from 'react';
import Modal from './Modal';

interface UploadDocumentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUpload: () => void;
    title?: string; 
}

export default function UploadDocumentModal({
    isOpen,
    onClose,
    onUpload,
    title = 'Trade License', // Default fallback
}: UploadDocumentModalProps) {
    const [expiryDate, setExpiryDate] = useState('');

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="relative overflow-hidden p-6 sm:p-8">
                <div className="relative mb-6 flex items-start gap-4">
                    <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                        <img
                            src={patternBg}
                            alt=""
                            className="max-w-none"
                            style={{
                                transform: 'scale(1.1)',
                                opacity: 2,
                            }}
                        />
                    </div>
                    <div>
                        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                            <UploadPlus className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                        </div>

                        <div className="relative z-10 pt-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Upload Trade License
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mb-4 rounded-lg border border-gray-200 bg-white p-4">
                    <div className="relative z-10 mb-6">
                        <p className="mb-4 text-sm font-semibold text-gray-900">
                            Upload Document
                        </p>
                        <p className="mb-4 text-sm font-normal text-gray-700">
                            Accepted: PDF, JPG, PNG (MAX 5MD)
                        </p>
                        <div className="flex flex-col items-center justify-center space-y-3 rounded-lg border border-[#E8E6EA] p-4 shadow-xs">
                            <div className="bg-whit rounded-sm border border-borderColor p-2 shadow-xs">
                                <CloudIcon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm">
                                    <span className="text-primary">
                                        Click to upload
                                    </span>{' '}
                                    or drag and drop
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Expiry Date (Optional){' '}
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                defaultValue="Jan 10, 2025 - Jul 10, 2025"
                                className="h-11 w-1/2 rounded-lg border border-gray-200 px-4 pl-10 text-sm font-medium text-gray-900 transition-all focus:border-transparent focus:ring-2 focus:ring-lime-500 focus:outline-none"
                            />
                            <svg
                                className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 flex gap-4 border-t border-gray-100 bg-white px-8 py-5">
                <button
                    onClick={onClose}
                    className="flex-1 rounded-lg border border-gray-300 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                    Cancel
                </button>
                <div className="flex-1">
                    <Button onClick={onUpload} className="w-full">
                        Upload
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
