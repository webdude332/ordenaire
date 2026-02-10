import Button from '@/components/ui/Button';
import patternBg from '@/images/icons/patternBg.svg';
import ProfileIcon from '@/images/icons/profielicon.svg?react';
import { useState } from 'react';
import Modal from './Modal';
// Import your new sub-components
import GalleryIcon from '@/images/icons/galleryIcon.svg?react';
import { UploadDropzone } from './upload/UploadDropzone';
import { UploadError } from './upload/UploadError';
import { UploadSuccess } from './upload/UploadSuccess';

interface AddDocumentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUpload: () => void;
    title: string;
    // title1: string;
}

type UploadStatus = 'initial' | 'uploading' | 'success' | 'error';

export default function UploadDocumentModal({
    isOpen,
    onClose,
    onUpload,
    title,
    // title1,
}: AddDocumentModalProps) {
    // --- State Management ---
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>('initial');
    const [progress, setProgress] = useState(0);

    // Mock Data (In a real app, this comes from the selected file)
    const fileName = 'photo.jpg';
    const fileSize = '200 KB';

    // --- Helper Functions (For Demo/Testing) ---
    const reset = () => {
        setUploadStatus('initial');
        setProgress(0);
    };

    const simulateUpload = () => {
        setUploadStatus('uploading');
        setProgress(10);

        // Simulate progress bar
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploadStatus('success');
                    return 100;
                }
                return prev + 20;
            });
        }, 400);
    };

    const simulateError = () => {
        setUploadStatus('error');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* --- TEMP TESTING BAR (Remove this later) --- */}
            <div className="absolute top-0 left-0 z-50 flex gap-2 rounded-br-lg bg-gray-100 p-2 opacity-50 hover:opacity-100">
                <span className="p-1 text-xs font-bold">Debug:</span>
                <button
                    onClick={reset}
                    className="border bg-white px-2 text-xs"
                >
                    Reset
                </button>
                <button
                    onClick={simulateUpload}
                    className="border bg-white px-2 text-xs"
                >
                    Success
                </button>
                <button
                    onClick={simulateError}
                    className="border bg-white px-2 text-xs"
                >
                    Error
                </button>
            </div>

            <div className="relative overflow-hidden p-6 sm:p-8">
                {/* --- Header Section --- */}
                <div className="relative mb-6 flex items-start gap-4">
                    <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                        <img
                            src={patternBg}
                            alt=""
                            className="max-w-none"
                            style={{ transform: 'scale(1.1)', opacity: 2 }}
                        />
                    </div>
                    <div>
                        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                            <GalleryIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                        </div>
                        <div className="relative z-10 pt-4">
                            <h3 className="text-md font-semibold text-gray-900">
                                {/* Upload Business Logo */}
                                {title}
                                {/* {title1} */}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* --- Main Content Area --- */}
                <div className="relative z-10 mb-4 rounded-lg border border-gray-200 bg-white p-4">
                    <div className="relative z-10 mb-6">
                        <div className="flex items-center justify-center">
                            <ProfileIcon className="mb-4 h-28 w-28" />
                        </div>

                        {/* --- DYNAMIC UPLOAD VIEWS --- */}
                        {uploadStatus === 'initial' && (
                            <UploadDropzone onClick={simulateUpload} />
                        )}

                        {uploadStatus === 'error' && (
                            <UploadError
                                fileName={fileName}
                                fileSize={fileSize}
                                onRetry={reset}
                            />
                        )}

                        {(uploadStatus === 'uploading' ||
                            uploadStatus === 'success') && (
                            <UploadSuccess
                                fileName={fileName}
                                fileSize={fileSize}
                                progress={progress}
                                isComplete={uploadStatus === 'success'}
                                onRemove={reset}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* --- Footer Actions --- */}
            <div className="mt-2 flex gap-4 border-t border-gray-100 bg-white px-8 py-5">
                <button
                    onClick={onClose}
                    className="flex-1 rounded-lg border border-gray-300 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                    Cancel
                </button>
                <div className="flex-1">
                    {/* Logic: Disable button while uploading or if error */}
                    <Button
                        onClick={
                            uploadStatus === 'success'
                                ? onUpload
                                : simulateUpload
                        }
                        className={`w-full ${uploadStatus === 'success' ? 'bg-[#79B800] hover:bg-[#6aa300]' : ''}`}
                        disabled={
                            uploadStatus === 'uploading' ||
                            uploadStatus === 'error'
                        }
                    >
                        {uploadStatus === 'uploading'
                            ? 'Uploading...'
                            : uploadStatus === 'success'
                              ? 'Save Logo'
                              : 'Add Logo'}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
