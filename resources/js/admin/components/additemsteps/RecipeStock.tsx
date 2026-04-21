// // is edit mode

// import InfoIcon from '@/shared/images/icons/infoRing.svg?react';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
// import { Label } from '@/shared/sharedcomponents/ui/FormElements';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';
// import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';

// // UPDATED: Added isEditMode and onSave, made onNext optional
// interface StepProps {
//     data: any;
//     update: (field: string, value: any) => void;
//     onNext?: () => void;
//     onBack: () => void;
//     canNext?: boolean;
//     isEditMode?: boolean;
//     onSave?: () => void;
// }

// const RecipeStock = ({
//     data,
//     update,
//     onNext,
//     onBack,
//     canNext = true,
//     isEditMode = false,
//     onSave,
// }: StepProps) => {
//     const basePrice = parseFloat(data.basePrice) || 0;
//     const estimatedCost = parseFloat(data.estimatedCost) || 0;
//     const netMargin = basePrice - estimatedCost;
//     const marginPct =
//         basePrice > 0 ? Math.round((netMargin / basePrice) * 100) : 0;

//     const taxOptions = [
//         { label: 'Manual Assignment', value: 'manual' },
//         { label: 'VAT (5%)', value: 'vat_5' },
//         { label: 'Excise Tax (50%)', value: 'excise_50' },
//         { label: 'No Tax', value: 'none' },
//     ];

//     return (
//         <div className="space-y-8 border-t border-gray-200 pt-8">
//             {/* Inventory Tracking */}
//             <div className="grid grid-cols-12 gap-8">
//                 <div className="col-span-3">
//                     <h3 className="text-sm font-semibold text-gray-900">
//                         Inventory Tracking
//                     </h3>
//                 </div>
//                 <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
//                     {/* Track Stock Toggle */}
//                     <div className="space-y-3">
//                         <Label className="text-sm font-medium text-gray-700">
//                             Track Stock?
//                         </Label>
//                         <RadioGroup
//                             name="track_stock"
//                             label=""
//                             value={data.trackStock ? 'on' : 'off'}
//                             onChange={(val) =>
//                                 update('trackStock', val === 'on')
//                             }
//                             options={[
//                                 { value: 'off', label: 'OFF' },
//                                 { value: 'on', label: 'ON' },
//                             ]}
//                             gap="gap-6"
//                         />
//                     </div>

//                     {/* Info when OFF */}
//                     {!data.trackStock && (
//                         <div className="flex items-center gap-3 rounded-xl border border-borderColor bg-white px-4 py-3">
//                             <span className="">
//                                 <InfoIcon className="h-8 w-8" />
//                             </span>
//                             <p className="text-sm text-gray-600">
//                                 This item is not tracked in stock. (Unlimited
//                                 Quantity).
//                             </p>
//                         </div>
//                     )}

//                     {/* Estimated Cost */}
//                     <div className="space-y-2">
//                         <Label className="text-sm font-medium text-gray-700">
//                             Estimated Cost Price
//                         </Label>
//                         <div className="relative w-64">
//                             <input
//                                 type="number"
//                                 step="0.001"
//                                 value={data.estimatedCost}
//                                 onChange={(e) =>
//                                     update('estimatedCost', e.target.value)
//                                 }
//                                 placeholder="0.000"
//                                 className="w-full rounded-lg border border-gray-300 py-2.5 pr-16 pl-3 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                             />
//                             <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
//                                 KWD
//                             </span>
//                         </div>
//                         <p className="text-xs text-gray-400">
//                             Optional, for simple profit reporting
//                         </p>
//                     </div>

