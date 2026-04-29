// import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
// import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
// import PlusIcon from '@/shared/images/icons/plus.svg?react';
// import ActionButton from '@/shared/sharedcomponents/ui/ActionButton';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/superadmin/components/OuterTable';
// import { useState } from 'react';
// import AddOption from '../modals/AddOptions';
// import CreateNewGroup from '../modals/CreateNewGroup';
// import DeleteModal from '../modals/DeleteModal';
// import EditGroup from '../modals/EditGroup';
// import EditOption from '../modals/EditOptions';

// interface ModifiersTabProps {
//     data: any;
//     update: (field: string, value: any) => void;
// }

// interface ModifierOption {
//     id: string;
//     name: string;
//     additionalPrice: string;
//     estCost: string;
//     inventoryRule?: string; // Added for Track Stock ON
//     unitCost?: string; // Added for Track Stock ON
// }

// interface ModifierGroup {
//     id: string;
//     name: string;
//     required: boolean;
//     maxSelect: number;
//     options: ModifierOption[];
// }

// const ModifiersTab = ({ data, update }: ModifiersTabProps) => {
//     const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//     const [isCreateGroupOpen, setIsCreateGroupOpen] = useState(false);
//     const [isEditGroupOpen, setIsEditGroupOpen] = useState(false);
//     const [currentGroup, setCurrentGroup] = useState<any>(null);

//     const [isAddOptionOpen, setIsAddOptionOpen] = useState(false);
//     const [isEditOptionOpen, setIsEditOptionOpen] = useState(false);
//     const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
//     const [currentOption, setCurrentOption] = useState<any>(null);

//     // Hardcoded data updated to match the "editmodifier.jpg" design
//     const groups: ModifierGroup[] = [
//         {
//             id: 'g1',
//             name: 'Meat Temperature',
//             required: true,
//             maxSelect: 1,
//             options: [
//                 {
//                     id: 'o1',
//                     name: 'Rare',
//                     additionalPrice: '0.000',
//                     estCost: '0.000',
//                     inventoryRule: 'N/A',
//                     unitCost: '0.000',
//                 },
//                 {
//                     id: 'o2',
//                     name: 'Medium',
//                     additionalPrice: '0.000',
//                     estCost: '0.000',
//                     inventoryRule: 'N/A',
//                     unitCost: '0.000',
//                 },
//                 {
//                     id: 'o3',
//                     name: 'Well Done',
//                     additionalPrice: '0.000',
//                     estCost: '0.000',
//                     inventoryRule: 'N/A',
//                     unitCost: '0.000',
//                 },
//             ],
//         },
//         {
//             id: 'g2',
//             name: 'Extra Toppings',
//             required: false,
//             maxSelect: 3,
//             options: [
//                 {
//                     id: 'o4',
//                     name: 'Extra Cheese',
//                     additionalPrice: '0.100',
//                     estCost: '0.020',
//                     inventoryRule: '1.0 x Cheese Slice',
//                     unitCost: '0.020',
//                 },
//                 {
//                     id: 'o5',
//                     name: 'Bacon Strip',
//                     additionalPrice: '0.250',
//                     estCost: '0.050',
//                     inventoryRule: '1.0 x Bacon',
//                     unitCost: '0.050',
//                 },
//             ],
//         },
//     ];

//     const handleAddOptionConfirm = (optionData: any) => {
//         if (!activeGroupId) return;
//         const updated = groups.map((g) => {
//             if (g.id !== activeGroupId) return g;
//             return {
//                 ...g,
//                 options: [
//                     ...g.options,
//                     {
//                         id: Date.now().toString(),
//                         name: optionData.name || 'New Option',
//                         additionalPrice: optionData.additionalPrice || '0.000',
//                         estCost: optionData.estimatedCost || '0.000',
//                         inventoryRule: 'N/A',
//                         unitCost: optionData.estimatedCost || '0.000',
//                     },
//                 ],
//             };
//         });
//         update('modifierGroups', updated);
//         setIsAddOptionOpen(false);
//         setActiveGroupId(null);
//     };

