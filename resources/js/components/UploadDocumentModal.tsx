import Button from '@/components/Button';
import UploadPlus from '@/images/icons/filePlus.svg?react';
import patternBg from '@/images/icons/patternBg.svg';
import { useState } from 'react';
import Modal from './Modal';
import ProfileIcon from '@/images/icons/profielicon.svg?react'
// Import your new sub-components
import { UploadDropzone } from './upload/UploadDropzone';
import { UploadError } from './upload/UploadError';
import { UploadSuccess } from './upload/UploadSuccess';
import GalleryIcon from '@/images/icons/galleryIcon.svg?react'

interface AddDocumentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUpload: () => void;
}

type UploadStatus = 'initial' | 'uploading' | 'success' | 'error';

export default function UploadDocumentModal({
    isOpen,
    onClose,
    onUpload,
}: AddDocumentModalProps) {
    // --- State Management ---
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>('initial');
    const [progress, setProgress] = useState(0);

    // Mock Data (In a real app, this comes from the selected file)
    const fileName = "photo.jpg";
    const fileSize = "200 KB";

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
            <div className="absolute top-0 left-0 z-50 flex gap-2 p-2 bg-gray-100 rounded-br-lg opacity-50 hover:opacity-100">
                <span className="text-xs font-bold p-1">Debug:</span>
                <button onClick={reset} className="text-xs border bg-white px-2">Reset</button>
                <button onClick={simulateUpload} className="text-xs border bg-white px-2">Success</button>
                <button onClick={simulateError} className="text-xs border bg-white px-2">Error</button>
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
                            <h3 className="text-xl font-semibold text-gray-900">
                                Update Business Logo
                            </h3>
                        </div>
                    </div>
                </div>

                {/* --- Main Content Area --- */}
                <div className="relative z-10 mb-4 rounded-lg border border-gray-200 bg-white p-4">
                    <div className="relative z-10 mb-6">
                        <div className='flex justify-center items-center'>
                            <ProfileIcon className=' w-28 h-28 mb-4'/>
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

                        {(uploadStatus === 'uploading' || uploadStatus === 'success') && (
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
                        onClick={uploadStatus === 'success' ? onUpload : simulateUpload} 
                        className={`w-full ${uploadStatus === 'success' ? 'bg-[#79B800] hover:bg-[#6aa300]' : ''}`}
                        disabled={uploadStatus === 'uploading' || uploadStatus === 'error'}
                    >
                        {uploadStatus === 'uploading' ? 'Uploading...' : uploadStatus === 'success' ? 'Save Document' : 'Add Document'}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}