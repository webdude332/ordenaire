import React from 'react';
import ActionButton from '@/components/ui/ActionButton';
import StatusBadge from '@/components/ui/StatusBadge';
import RunBtn from '@/images/icons/runNow.svg?react';
import PencilBtn from '@/images/icons/pencilIcon.svg?react';
import DelBtn from '@/images/icons/delIcon.svg?react';


interface Report {
    title: string;
    tenant: string;
    frequency: string;
    nextRun: string;
    status: string;
}

interface Props {
    data: Report[];
    onRun: (title: string) => void;
    onEdit: (title: string) => void;
    onDelete: (title: string) => void;
}

export default function UpcomingTable({ data, onRun, onEdit, onDelete }: Props) {
    return (
        <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col items-center justify-between gap-4 border-b border-gray-200 p-6 md:flex-row">
                <h2 className="text-lg font-bold text-gray-900">Upcoming Scheduled Reports</h2>
                {/* Search Bar Logic Here... */}
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F9F7FA]">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Report Title</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Tenant</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Frequency</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Next Run</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {data.map((item, idx) => (
                            <tr key={idx} className="transition-colors hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{item.title}</td>
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{item.tenant}</td>
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{item.frequency}</td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-900">{item.nextRun.split(' 2025')[0]} 2025</span>
                                        <span className="font-medium text-gray-500">{item.nextRun.split(' 2025')[1]}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={item.status} /></td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <ActionButton onClick={() => onRun(item.title)}><RunBtn className="h-4 w-4 text-iconColor" />Run Now</ActionButton>
                                        <ActionButton onClick={() => onEdit(item.title)}><PencilBtn className="h-4 w-4 text-iconColor" /></ActionButton>
                                        <ActionButton onClick={() => onDelete(item.title)}><DelBtn className="h-4 w-4 text-iconColor" /></ActionButton>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}