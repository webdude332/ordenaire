import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import { useEffect, useState } from 'react';
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg';

// Assuming the screentabs folder is in the components directory like menutabs
import CustomersScreens from '../components/screentabs/CustomersScreens';
import Kiosk from '../components/screentabs/Kiosk';
import Printers from '../components/screentabs/Printers';
import Screens from '../components/screentabs/Screens';

type ScreensTabType = 'screens' | 'customer-screens' | 'kiosk' | 'printers';

const ScreensAndDevices = () => {
    const [notifOpen, setNotifOpen] = useState(false);

    const [activeTab, setActiveTab] = useState<ScreensTabType>(() => {
        const savedTab = localStorage.getItem('screens_active_tab');
        return (savedTab as ScreensTabType) || 'screens';
    });

    useEffect(() => {
        localStorage.setItem('screens_active_tab', activeTab);
    }, [activeTab]);

    const breadcrumbs = [
        {
            label: 'Screens & Devices',
            isActive: false,
            href: '/admin/screens-and-devices',
        },
        {
            label:
                activeTab === 'screens'
                    ? 'Screens (KDS)'
                    : activeTab === 'customer-screens'
                      ? 'Customer Screens (OSS)'
                      : activeTab === 'kiosk'
                        ? 'Kiosk (Self-Service)'
                        : 'Printers',
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Screens (KDS)',
            isActive: activeTab === 'screens',
            onClick: () => setActiveTab('screens'),
        },
        {
            label: 'Customer Screens (OSS)',
            isActive: activeTab === 'customer-screens',
            onClick: () => setActiveTab('customer-screens'),
        },
        {
            label: 'Kiosk (Self-Service)',
            isActive: activeTab === 'kiosk',
            onClick: () => setActiveTab('kiosk'),
        },
        {
            label: 'Printers',
            isActive: activeTab === 'printers',
            onClick: () => setActiveTab('printers'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Screens & Devices"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'screens' && <Screens />}
                    {activeTab === 'customer-screens' && <CustomersScreens />}
                    {activeTab === 'kiosk' && <Kiosk />}
                    {activeTab === 'printers' && <Printers />}
                </div>
            </main>

            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
};

export default ScreensAndDevices;
