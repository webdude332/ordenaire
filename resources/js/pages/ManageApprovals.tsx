import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import ApprovalQueue from '@/components/approvalstabs/ApprovalQueue';
import { useEffect, useState } from 'react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

// ─── Types ────────────────────────────────────────────────────────────────────

type TabType = 'approvalQueue';

// ─── Component ────────────────────────────────────────────────────────────────

export default function ManageApprovals() {
    const [activeTab, setActiveTab] = useState<TabType>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('approvals_active_tab');
            return (saved as TabType) || 'approvalQueue';
        }
        return 'approvalQueue';
    });

    useEffect(() => {
        localStorage.setItem('approvals_active_tab', activeTab);
    }, [activeTab]);

    const getTabLabel = (tab: TabType) => {
        switch (tab) {
            case 'approvalQueue':
                return 'Approval Queue';
            default:
                return 'Approval Queue';
        }
    };

    const breadcrumbs = [
        {
            label: 'Manage Approvals',
            href: '/manage-approvals',
        },
        {
            label: getTabLabel(activeTab),
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Approval Queue',
            isActive: activeTab === 'approvalQueue',
            onClick: () => setActiveTab('approvalQueue'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Manage Approvals"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    // tabs={tabs}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'approvalQueue' && <ApprovalQueue />}
                </div>
            </main>
        </div>
    );
}
