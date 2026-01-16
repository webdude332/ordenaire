// import Button from '@/components/Button';
// import IconButton from '@/components/IconButton';
// import ColorRight from '@/images/icons/colorRight.svg?react';
// import Delivery from '@/images/icons/delivery.svg?react';
// import DineIn from '@/images/icons/dineIn.svg?react';
// import OnlineOrder from '@/images/icons/onlineOrder.svg?react';
// import TakeAway from '@/images/icons/takeAway.svg?react';

// interface StepProps {
//     data: any;
//     update: (field: string, value: any) => void;
//     onNext: () => void;
//     onBack: () => void;
// }

// const OperationalConfigStep = ({ data, update, onNext, onBack }: StepProps) => {
//     // Toggle Component
//     const Toggle = ({
//         checked,
//         onChange,
//     }: {
//         checked: boolean;
//         onChange: () => void;
//     }) => (
//         <div className="flex items-center gap-3">
//             <button
//                 onClick={onChange}
//                 className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? 'bg-[#79B800]' : 'bg-gray-200'}`}
//             >
//                 <span
//                     className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`}
//                 />
//             </button>
//             <span className="text-sm font-medium text-gray-700">
//                 {checked ? 'YES' : 'NO'}
//             </span>
//         </div>
//     );

//     return (
//         <div>
//             {/* Top Back Button */}
//             {/* <div className="mb-6">
//                 <button onClick={onBack} className="text-md flex cursor-pointer items-center gap-2 rounded-lg border border-[#B5B0BA] bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
//                     <LeftArrow className="h-5 w-5 text-[#B5B0BA]" />
//                     Go Back
//                 </button>
//             </div> */}

//             <div className="space-y-6 pt-6">
//                 {/* 1. Service Models */}
//                 <div className="grid grid-cols-12 gap-10 border-t border-b border-[#E8E6EA] pt-8 pb-10">
//                     <div className="col-span-3">
//                         <h3 className="text-md font-semibold text-gray-700">
//                             Service Models
//                         </h3>
//                     </div>
//                     <div className="col-span-9">
//                         <div className="grid grid-cols-2 gap-4 rounded-lg border border-[#E8E6EA] p-6 shadow-xs">
//                             <button
//                                 onClick={() => update('dineIn', !data.dineIn)}
//                                 className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${data.dineIn ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'}`}
//                             >
//                                 <DineIn className="h-5 w-5" />
//                                 Dine-In
//                             </button>
//                             <button
//                                 onClick={() =>
//                                     update('takeaway', !data.takeaway)
//                                 }
//                                 className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${data.takeaway ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'}`}
//                             >
//                                 <TakeAway className="h-5 w-5" />
//                                 Takeaway / Pickup
//                             </button>
//                             <button
//                                 onClick={() =>
//                                     update('delivery', !data.delivery)
//                                 }
//                                 className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${data.delivery ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'}`}
//                             >
//                                 <Delivery className="h-5 w-5" />
//                                 Delivery
//                             </button>
//                             <button
//                                 onClick={() =>
//                                     update(
//                                         'onlineOrdering',
//                                         !data.onlineOrdering,
//                                     )
//                                 }
//                                 className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${data.onlineOrdering ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'}`}
//                             >
//                                 <OnlineOrder className="h-5 w-5" />
//                                 Online Ordering
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 2. System Modules */}
//                 <div className="grid grid-cols-12 gap-10 border-b border-[#E8E6EA] pb-10">
//                     <div className="col-span-3">
//                         <h3 className="text-md font-semibold text-gray-700">
//                             System Modules
//                         </h3>
//                     </div>
//                     <div className="col-span-9 space-y-6 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
//                         <div>
//                             <h4 className="text-sm font-semibold text-gray-900">
//                                 Inventory Management
//                             </h4>
//                             <p className="mb-3 text-sm text-gray-500">
//                                 Enable Inventory Management
//                             </p>
//                             <Toggle
//                                 checked={data.inventory}
//                                 onChange={() =>
//                                     update('inventory', !data.inventory)
//                                 }
//                             />
//                         </div>
//                         <div>
//                             <h4 className="text-sm font-semibold text-gray-900">
//                                 Kitchen Display
//                             </h4>
//                             <p className="mb-3 text-sm text-gray-500">
//                                 Enable KDS
//                             </p>
//                             <Toggle
//                                 checked={data.kds}
//                                 onChange={() => update('kds', !data.kds)}
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* 3. Integrations & Hardware */}
//                 <div className="grid grid-cols-12 gap-10 pb-10">
//                     <div className="col-span-3">
//                         <h3 className="text-md font-semibold text-gray-700">
//                             Integrations & Hardware
//                         </h3>
//                     </div>
//                     <div className="col-span-9 space-y-8 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
//                         {/* <div className="grid grid-cols-2 gap-6 ">
//                             <div><h4 className="text-sm font-semibold text-gray-900">WhatsApp Integration</h4><p className="mb-3 text-sm text-gray-500">Connect Business Account</p><div className="mt-4"><p className="mb-2 text-xs font-medium text-gray-500">WhatsApp integration</p><Toggle checked={data.whatsapp} onChange={() => update('whatsapp', !data.whatsapp)} /></div></div>
//                             <div><label className="mb-1.5 block text-sm font-medium text-gray-700">WhatsApp Account Number</label><input type="text" placeholder="WhatsApp Number" value={data.whatsappNumber} onChange={(e) => update('whatsappNumber', e.target.value)} className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]" /></div>
//                         </div> */}
//                         <div className="grid grid-cols-2 gap-6">
//                             {/* Left Side: Header + Toggle */}
//                             <div className="flex flex-col">
//                                 <h4 className="text-sm font-semibold text-gray-900">
//                                     WhatsApp Integration
//                                 </h4>
//                                 <p className="mb-3 text-sm text-gray-500">
//                                     Connect Business Account
//                                 </p>

