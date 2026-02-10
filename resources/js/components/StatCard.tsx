import React, { ReactNode, SVGProps } from 'react';

interface StatCardProps {
    title: string;
    value: ReactNode;
    trend?: string;
    trendType?: 'positive' | 'negative';
    trendIcon?: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

const StatCard = ({
    title,
    value,
    trend,
    trendType = 'positive',
    trendIcon: TrendIcon,
}: StatCardProps) => {
    const isPositive = trendType === 'positive';

    return (
        <div className="bg-white px-6 py-3 transition-shadow">
            {/* Title */}
            <p className="mb-3 text-sm font-semibold text-gray-600">{title}</p>

            {/* Value */}
            <div className="mb-3 text-2xl font-semibold text-gray-900">
                {value}
            </div>

            {/* Trend */}
            {trend && (
                <div className="flex items-center gap-1.5">
                    <span className="text-xs font-medium text-gray-500">
                        Trend
                    </span>

                    {/* CHANGE 3: Render as a Component (<Icon />) instead of <img /> */}
                    {TrendIcon ? (
                        <TrendIcon className="h-3.5 w-3.5 flex-shrink-0" />
                    ) : (
                        /* Fallback SVG if no icon provided */
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isPositive ? '#10B981' : '#EF4444'}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-shrink-0"
                        >
                            {isPositive ? (
                                <path d="M7 17L17 7M17 17V7H7" />
                            ) : (
                                <path d="M7 7L17 17M7 7h10v10" />
                            )}
                        </svg>
                    )}

                    {/* Trend Value */}
                    <span
                        className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-500'}`}
                    >
                        {trend}
                    </span>
                </div>
            )}
        </div>
    );
};

export default StatCard;
