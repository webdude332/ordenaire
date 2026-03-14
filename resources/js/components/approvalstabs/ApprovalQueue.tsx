import AllRequests from '@/components/approvalstabs/AllRequests';
import ChargeDiscounts from '@/components/approvalstabs/ChargeDiscounts';
import NewSubscriptions from '@/components/approvalstabs/NewSubscriptions';
import Refunds from '@/components/approvalstabs/Refunds';
import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type SubTabType =
    | 'allRequests'
    | 'chargeDiscounts'
    | 'newSubscriptions'
    | 'refunds';

// ─── Component ────────────────────────────────────────────────────────────────

export default function ApprovalQueue() {
    const [activeSubTab, setActiveSubTab] = useState<SubTabType>('allRequests');

    const subTabs: { label: string; value: SubTabType }[] = [
        { label: 'All Requests', value: 'allRequests' },
        { label: 'New Subscriptions', value: 'newSubscriptions' },
        { label: 'Refunds', value: 'refunds' },
        { label: 'Charge Discounts', value: 'chargeDiscounts' },
    ];

    return (
        <div>
            {/* ── Sub-tab bar ──────────────────────────────────────────── */}
            <div className="mb-6 flex items-center gap-1 rounded-xl border border-borderColor bg-[#F9F7FA] p-1">
                {subTabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveSubTab(tab.value)}
                        className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                            activeSubTab === tab.value
                                ? 'bg-white text-gray-900'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* ── Tab content ──────────────────────────────────────────── */}
            {activeSubTab === 'allRequests' && <AllRequests />}
            {activeSubTab === 'newSubscriptions' && <NewSubscriptions />}
            {activeSubTab === 'refunds' && <Refunds />}
            {activeSubTab === 'chargeDiscounts' && <ChargeDiscounts />}
        </div>
    );
}
