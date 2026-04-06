import Badge from '@/superadmin/components/Badge';
import Modal from '@/superadmin/components/Modal';
import ClipboardList from '@shared/images/icons/clipboard1.svg?react';
import Globe from '@shared/images/icons/globe.svg?react';
import patternBg from '@shared/images/icons/patternBg.svg';
import { Eye } from 'lucide-react';

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

interface ReleaseDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    release: ReleaseItem | null;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getStatusVariant = (status: ReleaseItem['status']) => {
    switch (status) {
        case 'Live':
            return 'success';
        case 'In Review':
            return 'warning';
        case 'Scheduled':
            return 'gray';
        case 'Rolled Back':
            return 'error';
        default:
            return 'gray';
    }
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ReleaseDetailsModal({
    isOpen,
    onClose,
    release,
}: ReleaseDetailsModalProps) {
    if (!release) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ──────────────────────────────────────────── */}
                {/* <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Release Details: {release.version}
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
                                <Eye className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Release Details: {release.version}
                    </h2>
                </div>
                <div className="rounded-xl border border-borderColor p-4">
                    {/* ── Info Cards ──────────────────────────────────────── */}
                    <div className="mb-4 grid grid-cols-3 gap-4">
                        <div className="rounded-xl border border-gray-200 p-4">
                            <p className="mb-1 text-sm text-gray-500">
                                Platform
                            </p>
                            <p className="text-sm font-semibold text-gray-900">
                                {release.platform}
                            </p>
                        </div>
                        <div className="rounded-xl border border-gray-200 p-4">
                            <p className="mb-1 text-sm text-gray-500">
                                Release Date
                            </p>
                            <p className="text-sm font-semibold text-gray-900">
                                {release.releaseDate}
                            </p>
                        </div>
                        <div className="rounded-xl border border-gray-200 p-4">
                            <p className="mb-1 text-sm text-gray-500">
                                Current Status
                            </p>
                            <Badge
                                variant={getStatusVariant(release.status)}
                                withDot={true}
                                rounded="full"
                            >
                                {release.status}
                            </Badge>
                        </div>
                    </div>

                    {/* ── Release Notes ───────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 bg-gray-100 p-5">
                        {/* Changelog */}
                        <div className="mb-5">
                            <div className="mb-2 flex items-center gap-2">
                                <ClipboardList className="h-5 w-5" />
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Release Notes / Change log
                                </h3>
                            </div>
                            <p className="pl-7 text-sm text-gray-600">
                                {release.changelog ||
                                    'No changelog provided for this release.'}
                            </p>
                        </div>

                        <hr className="h-3 border-gray-900" />

                        {/* Technical Details */}
                        <div className="mt-5">
                            <div className="mb-3 flex items-center gap-2">
                                <Globe className="h-5 w-5 text-gray-700" />
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Technical Details
                                </h3>
                            </div>
                            <div className="space-y-2 pl-7">
                                <div className="flex items-center gap-6">
                                    <span className="w-36 text-sm text-gray-500">
                                        Issued
                                    </span>
                                    <span className="text-sm text-gray-900">
                                        {release.platform}
                                    </span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="w-36 text-sm text-gray-500">
                                        Distribution Link
                                    </span>
                                    <a
                                        href={release.link}
                                        className="text-sm text-blue-600 underline"
                                    >
                                        {release.link || '—'}
                                    </a>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="w-36 text-sm text-gray-500">
                                        Logged By
                                    </span>
                                    <span className="text-sm text-gray-900">
                                        {release.loggedBy}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
