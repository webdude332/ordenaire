import adDelivery from '@/shared/images/icons/adDelivery.svg';
import adFinance from '@/shared/images/icons/adFinance.svg';
import adKitchen from '@/shared/images/icons/adKitchen.svg';
import adMgmt from '@/shared/images/icons/adMgmt.svg';
import adNewUsers from '@/shared/images/icons/adNewUsers.svg';

const workforceData = [
    { team: 'Front of House', count: 4, status: 'Online', emoji: adNewUsers },
    { team: 'Kitchen Team', count: 8, status: 'Present', emoji: adKitchen },
    { team: 'Management', count: 2, status: 'Online', emoji: adMgmt },
    { team: 'Finance', count: 0, status: 'Online', emoji: adFinance },
    { team: 'Delivery Fleet', count: 14, status: 'Online', emoji: adDelivery },
];

export default function WorkforceStatus() {
    return (
        <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-xs">
            {/* Header ... (Keep your existing header code) ... */}

            {/* List */}
            <div className="divide-y divide-gray-50 px-5">
                {workforceData.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between py-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-base">
                                {/* FIX: Check if the string is a file path or an emoji */}
                                {typeof item.emoji === 'string' &&
                                (item.emoji.includes('/') ||
                                    item.emoji.includes('.svg')) ? (
                                    <img
                                        src={item.emoji}
                                        alt={item.team}
                                        className="h-5 w-5 object-contain"
                                    />
                                ) : (
                                    <span>{item.emoji}</span>
                                )}
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                                {item.team}
                            </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                            {item.count} {item.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