//     const handleEditOptionConfirm = (optionData: any) => {
//         if (!activeGroupId || !currentOption) return;
//         const updated = groups.map((g) => {
//             if (g.id !== activeGroupId) return g;
//             return {
//                 ...g,
//                 options: g.options.map((o) =>
//                     o.id === currentOption.id
//                         ? {
//                               ...o,
//                               name: optionData.name,
//                               additionalPrice: optionData.additionalPrice,
//                               estCost: optionData.estimatedCost,
//                               unitCost: optionData.estimatedCost,
//                           }
//                         : o,
//                 ),
//             };
//         });
//         update('modifierGroups', updated);
//         setIsEditOptionOpen(false);
//         setCurrentOption(null);
//         setActiveGroupId(null);
//     };

//     const activeGroupName =
//         groups.find((g) => g.id === activeGroupId)?.name || '';

//     return (
//         <div className="space-y-6">
//             {/* Header */}
//             <div className="flex items-start justify-between">
//                 <div>
//                     <h2 className="text-xl font-bold text-gray-900">
//                         Modifier Groups
//                     </h2>
//                     <p className="mt-1 text-sm text-gray-500">
//                         Add customization groups to this item (e.g., Cooking
//                         Temperature, Extra Toppings). You can add up to 3
//                         groups.
//                     </p>
//                 </div>
//                 {groups.length < 3 && (
//                     <IconButton onClick={() => setIsCreateGroupOpen(true)}>
//                         <PlusIcon className="h-4 w-4" />
//                         Create New Group
//                     </IconButton>
//                 )}
//             </div>

//             {/* Groups */}
//             {groups.map((group) => (
//                 <div
//                     key={group.id}
//                     className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
//                 >
//                     {/* Group Header */}
//                     <div className="flex items-center justify-between px-6 py-4">
//                         <div>
//                             <p className="font-semibold text-gray-900">
//                                 {group.name}
//                             </p>
//                             <p className="text-xs text-gray-500">
//                                 {group.required ? 'Required' : 'Optional'} ·{' '}
//                                 {group.required
//                                     ? 'Select exactly 1'
//                                     : `Max ${group.maxSelect}`}
//                             </p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <ActionButton
//                                 onClick={() => {
//                                     setCurrentGroup(group);
//                                     setIsEditGroupOpen(true);
//                                 }}
//                             >
//                                 <PencilIcon className="h-4 w-4 text-iconColor" />
//                             </ActionButton>
//                             <ActionButton
//                                 onClick={() => setIsDeleteModalOpen(true)}
//                             >
//                                 <TrashIcon className="h-4 w-4 text-iconColor" />
//                             </ActionButton>
//                         </div>
//                     </div>

//                     {/* Table Area */}
//                     <div className="overflow-hidden border-t border-gray-200">
//                         <Table>
//                             <TableHeader>
//                                 {/* DYNAMIC COLUMNS BASED ON TRACK STOCK */}
//                                 <TableHead
//                                     className={
//                                         data.trackStock ? 'w-3/12' : 'w-5/12'
//                                     }
//                                 >
//                                     Option Name
//                                 </TableHead>
//                                 <TableHead
//                                     className={
//                                         data.trackStock ? 'w-2/12' : 'w-3/12'
//                                     }
//                                 >
//                                     Additional Price
//                                 </TableHead>

//                                 {data.trackStock ? (
//                                     <>
//                                         <TableHead className="w-3/12">
//                                             Inventory Rule{' '}
//                                             <span className="ml-1 inline-block text-gray-400">
//                                                 ?
//                                             </span>
//                                         </TableHead>
//                                         <TableHead className="w-2/12">
//                                             Unit Cost
//                                         </TableHead>
//                                     </>
//                                 ) : (
//                                     <TableHead className="w-3/12">
//                                         Est. Cost
//                                     </TableHead>
//                                 )}

//                                 <TableHead
//                                     className={
//                                         data.trackStock
//                                             ? 'w-2/12 text-right'
//                                             : 'w-1/12 text-right'
//                                     }
//                                 >
//                                     Actions
//                                 </TableHead>
//                             </TableHeader>

