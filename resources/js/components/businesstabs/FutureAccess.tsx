import { useState } from 'react';
// Icons
import ArrowDown from '@/images/icons/chevron-down.svg?react';
import Search from '@/images/icons/inputSearch.svg?react';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/images/icons/plus.svg?react';
import AddNewFeatureModal from '../AddNewFeatureModal';
import EditNewFeature from '../EditNewFeature';

// UI Components
import ActionButton from '../ui/ActionButton';
import BusinessStatusBadge from '../ui/BusinessStatusBadge'; // Imported your component
import Pagination from '../ui/Pagination';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/Table';

const FeatureAccessTab = () => {
    const [activeTab, setActiveTab] = useState<'features' | 'beta'>('features');
    const [isAuditLogOpen, setIsAuditLogOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const featuresData = [
        {
            name: 'Live Chat Support',
            category: 'Customer Exp',
            plans: 'Pro, Enterprise',
            region: 'Kuwait',
            status: 'Enable', // Now supported by BusinessStatusBadge
        },
        {
            name: 'Accounting Module',
            category: 'Finance',
            plans: 'All Plans',
            region: 'Global',
            status: 'Enable',
        },
        {
            name: 'Inventory Management',
            category: 'Operations',
            plans: 'Enterprise',
            region: 'Global',
            status: 'Enable',
        },
        {
            name: 'AI Delivery Optimization',
            category: 'Operations',
            plans: 'Standard, Pro',
            region: 'Kuwait, KSA',
            status: 'Disabled', // Now supported by BusinessStatusBadge
        },
    ];

    const auditData = [
        {
            date: '05 Sept 2025',
            time: '10:00 AM',
            changedBy: 'Admin Riya',
            feature: 'Contactless Payment',
            detail: 'Disabled → Enabled',
            reason: 'Rollout for UAE region',
        },
        {
            date: '05 Sept 2025',
            time: '10:00 AM',
            changedBy: 'User Sam',
            feature: 'Contactless Payment',
            detail: 'Edit Config',
            reason: 'Phasing out for KSA',
        },
        {
            date: '05 Sept 2025',
            time: '10:00 AM',
            changedBy: 'Moderator Alex',
            feature: 'AI Delivery',
            detail: 'Disabled → Enabled',
            reason: 'Pilot for Dubai',
        },
        {
            date: '05 Sept 2025',
            time: '10:00 AM',
            changedBy: 'Guest Jamie',
            feature: 'Contactless Payment',
            detail: 'v1.0 → v1.1',
            reason: 'Added sentiment tags',
        },
    ];

    const statsCards = [
        { title: 'Live Chat Support', value: '8,900' },
        { title: 'Accounting Module', value: '8,900' },
        { title: 'Inventory Management', value: '8,900' },
        { title: 'AI Delivery Optimization', value: '8,900' },
    ];

    return (
        <div className="w-full space-y-6">
            {/* Top Controls: Tabs & Search */}
            <div className="flex items-center justify-between">
                {/* Custom Tab Switcher */}
                <div className="flex rounded-lg border border-gray-200 bg-white p-1">
                    <button
                        onClick={() => setActiveTab('features')}
                        className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                            activeTab === 'features'
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Features
                    </button>
                    <button
                        onClick={() => setActiveTab('beta')}
                        className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                            activeTab === 'beta'
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Beta Rollouts
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <Search className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search Features"
                        className="w-64 rounded-lg border border-gray-300 py-2 pr-4 pl-10 text-sm text-gray-700 shadow-sm placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                    />
                </div>
            </div>

            {/* MAIN SECTION: All Features Table */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                {/* Section Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2 className="text-base font-semibold text-gray-900">
                        All Features
                    </h2>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#7AB621] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6ba31b]"
                    >
                        <PlusIcon className="h-4 w-4" />
                        Add new Feature
                    </button>
                </div>

                <TableContainer className="border-none shadow-none">
                    <Table>
                        <TableHeader>
                            <TableHead className="py-4 pl-6">Feature</TableHead>
                            <TableHead className="py-4">
                                Applicable Plans
                            </TableHead>
                            <TableHead className="py-4">Region</TableHead>
                            <TableHead className="py-4">Status</TableHead>
                            <TableHead className="py-4 pr-6 text-right">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {featuresData.map((item, idx) => (
                                <TableRow
                                    key={idx}
                                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                >
                                    <TableCell className="py-4 pl-6">
                                        <div className="font-semibold text-gray-900">
                                            {item.name}
                                        </div>
                                        <div className="mt-0.5 text-xs text-gray-500">
                                            {item.category}
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4 text-gray-600">
                                        {item.plans}
                                    </TableCell>
                                    <TableCell className="py-4 text-gray-600">
                                        {item.region}
                                    </TableCell>
                                    <TableCell className="py-4">
                                        {/* Using your consistent BusinessStatusBadge */}
                                        <BusinessStatusBadge
                                            status={item.status}
                                        />
                                    </TableCell>
                                    <TableCell className="py-4 pr-6 text-right">
                                        <ActionButton
                                            onClick={() =>
                                                setIsEditModalOpen(true)
                                            }
                                        >
                                            <PencilIcon className="h-4 w-4 text-gray-400" />
                                        </ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className="border-t border-gray-200 p-4">
                    <Pagination />
                </div>
            </div>

            {/* STATS CARDS ROW */}
            <div className="grid grid-cols-4 gap-4 border-t border-b border-borderColor py-6">
                {statsCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                        <div className="mb-1 text-xs font-medium text-gray-500">
                            {card.title}
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                            Active Users: {card.value}
                        </div>
                    </div>
                ))}
            </div>

            {/* AUDIT LOG SECTION (Collapsible) */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                {/* Collapsible Header */}
                <button
                    onClick={() => setIsAuditLogOpen(!isAuditLogOpen)}
                    className="flex w-full items-center justify-between bg-white px-6 py-4 transition-colors hover:bg-gray-50"
                >
                    <h2 className="text-base font-semibold text-gray-900">
                        Audit Log
                    </h2>
                    <div
                        className={`rounded-full bg-white p-1 transition-transform duration-200 ${isAuditLogOpen ? 'rotate-180' : ''}`}
                    >
                        <ActionButton>
                            <ArrowDown className="h-4 w-4 text-gray-400" />
                        </ActionButton>
                    </div>
                </button>

                {/* Collapsible Content */}
                {isAuditLogOpen && (
                    <div className="border-t border-gray-200">
                        <TableContainer className="border-none shadow-none">
                            <Table>
                                <TableHeader>
                                    <TableHead className="py-3 pl-6 text-xs font-medium text-gray-500">
                                        Date/Time
                                    </TableHead>
                                    <TableHead className="py-3 text-xs font-medium text-gray-500">
                                        Changed By
                                    </TableHead>
                                    <TableHead className="py-3 text-xs font-medium text-gray-500">
                                        Feature Name
                                    </TableHead>
                                    <TableHead className="py-3 text-xs font-medium text-gray-500">
                                        Change Detail
                                    </TableHead>
                                    <TableHead className="py-3 pr-6 text-xs font-medium text-gray-500">
                                        Notes / Reason
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {auditData.map((log, idx) => (
                                        <TableRow
                                            key={idx}
                                            className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                        >
                                            <TableCell className="py-3 pl-6">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {log.date}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {log.time}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-3 text-sm text-gray-900">
                                                {log.changedBy}
                                            </TableCell>
                                            <TableCell className="py-3 text-sm text-gray-900">
                                                {log.feature}
                                            </TableCell>
                                            <TableCell className="py-3 text-sm font-medium text-gray-900">
                                                {log.detail}
                                            </TableCell>
                                            <TableCell className="py-3 pr-6 text-sm text-gray-500">
                                                {log.reason}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
            </div>
            <AddNewFeatureModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSave={() => {
                    console.log('Saving new feature...');
                    setIsAddModalOpen(false);
                }}
            />

            <EditNewFeature
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={() => {
                    console.log('Updating feature...');
                    setIsEditModalOpen(false);
                }}
            />
        </div>
    );
};

export default FeatureAccessTab;
