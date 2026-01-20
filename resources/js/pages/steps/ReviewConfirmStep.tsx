// import Button from '@/components/Button';
// import IconButton from '@/components/IconButton';
// import Cafe from '@/images/icons/cafeIcon.svg?react';
// import ColorRight from '@/images/icons/colorRight.svg?react';
// import LeftArrow from '@/images/icons/backArrow.svg?react';
// import Tick from '../../images/icons/checkIcon.svg?react'
// import { useState } from 'react';
// import { router } from '@inertiajs/react';

// interface StepProps {
//     data: any;
//     onBack: () => void;
//     onSubmit: () => void;
// }

// const ReviewConfirmStep = ({ data, onBack, onSubmit }: StepProps) => {
//     const [showSuccessModal, setShowSuccessModal] = useState(false);
//     // Helpers to format data
//     const getServiceModels = () => {
//         const models = [];
//         if (data.dineIn) models.push('Dine-in');
//         if (data.takeaway) models.push('Takeaway');
//         if (data.delivery) models.push('Delivery');
//         if (data.onlineOrdering) models.push('Online Ordering');
//         return models.join(', ') || 'None selected';
//     };
//     const getModules = () => {
//         const mods = [];
//         if (data.inventory) mods.push('Inventory Management');
//         if (data.kds) mods.push('KDS Display');
//         return mods.join(', ') || 'None selected';
//     };
//     const getIntegrations = () => {
//         const ints = [];
//         if (data.whatsapp) ints.push('WhatsApp Integration');
//         if (data.onlinePlatform) ints.push('Online Ordering Platform');
//         return ints.join(', ') || 'None selected';
//     };
//     const documents = ['Trade License', 'Tax Certificate'];

//     const InfoRow = ({ label, value, className = '' }: { label: string; value: React.ReactNode; className?: string }) => (
//         <div className={`grid grid-cols-12 gap-4 ${className}`}>
//             <div className="col-span-4 text-sm text-gray-500">{label}</div>
//             <div className="col-span-8 text-sm font-medium text-gray-900">{value || '-'}</div>
//         </div>
//     );

//     return (
//         <div>
//             <div className="space-y-8 pt-6">
//                 {/* 1. Identity & Location */}
//                 <div className="grid grid-cols-12 gap-10 border-b border-t border-[#E8E6EA] pb-8 pt-8">
//                     <div className="col-span-3"><h3 className="text-sm font-semibold text-gray-700">Identity & Location</h3></div>
//                     <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
//                         <div className="mb-6 flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-orange-50"><Cafe className="h-6 w-6 text-orange-500" /></div><h4 className="text-base font-semibold text-gray-900">{data.legalName || 'Business Name'}</h4></div>
//                         <div className="space-y-4"><InfoRow label="Business ID" value={data.businessId} /><InfoRow label="Business Type" value={data.businessType} /><InfoRow label="Parent/ Branch" value={data.isBranch ? `Branch (Parent: ${data.parentBusiness || 'N/A'})` : 'Main Branch'} /><div className="h-px w-full bg-gray-100 my-4"></div><InfoRow label="Address" value={`${data.address}, ${data.city}, ${data.country}`} /><InfoRow label="Language" value={data.language} /><InfoRow label="Currency" value={data.country === 'Kuwait' ? 'KWD' : 'AED'} /></div>
//                     </div>
//                 </div>

//                 {/* 2. Subscription & Legal */}
//                 <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-8">
//                     <div className="col-span-3"><h3 className="text-sm font-semibold text-gray-700">Subscription & Legal</h3></div>
//                     <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-[#F9F7FA] p-6 shadow-xs">
//                         <div className="space-y-4"><InfoRow label="Plan" value={`${data.subscriptionTier} Plan (${data.billingFrequency})`} /><InfoRow label="Cost" value="Calculated at Checkout" /><InfoRow label="Setup Fee" value={`${data.setupFee} ${data.country === 'Shop 4, Al Rigga Road, Deira, Dubai, UAE' ? 'AED' : 'AED'}`} /><div className="h-px w-full bg-gray-100 my-4"></div><InfoRow label="Start Date" value={data.startDate} /><InfoRow label="Trial Period" value={`${data.trialPeriod} Days`} /><div className="h-px w-full bg-gray-100 my-4"></div><div className="grid grid-cols-12 gap-4"><div className="col-span-4 text-sm text-gray-500">Documents</div><div className="col-span-8 flex gap-3">{documents.map((doc, idx) => (<span key={idx} className="inline-flex items-center gap-1.5 rounded-md bg-[#F0F9FF] px-2.5 py-1 text-xs font-medium text-[#363F72] border border-[#D5D9EB]"><div className='bg-primary p-0.5 rounded-sm'><Tick className="h-3 w-3 text-white" /></div>{doc}</span>))}</div></div></div>
//                     </div>
//                 </div>

