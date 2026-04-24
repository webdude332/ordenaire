// import AdCalender from '@/shared/images/icons/adCalender.svg?react';
// import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
// import searchIcon from '@/shared/images/icons/inputSearch.svg';
// import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
// import PlusIcon from '@/shared/images/icons/plus.svg?react';
// import Selector from '@/shared/images/icons/selectorIcon.svg?react';
// import ActionButton from '@/shared/sharedcomponents/ui/ActionButton';
// import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import { Input } from '@/shared/sharedcomponents/ui/FormElements';
// import AddNewReservation from '../modals/AddNewReservation';
// import EditReservation from '../modals/EditReservation';

// import IconButton from '@/shared/sharedcomponents/ui/IconButton';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/shared/sharedcomponents/ui/Table';
// import { useState } from 'react';

// export default function Scheduled() {
//     const [isAddOpen, setIsAddOpen] = useState(false);
//     const [isEditOpen, setIsEditOpen] = useState(false);
//     const [selectedReservation, setSelectedReservation] = useState(null);
//     const itemsData = [
//         {
//             id: '1',
//             time: '12:30 PM',
//             customerName: 'John Doe',
//             customerPhone: '+965 1122 3344',
//             guests: '2 Guests',
//             tableInfo: '1st Floor · A3',
//             babyChair: 'Yes',
//         },
//         {
//             id: '2',
//             time: '08:00 PM',
//             customerName: 'Sarah Smith',
//             customerPhone: '+965 9988 7766',
//             guests: '5 Guests',
//             tableInfo: '1st Floor · A7',
//             babyChair: 'No',
//         },
//     ];

//     const satData = [
//         {
//             id: 1,
//             time: '01:00 PM',
//             customerName: 'Mike Ross',
//             customerPhone: '+965 5544 3322',
//             guests: '12 Guests',
//             tableInfo: '1st Floor · A7',
//             babyChair: 'No',
//         },
//     ];
//     // Replaced statusVariantMap to match the Baby Chair column
//     const babyChairVariantMap: Record<string, BadgeVariant> = {
//         Yes: 'success', // Renders the green badge
//         No: 'gray', // Renders the gray badge
//     };
//     return (
//         <div>
//             {/**tabs header */}
//             <div className="flex items-center justify-between">
//                 <div className="w-1/3">
//                     <Input
//                         placeholder="Search"
//                         icon={searchIcon}
//                         className="w-1/2"
//                     />
//                 </div>
//                 <div className="flex gap-4">
//                     <div className="flex gap-2 rounded-xl bg-gray-100 px-2 py-1">
//                         <button className="flex justify-center gap-2 rounded-lg border border-borderColor bg-white px-2 py-1">
//                             All
//                             <span className="rounded-lg bg-gray-100">45</span>
//                         </button>
//                         <button className="flex justify-center gap-2 rounded-lg border border-borderColor px-2 py-1">
//                             Tommorrow
//                             <span className="rounded-lg bg-gray-100">10</span>
//                         </button>
//                         <button className="flex justify-center gap-2 rounded-lg border border-borderColor px-2 py-1">
//                             Weekend
//                             <span className="rounded-lg bg-gray-100">20</span>
//                         </button>
//                     </div>

//                     <div>
//                         <Button
//                             className="py-2.5"
//                             onClick={() => setIsAddOpen(true)}
//                         >
//                             <PlusIcon className="h-4 w-4 text-white" />
//                             Add New Reservation
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//             {/**tables */}
//             <div className="pt-12">
//                 <div>
//                     <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
//                         {/* Table Title + Add Button */}
//                         <div className="flex items-center justify-between px-6 py-4">
//                             <h2 className="text-lg font-semibold text-gray-900">
//                                 Friday, 29 Aug
//                             </h2>
//                             <IconButton>
//                                 <AdCalender /> 3 Bookings
//                             </IconButton>
//                         </div>