//                                 {/* Toggle Section - Pushed down by natural flow */}
//                                 <div className="mt-4">
//                                     <p className="mb-2 text-xs font-medium text-gray-500">
//                                         WhatsApp integration
//                                     </p>
//                                     <div className="flex items-center gap-3">
//                                         <Toggle
//                                             checked={data.whatsapp}
//                                             onChange={() =>
//                                                 update(
//                                                     'whatsapp',
//                                                     !data.whatsapp,
//                                                 )
//                                             }
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex flex-col justify-end pb-1">
//                                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                                     WhatsApp Account Number
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="WhatsApp Number"
//                                     value={data.whatsappNumber}
//                                     onChange={(e) =>
//                                         update('whatsappNumber', e.target.value)
//                                     }
//                                     className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
//                                 />
//                             </div>
//                         </div>
//                         {/* <div className="grid grid-cols-2 gap-6">
//                             <div><h4 className="text-sm font-semibold text-gray-900">Online Ordering Platform</h4><div className="mt-4"><p className="mb-2 text-xs font-medium text-gray-500">Ordering Platform</p><Toggle checked={data.onlinePlatform} onChange={() => update('onlinePlatform', !data.onlinePlatform)} /></div></div>
//                             <div><label className="mb-1.5 block text-sm font-medium text-gray-700">Website URL</label><input type="text" placeholder="https://restaurantname.com" value={data.websiteUrl} onChange={(e) => update('websiteUrl', e.target.value)} className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]" /></div>
//                         </div> */}
//                         <div className="grid grid-cols-2 gap-6">
//                             {/* Left Side: Header + Toggle */}
//                             <div className="flex flex-col">
//                                 <h4 className="text-sm font-semibold text-gray-900">
//                                     Online Ordering Platform
//                                 </h4>

