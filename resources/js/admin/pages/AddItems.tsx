import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import Dashboard from '@/shared/images/icons/dashBaordSvg.svg';
import { router } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

import ItemDetails from '@/admin/components/additemsteps/ItemDetails';
import RecipeStock from '@/admin/components/additemsteps/RecipeStock';
import ReviewConfirm from '@/admin/components/additemsteps/ReviewConfirm';
import Variant from '@/admin/components/additemsteps/Variant';

const AddItems = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [maxStepReached, setMaxStepReached] = useState(1);
    const [isDirty, setIsDirty] = useState(false);

    const [formData, setFormData] = useState({
        // Step 1 - Item Details
        itemCode: 'ITM-000145',
        itemName: '',
        category: '',
        kitchenStation: '',
        preparationTime: '00',
        status: 'active',
        image: null as File | null,
        description: '',
        dietaryLabels: [] as string[],

        // Step 2 - Recipe & Stock
        trackStock: false,
        estimatedCost: '0.000',
        basePrice: '0.000',
        manualTax: '',

        // Step 3 - Variants & Add-ons
        variants: [
            {
                id: '1',
                name: 'Standard',
                sellingPrice: '3.000',
                estimatedCost: '2.000',
                locked: true,
            },
        ],
        modifierGroups: [] as any[],
        addOns: [] as any[],
    });

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

    const nextStep = () => {
        setIsDirty(false);
        setCurrentStep((prev) => Math.min(prev + 1, 4));
    };

    const prevStep = () => {
        if (currentStep === 1) {
            router.visit('/admin/menu');
        } else {
            setIsDirty(false);
            setCurrentStep((prev) => Math.max(prev - 1, 1));
        }
    };

    const handleTimelineClick = (stepId: number) => {
        if (stepId < currentStep || stepId <= maxStepReached) {
            setIsDirty(false);
            setCurrentStep(stepId);
        }
    };

    const breadcrumbs = [
        { label: 'Menu', isActive: false, href: '/admin/menu' },
        { label: 'Items', isActive: false, href: '/admin/menu' },
        { label: 'Add New Item', isActive: true },
    ];

    const steps = [
        { id: 1, label: 'Item Details' },
        { id: 2, label: 'Recipe & Stock' },
        { id: 3, label: 'Variants & Add-ons' },
        { id: 4, label: 'Review and confirm' },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <div className="sticky top-0 z-50">
                    <TopBar
                        title="Add New Item"
                        icon={Dashboard}
                        breadcrumbs={breadcrumbs}
                    />
                </div>

                <div className="flex-1 px-12 py-6">
                    {/* Page Title */}
                    {/* <h1 className="mb-8 text-2xl font-bold text-gray-900">
                        Add New Item
                    </h1> */}

                    {/* Timeline */}
                    <div className="mb-12">
                        <div className="relative flex items-center justify-between px-10">
                            {/* Dotted line */}
                            <div
                                className="absolute top-1/3 right-[8rem] left-[8rem] h-0.5 -translate-y-1/2 border-t-2 border-dotted border-gray-200"
                                style={{ zIndex: 0 }}
                            />

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
                                        <div
                                            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                                                isCompleted
                                                    ? 'bg-[#79B800]'
                                                    : isActiveStep
                                                      ? 'bg-[#79B800]'
                                                      : 'border border-gray-200 bg-white'
                                            }`}
                                        >
                                            {isCompleted ? (
                                                <Check className="h-5 w-5 text-white" />
                                            ) : isActiveStep ? (
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#79B800] ring-2 ring-white">
                                                    <div className="h-1 w-1 rounded-full bg-white ring-2 ring-white" />
                                                </div>
                                            ) : (
                                                <span className="text-sm font-medium text-gray-400">
                                                    {step.id}
                                                </span>
                                            )}
                                        </div>
                                        <span
                                            className={`mt-2 text-center text-sm leading-tight ${
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

                    {/* Step Renderer */}
                    <div className="mt-6">
                        {currentStep === 1 && (
                            <ItemDetails
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 1}
                            />
                        )}
                        {currentStep === 2 && (
                            <RecipeStock
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 2}
                            />
                        )}
                        {currentStep === 3 && (
                            <Variant
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 3}
                            />
                        )}
                        {currentStep === 4 && (
                            <ReviewConfirm
                                data={formData}
                                onBack={prevStep}
                                onSubmit={() => alert('Item Published!')}
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddItems;
