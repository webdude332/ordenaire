// import { useState } from 'react';

// // Shared UI Components
// import ActionButton from '@/shared/sharedcomponents/ui/ActionButton';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
// import Pagination from '@/shared/sharedcomponents/ui/Pagination';
// import StatusBadge from '@/shared/sharedcomponents/ui/StatusBadge';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/shared/sharedcomponents/ui/Table';

// // TODO: Replace these with your actual icon imports
// import ChevronDown from '@shared/images/icons/chevron-down.svg?react';
// import DragIcon from '@shared/images/icons/dragIcon.svg?react';
// import ExportIcon from '@shared/images/icons/exportIcon.svg?react';
// import SearchIcon from '@shared/images/icons/inputSearch.svg?react';
// import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
// import PlusIcon from '@shared/images/icons/plus.svg?react';
// // import TrashIcon from '@shared/images/icons/trashIcon.svg?react';
// import TrashIcon from '@/shared/images/icons/delBold.svg?react';

// const Categories = () => {
//     const [selectedStatus, setSelectedStatus] = useState('');

//     const categoriesData = [
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
//     ];

//     return (
//         <div className="w-full">
//             {/* Filters Row */}
//             <div className="mb-6 flex items-center justify-between">
//                 {/* Search */}
//                 <div className="relative">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
//                         <SearchIcon className="h-4 w-4" />
//                     </div>
//                     <input
//                         type="text"
//                         placeholder="Search categories..."
//                         className="w-80 rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm text-gray-700 shadow-sm placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
//                     />
//                 </div>

//                 {/* Right Controls */}
//                 <div className="flex items-center gap-3">
//                     <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
//                         <ExportIcon className="h-4 w-4" />
//                         Export
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
//                     <Button>
//                         <PlusIcon className="h-4 w-4" />
//                         Add Category
//                     </Button>
//                 </div>
//             </div>

//             {/* Table */}
//             <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
//                 <div className="px-6 py-4">
//                     <h2 className="text-lg font-semibold text-gray-900">
//                         Categories Table
//                     </h2>
//                 </div>

//                 <Table>
//                     <TableHeader>
//                         <TableHead className="py-4 pl-6 text-xs font-semibold text-gray-500">
//                             Order
//                         </TableHead>
//                         <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                             Category Info
//                         </TableHead>
//                         <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                             Total Items
//                         </TableHead>
//                         <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                             Availability
//                         </TableHead>
//                         <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                             Status
//                         </TableHead>
//                         <TableHead className="py-4 pr-6 text-right text-xs font-semibold text-gray-500">
//                             Actions
//                         </TableHead>
//                     </TableHeader>
//                     <TableBody>
//                         {categoriesData.map((cat) => (
//                             <TableRow
//                                 key={cat.id}
//                                 className="border-b border-gray-200 transition-colors hover:bg-gray-50"
//                             >
//                                 {/* Drag Handle */}
//                                 <TableCell className="py-4 pl-6">
//                                     <DragIcon className="h-5 w-5 cursor-grab text-gray-400" />
//                                 </TableCell>

//                                 {/* Category Info */}
//                                 <TableCell className="py-4">
//                                     <div className="font-semibold text-gray-900">
//                                         {cat.name}
//                                     </div>
//                                 </TableCell>

//                                 {/* Total Items */}
//                                 <TableCell className="py-4">
//                                     <div className="text-gray-700">
//                                         {cat.totalItems} Items
//                                     </div>
//                                 </TableCell>

//                                 {/* Availability */}
//                                 <TableCell className="py-4">
//                                     <div className="text-gray-700">
//                                         {cat.availability}
//                                     </div>
//                                     {cat.availabilityDays && (
//                                         <div className="mt-0.5 text-xs text-gray-500">
//                                             {cat.availabilityDays}
//                                         </div>
//                                     )}
//                                 </TableCell>

//                                 {/* Status */}
//                                 <TableCell className="py-4">
//                                     <StatusBadge status={cat.status} />
//                                 </TableCell>

//                                 {/* Actions */}
//                                 <TableCell className="py-4 pr-6 text-right">
//                                     <div className="flex items-center justify-end gap-2">
//                                         <ActionButton>
//                                             <PencilIcon className="h-4 w-4 text-gray-400" />
//                                         </ActionButton>
//                                         <ActionButton>
//                                             <TrashIcon className="h-4 w-4 text-gray-400" />
//                                         </ActionButton>
//                                     </div>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>

