import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

// Layout & UI
import SidePannel from '@/components/SidePannel';
import RenderIcon from '@/components/ui/RenderIcon'; 
import ArrowBack from '@/images/icons/backArrow.svg?react';
import ArrowRight from '@/images/icons/chevron-right.svg?react';
import AnalyticsIcon from '@/images/icons/dashBaordSvg.svg?react';

// Feature Components
import HistoryTable from '../components/HistoryTable';
import SchedulingSection from '../components/SchedulingSection';
import UpcomingTable from '../components/UpcomingTable';

// Modals
import EditReportModal from '../components/EditReportModal';
import ErrorDetailsModal from '../components/ErrorDetailsModal';
import RunReportModal from '../components/RunReportModal'
import DeleteModal from '../components/DeleteModal';
import SuccessModal from '../components/SuccessModal';

const upcomingReports = [
    {
        title: 'Monthly Summary',
        tenant: 'Acme Corp',
        frequency: 'Monthly',
        nextRun: '03 Sept 2025 7:30 AM',
        status: 'Scheduled',
    },
    // {
    //     title: 'Weekly Update',
    //     tenant: 'Acme Corp',
    //     frequency: 'Weekly',
    //     nextRun: '04 Sept 2025 01:15 PM',
    //     status: 'Completed',
    // },
    {
        title: 'Weekly Review',
        tenant: 'Stark Ind.',
        frequency: 'Weekly',
        nextRun: '05 Sept 2025 09:45 AM',
        status: 'In Progress',
    },
    {
        title: 'Daily Report',
        tenant: 'Pizza Hut',
        frequency: 'Daily',
        nextRun: '05 Sept 2025 09:45 AM',
        status: 'Pending',
    },
];

const historyReports = [
    {
        title: 'Monthly Summary',
        tenant: 'Acme Corp',
        sentOn: '03 Sept 2025 7:30 AM',
        recipients: 'abc@gmail.com',
        status: 'Sent',
    },
    {
        title: 'Weekly Update',
        tenant: 'Acme Corp',
        sentOn: '04 Sept 2025 01:15 PM',
        recipients: 'xyz@example.com',
        status: 'Sent',
    },
    {
        title: 'Quarterly Review',
        tenant: 'Stark Ind.',
        sentOn: '05 Sept 2025 09:45 AM',
        recipients: 'info@company.com',
        status: 'Sent',
    },
    {
        title: 'Annual Report',
        tenant: 'Pizza Hut',
        sentOn: '05 Sept 2025 09:45 AM',
        recipients: 'contact@business...',
        status: 'Failed',
    },
];

export default function ReportsPage() {
    // Modal State
    const [isRunModalOpen, setIsRunModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isErrorDetailsModalOpen, setIsErrorDetailsModalOpen] =
        useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [selectedReport, setSelectedReport] = useState<string | null>(null);

    // Handlers
    const openRunModal = (title: string) => {
        setSelectedReport(title);
        setIsRunModalOpen(true);
    };
    const openEditModal = (title: string) => {
        setSelectedReport(title);
        setIsEditModalOpen(true);
    };
    const openDeleteModal = (title: string) => {
        setSelectedReport(title);
        setIsDeleteModalOpen(true);
    };

    const handleRunConfirm = () => {
        setIsRunModalOpen(false);
        setTimeout(() => setIsSuccessModalOpen(true), 500);
    };
    const handleEditSave = () => {
        setIsEditModalOpen(false);
        setTimeout(() => setIsSuccessModalOpen(true), 500);
    };
    const handleDelete = () => setIsDeleteModalOpen(false);

    return (
        <div className="flex h-screen overflow-hidden bg-[#F9FAFB] font-montserrat">
            <Head title="Reports Page" />
            <SidePannel />

            <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
                <header className="sticky top-0 z-10 bg-white px-8 pt-6">
                    <nav className="mb-3 flex items-center text-xs font-medium text-gray-500">
                        <span>
                            <RenderIcon
                                icon={AnalyticsIcon}
                                className="h-4 w-4 text-gray-400"
                            />
                        </span>
                        <span className="mx-2 text-gray-300">
                            <RenderIcon
                                icon={ArrowRight}
                                className="h-4 w-4 text-[#B5B0BA]"
                            />
                        </span>
                        <Link href='/dashboard'>
                        <span className="font-semibold text-[#82798B]">
                            Dashboard
                        </span></Link>
                        <span className="mx-2 text-gray-300">
                            <RenderIcon
                                icon={ArrowRight}
                                className="h-4 w-4 text-[#B5B0BA]"
                            />
                        </span>
                        <Link href='/reports'>
                                                <span className="rounded-sm bg-[#F9F7FA] px-3 py-1.5 font-semibold text-[#4F4955]">
                            Reports page
                        </span>
                        </Link>
                    </nav>
                    <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">
                        Reports page
                    </h1>
                    <div className="flex space-x-8 border-b border-gray-200 text-sm font-medium text-gray-500">
                        <span className="border-b-2 border-[#79B800] pb-3">
                            <p className="font-semibold text-[#578500]">
                                Dashboard
                            </p>
                        </span>
                    </div>
                </header>

                <main className="custom-scrollbar flex-1 overflow-y-auto bg-white p-8">
                    <Link
                        href="/dashboard"
                        className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#CFCBD2] bg-white px-4 py-2 text-sm font-medium text-[#4F4955] shadow-sm transition-colors hover:bg-gray-50"
                    >
                        <RenderIcon
                            icon={ArrowBack}
                            className="h-5 w-5 text-[#B5B0BA]"
                        />
                        <span className="font-[600] text-[#4F4955]">
                            Back to Dashboard
                        </span>
                    </Link>

                    {/* 1. Scheduling Section */}
                    <SchedulingSection />

                    {/* 2. Upcoming Reports Table */}
                    <UpcomingTable
                        data={upcomingReports}
                        onRun={openRunModal}
                        onEdit={openEditModal}
                        onDelete={openDeleteModal}
                    />

                    {/* 3. History Table (Similar structure to UpcomingTable) */}
                    <HistoryTable
                        data={historyReports}
                        onErrorDetails={() => setIsErrorDetailsModalOpen(true)}
                    />
                </main>
            </div>

            {/* Modals are kept at the page level */}
            <RunReportModal
                isOpen={isRunModalOpen}
                onClose={() => setIsRunModalOpen(false)}
                onConfirm={handleRunConfirm}
            />
            <EditReportModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={handleEditSave}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onRetry={handleDelete}
            />
            <ErrorDetailsModal
                isOpen={isErrorDetailsModalOpen}
                onClose={() => setIsErrorDetailsModalOpen(false)}
                onRetry={() => {}}
            />
            <SuccessModal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
            />
        </div>
    );
}
