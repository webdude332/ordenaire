import Badge from '@/components/Badge';
import EditIncidentModal from '@/components/Modals/EditIncidentModal';
import ReportIncidentModal from '@/components/Modals/ReportIncidentModal';
import ActionButton from '@/components/ui/ActionButton';
import Button from '@/components/ui/Button';
import CustomDropdown from '@/components/ui/CustomDropdown';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../OuterTable';

// ─── Types ────────────────────────────────────────────────────────────────────

interface PlatformCard {
    name: string;
    status: 'Operational' | 'Down' | 'Degraded';
}

interface IntegrationRow {
    id: number;
    service: string;
    function: string;
    status: 'Online' | 'Down' | 'Degraded';
    latency: string;
}

interface IncidentItem {
    id: number;
    dateTime: string;
    severity: 'Critical' | 'Major' | 'Minor';
    incident: string;
    status: 'Investigating' | 'Identified' | 'Monitoring' | 'Resolved';
    duration: string;
    affectedPlatform: string;
}

// ─── Static data ─────────────────────────────────────────────────────────────

const platformCards: PlatformCard[] = [
    { name: 'Merchant Portal', status: 'Operational' },
    { name: 'POS App (iPad)', status: 'Operational' },
    { name: 'KDS System', status: 'Down' },
    { name: 'Consumer Ordering App', status: 'Operational' },
    { name: 'Kiosk Machine', status: 'Down' },
    { name: 'WhatsApp Marketing', status: 'Operational' },
];

const integrations: IntegrationRow[] = [
    {
        id: 1,
        service: 'AWS Infrastructure',
        function: 'Cloud Provider',
        status: 'Online',
        latency: '-',
    },
    {
        id: 2,
        service: 'Stripe / Payments',
        function: 'Payment Gateway',
        status: 'Online',
        latency: '240ms',
    },
    {
        id: 3,
        service: 'WhatsApp',
        function: 'SMS & Messaging',
        status: 'Down',
        latency: '-',
    },
    {
        id: 4,
        service: 'Google Maps API',
        function: 'Location Services',
        status: 'Online',
        latency: '45ms',
    },
];

const incidentHistory: IncidentItem[] = [
    {
        id: 1,
        dateTime: '05 Sept 2025\n04:00 PM',
        severity: 'Critical',
        incident: 'Kiosk Login Failure',
        status: 'Resolved',
        duration: '18 min',
        affectedPlatform: 'kiosk_machine',
    },
    {
        id: 2,
        dateTime: '06 Sept 2025\n05:00 PM',
        severity: 'Major',
        incident: 'Stripe Payment Timeout',
        status: 'Monitoring',
        duration: '25 min',
        affectedPlatform: 'merchant_portal',
    },
    {
        id: 3,
        dateTime: '07 Sept 2025\n06:00 PM',
        severity: 'Minor',
        incident: 'KDS Order Sync Delay',
        status: 'Resolved',
        duration: '50 min',
        affectedPlatform: 'kds_system',
    },
    {
        id: 4,
        dateTime: '08 Sept 2025\n07:00 PM',
        severity: 'Critical',
        incident: 'WhatsApp OTP Failure',
        status: 'Resolved',
        duration: '12 min',
        affectedPlatform: 'whatsapp_marketing',
    },
];

// ─── Filter options ───────────────────────────────────────────────────────────

const STATUS_FILTER_OPTIONS = [
    { label: 'All', value: 'all' },
    { label: '🟠 Investigating', value: 'investigating' },
    { label: '🔵 Identified', value: 'identified' },
    { label: '🔵 Monitoring', value: 'monitoring' },
    { label: '🟢 Resolved', value: 'resolved' },
];

