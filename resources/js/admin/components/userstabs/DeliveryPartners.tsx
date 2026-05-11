import search from '@/shared/images/icons/inputSearch.svg';
import Plus from '@/shared/images/icons/plus.svg?react';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input } from '@/shared/sharedcomponents/ui/FormElements';
import Pagination from '@/superadmin/components/Pagination';
import { ArrowUpDown, Eye, Pencil } from 'lucide-react';
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

const deliveryData = [
    {
        id: 1,
        empId: 'STF-0001',
        name: 'Leon Price',
        avatar: 'https://i.pravatar.cc/150?img=11',
        deliveries: 12,
        wallet: '12.500',
    },
    {
        id: 2,
        empId: 'STF-0002',
        name: 'Baker Finch',
        avatar: 'https://i.pravatar.cc/150?img=12',
        deliveries: 18,
        wallet: '85.000',
    },
    {
        id: 3,
        empId: 'STF-0009',
        name: 'Clyde Woods',
        avatar: '', // Fallback to icon
        deliveries: 0,
        wallet: '0.000',
    },
];

export default function DeliveryPartners() {
    return (
        <div className="space-y-6">
            {/** Header */}
            <div className="flex items-center justify-between">
                <div className="w-1/3 max-w-sm">
                    <Input placeholder="Search Name, ID..." icon={search} />
                </div>
                <div>
                    <Button className="border-none bg-[#6DC214] text-white hover:bg-[#5da611]">
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Driver
                    </Button>
                </div>
            </div>

            {/** Table Section */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-5">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Delivery employees
                    </h2>
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                        48 users
                    </span>
                </div>

                <TableContainer className="rounded-none border-none shadow-none">
                    <Table>
                        <TableHeader className="bg-gray-50/50">
                            <TableHead className="w-1/3">Name</TableHead>
                            <TableHead>Today's deliveries</TableHead>
                            <TableHead>
                                <div className="flex cursor-pointer items-center gap-1">
                                    Cash Wallet (Synced w/ POS)
                                    <ArrowUpDown className="h-3 w-3 text-gray-400" />
                                </div>
                            </TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {deliveryData.map((driver) => (
                                <TableRow key={driver.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            {driver.avatar ? (
                                                <img
                                                    src={driver.avatar}
                                                    alt={driver.name}
                                                    className="h-10 w-10 shrink-0 rounded-full border border-gray-100 object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-400">
                                                    CW
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {driver.name}
                                                </p>
                                                <p className="text-sm text-gray-400">
                                                    {driver.empId}
                                                </p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-medium text-gray-700">
                                        {driver.deliveries} Deliveries
                                    </TableCell>
                                    <TableCell>
                                        <p className="font-medium text-gray-900">
                                            {driver.wallet}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            KWD
                                        </p>
                                    </TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        <ActionButton>
                                            <Eye className="h-4 w-4 text-gray-500" />
                                        </ActionButton>
                                        <ActionButton>
                                            <Pencil className="h-4 w-4 text-gray-500" />
                                        </ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Pagination />
                </TableContainer>
            </div>
        </div>
    );
}
