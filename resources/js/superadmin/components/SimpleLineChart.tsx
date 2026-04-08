import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
} from 'recharts';

interface HealthDataPoint {
    time: string;
    value: number;
}

const data: HealthDataPoint[] = [
    { time: '00:00', value: 30 },
    { time: '02:00', value: 25 },
    { time: '04:00', value: 35 },
    { time: '06:00', value: 30 },
    { time: '08:00', value: 45 },
    { time: '10:00', value: 40 },
    { time: '12:00', value: 55 },
    { time: '14:00', value: 50 },
    { time: '16:00', value: 65 },
    { time: '18:00', value: 60 },
    { time: '20:00', value: 75 },
    { time: '22:00', value: 85 },
];

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
        const dataPoint = payload[0].payload as HealthDataPoint;
        return (
            <div className="rounded border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-sm">
                {dataPoint.time}: {dataPoint.value}
            </div>
        );
    }
    return null;
};

export default function SystemHealthChart() {
    return (
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
            {/* Header Section with Title and Badges */}
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                    System Health
                </h3>
                <div className="flex items-center gap-3">
                    {/* "45 ms" Badge */}
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                        45 ms
                    </span>
                    {/* "Good" Badge with dot */}
                    <span className="flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        Good
                    </span>
                </div>
            </div>

            {/* Chart Section with Fixed Height */}
            <div className="w-full" style={{ height: '200px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                    >
                        {/* Define the gradient for the fill */}
                        <defs>
                            <linearGradient
                                id="colorValue"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#F3F4F6"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#F3F4F6"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>

                        {/* Horizontal grid lines only */}
                        <CartesianGrid
                            vertical={false}
                            strokeDasharray="0"
                            stroke="#F3F4F6"
                        />

                        {/* Hide axes */}
                        <XAxis dataKey="time" hide />
                        <YAxis hide domain={[0, 100]} />

                        {/* Minimal tooltip */}
                        <Tooltip content={<CustomTooltip />} cursor={false} />

                        {/* The Area Chart */}
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#84CC16"
                            strokeWidth={3}
                            fill="url(#colorValue)"
                            fillOpacity={1}
                            activeDot={{
                                r: 5,
                                strokeWidth: 0,
                                fill: '#84CC16',
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Footer Label */}
            <div className="mt-4 text-center text-sm font-medium text-gray-400">
                last 24 Hours
            </div>
        </div>
    );
}
