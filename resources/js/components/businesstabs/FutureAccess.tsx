import ArrowDown from '@/images/icons/chevron-down.svg?react';
import Search from '@/images/icons/inputSearch.svg?react';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/images/icons/plus.svg?react';
import { useState } from 'react';
const EyeIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

// --- MODALS ---
import AddNewFeatureModal from '../AddNewFeatureModal';
import EditNewFeature from '../EditNewFeature';
// The new modals we designed:
import ViewBetaStatsModal from '@/components/ViewBetaStatModal';
import AssignBetaModal from '../AssignBetaModal';
import EditBetaAssignmentModal from '../EditBetaAssignmentModal';
import Pagination from '../ui/Pagination';

// --- UI COMPONENTS ---
import Button from '@/components/ui/Button';
import { useEffect, useRef } from 'react';
import ActionButton from '../ui/ActionButton';
import BusinessStatusBadge from '../ui/BusinessStatusBadge';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/Table';

const FeatureAccessTab = () => {
    // --- STATE MANAGEMENT ---
    const [activeTab, setActiveTab] = useState<'features' | 'beta'>('features');
    const [isAuditLogOpen, setIsAuditLogOpen] = useState(false);

    // Feature Tab Modals
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // Beta Tab Modals
    const [isAssignBetaOpen, setIsAssignBetaOpen] = useState(false);
    const [isEditBetaAssignmentOpen, setIsEditBetaAssignmentOpen] =
        useState(false);
    const [isViewBetaStatsOpen, setIsViewBetaStatsOpen] = useState(false);
    // const auditContentRef = useRef(null);
    const auditContentRef = useRef<HTMLDivElement>(null);

    // 2. Add this useEffect to trigger the scroll
    useEffect(() => {
        if (isAuditLogOpen && auditContentRef.current) {
            // This scrolls the content into view smoothly
            auditContentRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [isAuditLogOpen]);

    const featuresData = [
        {
            name: 'Live Chat Support',
            category: 'Customer Exp',
            plans: 'Pro, Enterprise',
            region: 'Kuwait',
            status: 'Enable',
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
            status: 'Disabled',
        },
    ];

    const betaData = [
        {
            name: 'AI Menu v2',
            version: 'v2.0.4',
            stage: 'Alpha',
            assigned: '5 Outlets',
            health: 'Critical',
            actions: ['Kill Switch'],
        },
        {
            name: 'AI Delivery',
            version: 'v1.2',
            stage: 'Beta',
            assigned: '50 Outlets',
            health: 'Issues',
            actions: ['Pause', 'Rollback'],
        },
        {
            name: 'Contactless Pay',
            version: 'v2.0',
            stage: 'RC',
            assigned: '50 Outlets',
            health: 'Stable',
            actions: ['Graduate', 'Rollback'],
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
    ];

    const statsCards = [
        { title: 'Live Chat Support', value: '8,900' },
        { title: 'Accounting Module', value: '8,900' },
        { title: 'Inventory Management', value: '8,900' },
        { title: 'AI Delivery Optimization', value: '8,900' },
    ];

    // --- HELPERS: Badge Styles ---
    const getStageBadgeStyles = (stage: string) => {
        const baseStyle =
            'inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs font-medium';
        switch (stage) {
            case 'Alpha':
                return {
                    className: `${baseStyle} border-gray-200 bg-white text-gray-700`,
                    dotColor: 'bg-orange-500',
                };
            case 'Beta':
                return {
                    className: `${baseStyle} border-gray-200 bg-white text-gray-700`,
                    dotColor: 'bg-blue-500',
                };
            case 'RC':
                return {
                    className: `${baseStyle} border-gray-200 bg-white text-gray-700`,
                    dotColor: 'bg-green-500',
                };
            default:
                return { className: baseStyle, dotColor: 'bg-gray-400' };
        }
    };

    const getHealthBadgeStyles = (health: string) => {
        const baseStyle =
            'inline-flex items-center gap-2 rounded-lg px-3 py-1 text-xs font-medium';
        switch (health) {
            case 'Critical':
                return {
                    className: `${baseStyle} bg-red-50 text-red-700`,
                    dotColor: 'bg-red-600',
                };
            case 'Issues':
                return {
                    className: `${baseStyle} bg-orange-50 text-orange-700`,
                    dotColor: 'bg-orange-500',
                };
            case 'Stable':
                return {
                    className: `${baseStyle} bg-green-50 text-green-700`,
                    dotColor: 'bg-green-600',
                };
            default:
                return { className: baseStyle, dotColor: 'bg-gray-400' };
        }
    };

    return (
        <div className="w-full space-y-6">
            {/* --- TOP CONTROLS: Tabs & Search --- */}
            <div className="flex items-center justify-between">
                <div className="flex gap-1 rounded-lg bg-gray-50 p-1">
                    <button
                        onClick={() => setActiveTab('features')}
                        className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                            activeTab === 'features'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Features
                    </button>
                    <button
                        onClick={() => setActiveTab('beta')}
                        className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                            activeTab === 'beta'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
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
                        placeholder={
                            activeTab === 'features'
                                ? 'Search Features'
                                : 'Search Beta'
                        }
                        className="w-64 rounded-lg border border-gray-300 py-2 pr-4 pl-10 text-sm text-gray-700 shadow-sm placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                    />
                </div>
            </div>

            {/* --- MAIN CONTENT AREA --- */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                {/* --- TAB 1: ALL FEATURES TABLE --- */}
                {activeTab === 'features' && (
                    <>
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <h2 className="text-base font-semibold text-gray-900">
                                All Features
                            </h2>
                            <Button onClick={() => setIsAddModalOpen(true)}>
                                <PlusIcon className="h-4 w-4" />
                                Add new feature
                            </Button>
                        </div>
                        <TableContainerOne className="border-none shadow-none">
                            <Table>
                                <TableHeader>
                                    <TableHead className="py-4 pl-6 text-xs font-semibold">
                                        Feature
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Applicable Plans
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Region
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Status
                                    </TableHead>
                                    <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
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
                                                <BusinessStatusBadge
                                                    status={item.status}
                                                />
                                            </TableCell>
                                            <TableCell className="flex justify-end py-4 pr-6">
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
                        </TableContainerOne>
                    </>
                )}

                {/* --- TAB 2: BETA ROLLOUTS TABLE --- */}
                {activeTab === 'beta' && (
                    <>
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <h2 className="text-base font-semibold text-gray-900">
                                Active Betas
                            </h2>
                            {/* Assign Button connects to AssignBetaModal */}
                            <button
                                onClick={() => setIsAssignBetaOpen(true)}
                                className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#7AB621] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6ba31b]"
                            >
                                <PlusIcon className="h-4 w-4" />
                                Assign to Beta
                            </button>
                        </div>

                        <TableContainerOne className="border-none shadow-none">
                            <Table>
                                <TableHeader>
                                    <TableHead className="py-4 pl-6 text-xs font-semibold">
                                        Feature Name
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Rollout Stage
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Assigned To
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Health
                                    </TableHead>
                                    <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {betaData.map((item, idx) => {
                                        const stageStyle = getStageBadgeStyles(
                                            item.stage,
                                        );
                                        const healthStyle =
                                            getHealthBadgeStyles(item.health);
                                        return (
                                            <TableRow
                                                key={idx}
                                                className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                            >
                                                <TableCell className="py-4 pl-6">
                                                    <div className="font-semibold text-gray-900">
                                                        {item.name}
                                                    </div>
                                                    <div className="mt-0.5 text-xs text-gray-500">
                                                        {item.version}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="py-4">
                                                    <span
                                                        className={
                                                            stageStyle.className
                                                        }
                                                    >
                                                        <span
                                                            className={`h-1.5 w-1.5 rounded-full ${stageStyle.dotColor}`}
                                                        />
                                                        {item.stage}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="py-4 text-gray-600">
                                                    {item.assigned}
                                                </TableCell>
                                                <TableCell className="py-4">
                                                    <span
                                                        className={
                                                            healthStyle.className
                                                        }
                                                    >
                                                        <span
                                                            className={`h-1.5 w-1.5 rounded-full ${healthStyle.dotColor}`}
                                                        />
                                                        {item.health}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="py-4 pr-6 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        {/* Text Actions */}
                                                        {item.actions.map(
                                                            (action, i) => (
                                                                <button
                                                                    key={i}
                                                                    className="flex h-9 items-center rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                                                                >
                                                                    {action}
                                                                </button>
                                                            ),
                                                        )}

                                                        {/* Eye Icon -> ViewBetaStatsModal */}
                                                        <button
                                                            onClick={() =>
                                                                setIsViewBetaStatsOpen(
                                                                    true,
                                                                )
                                                            }
                                                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600"
                                                        >
                                                            <EyeIcon className="h-4 w-4" />
                                                        </button>

                                                        {/* Pencil Icon -> EditBetaAssignmentModal */}
                                                        <button
                                                            onClick={() =>
                                                                setIsEditBetaAssignmentOpen(
                                                                    true,
                                                                )
                                                            }
                                                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600"
                                                        >
                                                            <PencilIcon className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </>
                )}
                <div className="">
                    <Pagination />
                </div>
            </div>

            {/* --- STATS & AUDIT LOG (Only for Features Tab) --- */}
            {activeTab === 'features' && (
                <>
                    {/* Stats Cards */}
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

                    {/* Audit Log */}
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
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

                        {isAuditLogOpen && (
                            <div
                                className="border-t border-gray-200"
                                ref={auditContentRef}
                            >
                                <TableContainer className="border-none shadow-none">
                                    <Table>
                                        <TableHeader>
                                            <TableHead className="py-3 pl-6 text-xs font-semibold text-gray-700">
                                                Date/Time
                                            </TableHead>
                                            <TableHead className="py-3 text-xs font-semibold text-gray-500">
                                                Changed By
                                            </TableHead>
                                            <TableHead className="py-3 text-xs font-semibold text-gray-500">
                                                Feature Name
                                            </TableHead>
                                            <TableHead className="py-3 text-xs font-semibold text-gray-500">
                                                Change Detail
                                            </TableHead>
                                            <TableHead className="py-3 pr-6 text-xs font-semibold text-gray-500">
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
                </>
            )}

            {/* --- MODAL RENDERING --- */}
            {/* Features Tab Modals */}
            <AddNewFeatureModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSave={() => setIsAddModalOpen(false)}
            />
            <EditNewFeature
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={() => setIsEditModalOpen(false)}
            />

            {/* Beta Tab Modals */}
            <AssignBetaModal
                isOpen={isAssignBetaOpen}
                onClose={() => setIsAssignBetaOpen(false)}
                onSave={() => {
                    console.log('Saved Beta Assignment');
                    setIsAssignBetaOpen(false);
                }}
            />

            <EditBetaAssignmentModal
                isOpen={isEditBetaAssignmentOpen}
                onClose={() => setIsEditBetaAssignmentOpen(false)}
                onSave={() => {
                    console.log('Updated Beta Assignment');
                    setIsEditBetaAssignmentOpen(false);
                }}
            />

            <ViewBetaStatsModal
                isOpen={isViewBetaStatsOpen}
                onClose={() => setIsViewBetaStatsOpen(false)}
            />
        </div>
    );
};

export default FeatureAccessTab;
