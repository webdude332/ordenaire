import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import { useEffect, useState } from 'react';
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg';
import OrderHistory from '../components/oredertabs/OrderHistory';
import Scheduled from '../components/oredertabs/Scheduled';

type OrderTabType = 'scheduled' | 'orderhistory';

const Orders = () => {
    const [notifOpen, setNotifOpen] = useState(false);

    const [activeTab, setActiveTab] = useState<OrderTabType>(() => {
        const savedTab = localStorage.getItem('order_active_tab');
        return (savedTab as OrderTabType) || 'scheduled';
    });

    useEffect(() => {
        localStorage.setItem('order_active_tab', activeTab);
    }, [activeTab]);

    const breadcrumbs = [
        {
            label: 'Orders',
            isActive: false,
            href: '/admin/orders', // Assuming this route based on your menu setup
        },
        {
            label: activeTab === 'scheduled' ? 'Scheduled' : 'Order History',
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Scheduled',
            isActive: activeTab === 'scheduled',
            badge: '4',
            onClick: () => setActiveTab('scheduled'),
        },
        {
            label: 'Order History',
            isActive: activeTab === 'orderhistory',
            onClick: () => setActiveTab('orderhistory'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Orders"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'scheduled' && <Scheduled />}
                    {activeTab === 'orderhistory' && <OrderHistory />}
                </div>
            </main>

            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
};

export default Orders;
