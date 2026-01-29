import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { useState } from 'react';
import Dashboard from '../images/icons/dashBaordSvg.svg';
import BusinessProfilesTab from '@/components/businesstabs/BusinessProfilesTab';
import MultiTenancyTab from '@/components/businesstabs/MultiTenancyTab';
import FutureAcess from '@/components/businesstabs/FutureAccess'

const BusinessManagement = () => {
    const [activeTab, setActiveTab] = useState<'profiles' | 'tenancy' | 'feature'>('profiles');

    const breadcrumbs = [
        { label: 'Business Management', isActive: false, href: '/business-management' },
        { label: activeTab === 'tenancy' ? 'Multi-Tenancy & Franchise' : activeTab === 'feature' ? 'Feature Access & Beta' : 'Business Profiles', isActive: true },
    ];

    const tabs = [
        { label: 'Business Profiles', isActive: activeTab === 'profiles', onClick: () => setActiveTab('profiles') },
        { label: 'Multi-Tenancy & Franchise', isActive: activeTab === 'tenancy', onClick: () => setActiveTab('tenancy') },
        { label: 'Feature Access & Beta', isActive: activeTab === 'feature', onClick: () => setActiveTab('feature') },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar title="Business Management" icon={Dashboard} breadcrumbs={breadcrumbs} tabs={tabs} />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'profiles' && <BusinessProfilesTab />}
                    {activeTab === 'tenancy' && <MultiTenancyTab />}
                    {activeTab === 'feature' && <FutureAcess/>}
                </div>
            </main>
        </div>
    );
};
export default BusinessManagement;