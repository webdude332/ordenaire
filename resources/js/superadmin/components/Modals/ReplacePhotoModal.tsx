import Modal from '@/superadmin/components/Modal';
import patternBg from '@shared/images/icons/patternBg.svg';
import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
import Profile from '@shared/images/icons/profile.svg?react';
import { useRef, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ReplacePhotoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (file: File | null) => void;
    currentPhoto?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ReplacePhotoModal({
    isOpen,
    onClose,
    onConfirm,
    currentPhoto,
}: ReplacePhotoModalProps) {
    const [preview, setPreview] = useState<string | null>(currentPhoto ?? null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleConfirm = () => {
        onConfirm(selectedFile);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ─────────────────────────────────────────── */}
                {/* <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <PencilIcon className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Replace Photo
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
                                <PencilIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Replace Photo
                    </h2>
                </div>

                {/* ── Photo Card ─────────────────────────────────────── */}
                <div className="rounded-xl border border-gray-200 p-5">
                    <h3 className="mb-1 text-sm font-semibold text-gray-900">
                        Your photo
                    </h3>
                    <p className="mb-4 text-sm text-gray-400">
                        This will be displayed on your profile.
                    </p>

                    <div className="flex items-center gap-4">
                        {/* Avatar preview */}
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-gray-100 bg-gray-100">
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Profile preview"
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <Profile className="h-16 w-16" />
                            )}
                        </div>

                        {/* Upload button */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        <IconButton
                            onClick={() => fileInputRef.current?.click()}
                        >
                            Upload photo
                        </IconButton>
                    </div>
                </div>
            </div>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleConfirm}>
                    Replace photo
                </Button>
            </div>
        </Modal>
    );
}
