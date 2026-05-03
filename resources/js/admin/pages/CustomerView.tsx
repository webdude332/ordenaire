import Badge from '@/shared/sharedcomponents/ui/Badge';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '@/shared/sharedcomponents/ui/Table';
import { Link } from '@inertiajs/react';
import { ArrowLeft, MapPin, Pencil } from 'lucide-react';
import { useState } from 'react';
import EditContactModal from '../components/modals/EditContactModal';

export default function CustomerView() {
    const [isEditOpen, setIsEditOpen] = useState(false);

    const recentActivity = [
        {
            id: 1,
            date: 'Yesterday',
            orderId: '#9985',
            items: '2x Spicy Burger, 1x Fries',
            channel: 'POS',
            amount: '8.500 KWD',
        },
        {
            id: 2,
            date: '10 Dec 2025',
            orderId: '#9945',
            items: '1x Classic Cheeseburger, 2x Onion R',
            channel: 'Online Store',
            amount: '15.200 KWD',
        },
        {
            id: 3,
            date: '03 Sep 2025',
            orderId: '#9915',
            items: '3x Chicken Nuggets, 1x Side Salad',
            channel: 'Online Store',
            amount: '22.750 KWD',
        },
        {
            id: 4,
            date: '29 Aug 2025',
            orderId: '#9905',
            items: '1x Veggie Wrap, 1x Sweet Potato Fries',
            channel: 'Aggregator',
            amount: '30.100 KWD',
        },
    ];

    const savedAddresses = [
        {
            id: 1,
            type: 'Home',
            address: 'Block 4, Street 12, House 5, Salmiya',
        },
        { id: 2, type: 'Office', address: 'Olympia Tower, Floor 4, Office 12' },
        { id: 3, type: 'Other', address: 'Khiran Resort, Road 205, Villa 14' },
    ];

    return (
        <div className="flex flex-col gap-6">
            <div>
                {/* <h1 className="mb-4 text-2xl font-semibold text-gray-900">
                    Customer Information
                </h1> */}
                {/* <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <ArrowLeft className="h-4 w-4" /> Back to All Customers
                </button> */}
                <Link href="/admin/customers">
                    <IconButton>
                        <ArrowLeft className="h-4 w-4 text-iconColor" />
                        Back to All Customers
                    </IconButton>
                </Link>
            </div>

            {/* Profile Header */}
            <div className="flex items-start justify-between bg-white px-6 py-2">
                <div>
                    <div className="mb-1 flex items-center gap-3">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            John Abel
                        </h2>
                        <Badge variant="success" withDot rounded="md">
                            Regular
                        </Badge>
                    </div>
                    <p className="text-gray-500">+965 98765432</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                            Current status
                        </span>
                        <Badge variant="success" withDot rounded="md">
                            Synced
                        </Badge>
                    </div>
                    <button
                        onClick={() => setIsEditOpen(true)}
                        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        <Pencil className="h-4 w-4" /> Edit Profile
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <h3 className="text-lg font-semibold text-gray-900">Quick Stats</h3>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="grid grid-cols-4 gap-6 divide-x divide-gray-300">
                    <div>
                        <p className="text-sm text-gray-500">Total orders</p>
                        <p className="mt-1 text-xl font-semibold text-gray-900">
                            18 orders
                        </p>
                    </div>
                    <div className="pl-6">
                        <p className="text-sm text-gray-500">Lifetime spend</p>
                        <p className="mt-1 text-xl font-semibold text-gray-900">
                            247.300 KWD
                        </p>
                    </div>
                    <div className="pl-6">
                        <p className="text-sm text-gray-500">Last order</p>
                        <p className="mt-1 text-xl font-semibold text-gray-900">
                            2 days ago
                        </p>
                    </div>
                    <div className="pl-6">
                        <p className="text-sm text-gray-500">
                            Average order value
                        </p>
                        <p className="mt-1 text-xl font-semibold text-gray-900">
                            13.700 KWD
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-xl border border-gray-200 bg-white">
                <div className="border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Recent Activity
                    </h3>
                </div>
                <div className="p-0">
                    <TableContainer className="border-t-none rounded-t-none shadow-none">
                        <Table>
                            <TableHeader>
                                <TableHead>Date</TableHead>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Items Summary</TableHead>
                                <TableHead>Channel</TableHead>
                                <TableHead className="text-right">
                                    Amount
                                </TableHead>
                            </TableHeader>
                            <TableBody>
                                {recentActivity.map((activity) => (
                                    <TableRow key={activity.id}>
                                        <TableCell className="font-medium text-gray-900">
                                            {activity.date}
                                        </TableCell>
                                        <TableCell className="text-gray-600">
                                            {activity.orderId}
                                        </TableCell>
                                        <TableCell className="text-gray-600">
                                            {activity.items}
                                        </TableCell>
                                        <TableCell className="text-gray-600">
                                            {activity.channel}
                                        </TableCell>
                                        <TableCell className="text-right font-medium text-gray-900">
                                            {activity.amount}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            {/* Saved Addresses */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    Saved Addresses
                </h3>
                <div className="flex flex-col divide-y divide-gray-100 rounded-lg border border-gray-100">
                    {savedAddresses.map((addr) => (
                        <div
                            key={addr.id}
                            className="flex items-center justify-between p-4"
                        >
                            <div className="flex w-1/4 items-center gap-3">
                                <MapPin className="h-5 w-5 text-gray-400" />
                                <span className="font-medium text-gray-900">
                                    {addr.type}
                                </span>
                            </div>
                            <div className="w-1/2 text-gray-600">
                                {addr.address}
                            </div>
                            <div className="w-1/4 text-right">
                                <a
                                    href="#"
                                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                                >
                                    View on Map ↗
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <EditContactModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
            />
        </div>
    );
}
