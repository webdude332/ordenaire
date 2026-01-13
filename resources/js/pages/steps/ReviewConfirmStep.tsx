import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import { CheckCircle2 } from 'lucide-react';
import Cafe from '@/images/icons/cafeIcon.svg?react';
import ColorRight from '@/images/icons/colorRight.svg?react';
import LeftArrow from '@/images/icons/backArrow.svg?react';

interface StepProps {
    data: any;
    onBack: () => void;
    onSubmit: () => void;
}

const ReviewConfirmStep = ({ data, onBack, onSubmit }: StepProps) => {
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

    const InfoRow = ({ label, value, className = '' }: { label: string; value: React.ReactNode; className?: string }) => (
        <div className={`grid grid-cols-12 gap-4 ${className}`}>
            <div className="col-span-4 text-sm text-gray-500">{label}</div>
            <div className="col-span-8 text-sm font-medium text-gray-900">{value || '-'}</div>
        </div>
    );

    return (
        <div>
            {/* Top Back Button */}
            {/* <div className="mb-6">
                <button onClick={onBack} className="text-md flex cursor-pointer items-center gap-2 rounded-lg border border-[#B5B0BA] bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                    <LeftArrow className="h-5 w-5 text-[#B5B0BA]" />
                    Go Back
                </button>
            </div> */}

            <div className="space-y-8 pt-6">
                {/* 1. Identity & Location */}
                <div className="grid grid-cols-12 gap-10 border-b border-t border-[#E8E6EA] pb-8 pt-8">
                    <div className="col-span-3"><h3 className="text-sm font-semibold text-gray-700">Identity & Location</h3></div>
                    <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div className="mb-6 flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-orange-50"><Cafe className="h-6 w-6 text-orange-500" /></div><h4 className="text-base font-semibold text-gray-900">{data.legalName || 'Business Name'}</h4></div>
                        <div className="space-y-4"><InfoRow label="Business ID" value={data.businessId} /><InfoRow label="Business Type" value={data.businessType} /><InfoRow label="Parent/ Branch" value={data.isBranch ? `Branch (Parent: ${data.parentBusiness || 'N/A'})` : 'Main Branch'} /><div className="h-px w-full bg-gray-100 my-4"></div><InfoRow label="Address" value={`${data.address}, ${data.city}, ${data.country}`} /><InfoRow label="Language" value={data.language} /><InfoRow label="Currency" value={data.country === 'Kuwait' ? 'KWD' : 'AED'} /></div>
                    </div>
                </div>

                {/* 2. Subscription & Legal */}
                <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-8">
                    <div className="col-span-3"><h3 className="text-sm font-semibold text-gray-700">Subscription & Legal</h3></div>
                    <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div className="space-y-4"><InfoRow label="Plan" value={`${data.subscriptionTier} Plan (${data.billingFrequency})`} /><InfoRow label="Cost" value="Calculated at Checkout" /><InfoRow label="Setup Fee" value={`${data.setupFee} ${data.country === 'Kuwait' ? 'KWD' : 'AED'}`} /><div className="h-px w-full bg-gray-100 my-4"></div><InfoRow label="Start Date" value={data.startDate} /><InfoRow label="Trial Period" value={`${data.trialPeriod} Days`} /><div className="h-px w-full bg-gray-100 my-4"></div><div className="grid grid-cols-12 gap-4"><div className="col-span-4 text-sm text-gray-500">Documents</div><div className="col-span-8 flex gap-3">{documents.map((doc, idx) => (<span key={idx} className="inline-flex items-center gap-1.5 rounded-md bg-[#F0F9FF] px-2.5 py-1 text-xs font-medium text-[#026AA2] border border-[#B9E6FE]"><CheckCircle2 className="h-3.5 w-3.5 text-[#026AA2] fill-[#F0F9FF]" />{doc}</span>))}</div></div></div>
                    </div>
                </div>

                {/* 3. System Configuration */}
                <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-8">
                    <div className="col-span-3"><h3 className="text-sm font-semibold text-gray-700">System Configuration</h3></div>
                    <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div className="space-y-4"><InfoRow label="Service Models" value={getServiceModels()} /><InfoRow label="Modules Active" value={getModules()} /><InfoRow label="Integrations" value={getIntegrations()} /><InfoRow label="Hardware" value={`${data.posCount} POS Terminals, ${data.kioskCount} Kiosk Machines`} /></div>
                    </div>
                </div>

                {/* 4. Team Access */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3"><h3 className="text-sm font-semibold text-gray-700">Team Access</h3></div>
                    <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div className="space-y-4"><InfoRow label="Primary Admin" value={`${data.branchAdmin} (${data.email})`} /><InfoRow label="Additional Invites" value="0 Users will be invited." /></div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
                    <IconButton onClick={onBack} className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">Back</IconButton>
                    <button onClick={onSubmit} className="flex items-center gap-2 rounded-lg bg-[#8CDD05] px-6 py-2 text-sm font-bold text-white hover:bg-[#7AB621] shadow-sm">Confirm & Create Business</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewConfirmStep;