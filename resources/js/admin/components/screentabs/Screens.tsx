// import LaunchIcon from '@/shared/images/icons/launchIcon.svg?react';
// import EditIcon from '@/shared/images/icons/pencilIcon.svg?react';
// import PlusIcon from '@/shared/images/icons/plus.svg?react';
// import ReloadIcon from '@/shared/images/icons/reloadIcon.svg?react';
// import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import { useState } from 'react';
// import AddNewKds from '../modals/AddNewKds';
// import EditKds from '../modals/EditKds';

// export default function Screens() {
//     const statusVariantMap: Record<string, BadgeVariant> = {
//         Online: 'success',
//         Offline: 'error', // You can change this to 'blue' if you prefer
//     };
//     const screenData = [
//         {
//             id: 1,
//             title: 'Hot Kitchen KDS',
//             status: 'Online',
//             station: 'Hot Kitchen',
//             hardware: 'iPad Pro',
//             software: 'Safari • v2.4.0',
//         },
//         {
//             id: 2,
//             title: 'Bar Station',
//             status: 'Online',
//             station: 'Bar / Beverage',
//             hardware: 'iPad Pro',
//             software: 'Safari • v2.4.0',
//         },
//         {
//             id: 3,
//             title: 'Expo / Dispatch',
//             status: 'Offline',
//             station: 'Expo',
//             hardware: 'Windows Kiosk',
//             software: 'Edge • v2.4.0',
//         },
//     ];
//     const [isKdsModalOpen, setIsKdsModalOpen] = useState(false);
//     const handleSave = () => {
//         setIsKdsModalOpen(false);
//     };
//     const [isEditKdsOpen, setIsEditKdsOpen] = useState(false);
// const [selectedKds, setSelectedKds] = useState(null); // your KDS record

// // When user clicks edit on a row:
// const handleEditClick = (kdsRecord) => {
//     setSelectedKds(kdsRecord);
//     setIsEditKdsOpen(true);
// };

//     return (
//         <div className="w-full">
//             {/** Header & Button */}
//             <div className="mb-6 flex items-center justify-end">
//                 {/* Assuming your Button component inherits standard flex properties,
//                     if the lime green is missing, you can pass className="bg-[#7AC143] hover:bg-[#68A936] text-white" */}
//                 <Button onClick={() => setIsKdsModalOpen(true)}>
//                     <PlusIcon className="mr-2 h-4 w-4" />
//                     Add New KDS Screen
//                 </Button>
//             </div>

