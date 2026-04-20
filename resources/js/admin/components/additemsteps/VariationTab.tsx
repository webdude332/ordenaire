// import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
// import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
// import PlusIcon from '@/shared/images/icons/plus.svg?react';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/superadmin/components/OuterTable';
// import { useEffect, useState } from 'react';
// import ActionButton from '../ActionButton';
// import AddVariant from '../modals/AddVariant';
// import DeleteModal from '../modals/DeleteModal';
// import EditVariant from '../modals/EditVariant';

// interface VariationTabProps {
//     data: any;
//     update: (field: string, value: any) => void;
// }

// interface Variant {
//     id: string;
//     name: string;
//     sellingPrice: string;
//     estimatedCost: string;
//     locked?: boolean;
// }

// // 1. Defined the 3 default items outside the component
// const defaultVariants: Variant[] = [
//     {
//         id: '1',
//         name: 'Standard',
//         sellingPrice: '3.000',
//         estimatedCost: '2.000',
//         locked: true,
//     },
//     {
//         id: '2',
//         name: 'VIP Entry',
//         sellingPrice: '15.000',
//         estimatedCost: '3.500',
//     },
//     {
//         id: '3',
//         name: 'Kids Entry',
//         sellingPrice: '5.000',
//         estimatedCost: '1.000',
//     },
// ];

// const VariationTab = ({ data, update }: VariationTabProps) => {
//     // 2. Automatically push the 3 items to the parent state when the component loads
//     useEffect(() => {
//         if (
//             !data.variants ||
//             (data.variants.length === 1 && data.variants[0].name === 'Standard')
//         ) {
//             update('variants', defaultVariants);
//         }
//     }, []);

//     // 3. Read from the parent data
//     const variants: Variant[] = data.variants || defaultVariants;

//     // --- Modal States ---
//     const [isVariantOpen, setIsVariantOpen] = useState(false);
//     const [isEditVariantOpen, setIsEditVariantOpen] = useState(false);
//     const [currentVariant, setCurrentVariant] = useState<Variant | null>(null);
//     const [deleteModalOpen, setDeleteModal] = useState(false);

//     // --- Handlers ---
//     const deleteVariant = (id: string) => {
//         update(
//             'variants',
//             variants.filter((v) => v.id !== id),
//         );
//     };

//     const openEditModal = (variant: Variant) => {
//         setCurrentVariant(variant);
//         setIsEditVariantOpen(true);
//     };

//     const handleAdd = (newVariantData: any) => {
//         const newVariant: Variant = {
//             id: Date.now().toString(),
//             name: newVariantData.name || '',
//             sellingPrice: newVariantData.sellingPrice || '0.000',
//             estimatedCost: newVariantData.estimatedCost || '0.000',
//         };
//         update('variants', [...variants, newVariant]);
//         setIsVariantOpen(false);
//     };

//     const handleEdit = (updatedVariantData: any) => {
//         if (!currentVariant) return;

//         update(
//             'variants',
//             variants.map((v) =>
//                 v.id === currentVariant.id
//                     ? { ...v, ...updatedVariantData }
//                     : v,
//             ),
//         );
//         setIsEditVariantOpen(false);
//         setCurrentVariant(null);
//     };

//     return (
//         <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
//             <div className="p-6">
//                 <h2 className="text-xl font-bold text-gray-900">
//                     Item Variants
//                 </h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                     Define specific versions of this item (e.g., Regular vs.
//                     Large, or Spicy vs. Mild). You can add up to 3 Variants.
//                 </p>
//             </div>

//             {/* Table Area */}
//             <div className="overflow-hidden border-t border-gray-200">
//                 <Table>
//                     <TableHeader>
//                         <TableHead className="w-4/12">Variant Name</TableHead>
//                         <TableHead className="w-3/12">Selling Price</TableHead>
//                         <TableHead className="w-3/12">Estimated Cost</TableHead>
//                         <TableHead className="w-2/12 text-right">
//                             Actions
//                         </TableHead>
//                     </TableHeader>

