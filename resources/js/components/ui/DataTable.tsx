
// ===== Multi-Tenancy & Franchise Table Component =====
import SelectorIcon from '@/images/icons/selectorIcon.svg?react'
interface OutletInfo {
    name: string;
    bizId: string;
    package: string;
    address: string;
    branchAdmin: string;
    phone: string;
    status: 'Active' | 'Inactive' | 'Pending';
}

interface MultiTenancyTableProps {
    outlets: OutletInfo[];
    onAddNewOutlet?: () => void;
    onViewOutlet?: (outlet: OutletInfo) => void;
}

export const MultiTenancyTable = ({
    outlets,
    onAddNewOutlet,
    onViewOutlet,
}: MultiTenancyTableProps) => {
    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-[#ECFDF3] text-[#067647] ring-[#ABEFC6]';
            case 'Inactive':
                return 'bg-gray-50 text-gray-700 ring-gray-600/20';
            case 'Pending':
                return 'bg-yellow-50 text-yellow-700 ring-yellow-600/20';
            default:
                return 'bg-gray-50 text-gray-700 ring-gray-600/20';
        }
    };

    return (
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900">
                    Multi-Tenancy & Franchise
                </h3>
                {onAddNewOutlet && (
                    <button
                        onClick={onAddNewOutlet}
                        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        <span className="text-lg">+</span>
                        Add New Outlet
                    </button>
                )}
            </div>

            {/* Table */}
            <table className="min-w-full divide-y divide-gray-100">
                <thead className="border-b border-gray-200 bg-[#F9F9FB]">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Outlet Info
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Package
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Address
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Branch Admin
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    {outlets.map((outlet, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="text-sm font-semibold text-gray-900">
                                    {outlet.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {outlet.bizId}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                                {outlet.package}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {outlet.address}
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">
                                    {outlet.branchAdmin}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {outlet.phone}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span
                                    className={`inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ring-1 ring-inset ${getStatusStyle(outlet.status)}`}
                                >
                                    {outlet.status === 'Active' && (
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    )}
                                    {outlet.status}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => onViewOutlet?.(outlet)}
                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Empty State */}
            {outlets.length === 0 && (
                <div className="py-12 text-center">
                    <p className="text-sm text-gray-500">No outlets found</p>
                </div>
            )}
        </div>
    );
};

// ===== Billing History Table Component =====

interface BillingRecord {
    invoiceId: string;
    date: string;
    time: string;
    amount: number;
    status: 'Paid' | 'Failed' | 'Pending';
    typeOfCharge: string;
    discount: number;
}

interface BillingHistoryTableProps {
    billingRecords: BillingRecord[];
    onViewPaymentOverview?: () => void;
    onViewInvoice?: (invoice: BillingRecord) => void;
    headerButton?: React.ReactNode;
}

export const BillingHistoryTable = ({
    billingRecords,
    onViewPaymentOverview,
    onViewInvoice,
    headerButton, // ← Add this
}: BillingHistoryTableProps) => {
    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Paid':
                return 'bg-[#ECFDF3] text-[#067647] ring-[#ABEFC6]';
            case 'Failed':
                return 'bg-[#FEF3F2] text-[#B42318] ring-[#FECDCA]';
            case 'Pending':
                return 'bg-yellow-50 text-yellow-700 ring-yellow-600/20';
            default:
                return 'bg-gray-50 text-gray-700 ring-gray-600/20';
        }
    };

    return (
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900">
                    Billing History
                </h3>
                {headerButton ||
                    (onViewPaymentOverview && (
                        <button
                            onClick={onViewPaymentOverview}
                            className="rounded-lg bg-[#8CDD05] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7ABD04]"
                        >
                            View Payment Overview
                        </button>
                    ))}
            </div>

            {/* Table */}
            <table className="min-w-full divide-y divide-gray-100">
                <thead className="border-b border-gray-200 bg-[#F9F9FB]">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Invoice ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 ">
                            <div className="flex items-center gap-1">
                                Amount <span><SelectorIcon className='w-3 h-3'/></span>
                            </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 flex items-center gap-1">
                            Status <span><SelectorIcon className='w-3 h-3'/></span>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Type of Charges
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Discount (KWD)
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    {billingRecords.map((record, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                {record.invoiceId}
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                    {record.date}
                                </div>
                                <div className="text-xs text-gray-400">
                                    {record.time}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                                {record.amount}
                            </td>
                            <td className="px-6 py-4">
                                <span
                                    className={`inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ring-1 ring-inset ${getStatusStyle(record.status)}`}
                                >
                                    {record.status === 'Paid' && (
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    )}
                                    {record.status === 'Failed' && (
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></span>
                                    )}
                                    {record.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {record.typeOfCharge}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {record.discount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Empty State */}
            {billingRecords.length === 0 && (
                <div className="py-12 text-center">
                    <p className="text-sm text-gray-500">
                        No billing records found
                    </p>
                </div>
            )}
        </div>
    );
};

// ===== Documents Table Component =====

interface DocumentInfo {
    documentName: string;
    fileStatus: 'Uploaded' | 'Not Uploaded';
    fileName?: string; // Only if uploaded
    expiryDate?: string; // Optional
    
}

interface DocumentsTableProps {
    documents: DocumentInfo[];
    onAddDocument?: () => void;
    onUpload?: (document: DocumentInfo) => void;
    onDownload?: (document: DocumentInfo) => void;
    onDelete?: (document: DocumentInfo) => void;
    headerButton?: React.ReactNode;
}
    import AddDocumentModal from "../Modals/AddDocumentModal";
    import DeleteModal from "@/components/DeleteModal";
    import ActionButton from "./ActionButton";
    import Upload from '@/images/icons/upload.svg?react'
    import DelIcon from '@/images/icons/delIcon.svg?react'
    import DownloadIcon from '@/images/icons/downloadIcon.svg?react'
    import {useState} from 'react'
export const DocumentsTable = ({
    documents,
    onAddDocument,
    onUpload,
    onDownload,
    onDelete,
    headerButton,
}: DocumentsTableProps) => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const handleAddDocument = (data: any)=>{
        setIsUploadModalOpen(true)
    }
    const handleDelete = ()=>{
        setIsDeleteModalOpen(true)
    }
    return (
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900">
                    Documents
                </h3>
{headerButton || (onAddDocument && (
                    <button
                        onClick={handleAddDocument}
                        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        <span className="text-lg">+</span>
                        Add other document
                    </button>
                ))}
            </div>

            {/* Table */}
            <table className="min-w-full divide-y divide-gray-100">
                <thead className="border-b border-gray-200 bg-[#F9F9FB]">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            Document Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                            File Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 flex items-center gap-1">
                            Expiry Date <span><SelectorIcon className='w-3 h-3'/></span>
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    {documents.map((doc, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                {doc.documentName}
                            </td>
                            <td className="px-6 py-4 text-sm">
                                {doc.fileStatus === 'Uploaded' &&
                                doc.fileName ? (
                                    <span className="inline-flex items-center gap-2 rounded-lg bg-[#ECFDF3] px-2 py-1 text-xs font-medium text-[#067647] border border-green-200">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#17B26A]"></span>
                                        {doc.fileName}
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-1.5 py-1 rounded-lg border border-gray-200">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#9C94A3]"></span>
                                        Not Uploaded
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {doc.expiryDate || '-'}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center justify-end gap-2">
                                    {doc.fileStatus === 'Uploaded' ? (
                                        <>
                                            <ActionButton>
                                             <DownloadIcon/>
                                             Download
                                            </ActionButton>
                                            <ActionButton onClick={()=>setIsDeleteModalOpen(true)}>
                                             <DelIcon/>
                                             Delete
                                            </ActionButton>
                                        </>
                                    ) : (

                                        <ActionButton onClick={()=>setIsUploadModalOpen(true)}>
                                            <Upload/>
                                            Upload
                                        </ActionButton>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Empty State */}
            {documents.length === 0 && (
                <div className="py-12 text-center">
                    <p className="text-sm text-gray-500">No documents found</p>
                </div>
            )}
            <AddDocumentModal
                isOpen={isUploadModalOpen}
                onClose={() => setIsUploadModalOpen(false)}
                onAdd={handleAddDocument}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onRetry={handleDelete}
            />
        </div>
    );
};

// ===== Add-ons Table Component (Updated from your code) =====

interface AddonInfo {
    name: string;
    status: 'Enabled' | 'Trial' | 'Disabled';
    pricing: string;
    installDate: string;
    installTime: string;
    endSub: string;
    endSubTime: string;
}

interface AddonsTableProps {
    addons: AddonInfo[];
    onAddAddon?: () => void;
    headerButton?: React.ReactNode; // Custom button
}

export const AddonsTable = ({
    addons,
    onAddAddon,
    headerButton,
}: AddonsTableProps) => {
    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Enabled':
                return 'bg-[#ECFDF3] text-[#067647] ring-[#ABEFC6] rounded-xl';
            case 'Trial':
                return 'bg-blue-50 text-blue-700 ring-blue-600/20 rounded-xl';
            case 'Disabled':
                return 'bg-[#FEF3F2] text-[#B42318] ring-[#FECDCA] rounded-xl';
            default:
                return 'bg-gray-50 text-gray-700 ring-gray-600/20';
        }
    };

    return (
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900">
                    Add-ons & Marketplace Apps
                </h3>
                {headerButton ||
                    (onAddAddon && (
                        <button
                            onClick={onAddAddon}
                            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            <span className="text-lg">+</span>
                            Add New Add-on
                        </button>
                    ))}
            </div>
            <table className="min-w-full divide-y divide-gray-100">
                <thead className="border-b border-[#E8E6EA] bg-[#F9F9FB]">
                    <tr>
                        {[
                            'Add-on Name',
                            'Status',
                            'Pricing',
                            'Install Date',
                            'End of Subscription',
                        ].map((head) => (
<th
    key={head}
    className="px-6 py-3 text-left text-xs font-semibold text-gray-500"
>
    {/* Use || (OR) to check if the head matches EITHER string */}
    {head === 'Install Date' || head === 'End of Subscription' ? (
        <div className="flex items-center gap-1.5">
            {head}
            <SelectorIcon className='w-3 h-3'/>
        </div>
    ) : (
        head
    )}
</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    {addons.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                {row.name}
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span
                                    className={`inline-flex items-center rounded px-2 py-1 text-xs font-medium ring-1 ring-inset ${getStatusStyle(row.status)}`}
                                >
                                    {row.status === 'Enabled' && (
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    )}
                                    {row.status === 'Disabled' && (
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></span>
                                    )}
                                    {row.status === 'Trial' && (
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                                    )}
                                    {row.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-700">
                                {row.pricing}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                                {row.installDate} <br />
                                <span className="text-xs text-gray-400">
                                    {row.installTime}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                                {row.endSub} <br />
                                <span className="text-xs text-gray-400">
                                    {row.endSubTime}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Empty State */}
            {addons.length === 0 && (
                <div className="py-12 text-center">
                    <p className="text-sm text-gray-500">No add-ons found</p>
                </div>
            )}
        </div>
    );
};
