// import AnalyticsIcon from '@/shared/images/icons/analytics.svg?react';
// import Emp from '@/shared/images/icons/empsheduling.svg?react';
// import InventoryIcon from '@/shared/images/icons/inventory.svg?react';
// import TableRes from '@/shared/images/icons/tablereservations.svg?react';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';
// import AppsCard, { AppData } from '../components/AppsCard';

// // These would come from props/router in real usage
// const app = {
//     icon: <Emp className="h-16 w-16" />,
//     title: 'Employee Scheduling',
//     provider: 'Ordinaire',
//     providerUrl: '#',
//     description:
//         'Develop and oversee staff schedules that not only enhance operational efficiency but also effectively reduce labor costs. This involves analyzing peak hours, employee availability, and task requirements to ensure that the right number of staff is present at the right times.',
//     features: [
//         'Syncs orders in real-time',
//         'Automated refund handling',
//         'Automated refund handling',
//     ],
//     price: 'KWD 5.000',
//     pricingTerm: 'per month (14-day free trial)',
// };

// const otherAddons: AppData[] = [
//     {
//         icon: <InventoryIcon className="h-16 w-16" />,
//         title: 'Inventory sync',
//         provider: 'Ordinaire',
//         description:
//             'Enable customers to place orders online for pickup or delivery.',
//         features: [
//             'Syncs orders in real-time',
//             'Automated refund handling',
//             'Stock synchronization',
//         ],
//         price: '5.000 KWD',
//         pricingTerm: 'One-time',
//         isInstalled: false,
//     },
//     {
//         icon: <TableRes className="h-16 w-16" />,
//         title: 'Table Reservations',
//         provider: 'Ficos',
//         description:
//             'Allow customers to reserve tables directly from your website with a seamless booking experience. Reduce manual calls, manage...',
//         features: [
//             'Syncs orders in real-time',
//             'Automated refund handling',
//             'Booking management',
//         ],
//         price: 'Free',
//         pricingTerm: null,
//         isInstalled: false,
//     },
//     {
//         icon: <AnalyticsIcon className="h-16 w-16" />,
//         title: 'Analytics and Reporting',
//         provider: 'Ficos',
//         description:
//             'Allow customers to reserve tables directly from your website with a seamless booking experience. Reduce manual calls, manage...',
//         features: [
//             'Syncs orders in real-time',
//             'Automated refund handling',
//             'Insightful dashboards',
//         ],
//         price: '5.000 KWD',
//         pricingTerm: 'per year',
//         isInstalled: false,
//     },
// ];

// export default function AppOverview() {
//     return (
//         <div className="flex flex-1 flex-col gap-6">
//             {/* Back button */}
//             <div>
//                 <IconButton href="/marketplace/explore">
//                     <svg
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                         />
//                     </svg>
//                     Back to Explore
//                 </IconButton>
//             </div>

//             {/* App detail card */}
//             <div className="rounded-xl border border-borderColor bg-white p-6 shadow-xs">
//                 {/* Header */}
//                 <div className="mb-6 flex items-center gap-5">
//                     <div className="flex-shrink-0">{app.icon}</div>
//                     <div>
//                         <h1 className="text-xl font-semibold text-gray-900">
//                             {app.title}
//                         </h1>
//                         <p className="mt-1 flex items-center gap-1.5 text-base text-gray-500">
//                             By {app.provider}
//                             <a
//                                 href={app.providerUrl}
//                                 className="text-gray-400 transition-colors hover:text-gray-600"
//                             >
//                                 <svg
//                                     className="h-4 w-4"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                                     />
//                                 </svg>
//                             </a>
//                         </p>
//                     </div>
//                 </div>

//                 {/* Description */}
//                 <p className="mb-6 text-base leading-relaxed text-gray-700">
//                     {app.description}
//                 </p>

//                 {/* Features */}
//                 <div className="mb-8">
//                     <h2 className="mb-3 text-base font-semibold text-gray-900">
//                         Key Features
//                     </h2>
//                     <ul className="list-outside list-disc space-y-1.5 pl-6 text-base text-gray-600">
//                         {app.features.map((f, i) => (
//                             <li key={i}>{f}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Footer bar */}
//                 <div className="flex items-center justify-between border-t border-borderColor pt-5">
//                     <IconButton>
//                         {/* Calendar icon */}
//                         <svg
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth={2}
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                             />
//                         </svg>
//                         Book Demo
//                     </IconButton>

