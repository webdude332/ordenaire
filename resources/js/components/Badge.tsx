import React from 'react';

export type BadgeVariant =
    | 'success'
    | 'warning'
    | 'error'
    | 'blue'
    | 'purple'
    | 'gray'
    | 'active'
    | 'inactive'
    | 'archived';

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    withDot?: boolean;
    className?: string;
    rounded?: 'full' | 'lg' | 'md' | 'sm'; // <--- Add this
}

export default function Badge({
    children,
    variant = 'gray',
    withDot = false,
    className = '',
    rounded = 'full', // <--- Set default
}: BadgeProps) {
    // Map prop to class
    const roundnessClass = {
        full: 'rounded-full',
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
    }[rounded];
    const styles: Record<BadgeVariant, string> = {
        success: 'bg-[#ECFDF3] border-[#ABEFC6] text-[#067647]', // active
        warning: 'bg-[#FEF6EE] border-[#F9DBAF] text-[#B93815]', // warning
        error: 'bg-[#FEF3F2] border-[#FECDCA] text-[#B42318]', // dander
        blue: 'bg-[#EFF8FF] border-[#B2DDFF] text-[#175CD3]', // (Pro Plan)
        purple: 'bg-[#F4F3FF] border-[#D9D6FE] text-[#5925DC]', // (Enterprise)
        gray: 'bg-[#F9F7FA] border-[#E8E6EA] text-[#696170]', // (Standard)
        active: 'bg-white border-[#CFCBD2] text-gray-500', // active
        inactive: 'bg-white borde-[#CFCBD2] text-gray-500', // inactive
        archived: 'bg-white border-[#CFCBD2] text-gray-500', // archive
    };

    // Dot Colors
    const dotStyles: Record<BadgeVariant, string> = {
        success: 'bg-[#17B26A]',
        warning: 'bg-[#EF6820]',
        error: 'bg-[#F04438]',
        blue: 'bg-[#2E90FA]',
        purple: 'bg-[#9E77ED]',
        gray: 'bg-[#9C94A3]',
        active: 'bg-[#17B26A]',
        inactive: 'bg-red-800',
        archived: 'bg-[#F04438]',
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 ${roundnessClass} border px-2.5 py-0.5 text-xs font-medium ${styles[variant]} ${className} `}
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
