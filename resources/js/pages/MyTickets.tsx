import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { useEffect, useState } from 'react';

// Assuming you have an icon for this page, using the Dashboard SVG as a placeholder
import Dashboard from '../images/icons/dashBaordSvg.svg';

// Ticket Tab Components
import Assigned from '@/components/ticketstabs/Assigned';
import Mentioned from '@/components/ticketstabs/Mentioned';
import Resolved from '@/components/ticketstabs/Resolved';

type TabType = 'assigned' | 'mentioned' | 'resolved';

export default function MyTickets() {
    const [activeTab, setActiveTab] = useState<TabType>(() => {
        if (typeof window !== 'undefined') {
            const savedTab = localStorage.getItem('mytickets_active_tab');
            return (savedTab as TabType) || 'assigned';
        }
        return 'assigned';
    });

    useEffect(() => {
        localStorage.setItem('mytickets_active_tab', activeTab);
    }, [activeTab]);

    const getTabLabel = (tab: TabType) => {
        switch (tab) {
            case 'assigned':
                return 'Assigned to Me';
            case 'mentioned':
                return 'Mentioned';
            case 'resolved':
                return 'Resolved';
            default:
                return 'Assigned to Me';
        }
    };

    const breadcrumbs = [
        {
            label: 'My Tickets',
            href: '/my-tickets', // Make sure this matches your actual routing path
        },
        {
            label: getTabLabel(activeTab),
            isActive: true,
        },
    ];

    const tabs = [
        {
            // Note: If your TopBar component supports passing custom React nodes for badges
            // (like the '10' in your screenshot), you can update this label accordingly.
            label: 'Assigned to Me',
            isActive: activeTab === 'assigned',
            onClick: () => setActiveTab('assigned'),
        },
        {
            label: 'Mentioned',
            isActive: activeTab === 'mentioned',
            onClick: () => setActiveTab('mentioned'),
        },
        {
            label: 'Resolved',
            isActive: activeTab === 'resolved',
            onClick: () => setActiveTab('resolved'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="My Tickets"
                    icon={Dashboard} // Swap this out for a ticket icon if you have one
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'assigned' && <Assigned />}
                    {activeTab === 'mentioned' && <Mentioned />}
                    {activeTab === 'resolved' && <Resolved />}
                </div>
            </main>
        </div>
    );
}