const SEVERITY_FILTER_OPTIONS = [
    { label: 'All', value: 'all' },
    { label: 'Critical', value: 'critical' },
    { label: 'Major', value: 'major' },
    { label: 'Minor', value: 'minor' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getPlatformVariant = (status: PlatformCard['status']) => {
    switch (status) {
        case 'Operational':
            return 'success';
        case 'Down':
            return 'error';
        case 'Degraded':
            return 'warning';
    }
};

const getIntegrationVariant = (status: IntegrationRow['status']) => {
    switch (status) {
        case 'Online':
            return 'success';
        case 'Down':
            return 'error';
        case 'Degraded':
            return 'warning';
    }
};

const getSeverityVariant = (severity: IncidentItem['severity']) => {
    switch (severity) {
        case 'Critical':
            return 'error';
        case 'Major':
            return 'warning';
        case 'Minor':
            return 'active';
    }
};

const getIncidentStatusVariant = (status: IncidentItem['status']) => {
    switch (status) {
        case 'Resolved':
            return 'success';
        case 'Monitoring':
            return 'active';
        case 'Investigating':
            return 'warning';
        case 'Identified':
            return 'active';
    }
};

// ─── Component ────────────────────────────────────────────────────────────────

const PlatformStatus = () => {
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedIncident, setSelectedIncident] =
        useState<IncidentItem | null>(null);
    const [statusFilter, setStatusFilter] = useState('all');
    const [severityFilter, setSeverityFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 6;

    const filteredIncidents = incidentHistory.filter((item) => {
        const matchesStatus =
            statusFilter === 'all' ||
            item.status.toLowerCase() === statusFilter;
        const matchesSeverity =
            severityFilter === 'all' ||
            item.severity.toLowerCase() === severityFilter;
        return matchesStatus && matchesSeverity;
    });

    return (
        <div className="space-y-6">
            {/* ── Platform Status Cards ────────────────────────────────── */}
            <div className="rounded-xl border border-borderColor p-6">
                <div className="grid grid-cols-3 gap-4">
                    {platformCards.map((card) => (
                        <div
                            key={card.name}
                            className="rounded-xl border border-gray-200 p-4"
                        >
                            <p className="mb-2 text-sm text-gray-500">
                                {card.name}
                            </p>
                            <Badge
                                variant={getPlatformVariant(card.status)}
                                withDot={true}
                                rounded="full"
                            >
                                {card.status}
                            </Badge>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── 3rd Party Integrations ───────────────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="px-6 pb-4">
                    <h2 className="text-lg font-medium text-gray-900">
                        3rd Party Integrations
                    </h2>
                </div>

                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Service Name
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Function
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Latency
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {integrations.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="font-medium text-gray-900">
                                        {row.service}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {row.function}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={getIntegrationVariant(
                                                row.status,
                                            )}
                                            withDot={true}
                                            rounded="full"
                                        >
                                            {row.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {row.latency}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
            </div>

            {/* ── Incident History ─────────────────────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="text-lg font-medium text-gray-900">
                        Incident History
                    </h2>
                    <div className="flex items-center gap-3">
                        {/* Status filter */}
                        <div className="w-40">
                            <CustomDropdown
                                label=""
                                options={STATUS_FILTER_OPTIONS}
                                value={statusFilter}
                                onChange={setStatusFilter}
                                placeholder="Status: All"
                            />
                        </div>
                        {/* Severity filter */}
                        <div className="w-40">
                            <CustomDropdown
                                label=""
                                options={SEVERITY_FILTER_OPTIONS}
                                value={severityFilter}
                                onChange={setSeverityFilter}
                                placeholder="Severity: All"
                            />
                        </div>
                        <Button onClick={() => setIsReportModalOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" />
                            Report Incident
                        </Button>
                    </div>
                </div>

                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Date/Time <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Severity <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Incident
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Duration
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Action
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {filteredIncidents.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        {item.dateTime
                                            .split('\n')
                                            .map((line, i) => (
                                                <div
                                                    key={i}
                                                    className={
                                                        i === 0
                                                            ? 'font-medium text-gray-900'
                                                            : 'text-sm text-gray-500'
                                                    }
                                                >
                                                    {line}
                                                </div>
                                            ))}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={getSeverityVariant(
                                                item.severity,
                                            )}
                                            withDot={true}
                                            rounded="full"
                                        >
                                            {item.severity}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="font-medium text-gray-900">
                                        {item.incident}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={getIncidentStatusVariant(
                                                item.status,
                                            )}
                                            withDot={true}
                                            rounded="full"
                                        >
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.duration}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <ActionButton
                                            onClick={() => {
                                                setSelectedIncident(item);
                                                setIsEditModalOpen(true);
                                            }}
                                        >
                                            <PencilIcon className="h-4 w-4 text-gray-400" />
                                        </ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>

                {/* ── Pagination ───────────────────────────────────────── */}
                <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
                    <ActionButton
                        onClick={() =>
                            setCurrentPage((p) => Math.max(1, p - 1))
                        }
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4 text-gray-500" />
                    </ActionButton>

                    <div className="flex items-center gap-1">
                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1,
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                                    page === currentPage
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-500 hover:bg-gray-50'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <ActionButton
                        onClick={() =>
                            setCurrentPage((p) => Math.min(totalPages, p + 1))
                        }
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                    </ActionButton>
                </div>
            </div>

            {/* ── Modals ────────────────────────────────────────────────── */}
            <ReportIncidentModal
                isOpen={isReportModalOpen}
                onClose={() => setIsReportModalOpen(false)}
                onConfirm={() => setIsReportModalOpen(false)}
            />

            <EditIncidentModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedIncident(null);
                }}
                onConfirm={() => {
                    setIsEditModalOpen(false);
                    setSelectedIncident(null);
                }}
                incident={selectedIncident}
            />
        </div>
    );
};

export default PlatformStatus;
