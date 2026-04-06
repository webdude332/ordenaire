// import { useEffect, useRef, useState } from 'react';
// import {
//     CartesianGrid,
//     Line,
//     LineChart,
//     ResponsiveContainer,
//     Tooltip,
//     TooltipProps,
//     XAxis,
//     YAxis,
// } from 'recharts';
// import HandCursorUrl from '../../shared/images/icons/cursor.svg';

// // ─── Types ────────────────────────────────────────────────────────────────────
// interface DataPoint {
//     name: string;
//     value: number;
// }

// // ─── Data ─────────────────────────────────────────────────────────────────────
// const data: DataPoint[] = [
//     { name: 'Jan', value: 45000 },
//     { name: 'Feb', value: 52000 },
//     { name: 'Mar', value: 48000 },
//     { name: 'Apr', value: 61000 },
//     { name: 'May', value: 55000 },
//     { name: 'Jun', value: 67000 },
//     { name: 'Jul', value: 60000 },
//     { name: 'Aug', value: 83234 },
//     { name: 'Sep', value: 75000 },
//     { name: 'Oct', value: 79000 },
//     { name: 'Nov', value: 84000 },
//     { name: 'Dec', value: 92000 },
// ];

// // ─── Custom hand cursor (your Fill.png embedded as base64) ────────────────────
// const HAND_CURSOR =
//     // 'data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA0DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwEG/8QAIxAAAQQBAwUBAQAAAAAAAAAAAQIDBAUGABESBwghMUEUI//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDf4ZgmBYF0jrP2QqzLGLGulxkWcNgRlTYa21TP6bE8lAtcUq33ACfXkaB++iNhrVvj87HauNX20+RZPWiUEFaw263HaUQPSSWHSBsB5V9J1OgGaZPVdu2dtQrZxKKsKXAS42h0RlOIIXw5g8d9z4H0k+ydD/Wi0nXXUCRa2b/6JkqFBdec4hPJaobJUdkgAbkk+B90H//Z';
//     '../../shared/images/icons/hand-cursor.svg';