//                         <Table>
//                             <TableHeader>
//                                 <TableHead className="py-4 pl-6 text-xs font-semibold text-gray-500">
//                                     <div className="flex items-center gap-1">
//                                         Time
//                                         <span>
//                                             <Selector />
//                                         </span>
//                                     </div>
//                                 </TableHead>
//                                 <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                                     Customer (Name + Phone)
//                                 </TableHead>
//                                 <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                                     Details(Pax + Table)
//                                 </TableHead>
//                                 <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                                     Baby Chair
//                                 </TableHead>
//                                 <TableHead className="py-4 pr-6 text-right text-xs font-semibold text-gray-500">
//                                     Actions
//                                 </TableHead>
//                             </TableHeader>
//                             <TableBody>
//                                 {itemsData.map((item) => (
//                                     <TableRow
//                                         key={item.id}
//                                         className="border-b border-gray-200 transition-colors hover:bg-gray-50"
//                                     >
//                                         {/* Time */}
//                                         <TableCell className="py-4 pl-6">
//                                             <div className="font-semibold text-gray-900">
//                                                 {item.time}
//                                             </div>
//                                         </TableCell>

//                                         {/* Customer (Name + Phone) */}
//                                         <TableCell className="py-4">
//                                             <div className="font-semibold text-gray-900">
//                                                 {item.customerName}
//                                             </div>
//                                             <div className="mt-0.5 text-xs text-gray-500">
//                                                 {item.customerPhone}
//                                             </div>
//                                         </TableCell>

//                                         {/* Details (Pax + Table) */}
//                                         <TableCell className="py-4">
//                                             <div className="font-semibold text-gray-900">
//                                                 {item.guests}
//                                             </div>
//                                             <div className="mt-0.5 text-xs text-gray-500">
//                                                 {item.tableInfo}
//                                             </div>
//                                         </TableCell>

//                                         {/* Baby Chair Badge */}
//                                         <TableCell className="py-4">
//                                             <Badge
//                                                 variant={
//                                                     babyChairVariantMap[
//                                                         item.babyChair
//                                                     ] || 'gray'
//                                                 }
//                                                 withDot={true}
//                                                 rounded="md"
//                                             >
//                                                 {item.babyChair}
//                                             </Badge>
//                                         </TableCell>

//                                         {/* Actions */}
//                                         <TableCell className="py-4 pr-6 text-right">
//                                             <div className="flex items-center justify-end gap-2">
//                                                 <ActionButton>
//                                                     <PencilIcon className="h-5 w-5 text-iconColor" />
//                                                 </ActionButton>
//                                                 <ActionButton>
//                                                     <TrashIcon className="h-5 w-5 text-iconColor" />
//                                                 </ActionButton>
//                                             </div>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </div>
//                 <div className="pt-12">
//                     <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
//                         {/* Table Title + Add Button */}
//                         <div className="flex items-center justify-between px-6 py-4">
//                             <h2 className="text-lg font-semibold text-gray-900">
//                                 Saturday, 30 Aug
//                             </h2>
//                             <IconButton>
//                                 <AdCalender /> 1 Bookings
//                             </IconButton>
//                         </div>

//                         <Table>
//                             <TableHeader>
//                                 <TableHead className="py-4 pl-6 text-xs font-semibold text-gray-500">
//                                     <div className="flex items-center gap-1">
//                                         Time
//                                         <span>
//                                             <Selector />
//                                         </span>
//                                     </div>
//                                 </TableHead>
//                                 <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                                     Customer (Name + Phone)
//                                 </TableHead>
//                                 <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                                     Details(Pax + Table)
//                                 </TableHead>
//                                 <TableHead className="py-4 text-xs font-semibold text-gray-500">
//                                     Baby Chair
//                                 </TableHead>
//                                 <TableHead className="py-4 pr-6 text-right text-xs font-semibold text-gray-500">
//                                     Actions
//                                 </TableHead>
//                             </TableHeader>
//                             <TableBody>
//                                 {satData.map((item) => (
//                                     <TableRow
//                                         key={item.id}
//                                         className="border-b border-gray-200 transition-colors hover:bg-gray-50"
//                                     >
//                                         {/* Time */}
//                                         <TableCell className="py-4 pl-6">
//                                             <div className="font-semibold text-gray-900">
//                                                 {item.time}
//                                             </div>
//                                         </TableCell>

