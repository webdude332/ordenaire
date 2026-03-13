import Modal from '@/components/Modal';
import { Input, Label } from '@/components/ui/FormElements';
import { Copy, Eye, EyeOff, Pencil, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Event subscription groups ────────────────────────────────────────────────

const EVENT_GROUPS = [
    {
        group: 'Orders & Sales',
        events: ['order.created', 'order.paid', 'order.cancelled'],
    },
    {
        group: 'Inventory & Products',
        events: ['inventory.low_stock', 'product.updated'],
    },
    { group: 'Customers', events: ['customer.created', 'customer.updated'] },
    {
        group: 'Support / Tickets',
        events: ['ticket.created', 'ticket.status_changed'],
    },
];

interface WebhookItem {
    id: number;
    name: string;
    endpoint: string;
    triggers: string;
    status: string;
    statusLabel: string;
    lastPing: string;
}

interface EditWebhookProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    onDelete: () => void;
    webhook: WebhookItem | null;
}

export default function EditWebhook({
    isOpen,
    onClose,
    onConfirm,
    onDelete,
    webhook,
}: EditWebhookProps) {
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [signingSecret, setSigningSecret] = useState('whsec_89234_live');
    const [showSecret, setShowSecret] = useState(false);
    const [events, setEvents] = useState<string[]>([
        'order.paid',
        'order.cancelled',
        'inventory.low_stock',
    ]);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (webhook) {
            setUrl(webhook.endpoint);
            setDescription(webhook.name);
            const triggerList = webhook.triggers
                .split(', ')
                .map((t) => t.trim().toLowerCase().replace('.', '.'));
            setEvents(triggerList);
        }
    }, [webhook]);

    const toggleEvent = (e: string) =>
        setEvents((prev) =>
            prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e],
        );

    const handleCopy = () => {
        navigator.clipboard.writeText(signingSecret).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleRollKey = () => {
        setSigningSecret(
            `whsec_${Math.random().toString(36).slice(2, 10)}_live`,
        );
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Pencil className="h-4 w-4 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Edit Webhook
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                    <p className="mb-4 text-sm font-semibold text-gray-900">
                        Configure a URL to receive real-time event
                        notifications.
                    </p>

                    {/* URL + Description */}
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Target URL
                            </Label>
                            <Input
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://api.yoursite.com/hooks/catch"
                            />
                            <p className="mt-1 text-xs text-gray-400">
                                Note: Changing the URL will reset the health
                                score to 100%.
                            </p>
                        </div>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Description
                            </Label>
                            <Input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="e.g., ERP Order Sync"
                            />
                            <p className="mt-1 text-xs text-gray-400">
                                Helps identify this webhook in the dashboard.
                            </p>
                        </div>
                    </div>

                    {/* Signing Secret */}
                    <div className="mb-4">
                        <Label className="mb-1.5 text-sm font-medium text-gray-700">
                            Signing Secret
                        </Label>
                        <div className="flex items-center gap-2">
                            <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5">
                                <input
                                    type={showSecret ? 'text' : 'password'}
                                    value={signingSecret}
                                    onChange={(e) =>
                                        setSigningSecret(e.target.value)
                                    }
                                    className="flex-1 text-sm text-gray-900 outline-none"
                                />
                                <button
                                    onClick={() => setShowSecret((s) => !s)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    {showSecret ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                                <div className="h-4 w-px bg-gray-200" />
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-800"
                                >
                                    <Copy className="h-3.5 w-3.5" />
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                            <button
                                onClick={handleRollKey}
                                className="flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                <RefreshCw className="h-3.5 w-3.5" />
                                Roll Key
                            </button>
                        </div>
                    </div>

                    {/* Event Subscriptions */}
                    <div>
                        <p className="mb-3 text-sm font-semibold text-gray-900">
                            Event Subscriptions
                        </p>
                        <div className="rounded-xl border border-gray-200">
                            {EVENT_GROUPS.map((grp, gi) => (
                                <div
                                    key={grp.group}
                                    className={`p-4 ${gi < EVENT_GROUPS.length - 1 ? 'border-b border-gray-100' : ''}`}
                                >
                                    <p className="mb-2.5 text-sm font-semibold text-gray-900">
                                        {grp.group}
                                    </p>
                                    <div className="flex flex-wrap gap-6">
                                        {grp.events.map((ev) => (
                                            <label
                                                key={ev}
                                                className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={events.includes(
                                                        ev,
                                                    )}
                                                    onChange={() =>
                                                        toggleEvent(ev)
                                                    }
                                                    className="peer sr-only"
                                                />
                                                <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white transition-all peer-checked:border-[#79B800] peer-checked:bg-[#79B800]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-3 w-3 text-white"
                                                        viewBox="0 0 12 12"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M2 6l3 3 5-5" />
                                                    </svg>
                                                </div>
                                                {ev}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer — 3 buttons: Cancel left, Delete + Save right */}
            <div className="flex items-center justify-between border-t border-gray-200 px-6 py-5">
                <button
                    onClick={onClose}
                    className="text-sm text-gray-500 hover:text-gray-700"
                >
                    Cancel
                </button>
                <div className="flex gap-3">
                    <IconButton onClick={onDelete}>Delete Webhook</IconButton>
                    <Button onClick={onConfirm}>Save Changes</Button>
                </div>
            </div>
        </Modal>
    );
}
