// import EditPricingModal from '@/components/Modals/EditPricingModal';
// import ActionButton from '@/components/ui/ActionButton';
// import AppPrice from '@/images/icons/appprice.svg?react';
// import Card from '@/images/icons/cardgreen.svg?react';
// import Grid from '@/images/icons/gridgreen.svg?react';
// import PencilIcon from '@/images/icons/pencilIcon.svg?react';
// import Sar from '@/images/icons/sar.svg?react'
// import Qar from '@/images/icons/qar.svg?react'
// import Bhd from '@/images/icons/bhd.svg?react'
// import { Search } from 'lucide-react';
// import { useState } from 'react';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainerOne,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '../OuterTable';
// import Pagination from '../Pagination';
// import CustomDropdown from '../ui/CustomDropdown';
// import { IconCard } from '../ui/IconCard';

// // ─── Types ────────────────────────────────────────────────────────────────────

// interface RegionalOverride {
//     flag: React.ElementType,
//     price: string;
//     currency: string;
// }

// interface AppPricing {
//     id: number;
//     name: string;
//     strategy: string;
//     type: string;
//     basePrice: string;
//     baseCurrency: string;
//     overrides: RegionalOverride[] | 'Auto-Converted' | null;
// }

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const DATA: AppPricing[] = [
//     {
//         id: 1,
//         name: 'QuickPay',
//         strategy: 'Recurring',
//         type: '(Subscription)',
//         basePrice: '10.000',
//         baseCurrency: 'KWD',
//         overrides: [
//             { flag: '🇸🇦', price: '125', currency: 'SAR' },
//             { flag: '🇶🇦', price: '125', currency: 'QAR' },
//             { flag: '🇧🇭', price: '125', currency: 'BHD' },
//         ],
//     },
//     {
//         id: 2,
//         name: 'FoodieCart',
//         strategy: 'Recurring',
//         type: '(Subscription)',
//         basePrice: '50.000',
//         baseCurrency: 'KWD',
//         overrides: 'Auto-Converted',
//     },
//     {
//         id: 3,
//         name: 'AdTrack360',
//         strategy: 'Free Tier',
//         type: '',
//         basePrice: '0.000',
//         baseCurrency: 'KWD',
//         overrides: null,
//     },
//     {
//         id: 4,
//         name: 'CleanRideGo',
//         strategy: 'One-time License',
//         type: '',
//         basePrice: '100.000',
//         baseCurrency: 'KWD',
//         overrides: [{ flag: '🇸🇦', price: '1,800', currency: 'SAR' }],
//     },
// ];

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function Monitizations() {
//     const [search, setSearch] = useState('');
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//     const [selectedApp, setSelectedApp] = useState<AppPricing | null>(null);

//     const filtered = DATA.filter((d) =>
//         d.name.toLowerCase().includes(search.toLowerCase()),
//     );

//     const [selectedPricing, setSelectedPricing] = useState<string>('all');
//     const [selectedStatus, setSelectedStatus] = useState<string>('live_apps');

//     const pricingOptions = [
//         { label: 'Pricing: All', value: 'all' },
//         { label: 'Free Tier', value: 'free_tier' },
//         { label: 'Recurring (Subscription)', value: 'recurring' },
//         { label: 'One-Time License', value: 'one_time' },
//     ];
//     const statusOptions = [
//         { label: 'Status: Live apps', value: 'live_apps' },
//         { label: 'Hidden apps', value: 'hidden_apps' },
//     ];

//     return (
//         <div className="space-y-6">
//             {/* ── Stat Cards ───────────────────────────────────────── */}
//             <div className="grid grid-cols-3 gap-4">
//                 <IconCard
//                     icon={Grid}
//                     title="Free Apps"
//                     value="12"
//                     description=""
//                 />
//                 <IconCard icon={Card} title="Paid Apps" value="8" />
//                 <IconCard
//                     icon={AppPrice}
//                     title="Avg. App Price"
//                     value="15.000 KWD"
//                 />
//             </div>

//             {/* ── Filters ───────────────────────────────────────────── */}
//             <div className="flex items-center justify-between">
//                 <div className="relative">
//                     <Search className="pointer-events-none absolute inset-y-0 left-3 my-auto h-4 w-4 text-gray-400" />
//                     <input
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         placeholder="Search apps..."
//                         className="w-60 rounded-lg border border-gray-300 py-2 pr-3 pl-9 text-sm outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
//                     />
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <CustomDropdown
//                         label=""
//                         options={pricingOptions}
//                         value={selectedPricing}
//                         onChange={(newValue) => setSelectedPricing(newValue)}
//                         placeholder=""
//                     />
//                     <CustomDropdown
//                         label=""
//                         options={statusOptions}
//                         value={selectedStatus}
//                         onChange={(newValue) => setSelectedStatus(newValue)}
//                         placeholder=""
//                     />
//                 </div>
//             </div>

//             {/* ── Pricing Table ─────────────────────────────────────── */}
//             <div className="rounded-xl border border-borderColor pt-6">
//                 <div className="px-6 pb-4">
//                     <h2 className="text-base font-semibold text-gray-900">
//                         Pricing Table (per app)
//                     </h2>
//                 </div>
//                 <TableContainerOne>
//                     <Table>
//                         <TableHeader>
//                             <TableHead className="font-semibold text-gray-600">
//                                 App Name
//                             </TableHead>
//                             <TableHead className="font-semibold text-gray-600">
//                                 Pricing Strategy
//                             </TableHead>
//                             <TableHead className="text-right font-semibold text-gray-600">
//                                 Base Price (KWD)
//                             </TableHead>
//                             <TableHead className="font-semibold text-gray-600">
//                                 Regional Overrides
//                             </TableHead>
//                             <TableHead className="text-right font-semibold text-gray-600">
//                                 Actions
//                             </TableHead>
//                         </TableHeader>
//                         <TableBody>
//                             {filtered.map((app) => (
//                                 <TableRow key={app.id}>
//                                     <TableCell className="font-medium text-gray-900">
//                                         {app.name}
//                                     </TableCell>
//                                     <TableCell className="text-gray-500">
//                                         <p>{app.strategy}</p>
//                                         <p>{app.type}</p>
//                                     </TableCell>
//                                     <TableCell className="text-right">
//                                         <p className="font-medium text-gray-900">
//                                             {app.basePrice}
//                                         </p>
//                                         <p className="text-gray-500">
//                                             {app.baseCurrency}
//                                         </p>
//                                     </TableCell>
//                                     <TableCell>
//                                         {app.overrides === null && (
//                                             <span className="text-gray-400">
//                                                 -
//                                             </span>
//                                         )}
//                                         {app.overrides === 'Auto-Converted' && (
//                                             <span className="text-sm text-gray-500">
//                                                 Auto-Converted
//                                             </span>
//                                         )}
//                                         {Array.isArray(app.overrides) && (
//                                             <div className="flex items-center gap-2">
//                                                 {(
//                                                     app.overrides as RegionalOverride[]
//                                                 ).map((o, i) => (
//                                                     <span
//                                                         key={i}
//                                                         className="flex items-center gap-1 px-2.5 py-2 text-xs font-medium text-gray-700"
//                                                     >
//                                                         <span>{o.flag}</span>
//                                                         <span>
//                                                             {o.price}{' '}
//                                                             {o.currency}
//                                                         </span>
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </TableCell>
//                                     <TableCell className="flex justify-end">
//                                         <ActionButton
//                                             onClick={() => {
//                                                 setSelectedApp(app);
//                                                 setIsEditModalOpen(true);
//                                             }}
//                                         >
//                                             <PencilIcon className="h-4 w-4 text-gray-400" />
//                                         </ActionButton>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainerOne>
//                 <Pagination />
//             </div>

//             {/* ── Modal ─────────────────────────────────────────────── */}
//             <EditPricingModal
//                 isOpen={isEditModalOpen}
//                 onClose={() => {
//                     setIsEditModalOpen(false);
//                     setSelectedApp(null);
//                 }}
//                 onConfirm={() => {
//                     setIsEditModalOpen(false);
//                     setSelectedApp(null);
//                 }}
//                 app={selectedApp}
//             />
//         </div>
//     );
// }

import EditPricingModal from '@/components/Modals/EditPricingModal';
import ActionButton from '@/components/ui/ActionButton';
import AppPrice from '@/images/icons/appprice.svg?react';
import Bhd from '@/images/icons/bhd.svg?react';
import Card from '@/images/icons/cardgreen.svg?react';
import Grid from '@/images/icons/gridgreen.svg?react';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import Qar from '@/images/icons/qar.svg?react';
import Sar from '@/images/icons/sar.svg?react';
import { Search } from 'lucide-react';
import React, { useState } from 'react';
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
import CustomDropdown from '../ui/CustomDropdown';
import { IconCard } from '../ui/IconCard';

// ─── Types ────────────────────────────────────────────────────────────────────

interface RegionalOverride {
    flag: React.ElementType; // Updated to accept React SVG components
    price: string;
    currency: string;
}

interface AppPricing {
    id: number;
    name: string;
    strategy: string;
    type: string;
    basePrice: string;
    baseCurrency: string;
    overrides: RegionalOverride[] | 'Auto-Converted' | null;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const DATA: AppPricing[] = [
    {
        id: 1,
        name: 'QuickPay',
        strategy: 'Recurring',
        type: '(Subscription)',
        basePrice: '10.000',
        baseCurrency: 'KWD',
        overrides: [
            { flag: Sar, price: '125', currency: 'SAR' },
            { flag: Qar, price: '125', currency: 'QAR' },
            { flag: Bhd, price: '125', currency: 'BHD' },
        ],
    },
    {
        id: 2,
        name: 'FoodieCart',
        strategy: 'Recurring',
        type: '(Subscription)',
        basePrice: '50.000',
        baseCurrency: 'KWD',
        overrides: 'Auto-Converted',
    },
    {
        id: 3,
        name: 'AdTrack360',
        strategy: 'Free Tier',
        type: '',
        basePrice: '0.000',
        baseCurrency: 'KWD',
        overrides: null,
    },
    {
        id: 4,
        name: 'CleanRideGo',
        strategy: 'One-time License',
        type: '',
        basePrice: '100.000',
        baseCurrency: 'KWD',
        overrides: [{ flag: Sar, price: '1,800', currency: 'SAR' }],
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Monitizations() {
    const [search, setSearch] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedApp, setSelectedApp] = useState<AppPricing | null>(null);

    const filtered = DATA.filter((d) =>
        d.name.toLowerCase().includes(search.toLowerCase()),
    );

    const [selectedPricing, setSelectedPricing] = useState<string>('all');
    const [selectedStatus, setSelectedStatus] = useState<string>('live_apps');

    const pricingOptions = [
        { label: 'Pricing: All', value: 'all' },
        { label: 'Free Tier', value: 'free_tier' },
        { label: 'Recurring (Subscription)', value: 'recurring' },
        { label: 'One-Time License', value: 'one_time' },
    ];
    const statusOptions = [
        { label: 'Status: Live apps', value: 'live_apps' },
        { label: 'Hidden apps', value: 'hidden_apps' },
    ];

    return (
        <div className="space-y-6">
            {/* ── Stat Cards ───────────────────────────────────────── */}
            <div className="grid grid-cols-3 gap-4">
                <IconCard
                    icon={Grid}
                    title="Free Apps"
                    value="12"
                    description=""
                />
                <IconCard icon={Card} title="Paid Apps" value="8" />
                <IconCard
                    icon={AppPrice}
                    title="Avg. App Price"
                    value="15.000 KWD"
                />
            </div>

            {/* ── Filters ───────────────────────────────────────────── */}
            <div className="flex items-center justify-between">
                <div className="relative">
                    <Search className="pointer-events-none absolute inset-y-0 left-3 my-auto h-4 w-4 text-gray-400" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search apps..."
                        className="w-60 rounded-lg border border-gray-300 py-2 pr-3 pl-9 text-sm outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <CustomDropdown
                        label=""
                        options={pricingOptions}
                        value={selectedPricing}
                        onChange={(newValue) => setSelectedPricing(newValue)}
                        placeholder=""
                    />
                    <CustomDropdown
                        label=""
                        options={statusOptions}
                        value={selectedStatus}
                        onChange={(newValue) => setSelectedStatus(newValue)}
                        placeholder=""
                    />
                </div>
            </div>

            {/* ── Pricing Table ─────────────────────────────────────── */}
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="px-6 pb-4">
                    <h2 className="text-base font-semibold text-gray-900">
                        Pricing Table (per app)
                    </h2>
                </div>
                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                App Name
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Pricing Strategy
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Base Price (KWD)
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                Regional Overrides
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {filtered.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell className="font-medium text-gray-900">
                                        {app.name}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        <p>{app.strategy}</p>
                                        <p>{app.type}</p>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <p className="font-medium text-gray-900">
                                            {app.basePrice}
                                        </p>
                                        <p className="text-gray-500">
                                            {app.baseCurrency}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        {app.overrides === null && (
                                            <span className="text-gray-400">
                                                -
                                            </span>
                                        )}
                                        {app.overrides === 'Auto-Converted' && (
                                            <span className="text-sm text-gray-500">
                                                Auto-Converted
                                            </span>
                                        )}
                                        {Array.isArray(app.overrides) && (
                                            <div className="flex items-center gap-2">
                                                {(
                                                    app.overrides as RegionalOverride[]
                                                ).map((o, i) => {
                                                    const FlagIcon = o.flag; // Assign component to a capitalized variable
                                                    return (
                                                        <span
                                                            key={i}
                                                            className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-gray-700"
                                                        >
                                                            {/* Render the custom SVG component */}
                                                            <FlagIcon className="h-6 w-6 shrink-0 rounded-sm" />
                                                            <span>
                                                                {o.price}{' '}
                                                                {o.currency}
                                                            </span>
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </TableCell>
                                    <TableCell className="flex justify-end">
                                        <ActionButton
                                            onClick={() => {
                                                setSelectedApp(app);
                                                setIsEditModalOpen(true);
                                            }}
                                        >
                                            <PencilIcon className="h-4 w-4 text-gray-400" />
                                        </ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
                <Pagination />
            </div>

            {/* ── Modal ─────────────────────────────────────────────── */}
            <EditPricingModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedApp(null);
                }}
                onConfirm={() => {
                    setIsEditModalOpen(false);
                    setSelectedApp(null);
                }}
                app={selectedApp}
            />
        </div>
    );
}
