import ComposeTab from '@/components/communicationtabs/ComposeTab';
import DeliveryTab from '@/components/communicationtabs/DeliveryTab';
import ScheduleTab from '@/components/communicationtabs/ScheduleTab';
import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type SubTabType = 'compose' | 'schedule' | 'delivery';

// ─── Component ────────────────────────────────────────────────────────────────

export default function Announcements() {
    const [activeSubTab, setActiveSubTab] = useState<SubTabType>('compose');

    const subTabs: { label: string; value: SubTabType }[] = [
        { label: 'Compose', value: 'compose' },
        { label: 'Schedule', value: 'schedule' },
        { label: 'Delivery logs', value: 'delivery' },
    ];

    return (
        <div>
            {/* ── Sub-tab bar ──────────────────────────────────────────── */}
            <div className="mb-6 flex items-center gap-1 rounded-xl border border-borderColor bg-white p-1">
                {subTabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveSubTab(tab.value)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                            activeSubTab === tab.value
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* ── Tab content ──────────────────────────────────────────── */}
            {activeSubTab === 'compose' && <ComposeTab />}
            {activeSubTab === 'schedule' && <ScheduleTab />}
            {activeSubTab === 'delivery' && <DeliveryTab />}
        </div>
    );
}
