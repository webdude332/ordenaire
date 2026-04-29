// import {
//     closestCenter,
//     DndContext,
//     DragEndEvent,
//     KeyboardSensor,
//     PointerSensor,
//     useSensor,
//     useSensors,
// } from '@dnd-kit/core';
// import {
//     arrayMove,
//     SortableContext,
//     sortableKeyboardCoordinates,
//     useSortable,
//     verticalListSortingStrategy,
// } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
// import { useState } from 'react';

// // Shared UI Components
// import ActionButton from '@/shared/sharedcomponents/ui/ActionButton';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
// import Pagination from '@/shared/sharedcomponents/ui/Pagination';
// // import StatusBadge from '@/shared/sharedcomponents/ui/StatusBadge';
// import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';

// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/shared/sharedcomponents/ui/Table';

// // Modals
// import AddCategoryModal, {
//     type CategoryFormData,
// } from '@/admin/components/modals/AddCategoryModal';
// import EditCategoryModal from '@/admin/components/modals/EditCategoryModal';

// // Icons
// import ChevronDown from '@/shared/images/icons/chevron-down.svg?react';
// import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
// import DragIcon from '@/shared/images/icons/dragIcon.svg?react';
// import ExportIcon from '@/shared/images/icons/exportIcon.svg?react';
// import SearchIcon from '@/shared/images/icons/inputSearch.svg?react';
// import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
// import PlusIcon from '@/shared/images/icons/plus.svg?react';
// import DeleteModal from '../modals/DeleteModal';

// interface CategoryRow {
//     id: string;
//     name: string;
//     totalItems: number;
//     availability: string;
//     availabilityDays: string | null;
//     status: string;
// }

// // Sub-component for Draggable Logic
// const DraggableRow = ({
//     cat,
//     handleEditClick,
// }: {
//     cat: CategoryRow;
//     handleEditClick: (c: CategoryRow) => void;
// }) => {
//     const {
//         attributes,
//         listeners,
//         setNodeRef,
//         transform,
//         transition,
//         isDragging,
//     } = useSortable({ id: cat.id });

//     const style = {
//         transform: CSS.Transform.toString(transform),
//         transition,
//         zIndex: isDragging ? 50 : 'auto',
//         position: 'relative' as const,
//     };
//     const statusVariantMap: Record<string, BadgeVariant> = {
//         Active: 'success',
//         Draft: 'purple', // You can change this to 'blue' if you prefer
//         Inactive: 'gray',
//     };
//     const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//     const [selectedItemName, setSelectedItemName] = useState<string>('');
//     const handleDeleteClick = (itemName: string) => {
//         setSelectedItemName(itemName);
//         setIsDeleteModalOpen(true);
//     };

//     // 4. Handler for when the user clicks "Yes, Delete it!" inside the modal
//     const handleConfirmDelete = () => {
//         console.log(`Deleting: ${selectedItemName}`);
//         // Add your actual deletion logic (API call, state update) here

//         // Close modal after deleting
//         setIsDeleteModalOpen(false);
//         setSelectedItemName('');
//     };

//     return (
//         <div>
//             <TableRow
//                 ref={setNodeRef}
//                 style={style}
//                 className={`border-b border-gray-200 transition-colors ${isDragging ? 'bg-blue-50 opacity-50' : 'hover:bg-gray-50'}`}
//             >
//                 <TableCell className="py-4 pl-6">
//                     <DragIcon
//                         {...attributes}
//                         {...listeners}
//                         className="h-5 w-5 cursor-grab text-gray-400 outline-none active:cursor-grabbing"
//                     />
//                 </TableCell>
//                 <TableCell className="py-4">
//                     <div className="font-semibold text-gray-900">
//                         {cat.name}
//                     </div>
//                 </TableCell>
//                 <TableCell className="py-4">
//                     <div className="text-gray-700">{cat.totalItems} Items</div>
//                 </TableCell>
//                 <TableCell className="py-4">
//                     <div className="text-gray-700">{cat.availability}</div>
//                     {cat.availabilityDays && (
//                         <div className="mt-0.5 text-xs text-gray-500">
//                             {cat.availabilityDays}
//                         </div>
//                     )}
//                 </TableCell>
//                 <TableCell className="py-4">
//                     <Badge
//                         variant={statusVariantMap[cat.status] || 'gray'}
//                         withDot={true}
//                         rounded="md"
//                     >
//                         {cat.status}
//                     </Badge>
//                 </TableCell>
//                 <TableCell className="py-4 pr-6 text-right">
//                     <div className="flex items-center justify-end gap-2">
//                         <ActionButton onClick={() => handleEditClick(cat)}>
//                             <PencilIcon className="h-4 w-4 text-gray-400" />
//                         </ActionButton>
//                         <ActionButton
//                             onClick={() => handleDeleteClick(cat.name)}
//                         >
//                             <TrashIcon className="h-4 w-4 text-iconColor" />
//                         </ActionButton>
//                     </div>
//                 </TableCell>
//             </TableRow>
//             <DeleteModal
//                 isOpen={isDeleteModalOpen}
//                 onClose={() => setIsDeleteModalOpen(false)}
//                 onRetry={handleConfirmDelete}
//                 title={
//                     selectedItemName
//                         ? `Delete ${selectedItemName}?`
//                         : 'Delete Item'
//                 }
//             />
//         </div>
//     );
// };