//                                 {/* Toggle Section */}
//                                 <div className="mt-4">
//                                     <p className="mb-2 text-xs font-medium text-gray-500">
//                                         Ordering Platform
//                                     </p>
//                                     <div className="flex items-center gap-3">
//                                         <Toggle
//                                             checked={data.onlinePlatform}
//                                             onChange={() =>
//                                                 update(
//                                                     'onlinePlatform',
//                                                     !data.onlinePlatform,
//                                                 )
//                                             }
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Right Side: Input - Aligned to Bottom */}
//                             <div className="flex flex-col justify-end pb-1">
//                                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                                     Website URL
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="https://restaurantname.com"
//                                     value={data.websiteUrl}
//                                     onChange={(e) =>
//                                         update('websiteUrl', e.target.value)
//                                     }
//                                     className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="mb-4 text-sm font-semibold text-gray-900">
//                                 Hardware Count
//                             </h4>
//                             <div className="mb-4">
//                                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                                     Number of POS Terminals
//                                 </label>
//                                 <input
//                                     type="number"
//                                     value={data.posCount}
//                                     onChange={(e) =>
//                                         update('posCount', e.target.value)
//                                     }
//                                     className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
//                                 />
//                                 <p className="mt-1 text-xs text-gray-500">
//                                     Additional charges apply for terminals
//                                     beyond the plan limit.
//                                 </p>
//                             </div>
//                             <div>
//                                 <label className="mb-1.5 block text-sm font-medium text-gray-700">
//                                     Number of Kiosk Machines
//                                 </label>
//                                 <input
//                                     type="number"
//                                     value={data.kioskCount}
//                                     onChange={(e) =>
//                                         update('kioskCount', e.target.value)
//                                     }
//                                     className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
//                                 />
//                                 <p className="mt-1 text-xs text-gray-500">
//                                     Additional charges apply for Kiosk Machines
//                                     beyond the plan limit.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer Buttons */}
//             <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
//                 <IconButton
//                     onClick={onBack}
//                     className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
//                 >
//                     Back
//                 </IconButton>
//                 <Button onClick={onNext}>
//                     Next: Subscription
//                     <ColorRight />
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default OperationalConfigStep;

import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import ColorRight from '@/images/icons/colorRight.svg?react';
import Delivery from '@/images/icons/delivery.svg?react';
import DineIn from '@/images/icons/dineIn.svg?react';
import OnlineOrder from '@/images/icons/onlineOrder.svg?react';
import TakeAway from '@/images/icons/takeAway.svg?react';

interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext: () => void;
    onBack: () => void;
    isEditMode?: boolean; // New
}

