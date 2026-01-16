// import AddDocModal from '@/components/AddDocModal';
// import Button from '@/components/Button';
// import CustomDropdown from '@/components/CustomDropdown';
// import IconButton from '@/components/IconButton';
// import UploadDocumentModal from '@/components/UploadDoc'; // Adjust path if needed
// import ColorRight from '@/images/icons/colorRight.svg?react';
// import DelIcon from '@/images/icons/delIcon.svg?react';
// import Upload from '@/images/icons/upload.svg?react';
// import { Plus } from 'lucide-react';
// import { useState } from 'react';

// interface StepProps {
//     data: any;
//     update: (field: string, value: any) => void;
//     onNext: () => void;
//     onBack: () => void;
// }

// const SubscriptionStep = ({ data, update, onNext, onBack }: StepProps) => {
//     // --- State for Upload Modal (Existing) ---
//     const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
//     const [selectedDocTitle, setSelectedDocTitle] = useState('');

//     // --- State for Add Document Modal (NEW) ---
//     const [isAddDocModalOpen, setIsAddDocModalOpen] = useState(false);

//     // --- Handlers for Upload Modal ---
//     const handleOpenUpload = (docName: string) => {
//         setSelectedDocTitle(docName);
//         setIsUploadModalOpen(true);
//     };

//     const handleCloseUpload = () => {
//         setIsUploadModalOpen(false);
//         setSelectedDocTitle('');
//     };

//     const handleConfirmUpload = () => {
//         console.log(`Uploaded ${selectedDocTitle}`);
//         setIsUploadModalOpen(false);
//     };

//     // --- Handlers for Add Document Modal (NEW) ---
//     const handleOpenAddDoc = () => {
//         setIsAddDocModalOpen(true);
//     };

//     const handleCloseAddDoc = () => {
//         setIsAddDocModalOpen(false);
//     };

//     const tierOptions = [
//         { label: 'Starter Plan', value: 'Starter' },
//         { label: 'Pro Plan', value: 'Pro' },
//         { label: 'Enterprise Plan', value: 'Enterprise' },
//     ];

//     const documents = [
//         {
//             name: 'Trade License',
//             status: 'Not Uploaded',
//             expiry: '-',
//             isUploaded: false,
//         },
//         {
//             name: 'Tax/VAT Certificate',
//             status: 'TRN_Cert_2025.pdf',
//             expiry: '20 Nov 2028',
//             isUploaded: true,
//         },
//         {
//             name: 'Service Agreement',
//             status: 'Not Uploaded',
//             expiry: '-',
//             isUploaded: false,
//         },
//     ];

//     const RadioGroup = ({
//         options,
//         value,
//         onChange,
//     }: {
//         options: string[];
//         value: string;
//         onChange: (val: string) => void;
//     }) => (
//         <div className="flex items-center gap-6">
//             {options.map((option) => (
//                 <label
//                     key={option}
//                     className="flex cursor-pointer items-center gap-2"
//                 >
//                     <div
//                         className={`flex h-5 w-5 items-center justify-center rounded-full border ${value === option ? 'border-[#8CDD05]' : 'border-gray-300'} bg-white`}
//                     >
//                         {value === option && (
//                             <div className="h-2.5 w-2.5 rounded-full bg-[#8CDD05]" />
//                         )}
//                         <input
//                             type="radio"
//                             className="hidden"
//                             checked={value === option}
//                             onChange={() => onChange(option)}
//                         />
//                     </div>
//                     <span className="text-sm text-gray-700">{option}</span>
//                 </label>
//             ))}
//         </div>
//     );

