// import TrashIcon from '@/shared/images/icons/delBold.svg?react';
// import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
// import PlusIcon from '@/shared/images/icons/plus.svg?react';

// interface ModifiersTabProps {
//     data: any;
//     update: (field: string, value: any) => void;
// }

// interface ModifierOption {
//     id: string;
//     name: string;
//     additionalPrice: string;
//     estCost: string;
// }

// interface ModifierGroup {
//     id: string;
//     name: string;
//     required: boolean;
//     maxSelect: number;
//     options: ModifierOption[];
// }

// const ModifiersTab = ({ data, update }: ModifiersTabProps) => {
//     const groups: ModifierGroup[] = data.modifierGroups || [];

//     const addGroup = () => {
//         if (groups.length >= 3) return;
//         const newGroup: ModifierGroup = {
//             id: Date.now().toString(),
//             name: 'New Group',
//             required: false,
//             maxSelect: 1,
//             options: [],
//         };
//         update('modifierGroups', [...groups, newGroup]);
//     };

//     const deleteGroup = (groupId: string) => {
//         update(
//             'modifierGroups',
//             groups.filter((g) => g.id !== groupId),
//         );
//     };

//     const addOption = (groupId: string) => {
//         const updated = groups.map((g) => {
//             if (g.id !== groupId) return g;
//             return {
//                 ...g,
//                 options: [
//                     ...g.options,
//                     {
//                         id: Date.now().toString(),
//                         name: '',
//                         additionalPrice: '0.000',
//                         estCost: '0.000',
//                     },
//                 ],
//             };
//         });
//         update('modifierGroups', updated);
//     };

//     const deleteOption = (groupId: string, optionId: string) => {
//         const updated = groups.map((g) => {
//             if (g.id !== groupId) return g;
//             return {
//                 ...g,
//                 options: g.options.filter((o) => o.id !== optionId),
//             };
//         });
//         update('modifierGroups', updated);
//     };

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
//                     <button
//                         onClick={addGroup}
//                         className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
//                     >
//                         <PlusIcon className="h-4 w-4" />
//                         Create New Group
//                     </button>
//                 )}
//             </div>

//             {/* Groups */}
//             {groups.length === 0 && (
//                 <div className="rounded-xl border border-dashed border-gray-200 py-12 text-center">
//                     <p className="text-sm text-gray-400">
//                         No modifier groups yet. Click "Create New Group" to add
//                         one.
//                     </p>
//                 </div>
//             )}

//             {groups.map((group) => (
//                 <div
//                     key={group.id}
//                     className="rounded-xl border border-gray-200 bg-white shadow-sm"
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
//                             <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
//                                 <PencilIcon className="h-4 w-4 text-gray-400" />
//                             </button>
//                             <button
//                                 onClick={() => deleteGroup(group.id)}
//                                 className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
//                             >
//                                 <TrashIcon className="h-4 w-4 text-gray-400" />
//                             </button>
//                         </div>
//                     </div>

//                     {/* Options Table */}
//                     <div className="border-t border-gray-100">
//                         <div className="grid grid-cols-12 gap-4 bg-gray-50 px-6 py-2 text-xs font-semibold text-gray-500">
//                             <div className="col-span-5">Option Name</div>
//                             <div className="col-span-3">Additional Price</div>
//                             <div className="col-span-3">Est. Cost</div>
//                             <div className="col-span-1 text-right">Actions</div>
//                         </div>

//                         {group.options.map((opt) => (
//                             <div
//                                 key={opt.id}
//                                 className="grid grid-cols-12 items-center gap-4 border-t border-gray-100 px-6 py-3"
//                             >
//                                 <div className="col-span-5">
//                                     <p className="text-sm text-gray-900">
//                                         {opt.name || '—'}
//                                     </p>
//                                 </div>
//                                 <div className="col-span-3">
//                                     <p className="text-sm text-gray-900">
//                                         {opt.additionalPrice}
//                                     </p>
//                                     <p className="text-xs text-gray-400">KWD</p>
//                                 </div>
//                                 <div className="col-span-3">
//                                     <p className="text-sm text-gray-900">
//                                         {opt.estCost}
//                                     </p>
//                                     <p className="text-xs text-gray-400">KWD</p>
//                                 </div>
//                                 <div className="col-span-1 flex justify-end gap-1">
//                                     <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
//                                         <PencilIcon className="h-3.5 w-3.5 text-gray-400" />
//                                     </button>
//                                     <button
//                                         onClick={() =>
//                                             deleteOption(group.id, opt.id)
//                                         }
//                                         className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
//                                     >
//                                         <TrashIcon className="h-3.5 w-3.5 text-gray-400" />
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}

