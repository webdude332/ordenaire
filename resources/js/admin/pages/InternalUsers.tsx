// export default function InternalUsers() {
//     return <div>InternalUsers</div>;
// }

import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import { useEffect, useState } from 'react';

// You might want to swap this out with a specific User icon if you have one
import DashboardIcon from '../../shared/images/icons/dashBaordSvg.svg';

// Importing the tab components based on your folder structure screenshot
import AttendanceAnalytics from '../components/userstabs/AttendanceAnalytics';
import DeliveryPartners from '../components/userstabs/DeliveryPartners';
import Employees from '../components/userstabs/Employees';

type InternalUsersTabType =
    | 'employees'
    | 'delivery-partners'
    | 'attendance-analytics';

const InternalUsers = () => {
    const [notifOpen, setNotifOpen] = useState(false);

    const [activeTab, setActiveTab] = useState<InternalUsersTabType>(() => {
        const savedTab = localStorage.getItem('internal_users_active_tab');
        return (savedTab as InternalUsersTabType) || 'employees';
    });

    useEffect(() => {
        localStorage.setItem('internal_users_active_tab', activeTab);
    }, [activeTab]);

    // Helper to get the correct label for titles and breadcrumbs dynamically
    const getTabLabel = (tab: InternalUsersTabType) => {
        switch (tab) {
            case 'employees':
                return 'Employees';
            case 'delivery-partners':
                return 'Delivery Partners';
            case 'attendance-analytics':
                return 'Attendance Analytics';
            default:
                return 'Employees';
        }
    };

    const breadcrumbs = [
        {
            label: 'Internal Users',
            isActive: false,
            href: '/admin/internal-users', // Adjust this base route as needed
        },
        {
            label: getTabLabel(activeTab),
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Employees',
            isActive: activeTab === 'employees',
            onClick: () => setActiveTab('employees'),
        },
        {
            label: 'Delivery Partners',
            isActive: activeTab === 'delivery-partners',
            onClick: () => setActiveTab('delivery-partners'),
        },
        {
            label: 'Attendance Analytics',
            isActive: activeTab === 'attendance-analytics',
            onClick: () => setActiveTab('attendance-analytics'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title={getTabLabel(activeTab)}
                    icon={DashboardIcon}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'employees' && <Employees />}
                    {activeTab === 'delivery-partners' && <DeliveryPartners />}
                    {activeTab === 'attendance-analytics' && (
                        <AttendanceAnalytics />
                    )}
                </div>
            </main>

            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
};

export default InternalUsers;
