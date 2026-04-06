import SidePannel from '@/superadmin/components/SidePannel';
import Invoices from '@/superadmin/components/subscriptiontabs/Invoices';
import PlansPricings from '@/superadmin/components/subscriptiontabs/PlansPricings';
import RequestsLogs from '@/superadmin/components/subscriptiontabs/RequestsLogs';
import Subscribers from '@/superadmin/components/subscriptiontabs/Subscribers';
import SubscriptionOverview from '@/superadmin/components/subscriptiontabs/SubscriptionOverview';
import UsageCredits from '@/superadmin/components/subscriptiontabs/UsageCredits';

import TopBar from '@/superadmin/components/TopBar';
import { useEffect, useState } from 'react';
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg';

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

    useEffect(() => {
        localStorage.setItem('subscription_active_tab', activeTab);
    }, [activeTab]);

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
            href: '/superadmin/subscription-and-billing',
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
            badge: 0o2,
        },
        {
            label: 'Plans & Pricing',
            isActive: activeTab === 'plans',
            onClick: () => setActiveTab('plans'),
        },
        {
            label: 'Charge Management',
            isActive: activeTab === 'usage',
            onClick: () => setActiveTab('usage'),
            badge: 0o2,
        },
        {
            label: 'Requests & Logs',
            isActive: activeTab === 'requests',
            onClick: () => setActiveTab('requests'),
            badge: 0o2,
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Subscription & Billing"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'overview' && <SubscriptionOverview />}

                    {activeTab === 'subscribers' && <Subscribers />}

                    {activeTab === 'invoices' && <Invoices />}

                    {activeTab === 'plans' && <PlansPricings />}

                    {activeTab === 'usage' && <UsageCredits />}

                    {activeTab === 'requests' && <RequestsLogs />}
                </div>
            </main>
        </div>
    );
};

export default SubscriptionsAndBilling;
