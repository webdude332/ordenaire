import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import DashboardIcon from '@/shared/images/icons/dashBaordSvg.svg';
import Button from '@/shared/sharedcomponents/ui/Button';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import {
    ArrowLeft,
    ArrowRight,
    Eye,
    Headset,
    Search,
    Wrench,
} from 'lucide-react';

const ticketsData = [
    {
        id: 'TKT-10005',
        category: 'POS & Hardware',
        subject: 'POS Offline during',
        status: 'Pending',
        statusStyle: 'orange',
        date: '12 Feb 2026',
        actions: ['view', 'cancel'],
    },
    {
        id: 'TKT-10004',
        category: 'Menu & Pricing',
        subject: 'Menu Sync Failed',
        status: 'In Progress',
        statusStyle: 'blue',
        date: '22 Apr 2025',
        actions: ['view'],
    },
    {
        id: 'TKT-10003',
        category: 'Financial & Billing',
        subject: 'Report Export Bug',
        status: 'Resolved',
        statusStyle: 'green',
        date: '15 Mar 2025',
        actions: [],
    },
    {
        id: 'TKT-10002',
        category: 'Financial & Billing',
        subject: 'Report Export Bug',
        status: 'Cancelled',
        statusStyle: 'gray',
        date: '15 Mar 2025',
        actions: [],
    },
];

export default function Help() {
    const breadcrumbs = [{ label: 'Help', isActive: true }];

    return (
        <div className="flex min-h-screen bg-[#F9FAFB]">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <div className="sticky top-0 z-50">
                    <TopBar
                        title="Help"
                        icon={DashboardIcon}
                        breadcrumbs={breadcrumbs}
                    />
                </div>

                <div className="mx-auto w-full max-w-[1400px] px-8 py-8">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="mb-2 text-2xl font-bold text-gray-900">
                            How Can We Help?
                        </h1>
                        <p className="text-gray-500">
                            Track your active support tickets or connect with
                            our success team.
                        </p>
                    </div>

                    {/* Toolbar */}
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="relative w-[320px]">
                            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search Ticket ID..."
                                className="w-full rounded-lg border border-gray-200 py-2.5 pr-4 pl-10 text-sm transition-all outline-none placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621]"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <IconButton className="!border-gray-200 !bg-white !text-gray-700 shadow-sm">
                                <Wrench className="mr-2 h-4 w-4" /> Raise
                                Support Ticket
                            </IconButton>
                            <Button className="!bg-[#7AB621] hover:!bg-[#6A9E1C]">
                                <Headset className="mr-2 h-4 w-4" /> Live
                                Support
                            </Button>
                        </div>
                    </div>

                    {/* Tickets Table Card */}
                    <div className="flex min-h-[500px] flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="border-b border-gray-100 px-6 py-5">
                            <h3 className="text-lg font-bold text-gray-900">
                                Support Request History
                            </h3>
                        </div>
                        <div className="flex-1 overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="border-b border-gray-100 bg-gray-50/50 text-gray-500">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">
                                            Ticket ID
                                        </th>
                                        <th className="px-6 py-4 font-medium">
                                            Category
                                        </th>
                                        <th className="px-6 py-4 font-medium">
                                            Subject
                                        </th>
                                        <th className="px-6 py-4 font-medium">
                                            Status
                                            <span className="ml-1 inline-flex flex-col align-middle">
                                                <svg
                                                    className="h-1.5 w-2 text-gray-400"
                                                    viewBox="0 0 10 6"
                                                    fill="currentColor"
                                                >
                                                    <path d="M5 0L10 6H0L5 0Z" />
                                                </svg>
                                                <svg
                                                    className="mt-px h-1.5 w-2 text-gray-400"
                                                    viewBox="0 0 10 6"
                                                    fill="currentColor"
                                                >
                                                    <path d="M5 6L0 0H10L5 6Z" />
                                                </svg>
                                            </span>
                                        </th>
                                        <th className="px-6 py-4 font-medium">
                                            Date Raised
                                        </th>
                                        <th className="px-6 py-4 text-right font-medium">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {ticketsData.map((row, i) => (
                                        <tr
                                            key={i}
                                            className="transition-colors hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 font-medium text-gray-900">
                                                {row.id}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900">
                                                {row.category}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900">
                                                {row.subject}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
                                                        row.statusStyle ===
                                                        'orange'
                                                            ? 'border-orange-200 bg-orange-50 text-orange-600'
                                                            : row.statusStyle ===
                                                                'blue'
                                                              ? 'border-blue-200 bg-blue-50 text-blue-600'
                                                              : row.statusStyle ===
                                                                  'green'
                                                                ? 'border-green-200 bg-green-50 text-green-600'
                                                                : 'border-gray-200 bg-gray-50 text-gray-600'
                                                    }`}
                                                >
                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full ${
                                                            row.statusStyle ===
                                                            'orange'
                                                                ? 'bg-orange-500'
                                                                : row.statusStyle ===
                                                                    'blue'
                                                                  ? 'bg-blue-600'
                                                                  : row.statusStyle ===
                                                                      'green'
                                                                    ? 'bg-green-600'
                                                                    : 'bg-gray-400'
                                                        }`}
                                                    ></span>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {row.date}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    {row.actions.includes(
                                                        'view',
                                                    ) && (
                                                        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600">
                                                            <Eye className="h-4 w-4" />
                                                        </button>
                                                    )}
                                                    {row.actions.includes(
                                                        'cancel',
                                                    ) && (
                                                        <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                                                            Cancel
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Bottom Footer */}
                        <div className="mt-auto flex items-center justify-between border-t border-gray-100 p-4">
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-colors hover:bg-gray-50">
                                <ArrowLeft className="h-4 w-4" />
                            </button>
                            <div className="flex items-center gap-1">
                                <button className="h-8 w-8 rounded-lg bg-gray-50 text-sm font-medium text-gray-900">
                                    1
                                </button>
                                <button className="h-8 w-8 rounded-lg text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50">
                                    2
                                </button>
                                <button className="h-8 w-8 rounded-lg text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50">
                                    3
                                </button>
                                <button className="h-8 w-8 rounded-lg text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50">
                                    4
                                </button>
                                <button className="h-8 w-8 rounded-lg text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50">
                                    5
                                </button>
                                <button className="h-8 w-8 rounded-lg text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50">
                                    6
                                </button>
                            </div>
                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-colors hover:bg-gray-50">
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
