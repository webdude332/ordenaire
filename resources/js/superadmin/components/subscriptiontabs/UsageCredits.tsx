import { useState } from 'react';

// --- ICONS ---
import Search from '@shared/images/icons/inputSearch.svg?react';
import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@shared/images/icons/plus.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
import XIcon from '@shared/images/icons/x.svg?react';

// --- MODALS ---
import AddCurrencyModal from '../Modals/AddCurrencyModal';
import AddManualChargeModal from '../Modals/AddManualChargeModal';
import AddNewRateModal from '../Modals/AddNewRateModal';
import BillingActionsModal from '../Modals/BillingActionsModal';
import EditRateModal from '../Modals/EditRateModal';
import WarningToast from '../toasts/WarningToast';

// --- UI COMPONENTS ---
import Badge from '../Badge';
import Pagination from '../Pagination';
import SuccessToast from '../toasts/SuccessToast';
import ActionButton from '../ui/ActionButton';
import Button from '../ui/Button';
import CustomDropdown from '../ui/CustomDropdown';
import { Input } from '../ui/FormElements';
import IconButton from '../ui/IconButton';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/Table';

interface ChargeQueueItem {
    id: number;
    businessName: string;
    busId: string;
    chargeRule: string;
    justification: { main: string; sub: string };
    status: string;
    overageRate: string;
    actions: string[];
    currentPlan?: string;
    date?: string;
    originalAmount?: number;
}
interface UsageRateItem {
    activity: string;
    plan: string;
    limit: string;
    overage: string;
    freq: string;
    status: string;
}

const FlagIcon = ({ code }: { code: string }) => {
    const flags: Record<string, string> = {
        UAE: '🇦🇪',
        KSA: '🇸🇦',
        QAR: '🇶🇦',
        USA: '🇺🇸',
    };
    return (
        <span className="mr-2 text-lg leading-none">{flags[code] || '🏳️'}</span>
    );
};

const getChargeStatusVariant = (status: string): any => {
    switch (status) {
        case 'Active':
            return 'error';
        case 'Resolved':
            return 'success';
        case 'One-Time':
            return 'blue';
        case 'Waived':
            return 'gray';
        case 'Invoiced':
            return 'purple';
        default:
            return 'gray';
    }
};

