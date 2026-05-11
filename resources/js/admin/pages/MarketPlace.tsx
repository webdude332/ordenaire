import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import { useEffect, useState } from 'react';
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg';
import Explore from '../components/marketplacetabs/Explore';
import MyApps from '../components/marketplacetabs/MyApps';

type MarketplaceTabType = 'explore' | 'my-apps';

const MarketPlace = () => {
    const [notifOpen, setNotifOpen] = useState(false);

    const [activeTab, setActiveTab] = useState<MarketplaceTabType>(() => {
        const savedTab = localStorage.getItem('marketplace_active_tab');
        return (savedTab as MarketplaceTabType) || 'explore';
    });

    useEffect(() => {
        localStorage.setItem('marketplace_active_tab', activeTab);
    }, [activeTab]);

    const breadcrumbs = [
        {
            label: 'Marketplace',
            isActive: false,
            href: '/admin/marketplace',
        },
        {
            label: activeTab === 'explore' ? 'Explore' : 'My Apps',
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Explore',
            isActive: activeTab === 'explore',
            onClick: () => setActiveTab('explore'),
        },
        {
            label: 'My Apps',
            isActive: activeTab === 'my-apps',
            onClick: () => setActiveTab('my-apps'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Integrations and Add-Ons"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'explore' && <Explore />}
                    {activeTab === 'my-apps' && <MyApps />}
                </div>
            </main>

            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
};

export default MarketPlace;
