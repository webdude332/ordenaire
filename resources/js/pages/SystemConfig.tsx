import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import AuthenticationPolicies from '@/components/systemconfig/AuthenticationPolicies';
import DataGovernance from '@/components/systemconfig/DataGovernance';
import GeneralSettings from '@/components/systemconfig/GeneralSettings';
import SecurityLogs from '@/components/systemconfig/SecurityLogs';
import { useEffect, useState } from 'react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

type TabType = 'settings' | 'authentication' | 'data' | 'logs';

export default function SystemConfig() {
    const [activeTab, setActiveTab] = useState<TabType>(() => {
        if (typeof window !== 'undefined') {
            const savedTab = localStorage.getItem('systemconfig_active_tab');
            return (savedTab as TabType) || 'settings';
        }
        return 'settings';
    });

    useEffect(() => {
        localStorage.setItem('systemconfig_active_tab', activeTab);
    }, [activeTab]);

    const getTabLabel = (tab: TabType) => {
        switch (tab) {
            case 'settings':
                return 'General Settings';
            case 'authentication':
                return 'Authentication Policies';
            case 'data':
                return 'Data Governance & Privacy';
            case 'logs':
                return 'Security Logs';
            default:
                return 'General Settings';
        }
    };

    const breadcrumbs = [
        {
            label: 'System Configuration',
            href: '/system-config',
        },
        {
            label: getTabLabel(activeTab),
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'General Settings',
            isActive: activeTab === 'settings',
            onClick: () => setActiveTab('settings'),
        },
        {
            label: 'Authentication Policies',
            isActive: activeTab === 'authentication',
            onClick: () => setActiveTab('authentication'),
        },
        {
            label: 'Data Governance & Privacy',
            isActive: activeTab === 'data',
            onClick: () => setActiveTab('data'),
        },
        {
            label: 'Security Logs',
            isActive: activeTab === 'logs',
            onClick: () => setActiveTab('logs'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="General Settings"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'settings' && <GeneralSettings />}
                    {activeTab === 'authentication' && (
                        <AuthenticationPolicies />
                    )}
                    {activeTab === 'data' && <DataGovernance />}
                    {activeTab === 'logs' && <SecurityLogs />}
                </div>
            </main>
        </div>
    );
}