//                         {/* Add Option */}
//                         <div className="border-t border-gray-100 px-6 py-3">
//                             <button
//                                 onClick={() => addOption(group.id)}
//                                 className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
//                             >
//                                 <PlusIcon className="h-4 w-4" />
//                                 Add Option
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ModifiersTab;

// import TrashIcon from '@/shared/images/icons/delBold.svg?react';
// import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
// import PlusIcon from '@/shared/images/icons/plus.svg?react';

// interface ModifiersTabProps {
//     data: any;
//     update: (field: string, value: any) => void;
// }

// interface ModifierOption {
//     id: string;
//     name: string;
//     additionalPrice: string;
//     estCost: string;
// }

// interface ModifierGroup {
//     id: string;
//     name: string;
//     required: boolean;
//     maxSelect: number;
//     options: ModifierOption[];
// }

// const ModifiersTab = ({ data, update }: ModifiersTabProps) => {
//     const groups: ModifierGroup[] = data.modifierGroups || [];

//     const addGroup = () => {
//         if (groups.length >= 3) return;
//         const newGroup: ModifierGroup = {
//             id: Date.now().toString(),
//             name: 'New Group',
//             required: false,
//             maxSelect: 1,
//             options: [],
//         };
//         update('modifierGroups', [...groups, newGroup]);
//     };

//     const deleteGroup = (groupId: string) => {
//         update(
//             'modifierGroups',
//             groups.filter((g) => g.id !== groupId),
//         );
//     };

//     const addOption = (groupId: string) => {
//         const updated = groups.map((g) => {
//             if (g.id !== groupId) return g;
//             return {
//                 ...g,
//                 options: [
//                     ...g.options,
//                     {
//                         id: Date.now().toString(),
//                         name: 'New Option',
//                         additionalPrice: '0.000',
//                         estCost: '0.000',
//                     },
//                 ],
//             };
//         });
//         update('modifierGroups', updated);
//     };

//     const deleteOption = (groupId: string, optionId: string) => {
//         const updated = groups.map((g) => {
//             if (g.id !== groupId) return g;
//             return {
//                 ...g,
//                 options: g.options.filter((o) => o.id !== optionId),
//             };
//         });
//         update('modifierGroups', updated);
//     };

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
//                     <button
//                         onClick={addGroup}
//                         className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
//                     >
//                         <PlusIcon className="h-4 w-4" />
//                         Create New Group
//                     </button>
//                 )}
//             </div>

//             {/* Empty State */}
//             {groups.length === 0 && (
//                 <div className="rounded-xl border border-dashed border-gray-200 py-12 text-center">
//                     <p className="text-sm text-gray-400">
//                         No modifier groups yet. Click "Create New Group" to add
//                         one.
//                     </p>
//                 </div>
//             )}

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
//                             <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
//                                 <PencilIcon className="h-4 w-4 text-gray-400" />
//                             </button>
//                             <button
//                                 onClick={() => deleteGroup(group.id)}
//                                 className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
//                             >
//                                 <TrashIcon className="h-4 w-4 text-gray-400" />
//                             </button>
//                         </div>
//                     </div>

//                     {/* Options Table Header */}
//                     <div className="grid grid-cols-12 gap-4 border-t border-gray-100 bg-gray-50 px-6 py-2 text-xs font-semibold text-gray-500">
//                         <div className="col-span-5">Option Name</div>
//                         <div className="col-span-3">Additional Price</div>
//                         <div className="col-span-3">Est. Cost</div>
//                         <div className="col-span-1 text-right">Actions</div>
//                     </div>

//                     {/* Options Rows */}
//                     {group.options.map((opt) => (
//                         <div
//                             key={opt.id}
//                             className="grid grid-cols-12 items-center gap-4 border-t border-gray-100 px-6 py-3"
//                         >
//                             <div className="col-span-5">
//                                 <p className="text-sm text-gray-900">
//                                     {opt.name}
//                                 </p>
//                             </div>
//                             <div className="col-span-3">
//                                 <p className="text-sm text-gray-900">
//                                     {opt.additionalPrice}
//                                 </p>
//                                 <p className="text-xs text-gray-400">KWD</p>
//                             </div>
//                             <div className="col-span-3">
//                                 <p className="text-sm text-gray-900">
//                                     {opt.estCost}
//                                 </p>
//                                 <p className="text-xs text-gray-400">KWD</p>
//                             </div>
//                             <div className="col-span-1 flex items-center justify-end gap-1">
//                                 <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
//                                     <PencilIcon className="h-3.5 w-3.5 text-gray-400" />
//                                 </button>
//                                 <button
//                                     onClick={() =>
//                                         deleteOption(group.id, opt.id)
//                                     }
//                                     className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
//                                 >
//                                     <TrashIcon className="h-3.5 w-3.5 text-gray-400" />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}

