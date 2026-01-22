import React from 'react';

const BusinessStatusBadge = ({ status }: { status: string }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'border-[#ABEFC6] bg-[#ECFDF3] text-[#067647]';
            case 'Expired':
                return 'border-[#FDBA74] bg-[#FFF7ED] text-[#C2410C]';
            case 'Archived':
                return 'border-[#D1D5DB] bg-[#F3F4F6] text-[#6B7280]';
            default:
                return 'border-gray-200 bg-gray-100 text-gray-600';
        }
    };

    const getStatusDot = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-[#067647]';
            case 'Expired':
                return 'bg-[#C2410C]';
            case 'Archived':
                return 'bg-[#6B7280]';
            default:
                return 'bg-gray-400';
        }
    };

    return (
        <span
            className={`inline-flex items-center rounded-lg border px-2 py-0.5 text-sm font-medium ${getStatusColor(
                status
            )}`}
        >
            <span
                className={`mr-1.5 h-2 w-2 rounded-lg ${getStatusDot(status)}`}
            ></span>
            {status}
        </span>
    );
};

export default BusinessStatusBadge;