// const Categories = () => {
//     const [selectedStatus, setSelectedStatus] = useState('');
//     const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//     // Initial Data State
//     const [items, setItems] = useState<CategoryRow[]>([
//         {
//             id: '1',
//             name: 'Starters',
//             totalItems: 40,
//             availability: 'Always',
//             availabilityDays: null,
//             status: 'Active',
//         },
//         {
//             id: '2',
//             name: 'Main Course',
//             totalItems: 40,
//             availability: '12pm - 3pm',
//             availabilityDays: 'Sat, Sun',
//             status: 'Inactive',
//         },
//         {
//             id: '3',
//             name: 'Lunch Special',
//             totalItems: 40,
//             availability: '12pm - 3pm',
//             availabilityDays: 'Mon - Fri',
//             status: 'Active',
//         },
//         {
//             id: '4',
//             name: 'Beverages',
//             totalItems: 40,
//             availability: 'Always',
//             availabilityDays: null,
//             status: 'Active',
//         },
//     ]);

//     const [editingCategory, setEditingCategory] = useState<CategoryFormData>({
//         name: '',
//         description: '',
//         status: 'active',
//         kitchenStation: '',
//         scheduleType: 'always',
//         fromTime: '8:00 AM',
//         toTime: '11:00 PM',
//         days: [],
//     });

//     // DnD Sensors
//     const sensors = useSensors(
//         useSensor(PointerSensor),
//         useSensor(KeyboardSensor, {
//             coordinateGetter: sortableKeyboardCoordinates,
//         }),
//     );

//     const handleDragEnd = (event: DragEndEvent) => {
//         const { active, over } = event;
//         if (over && active.id !== over.id) {
//             setItems((prev) => {
//                 const oldIndex = prev.findIndex((i) => i.id === active.id);
//                 const newIndex = prev.findIndex((i) => i.id === over.id);
//                 return arrayMove(prev, oldIndex, newIndex);
//             });
//         }
//     };

//     const handleEditClick = (cat: CategoryRow) => {
//         setEditingCategory({
//             name: cat.name,
//             description: '',
//             status: cat.status.toLowerCase() as 'active' | 'inactive',
//             kitchenStation: '',
//             scheduleType: cat.availability === 'Always' ? 'always' : 'custom',
//             fromTime: '8:00 AM',
//             toTime: '11:00 PM',
//             days: [],
//         });
//         setIsEditModalOpen(true);
//     };

//     const handleAddConfirm = (data: CategoryFormData) =>
//         console.log('New category:', data);
//     const handleEditConfirm = (data: CategoryFormData) =>
//         console.log('Updated category:', data);

//     return (
//         <div className="w-full">
//             <div className="mb-6 flex items-center justify-between">
//                 <div className="relative">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
//                         <SearchIcon className="h-4 w-4" />
//                     </div>
//                     <input
//                         type="text"
//                         placeholder="Search categories..."
//                         className="w-80 rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm text-gray-700 shadow-sm focus:border-[#7AB621] focus:outline-none"
//                     />
//                 </div>
//                 <div className="flex items-center gap-3">
//                     <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
//                         <ExportIcon className="h-4 w-4" /> Export{' '}
//                         <ChevronDown className="h-4 w-4" />
//                     </button>
//                     <CustomDropdown
//                         label=""
//                         options={[
//                             { label: 'Status: All', value: 'all' },
//                             { label: 'Active', value: 'active' },
//                             { label: 'Inactive', value: 'inactive' },
//                         ]}
//                         value={selectedStatus}
//                         onChange={setSelectedStatus}
//                         placeholder="Status: All"
//                     />
//                     <Button onClick={() => setIsAddModalOpen(true)}>
//                         <PlusIcon className="h-4 w-4" /> Add Category
//                     </Button>
//                 </div>
//             </div>

//             <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
//                 <div className="border-b border-borderColor px-6 py-4">
//                     <h2 className="text-lg font-semibold text-gray-900">
//                         Categories Table
//                     </h2>
//                 </div>

