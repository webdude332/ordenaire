import SearchIcon from '@/images/icons/inputSearch.svg?react';
import Menu from '@/images/icons/menuVertical.svg?react';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import { useState } from 'react';
import Badge, { BadgeVariant } from '../Badge'; // Ensure this path matches where you saved Badge.tsx
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../OuterTable';
import Pagination from '../Pagination';
import ActionButton from '../ui/ActionButton';
import CustomDropdown from '../ui/CustomDropdown';
import { Input } from '../ui/FormElements';

// --- Types & Interfaces ---
interface Subscriber {
    id: number;
    business: {
        name: string;
        id: string;
        location: string;
    };
    plan: {
        name: string;
        interval: 'Yearly' | 'Monthly';
        addOns: number;
    };
    revenue: {
        amount: string;
        subText: string;
    };
    billing: {
        status: string;
        nextDateLabel: string;
    };
}

// --- Helper Functions to determine colors ---
const getPlanBadgeColor = (planName: string): BadgeVariant => {
    if (planName.includes('Enterprise')) return 'purple';
    if (planName.includes('Pro')) return 'blue';
    if (planName.includes('Standard')) return 'gray';
    return 'gray';
};

const getStatusBadgeColor = (status: string): BadgeVariant => {
    switch (status) {
        case 'Active':
            return 'success';
        case 'Past Due':
            return 'warning';
        case 'Trial':
            return 'blue';
        case 'Inactive':
            return 'gray';
        default:
            return 'gray';
    }
};

