import NotificationPanel from '@/admin/components/NotificationPanel';
import Download from '@/shared/images/icons/downloadIcon.svg?react';
import ExportIcon from '@/shared/images/icons/exportIcon.svg?react';
import ActionButton from '@/shared/sharedcomponents/ui/ActionButton';
import Badge from '@/shared/sharedcomponents/ui/Badge';
import Button from '@/shared/sharedcomponents/ui/Button';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
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
import { Eye, Settings } from 'lucide-react';
import { useState } from 'react';
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg';
import SidePannel from '../components/SidePannel';
import TopBar from '../components/TopBar';
import ImportCustomersModal from '../components/modals/ImportCustomersModal';
import SyncSettingsModal from '../components/modals/SyncSettingsModal';
import CustomerView from './CustomerView'; // Assuming CustomerView is in the same directory

export default function Customers() {
    const [activeTab, setActiveTab] = useState('all');
    const [activeView, setActiveView] = useState<'list' | 'view'>('list');

    // Modal States
    const [isImportOpen, setIsImportOpen] = useState(false);
    const [isSyncSettingsOpen, setIsSyncSettingsOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);

    const customersData = [
        {
            id: 1,
            name: 'John Abel',
            segment: 'Regular',
            phone: '+965 99554485',
            lastVisit: '2 days ago',
            visitSource: 'Online Store',
            whatsappStatus: 'Synced',
        },
        {
            id: 2,
            name: 'Guest',
            segment: 'New',
            phone: '+965 12345678',
            lastVisit: '5 hours ago',
            visitSource: 'POS',
            whatsappStatus: 'Opt-Out',
        },
        {
            id: 3,
            name: 'Michael Smith',
            segment: 'New',
            phone: '+965 87654321',
            lastVisit: '14 days ago',
            visitSource: 'POS',
            whatsappStatus: 'Opt-Out',
        },
        {
            id: 4,
            name: 'Guest',
            segment: 'Regular',
            phone: '+965 13579246',
            lastVisit: '14 days ago',
            visitSource: 'Online Store',
            whatsappStatus: 'Opt-Out',
        },
        {
            id: 5,
            name: 'David Wilson',
            segment: 'Regular',
            phone: '+965 24681357',
            lastVisit: '14 days ago',
            visitSource: 'POS',
            whatsappStatus: 'Synced',
        },
        {
            id: 6,
            name: 'Sophia Brown',
            segment: 'Regular',
            phone: '+965 98765432',
            lastVisit: '14 days ago',
            visitSource: 'POS',
            whatsappStatus: 'Synced',
        },
    ];

    const segmentVariantMap: Record<string, string> = {
        Regular: 'success',
        New: 'blue',
    };
    const whatsappVariantMap: Record<string, string> = {
        Synced: 'success',
        'Opt-Out': 'gray',
    };
    const breadcrumbs = [
        {
            label: 'Customers',
            isActive: true,
            // href: '/admin/menu',
        },
    ];
    return (
        <div className="flex h-screen overflow-hidden">
            <SidePannel />

            <div className="flex flex-1 flex-col overflow-y-auto">
                <TopBar
                    title="Customers"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    // tabs={tabs}
                    onNotificationClick={() => setNotifOpen(true)}
                />

                <main className="p-6">
                    {activeView === 'view' ? (
                        <CustomerView onBack={() => setActiveView('list')} />
                    ) : (
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                {/* Tabs */}
                                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-1">
                                    <button
                                        onClick={() => setActiveTab('all')}
                                        className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${activeTab === 'all' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        All Customers{' '}
                                        <span className="rounded bg-white px-2 py-0.5 text-xs text-gray-500 shadow-sm">
                                            5,820
                                        </span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('regular')}
                                        className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${activeTab === 'regular' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Regular{' '}
                                        <span className="rounded bg-white px-2 py-0.5 text-xs text-gray-500 shadow-sm">
                                            15
                                        </span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('new')}
                                        className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${activeTab === 'new' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        New{' '}
                                        <span className="rounded bg-white px-2 py-0.5 text-xs text-gray-500 shadow-sm">
                                            20
                                        </span>
                                    </button>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3">
                                    {/* <button
                                        onClick={() =>
                                            setIsSyncSettingsOpen(true)
                                        }
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50"
                                    >
                                        <Settings className="h-5 w-5" />
                                    </button> */}
                                    <ActionButton
                                        onClick={() =>
                                            setIsSyncSettingsOpen(true)
                                        }
                                    >
                                        <Settings className="h-4 w-4 text-iconColor" />
                                    </ActionButton>
                                    {/* <button className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                                        <Download className="h-4 w-4" /> Export
                                    </button> */}
                                    <IconButton>
                                        <ExportIcon className="h-4 w-4 text-iconColor" />
                                        Export
                                    </IconButton>
                                    <Button
                                        onClick={() => setIsImportOpen(true)}
                                        className="bg-[#79B800] hover:bg-[#6aa300]"
                                    >
                                        <Download className="h-4 w-4" /> Import
                                    </Button>
                                </div>
                            </div>

                            {/* Table */}
                            <TableContainer>
                                <Table>
                                    <TableHeader>
                                        <TableHead>Customer Name</TableHead>
                                        <TableHead>Segment</TableHead>
                                        <TableHead>Phone number</TableHead>
                                        <TableHead>Last Visit</TableHead>
                                        <TableHead>WhatsApp Status</TableHead>
                                        <TableHead className="text-right">
                                            Actions
                                        </TableHead>
                                    </TableHeader>
                                    <TableBody>
                                        {customersData.map((customer) => (
                                            <TableRow key={customer.id}>
                                                <TableCell className="font-medium text-gray-900">
                                                    {customer.name}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant={
                                                            segmentVariantMap[
                                                                customer.segment
                                                            ] as any
                                                        }
                                                        withDot
                                                        rounded="md"
                                                    >
                                                        {customer.segment}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-gray-600">
                                                    {customer.phone}
                                                </TableCell>
                                                <TableCell>
                                                    <p className="font-medium text-gray-900">
                                                        {customer.lastVisit}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {customer.visitSource}
                                                    </p>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant={
                                                            whatsappVariantMap[
                                                                customer
                                                                    .whatsappStatus
                                                            ] as any
                                                        }
                                                        withDot
                                                        rounded="full"
                                                    >
                                                        {
                                                            customer.whatsappStatus
                                                        }
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="flex justify-end gap-2">
                                                    <ActionButton
                                                        onClick={() =>
                                                            setActiveView(
                                                                'view',
                                                            )
                                                        }
                                                    >
                                                        <Eye className="h-4 w-4 text-iconColor" />
                                                    </ActionButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <Pagination />
                            </TableContainer>

                            <ImportCustomersModal
                                isOpen={isImportOpen}
                                onClose={() => setIsImportOpen(false)}
                            />
                            <SyncSettingsModal
                                isOpen={isSyncSettingsOpen}
                                onClose={() => setIsSyncSettingsOpen(false)}
                            />
                        </div>
                    )}
                </main>
            </div>
            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
}