//     return (
//         <div>
//             <div className="space-y-6 pt-6">
//                 {/* 1. Plan Details */}
//                 <div className="grid grid-cols-12 gap-10 border-t border-b border-[#E8E6EA] pt-8 pb-10">
//                     <div className="col-span-3">
//                         <h3 className="text-sm font-semibold text-gray-700">
//                             Plan Details
//                         </h3>
//                     </div>
//                     <div className="col-span-9 space-y-6 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
//                         {/* ... (Existing Form Content) ... */}
//                         <div className="grid grid-cols-2 gap-6">
//                             <div>
//                                 <CustomDropdown
//                                     label="Subscription Tier"
//                                     required
//                                     placeholder="Options: Starter, Pro, Enterprise."
//                                     value={data.subscriptionTier}
//                                     onChange={(val) =>
//                                         update('subscriptionTier', val)
//                                     }
//                                     options={tierOptions}
//                                 />
//                             </div>
//                             <div className="space-y-3">
//                                 <label className="text-sm font-medium text-gray-700">
//                                     Billing Frequency
//                                 </label>
//                                 <div className="pt-2">
//                                     <RadioGroup
//                                         options={['Monthly', 'Yearly']}
//                                         value={data.billingFrequency}
//                                         onChange={(val) =>
//                                             update('billingFrequency', val)
//                                         }
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-6">
//                             <div className="space-y-1.5">
//                                 <label className="text-sm font-medium text-gray-700">
//                                     Start Date
//                                     <span className="text-[#8CDD05]">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={data.startDate}
//                                     onChange={(e) =>
//                                         update('startDate', e.target.value)
//                                     }
//                                     className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-500 outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
//                                 />
//                             </div>
//                             <div className="space-y-1.5">
//                                 <label className="text-sm font-medium text-gray-700">
//                                     Trial Period (Days)
//                                 </label>
//                                 <input
//                                     type="number"
//                                     value="14"
//                                     className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
//                                 />
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-6">
//                             <div className="space-y-1.5">
//                                 <label className="text-sm font-medium text-gray-700">
//                                     One-Time Setup Fee
//                                 </label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         value={data.setupFee}
//                                         onChange={(e) =>
//                                             update('setupFee', e.target.value)
//                                         }
//                                         className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
//                                     />
//                                     <span className="absolute top-2.5 right-3 text-sm text-gray-500">
//                                         AED
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="space-y-3">
//                             <div className="grid grid-cols-2 gap-6">
//                                 {/* Left Column: Contains both Auto-renew and Discount Type */}
//                                 <div className="flex flex-col gap-6">
//                                     {/* Top: Auto-renew Section */}
//                                     <div>
//                                         <label className="text-sm font-medium text-gray-700">
//                                             Auto-renew
//                                         </label>
//                                         <div className="mt-2">
//                                             <RadioGroup
//                                                 options={[
//                                                     'Enabled',
//                                                     'Disabled',
//                                                 ]}
//                                                 value={data.autoRenew}
//                                                 onChange={(val) =>
//                                                     update('autoRenew', val)
//                                                 }
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Bottom: Discount Type Section */}
//                                     <div>
//                                         <div className="pb-2">
//                                             <label className="text-sm font-medium text-gray-700">
//                                                 Discount Type (Optional)
//                                             </label>
//                                         </div>
//                                         <RadioGroup
//                                             options={['Percentage', 'Amount']}
//                                             value="Percentage"
//                                             onChange={() => {}}
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Right Column: Input & Button - Aligned to the bottom */}
//                                 <div className="flex flex-col justify-end">
//                                     <div className="flex gap-2">
//                                         <input
//                                             type="text"
//                                             placeholder="Enter Value"
//                                             className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
//                                         />
//                                         <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-600 hover:bg-gray-50">
//                                             Apply
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <p className="mt-2 text-xs text-gray-500">
//                                 Note: If a discount is applied, it is valid only
//                                 for the first billing cycle.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 2. Required Documentation */}
//                 <div className="grid grid-cols-12 gap-10 pb-6">
//                     <div className="col-span-3">
//                         <h3 className="text-sm font-semibold text-gray-700">
//                             Required Documentation
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                             Upload the required documents
//                         </p>
//                     </div>
//                     <div className="col-span-9 overflow-hidden rounded-xl border border-[#E8E6EA] bg-white shadow-xs">
//                         <table className="w-full text-left text-sm text-gray-500">
//                             <thead className="bg-gray-50 text-xs text-gray-500">
//                                 <tr>
//                                     <th className="px-6 py-4 font-medium">
//                                         File Name
//                                     </th>
//                                     <th className="px-6 py-4 font-medium">
//                                         File Status
//                                     </th>
//                                     <th className="px-6 py-4 font-medium">
//                                         Expiry{' '}
//                                         <span className="text-gray-400">
//                                             ↕
//                                         </span>
//                                     </th>
//                                     <th className="px-6 py-4 text-right font-medium">
//                                         Action
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-200 bg-white">
//                                 {documents.map((doc, index) => (
//                                     <tr key={index}>
//                                         <td className="px-6 py-4 font-medium text-gray-900">
//                                             {doc.name}
//                                         </td>
//                                         <td className="px-6 py-4">
//                                             {doc.isUploaded ? (
//                                                 <span className="inline-flex items-center rounded-lg border border-[#ABEFC6] bg-[#ECFDF3] px-2.5 py-0.5 text-xs font-medium text-[#027A48]">
//                                                     <div className="mr-1.5 h-1.5 w-1.5 rounded-sm bg-[#12B76A]"></div>
//                                                     {doc.status}
//                                                 </span>
//                                             ) : (
//                                                 <span className="inline-flex items-center rounded-lg border border-borderColor bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600">
//                                                     <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-gray-500"></div>
//                                                     {doc.status}
//                                                 </span>
//                                             )}
//                                         </td>
//                                         <td className="px-6 py-4 text-gray-900">
//                                             {doc.expiry}
//                                         </td>
//                                         <td className="px-6 py-4 text-right">
//                                             {doc.isUploaded ? (
//                                                 <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
//                                                     <DelIcon className="h-4 w-4 text-iconColor" />
//                                                     Delete
//                                                 </button>
//                                             ) : (
//                                                 <button
//                                                     onClick={() =>
//                                                         handleOpenUpload(
//                                                             doc.name,
//                                                         )
//                                                     }
//                                                     className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
//                                                 >
//                                                     <Upload className="h-3.5 w-3.5" />
//                                                     Upload
//                                                 </button>
//                                             )}
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <div className="flex justify-end border-t border-gray-200 p-4">
//                             {/* --- ADD OTHER DOCUMENT BUTTON --- */}
//                             <button
//                                 onClick={handleOpenAddDoc} // Trigger separate state
//                                 className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                             >
//                                 <Plus className="h-4 w-4" />
//                                 Add other document
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Buttons */}
//                 <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
//                     <IconButton
//                         onClick={onBack}
//                         className="cursor-pointer border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
//                     >
//                         Back
//                     </IconButton>
//                     <Button onClick={onNext}>
//                         Next: Team Access
//                         <ColorRight />
//                     </Button>
//                 </div>
//             </div>

