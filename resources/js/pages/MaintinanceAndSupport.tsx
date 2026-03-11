import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import DataBackup from '@/components/maintinancetabs/DataBackup';
import MaintinanceSheduling from '@/components/maintinancetabs/MaintinanceSheduling';
import PlatformStatus from '@/components/maintinancetabs/PlatformStatus';
import ReleaseMgmt from '@/components/maintinancetabs/ReleaseMgmt';
import TicketCenter from '@/components/maintinancetabs/TicketCenter';

import { useEffect, useState } from 'react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

type TabType = 'status' | 'scheduling' | 'release' | 'backup' | 'tickets';

export default function MaintinanceAndSupport() {
    const [activeTab, setActiveTab] = useState<TabType>(() => {
        if (typeof window !== 'undefined') {
            const savedTab = localStorage.getItem('maintenance_active_tab');
            return (savedTab as TabType) || 'status';
        }
        return 'status';
    });

    useEffect(() => {
        localStorage.setItem('maintenance_active_tab', activeTab);
    }, [activeTab]);

    const getTabLabel = (tab: TabType) => {
        switch (tab) {
            case 'status':
                return 'Platform Status';
            case 'scheduling':
                return 'Maintenance Scheduling';
            case 'release':
                return 'Release Management';
            case 'backup':
                return 'Data Backup';
            case 'tickets':
                return 'Ticket Center';
            default:
                return 'Platform Status';
        }
    };

    const breadcrumbs = [
        {
            label: 'Maintenance & Support',
            href: '/maintinance-and-support',
        },
        {
            label: getTabLabel(activeTab),
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Maintenance Scheduling',
            isActive: activeTab === 'scheduling',
            onClick: () => setActiveTab('scheduling'),
        },
        {
            label: 'Release Management',
            isActive: activeTab === 'release',
            onClick: () => setActiveTab('release'),
        },
        {
            label: 'Platform Status',
            isActive: activeTab === 'status',
            onClick: () => setActiveTab('status'),
        },

        {
            label: 'Data Backup',
            isActive: activeTab === 'backup',
            onClick: () => setActiveTab('backup'),
        },
        {
            label: 'Ticket Center',
            isActive: activeTab === 'tickets',
            onClick: () => setActiveTab('tickets'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Maintenance & Support"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'status' && <PlatformStatus />}
                    {activeTab === 'scheduling' && <MaintinanceSheduling />}
                    {activeTab === 'release' && <ReleaseMgmt />}
                    {activeTab === 'backup' && <DataBackup />}
                    {activeTab === 'tickets' && <TicketCenter />}
                </div>
            </main>
        </div>
    );
}
