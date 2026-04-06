// import Badge from '@superadmin/components/Badge';
// import Menu from '@shared/images/icons/menuVertical.svg?react';
// import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
// import { Search } from 'lucide-react';
// import SubMenu from '../ui/SubMenu';
// import { router } from '@inertiajs/react';
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
// import SuccessToast from '../toasts/SuccessToast';
// import ActionButton from '../ui/ActionButton';
// import IconButton from '../ui/IconButton';

// type InstallStatus = 'Pending' | 'Active' | 'Cancelled';

// interface InstallItem {
//     id: number;
//     tenant: string;
//     bizId: string;
//     app: string;
//     purchasedOn: string;
//     status: InstallStatus;
// }

// const DATA: InstallItem[] = [
//     {
//         id: 1,
//         tenant: 'BurgerTown',
//         bizId: 'BIZ-2055',
//         app: 'SMS Gateway',
//         purchasedOn: '03 Sept 2025',
//         status: 'Pending',
//     },
//     {
//         id: 2,
//         tenant: 'PizzaPalace',
//         bizId: 'BIZ-2075',
//         app: 'POS Sync',
//         purchasedOn: '04 Sept 2025',
//         status: 'Active',
//     },
//     {
//         id: 3,
//         tenant: 'TacoHaven',
//         bizId: 'BIZ-2074',
//         app: 'Email Marketing',
//         purchasedOn: '05 Sept 2025',
//         status: 'Cancelled',
//     },
// ];

// const statusVariant = (s: InstallStatus) =>
//     s === 'Active' ? 'success' : s === 'Pending' ? 'warning' : 'gray';

// export default function Installations() {
//     const [search, setSearch] = useState('');
//     const [showToast, setShowToast] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isContactModalOpen, setIsContactModalOpen] = useState(false);

//     const filtered = DATA.filter((d) =>
//         d.tenant.toLowerCase().includes(search.toLowerCase()),
//     );
//     const menuItems = [
//         {
//             label: 'View Business Profile',
//             onClick: () => {
//                 // Navigates to the profile page using Inertia
//                 // Replace with your actual route route!
//                 router.visit('/business/profile-id');
//             },
//         },
//         {
//             label: 'Contact Info',
//             onClick: () => {
//                 // Opens the modal instead of navigating
//                 setIsContactModalOpen(true);
//             },
//         },
//     ];

//     return (
//         <div>
//             <div className="rounded-xl border border-borderColor pt-6">
//                 <div className="flex items-center justify-between px-6 pb-4">
//                     <h2 className="text-lg font-semibold text-gray-900">
//                         Installation Requests
//                     </h2>
//                     <div className="relative">
//                         <Search className="pointer-events-none absolute inset-y-0 left-3 my-auto h-4 w-4 text-gray-400" />
//                         <input
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                             placeholder="Search by Business Name"
//                             className="w-64 rounded-lg border border-gray-300 py-2 pr-3 pl-9 text-sm outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
//                         />
//                     </div>
//                 </div>
//                 <TableContainerOne>
//                     <Table>
//                         <TableHeader>
//                             <TableHead className="font-semibold text-gray-600">
//                                 Tenant / Business
//                             </TableHead>
//                             <TableHead className="font-semibold text-gray-600">
//                                 App / Integration
//                             </TableHead>
//                             <TableHead className="font-semibold text-gray-600">
//                                 <div className="flex cursor-pointer items-center gap-1">
//                                     Purchased On <SelectorIcon />
//                                 </div>
//                             </TableHead>
//                             <TableHead className="font-semibold text-gray-600">
//                                 <div className="flex cursor-pointer items-center gap-1">
//                                     Status <SelectorIcon />
//                                 </div>
//                             </TableHead>
//                             <TableHead className="text-right font-semibold text-gray-600">
//                                 Actions
//                             </TableHead>
//                         </TableHeader>
//                         <TableBody>
//                             {filtered.map((item) => (
//                                 <TableRow key={item.id}>
//                                     <TableCell>
//                                         <div className="font-medium text-gray-900">
//                                             {item.tenant}
//                                         </div>
//                                         <div className="text-sm text-gray-400">
//                                             {item.bizId}
//                                         </div>
//                                     </TableCell>
//                                     <TableCell className="font-medium text-gray-900">
//                                         {item.app}
//                                     </TableCell>
//                                     <TableCell className="text-gray-500">
//                                         {item.purchasedOn}
//                                     </TableCell>
//                                     <TableCell>
//                                         <Badge
//                                             variant={statusVariant(item.status)}
//                                             withDot
//                                             rounded="md"
//                                         >
//                                             {item.status}
//                                         </Badge>
//                                     </TableCell>
//                                     <TableCell className="flex justify-end">
//                                         {item.status === 'Pending' && (
//                                             <div className="flex items-center gap-2">
//                                                 <IconButton
//                                                     onClick={() =>
//                                                         setShowToast(true)
//                                                     }
//                                                 >
//                                                     Mark as done
//                                                 </IconButton>
//                                                 <ActionButton>
//                                                     <Menu />
//                                                 </ActionButton>
//                                             </div>
//                                         )}
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainerOne>
//                 <Pagination />
//             </div>
//             {showToast && (
//                 <SuccessToast
//                     title="Marked as Done"
//                     message="Action completed Marked as Done."
//                     actionText="Dismiss"
//                     onAction={() => console.log('Action clicked')}
//                     onClose={() => setShowToast(false)}
//                 />
//             )}
//         </div>
//     );
// }