//                 <DndContext
//                     sensors={sensors}
//                     collisionDetection={closestCenter}
//                     onDragEnd={handleDragEnd}
//                 >
//                     <Table>
//                         <TableHeader>
//                             <TableHead className="py-4 pl-6 text-xs font-semibold text-gray-500">
//                                 Order
//                             </TableHead>
//                             <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                                 Category Info
//                             </TableHead>
//                             <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                                 Total Items
//                             </TableHead>
//                             <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                                 Availability
//                             </TableHead>
//                             <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                                 Status
//                             </TableHead>
//                             <TableHead className="py-4 pr-6 text-right text-xs font-semibold text-gray-500">
//                                 Actions
//                             </TableHead>
//                         </TableHeader>
//                         <TableBody>
//                             <SortableContext
//                                 items={items.map((i) => i.id)}
//                                 strategy={verticalListSortingStrategy}
//                             >
//                                 {items.map((cat) => (
//                                     <DraggableRow
//                                         key={cat.id}
//                                         cat={cat}
//                                         handleEditClick={handleEditClick}
//                                     />
//                                 ))}
//                             </SortableContext>
//                         </TableBody>
//                     </Table>
//                 </DndContext>

//                 <div>
//                     <Pagination />
//                 </div>
//             </TableContainer>

//             <AddCategoryModal
//                 isOpen={isAddModalOpen}
//                 onClose={() => setIsAddModalOpen(false)}
//                 onConfirm={handleAddConfirm}
//             />
//             <EditCategoryModal
//                 isOpen={isEditModalOpen}
//                 onClose={() => setIsEditModalOpen(false)}
//                 onConfirm={handleEditConfirm}
//                 initialData={editingCategory}
//             />
//         </div>
//     );
// };

// export default Categories;

import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

// Shared UI Components
import ActionButton from '@/shared/sharedcomponents/ui/ActionButton';
import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import Pagination from '@/shared/sharedcomponents/ui/Pagination';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '@/shared/sharedcomponents/ui/Table';

// Modals
import AddCategoryModal, {
    type CategoryFormData,
} from '@/admin/components/modals/AddCategoryModal';
import EditCategoryModal from '@/admin/components/modals/EditCategoryModal';

// Icons
import ChevronDown from '@/shared/images/icons/chevron-down.svg?react';
import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
import DragIcon from '@/shared/images/icons/dragIcon.svg?react';
import ExportIcon from '@/shared/images/icons/exportIcon.svg?react';
import SearchIcon from '@/shared/images/icons/inputSearch.svg?react';
import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import DeleteModal from '../modals/DeleteModal';

interface CategoryRow {
    id: string;
    name: string;
    totalItems: number;
    availability: string;
    availabilityDays: string | null;
    status: string;
}

const statusVariantMap: Record<string, BadgeVariant> = {
    Active: 'success',
    Draft: 'purple',
    Inactive: 'gray',
};

// Sub-component for Draggable Logic
const DraggableRow = ({
    cat,
    handleEditClick,
    handleDeleteClick,
}: {
    cat: CategoryRow;
    handleEditClick: (c: CategoryRow) => void;
    handleDeleteClick: (name: string) => void;
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: cat.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : 'auto',
        position: 'relative' as const,
    };

    return (
        <TableRow
            ref={setNodeRef}
            style={style}
            className={`border-b border-gray-200 transition-colors ${isDragging ? 'bg-blue-50 opacity-50' : 'hover:bg-gray-50'}`}
        >
            <TableCell className="py-4 pl-6">
                <DragIcon
                    {...attributes}
                    {...listeners}
                    className="h-5 w-5 cursor-grab text-gray-400 outline-none active:cursor-grabbing"
                />
            </TableCell>
            <TableCell className="py-4">
                <div className="font-semibold text-gray-900">{cat.name}</div>
            </TableCell>
            <TableCell className="py-4">
                <div className="text-gray-700">{cat.totalItems} Items</div>
            </TableCell>
            <TableCell className="py-4">
                <div className="text-gray-700">{cat.availability}</div>
                {cat.availabilityDays && (
                    <div className="mt-0.5 text-xs text-gray-500">
                        {cat.availabilityDays}
                    </div>
                )}
            </TableCell>
            <TableCell className="py-4">
                <Badge
                    variant={statusVariantMap[cat.status] || 'gray'}
                    withDot={true}
                    rounded="md"
                >
                    {cat.status}
                </Badge>
            </TableCell>
            <TableCell className="py-4 pr-6 text-right">
                <div className="flex items-center justify-end gap-2">
                    <ActionButton onClick={() => handleEditClick(cat)}>
                        <PencilIcon className="h-4 w-4 text-gray-400" />
                    </ActionButton>
                    <ActionButton onClick={() => handleDeleteClick(cat.name)}>
                        <TrashIcon className="h-4 w-4 text-iconColor" />
                    </ActionButton>
                </div>
            </TableCell>
        </TableRow>
    );
};

