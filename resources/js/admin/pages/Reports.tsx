import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import { useEffect, useState } from 'react';
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg'; // Using the same icon placeholder

// Importing components from the reportstabs directory
import FinancialHealth from '../components/reportstabs/FinancialHealth';
import InventoryWaste from '../components/reportstabs/InventoryWaste';
import SalesMenu from '../components/reportstabs/SalesMenu';

type ReportsTabType = 'sales-menu' | 'financial-health' | 'inventory-waste';

const Reports = () => {
    const [notifOpen, setNotifOpen] = useState(false);

    const [activeTab, setActiveTab] = useState<ReportsTabType>(() => {
        const savedTab = localStorage.getItem('reports_active_tab');
        return (savedTab as ReportsTabType) || 'sales-menu';
    });

    useEffect(() => {
        localStorage.setItem('reports_active_tab', activeTab);
    }, [activeTab]);

    // Helper object to map tab types to their display labels
    const tabLabels: Record<ReportsTabType, string> = {
        'sales-menu': 'Sales & Menu Intelligence',
        'financial-health': 'Financial Health',
        'inventory-waste': 'Inventory & Waste',
    };

    const breadcrumbs = [
        {
            label: 'Reports',
            isActive: false,
            href: '/admin/reports', // Adjust route if necessary
        },
        {
            label: tabLabels[activeTab],
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Sales & Menu Intelligence',
            isActive: activeTab === 'sales-menu',
            onClick: () => setActiveTab('sales-menu'),
        },
        {
            label: 'Financial Health',
            isActive: activeTab === 'financial-health',
            onClick: () => setActiveTab('financial-health'),
        },
        {
            label: 'Inventory & Waste',
            isActive: activeTab === 'inventory-waste',
            onClick: () => setActiveTab('inventory-waste'),
        },
    ];

    // Dynamic title based on screenshot reference
    const getPageTitle = () => {
        if (activeTab === 'sales-menu') return 'Sales Insights & Performance';
        return tabLabels[activeTab];
    };

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title={getPageTitle()}
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'sales-menu' && <SalesMenu />}
                    {activeTab === 'financial-health' && <FinancialHealth />}
                    {activeTab === 'inventory-waste' && <InventoryWaste />}
                </div>
            </main>

            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
};

export default Reports;