//                             <TableBody>
//                                 {group.options.map((opt) => (
//                                     <TableRow key={opt.id}>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-900">
//                                                 {opt.name}
//                                             </p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-900">
//                                                 {opt.additionalPrice}
//                                             </p>
//                                             <p className="text-xs text-gray-400">
//                                                 KWD
//                                             </p>
//                                         </TableCell>

//                                         {/* DYNAMIC CELLS BASED ON TRACK STOCK */}
//                                         {data.trackStock ? (
//                                             <>
//                                                 <TableCell>
//                                                     <p className="font-medium text-gray-900">
//                                                         {opt.inventoryRule}
//                                                     </p>
//                                                 </TableCell>
//                                                 <TableCell>
//                                                     <p className="font-medium text-gray-900">
//                                                         {opt.unitCost}
//                                                     </p>
//                                                     <p className="text-xs text-gray-400">
//                                                         KWD
//                                                     </p>
//                                                 </TableCell>
//                                             </>
//                                         ) : (
//                                             <TableCell>
//                                                 <p className="font-medium text-gray-900">
//                                                     {opt.estCost}
//                                                 </p>
//                                                 <p className="text-xs text-gray-400">
//                                                     KWD
//                                                 </p>
//                                             </TableCell>
//                                         )}

//                                         <TableCell>
//                                             <div className="flex items-center justify-end gap-2">
//                                                 <ActionButton
//                                                     onClick={() => {
//                                                         setActiveGroupId(
//                                                             group.id,
//                                                         );
//                                                         setCurrentOption(opt);
//                                                         setIsEditOptionOpen(
//                                                             true,
//                                                         );
//                                                     }}
//                                                 >
//                                                     <PencilIcon className="h-4 w-4 text-iconColor" />
//                                                 </ActionButton>
//                                                 <ActionButton
//                                                     onClick={() =>
//                                                         setIsDeleteModalOpen(
//                                                             true,
//                                                         )
//                                                     }
//                                                 >
//                                                     <TrashIcon className="h-4 w-4 text-iconColor" />
//                                                 </ActionButton>
//                                             </div>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>

//                         <div className="border-t border-gray-200 px-6 py-4">
//                             <IconButton
//                                 onClick={() => {
//                                     setActiveGroupId(group.id);
//                                     setIsAddOptionOpen(true);
//                                 }}
//                             >
//                                 <PlusIcon className="h-4 w-4" />
//                                 Add Option
//                             </IconButton>
//                         </div>
//                     </div>
//                 </div>
//             ))}

//             {/* Modals */}
//             <DeleteModal
//                 title="Delete Group?"
//                 isOpen={isDeleteModalOpen}
//                 onClose={() => setIsDeleteModalOpen(false)}
//                 onRetry={() => setIsDeleteModalOpen(false)}
//             />
//             <CreateNewGroup
//                 isOpen={isCreateGroupOpen}
//                 onClose={() => setIsCreateGroupOpen(false)}
//             />
//             <EditGroup
//                 isOpen={isEditGroupOpen}
//                 onClose={() => {
//                     setIsEditGroupOpen(false);
//                     setCurrentGroup(null);
//                 }}
//                 initialData={currentGroup}
//                 onConfirm={(updatedData) => {
//                     setIsEditGroupOpen(false);
//                     setCurrentGroup(null);
//                 }}
//             />
//             <AddOption
//                 isOpen={isAddOptionOpen}
//                 onClose={() => {
//                     setIsAddOptionOpen(false);
//                     setActiveGroupId(null);
//                 }}
//                 parentGroupName={activeGroupName}
//                 onConfirm={handleAddOptionConfirm}
//                 trackStock={data.trackStock} // ← ADD THIS
//             />
//             <EditOption
//                 isOpen={isEditOptionOpen}
//                 onClose={() => {
//                     setIsEditOptionOpen(false);
//                     setCurrentOption(null);
//                     setActiveGroupId(null);
//                 }}
//                 parentGroupName={activeGroupName}
//                 initialData={
//                     currentOption
//                         ? {
//                               ...currentOption,
//                               estimatedCost: currentOption.estCost,
//                           }
//                         : null
//                 }
//                 onConfirm={handleEditOptionConfirm}
//                 trackStock={data.trackStock} // ← ADD THIS
//             />
//         </div>
//     );
// };