//                     <div className="flex items-center gap-6">
//                         <div className="text-right">
//                             <span className="text-3xl font-bold text-gray-900">
//                                 {app.price}
//                             </span>
//                             <span className="ml-2 text-base text-gray-500">
//                                 · {app.pricingTerm}
//                             </span>
//                         </div>
//                         <Button href="/marketplace/explore/employee-scheduling/install">
//                             Install App
//                             {/* Lightning icon */}
//                             <svg
//                                 className="h-4 w-4"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M13 10V3L4 14h7v7l9-11h-7z"
//                                 />
//                             </svg>
//                         </Button>
//                     </div>
//                 </div>
//             </div>

//             {/* Other Add-ons */}
//             <div>
//                 <h2 className="mb-5 text-xl font-semibold text-gray-900">
//                     Other Add-ons
//                 </h2>
//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
//                     {otherAddons.map((addon, i) => (
//                         <AppsCard key={i} {...addon} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

//new

import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import AnalyticsIcon from '@/shared/images/icons/analytics.svg?react';
import marketplaceIcon from '@/shared/images/icons/dashBaordSvg.svg';
import Emp from '@/shared/images/icons/empsheduling.svg?react';
import InventoryIcon from '@/shared/images/icons/inventory.svg?react';
import TableRes from '@/shared/images/icons/tablereservations.svg?react';
import Button from '@/shared/sharedcomponents/ui/Button';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import { useState } from 'react';
import AppsCard, { AppData } from '../components/AppsCard';

const app = {
    icon: <Emp className="h-16 w-16" />,
    title: 'Employee Scheduling',
    provider: 'Ordinaire',
    providerUrl: '#',
    description:
        'Develop and oversee staff schedules that not only enhance operational efficiency but also effectively reduce labor costs. This involves analyzing peak hours, employee availability, and task requirements to ensure that the right number of staff is present at the right times.',
    features: [
        'Syncs orders in real-time',
        'Automated refund handling',
        'Automated refund handling',
    ],
    price: 'KWD 5.000',
    pricingTerm: 'per month (14-day free trial)',
};

const otherAddons: AppData[] = [
    {
        slug: 'inventory-sync',
        icon: <InventoryIcon className="h-16 w-16" />,
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
        slug: 'table-reservations',
        icon: <TableRes className="h-16 w-16" />,
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
        slug: 'analytics-and-reporting',
        icon: <AnalyticsIcon className="h-16 w-16" />,
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
];

export default function AppOverview() {
    const [notifOpen, setNotifOpen] = useState(false);

    const breadcrumbs = [
        { label: 'Marketplace', href: '/admin/marketplace', isActive: false },
        { label: 'Explore', href: '/admin/marketplace', isActive: false },
        { label: 'App Overview', isActive: true },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="App Overview"
                    icon={marketplaceIcon}
                    breadcrumbs={breadcrumbs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    <div className="flex flex-1 flex-col gap-6">
                        {/* Back button */}
                        <div className="w-[200px]">
                            <IconButton href="/admin/marketplace">
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                Back to Explore
                            </IconButton>
                        </div>

                        {/* App detail card */}
                        <div className="rounded-xl border border-borderColor bg-white p-6 shadow-xs">
                            <div className="mb-6 flex items-center gap-5">
                                <div className="flex-shrink-0">{app.icon}</div>
                                <div>
                                    <h1 className="text-xl font-semibold text-gray-900">
                                        {app.title}
                                    </h1>
                                    <p className="mt-1 flex items-center gap-1.5 text-base text-gray-500">
                                        By {app.provider}
                                        <a
                                            href={app.providerUrl}
                                            className="text-gray-400 transition-colors hover:text-gray-600"
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <p className="mb-6 text-base leading-relaxed text-gray-700">
                                {app.description}
                            </p>

                            <div className="mb-8">
                                <h2 className="mb-3 text-base font-semibold text-gray-900">
                                    Key Features
                                </h2>
                                <ul className="list-outside list-disc space-y-1.5 pl-6 text-base text-gray-600">
                                    {app.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center justify-between border-t border-borderColor pt-5">
                                <IconButton>
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    Book Demo
                                </IconButton>

                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <span className="text-3xl font-bold text-gray-900">
                                            {app.price}
                                        </span>
                                        <span className="ml-2 text-base text-gray-500">
                                            · {app.pricingTerm}
                                        </span>
                                    </div>
                                    <Button href="/admin/marketplace/explore/employee-scheduling/install">
                                        Install App
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Other Add-ons */}
                        <div>
                            <h2 className="mb-5 text-xl font-semibold text-gray-900">
                                Other Add-ons
                            </h2>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {otherAddons.map((addon, i) => (
                                    <AppsCard key={i} {...addon} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
}
