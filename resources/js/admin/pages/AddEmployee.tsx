// export default function AddEmployee() {
//     return <div>AddEmployee</div>;
// }

import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import Dashboard from '@/shared/images/icons/dashBaordSvg.svg';
import { router } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

// Importing the employee steps based on your folder structure
import AccessSecurity from '@/admin/components/employeesteps/AccessSecurity';
import BasicDetails from '@/admin/components/employeesteps/BasicDetails';
import Compensation from '@/admin/components/employeesteps/Compensation';
import Review from '@/admin/components/employeesteps/Review';

const AddEmployee = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [maxStepReached, setMaxStepReached] = useState(1);
    const [isDirty, setIsDirty] = useState(false);

    // Adapted formData for an Employee
    const [formData, setFormData] = useState({
        // Step 1 - Basic Details
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        image: null as File | null,

        // Step 2 - Access & Security
        role: '',
        department: '',
        status: 'active',
        password: '',

        // Step 3 - Compensation
        employmentType: 'Full-time',
        salaryAmount: '0.00',
        currency: 'USD',
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
            router.visit('/admin/employees'); // Updated route
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
        { label: 'Employees', isActive: false, href: '/admin/employees' },
        { label: 'Add New Employee', isActive: true },
    ];

    // Updated steps mapping to your screenshot components
    const steps = [
        { id: 1, label: 'Basic Details' },
        { id: 2, label: 'Compensation' },
        { id: 3, label: 'Access & Security' },
        { id: 4, label: 'Review' },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <div className="sticky top-0 z-50">
                    <TopBar
                        title="Add New Employee"
                        icon={Dashboard}
                        breadcrumbs={breadcrumbs}
                    />
                </div>

                <div className="flex-1 px-12 py-6">
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
                    {/* Step Renderer */}
                    <div className="mt-6">
                        {currentStep === 1 && (
                            <BasicDetails
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 1}
                            />
                        )}
                        {currentStep === 2 && (
                            <Compensation
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 2}
                            />
                        )}
                        {currentStep === 3 && (
                            <AccessSecurity
                                data={formData}
                                update={updateFormData}
                                onNext={nextStep}
                                onBack={prevStep}
                                canNext={isDirty || maxStepReached > 3}
                            />
                        )}
                        {currentStep === 4 && (
                            <Review
                                data={formData}
                                onBack={prevStep}
                                onSubmit={() =>
                                    alert('Employee Added Successfully!')
                                }
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddEmployee;