// // ─── Custom Tooltip ───────────────────────────────────────────────────────────
// const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
//     if (active && payload && payload.length) {
//         return (
//             <div className="rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-bold text-white shadow-xl">
//                 {payload[0].value?.toLocaleString()}
//             </div>
//         );
//     }
//     return null;
// };

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function RevenueChart() {
//     // Tracks the snapped x/y of the hovered data point in SVG coordinates.
//     const [activeCoord, setActiveCoord] = useState<{
//         x: number;
//         y: number;
//     } | null>(null);

//     // Used to measure the chart container so we know exactly where the chart
//     // area ends (before the x-axis month labels).
//     const chartWrapperRef = useRef<HTMLDivElement>(null);
//     const [chartAreaBottom, setChartAreaBottom] = useState(250);

//     useEffect(() => {
//         const measure = () => {
//             if (chartWrapperRef.current) {
//                 // X-axis tick area is ~30 px tall; subtract it from total container height.
//                 setChartAreaBottom(chartWrapperRef.current.clientHeight - 30);
//             }
//         };
//         measure();
//         window.addEventListener('resize', measure);
//         return () => window.removeEventListener('resize', measure);
//     }, []);

//     return (
//         <div className="flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
//             {/*
//         Target the Recharts <svg> element (class "recharts-surface") directly.
//         A cursor set on a parent div gets overridden by the SVG's own cursor,
//         so we must pierce it with !important here.
//         hotspot "8 0" → tip of the index finger.
//       */}
//             <style>{`
//         .revenue-chart .recharts-surface {
//           cursor: url("${HandCursorUrl}") 8 0, pointer !important;
//         }
//       `}</style>

//             {/* ── Header ─────────────────────────────────────────────────────────── */}
//             <div className="mb-6">
//                 <h3 className="mb-2 text-sm font-medium text-gray-500">
//                     Revenue
//                 </h3>
//                 <div className="flex items-center gap-3">
//                     <span className="text-3xl font-bold text-gray-900">
//                         165,750.23 KWD
//                     </span>
//                     <span className="flex items-center gap-1 rounded-md border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
//                         <svg
//                             width="10"
//                             height="10"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         >
//                             <path d="M7 17l9.2-9.2M17 17V7H7" />
//                         </svg>
//                         2.4%
//                     </span>
//                 </div>
//             </div>

//             {/*
//         ── Chart wrapper ──────────────────────────────────────────────────────
//         position:relative is required so the overlay SVG can be positioned
//         absolutely inside it, perfectly overlapping the Recharts SVG.

//         Why an overlay SVG instead of Recharts' built-in cursor or <Customized>?
//           • cursor prop → rendered OUTSIDE the chart clipPath → always full height.
//           • <Customized>  → Recharts caches the component ref; it does NOT
//             re-render when parent state changes, so the line never updates.
//           • Overlay SVG  → a plain React sibling that re-renders on every state
//             change, shares the same pixel dimensions as the Recharts SVG, and
//             sits above it via z-index. Coordinates from activeCoordinate map 1:1.
//       */}
//             <div
//                 ref={chartWrapperRef}
//                 className="revenue-chart relative flex-1"
//                 style={{ minHeight: '280px' }}
//             >
//                 <ResponsiveContainer width="100%" height="100%">
//                     <LineChart
//                         data={data}
//                         margin={{ top: 10, right: 10, left: 15, bottom: 0 }}
//                         onMouseMove={(state: any) => {
//                             if (
//                                 state?.isTooltipActive &&
//                                 state?.activeCoordinate
//                             ) {
//                                 setActiveCoord(state.activeCoordinate);
//                             } else {
//                                 setActiveCoord(null);
//                             }
//                         }}
//                         onMouseLeave={() => setActiveCoord(null)}
//                     >
//                         <CartesianGrid
//                             vertical={false}
//                             strokeDasharray="3 3"
//                             stroke="#E5E7EB"
//                         />
//                         <XAxis
//                             dataKey="name"
//                             axisLine={false}
//                             tickLine={false}
//                             tick={{ fill: '#9CA3AF', fontSize: 12 }}
//                             dy={10}
//                         />
//                         <YAxis hide domain={['dataMin - 10000', 'auto']} />

//                         {/* Disable the built-in cursor — our overlay handles it */}
//                         <Tooltip content={<CustomTooltip />} cursor={false} />

//                         <Line
//                             type="monotone"
//                             dataKey="value"
//                             stroke="#84CC16"
//                             strokeWidth={3}
//                             dot={false}
//                             activeDot={{
//                                 r: 6,
//                                 fill: '#ffffff',
//                                 stroke: '#F59E0B',
//                                 strokeWidth: 3,
//                             }}
//                         />
//                     </LineChart>
//                 </ResponsiveContainer>

//                 {/*
//           Overlay SVG — same size as the Recharts SVG via position:absolute + inset-0.
//           pointerEvents:none so it never blocks mouse events on the chart below.
//           The linearGradient uses gradientUnits="userSpaceOnUse" + actual pixel
//           coordinates so the fade maps exactly from the dot down to the chart floor.
//         */}
//                 {activeCoord && (
//                     <svg
//                         style={{
//                             position: 'absolute',
//                             inset: 0,
//                             width: '100%',
//                             height: '100%',
//                             pointerEvents: 'none',
//                         }}
//                     >
//                         <defs>
//                             <linearGradient
//                                 id="cursorFade"
//                                 gradientUnits="userSpaceOnUse"
//                                 x1={activeCoord.x}
//                                 y1={activeCoord.y}
//                                 x2={activeCoord.x}
//                                 y2={chartAreaBottom}
//                             >
//                                 <stop
//                                     offset="0%"
//                                     stopColor="#F59E0B"
//                                     stopOpacity={0.9}
//                                 />
//                                 <stop
//                                     offset="100%"
//                                     stopColor="#F59E0B"
//                                     stopOpacity={0}
//                                 />
//                             </linearGradient>
//                         </defs>
//                         <line
//                             x1={activeCoord.x}
//                             y1={activeCoord.y}
//                             x2={activeCoord.x}
//                             y2={chartAreaBottom}
//                             stroke="url(#cursorFade)"
//                             strokeWidth={2}
//                         />
//                     </svg>
//                 )}
//             </div>
//         </div>
//     );
// }

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
