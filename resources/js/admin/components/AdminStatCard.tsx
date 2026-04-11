import { ReactNode } from 'react';

interface AdminStatCardProps {
    title: string;
    value: ReactNode;
    ringColor: string;
    iconColor?: string;
    icon: ReactNode;
}

export default function AdminStatCard({
    title,
    value,
    ringColor,
    iconColor = '#4B5563',
    icon,
}: AdminStatCardProps) {
    return (
        <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* OUTER FRAME: The colored ring */}
            <div
                className="flex items-center justify-center rounded-2xl border-[2px] p-1"
                style={{ borderColor: ringColor }}
            >
                {/* INNER BOX: White background with the 3D drop shadow */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-borderColor bg-white shadow-md">
                    <span style={{ color: iconColor }}>{icon}</span>
                </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-600">{title}</p>
                <div className="text-xl font-semibold text-gray-900">
                    {value}
                </div>
            </div>
        </div>
    );
}
