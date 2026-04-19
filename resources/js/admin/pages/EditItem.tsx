import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import Dashboard from '@/shared/images/icons/dashBaordSvg.svg';
import { router } from '@inertiajs/react';
import { useState } from 'react';

import ItemDetails from '@/admin/components/additemsteps/ItemDetails';
import RecipeStock from '@/admin/components/additemsteps/RecipeStock';
import Variant from '@/admin/components/additemsteps/Variant';

const EditItem = () => {
    // 1. We use tabs instead of numbered steps for Edit Mode
    const [activeTab, setActiveTab] = useState<
        'details' | 'recipe' | 'variants'
    >('details');
    const [isDirty, setIsDirty] = useState(false);

    // 2. This data would normally come from your database via props/API
    const [formData, setFormData] = useState({
        itemCode: 'ITM-000145',
        itemName: 'Spicy Noodles',
        category: 'main-course',
        kitchenStation: 'hot_station',
        preparationTime: '20',
        status: 'active',
        image: null as File | null,
        description:
            'Fresh hand-pulled noodles tossed in our signature spicy garlic chili oil',
        dietaryLabels: ['Spicy'] as string[],

        trackStock: false,
        estimatedCost: '1.500',
        basePrice: '0.000',
        manualTax: '',

        variants: [
            {
                id: '1',
                name: 'Standard',
                sellingPrice: '3.000',
                estimatedCost: '2.000',
                locked: true,
            },
            {
                id: '2',
                name: 'VIP Entry',
                sellingPrice: '5.000',
                estimatedCost: '3.500',
            },
            {
                id: '3',
                name: 'Kids Entry',
                sellingPrice: '2.000',
                estimatedCost: '1.000',
            },
        ],
        modifierGroups: [] as any[],
        addOns: [] as any[],
    });

    const updateFormData = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setIsDirty(true);
    };

    const handleSave = () => {
        console.log('Saving edited item...', formData);
        alert('Changes Saved Successfully!');
        setIsDirty(false);
    };

    const breadcrumbs = [
        { label: 'Menu', isActive: false, href: '/admin/menu' },
        { label: 'Items', isActive: false, href: '/admin/menu' },
        { label: 'Edit', isActive: true },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50/30">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <div className="sticky top-0 z-50">
                    <TopBar
                        title={`Edit Item: ${formData.itemName}`}
                        icon={Dashboard}
                        breadcrumbs={breadcrumbs}
                    />
                </div>

                <div className="flex-1 px-12 py-6">
                    {/* Navigation Row: Back Button & Tabs */}
                    <div className="mb-8 flex items-center justify-between">
                        {/* Back Button */}
                        <button
                            onClick={() => router.visit('/admin/menu')}
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
                                onClick={() => setActiveTab('details')}
                                className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${
                                    activeTab === 'details'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Item Details
                            </button>
                            <button
                                onClick={() => setActiveTab('recipe')}
                                className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${
                                    activeTab === 'recipe'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Recipe & Stock
                            </button>
                            <button
                                onClick={() => setActiveTab('variants')}
                                className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${
                                    activeTab === 'variants'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Variants & Add-ons
                            </button>
                        </div>

                        {/* Invisible spacer to balance the flex-between layout */}
                        <div className="w-[88px]"></div>
                    </div>

                    {/* Content Renderer - Passing isEditMode! */}
                    <div className="mt-6">
                        {activeTab === 'details' && (
                            <ItemDetails
                                data={formData}
                                update={updateFormData}
                                onBack={() => router.visit('/admin/menu')}
                                isEditMode={true}
                                onSave={handleSave}
                                canNext={isDirty}
                            />
                        )}
                        {activeTab === 'recipe' && (
                            <RecipeStock
                                data={formData}
                                update={updateFormData}
                                onBack={() => router.visit('/admin/menu')}
                                isEditMode={true}
                                onSave={handleSave}
                                canNext={isDirty}
                            />
                        )}
                        {activeTab === 'variants' && (
                            <Variant
                                data={formData}
                                update={updateFormData}
                                onBack={() => router.visit('/admin/menu')}
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

export default EditItem;