//                 {/* 3. System Configuration */}
//                 <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-8">
//                     <div className="col-span-3"><h3 className="text-sm font-semibold text-gray-700">System Configuration</h3></div>
//                     <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
//                         <div className="space-y-4"><InfoRow label="Service Models" value={getServiceModels()} /><InfoRow label="Modules Active" value={getModules()} /><InfoRow label="Integrations" value={getIntegrations()} /><InfoRow label="Hardware" value={`${data.posCount} POS Terminals, ${data.kioskCount} Kiosk Machines`} /></div>
//                     </div>
//                 </div>

//                 {/* 4. Team Access */}
//                 <div className="grid grid-cols-12 gap-10">
//                     <div className="col-span-3"><h3 className="text-sm font-semibold text-gray-700">Team Access</h3></div>
//                     <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
//                         <div className="space-y-4"><InfoRow label="Primary Admin" value={`${data.branchAdmin} (${data.email})`} /><InfoRow label="Additional Invites" value="0 Users will be invited." /></div>
//                     </div>
//                 </div>

//                 {/* Footer Buttons */}
//                 <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
//                     <IconButton onClick={onBack} className=" py-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">Back</IconButton>
//                     <Button onClick={onSubmit} className='cursor-pointer'>
//                         Confirm & Create Business
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReviewConfirmStep;

import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import Cafe from '@/images/icons/cafeIcon.svg?react';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import Tick from '../../images/icons/checkIcon.svg?react';
// Added icons for the modal
import ModalTick from '@/images/icons/modalTick.svg?react';
import { FileText, X } from 'lucide-react';

interface StepProps {
    data: any;
    onBack: () => void;
    onSubmit: () => void;
}

