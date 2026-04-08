import ViewChargeDiscount from '@/superadmin/components/Modals/ViewChargeDiscount';
import ViewRefundModal from '@/superadmin/components/Modals/ViewRefundModal';
import ViewSubscription from '@/superadmin/components/Modals/ViewSubscription';
import CircleTick from '@shared/images/icons/circleTick.svg?react';
import CircleX from '@shared/images/icons/circleX.svg?react';
import Eye from '@shared/images/icons/eyeIcon.svg?react';
import { useState } from 'react';
import DateRangeButton from '../DateRangeButton';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../OuterTable';
import ActionButton from '../ui/ActionButton';
import CustomDropdown from '../ui/CustomDropdown';

type RequestType = 'New Subscription' | 'Refund' | 'Charge Discount';

interface ApprovalRequest {
    id: number;
    reqId: string;
    timeAgo: string;
    requesterName: string;
    requesterRole: string;
    businessName: string;
    bizId: string;
    requestType: RequestType;
    requestSubType: string;
    valueLabel: string;
    valueAmount: string;
}

const ALL_REQUESTS: ApprovalRequest[] = [
    {
        id: 1,
        reqId: 'REQ-20104',
        timeAgo: '30m ago',
        requesterName: 'Mason Rivera',
        requesterRole: 'Sales Rep',
        businessName: 'KFC - Dubai',
        bizId: 'BIZ-2050',
        requestType: 'New Subscription',
        requestSubType: 'Plan: Pro Yearly',
        valueLabel: '50% OFF',
        valueAmount: 'AED 1,000',
    },
    {
        id: 2,
        reqId: 'REQ-20704',
        timeAgo: '2h ago',
        requesterName: 'Sarah Smith',
        requesterRole: 'Support Lead',
        businessName: 'Starbucks - Seattle',
        bizId: 'BIZ-2051',
        requestType: 'Refund',
        requestSubType: '#INV-0025',
        valueLabel: '- AED 450.00',
        valueAmount: 'Full Refund',
    },
    {
        id: 3,
        reqId: 'REQ-20105',
        timeAgo: '1d ago',
        requesterName: 'Lucas Bennett',
        requesterRole: 'Acct Mgr',
        businessName: 'Apple - Cupertino',
        bizId: 'BIZ-2052',
        requestType: 'Charge Discount',
        requestSubType: 'Item: Extra User',
        valueLabel: '- KWD 50.00',
        valueAmount: 'Manual Adjustment',
    },
];

const STATUS_OPTIONS = [
    { label: 'Status: All', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'Approved', value: 'approved' },
    { label: 'Rejected', value: 'rejected' },
];

interface AllRequestsProps {
    search?: string;
    activeTab?:
        | 'allRequests'
        | 'newSubscriptions'
        | 'refunds'
        | 'chargeDiscounts';
}

export default function AllRequests({
    search = '',
    activeTab = 'allRequests',
}: AllRequestsProps) {
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedRequest, setSelectedRequest] =
        useState<ApprovalRequest | null>(null);
    const [isRefundOpen, setIsRefundOpen] = useState(false);
    const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
    const [isChargeDiscountOpen, setIsChargeDiscountOpen] = useState(false);

    const handleView = (req: ApprovalRequest) => {
        setSelectedRequest(req);
        if (req.requestType === 'Refund') setIsRefundOpen(true);
        else if (req.requestType === 'New Subscription')
            setIsSubscriptionOpen(true);
        else if (req.requestType === 'Charge Discount')
            setIsChargeDiscountOpen(true);
    };

    const closeAll = () => {
        setIsRefundOpen(false);
        setIsSubscriptionOpen(false);
        setIsChargeDiscountOpen(false);
        setSelectedRequest(null);
    };

    const filtered = ALL_REQUESTS.filter((r) => {
        const matchesSearch =
            r.reqId.toLowerCase().includes(search.toLowerCase()) ||
            r.businessName.toLowerCase().includes(search.toLowerCase());

        const matchesTab =
            activeTab === 'allRequests' ||
            (activeTab === 'newSubscriptions' &&
                r.requestType === 'New Subscription') ||
            (activeTab === 'refunds' && r.requestType === 'Refund') ||
            (activeTab === 'chargeDiscounts' &&
                r.requestType === 'Charge Discount');

        return matchesSearch && matchesTab;
    });

    return (
        <div>
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="text-base font-semibold text-gray-900">
                        Pending Queue
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="w-44">
                            <CustomDropdown
                                label=""
                                options={STATUS_OPTIONS}
                                value={statusFilter}
                                onChange={setStatusFilter}
                                placeholder="Status: Pending"
                            />
                        </div>
                        <DateRangeButton />
                    </div>
                </div>

                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Request Info
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Requester
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Business Name
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Request Type
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Value / Impact
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {filtered.map((req) => (
                                <TableRow key={req.id}>
                                    <TableCell>
                                        <p className="font-medium text-gray-900">
                                            {req.reqId}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {req.timeAgo}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p className="font-medium text-gray-900">
                                            {req.requesterName}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {req.requesterRole}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p className="font-medium text-gray-900">
                                            {req.businessName}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {req.bizId}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p className="font-medium text-gray-900">
                                            {req.requestType}
                                        </p>
                                        {req.requestType === 'Refund' ? (
                                            <a
                                                href="#"
                                                className="text-xs underline"
                                            >
                                                {req.requestSubType}
                                            </a>
                                        ) : (
                                            <p className="text-xs text-gray-400">
                                                {req.requestSubType}
                                            </p>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={`font-medium ${req.valueLabel.startsWith('-') ? 'text-[#B45309]' : 'text-gray-900'}`}
                                        >
                                            {req.valueLabel}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {req.valueAmount}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center justify-end gap-2">
                                            <ActionButton className="!bg-primary">
                                                <CircleTick className="h-4 w-4" />
                                            </ActionButton>
                                            <ActionButton className="!bg-[#D97706]">
                                                <CircleX className="h-4 w-4" />
                                            </ActionButton>
                                            <ActionButton
                                                onClick={() => handleView(req)}
                                            >
                                                <Eye className="h-4 w-4 text-iconColor" />
                                            </ActionButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
            </div>

            <ViewRefundModal
                isOpen={isRefundOpen}
                onClose={closeAll}
                onApprove={closeAll}
                onReject={closeAll}
                request={selectedRequest}
            />
            <ViewSubscription
                isOpen={isSubscriptionOpen}
                onClose={closeAll}
                onApprove={closeAll}
                onReject={closeAll}
                request={selectedRequest}
            />
            <ViewChargeDiscount
                isOpen={isChargeDiscountOpen}
                onClose={closeAll}
                onApprove={closeAll}
                onReject={closeAll}
                request={selectedRequest}
            />
        </div>
    );
}