//                     {/* Add Option */}
//                     <div className="border-t border-gray-100 px-6 py-3">
//                         <button
//                             onClick={() => addOption(group.id)}
//                             className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
//                         >
//                             <PlusIcon className="h-4 w-4" />
//                             Add Option
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ModifiersTab;

//hardcoded data
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

interface ModifiersTabProps {
    data: any;
    update: (field: string, value: any) => void;
}

interface ModifierOption {
    id: string;
    name: string;
    additionalPrice: string;
    estCost: string;
}

interface ModifierGroup {
    id: string;
    name: string;
    required: boolean;
    maxSelect: number;
    options: ModifierOption[];
}

const ModifiersTab = ({ data, update }: ModifiersTabProps) => {
    // Completely hardcoded data to match the design
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
                },
                {
                    id: 'o2',
                    name: 'Medium',
                    additionalPrice: '0.000',
                    estCost: '0.000',
                },
                {
                    id: 'o3',
                    name: 'Well Done',
                    additionalPrice: '0.000',
                    estCost: '0.000',
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
                },
                {
                    id: 'o5',
                    name: 'Bacon Strip',
                    additionalPrice: '0.250',
                    estCost: '0.050',
                },
            ],
        },
    ];

    const addGroup = () => {
        if (groups.length >= 3) return;
        const newGroup: ModifierGroup = {
            id: Date.now().toString(),
            name: 'New Group',
            required: false,
            maxSelect: 1,
            options: [],
        };
        update('modifierGroups', [...groups, newGroup]);
    };

    const deleteGroup = (groupId: string) => {
        update(
            'modifierGroups',
            groups.filter((g) => g.id !== groupId),
        );
    };

    const addOption = (groupId: string) => {
        const updated = groups.map((g) => {
            if (g.id !== groupId) return g;
            return {
                ...g,
                options: [
                    ...g.options,
                    {
                        id: Date.now().toString(),
                        name: 'New Option',
                        additionalPrice: '0.000',
                        estCost: '0.000',
                    },
                ],
            };
        });
        update('modifierGroups', updated);
    };

    const deleteOption = (groupId: string, optionId: string) => {
        const updated = groups.map((g) => {
            if (g.id !== groupId) return g;
            return {
                ...g,
                options: g.options.filter((o) => o.id !== optionId),
            };
        });
        update('modifierGroups', updated);
    };

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
                    <IconButton onClick={addGroup}>
                        <PlusIcon className="h-4 w-4" />
                        Create New Group
                    </IconButton>
                )}
            </div>

            {/* Empty State */}
            {groups.length === 0 && (
                <div className="rounded-xl border border-dashed border-gray-200 py-12 text-center">
                    <p className="text-sm text-gray-400">
                        No modifier groups yet. Click "Create New Group" to add
                        one.
                    </p>
                </div>
            )}

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
                            <ActionButton>
                                <PencilIcon className="h-4 w-4 text-iconColor" />
                            </ActionButton>
                            <ActionButton onClick={() => deleteGroup(group.id)}>
                                <TrashIcon className="h-4 w-4 text-iconColor" />
                            </ActionButton>
                        </div>
                    </div>

                    {/* Table Area for Options */}
                    <div className="overflow-hidden border-t border-gray-200">
                        <Table>
                            <TableHeader>
                                <TableHead className="w-5/12">
                                    Option Name
                                </TableHead>
                                <TableHead className="w-3/12">
                                    Additional Price
                                </TableHead>
                                <TableHead className="w-3/12">
                                    Est. Cost
                                </TableHead>
                                <TableHead className="w-1/12 text-right">
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
                                            <p className="font-medium text-gray-900">
                                                {opt.additionalPrice}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                KWD
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className="font-medium text-gray-900">
                                                {opt.estCost}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                KWD
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center justify-end gap-2">
                                                <ActionButton>
                                                    <PencilIcon className="h-4 w-4 text-iconColor" />
                                                </ActionButton>
                                                <ActionButton
                                                    onClick={() =>
                                                        deleteOption(
                                                            group.id,
                                                            opt.id,
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

                        {/* Add Option Button */}
                        <div className="border-t border-gray-200 px-6 py-4">
                            <IconButton onClick={() => addOption(group.id)}>
                                <PlusIcon className="h-4 w-4" />
                                Add Option
                            </IconButton>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ModifiersTab;
