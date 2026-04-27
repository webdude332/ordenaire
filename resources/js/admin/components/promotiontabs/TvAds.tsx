// import ActionButton from '../ActionButton';
// import Pencil from '@/shared/images/icons/pencilIcon.svg?react'
// import Trash from '@/shared/images/icons/delIcon.svg?react'
// import CheckCircle from '@/shared/images/icons/adCircleCheck.svg?react';
// import Play from '@/shared/images/icons/playBold.svg?react';
// import Plus from '@/shared/images/icons/plus.svg?react';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';
// import ToggleSwitch from '@/shared/sharedcomponents/ui/ToggleSwitch';
// import { useState } from 'react';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '../Table';

// export default function TvAds() {
//     const [isToggled, setIsToggled] = useState(true);
//     const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setIsToggled(event.target.checked);
//     };
//     return (
//         <div>
//             {/**Card area (header) */}
//             <div className="flex items-center gap-8 rounded-xl border border-borderColor px-6 py-6 shadow-xs">
//                 <div>
//                     <CheckCircle className="h-12 w-12" />
//                 </div>
//                 <div className="">
//                     <h1 className="text-lg font-medium text-gray-900">
//                         OSS Carousel Ads on Order Status Screen
//                     </h1>
//                     <p className="mb-4">
//                         Enable to show active carousel ads on in-store order
//                         status screens; disable to hide them. Maximum 10 active
//                         ads allowed at a time.
//                     </p>
//                     <ToggleSwitch
//                         checked={isToggled}
//                         onChange={handleToggleChange}
//                         statusLabel={isToggled ? 'Enabled' : 'Disabled'}
//                     />
//                 </div>
//             </div>
//             {/**Table */}
//             <div className="pt-8">
//                 <div className="flex justify-end gap-4">
//                     <IconButton>
//                         <Play className="h-4 w-4 text-iconColor" />
//                         Play Preview
//                     </IconButton>
//                     <Button>
//                         <Plus />
//                         Add Ad
//                     </Button>
//                 </div>
//                 <div>
//                                     <TableContainer>
//                     <Table>
//                         <TableHeader>
//                             <TableHead>Coupon Details</TableHead>
//                             <TableHead>Value (Discount + Rules)</TableHead>
//                             <TableHead>Valid Until</TableHead>
//                             <TableHead>Status</TableHead>
//                             <TableHead className="text-right">
//                                 Actions
//                             </TableHead>
//                         </TableHeader>
//                         <TableBody>
//                             {couponsData.map((coupon) => (
//                                 <TableRow>
//                                     <TableCell className="font-medium text-gray-800">
//                                         {coupon.couponDetail}
//                                     </TableCell>
//                                     <TableCell>
//                                         <p className="font-medium text-gray-800">
//                                             {coupon.couponValue}
//                                         </p>
//                                         <p>{coupon.couponRule}</p>
//                                     </TableCell>
//                                     <TableCell className="font-medium text-gray-800">
//                                         {coupon.validUntil}
//                                     </TableCell>
//                                     <TableCell>
//                                         <Badge
//                                             variant={
//                                                 statusVariantMap[
//                                                     coupon.status
//                                                 ] || 'gray'
//                                             }
//                                             withDot={true}
//                                             rounded="md"
//                                         >
//                                             {coupon.status}
//                                         </Badge>
//                                     </TableCell>
//                                     <TableCell className="flex justify-end gap-2">
//                                         <ActionButton>
//                                             <Pencil className="h-4 w-4 text-iconColor" />
//                                         </ActionButton>
//                                         <ActionButton>
//                                             <Trash className="h-4 w-4 text-iconColor" />
//                                         </ActionButton>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 </div>
//             </div>
//         </div>
//     );
// }