const UsageCredits = () => {
    const [activeTab, setActiveTab] = useState<
        'chargeQueue' | 'configurations'
    >('chargeQueue');
    const [status, setStatus] = useState('');

    const [isAddManualChargeOpen, setIsAddManualChargeOpen] = useState(false);
    const [isBillingActionsOpen, setIsBillingActionsOpen] = useState(false);
    const [selectedChargeItem, setSelectedChargeItem] =
        useState<ChargeQueueItem | null>(null);

    const [isAddRateOpen, setIsAddRateOpen] = useState(false);
    const [isEditRateOpen, setIsEditRateOpen] = useState(false);
    const [selectedRateItem, setSelectedRateItem] =
        useState<UsageRateItem | null>(null);

    const [isAddCurrencyOpen, setIsAddCurrencyOpen] = useState(false);
    const [isWarningToastOpen, setIsWarningToastOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // Stores the specific row data so we can access the businessName
    const [itemToCancel, setItemToCancel] = useState(null);

    const handleCancelClick = (item) => {
        setItemToCancel(item); // Save the row data
        setIsWarningToastOpen(true); // Show the toast
    };

    const handleConfirmCancel = () => {
        console.log('Cancelling charge for:', itemToCancel?.businessName);

        setIsWarningToastOpen(false);
        setItemToCancel(null);
    };

    const chargeQueueData: ChargeQueueItem[] = [
        {
            id: 1,
            businessName: 'BurgerTown',
            busId: 'BIZ-4101',
            chargeRule: 'Active Staff',
            justification: {
                main: '7 Users (Limit: 5)',
                sub: 'Detected: 05 Jan',
            },
            status: 'Active',
            overageRate: '4.000 KWD',
            actions: ['Bill', 'Dismiss'],
            currentPlan: 'Pro (Monthly)',
            date: '05 Jan 2026',
            originalAmount: 4.0,
        },
        {
            id: 2,
            businessName: 'Pasta Palace',
            busId: 'BIZ-4102',
            chargeRule: 'Menu Items',
            justification: { main: '+3 Extra Items', sub: 'Detected: 01 Jan' },
            status: 'Resolved',
            overageRate: '2.000 KWD',
            actions: ['Bill', 'Dismiss'],
            currentPlan: 'Standard (Monthly)',
            date: '01 Jan 2026',
            originalAmount: 2.0,
        },
        {
            id: 3,
            businessName: 'Sushi Central',
            busId: 'BIZ-4103',
            chargeRule: 'Kiosk Machine',
            justification: { main: '1 Device', sub: 'Purchased: 02 Jan' },
            status: 'One-Time',
            overageRate: '50.000 KWD',
            actions: ['Bill', 'Dismiss'],
            currentPlan: 'Enterprise (Monthly)',
            date: '02 Jan 2026',
            originalAmount: 50.0,
        },
        {
            id: 4,
            businessName: 'Taco Haven',
            busId: 'BIZ-4104',
            chargeRule: 'Storage',
            justification: {
                main: '12 GB (Limit: 10)',
                sub: 'Detected: 01 Jan',
            },
            status: 'Waived',
            overageRate: '0.000 KWD',
            actions: [],
            originalAmount: 0,
        },
        {
            id: 5,
            businessName: 'Pizza Paradise',
            busId: 'BIZ-4105',
            chargeRule: 'Menu Items',
            justification: { main: '+3 Extra Items', sub: 'Detected: 01 Jan' },
            status: 'Invoiced',
            overageRate: '2.000 KWD',
            actions: [],
            originalAmount: 2.0,
        },
    ];

    const usageRatesData: UsageRateItem[] = [
        {
            activity: 'Active Staff',
            plan: 'Pro',
            limit: '5 Users',
            overage: '1.000 KWD',
            freq: 'Per 5 User / Monthly',
            status: 'Enabled',
        },
        {
            activity: 'Menu Items',
            plan: 'Enterprise',
            limit: '150 Items',
            overage: '2.000 KWD',
            freq: 'Per 50 Items / Monthly',
            status: 'Enabled',
        },
        {
            activity: 'Menu Items',
            plan: 'Pro',
            limit: '100 Items',
            overage: '2.000 KWD',
            freq: 'Per 50 Items / Monthly',
            status: 'Enabled',
        },
        {
            activity: 'POS Licenses',
            plan: 'Standard',
            limit: '3 Devices',
            overage: '5.000 KWD',
            freq: 'Per Device / Monthly',
            status: 'Enabled',
        },
        {
            activity: 'Kiosk Machines',
            plan: 'All Plans',
            limit: '0',
            overage: '50.000 KWD',
            freq: 'Per Device / Monthly',
            status: 'Enabled',
        },
        {
            activity: 'GenAI Usage',
            plan: 'Pro',
            limit: '1,000 Req',
            overage: '0.100 KWD',
            freq: 'Per 100 Req / Monthly',
            status: 'Disabled',
        },
    ];

    const currencyData = [
        {
            region: 'UAE Dirham (AED)',
            code: 'UAE',
            rate: '12.000',
            preview: '12.00 AED',
        },
        {
            region: 'Saudi Riyal (SAR)',
            code: 'KSA',
            rate: '12.250',
            preview: '12.25 SAR',
        },
        {
            region: 'Qatari Riyal (QAR)',
            code: 'QAR',
            rate: '12.100',
            preview: '12.10 QAR',
        },
        {
            region: 'US Dollar (USD)',
            code: 'USA',
            rate: '3.250',
            preview: '3.25 USD',
        },
    ];

    const handleBillClick = (item: ChargeQueueItem) => {
        setSelectedChargeItem(item);
        setIsBillingActionsOpen(true);
    };
    const handleEditRateClick = (item: UsageRateItem) => {
        setSelectedRateItem(item);
        setIsEditRateOpen(true);
    };

    return (
        <div className="w-full space-y-6">
            <div>
                <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex w-fit gap-1 rounded-lg bg-gray-50 p-1">
                        <button
                            onClick={() => setActiveTab('chargeQueue')}
                            className={`flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${activeTab === 'chargeQueue' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            Charge Queue
                            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                100
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('configurations')}
                            className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${activeTab === 'configurations' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            Configurations
                        </button>
                    </div>
                    {activeTab === 'chargeQueue' && (
                        <div className="w-full md:w-80">
                            <Input
                                placeholder="Search by Business Name, ID..."
                                icon={Search}
                            />
                        </div>
                    )}
                </div>
            </div>

            {activeTab === 'chargeQueue' && (
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                        <h2 className="text-base font-semibold text-gray-900">
                            Usage Metrics Table
                        </h2>
                        <div className="flex gap-2">
                            <CustomDropdown
                                label=""
                                options={[
                                    { label: 'Active', value: 'active' },
                                    { label: 'Resolved', value: 'resolved' },
                                    { label: 'One-Time', value: 'one-time' },
                                    { label: 'Waived', value: 'waived' },
                                    { label: 'Invoiced', value: 'invoiced' },
                                ]}
                                value={status}
                                onChange={setStatus}
                                placeholder="Status: All"
                            />
                            <Button
                                className="bg-[#7AB621] hover:bg-[#6ba31b]"
                                onClick={() => setIsAddManualChargeOpen(true)}
                            >
                                <PlusIcon className="mr-2 h-4 w-4" /> Add Manual
                                Charge
                            </Button>
                        </div>
                    </div>
                    <TableContainerOne className="border-none shadow-none">
                        <Table>
                            <TableHeader>
                                <TableHead className="py-4 pl-6 text-xs font-semibold">
                                    <div className="flex items-center gap-1">
                                        Business Name{' '}
                                        <SelectorIcon className="h-3 w-3" />
                                    </div>
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Charge Rule / SKU
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    Charge Justification
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold">
                                    <div className="flex items-center gap-1">
                                        Status{' '}
                                        <SelectorIcon className="h-3 w-3" />
                                    </div>
                                </TableHead>
                                <TableHead className="py-4 text-right text-xs font-semibold">
                                    Overage Rate
                                </TableHead>
                                <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
                                    Actions
                                </TableHead>
                            </TableHeader>
                            <TableBody>
                                {chargeQueueData.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                    >
                                        <TableCell className="py-4 pl-6">
                                            <div className="font-medium text-gray-900">
                                                {item.businessName}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.busId}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 text-gray-600">
                                            {item.chargeRule}
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="font-medium text-gray-900">
                                                {item.justification.main}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.justification.sub}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <Badge
                                                variant={getChargeStatusVariant(
                                                    item.status,
                                                )}
                                                withDot={true}
                                            >
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="py-4 text-right">
                                            <div className="font-medium text-gray-900">
                                                {item.overageRate.split(' ')[0]}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {item.overageRate.split(' ')[1]}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 pr-6 text-right">
                                            {item.actions.length > 0 && (
                                                <div className="flex justify-end gap-2">
                                                    <ActionButton
                                                        onClick={() =>
                                                            handleBillClick(
                                                                item,
                                                            )
                                                        }
                                                    >
                                                        Bill
                                                    </ActionButton>
                                                    {/* <ActionButton>
                                                        <XIcon className="h-3 w-3" />
                                                    </ActionButton> */}
                                                    <ActionButton
                                                        onClick={() =>
                                                            handleCancelClick(
                                                                item,
                                                            )
                                                        }
                                                    >
                                                        <XIcon className="h-3 w-3" />
                                                    </ActionButton>
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainerOne>
                    <Pagination />
                </div>
            )}

            {activeTab === 'configurations' && (
                <div className="space-y-6">
                    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <h2 className="text-base font-semibold text-gray-900">
                                Usage & Add-on Rates
                            </h2>
                            <Button
                                className="bg-[#7AB621] hover:bg-[#6ba31b]"
                                onClick={() => setIsAddRateOpen(true)}
                            >
                                <PlusIcon className="mr-2 h-4 w-4" /> Add New
                                Rate
                            </Button>
                        </div>
                        <TableContainerOne className="border-none shadow-none">
                            <Table>
                                <TableHeader>
                                    <TableHead className="py-4 pl-6 text-xs font-semibold">
                                        Activity / SKU
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Plan
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Included Limit
                                    </TableHead>
                                    <TableHead className="py-4 text-right text-xs font-semibold">
                                        Overage Rate
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Frequency
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Status
                                    </TableHead>
                                    <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {usageRatesData.map((item, idx) => (
                                        <TableRow
                                            key={idx}
                                            className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                        >
                                            <TableCell className="py-4 pl-6 font-medium text-gray-900">
                                                {item.activity}
                                            </TableCell>
                                            <TableCell className="py-4 text-gray-600">
                                                {item.plan}
                                            </TableCell>
                                            <TableCell className="py-4 text-gray-600">
                                                {item.limit}
                                            </TableCell>
                                            <TableCell className="py-4 text-right">
                                                <div className="font-medium text-gray-900">
                                                    {item.overage.split(' ')[0]}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {item.overage.split(' ')[1]}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 text-xs font-medium text-gray-600">
                                                {item.freq
                                                    .split(' / ')
                                                    .map((line, i) => (
                                                        <div key={i}>
                                                            {line}
                                                        </div>
                                                    ))}
                                            </TableCell>
                                            <TableCell className="py-4">
                                                <Badge
                                                    variant={
                                                        item.status ===
                                                        'Enabled'
                                                            ? 'active'
                                                            : 'archived'
                                                    }
                                                    withDot={true}
                                                    rounded="md"
                                                >
                                                    {item.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="flex justify-end py-4 pr-6">
                                                <ActionButton
                                                    onClick={() =>
                                                        handleEditRateClick(
                                                            item,
                                                        )
                                                    }
                                                >
                                                    <PencilIcon className="h-4 w-4 text-gray-400" />
                                                </ActionButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                        <Pagination />
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <div>
                                <h2 className="text-base font-semibold text-gray-900">
                                    Currency Conversion Rules
                                </h2>
                                <p className="mt-1 text-xs text-gray-500">
                                    Manage fixed exchange rates for automatic
                                    overage pricing (Base Currency: KWD).
                                </p>
                            </div>
                            <IconButton
                                onClick={() => setIsAddCurrencyOpen(true)}
                            >
                                <PlusIcon className="h-4 w-4" /> Add Currency
                            </IconButton>
                        </div>

                        {/* Table Headers */}
                        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-3">
                            <div className="w-1/3 text-xs font-semibold text-gray-500">
                                Region
                            </div>
                            <div className="w-1/3 text-xs font-semibold text-gray-500">
                                Rate (Multiplier)
                            </div>
                            <div className="w-1/3 text-right text-xs font-semibold text-gray-500">
                                Preview (1 KWD =)
                            </div>
                        </div>

                        <div className="space-y-4 p-6">
                            {currencyData.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                                >
                                    <div className="flex w-1/3 items-center gap-2">
                                        <FlagIcon code={item.code} />
                                        <span className="text-sm font-medium text-gray-900">
                                            {item.region}
                                        </span>
                                    </div>
                                    <div className="w-1/3">
                                        <input
                                            type="text"
                                            defaultValue={item.rate}
                                            className="w-[180px] rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                        />
                                    </div>
                                    <div className="w-1/3 text-right text-sm font-medium text-gray-900">
                                        {item.preview}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-end rounded-b-xl border-t border-gray-200 px-6 py-3 text-right">
                            {/* Triggering the toast state */}
                            <Button
                                className="bg-[#7AB621] hover:bg-[#6ba31b]"
                                onClick={() => setShowToast(true)}
                            >
                                Update Rates
                            </Button>
                        </div>

                        {/* Your Custom Toast Component */}
                        {showToast && (
                            <SuccessToast
                                title="Currency Conversion Rules Updated"
                                message="Your currency conversion rules have been saved and are now in effect."
                                actionText="" // Provided to satisfy TS interface
                                onAction={() => {}} // Provided to satisfy TS interface
                                onClose={() => setShowToast(false)}
                            />
                        )}
                    </div>
                </div>
            )}

            {/* ── Add Manual Charge Modal ─────────────────────────────── */}
            <AddManualChargeModal
                isOpen={isAddManualChargeOpen}
                onClose={() => setIsAddManualChargeOpen(false)}
                onSaveAndBill={(data) => {
                    console.log('Save & Bill:', data);
                    setIsAddManualChargeOpen(false);
                }}
                onAddToQueue={(data) => {
                    console.log('Add to Queue:', data);
                    setIsAddManualChargeOpen(false);
                }}
            />

            {/* ── Billing Actions Modal ───────────────────────────────── */}
            {isBillingActionsOpen && selectedChargeItem && (
                <BillingActionsModal
                    isOpen={isBillingActionsOpen}
                    onClose={() => {
                        setIsBillingActionsOpen(false);
                        setSelectedChargeItem(null);
                    }}
                    onChargeNow={(data) => {
                        console.log('Charge Now:', data);
                        setIsBillingActionsOpen(false);
                        setSelectedChargeItem(null);
                    }}
                    item={{
                        businessName: selectedChargeItem.businessName,
                        busId: selectedChargeItem.busId,
                        currentPlan:
                            selectedChargeItem.currentPlan ?? 'Pro (Monthly)',
                        chargeRule: selectedChargeItem.chargeRule,
                        description: selectedChargeItem.justification.main,
                        date: selectedChargeItem.date ?? '',
                        originalAmount: selectedChargeItem.originalAmount ?? 0,
                        currency: 'KWD',
                    }}
                />
            )}

            {/* ── Add New Rate Modal ──────────────────────────────────── */}
            <AddNewRateModal
                isOpen={isAddRateOpen}
                onClose={() => setIsAddRateOpen(false)}
                onConfirm={(data) => {
                    console.log('New Rate:', data);
                    setIsAddRateOpen(false);
                }}
            />

            {/* ── Edit Rate Modal ─────────────────────────────────────── */}
            {isEditRateOpen && selectedRateItem && (
                <EditRateModal
                    isOpen={isEditRateOpen}
                    onClose={() => {
                        setIsEditRateOpen(false);
                        setSelectedRateItem(null);
                    }}
                    onConfirm={(data) => {
                        console.log('Updated Rate:', data);
                        setIsEditRateOpen(false);
                        setSelectedRateItem(null);
                    }}
                    defaultValues={{
                        activitySku: selectedRateItem.activity
                            .toLowerCase()
                            .replace(/ /g, '_'),
                        applicablePlan: selectedRateItem.plan
                            .toLowerCase()
                            .replace(/ /g, '_'),
                        status:
                            selectedRateItem.status === 'Enabled'
                                ? 'active'
                                : 'archived',
                    }}
                    activeSubscribers={12}
                />
            )}

            {/* ── Add Currency Modal ──────────────────────────────────── */}
            <AddCurrencyModal
                isOpen={isAddCurrencyOpen}
                onClose={() => setIsAddCurrencyOpen(false)}
                onConfirm={(data) => {
                    console.log('New Currency:', data);
                    setIsAddCurrencyOpen(false);
                }}
            />
            {isWarningToastOpen && itemToCancel && (
                <WarningToast
                    title="Cancel pending charge?"
                    message={`Are you sure you want to cancel the charge for ${itemToCancel.businessName}?`}
                    actionText="Yes, cancel charge"
                    cancelText="Keep charge"
                    onAction={handleConfirmCancel}
                    onClose={() => {
                        setIsWarningToastOpen(false);
                        setItemToCancel(null);
                    }}
                />
            )}
        </div>
    );
};

export default UsageCredits;
