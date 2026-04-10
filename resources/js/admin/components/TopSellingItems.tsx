const items = [
    {
        name: 'Grilled Lemon Herb Chicken',
        category: 'Main course',
        orders: 72,
        price: 'KWD 3.000',
        color: '#F59E0B',
    },
    {
        name: 'Creamy Avocado Toast',
        category: 'Breakfast',
        orders: 42,
        price: 'KWD 3.200',
        color: '#10B981',
    },
    {
        name: 'Wild Mushroom Risotto',
        category: 'Vegetarian',
        orders: 15,
        price: 'KWD 3.200',
        color: '#8B5CF6',
    },
    {
        name: 'Zesty Shrimp Tacos',
        category: 'Seafood',
        orders: 12,
        price: 'KWD 2.000',
        color: '#EF4444',
    },
    {
        name: 'Chocolate Lava Cake',
        category: 'Dessert',
        orders: 10,
        price: 'KWD 2.200',
        color: '#F97316',
    },
];

export default function TopSellingItems() {
    return (
        <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-xs">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <h3 className="text-sm font-semibold text-gray-900">
                    Top Selling Items
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                    </svg>
                </button>
            </div>

            {/* List */}
            <div className="divide-y divide-gray-50 px-5">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between py-4"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                                style={{ backgroundColor: item.color }}
                            >
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    {item.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {item.category}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">
                                {item.orders} orders
                            </p>
                            <p className="text-xs text-gray-400">
                                {item.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