//                     {/* Base Price + Manual Tax */}
//                     <div className="grid grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                             <Label className="text-sm font-medium text-gray-700">
//                                 Base Price
//                                 <span className="text-[#7AB621]">*</span>
//                             </Label>
//                             <div className="relative">
//                                 <input
//                                     type="number"
//                                     step="0.001"
//                                     value={data.basePrice}
//                                     onChange={(e) =>
//                                         update('basePrice', e.target.value)
//                                     }
//                                     placeholder="0.000"
//                                     className="w-full rounded-lg border border-gray-300 py-2.5 pr-16 pl-3 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                                 />
//                                 <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
//                                     KWD
//                                 </span>
//                             </div>
//                         </div>
//                         <div>
//                             <Label className="mb-2 text-sm font-medium text-gray-700">
//                                 Manual Tax
//                                 <span className="text-[#7AB621]">*</span>
//                             </Label>
//                             <CustomDropdown
//                                 label=""
//                                 options={taxOptions}
//                                 value={data.manualTax}
//                                 onChange={(val) => update('manualTax', val)}
//                                 placeholder="Manual Assignment"
//                             />
//                             <p className="mt-1.5 text-sm text-gray-400">
//                                 Global taxes (like VAT) are applied
//                                 automatically at checkout and won't show here.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="h-px w-full bg-gray-200" />

//             {/* Cost & Margin */}
//             <div className="">
//                 <div className="col-span-3">
//                     <h3 className="text-sm font-semibold text-gray-900">
//                         Cost & Margin (per serve)
//                     </h3>
//                 </div>
//                 <div className="col-span-9 mt-8">
//                     <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
//                         {/* Total Cost */}
//                         <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
//                             <p className="mb-1 text-sm text-gray-500">
//                                 Total Cost
//                             </p>
//                             <p className="text-2xl font-bold text-gray-900">
//                                 {estimatedCost.toFixed(3)}
//                             </p>
//                             <p className="mt-1 text-xs text-gray-400">
//                                 Manual Estimate
//                             </p>
//                         </div>

//                         {/* Selling Price */}
//                         <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
//                             <p className="mb-1 text-sm text-gray-500">
//                                 Selling Price
//                             </p>
//                             <p className="text-2xl font-bold text-gray-900">
//                                 Customer Pays: {basePrice.toFixed(3)} KWD
//                             </p>
//                             <p className="mt-1 text-xs text-gray-400">
//                                 Global taxes (VAT) will be applied at checkout,
//                                 if configured.
//                             </p>
//                         </div>

//                         {/* Net Profit Margin */}
//                         <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
//                             <p className="mb-1 text-sm text-gray-500">
//                                 Net Profit Margin
//                             </p>
//                             <p className="text-2xl font-bold text-gray-900">
//                                 {netMargin.toFixed(3)} KWD
//                             </p>
//                             <p className="mt-1 text-xs text-gray-400">
//                                 {marginPct}% Profit
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* UPDATED DYNAMIC FOOTER */}
//             {isEditMode ? (
//                 <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
//                     <IconButton onClick={onBack}>Cancel</IconButton>
//                     <Button onClick={onSave} disabled={!canNext}>
//                         Save Changes
//                     </Button>
//                 </div>
//             ) : (
//                 <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
//                     <IconButton onClick={onBack}>Go Back</IconButton>
//                     <IconButton onClick={() => console.log('Save as Draft')}>
//                         Save as Draft
//                     </IconButton>
//                     <Button onClick={onNext} disabled={!canNext}>
//                         Continue to Variants & Add-ons
//                     </Button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RecipeStock;

// stock management.

// import InfoIcon from '@/shared/images/icons/infoRing.svg?react';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
// import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';
// import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';

// // --- Inline SVGs to guarantee no import errors ---
// const SearchIcon = () => (
//     <svg
//         className="h-5 w-5 text-gray-400"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//     >
//         <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//         />
//     </svg>
// );
// const CloseIcon = () => (
//     <svg
//         className="h-4 w-4 text-gray-400 hover:text-gray-600"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//     >
//         <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M6 18L18 6M6 6l12 12"
//         />
//     </svg>
// );
// const EditPencilIcon = () => (
//     <svg
//         className="mr-2 h-4 w-4 text-gray-500"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//     >
//         <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
//         />
//     </svg>
// );

