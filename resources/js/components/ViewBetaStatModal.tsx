// Icons
import BetaIcon from '@/images/icons/betaIcon.svg?react';
import patternBg from '@/images/icons/patternBg.svg';
import Modal from './Modal';

// Placeholder Eye Icon
const EyeIconPlaceholder = ({ className }: { className?: string }) => (
    // <svg
    //     viewBox="0 0 24 24"
    //     fill="none"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     className={className}
    // >
    //     <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    //     />
    //     <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    //     />
    // </svg>
    <BetaIcon className="h-8 w-8" />
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
                                    <EyeIconPlaceholder className="h-6 w-6 text-gray-600" />
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg font-semibold text-gray-900">
                                View Beta Stats
                            </h3>
                        </div>
                    </div>

                    {/* Key Stats Card */}
                    <div className="mb-6 rounded-xl border border-gray-200 bg-[#FAFCF5] p-5">
                        <h4 className="mb-4 text-sm font-bold text-gray-900">
                            Key Stats
                        </h4>

                        <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                            <div>
                                <div className="text-xs text-gray-500">
                                    Feature
                                </div>
                                <div className="mt-1 font-semibold text-gray-900">
                                    Smart Menu Recommender (v2.4.1)
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">
                                    Status
                                </div>
                                <div className="mt-1">
                                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
                                        • Critical
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">
                                    Time Frame
                                </div>
                                <div className="mt-1 font-medium text-gray-900">
                                    Last 7 Days
                                </div>
                            </div>

                            {/* Divider Line */}
                            <div className="col-span-3 border-t border-gray-200/60"></div>

                            <div>
                                <div className="text-xs text-gray-500">
                                    Total Usage
                                </div>
                                <div className="mt-1 text-lg font-semibold text-gray-900">
                                    8,450 Sessions
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">
                                    Error Rate (last 7 days)
                                </div>
                                <div className="mt-1 text-lg font-semibold text-orange-600">
                                    3.2% errors
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">
                                    Crash Count
                                </div>
                                <div className="mt-1 text-lg font-semibold text-gray-900">
                                    275 Crashes
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Errors Table */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="border-b border-gray-100 px-5 py-4">
                            <h4 className="text-sm font-bold text-gray-900">
                                Recent Errors
                            </h4>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr className="bg-gray-50/50">
                                    <th className="px-5 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Time
                                    </th>
                                    <th className="px-5 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Error Type
                                    </th>
                                    <th className="px-5 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Business
                                    </th>
                                    <th className="px-5 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Device
                                    </th>
                                    <th className="px-5 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Error Log
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                <tr>
                                    <td className="px-5 py-4 text-xs font-medium whitespace-nowrap text-gray-900">
                                        10:45 AM
                                    </td>
                                    <td className="px-5 py-4 text-xs whitespace-nowrap text-gray-900">
                                        500 Server Error
                                    </td>
                                    <td className="px-5 py-4 text-xs whitespace-nowrap text-gray-500">
                                        StarBites
                                    </td>
                                    <td className="px-5 py-4 text-xs whitespace-nowrap text-gray-500">
                                        iPad POS
                                    </td>
                                    <td className="px-5 py-4 text-xs text-gray-500">
                                        Timeout: Menu Sync Failed
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-4 text-xs font-medium whitespace-nowrap text-gray-900">
                                        11:00 AM
                                    </td>
                                    <td className="px-5 py-4 text-xs whitespace-nowrap text-gray-900">
                                        JS Exception
                                    </td>
                                    <td className="px-5 py-4 text-xs whitespace-nowrap text-gray-500">
                                        BurgerHub
                                    </td>
                                    <td className="px-5 py-4 text-xs whitespace-nowrap text-gray-500">
                                        Web-App
                                    </td>
                                    <td className="px-5 py-4 text-xs text-gray-500">
                                        Null pointer in Checkout.js
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-4 text-xs font-medium whitespace-nowrap text-gray-900">
                                        11:15 AM
                                    </td>
                                    <td className="px-5 py-4 text-xs whitespace-nowrap text-gray-900">
                                        Latency Warning
                                    </td>
                                    <td className="px-5 py-4 text-xs whitespace-nowrap text-gray-500">
                                        StarBites
                                    </td>
                                    <td className="px-5 py-4 text-xs whitespace-nowrap text-gray-500">
                                        Kiosk
                                    </td>
                                    <td className="px-5 py-4 text-xs text-gray-500">
                                        Page load took 8.2s
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
