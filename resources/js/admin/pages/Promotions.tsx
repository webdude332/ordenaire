import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import { useEffect, useState } from 'react';
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg';
import Coupons from '../components/promotiontabs/Coupons';
import TvAds from '../components/promotiontabs/TvAds';

type PromotionTabType = 'coupons' | 'tvads';

const Promotions = () => {
    const [notifOpen, setNotifOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<PromotionTabType>(() => {
        const savedTab = localStorage.getItem('promotion_active_tab');
        return (savedTab as PromotionTabType) || 'coupons';
    });

    useEffect(() => {
        localStorage.setItem('promotion_active_tab', activeTab);
    }, [activeTab]);

    const breadcrumbs = [
        {
            label: 'Promotions',
            isActive: false,
            href: '/admin/promotions',
        },
        {
            label: activeTab === 'coupons' ? 'Coupons' : 'TV Ads',
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Coupons',
            isActive: activeTab === 'coupons',
            onClick: () => setActiveTab('coupons'),
        },
        {
            label: 'TV Ads (OSS)',
            isActive: activeTab === 'tvads',
            onClick: () => setActiveTab('tvads'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Promotions"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    {/* Rendering the active tab component */}
                    {activeTab === 'coupons' && <Coupons />}
                    {activeTab === 'tvads' && <TvAds />}
                </div>
            </main>

            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
};

export default Promotions;
