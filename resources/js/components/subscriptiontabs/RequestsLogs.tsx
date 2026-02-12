// const RequestsLogs = () => {
//     return <div>RequestsLogs</div>;
// };

// export default RequestsLogs;

import { useState } from 'react';

// --- ICONS ---
import ArrowDown from '@/images/icons/chevron-down.svg?react';
import Search from '@/images/icons/inputSearch.svg?react';
// Assuming arrow left/right icons for pagination

// --- UI COMPONENTS ---
import Badge from '../Badge'; // Using your perfected Badge component
import { Input } from '../ui/FormElements';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/Table';

// --- TYPES ---
type TabType = 'cancellations' | 'refunds' | 'discounts';

// --- HELPER: Status Badge Color Logic ---
const getStatusVariant = (status: string): any => {
    switch (status) {
        case 'Approved':
            return 'success'; // Green
        case 'Pending':
            return 'blue'; // Blue
        case 'Rejected':
            return 'error'; // Red
        default:
            return 'gray';
    }
};

const RequestsLogs = () => {
    // --- STATE ---
    const [activeTab, setActiveTab] = useState<TabType>('cancellations');

    // --- DATA: CANCELLATIONS ---
    const cancellationsData = [
        {
            reqId: 'REQ-20105',
            businessName: 'PizzaPalace',
            busId: 'BIZ-2050',
            planService: 'SMS Add-on',
            reason: '"Too expensive"',
            revImpact: '- 50.000 KWD',
            status: 'Pending',
            actionedBy: null, // Pending has buttons
        },
        {
            reqId: 'REQ-20105',
            businessName: 'BurgerBistro',
            busId: 'BIZ-2051',
            planService: 'SMS Add-on',
            reason: '"Too expensive"',
            revImpact: '- 75.000 AED',
            status: 'Pending',
            actionedBy: null,
        },
        {
            reqId: 'REQ-20105',
            businessName: 'SushiSpot',
            busId: 'BIZ-2052',
            planService: 'SMS Add-on',
            reason: '"Business closing"',
            revImpact: '- 100.000 KWD',
            status: 'Approved',
            actionedBy: 'Admin: Sarah',
        },
    ];

    // --- DATA: REFUNDS (LOG) ---
    const refundsData = [
        {
            reqId: 'REQ-20105',
            businessName: 'PizzaPalace',
            busId: 'BIZ-2050',
            invoiceId: 'INV-2025-002',
            amount: '50.000 KWD',
            type: 'Full',
            status: 'Approved',
            actionedBy: 'Ahamed',
        },
        {
            reqId: 'REQ-20105',
            businessName: 'BurgerBistro',
            busId: 'BIZ-2051',
            invoiceId: 'INV-2025-003',
            amount: '75.000 AED',
            type: 'Partial',
            status: 'Approved',
            actionedBy: 'N/A',
        },
        {
            reqId: 'REQ-20105',
            businessName: 'SushiSpot',
            busId: 'BIZ-2052',
            invoiceId: 'INV-2025-004',
            amount: '100.000 KWD',
            type: 'Full',
            status: 'Approved',
            actionedBy: 'N/A',
        },
        {
            reqId: 'REQ-20105',
            businessName: 'PastaPlace',
            busId: 'BIZ-2053',
            invoiceId: 'INV-2025-005',
            amount: '125.000 KWD',
            type: 'Full',
            status: 'Pending',
            actionedBy: 'N/A',
        },
        {
            reqId: 'REQ-20105',
            businessName: 'TacoTown',
            busId: 'BIZ-2054',
            invoiceId: 'INV-2025-006',
            amount: '150.000 AED',
            type: 'Partial',
            status: 'Rejected',
            actionedBy: 'Ahamed',
        },
    ];

    // --- DATA: DISCOUNTS (LOG) ---
    const discountsData = [
        {
            reqId: 'REQ-20105',
            businessName: 'PizzaPalace',
            busId: 'BIZ-2050',
            targetItem: 'Enterprise Plan',
            discountApplied: '50% OFF',
            impactOld: '100.000 KWD',
            impactNew: '50.000 KWD',
            status: 'Approved',
            actionedBy: 'Ahamed',
        },
        {
            reqId: 'REQ-20105',
            businessName: 'BurgerBistro',
            busId: 'BIZ-2051',
            targetItem: 'Kiosk Machine',
            discountApplied: '- 10.000 KWD',
            impactOld: '50.000 KWD',
            impactNew: '40.000 KWD',
            status: 'Approved',
            actionedBy: 'N/A',
        },
        {
            reqId: 'REQ-20105',
            businessName: 'SushiSpot',
            busId: 'BIZ-2052',
            targetItem: 'Setup Fee',
            discountApplied: '100% OFF',
            impactOld: '100.000 KWD',
            impactNew: '0.000 KWD',
            status: 'Approved',
            actionedBy: 'N/A',
        },
        {
            reqId: 'REQ-20105',
            businessName: 'PastaPlace',
            busId: 'BIZ-2053',
            targetItem: 'Overage: Staff',
            discountApplied: '- 2.000 KWD',
            impactOld: '4.000 KWD',
            impactNew: '2.000 KWD',
            status: 'Pending',
            actionedBy: 'N/A',
        },
        {
            reqId: 'REQ-20105',
            businessName: 'TacoTown',
            busId: 'BIZ-2054',
            targetItem: 'Pro Plan',
            discountApplied: '- 5.000 KWD',
            impactOld: '385.000 KWD',
            impactNew: '380.000 KWD',
            status: 'Rejected',
            actionedBy: 'Ahamed',
        },
    ];

    return (
        <div className="w-full space-y-6">
            {/* --- TOP HEADER & TABS --- */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Requests & Logs
                </h1>

                {/* Tabs Row */}
                <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex w-fit gap-1 rounded-lg bg-gray-50 p-1">
                        <button
                            onClick={() => setActiveTab('cancellations')}
                            className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === 'cancellations'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Cancellations{' '}
                            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                02
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('refunds')}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === 'refunds'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Refunds (Log)
                        </button>
                        <button
                            onClick={() => setActiveTab('discounts')}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === 'discounts'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Discounts (Log)
                        </button>
                    </div>
                </div>

                {/* Filter Row (Search + Dropdowns) */}
                <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="w-full md:w-96">
                        <Input
                            placeholder={
                                activeTab === 'cancellations'
                                    ? 'Search by Business Name, Request ID...'
                                    : 'Search by Business Name, Invoice ID...'
                            }
                            icon={Search}
                        />
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Status: All{' '}
                            <ArrowDown className="h-4 w-4 text-gray-500" />
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Date: This Month{' '}
                            <ArrowDown className="h-4 w-4 text-gray-500" />
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT AREA --- */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                {/* --- TAB 1: CANCELLATIONS TABLE --- */}
                {activeTab === 'cancellations' && (
                    <TableContainerOne className="border-none shadow-none">
                        <Table>
                            <TableHeader>
                                <TableHead className="py-4 pl-6 text-xs font-semibold">
                                    Request ID
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Business Name
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Plan / Service
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Reason
                                </TableHead>
                                <TableHead className="py-4 text-right text-xs font-semibold">
                                    Rev. Impact
                                </TableHead>
                                <TableHead className="py-4 pl-8 text-xs font-semibold">
                                    Status
                                </TableHead>
                                <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
                                    Actions
                                </TableHead>
                            </TableHeader>
                            <TableBody>
                                {cancellationsData.map((item, idx) => (
                                    <TableRow
                                        key={idx}
                                        className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                    >
                                        <TableCell className="py-4 pl-6 font-medium text-gray-900">
                                            {item.reqId}
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="font-semibold text-gray-900">
                                                {item.businessName}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.busId}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 text-gray-600">
                                            {item.planService}
                                        </TableCell>
                                        <TableCell className="py-4 text-gray-500 italic">
                                            {item.reason}
                                        </TableCell>
                                        <TableCell className="py-4 text-right font-medium text-gray-900">
                                            {item.revImpact}
                                        </TableCell>
                                        <TableCell className="py-4 pl-8">
                                            <Badge
                                                variant={getStatusVariant(
                                                    item.status,
                                                )}
                                                withDot={true}
                                                rounded="md"
                                            >
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="py-4 pr-6 text-right">
                                            {item.status === 'Pending' ? (
                                                <div className="flex justify-end gap-2">
                                                    <button className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                                                        Uninstall
                                                    </button>
                                                    <button className="rounded-md bg-[#7AB621] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#6ba31b]">
                                                        Contact
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className="text-sm font-medium text-gray-900">
                                                    {item.actionedBy}
                                                </span>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainerOne>
                )}

                {/* --- TAB 2: REFUNDS (LOG) TABLE --- */}
                {activeTab === 'refunds' && (
                    <TableContainerOne className="border-none shadow-none">
                        <Table>
                            <TableHeader>
                                <TableHead className="py-4 pl-6 text-xs font-semibold">
                                    Request ID
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Business Name
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Invoice ID
                                </TableHead>
                                <TableHead className="py-4 text-right text-xs font-semibold">
                                    Amount
                                </TableHead>
                                <TableHead className="py-4 pl-8 text-xs font-semibold">
                                    Type
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Status
                                </TableHead>
                                <TableHead className="py-4 pr-6 text-left text-xs font-semibold">
                                    Actioned By
                                </TableHead>
                            </TableHeader>
                            <TableBody>
                                {refundsData.map((item, idx) => (
                                    <TableRow
                                        key={idx}
                                        className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                    >
                                        <TableCell className="py-4 pl-6 font-medium text-gray-900">
                                            {item.reqId}
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="font-semibold text-gray-900">
                                                {item.businessName}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.busId}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 text-gray-600">
                                            {item.invoiceId}
                                        </TableCell>
                                        <TableCell className="py-4 text-right font-medium text-gray-900">
                                            <div className="text-sm text-gray-900">
                                                {item.amount.split(' ')[0]}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.amount.split(' ')[1]}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 pl-8">
                                            <div className="flex w-fit items-center gap-1.5 rounded-md border border-gray-200 px-2 py-0.5">
                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full ${item.type === 'Full' ? 'bg-gray-400' : 'bg-blue-400'}`}
                                                ></span>
                                                <span className="text-xs font-medium text-gray-700">
                                                    {item.type}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <Badge
                                                variant={getStatusVariant(
                                                    item.status,
                                                )}
                                                withDot={true}
                                                rounded="md"
                                            >
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="py-4 pr-6 text-left text-sm text-gray-500">
                                            {item.actionedBy}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainerOne>
                )}

                {/* --- TAB 3: DISCOUNTS (LOG) TABLE --- */}
                {activeTab === 'discounts' && (
                    <TableContainerOne className="border-none shadow-none">
                        <Table>
                            <TableHeader>
                                <TableHead className="py-4 pl-6 text-xs font-semibold">
                                    Request ID
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Business Name
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Target Item
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Discount Applied
                                </TableHead>
                                <TableHead className="py-4 text-right text-xs font-semibold">
                                    Impact (Old to New)
                                </TableHead>
                                <TableHead className="py-4 pl-8 text-xs font-semibold">
                                    Status
                                </TableHead>
                                <TableHead className="py-4 pr-6 text-left text-xs font-semibold">
                                    Actioned By
                                </TableHead>
                            </TableHeader>
                            <TableBody>
                                {discountsData.map((item, idx) => (
                                    <TableRow
                                        key={idx}
                                        className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                    >
                                        <TableCell className="py-4 pl-6 font-medium text-gray-900">
                                            {item.reqId}
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="font-semibold text-gray-900">
                                                {item.businessName}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.busId}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 text-gray-500">
                                            {item.targetItem}
                                        </TableCell>
                                        <TableCell className="py-4 font-medium text-gray-900">
                                            {item.discountApplied}
                                        </TableCell>
                                        <TableCell className="py-4 text-right">
                                            <div className="text-xs text-gray-400 line-through">
                                                {item.impactOld}
                                            </div>
                                            <div className="text-sm font-medium text-gray-900">
                                                {item.impactNew}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 pl-8">
                                            <Badge
                                                variant={getStatusVariant(
                                                    item.status,
                                                )}
                                                withDot={true}
                                                rounded="md"
                                            >
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="py-4 pr-6 text-left text-sm text-gray-500">
                                            {item.actionedBy}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainerOne>
                )}
            </div>
        </div>
    );
};

export default RequestsLogs;
