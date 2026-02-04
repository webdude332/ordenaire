import BusinessPlan from '@/components/BusinessPlan';
import BusinessProfileHeader from '@/components/BusinessProfileHeader';
import HealthAlert from '@/components/HealthAlert';
import Notes from '@/components/Notes';
import SidePannel from '@/components/SidePannel';
import StatCard from '@/components/StatCard';
import TopBar from '@/components/TopBar';
import Button from '@/components/ui/Button';
import {
    AddonsTable,
    BillingHistoryTable,
    DocumentsTable,
} from '@/components/ui/DataTable';
import IconButton from '@/components/ui/IconButton';
import BackArrow from '@/images/icons/backArrow.svg?react';
import UsersIcon from '@/images/icons/dashBaordSvg.svg?react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

const BusinessOverviewChildParent = () => {
    const [activeTab, setActiveTab] = useState('business_profiles');
    const breadcrumbs = [
        { label: 'Business Management', isActive: false, href: '/business' },
        {
            label: 'Business Profiles',
            isActive: false,
            href: '/business/profiles',
        },
        { label: 'Business Overview', isActive: true },
    ];

    // Tabs
    const tabs = [
        {
            label: 'Business Profiles',
            isActive: activeTab === 'business_profiles',
            onClick: () => setActiveTab('business_profiles'),
        },
        {
            label: 'Multi-Tenancy & Franchise',
            isActive: activeTab === 'multi_tenancy',
            onClick: () => setActiveTab('multi_tenancy'),
        },
        {
            label: 'Feature Access & Beta',
            isActive: activeTab === 'feature_access',
            onClick: () => setActiveTab('feature_access'),
        },
    ];

    const addOnData = [
        {
            name: 'Inventory Management',
            status: 'Enabled' as const,
            pricing: 'Free',
            installDate: '03 Sept 2025',
            installTime: '11:30 AM',
            endSub: '03 Sept 2026',
            endSubTime: '11:30 AM',
        },
        {
            name: 'Inventory Management',
            status: 'Enabled' as const,
            pricing: 'Free',
            installDate: '03 Sept 2025',
            installTime: '11:30 AM',
            endSub: '03 Sept 2026',
            endSubTime: '11:30 AM',
        },
        {
            name: 'Inventory Management',
            status: 'Disabled' as const,
            pricing: 'Free',
            installDate: '03 Sept 2025',
            installTime: '11:30 AM',
            endSub: '03 Sept 2026',
            endSubTime: '11:30 AM',
        },
        {
            name: 'Inventory Management',
            status: 'Trial' as const,
            pricing: 'Free',
            installDate: '03 Sept 2025',
            installTime: '11:30 AM',
            endSub: '03 Sept 2026',
            endSubTime: '11:30 AM',
        },
        {
            name: 'Inventory Management',
            status: 'Enabled' as const,
            pricing: 'Free',
            installDate: '03 Sept 2025',
            installTime: '11:30 AM',
            endSub: '03 Sept 2026',
            endSubTime: '11:30 AM',
        },
    ];

    const billingRecords = [
        {
            invoiceId: 'INV-2025-002',
            date: '03 Sept 2025',
            time: '11:30 AM',
            amount: 450,
            status: 'Paid' as const,
            typeOfCharge: 'Subscription',
            discount: 0,
        },
        {
            invoiceId: 'INV-2025-003',
            date: '04 Sept 2025',
            time: '01:15 PM',
            amount: 30,
            status: 'Failed' as const,
            typeOfCharge: 'Overage',
            discount: 750,
        },
        {
            invoiceId: 'INV-2025-004',
            date: '05 Sept 2025',
            time: '09:45 AM',
            amount: 45,
            status: 'Paid' as const,
            typeOfCharge: 'Marketplace App',
            discount: 0,
        },
    ];

    const documentsData = [
        {
            documentName: 'Trade License',
            fileStatus: 'Not Uploaded' as const,
        },
        {
            documentName: 'Tax/VAT Certificate',
            fileStatus: 'Uploaded' as const,
            fileName: 'TRN_Cert_2025.pdf',
            expiryDate: '20 Nov 2028',
        },
        {
            documentName: 'Service Agreement',
            fileStatus: 'Not Uploaded' as const,
        },
    ];
    return (
        <div className="flex min-h-screen">
            <div>
                <SidePannel />
            </div>
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Business Overview"
                    icon={UsersIcon}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                {/**contains all the page content */}
                <div className="px-8 py-6">
                    {/**Business Profile Header (dynamic) */}
                    <div className="mb-6">
                        <Link
                            href="/business-management"
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm transition-colors hover:bg-gray-50"
                        >
                            <BackArrow className="h-4 w-4 text-iconColor" />
                            Back to Business overview
                        </Link>
                    </div>
                    <div>
                        <BusinessProfileHeader
                            businessName="Tea Time"
                            businessId="BIZ-2049"
                            serviceType="Quick Service (Takeaway)"
                            businessEmail="hello@coffeecorner.com"
                            parentBusinessName="Tea Time HQ (BIZ-2050)"
                            phoneNumber="+1 555-0123"
                            preferredLanguage="English"
                            country="USA"
                            fullAddress="456 Brew Street, Seattle, WA 98101, USA"
                            linkedWhatsApp="+1 555-0124"
                            websiteUrl="https://www.coffeecorner.com/"
                            status="Active"
                        />
                    </div>

                    <div className="mb-6 grid grid-cols-1 divide-x divide-borderColor rounded-lg border border-borderColor p-4 md:grid-cols-2 lg:grid-cols-4">
                        <BusinessPlan
                            title={'Current Plan'}
                            value={'Pro Yearly'}
                        />
                        <BusinessPlan
                            title={'Current Plan'}
                            value={'Pro Yearly'}
                        />
                        <BusinessPlan
                            title={'Current Plan'}
                            value={'Pro Yearly'}
                        />
                        <BusinessPlan
                            title={'Auto Renew'}
                            value={''}
                            trendType="negative"
                        />
                    </div>
                    <div>
                        <HealthAlert />
                    </div>
                    <div>
                        <h2 className="mb-4 text-xl font-semibold">
                            Quick Stats
                        </h2>
                        <div className="mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 shadow-xs md:grid-cols-2 lg:grid-cols-4">
                            <StatCard
                                title="Order This Month"
                                value="1,240"
                                trendType="positive"
                            />
                            <StatCard
                                title="Order This Month"
                                value="1,240"
                                trendType="positive"
                            />
                            <StatCard
                                title="Order This Month"
                                value="1,240"
                                trendType="positive"
                            />
                            <StatCard
                                title="Order This Month"
                                value="1,240"
                                trendType="positive"
                            />
                        </div>
                        {/**tables sections */}
                        <div>
                            <AddonsTable
                                addons={addOnData}
                                headerButton={
                                    <IconButton>Add New Add-on</IconButton>
                                }
                            />
                        </div>
                        <div>
                            <BillingHistoryTable
                                billingRecords={billingRecords}
                                headerButton={
                                    <Button>View Payment Overview</Button>
                                }
                            />
                        </div>
                        <div>
                            <DocumentsTable documents={documentsData} />
                        </div>
                        <div>
                            <Notes />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BusinessOverviewChildParent;
