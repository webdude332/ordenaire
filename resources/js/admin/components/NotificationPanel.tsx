import { useState } from 'react';

interface Notification {
    id: number;
    type: 'maintenance' | 'feature' | 'alert' | 'security';
    title: string;
    desc: string;
    actions: string[];
}

const NOTIFICATIONS: Notification[] = [
    {
        id: 1,
        type: 'maintenance',
        title: 'Scheduled Maintenance: Sept 15',
        desc: 'System will be offline from 2:00 AM to 4:00 AM KSA for security patching. Online ordering will be temporarily disabled.',
        actions: ['Dismiss'],
    },
    {
        id: 2,
        type: 'feature',
        title: 'New Feature: Loyalty Program',
        desc: 'You can now enable the Loyalty Program for your customers. Increase retention by up to 20%.',
        actions: ['Dismiss'],
    },
    {
        id: 3,
        type: 'alert',
        title: 'Low Stock Alert',
        desc: 'Low Stock: "Spicy Noodles" is down to 5 units.',
        actions: ['Dismiss', 'View Inventory'],
    },
    {
        id: 4,
        type: 'alert',
        title: 'Out of Stock Alert',
        desc: 'Out of Stock: "Fresh Prawns" is sold out. Item has been disabled on the menu.',
        actions: ['Dismiss', 'View Inventory'],
    },
    {
        id: 5,
        type: 'security',
        title: 'New Staff Login',
        desc: 'New Login: Manager "Omar Ali" logged in from a new device.',
        actions: ['Verify Session', 'Unrecognized User?'],
    },
];

function NotifIcon({ type }: { type: Notification['type'] }) {
    if (type === 'maintenance')
        return (
            <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        );
    if (type === 'feature')
        return (
            <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
            </svg>
        );
    if (type === 'alert')
        return (
            <svg
                className="h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
            </svg>
        );
    return (
        <svg
            className="h-5 w-5 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
        </svg>
    );
}

function notifIconBg(type: Notification['type']) {
    if (type === 'alert') return 'bg-red-50';
    if (type === 'security') return 'bg-orange-50';
    return 'bg-gray-100';
}

interface NotificationPanelProps {
    open: boolean;
    onClose: () => void;
}

export default function NotificationPanel({
    open,
    onClose,
}: NotificationPanelProps) {
    const [dismissed, setDismissed] = useState<number[]>([]);

    const visible = NOTIFICATIONS.filter((n) => !dismissed.includes(n.id));

    return (
        <>
            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 z-30 bg-black/20"
                    onClick={onClose}
                />
            )}

            {/* Slide-out panel */}
            <div
                className={`fixed top-0 right-0 z-40 flex h-full w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50">
                            <svg
                                className="h-4 w-4 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </div>
                        <h2 className="text-base font-semibold text-gray-900">
                            Notifications
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Notifications list */}
                <div className="flex-1 space-y-3 overflow-y-auto p-4">
                    {visible.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                            <svg
                                className="mb-3 h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                            <p className="text-sm font-medium">
                                All caught up!
                            </p>
                            <p className="text-xs text-gray-400">
                                No new notifications
                            </p>
                        </div>
                    )}

                    {visible.map((notif) => (
                        <div
                            key={notif.id}
                            className="rounded-xl border border-gray-200 bg-white p-4"
                        >
                            <div className="mb-3 flex items-start gap-3">
                                <div
                                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${notifIconBg(notif.type)}`}
                                >
                                    <NotifIcon type={notif.type} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-gray-900">
                                        {notif.title}
                                    </p>
                                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                                        {notif.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 pl-12">
                                {notif.actions.map((action, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            if (action === 'Dismiss') {
                                                setDismissed((prev) => [
                                                    ...prev,
                                                    notif.id,
                                                ]);
                                            }
                                        }}
                                        className={`text-xs font-semibold transition-colors ${
                                            action === 'Dismiss'
                                                ? 'text-gray-500 hover:text-gray-700'
                                                : 'text-[#79B800] hover:text-[#65a30d]'
                                        }`}
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