//             {/** Cards Grid */}
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {screenData.map((item) => (
//                     <div
//                         key={item.id}
//                         className="flex flex-col overflow-hidden rounded-xl border border-borderColor bg-white shadow-sm"
//                     >
//                         {/* Card Content */}
//                         <div className="flex-1 p-6">
//                             <h2 className="mb-5 text-lg font-semibold text-gray-900">
//                                 {item.title}
//                             </h2>

//                             <div className="flex flex-col space-y-3">
//                                 {/* Status Row */}
//                                 <div className="flex items-center justify-between">
//                                     <span className="text-sm text-gray-500">
//                                         Status
//                                     </span>
//                                     {item.status === 'Online' ? (
//                                         <Badge
//                                             variant={
//                                                 statusVariantMap[item.status] ||
//                                                 'gray'
//                                             }
//                                             withDot={true}
//                                             rounded="md"
//                                         >
//                                             {item.status}
//                                         </Badge>
//                                     ) : (
//                                         <Badge
//                                             variant={
//                                                 statusVariantMap[item.status] ||
//                                                 'gray'
//                                             }
//                                             withDot={true}
//                                             rounded="md"
//                                         >
//                                             {item.status}
//                                         </Badge>
//                                     )}
//                                 </div>

//                                 {/* Linked Station Row */}
//                                 <div className="flex items-center justify-between">
//                                     <span className="text-sm text-gray-500">
//                                         Linked Station
//                                     </span>
//                                     <span className="text-sm font-medium text-gray-800">
//                                         {item.station}
//                                     </span>
//                                 </div>

//                                 {/* Hardware Row */}
//                                 <div className="flex items-center justify-between">
//                                     <span className="text-sm text-gray-500">
//                                         Hardware
//                                     </span>
//                                     <span className="text-sm font-medium text-gray-800">
//                                         {item.hardware}
//                                     </span>
//                                 </div>

//                                 {/* Software Row */}
//                                 <div className="flex items-center justify-between">
//                                     <span className="text-sm text-gray-500">
//                                         Software
//                                     </span>
//                                     <span className="text-sm font-medium text-gray-800">
//                                         {item.software}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Card Footer Actions */}
//                         <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
//                             <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
//                                 <LaunchIcon className="h-4 w-4" />
//                                 Launch
//                             </button>
//                             <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
//                                 <ReloadIcon className="h-4 w-4" />
//                                 Reload
//                             </button>
//                             <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
//                                 <EditIcon className="h-4 w-4 text-iconColor" />
//                                 Edit
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <AddNewKds
//                 isOpen={isKdsModalOpen}
//                 onClose={() => setIsKdsModalOpen(false)}
//                 onSave={handleSave}
//             />
//             <EditKds
//     isOpen={isEditKdsOpen}
//     onClose={() => setIsEditKdsOpen(false)}
//     onSave={() => {
//         // your save/patch API call
//         setIsEditKdsOpen(false);
//     }}
//     onUnpair={() => {
//         // your unpair API call
//         setIsEditKdsOpen(false);
//     }}
//     initialDeviceName={selectedKds?.deviceName}
//     initialLinkedStation={selectedKds?.linkedStation}
//     initialSound={selectedKds?.sound}
//     initialHighlightLateOrders={selectedKds?.highlightLateOrders}
//     pairingCode={selectedKds?.pairingCode}
// />
//         </div>
//     );
// }

import LaunchIcon from '@/shared/images/icons/launchIcon.svg?react';
import EditIcon from '@/shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';
import ReloadIcon from '@/shared/images/icons/reloadIcon.svg?react';
import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
import Button from '@/shared/sharedcomponents/ui/Button';
import { useState } from 'react';
import AddNewKds from '../modals/AddNewKds';
import EditKds from '../modals/EditKds';

interface KdsRecord {
    id: number;
    title: string;
    status: string;
    station: string;
    hardware: string;
    software: string;
    deviceName: string;
    linkedStation: string;
    sound: string;
    highlightLateOrders: string;
    pairingCode: string;
}

export default function Screens() {
    const statusVariantMap: Record<string, BadgeVariant> = {
        Online: 'success',
        Offline: 'error',
    };

    const screenData: KdsRecord[] = [
        {
            id: 1,
            title: 'Hot Kitchen KDS',
            status: 'Online',
            station: 'Hot Kitchen',
            hardware: 'iPad Pro',
            software: 'Safari • v2.4.0',
            deviceName: 'Hot Kitchen KDS',
            linkedStation: 'hot_kitchen',
            sound: 'enabled_ding',
            highlightLateOrders: 'after_20',
            pairingCode: '492 - 118',
        },
        {
            id: 2,
            title: 'Bar Station',
            status: 'Online',
            station: 'Bar / Beverage',
            hardware: 'iPad Pro',
            software: 'Safari • v2.4.0',
            deviceName: 'Bar Station',
            linkedStation: 'cold_kitchen',
            sound: 'enabled_ding',
            highlightLateOrders: 'after_20',
            pairingCode: '123 - 456',
        },
        {
            id: 3,
            title: 'Expo / Dispatch',
            status: 'Offline',
            station: 'Expo',
            hardware: 'Windows Kiosk',
            software: 'Edge • v2.4.0',
            deviceName: 'Expo / Dispatch',
            linkedStation: 'grill_station',
            sound: 'disabled',
            highlightLateOrders: 'after_30',
            pairingCode: '789 - 012',
        },
    ];

    const [isKdsModalOpen, setIsKdsModalOpen] = useState(false);
    const [isEditKdsOpen, setIsEditKdsOpen] = useState(false);
    const [selectedKds, setSelectedKds] = useState<KdsRecord | null>(null);

    const handleSave = () => {
        setIsKdsModalOpen(false);
    };

    const handleEditClick = (kdsRecord: KdsRecord) => {
        setSelectedKds(kdsRecord);
        setIsEditKdsOpen(true);
    };

    return (
        <div className="w-full">
            {/** Header & Button */}
            <div className="mb-6 flex items-center justify-end">
                <Button onClick={() => setIsKdsModalOpen(true)}>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Add New KDS Screen
                </Button>
            </div>

            {/** Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {screenData.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col overflow-hidden rounded-xl border border-borderColor bg-white shadow-sm"
                    >
                        {/* Card Content */}
                        <div className="flex-1 p-6">
                            <h2 className="mb-5 text-lg font-semibold text-gray-900">
                                {item.title}
                            </h2>

                            <div className="flex flex-col space-y-3">
                                {/* Status Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Status
                                    </span>
                                    <Badge
                                        variant={
                                            statusVariantMap[item.status] ||
                                            'gray'
                                        }
                                        withDot={true}
                                        rounded="md"
                                    >
                                        {item.status}
                                    </Badge>
                                </div>

                                {/* Linked Station Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Linked Station
                                    </span>
                                    <span className="text-sm font-medium text-gray-800">
                                        {item.station}
                                    </span>
                                </div>

                                {/* Hardware Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Hardware
                                    </span>
                                    <span className="text-sm font-medium text-gray-800">
                                        {item.hardware}
                                    </span>
                                </div>

                                {/* Software Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Software
                                    </span>
                                    <span className="text-sm font-medium text-gray-800">
                                        {item.software}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
                            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                <LaunchIcon className="h-4 w-4" />
                                Launch
                            </button>
                            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                <ReloadIcon className="h-4 w-4" />
                                Reload
                            </button>
                            <button
                                onClick={() => handleEditClick(item)}
                                className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
                            >
                                <EditIcon className="h-4 w-4 text-iconColor" />
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <AddNewKds
                isOpen={isKdsModalOpen}
                onClose={() => setIsKdsModalOpen(false)}
                onSave={handleSave}
            />

            <EditKds
                isOpen={isEditKdsOpen}
                onClose={() => setIsEditKdsOpen(false)}
                onSave={() => setIsEditKdsOpen(false)}
                onUnpair={() => setIsEditKdsOpen(false)}
                initialDeviceName={selectedKds?.deviceName}
                initialLinkedStation={selectedKds?.linkedStation}
                initialSound={selectedKds?.sound}
                initialHighlightLateOrders={selectedKds?.highlightLateOrders}
                pairingCode={selectedKds?.pairingCode}
            />
        </div>
    );
}
