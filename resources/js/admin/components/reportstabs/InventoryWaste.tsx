import {
    AlertTriangle,
    ArchiveRestore,
    Calendar,
    ChevronDown,
    Download,
    MoreVertical,
    Recycle,
} from 'lucide-react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const wasteData = Array.from({ length: 24 }, (_, i) => ({
    day: i + 1,
    value: Math.floor(Math.random() * 100) + 20,
}));
// Highlight a specific bar like in the screenshot
wasteData[14].value = 130;

const stockData = [
    { name: 'Healthy', value: 270, color: '#7AB621' },
    { name: 'Low Stock', value: 112, color: '#F59E0B' },
    { name: 'Non-Moving / Expired', value: 68, color: '#DC2626' },
];

const topWasted = [
    {
        name: 'Tomato (Large)',
        amount: '450.000',
        percent: 45,
        color: 'bg-red-600',
    },
    {
        name: 'Fresh Salmon',
        amount: '200.000',
        percent: 20,
        color: 'bg-red-500',
    },
    {
        name: 'Whole Milk (1L)',
        amount: '150.000',
        percent: 15,
        color: 'bg-red-400',
    },
    {
        name: 'Chicken Breast',
        amount: '100.000',
        percent: 10,
        color: 'bg-red-600',
    },
    { name: 'Cooking Oil', amount: '50.000', percent: 5, color: 'bg-red-500' },
];

const CustomWasteTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg bg-gray-900 p-3 text-xs text-white shadow-xl">
                <div className="mb-1 font-bold">{payload[0].value}.500 KWD</div>
                <div className="mb-1 text-gray-300">Top Reason: Spoilage</div>
                <div className="text-gray-400">14 Jan 2026</div>
            </div>
        );
    }
    return null;
};

export default function InventoryWaste() {
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
                            <Recycle className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Total Waste Value
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        845.500 KWD
                    </div>
                    <div className="text-sm font-medium text-[#7AB621]">
                        📉 4.2%{' '}
                        <span className="font-normal text-gray-500">
                            vs. previous month
                        </span>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <ArchiveRestore className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Current Stock Value
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        2,150.000 KWD
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                        📈 12%{' '}
                        <span className="font-normal">vs. previous month</span>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <AlertTriangle className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            At-Risk Inventory
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        145.000 KWD
                    </div>
                    <div className="text-sm font-medium text-red-500">
                        📈 8.0%{' '}
                        <span className="font-normal text-gray-500">
                            vs. previous month
                        </span>
                    </div>
                </div>
            </div>

            {/* Waste Overview Chart */}
            <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            Waste Overview
                        </h3>
                        <div className="mt-1 flex items-end gap-2">
                            <span className="text-2xl font-bold text-gray-900">
                                8,600 KWD
                            </span>
                            <span className="mb-1 text-sm text-gray-500">
                                Total Waste Value
                            </span>
                        </div>
                    </div>
                    <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
                        <button className="rounded-md border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-900 shadow-sm">
                            Daily
                        </button>
                        <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700">
                            Monthly
                        </button>
                    </div>
                </div>
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={wasteData}
                            margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
                            barSize={8}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="#E5E7EB"
                            />
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 12 }}
                                dy={10}
                                tickFormatter={(val) =>
                                    val % 2 !== 0 ? val : ''
                                }
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 12 }}
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                content={<CustomWasteTooltip />}
                            />
                            <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                                {wasteData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={
                                            index === 14 ? '#F59E0B' : '#374151'
                                        }
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    <div className="mt-2 text-center text-xs text-gray-400">
                        Timeline (Oct 2025)
                    </div>
                </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Stock Status Donut */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-2 flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">
                                Stock Status
                            </h3>
                            <p className="text-sm text-gray-500">
                                Current inventory levels based on shelf-life and
                                quantity.
                            </p>
                        </div>
                        <MoreVertical className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="mb-4 text-lg font-medium text-gray-700">
                        450 • Total SKUs
                    </div>
                    <div className="relative h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={stockData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={40}
                                    outerRadius={100}
                                    paddingAngle={0}
                                    dataKey="value"
                                >
                                    {stockData.map((entry, index) => (
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
                    <div className="mt-2 flex justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-[#7AB621]"></div>{' '}
                            Healthy
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-[#F59E0B]"></div>{' '}
                            Low Stock
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-[#DC2626]"></div>{' '}
                            Non-Moving / Expired.
                        </div>
                    </div>
                </div>

                {/* Top Wasted Items */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">
                                Top Wasted Items
                            </h3>
                            <p className="text-sm text-gray-500">
                                Top 5 items contributing to financial loss in
                                the selected period.
                            </p>
                        </div>
                        <MoreVertical className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="space-y-6">
                        {topWasted.map((item, i) => (
                            <div key={i}>
                                <div className="mb-2 flex justify-between text-sm">
                                    <span className="font-medium text-gray-900">
                                        {item.name}
                                    </span>
                                    <span className="text-gray-500">
                                        {item.amount} KWD ({item.percent}%)
                                    </span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                                    <div
                                        className={`h-full rounded-full ${item.color}`}
                                        style={{ width: `${item.percent}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 border-t border-gray-100 pt-4 text-sm">
                        <span className="font-bold text-gray-900">
                            Total Top 5 Loss:
                        </span>{' '}
                        <span className="text-gray-600">
                            950.000 KWD (95% of total monthly waste)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
