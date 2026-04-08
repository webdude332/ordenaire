import AllRequests from '@/superadmin/components/approvalstabs/AllRequests';
import { Search } from 'lucide-react';
import { useState } from 'react';

type SubTabType =
    | 'allRequests'
    | 'newSubscriptions'
    | 'refunds'
    | 'chargeDiscounts';

export default function ApprovalQueue() {
    const [activeSubTab, setActiveSubTab] = useState<SubTabType>('allRequests');
    const [searchQuery, setSearchQuery] = useState('');

    const subTabs: { label: string; value: SubTabType; count?: number }[] = [
        { label: 'All Requests', value: 'allRequests', count: 10 },
        { label: 'New Subscriptions', value: 'newSubscriptions' },
        { label: 'Refunds', value: 'refunds' },
        { label: 'Charge Discounts', value: 'chargeDiscounts' },
    ];

    return (
        <div>
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pt-2 pb-4">
                <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1">
                    {subTabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveSubTab(tab.value)}
                            className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                                activeSubTab === tab.value
                                    ? 'border border-gray-200 bg-white text-gray-800 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {tab.label}
                            {tab.count !== undefined && (
                                <span
                                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                                        activeSubTab === tab.value
                                            ? 'bg-gray-100 text-gray-600'
                                            : 'bg-gray-100 text-gray-400'
                                    }`}
                                >
                                    {tab.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                <div className="relative w-80">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Request ID or Business..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 py-2 pr-4 pl-9 text-sm text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                </div>
            </div>

            <AllRequests search={searchQuery} activeTab={activeSubTab} />
        </div>
    );
}
