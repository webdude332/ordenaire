// components/OrderSummaryBar.tsx
export default function OrderSummaryBar() {
    return (
        <div className="flex flex-col px-4 py-4">
            {/* Horizontal Stacked Bar */}
            <div className="mb-10 flex h-14 w-full overflow-hidden rounded-md">
                <div
                    className="bg-[#79B800] transition-all duration-500"
                    style={{ width: '80%' }}
                ></div>
                <div
                    className="bg-[#EF4444] transition-all duration-500"
                    style={{ width: '16%' }}
                ></div>
                <div
                    className="bg-[#F59E0B] transition-all duration-500"
                    style={{ width: '4%' }}
                ></div>
            </div>

            {/* Stacked Bar Legend */}
            <div className="flex flex-wrap items-center justify-around gap-4 px-2 sm:px-10">
                <div className="text-center">
                    <p className="mb-1 flex items-center justify-center gap-2 text-xs font-medium text-gray-500 sm:text-sm">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#79B800]"></span>
                        Completed (80%)
                    </p>
                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                        32,880
                    </p>
                </div>
                <div className="text-center">
                    <p className="mb-1 flex items-center justify-center gap-2 text-xs font-medium text-gray-500 sm:text-sm">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]"></span>
                        Cancelled (16%)
                    </p>
                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                        8,768
                    </p>
                </div>
                <div className="text-center">
                    <p className="mb-1 flex items-center justify-center gap-2 text-xs font-medium text-gray-500 sm:text-sm">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]"></span>
                        Refunded (4%)
                    </p>
                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                        2,740
                    </p>
                </div>
            </div>
        </div>
    );
}