const ReviewConfirmStep = ({ data, onBack, onSubmit }: StepProps) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Helpers to format data
    const getServiceModels = () => {
        const models = [];
        if (data.dineIn) models.push('Dine-in');
        if (data.takeaway) models.push('Takeaway');
        if (data.delivery) models.push('Delivery');
        if (data.onlineOrdering) models.push('Online Ordering');
        return models.join(', ') || 'None selected';
    };
    const getModules = () => {
        const mods = [];
        if (data.inventory) mods.push('Inventory Management');
        if (data.kds) mods.push('KDS Display');
        return mods.join(', ') || 'None selected';
    };
    const getIntegrations = () => {
        const ints = [];
        if (data.whatsapp) ints.push('WhatsApp Integration');
        if (data.onlinePlatform) ints.push('Online Ordering Platform');
        return ints.join(', ') || 'None selected';
    };
    const documents = ['Trade License', 'Tax Certificate'];

    const InfoRow = ({
        label,
        value,
        className = '',
    }: {
        label: string;
        value: React.ReactNode;
        className?: string;
    }) => (
        <div className={`grid grid-cols-12 gap-4 ${className}`}>
            <div className="col-span-4 text-sm text-gray-500">{label}</div>
            <div className="col-span-8 text-sm font-medium text-gray-900">
                {value || '-'}
            </div>
        </div>
    );

    // --- Modal Handlers ---
    const handleConfirmClick = () => {
        // You can call the backend submit here if needed: onSubmit();
        setShowSuccessModal(true);
    };

    const handleGoToDashboard = () => {
        router.visit('/busines-management');
    };

    return (
        <div>
            <div className="space-y-8 pt-6">
                {/* 1. Identity & Location */}
                <div className="grid grid-cols-12 gap-10 border-t border-b border-[#E8E6EA] pt-8 pb-8">
                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-700">
                            Identity & Location
                        </h3>
                    </div>
                    <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-orange-50">
                                <Cafe className="h-6 w-6 text-orange-500" />
                            </div>
                            <h4 className="text-base font-semibold text-gray-900">
                                {data.legalName || 'Business Name'}
                            </h4>
                        </div>
                        <div className="space-y-4">
                            <InfoRow
                                label="Business ID"
                                value={data.businessId}
                            />
                            <InfoRow
                                label="Business Type"
                                value={data.businessType}
                            />
                            <InfoRow
                                label="Parent/ Branch"
                                value={
                                    data.isBranch
                                        ? `Branch (Parent: ${data.parentBusiness || 'N/A'})`
                                        : 'Main Branch'
                                }
                            />
                            <div className="my-4 h-px w-full bg-gray-100"></div>
                            <InfoRow
                                label="Address"
                                value={`${data.address}, ${data.city}, ${data.country}`}
                            />
                            <InfoRow label="Language" value={data.language} />
                            <InfoRow
                                label="Currency"
                                value={
                                    data.country === 'Kuwait' ? 'KWD' : 'AED'
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* 2. Subscription & Legal */}
                <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-8">
                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-700">
                            Subscription & Legal
                        </h3>
                    </div>
                    <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-[#F9F7FA] p-6 shadow-xs">
                        <div className="space-y-4">
                            <InfoRow
                                label="Plan"
                                value={`${data.subscriptionTier} Plan (${data.billingFrequency})`}
                            />
                            <InfoRow
                                label="Cost"
                                value="Calculated at Checkout"
                            />
                            <InfoRow
                                label="Setup Fee"
                                value={`${data.setupFee} ${data.country === 'Shop 4, Al Rigga Road, Deira, Dubai, UAE' ? 'AED' : 'AED'}`}
                            />
                            <div className="my-4 h-px w-full bg-gray-100"></div>
                            <InfoRow
                                label="Start Date"
                                value={data.startDate}
                            />
                            <InfoRow
                                label="Trial Period"
                                value={`${data.trialPeriod} Days`}
                            />
                            <div className="my-4 h-px w-full bg-gray-100"></div>
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-4 text-sm text-gray-500">
                                    Documents
                                </div>
                                <div className="col-span-8 flex gap-3">
                                    {documents.map((doc, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center gap-1.5 rounded-md border border-[#D5D9EB] bg-[#F0F9FF] px-2.5 py-1 text-xs font-medium text-[#363F72]"
                                        >
                                            <div className="rounded-sm bg-primary p-0.5">
                                                <Tick className="h-3 w-3 text-white" />
                                            </div>
                                            {doc}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. System Configuration */}
                <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-8">
                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-700">
                            System Configuration
                        </h3>
                    </div>
                    <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div className="space-y-4">
                            <InfoRow
                                label="Service Models"
                                value={getServiceModels()}
                            />
                            <InfoRow
                                label="Modules Active"
                                value={getModules()}
                            />
                            <InfoRow
                                label="Integrations"
                                value={getIntegrations()}
                            />
                            <InfoRow
                                label="Hardware"
                                value={`${data.posCount} POS Terminals, ${data.kioskCount} Kiosk Machines`}
                            />
                        </div>
                    </div>
                </div>

                {/* 4. Team Access */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-700">
                            Team Access
                        </h3>
                    </div>
                    <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div className="space-y-4">
                            <InfoRow
                                label="Primary Admin"
                                value={`${data.branchAdmin} (${data.email})`}
                            />
                            <InfoRow
                                label="Additional Invites"
                                value="0 Users will be invited."
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
                    <IconButton
                        onClick={onBack}
                        className="border border-gray-300 bg-white py-1 text-gray-700 hover:bg-gray-50"
                    >
                        Back
                    </IconButton>
                    {/* Updated onClick to show modal */}
                    <Button
                        onClick={handleConfirmClick}
                        className="cursor-pointer"
                    >
                        Confirm & Create Business
                    </Button>
                </div>
            </div>

            {/* ================= SUCCESS MODAL ================= */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm transition-opacity">
                    <div className="relative w-full max-w-2xl transform rounded-xl bg-white p-6 shadow-xl transition-all sm:p-8">
                        {/* Top Left Icon */}
                        <div className="absolute top-6 left-6 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                            <FileText className="h-5 w-5 text-gray-600" />
                        </div>

                        {/* Close X Button */}
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Main Content */}
                        <div className="mt-8 flex flex-col items-center justify-center">
                            {/* Green Check Icon */}
                            {/* <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                                <Check className="h-10 w-10 text-white stroke-[3]" />
                            </div> */}
                            <div className="mb-6">
                                <ModalTick className="h-16 w-16" />
                            </div>

                            {/* Text */}
                            <h3 className="text-center text-xl font-bold text-gray-900">
                                Business Created Successfully
                            </h3>
                            <p className="mt-2 px-4 text-center text-sm text-gray-500">
                                The business profile has been created
                                successfully and invitation emails have been
                                sent to the team members.
                            </p>

                            {/* Navigation Button */}
                            <button
                                onClick={handleGoToDashboard}
                                className="mt-8 w-full rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-[#8CDD05] focus:ring-offset-2 focus:outline-none"
                            >
                                Go to Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewConfirmStep;
