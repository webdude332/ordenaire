import Trash from '@/shared/images/icons/delIcon.svg?react';
import search from '@/shared/images/icons/inputSearch.svg';
import Plus from '@/shared/images/icons/plus.svg?react';
import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input } from '@/shared/sharedcomponents/ui/FormElements';
import Pagination from '@/superadmin/components/Pagination';
import { Link } from '@inertiajs/react';
import { Pencil, User } from 'lucide-react'; // Added User icon here
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
type EmployeeFormData = any;
const SAMPLE_EMPLOYEE: EmployeeFormData = {
    name: 'John Doe',
    empId: 'EMP-001',
    role: 'Kitchen Operations',
    access: 'POS',
    status: 'Active',
};

export default function Employees() {
    // Filter States
    const [selectedRole, setSelectedRole] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedAccess, setSelectedAccess] = useState('all');

    // Mock Data (Added mock avatar URLs for a couple of users)
    const employeesData = [
        {
            id: 1,
            empId: 'EMP-001',
            name: 'John Doe',
            avatar: 'https://i.pravatar.cc/150?img=11',
            role: 'Kitchen Operations',
            access: 'POS',
            status: 'Active',
        },
        {
            id: 2,
            empId: 'EMP-002',
            name: 'Jane Smith',
            avatar: 'https://i.pravatar.cc/150?img=5',
            role: 'Administrative & Management',
            access: 'Dashboard',
            status: 'On Leave',
        },
        {
            id: 3,
            empId: 'EMP-003',
            name: 'Mike Johnson',
            avatar: '', // Empty to test the fallback icon
            role: 'Service & Floor',
            access: 'POS',
            status: 'Suspended',
        },
        {
            id: 4,
            empId: 'EMP-004',
            name: 'Emily Davis',
            avatar: 'https://i.pravatar.cc/150?img=9',
            role: 'Kitchen Operations',
            access: 'Dashboard & POS',
            status: 'Terminated',
        },
    ];

    const statusVariantMap: Record<string, BadgeVariant> = {
        Active: 'success',
        Suspended: 'warning',
        'On Leave': 'blue',
        Terminated: 'gray',
    };

    return (
        <div>
            {/**Header */}
            <div className="flex justify-between">
                <div className="w-1/4">
                    <Input placeholder="Search Name, ID..." icon={search} />
                </div>
                <div className="flex gap-4">
                    <CustomDropdown
                        label=""
                        options={[
                            {
                                label: (
                                    <span className="font-medium text-gray-700">
                                        Job Role: All
                                    </span>
                                ),
                                value: 'all',
                            },
                            {
                                label: 'Administrative & Management',
                                value: 'admin',
                            },
                            { label: 'Kitchen Operations', value: 'kitchen' },
                            { label: 'Service & Floor', value: 'service' },
                        ]}
                        value={selectedRole}
                        onChange={setSelectedRole}
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
                            { label: 'Suspended', value: 'suspended' },
                            { label: 'On Leave', value: 'on leave' },
                            { label: 'Terminated', value: 'terminated' },
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
                                        Access: All
                                    </span>
                                ),
                                value: 'all',
                            },
                            { label: 'Dashboard', value: 'dashboard' },
                            { label: 'POS', value: 'pos' },
                        ]}
                        value={selectedAccess}
                        onChange={setSelectedAccess}
                        placeholder=""
                    />

                    <Link href="/admin/addemployee">
                        <Button className="py-2.5">
                            <Plus />
                            Add Employee
                        </Button>
                    </Link>
                </div>
            </div>

            {/**Table */}
            <div className="pt-12">
                <TableContainer>
                    <Table>
                        <TableHeader>
                            <TableHead>Employee</TableHead>
                            <TableHead>Job Role</TableHead>
                            <TableHead>Access</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {employeesData.map((employee) => (
                                <TableRow key={employee.id}>
                                    <TableCell>
                                        {/* Added Avatar layout here */}
                                        <div className="flex items-center gap-3">
                                            {employee.avatar ? (
                                                <img
                                                    src={employee.avatar}
                                                    alt={employee.name}
                                                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                                                    <User className="h-5 w-5 text-gray-400" />
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-medium text-gray-800">
                                                    {employee.name}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {employee.empId}
                                                </p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-medium text-gray-800">
                                        {employee.role}
                                    </TableCell>
                                    <TableCell className="font-medium text-gray-800">
                                        {employee.access}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                statusVariantMap[
                                                    employee.status
                                                ] || 'gray'
                                            }
                                            withDot={true}
                                            rounded="md"
                                        >
                                            {employee.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        <Link href="/admin/editemployee">
                                            <ActionButton>
                                                <Pencil className="h-4 w-4 text-iconColor" />
                                            </ActionButton>
                                        </Link>
                                        <ActionButton>
                                            <Trash className="h-4 w-4 text-iconColor" />
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
