// import SidePannel from '@/components/SidePannel';
// import SubscriptionOverview from '@/components/subscriptiontabs/SubscriptionOverview';
// import TopBar from '@/components/TopBar';
// import Dashboard from '../images/icons/dashBaordSvg.svg';

// const SubscriptionsAndBilling = () => {
//     const breadcrumbs = [
//         {
//             label: 'Subscription & Billing',
//             isActive: false,
//             href: '/subscriptionsandbilling',
//         },
//         {
//             label: 'Subscriptions & Billing',
//             isActive: true,
//         },
//     ];
//     const tabs = [
//         {
//             label: 'Subscription Overview',
//             isActive: true,
//         },
//         {
//             label: 'Subscribers',
//             isActive: false,
//         },
//         {
//             label: 'Invoices',
//             isActive: false,
//         },
//         {
//             label: 'Plans & Pricing',
//             isActive: false,
//         },
//         {
//             label: 'Usage & Credits',
//             isActive: false,
//         },
//         {
//             label: 'Requests & Logs',
//             isActive: false,
//         },
//     ];
//     return (
//         <>
//             <div className="flex min-h-screen">
//                 <SidePannel />
//                 <main className="flex flex-1 flex-col">
//                     <TopBar
//                         title="Subscription Overview"
//                         icon={Dashboard}
//                         breadcrumbs={breadcrumbs}
//                         tabs={tabs}
//                     />
//                     <div className="flex-1 px-8 py-6">
//                         <SubscriptionOverview />
//                     </div>
//                 </main>
//             </div>
//         </>
//     );
// };

// export default SubscriptionsAndBilling;

//logical.

import SidePannel from '@/components/SidePannel';
import SubscriptionOverview from '@/components/subscriptiontabs/SubscriptionOverview';
// TODO: Import your other components here
// import SubscribersTab from '@/components/subscriptiontabs/SubscribersTab';
// import InvoicesTab from '@/components/subscriptiontabs/InvoicesTab';
// ... etc
import Invoices from '@/components/subscriptiontabs/Invoices';
import PlansPricings from '@/components/subscriptiontabs/PlansPricings';
import RequestsLogs from '@/components/subscriptiontabs/RequestsLogs';
import Subscribers from '@/components/subscriptiontabs/Subscribers';
import UsageCredits from '@/components/subscriptiontabs/UsageCredits';

import TopBar from '@/components/TopBar';
import { useEffect, useState } from 'react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

// 1. Define the specific tab keys
type TabType =
    | 'overview'
    | 'subscribers'
    | 'invoices'
    | 'plans'
    | 'usage'
    | 'requests';

const SubscriptionsAndBilling = () => {
    // 2. Initialize state from localStorage
    const [activeTab, setActiveTab] = useState<TabType>(() => {
        if (typeof window !== 'undefined') {
            const savedTab = localStorage.getItem('subscription_active_tab');
            return (savedTab as TabType) || 'overview';
        }
        return 'overview';
    });

    // 3. Persist state changes
    useEffect(() => {
        localStorage.setItem('subscription_active_tab', activeTab);
    }, [activeTab]);

    // Helper to get readable label for breadcrumbs
    const getTabLabel = (tab: TabType) => {
        switch (tab) {
            case 'overview':
                return 'Subscription Overview';
            case 'subscribers':
                return 'Subscribers';
            case 'invoices':
                return 'Invoices';
            case 'plans':
                return 'Plans & Pricing';
            case 'usage':
                return 'Usage & Credits';
            case 'requests':
                return 'Requests & Logs';
            default:
                return 'Subscription Overview';
        }
    };

    const breadcrumbs = [
        {
            label: 'Subscription & Billing',
            isActive: false,
            href: '/subscriptionsandbilling',
        },
        {
            label: getTabLabel(activeTab),
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Subscription Overview',
            isActive: activeTab === 'overview',
            onClick: () => setActiveTab('overview'),
        },
        {
            label: 'Subscribers',
            isActive: activeTab === 'subscribers',
            onClick: () => setActiveTab('subscribers'),
        },
        {
            label: 'Invoices',
            isActive: activeTab === 'invoices',
            onClick: () => setActiveTab('invoices'),
        },
        {
            label: 'Plans & Pricing',
            isActive: activeTab === 'plans',
            onClick: () => setActiveTab('plans'),
        },
        {
            label: 'Usage & Credits',
            isActive: activeTab === 'usage',
            onClick: () => setActiveTab('usage'),
        },
        {
            label: 'Requests & Logs',
            isActive: activeTab === 'requests',
            onClick: () => setActiveTab('requests'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Subscription & Billing" // Changed title to be generic for the page
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                <div className="flex-1 px-8 py-6">
                    {/* 4. Conditional Rendering */}
                    {activeTab === 'overview' && <SubscriptionOverview />}

                    {/* Placeholder for Subscribers */}
                    {activeTab === 'subscribers' && <Subscribers />}

                    {/* Placeholder for Invoices */}
                    {activeTab === 'invoices' && <Invoices />}

                    {/* Placeholder for Plans */}
                    {activeTab === 'plans' && <PlansPricings />}

                    {/* Placeholder for Usage */}
                    {activeTab === 'usage' && <UsageCredits />}

                    {/* Placeholder for Requests */}
                    {activeTab === 'requests' && <RequestsLogs />}
                </div>
            </main>
        </div>
    );
};

export default SubscriptionsAndBilling;
