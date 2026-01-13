import Button from '@/components/Button';
import CustomDropdown from '@/components/CustomDropdown'; // Reuse your dropdown
import IconButton from '@/components/IconButton';
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { Link } from '@inertiajs/react';
import { Calendar, Check, Plus, Trash2, UploadCloud } from 'lucide-react';
import { useState } from 'react';
import LeftArrow from '../images/icons/backArrow.svg?react';
import ColorRight from '../images/icons/colorRight.svg?react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

const SubscriptionCompliance = () => {
    // --- Form State ---
    const [formData, setFormData] = useState({
        subscriptionTier: 'Options: Starter, Pro, Enterprise.',
        billingFrequency: 'Monthly', // Monthly, Yearly
        startDate: '2025-08-29',
        trialPeriod: '14',
        setupFee: '0.000',
        autoRenew: 'Enabled', // Enabled, Disabled
        discountType: 'Percentage', // Percentage, Amount
        discountValue: '',
    });

    // Helper to update form data
    const updateForm = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Breadcrumbs
    const breadcrumbs = [
        {
            label: 'Business Management',
            isActive: false,
            href: '/business-management',
        },
        {
            label: 'Business Profiles',
            isActive: false,
            href: '/business-management',
        },
        { label: 'Register New Businesses', isActive: true },
    ];

    // Dropdown Options
    const tierOptions = [
        { label: 'Starter Plan', value: 'Starter' },
        { label: 'Pro Plan', value: 'Pro' },
        { label: 'Enterprise Plan', value: 'Enterprise' },
    ];

    // --- Custom Radio Button Component ---
    const RadioGroup = ({
        options,
        value,
        onChange,
    }: {
        options: string[];
        value: string;
        onChange: (val: string) => void;
    }) => (
        <div className="flex items-center gap-6">
            {options.map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-2">
                    <div className="relative flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 bg-white">
                        {value === option && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#8CDD05]" />
                        )}
                        <input
                            type="radio"
                            className="hidden"
                            checked={value === option}
                            onChange={() => onChange(option)}
                        />
                    </div>
                    <span className="text-sm text-gray-700">{option}</span>
                </label>
            ))}
        </div>
    );

    // --- Documents Data (Mock) ---
    const documents = [
        {
            name: 'Trade License',
            status: 'Not Uploaded',
            expiry: '-',
            file: null,
        },
        {
            name: 'Tax/VAT Certificate',
            status: 'TRN_Cert_2025.pdf',
            expiry: '20 Nov 2028',
            file: true, // Mock logic for uploaded
        },
        {
            name: 'Service Agreement',
            status: 'Not Uploaded',
            expiry: '-',
            file: null,
        },
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

                <div className="flex-1 px-8 py-6">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link href="/business/operational-config">
                            <button className="text-md flex cursor-pointer items-center gap-2 rounded-lg border border-[#B5B0BA] bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                                <LeftArrow className="h-5 w-5 text-[#B5B0BA]" />
                                Go Back
                            </button>
                        </Link>
                    </div>

                    {/* Page Title */}
                    <h2 className="mb-8 text-xl font-semibold text-gray-900">
                        Register New Businesses
                    </h2>

                    {/* ================= TIMELINE STEPPER ================= */}


                    {/* ================= FORM SECTIONS ================= */}
                    <div className="space-y-10 pt-6">
                        
                        {/* 1. Plan Details */}
                        <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-10">
                            <div className="col-span-3">
                                <h3 className="text-sm font-semibold text-gray-700">Plan Details</h3>
                            </div>
                            <div className="col-span-9 space-y-6 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                                
                                {/* Row 1: Subscription Tier & Billing Frequency */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <CustomDropdown
                                            label="Subscription Tier"
                                            required
                                            placeholder="Options: Starter, Pro, Enterprise."
                                            value={formData.subscriptionTier}
                                            onChange={(val) => updateForm('subscriptionTier', val)}
                                            options={tierOptions}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-gray-700">Billing Frequency</label>
                                        <div className="pt-2">
                                            <RadioGroup 
                                                options={['Monthly', 'Yearly']} 
                                                value={formData.billingFrequency} 
                                                onChange={(val) => updateForm('billingFrequency', val)} 
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: Start Date & Trial Period */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">Start Date<span className="text-[#8CDD05]">*</span></label>
                                        <div className="relative">
                                            <input 
                                                type="date"
                                                value={formData.startDate}
                                                onChange={(e) => updateForm('startDate', e.target.value)}
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-500 outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                            />
                                            {/* Calendar Icon overlay if needed, native date picker usually has one */}
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">Trial Period (Days)</label>
                                        <input 
                                            type="number" 
                                            value={formData.trialPeriod}
                                            onChange={(e) => updateForm('trialPeriod', e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: One-Time Fee & Auto-renew */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">One-Time Setup Fee</label>
                                        <div className="relative">
                                            <input 
                                                type="text" 
                                                value={formData.setupFee}
                                                onChange={(e) => updateForm('setupFee', e.target.value)}
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                            />
                                            <span className="absolute right-3 top-2.5 text-sm text-gray-500">AED</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-gray-700">Auto-renew</label>
                                        <div className="pt-2">
                                            <RadioGroup 
                                                options={['Enabled', 'Disabled']} 
                                                value={formData.autoRenew} 
                                                onChange={(val) => updateForm('autoRenew', val)} 
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 4: Discount */}
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-gray-700">Discount Type (Optional)</label>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="flex items-center pt-2">
                                            <RadioGroup 
                                                options={['Percentage', 'Amount']} 
                                                value={formData.discountType} 
                                                onChange={(val) => updateForm('discountType', val)} 
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <input 
                                                type="text" 
                                                placeholder="Enter Value" 
                                                value={formData.discountValue}
                                                onChange={(e) => updateForm('discountValue', e.target.value)}
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                            />
                                            <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Note: If a discount is applied, it is valid only for the first billing cycle. Any future discounts must be applied again from the Billing section.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* 2. Required Documentation */}
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-3">
                                <h3 className="text-sm font-semibold text-gray-700">Required Documentation</h3>
                                <p className="text-xs text-gray-500">Upload the required documents</p>
                            </div>
                            <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white shadow-xs overflow-hidden">
                                <table className="w-full text-left text-sm text-gray-500">
                                    <thead className="bg-gray-50 text-xs text-gray-500">
                                        <tr>
                                            <th className="px-6 py-4 font-medium">File Name</th>
                                            <th className="px-6 py-4 font-medium">File Status</th>
                                            <th className="px-6 py-4 font-medium">Expiry <span className="text-gray-400">↕</span></th>
                                            <th className="px-6 py-4 font-medium text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {documents.map((doc, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 text-gray-900 font-medium">{doc.name}</td>
                                                <td className="px-6 py-4">
                                                    {doc.file ? (
                                                        <span className="inline-flex items-center rounded-full bg-[#ECFDF3] px-2.5 py-0.5 text-xs font-medium text-[#027A48]">
                                                            <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#12B76A]"></div>
                                                            {doc.status}
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                                                            <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-gray-500"></div>
                                                            {doc.status}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-gray-900">{doc.expiry}</td>
                                                <td className="px-6 py-4 text-right">
                                                    {doc.file ? (
                                                        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                                                            <Trash2 className="h-3.5 w-3.5" />
                                                            Delete
                                                        </button>
                                                    ) : (
                                                        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                                                            <UploadCloud className="h-3.5 w-3.5" />
                                                            Upload
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="p-4 border-t border-gray-200 flex justify-end">
                                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                        <Plus className="h-4 w-4" />
                                        Add other document
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
                    <Link href="/business/operational-config">
                        <IconButton className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">Back</IconButton>
                    </Link>
                    <Button>
                        Next: Team Access
                        <ColorRight />
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default SubscriptionCompliance;