// // export default function MyApps() {
// //     return <div>MyApps</div>;
// // }

// import AnalyticsIcon from '@/shared/images/icons/analytics.svg?react';
// import Emp from '@/shared/images/icons/empsheduling.svg?react';
// import inputSearch from '@/shared/images/icons/inputSearch.svg';
// import InventoryIcon from '@/shared/images/icons/inventory.svg?react';
// import Badge from '@/shared/sharedcomponents/ui/Badge';
// import { Input } from '@/shared/sharedcomponents/ui/FormElements';
// import React, { useState } from 'react';

// // ─── Types ───────────────────────────────────────────────────────────────────

// type AppStatus = 'active' | 'expiring' | 'expired';

// interface MyAppData {
//     icon: React.ReactNode;
//     title: string;
//     provider: string;
//     description: string;
//     features: string[];
//     status: AppStatus;
//     expiresLabel?: string; // e.g. "Expiring in 3 days"
// }

// // ─── Data ────────────────────────────────────────────────────────────────────

// const myAppsData: MyAppData[] = [
//     {
//         icon: <Emp className="h-16 w-16" />,
//         title: 'Employee Scheduling',
//         provider: 'Global Tech Solutions',
//         description:
//             'Create and manage staff schedules to optimize labor costs.',
//         features: [
//             'Syncs orders in real-time',
//             'Automated refund handling',
//             'Advanced reporting',
//         ],
//         status: 'active',
//     },
//     {
//         icon: <InventoryIcon className="h-16 w-16" />,
//         title: 'Customer Loyalty Programs',
//         provider: 'Ordinaire',
//         description: 'Reward repeat customers with tailored loyalty programs.',
//         features: [
//             'Syncs orders in real-time',
//             'Automated refund handling',
//             'Points management',
//         ],
//         status: 'expiring',
//         expiresLabel: 'Expiring in 3 days',
//     },
//     {
//         icon: <AnalyticsIcon className="h-16 w-16" />,
//         title: 'Inventory Management',
//         provider: 'Ordinaire',
//         description:
//             'Track stock levels in real time and manage your inventory efficiently from one central place. Monitor item availability, reduce...',
//         features: [
//             'Syncs orders in real-time',
//             'Automated refund handling',
//             'Stock tracking',
//         ],
//         status: 'expired',
//     },
// ];

// // ─── Sub-component ────────────────────────────────────────────────────────────

// function MyAppCard({
//     icon,
//     title,
//     provider,
//     description,
//     features,
//     status,
//     expiresLabel,
// }: MyAppData) {
//     const footerLeft = () => {
//         if (status === 'active') {
//             return (
//                 <Badge variant="success" withDot>
//                     Active
//                 </Badge>
//             );
//         }
//         if (status === 'expiring') {
//             return (
//                 <Badge variant="warning" withDot>
//                     {expiresLabel ?? 'Expiring soon'}
//                 </Badge>
//             );
//         }
//         return (
//             <Badge variant="error" withDot>
//                 Expired
//             </Badge>
//         );
//     };

//     const actionLabel = () => {
//         if (status === 'active') return 'Manage';
//         if (status === 'expiring') return 'Renew Now';
//         return 'Reactivate';
//     };

//     return (
//         <div className="flex h-full flex-col rounded-xl border border-borderColor bg-white p-4 shadow-xs">
//             {/* Header */}
//             <div className="mb-6 flex items-center gap-5">
//                 <div className="flex-shrink-0">{icon}</div>
//                 <div>
//                     <h1 className="text-xl font-semibold text-gray-900">
//                         {title}
//                     </h1>
//                     <p className="mt-1 text-base text-gray-500">
//                         By {provider}
//                     </p>
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="flex flex-grow flex-col gap-6">
//                 <p className="line-clamp-3 text-base leading-relaxed text-gray-800">
//                     {description}
//                 </p>
//                 <div className="space-y-4">
//                     <h2 className="text-lg font-bold text-gray-950">
//                         Key Features
//                     </h2>
//                     <ul className="list-outside list-disc space-y-1.5 pl-6 text-base text-gray-600">
//                         {features.map((f, i) => (
//                             <li key={i}>{f}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             {/* Footer */}
//             <div className="mt-6 flex items-center border-t border-borderColor pt-5">
//                 <div className="flex flex-1 items-center">{footerLeft()}</div>
//                 <div className="mx-4 h-5 w-px bg-borderColor" />
//                 <button className="flex-shrink-0 cursor-pointer text-base font-semibold text-primary transition hover:text-primary/80">
//                     {actionLabel()}
//                 </button>
//             </div>
//         </div>
//     );
// }

