import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { router } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

// Import Steps
import CompanyProfileStep from './steps/CompanyProfileStep';
import OperationalConfigStep from './steps/OperationalConfigStep';
import ReviewConfirmStep from './steps/ReviewConfirmStep';
import SubscriptionStep from './steps/SubscriptionComplianceStep';
import TeamAccessStep from './steps/TeamAccessStep';

const RegisterWizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [maxStepReached, setMaxStepReached] = useState(1);
    const [isDirty, setIsDirty] = useState(false);

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

    // --- Scroll to Top Logic ---
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentStep]);

    const updateFormData = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setIsDirty(true);
        if (currentStep >= maxStepReached) {
            setMaxStepReached(currentStep + 1);
        }
    };

    // --- Navigation Logic ---
    const nextStep = () => {
        if (isDirty || currentStep < maxStepReached - 1) {
            setIsDirty(false);
            setCurrentStep((prev) => Math.min(prev + 1, 5));
        }
    };

    const prevStep = () => {
        if (currentStep === 1) {
            router.visit('/busines-management');
        } else {
            setIsDirty(false);
            setCurrentStep((prev) => Math.max(prev - 1, 1));
        }
    };

    const handleTimelineClick = (stepId: number) => {
        // Only allow clicking steps that have been reached/unlocked
        if (stepId < currentStep || stepId <= maxStepReached) {
            setIsDirty(false);
            setCurrentStep(stepId);
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
                <div className="sticky top-0 z-50">
                    <TopBar
                        title="Business Management"
                        icon={Dashboard}
                        breadcrumbs={breadcrumbs}
                        tabs={[
                            {
                                label: 'Business Profiles',
                                isActive: true,
                                onClick: () => {},
                            },
                            {
                                label: 'Multi-Tenancy & Franchise',
                                isActive: false,
                                onClick: () => {},
                            },
                            {
                                label: 'Feature Access & Beta',
                                isActive: false,
                                onClick: () => {},
                            },
                        ]}
                    />
                </div>

                <div className="flex-1 px-12 py-6">
                    {/* === DYNAMIC TIMELINE === */}
                    <div className="mb-12 pt-12">
                        <div className="relative flex items-center justify-between px-10">
                            {/* Dotted Background Line */}
                            <div
                                className="absolute top-1/3 right-[8rem] left-[8rem] h-0.5 -translate-y-1/2 border-t-2 border-dotted border-gray-200"
                                style={{ zIndex: 0 }}
                            ></div>

                            {steps.map((step) => {
                                const isCompleted = currentStep > step.id;
                                const isActiveStep = currentStep === step.id;
                                const isUnlocked = step.id <= maxStepReached;

                                return (
                                    <div
                                        key={step.id}
                                        onClick={() =>
                                            handleTimelineClick(step.id)
                                        }
                                        className={`relative z-10 flex flex-col items-center px-4 ${
                                            isUnlocked
                                                ? 'cursor-pointer'
                                                : 'cursor-not-allowed'
                                        }`}
                                    >
                                        {/* Circle Indicator */}
                                        <div
                                            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                                                isCompleted
                                                    ? 'bg-[#79B800] ring-[#ECFDF3]'
                                                    : isActiveStep
                                                      ? 'bg-[#79B800] ring-[#ECFDF3]'
                                                      : 'h-8 w-8 border border-gray-200 bg-white ring-0'
                                            }`}
                                        >
                                            {isCompleted ? (
                                                <Check className="h-5 w-5 text-white" />
                                            ) : isActiveStep ? (
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
                                            className={`mt-2 text-center text-sm leading-tight whitespace-pre-wrap ${
                                                isActiveStep || isCompleted
                                                    ? 'font-semibold text-[#578500]'
                                                    : 'font-medium text-gray-400'
                                            }`}
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
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 1}
                            />
                        )}
                        {currentStep === 2 && (
                            <OperationalConfigStep
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 2}
                            />
                        )}
                        {currentStep === 3 && (
                            <SubscriptionStep
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 3}
                            />
                        )}
                        {currentStep === 4 && (
                            <TeamAccessStep
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 4}
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
