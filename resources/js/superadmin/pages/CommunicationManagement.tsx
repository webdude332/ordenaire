import SidePannel from '@/superadmin/components/SidePannel';
import TopBar from '@/superadmin/components/TopBar';
import Announcements from '@/superadmin/components/communicationtabs/Announcements';
import { useEffect, useState } from 'react';
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg';

type TabType = 'announcements';

export default function CommunicationManagement() {
    const [activeTab, setActiveTab] = useState<TabType>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('communication_active_tab');
            return (saved as TabType) || 'announcements';
        }
        return 'announcements';
    });

    useEffect(() => {
        localStorage.setItem('communication_active_tab', activeTab);
    }, [activeTab]);

    const getTabLabel = (tab: TabType) => {
        switch (tab) {
            case 'announcements':
                return 'Announcements';
            default:
                return 'Announcements';
        }
    };

    const breadcrumbs = [
        {
            label: 'Communication Mgmt',
            href: '/superadmin/communication-management',
        },
        {
            label: getTabLabel(activeTab),
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Announcements',
            isActive: activeTab === 'announcements',
            onClick: () => setActiveTab('announcements'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Announcements & Notifications"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'announcements' && <Announcements />}
                </div>
            </main>
        </div>
    );
}
