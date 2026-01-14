import Button from '@/components/Button';
import CustomDropdown from '@/components/CustomDropdown';
import IconButton from '@/components/IconButton';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import BusinessProfileIcon from '@/images/icons/businessProfileIcon.svg?react';
import ColorRight from '@/images/icons/colorRight.svg?react';
import LeftArrow from '@/images/icons/backArrow.svg?react';
import MailIcon from '@/images/icons/mailIcon.svg?react';

interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext: () => void;
    onBack: () => void;
}

const CompanyProfileStep = ({ data, update, onNext, onBack }: StepProps) => {
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);

    // Options
    const typeOptions = [ { label: 'Restaurant', value: 'Restaurant' }, { label: 'Cafe', value: 'Cafe' }, { label: 'Food Truck', value: 'Food Truck' }, { label: 'Bakery', value: 'Bakery' }, { label: 'Retail', value: 'Retail' } ];
    const parentOptions = [ { label: 'Tea Time HQ (BIZ-1001)', value: 'Tea Time HQ' }, { label: 'Burger King Main (BIZ-1002)', value: 'Burger King Main' } ];
    const countryOptions = [ { label: 'Kuwait', value: 'Kuwait' }, { label: 'UAE', value: 'UAE' } ];
    const langOptions = [ { label: 'English', value: 'English', flag: '🇺🇸' }, { label: 'Arabic', value: 'Arabic', flag: '🇦🇪' } ];
    const phoneCodeOptions = [ { label: '+965', value: '+965' }, { label: '+971', value: '+971' }, { label: '+966', value: '+966' } ];

    return (
        <div>
            {/* Top Back Button (NO LINK, uses onBack) */}
            {/* <div className="mb-6">
                <button onClick={onBack} className="text-md flex cursor-pointer items-center gap-2 rounded-lg border border-[#B5B0BA] bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                    <LeftArrow className="h-5 w-5 text-[#B5B0BA]" />
                    Go Back
                </button>
            </div> */}

            <div className="space-y-10 pt-10 border-t border-gray-200">
                {/* Basic Business Info */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3">
                        <h3 className="text-md font-semibold text-gray-700">Basic Business Info</h3>
                    </div>
                    <div className="col-span-9 space-y-6 rounded-xl border border-borderColor px-6 py-8 shadow-xs">
                        {/* Name & ID */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-md font-medium text-gray-700">Legal Business Name<span className="text-[#8CDD05]">*</span></label>
                                <input type="text" placeholder="e.g., Tea Time Jumeirah" value={data.legalName} onChange={(e) => update('legalName', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">Business ID (Auto-generated)</label>
                                <input type="text" value={data.businessId} disabled className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500" />
                            </div>
                        </div>
                        {/* Logo */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">Business logo</label>
                            <p className="text-xs text-gray-500">Upload the Business logo.</p>
                            <div className="flex items-center gap-4 pt-2">
                                <BusinessProfileIcon className="h-20 w-20" />
                                <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Click to Upload</button>
                            </div>
                        </div>
                        {/* Type & Branch */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <CustomDropdown label="Business Type" required value={data.businessType} onChange={(val) => update('businessType', val)} options={typeOptions} />
                            </div>
                            <div className="grid grid-cols-2 items-start gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Is this a Branch</label>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => update('isBranch', !data.isBranch)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${data.isBranch ? 'bg-[#79B800]' : 'bg-gray-200'}`}>
                                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${data.isBranch ? 'translate-x-6' : 'translate-x-1'}`} />
                                        </button>
                                        <span className="text-sm font-medium text-gray-700">{data.isBranch ? 'YES' : 'NO'}</span>
                                    </div>
                                </div>
                                <CustomDropdown label="Parent Business" disabled={!data.isBranch} placeholder="Search by Business Name or ID..." value={data.parentBusiness} onChange={(val) => update('parentBusiness', val)} options={parentOptions} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-gray-200"></div>

                {/* Location */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3">
                        <h3 className="text-md font-semibold text-gray-700">Location Details</h3>
                    </div>
                    <div className="col-span-9 space-y-6 rounded-xl border border-borderColor px-6 py-8 shadow-xs">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">Full Address<span className="text-[#8CDD05]">*</span></label>
                            <input type="text" placeholder="Enter full address" value={data.address} onChange={(e) => update('address', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <CustomDropdown label="Country" required value={data.country} onChange={(val) => update('country', val)} options={countryOptions} renderOption={(option) => (<div className="flex items-center gap-2">{option.value === 'Kuwait' ? (<div className="flex h-4 w-6 flex-col overflow-hidden rounded-sm border border-gray-200 bg-gray-100"><div className="h-1 bg-green-600"></div><div className="h-1 bg-white"></div><div className="h-1 bg-red-600"></div></div>) : (<div className="h-4 w-6 overflow-hidden rounded-sm border border-gray-200 bg-green-600"></div>)}<span>{option.label}</span></div>)} />
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">City<span className="text-[#8CDD05]">*</span></label>
                                <input type="text" placeholder="e.g., Dubai" value={data.city} onChange={(e) => update('city', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">Currency (Auto-filled)</label>
                                <input type="text" placeholder="Based on Country, e.g., AED" disabled className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500" />
                            </div>
                            <CustomDropdown label="Preferred Language" value={data.language} onChange={(val) => update('language', val)} options={langOptions} renderOption={(option) => (<div className="flex items-center gap-2"><span className="text-lg leading-none">{option.flag}</span><span>{option.label}</span></div>)} />
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-gray-200"></div>

                {/* Primary Contact */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3">
                        <h3 className="text-md font-semibold text-gray-700">Primary Contact</h3>
                    </div>
                    <div className="col-span-9 space-y-6 rounded-xl border border-borderColor px-6 py-10 shadow-xs">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">Branch Admin Name<span className="text-[#8CDD05]">*</span></label>
                                <input type="text" placeholder="e.g., Omar Ali" value={data.branchAdmin} onChange={(e) => update('branchAdmin', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">Phone number<span className="text-[#8CDD05]">*</span></label>
                                <div className="relative flex items-center rounded-lg border border-gray-300 bg-white transition-all focus-within:border-[#8CDD05] focus-within:ring-1 focus-within:ring-[#8CDD05]">
                                    <button type="button" onClick={() => setIsPhoneOpen(!isPhoneOpen)} className="flex items-center gap-1 pl-3 pr-2 text-sm text-gray-900 outline-none">
                                        <span>{data.phoneCode}</span>
                                        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isPhoneOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    <input type="text" placeholder="66778844" value={data.phone} onChange={(e) => update('phone', e.target.value)} className="w-full border-none bg-transparent py-2.5 pl-2 pr-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-0" />
                                    {isPhoneOpen && (
                                        <>
                                            <div className="fixed inset-0 z-10" onClick={() => setIsPhoneOpen(false)} />
                                            <ul className="absolute left-0 top-full z-20 mt-1 max-h-48 w-24 overflow-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                                                {phoneCodeOptions.map((option) => (
                                                    <li key={option.value}>
                                                        <button type="button" onClick={() => { update('phoneCode', option.value); setIsPhoneOpen(false); }} className={`block w-full px-4 py-2 text-left text-sm hover:bg-[#F8FFEB] hover:text-[#578500] ${data.phoneCode === option.value ? 'bg-[#F8FFEB] font-medium text-[#578500]' : 'text-gray-700'}`}>
                                                            {option.label}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">Email address<span className="text-[#8CDD05]">*</span></label>
                                <div className="relative flex items-center justify-center">
                                    <div className="pointer-events-none absolute left-3 top-2.5 text-gray-400"><MailIcon className="h-5 w-5" /></div>
                                    <input type="email" placeholder="e.g., omar@teatime.com" value={data.email} onChange={(e) => update('email', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2.5 pl-10 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]" />
                                </div>
                                <p className="text-xs text-gray-500">This email will receive the initial invite in Step 4.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
                    <IconButton onClick={onBack}>Cancel</IconButton>
                    <Button onClick={onNext} className='cursor-pointer'>
                        Next: Operations
                        <ColorRight />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfileStep;