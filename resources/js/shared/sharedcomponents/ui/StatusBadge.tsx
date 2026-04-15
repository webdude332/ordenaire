// const StatusBadge = ({ status }: { status: string }) => {
//     const dotColors: Record<string, string> = {
//         Scheduled: 'bg-pink-500',
//         Completed: 'bg-green-500',
//         'In Progress': 'bg-blue-500',
//         Pending: 'bg-orange-400',
//         Sent: 'bg-green-500',
//         Failed: 'bg-orange-500',
//     };
//     const dotColor = dotColors[status] || 'bg-gray-400';

//     return (
//         <span className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1 text-sm font-medium text-gray-600">
//             <span className={`h-2 w-2 rounded-full ${dotColor}`} />
//             {status}
//         </span>
//     );
// };
// export default StatusBadge;

// We keep the original requirement (status: string) so nothing breaks,
// but we add the new props as OPTIONAL (?) so you can use them in the future.
interface StatusBadgeProps {
    status: string;
    withDot?: boolean;
    className?: string;
    rounded?: 'full' | 'lg' | 'md' | 'sm';
}

const StatusBadge = ({
    status,
    withDot = true, // Defaults to true to maintain your old design
    className = '',
    rounded = 'lg', // Defaults to 'lg' to maintain your old design
}: StatusBadgeProps) => {
    // Map prop to class exactly like Badge.tsx
    // 1. Define the map separately
    const roundnessMap = {
        full: 'rounded-full',
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
    };

    // 2. Then pick the value based on the prop
    const roundnessClass = roundnessMap[rounded] || 'rounded-lg';

    // ─── STATUS STYLES ───
    // If a status matches, it gets the specific styling.
    // If a random string is passed, it safely falls back to the default gray.
    const styles: Record<string, string> = {
        Scheduled: 'bg-white border-gray-300 text-gray-700',
        Completed: 'bg-white border-gray-300 text-gray-700',
        'In Progress': 'bg-white border-gray-300 text-gray-700',
        Pending: 'bg-white border-gray-300 text-gray-700',
        Sent: 'bg-white border-gray-300 text-gray-700',
        Failed: 'bg-white border-gray-300 text-gray-700',
    };

    // ─── DOT COLORS ───
    // Uses your exact old colors, but formatted cleanly
    const dotColors: Record<string, string> = {
        Scheduled: 'bg-pink-500',
        Completed: 'bg-green-500',
        'In Progress': 'bg-blue-500',
        Pending: 'bg-orange-400',
        Sent: 'bg-green-500',
        Failed: 'bg-orange-500',
    };

    // Safe fallbacks so the app never crashes on an unknown status
    const currentStyle =
        styles[status] || 'bg-white border-[#E5E7EB] text-gray-600';
    const currentDot = dotColors[status] || 'bg-gray-400';

    return (
        <span
            // Uses the exact sizing and spacing from your Badge.tsx file
            className={`inline-flex items-center gap-1.5 ${roundnessClass} border px-2.5 py-0.5 text-xs font-medium ${currentStyle} ${className}`}
        >
            {withDot && (
                <span
                    // Uses the exact dot sizing from your Badge.tsx file
                    className={`h-1.5 w-1.5 rounded-full ${currentDot}`}
                />
            )}
            {status}
        </span>
    );
};

export default StatusBadge;
