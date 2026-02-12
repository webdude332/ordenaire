import React from 'react';

export type BadgeVariant =
    | 'success'
    | 'warning'
    | 'error'
    | 'blue'
    | 'purple'
    | 'gray';

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    withDot?: boolean;
    className?: string;
}

export default function Badge({
    children,
    variant = 'gray',
    withDot = false,
    className = '',
}: BadgeProps) {
    const styles: Record<BadgeVariant, string> = {
        success: 'bg-[#ECFDF3] border-[#ABEFC6] text-[#067647]', // active
        warning: 'bg-[#FEF6EE] border-[#F9DBAF] text-[#B93815]', // warning
        error: 'bg-[#FEF3F2] border-transparent text-[#B42318]', // dander
        blue: 'bg-[#EFF8FF] border-[#B2DDFF] text-[#175CD3]', // (Pro Plan)
        purple: 'bg-[#F4F3FF] border-[#D9D6FE] text-[#5925DC]', // (Enterprise)
        gray: 'bg-[#F9F7FA] border-[#E8E6EA] text-[#696170]', // (Standard)
    };

    // Dot Colors
    const dotStyles: Record<BadgeVariant, string> = {
        success: 'bg-[#17B26A]',
        warning: 'bg-[#EF6820]',
        error: 'bg-[#F04438]',
        blue: 'bg-[#2E90FA]',
        purple: 'bg-[#9E77ED]',
        gray: 'bg-[#9C94A3]',
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[variant]} ${className} `}
        >
            {withDot && (
                <span
                    className={`h-1.5 w-1.5 rounded-full ${dotStyles[variant]}`}
                />
            )}
            {children}
        </span>
    );
}
