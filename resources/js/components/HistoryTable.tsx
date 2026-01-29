import React from 'react';
import ActionButton from '@/components/ui/ActionButton';
import StatusBadge from '@/components/ui/StatusBadge';
import RenderIcon from '@/components/ui/RenderIcon'

// Icons
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import DownloadBtn from '@/images/icons/downloadIcon.svg?react';
import Button from './ui/Button';
import CustomDateRangePicker from './CustomDateRangePicker';
import DateRangeButton from './DateRangeButton';
import { Input } from './ui/FormElements';
import { Search } from 'lucide-react';
import Pagination from './ui/Pagination';


interface HistoryReport {
    title: string;
    tenant: string;
    sentOn: string;
    recipients: string;
    status: string;
}

interface Props {
    data: HistoryReport[];
    onErrorDetails: () => void; // Function to open the Error Modal
}

export default function HistoryTable({ data, onErrorDetails }: Props) {
    return (
        <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-6 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">History</h2>
                <div className='flex gap-4'>
                    <Input
                    icon={Search}
                    placeholder='Search by Tenant Name'
                    className=''
                    />
                    {/**error */}
                    <DateRangeButton> 
                        <CustomDateRangePicker />
                    </DateRangeButton>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F9F7FA]">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Report Title</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Tenant</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Sent On</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Recipients</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">
                                <div className="flex cursor-pointer items-center gap-1">Status <RenderIcon icon={SelectorIcon} className="h-4 w-4 text-[#B5B0BA]" /></div>
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {data.map((item, idx) => (
                            <tr key={idx} className="transition-colors hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{item.title}</td>
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{item.tenant}</td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-900">{item.sentOn.split(' 2025')[0]} 2025</span>
                                        <span className="font-medium text-gray-500">{item.sentOn.split(' 2025')[1]}</span>
                                    </div>
                                </td>
                                <td className="max-w-xs truncate px-6 py-4 text-sm text-gray-500">{item.recipients}</td>
                                <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={item.status} /></td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                    {item.status === 'Failed' ? (
                                        <div className="flex items-center gap-2">
                                            <ActionButton onClick={onErrorDetails}>View Error</ActionButton>
                                            {/* Logic for Retry was empty in original, keeping it empty here */}
                                            <ActionButton onClick={() => {}}>Retry</ActionButton>
                                        </div>
                                    ) : (
                                        <ActionButton><DownloadBtn className="h-4 w-4 text-iconColor" />Download</ActionButton>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination />
        </div>
    );
}