import CheckCircle from '@/shared/images/icons/adCircleCheck.svg?react';
import Trash from '@/shared/images/icons/delIcon.svg?react';
import Pencil from '@/shared/images/icons/pencilIcon.svg?react';
import Play from '@/shared/images/icons/playBold.svg?react';
import Plus from '@/shared/images/icons/plus.svg?react';
import Button from '@/shared/sharedcomponents/ui/Button';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import ToggleSwitch from '@/shared/sharedcomponents/ui/ToggleSwitch';
import { useRef, useState } from 'react';
import ActionButton from '../ActionButton';
import AddNewAdvertisement, { AdFormData } from '../modals/AddNewAdvertisement';
import EditAdvertisement, { EditAdFormData } from '../modals/EditAdvertisement';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '../Table';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Ad {
    id: number;
    name: string;
    image: string;
    duration: number;
    scheduleFrom: string;
    scheduleTo: string;
    scheduleTime: string;
    isActive: boolean;
}

// ---------------------------------------------------------------------------
// Seed data
// ---------------------------------------------------------------------------
const seedAds: Ad[] = [
    {
        id: 1,
        name: 'Summer Mojito Promo',
        image: '/images/ads/summer-mojito.jpg',
        duration: 10,
        scheduleFrom: '03 Sep',
        scheduleTo: '03 Oct',
        scheduleTime: '11:00 AM - 11:00 PM',
        isActive: true,
    },
    {
        id: 2,
        name: 'Sizzling Steak',
        image: '/images/ads/sizzling-steak.jpg',
        duration: 20,
        scheduleFrom: '04 Oct',
        scheduleTo: '10 Oct',
        scheduleTime: 'All Day',
        isActive: true,
    },
    {
        id: 3,
        name: 'Breakfast Combo',
        image: '/images/ads/breakfast-combo.jpg',
        duration: 30,
        scheduleFrom: '11 Oct',
        scheduleTo: '17 Oct',
        scheduleTime: '09:00 AM - 09:00 PM',
        isActive: false,
    },
    {
        id: 4,
        name: 'Burger Festival',
        image: '/images/ads/burger-festival.jpg',
        duration: 40,
        scheduleFrom: '18 Oct',
        scheduleTo: '24 Oct',
        scheduleTime: '08:00 AM - 08:00 PM',
        isActive: false,
    },
    {
        id: 5,
        name: 'Kids Meal Toy',
        image: '/images/ads/kids-meal-toy.jpg',
        duration: 50,
        scheduleFrom: '25 Oct',
        scheduleTo: '31 Oct',
        scheduleTime: 'All Day',
        isActive: false,
    },
];

// ---------------------------------------------------------------------------
// Inline disabled icon — red X-circle
// ---------------------------------------------------------------------------
function DisabledCircleIcon({ className }: { className?: string }) {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="24" cy="24" r="23" fill="#FEE2E2" />
            <circle cx="24" cy="24" r="15" fill="white" />
            <path
                d="M18 18L30 30M30 18L18 30"
                stroke="#EF4444"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
            <circle
                cx="24"
                cy="24"
                r="23"
                stroke="#FCA5A5"
                strokeWidth="1.5"
                fill="none"
            />
        </svg>
    );
}

// ---------------------------------------------------------------------------
// Inline drag-handle icon
// ---------------------------------------------------------------------------
function DragHandle() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
        >
            <circle cx="5.5" cy="3.5" r="1.5" fill="currentColor" />
            <circle cx="5.5" cy="8" r="1.5" fill="currentColor" />
            <circle cx="5.5" cy="12.5" r="1.5" fill="currentColor" />
            <circle cx="10.5" cy="3.5" r="1.5" fill="currentColor" />
            <circle cx="10.5" cy="8" r="1.5" fill="currentColor" />
            <circle cx="10.5" cy="12.5" r="1.5" fill="currentColor" />
        </svg>
    );
}

