import {
    Bar,
    BarChart,
    Cell,
    LabelList,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts';

const data = [
    { name: 'High', value: 9, percentage: 30, color: '#F59E0B' }, // Orange
    { name: 'Medium', value: 12, percentage: 40, color: '#FBBF24' }, // Yellow
    { name: 'Low', value: 9, percentage: 30, color: '#84CC16' }, // Green
];

const CustomNameLabel = (props: any) => {
    const { x, y, value } = props;
    return (
        <text
            x={x}
            y={y - 12}
            fill="#1F2937"
            fontSize={14}
            fontWeight={600}
            textAnchor="start"
            dominantBaseline="auto"
        >
            {value}
        </text>
    );
};

const CustomValueLabel = (props: any) => {
    const { x, y, width, height, index } = props;
    const item = data[index];

    const totalTrackWidth = (width * 120) / item.percentage;

    return (
        <text
            x={x + totalTrackWidth + 12}
            y={y + height / 2 + 1}
            fill="#4B5563"
            fontSize={14}
            fontWeight={500}
            textAnchor="start"
            dominantBaseline="middle"
        >
            {/* Matches format: "9 (30%)" */}
            {item.value} ({item.percentage}%)
        </text>
    );
};

export default function SupportTicketsChart() {
    return (
        <div className="flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                    Support Tickets
                </h2>
                <p className="mt-1 text-sm font-medium text-gray-500">
                    Total Open: 31
                </p>
            </div>

            {/* Chart */}
            <div className="min-h-[200px] w-full flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={data}
                        margin={{ top: 10, right: 100, left: 0, bottom: 10 }}
                        barSize={10}
                        barGap={0}
                    >
                        <XAxis type="number" hide domain={[0, 120]} />
                        <YAxis type="category" dataKey="name" hide />

                        <Bar
                            dataKey="percentage"
                            radius={[10, 10, 10, 10]}
                            background={{ fill: '#F3F4F6', radius: 10 }}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                />
                            ))}

                            <LabelList
                                dataKey="name"
                                content={<CustomNameLabel />}
                            />

                            <LabelList
                                dataKey="value"
                                content={<CustomValueLabel />}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