// interface StepProps {
//     data: any;
//     update: (field: string, value: any) => void;
//     onNext?: () => void;
//     onBack: () => void;
//     canNext?: boolean;
//     isEditMode?: boolean;
//     onSave?: () => void;
// }

// const RecipeStock = ({
//     data,
//     update,
//     onNext,
//     onBack,
//     canNext = true,
//     isEditMode = false,
//     onSave,
// }: StepProps) => {
//     // LOGIC: If tracking stock, we use a linked cost (defaulting to 1.500 for the UI demo)
//     // If not tracking, we use the manual estimatedCost.
//     const activeCost = data.trackStock
//         ? parseFloat(data.linkedCost) || 1.5
//         : parseFloat(data.estimatedCost) || 0;

//     const basePrice = parseFloat(data.basePrice) || 0;
//     const netMargin = basePrice - activeCost;
//     const marginPct =
//         basePrice > 0 ? Math.round((netMargin / basePrice) * 100) : 0;

//     const taxOptions = [
//         { label: 'Manual Assignment', value: 'manual' },
//         { label: 'VAT (5%)', value: 'vat_5' },
//         { label: 'Excise Tax (50%)', value: 'excise_50' },
//         { label: 'No Tax', value: 'none' },
//     ];

//     return (
//         <div className="space-y-8 border-t border-gray-200 pt-8">
//             {/* Inventory Tracking */}
//             <div className="grid grid-cols-12 gap-8">
//                 <div className="col-span-3">
//                     <h3 className="text-sm font-semibold text-gray-900">
//                         Inventory Tracking
//                     </h3>
//                 </div>
//                 <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
//                     {/* Track Stock Toggle */}
//                     <div className="space-y-3">
//                         <Label className="text-sm font-medium text-gray-700">
//                             Track Stock?
//                         </Label>
//                         <RadioGroup
//                             name="track_stock"
//                             label=""
//                             value={data.trackStock ? 'on' : 'off'}
//                             onChange={(val) =>
//                                 update('trackStock', val === 'on')
//                             }
//                             options={[
//                                 { value: 'off', label: 'OFF' },
//                                 { value: 'on', label: 'ON' },
//                             ]}
//                             gap="gap-6"
//                         />
//                     </div>

//                     {/* --- CONDITIONAL LAYOUT: OFF STATE --- */}
//                     {!data.trackStock && (
//                         <>
//                             <div className="flex items-center gap-3 rounded-xl border border-borderColor bg-white px-4 py-3">
//                                 <span className="">
//                                     <InfoIcon className="h-8 w-8" />
//                                 </span>
//                                 <p className="text-sm text-gray-600">
//                                     This item is not tracked in stock.
//                                     (Unlimited Quantity).
//                                 </p>
//                             </div>

//                             <div className="space-y-2">
//                                 <Label className="text-sm font-medium text-gray-700">
//                                     Estimated Cost Price
//                                 </Label>
//                                 <div className="relative w-64">
//                                     <input
//                                         type="number"
//                                         step="0.001"
//                                         value={data.estimatedCost}
//                                         onChange={(e) =>
//                                             update(
//                                                 'estimatedCost',
//                                                 e.target.value,
//                                             )
//                                         }
//                                         placeholder="0.000"
//                                         className="w-full rounded-lg border border-gray-300 py-2.5 pr-16 pl-3 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                                     />
//                                     <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
//                                         KWD
//                                     </span>
//                                 </div>
//                                 <p className="text-xs text-gray-400">
//                                     Optional, for simple profit reporting
//                                 </p>
//                             </div>
//                         </>
//                     )}

