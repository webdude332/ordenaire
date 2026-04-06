import Modal from '@/superadmin/components/Modal';
import { Input, Label } from '@/superadmin/components/ui/FormElements';
import patternBg from '@shared/images/icons/patternBg.svg';
import { Plus } from 'lucide-react';
import { useState } from 'react';
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
    {
        group: 'Customers',
        events: ['customer.created', 'customer.updated'],
    },
    {
        group: 'Support / Tickets',
        events: ['ticket.created', 'ticket.status_changed'],
    },
];

interface AddWebhookProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: {
        url: string;
        description: string;
        events: string[];
    }) => void;
}

export default function AddWebhook({
    isOpen,
    onClose,
    onConfirm,
}: AddWebhookProps) {
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [events, setEvents] = useState<string[]>([]);

    const toggleEvent = (e: string) =>
        setEvents((prev) =>
            prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e],
        );

    const handleSubmit = () => {
        onConfirm({ url, description, events });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header */}
                {/* <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Plus className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add New Webhook
                    </h2>
                </div> */}
                <div className="mb-5">
                    <div className="relative mb-6 flex items-start gap-4">
                        <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                            <img
                                src={patternBg}
                                alt=""
                                className="max-w-none"
                                style={{
                                    transform: 'scale(1.1)',
                                    opacity: 0.7,
                                }}
                            />
                        </div>
                        <div>
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <Plus className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add New Webhook
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                    <p className="mb-4 text-sm font-semibold text-gray-900">
                        Configure a URL to receive real-time event
                        notifications.
                    </p>

                    {/* URL + Description */}
                    <div className="mb-1 grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Target URL
                            </Label>
                            <Input
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="e.g., https://api.yoursite.com/hooks/catch"
                            />
                            <p className="mt-1 text-xs text-gray-400">
                                We will send a POST request to this URL when
                                events occur.
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

                    {/* Event Subscriptions */}
                    <div className="mt-4">
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

            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Add Webhook
                </Button>
            </div>
        </Modal>
    );
}
