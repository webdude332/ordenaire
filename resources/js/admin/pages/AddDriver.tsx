// export default function AddDriver() {
//     return <div>AddDriver</div>;
// }

import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import Dashboard from '@/shared/images/icons/dashBaordSvg.svg';
import { router } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

// Importing the driver steps based on your folder structure
import DriverBasicDetails from '@/admin/components/driversteps/DriverBasicDetails';
import DriverCompensation from '@/admin/components/driversteps/DriverCompensation';
import DriverReview from '@/admin/components/driversteps/DriverReview';

export interface DriverFormData {
    staffId: string;
    fullName: string;
    email: string;
    phone: string;
    status: string;
    image: File | null;
    employmentType: string;
    baseSalary: string;
    workHours: string;
    workDays: string;
    bankName: string;
    accountHolder: string;
    iban: string;
    branch: string;
}

const AddDriver = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [maxStepReached, setMaxStepReached] = useState(1);
    const [isDirty, setIsDirty] = useState(false);

    const [formData, setFormData] = useState<DriverFormData>({
        staffId: 'STF-0001',
        fullName: '',
        email: '',
        phone: '',
        status: 'active',
        image: null,
        employmentType: 'full_time',
        baseSalary: '',
        workHours: '',
        workDays: '',
        bankName: '',
        accountHolder: '',
        iban: '',
        branch: 'Mirpur-1 (Main)',
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
        setCurrentStep((prev) => Math.min(prev + 1, 3));
    };

    const prevStep = () => {
        if (currentStep === 1) {
            router.visit('/admin/delivery-partners');
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
        {
            label: 'Delivery Partners',
            isActive: false,
            href: '/admin/delivery-partners',
        },
        { label: 'Add New Driver', isActive: true },
    ];

    const steps = [
        { id: 1, label: 'Basic Details' },
        { id: 2, label: 'Compensation & Documents' },
        { id: 3, label: 'Review' },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col bg-white">
                <div className="sticky top-0 z-50">
                    <TopBar
                        title="Add New Driver"
                        icon={Dashboard}
                        breadcrumbs={breadcrumbs}
                    />
                </div>

                <div className="flex-1 px-12 py-6">
                    {/* Timeline */}
                    <div className="mb-12">
                        <div className="relative flex items-center justify-between px-32">
                            {/* Dotted line */}
                            <div
                                className="absolute top-1/3 right-[10rem] left-[10rem] h-0.5 -translate-y-1/2 border-t-2 border-dotted border-gray-200"
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
                            <DriverBasicDetails
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 1}
                            />
                        )}
                        {currentStep === 2 && (
                            <DriverCompensation
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 2}
                            />
                        )}
                        {currentStep === 3 && (
                            <DriverReview
                                data={formData}
                                onBack={prevStep}
                                onSubmit={() =>
                                    alert('Driver Invited Successfully!')
                                }
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddDriver;