// export default ModifiersTab;

import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';
import ActionButton from '@/shared/sharedcomponents/ui/ActionButton';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/superadmin/components/OuterTable';
import { useState } from 'react';
import AddOption from '../modals/AddOptions';
import CreateNewGroup from '../modals/CreateNewGroup';
import DeleteModal from '../modals/DeleteModal';
import EditGroup from '../modals/EditGroup';
import EditOption from '../modals/EditOptions';

interface ModifiersTabProps {
    data: any;
    update: (field: string, value: any) => void;
}

interface ModifierOption {
    id: string;
    name: string;
    additionalPrice: string;
    estCost: string;
    inventoryRule?: string;
    unitCost?: string;
}

interface ModifierGroup {
    id: string;
    name: string;
    required: boolean;
    maxSelect: number;
    options: ModifierOption[];
}

const ModifiersTab = ({ data, update }: ModifiersTabProps) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isCreateGroupOpen, setIsCreateGroupOpen] = useState(false);
    const [isEditGroupOpen, setIsEditGroupOpen] = useState(false);
    const [currentGroup, setCurrentGroup] = useState<any>(null);

    const [isAddOptionOpen, setIsAddOptionOpen] = useState(false);
    const [isEditOptionOpen, setIsEditOptionOpen] = useState(false);
    const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
    const [currentOption, setCurrentOption] = useState<any>(null);

    // --- Delete States ---
    const [groupToDelete, setGroupToDelete] = useState<ModifierGroup | null>(
        null,
    );
    const [optionToDelete, setOptionToDelete] = useState<{
        groupId: string;
        option: ModifierOption;
    } | null>(null);

    const groups: ModifierGroup[] = [
        {
            id: 'g1',
            name: 'Meat Temperature',
            required: true,
            maxSelect: 1,
            options: [
                {
                    id: 'o1',
                    name: 'Rare',
                    additionalPrice: '0.000',
                    estCost: '0.000',
                    inventoryRule: 'N/A',
                    unitCost: '0.000',
                },
                {
                    id: 'o2',
                    name: 'Medium',
                    additionalPrice: '0.000',
                    estCost: '0.000',
                    inventoryRule: 'N/A',
                    unitCost: '0.000',
                },
                {
                    id: 'o3',
                    name: 'Well Done',
                    additionalPrice: '0.000',
                    estCost: '0.000',
                    inventoryRule: 'N/A',
                    unitCost: '0.000',
                },
            ],
        },
        {
            id: 'g2',
            name: 'Extra Toppings',
            required: false,
            maxSelect: 3,
            options: [
                {
                    id: 'o4',
                    name: 'Extra Cheese',
                    additionalPrice: '0.100',
                    estCost: '0.020',
                    inventoryRule: '1.0 x Cheese Slice',
                    unitCost: '0.020',
                },
                {
                    id: 'o5',
                    name: 'Bacon Strip',
                    additionalPrice: '0.250',
                    estCost: '0.050',
                    inventoryRule: '1.0 x Bacon',
                    unitCost: '0.050',
                },
            ],
        },
    ];

    // --- Delete Handlers ---
    const openDeleteGroupModal = (group: ModifierGroup) => {
        setGroupToDelete(group);
        setOptionToDelete(null);
        setIsDeleteModalOpen(true);
    };

    const openDeleteOptionModal = (groupId: string, option: ModifierOption) => {
        setOptionToDelete({ groupId, option });
        setGroupToDelete(null);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (groupToDelete) {
            update(
                'modifierGroups',
                groups.filter((g) => g.id !== groupToDelete.id),
            );
        } else if (optionToDelete) {
            const updated = groups.map((g) => {
                if (g.id !== optionToDelete.groupId) return g;
                return {
                    ...g,
                    options: g.options.filter(
                        (o) => o.id !== optionToDelete.option.id,
                    ),
                };
            });
            update('modifierGroups', updated);
        }
        setIsDeleteModalOpen(false);
        setGroupToDelete(null);
        setOptionToDelete(null);
    };

    const handleAddOptionConfirm = (optionData: any) => {
        if (!activeGroupId) return;
        const updated = groups.map((g) => {
            if (g.id !== activeGroupId) return g;
            return {
                ...g,
                options: [
                    ...g.options,
                    {
                        id: Date.now().toString(),
                        name: optionData.name || 'New Option',
                        additionalPrice: optionData.additionalPrice || '0.000',
                        estCost: optionData.estimatedCost || '0.000',
                        inventoryRule: 'N/A',
                        unitCost: optionData.estimatedCost || '0.000',
                    },
                ],
            };
        });
        update('modifierGroups', updated);
        setIsAddOptionOpen(false);
        setActiveGroupId(null);
    };

    const handleEditOptionConfirm = (optionData: any) => {
        if (!activeGroupId || !currentOption) return;
        const updated = groups.map((g) => {
            if (g.id !== activeGroupId) return g;
            return {
                ...g,
                options: g.options.map((o) =>
                    o.id === currentOption.id
                        ? {
                              ...o,
                              name: optionData.name,
                              additionalPrice: optionData.additionalPrice,
                              estCost: optionData.estimatedCost,
                              unitCost: optionData.estimatedCost,
                          }
                        : o,
                ),
            };
        });
        update('modifierGroups', updated);
        setIsEditOptionOpen(false);
        setCurrentOption(null);
        setActiveGroupId(null);
    };

    const activeGroupName =
        groups.find((g) => g.id === activeGroupId)?.name || '';

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">
                        Modifier Groups
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Add customization groups to this item (e.g., Cooking
                        Temperature, Extra Toppings). You can add up to 3
                        groups.
                    </p>
                </div>
                {groups.length < 3 && (
                    <IconButton onClick={() => setIsCreateGroupOpen(true)}>
                        <PlusIcon className="h-4 w-4" />
                        Create New Group
                    </IconButton>
                )}
            </div>

            {/* Groups */}
            {groups.map((group) => (
                <div
                    key={group.id}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                    {/* Group Header */}
                    <div className="flex items-center justify-between px-6 py-4">
                        <div>
                            <p className="font-semibold text-gray-900">
                                {group.name}
                            </p>
                            <p className="text-xs text-gray-500">
                                {group.required ? 'Required' : 'Optional'} ·{' '}
                                {group.required
                                    ? 'Select exactly 1'
                                    : `Max ${group.maxSelect}`}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <ActionButton
                                onClick={() => {
                                    setCurrentGroup(group);
                                    setIsEditGroupOpen(true);
                                }}
                            >
                                <PencilIcon className="h-4 w-4 text-iconColor" />
                            </ActionButton>
                            <ActionButton
                                onClick={() => openDeleteGroupModal(group)}
                            >
                                <TrashIcon className="h-4 w-4 text-iconColor" />
                            </ActionButton>
                        </div>
                    </div>

                    {/* Table Area */}
                    <div className="overflow-hidden border-t border-gray-200">
                        <Table>
                            <TableHeader>
                                <TableHead className="w-6/12">
                                    Option Name
                                </TableHead>
                                <TableHead className="w-2/12 text-right">
                                    Additional Price
                                </TableHead>
                                {data.trackStock ? (
                                    <>
                                        <TableHead className="w-2/12 text-right">
                                            Inventory Rule{' '}
                                            <span className="ml-1 inline-block text-gray-400">
                                                ?
                                            </span>
                                        </TableHead>
                                        <TableHead className="w-1/12 text-right">
                                            Unit Cost
                                        </TableHead>
                                    </>
                                ) : (
                                    <TableHead className="w-2/12 text-right">
                                        Est. Cost
                                    </TableHead>
                                )}
                                <TableHead className="w-2/12 text-right">
                                    Actions
                                </TableHead>
                            </TableHeader>

                            <TableBody>
                                {group.options.map((opt) => (
                                    <TableRow key={opt.id}>
                                        <TableCell>
                                            <p className="font-medium text-gray-900">
                                                {opt.name}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className="text-right font-medium text-gray-900">
                                                {opt.additionalPrice}
                                            </p>
                                            <p className="text-right text-xs text-gray-400">
                                                KWD
                                            </p>
                                        </TableCell>
                                        {data.trackStock ? (
                                            <>
                                                <TableCell>
                                                    <p className="text-right font-medium text-gray-900">
                                                        {opt.inventoryRule}
                                                    </p>
                                                </TableCell>
                                                <TableCell>
                                                    <p className="text-right font-medium text-gray-900">
                                                        {opt.unitCost}
                                                    </p>
                                                    <p className="text-right text-xs text-gray-400">
                                                        KWD
                                                    </p>
                                                </TableCell>
                                            </>
                                        ) : (
                                            <TableCell>
                                                <p className="text-right font-medium text-gray-900">
                                                    {opt.estCost}
                                                </p>
                                                <p className="text-right text-xs text-gray-400">
                                                    KWD
                                                </p>
                                            </TableCell>
                                        )}
                                        <TableCell>
                                            <div className="flex items-center justify-end gap-2">
                                                <ActionButton
                                                    onClick={() => {
                                                        setActiveGroupId(
                                                            group.id,
                                                        );
                                                        setCurrentOption(opt);
                                                        setIsEditOptionOpen(
                                                            true,
                                                        );
                                                    }}
                                                >
                                                    <PencilIcon className="h-4 w-4 text-iconColor" />
                                                </ActionButton>
                                                <ActionButton
                                                    onClick={() =>
                                                        openDeleteOptionModal(
                                                            group.id,
                                                            opt,
                                                        )
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

                        <div className="border-t border-gray-200 px-6 py-4">
                            <IconButton
                                onClick={() => {
                                    setActiveGroupId(group.id);
                                    setIsAddOptionOpen(true);
                                }}
                            >
                                <PlusIcon className="h-4 w-4" />
                                Add Option
                            </IconButton>
                        </div>
                    </div>
                </div>
            ))}

            {/* Modals */}
            <DeleteModal
                title={
                    groupToDelete
                        ? `Delete ${groupToDelete.name}?`
                        : optionToDelete
                          ? `Delete ${optionToDelete.option.name}?`
                          : 'Delete?'
                }
                isOpen={isDeleteModalOpen}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setGroupToDelete(null);
                    setOptionToDelete(null);
                }}
                onRetry={confirmDelete}
            />
            <CreateNewGroup
                isOpen={isCreateGroupOpen}
                onClose={() => setIsCreateGroupOpen(false)}
            />
            <EditGroup
                isOpen={isEditGroupOpen}
                onClose={() => {
                    setIsEditGroupOpen(false);
                    setCurrentGroup(null);
                }}
                initialData={currentGroup}
                onConfirm={() => {
                    setIsEditGroupOpen(false);
                    setCurrentGroup(null);
                }}
            />
            <AddOption
                isOpen={isAddOptionOpen}
                onClose={() => {
                    setIsAddOptionOpen(false);
                    setActiveGroupId(null);
                }}
                parentGroupName={activeGroupName}
                onConfirm={handleAddOptionConfirm}
                trackStock={data.trackStock}
            />
            <EditOption
                isOpen={isEditOptionOpen}
                onClose={() => {
                    setIsEditOptionOpen(false);
                    setCurrentOption(null);
                    setActiveGroupId(null);
                }}
                parentGroupName={activeGroupName}
                initialData={
                    currentOption
                        ? {
                              ...currentOption,
                              estimatedCost: currentOption.estCost,
                          }
                        : null
                }
                onConfirm={handleEditOptionConfirm}
                trackStock={data.trackStock}
            />
        </div>
    );
};

export default ModifiersTab;