//                     {/* --- CONDITIONAL LAYOUT: ON STATE --- */}
//                     {data.trackStock && (
//                         <div className="space-y-6 border-t border-gray-100 pt-6">
//                             <div className="space-y-2">
//                                 <Label className="text-sm font-medium text-gray-700">
//                                     Link to Inventory Source
//                                 </Label>
//                                 <div className="relative">
//                                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                                         <SearchIcon />
//                                     </div>
//                                     <Input
//                                         placeholder="Search existing inventory..."
//                                         value={
//                                             data.inventorySearch ||
//                                             'Spicy Ramen - (Master Recipe)'
//                                         }
//                                         onChange={(e) =>
//                                             update(
//                                                 'inventorySearch',
//                                                 e.target.value,
//                                             )
//                                         }
//                                         className="pl-10"
//                                     />
//                                 </div>
//                                 <p className="mt-1.5 text-xs text-gray-500">
//                                     Search your inventory for a single item
//                                     (e.g., 'Coke Can') or a pre-made recipe
//                                     (e.g., 'Burger Recipe').
//                                 </p>
//                                 <button className="mt-2 text-sm font-medium text-gray-500 hover:text-gray-700">
//                                     + Can't find it?{' '}
//                                     <span className="underline">
//                                         Create New Recipe via Inventory
//                                     </span>
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {/* Base Price + Manual Tax (Visible in both states) */}
//                     <div className="grid grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                             <Label className="text-sm font-medium text-gray-700">
//                                 Base Price
//                                 <span className="text-[#7AB621]">*</span>
//                             </Label>
//                             <div className="relative">
//                                 <input
//                                     type="number"
//                                     step="0.001"
//                                     value={data.basePrice}
//                                     onChange={(e) =>
//                                         update('basePrice', e.target.value)
//                                     }
//                                     placeholder="0.000"
//                                     className="w-full rounded-lg border border-gray-300 py-2.5 pr-16 pl-3 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                                 />
//                                 <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
//                                     KWD
//                                 </span>
//                             </div>
//                         </div>
//                         <div>
//                             <Label className="mb-2 text-sm font-medium text-gray-700">
//                                 Manual Tax
//                                 <span className="text-[#7AB621]">*</span>
//                             </Label>
//                             <CustomDropdown
//                                 label=""
//                                 options={taxOptions}
//                                 value={data.manualTax}
//                                 onChange={(val) => update('manualTax', val)}
//                                 placeholder="Manual Assignment"
//                             />
//                             <p className="mt-1.5 text-xs text-gray-400">
//                                 Global taxes (like VAT) are applied
//                                 automatically at checkout and won't show here.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* --- NEW SECTION: STOCK CONFIGURATION (Only when ON) --- */}
//             {data.trackStock && (
//                 <>
//                     <div className="h-px w-full bg-gray-200" />
//                     <div className="col-span-3">
//                         <h3 className="text-sm font-semibold text-gray-900">
//                             Stock Configuration
//                         </h3>
//                     </div>
//                     <div className="">
//                         <div className="col-span-9">
//                             <div className="relative rounded-xl border border-gray-200 bg-gray-100 p-6 shadow-sm">
//                                 <button className="absolute top-4 right-4">
//                                     <CloseIcon />
//                                 </button>

//                                 <div className="grid grid-cols-[180px_1fr] gap-y-4 text-sm">
//                                     <div className="text-gray-500">Type</div>
//                                     <div className="font-medium text-gray-900">
//                                         Composite Recipe (Deducts Ingredients
//                                         automatically)
//                                     </div>

//                                     <div className="text-gray-500">
//                                         Current Cost
//                                     </div>
//                                     <div className="font-medium text-gray-900">
//                                         {activeCost.toFixed(3)} KWD
//                                     </div>

//                                     <div className="text-gray-500">
//                                         Live Stock
//                                     </div>
//                                     <div className="font-medium text-gray-900">
//                                         42 Servings
//                                     </div>