const OperationalConfigStep = ({
    data,
    update,
    onNext,
    onBack,
    isEditMode = false,
}: StepProps) => {
    const Toggle = ({
        checked,
        onChange,
    }: {
        checked: boolean;
        onChange: () => void;
    }) => (
        <div className="flex items-center gap-3">
            <button
                onClick={onChange}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? 'bg-[#79B800]' : 'bg-gray-200'}`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`}
                />
            </button>
            <span className="text-sm font-medium text-gray-700">
                {checked ? 'YES' : 'NO'}
            </span>
        </div>
    );

    return (
        <div>
            <div className="space-y-6 pt-6">
                {/* 1. Service Models */}
                <div className="grid grid-cols-12 gap-10 border-t border-b border-[#E8E6EA] pt-8 pb-10">
                    <div className="col-span-3">
                        <h3 className="text-md font-semibold text-gray-700">
                            Service Models
                        </h3>
                    </div>
                    <div className="col-span-9">
                        <div className="grid grid-cols-2 gap-4 rounded-lg border border-[#E8E6EA] p-6 shadow-xs">
                            <button
                                onClick={() => update('dineIn', !data.dineIn)}
                                className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${data.dineIn ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'}`}
                            >
                                <DineIn className="h-5 w-5" />
                                Dine-In
                            </button>
                            <button
                                onClick={() =>
                                    update('takeaway', !data.takeaway)
                                }
                                className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${data.takeaway ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'}`}
                            >
                                <TakeAway className="h-5 w-5" />
                                Takeaway / Pickup
                            </button>
                            <button
                                onClick={() =>
                                    update('delivery', !data.delivery)
                                }
                                className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${data.delivery ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'}`}
                            >
                                <Delivery className="h-5 w-5" />
                                Delivery
                            </button>
                            <button
                                onClick={() =>
                                    update(
                                        'onlineOrdering',
                                        !data.onlineOrdering,
                                    )
                                }
                                className={`flex h-[60px] items-center justify-center gap-3 rounded-lg border text-sm font-medium transition-colors ${data.onlineOrdering ? 'border-[#8CDD05] bg-[#F8FFEB] text-gray-900' : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'}`}
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
                        <h3 className="text-md font-semibold text-gray-700">
                            System Modules
                        </h3>
                    </div>
                    <div className="col-span-9 space-y-6 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                                Inventory Management
                            </h4>
                            <p className="mb-3 text-sm text-gray-500">
                                Enable Inventory Management
                            </p>
                            <Toggle
                                checked={data.inventory}
                                onChange={() =>
                                    update('inventory', !data.inventory)
                                }
                            />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                                Kitchen Display
                            </h4>
                            <p className="mb-3 text-sm text-gray-500">
                                Enable KDS
                            </p>
                            <Toggle
                                checked={data.kds}
                                onChange={() => update('kds', !data.kds)}
                            />
                        </div>
                    </div>
                </div>

                {/* 3. Integrations & Hardware */}
                <div className="grid grid-cols-12 gap-10 pb-10">
                    <div className="col-span-3">
                        <h3 className="text-md font-semibold text-gray-700">
                            Integrations & Hardware
                        </h3>
                    </div>
                    <div className="col-span-9 space-y-8 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <h4 className="text-sm font-semibold text-gray-900">
                                    WhatsApp Integration
                                </h4>
                                <p className="mb-3 text-sm text-gray-500">
                                    Connect Business Account
                                </p>
                                <div className="mt-4">
                                    <p className="mb-2 text-xs font-medium text-gray-500">
                                        WhatsApp integration
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <Toggle
                                            checked={data.whatsapp}
                                            onChange={() =>
                                                update(
                                                    'whatsapp',
                                                    !data.whatsapp,
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end pb-1">
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    WhatsApp Account Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="WhatsApp Number"
                                    value={data.whatsappNumber}
                                    onChange={(e) =>
                                        update('whatsappNumber', e.target.value)
                                    }
                                    disabled={!data.whatsapp}
                                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05] disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <h4 className="text-sm font-semibold text-gray-900">
                                    Online Ordering Platform
                                </h4>
                                <div className="mt-4">
                                    <p className="mb-2 text-xs font-medium text-gray-500">
                                        Ordering Platform
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <Toggle
                                            checked={data.onlinePlatform}
                                            onChange={() =>
                                                update(
                                                    'onlinePlatform',
                                                    !data.onlinePlatform,
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end pb-1">
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Website URL
                                </label>
                                <input
                                    type="text"
                                    placeholder="https://restaurantname.com"
                                    value={data.websiteUrl}
                                    onChange={(e) =>
                                        update('websiteUrl', e.target.value)
                                    }
                                    disabled={!data.onlinePlatform}
                                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05] disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className="mb-4 text-sm font-semibold text-gray-900">
                                Hardware Count
                            </h4>
                            <div className="mb-4">
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Number of POS Terminals
                                </label>
                                <input
                                    type="number"
                                    value={data.posCount}
                                    onChange={(e) =>
                                        update('posCount', e.target.value)
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Additional charges apply for terminals
                                    beyond the plan limit.
                                </p>
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Number of Kiosk Machines
                                </label>
                                <input
                                    type="number"
                                    value={data.kioskCount}
                                    onChange={(e) =>
                                        update('kioskCount', e.target.value)
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Additional charges apply for Kiosk Machines
                                    beyond the plan limit.
                                </p>
                            </div>
                        </div>
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
        </div>
    );
};

export default OperationalConfigStep;
