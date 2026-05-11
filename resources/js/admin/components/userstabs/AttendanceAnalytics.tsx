import search from '@/shared/images/icons/inputSearch.svg';
import { Input } from '@/shared/sharedcomponents/ui/FormElements';
import Pagination from '@/superadmin/components/Pagination';
import { Calendar, Download } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '../Table';

const attendanceData = [
    {
        id: 1,
        roleId: 'Manager • STF-0087',
        name: 'Noah Pierre',
        avatar: 'https://i.pravatar.cc/150?img=33',
        shifts: 22,
        present: 22,
        halfDay: 0,
        absent: 0,
        reliability: 100,
    },
    {
        id: 2,
        roleId: 'Head Chef • STF-0077',
        name: 'Drew Cano',
        avatar: 'https://i.pravatar.cc/150?img=11',
        shifts: 22,
        present: 21,
        halfDay: 1,
        absent: 0,
        reliability: 95,
    },
    {
        id: 3,
        roleId: 'Waitress • STF-0087',
        name: 'Orlando Diggs',
        avatar: 'https://i.pravatar.cc/150?img=68',
        shifts: 22,
        present: 18,
        halfDay: 1,
        absent: 0,
        reliability: 87,
    },
    {
        id: 4,
        roleId: 'Waitress • STF-0044',
        name: 'Bin Diggs',
        avatar: 'https://i.pravatar.cc/150?img=59',
        shifts: 22,
        present: 14,
        halfDay: 4,
        absent: 4,
        reliability: 63,
    },
];

// Helper to determine badge color based on percentage
const getReliabilityColor = (percent: number) => {
    if (percent >= 95) return 'text-[#20A144] bg-[#E8F8EC]'; // Green
    if (percent >= 80) return 'text-[#E17726] bg-[#FDF1E8]'; // Orange
    return 'text-[#D92D20] bg-[#FEECEB]'; // Red
};

export default function AttendanceAnalytics() {
    return (
        <div className="space-y-6">
            {/** Header */}
            <div className="flex items-center justify-between">
                <div className="w-1/3 max-w-sm">
                    <Input placeholder="Search Name, ID..." icon={search} />
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        Period: Feb 2026
                        <span className="ml-1 text-gray-400">▼</span>
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        <Download className="h-4 w-4 text-gray-400" />
                        Export as PDF
                        <span className="ml-1 text-gray-400">▼</span>
                    </button>
                </div>
            </div>

            {/** Table Section */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-5">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Monthly Attendance Summary
                    </h2>
                </div>

                <TableContainer className="rounded-none border-none shadow-none">
                    <Table>
                        <TableHeader className="bg-gray-50/50">
                            <TableHead className="w-1/3">
                                Employee Details
                            </TableHead>
                            <TableHead className="text-center">
                                Total Shifts
                            </TableHead>
                            <TableHead className="text-center">
                                Present
                            </TableHead>
                            <TableHead className="text-center">
                                Half-Day
                            </TableHead>
                            <TableHead className="text-center">
                                Absent
                            </TableHead>
                            <TableHead className="text-right">
                                Reliability %
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {attendanceData.map((employee) => (
                                <TableRow key={employee.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={employee.avatar}
                                                alt={employee.name}
                                                className="h-10 w-10 shrink-0 rounded-full border border-gray-100 object-cover"
                                            />
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {employee.name}
                                                </p>
                                                <div className="flex items-center gap-1 text-sm text-gray-400">
                                                    {employee.roleId}
                                                    <span className="cursor-pointer hover:text-gray-600">
                                                        {/* Small external link icon approximation */}
                                                        ↗
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center font-medium text-gray-700">
                                        {employee.shifts}
                                    </TableCell>
                                    <TableCell className="text-center font-medium text-gray-700">
                                        {employee.present}
                                    </TableCell>
                                    <TableCell className="text-center font-medium text-gray-700">
                                        {employee.halfDay}
                                    </TableCell>
                                    <TableCell className="text-center font-medium text-gray-700">
                                        {employee.absent}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <span
                                            className={`inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-semibold ${getReliabilityColor(employee.reliability)}`}
                                        >
                                            {employee.reliability}%
                                        </span>
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