//                                         {/* Customer (Name + Phone) */}
//                                         <TableCell className="py-4">
//                                             <div className="font-semibold text-gray-900">
//                                                 {item.customerName}
//                                             </div>
//                                             <div className="mt-0.5 text-xs text-gray-500">
//                                                 {item.customerPhone}
//                                             </div>
//                                         </TableCell>

//                                         {/* Details (Pax + Table) */}
//                                         <TableCell className="py-4">
//                                             <div className="font-semibold text-gray-900">
//                                                 {item.guests}
//                                             </div>
//                                             <div className="mt-0.5 text-xs text-gray-500">
//                                                 {item.tableInfo}
//                                             </div>
//                                         </TableCell>

//                                         {/* Baby Chair Badge */}
//                                         <TableCell className="py-4">
//                                             <Badge
//                                                 variant={
//                                                     babyChairVariantMap[
//                                                         item.babyChair
//                                                     ] || 'gray'
//                                                 }
//                                                 withDot={true}
//                                                 rounded="md"
//                                             >
//                                                 {item.babyChair}
//                                             </Badge>
//                                         </TableCell>

//                                         {/* Actions */}
//                                         <TableCell className="py-4 pr-6 text-right">
//                                             <div className="flex items-center justify-end gap-2">
//                                                 <ActionButton
//                                                     onClick={() => {
//                                                         setSelectedReservation(
//                                                             row,
//                                                         );
//                                                         setIsEditOpen(true);
//                                                     }}
//                                                 >
//                                                     <PencilIcon className="h-5 w-5 text-iconColor" />
//                                                 </ActionButton>
//                                                 <ActionButton>
//                                                     <TrashIcon className="h-5 w-5 text-iconColor" />
//                                                 </ActionButton>
//                                             </div>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </div>
//             </div>
//             <AddNewReservation
//                 isOpen={isAddOpen}
//                 onClose={() => setIsAddOpen(false)}
//                 onConfirm={(data) => {
//                     console.log('New reservation:', data);
//                     // call your API here
//                 }}
//             />
//             {selectedReservation && (
//                 <EditReservation
//                     isOpen={isEditOpen}
//                     onClose={() => setIsEditOpen(false)}
//                     initialData={selectedReservation} // pre-fills all fields
//                     onUpdate={(data) => {
//                         console.log('Updated:', data);
//                         // call your update API here
//                     }}
//                     onCancel={() => {
//                         console.log('Reservation cancelled');
//                         // call your cancel/delete API here
//                     }}
//                 />
//             )}
//         </div>
//     );
// }

import AdCalender from '@/shared/images/icons/adCalender.svg?react';
import TrashIcon from '@/shared/images/icons/delIcon.svg?react';
import searchIcon from '@/shared/images/icons/inputSearch.svg';
import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';
import Selector from '@/shared/images/icons/selectorIcon.svg?react';
import ActionButton from '@/shared/sharedcomponents/ui/ActionButton';
import Badge, { BadgeVariant } from '@/shared/sharedcomponents/ui/Badge';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input } from '@/shared/sharedcomponents/ui/FormElements';
import AddNewReservation from '../modals/AddNewReservation';
import EditReservation, {
    ReservationFormData,
} from '../modals/EditReservation';

import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '@/shared/sharedcomponents/ui/Table';
import { useState } from 'react';

