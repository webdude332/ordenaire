// import TrashIcon from '@/shared/images/icons/delBold.svg?react';
// import SearchIcon from '@/shared/images/icons/inputSearch.svg?react';
// import { useState } from 'react';

// interface AddOnsTabProps {
//     data: any;
//     update: (field: string, value: any) => void;
// }

// interface AddOn {
//     id: string;
//     name: string;
//     category: string;
//     standardPrice: string;
//     unitCost: string;
//     costType: string;
//     upsellPrice: string;
// }

// const AddOnsTab = ({ data, update }: AddOnsTabProps) => {
//     const addOns: AddOn[] = data.addOns || [];
//     const [search, setSearch] = useState('');

//     const removeAddOn = (id: string) => {
//         update(
//             'addOns',
//             addOns.filter((a) => a.id !== id),
//         );
//     };

//     const updateUpsellPrice = (id: string, val: string) => {
//         update(
//             'addOns',
//             addOns.map((a) => (a.id === id ? { ...a, upsellPrice: val } : a)),
//         );
//     };

//     return (
//         <div className="space-y-6">
//             <div>
//                 <h2 className="text-xl font-bold text-gray-900">
//                     Suggested Add-ons / Upsells
//                 </h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                     Recommended items to cross-sell with this order (e.g., "Add
//                     Fries"). You can add up to 3 items.
//                 </p>
//             </div>

//             {/* Search */}
//             {addOns.length < 3 && (
//                 <div className="relative">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                         <SearchIcon className="h-4 w-4 text-gray-400" />
//                     </div>
//                     <input
//                         type="text"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         placeholder="Search for active menu items (e.g. Fries, Coke)..."
//                         className="w-full max-w-md rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                     />
//                 </div>
//             )}

//             {/* Add-ons Table */}
//             {addOns.length > 0 && (
//                 <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
//                     {/* Header */}
//                     <div className="grid grid-cols-12 gap-4 border-b border-gray-100 bg-gray-50 px-6 py-3 text-xs font-semibold text-gray-500">
//                         <div className="col-span-4">Linked Item</div>
//                         <div className="col-span-2">Standard Price</div>
//                         <div className="col-span-2">Unit Cost</div>
//                         <div className="col-span-3">Upsell Price</div>
//                         <div className="col-span-1 text-right">Actions</div>
//                     </div>

//                     {addOns.map((addon) => (
//                         <div
//                             key={addon.id}
//                             className="grid grid-cols-12 items-center gap-4 border-b border-gray-100 px-6 py-4 last:border-b-0"
//                         >
//                             <div className="col-span-4">
//                                 <p className="font-medium text-gray-900">
//                                     {addon.name}
//                                 </p>
//                                 <p className="text-xs text-gray-500">
//                                     {addon.category}
//                                 </p>
//                             </div>
//                             <div className="col-span-2">
//                                 <p className="text-sm text-gray-900">
//                                     {addon.standardPrice}
//                                 </p>
//                                 <p className="text-xs text-gray-400">KWD</p>
//                             </div>
//                             <div className="col-span-2">
//                                 <p className="text-sm text-gray-900">
//                                     {addon.unitCost}
//                                 </p>
//                                 <p className="text-xs text-gray-400">
//                                     {addon.costType}
//                                 </p>
//                             </div>
//                             <div className="col-span-3">
//                                 <div className="relative flex items-center">
//                                     <input
//                                         value={addon.upsellPrice}
//                                         onChange={(e) =>
//                                             updateUpsellPrice(
//                                                 addon.id,
//                                                 e.target.value,
//                                             )
//                                         }
//                                         className="w-full rounded-lg border border-gray-300 py-2 pr-14 pl-3 text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                                     />
//                                     <span className="pointer-events-none absolute right-3 text-xs text-gray-400">
//                                         KWD
//                                     </span>
//                                 </div>
//                             </div>
//                             <div className="col-span-1 flex justify-end">
//                                 <button
//                                     onClick={() => removeAddOn(addon.id)}
//                                     className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
//                                 >
//                                     <TrashIcon className="h-4 w-4 text-gray-400" />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {addOns.length === 0 && (
//                 <div className="rounded-xl border border-dashed border-gray-200 py-12 text-center">
//                     <p className="text-sm text-gray-400">
//                         No add-ons linked yet. Search for items above to add
//                         them.
//                     </p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddOnsTab;

// import TrashIcon from '@/shared/images/icons/delBold.svg?react';
// import SearchIcon from '@/shared/images/icons/inputSearch.svg?react';
// import { useState } from 'react';

