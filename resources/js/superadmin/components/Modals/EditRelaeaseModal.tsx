import Modal from '@/superadmin/components/Modal';
import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import { Input, Label } from '@/superadmin/components/ui/FormElements';
import { Calendar, Pencil } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ReleaseItem {
    id: number;
    platform: string;
    version: string;
    releaseDate: string;
    target: string;
    status: 'Live' | 'In Review' | 'Scheduled' | 'Rolled Back';
    link: string;
    changelog: string;
    loggedBy: string;
}

interface EditReleaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: ReleaseFormData) => void;
    release: ReleaseItem | null;
}

interface ReleaseFormData {
    platform: string;
    versionNumber: string;
    releaseDate: string;
    status: string;
    storeLink: string;
    changelog: string;
}

// ─── Options ──────────────────────────────────────────────────────────────────

const STATUS_OPTIONS = [
    { label: '🟢 Live / Completed', value: 'live' },
    { label: '🟠 In Review (App Store)', value: 'in_review' },
    { label: '⚪ Scheduled', value: 'scheduled' },
    { label: '🔴 Rolled Back', value: 'rolled_back' },
];

const statusToValue = (status: ReleaseItem['status']) => {
    switch (status) {
        case 'Live':
            return 'live';
        case 'In Review':
            return 'in_review';
        case 'Scheduled':
            return 'scheduled';
        case 'Rolled Back':
            return 'rolled_back';
        default:
            return 'live';
    }
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function EditReleaseModal({
    isOpen,
    onClose,
    onConfirm,
    release,
}: EditReleaseModalProps) {
    const [platform, setPlatform] = useState('');
    const [versionNumber, setVersionNumber] = useState('');
    const [releaseDate, setReleaseDate] = useState('Sep 15, 2025 – 10:00 PM');
    const [status, setStatus] = useState('live');
    const [storeLink, setStoreLink] = useState('');
    const [changelog, setChangelog] = useState('');

    useEffect(() => {
        if (release) {
            setPlatform(release.platform);
            setVersionNumber(release.version);
            setReleaseDate(release.releaseDate);
            setStatus(statusToValue(release.status));
            setStoreLink(release.link || '');
            setChangelog(release.changelog || '');
        }
    }, [release]);

    const handleSubmit = () => {
        onConfirm({
            platform,
            versionNumber,
            releaseDate,
            status,
            storeLink,
            changelog,
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ──────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Pencil className="h-4 w-4 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Edit Release Details
                    </h2>
                </div>

                <div className="space-y-4">
                    {/* ── Release Details ──────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Release Details
                        </h3>

                        {/* Platform + Version */}
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Platform
                                </Label>
                                <Input
                                    value={platform}
                                    onChange={(e) =>
                                        setPlatform(e.target.value)
                                    }
                                    placeholder="POS App (iPad)"
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Version Number
                                </Label>
                                <Input
                                    value={versionNumber}
                                    onChange={(e) =>
                                        setVersionNumber(e.target.value)
                                    }
                                    placeholder="e.g., v5.3.4"
                                />
                            </div>
                        </div>

                        {/* Release Date + Status */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Release Date
                                </Label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                    </span>
                                    <input
                                        type="text"
                                        value={releaseDate}
                                        onChange={(e) =>
                                            setReleaseDate(e.target.value)
                                        }
                                        className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-9 text-sm text-gray-900 placeholder-gray-400 shadow-xs outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Status
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={STATUS_OPTIONS}
                                    value={status}
                                    onChange={setStatus}
                                    placeholder="Select status"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Distribution ─────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Distribution
                        </h3>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Store / Access Link
                            </Label>
                            <Input
                                placeholder="e.g., https://apps.apple.com/app-id..."
                                value={storeLink}
                                onChange={(e) => setStoreLink(e.target.value)}
                            />
                            <p className="mt-1.5 text-xs text-gray-400">
                                Note: If it is a Kiosk or Web update, this might
                                be left blank or point to the commit hash.
                            </p>
                        </div>
                    </div>

                    {/* ── Changelog ────────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Changelog
                        </h3>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                What's New?
                            </Label>
                            <textarea
                                rows={4}
                                value={changelog}
                                onChange={(e) => setChangelog(e.target.value)}
                                placeholder="Brief summary of features, bug fixes, or improvements in this version..."
                                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </div>
        </Modal>
    );
}
