import ContactModal from '@/superadmin/components/Modals/ContactModal';
import DownloadModal from '@/superadmin/components/Modals/DownloadModal';
import SuccessToast from '@/superadmin/components/toasts/SuccessToast';
import { router } from '@inertiajs/react';
import SearchIcon from '@shared/images/icons/inputSearch.svg?react';
import Menu from '@shared/images/icons/menuVertical.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
import { useState } from 'react';
import Badge, { BadgeVariant } from '../Badge';
import CreditNoteModal from '../Modals/CreditNoteModal';
import RefundModal from '../Modals/RefundModal';
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
import SubMenu from '../ui/SubMenu';
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

const getStatusBadgeVariant = (status: string): BadgeVariant => {
    switch (status) {
        case 'Active':
            return 'success';
        case 'Overdue':
            return 'warning';
        case 'Pending':
            return 'blue';
        case 'Refunded':
            return 'error';
        default:
            return 'gray';
    }
};

const getActionLabel = (status: string): string => {
    switch (status) {
        case 'Active':
            return 'Download';
        case 'Overdue':
            return 'Retry';
        case 'Pending':
            return 'Contact';
        case 'Refunded':
            return 'View Credit Note';
        default:
            return 'View';
    }
};

const Invoices = () => {
    const [dateRange, setDateRange] = useState('last30');
    const [type, setType] = useState('wallet');
    const [status, setStatus] = useState('all');
    const [refundModalSubscriber, setRefundModalSubscriber] =
        useState<Invoice | null>(null);

    const [tableData, setTableData] = useState<Invoice[]>([
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
    ]);

    const [downloadModalInvoice, setDownloadModalInvoice] =
        useState<Invoice | null>(null);
    const [contactModalInvoice, setContactModalInvoice] =
        useState<Invoice | null>(null);
    const [creditNoteInvoice, setCreditNoteInvoice] = useState<Invoice | null>(
        null,
    );
    const [activeSubMenuId, setActiveSubMenuId] = useState<string | null>(null);
    const [toast, setToast] = useState<{
        show: boolean;
        title: string;
        message: string;
    }>({ show: false, title: '', message: '' });

    const showToast = (title: string, message: string) => {
        setToast({ show: true, title, message });
    };

    const closeToast = () => {
        setToast((prev) => ({ ...prev, show: false }));
    };

    const handleRetry = (invoice: Invoice) => {
        setTableData((prev) =>
            prev.map((item) =>
                item.id === invoice.id
                    ? {
                          ...item,
                          status: {
                              label: 'Pending',
                              subText: 'Awaiting Approval',
                          },
                          actionLabel: 'Pending Review',
                      }
                    : item,
            ),
        );
        showToast(
            'Payment Retry Initiated',
            `Retrying payment for ${invoice.billedTo.name} · ${invoice.invoiceNumber}`,
        );
    };

    // --- Main Action Button handler ---
    const handleActionClick = (invoice: Invoice) => {
        switch (invoice.status.label) {
            case 'Active':
                setDownloadModalInvoice(invoice);
                break;
            case 'Overdue':
                handleRetry(invoice);
                break;
            case 'Pending':
                setContactModalInvoice(invoice);
                break;
            case 'Refunded':
                setCreditNoteInvoice(invoice);
                break;
        }
    };

    const getSubMenuItems = (invoice: Invoice) => {
        const common = [
            {
                label: 'View Subscription Details',
                onClick: () => {
                    router.visit(
                        '/superadmin/subscription-and-billing/subscriptiondetail',
                    );
                },
            },
            {
                label: 'View Contact Details',
                onClick: () => {
                    setContactModalInvoice(invoice);
                },
            },
        ];

        const conditional = (() => {
            switch (invoice.status.label) {
                case 'Active':
                    return [
                        {
                            label: 'Issue Refund',

                            onClick: () => {
                                setRefundModalSubscriber(invoice);
                            },
                        },
                        {
                            label: 'Email Receipt',
                            onClick: () => {
                                showToast(
                                    'Receipt Sent',
                                    `Email receipt sent for ${invoice.invoiceNumber}`,
                                );
                            },
                        },
                    ];
                case 'Overdue':
                    return [
                        {
                            label: 'Contact',
                            onClick: () => {
                                setContactModalInvoice(invoice);
                            },
                        },
                        {
                            label: 'Email Invoice',
                            onClick: () => {
                                showToast(
                                    'Invoice Emailed',
                                    `Invoice ${invoice.invoiceNumber} sent to ${invoice.billedTo.name}`,
                                );
                            },
                        },
                    ];
                case 'Refunded':
                    return [
                        {
                            label: 'View Invoice',
                            onClick: () => {
                                setDownloadModalInvoice(invoice);
                            },
                        },
                    ];
                case 'Pending':
                default:
                    return [];
            }
        })();

        return [...common, ...conditional];
    };

    const dateOptions = [
        { label: 'Last 30 Days', value: 'last30' },
        { label: 'Last 90 Days', value: 'last90' },
        { label: 'Last 7 Days', value: 'last7' },
        { label: 'Last Year', value: 'lastyear' },
    ];
    const statusOptions = [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Overdue', value: 'overdue' },
        { label: 'Pending', value: 'pending' },
    ];

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
                <div className="grid w-full grid-cols-1 gap-3 md:w-auto md:grid-cols-2">
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
                    {/* <div>
                        <CustomDropdown
                            label="Type"
                            options={typeOptions}
                            value={type}
                            onChange={setType}
                            placeholder="Type: Wallet/Card"
                            labelClassName="hidden"
                        />
                    </div> */}
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

                <TableContainerOne className="overflow-visible">
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
                                            <Badge
                                                variant={getStatusBadgeVariant(
                                                    item.status.label,
                                                )}
                                                withDot={true}
                                            >
                                                {item.status.label}
                                            </Badge>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {item.status.subText}
                                        </div>
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <div className="relative flex justify-end gap-2">
                                            {/* Main Action Button */}
                                            <ActionButton
                                                onClick={() =>
                                                    handleActionClick(item)
                                                }
                                                disabled={
                                                    item.actionLabel ===
                                                    'Pending Review'
                                                }
                                                className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                {item.actionLabel}
                                            </ActionButton>

                                            {/* ⋮ Menu Button */}
                                            <ActionButton
                                                onClick={() =>
                                                    setActiveSubMenuId(
                                                        activeSubMenuId ===
                                                            item.id
                                                            ? null
                                                            : item.id,
                                                    )
                                                }
                                                className="rounded-lg border border-gray-300 p-2 hover:bg-gray-50"
                                            >
                                                <Menu className="h-4 w-4 text-gray-500" />
                                            </ActionButton>

                                            {/* SubMenu */}
                                            {activeSubMenuId === item.id && (
                                                <SubMenu
                                                    items={getSubMenuItems(
                                                        item,
                                                    )}
                                                    onClose={() =>
                                                        setActiveSubMenuId(null)
                                                    }
                                                />
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
                <Pagination />
            </div>

            {/** Download Invoice Modal */}
            {downloadModalInvoice && (
                <DownloadModal
                    isOpen={true}
                    onClose={() => setDownloadModalInvoice(null)}
                    invoice={downloadModalInvoice}
                />
            )}

            {/** Contact Modal */}
            {contactModalInvoice && (
                <ContactModal
                    businessName={contactModalInvoice.billedTo.name}
                    location={contactModalInvoice.billedTo.location}
                    alertLabel={contactModalInvoice.status.subText}
                    // alertVariant={
                    //     contactModalInvoice.status.label === 'Overdue'
                    //         ? 'warning'
                    //         : contactModalInvoice.status.label === 'Pending'
                    //           ? 'blue'
                    //           : 'error'
                    // }
                    alertVariant={
                        contactModalInvoice.status.label === 'Active'
                            ? 'success'
                            : contactModalInvoice.status.label === 'Overdue'
                              ? 'warning'
                              : contactModalInvoice.status.label === 'Pending'
                                ? 'blue'
                                : 'error'
                    }
                    invoiceRef={contactModalInvoice.invoiceNumber}
                    onClose={() => setContactModalInvoice(null)}
                />
            )}

            {/** Credit Note Modal */}
            {creditNoteInvoice && (
                <CreditNoteModal
                    isOpen={true}
                    onClose={() => setCreditNoteInvoice(null)}
                    invoice={creditNoteInvoice}
                />
            )}

            {/** Success Toast */}
            {toast.show && (
                <SuccessToast
                    title={toast.title}
                    message={toast.message}
                    actionText=""
                    onClose={closeToast}
                    onAction={closeToast}
                    autoCloseDuration={3000}
                />
            )}
            {refundModalSubscriber && (
                <RefundModal
                    isOpen={true}
                    onClose={() => setRefundModalSubscriber(null)}
                    subscriber={{
                        name: refundModalSubscriber.billedTo.name,
                        busId: refundModalSubscriber.billedTo.busId,
                        location: refundModalSubscriber.billedTo.location,
                    }}
                    invoice={{
                        id: 'INV-025-002',
                        dateTime: '11:30 AM - 03 Sep 2025',
                        typeOfCharge: 'Subscription',
                        amount: `AED 450.00`,
                        amountRaw: 450,
                        currency: 'AED',
                    }}
                    onConfirm={() => {
                        showToast(
                            'Refund Submitted',
                            `Refund for ${refundModalSubscriber.billedTo.name} submitted for approval.`,
                        );
                        setRefundModalSubscriber(null);
                    }}
                />
            )}
        </div>
    );
};

export default Invoices;
