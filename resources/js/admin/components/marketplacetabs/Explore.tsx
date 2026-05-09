// File: admin/components/marketplacetabs/Explore.tsx
import { useState } from 'react';
import AppsCard, { AppData } from '../AppsCard'; // Make sure the path is correct

// Assuming you've already defined these placeholder icons
import AnalyticsIcon from '@/shared/images/icons/analytics.svg?react'; // Use your own
import Emp from '@/shared/images/icons/empsheduling.svg?react';
import inputSearch from '@/shared/images/icons/inputSearch.svg';
import InventoryIcon from '@/shared/images/icons/inventory.svg?react'; // Use your own
import Loyalty from '@/shared/images/icons/loyalty.svg?react'; // Use your own
import PaymentsIcon from '@/shared/images/icons/payments.svg?react'; // Use your own
import TableRes from '@/shared/images/icons/tablereservations.svg?react'; // Use your own
import { Input } from '@/shared/sharedcomponents/ui/FormElements';

// Example application data array, populated based on design
const appsData: AppData[] = [
    {
        icon: <Emp className="h-16 w-16" />, // Replace with your actual icon component
        title: 'Employee Scheduling',
        provider: 'Global Tech Solutions',
        description:
            'Create and manage staff schedules to optimize labor costs.',
        features: [
            'Syncs orders in real-time',
            'Automated refund handling',
            'Advanced reporting',
        ],
        price: '5.000 KWD',
        pricingTerm: 'per month',
        isInstalled: false,
    },
    {
        icon: <Loyalty className="h-16 w-16" />, // Placeholder
        title: 'Customer Loyalty Programs',
        provider: 'Ordinaire',
        description: 'Reward repeat customers with tailored loyalty programs.',
        features: [
            'Syncs orders in real-time',
            'Automated refund handling',
            'Points management',
        ],
        price: 'Free',
        pricingTerm: null,
        isInstalled: false,
    },
    {
        icon: <InventoryIcon className="h-16 w-16" />, // Placeholder
        title: 'Inventory Management',
        provider: 'Ordinaire',
        description:
            'Track stock levels in real time and manage your inventory efficiently from one central place. Monitor item availability, reduce...',
        features: [
            'Syncs orders in real-time',
            'Automated refund handling',
            'Stock tracking',
        ],
        price: null, // No price needed when installed
        pricingTerm: null,
        isInstalled: true, // This app is installed
    },
    {
        icon: <Emp className="h-16 w-16" />, // Placeholder reuse
        title: 'Inventory sync',
        provider: 'Ordinaire',
        description:
            'Enable customers to place orders online for pickup or delivery.',
        features: [
            'Syncs orders in real-time',
            'Automated refund handling',
            'Stock synchronization',
        ],
        price: '5.000 KWD',
        pricingTerm: 'One-time',
        isInstalled: false,
    },
    {
        icon: <TableRes className="h-16 w-16" />, // Placeholder
        title: 'Table Reservations',
        provider: 'Ficos',
        description:
            'Allow customers to reserve tables directly from your website with a seamless booking experience. Reduce manual calls, manage...',
        features: [
            'Syncs orders in real-time',
            'Automated refund handling',
            'Booking management',
        ],
        price: 'Free',
        pricingTerm: null,
        isInstalled: false,
    },
    {
        icon: <AnalyticsIcon className="h-16 w-16" />, // Placeholder
        title: 'Analytics and Reporting',
        provider: 'Ficos',
        description:
            'Allow customers to reserve tables directly from your website with a seamless booking experience. Reduce manual calls, manage...',
        features: [
            'Syncs orders in real-time',
            'Automated refund handling',
            'Insightful dashboards',
        ],
        price: '5.000 KWD',
        pricingTerm: 'per year',
        isInstalled: false,
    },
    {
        icon: <PaymentsIcon className="h-16 w-16" />, // Placeholder
        title: 'Payment Processing',
        provider: 'Ficos',
        description:
            'Allow customers to reserve tables directly from your website with a seamless booking experience. Reduce manual calls, manage...',
        features: [
            'Syncs orders in real-time',
            'Automated refund handling',
            'Secure transactions',
        ],
        price: '5.000 KWD',
        pricingTerm: 'per year',
        isInstalled: false,
    },
];

const categories = [
    'All apps',
    'Marketing',
    'Finance',
    'Analytics',
    'Delivery',
];

export default function Explore() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All apps');

    // Simple filtering based on category
    const filteredApps = appsData.filter((app) => {
        if (activeCategory === 'All apps') return true;
        // Basic illustrative category matching. You might need better data for this.
        return (
            app.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
            app.provider.toLowerCase().includes(activeCategory.toLowerCase())
        );
    });

    return (
        <div className="flex flex-1 flex-col gap-10">
            {/**Filter bar and Search */}
            <div className="flex items-center justify-between gap-10">
                <div className="inline-flex rounded-xl bg-gray-50 p-1">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                activeCategory === category
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <Input icon={inputSearch} placeholder="Search" />
                </div>
            </div>

            {/** Grid of App Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {filteredApps.map((app, index) => (
                    <AppsCard key={index} {...app} />
                ))}
            </div>
        </div>
    );
}
