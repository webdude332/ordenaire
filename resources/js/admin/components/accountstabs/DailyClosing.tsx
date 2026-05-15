import Button from '@/shared/sharedcomponents/ui/Button';
import { Search } from 'lucide-react';

const logData = [
    {
        date: '09 Feb 2026',
        staff: 'Ahmed (Manager)',
        cash: '50.000',
        cards: '200.000',
        actual: '250.000 (Actual)',
        exp: 'Exp: 255.000',
        variance: '- 5.000',
        varStyle: 'red',
        note: 'Forgot to enter the water delivery cash payment.',
    },
    {
        date: '08 Feb 2026',
        staff: 'Sarah (Cashier)',
        cash: '60.000',
        cards: '120.000',
        actual: '180.000 (Actual)',
        exp: 'Exp: 180.000',
        variance: 'Match',
        varStyle: 'green',
        note: '--',
    },
    {
        date: '07 Feb 2026',
        staff: 'Noah (Admin)',
        cash: '47.000',
        cards: '155.000',
        actual: '202.000 (Actual)',
        exp: 'Exp: 200.000',
        variance: '+ 5.000',
        varStyle: 'blue',
        note: '"Forgot to enter the water delivery cash payment."',
    },
];

export default function DailyClosing() {
    return (
        <div className="mx-auto w-full max-w-[1400px] py-6">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
                    <button className="rounded-md border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-900 shadow-sm">
                        All
                    </button>
                    <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700">
                        Shortages
                    </button>
                    <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700">
                        Perfect Match
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative w-[280px]">
                        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search Manager or Shift..."
                            className="w-full rounded-lg border border-gray-200 py-2 pr-4 pl-10 text-sm outline-none placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621]"
                        />
                    </div>
                    <Button className="!bg-[#7AB621] hover:!bg-[#6A9E1C]">
                        <span className="mr-2">%</span> Cash Reconciliation
                    </Button>
                </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-5">
                    <h3 className="text-lg font-bold text-gray-900">
                        Daily Reconciliation Log
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-gray-100 bg-white text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">
                                    Date & Staff{' '}
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
                                <th className="px-6 py-4 text-center font-medium">
                                    Cash (Input)
                                </th>
                                <th className="px-6 py-4 text-center font-medium">
                                    Cards / E-Wallet
                                </th>
                                <th className="px-6 py-4 text-center font-medium">
                                    Total / Expected
                                </th>
                                <th className="px-6 py-4 text-center font-medium">
                                    Variance
                                </th>
                                <th className="w-1/4 px-6 py-4 font-medium">
                                    Audit Note
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {logData.map((row, i) => (
                                <tr
                                    key={i}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">
                                            {row.date}
                                        </div>
                                        <div className="text-gray-500">
                                            {row.staff}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center font-medium text-gray-900">
                                        {row.cash}
                                    </td>
                                    <td className="px-6 py-4 text-center font-medium text-gray-900">
                                        {row.cards}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="font-medium text-gray-900">
                                            {row.actual}
                                        </div>
                                        <div className="text-gray-400">
                                            {row.exp}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span
                                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
                                                row.varStyle === 'red'
                                                    ? 'border-red-200 bg-red-50 text-red-600'
                                                    : row.varStyle === 'green'
                                                      ? 'border-green-200 bg-green-50 text-green-600'
                                                      : 'border-blue-200 bg-blue-50 text-blue-600'
                                            }`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${
                                                    row.varStyle === 'red'
                                                        ? 'bg-red-600'
                                                        : row.varStyle ===
                                                            'green'
                                                          ? 'bg-green-600'
                                                          : 'bg-blue-600'
                                                }`}
                                            ></span>
                                            {row.variance}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {row.note}
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
