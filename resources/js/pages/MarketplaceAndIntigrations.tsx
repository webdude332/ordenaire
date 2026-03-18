import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';

// Integration Tab Components
import AnalyticsGrowth from '@/components/integrationtabs/AnalyticsGrowth';
import ApiMgmt from '@/components/integrationtabs/ApiMgmt';
import Installations from '@/components/integrationtabs/Installations';
import Monitizations from '@/components/integrationtabs/Monitizations';
import Overview from '@/components/integrationtabs/Overview'; // Assuming you will create this based on the tabs UI
import Settings from '@/components/integrationtabs/Settings';
import UsageLogs from '@/components/integrationtabs/UsageLogs';

import { useEffect, useState } from 'react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

type TabType =
    | 'overview'
    | 'analytics'
    | 'installations'
    | 'monetization'
    | 'apimgmt'
    | 'usagelogs'
    | 'settings';

export default function MarketplaceAndIntegrations() {
    const [activeTab, setActiveTab] = useState<TabType>(() => {
        if (typeof window !== 'undefined') {
            const savedTab = localStorage.getItem('marketplace_active_tab');
            return (savedTab as TabType) || 'overview';
        }
        return 'overview';
    });

    useEffect(() => {
        localStorage.setItem('marketplace_active_tab', activeTab);
    }, [activeTab]);

    const getTabLabel = (tab: TabType) => {
        switch (tab) {
            case 'overview':
                return 'Overview';
            case 'analytics':
                return 'Analytics & Growth';
            case 'installations':
                return 'Installations';
            case 'monetization':
                return 'Monetization & Pricing';
            case 'apimgmt':
                return 'API Management';
            case 'usagelogs':
                return 'Usage Logs';
            case 'settings':
                return 'Settings';
            default:
                return 'Overview';
        }
    };

    const breadcrumbs = [
        {
            label: 'Marketplace & Apps',
            href: '/marketplace-and-apps',
        },
        {
            label: getTabLabel(activeTab),
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Overview',
            isActive: activeTab === 'overview',
            onClick: () => setActiveTab('overview'),
        },
        {
            label: 'Analytics & Growth',
            isActive: activeTab === 'analytics',
            onClick: () => setActiveTab('analytics'),
        },
        {
            label: 'Installations',
            isActive: activeTab === 'installations',
            onClick: () => setActiveTab('installations'),
            badge: 0o2,
        },
        {
            label: 'Monetization & Pricing',
            isActive: activeTab === 'monetization',
            onClick: () => setActiveTab('monetization'),
        },
        {
            label: 'API Management',
            isActive: activeTab === 'apimgmt',
            onClick: () => setActiveTab('apimgmt'),
        },
        {
            label: 'Usage Logs',
            isActive: activeTab === 'usagelogs',
            onClick: () => setActiveTab('usagelogs'),
        },
        {
            label: 'Settings',
            isActive: activeTab === 'settings',
            onClick: () => setActiveTab('settings'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Marketplace & Integrations"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'overview' && <Overview />}
                    {activeTab === 'analytics' && <AnalyticsGrowth />}
                    {activeTab === 'installations' && <Installations />}
                    {activeTab === 'monetization' && <Monitizations />}
                    {activeTab === 'apimgmt' && <ApiMgmt />}
                    {activeTab === 'usagelogs' && <UsageLogs />}
                    {activeTab === 'settings' && <Settings />}
                </div>
            </main>
        </div>
    );
}
