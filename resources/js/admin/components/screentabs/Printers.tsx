import EditIcon from '@/shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';
import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
import Button from '@/shared/sharedcomponents/ui/Button';

// Inline SVG for the Printer Icon
const PrinterIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        />
    </svg>
);

export default function Printers() {
    const statusVariantMap: Record<string, BadgeVariant> = {
        Online: 'success',
        Offline: 'error',
    };

    const printerData = [
        {
            id: 1,
            title: 'Hot Kitchen Thermal',
            status: 'Online',
            assignment: 'Orders • Hot Kitchen',
            network: '192.168.0.105 : 9100',
            hardware: 'Epson TM-T88V',
        },
        {
            id: 2,
            title: 'Kitchen Thermal',
            status: 'Online',
            assignment: 'Orders • Hot Kitchen, +1',
            network: '192.168.0.105 : 9100',
            hardware: 'Epson TM-T88V',
        },
        {
            id: 3,
            title: 'Cashier Receipt',
            status: 'Offline',
            assignment: 'Customer Receipts',
            network: '192.168.0.106 : 9100',
            hardware: 'Star TSP100',
        },
    ];

    return (
        <div className="w-full">
            {/** Header & Button */}
            <div className="mb-6 flex items-center justify-end">
                <Button>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Add Printer
                </Button>
            </div>

            {/** Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {printerData.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col overflow-hidden rounded-xl border border-borderColor bg-white shadow-sm"
                    >
                        {/* Card Content */}
                        <div className="flex-1 p-6">
                            <h2 className="mb-5 text-lg font-semibold text-gray-900">
                                {item.title}
                            </h2>

                            <div className="flex flex-col space-y-3">
                                {/* Status Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Status
                                    </span>
                                    <Badge
                                        variant={
                                            statusVariantMap[item.status] ||
                                            'gray'
                                        }
                                        withDot={true}
                                        rounded="md"
                                    >
                                        {item.status}
                                    </Badge>
                                </div>

                                {/* Assignment Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Assignment
                                    </span>
                                    <span className="text-sm font-medium text-gray-800">
                                        {item.assignment}
                                    </span>
                                </div>

                                {/* Network Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Network
                                    </span>
                                    <span className="text-sm font-medium text-gray-800">
                                        {item.network}
                                    </span>
                                </div>

                                {/* Hardware Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Hardware
                                    </span>
                                    <span className="text-sm font-medium text-gray-800">
                                        {item.hardware}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
                            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                <PrinterIcon className="h-4 w-4" />
                                Test Print
                            </button>
                            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                <EditIcon className="h-4 w-4 text-iconColor" />
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