// ---------------------------------------------------------------------------
// Inline clock icon
// ---------------------------------------------------------------------------
function ClockIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
        >
            <path
                d="M7 1.167A5.833 5.833 0 1 0 7 12.833 5.833 5.833 0 0 0 7 1.167Zm0 10.5A4.667 4.667 0 1 1 7 2.333a4.667 4.667 0 0 1 0 9.334Z"
                fill="#6B7280"
            />
            <path
                d="M7.583 4.083H6.417v3.209l2.77 1.75.617-.978-2.221-1.404V4.083Z"
                fill="#6B7280"
            />
        </svg>
    );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function TvAds() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [ads, setAds] = useState<Ad[]>(seedAds);
    const [draggingIdx, setDraggingIdx] = useState<number | null>(null);

    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedAd, setSelectedAd] = useState<EditAdFormData | null>(null);

    // ─── Handlers ─────────────────────────────────────────────────────────────

    // Maps the table row data (Ad) to the shape the Edit Modal expects (EditAdFormData)
    const handleOpenEditRow = (adRowData: Ad) => {
        // Parse "11:00 AM - 11:00 PM" into separate start and end times for the dropdowns
        let startTime = '12:00 AM';
        let endTime = '12:00 AM';

        if (adRowData.scheduleTime && adRowData.scheduleTime !== 'All Day') {
            const timeParts = adRowData.scheduleTime.split(' - ');
            if (timeParts.length === 2) {
                startTime = timeParts[0].trim();
                endTime = timeParts[1].trim();
            }
        }

        const mappedData: EditAdFormData = {
            mediaFile: null,
            mediaPreviewUrl: adRowData.image,
            adName: adRowData.name,
            duration: adRowData.duration,
            startDate: adRowData.scheduleFrom,
            endDate: adRowData.scheduleTo,
            dailyStartTime: startTime,
            dailyEndTime: endTime,
            displayStatus: adRowData.isActive,
        };

        setSelectedAd(mappedData);
        setIsEditModalOpen(true);
    };

    const handleCloseEdit = () => {
        setIsEditModalOpen(false);
        setSelectedAd(null);
    };

    const handleAddNewAd = (data: AdFormData) => {
        console.log('New Ad payload:', data);
        // Add API call here
    };

    const handleUpdateAd = (data: EditAdFormData) => {
        console.log('Updated Ad payload:', data);
        // Add API call here
    };

    // ------------------------------------------------------------------
    // Master toggle
    // ------------------------------------------------------------------
    const handleMasterToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsEnabled(e.target.checked);
    };

    // ------------------------------------------------------------------
    // Per-row display-status toggle
    // ------------------------------------------------------------------
    const handleAdToggle = (id: number) => {
        if (!isEnabled) return;
        setAds((prev) =>
            prev.map((ad) =>
                ad.id === id ? { ...ad, isActive: !ad.isActive } : ad,
            ),
        );
    };

    // ------------------------------------------------------------------
    // Drag-and-drop
    // ------------------------------------------------------------------
    const handleDragStart = (index: number) => {
        if (!isEnabled) return;
        dragItem.current = index;
        setDraggingIdx(index);
    };

    const handleDragEnter = (index: number) => {
        if (!isEnabled) return;
        dragOverItem.current = index;
    };

    const handleDragEnd = () => {
        if (!isEnabled) return;
        if (
            dragItem.current !== null &&
            dragOverItem.current !== null &&
            dragItem.current !== dragOverItem.current
        ) {
            const reordered = [...ads];
            const [moved] = reordered.splice(dragItem.current, 1);
            reordered.splice(dragOverItem.current, 0, moved);
            setAds(reordered);
        }
        dragItem.current = null;
        dragOverItem.current = null;
        setDraggingIdx(null);
    };

    const dragAttrs = (index: number): React.HTMLAttributes<HTMLElement> => ({
        draggable: isEnabled,
        onDragStart: () => handleDragStart(index),
        onDragEnter: () => handleDragEnter(index),
        onDragEnd: handleDragEnd,
        onDragOver: (e: React.DragEvent) => e.preventDefault(),
        className: draggingIdx === index ? 'opacity-40' : 'opacity-100',
    });

    // ------------------------------------------------------------------
    // Render
    // ------------------------------------------------------------------
    return (
        <div>
            {/* ── Header card ─────────────────────────────────────────── */}
            <div className="flex items-center gap-8 rounded-xl border border-borderColor px-6 py-6 shadow-xs">
                <div className="shrink-0">
                    {isEnabled ? (
                        <CheckCircle className="h-12 w-12" />
                    ) : (
                        <DisabledCircleIcon className="h-12 w-12" />
                    )}
                </div>

                <div>
                    <h1 className="text-lg font-medium text-gray-900">
                        OSS Carousel Ads on Order Status Screen
                    </h1>
                    <p className="mb-4 text-sm text-gray-500">
                        Enable to show active carousel ads on in-store order
                        status screens; disable to hide them. Maximum 10 active
                        ads allowed at a time.
                    </p>
                    <ToggleSwitch
                        checked={isEnabled}
                        onChange={handleMasterToggle}
                        statusLabel={isEnabled ? 'Enable' : 'Disabled'}
                    />
                </div>
            </div>

            {/* ── Table section ───────────────────────────────────────── */}
            <div className="pt-8">
                <div
                    className={`flex justify-end gap-4 pb-4 transition-opacity duration-200`}
                >
                    <IconButton>
                        <Play className="h-4 w-4 text-iconColor" />
                        Play Preview
                    </IconButton>
                    {/* ADD AD BUTTON HOOKED UP HERE */}
                    <Button onClick={() => setIsAddModalOpen(true)}>
                        <Plus />
                        Add Ad
                    </Button>
                </div>

                <div
                    className={`transition-opacity duration-200 ${
                        !isEnabled ? 'pointer-events-none opacity-40' : ''
                    }`}
                >
                    <TableContainer>
                        <Table>
                            <TableHeader>
                                <TableHead>Order</TableHead>
                                <TableHead>Ad Name</TableHead>
                                <TableHead>Duration (sec)</TableHead>
                                <TableHead>Schedule</TableHead>
                                <TableHead>Display Status</TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableHeader>

                            <TableBody>
                                {ads.map((ad, index) => (
                                    <TableRow key={ad.id} {...dragAttrs(index)}>
                                        <TableCell>
                                            <div
                                                className={`flex items-center ${
                                                    isEnabled
                                                        ? 'cursor-grab active:cursor-grabbing'
                                                        : 'cursor-not-allowed'
                                                }`}
                                            >
                                                <DragHandle />
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={ad.image}
                                                    alt={ad.name}
                                                    className="h-10 w-10 shrink-0 rounded-md object-cover"
                                                />
                                                <span className="font-medium text-gray-800">
                                                    {ad.name}
                                                </span>
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 px-2.5 py-1 text-sm text-gray-700">
                                                <ClockIcon />
                                                {ad.duration}s
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                {ad.scheduleFrom} –{' '}
                                                {ad.scheduleTo}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {ad.scheduleTime}
                                            </p>
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <ToggleSwitch
                                                    checked={ad.isActive}
                                                    onChange={() =>
                                                        handleAdToggle(ad.id)
                                                    }
                                                />
                                                <span
                                                    className={`text-sm font-medium ${
                                                        ad.isActive
                                                            ? 'text-gray-800'
                                                            : 'text-gray-400'
                                                    }`}
                                                >
                                                    {ad.isActive ? 'ON' : 'OFF'}
                                                </span>
                                            </div>
                                        </TableCell>

                                        <TableCell className="flex justify-end gap-2">
                                            {/* EDIT AD BUTTON HOOKED UP HERE */}
                                            <ActionButton
                                                onClick={() =>
                                                    handleOpenEditRow(ad)
                                                }
                                            >
                                                <Pencil className="h-4 w-4 text-iconColor" />
                                            </ActionButton>
                                            <ActionButton>
                                                <Trash className="h-4 w-4 text-iconColor" />
                                            </ActionButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            {/* MODALS */}
            <AddNewAdvertisement
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onConfirm={handleAddNewAd}
            />

            {selectedAd && (
                <EditAdvertisement
                    isOpen={isEditModalOpen}
                    onClose={handleCloseEdit}
                    onConfirm={handleUpdateAd}
                    initialData={selectedAd}
                />
            )}
        </div>
    );
}
