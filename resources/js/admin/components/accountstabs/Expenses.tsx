import Calendar from '@/shared/images/icons/calendar.svg?react';
import Button from '@/shared/sharedcomponents/ui/Button';
import {
    AlertTriangle,
    ChevronDown,
    Plus,
    Search,
    Tag,
    Wallet,
} from 'lucide-react';

const expensesData = [
    {
        name: 'Al-Shaya Real Estate',
        subtitle: 'Oct Office Rent',
        category: 'Rent & Utilities',
        date: '04 Feb 2026',
        method: 'Bank Transfer (IBAN)',
        amount: '1,250.000',
    },
    {
        name: 'Ooredoo Telecom',
        subtitle: 'Internet & Landline',
        category: 'Rent & Utilities',
        date: '03 Feb 2026',
        method: 'Cash / Petty Cash',
        amount: '45.000',
    },
    {
        name: 'X-Cite Electronics',
        subtitle: 'New Laptops (x3)',
        category: 'Office & Supplies',
        date: '02 Feb 2026',
        method: 'Card',
        amount: '850.000',
    },
    {
        name: 'Starbucks',
        subtitle: 'Client Meeting',
        category: 'Petty Cash',
        date: '01 Feb 2026',
        method: 'Payment Link',
        amount: '12.500',
    },
];

export default function Expenses() {
    return (
        <div className="mx-auto w-full max-w-[1400px] py-6">
            {/* KPI Cards */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Wallet className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Total Operating Expenses
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        2,157.500 KWD
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-[#7AB621]">
                        <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>
                        5%{' '}
                        <span className="font-normal text-gray-500">
                            vs last month
                        </span>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <AlertTriangle className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Daily Burn Rate
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        41.500 KWD{' '}
                        <span className="text-lg font-medium text-gray-500">
                            / day
                        </span>
                    </div>
                    <div className="text-sm text-gray-500">
                        Last Month: 38.000
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Tag className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Highest Spend Category
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        Rent
                    </div>
                    <div className="text-sm text-gray-500">
                        1,250.000 KWD (57% of Total)
                    </div>
                </div>
            </div>

            {/* Sub Toolbar */}
            <div className="mb-6 flex items-center justify-between gap-4">
                <div className="relative w-[320px]">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Vendor or Ref..."
                        className="w-full rounded-lg border border-gray-200 py-2.5 pr-4 pl-10 text-sm outline-none placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621]"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        Category: All{' '}
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        <Calendar className="h-4 w-4 text-gray-400" /> Period:
                        Feb 2026{' '}
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                    <Button className="!bg-[#7AB621] hover:!bg-[#6A9E1C]">
                        <Plus className="mr-2 h-4 w-4" /> Add Expense
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-5">
                    <h3 className="text-lg font-bold text-gray-900">
                        Recent Expenses
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-gray-100 bg-white text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">
                                    Expense Details
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Category
                                </th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">
                                    Method
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Amount
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {expensesData.map((row, i) => (
                                <tr
                                    key={i}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">
                                            {row.name}
                                        </div>
                                        <div className="text-gray-400">
                                            {row.subtitle}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-600">
                                            {row.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {row.date}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {row.method}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="font-medium text-gray-900">
                                            {row.amount}
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            KWD
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                                            View Slip
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