// interface AddOnsTabProps {
//     data: any;
//     update: (field: string, value: any) => void;
// }

// interface AddOn {
//     id: string;
//     name: string;
//     category: string;
//     standardPrice: string;
//     unitCost: string;
//     costType: string;
//     upsellPrice: string;
// }

// const AddOnsTab = ({ data, update }: AddOnsTabProps) => {
//     const addOns: AddOn[] = data.addOns || [];
//     const [search, setSearch] = useState('');

//     const removeAddOn = (id: string) => {
//         update(
//             'addOns',
//             addOns.filter((a) => a.id !== id),
//         );
//     };

//     const updateUpsellPrice = (id: string, val: string) => {
//         update(
//             'addOns',
//             addOns.map((a) => (a.id === id ? { ...a, upsellPrice: val } : a)),
//         );
//     };

//     return (
//         <div className="space-y-6">
//             {/* Header */}
//             <div>
//                 <h2 className="text-xl font-bold text-gray-900">
//                     Suggested Add-ons / Upsells
//                 </h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                     Recommended items to cross-sell with this order (e.g., "Add
//                     Fries"). You can add up to 3 items.
//                 </p>
//             </div>

//             {/* Search */}
//             {addOns.length < 3 && (
//                 <div className="relative">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                         <SearchIcon className="h-4 w-4 text-gray-400" />
//                     </div>
//                     <input
//                         type="text"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         placeholder="Search for active menu items (e.g. Fries, Coke)..."
//                         className="w-full max-w-md rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                     />
//                 </div>
//             )}

//             {/* Empty State */}
//             {addOns.length === 0 && (
//                 <div className="rounded-xl border border-dashed border-gray-200 py-12 text-center">
//                     <p className="text-sm text-gray-400">
//                         No add-ons linked yet. Search for items above to add
//                         them.
//                     </p>
//                 </div>
//             )}

//             {/* Add-ons Table */}
//             {addOns.length > 0 && (
//                 <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
//                     {/* Table Header */}
//                     <div className="grid grid-cols-12 gap-4 border-b border-gray-100 bg-gray-50 px-6 py-3 text-xs font-semibold text-gray-500">
//                         <div className="col-span-4">Linked Item</div>
//                         <div className="col-span-2">Standard Price</div>
//                         <div className="col-span-2">Unit Cost</div>
//                         <div className="col-span-3">Upsell Price</div>
//                         <div className="col-span-1 text-right">Actions</div>
//                     </div>

//                     {/* Table Rows */}
//                     {addOns.map((addon) => (
//                         <div
//                             key={addon.id}
//                             className="grid grid-cols-12 items-center gap-4 border-b border-gray-100 px-6 py-4 last:border-b-0"
//                         >
//                             {/* Linked Item */}
//                             <div className="col-span-4">
//                                 <p className="font-medium text-gray-900">
//                                     {addon.name}
//                                 </p>
//                                 <p className="text-xs text-gray-500">
//                                     {addon.category}
//                                 </p>
//                             </div>

//                             {/* Standard Price */}
//                             <div className="col-span-2">
//                                 <p className="text-sm text-gray-900">
//                                     {addon.standardPrice}
//                                 </p>
//                                 <p className="text-xs text-gray-400">KWD</p>
//                             </div>

//                             {/* Unit Cost */}
//                             <div className="col-span-2">
//                                 <p className="text-sm text-gray-900">
//                                     {addon.unitCost}
//                                 </p>
//                                 <p className="text-xs text-gray-400">
//                                     {addon.costType}
//                                 </p>
//                             </div>

//                             {/* Upsell Price */}
//                             <div className="col-span-3">
//                                 <div className="relative flex items-center">
//                                     <input
//                                         value={addon.upsellPrice}
//                                         onChange={(e) =>
//                                             updateUpsellPrice(
//                                                 addon.id,
//                                                 e.target.value,
//                                             )
//                                         }
//                                         className="w-full rounded-lg border border-gray-300 py-2 pr-14 pl-3 text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                                     />
//                                     <span className="pointer-events-none absolute right-3 text-xs text-gray-400">
//                                         KWD
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Actions */}
//                             <div className="col-span-1 flex justify-end">
//                                 <button
//                                     onClick={() => removeAddOn(addon.id)}
//                                     className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
//                                 >
//                                     <TrashIcon className="h-4 w-4 text-gray-400" />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddOnsTab;

//hard coded data

import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
import SearchIcon from '@/shared/images/icons/inputSearch.svg?react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/superadmin/components/OuterTable';
import { useState } from 'react';
import ActionButton from '../ActionButton';

