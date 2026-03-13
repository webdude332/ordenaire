import React, { SVGProps } from 'react';

interface IconCardProps {
    icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    title: string;
    value: string;
    trendIcon?: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    trendValue?: string; 
    trendType?: 'positive' | 'negative' | 'neutral'; // New prop for colors
    description?: string; 
}

export const IconCard: React.FC<IconCardProps> = ({
    icon: Icon,
    title,
    value,
    trendValue,
    trendType = 'positive',
    trendIcon: TrendIcon,

    description
}) => {
    const trendColorClass = 
        trendType === 'positive' ? 'text-green-600' : 
        trendType === 'negative' ? 'text-red-600' : 
        'text-gray-500';
    return (
        <div className="flex items-start gap-4 rounded-xl border border-borderColor p-5 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
                <Icon className="h-6 w-6 text-gray-600" />
            </div>
            <div className=''>
                <p className="text-sm font-semibold text-gray-500">
                    {title}
                </p>
                <p className="text-xl font-semibold text-gray-900 mt-3">
                    {value}
                </p>
                {/**dfsdfsd */}
                {(trendValue || description) && (
                    <div className="mt-3 flex items-center gap-1.5 text-sm font-medium ">
                        
                        {(TrendIcon || trendValue) && (
                            <span className={`flex items-center gap-1 font-medium ${trendColorClass}`}>
                                {TrendIcon && <TrendIcon className="h-4 w-4" />}
                                {trendValue}
                            </span>
                        )}
                        {description && (
                            <span className="text-gray-500 ">
                                {description}
                            </span>
                        )}
                        
                    </div>
                )}
            </div>
        </div>
    );
};