//                                     <div className="text-gray-500">
//                                         Consumption Rule
//                                     </div>
//                                     <div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="font-medium text-gray-900">
//                                                 Deduct
//                                             </span>
//                                             <input
//                                                 type="text"
//                                                 className="w-20 rounded-md border border-gray-300 px-3 py-1.5 text-center text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                                                 value={
//                                                     data.consumptionQty ||
//                                                     '1.000'
//                                                 }
//                                                 onChange={(e) =>
//                                                     update(
//                                                         'consumptionQty',
//                                                         e.target.value,
//                                                     )
//                                                 }
//                                             />
//                                             <span className="font-medium text-gray-900">
//                                                 x Serving
//                                             </span>
//                                         </div>
//                                         <p className="mt-1.5 text-xs text-gray-400">
//                                             Enter 0.5 for half-portion, 2.0 for
//                                             double, etc.
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div className="mt-6 pt-2">
//                                     <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
//                                         <EditPencilIcon />
//                                         Edit Recipe in Inventory
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}

//             <div className="h-px w-full bg-gray-200" />

//             {/* Cost & Margin */}
//             <div className="col-span-3">
//                 <h3 className="text-sm font-semibold text-gray-900">
//                     Cost & Margin (per serve)
//                 </h3>
//             </div>
//             <div className="grid grid-cols-12 gap-8">
//                 <div className="col-span-20">
//                     <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
//                         {/* Total Cost */}
//                         <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
//                             <p className="mb-1 text-sm text-gray-500">
//                                 Total Cost
//                             </p>
//                             <p className="text-2xl font-bold text-gray-900">
//                                 {activeCost.toFixed(3)}
//                             </p>
//                             <p className="mt-1 text-xs text-gray-400">
//                                 {data.trackStock
//                                     ? 'Linked from Recipe'
//                                     : 'Manual Estimate'}
//                             </p>
//                         </div>

//                         {/* Selling Price */}
//                         <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
//                             <p className="mb-1 text-sm text-gray-500">
//                                 Selling Price
//                             </p>
//                             <p className="text-2xl font-bold text-gray-900">
//                                 Customer Pays: {basePrice.toFixed(3)} KWD
//                             </p>
//                             <p className="mt-1 text-xs text-gray-400">
//                                 Global taxes (VAT) will be applied at checkout,
//                                 if configured.
//                             </p>
//                         </div>

//                         {/* Net Profit Margin */}
//                         <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
//                             <p className="mb-1 text-sm text-gray-500">
//                                 Net Profit Margin
//                             </p>
//                             <p className="text-2xl font-bold text-gray-900">
//                                 {netMargin.toFixed(3)} KWD
//                             </p>
//                             <p className="mt-1 text-xs text-gray-400">
//                                 {marginPct}% Profit
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* FOOTER */}
//             {isEditMode ? (
//                 <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
//                     <IconButton onClick={onBack}>Cancel</IconButton>
//                     <Button onClick={onSave} disabled={!canNext}>
//                         Save Changes
//                     </Button>
//                 </div>
//             ) : (
//                 <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
//                     <IconButton onClick={onBack}>Go Back</IconButton>
//                     <IconButton onClick={() => console.log('Save as Draft')}>
//                         Save as Draft
//                     </IconButton>
//                     <Button onClick={onNext} disabled={!canNext}>
//                         Continue to Variants & Add-ons
//                     </Button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RecipeStock;

//with search

import InfoIcon from '@/shared/images/icons/infoRing.svg?react';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';
import { useState } from 'react';

// --- Inline SVGs ---
const SearchIcon = () => (
    <svg
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>
);
const CloseIcon = () => (
    <svg
        className="h-4 w-4 text-gray-400 hover:text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);
const EditPencilIcon = () => (
    <svg
        className="mr-2 h-4 w-4 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
    </svg>
);

// ── Mock inventory items to match against ──────────────────────────────────
const INVENTORY_ITEMS = [
    { id: 1, name: 'Spicy Ramen - (Master Recipe)', cost: 1.5 },
    { id: 2, name: 'Burger Recipe', cost: 2.25 },
    { id: 3, name: 'Coke Can', cost: 0.35 },
    { id: 4, name: 'Chicken Wrap Recipe', cost: 1.8 },
    { id: 5, name: 'Caesar Salad Recipe', cost: 1.2 },
];

interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext?: () => void;
    onBack: () => void;
    canNext?: boolean;
    isEditMode?: boolean;
    onSave?: () => void;
}

