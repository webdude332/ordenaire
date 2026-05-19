import {
    Calendar,
    ChevronDown,
    Clock,
    Download,
    MoreVertical,
    Receipt,
    Trophy,
} from 'lucide-react';
import {
    CartesianGrid,
    Cell,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const trendData = [
    { month: 'Aug 25', revenue: 20000, expenses: 8000 },
    { month: 'Sep 25', revenue: 30000, expenses: 12000 },
    { month: 'Oct 25', revenue: 32000, expenses: 20000 },
    { month: 'Nov 25', revenue: 41000, expenses: 32500 }, // Peak
    { month: 'Dec 25', revenue: 45000, expenses: 28000 },
    { month: 'Jan 26', revenue: 46000, expenses: 35000 },
];

const expenseDist = [
    { name: 'Operational', value: 35, color: '#A855F7' },
    { name: 'Suppliers', value: 45, color: '#D946EF' },
    { name: 'Salaries', value: 20, color: '#84CC16' },
];

const CustomLineTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const rev = payload[0].value;
        const exp = payload[1].value;
        return (
            <div className="rounded-lg bg-gray-900 p-3 text-xs text-white shadow-xl">
                <div className="mb-1 text-[#7AB621]">
                    Revenue: {rev.toLocaleString()} KWD
                </div>
                <div className="mb-1 text-red-500">
                    Expenses: {exp.toLocaleString()} KWD
                </div>
                <div className="mt-1 border-t border-gray-700 pt-1 font-bold text-gray-300">
                    Net Profit: {(rev - exp).toLocaleString()} KWD
                </div>
            </div>
        );
    }
    return null;
};

export default function FinancialHealth() {
    return (
        <div className="mx-auto w-full max-w-[1400px] py-6">
            <div className="mb-6 flex justify-end gap-3">
                <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                    <Calendar className="h-4 w-4 text-gray-400" /> Period: Jan
                    2026 <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                    <Download className="h-4 w-4 text-gray-400" /> Export as PDF{' '}
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
            </div>

            {/* KPI Cards */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Receipt className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Total Revenue
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        45,000.000 KWD
                    </div>
                    <div className="text-sm font-medium text-[#7AB621]">
                        📈 8.4%{' '}
                        <span className="font-normal text-gray-500">
                            vs. previous month
                        </span>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Clock className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Total Expenses
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        32,000.000 KWD
                    </div>
                    <div className="text-sm font-medium text-[#7AB621]">
                        📉 1.2%{' '}
                        <span className="font-normal text-gray-500">
                            vs. previous month
                        </span>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Trophy className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Net Profit
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        13,000.000 KWD
                    </div>
                    <div className="text-sm font-medium text-[#7AB621]">
                        📈 2.5%{' '}
                        <span className="font-normal text-gray-500">
                            vs. previous month
                        </span>
                    </div>
                </div>
            </div>

            {/* Line Chart */}
            <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            Profit & Loss Trend
                        </h3>
                        <div className="mt-1 flex items-end gap-2">
                            <span className="text-2xl font-bold text-gray-900">
                                85,600 KWD
                            </span>
                            <span className="mb-1 text-sm text-gray-500">
                                Total Net Profit
                            </span>
                        </div>
                        <div className="mt-2 inline-flex items-center gap-1 rounded border border-gray-200 bg-white px-2 py-0.5 text-xs font-medium text-[#7AB621]">
                            📈 2.4%{' '}
                            <span className="text-gray-500">
                                vs Previous Period
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                        <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
                            <button className="rounded-md border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-900 shadow-sm">
                                Last 6 Months
                            </button>
                            <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700">
                                Last 12 Months
                            </button>
                            <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700">
                                Year-to-Date (YTD)
                            </button>
                        </div>
                        <div className="flex gap-4 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-[#7AB621]"></div>{' '}
                                Revenue Line
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>{' '}
                                Expense Line
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={trendData}
                            margin={{
                                top: 10,
                                right: 10,
                                left: -20,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="#E5E7EB"
                            />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 12 }}
                                tickFormatter={(val) => `${val / 1000}k`}
                            />
                            <Tooltip content={<CustomLineTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="revenue"
                                stroke="#7AB621"
                                strokeWidth={2}
                                dot={{ r: 4, fill: '#7AB621' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="expenses"
                                stroke="#EF4444"
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                dot={{ r: 4, fill: '#EF4444' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className="mt-2 text-center text-xs text-gray-400">
                        Time Period
                    </div>
                </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Expense Distribution */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">
                                Expense Distribution
                            </h3>
                            <p className="text-sm text-gray-500">
                                Identify your biggest spending areas and
                                optimize your operational efficiency.
                            </p>
                        </div>
                        <MoreVertical className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="relative h-[220px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={expenseDist}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={40}
                                    outerRadius={100}
                                    paddingAngle={0}
                                    dataKey="value"
                                    label={({ name, value }) => `${value}%`}
                                >
                                    {expenseDist.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.color}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 flex justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-[#84CC16]"></div>{' '}
                            Operational
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-[#D946EF]"></div>{' '}
                            Suppliers
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-[#A855F7]"></div>{' '}
                            Salaries
                        </div>
                    </div>
                </div>

                {/* Profit Retention */}
                <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">
                                Profit Retention
                            </h3>
                            <p className="text-sm text-gray-500">
                                Visualizing how much of every 1 unit of your
                                local currency earned stays in your pocket.
                            </p>
                        </div>
                        <MoreVertical className="h-5 w-5 text-gray-400" />
                    </div>

                    <div className="ml-4 flex flex-1 items-center gap-8">
                        {/* Stacked Vertical Bar */}
                        <div className="flex h-full w-12 flex-col overflow-hidden rounded-lg bg-gray-100">
                            <div
                                className="bg-[#D946EF]"
                                style={{ height: '30%' }}
                            ></div>
                            <div
                                className="bg-[#A855F7]"
                                style={{ height: '45%' }}
                            ></div>
                            <div
                                className="bg-[#84CC16]"
                                style={{ height: '25%' }}
                            ></div>
                        </div>

                        {/* Labels */}
                        <div className="flex h-full flex-col justify-between gap-6 py-2">
                            <div>
                                <div className="mb-1 flex items-center gap-2 text-sm text-gray-500">
                                    <div className="h-2 w-2 rounded-full bg-[#D946EF]"></div>{' '}
                                    Suppliers (30%)
                                </div>
                                <div className="text-lg font-bold text-gray-900">
                                    0.300 KWD
                                </div>
                            </div>
                            <div>
                                <div className="mb-1 flex items-center gap-2 text-sm text-gray-500">
                                    <div className="h-2 w-2 rounded-full bg-[#A855F7]"></div>{' '}
                                    Operations & Salaries (45%)
                                </div>
                                <div className="text-lg font-bold text-gray-900">
                                    0.450 KWD
                                </div>
                            </div>
                            <div>
                                <div className="mb-1 flex items-center gap-2 text-sm text-gray-500">
                                    <div className="h-2 w-2 rounded-full bg-[#84CC16]"></div>{' '}
                                    Net Profit (25%)
                                </div>
                                <div className="text-lg font-bold text-gray-900">
                                    0.250 KWD
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-gray-100 pt-4 text-sm">
                        <span className="font-bold text-gray-900">
                            Total Revenue:
                        </span>{' '}
                        <span className="text-gray-600">1.000 KWD</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
