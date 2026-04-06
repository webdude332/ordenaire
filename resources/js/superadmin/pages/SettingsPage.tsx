import SidePannel from '@/superadmin/components/SidePannel';
import TopBar from '@/superadmin/components/TopBar';
import { useEffect, useState } from 'react';

// Using the Dashboard SVG as a placeholder icon
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg';

// Settings Tab Components
import Securitytab from '@superadmin/components/settingstab/Securitytab';

type TabType = 'security';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<TabType>(() => {
        if (typeof window !== 'undefined') {
            const savedTab = localStorage.getItem('settings_active_tab');
            return (savedTab as TabType) || 'security';
        }
        return 'security';
    });

    useEffect(() => {
        localStorage.setItem('settings_active_tab', activeTab);
    }, [activeTab]);

    const getTabLabel = (tab: TabType) => {
        switch (tab) {
            case 'security':
                return 'Security';
            default:
                return 'Security';
        }
    };

    const breadcrumbs = [
        {
            label: 'Settings',
            href: '/superadmin/settings', // Make sure this matches your actual routing path
        },
        // {
        //     label: getTabLabel(activeTab),
        //     isActive: true,
        // },
    ];

    const tabs = [
        {
            label: 'Security & Notifications',
            isActive: activeTab === 'security',
            onClick: () => setActiveTab('security'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Settings"
                    icon={Dashboard} // Swap this out for a settings gear icon if you have one
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'security' && <Securitytab />}
                </div>
            </main>
        </div>
    );
}
