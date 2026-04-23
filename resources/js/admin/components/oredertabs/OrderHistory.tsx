import ExportIcon from '@/shared/images/icons/exportIcon.svg?react';
import Eye from '@/shared/images/icons/eyeIcon.svg?react';
import searchIcon from '@/shared/images/icons/inputSearch.svg';
import SelectorIcon from '@/shared/images/icons/selectorIcon.svg?react';
import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import CustomDateRangePicker from '@/superadmin/components/CustomDateRangePicker';
import DateRangeButton from '@/superadmin/components/DateRangeButton';
import { useState } from 'react';
import ActionButton from '../ActionButton';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '../Table';

export default function OrderHistory() {
    const [selectedStatus, setSelectedStatus] = useState('all');
    const tableData = [
        {
            id: 1,
            orderId: '#1028',
            orderFrom: 'Talabat',
            date: '27 Aug 2025',
            time: '5:00 PM',
            customerName: 'John Doe',
            customerPhone: '+965 9988 7766',
            payment: 'Card',
            amount: '12.500',
            currency: 'KWD',
            status: 'Completed',
        },
        {
            id: 2,
            orderId: 'DE1026',
            orderFrom: 'Delivery',
            date: '26 Aug 2025',
            time: '2:30 PM',
            customerName: '--',
            customerPhone: '--',
            payment: 'Cash',
            amount: '15.375',
            currency: 'KWD',
            status: 'Completed',
        },
        {
            id: 3,
            orderId: 'DE1026',
            orderFrom: 'Delivery',
            date: '25 Aug 2025',
            time: '9:00 AM',
            customerName: 'Sarah Smith',
            customerPhone: '+965 9988 7766',
            payment: 'Card',
            amount: '20.250',
            currency: 'KWD',
            status: 'Completed',
        },
        {
            id: 4,
            orderId: 'TA1025',
            orderFrom: 'Take-Away',
            date: '24 Aug 2025',
            time: '3:45 PM',
            customerName: 'Jake',
            customerPhone: '+965 9988 7766',
            payment: 'Card',
            amount: '8.750',
            currency: 'KWD',
            status: 'Cancelled',
        },
        {
            id: 5,
            orderId: 'DI1024',
            orderFrom: 'Dine-In',
            date: '23 Aug 2025',
            time: '1:15 PM',
            customerName: 'Walk-in Guest',
            customerPhone: '+965 9988 7766',
            payment: 'QR Code',
            amount: '30.500',
            currency: 'KWD',
            status: 'Refunded',
        },
    ];

    const statusVariantMap: Record<string, BadgeVariant> = {
        Completed: 'success', // Renders the green badge
        Cancelled: 'error', // Renders the red badge
        Refunded: 'warning', // Renders the orange/yellow badge
    };
    return (
        <div>
            {/**Header */}
            <div className="flex items-center justify-between">
                {/**Search */}
                <div className="w-1/3">
                    <Input
                        icon={searchIcon}
                        placeholder="Search by ID, Customer Name, or Table..."
                    />
                </div>
                {/**buttons */}
                <div className="flex gap-4">
                    <DateRangeButton>
                        <CustomDateRangePicker />
                    </DateRangeButton>
                    <CustomDropdown
                        label=""
                        options={[
                            {
                                label: (
                                    <span className="font-medium text-gray-700">
                                        Status: All
                                    </span>
                                ),
                                value: 'all',
                            },
                            { label: 'Active', value: 'active' },
                            { label: 'Inactive', value: 'inactive' },
                            { label: 'Draft', value: 'draft' },
                        ]}
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                        placeholder=""
                    />
                    <CustomDropdown
                        label=""
                        options={[
                            {
                                label: (
                                    <span className="font-medium text-gray-700">
                                        Status: All
                                    </span>
                                ),
                                value: 'all',
                            },
                            { label: 'Active', value: 'active' },
                            { label: 'Inactive', value: 'inactive' },
                            { label: 'Draft', value: 'draft' },
                        ]}
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                        placeholder=""
                    />
                    <IconButton>
                        <ExportIcon />
                        Export
                    </IconButton>
                </div>
            </div>
            {/**tables */}
            <div className="pt-12">
                <TableContainer>
                    <Table>
                        <TableHeader>
                            <TableHead>Order ID</TableHead>
                            <TableHead className="flex items-center gap-1">
                                Time
                                <span>
                                    <SelectorIcon />
                                </span>
                            </TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Payment</TableHead>
                            <TableHead>Total Amount</TableHead>
                            <TableHead className="flex items-center gap-1">
                                Status
                                <span>
                                    <SelectorIcon />
                                </span>
                            </TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {tableData.map((item) => (
                                <TableRow>
                                    <TableCell>
                                        <p className="text-sm font-medium text-gray-700">
                                            {item.orderId}
                                        </p>
                                        <p>{item.orderFrom}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p className="text-sm font-medium text-gray-700">
                                            {item.date}
                                        </p>
                                        <p>{item.time}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p className="text-sm font-medium text-gray-700">
                                            {item.customerName}
                                        </p>
                                        <p>{item.customerPhone}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p>{item.payment}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p className="text-sm font-medium text-gray-700">
                                            {item.amount}
                                        </p>
                                        <p>{item.currency}</p>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                statusVariantMap[item.status] ||
                                                'gray'
                                            }
                                            withDot={true}
                                            rounded="md"
                                        >
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="flex justify-end">
                                        <ActionButton>
                                            <Eye className="h-4 w-4 text-iconColor" />
                                        </ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
