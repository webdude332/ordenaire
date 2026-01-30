import BusinessProfilesTab from '@/components/businesstabs/BusinessProfilesTab';
import FutureAcess from '@/components/businesstabs/FutureAccess';
import MultiTenancyTab from '@/components/businesstabs/MultiTenancyTab';
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { useEffect, useState } from 'react'; // Added useEffect
import Dashboard from '../images/icons/dashBaordSvg.svg';

type TabType = 'profiles' | 'tenancy' | 'feature';

const BusinessManagement = () => {
    // --- PERSISTENCE LOGIC ---
    // Initialize state from localStorage or default to 'profiles'
    const [activeTab, setActiveTab] = useState<TabType>(() => {
        const savedTab = localStorage.getItem('business_management_active_tab');
        return (savedTab as TabType) || 'profiles';
    });

    // Update localStorage whenever the activeTab changes
    useEffect(() => {
        localStorage.setItem('business_management_active_tab', activeTab);
    }, [activeTab]);

    const breadcrumbs = [
        {
            label: 'Business Management',
            isActive: false,
            href: '/business-management',
        },
        {
            label:
                activeTab === 'tenancy'
                    ? 'Multi-Tenancy & Franchise'
                    : activeTab === 'feature'
                      ? 'Feature Access & Beta'
                      : 'Business Profiles',
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Business Profiles',
            isActive: activeTab === 'profiles',
            onClick: () => setActiveTab('profiles'),
        },
        {
            label: 'Multi-Tenancy & Franchise',
            isActive: activeTab === 'tenancy',
            onClick: () => setActiveTab('tenancy'),
        },
        {
            label: 'Feature Access & Beta',
            isActive: activeTab === 'feature',
            onClick: () => setActiveTab('feature'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Business Management"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'profiles' && <BusinessProfilesTab />}
                    {activeTab === 'tenancy' && <MultiTenancyTab />}
                    {activeTab === 'feature' && <FutureAcess />}
                </div>
            </main>
        </div>
    );
};

export default BusinessManagement;
