import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import Dashboard from '@/shared/images/icons/dashBaordSvg.svg';
import { router } from '@inertiajs/react';
import { useState } from 'react';

// Importing the employee steps
import AccessSecurity from '@/admin/components/employeesteps/AccessSecurity';
import BasicDetails from '@/admin/components/employeesteps/BasicDetails';
import Compensation from '@/admin/components/employeesteps/Compensation';

// Reusing the interface from AddEmployee (ideally this should be imported from a shared types file)
export interface EmployeeFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    image: File | null;
    role: string;
    department: string;
    status: string;
    password: string;
    employmentType: string;
    salaryAmount: string;
    currency: string;
}

const EditEmployee = () => {
    // 1. Using tabs for Edit Mode (omitting 'Review' since edits are usually saved directly)
    const [activeTab, setActiveTab] = useState<
        'basic' | 'compensation' | 'access'
    >('basic');
    const [isDirty, setIsDirty] = useState(false);

    // 2. Mock data simulating what would come from your DB
    const [formData, setFormData] = useState<EmployeeFormData>({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 234 567 8900',
        dateOfBirth: '1990-01-01',
        image: null,
        role: 'Manager',
        department: 'Kitchen',
        status: 'active',
        password: '', // Usually left blank on edit unless changing
        employmentType: 'Full-time',
        salaryAmount: '5000.00',
        currency: 'USD',
    });

    const updateFormData = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setIsDirty(true);
    };

    const handleSave = () => {
        console.log('Saving edited employee...', formData);
        alert('Employee Changes Saved Successfully!');
        setIsDirty(false);
    };

    const breadcrumbs = [
        { label: 'Employees', isActive: false, href: '/admin/employees' },
        { label: 'Edit', isActive: true },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50/30">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <div className="sticky top-0 z-50">
                    <TopBar
                        title={`Edit Employee: ${formData.firstName} ${formData.lastName}`}
                        icon={Dashboard}
                        breadcrumbs={breadcrumbs}
                    />
                </div>

                <div className="flex-1 px-12 py-6">
                    {/* Navigation Row: Back Button & Tabs */}
                    <div className="mb-8 flex items-center justify-between">
                        {/* Back Button */}
                        <button
                            onClick={() => router.visit('/admin/employees')}
                            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back
                        </button>

                        {/* Centered Tabs */}
                        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 p-1 shadow-sm">
                            <button
                                onClick={() => setActiveTab('basic')}
                                className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${
                                    activeTab === 'basic'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Basic Details
                            </button>
                            <button
                                onClick={() => setActiveTab('compensation')}
                                className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${
                                    activeTab === 'compensation'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Compensation
                            </button>
                            <button
                                onClick={() => setActiveTab('access')}
                                className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${
                                    activeTab === 'access'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Access & Security
                            </button>
                        </div>

                        {/* Invisible spacer to balance the flex-between layout */}
                        <div className="w-[88px]"></div>
                    </div>

                    {/* Content Renderer */}
                    <div className="mt-6">
                        {activeTab === 'basic' && (
                            <BasicDetails
                                data={formData}
                                update={updateFormData}
                                onBack={() => router.visit('/admin/employees')}
                                isEditMode={true}
                                onSave={handleSave}
                                canNext={isDirty}
                            />
                        )}
                        {activeTab === 'compensation' && (
                            <Compensation
                                data={formData}
                                update={updateFormData}
                                onBack={() => router.visit('/admin/employees')}
                                isEditMode={true}
                                onSave={handleSave}
                                canNext={isDirty}
                            />
                        )}
                        {activeTab === 'access' && (
                            <AccessSecurity
                                data={formData}
                                update={updateFormData}
                                onBack={() => router.visit('/admin/employees')}
                                isEditMode={true}
                                onSave={handleSave}
                                canNext={isDirty}
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EditEmployee;
