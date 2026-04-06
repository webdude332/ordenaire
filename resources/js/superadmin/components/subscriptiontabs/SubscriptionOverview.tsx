import ContactModal from '@/superadmin/components/Modals/ContactModal';
import GeneralContactModal from '@/superadmin/components/Modals/GeneralContactModal';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '@/superadmin/components/OuterTable';
import Pagination from '@/superadmin/components/Pagination';
import SuccessToast from '@/superadmin/components/toasts/SuccessToast';
import InputSearch from '@shared/images/icons/inputSearch.svg?react';
import Menu from '@shared/images/icons/menuVertical.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
import TrendGreen from '@shared/images/icons/trendGreen.svg?react';
import { useState } from 'react';
import Badge, { BadgeVariant } from '../Badge';
import StatCardAlt from '../cards/StatCardAlt';
import ActionButton from '../ui/ActionButton';
import { Input } from '../ui/FormElements';
import SubMenu from '../ui/SubMenu';
import TableButton from '../ui/TableButton';

interface AlertItem {
    id: number;
    businessName: string;
    location: string;
    alert: {
        label: string;
        subText: string;
        variant: BadgeVariant;
    };
    originalAlertLabel: string;
    amount: {
        value: string;
        currency: string;
    };
    actionLabel: string;
}

interface MenuItem {
    label: string;
    onClick?: () => void;
}

interface ToastState {
    show: boolean;
    title: string;
    message: string;
    actionText: string;
    onAction: () => void;
}

