import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { Link } from '@inertiajs/react';
import { Check, Globe, ShoppingBag, Truck, Utensils } from 'lucide-react'; // Placeholder icons
import { useState } from 'react';
import LeftArrow from '../images/icons/backArrow.svg?react';
import ColorRight from '../images/icons/colorRight.svg?react';
import Dashboard from '../images/icons/dashBaordSvg.svg';
import DineIn from '../images/icons/dineIn.svg?react'
import Delivery from '../images/icons/delivery.svg?react'
import OnlineOrder from '../images/icons/onlineOrder.svg?react'
import TakeAway from '../images/icons/takeAway.svg?react'

const OperationalConfig = () => {
    // --- Form State ---
    const [formData, setFormData] = useState({
        // Service Models
        dineIn: true,
        takeaway: true,
        delivery: false,
        onlineOrdering: false,
        // System Modules
        inventory: true,
        kds: true,
        // Integrations
        whatsapp: false,
        whatsappNumber: '',
        onlinePlatform: false,
        websiteUrl: '',
        // Hardware
        posCount: 3,
        kioskCount: 0,
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

    // Reusable Toggle Component for this page
    const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
        <div className="flex items-center gap-3">
            <button
                onClick={onChange}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    checked ? 'bg-[#79B800]' : 'bg-gray-200'
                }`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        checked ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
            </button>
            <span className="text-sm font-medium text-gray-700">
                {checked ? 'YES' : 'NO'}
            </span>
        </div>
    );

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
                        <Link href="/business/addbusiness">
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
                    <div className="space-y-6 pt-6">
                        
                        {/* 1. Service Models */}
                        <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-10 border-t border-[#E8E6EA] pt-8">
                            <div className="col-span-3">
                                <h3 className="text-md font-semibold text-gray-700">Service Models</h3>
                            </div>
                            <div className="col-span-9">
                                <div className="grid grid-cols-2 gap-4 border border-[#E8E6EA] rounded-lg shadow-xs p-6">
                                    {/* Dine-In */}
                                    <button 
                                        onClick={() => updateForm('dineIn', !formData.dineIn)}
                                        className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${
                                            formData.dineIn ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        {/* <Utensils className="h-5 w-5" /> */}
                                        <DineIn className='w-5 h-5'/>
                                        Dine-In
                                    </button>

                                    {/* Takeaway / Pickup */}
                                    <button 
                                        onClick={() => updateForm('takeaway', !formData.takeaway)}
                                        className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${
                                            formData.takeaway ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        <TakeAway className="h-5 w-5" />
                                        Takeaway / Pickup
                                    </button>

                                    {/* Delivery */}
                                    <button 
                                        onClick={() => updateForm('delivery', !formData.delivery)}
                                        className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${
                                            formData.delivery ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Delivery className="h-5 w-5" />
                                        Delivery
                                    </button>

                                    {/* Online Ordering */}
                                    <button 
                                        onClick={() => updateForm('onlineOrdering', !formData.onlineOrdering)}
                                        className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${
                                            formData.onlineOrdering ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        <OnlineOrder className="h-5 w-5" />
                                        Online Ordering
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 2. System Modules */}
                        <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-10">
                            <div className="col-span-3">
                                <h3 className="text-md font-semibold text-gray-700">System Modules</h3>
                            </div>
                            <div className="col-span-9 space-y-6 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                                {/* Inventory */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">Inventory Management</h4>
                                    <p className="mb-3 text-sm text-gray-500">Enable Inventory Management</p>
                                    <Toggle checked={formData.inventory} onChange={() => updateForm('inventory', !formData.inventory)} />
                                </div>

                                {/* KDS */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">Kitchen Display</h4>
                                    <p className="mb-3 text-sm text-gray-500">Enable KDS</p>
                                    <Toggle checked={formData.kds} onChange={() => updateForm('kds', !formData.kds)} />
                                </div>
                            </div>
                        </div>

                        {/* 3. Integrations & Hardware */}
                        <div className="grid grid-cols-12 gap-10 pb-10">
                            <div className="col-span-3">
                                <h3 className="text-md font-semibold text-gray-700">Integrations & Hardware</h3>
                            </div>
                            <div className="col-span-9 space-y-8 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                                
                                {/* WhatsApp Integration */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">WhatsApp Integration</h4>
                                        <p className="mb-3 text-sm text-gray-500">Connect Business Account</p>
                                        <div className="mt-4">
                                            <p className="mb-2 text-xs font-medium text-gray-500">WhatsApp integration</p>
                                            <Toggle checked={formData.whatsapp} onChange={() => updateForm('whatsapp', !formData.whatsapp)} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">WhatsApp Account Number</label>
                                        <input 
                                            type="text" 
                                            placeholder="WhatsApp Number" 
                                            value={formData.whatsappNumber}
                                            onChange={(e) => updateForm('whatsappNumber', e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                    </div>
                                </div>

                                {/* Online Ordering Platform */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Online Ordering Platform</h4>
                                        <div className="mt-4">
                                            <p className="mb-2 text-xs font-medium text-gray-500">Ordering Platform</p>
                                            <Toggle checked={formData.onlinePlatform} onChange={() => updateForm('onlinePlatform', !formData.onlinePlatform)} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Website URL</label>
                                        <input 
                                            type="text" 
                                            placeholder="https://restaurantname.com" 
                                            value={formData.websiteUrl}
                                            onChange={(e) => updateForm('websiteUrl', e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                    </div>
                                </div>

                                {/* Hardware Count */}
                                <div>
                                    <h4 className="mb-4 text-sm font-semibold text-gray-900">Hardware Count</h4>
                                    
                                    <div className="mb-4">
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Number of POS Terminals</label>
                                        <input 
                                            type="number" 
                                            value={formData.posCount}
                                            onChange={(e) => updateForm('posCount', e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">Additional charges apply for terminals beyond the plan limit.</p>
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">Number of Kiosk Machines</label>
                                        <input 
                                            type="number" 
                                            value={formData.kioskCount}
                                            onChange={(e) => updateForm('kioskCount', e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">Additional charges apply for Kiosk Machines beyond the plan limit.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
                    <Link href="/business/addbusiness">
                        <IconButton className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">Back</IconButton>
                    </Link>
                    <Button>
                        Next: Subscription
                        <ColorRight />
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default OperationalConfig;