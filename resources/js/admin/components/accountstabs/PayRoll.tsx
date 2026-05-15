import Button from '@/shared/sharedcomponents/ui/Button';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import {
    Calendar,
    ChevronDown,
    ExternalLink,
    Eye,
    Plus,
    Search,
    Users,
    Wallet,
} from 'lucide-react';

const payrollData = [
    {
        name: 'Noah Pierre',
        role: 'Manager',
        id: 'STF-0087',
        baseSalary: '450.000',
        adjustments: 'No Changes',
        adjType: 'neutral',
        netPayable: '450.000',
        status: 'Pending',
        action: 'Add Payment',
    },
    {
        name: 'Drew Cano',
        role: 'Head Chef',
        id: 'STF-0077',
        baseSalary: '600.000',
        adjustments: '+ 12.500',
        adjType: 'positive',
        netPayable: '612.500',
        status: 'Pending',
        action: 'Add Payment',
    },
    {
        name: 'Orlando Diggs',
        role: 'Waitress',
        id: 'STF-0087',
        baseSalary: '350.000',
        adjustments: '- 50.000',
        adjType: 'negative',
        netPayable: '300.000',
        status: 'Paid',
        action: 'View Slip',
    },
];

export default function PayRoll() {
    return (
        <div className="mx-auto w-full max-w-[1400px] py-6">
            {/* Toolbar Top Right */}
            <div className="mb-6 flex justify-end gap-3">
                <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                    <Calendar className="h-4 w-4 text-gray-400" /> Period: Feb
                    2026 <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
                <Button className="!bg-[#7AB621] hover:!bg-[#6A9E1C]">
                    <Plus className="mr-2 h-4 w-4" /> Record Advance / Bonus
                </Button>
            </div>

            {/* KPI Cards */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Users className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Total Projected Payroll
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        4,250.000 KWD
                    </div>
                    <div className="text-sm text-gray-500">For Feb 2026</div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Calendar className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Pay Day
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        Oct 30
                    </div>
                    <div className="text-sm text-gray-500">Due in 4 days</div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Wallet className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Paid this month
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        1,200.000 KWD
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-1.5 w-full flex-1 overflow-hidden rounded-full bg-gray-100">
                            <div className="h-full w-[30%] rounded-full bg-[#7AB621]"></div>
                        </div>
                        <div className="text-xs text-gray-500">
                            30% of total completed
                        </div>
                    </div>
                </div>
            </div>

            {/* Sub Toolbar */}
            <div className="mb-6 flex items-center justify-between gap-4">
                <div className="relative w-[320px]">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Employee..."
                        className="w-full rounded-lg border border-gray-200 py-2.5 pr-4 pl-10 text-sm outline-none placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621]"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        Status: All{' '}
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                    <IconButton className="!border-gray-200 !bg-white !text-gray-700 shadow-sm">
                        <Eye className="mr-2 h-4 w-4 text-gray-400" /> Shift
                        Logs
                    </IconButton>
                </div>
            </div>

            {/* Table */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-5">
                    <h3 className="text-lg font-bold text-gray-900">
                        Salaried Staff Table
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-gray-100 bg-white text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">
                                    Employee Details
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Salary Breakdown
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Net Payable
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {payrollData.map((row, i) => (
                                <tr
                                    key={i}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                                                <img
                                                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${row.name}`}
                                                    alt="avatar"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900">
                                                    {row.name}
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-500">
                                                    {row.role} • {row.id}
                                                    <ExternalLink className="h-3 w-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">
                                            {row.baseSalary} (Base)
                                        </div>
                                        <div
                                            className={`flex items-center gap-1 ${row.adjType === 'positive' ? 'text-[#7AB621]' : row.adjType === 'negative' ? 'text-red-500' : 'text-gray-400'}`}
                                        >
                                            {row.adjustments}
                                            {row.adjType !== 'neutral' && (
                                                <span className="flex h-3 w-3 items-center justify-center rounded-full border border-current text-[8px]">
                                                    ?
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">
                                            {row.netPayable}
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            KWD
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                                                row.status === 'Paid'
                                                    ? 'border border-green-200 bg-green-50 text-green-600'
                                                    : 'border border-orange-200 bg-orange-50 text-orange-600'
                                            }`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${row.status === 'Paid' ? 'bg-green-600' : 'bg-orange-500'}`}
                                            ></span>
                                            {row.status}
                                        </span>
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
