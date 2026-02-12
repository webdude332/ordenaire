import SearchIcon from '@/images/icons/inputSearch.svg?react';
import Menu from '@/images/icons/menuVertical.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import { useState } from 'react';
import Badge, { BadgeVariant } from '../Badge';
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
interface Invoice {
    id: string;
    invoiceNumber: string;
    issuedDate: string;
    billedTo: {
        name: string;
        busId: string;
        location: string;
    };
    amount: {
        primary: string;
        secondary: string;
    };
    status: {
        label: 'Active' | 'Overdue' | 'Pending' | 'Refunded';
        subText: string;
    };
    actionLabel: string;
}

// --- Helper to map Status Label to Badge Variant (COLORS) ---
const getStatusBadgeVariant = (status: string): BadgeVariant => {
    switch (status) {
        case 'Active':
            return 'success'; // Matches your Subscribers code (Green)
        case 'Overdue':
            return 'warning'; // Matches your Subscribers code (Orange)
        case 'Pending':
            return 'blue'; // Matches your Subscribers code (Blue)
        case 'Refunded':
            return 'error'; // New: Assuming you map 'error' to Red in Badge.tsx
        default:
            return 'gray';
    }
};

const Invoices = () => {
    // State for dropdowns
    const [dateRange, setDateRange] = useState('last30');
    const [type, setType] = useState('wallet');
    const [status, setStatus] = useState('all');

    // --- Data from your screenshot ---
    const tableData: Invoice[] = [
        {
            id: '1',
            invoiceNumber: 'INV-2026-092',
            issuedDate: 'Issued: 12 Oct 2026',
            billedTo: {
                name: 'BurgerTown',
                busId: 'BIZ-2055',
                location: 'UAE',
            },
            amount: { primary: '500.000 KWD', secondary: '4,500.000 AED' },
            status: { label: 'Active', subText: 'Paid' },
            actionLabel: 'Download',
        },
        {
            id: '2',
            invoiceNumber: 'INV-2026-093',
            issuedDate: 'Issued: 13 Oct 2026',
            billedTo: {
                name: 'KuwaitDeli',
                busId: 'BIZ-3050',
                location: 'Kuwait',
            },
            amount: { primary: '950.000 KWD', secondary: 'Base' },
            status: { label: 'Overdue', subText: 'Failed 2 days ago' },
            actionLabel: 'Retry',
        },
        {
            id: '3',
            invoiceNumber: 'INV-2026-094',
            issuedDate: 'Issued: 14 Oct 2026',
            billedTo: {
                name: 'RiyadhGrill',
                busId: 'BIZ-4101',
                location: 'KSA',
            },
            amount: { primary: '95.000 KWD', secondary: '900.000 AED' },
            status: { label: 'Overdue', subText: 'Failed 2 days ago' },
            actionLabel: 'Retry',
        },
        {
            id: '4',
            invoiceNumber: 'INV-2026-095',
            issuedDate: 'Issued: 15 Oct 2026',
            billedTo: {
                name: 'QatarBites',
                busId: 'BIZ-5502',
                location: 'Qatar',
            },
            amount: { primary: '105.000 KWD', secondary: '1000.000 QAR' },
            status: { label: 'Pending', subText: 'Trial Ending' },
            actionLabel: 'Contact',
        },
        {
            id: '5',
            invoiceNumber: 'INV-2026-096',
            issuedDate: 'Issued: 16 Oct 2026',
            billedTo: {
                name: 'JeddahEats',
                busId: 'BIZ-6203',
                location: 'KSA',
            },
            amount: { primary: '95.000 KWD', secondary: '900.000 SAR' },
            status: { label: 'Refunded', subText: 'Cancelled' },
            actionLabel: 'View Credit Note',
        },
        {
            id: '6',
            invoiceNumber: 'INV-2026-097',
            issuedDate: 'Issued: 17 Oct 2026',
            billedTo: {
                name: 'AbuDhabiCuisine',
                busId: 'BIZ-7404',
                location: 'Kuwait',
            },
            amount: { primary: '1050.000 KWD', secondary: 'Base' },
            status: { label: 'Active', subText: 'Paid' },
            actionLabel: 'Download',
        },
        {
            id: '7',
            invoiceNumber: 'INV-2026-098',
            issuedDate: 'Issued: 18 Oct 2026',
            billedTo: {
                name: 'AlKuwaitTreats',
                busId: 'BIZ-8505',
                location: 'Kuwait',
            },
            amount: { primary: '1050.000 KWD', secondary: 'Base' },
            status: { label: 'Pending', subText: 'Trial Ending' },
            actionLabel: 'Contact',
        },
        {
            id: '8',
            invoiceNumber: 'INV-2026-099',
            issuedDate: 'Issued: 19 Oct 2026',
            billedTo: {
                name: 'DohaDelights',
                busId: 'BIZ-9606',
                location: 'Qatar',
            },
            amount: { primary: '105.000 KWD', secondary: '1000.000 QAR' },
            status: { label: 'Active', subText: 'Paid' },
            actionLabel: 'Download',
        },
    ];

    const dateOptions = [{ label: 'Last 30 Days', value: 'last30' }];
    const typeOptions = [{ label: 'Wallet/Card', value: 'wallet' }];
    const statusOptions = [{ label: 'All', value: 'all' }];

    return (
        <div>
            {/** Filter & Search Controls */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="w-full md:w-1/3">
                    <Input
                        className="placeholder:text-md"
                        placeholder="Search by Invoice ID, Business Name..."
                        icon={SearchIcon}
                    />
                </div>
                <div className="grid w-full grid-cols-1 gap-3 md:w-auto md:grid-cols-3">
                    <div>
                        <CustomDropdown
                            label="Date Range"
                            options={dateOptions}
                            value={dateRange}
                            onChange={setDateRange}
                            placeholder="Date: Last 30 Days"
                            labelClassName="hidden"
                        />
                    </div>
                    <div>
                        <CustomDropdown
                            label="Type"
                            options={typeOptions}
                            value={type}
                            onChange={setType}
                            placeholder="Type: Wallet/Card"
                            labelClassName="hidden"
                        />
                    </div>
                    <div>
                        <CustomDropdown
                            label="Status"
                            options={statusOptions}
                            value={status}
                            onChange={setStatus}
                            placeholder="Status: All"
                            labelClassName="hidden"
                        />
                    </div>
                </div>
            </div>
            {/** Main Table Content */}
            <div className="mt-8 rounded-xl border border-borderColor pt-6">
                <div className="flex items-center px-6 pb-4">
                    <h2 className="text-lg font-medium text-gray-900">
                        Invoices Master List
                    </h2>
                </div>

                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Invoice Details
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Billed To
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Amount <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>

                        <TableBody>
                            {tableData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <div className="font-medium text-gray-900">
                                            {item.invoiceNumber}
                                        </div>
                                        <div className="text-muted-foreground text-sm text-gray-500">
                                            {item.issuedDate}
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium text-gray-900">
                                            {item.billedTo.name}
                                        </div>
                                        <div className="text-muted-foreground text-sm text-gray-500">
                                            {item.billedTo.busId} ·{' '}
                                            {item.billedTo.location}
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="font-medium text-gray-900">
                                            {item.amount.primary}
                                        </div>
                                        <div className="text-muted-foreground text-sm text-gray-500">
                                            {item.amount.secondary}
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <div className="mb-1">
                                            {/* Matches Subscriber pattern: withDot={true} */}
                                            <Badge
                                                variant={getStatusBadgeVariant(
                                                    item.status.label,
                                                )}
                                                withDot={true}
                                            >
                                                {item.status.label}
                                            </Badge>
                                        </div>
                                        <div
                                            className={`text-sm ${
                                                item.status.label ===
                                                    'Overdue' ||
                                                item.status.label === 'Refunded'
                                                    ? 'text-gray-500'
                                                    : 'text-gray-500'
                                            }`}
                                        >
                                            {item.status.subText}
                                        </div>
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <ActionButton className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                                {item.actionLabel}
                                            </ActionButton>
                                            <ActionButton className="rounded-lg border border-gray-300 p-2 hover:bg-gray-50">
                                                <Menu className="h-4 w-4 text-gray-500" />
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

export default Invoices;