const RecipeStock = ({
    data,
    update,
    onNext,
    onBack,
    canNext = true,
    isEditMode = false,
    onSave,
}: StepProps) => {
    // ── Local state for search ─────────────────────────────────────────────
    const [searchQuery, setSearchQuery] = useState('');
    const [matchedItem, setMatchedItem] = useState<
        (typeof INVENTORY_ITEMS)[0] | null
    >(null);
    const [showDropdown, setShowDropdown] = useState(false);

    // Filter inventory items based on search query
    const filteredItems =
        searchQuery.trim().length > 0
            ? INVENTORY_ITEMS.filter((item) =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase()),
              )
            : [];

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearchQuery(val);
        update('inventorySearch', val);

        // If user clears search, remove the matched item & hide Stock Configuration
        if (!val.trim()) {
            setMatchedItem(null);
            setShowDropdown(false);
        } else {
            setShowDropdown(true);
        }
    };

    // const handleSelectItem = (item: (typeof INVENTORY_ITEMS)[0]) => {
    //     setMatchedItem(item);
    //     setSearchQuery(item.name);
    //     update('inventorySearch', item.name);
    //     update('linkedCost', item.cost.toString());
    //     setShowDropdown(false);
    // };
    const handleSelectItem = (item: (typeof INVENTORY_ITEMS)[0]) => {
        setMatchedItem(item);
        setSearchQuery(item.name);
        update('inventorySearch', item.name);
        update('linkedCost', item.cost.toString());
        update('matchedItem', item); // ← ADD THIS
        setShowDropdown(false);
    };

    // const handleClearSearch = () => {
    //     setSearchQuery('');
    //     setMatchedItem(null);
    //     setShowDropdown(false);
    //     update('inventorySearch', '');
    //     update('linkedCost', '');
    // };

    const handleClearSearch = () => {
        setSearchQuery('');
        setMatchedItem(null);
        setShowDropdown(false);
        update('inventorySearch', '');
        update('linkedCost', '');
        update('matchedItem', null); // ← ADD THIS
    };
    // When toggle is turned OFF, also reset search state
    // const handleTrackStockChange = (val: string) => {
    //     update('trackStock', val === 'on');
    //     if (val === 'off') {
    //         setSearchQuery('');
    //         setMatchedItem(null);
    //         setShowDropdown(false);
    //     }
    // };

    const handleTrackStockChange = (val: string) => {
        update('trackStock', val === 'on');
        if (val === 'off') {
            setSearchQuery('');
            setMatchedItem(null);
            setShowDropdown(false);
            update('matchedItem', null); // ← ADD THIS
        }
    };

    // ── Cost / margin calculations ─────────────────────────────────────────
    // Use matched item's cost when ON, otherwise fall back to manual estimate
    const activeCost = data.trackStock
        ? matchedItem
            ? matchedItem.cost
            : parseFloat(data.linkedCost) || 0
        : parseFloat(data.estimatedCost) || 0;

    const basePrice = parseFloat(data.basePrice) || 0;
    const netMargin = basePrice - activeCost;
    const marginPct =
        basePrice > 0 ? Math.round((netMargin / basePrice) * 100) : 0;

    const taxOptions = [
        { label: 'Manual Assignment', value: 'manual' },
        { label: 'VAT (5%)', value: 'vat_5' },
        { label: 'Excise Tax (50%)', value: 'excise_50' },
        { label: 'No Tax', value: 'none' },
    ];

    return (
        <div className="space-y-8 border-t border-gray-200 pt-8">
            {/* Inventory Tracking */}
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Inventory Tracking
                    </h3>
                </div>
                <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                    {/* Track Stock Toggle */}
                    <div className="space-y-3">
                        <Label className="text-sm font-medium text-gray-700">
                            Track Stock?
                        </Label>
                        <RadioGroup
                            name="track_stock"
                            label=""
                            value={data.trackStock ? 'on' : 'off'}
                            onChange={handleTrackStockChange}
                            options={[
                                { value: 'off', label: 'OFF' },
                                { value: 'on', label: 'ON' },
                            ]}
                            gap="gap-6"
                        />
                    </div>

                    {/* ── OFF STATE (unchanged) ───────────────────────────────────────── */}
                    {!data.trackStock && (
                        <>
                            <div className="flex items-center gap-3 rounded-xl border border-borderColor bg-white px-4 py-3">
                                <span>
                                    <InfoIcon className="h-8 w-8" />
                                </span>
                                <p className="text-sm text-gray-600">
                                    This item is not tracked in stock.
                                    (Unlimited Quantity).
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">
                                    Estimated Cost Price
                                </Label>
                                <div className="relative w-64">
                                    <input
                                        type="number"
                                        step="0.001"
                                        value={data.estimatedCost}
                                        onChange={(e) =>
                                            update(
                                                'estimatedCost',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="0.000"
                                        className="w-full rounded-lg border border-gray-300 py-2.5 pr-16 pl-3 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                    />
                                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                        KWD
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400">
                                    Optional, for simple profit reporting
                                </p>
                            </div>
                        </>
                    )}

                    {/* ── ON STATE: Search bar ────────────────────────────────────────── */}
                    {data.trackStock && (
                        <div className="space-y-6 border-t border-gray-100 pt-6">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">
                                    Link to Inventory Source
                                </Label>

                                {/* Search input with clear button */}
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <SearchIcon />
                                    </div>
                                    <Input
                                        placeholder="Search existing inventory..."
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        onFocus={() => {
                                            if (searchQuery.trim())
                                                setShowDropdown(true);
                                        }}
                                        className="pr-10 pl-10"
                                    />
                                    {/* Clear button — only when there's text */}
                                    {searchQuery && (
                                        <button
                                            className="absolute inset-y-0 right-3 flex items-center"
                                            onClick={handleClearSearch}
                                            type="button"
                                        >
                                            <CloseIcon />
                                        </button>
                                    )}

                                    {/* Dropdown results */}
                                    {showDropdown &&
                                        filteredItems.length > 0 && (
                                            <ul className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                                                {filteredItems.map((item) => (
                                                    <li
                                                        key={item.id}
                                                        className="flex cursor-pointer items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                                                        onMouseDown={() =>
                                                            handleSelectItem(
                                                                item,
                                                            )
                                                        }
                                                    >
                                                        <span>{item.name}</span>
                                                        <span className="text-xs text-gray-400">
                                                            {item.cost.toFixed(
                                                                3,
                                                            )}{' '}
                                                            KWD
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    {/* No results message */}
                                    {showDropdown &&
                                        searchQuery.trim() &&
                                        filteredItems.length === 0 && (
                                            <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-400 shadow-lg">
                                                No matching inventory found.
                                            </div>
                                        )}
                                </div>

                                <p className="mt-1.5 text-xs text-gray-500">
                                    Search your inventory for a single item
                                    (e.g., 'Coke Can') or a pre-made recipe
                                    (e.g., 'Burger Recipe').
                                </p>
                                <button className="mt-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                                    + Can't find it?{' '}
                                    <span className="underline">
                                        Create New Recipe via Inventory
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Base Price + Manual Tax (visible in both states) */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Base Price
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <div className="relative">
                                <input
                                    type="number"
                                    step="0.001"
                                    value={data.basePrice}
                                    onChange={(e) =>
                                        update('basePrice', e.target.value)
                                    }
                                    placeholder="0.000"
                                    className="w-full rounded-lg border border-gray-300 py-2.5 pr-16 pl-3 text-sm text-gray-700 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    KWD
                                </span>
                            </div>
                        </div>
                        <div>
                            <Label className="mb-2 text-sm font-medium text-gray-700">
                                Manual Tax
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <CustomDropdown
                                label=""
                                options={taxOptions}
                                value={data.manualTax}
                                onChange={(val) => update('manualTax', val)}
                                placeholder="Manual Assignment"
                            />
                            <p className="mt-1.5 text-xs text-gray-400">
                                Global taxes (like VAT) are applied
                                automatically at checkout and won't show here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── STOCK CONFIGURATION: only shows when ON + a match is selected ── */}
            {data.trackStock && matchedItem && (
                <>
                    <div className="h-px w-full bg-gray-200" />
                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-900">
                            Stock Configuration
                        </h3>
                    </div>
                    <div>
                        <div className="col-span-9">
                            <div className="relative rounded-xl border border-gray-200 bg-gray-100 p-6 shadow-sm">
                                <button
                                    className="absolute top-4 right-4"
                                    onClick={handleClearSearch}
                                    type="button"
                                >
                                    <CloseIcon />
                                </button>

                                <div className="grid grid-cols-[180px_1fr] gap-y-4 text-sm">
                                    <div className="text-gray-500">Type</div>
                                    <div className="font-medium text-gray-900">
                                        Composite Recipe (Deducts Ingredients
                                        automatically)
                                    </div>

                                    <div className="text-gray-500">
                                        Current Cost
                                    </div>
                                    <div className="font-medium text-gray-900">
                                        {activeCost.toFixed(3)} KWD
                                    </div>

                                    <div className="text-gray-500">
                                        Live Stock
                                    </div>
                                    <div className="font-medium text-gray-900">
                                        42 Servings
                                    </div>

                                    <div className="text-gray-500">
                                        Consumption Rule
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-gray-900">
                                                Deduct
                                            </span>
                                            <input
                                                type="text"
                                                className="w-20 rounded-md border border-gray-300 px-3 py-1.5 text-center text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                                value={
                                                    data.consumptionQty ||
                                                    '1.000'
                                                }
                                                onChange={(e) =>
                                                    update(
                                                        'consumptionQty',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            <span className="font-medium text-gray-900">
                                                x Servings per order
                                            </span>
                                        </div>
                                        <p className="mt-1.5 text-xs text-gray-400">
                                            Enter 0.5 for half-portion, 2.0 for
                                            double, etc.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-2">
                                    <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                                        <EditPencilIcon />
                                        Edit Recipe in Inventory
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Cost & Margin — always visible when OFF, only visible after search match when ON */}
            {(!data.trackStock || matchedItem) && (
                <>
                    <div className="h-px w-full bg-gray-200" />

                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-900">
                            Cost & Margin (per serve)
                        </h3>
                    </div>
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-20">
                            <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
                                <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                                    <p className="mb-1 text-sm text-gray-500">
                                        Total Cost
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {activeCost.toFixed(3)}
                                    </p>
                                    <p className="mt-1 text-xs text-gray-400">
                                        {data.trackStock
                                            ? 'Linked from Recipe'
                                            : 'Manual Estimate'}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                                    <p className="mb-1 text-sm text-gray-500">
                                        Selling Price
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        Customer Pays: {basePrice.toFixed(3)}{' '}
                                        KWD
                                    </p>
                                    <p className="mt-1 text-xs text-gray-400">
                                        Global taxes (VAT) will be applied at
                                        checkout, if configured.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                                    <p className="mb-1 text-sm text-gray-500">
                                        Net Profit Margin
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {netMargin.toFixed(3)} KWD
                                    </p>
                                    <p className="mt-1 text-xs text-gray-400">
                                        {marginPct}% Profit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* FOOTER */}
            {isEditMode ? (
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                    <IconButton onClick={onBack}>Cancel</IconButton>
                    <Button onClick={onSave} disabled={!canNext}>
                        Save Changes
                    </Button>
                </div>
            ) : (
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                    <IconButton onClick={onBack}>Go Back</IconButton>
                    <IconButton onClick={() => console.log('Save as Draft')}>
                        Save as Draft
                    </IconButton>
                    <Button onClick={onNext} disabled={!canNext}>
                        Continue to Variants & Add-ons
                    </Button>
                </div>
            )}
        </div>
    );
};

export default RecipeStock;
