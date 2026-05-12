// export default function EditDriver() {
//     return <div>EditDriver</div>;
// }

import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import Dashboard from '@/shared/images/icons/dashBaordSvg.svg';
import { router } from '@inertiajs/react';
import { useState } from 'react';

import DriverBasicDetails from '@/admin/components/driversteps/DriverBasicDetails';
import DriverCompensation from '@/admin/components/driversteps/DriverCompensation';
import { DriverFormData } from './AddDriver';

const EditDriver = () => {
    const [activeTab, setActiveTab] = useState<'basic' | 'compensation'>(
        'basic',
    );
    const [isDirty, setIsDirty] = useState(false);

    // Mock data for edit view
    const [formData, setFormData] = useState<DriverFormData>({
        staffId: 'STF-0003',
        fullName: 'Noah Pierre',
        email: 'noah@ordenaire.com',
        phone: '+965 66557788',
        status: 'active',
        image: null,
        employmentType: 'full_time',
        baseSalary: '250.000',
        workHours: '9',
        workDays: '6',
        bankName: 'National Bank of Kuwait (NBK)',
        accountHolder: 'Noah Pierre',
        iban: 'KW99 NBKK 0000 1234 5678 99',
        branch: 'Mirpur-1 (Main)',
    });

    const updateFormData = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setIsDirty(true);
    };

    const handleSave = () => {
        console.log('Saving edited driver...', formData);
        alert('Driver Changes Saved Successfully!');
        setIsDirty(false);
    };

    const breadcrumbs = [
        {
            label: 'Delivery Partners',
            isActive: false,
            href: '/admin/delivery-partners',
        },
        { label: 'Edit', isActive: true },
    ];

    return (
        <div className="flex min-h-screen bg-white">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <div className="sticky top-0 z-50">
                    <TopBar
                        title="Edit Driver"
                        subtitle={`${formData.fullName} (${formData.staffId})`}
                        icon={Dashboard}
                        breadcrumbs={breadcrumbs}
                    />
                </div>

                <div className="flex-1 px-12 py-6">
                    <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-4">
                        <button
                            onClick={() =>
                                router.visit('/admin/delivery-partners')
                            }
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

                        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-1 shadow-sm">
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
                                Compensation & Documents
                            </button>
                        </div>
                        <div className="w-[88px]"></div>
                    </div>

                    <div className="mt-6">
                        {activeTab === 'basic' && (
                            <DriverBasicDetails
                                data={formData}
                                update={updateFormData}
                                onBack={() =>
                                    router.visit('/admin/delivery-partners')
                                }
                                isEditMode={true}
                                onSave={handleSave}
                                canNext={isDirty}
                            />
                        )}
                        {activeTab === 'compensation' && (
                            <DriverCompensation
                                data={formData}
                                update={updateFormData}
                                onBack={() =>
                                    router.visit('/admin/delivery-partners')
                                }
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

export default EditDriver;
