import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import {
    Calendar,
    ChevronLeft,
    ChevronRight,
    Download,
    Search,
} from 'lucide-react';

// Add props interface to match what's being passed from EditBusiness
interface ActivityLogStepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext: () => void;
    onBack: () => void;
    isEditMode: boolean;
    canNext?: boolean;
}

const ActivityLogStep = ({
    data,
    update,
    onNext,
    onBack,
    isEditMode,
    canNext = true,
}: ActivityLogStepProps) => {
    // --- Mock Data ---
    const logs = [
        {
            id: 1,
            date: '10 Sept 2025',
            time: '04:45 PM',
            user: { name: 'Omar Ali', avatar: 'https://i.pravatar.cc/150?u=1' },
            type: 'Update',
            desc: 'Updated WhatsApp Number to +971 50 123 4567',
            ip: '192.168.1.1',
        },
        {
            id: 2,
            date: '09 Sept 2025',
            time: '02:00 PM',
            user: {
                name: 'Sarah Lee',
                avatar: 'https://i.pravatar.cc/150?u=2',
            },
            type: 'Create',
            desc: 'Uploaded new document "Trade_License_2026.pdf"',
            ip: '192.168.1.2',
        },
        {
            id: 3,
            date: '08 Sept 2025',
            time: '09:15 AM',
            user: {
                name: 'Noah Pierre',
                avatar: 'https://i.pravatar.cc/150?u=3',
            },
            type: 'Update',
            desc: 'Changed Business Address to "Shop 4, Al Rigga Road, Deira"',
            ip: '192.168.1.3',
        },
        {
            id: 4,
            date: '07 Sept 2025',
            time: '01:30 PM',
            user: { name: 'Omar Ali', initials: 'CW' },
            type: 'Delete',
            desc: 'Deleted document "Old_Trade_License.pdf"',
            ip: '192.168.1.4',
        },
        {
            id: 5,
            date: '06 Sept 2025',
            time: '11:00 AM',
            user: { name: 'System', isSystem: true },
            type: 'Update',
            desc: 'Subscription started',
            ip: 'System',
        },
        {
            id: 6,
            date: '05 Sept 2025',
            time: '10:45 AM',
            user: { name: 'Omar Ali', avatar: 'https://i.pravatar.cc/150?u=1' },
            type: 'Create',
            desc: 'Business Created (Registration Complete)',
            ip: '192.168.1.6',
        },
    ];

    // --- Badge Styles ---
    const getBadgeStyles = (type: string) => {
        switch (type) {
            case 'Create':
                return {
                    badge: 'bg-[#ECFDF3] text-[#027A48] border-[#ABEFC6]',
                    dot: 'bg-[#12B76A]',
                };
            case 'Update':
                return {
                    badge: 'bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]',
                    dot: 'bg-[#F79009]',
                };
            case 'Delete':
                return {
                    badge: 'bg-[#FEF3F2] text-[#B42318] border-[#FECDCA]',
                    dot: 'bg-[#F04438]',
                };
            default:
                return {
                    badge: 'bg-gray-100 text-gray-700 border-gray-200',
                    dot: 'bg-gray-500',
                };
        }
    };

    return (
        <div className="space-y-6 border-t border-borderColor pt-12 pb-6">
            {/* --- Top Controls (OUTSIDE the table border) --- */}
            <div className="flex items-center justify-between">
                {/* Search Bar */}
                <div className="relative w-[320px]">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by User or Action..."
                        className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-4 pl-10 text-sm text-gray-700 placeholder-gray-400 transition-all outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                    />
                </div>

                {/* Right Buttons */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        Date-range
                        <ChevronLeft className="h-4 w-4 -rotate-90 text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        <Download className="h-4 w-4 text-gray-500" />
                        Export Log
                    </button>
                </div>
            </div>

            {/* --- Table Container (Has the Border) --- */}
            <div className="overflow-hidden rounded-xl border border-[#E8E6EA] bg-white shadow-xs">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F9FAFB]">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                <div className="flex cursor-pointer items-center gap-1 hover:text-gray-700">
                                    Timestamp
                                    <SelectorIcon className="h-3 w-3" />
                                </div>
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                <div className="flex cursor-pointer items-center gap-1 hover:text-gray-700">
                                    User
                                    <SelectorIcon className="h-3 w-3" />
                                </div>
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                <div className="flex cursor-pointer items-center gap-1 hover:text-gray-700">
                                    Event Type
                                    <SelectorIcon className="h-3 w-3" />
                                </div>
                            </th>
                            <th className="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500">
                                Description
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
                                IP Address
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {logs.map((log) => {
                            const styles = getBadgeStyles(log.type);
                            return (
                                <tr
                                    key={log.id}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    {/* Timestamp */}
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {log.date}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {log.time}
                                        </div>
                                    </td>

                                    {/* User */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-9 w-9 flex-shrink-0">
                                                {log.user.isSystem ? (
                                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-100">
                                                        <span className="text-base">
                                                            ⚙️
                                                        </span>
                                                    </div>
                                                ) : log.user.avatar ? (
                                                    <img
                                                        className="h-9 w-9 rounded-full border border-gray-200 object-cover"
                                                        src={log.user.avatar}
                                                        alt=""
                                                    />
                                                ) : (
                                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-[#F2F4F7] text-xs font-medium text-gray-600">
                                                        {log.user.initials}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {log.user.name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Event Type */}
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles.badge}`}
                                        >
                                            <span
                                                className={`mr-1.5 h-1.5 w-1.5 rounded-full ${styles.dot}`}
                                            ></span>
                                            {log.type}
                                        </span>
                                    </td>

                                    {/* Description */}
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {log.desc}
                                    </td>

                                    {/* IP Address */}
                                    <td className="px-6 py-4 text-right text-sm text-gray-500">
                                        {log.ip}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* --- Pagination Footer --- */}
                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 transition-colors hover:bg-gray-50 disabled:opacity-50">
                        <ChevronLeft className="h-5 w-5 text-gray-600" />
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="h-8 w-8 rounded-lg bg-[#F9FAFB] text-sm font-medium text-gray-800">
                            1
                        </button>
                        <button className="h-8 w-8 rounded-lg bg-white text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50">
                            2
                        </button>
                        <button className="h-8 w-8 rounded-lg bg-white text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50">
                            3
                        </button>
                        <span className="px-2 text-sm text-gray-500">...</span>
                        <button className="h-8 w-8 rounded-lg bg-white text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50">
                            6
                        </button>
                    </div>
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 transition-colors hover:bg-gray-50">
                        <ChevronRight className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActivityLogStep;