//                 <div>
//                     <Pagination />
//                 </div>
//             </TableContainer>
//         </div>
//     );
// };

// export default Categories;

//adding up modals.

import { useState } from 'react';

// Shared UI Components
import ActionButton from '@/shared/sharedcomponents/ui/ActionButton';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import Pagination from '@/shared/sharedcomponents/ui/Pagination';
import StatusBadge from '@/shared/sharedcomponents/ui/StatusBadge';
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
import TrashIcon from '@/shared/images/icons/delBold.svg?react';
import DragIcon from '@/shared/images/icons/dragIcon.svg?react';
import ExportIcon from '@/shared/images/icons/exportIcon.svg?react';
import SearchIcon from '@/shared/images/icons/inputSearch.svg?react';
import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';

interface CategoryRow {
    id: string;
    name: string;
    totalItems: number;
    availability: string;
    availabilityDays: string | null;
    status: string;
}

const Categories = () => {
    const [selectedStatus, setSelectedStatus] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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

    const categoriesData: CategoryRow[] = [
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
    ];

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

    const handleAddConfirm = (data: CategoryFormData) => {
        console.log('New category:', data);
        // TODO: connect to your API
    };

    const handleEditConfirm = (data: CategoryFormData) => {
        console.log('Updated category:', data);
        // TODO: connect to your API
    };

    return (
        <div className="w-full">
            {/* Filters Row */}
            <div className="mb-6 flex items-center justify-between">
                {/* Search */}
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <SearchIcon className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search categories..."
                        className="w-80 rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 text-sm text-gray-700 shadow-sm placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                    />
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        <ExportIcon className="h-4 w-4" />
                        Export
                        <ChevronDown className="h-4 w-4" />
                    </button>
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
                    <Button onClick={() => setIsAddModalOpen(true)}>
                        <PlusIcon className="h-4 w-4" />
                        Add Category
                    </Button>
                </div>
            </div>

            {/* Table */}
            <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Categories Table
                    </h2>
                </div>

                <Table>
                    <TableHeader>
                        <TableHead className="py-4 pl-6 text-xs font-semibold text-gray-500">
                            Order
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Category Info
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Total Items
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Availability
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Status
                        </TableHead>
                        <TableHead className="py-4 pr-6 text-right text-xs font-semibold text-gray-500">
                            Actions
                        </TableHead>
                    </TableHeader>
                    <TableBody>
                        {categoriesData.map((cat) => (
                            <TableRow
                                key={cat.id}
                                className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                            >
                                {/* Drag Handle */}
                                <TableCell className="py-4 pl-6">
                                    <DragIcon className="h-5 w-5 cursor-grab text-gray-400" />
                                </TableCell>

                                {/* Category Info */}
                                <TableCell className="py-4">
                                    <div className="font-semibold text-gray-900">
                                        {cat.name}
                                    </div>
                                </TableCell>

                                {/* Total Items */}
                                <TableCell className="py-4">
                                    <div className="text-gray-700">
                                        {cat.totalItems} Items
                                    </div>
                                </TableCell>

                                {/* Availability */}
                                <TableCell className="py-4">
                                    <div className="text-gray-700">
                                        {cat.availability}
                                    </div>
                                    {cat.availabilityDays && (
                                        <div className="mt-0.5 text-xs text-gray-500">
                                            {cat.availabilityDays}
                                        </div>
                                    )}
                                </TableCell>

                                {/* Status */}
                                <TableCell className="py-4">
                                    <StatusBadge status={cat.status} />
                                </TableCell>

                                {/* Actions */}
                                <TableCell className="py-4 pr-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <ActionButton
                                            onClick={() => handleEditClick(cat)}
                                        >
                                            <PencilIcon className="h-4 w-4 text-gray-400" />
                                        </ActionButton>
                                        <ActionButton>
                                            <TrashIcon className="h-4 w-4 text-gray-400" />
                                        </ActionButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div>
                    <Pagination />
                </div>
            </TableContainer>

            {/* Modals */}
            <AddCategoryModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onConfirm={handleAddConfirm}
            />
            <EditCategoryModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onConfirm={handleEditConfirm}
                initialData={editingCategory}
            />
        </div>
    );
};

export default Categories;
