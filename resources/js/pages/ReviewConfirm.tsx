import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { Link } from '@inertiajs/react';
import { Check, CheckCircle2 } from 'lucide-react';
import LeftArrow from '../images/icons/backArrow.svg?react';
import Cafe from '../images/icons/cafeIcon.svg?react'; // Reuse cafe icon for logo placeholder
import ColorRight from '../images/icons/colorRight.svg?react';
import Dashboard from '../images/icons/dashBaordSvg.svg';

const ReviewConfirm = () => {
    // --- Mock Data (In a real app, this would come from props or global state) ---
    const summaryData = {
        // Identity
        name: 'Tea Time Jumeirah',
        id: 'BIZ-2049',
        type: 'Full Service (Dine-in)',
        parent: 'Branch (Parent: Tea Time HQ)',
        address: 'Shop 4, Al Rigga Road, Deira, Dubai, UAE',
        language: 'English',
        currency: 'AED',
        // Subscription
        plan: 'Enterprise Plan (Monthly)',
        cost: 'AED 499.000 / month',
        setupFee: 'AED 0.000',
        startDate: '29 Aug 2025',
        trialPeriod: '14 Days',
        documents: ['Trade License', 'Tax Certificate'],
        // System
        serviceModels: 'Dine-in, Takeaway',
        modules: 'Inventory Management, KDS Display',
        integrations: 'WhatsApp Integration, Online Ordering Platform',
        hardware: '3 POS Terminals, 0 Kiosk Machines',
        // Team
        primaryAdmin: 'Omar Ali (omar@teatime.com)',
        invites: '2 Users will be invited.',
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

    // Reusable Row Component for Key-Value pairs
    const InfoRow = ({ label, value, className = '' }: { label: string; value: React.ReactNode; className?: string }) => (
        <div className={`grid grid-cols-12 gap-4 ${className}`}>
            <div className="col-span-4 text-sm text-gray-500">{label}</div>
            <div className="col-span-8 text-sm font-medium text-gray-900">{value}</div>
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
                        <Link href="/business/team-access">
                            <button className="text-md flex cursor-pointer items-center gap-2 rounded-lg border border-[#B5B0BA] bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                                <LeftArrow className="h-5 w-5 text-[#B5B0BA]" />
                                Go Back
                            </button>
                        </Link>
                    </div>

                    {/* Page Title */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Register New Businesses
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Please verify all information before creating the account. Invitations will be sent immediately.
                        </p>
                    </div>

                    {/* ================= TIMELINE STEPPER ================= */}


                    {/* ================= SUMMARY SECTIONS ================= */}
                    <div className="space-y-8 pt-6">
                        
                        {/* 1. Identity & Location */}
                        <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-8">
                            <div className="col-span-3">
                                <h3 className="text-sm font-semibold text-gray-700">Identity & Location</h3>
                            </div>
                            <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                                {/* Logo Header */}
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-orange-50">
                                        <Cafe className="h-6 w-6 text-orange-500" />
                                    </div>
                                    <h4 className="text-base font-semibold text-gray-900">{summaryData.name}</h4>
                                </div>

                                <div className="space-y-4">
                                    <InfoRow label="Business ID" value={summaryData.id} />
                                    <InfoRow label="Business Type" value={summaryData.type} />
                                    <InfoRow label="Parent/ Branch" value={summaryData.parent} />
                                    <div className="h-px w-full bg-gray-100 my-4"></div>
                                    <InfoRow label="Address" value={summaryData.address} />
                                    <InfoRow label="Language" value={summaryData.language} />
                                    <InfoRow label="Currency" value={summaryData.currency} />
                                </div>
                            </div>
                        </div>

                        {/* 2. Subscription & Legal */}
                        <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-8">
                            <div className="col-span-3">
                                <h3 className="text-sm font-semibold text-gray-700">Subscription & Legal</h3>
                            </div>
                            <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                                <div className="space-y-4">
                                    <InfoRow label="Plan" value={summaryData.plan} />
                                    <InfoRow label="Cost" value={summaryData.cost} />
                                    <InfoRow label="Setup Fee" value={summaryData.setupFee} />
                                    <div className="h-px w-full bg-gray-100 my-4"></div>
                                    <InfoRow label="Start Date" value={summaryData.startDate} />
                                    <InfoRow label="Trial Period" value={summaryData.trialPeriod} />
                                    <div className="h-px w-full bg-gray-100 my-4"></div>
                                    
                                    {/* Documents with Badges */}
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-4 text-sm text-gray-500">Documents</div>
                                        <div className="col-span-8 flex gap-3">
                                            {summaryData.documents.map((doc, idx) => (
                                                <span key={idx} className="inline-flex items-center gap-1.5 rounded-md bg-[#F0F9FF] px-2.5 py-1 text-xs font-medium text-[#026AA2] border border-[#B9E6FE]">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#026AA2] fill-[#F0F9FF]" />
                                                    {doc}
                                                </span>
                                            ))}
                                            {/* Note: I used blue style badges above, if you want Green specifically like the image: */}
                                            {/* <span className="inline-flex items-center gap-1.5 rounded-md bg-[#ECFDF3] px-2.5 py-1 text-xs font-medium text-[#027A48] border border-[#ABEFC6]">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-[#12B76A] fill-[#ECFDF3]" />
                                                Trade License
                                            </span> 
                                            */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. System Configuration */}
                        <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-8">
                            <div className="col-span-3">
                                <h3 className="text-sm font-semibold text-gray-700">System Configuration</h3>
                            </div>
                            <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                                <div className="space-y-4">
                                    <InfoRow label="Service Models" value={summaryData.serviceModels} />
                                    <InfoRow label="Modules Active" value={summaryData.modules} />
                                    <InfoRow label="Integrations" value={summaryData.integrations} />
                                    <InfoRow label="Hardware" value={summaryData.hardware} />
                                </div>
                            </div>
                        </div>

                        {/* 4. Team Access */}
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-3">
                                <h3 className="text-sm font-semibold text-gray-700">Team Access</h3>
                            </div>
                            <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                                <div className="space-y-4">
                                    <InfoRow label="Primary Admin" value={summaryData.primaryAdmin} />
                                    <InfoRow label="Additional Invites" value={summaryData.invites} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
                    <Link href="/business/team-access">
                        <IconButton className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">Back</IconButton>
                    </Link>
                    <button className="flex items-center gap-2 rounded-lg bg-[#8CDD05] px-6 py-2 text-sm font-bold text-white hover:bg-[#7AB621] shadow-sm">
                        Confirm & Create Business
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ReviewConfirm;