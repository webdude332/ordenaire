import Button from '@/shared/sharedcomponents/ui/Button';
import {
    ChevronDown,
    CreditCard,
    ExternalLink,
    FileText,
    Hourglass,
    Search,
} from 'lucide-react';

// --- MOCK DATA ---
const invoicesData = [
    {
        supplier: 'Al-Marai Co.',
        invoiceId: 'INV-2024-88',
        refNo: 'ORD-26-SUP-001',
        stockStatus: 'Received',
        date: '28 Feb 2025',
        dateSub: 'Due in 18 days',
        dateSubColor: 'text-gray-500',
        amount: '1,250.000 KWD',
        amountSub: '',
        paymentStatus: 'Unpaid',
        action: 'Pay Bill',
    },
    {
        supplier: 'Pack-It Solutions',
        invoiceId: 'INV-992-A',
        refNo: 'PO #404',
        stockStatus: 'Received',
        date: '12 Jan 2025',
        dateSub: 'Overdue by 5 days',
        dateSubColor: 'text-orange-500',
        amount: '450.000 KWD',
        amountSub: '',
        paymentStatus: 'Overdue',
        action: 'Pay Bill',
    },
    {
        supplier: 'Meat King Co.',
        invoiceId: 'INV-8821',
        refNo: 'PO #407',
        stockStatus: 'Received',
        date: '12 Jan 2025',
        dateSub: 'Due in 10 days',
        dateSubColor: 'text-gray-500',
        amount: '50.000 KWD',
        amountSub: 'Left of 150.000',
        paymentStatus: 'Partially Paid',
        action: 'Pay Bill',
    },
    {
        supplier: 'Fresh Veggies Ltd.',
        invoiceId: 'FV-2201',
        refNo: 'PO #403',
        stockStatus: 'Partial',
        date: '15 Feb 2025',
        dateSub: 'Due in 5 days',
        dateSubColor: 'text-gray-500',
        amount: '120.000 KWD',
        amountSub: '',
        paymentStatus: 'Draft',
        action: 'Review',
    },
    {
        supplier: 'Kuwait Flour Mills',
        invoiceId: 'INV-2024-55',
        refNo: 'PO #402',
        stockStatus: 'Received',
        date: 'Paid: 10 Jan 2025',
        dateSub: 'via Card',
        dateSubColor: 'text-gray-500',
        amount: '120.000 KWD',
        amountSub: '',
        paymentStatus: 'Settled',
        action: 'View',
    },
];

// Helper to get status pill styles based on text
const getPaymentStatusStyles = (status: string) => {
    switch (status) {
        case 'Unpaid':
            return 'bg-orange-50 text-orange-600 border-orange-200 marker-orange';
        case 'Overdue':
            return 'bg-red-50 text-red-600 border-red-200 marker-red';
        case 'Partially Paid':
            return 'bg-blue-50 text-blue-600 border-blue-200 marker-blue';
        case 'Settled':
            return 'bg-green-50 text-green-600 border-green-200 marker-green';
        case 'Draft':
        default:
            return 'bg-gray-50 text-gray-600 border-gray-200 marker-gray';
    }
};

const getStockStatusStyles = (status: string) => {
    switch (status) {
        case 'Received':
            return 'text-[#7AB621] marker-[#7AB621]';
        case 'Partial':
            return 'text-orange-500 marker-orange-500';
        default:
            return 'text-gray-500 marker-gray-500';
    }
};

export default function Payables() {
    return (
        <div className="w-full max-w-[1400px] py-6">
            {/* KPI Cards */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Outstanding Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-orange-500">
                            <CreditCard className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Total Payables (Outstanding)
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        12,450 KWD
                    </div>
                    <div className="text-sm text-gray-500">
                        Total unpaid invoices.
                    </div>
                </div>

                {/* Overdue Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-orange-500">
                            <Hourglass className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Overdue Bills
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        450.000 KWD
                    </div>
                    <div className="text-sm text-gray-500">
                        3 Invoices Overdue
                    </div>
                </div>

                {/* Pending Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-gray-600">
                            <FileText className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Pending Deliveries
                        </span>
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-900">
                        5 Orders
                    </div>
                    <div className="text-sm text-gray-500">
                        Expecting today/tomorrow.
                    </div>
                </div>
            </div>

            {/* Toolbar Row */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="relative w-[320px]">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Supplier or PO #..."
                        className="w-full rounded-lg border border-gray-200 py-2.5 pr-4 pl-10 text-sm transition-all outline-none placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621]"
                    />
                </div>

                <div className="flex items-center gap-4">
                    {/* Filter Toggles */}
                    <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
                        <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
                            All
                        </button>
                        <button className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors">
                            Active Orders
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[10px] font-bold text-gray-600">
                                05
                            </span>
                        </button>
                        <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
                            History
                        </button>
                    </div>

                    {/* Status Dropdown */}
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        Status: All{' '}
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>

                    {/* CTA Button */}
                    <Button className="!bg-[#7AB621] hover:!bg-[#6A9E1C]">
                        Create Purchase Order{' '}
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Invoices Table */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-5">
                    <h3 className="text-lg font-bold text-gray-900">
                        Invoices & Bills
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-gray-100 bg-white text-gray-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">
                                    Bill Details{' '}
                                    <ChevronDown className="inline h-3 w-3" />
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Ref / PO #
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Stock Status
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Due Date / Paid Date{' '}
                                    <ChevronDown className="inline h-3 w-3" />
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Amount{' '}
                                    <ChevronDown className="inline h-3 w-3" />
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Payment Status
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {invoicesData.map((invoice, index) => (
                                <tr
                                    key={index}
                                    className="transition-colors hover:bg-gray-50"
                                >
                                    {/* Bill Details */}
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">
                                            {invoice.supplier}
                                        </div>
                                        <div className="text-gray-400">
                                            {invoice.invoiceId}
                                        </div>
                                    </td>

                                    {/* Ref / PO # */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5 font-medium text-gray-900">
                                            {invoice.refNo}
                                            <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                                        </div>
                                    </td>

                                    {/* Stock Status */}
                                    <td className="px-6 py-4">
                                        <div
                                            className={`flex w-fit items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium ${getStockStatusStyles(invoice.stockStatus)}`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full bg-current`}
                                            ></span>
                                            {invoice.stockStatus}
                                        </div>
                                    </td>

                                    {/* Date */}
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">
                                            {invoice.date}
                                        </div>
                                        <div className={invoice.dateSubColor}>
                                            {invoice.dateSub}
                                        </div>
                                    </td>

                                    {/* Amount */}
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">
                                            {invoice.amount}
                                        </div>
                                        {invoice.amountSub && (
                                            <div className="text-gray-400">
                                                {invoice.amountSub}
                                            </div>
                                        )}
                                    </td>

                                    {/* Payment Status */}
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${getPaymentStatusStyles(invoice.paymentStatus)}`}
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80"></span>
                                            {invoice.paymentStatus}
                                        </span>
                                    </td>

                                    {/* Action */}
                                    <td className="px-6 py-4">
                                        <button className="rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                                            {invoice.action}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
