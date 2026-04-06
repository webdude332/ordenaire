import React, { ReactNode, SVGProps } from 'react';

interface StatCardAltProps {
    title: string;
    value: ReactNode;
    trend?: string;
    trendText?: string;
    trendType?: 'positive' | 'negative';
    trendIcon?: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    coloredValue?: boolean; // NEW: Enable colored value based on trendType
}

const StatCardAlt = ({
    title,
    value,
    trend,
    trendText,
    trendType = 'positive',
    trendIcon: TrendIcon,
    coloredValue = false, // NEW: Default false for backward compatibility
}: StatCardAltProps) => {
    const isPositive = trendType === 'positive';

    // NEW: Determine value color
    const valueColorClass = coloredValue
        ? isPositive
            ? 'text-green-600'
            : 'text-[#B45309]' // or 'text-red-500' if you prefer red
        : 'text-gray-900';

    return (
        <div className="bg-white px-6 py-3 transition-shadow">
            <p className="mb-3 text-sm font-semibold text-gray-600">{title}</p>

            {/* Value with conditional coloring */}
            <div className={`mb-3 text-xl font-semibold ${valueColorClass}`}>
                {value}
            </div>

            {trend && (
                <div className="flex items-center gap-1.5">
                    {TrendIcon && (
                        <TrendIcon className="h-3.5 w-3.5 flex-shrink-0" />
                    )}
                    <span
                        className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-500'}`}
                    >
                        {trend}
                    </span>
                    {trendText && (
                        <span className="text-sm text-gray-500">
                            {trendText}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default StatCardAlt;