//                     <TableBody>
//                         {variants.map((variant) => (
//                             <TableRow key={variant.id}>
//                                 <TableCell>
//                                     <p className="font-medium text-gray-900">
//                                         {variant.name}
//                                     </p>
//                                 </TableCell>
//                                 <TableCell>
//                                     <p className="font-medium text-gray-900">
//                                         {variant.sellingPrice}
//                                     </p>
//                                     <p className="text-xs text-gray-400">KWD</p>
//                                 </TableCell>
//                                 <TableCell>
//                                     <p className="font-medium text-gray-900">
//                                         {variant.estimatedCost}
//                                     </p>
//                                     <p className="text-xs text-gray-400">KWD</p>
//                                 </TableCell>
//                                 <TableCell>
//                                     <div className="flex items-center justify-end gap-2">
//                                         {variant.locked ? (
//                                             <span className="text-sm font-medium text-gray-600">
//                                                 Locked
//                                             </span>
//                                         ) : (
//                                             <>
//                                                 <ActionButton
//                                                     onClick={() =>
//                                                         openEditModal(variant)
//                                                     }
//                                                 >
//                                                     <PencilIcon className="h-4 w-4 text-iconColor" />
//                                                 </ActionButton>
//                                                 <ActionButton
//                                                     onClick={() =>
//                                                         setDeleteModal(true)
//                                                     }
//                                                 >
//                                                     <TrashIcon className="h-4 w-4 text-iconColor" />
//                                                 </ActionButton>
//                                             </>
//                                         )}
//                                     </div>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>

//                 {/* Add Variant Button */}

//                 <div className="border-t border-gray-200 bg-gray-100 px-6 py-4">
//                     <IconButton onClick={() => setIsVariantOpen(true)}>
//                         <PlusIcon className="h-4 w-4" />
//                         Add Variant
//                     </IconButton>
//                 </div>
//             </div>

//             <AddVariant
//                 isOpen={isVariantOpen}
//                 onClose={() => setIsVariantOpen(false)}
//                 onConfirm={handleAdd}
//             />

//             <EditVariant
//                 isOpen={isEditVariantOpen}
//                 onClose={() => {
//                     setIsEditVariantOpen(false);
//                     setCurrentVariant(null);
//                 }}
//                 onConfirm={handleEdit}
//             />
//             <DeleteModal
//                 title="Delete 'Large Size'? "
//                 isOpen={deleteModalOpen}
//                 onClose={() => setDeleteModal(false)}
//                 onRetry={() => setDeleteModal(false)}
//             />
//         </div>
//     );
// };

// export default VariationTab;

//on off

import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/superadmin/components/OuterTable';
import { useEffect, useState } from 'react';
import ActionButton from '../ActionButton';
import AddVariant from '../modals/AddVariant';
import DeleteModal from '../modals/DeleteModal';
import EditVariant from '../modals/EditVariant';

interface VariationTabProps {
    data: any;
    update: (field: string, value: any) => void;
}

interface Variant {
    id: string;
    name: string;
    sellingPrice: string;
    estimatedCost: string;
    inventoryRule?: string; // Added for Track Stock ON
    unitCost?: string; // Added for Track Stock ON
    locked?: boolean;
}

// 1. Updated default items to match your "editvariant.jpg" design
const defaultVariants: Variant[] = [
    {
        id: '1',
        name: 'Standard',
        sellingPrice: '3.000',
        estimatedCost: '2.000',
        inventoryRule: '1.000 x Serving',
        unitCost: '1.500',
        locked: true,
    },
    {
        id: '2',
        name: 'Large Size',
        sellingPrice: '4.500',
        estimatedCost: '3.500',
        inventoryRule: '1.500 x Serving',
        unitCost: '2.250',
    },
    {
        id: '3',
        name: 'Kids Bowl',
        sellingPrice: '2.000',
        estimatedCost: '1.000',
        inventoryRule: '0.500 x Serving',
        unitCost: '0.750',
    },
];