interface AddOnsTabProps {
    data: any;
    update: (field: string, value: any) => void;
}

interface AddOn {
    id: string;
    name: string;
    category: string;
    standardPrice: string;
    unitCost: string;
    costType: string;
    upsellPrice: string;
}

const AddOnsTab = ({ data, update }: AddOnsTabProps) => {
    // Completely hardcoded data to match the design
    const addOns: AddOn[] = [
        {
            id: '1',
            name: 'French Fries (Small)',
            category: 'Category: Sides',
            standardPrice: '0.750',
            unitCost: '0.150 KWD',
            costType: 'Exact',
            upsellPrice: '0.500',
        },
        {
            id: '2',
            name: 'Coca Cola',
            category: 'Category: Drinks',
            standardPrice: '0.250',
            unitCost: '0.080 KWD',
            costType: 'Estimate',
            upsellPrice: '0.200',
        },
        {
            id: '3',
            name: 'Milk Shake',
            category: 'Category: Drinks',
            standardPrice: '0.250',
            unitCost: '--',
            costType: '',
            upsellPrice: '0.200',
        },
    ];

    const [search, setSearch] = useState('');

    const removeAddOn = (id: string) => {
        update(
            'addOns',
            addOns.filter((a) => a.id !== id),
        );
    };

    const updateUpsellPrice = (id: string, val: string) => {
        update(
            'addOns',
            addOns.map((a) => (a.id === id ? { ...a, upsellPrice: val } : a)),
        );
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900">
                    Suggested Add-ons / Upsells
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    Recommended items to cross-sell with this order (e.g., "Add
                    Fries"). You can add up to 3 items.
                </p>
            </div>

            {/* Search */}
            {addOns.length < 3 && (
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for active menu items (e.g. Fries, Coke)..."
                        className="w-full max-w-md rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                    />
                </div>
            )}

            {/* Empty State */}
            {addOns.length === 0 && (
                <div className="rounded-xl border border-dashed border-gray-200 py-12 text-center">
                    <p className="text-sm text-gray-400">
                        No add-ons linked yet. Search for items above to add
                        them.
                    </p>
                </div>
            )}

            {/* Add-ons Table */}
            {addOns.length > 0 && (
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableHead className="w-4/12">
                                Linked Item
                            </TableHead>
                            <TableHead className="w-2/12">
                                Standard Price
                            </TableHead>
                            <TableHead className="w-2/12">Unit Cost</TableHead>
                            <TableHead className="w-3/12">
                                Upsell Price
                            </TableHead>
                            <TableHead className="w-1/12 text-right">
                                Actions
                            </TableHead>
                        </TableHeader>

                        <TableBody>
                            {addOns.map((addon) => (
                                <TableRow key={addon.id}>
                                    {/* Linked Item */}
                                    <TableCell>
                                        <p className="font-medium text-gray-900">
                                            {addon.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {addon.category}
                                        </p>
                                    </TableCell>

                                    {/* Standard Price */}
                                    <TableCell>
                                        <p className="text-sm text-gray-900">
                                            {addon.standardPrice}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            KWD
                                        </p>
                                    </TableCell>

                                    {/* Unit Cost */}
                                    <TableCell>
                                        <p className="text-sm text-gray-900">
                                            {addon.unitCost}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {addon.costType}
                                        </p>
                                    </TableCell>

                                    {/* Upsell Price */}
                                    <TableCell>
                                        <div className="relative flex items-center">
                                            <input
                                                value={addon.upsellPrice}
                                                onChange={(e) =>
                                                    updateUpsellPrice(
                                                        addon.id,
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full rounded-lg border border-gray-300 py-2 pr-14 pl-3 text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                            />
                                            <span className="pointer-events-none absolute right-3 text-xs text-gray-400">
                                                KWD
                                            </span>
                                        </div>
                                    </TableCell>

                                    {/* Actions */}
                                    <TableCell>
                                        <div className="flex justify-end">
                                            {/* <button
                                                onClick={() =>
                                                    removeAddOn(addon.id)
                                                }
                                                className="flex h-8 w-8 min-w-[32px] shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
                                            >
                                                <TrashIcon className="h-4 w-4 shrink-0 text-gray-400" />
                                            </button> */}
                                            <ActionButton
                                                onClick={() =>
                                                    removeAddOn(addon.id)
                                                }
                                            >
                                                <TrashIcon className="h-4 w-4 text-iconColor" />
                                            </ActionButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default AddOnsTab;