const Categories = () => {
    const [selectedStatus, setSelectedStatus] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedItemName, setSelectedItemName] = useState<string>('');

    const [items, setItems] = useState<CategoryRow[]>([
        {
            id: '1',
            name: 'Starters',
            totalItems: 40,
            availability: 'Always',
            availabilityDays: null,
            status: 'Active',
        },
        {
            id: '2',
            name: 'Main Course',
            totalItems: 40,
            availability: '12pm - 3pm',
            availabilityDays: 'Sat, Sun',
            status: 'Inactive',
        },
        {
            id: '3',
            name: 'Lunch Special',
            totalItems: 40,
            availability: '12pm - 3pm',
            availabilityDays: 'Mon - Fri',
            status: 'Active',
        },
        {
            id: '4',
            name: 'Beverages',
            totalItems: 40,
            availability: 'Always',
            availabilityDays: null,
            status: 'Active',
        },
    ]);

    const [editingCategory, setEditingCategory] = useState<CategoryFormData>({
        name: '',
        description: '',
        status: 'active',
        kitchenStation: '',
        scheduleType: 'always',
        fromTime: '8:00 AM',
        toTime: '11:00 PM',
        days: [],
    });

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setItems((prev) => {
                const oldIndex = prev.findIndex((i) => i.id === active.id);
                const newIndex = prev.findIndex((i) => i.id === over.id);
                return arrayMove(prev, oldIndex, newIndex);
            });
        }
    };

    const handleEditClick = (cat: CategoryRow) => {
        setEditingCategory({
            name: cat.name,
            description: '',
            status: cat.status.toLowerCase() as 'active' | 'inactive',
            kitchenStation: '',
            scheduleType: cat.availability === 'Always' ? 'always' : 'custom',
            fromTime: '8:00 AM',
            toTime: '11:00 PM',
            days: [],
        });
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = (name: string) => {
        setSelectedItemName(name);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Deleting: ${selectedItemName}`);
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="w-full">
            {/* Filters Row */}
            <div className="mb-6 flex items-center justify-between">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <SearchIcon className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search categories..."
                        className="w-80 rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm text-gray-700 shadow-sm focus:border-[#7AB621] focus:outline-none"
                    />
                </div>
                <div className="flex items-center gap-3">
                    {/* <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        <ExportIcon className="h-4 w-4 text-iconColor" /> Export{' '}
                        <ChevronDown className="h-4 w-4" />
                    </button> */}
                    <IconButton className="py-2.5 text-gray-500">
                        <ExportIcon className="h-4 w-4 text-iconColor" />
                        Export
                        <ChevronDown className="h-4 w-4 text-iconColor" />
                    </IconButton>
                    <CustomDropdown
                        label=""
                        options={[
                            { label: 'Status: All', value: 'all' },
                            { label: 'Active', value: 'active' },
                            { label: 'Inactive', value: 'inactive' },
                        ]}
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                        placeholder="Status: All"
                    />
                    <Button
                        className="py-2.5"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        <PlusIcon className="h-4 w-4" /> Add Category
                    </Button>
                </div>
            </div>

            <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="border-b border-borderColor px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Categories Table
                    </h2>
                </div>

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <Table className="table-fixed">
                        {' '}
                        {/* CHANGE 1: Added table-fixed */}
                        <TableHeader>
                            <TableHead className="w-[80px] py-4 pl-6">
                                Order
                            </TableHead>{' '}
                            {/* CHANGE 2: Explicit Widths */}
                            <TableHead className="w-[25%] py-4">
                                Category Info
                            </TableHead>
                            <TableHead className="w-[15%] py-4">
                                Total Items
                            </TableHead>
                            <TableHead className="w-[20%] py-4">
                                Availability
                            </TableHead>
                            <TableHead className="w-[15%] py-4">
                                Status
                            </TableHead>
                            <TableHead className="w-[15%] py-4 pr-6 text-right">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            <SortableContext
                                items={items.map((i) => i.id)}
                                strategy={verticalListSortingStrategy}
                            >
                                {items.map((cat) => (
                                    <DraggableRow
                                        key={cat.id}
                                        cat={cat}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                ))}
                            </SortableContext>
                        </TableBody>
                    </Table>
                </DndContext>

                <div>
                    <Pagination />
                </div>
            </TableContainer>

            {/* Modals moved outside of the Table loop to the bottom of the page */}
            <AddCategoryModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onConfirm={(data) => console.log(data)}
            />
            <EditCategoryModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onConfirm={(data) => console.log(data)}
                initialData={editingCategory}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onRetry={handleConfirmDelete}
                title={
                    selectedItemName
                        ? `Delete ${selectedItemName}?`
                        : 'Delete Item'
                }
            />
        </div>
    );
};

export default Categories;