//             {/* --- Upload Modal (Uses selectedDocTitle) --- */}
//             <UploadDocumentModal
//                 isOpen={isUploadModalOpen}
//                 onClose={handleCloseUpload}
//                 onUpload={handleConfirmUpload}
//                 title={selectedDocTitle}
//             />

//             {/* --- Add Document Modal (New state) --- */}
//             <AddDocModal
//                 isOpen={isAddDocModalOpen}
//                 onClose={handleCloseAddDoc}
//                 onConfirm={() => {
//                     console.log('Document Added');
//                     handleCloseAddDoc();
//                 }}
//             />
//         </div>
//     );
// };

// export default SubscriptionStep;

import AddDocModal from '@/components/AddDocModal';
import Button from '@/components/Button';
import CustomDropdown from '@/components/CustomDropdown';
import IconButton from '@/components/IconButton';
import UploadDocumentModal from '@/components/UploadDocumentModal';
import ColorRight from '@/images/icons/colorRight.svg?react';
import DelIcon from '@/images/icons/delIcon.svg?react';
import Upload from '@/images/icons/upload.svg?react';
import { Plus } from 'lucide-react';
import { useState } from 'react';

interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext: () => void;
    onBack: () => void;
    isEditMode?: boolean; // New
}

const SubscriptionStep = ({
    data,
    update,
    onNext,
    onBack,
    isEditMode = false,
}: StepProps) => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [selectedDocTitle, setSelectedDocTitle] = useState('');
    const [isAddDocModalOpen, setIsAddDocModalOpen] = useState(false);

    const handleOpenUpload = (docName: string) => {
        setSelectedDocTitle(docName);
        setIsUploadModalOpen(true);
    };
    const handleCloseUpload = () => {
        setIsUploadModalOpen(false);
        setSelectedDocTitle('');
    };
    const handleConfirmUpload = () => {
        console.log(`Uploaded ${selectedDocTitle}`);
        setIsUploadModalOpen(false);
    };
    const handleOpenAddDoc = () => {
        setIsAddDocModalOpen(true);
    };
    const handleCloseAddDoc = () => {
        setIsAddDocModalOpen(false);
    };

    const tierOptions = [
        { label: 'Starter Plan', value: 'Starter' },
        { label: 'Pro Plan', value: 'Pro' },
        { label: 'Enterprise Plan', value: 'Enterprise' },
    ];
    const documents = [
        {
            name: 'Trade License',
            status: 'Not Uploaded',
            expiry: '-',
            isUploaded: false,
        },
        {
            name: 'Tax/VAT Certificate',
            status: 'TRN_Cert_2025.pdf',
            expiry: '20 Nov 2028',
            isUploaded: true,
        },
        {
            name: 'Service Agreement',
            status: 'Not Uploaded',
            expiry: '-',
            isUploaded: false,
        },
    ];

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
                <label
                    key={option}
                    className="flex cursor-pointer items-center gap-2"
                >
                    <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${value === option ? 'border-primary' : 'border-gray-300'} bg-white`}
                    >
                        {value === option && (
                            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
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

    return (
        <div>
            <div className="space-y-6 pt-6">
                {/* 1. Plan Details */}
                <div className="grid grid-cols-12 gap-10 border-t border-b border-[#E8E6EA] pt-8 pb-10">
                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-700">
                            Plan Details
                        </h3>
                    </div>
                    <div className="col-span-9 space-y-6 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <CustomDropdown
                                    label="Subscription Tier"
                                    required
                                    placeholder="Options: Starter, Pro, Enterprise."
                                    value={data.subscriptionTier}
                                    onChange={(val) =>
                                        update('subscriptionTier', val)
                                    }
                                    options={tierOptions}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-gray-700">
                                    Billing Frequency
                                </label>
                                <div className="pt-2">
                                    <RadioGroup
                                        options={['Monthly', 'Yearly']}
                                        value={data.billingFrequency}
                                        onChange={(val) =>
                                            update('billingFrequency', val)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">
                                    Start Date
                                    <span className="text-[#8CDD05]">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.startDate}
                                    onChange={(e) =>
                                        update('startDate', e.target.value)
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-500 outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">
                                    Trial Period (Days)
                                </label>
                                <input
                                    type="number"
                                    value="14"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">
                                    One-Time Setup Fee
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={data.setupFee}
                                        onChange={(e) =>
                                            update('setupFee', e.target.value)
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                    />
                                    <span className="absolute top-2.5 right-3 text-sm text-gray-500">
                                        AED
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-gray-700">
                                        Auto-renew
                                    </label>
                                    <div className="pt-2">
                                        <RadioGroup
                                            options={['Enabled', 'Disabled']}
                                            value={data.autoRenew}
                                            onChange={(val) =>
                                                update('autoRenew', val)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">
                                            Discount Type (Optional)
                                        </label>
                                        <div className="mt-2">
                                            <RadioGroup
                                                options={[
                                                    'Percentage',
                                                    'Amount',
                                                ]}
                                                value="Percentage"
                                                onChange={() => {}}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter Value"
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                        <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-600 hover:bg-gray-50">
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-gray-500">
                                Note: If a discount is applied, it is valid only
                                for the first billing cycle.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Required Documentation */}
                <div className="grid grid-cols-12 gap-10 pb-6">
                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-700">
                            Required Documentation
                        </h3>
                        <p className="text-xs text-gray-500">
                            Upload the required documents
                        </p>
                    </div>
                    <div className="col-span-9 overflow-hidden rounded-xl border border-[#E8E6EA] bg-white shadow-xs">
                        <table className="w-full text-left text-sm text-gray-500">
                            <thead className="bg-gray-50 text-xs text-gray-500">
                                <tr>
                                    <th className="px-6 py-4 font-medium">
                                        File Name
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        File Status
                                    </th>
                                    <th className="px-6 py-4 font-medium">
                                        Expiry{' '}
                                        <span className="text-gray-400">
                                            ↕
                                        </span>
                                    </th>
                                    <th className="px-6 py-4 text-right font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {documents.map((doc, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {doc.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {doc.isUploaded ? (
                                                <span className="inline-flex items-center rounded-lg border border-[#ABEFC6] bg-[#ECFDF3] px-2.5 py-0.5 text-xs font-medium text-[#027A48]">
                                                    <div className="mr-1.5 h-1.5 w-1.5 rounded-sm bg-[#12B76A]"></div>
                                                    {doc.status}
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center rounded-lg border border-borderColor bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                                                    <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-gray-500"></div>
                                                    {doc.status}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-gray-900">
                                            {doc.expiry}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            {doc.isUploaded ? (
                                                <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                                                    <DelIcon className="h-4 w-4 text-iconColor" />
                                                    Delete
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handleOpenUpload(
                                                            doc.name,
                                                        )
                                                    }
                                                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                                                >
                                                    <Upload className="h-3.5 w-3.5" />
                                                    Upload
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-end border-t border-gray-200 p-4">
                            <button
                                onClick={handleOpenAddDoc}
                                className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                <Plus className="h-4 w-4" />
                                Add other document
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons - HIDDEN IN EDIT MODE */}
                {!isEditMode && (
                    <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
                        <IconButton onClick={onBack}>Cancel</IconButton>
                        <Button onClick={onNext}>
                            Next: Operations <ColorRight />
                        </Button>
                    </div>
                )}

                <UploadDocumentModal
                    isOpen={isUploadModalOpen}
                    onClose={handleCloseUpload}
                    onUpload={handleConfirmUpload}
                    title={selectedDocTitle}
                />
                <AddDocModal
                    isOpen={isAddDocModalOpen}
                    onClose={handleCloseAddDoc}
                    onConfirm={() => {
                        console.log('Document Added');
                        handleCloseAddDoc();
                    }}
                />
            </div>
        </div>
    );
};

export default SubscriptionStep;
