import Badge from '@/components/Badge';
import ActionButton from '@/components/ui/ActionButton';
import Button from '@/components/ui/Button';
import DelIcon from '@/images/icons/delIcon.svg?react';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import { Plus } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../OuterTable';
import Pagination from '../Pagination';
import IconButton from '../ui/IconButton';

// ─── Token data ───────────────────────────────────────────────────────────────

type TokenStatus = 'Active' | 'Revoked';
interface Token {
    id: number;
    keyName: string;
    connectedApp: string;
    permissions: string;
    lastActive: string;
    status: TokenStatus;
}

const TOKENS: Token[] = [
    {
        id: 1,
        keyName: 'Logistics_Connect_01',
        connectedApp: 'QuickPay',
        permissions: 'Read_Orders, Write_Status',
        lastActive: '10 mins ago',
        status: 'Active',
    },
    {
        id: 2,
        keyName: 'Marketing_Tool_Key',
        connectedApp: 'AdTrack360',
        permissions: 'Read_Customer_Data',
        lastActive: '2 days ago',
        status: 'Active',
    },
    {
        id: 3,
        keyName: 'Legacy_POS_Key',
        connectedApp: 'Internal System',
        permissions: 'Full_Admin_Access',
        lastActive: 'Never',
        status: 'Revoked',
    },
];

// ─── Webhook data ─────────────────────────────────────────────────────────────

type WebhookStatus = 'healthy' | 'failing';
interface Webhook {
    id: number;
    name: string;
    endpoint: string;
    triggers: string;
    status: WebhookStatus;
    statusLabel: string;
    lastPing: string;
}

const WEBHOOKS: Webhook[] = [
    {
        id: 1,
        name: 'ERP Order Sync',
        endpoint: 'https://api.quickpay.com/events',
        triggers: 'Order.Created, Order.Paid',
        status: 'healthy',
        statusLabel: '99.9%',
        lastPing: '11:30 AM',
    },
    {
        id: 2,
        name: 'Zapier Automations',
        endpoint: 'https://zapier.com/hooks/catch/123',
        triggers: 'User.Signup',
        status: 'failing',
        statusLabel: 'Failing',
        lastPing: '01:15 PM',
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ApiMgmt() {
    return (
        <div className="space-y-6">
            {/* ── External Access Tokens ────────────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="text-base font-semibold text-gray-900">
                        External Access Tokens
                    </h2>
                    <Button>
                        <Plus className="mr-1.5 h-4 w-4" />
                        Generate New Key
                    </Button>
                </div>
                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Key Name / ID
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Connected App
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Permissions (Scopes)
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Last Active <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {TOKENS.map((token) => (
                                <TableRow key={token.id}>
                                    <TableCell className="font-medium text-gray-900">
                                        {token.keyName}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {token.connectedApp}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {token.permissions}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {token.lastActive}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                token.status === 'Active'
                                                    ? 'success'
                                                    : 'error'
                                            }
                                            withDot
                                            rounded="md"
                                        >
                                            {token.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="flex justify-end">
                                        {token.status === 'Active' ? (
                                            <IconButton>Revoke</IconButton>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <IconButton>Restore</IconButton>
                                                <ActionButton>
                                                    <DelIcon className="h-4 w-4 text-gray-400" />
                                                </ActionButton>
                                            </div>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
                <Pagination />
            </div>

            {/* ── Event Subscriptions (Webhooks) ────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="text-base font-semibold text-gray-900">
                        Event Subscriptions (Webhooks)
                    </h2>
                    <Button>
                        <Plus className="mr-1.5 h-4 w-4" />
                        Add Webhook
                    </Button>
                </div>
                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Webhook Name / Endpoint
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Event Triggers
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Last Ping <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {WEBHOOKS.map((wh) => (
                                <TableRow key={wh.id}>
                                    <TableCell>
                                        <div className="font-medium text-gray-900">
                                            {wh.name}
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            {wh.endpoint}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {wh.triggers}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                wh.status === 'healthy'
                                                    ? 'success'
                                                    : 'error'
                                            }
                                            withDot
                                            rounded="md"
                                        >
                                            {wh.statusLabel}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {wh.lastPing}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center justify-end gap-2">
                                            <IconButton>Test</IconButton>
                                            <ActionButton>
                                                <PencilIcon className="h-4 w-4 text-gray-400" />
                                            </ActionButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
                <Pagination />
            </div>
        </div>
    );
}
