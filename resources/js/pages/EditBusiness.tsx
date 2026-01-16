import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { useState, useEffect } from 'react';
import Dashboard from '../images/icons/dashBaordSvg.svg';
import { router } from '@inertiajs/react';

// Import Your Existing Steps
import CompanyProfileStep from './steps/CompanyProfileStep';
import OperationalConfigStep from './steps/OperationalConfigStep';
import SubscriptionStep from './steps/SubscriptionComplianceStep';
import TeamAccessStep from './steps/TeamAccessStep';
import ActivityLogStep from './steps/ActivityLogStep';
import IconButton from '@/components/IconButton';
import Button from '@/components/Button';

const EditBusiness = () => {
    const [activeTab, setActiveTab] = useState(1);
    
    // --- 1. Initial Data (Simulating DB Data) ---
    const initialDbData = {
        // Step 1
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
        // Step 2
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
        // Step 3
        subscriptionTier: 'Enterprise',
        billingFrequency: 'Monthly',
        startDate: '2025-08-29',
        trialPeriod: '14',
        setupFee: '0.000',
        autoRenew: 'Enabled',
        discountType: 'Percentage',
        discountValue: '',
        // Step 4
        fullName: '',
        role: 'Select Role',
    };

    const [formData, setFormData] = useState(initialDbData);
    const [isDirty, setIsDirty] = useState(false);

    // Check for unsaved changes
    useEffect(() => {
        const isChanged = JSON.stringify(formData) !== JSON.stringify(initialDbData);
        setIsDirty(isChanged);
    }, [formData]);

    const updateFormData = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        if (!isDirty) return;
        console.log("Saving...", formData);
        alert("Changes Saved!");
        setFormData(formData); // Reset state
        setIsDirty(false);
    };

    const handleCancel = () => {
        setFormData(initialDbData);
        setIsDirty(false);
    };

    const breadcrumbs = [
        { label: 'Business Management', isActive: false, href: '/business-management' },
        { label: 'Business Overview', isActive: false, href: '#' },
        { label: 'Edit', isActive: true },
    ];

    const tabs = [
        { id: 1, label: 'Company Profile' },
        { id: 2, label: 'Operational Config' },
        { id: 3, label: 'Subscription & Compliance' },
        { id: 4, label: 'Team Access' },
        { id: 5, label: 'Activity Log' },
    ];

    return (
        <div className="flex min-h-screen bg-white">
            <SidePannel />
            <main className="flex flex-1 flex-col relative">
                <TopBar title="Business Management" icon={Dashboard} breadcrumbs={breadcrumbs} tabs={[]} />

                {/* Main Content Area (with padding for footer) */}
                <div className="flex-1 px-12 pt-12"> 
                    
                    {/* <h2 className="mb-6 text-xl font-semibold text-gray-900">Edit Businesses Details</h2> */}

                    {/* --- TABS (Pill Style as requested) --- */}
                    <div className="mb-8 flex justify-center">
                        <div className="inline-flex rounded-lg border border-gray-100 bg-gray-50 p-1">
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                            isActive
                                                ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200' // Active: White & Shadow
                                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100' // Inactive: Gray
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* --- STEP RENDERER --- */}
                    <div>
                        {activeTab === 1 && <CompanyProfileStep data={formData} update={updateFormData} onNext={()=>{}} onBack={()=>{}} isEditMode={true} />}
                        {activeTab === 2 && <OperationalConfigStep data={formData} update={updateFormData} onNext={()=>{}} onBack={()=>{}} isEditMode={true} />}
                        {activeTab === 3 && <SubscriptionStep data={formData} update={updateFormData} onNext={()=>{}} onBack={()=>{}} isEditMode={true} />}
                        {activeTab === 4 && <TeamAccessStep data={formData} update={updateFormData} onNext={()=>{}} onBack={()=>{}} isEditMode={true} />}
                        {activeTab === 5 && <div className="p-10 text-center text-gray-500 border rounded-xl"><ActivityLogStep/></div>}
                    </div>
                </div>

                {/* --- FIXED STICKY FOOTER --- */}
                {/* z-50 ensures it stays on top. left-[280px] accounts for Sidebar width (approx) */}
                <div className="right-0 left-0 sm:ml-[16rem] z-50 bg-white px-12 py-4">
                    <div className="flex items-center justify-end gap-3 max-w-[1400px] mx-auto">
                        {/* <button 
                            onClick={handleCancel}
                            disabled={!isDirty}
                            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                                isDirty 
                                ? 'border-gray-300 text-gray-700 hover:bg-gray-50' 
                                : 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                            }`}
                        >
                            Cancel
                        </button> */}
                        <IconButton onClick={handleCancel} disabled={!isDirty}>
                            Cancel
                        </IconButton>
                        {/* <button 
                            onClick={handleSave} 
                            disabled={!isDirty} 
                            className={`rounded-lg px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors ${
                                isDirty 
                                ? 'bg-[#8CDD05] hover:bg-[#7AB621]' // Active Green
                                : 'bg-[#E0E0E0] cursor-not-allowed text-gray-400' // Disabled Gray
                            }`}
                        >
                            Save Changes
                        </button> */}
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