// // ─── Filter tabs ──────────────────────────────────────────────────────────────

// type FilterTab = 'All apps' | 'Active' | 'Expiring' | 'Expired';
// const tabs: FilterTab[] = ['All apps', 'Active', 'Expiring', 'Expired'];

// const statusMap: Record<FilterTab, AppStatus | null> = {
//     'All apps': null,
//     Active: 'active',
//     Expiring: 'expiring',
//     Expired: 'expired',
// };

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function MyApps() {
//     const [activeTab, setActiveTab] = useState<FilterTab>('All apps');
//     const [searchTerm, setSearchTerm] = useState('');

//     const filtered = myAppsData.filter((app) => {
//         const matchesTab =
//             activeTab === 'All apps' || app.status === statusMap[activeTab];
//         const matchesSearch =
//             !searchTerm ||
//             app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             app.provider.toLowerCase().includes(searchTerm.toLowerCase());
//         return matchesTab && matchesSearch;
//     });

//     return (
//         <div className="flex flex-1 flex-col gap-10">
//             {/* Filter bar + Search */}
//             <div className="flex items-center justify-between gap-10">
//                 <div className="inline-flex rounded-xl bg-gray-50 p-1">
//                     {tabs.map((tab) => (
//                         <button
//                             key={tab}
//                             onClick={() => setActiveTab(tab)}
//                             className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
//                                 activeTab === tab
//                                     ? 'bg-white text-slate-900 shadow-sm'
//                                     : 'text-slate-500 hover:text-slate-700'
//                             }`}
//                         >
//                             {tab}
//                         </button>
//                     ))}
//                 </div>
//                 <div className="relative">
//                     <Input
//                         icon={inputSearch}
//                         placeholder="Search"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//             </div>

//             {/* Grid */}
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
//                 {filtered.map((app, i) => (
//                     <MyAppCard key={i} {...app} />
//                 ))}
//             </div>
//         </div>
//     );
// }

//new

import AnalyticsIcon from '@/shared/images/icons/analytics.svg?react';
import Emp from '@/shared/images/icons/empsheduling.svg?react';
import inputSearch from '@/shared/images/icons/inputSearch.svg';
import InventoryIcon from '@/shared/images/icons/inventory.svg?react';
import Badge from '@/shared/sharedcomponents/ui/Badge';
import { Input } from '@/shared/sharedcomponents/ui/FormElements';
import { router } from '@inertiajs/react';
import React, { useState } from 'react';

type AppStatus = 'active' | 'expiring' | 'expired';

interface MyAppData {
    slug: string;
    icon: React.ReactNode;
    title: string;
    provider: string;
    description: string;
    features: string[];
    status: AppStatus;
    expiresLabel?: string;
}

const myAppsData: MyAppData[] = [
    {
        slug: 'employee-scheduling',
        icon: <Emp className="h-16 w-16" />,
        title: 'Employee Scheduling',
        provider: 'Global Tech Solutions',
        description:
            'Create and manage staff schedules to optimize labor costs.',
        features: [
            'Syncs orders in real-time',
            'Automated refund handling',
            'Advanced reporting',
        ],
        status: 'active',
    },
    {
        slug: 'customer-loyalty-programs',
        icon: <InventoryIcon className="h-16 w-16" />,
        title: 'Customer Loyalty Programs',
        provider: 'Ordinaire',
        description: 'Reward repeat customers with tailored loyalty programs.',
        features: [
            'Syncs orders in real-time',
            'Automated refund handling',
            'Points management',
        ],
        status: 'expiring',
        expiresLabel: 'Expiring in 3 days',
    },
    {
        slug: 'inventory-management',
        icon: <AnalyticsIcon className="h-16 w-16" />,
        title: 'Inventory Management',
        provider: 'Ordinaire',
        description:
            'Track stock levels in real time and manage your inventory efficiently from one central place. Monitor item availability, reduce...',
        features: [
            'Syncs orders in real-time',
            'Automated refund handling',
            'Stock tracking',
        ],
        status: 'expired',
    },
];

function MyAppCard({
    slug,
    icon,
    title,
    provider,
    description,
    features,
    status,
    expiresLabel,
}: MyAppData) {
    const handleAction = () => {
        if (status === 'active')
            router.visit(`/admin/marketplace/my-apps/${slug}/manage`);
        if (status === 'expiring')
            router.visit(`/admin/marketplace/my-apps/${slug}/renew`);
        if (status === 'expired')
            router.visit(`/admin/marketplace/my-apps/${slug}/reactivate`);
    };

    const footerLeft = () => {
        if (status === 'active')
            return (
                <Badge variant="success" withDot>
                    Active
                </Badge>
            );
        if (status === 'expiring')
            return (
                <Badge variant="warning" withDot>
                    {expiresLabel ?? 'Expiring soon'}
                </Badge>
            );
        return (
            <Badge variant="error" withDot>
                Expired
            </Badge>
        );
    };

    const actionLabel = () => {
        if (status === 'active') return 'Manage';
        if (status === 'expiring') return 'Renew Now';
        return 'Reactivate';
    };

    return (
        <div className="flex h-full flex-col rounded-xl border border-borderColor bg-white p-4 shadow-xs">
            {/* Header */}
            <div className="mb-6 flex items-center gap-5">
                <div className="flex-shrink-0">{icon}</div>
                <div>
                    <h1 className="text-xl font-semibold text-gray-900">
                        {title}
                    </h1>
                    <p className="mt-1 text-base text-gray-500">
                        By {provider}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-grow flex-col gap-6">
                <p className="line-clamp-3 text-base leading-relaxed text-gray-800">
                    {description}
                </p>
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-gray-950">
                        Key Features
                    </h2>
                    <ul className="list-outside list-disc space-y-1.5 pl-6 text-base text-gray-600">
                        {features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center border-t border-borderColor pt-5">
                <div className="flex flex-1 items-center">{footerLeft()}</div>
                <div className="mx-4 h-5 w-px bg-borderColor" />
                <button
                    onClick={handleAction}
                    className="flex-shrink-0 cursor-pointer text-base font-semibold text-primary transition hover:text-primary/80"
                >
                    {actionLabel()}
                </button>
            </div>
        </div>
    );
}

type FilterTab = 'All apps' | 'Active' | 'Expiring' | 'Expired';
const tabs: FilterTab[] = ['All apps', 'Active', 'Expiring', 'Expired'];
const statusMap: Record<FilterTab, AppStatus | null> = {
    'All apps': null,
    Active: 'active',
    Expiring: 'expiring',
    Expired: 'expired',
};

export default function MyApps() {
    const [activeTab, setActiveTab] = useState<FilterTab>('All apps');
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = myAppsData.filter((app) => {
        const matchesTab =
            activeTab === 'All apps' || app.status === statusMap[activeTab];
        const matchesSearch =
            !searchTerm ||
            app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.provider.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="flex flex-1 flex-col gap-10">
            {/* Filter bar + Search */}
            <div className="flex items-center justify-between gap-10">
                <div className="inline-flex rounded-xl bg-gray-50 p-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === tab
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="relative">
                    <Input
                        icon={inputSearch}
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {filtered.map((app, i) => (
                    <MyAppCard key={i} {...app} />
                ))}
            </div>
        </div>
    );
}
