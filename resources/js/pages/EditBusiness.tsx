import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { useEffect, useState } from 'react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

// Import Your Existing Steps
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import ActivityLogStep from './steps/ActivityLogStep';
import CompanyProfileStep from './steps/CompanyProfileStep';
import OperationalConfigStep from './steps/OperationalConfigStep';
import SubscriptionStep from './steps/SubscriptionComplianceStep';
import TeamAccessStep from './steps/TeamAccessStep';

const EditBusiness = () => {
    const [activeTab, setActiveTab] = useState(1);

    // --- Initial Data ---
    const initialDbData = {
        legalName: 'Tea Time Jumeirah',
        businessId: 'BIZ-2049',
        businessType: 'Restaurant',
        isBranch: true,
        parentBusiness: 'Tea Time HQ',
        address: 'Shop 4, Al Rigga Road',
        country: 'Kuwait',
        city: 'Dubai',
        language: 'English',
        branchAdmin: 'Omar Ali',
        phoneCode: '+965',
        phone: '965444888222',
        email: 'omar@teatime.com',
        dineIn: true,
        takeaway: true,
        delivery: false,
        onlineOrdering: false,
        inventory: true,
        kds: true,
        whatsapp: false,
        whatsappNumber: '',
        onlinePlatform: false,
        websiteUrl: '',
        posCount: 3,
        kioskCount: 0,
        subscriptionTier: 'Enterprise',
        billingFrequency: 'Monthly',
        startDate: '2025-08-29',
        trialPeriod: '14',
        setupFee: '0.000',
        autoRenew: 'Enabled',
        discountType: 'Percentage',
        discountValue: '',
        fullName: '',
        role: 'Select Role',
    };

    const [formData, setFormData] = useState(initialDbData);
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        const isChanged =
            JSON.stringify(formData) !== JSON.stringify(initialDbData);
        setIsDirty(isChanged);
    }, [formData]);

    const updateFormData = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        if (!isDirty) return;
        alert('Changes Saved!');
        setIsDirty(false);
    };

    const handleCancel = () => {
        setFormData(initialDbData);
        setIsDirty(false);
    };

    // --- NAVIGATION DATA FROM IMAGE ---
    const breadcrumbs = [
        {
            label: 'Business Management',
            isActive: false,
            href: '/business-management',
        },
        { label: '...', isActive: false },
        { label: 'Business Overview', isActive: false, href: '#' },
        { label: 'Edit', isActive: true },
    ];

    const topBarTabs = [
        { label: 'Business Profiles', isActive: true, onClick: () => {} },
        {
            label: 'Multi-Tenancy & Franchise',
            isActive: false,
            onClick: () => {},
        },
        { label: 'Feature Access & Beta', isActive: false, onClick: () => {} },
    ];

    const stepTabs = [
        { id: 1, label: 'Company Profile' },
        { id: 2, label: 'Operational Config' },
        { id: 3, label: 'Subscription & Compliance' },
        { id: 4, label: 'Team Access' },
        { id: 5, label: 'Activity Log' },
    ];

    return (
        <div className="flex min-h-screen bg-white">
            <SidePannel />
            <main className="relative flex flex-1 flex-col">
                {/* Corrected TopBar per image_7f0598.png */}
                <TopBar
                    title="Edit Businesses Details"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={topBarTabs}
                />

                <div className="flex-1 px-12 pt-12">
                    {/* --- STEP NAVIGATION (Center Pill Style) --- */}
                    <div className="mb-8 flex justify-center">
                        <div className="inline-flex rounded-lg border border-gray-100 bg-gray-50 p-1">
                            {stepTabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                            isActive
                                                ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200'
                                                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* --- STEP RENDERER --- */}
                    <div className="pb-32">
                        {activeTab === 1 && (
                            <CompanyProfileStep
                                data={formData}
                                update={updateFormData}
                                onNext={() => {}}
                                onBack={() => {}}
                                isEditMode={true}
                                canNext={true}
                            />
                        )}
                        {activeTab === 2 && (
                            <OperationalConfigStep
                                data={formData}
                                update={updateFormData}
                                onNext={() => {}}
                                onBack={() => {}}
                                isEditMode={true}
                                canNext={true}
                            />
                        )}
                        {activeTab === 3 && (
                            <SubscriptionStep
                                data={formData}
                                update={updateFormData}
                                onNext={() => {}}
                                onBack={() => {}}
                                isEditMode={true}
                                canNext={true}
                            />
                        )}
                        {activeTab === 4 && (
                            <TeamAccessStep
                                data={formData}
                                update={updateFormData}
                                onNext={() => {}}
                                onBack={() => {}}
                                isEditMode={true}
                                canNext={true}
                            />
                        )}
                        {activeTab === 5 && (
                            <ActivityLogStep
                                data={formData}
                                update={updateFormData}
                                onNext={() => {}}
                                onBack={() => {}}
                                isEditMode={true}
                            />
                        )}
                    </div>
                </div>

                {/* --- FIXED STICKY FOOTER --- */}
                <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-100 bg-white px-12 py-4 sm:ml-[16rem]">
                    <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-3">
                        <IconButton onClick={handleCancel} disabled={!isDirty}>
                            Cancel
                        </IconButton>
                        <Button onClick={handleSave} disabled={!isDirty}>
                            Save Changes
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EditBusiness;
