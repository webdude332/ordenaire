const StatusBadge = ({ status }: { status: string }) => {
    const dotColors: Record<string, string> = {
        Scheduled: 'bg-pink-500',
        Completed: 'bg-green-500',
        'In Progress': 'bg-blue-500',
        Pending: 'bg-orange-400',
        Sent: 'bg-green-500',
        Failed: 'bg-orange-500',
    };
    const dotColor = dotColors[status] || 'bg-gray-400';

    return (
        <span className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1 text-sm font-medium text-gray-600">
            <span className={`h-2 w-2 rounded-full ${dotColor}`} />
            {status}
        </span>
    );
};
export default StatusBadge;