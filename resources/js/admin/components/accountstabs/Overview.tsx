import Button from '@/shared/sharedcomponents/ui/Button';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import {
    ArrowRight,
    Calendar,
    Download,
    FileText,
    HandCoins,
    Landmark,
    Plus,
    Receipt,
    RefreshCcw,
    TrendingUp,
    Truck,
    Users,
} from 'lucide-react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

// --- MOCK DATA FOR CHART ---
const cashFlowData = [
    { name: "Dec '24", expenses: 14000, profit: 24000 },
    { name: "Jan '25", expenses: 18000, profit: 30000 },
    { name: "Feb '25", expenses: 10000, profit: 18000 },
    { name: "Mar '25", expenses: 15000, profit: 26000 },
    { name: "Apr '25", expenses: 10000, profit: 18000 },
    { name: "May '25", expenses: 17000, profit: 33000 },
    { name: "Jun '25", expenses: 14000, profit: 24000 },
    { name: "Jul '25", expenses: 15000, profit: 26000 },
    { name: "Aug '25", expenses: 14000, profit: 24000 },
    { name: "Sep '25", expenses: 16000, profit: 28000 },
    { name: "Oct '25", expenses: 18000, profit: 30000 },
    { name: "Nov '25", expenses: 13000, profit: 23000 },
];

// --- CUSTOM RECHARTS TOOLTIP ---
const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const expenses = payload[0].value;
        const profit = payload[1].value;
        const revenue = expenses + profit;

        return (
            <div className="rounded-lg bg-gray-900 p-4 shadow-xl">
                <p className="mb-2 text-sm font-medium text-white">
                    Total Revenue: {revenue.toLocaleString()}.000
                </p>
                <p className="mb-2 text-sm font-medium text-white">
                    Expenses: {expenses.toLocaleString()}.000
                </p>
                <p className="text-sm font-medium text-[#7AB621]">
                    Net Profit: + {profit.toLocaleString()}.000
                </p>
            </div>
        );
    }
    return null;
};

export default function Overview() {
    const whoToPay = [
        {
            category: 'Payables (Suppliers)',
            icon: Truck,
            amount: '1,250.000',
            status: 'Overdue',
            statusType: 'danger',
        },
        {
            category: 'Payroll (Salaries)',
            icon: Users,
            amount: '4,800.000',
            status: 'Due in 6 Days',
            statusType: 'neutral',
        },
        {
            category: 'Taxes (VAT / Gov)',
            icon: Landmark,
            amount: '450.000',
            status: 'Due in 6 Days',
            statusType: 'neutral',
        },
        {
            category: 'Expenses (OpEx)',
            icon: FileText,
            amount: '650.000',
            status: 'Overdue',
            statusType: 'danger',
        },
    ];

    return (
        <div className="w-full max-w-[1400px] py-6">
            {/* Toolbar Row */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Overview</h2>
                <div className="flex items-center gap-3">
                    <IconButton className="!border-gray-200 !bg-white !text-gray-700 shadow-sm">
                        <Calendar className="mr-2 h-4 w-4" /> Date: Oct 2025
                    </IconButton>
                    <IconButton className="!border-gray-200 !bg-white !text-gray-700 shadow-sm">
                        <Download className="mr-2 h-4 w-4" /> Export
                    </IconButton>
                    <IconButton className="!border-gray-200 !bg-white !text-gray-700 shadow-sm">
                        <RefreshCcw className="mr-2 h-4 w-4" /> Cash
                        Reconciliation
                    </IconButton>
                    <Button className="!bg-[#7AB621] hover:!bg-[#6A9E1C]">
                        <Plus className="mr-2 h-4 w-4" /> Add Operational
                        Expense
                    </Button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Net Profit Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-[#7AB621]">
                            <HandCoins className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-500">
                            Net Profit
                        </span>
                    </div>
                    <div className="mb-2 text-2xl font-bold text-[#7AB621]">
                        + 4,250.000 KWD
                    </div>
                    <div className="text-sm text-gray-500">
                        Net Margin: 18% ({' '}
                        <TrendingUp className="inline h-3 w-3 text-[#7AB621]" />{' '}
                        <span className="font-medium text-[#7AB621]">2%</span>{' '}
                        vs last week)
                    </div>
                </div>

                {/* Revenue Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                            <Receipt className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-500">
                            Total Revenue (Inflow)
                        </span>
                    </div>
                    <div className="mb-2 text-2xl font-bold text-gray-900">
                        24,500.000 KWD
                    </div>
                    <div className="text-sm text-gray-500">Combined Sales</div>
                </div>

                {/* Expenses Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                            <FileText className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-500">
                            Total Expenses (Outflow)
                        </span>
                    </div>
                    <div className="mb-2 text-2xl font-bold text-gray-900">
                        20,250.000 KWD
                    </div>
                    <div className="text-sm text-gray-500">
                        COGS + Salaries + Rent
                    </div>
                </div>
            </div>

            {/* Who to Pay Section */}
            <div className="mb-8 rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-5">
                    <h3 className="text-lg font-bold text-gray-900">
                        Who to Pay
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-gray-100 bg-white text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">
                                    Category
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Amount Due
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Status / Insight
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {whoToPay.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3 font-medium text-gray-900">
                                            <item.icon className="h-5 w-5 text-gray-500" />
                                            {item.category}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="font-medium text-gray-900">
                                            {item.amount}
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            KWD
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                                                item.statusType === 'danger'
                                                    ? 'border-red-100 bg-red-50 text-red-600'
                                                    : 'border-gray-200 bg-gray-100 text-gray-600'
                                            }`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${item.statusType === 'danger' ? 'bg-red-600' : 'bg-gray-400'}`}
                                            ></span>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                                            View{' '}
                                            <ArrowRight className="h-4 w-4 text-gray-400" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Chart Section */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h3 className="mb-2 text-lg font-bold text-gray-900">
                            Cash Flow Trend
                        </h3>
                        <div className="flex items-end gap-3">
                            <span className="text-3xl font-bold text-gray-900">
                                85,600 KWD
                            </span>
                            <span className="mb-1 text-sm font-medium text-gray-500">
                                Total Net Profit
                            </span>
                        </div>
                        <div className="mt-2 inline-flex items-center gap-1 rounded border border-gray-200 bg-white px-2 py-0.5 text-xs font-medium text-gray-600">
                            <TrendingUp className="h-3 w-3 text-[#7AB621]" />
                            <span className="text-[#7AB621]">2.4%</span> vs
                            Previous Period
                        </div>
                    </div>

                    {/* Chart Filters & Legend */}
                    <div className="flex flex-col items-end gap-6">
                        <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
                            {['Monthly', 'Weekly', 'Daily'].map((filter, i) => (
                                <button
                                    key={filter}
                                    className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                                        i === 0
                                            ? 'border border-gray-200 bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-[#7AB621]"></div>
                                Net Profit
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-[#E53935]"></div>
                                Expenses
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recharts Area */}
                <div className="mt-8 h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={cashFlowData}
                            margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
                            barSize={32}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="#E5E7EB"
                            />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 12 }}
                                tickFormatter={(value) => `${value / 1000}k`}
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                content={<CustomTooltip />}
                            />

                            {/* Stacked Bars: Expenses on bottom (red), Profit on top (green) */}
                            <Bar
                                dataKey="expenses"
                                stackId="a"
                                fill="#E53935"
                                radius={[0, 0, 4, 4]}
                            />
                            <Bar
                                dataKey="profit"
                                stackId="a"
                                fill="#7AB621"
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            {/* End Chart Section */}
        </div>
    );
}
