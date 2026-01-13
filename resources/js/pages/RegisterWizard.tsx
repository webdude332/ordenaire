import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { router } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useState } from 'react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

// Import Steps
import CompanyProfileStep from './steps/CompanyProfileStep';
import OperationalConfigStep from './steps/OperationalConfigStep';
import ReviewConfirmStep from './steps/ReviewConfirmStep';
import SubscriptionStep from './steps/SubscriptionComplianceStep';
import TeamAccessStep from './steps/TeamAccessStep';
import LeftArrow from '@/images/icons/backArrow.svg?react';

const RegisterWizard = () => {
    const [currentStep, setCurrentStep] = useState(1);

    // --- Master Form State ---
    const [formData, setFormData] = useState({
        // Step 1
        legalName: '',
        businessId: 'BIZ-2049',
        businessType: 'Choose type',
        isBranch: true,
        parentBusiness: '',
        address: '',
        country: 'Kuwait',
        city: '',
        language: 'English',
        branchAdmin: '',
        phoneCode: '+965',
        phone: '',
        email: '',
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
        subscriptionTier: 'Starter',
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
    });

    const updateFormData = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // --- Navigation Logic ---
    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));

    // Custom Back Logic: If Step 1, go to Dashboard. Else, go back one step.
    const prevStep = () => {
        if (currentStep === 1) {
            router.visit('/busines-management'); // Go to dashboard
        } else {
            setCurrentStep((prev) => Math.max(prev - 1, 1));
        }
    };

    // Breadcrumbs
    const breadcrumbs = [
        {
            label: 'Business Management',
            isActive: false,
            href: '/business-management',
        },
        { label: 'Register New Businesses', isActive: true },
    ];

    // --- Timeline Data ---
    const steps = [
        { id: 1, label: 'Company Profile' },
        { id: 2, label: 'Operational Config' },
        { id: 3, label: 'Subscription & Compliance' },
        { id: 4, label: 'Team Access' },
        { id: 5, label: 'Review & Confirm Access' },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Business Management"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                                        tabs={[
                        { label: 'Business Profiles', isActive: true, onClick: () => {} },
                        { label: 'Multi-Tenancy & Franchise', isActive: false, onClick: () => {} },
                        { label: 'Feature Access & Beta', isActive: false, onClick: () => {} },
                    ]}
                />

                <div className="flex-1 px-12 py-6">
                    <div className="mb-6">
                        <button 
                            onClick={prevStep} 
                            className="text-md flex cursor-pointer items-center gap-2 rounded-lg border border-[#B5B0BA] bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
                        >
                            <LeftArrow className="h-5 w-5 text-[#B5B0BA]" />
                            Go Back
                        </button>
                    </div>
                    <h2 className="mb-8 text-xl font-semibold text-gray-900">
                        Register New Businesses
                    </h2>

                    {/* === DYNAMIC TIMELINE === */}
                    <div className="mb-12 border-t border-[#E8E6EA] pt-12">
                        
                        <div className="relative flex items-center justify-between px-10">
                            {/* Dotted Background Line */}
                            <div
                                className="absolute top-1/3 right-[8rem] left-[8rem] h-0.5 -translate-y-1/2 border-t-2 border-dotted border-gray-200"
                                style={{ zIndex: 0 }}
                            ></div>

                            {steps.map((step) => {
                                const isCompleted = currentStep > step.id;
                                const isActive = currentStep === step.id;

                                return (
                                    <div
                                        key={step.id}
                                        className="relative z-10 flex flex-col items-center px-4"
                                    >
                                        {/* Circle Indicator */}
                                        <div
                                            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                                                isCompleted
                                                    ? 'bg-[#79B800] ring-[#ECFDF3]' // Green Check
                                                    : isActive
                                                      ? 'bg-[#79B800] ring-[#ECFDF3]' // Active Green Ring
                                                      : 'h-8 w-8 border border-gray-200 bg-white ring-0' // Inactive Gray
                                            }`}
                                        >
                                            {isCompleted ? (
                                                <Check className="h-5 w-5 text-white" />
                                            ) : isActive ? (
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#79B800] ring-2 ring-white">
                                                    <div className="h-1 w-1 rounded-full bg-white ring-2 ring-white"></div>
                                                </div>
                                            ) : (
                                                <span className="text-sm font-medium text-gray-400">
                                                    {step.id}
                                                </span>
                                            )}
                                        </div>
                                        {/* Label */}
                                        <span
                                            className={`mt-2 text-center text-sm ${
                                                isActive || isCompleted
                                                    ? 'font-semibold text-[#578500]'
                                                    : 'font-medium text-gray-400'
                                            } leading-tight whitespace-pre-wrap`}
                                        >
                                            {step.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* === STEP RENDERER === */}
                    <div className="mt-6">
                        {currentStep === 1 && (
                            <CompanyProfileStep
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep} // Pass the navigation handler
                            />
                        )}
                        {currentStep === 2 && (
                            <OperationalConfigStep
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                            />
                        )}
                        {currentStep === 3 && (
                            <SubscriptionStep
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                            />
                        )}
                        {currentStep === 4 && (
                            <TeamAccessStep
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                            />
                        )}
                        {currentStep === 5 && (
                            <ReviewConfirmStep
                                data={formData}
                                onBack={prevStep}
                                onSubmit={() => alert('Submit!')}
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RegisterWizard;