const Subscribers = () => {
    const [dropOptions, setDropOptions] = useState('');

    // --- Data from your screenshot ---
    const tableData: Subscriber[] = [
        {
            id: 1,
            business: { name: 'BurgerTown', id: 'BIZ-2055', location: 'UAE' },
            plan: { name: 'Enterprise', interval: 'Yearly', addOns: 3 },
            revenue: { amount: '375.000 KWD', subText: '4,500 AED' },
            billing: { status: 'Active', nextDateLabel: 'Next: 12 Oct 2026' },
        },
        {
            id: 2,
            business: {
                name: 'KuwaitDeli',
                id: 'BIZ-3050',
                location: 'Kuwait',
            },
            plan: { name: 'Pro Plan', interval: 'Monthly', addOns: 0 },
            revenue: { amount: '250.000 KWD', subText: 'Base' },
            billing: { status: 'Past Due', nextDateLabel: 'Failed 2 days ago' },
        },
        {
            id: 3,
            business: { name: 'RiyadhGrill', id: 'BIZ-4101', location: 'KSA' },
            plan: { name: 'Standard', interval: 'Yearly', addOns: 3 },
            revenue: { amount: '150.000 KWD', subText: '1,800 SAR' },
            billing: { status: 'Active', nextDateLabel: 'Next: 15 Nov 2026' },
        },
        {
            id: 4,
            business: { name: 'QatarBites', id: 'BIZ-5502', location: 'Qatar' },
            plan: { name: 'Pro Plan', interval: 'Yearly', addOns: 0 },
            revenue: { amount: '500.000 KWD', subText: '6,000 QAR' },
            billing: { status: 'Trial', nextDateLabel: 'Ends in 3 days' },
        },
        {
            id: 5,
            business: { name: 'JeddahEats', id: 'BIZ-6203', location: 'KSA' },
            plan: { name: 'Pro Plan', interval: 'Monthly', addOns: 0 },
            revenue: { amount: '600.000 KWD', subText: '7,200 SAR' },
            billing: { status: 'Inactive', nextDateLabel: 'Churned: 12 Aug' },
        },
        {
            id: 6,
            business: {
                name: 'AbuDhabiCuisine',
                id: 'BIZ-7404',
                location: 'Kuwait',
            },
            plan: { name: 'Pro Plan', interval: 'Yearly', addOns: 0 },
            revenue: { amount: '800.000 KWD', subText: 'Base' },
            billing: { status: 'Inactive', nextDateLabel: 'Churned: 12 Aug' },
        },
        {
            id: 7,
            business: {
                name: 'AlKuwaitTreats',
                id: 'BIZ-8505',
                location: 'Kuwait',
            },
            plan: { name: 'Pro Plan', interval: 'Monthly', addOns: 0 },
            revenue: { amount: '200.000 KWD', subText: 'Base' },
            billing: { status: 'Trial', nextDateLabel: 'Ends in 3 days' },
        },
        {
            id: 8,
            business: {
                name: 'DohaDelights',
                id: 'BIZ-9606',
                location: 'Qatar',
            },
            plan: { name: 'Standard', interval: 'Monthly', addOns: 0 },
            revenue: { amount: '450.000 KWD', subText: '5,400 QAR' },
            billing: { status: 'Active', nextDateLabel: 'Next: 5 Jan 2027' },
        },
    ];

    const templateOptions = [
        { label: 'Active', value: 'active' },
        { label: 'Trial', value: 'trial' },
        { label: 'Past Due', value: 'pastdue' },
        { label: 'Inactive', value: 'inactive' },
    ];
    const templateOptionsOne = [
        { label: 'Enterprise', value: 'enterprise' },
        { label: 'Pro', value: 'pro' },
        { label: 'Standard', value: 'standard' },
    ];

    return (
        <div>
            {/**Page header */}
            <div className="flex items-center justify-between">
                <div>
                    <Input
                        className="placeholder:text-md"
                        placeholder="Search by business name, ID..."
                        icon={SearchIcon}
                    />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <CustomDropdown
                            label="Primary Role"
                            options={templateOptions}
                            value={dropOptions}
                            onChange={setDropOptions}
                            placeholder="Status: All"
                            labelClassName="mb-2 text-sm font-medium"
                        />
                    </div>
                    <div>
                        <CustomDropdown
                            label="Primary Role"
                            options={templateOptionsOne}
                            value={dropOptions}
                            onChange={setDropOptions}
                            placeholder="Plan: All"
                            labelClassName="mb-2 text-sm font-medium"
                        />
                    </div>
                </div>
            </div>
            {/**Main Table Content */}
            <div className="mt-8 rounded-xl border border-borderColor pt-6">
                <div className="flex items-center px-6 pb-4">
                    <h2 className="text-lg font-medium">
                        Subscribers Master List
                    </h2>
                </div>
                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold">
                                Business Detail
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className="flex items-center gap-1">
                                    Current Plan <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className="flex items-center gap-1">
                                    Revenue (MRR) <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold">
                                <div className="flex items-center gap-1">
                                    Billing Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="text-right font-semibold">
                                Actions
                            </TableHead>
                        </TableHeader>

                        {/**Table Body */}
                        <TableBody>
                            {tableData.map((item) => (
                                <TableRow key={item.id}>
                                    {/* Column 1: Business Details */}
                                    <TableCell>
                                        <div className="font-medium text-gray-700">
                                            {item.business.name}
                                        </div>
                                        <div className="text-muted-foreground text-sm">
                                            {item.business.id} ·{' '}
                                            {item.business.location}
                                        </div>
                                    </TableCell>

                                    {/* Column 2: Current Plan (No Dot) */}
                                    <TableCell>
                                        <div className="mb-1 font-medium text-gray-700">
                                            <Badge
                                                variant={getPlanBadgeColor(
                                                    item.plan.name,
                                                )}
                                                withDot={false} // Disable Dot for Plans
                                            >
                                                {item.plan.name}
                                                {/* Only show Add-ons text if count > 0 */}
                                                {item.plan.addOns > 0 &&
                                                    ` • ${item.plan.addOns} Add-ons`}
                                            </Badge>
                                        </div>
                                        <div className="text-muted-foreground text-sm">
                                            {item.plan.interval}
                                        </div>
                                    </TableCell>

                                    {/* Column 3: Revenue */}
                                    <TableCell>
                                        <div className="font-medium text-gray-700">
                                            {item.revenue.amount}
                                        </div>
                                        <div className="text-muted-foreground text-sm">
                                            {item.revenue.subText}
                                        </div>
                                    </TableCell>

                                    {/* Column 4: Billing Status (With Dot) */}
                                    <TableCell>
                                        <div className="mb-1 font-medium text-gray-700">
                                            <Badge
                                                variant={getStatusBadgeColor(
                                                    item.billing.status,
                                                )}
                                                withDot={true} // Enable Dot for Status
                                            >
                                                {item.billing.status}
                                            </Badge>
                                        </div>
                                        <div className="text-muted-foreground text-sm">
                                            {item.billing.nextDateLabel}
                                        </div>
                                    </TableCell>

                                    {/* Column 5: Actions */}
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <ActionButton className="font-bold">
                                                <PencilIcon />
                                                Manage
                                            </ActionButton>
                                            <ActionButton>
                                                <Menu />
                                            </ActionButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
                <Pagination />
            </div>
        </div>
    );
};

export default Subscribers;
