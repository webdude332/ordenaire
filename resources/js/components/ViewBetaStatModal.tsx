// Icons
import Eye from '@/images/icons/eyeIcon.svg?react';
import patternBg from '@/images/icons/patternBg.svg';
import Modal from './Modal';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from './ui/Table';

// Placeholder Eye Icon
const EyeIconPlaceholder = ({ className }: { className?: string }) => (
    <Eye className="h-7 w-7" />
);

interface ViewStatsProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ViewBetaStatsModal({
    isOpen,
    onClose,
}: ViewStatsProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="4xl">
            <div className="relative overflow-hidden rounded-xl bg-white pb-6">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="relative z-0 px-8 pt-8 pb-4">
                    <div className="mb-6 flex flex-col items-start gap-4">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                            <div className="pointer-events-none absolute inset-0 top-22 left-22 flex items-center justify-center">
                                <img
                                    src={patternBg}
                                    alt=""
                                    className="max-w-none"
                                    style={{
                                        transform: 'scale(1.1)',
                                        opacity: 1,
                                    }}
                                />
                            </div>
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <div className="rounded-lg border-2 border-gray-200 bg-white p-2.5">
                                    <Eye className="h-6 w-6 text-gray-700" />
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-md font-medium text-gray-900">
                                View Beta Stats
                            </h3>
                        </div>
                    </div>

                    {/* Key Stats Card */}
                    <div className="">
                        <div className="mb-8 rounded-xl border border-borderColor bg-white p-4 shadow-sm">
                            <h4 className="mb-4 text-sm font-semibold text-gray-900">
                                Key Stats
                            </h4>
                            <div className="mb-6 flex flex-col gap-4 rounded-xl border border-borderColor bg-[#F8FFEB] p-5">
                                <div className="pt-3">
                                    <div className="grid grid-cols-[2fr_1fr_1fr]">
                                        <div>
                                            <h3 className="mb-3 text-xs font-medium text-gray-500">
                                                Feature
                                            </h3>
                                            <h1 className="text-sm font-medium text-gray-700">
                                                Smart Menu Recommender (v2.4.1)
                                            </h1>
                                        </div>
                                        <div>
                                            <h3 className="mb-3 text-xs font-medium text-gray-500">
                                                Status
                                            </h3>
                                            <button className="flex items-center justify-center gap-2 rounded-md border border-[#FECDCA] bg-[#FEF3F2] px-1.5 py-0.5 text-xs text-[#B42318]">
                                                <span className="h-1 w-1 rounded-full bg-[#F04438]"></span>
                                                Critical
                                            </button>
                                        </div>
                                        <div>
                                            <h3 className="mb-3 text-xs font-medium text-gray-500">
                                                Time Frame
                                            </h3>
                                            <h1 className="text-sm font-medium text-gray-700">
                                                Last 7 Days
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="grid grid-cols-[2fr_1fr_1fr] border-t border-[#8CDD05] pt-6">
                                        <div>
                                            <h3 className="mb-3 text-xs font-medium text-gray-500">
                                                Total usage
                                            </h3>
                                            <h1 className="text-sm font-medium text-gray-700">
                                                8,450 Sessions
                                            </h1>
                                        </div>
                                        <div>
                                            <h3 className="mb-3 text-xs font-medium text-gray-500">
                                                Error Rate (last 7 days)
                                            </h3>
                                            <h3 className="mb-3 text-sm font-medium text-[#B45309]">
                                                3.2% errors
                                            </h3>
                                        </div>
                                        <div>
                                            <h3 className="mb-3 text-xs font-medium text-gray-500">
                                                Crash Count
                                            </h3>
                                            <h1 className="text-sm font-medium text-gray-700">
                                                275 Crashes
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Recent Errors Table */}
                        <div>
                            <TableContainer>
                                {/* Header Section */}
                                <div className="border-b border-gray-100 px-5 py-4">
                                    <h4 className="text-sm font-semibold text-gray-900">
                                        Recent Errors
                                    </h4>
                                </div>

                                {/* Table Section */}
                                <Table>
                                    <TableHeader className="border-t border-borderColor bg-[#F9F7FA]">
                                        <TableHead className="bg-[#F9F7FA] text-xs font-semibold">
                                            Time
                                        </TableHead>
                                        <TableHead className="bg-[#F9F7FA] text-xs font-semibold">
                                            Error Type
                                        </TableHead>
                                        <TableHead className="bg-[#F9F7FA] text-xs font-semibold">
                                            Business
                                        </TableHead>
                                        <TableHead className="bg-[#F9F7FA] text-xs font-semibold">
                                            Device
                                        </TableHead>
                                        <TableHead className="bg-[#F9F7FA] text-xs font-semibold">
                                            Error Log
                                        </TableHead>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium text-gray-900">
                                                10:45 AM
                                            </TableCell>
                                            <TableCell className="font-medium text-gray-900">
                                                500 Server Error
                                            </TableCell>
                                            <TableCell>StarBites</TableCell>
                                            <TableCell>iPad POS</TableCell>
                                            <TableCell>
                                                Timeout: Menu Sync Failed
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell className="font-medium text-gray-900">
                                                11:00 AM
                                            </TableCell>
                                            <TableCell className="font-medium text-gray-900">
                                                JS Exception
                                            </TableCell>
                                            <TableCell>BurgerHub</TableCell>
                                            <TableCell>Web-App</TableCell>
                                            <TableCell>
                                                Null pointer in Checkout.js
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell className="font-medium text-gray-900">
                                                11:15 AM
                                            </TableCell>
                                            <TableCell className="font-medium text-gray-900">
                                                Latency Warning
                                            </TableCell>
                                            <TableCell>StarBites</TableCell>
                                            <TableCell>Kiosk</TableCell>
                                            <TableCell>
                                                Page load took 8.2s
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
