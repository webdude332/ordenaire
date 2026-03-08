import Modal from '@/components/Modal';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ManualBackupModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: BackupConfig) => void;
}

interface BackupConfig {
    backupType: 'full' | 'incremental';
    notifyOnCompletion: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ManualBackupModal({
    isOpen,
    onClose,
    onConfirm,
}: ManualBackupModalProps) {
    const [backupType, setBackupType] = useState<'full' | 'incremental'>(
        'incremental',
    );
    const [notifyOnCompletion, setNotifyOnCompletion] = useState(false);

    const handleSubmit = () => {
        onConfirm({ backupType, notifyOnCompletion });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ──────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Plus className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Trigger Manual Backup
                    </h2>
                </div>

                {/* ── Backup Configuration ─────────────────────────────── */}
                <div className="rounded-xl border border-gray-200 p-5">
                    <h3 className="mb-4 text-sm font-semibold text-gray-900">
                        Backup Configuration
                    </h3>

                    {/* Radio options */}
                    <div className="mb-4 space-y-3">
                        <label className="flex cursor-pointer items-center gap-3">
                            <input
                                type="radio"
                                name="backupType"
                                value="full"
                                checked={backupType === 'full'}
                                onChange={() => setBackupType('full')}
                                className="h-4 w-4 border-gray-300 accent-[#84cc16]"
                            />
                            <span className="text-sm text-gray-700">
                                Full System Backup
                            </span>
                        </label>
                        <label className="flex cursor-pointer items-center gap-3">
                            <input
                                type="radio"
                                name="backupType"
                                value="incremental"
                                checked={backupType === 'incremental'}
                                onChange={() => setBackupType('incremental')}
                                className="h-4 w-4 border-gray-300 accent-[#84cc16]"
                            />
                            <span className="text-sm text-gray-700">
                                Incremental Backup
                            </span>
                        </label>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Notify checkbox */}
                    <div className="mt-4">
                        <label className="flex cursor-pointer items-center gap-3">
                            <input
                                type="checkbox"
                                checked={notifyOnCompletion}
                                onChange={(e) =>
                                    setNotifyOnCompletion(e.target.checked)
                                }
                                className="h-4 w-4 rounded border-gray-300 accent-[#84cc16]"
                            />
                            <span className="text-sm text-gray-700">
                                Notify me via email when completion is
                                successful.
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Start Backup Now
                </Button>
            </div>
        </Modal>
    );
}
