import { useEffect, useRef, useState } from 'react';
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
} from 'recharts';
import HandCursorUrl from '../../shared/images/icons/cursor.svg';

// ─── Types ────────────────────────────────────────────────────────────────────
interface DataPoint {
    name: string;
    value: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const data: DataPoint[] = [
    { name: 'Jan', value: 45000 },
    { name: 'Feb', value: 52000 },
    { name: 'Mar', value: 48000 },
    { name: 'Apr', value: 61000 },
    { name: 'May', value: 55000 },
    { name: 'Jun', value: 67000 },
    { name: 'Jul', value: 60000 },
    { name: 'Aug', value: 83234 },
    { name: 'Sep', value: 75000 },
    { name: 'Oct', value: 79000 },
    { name: 'Nov', value: 84000 },
    { name: 'Dec', value: 92000 },
];

// ─── Custom hand cursor ───────────────────────────────────────────────────────
const HAND_CURSOR =
    // 'data:image/png;base64,...';
    '../../shared/images/icons/hand-cursor.svg';

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-bold text-white shadow-xl">
                {payload[0].value?.toLocaleString()}
            </div>
        );
    }
    return null;
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function RevenueChart() {
    // Used to measure the chart container so we know exactly where the chart
    // area ends (before the x-axis month labels).
    const chartWrapperRef = useRef<HTMLDivElement>(null);
    const [chartAreaBottom, setChartAreaBottom] = useState(250);

    useEffect(() => {
        const measure = () => {
            if (chartWrapperRef.current) {
                // X-axis tick area is ~30 px tall; subtract it from total container height.
                setChartAreaBottom(chartWrapperRef.current.clientHeight - 30);
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    return (
        <div className="flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
            <style>{`
        .revenue-chart .recharts-surface {
          cursor: url("${HandCursorUrl}") 8 0, pointer !important;
        }
      `}</style>

            {/* ── Header ─────────────────────────────────────────────────────────── */}
            <div className="mb-6">
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                    Revenue
                </h3>
                <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                        165,750.23 KWD
                    </span>
                    <span className="flex items-center gap-1 rounded-md border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                        2.4%
                    </span>
                </div>
            </div>

            {/* ── Chart ──────────────────────────────────────────────────────────── */}
            <div
                ref={chartWrapperRef}
                className="revenue-chart relative flex-1"
                style={{ minHeight: '280px' }}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 15, bottom: 0 }}
                    >
                        <CartesianGrid
                            vertical={false}
                            strokeDasharray="3 3"
                            stroke="#E5E7EB"
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis hide domain={['dataMin - 10000', 'auto']} />

                        <Tooltip content={<CustomTooltip />} cursor={false} />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#84CC16"
                            strokeWidth={3}
                            dot={false}
                            // ─── MAGIC HAPPENS HERE ───
                            // activeDot receives the EXACT `cx` and `cy` of the data point on the line
                            activeDot={(props: any) => {
                                const { cx, cy } = props;
                                return (
                                    <g>
                                        <defs>
                                            <linearGradient
                                                id="cursorFade"
                                                gradientUnits="userSpaceOnUse"
                                                x1={cx}
                                                y1={cy}
                                                x2={cx}
                                                y2={chartAreaBottom}
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#F59E0B"
                                                    stopOpacity={0.9}
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor="#F59E0B"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                        </defs>

                                        {/* The vertical line dropping down to the x-axis */}
                                        <line
                                            x1={cx}
                                            y1={cy} // Starts exactly at the data point
                                            x2={cx}
                                            y2={chartAreaBottom} // Ends at the bottom of the chart
                                            stroke="url(#cursorFade)"
                                            strokeWidth={2}
                                            pointerEvents="none"
                                        />

                                        {/* The active dot itself */}
                                        <circle
                                            cx={cx}
                                            cy={cy}
                                            r={6}
                                            fill="#ffffff"
                                            stroke="#F59E0B"
                                            strokeWidth={3}
                                        />
                                    </g>
                                );
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
