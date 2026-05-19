import {
    Calendar,
    ChevronDown,
    Clock,
    Download,
    Moon,
    MoreVertical,
    Puzzle,
    Receipt,
    Trophy,
    Wrench,
} from 'lucide-react';

export default function SalesMenu() {
    // Generate dummy heatmap data (7 days x 12 hours)
    const hours = [
        '9 AM',
        '10 AM',
        '11 AM',
        '12 PM',
        '1 PM',
        '2 PM',
        '3 PM',
        '4 PM',
        '5 PM',
        '6 PM',
        '7 PM',
        '8 PM',
    ];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // 0 = Idle, 1 = Steady, 2 = Busy, 3 = Peak
    const getHeatColor = (val: number) => {
        if (val === 3) return 'bg-[#C25100]';
        if (val === 2) return 'bg-[#F59E0B]';
        if (val === 1) return 'bg-[#FFDCC8]';
        return 'bg-white';
    };

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
                            Average Order Value (AOV)
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        12.500 KWD
                    </div>
                    <div className="text-sm text-gray-500">
                        Average spend per customer/table
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Clock className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Busiest Hour
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        8:00 PM - 9:00 PM
                    </div>
                    <div className="text-sm text-gray-500">
                        35% of daily revenue
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <Trophy className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Top Category
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        Main Course
                    </div>
                    <div className="text-sm text-gray-500">
                        42% of total sales
                    </div>
                </div>
            </div>

            {/* Menu Intelligence Matrix */}
            <div className="mb-8">
                <h3 className="mb-4 text-lg font-bold text-gray-900">
                    Menu Intelligence Matrix
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Stars */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-green-100 bg-green-50 text-[#7AB621]">
                                <Trophy className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">
                                    STARS
                                </h4>
                                <div className="text-xs text-gray-500">
                                    High Profit + Popular
                                </div>
                            </div>
                        </div>
                        <div className="text-sm">
                            <span className="font-medium text-gray-700">
                                Strategy:
                            </span>{' '}
                            <span className="text-gray-500">
                                Keep these as they are.
                            </span>
                        </div>
                        <ul className="mt-3 ml-5 list-disc space-y-1.5 text-sm text-gray-600 marker:text-gray-400">
                            <li>
                                Classic Cheeseburger{' '}
                                <span className="font-bold">(Mains)</span>
                            </li>
                            <li>
                                Signature Steak{' '}
                                <span className="font-bold">(Mains)</span>
                            </li>
                            <li>
                                Truffle Pasta{' '}
                                <span className="font-bold">(Mains)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Workhorses */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-500">
                                <Wrench className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">
                                    WORKHORSES
                                </h4>
                                <div className="text-xs text-gray-500">
                                    Low Profit + Popular
                                </div>
                            </div>
                        </div>
                        <div className="text-sm">
                            <span className="font-medium text-gray-700">
                                Strategy:
                            </span>{' '}
                            <span className="text-gray-500">
                                Consider raising prices slightly.
                            </span>
                        </div>
                        <ul className="mt-3 ml-5 list-disc space-y-1.5 text-sm text-gray-600 marker:text-gray-400">
                            <li>
                                French Fries{' '}
                                <span className="font-bold">(Sides)</span>
                            </li>
                            <li>
                                Pepsi{' '}
                                <span className="font-bold">(Beverages)</span>
                            </li>
                            <li>
                                Margherita Pizza{' '}
                                <span className="font-bold">(Mains)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Puzzles */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-100 bg-purple-50 text-purple-500">
                                <Puzzle className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">
                                    PUZZLES
                                </h4>
                                <div className="text-xs text-gray-500">
                                    High Profit + Unpopular
                                </div>
                            </div>
                        </div>
                        <div className="text-sm">
                            <span className="font-medium text-gray-700">
                                Strategy:
                            </span>{' '}
                            <span className="text-gray-500">
                                Try promoting these more.
                            </span>
                        </div>
                        <ul className="mt-3 ml-5 list-disc space-y-1.5 text-sm text-gray-600 marker:text-gray-400">
                            <li>
                                Exotic Sea Bass{' '}
                                <span className="font-bold">(Seafood)</span>
                            </li>
                            <li>
                                Premium Wagyu Slider{' '}
                                <span className="font-bold">(Appetizers)</span>
                            </li>
                            <li>
                                Saffron Risotto{' '}
                                <span className="font-bold">(Mains)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sleepers */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-500">
                                <Moon className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">
                                    SLEEPERS
                                </h4>
                                <div className="text-xs text-gray-500">
                                    Low Profit + Unpopular
                                </div>
                            </div>
                        </div>
                        <div className="text-sm">
                            <span className="font-medium text-gray-700">
                                Strategy:
                            </span>{' '}
                            <span className="text-gray-500">
                                Keep these as they are.
                            </span>
                        </div>
                        <ul className="mt-3 ml-5 list-disc space-y-1.5 text-sm text-gray-600 marker:text-gray-400">
                            <li>
                                Diet Root Beer{' '}
                                <span className="font-bold">(Beverages)</span>
                            </li>
                            <li>
                                Side Salad{' '}
                                <span className="font-bold">(Healthy)</span>
                            </li>
                            <li>
                                Steamed Veggies{' '}
                                <span className="font-bold">(Healthy)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Profit Contribution */}
            <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h3 className="flex items-center gap-3 text-lg font-bold text-gray-900">
                            Profit Contribution by Category
                            {/* <span className="text-xs font-medium border border-gray-200 rounded bg-gray-50 px-2 py-0.5 text-gray-600 flex items-center gap-1">
                                <TrendingUp className="h-3 w-3" /> Highest Profit
                            </span> */}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Which food categories are actually paying your
                            bills?
                        </p>
                    </div>
                    <MoreVertical className="h-5 w-5 text-gray-400" />
                </div>

                <div className="space-y-6">
                    {[
                        { name: 'Mains', amount: '4,500.000', percent: 50 },
                        {
                            name: 'Appetizers',
                            amount: '1,100.000',
                            percent: 20,
                        },
                        { name: 'Beverages', amount: '1,100.000', percent: 20 },
                        { name: 'Desserts', amount: '550.000', percent: 10 },
                    ].map((item, i) => (
                        <div key={i}>
                            <div className="mb-2 flex justify-between text-sm">
                                <span className="font-medium text-gray-900">
                                    {item.name}
                                </span>
                                <span className="text-gray-500">
                                    {item.amount} ({item.percent}%)
                                </span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                                <div
                                    className="h-full rounded-full bg-[#7AB621]"
                                    style={{ width: `${item.percent}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Peak Performance Heatmap */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h3 className="flex items-center gap-3 text-lg font-bold text-gray-900">
                            The Peak Performance Heatmap
                            <span className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-600">
                                All Orders
                            </span>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Darker colors show when you have the most sales. Use
                            this to plan your staff shifts.
                        </p>
                    </div>
                    <MoreVertical className="h-5 w-5 text-gray-400" />
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[700px]">
                        {/* Heatmap Header */}
                        <div className="mb-2 grid grid-cols-[60px_repeat(7,1fr)] gap-1 text-center text-sm font-medium text-gray-600">
                            <div></div>
                            {days.map((d) => (
                                <div key={d}>{d}</div>
                            ))}
                        </div>

                        {/* Heatmap Body */}
                        <div className="space-y-1">
                            {hours.map((hour, hIdx) => (
                                <div
                                    key={hour}
                                    className="grid grid-cols-[60px_repeat(7,1fr)] gap-1"
                                >
                                    <div className="flex items-center justify-end pr-2 text-xs text-gray-500">
                                        {hour}
                                    </div>
                                    {/* Generate random-ish heatmap blocks for visual similarity */}
                                    {days.map((_, dIdx) => {
                                        // Fake logic to make lunchtime and evening look busy
                                        let level = 1;
                                        if (hIdx >= 3 && hIdx <= 5)
                                            level =
                                                Math.floor(Math.random() * 2) +
                                                2; // Lunch
                                        if (hIdx >= 9)
                                            level =
                                                Math.floor(Math.random() * 3) +
                                                1; // Dinner
                                        if (dIdx >= 4 && hIdx > 6) level = 3; // Weekend evenings
                                        if (hIdx === 0 || hIdx === 1)
                                            level = Math.floor(
                                                Math.random() * 2,
                                            ); // Morning

                                        return (
                                            <div
                                                key={dIdx}
                                                className={`h-8 rounded ${getHeatColor(level)}`}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Heatmap Legend */}
                <div className="mt-6 flex justify-end gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded border border-gray-200 bg-white"></div>{' '}
                        Idle
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded bg-[#FFDCC8]"></div>{' '}
                        Steady
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded bg-[#F59E0B]"></div>{' '}
                        Busy
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded bg-[#C25100]"></div>{' '}
                        Peak
                    </div>
                </div>
            </div>
        </div>
    );
}