import Badge from '@/superadmin/components/Badge';
import { router } from '@inertiajs/react';
import Menu from '@shared/images/icons/menuVertical.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
import { Search } from 'lucide-react';
import { useState } from 'react';
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
import SuccessToast from '../toasts/SuccessToast';
import ActionButton from '../ui/ActionButton';
import IconButton from '../ui/IconButton';
import SubMenu from '../ui/SubMenu';
// Make sure to adjust this import path to where your new component is located!
import ContactModal from '../Modals/ContactModal';

type InstallStatus = 'Pending' | 'Active' | 'Cancelled';

interface InstallItem {
    id: number;
    tenant: string;
    bizId: string;
    app: string;
    purchasedOn: string;
    status: InstallStatus;
}

const DATA: InstallItem[] = [
    {
        id: 1,
        tenant: 'BurgerTown',
        bizId: 'BIZ-2055',
        app: 'SMS Gateway',
        purchasedOn: '03 Sept 2025',
        status: 'Pending',
    },
    {
        id: 2,
        tenant: 'PizzaPalace',
        bizId: 'BIZ-2075',
        app: 'POS Sync',
        purchasedOn: '04 Sept 2025',
        status: 'Active',
    },
    {
        id: 3,
        tenant: 'TacoHaven',
        bizId: 'BIZ-2074',
        app: 'Email Marketing',
        purchasedOn: '05 Sept 2025',
        status: 'Cancelled',
    },
];

const statusVariant = (s: InstallStatus) =>
    s === 'Active' ? 'success' : s === 'Pending' ? 'warning' : 'gray';

export default function Installations() {
    const [search, setSearch] = useState('');
    const [showToast, setShowToast] = useState(false);

    const [openMenuId, setOpenMenuId] = useState<number | null>(null);

    // CHANGED: Instead of a boolean, we store the item so we can pass its data to the modal
    const [selectedContact, setSelectedContact] = useState<InstallItem | null>(
        null,
    );

    const filtered = DATA.filter((d) =>
        d.tenant.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div>
            <div className="rounded-xl border border-borderColor pt-6">
                <div className="flex items-center justify-between px-6 pb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Installation Requests
                    </h2>
                    <div className="relative">
                        <Search className="pointer-events-none absolute inset-y-0 left-3 my-auto h-4 w-4 text-gray-400" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by Business Name"
                            className="w-64 rounded-lg border border-gray-300 py-2 pr-3 pl-9 text-sm outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                        />
                    </div>
                </div>
                <TableContainerOne>
                    <Table>
                        <TableHeader>
                            <TableHead className="font-semibold text-gray-600">
                                Tenant / Business
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                App / Integration
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Purchased On <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="font-semibold text-gray-600">
                                <div className="flex cursor-pointer items-center gap-1">
                                    Status <SelectorIcon />
                                </div>
                            </TableHead>
                            <TableHead className="text-right font-semibold text-gray-600">
                                Actions
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {filtered.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <div className="font-medium text-gray-900">
                                            {item.tenant}
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            {item.bizId}
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-medium text-gray-900">
                                        {item.app}
                                    </TableCell>
                                    <TableCell className="text-gray-500">
                                        {item.purchasedOn}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={statusVariant(item.status)}
                                            withDot
                                            rounded="md"
                                        >
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="flex justify-end">
                                        {item.status === 'Pending' && (
                                            <div className="flex items-center gap-2">
                                                <IconButton
                                                    onClick={() =>
                                                        setShowToast(true)
                                                    }
                                                >
                                                    Mark as done
                                                </IconButton>

                                                <div className="relative inline-block">
                                                    <ActionButton
                                                        onClick={() =>
                                                            setOpenMenuId(
                                                                openMenuId ===
                                                                    item.id
                                                                    ? null
                                                                    : item.id,
                                                            )
                                                        }
                                                    >
                                                        <Menu />
                                                    </ActionButton>

                                                    {openMenuId === item.id && (
                                                        <SubMenu
                                                            items={[
                                                                {
                                                                    label: 'View Business Profile',
                                                                    onClick:
                                                                        () => {
                                                                            router.visit(
                                                                                '/business/businessoverview',
                                                                            );
                                                                        },
                                                                },
                                                                {
                                                                    label: 'Contact Info',
                                                                    onClick:
                                                                        () => {
                                                                            // Pass the specific row's data into state
                                                                            setSelectedContact(
                                                                                item,
                                                                            );
                                                                        },
                                                                },
                                                            ]}
                                                            onClose={() =>
                                                                setOpenMenuId(
                                                                    null,
                                                                )
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerOne>
                <Pagination />
            </div>

            {showToast && (
                <SuccessToast
                    title="Installation Recorded"
                    message="SMS Gateway for BurgerTown has been updated to active status."
                    actionText="Dismiss"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => setShowToast(false)}
                />
            )}

            {/* CHANGED: Render your new component using the selected row's data */}
            {selectedContact && (
                <ContactModal
                    businessName={selectedContact.tenant}
                    onClose={() => setSelectedContact(null)}
                />
            )}
        </div>
    );
}