export default function Scheduled() {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedReservation, setSelectedReservation] =
        useState<ReservationFormData | null>(null);

    const itemsData = [
        {
            id: '1',
            time: '12:30 PM',
            customerName: 'John Doe',
            customerPhone: '+965 1122 3344',
            guests: '2 Guests',
            tableInfo: '1st Floor · A3',
            babyChair: 'Yes',
        },
        {
            id: '2',
            time: '08:00 PM',
            customerName: 'Sarah Smith',
            customerPhone: '+965 9988 7766',
            guests: '5 Guests',
            tableInfo: '1st Floor · A7',
            babyChair: 'No',
        },
    ];

    const satData = [
        {
            id: 1,
            time: '01:00 PM',
            customerName: 'Mike Ross',
            customerPhone: '+965 5544 3322',
            guests: '12 Guests',
            tableInfo: '1st Floor · A7',
            babyChair: 'No',
        },
    ];

    const babyChairVariantMap: Record<string, BadgeVariant> = {
        Yes: 'success',
        No: 'gray',
    };

    // Helper: map a table row to the shape EditReservation expects
    const toReservationFormData = (item: {
        time: string;
        customerName: string;
        customerPhone: string;
        guests: string;
        tableInfo: string;
        babyChair: string;
    }): ReservationFormData => ({
        customerName: item.customerName,
        countryCode: item.customerPhone.split(' ')[0] ?? '+965',
        phoneNumber: item.customerPhone.split(' ').slice(1).join(' '),
        date: '29 Aug 2025',
        time: item.time,
        floor: item.tableInfo.split(' · ')[0] ?? '',
        tablePreference: item.tableInfo.split(' · ')[1] ?? '',
        pax: parseInt(item.guests) || 1,
        babyChair: item.babyChair.toLowerCase() as 'yes' | 'no',
        specialRequests: '',
    });

    return (
        <div>
            {/**tabs header */}
            <div className="flex items-center justify-between">
                <div className="w-1/3">
                    <Input
                        placeholder="Search"
                        icon={searchIcon}
                        className="w-1/2"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex gap-2 rounded-xl bg-gray-100 px-2 py-1">
                        <button className="flex justify-center gap-2 rounded-lg border border-borderColor bg-white px-2 py-1">
                            All
                            <span className="rounded-lg bg-gray-100">45</span>
                        </button>
                        <button className="flex justify-center gap-2 rounded-lg border border-borderColor px-2 py-1">
                            Tommorrow
                            <span className="rounded-lg bg-gray-100">10</span>
                        </button>
                        <button className="flex justify-center gap-2 rounded-lg border border-borderColor px-2 py-1">
                            Weekend
                            <span className="rounded-lg bg-gray-100">20</span>
                        </button>
                    </div>

                    <div>
                        <Button
                            className="py-2.5"
                            onClick={() => setIsAddOpen(true)}
                        >
                            <PlusIcon className="h-4 w-4 text-white" />
                            Add New Reservation
                        </Button>
                    </div>
                </div>
            </div>
            {/**tables */}
            <div className="pt-12">
                <div>
                    <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
                        {/* Table Title + Add Button */}
                        <div className="flex items-center justify-between px-6 py-4">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Friday, 29 Aug
                            </h2>
                            <IconButton>
                                <AdCalender /> 3 Bookings
                            </IconButton>
                        </div>

                        <Table>
                            <TableHeader>
                                <TableHead className="py-4 pl-6 text-xs font-semibold text-gray-500">
                                    <div className="flex items-center gap-1">
                                        Time
                                        <span>
                                            <Selector />
                                        </span>
                                    </div>
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold text-gray-500">
                                    Customer (Name + Phone)
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold text-gray-500">
                                    Details(Pax + Table)
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold text-gray-500">
                                    Baby Chair
                                </TableHead>
                                <TableHead className="py-4 pr-6 text-right text-xs font-semibold text-gray-500">
                                    Actions
                                </TableHead>
                            </TableHeader>
                            <TableBody>
                                {itemsData.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                                    >
                                        {/* Time */}
                                        <TableCell className="py-4 pl-6">
                                            <div className="font-semibold text-gray-900">
                                                {item.time}
                                            </div>
                                        </TableCell>

                                        {/* Customer (Name + Phone) */}
                                        <TableCell className="py-4">
                                            <div className="font-semibold text-gray-900">
                                                {item.customerName}
                                            </div>
                                            <div className="mt-0.5 text-xs text-gray-500">
                                                {item.customerPhone}
                                            </div>
                                        </TableCell>

                                        {/* Details (Pax + Table) */}
                                        <TableCell className="py-4">
                                            <div className="font-semibold text-gray-900">
                                                {item.guests}
                                            </div>
                                            <div className="mt-0.5 text-xs text-gray-500">
                                                {item.tableInfo}
                                            </div>
                                        </TableCell>

                                        {/* Baby Chair Badge */}
                                        <TableCell className="py-4">
                                            <Badge
                                                variant={
                                                    babyChairVariantMap[
                                                        item.babyChair
                                                    ] || 'gray'
                                                }
                                                withDot={true}
                                                rounded="md"
                                            >
                                                {item.babyChair}
                                            </Badge>
                                        </TableCell>

                                        {/* Actions */}
                                        <TableCell className="py-4 pr-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <ActionButton
                                                    onClick={() => {
                                                        setSelectedReservation(
                                                            toReservationFormData(
                                                                item,
                                                            ),
                                                        );
                                                        setIsEditOpen(true);
                                                    }}
                                                >
                                                    <PencilIcon className="h-5 w-5 text-iconColor" />
                                                </ActionButton>
                                                <ActionButton>
                                                    <TrashIcon className="h-5 w-5 text-iconColor" />
                                                </ActionButton>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="pt-12">
                    <TableContainer className="overflow-hidden rounded-xl bg-white shadow-sm">
                        {/* Table Title + Add Button */}
                        <div className="flex items-center justify-between px-6 py-4">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Saturday, 30 Aug
                            </h2>
                            <IconButton>
                                <AdCalender /> 1 Bookings
                            </IconButton>
                        </div>

                        <Table>
                            <TableHeader>
                                <TableHead className="py-4 pl-6 text-xs font-semibold text-gray-500">
                                    <div className="flex items-center gap-1">
                                        Time
                                        <span>
                                            <Selector />
                                        </span>
                                    </div>
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold text-gray-500">
                                    Customer (Name + Phone)
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold text-gray-500">
                                    Details(Pax + Table)
                                </TableHead>
                                <TableHead className="py-4 text-xs font-semibold text-gray-500">
                                    Baby Chair
                                </TableHead>
                                <TableHead className="py-4 pr-6 text-right text-xs font-semibold text-gray-500">
                                    Actions
                                </TableHead>
                            </TableHeader>
                            <TableBody>
                                {satData.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                                    >
                                        {/* Time */}
                                        <TableCell className="py-4 pl-6">
                                            <div className="font-semibold text-gray-900">
                                                {item.time}
                                            </div>
                                        </TableCell>

                                        {/* Customer (Name + Phone) */}
                                        <TableCell className="py-4">
                                            <div className="font-semibold text-gray-900">
                                                {item.customerName}
                                            </div>
                                            <div className="mt-0.5 text-xs text-gray-500">
                                                {item.customerPhone}
                                            </div>
                                        </TableCell>

                                        {/* Details (Pax + Table) */}
                                        <TableCell className="py-4">
                                            <div className="font-semibold text-gray-900">
                                                {item.guests}
                                            </div>
                                            <div className="mt-0.5 text-xs text-gray-500">
                                                {item.tableInfo}
                                            </div>
                                        </TableCell>

                                        {/* Baby Chair Badge */}
                                        <TableCell className="py-4">
                                            <Badge
                                                variant={
                                                    babyChairVariantMap[
                                                        item.babyChair
                                                    ] || 'gray'
                                                }
                                                withDot={true}
                                                rounded="md"
                                            >
                                                {item.babyChair}
                                            </Badge>
                                        </TableCell>

                                        {/* Actions */}
                                        <TableCell className="py-4 pr-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <ActionButton
                                                    onClick={() => {
                                                        setSelectedReservation(
                                                            toReservationFormData(
                                                                item,
                                                            ), // ✅ was 'row', now 'item'
                                                        );
                                                        setIsEditOpen(true);
                                                    }}
                                                >
                                                    <PencilIcon className="h-5 w-5 text-iconColor" />
                                                </ActionButton>
                                                <ActionButton>
                                                    <TrashIcon className="h-5 w-5 text-iconColor" />
                                                </ActionButton>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <AddNewReservation
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onConfirm={(data) => {
                    console.log('New reservation:', data);
                    // call your API here
                }}
            />
            {selectedReservation && (
                <EditReservation
                    isOpen={isEditOpen}
                    onClose={() => setIsEditOpen(false)}
                    initialData={selectedReservation}
                    onUpdate={(data) => {
                        console.log('Updated:', data);
                        // call your update API here
                    }}
                    onCancel={() => {
                        console.log('Reservation cancelled');
                        // call your cancel/delete API here
                    }}
                />
            )}
        </div>
    );
}
