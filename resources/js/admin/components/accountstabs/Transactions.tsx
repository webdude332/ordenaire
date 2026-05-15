import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    ChevronDown,
    Download,
} from 'lucide-react';

const txData = [
    {
        date: '03 Sep 2025',
        module: 'Closing',
        name: 'Ahmed (Manager)',
        subName: 'Daily Reconciliation',
        method: '--',
        amount: '+ 250.000',
        amountStyle: 'green',
    },
    {
        date: '02 Sep 2025',
        module: 'Expenses',
        name: 'Al-Shaya Real Estate',
        subName: 'Rent & Utilities',
        method: 'Bank Transfer (IBAN)',
        amount: '- 1,250.000',
        amountStyle: 'red',
    },
    {
        date: '29 Aug 2025',
        module: 'Payables',
        name: 'Kuwait Flour Mills',
        subName: 'PO #402',
        method: 'Card',
        amount: '- 120.000',
        amountStyle: 'red',
    },
    {
        date: '27 Aug 2025',
        module: 'Payroll',
        name: 'Orlando Diggs (Waitress)',
        subName: 'STF-0087 (Salary)',
        method: 'Bank Transfer (IBAN)',
        amount: '- 300.000',
        amountStyle: 'red',
    },
    {
        date: '27 Aug 2025',
        module: 'Taxes',
        name: 'Tax Authority',
        subName: 'Jan 2026 Filing',
        method: 'Tax Credit',
        amount: '- 50.000',
        amountStyle: 'red',
    },
];

export default function Transactions() {
    return (
        <div className="mx-auto w-full max-w-[1400px] py-6">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
                    <button className="rounded-md border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-900 shadow-sm">
                        All
                    </button>
                    <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700">
                        Money In
                    </button>
                    <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700">
                        Money Out
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        Categories: All{' '}
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                    <IconButton className="!border-gray-200 !bg-white !text-gray-700 shadow-sm">
                        <Calendar className="mr-2 h-4 w-4" /> Date: This month
                    </IconButton>
                    <IconButton className="!border-gray-200 !bg-white !text-gray-700 shadow-sm">
                        <Download className="mr-2 h-4 w-4" /> Export
                    </IconButton>
                </div>
            </div>

            <div className="flex h-[calc(100vh-280px)] min-h-[500px] flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-5">
                    <h3 className="text-lg font-bold text-gray-900">
                        All transactions
                    </h3>
                </div>
                <div className="flex-1 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-gray-100 bg-gray-50 text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">
                                    Date{' '}
                                    <span className="ml-1 inline-flex flex-col">
                                        <svg
                                            className="h-1.5 w-2"
                                            viewBox="0 0 10 6"
                                            fill="currentColor"
                                        >
                                            <path d="M5 0L10 6H0L5 0Z" />
                                        </svg>
                                        <svg
                                            className="mt-px h-1.5 w-2"
                                            viewBox="0 0 10 6"
                                            fill="currentColor"
                                        >
                                            <path d="M5 6L0 0H10L5 6Z" />
                                        </svg>
                                    </span>
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Origin Module
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Transaction Ref
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Account / Method
                                </th>
                                <th className="px-6 py-4 text-center font-medium">
                                    Amount (Impact)
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {txData.map((row, i) => (
                                <tr
                                    key={i}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        {row.date}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {row.module}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">
                                            {row.name}
                                        </div>
                                        <div className="text-gray-400">
                                            {row.subName}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {row.method}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span
                                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
                                                row.amountStyle === 'green'
                                                    ? 'border-green-200 bg-green-50 text-green-600'
                                                    : 'border-red-200 bg-red-50 text-red-600'
                                            }`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${row.amountStyle === 'green' ? 'bg-green-600' : 'bg-red-600'}`}
                                            ></span>
                                            {row.amount}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-gray-100 p-4">
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
                        <ArrowLeft className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="h-8 w-8 rounded-lg bg-gray-100 text-sm font-medium text-gray-900">
                            1
                        </button>
                        <button className="h-8 w-8 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50">
                            2
                        </button>
                        <button className="h-8 w-8 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50">
                            3
                        </button>
                        <button className="h-8 w-8 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50">
                            4
                        </button>
                        <button className="h-8 w-8 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50">
                            5
                        </button>
                        <button className="h-8 w-8 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50">
                            6
                        </button>
                    </div>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