const VariationTab = ({ data, update }: VariationTabProps) => {
    // Automatically push the items to the parent state when the component loads
    useEffect(() => {
        if (
            !data.variants ||
            (data.variants.length === 1 &&
                data.variants[0].name === 'Standard') ||
            data.variants.length === 0
        ) {
            update('variants', defaultVariants);
        }
    }, []);

    // Read from the parent data
    const variants: Variant[] =
        data.variants && data.variants.length > 0
            ? data.variants
            : defaultVariants;

    // --- Modal States ---
    const [isVariantOpen, setIsVariantOpen] = useState(false);
    const [isEditVariantOpen, setIsEditVariantOpen] = useState(false);
    const [currentVariant, setCurrentVariant] = useState<Variant | null>(null);
    const [deleteModalOpen, setDeleteModal] = useState(false);

    // --- Handlers ---
    const deleteVariant = (id: string) => {
        update(
            'variants',
            variants.filter((v) => v.id !== id),
        );
    };

    const openEditModal = (variant: Variant) => {
        setCurrentVariant(variant);
        setIsEditVariantOpen(true);
    };

    const handleAdd = (newVariantData: any) => {
        const newVariant: Variant = {
            id: Date.now().toString(),
            name: newVariantData.name || '',
            sellingPrice: newVariantData.sellingPrice || '0.000',
            estimatedCost: newVariantData.estimatedCost || '0.000',
            inventoryRule: '1.000 x Serving', // Default fallback for UI
            unitCost: newVariantData.estimatedCost || '0.000',
        };
        update('variants', [...variants, newVariant]);
        setIsVariantOpen(false);
    };

    const handleEdit = (updatedVariantData: any) => {
        if (!currentVariant) return;

        update(
            'variants',
            variants.map((v) =>
                v.id === currentVariant.id
                    ? {
                          ...v,
                          ...updatedVariantData,
                          unitCost: updatedVariantData.estimatedCost,
                      }
                    : v,
            ),
        );
        setIsEditVariantOpen(false);
        setCurrentVariant(null);
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">
                    Item Variants
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    Define specific versions of this item (e.g., Regular vs.
                    Large, or Spicy vs. Mild). You can add up to 3 Variants.
                </p>
            </div>

            {/* Table Area */}
            <div className="overflow-hidden border-t border-gray-200">
                <Table>
                    <TableHeader>
                        {/* DYNAMIC COLUMNS BASED ON TRACK STOCK */}
                        <TableHead
                            className={data.trackStock ? 'w-3/12' : 'w-4/12'}
                        >
                            Variant Name
                        </TableHead>
                        <TableHead
                            className={data.trackStock ? 'w-2/12' : 'w-3/12'}
                        >
                            Selling Price
                        </TableHead>

                        {data.trackStock ? (
                            <>
                                <TableHead className="w-3/12">
                                    Inventory Rule{' '}
                                    <span className="ml-1 inline-block text-gray-400">
                                        ?
                                    </span>
                                </TableHead>
                                <TableHead className="w-2/12">
                                    Unit Cost
                                </TableHead>
                            </>
                        ) : (
                            <TableHead className="w-3/12">
                                Estimated Cost
                            </TableHead>
                        )}

                        <TableHead className="w-2/12 text-right">
                            Actions
                        </TableHead>
                    </TableHeader>

                    <TableBody>
                        {variants.map((variant) => (
                            <TableRow key={variant.id}>
                                <TableCell>
                                    <p className="font-medium text-gray-900">
                                        {variant.name}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className="font-medium text-gray-900">
                                        {variant.sellingPrice}
                                    </p>
                                    <p className="text-xs text-gray-400">KWD</p>
                                </TableCell>

                                {/* DYNAMIC CELLS BASED ON TRACK STOCK */}
                                {data.trackStock ? (
                                    <>
                                        <TableCell>
                                            <p className="font-medium text-gray-900">
                                                {variant.inventoryRule}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className="font-medium text-gray-900">
                                                {variant.unitCost}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                KWD
                                            </p>
                                        </TableCell>
                                    </>
                                ) : (
                                    <TableCell>
                                        <p className="font-medium text-gray-900">
                                            {variant.estimatedCost}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            KWD
                                        </p>
                                    </TableCell>
                                )}

                                <TableCell>
                                    <div className="flex items-center justify-end gap-2">
                                        {variant.locked ? (
                                            <span className="pr-2 text-sm font-medium text-gray-600">
                                                Locked
                                            </span>
                                        ) : (
                                            <>
                                                <ActionButton
                                                    onClick={() =>
                                                        openEditModal(variant)
                                                    }
                                                >
                                                    <PencilIcon className="h-4 w-4 text-iconColor" />
                                                </ActionButton>
                                                <ActionButton
                                                    onClick={() =>
                                                        setDeleteModal(true)
                                                    }
                                                >
                                                    <TrashIcon className="h-4 w-4 text-iconColor" />
                                                </ActionButton>
                                            </>
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Add Variant Button */}
                <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                    <IconButton onClick={() => setIsVariantOpen(true)}>
                        <PlusIcon className="h-4 w-4" />
                        Add Variant
                    </IconButton>
                </div>
            </div>

            <AddVariant
                isOpen={isVariantOpen}
                onClose={() => setIsVariantOpen(false)}
                onConfirm={handleAdd}
            />

            <EditVariant
                isOpen={isEditVariantOpen}
                onClose={() => {
                    setIsEditVariantOpen(false);
                    setCurrentVariant(null);
                }}
                onConfirm={handleEdit}
            />

            <DeleteModal
                title="Delete Variant?"
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModal(false)}
                onRetry={() => setDeleteModal(false)}
            />
        </div>
    );
};

export default VariationTab;
