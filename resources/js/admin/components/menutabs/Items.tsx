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

import adDish from '@/shared/images/icons/adDish.svg';
import ChevronDown from '@/shared/images/icons/chevron-down.svg?react';
import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
import ExportIcon from '@/shared/images/icons/exportIcon.svg?react';
import SearchIcon from '@/shared/images/icons/inputSearch.svg?react';
import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';
import { Input } from '@/shared/sharedcomponents/ui/FormElements';
import { Link } from '@inertiajs/react';

const Items = () => {
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const itemsData = [
        {
            id: '1',
            name: 'Soda (Can)',
            category: 'Beverages',
            image: adDish,
            price: '0.500',
            currency: 'KWD',
            cost: '0.110 KWD',
            margin: '78%',
            inventoryStatus: '142 Cans',
            status: 'Active',
        },
        {
            id: '2',
            name: 'Spicy Noodles',
            category: 'Main course',
            image: adDish,
            price: '3.000',
            currency: 'KWD',
            cost: '1.500 KWD',
            margin: '66%',
            inventoryStatus: '42 Servings',
            status: 'Draft',
        },
        {
            id: '3',
            name: 'Kids Meal',
            category: 'Specials',
            image: adDish,
            price: '6.000',
            currency: 'KWD',
            cost: '1.350 KWD',
            margin: '10%',
            inventoryStatus: '55 in Stock',
            status: 'Active',
        },
        {
            id: '4',
            name: 'VIP Platter',
            category: 'Events',
            image: adDish,
            price: '15.000',
            currency: 'KWD',
            cost: '10.000 KWD',
            margin: '50%',
            inventoryStatus: '--',
            status: 'Inactive',
        },
    ];

    const statusVariantMap: Record<string, BadgeVariant> = {
        Active: 'success',
        Draft: 'purple', // You can change this to 'blue' if you prefer
        Inactive: 'gray',
    };

    return (
        <div className="w-full">
            {/* Filters Row */}
            <div className="mb-6 flex items-center justify-between">
                {/* Search */}
                <div className="relative">
                    <Input placeholder="Search..." icon={SearchIcon} />
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-3">
                    <CustomDropdown
                        label=""
                        options={[
                            {
                                label: (
                                    <span className="font-medium text-gray-700">
                                        Status: All
                                    </span>
                                ),
                                value: 'all',
                            },
                            { label: 'Active', value: 'active' },
                            { label: 'Inactive', value: 'inactive' },
                            { label: 'Draft', value: 'draft' },
                        ]}
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                        placeholder=""
                    />
                    <CustomDropdown
                        label=""
                        options={[
                            {
                                label: (
                                    <span className="font-medium text-gray-700">
                                        Category: All
                                    </span>
                                ),
                                value: 'all',
                            },
                            { label: 'Beverages', value: 'beverages' },
                            { label: 'Main Course', value: 'main-course' },
                            { label: 'Specials', value: 'specials' },
                            { label: 'Events', value: 'events' },
                        ]}
                        value={selectedCategory}
                        onChange={setSelectedCategory}
                        placeholder=""
                    />
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        <ExportIcon className="h-4 w-4 text-iconColor" />
                        Export
                        <ChevronDown className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Table */}
            <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
                {/* Table Title + Add Button */}
                <div className="flex items-center justify-between px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Main Items Table
                    </h2>
                    <Link href="/admin/menu/additems">
                        <Button>
                            <PlusIcon className="h-4 w-4" />
                            Add New Item
                        </Button>
                    </Link>
                </div>

                <Table>
                    <TableHeader>
                        <TableHead className="py-4 pl-6 text-xs font-semibold text-gray-500">
                            Item Name
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Price
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Cost / Margin
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Inventory Status
                        </TableHead>
                        <TableHead className="py-4 text-xs font-semibold text-gray-500">
                            Status
                        </TableHead>
                        <TableHead className="py-4 pr-6 text-right text-xs font-semibold text-gray-500">
                            Actions
                        </TableHead>
                    </TableHeader>
                    <TableBody>
                        {itemsData.map((item) => (
                            <TableRow
                                key={item.id}
                                className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                            >
                                {/* Item Name + Image */}
                                <TableCell className="py-4 pl-6">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                {item.name}
                                            </div>
                                            <div className="mt-0.5 text-xs text-gray-500">
                                                {item.category}
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>

                                {/* Price */}
                                <TableCell className="py-4">
                                    <div className="font-medium text-gray-900">
                                        {item.price}
                                    </div>
                                    <div className="mt-0.5 text-xs text-gray-500">
                                        {item.currency}
                                    </div>
                                </TableCell>

                                {/* Cost / Margin */}
                                <TableCell className="py-4">
                                    <div className="font-medium text-gray-900">
                                        {item.cost}
                                    </div>
                                    <div className="mt-0.5 text-xs text-gray-500">
                                        {item.margin}
                                    </div>
                                </TableCell>

                                {/* Inventory Status */}
                                <TableCell className="py-4">
                                    <div className="text-gray-700">
                                        {item.inventoryStatus}
                                    </div>
                                </TableCell>

                                {/* Status */}
                                <TableCell className="py-4">
                                    {/* <Badge status={item.status} /> */}
                                    <Badge
                                        variant={
                                            statusVariantMap[item.status] ||
                                            'gray'
                                        }
                                        withDot={true}
                                        rounded="md"
                                    >
                                        {item.status}
                                    </Badge>
                                </TableCell>

                                {/* Actions */}
                                <TableCell className="py-4 pr-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link href="/admin/menu/edititem">
                                            <ActionButton>
                                                <PencilIcon className="h-5 w-5 text-iconColor" />
                                            </ActionButton>
                                        </Link>
                                        <ActionButton>
                                            <TrashIcon className="h-5 w-5 text-iconColor" />
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
        </div>
    );
};

export default Items;
