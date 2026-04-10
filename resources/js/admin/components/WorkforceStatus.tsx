// import adNewUsers from '@/shared/images/icons/adNewUsers.svg';
// const workforceData = [
//     { team: 'Front of House', count: 4, status: 'Online', emoji: adNewUsers },
//     { team: 'Kitchen Team', count: 8, status: 'Present', emoji: '👨‍🍳' },
//     { team: 'Management', count: 2, status: 'Online', emoji: '💼' },
//     { team: 'Finance', count: 0, status: 'Online', emoji: '📊' },
//     { team: 'Delivery Fleet', count: 14, status: 'Online', emoji: '🚗' },
// ];

// export default function WorkforceStatus() {
//     return (
//         <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-xs">
//             {/* Header */}
//             <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
//                 <h3 className="text-sm font-semibold text-gray-900">
//                     Live Workforce Status
//                 </h3>
//                 <button className="text-gray-400 hover:text-gray-600">
//                     <svg
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                         />
//                     </svg>
//                 </button>
//             </div>

//             {/* List */}
//             <div className="divide-y divide-gray-50 px-5">
//                 {workforceData.map((item, i) => (
//                     <div
//                         key={i}
//                         className="flex items-center justify-between py-4"
//                     >
//                         <div className="flex items-center gap-3">
//                             <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-base">
//                                 {item.emoji}
//                             </div>
//                             <span className="text-sm font-medium text-gray-700">
//                                 {item.team}
//                             </span>
//                         </div>
//                         <span className="text-sm font-semibold text-gray-900">
//                             {item.count} {item.status}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

import adNewUsers from '@/shared/images/icons/adNewUsers.svg';

const workforceData = [
    { team: 'Front of House', count: 4, status: 'Online', emoji: adNewUsers },
    { team: 'Kitchen Team', count: 8, status: 'Present', emoji: '👨‍🍳' },
    { team: 'Management', count: 2, status: 'Online', emoji: '💼' },
    { team: 'Finance', count: 0, status: 'Online', emoji: '📊' },
    { team: 'Delivery Fleet', count: 14, status: 'Online', emoji: '🚗' },
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
