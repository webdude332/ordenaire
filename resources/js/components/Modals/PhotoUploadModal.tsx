import { useState, useRef, useEffect } from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/ui/Button';
import ProfileIcon from '@/images/icons/profielicon.svg?react';
import GalleryIcon from '@/images/icons/galleryIcon.svg?react';
import CloudIcon from '@/images/icons/cloudIcon.svg?react';
import TrashIcon from '@/images/icons/delIcon.svg?react';
import patternBg from '@/images/icons/patternBg.svg';
import Complete from '@/images/icons/complete.svg?react';
import Failed from '@/images/icons/failed.svg?react';




interface UpdateProfilePhotoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (file: File) => void;
}

type UploadStatus = 'initial' | 'uploading' | 'success' | 'error';

export default function UpdateProfilePhotoModal({
    isOpen,
    onClose,
    onSave,
}: UpdateProfilePhotoModalProps) {
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>('initial');
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const fileName = selectedFile?.name || "photo.jpg";
    const fileSize = selectedFile ? `${(selectedFile.size / 1024).toFixed(0)} KB` : "0 KB";

    const reset = () => {
        setUploadStatus('initial');
        setProgress(0);
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            startSimulatedUpload();
        }
    };

    const startSimulatedUpload = () => {
        setUploadStatus('uploading');
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploadStatus('success');
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* Debug Controls */}
            <div className="absolute top-0 left-0 z-50 flex gap-2 p-2 bg-gray-100 rounded-br-lg opacity-30 hover:opacity-100">
                <button onClick={reset} className="text-[10px] border bg-white px-2">Reset</button>
                <button onClick={() => setUploadStatus('error')} className="text-[10px] border bg-white px-2 text-red-500">Error</button>
            </div>

            <div className="relative overflow-hidden p-6 sm:p-8">
                {/* Header Section */}
                <div className="relative mb-6 flex items-start gap-4">
                    <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                        <img
                            src={patternBg}
                            alt=""
                            className="max-w-none"
                            style={{ transform: 'scale(1.1)', opacity: 0.7 }}
                        />
                    </div>
                    <div>
                        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                            <GalleryIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                        </div>
                        <div className="relative z-10 pt-4">
                            <h3 className="text-md font-medium text-gray-900">Update Profile Photo</h3>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="relative z-10 mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-xs">
                    <div className="flex flex-col items-center mb-6">
                        <ProfileIcon className="w-28 h-28 mb-4" />
                        
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            className="hidden" 
                            accept="image/*"
                            onChange={handleFileChange} 
                        />

                        {uploadStatus === 'initial' && (
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full flex flex-col items-center justify-center space-y-3 rounded-lg border border-[#E8E6EA] p-6 shadow-xs cursor-pointer hover:bg-gray-50 transition-colors"
                            >
                                <div className="rounded-md border border-gray-200 p-2 shadow-xs bg-white">
                                    <CloudIcon className="h-5 w-5" />
                                </div>
                                <p className="text-sm">
                                    <span className="text-primary font-semibold">Click to upload</span> or drag and drop
                                </p>
                            </div>
                        )}

                        {uploadStatus === 'error' && (
                            <div className="w-full rounded-lg border-2 border-red-400 bg-white p-4 flex items-center justify-between shadow-sm">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-gray-900">{fileName}</span>
                                    <span className="text-xs text-[#D92D20] font-bold flex items-center gap-2 divide-x ">
                                        <span className='text-gray-500 pr-4'>0 KB of 200 KB</span>
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full  text-[12px]"><Failed/></span>
                                        Failed
                                    </span>
                                    <button onClick={() => fileInputRef.current?.click()} className="cursor-pointer text-xs font-bold text-[#D92D20] underline text-left mt-1">Try again</button>
                                </div>
                                <button onClick={reset} className="text-gray-400 hover:text-gray-600">
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </div>
                        )}

                        {(uploadStatus === 'uploading' || uploadStatus === 'success') && (
                            <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900">{fileName}</span>
                                        <span className="text-xs text-gray-500">{fileSize} of {fileSize} 
                                            {uploadStatus === 'success' && <span className="text-[#079455] font-bold ml-2 inline-flex items-center gap-1">
                                                <span className="flex h-3 w-3 items-center justify-center rounded-full text-white text-[12px]"><Complete/></span>
                                                Complete
                                            </span>}
                                        </span>
                                    </div>
                                    <button onClick={reset} className="text-gray-400 hover:text-gray-600">
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                                    <div 
                                        className="h-full bg-[#84cc16] transition-all duration-300" 
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <div className="mt-1 flex justify-end">
                                    <span className="text-xs font-medium text-gray-500">{progress}%</span>
                                </div>
                            </div>
                        )}
                        
                        <p className="mt-4 text-center text-sm font-medium text-gray-700">Accepted: JPG, PNG, WEBP (Max 5MB)</p>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-2 flex gap-4 border-t border-gray-100 bg-white px-8 py-5">
                <button
                    onClick={onClose}
                    className="flex-1 rounded-lg border border-gray-300 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                    Cancel
                </button>
                <div className="flex-1">
                    <Button 
                        onClick={uploadStatus === 'success' ? () => selectedFile && onSave(selectedFile) : undefined} 
                        className={`w-full ${uploadStatus === 'success' ? 'bg-[#79B800] hover:bg-[#6aa300]' : ''}`}
                        disabled={uploadStatus !== 'success'}
                    >
                        Save Photo
                    </Button>
                </div>
            </div>
        </Modal>
    );
}