const SubscriptionOverview = () => {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [toast, setToast] = useState<ToastState>({
        show: false,
        title: '',
        message: '',
        actionText: '',
        onAction: () => {},
    });
    // const [modalState, setModalState] = useState<{
    //     show: boolean;
    //     businessName: string;
    // }>({
    //     show: false,
    //     businessName: '',
    // });

    const [modalState, setModalState] = useState<{
        show: boolean;
        type: 'payment' | 'expiring' | null;
        selectedItem: AlertItem | null;
    }>({
        show: false,
        type: null,
        selectedItem: null,
    });

    const [tableData, setTableData] = useState<AlertItem[]>([
        {
            id: 1,
            businessName: 'Burger Town',
            location: 'UAE',
            alert: {
                label: 'Payment Failed',
                subText: 'Card Declined',
                variant: 'error',
            },
            originalAlertLabel: 'Payment Failed',
            amount: { value: '50.000', currency: 'KWD' },
            actionLabel: 'Retry',
        },
        {
            id: 2,
            businessName: 'PizzaPalace',
            location: 'KSA',
            alert: {
                label: 'Payment Failed',
                subText: 'Card Declined',
                variant: 'error',
            },
            originalAlertLabel: 'Payment Failed',
            amount: { value: '20.000', currency: 'KWD' },
            actionLabel: 'Retry',
        },
        {
            id: 3,
            businessName: 'SushiSpot',
            location: 'Kuwait',
            alert: {
                label: 'Expiring Soon',
                subText: 'Ends in 2 days',
                variant: 'warning',
            },
            originalAlertLabel: 'Expiring Soon',
            amount: { value: '950.000', currency: 'KWD' },
            actionLabel: 'Extend +7',
        },
        {
            id: 4,
            businessName: 'Taco Haven',
            location: 'Kuwait',
            alert: {
                label: 'Payment Failed',
                subText: 'Card Declined',
                variant: 'error',
            },
            originalAlertLabel: 'Payment Failed',
            amount: { value: '1000.000', currency: 'KWD' },
            actionLabel: 'Retry',
        },
        {
            id: 5,
            businessName: 'PastaPalace',
            location: 'Kuwait',
            alert: {
                label: 'Expired',
                subText: '60+ Days Overdue',
                variant: 'error',
            },
            originalAlertLabel: 'Expired',
            amount: { value: '1050.000', currency: 'KWD' },
            actionLabel: 'Reactivate',
        },
    ]);

    const showToast = (
        title: string,
        message: string,
        actionText: string = 'View Details',
        onAction: () => void = () => {},
    ) => {
        setToast({
            show: true,
            title,
            message,
            actionText,
            onAction,
        });
    };

    const closeToast = () => {
        setToast((prev) => ({ ...prev, show: false }));
    };

    // const openContactModal = (businessName: string) => {
    //     setModalState({ show: true, businessName });
    //     setOpenMenuId(null);
    // };

    // const closeContactModal = () => {
    //     setModalState({ show: false, businessName: '' });
    // };
    const openContactModal = (item: AlertItem) => {
        // Decide which modal to open based on the alert
        const type =
            item.originalAlertLabel === 'Expiring Soon'
                ? 'expiring'
                : 'payment';
        setModalState({ show: true, type, selectedItem: item });
        setOpenMenuId(null);
    };

    const closeContactModal = () => {
        setModalState({ show: false, type: null, selectedItem: null });
    };
    const updateTableItem = (
        id: number,
        updates: Partial<AlertItem['alert']>,
    ) => {
        setTableData((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          alert: { ...item.alert, ...updates },
                      }
                    : item,
            ),
        );
    };

    // Handle main action button clicks
    const handleActionButton = (item: AlertItem) => {
        switch (item.originalAlertLabel) {
            case 'Payment Failed':
                // Retry payment
                showToast(
                    'Payment Retry Initiated',
                    `Attempting to process payment for ${item.businessName}`,
                    'View Status',
                    () => console.log('View payment status'),
                );
                // Update the badge and subtext
                setTimeout(() => {
                    updateTableItem(item.id, {
                        label: 'Processing',
                        subText: 'Payment in progress',
                        variant: 'blue',
                    });
                }, 2000);
                break;

            case 'Expiring Soon':
                // Extend +7 days
                showToast(
                    'Grace Period Extended',
                    `${item.businessName}'s subscription extended by 7 days`,
                    'View Details',
                );
                // Update badge and subtext
                setTimeout(() => {
                    updateTableItem(item.id, {
                        label: 'Extended',
                        subText: 'Grace period active',
                        variant: 'success',
                    });
                }, 2000);
                break;

            case 'Expired':
                // Reactivate
                showToast(
                    'Reactivation Initiated',
                    `Processing reactivation for ${item.businessName}`,
                    'View Details',
                );
                setTimeout(() => {
                    updateTableItem(item.id, {
                        label: 'Reactivating',
                        subText: 'Pending confirmation',
                        variant: 'blue',
                    });
                }, 2000);
                break;
        }
    };

    // Function to get menu items based on alert status
    const getMenuItemsForAlert = (
        alertLabel: string,
        item: AlertItem,
    ): MenuItem[] => {
        switch (alertLabel) {
            case 'Payment Failed':
                return [
                    {
                        label: 'Extend Grace Period (+7 Days)',
                        onClick: () => {
                            showToast(
                                'Grace Period Extended',
                                `${item.businessName} now has 7 additional days`,
                                'View Details',
                            );
                            setTimeout(() => {
                                updateTableItem(item.id, {
                                    label: 'Grace Period',
                                    subText: 'Ends in 7 days',
                                    variant: 'warning',
                                });
                            }, 2000);
                        },
                    },
                    {
                        label: 'Contact',
                        // onClick: () => openContactModal(item.businessName),
                        onClick: () => openContactModal(item),
                    },
                    {
                        label: 'Email Invoice',
                        onClick: () => {
                            showToast(
                                'Invoice Sent',
                                `Invoice emailed to ${item.businessName}`,
                                'View Email',
                            );
                        },
                    },
                ];

            case 'Expiring Soon':
                return [
                    {
                        label: 'Send Reminder',
                        onClick: () => {
                            showToast(
                                'Reminder Sent',
                                `Renewal reminder sent to ${item.businessName}`,
                                'View Message',
                            );
                        },
                    },
                    {
                        label: 'Contact',
                        // onClick: () => openContactModal(item.businessName),
                        onClick: () => openContactModal(item),
                    },
                ];

            case 'Expired':
                return [
                    {
                        label: 'Send Reminder',
                        onClick: () => {
                            showToast(
                                'Reminder Sent',
                                `Urgent reminder sent to ${item.businessName}`,
                                'View Message',
                            );
                        },
                    },
                    {
                        label: 'Contact',
                        // onClick: () => openContactModal(item.businessName),
                        onClick: () => openContactModal(item),
                    },
                    {
                        label: 'Archive',
                        onClick: () => {
                            showToast(
                                'Account Archived',
                                `${item.businessName} has been moved to archive`,
                                'Undo',
                                () => {
                                    // Undo archive action
                                    console.log('Undo archive');
                                },
                            );
                            setTimeout(() => {
                                updateTableItem(item.id, {
                                    label: 'Archived',
                                    subText: 'Account inactive',
                                    variant: 'gray',
                                });
                            }, 2000);
                        },
                    },
                ];

            default:
                return [
                    {
                        label: 'View Details',
                        onClick: () => console.log('View Details'),
                    },
                ];
        }
    };

    return (
        <div>
            {/* --- STAT CARDS --- */}
            <div className="mt-3 mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 shadow-xs md:grid-cols-2 lg:grid-cols-4">
                <StatCardAlt
                    title="Monthly Recurring Revenue"
                    value="$120,000"
                    trend="12%"
                    trendText="vs last month"
                    trendType="positive"
                    trendIcon={TrendGreen}
                />
                <StatCardAlt
                    title="Active Subscribers"
                    value="1,240"
                    trend="4"
                    trendText="New this month"
                    trendType="positive"
                    trendIcon={TrendGreen}
                />
                <StatCardAlt
                    title="Action Required"
                    value="6 Failed Payments"
                    trend=""
                    trendText="vs last month"
                    trendType="negative"
                    trendIcon={TrendGreen}
                    coloredValue={true}
                />
                <StatCardAlt
                    title="Churn Risk"
                    value="91% Renewal Rate"
                    trend=""
                    trendText="vs last month"
                    trendType="negative"
                    trendIcon={TrendGreen}
                />
            </div>

            {/* --- TABLE SECTION --- */}
            <div className="mt-8 pt-2">
                <div>
                    <div className="w-[300px]">
                        <Input
                            className="placeholder:text-md"
                            placeholder="Search by business name"
                            icon={InputSearch}
                        />
                    </div>
                    <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center px-4 py-5">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Attention Required (Recent Alerts)
                            </h2>
                        </div>
                        <TableContainerOne>
                            <Table>
                                <TableHeader className="text-lg">
                                    <TableHead className="font-semibold">
                                        Business Name
                                    </TableHead>
                                    <TableHead className="font-semibold">
                                        <div className="flex items-center gap-1">
                                            Issue/Alert
                                            <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="font-semibold">
                                        <div className="flex items-center justify-end gap-1">
                                            Amount Pending
                                            <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-right font-semibold">
                                        Actions
                                    </TableHead>
                                </TableHeader>

                                <TableBody>
                                    {tableData.map((item) => (
                                        <TableRow key={item.id}>
                                            {/* Column 1: Business */}
                                            <TableCell>
                                                <p className="font-medium text-gray-800">
                                                    {item.businessName}
                                                </p>
                                                <p className="mt-0.5">
                                                    {item.location}
                                                </p>
                                            </TableCell>

                                            {/* Column 2: Alert Badge */}
                                            <TableCell>
                                                <Badge
                                                    variant={item.alert.variant}
                                                    withDot={true}
                                                    rounded="full"
                                                >
                                                    {item.alert.label}
                                                </Badge>
                                                <p className="mt-0.5 text-sm text-gray-500">
                                                    {item.alert.subText}
                                                </p>
                                            </TableCell>

                                            {/* Column 3: Amount */}
                                            <TableCell className="">
                                                <p className="text-right font-medium text-gray-800">
                                                    {item.amount.value}
                                                </p>
                                                <p className="mt-0.5 text-right">
                                                    {item.amount.currency}
                                                </p>
                                            </TableCell>

                                            {/* Column 4: Actions */}
                                            <TableCell className="flex justify-end gap-2">
                                                <TableButton
                                                    onClick={() =>
                                                        handleActionButton(item)
                                                    }
                                                >
                                                    {item.actionLabel}
                                                </TableButton>
                                                <div className="relative">
                                                    <ActionButton
                                                        onClick={() =>
                                                            setOpenMenuId(
                                                                openMenuId ===
                                                                    item.id
                                                                    ? null
                                                                    : item.id,
                                                            )
                                                        }
                                                    >
                                                        <Menu />
                                                    </ActionButton>
                                                    {openMenuId === item.id && (
                                                        <SubMenu
                                                            items={getMenuItemsForAlert(
                                                                item.originalAlertLabel,
                                                                item,
                                                            )}
                                                            onClose={() =>
                                                                setOpenMenuId(
                                                                    null,
                                                                )
                                                            }
                                                            positionAbove={
                                                                tableData.findIndex(
                                                                    (d) =>
                                                                        d.id ===
                                                                        item.id,
                                                                ) >=
                                                                tableData.length -
                                                                    2
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
                </div>
            </div>

            {/* Toast Notification */}
            {toast.show && (
                <SuccessToast
                    title={toast.title}
                    message={toast.message}
                    actionText={toast.actionText}
                    onAction={toast.onAction}
                    onClose={closeToast}
                />
            )}

            {/* Contact Modals */}
            {modalState.show &&
                modalState.type === 'payment' &&
                modalState.selectedItem && (
                    <ContactModal
                        businessName={modalState.selectedItem.businessName}
                        location={modalState.selectedItem.location}
                        alertLabel={modalState.selectedItem.alert.label}
                        // alertVariant={modalState.selectedItem.alert.variant}
                        onClose={closeContactModal}
                    />
                )}

            {modalState.show &&
                modalState.type === 'expiring' &&
                modalState.selectedItem && (
                    <GeneralContactModal
                        businessName={modalState.selectedItem.businessName}
                        location={modalState.selectedItem.location}
                        alertLabel={modalState.selectedItem.alert.label}
                        // alertVariant={modalState.selectedItem.alert.variant}
                        onClose={closeContactModal}
                    />
                )}
        </div>
    );
};

export default SubscriptionOverview;
