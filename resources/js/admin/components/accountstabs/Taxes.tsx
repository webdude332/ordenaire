import {
    Calendar,
    ChevronDown,
    Receipt,
    Search,
    Tag,
    Wallet,
} from 'lucide-react';

const taxableSales = [
    {
        name: 'Standard VAT (5%)',
        type: 'Included in Price',
        typeStyle: 'blue',
        appliedTo: 'All Orders',
        moneyIn: '20,000.000',
        collected: '1,000.000',
    },
    {
        name: 'Excise Tax (50%)',
        type: 'Added to Price',
        typeStyle: 'gray',
        appliedTo: 'All Orders',
        moneyIn: '800.000',
        collected: '400.000',
    },
    {
        name: 'Municipality Tax (10%)',
        type: 'Added to Price',
        typeStyle: 'gray',
        appliedTo: 'Dine-In Only',
        moneyIn: '5,000.000',
        collected: '500.000',
    },
];

const monthlyHistory = [
    {
        month: 'Jan 2026',
        collected: '1,500.000',
        liability: '1,200.000',
        paid: '0.000',
        status: 'Pending',
        statusStyle: 'red',
        action: 'File Tax',
    },
    {
        month: 'Dec 2025',
        collected: '1,300.000',
        liability: '1,000.000',
        paid: '800.000',
        status: 'Partial',
        subStatus: 'Due: 200.000',
        statusStyle: 'orange',
        action: 'Pay Balance',
    },
    {
        month: 'Nov 2025',
        collected: '1,100.000',
        liability: '900.000',
        paid: '950.000',
        status: 'Filed',
        subStatus: 'Credit: +50.000',
        statusStyle: 'green',
        action: 'View Filing',
    },
    {
        month: 'Oct 2025',
        collected: '1,000.000',
        liability: '800.000',
        paid: '800.000',
        status: 'Filed',
        statusStyle: 'green',
        action: 'View Filing',
    },
];

export default function Taxes() {
    return (
        <div className="mx-auto w-full max-w-[1400px] py-6">
            <div className="mb-6 flex justify-end gap-3">
                <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                    <Calendar className="h-4 w-4 text-gray-400" /> Period: Feb
                    2026 <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Wallet className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Tax Collected
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        1,500.000 KWD
                    </div>
                    <div className="text-sm text-gray-500">
                        Output tax on orders
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Receipt className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Tax Paid
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        200.000 KWD
                    </div>
                    <div className="text-sm text-gray-500">
                        Input tax on bills
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Tag className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Net Tax Due
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        1,300.000 KWD
                    </div>
                    <div className="text-sm text-gray-500">Payable to Govt</div>
                </div>
            </div>

            <div className="mb-6 flex items-center justify-between gap-4">
                <div className="relative w-[320px]">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Tax Type or Ref..."
                        className="w-full rounded-lg border border-gray-200 py-2.5 pr-4 pl-10 text-sm outline-none placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621]"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        Calculation Type: All{' '}
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        Service Type: All{' '}
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Table 1 */}
            <div className="mb-8 rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-5">
                    <h3 className="text-lg font-bold text-gray-900">
                        Taxable Sales
                    </h3>
                    <span className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-600">
                        Feb 2026
                    </span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-gray-100 bg-white text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">
                                    Fee / Tax Name
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Calculation Type
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Applied To
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Taxable Sales (Money In)
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Tax Collected (To Pay)
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {taxableSales.map((row, i) => (
                                <tr
                                    key={i}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        {row.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${row.typeStyle === 'blue' ? 'border-blue-200 bg-blue-50 text-blue-600' : 'border-gray-200 bg-gray-50 text-gray-600'}`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${row.typeStyle === 'blue' ? 'bg-blue-600' : 'bg-gray-400'}`}
                                            ></span>
                                            {row.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {row.appliedTo}
                                    </td>
                                    <td className="px-6 py-4 text-right text-gray-600">
                                        {row.moneyIn}
                                    </td>
                                    <td className="px-6 py-4 text-right font-medium text-gray-900">
                                        {row.collected}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                                            View Items
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Table 2 */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-5">
                    <h3 className="text-lg font-bold text-gray-900">
                        Monthly History
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-gray-100 bg-white text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">Month</th>
                                <th className="px-6 py-4 text-center font-medium">
                                    Total Tax Collected
                                </th>
                                <th className="px-6 py-4 text-center font-medium">
                                    Net Liability{' '}
                                    <span className="ml-1 inline-flex h-3 w-3 items-center justify-center rounded-full border border-gray-400 text-[8px] text-gray-400">
                                        ?
                                    </span>
                                </th>
                                <th className="px-6 py-4 text-center font-medium">
                                    Paid Amount
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Filing Status
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {monthlyHistory.map((row, i) => (
                                <tr
                                    key={i}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        {row.month}
                                    </td>
                                    <td className="px-6 py-4 text-center text-gray-600">
                                        {row.collected}
                                    </td>
                                    <td className="px-6 py-4 text-center font-medium text-gray-900">
                                        {row.liability}
                                    </td>
                                    <td className="px-6 py-4 text-center text-gray-600">
                                        {row.paid}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col items-start">
                                            <span
                                                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
                                                    row.statusStyle === 'red'
                                                        ? 'border-red-200 bg-red-50 text-red-600'
                                                        : row.statusStyle ===
                                                            'orange'
                                                          ? 'border-orange-200 bg-orange-50 text-orange-600'
                                                          : 'border-green-200 bg-green-50 text-green-600'
                                                }`}
                                            >
                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full ${
                                                        row.statusStyle ===
                                                        'red'
                                                            ? 'bg-red-600'
                                                            : row.statusStyle ===
                                                                'orange'
                                                              ? 'bg-orange-500'
                                                              : 'bg-green-600'
                                                    }`}
                                                ></span>
                                                {row.status}
                                            </span>
                                            {row.subStatus && (
                                                <span className="mt-1 text-xs text-gray-400">
                                                    {row.subStatus}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                                            {row.action}
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
