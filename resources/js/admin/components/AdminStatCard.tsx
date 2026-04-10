import { ReactNode } from 'react';

interface AdminStatCardProps {
    title: string;
    value: ReactNode;
    iconBg: string;
    iconBorderColor: string;
    icon: ReactNode;
}

export default function AdminStatCard({
    title,
    value,
    iconBg,
    iconBorderColor,
    icon,
}: AdminStatCardProps) {
    return (
        <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
            <div
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border"
                style={{
                    backgroundColor: iconBg,
                    borderColor: iconBorderColor,
                }}
            >
                {icon}
            </div>
            <div>
                <p className="text-xs font-medium text-gray-500">{title}</p>
                <div className="text-xl font-bold text-gray-900">{value}</div>
            </div>
        </div>
    );
}
