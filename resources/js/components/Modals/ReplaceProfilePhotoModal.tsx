import Modal from '@/components/Modal';
import Button from '@/components/ui/Button';
import CloudIcon from '@/images/icons/cloudIcon.svg?react';
import Complete from '@/images/icons/complete.svg?react';
import TrashIcon from '@/images/icons/delIcon.svg?react';
import Failed from '@/images/icons/failed.svg?react';
import GalleryIcon from '@/images/icons/galleryIcon.svg?react';
import patternBg from '@/images/icons/patternBg.svg';
import ProfileIcon from '@/images/icons/profielicon.svg?react';
import { useEffect, useRef, useState } from 'react';

interface ReplaceProfilePhotoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (file: File | null) => void;
}

type UploadStatus = 'initial' | 'uploading' | 'success' | 'error';

export default function ReplaceProfilePhotoModal({
    isOpen,
    onClose,
    onSave,
}: ReplaceProfilePhotoModalProps) {
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>('initial');
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const fileName = selectedFile?.name || 'photo.jpg';
    const fileSize = selectedFile
        ? `${(selectedFile.size / 1024).toFixed(0)} KB`
        : '0 KB';

    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    const reset = () => {
        setUploadStatus('initial');
        setProgress(0);
        setSelectedFile(null);
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
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
        }, 150);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* Debug Toolbar */}
            <div className="absolute top-0 left-0 z-50 flex gap-2 rounded-br-lg bg-gray-100 p-2 opacity-30 hover:opacity-100">
                <button
                    onClick={reset}
                    className="border bg-white px-2 text-[10px]"
                >
                    Reset
                </button>
                <button
                    onClick={() => setUploadStatus('error')}
                    className="border bg-white px-2 text-[10px] text-red-500"
                >
                    Error
                </button>
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
                            <h3 className="text-md font-semibold text-gray-900">
                                Replace Profile Photo
                            </h3>
                        </div>
                    </div>
                    {/* EXTRA X BUTTON REMOVED HERE - Your base Modal component already provides one */}
                </div>

                {/* Main Content Area */}
                <div className="relative z-10 mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-xs">
                    <div className="flex flex-col items-center">
                        <div className="mb-8 flex flex-col items-center">
                            <div className="mb-3 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-gray-100 bg-gray-50">
                                {previewUrl ? (
                                    <img
                                        src={previewUrl}
                                        className="h-full w-full object-cover"
                                        alt="Preview"
                                    />
                                ) : (
                                    <ProfileIcon className="h-14 w-14 text-gray-300" />
                                )}
                            </div>

                            <button
                                onClick={reset}
                                className="flex cursor-pointer items-center gap-1.5 text-sm font-bold text-[#D92D20] hover:underline"
                            >
                                Remove Photo <TrashIcon className="h-4 w-4" />
                            </button>
                        </div>

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
                                className="flex w-full cursor-pointer flex-col items-center justify-center space-y-3 rounded-lg border border-[#E8E6EA] p-6 shadow-xs transition-colors hover:bg-gray-50"
                            >
                                <div className="rounded-md border border-gray-200 bg-white p-2 shadow-xs">
                                    <CloudIcon className="h-5 w-5" />
                                </div>
                                <p className="text-sm">
                                    <span className="font-bold text-[#84cc16]">
                                        Click to upload
                                    </span>{' '}
                                    new photo or drag and drop
                                </p>
                            </div>
                        )}

                        {uploadStatus === 'error' && (
                            <div className="flex w-full items-center justify-between rounded-lg border-2 border-[#FDA29B] bg-white p-4 shadow-sm">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-gray-900">
                                        {fileName}
                                    </span>
                                    <div className="mt-1 flex items-center gap-2">
                                        <span className="border-r border-gray-200 pr-2 text-xs text-gray-500">
                                            0 KB of 200 KB
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs font-bold text-[#D92D20]">
                                            <Failed className="h-4 w-4" />{' '}
                                            Failed
                                        </span>
                                    </div>
                                    <button
                                        onClick={() =>
                                            fileInputRef.current?.click()
                                        }
                                        className="mt-2 cursor-pointer text-left text-xs font-bold text-[#D92D20] underline"
                                    >
                                        Try again
                                    </button>
                                </div>
                                <button
                                    onClick={reset}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </div>
                        )}

                        {(uploadStatus === 'uploading' ||
                            uploadStatus === 'success') && (
                            <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                                <div className="mb-2 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900">
                                            {fileName}
                                        </span>
                                        <div className="mt-0.5 flex items-center gap-2">
                                            <span className="border-r border-gray-200 pr-2 text-xs text-gray-500">
                                                {fileSize} of {fileSize}
                                            </span>
                                            {uploadStatus === 'success' && (
                                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#079455]">
                                                    <Complete className="h-4 w-4" />{' '}
                                                    Complete
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={reset}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
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
                                    <span className="text-xs font-medium text-gray-500">
                                        {progress}%
                                    </span>
                                </div>
                            </div>
                        )}

                        <p className="mt-4 text-center text-sm font-medium text-gray-700 italic">
                            Accepted: JPG, PNG, WEBP (Max 5MB)
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-2 flex gap-4 border-t border-gray-100 bg-white px-8 py-5">
                <button
                    onClick={onClose}
                    className="flex-1 rounded-lg border border-gray-300 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                    Cancel
                </button>
                <div className="flex-1">
                    <Button
                        onClick={() => onSave(selectedFile)}
                        className={`w-full py-2.5 ${uploadStatus === 'success' ? 'bg-[#79B800] hover:bg-[#6aa300]' : 'cursor-not-allowed bg-gray-100 text-gray-400'}`}
                        disabled={uploadStatus !== 'success'}
                    >
                        Save Photo
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
