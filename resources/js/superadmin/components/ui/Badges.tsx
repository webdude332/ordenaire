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
    | 'archived'
    | 'failed'
    // Added new variants to match your image
    | 'low'
    | 'medium'
    | 'high'
    | 'status-open'
    | 'status-progress'
    | 'status-resolved';

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    withDot?: boolean;
    className?: string;
    rounded?: 'full' | 'lg' | 'md' | 'sm';
}

export default function Badge({
    children,
    variant = 'gray',
    withDot = false,
    className = '',
    rounded = 'full',
}: BadgeProps) {
    const roundnessClass = {
        full: 'rounded-full',
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
    }[rounded];

    // Updated Styles mapping
    const styles: Record<BadgeVariant, string> = {
        success: 'bg-[#ECFDF3] border-[#ABEFC6] text-[#067647]',
        warning: 'bg-[#FEF6EE] border-[#F9DBAF] text-[#B93815]',
        error: 'bg-[#FEF3F2] border-[#FECDCA] text-[#B42318]',
        blue: 'bg-[#EFF8FF] border-[#B2DDFF] text-[#175CD3]',
        purple: 'bg-[#F4F3FF] border-[#D9D6FE] text-[#5925DC]',
        gray: 'bg-[#F9F7FA] border-[#E8E6EA] text-[#696170]',
        active: 'bg-white border-[#CFCBD2] text-gray-500',
        inactive: 'bg-white border-[#CFCBD2] text-gray-500', // Fixed typo "borde"
        archived: 'bg-white border-[#CFCBD2] text-gray-500',
        failed: 'bg-white border-[#CFCBD2] text-gray-500',
        
        // --- NEW STYLES FOR YOUR IMAGE ---
        
        // Priorities (Colored background, colored text, colored border)
        low: 'bg-[#F0F9FF] border-[#B9E6FE] text-[#026AA2]',     // Light blue
        medium: 'bg-[#FFFAEB] border-[#FEDF89] text-[#B54708]', // Light orange
        high: 'bg-[#FEF3F2] border-[#FECDCA] text-[#B42318]',    // Light red
        
        // Statuses (White background, gray text, gray border)
        'status-open': 'bg-white border-[#D0D5DD] text-[#344054]',
        'status-progress': 'bg-white border-[#D0D5DD] text-[#344054]',
        'status-resolved': 'bg-white border-[#D0D5DD] text-[#344054]',
    };

    // Updated Dot Colors mapping
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
        failed: 'bg-[#F04438]',
        
        // --- NEW DOT STYLES FOR YOUR IMAGE ---
        low: 'bg-[#0BA5EC]',          // Blue dot
        medium: 'bg-[#F79009]',       // Orange dot
        high: 'bg-[#F04438]',         // Red dot
        'status-open': 'bg-[#F79009]',     // Orange dot
        'status-progress': 'bg-[#2E90FA]', // Blue dot
        'status-resolved': 'bg-[#12B76A]', // Green dot
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 ${roundnessClass} border px-2.5 py-0.5 text-[13px] font-medium ${styles[variant]} ${className}`}
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