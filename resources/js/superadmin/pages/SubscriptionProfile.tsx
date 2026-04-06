// import Badge, { BadgeVariant } from '@superadmin/components/Badge';
// import SimpleCard from '@superadmin/components/cards/SimpleCard';
// import StatCardAlt from '@superadmin/components/cards/StatCardAlt';
// import ContactModal from '@superadmin/components/Modals/ContactModal';
// import EditPlanModal from '@superadmin/components/Modals/EditPlanModal';
// import UninstallModal from '@superadmin/components/Modals/UninstallModal';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainerOne,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@superadmin/components/OuterTable';
// import SidePannel from '@superadmin/components/SidePannel';
// import TopBar from '@superadmin/components/TopBar';
// import ActionButton from '@superadmin/components/ui/ActionButton';
// import IconButton from '@superadmin/components/ui/IconButton';
// import SubMenu from '@superadmin/components/ui/SubMenu';
// import BackArrow from '@shared/images/icons/backArrow.svg?react';
// import Dashboard from '@shared/images/icons/dashBaordSvg.svg?react';
// import AppIcon from '@shared/images/icons/employeeScheduling.svg?react';
// import MasterCard from '@shared/images/icons/Mastercard.svg?react';
// import Menu from '@shared/images/icons/menuVertical.svg?react';
// import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
// import Dp from '@shared/images/icons/pizzaPalaceDp.svg?react';
// import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
// import TrendGreen from '@shared/images/icons/trendGreen.svg?react';
// import { Link } from '@inertiajs/react';
// import { useState } from 'react';

// export default function SubscriptionProfile() {
//     const [isContactModalOpen, setIsContactModalOpen] = useState(false);
//     const [isEditPlanModalOpen, setIsEditPlanModalOpen] = useState(false);
//     const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
//     const [openMenuId, setOpenMenuId] = useState<number | null>(null);
//     const [isUninstallModalOpen, setIsUninstallModalOpen] = useState(false);

//     const addOnData = [
//         {
//             id: 1,
//             app: {
//                 appname: 'Employee Scheduling',
//                 appby: 'Global Tech Solutions',
//             },
//             billing: {
//                 currency: '5.000 KWD',
//                 subCurrency: '45.000 AED',
//             },
//             cycle: 'Monthly',
//             installDate: '12 Aug 2025',
//             status: 'Active',
//             AppIcon: AppIcon,
//         },
//         {
//             id: 2,
//             app: {
//                 appname: 'Employee status',
//                 appby: 'Ordenaire',
//             },
//             billing: {
//                 currency: '5.000 KWD',
//                 subCurrency: '45.000 AED',
//             },
//             cycle: 'Monthly',
//             installDate: '12 Aug 2025',
//             status: 'Active',
//             AppIcon: AppIcon,
//         },
//     ];

//     const [selectedItem, setSelectedItem] = useState<
//         (typeof addOnData)[0] | null
//     >(null);

//     const breadcrumbs = [
//         {
//             label: 'Subscription & Billing',
//             isActive: false,
//             href: '/subscriptionsandbilling',
//         },
//         {
//             label: 'Subscribers',
//             isActive: false,
//             href: '/subscriptionsandbilling',
//         },
//         {
//             label: 'Manage',
//             isActive: true,
//         },
//     ];

//     const billingData = [
//         {
//             id: 1,
//             bussinessId: 'INV-2025-002',
//             date: '03 Sept 2025',
//             billing: {
//                 currency: '5.000 KWD',
//                 subCurrency: '45.000 AED',
//             },
//             status: 'Paid',
//             typeOfCharges: 'Subscription',
//             discount: '0.000 AED',
//         },
//         {
//             id: 2,
//             bussinessId: 'INV-2025-003',
//             date: '03 Sept 2025',
//             billing: {
//                 currency: '5.000 KWD',
//                 subCurrency: '45.000 AED',
//             },
//             status: 'Failed',
//             typeOfCharges: 'Subscription',
//             discount: '0.000 AED',
//         },
//         {
//             id: 3,
//             bussinessId: 'INV-2025-004',
//             date: '03 Sept 2025',
//             billing: {
//                 currency: '5.000 KWD',
//                 subCurrency: '45.000 AED',
//             },
//             status: 'Paid',
//             typeOfCharges: 'Subscription',
//             discount: '0.000 AED',
//         },
//     ];

//     const breakdownData = [
//         {
//             id: 1,
//             resource: {
//                 title: 'Active Staff',
//                 limit: 'Limit: 5 Users',
//             },
//             usage: '7',
//             justification: {
//                 main: '7 Users (Limit: 5)',
//                 date: 'Detected: 05 Jan',
//             },
//             status: 'Invoiced',
//             currency: {
//                 main: '4.000 KWD',
//                 sub: '50.000 AED',
//             },
//         },
//         {
//             id: 2,
//             resource: {
//                 title: 'Menu Items',
//                 limit: 'Limit: 150 Items',
//             },
//             usage: '112',
//             justification: {
//                 main: '+3 Extra Items',
//                 date: 'Detected: 01 Jan',
//             },
//             status: 'Resolved',
//             currency: {
//                 main: '0.000 KWD',
//                 sub: '0.000 AED',
//             },
//         },
//         {
//             id: 3,
//             resource: {
//                 title: 'Kiosk Machines',
//                 limit: 'Limit: 0 (Add-on)',
//             },
//             usage: '2',
//             justification: {
//                 main: '1 Device',
//                 date: 'Purchased: 02 Jan',
//             },
//             status: 'One-Time',
//             currency: {
//                 main: '100.000 KWD',
//                 sub: '950.000 AED',
//             },
//         },
//         {
//             id: 4,
//             resource: {
//                 title: 'Storage',
//                 limit: 'Limit: 10 GB',
//             },
//             usage: '2.1',
//             justification: {
//                 main: '12 GB (Limit: 10)',
//                 date: 'Detected: 01 Jan',
//             },
//             status: 'Waived',
//             currency: {
//                 main: '0.000 KWD',
//                 sub: '0.000 AED',
//             },
//         },
//     ];

//     const statusMap: Record<string, BadgeVariant> = {
//         Paid: 'active',
//         Failed: 'failed',
//         Invoiced: 'purple',
//         Resolved: 'success',
//         'One-Time': 'blue',
//         Waived: 'gray',
//         'Cancellation Requested': 'warning',
//     };

//     return (
//         <div className="flex min-h-screen">
//             <SidePannel />
//             <main className="flex flex-1 flex-col">
//                 <TopBar
//                     title="Business Subscription Detail"
//                     icon={Dashboard}
//                     breadcrumbs={breadcrumbs}
//                 />
//                 <div className="flex-1 px-8">
//                     {/* Back Button */}
//                     <div className="mt-6 mb-6">
//                         <Link href="/superadmin/subscription-and-billing">
//                             <IconButton>
//                                 <BackArrow className="h-4 w-4 text-iconColor" />
//                                 Back
//                             </IconButton>
//                         </Link>
//                     </div>

//                     {/* Business Info Card */}
//                     <div className="rounded-xl border border-borderColor bg-[#F8FFEB] px-6 pb-8 shadow-xs">
//                         <div className="mt-2 grid grid-cols-[1.5fr_1fr_1fr_1fr] p-4">
//                             <div className="flex items-center gap-3">
//                                 <Dp className="h-20 w-20" />
//                                 <div>
//                                     <h1 className="mb-3 font-medium text-gray-700">
//                                         Business Name
//                                     </h1>
//                                     <h1 className="font-semibold text-gray-900">
//                                         PizzaPalace . BIZ-2050
//                                     </h1>
//                                 </div>
//                             </div>
//                             <div>
//                                 <h1 className="mb-3 font-medium text-gray-700">
//                                     Current Plan
//                                 </h1>
//                                 <h1 className="font-semibold text-gray-900">
//                                     Pro (Monthly)
//                                 </h1>
//                             </div>
//                             <div>
//                                 <h1 className="mb-3 font-medium text-gray-700">
//                                     Subscription Status
//                                 </h1>
//                                 <h1 className="font-semibold text-gray-900">
//                                     <Badge variant="success" withDot={true}>
//                                         Active
//                                     </Badge>
//                                 </h1>
//                             </div>
//                             <div>
//                                 <h1 className="mb-3 font-medium text-gray-700">
//                                     Business Name
//                                 </h1>
//                                 <h1 className="font-semibold text-gray-900">
//                                     PizzaPalace . BIZ-2050
//                                 </h1>
//                             </div>
//                         </div>
//                         {/* Action Buttons */}
//                         <div className="flex justify-end gap-6 border-t border-primary pt-6">
//                             <IconButton className="bg-white">
//                                 Login as User
//                             </IconButton>
//                             <IconButton
//                                 onClick={() => setIsContactModalOpen(true)}
//                                 className="bg-white"
//                             >
//                                 View Contract
//                             </IconButton>
//                             <IconButton
//                                 onClick={() => setIsEditPlanModalOpen(true)}
//                                 className="bg-white"
//                             >
//                                 <PencilIcon className="h-4 w-4" />
//                                 Edit Plan
//                             </IconButton>
//                         </div>
//                     </div>

//                     {/* Plan Summary */}
//                     <p className="mt-8 text-lg font-semibold">Plan Summary</p>
//                     <div className="mt-4 mb-8 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-4 pb-4 shadow-xs md:grid-cols-3 lg:grid-cols-3">
//                         <StatCardAlt
//                             title="Current Plan"
//                             value="Pro Plan"
//                             trend=""
//                             trendText=""
//                             trendType="positive"
//                             trendIcon={TrendGreen}
//                         />
//                         <StatCardAlt
//                             title="Billing Cycle"
//                             value="Monthly (AED 450)"
//                             trend=""
//                             trendText=""
//                             trendType="positive"
//                             trendIcon={TrendGreen}
//                         />
//                         <StatCardAlt
//                             title="Next Renewal"
//                             value="12 Oct 2026"
//                             trend=""
//                             trendText=""
//                             trendType="positive"
//                             trendIcon={TrendGreen}
//                         />
//                     </div>

//                     {/* Installed Apps & Add-ons */}
//                     <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
//                         <div className="flex items-center px-4 py-5">
//                             <h2 className="text-xl font-semibold text-gray-900">
//                                 Installed Apps & Add-ons
//                             </h2>
//                         </div>
//                         <TableContainerOne className="overflow-visible rounded-b-xl border-none shadow-none">
//                             <Table className="">
//                                 <TableHeader>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         App Details
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Billing Amount
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Payment Cycle
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Installed Date
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         <div className="flex items-center gap-1">
//                                             Status <SelectorIcon />
//                                         </div>
//                                     </TableHead>
//                                     <TableHead className="text-md text-right font-medium text-gray-700">
//                                         Actions
//                                     </TableHead>
//                                 </TableHeader>
//                                 <TableBody>
//                                     {addOnData.map((item) => {
//                                         const menuItems = [
//                                             {
//                                                 label: 'Uninstall',
//                                                 onClick: () => {
//                                                     setSelectedItem(item);
//                                                     setIsSubMenuOpen(false);
//                                                     setIsUninstallModalOpen(
//                                                         true,
//                                                     );
//                                                 },
//                                             },
//                                         ];

//                                         return (
//                                             <TableRow key={item.id}>
//                                                 <TableCell>
//                                                     <p className="font-medium text-gray-900">
//                                                         {item.app.appname}
//                                                     </p>
//                                                     <p>{item.app.appby}</p>
//                                                 </TableCell>
//                                                 <TableCell>
//                                                     <p className="font-medium text-gray-900">
//                                                         {item.billing.currency}
//                                                     </p>
//                                                     <p>
//                                                         {
//                                                             item.billing
//                                                                 .subCurrency
//                                                         }
//                                                     </p>
//                                                 </TableCell>
//                                                 <TableCell>
//                                                     <p className="font-medium text-gray-900">
//                                                         {item.cycle}
//                                                     </p>
//                                                 </TableCell>
//                                                 <TableCell>
//                                                     {item.installDate}
//                                                 </TableCell>
//                                                 <TableCell>
//                                                     <Badge
//                                                         variant="success"
//                                                         withDot={true}
//                                                         rounded="md"
//                                                     >
//                                                         {item.status}
//                                                     </Badge>
//                                                 </TableCell>
//                                                 <TableCell className="flex justify-end overflow-visible">
//                                                     {item.status ===
//                                                     'Active' ? (
//                                                         <div className="relative inline-block">
//                                                             <ActionButton
//                                                                 onClick={() =>
//                                                                     // If clicking the currently open menu, close it. Otherwise, open this row's menu.
//                                                                     setOpenMenuId(
//                                                                         openMenuId ===
//                                                                             item.id
//                                                                             ? null
//                                                                             : item.id,
//                                                                     )
//                                                                 }
//                                                             >
//                                                                 <Menu />
//                                                             </ActionButton>

//                                                             {/* Check if THIS specific row's ID is the open one */}
//                                                             {openMenuId ===
//                                                                 item.id && (
//                                                                 <SubMenu
//                                                                     items={
//                                                                         menuItems
//                                                                     }
//                                                                     onClose={() =>
//                                                                         setOpenMenuId(
//                                                                             null,
//                                                                         )
//                                                                     }
//                                                                 />
//                                                             )}
//                                                         </div>
//                                                     ) : (
//                                                         <ActionButton>
//                                                             <Menu />
//                                                         </ActionButton>
//                                                     )}
//                                                 </TableCell>
//                                             </TableRow>
//                                         );
//                                     })}
//                                 </TableBody>
//                             </Table>
//                         </TableContainerOne>
//                     </div>

//                     {/* Usage Snapshot */}
//                     <p className="mt-8 text-lg font-semibold">Usage Snapshot</p>
//                     <div className="mt-4 mb-8 grid grid-cols-4 gap-6">
//                         <SimpleCard
//                             title="File Storage"
//                             storage="128GB "
//                             outOf=" / 64 GB"
//                         />
//                         <SimpleCard
//                             title="Seats Used"
//                             storage="2 "
//                             outOf=" / 10"
//                         />
//                         <SimpleCard
//                             title="POS Terminal Status"
//                             storage="2 "
//                             outOf="/ 3 Devices"
//                         />
//                         <SimpleCard
//                             title="WhatsApp Usage"
//                             storage="8000 "
//                             outOf=" Messages sent"
//                         />
//                     </div>

//                     {/* Billing History */}
//                     <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
//                         <div className="flex items-center px-4 py-5">
//                             <h2 className="text-xl font-semibold text-gray-900">
//                                 Billing History
//                             </h2>
//                         </div>
//                         <TableContainerOne className="rounded-b-xl border-none shadow-none">
//                             <Table>
//                                 <TableHeader>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Invoice ID
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         <div className="flex items-center gap-1">
//                                             Date
//                                             <SelectorIcon />
//                                         </div>
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Amount
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         <div className="flex items-center gap-1">
//                                             Status <SelectorIcon />
//                                         </div>
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Type of Charges
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Discount
//                                     </TableHead>
//                                     <TableHead className="text-md text-right font-medium text-gray-700">
//                                         Actions
//                                     </TableHead>
//                                 </TableHeader>
//                                 <TableBody>
//                                     {billingData.map((item) => (
//                                         <TableRow key={item.id}>
//                                             <TableCell>
//                                                 <p className="font-medium text-gray-900">
//                                                     {item.bussinessId}
//                                                 </p>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <p className="font-medium text-gray-900">
//                                                     {item.date}
//                                                 </p>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <p className="font-medium text-gray-900">
//                                                     {item.billing.currency}
//                                                 </p>
//                                                 <p>
//                                                     {item.billing.subCurrency}
//                                                 </p>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <Badge
//                                                     variant={
//                                                         statusMap[
//                                                             item.status
//                                                         ] ?? 'gray'
//                                                     }
//                                                     withDot={true}
//                                                     rounded="md"
//                                                 >
//                                                     {item.status}
//                                                 </Badge>
//                                             </TableCell>
//                                             <TableCell>
//                                                 {item.typeOfCharges}
//                                             </TableCell>
//                                             <TableCell>
//                                                 {item.discount}
//                                             </TableCell>
//                                             <TableCell className="flex justify-end">
//                                                 <ActionButton>
//                                                     <Menu className="" />
//                                                 </ActionButton>
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainerOne>
//                     </div>

//                     {/* Current Consumption Breakdown */}
//                     <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
//                         <div className="flex items-center px-4 py-5">
//                             <h2 className="text-xl font-semibold text-gray-900">
//                                 Current Consuption Breakdown
//                             </h2>
//                         </div>
//                         <TableContainerOne className="rounded-b-xl border-none shadow-none">
//                             <Table>
//                                 <TableHeader>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Resources / Limit
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Usage
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Charge Justification
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         <div className="flex items-center gap-1">
//                                             Status <SelectorIcon />
//                                         </div>
//                                     </TableHead>
//                                     <TableHead className="text-md font-medium text-gray-700">
//                                         Month-to-Date Cost
//                                     </TableHead>
//                                     <TableHead className="text-md text-right font-medium text-gray-700">
//                                         Actions
//                                     </TableHead>
//                                 </TableHeader>
//                                 <TableBody>
//                                     {breakdownData.map((item) => (
//                                         <TableRow key={item.id}>
//                                             <TableCell>
//                                                 <p className="font-medium text-gray-900">
//                                                     {item.resource.title}
//                                                 </p>
//                                                 <p className="text-sm text-gray-500">
//                                                     {item.resource.limit}
//                                                 </p>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <p className="font-medium text-gray-900">
//                                                     {item.usage}
//                                                 </p>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <p className="font-medium text-gray-900">
//                                                     {item.justification.main}
//                                                 </p>
//                                                 <p className="text-sm text-gray-500">
//                                                     {item.justification.date}
//                                                 </p>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <Badge
//                                                     variant={
//                                                         statusMap[
//                                                             item.status
//                                                         ] ?? 'gray'
//                                                     }
//                                                     withDot={true}
//                                                     rounded="full"
//                                                 >
//                                                     {item.status}
//                                                 </Badge>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <p className="font-medium text-gray-900">
//                                                     {item.currency.main}
//                                                 </p>
//                                                 <p className="text-sm text-gray-500">
//                                                     {item.currency.sub}
//                                                 </p>
//                                             </TableCell>
//                                             <TableCell className="flex justify-end">
//                                                 <ActionButton>
//                                                     <Menu />
//                                                 </ActionButton>
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainerOne>
//                     </div>

//                     {/* Auto-Pay Configuration */}
//                     <div className="mt-8">
//                         <h2 className="text-lg font-semibold">
//                             Auto-Pay Configuration
//                         </h2>
//                         <div className="mt-4 mb-4 flex gap-4">
//                             <span>Current Status</span>
//                             <span>
//                                 <Badge variant="success" withDot={true}>
//                                     Active
//                                 </Badge>
//                             </span>
//                         </div>
//                         <div className="mb-4 flex w-[512px] justify-between rounded-lg border border-borderColor p-6">
//                             <div className="flex items-center gap-3">
//                                 <div className="rounded-lg border border-borderColor bg-white px-3 py-1">
//                                     <MasterCard className="h-8 w-8" />
//                                 </div>
//                                 <div>
//                                     <h1 className="text-sm font-medium">
//                                         MasterCard ending in 1234
//                                     </h1>
//                                     <p className="mt-1 text-sm font-medium text-gray-600">
//                                         Expiry 06/2025
//                                     </p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <Badge
//                                     variant="gray"
//                                     withDot={false}
//                                     rounded="md"
//                                 >
//                                     Primary Method
//                                 </Badge>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Notes Section */}
//                     <div className="mt-8 mb-8">
//                         <h3 className="mb-4 text-sm text-xl font-semibold text-gray-900">
//                             Notes
//                         </h3>
//                         <div className="mb-4">
//                             <textarea
//                                 className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-[#7AB621] focus:ring-[#7AB621]"
//                                 rows={5}
//                                 placeholder="The Business needs review"
//                             ></textarea>
//                         </div>
//                         <IconButton>Update Note</IconButton>
//                     </div>
//                 </div>
//             </main>

//             {/* Integration of Contact Modal */}
//             {isContactModalOpen && (
//                 <ContactModal
//                     businessName="PizzaPalace"
//                     location="UAE"
//                     onClose={() => setIsContactModalOpen(false)}
//                 />
//             )}
//             {isEditPlanModalOpen && (
//                 <EditPlanModal
//                     businessName="PizzaPalace"
//                     onClose={() => setIsEditPlanModalOpen(false)}
//                 />
//             )}
//             <UninstallModal
//                 isOpen={isUninstallModalOpen}
//                 onClose={() => setIsUninstallModalOpen(false)}
//                 onConfirm={() => setIsUninstallModalOpen(false)}
//                 appName={selectedItem?.app.appname}
//                 appProvider={selectedItem?.app.appby}
//                 AppIcon={selectedItem?.AppIcon}
//             />
//         </div>
//     );
// }

// v1

import Badge, { BadgeVariant } from '@/superadmin/components/Badge';
import SimpleCard from '@/superadmin/components/cards/SimpleCard';
import StatCardAlt from '@/superadmin/components/cards/StatCardAlt';
import ContactModal from '@/superadmin/components/Modals/ContactModal';
import DownloadInvoiceModal from '@/superadmin/components/Modals/DownloadModal';
import EditPlanModal from '@/superadmin/components/Modals/EditPlanModal';
import RefundModal from '@/superadmin/components/Modals/RefundModal';
import UninstallModal from '@/superadmin/components/Modals/UninstallModal';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '@/superadmin/components/OuterTable';
import SidePannel from '@/superadmin/components/SidePannel';
import TopBar from '@/superadmin/components/TopBar';
import ActionButton from '@/superadmin/components/ui/ActionButton';
import IconButton from '@/superadmin/components/ui/IconButton';
import SubMenu from '@/superadmin/components/ui/SubMenu';
// import SuccessToast from '@superadmin/components/ui/SuccessToast';
import SuccessToast from '@/superadmin/components/toasts/SuccessToast';
import { Link } from '@inertiajs/react';
import BackArrow from '@shared/images/icons/backArrow.svg?react';
import Dashboard from '@shared/images/icons/dashBaordSvg.svg?react';
import AppIcon from '@shared/images/icons/employeeScheduling.svg?react';
import MasterCard from '@shared/images/icons/Mastercard.svg?react';
import Menu from '@shared/images/icons/menuVertical.svg?react';
import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
import Dp from '@shared/images/icons/pizzaPalaceDp.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
import TrendGreen from '@shared/images/icons/trendGreen.svg?react';
import { useState } from 'react';

export default function SubscriptionProfile() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isEditPlanModalOpen, setIsEditPlanModalOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [isUninstallModalOpen, setIsUninstallModalOpen] = useState(false);

    // Billing history state
    const [openBillingMenuId, setOpenBillingMenuId] = useState<number | null>(
        null,
    );
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
    const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
    const [selectedBillingItem, setSelectedBillingItem] = useState<
        (typeof billingData)[0] | null
    >(null);

    // Toast state
    const [showToast, setShowToast] = useState(false);
    const [toastTitle, setToastTitle] = useState('');
    const [toastMessage, setToastMessage] = useState('');

    const handleResend = (title: string, message: string) => {
        setToastTitle(title);
        setToastMessage(message);
        setShowToast(true);
    };

    const addOnData = [
        {
            id: 1,
            app: {
                appname: 'Employee Scheduling',
                appby: 'Global Tech Solutions',
            },
            billing: {
                currency: '5.000 KWD',
                subCurrency: '45.000 AED',
            },
            cycle: 'Monthly',
            installDate: '12 Aug 2025',
            status: 'Active',
            AppIcon: AppIcon,
        },
        {
            id: 2,
            app: {
                appname: 'Employee status',
                appby: 'Ordenaire',
            },
            billing: {
                currency: '5.000 KWD',
                subCurrency: '45.000 AED',
            },
            cycle: 'Monthly',
            installDate: '12 Aug 2025',
            status: 'Active',
            AppIcon: AppIcon,
        },
    ];

    const [selectedItem, setSelectedItem] = useState<
        (typeof addOnData)[0] | null
    >(null);

    const breadcrumbs = [
        {
            label: 'Subscription & Billing',
            isActive: false,
            href: '/subscriptionsandbilling',
        },
        {
            label: 'Subscribers',
            isActive: false,
            href: '/subscriptionsandbilling',
        },
        {
            label: 'Manage',
            isActive: true,
        },
    ];

    const billingData = [
        {
            id: 1,
            bussinessId: 'INV-2025-002',
            date: '03 Sept 2025',
            billing: {
                currency: '5.000 KWD',
                subCurrency: '45.000 AED',
            },
            status: 'Paid',
            typeOfCharges: 'Subscription',
            discount: '0.000 AED',
        },
        {
            id: 2,
            bussinessId: 'INV-2025-003',
            date: '03 Sept 2025',
            billing: {
                currency: '5.000 KWD',
                subCurrency: '45.000 AED',
            },
            status: 'Failed',
            typeOfCharges: 'Subscription',
            discount: '0.000 AED',
        },
        {
            id: 3,
            bussinessId: 'INV-2025-004',
            date: '03 Sept 2025',
            billing: {
                currency: '5.000 KWD',
                subCurrency: '45.000 AED',
            },
            status: 'Paid',
            typeOfCharges: 'Subscription',
            discount: '0.000 AED',
        },
    ];

    // Build the full invoice object that DownloadInvoiceModal expects
    const buildDownloadInvoice = (item: (typeof billingData)[0]) => ({
        invoiceNumber: item.bussinessId,
        issuedDate: `Issued: ${item.date}`,
        status: {
            label: (item.status === 'Paid' ? 'Active' : 'Overdue') as
                | 'Active'
                | 'Overdue'
                | 'Pending'
                | 'Refunded',
            subText: item.status === 'Paid' ? 'Paid on time' : 'Payment Failed',
        },
        billedTo: {
            name: 'PizzaPalace',
            busId: 'BIZ-2050',
            location: 'KSA',
        },
        amount: {
            primary: item.billing.currency,
            secondary: item.billing.subCurrency,
        },
    });

    const breakdownData = [
        {
            id: 1,
            resource: {
                title: 'Active Staff',
                limit: 'Limit: 5 Users',
            },
            usage: '7',
            justification: {
                main: '7 Users (Limit: 5)',
                date: 'Detected: 05 Jan',
            },
            status: 'Invoiced',
            currency: {
                main: '4.000 KWD',
                sub: '50.000 AED',
            },
        },
        {
            id: 2,
            resource: {
                title: 'Menu Items',
                limit: 'Limit: 150 Items',
            },
            usage: '112',
            justification: {
                main: '+3 Extra Items',
                date: 'Detected: 01 Jan',
            },
            status: 'Resolved',
            currency: {
                main: '0.000 KWD',
                sub: '0.000 AED',
            },
        },
        {
            id: 3,
            resource: {
                title: 'Kiosk Machines',
                limit: 'Limit: 0 (Add-on)',
            },
            usage: '2',
            justification: {
                main: '1 Device',
                date: 'Purchased: 02 Jan',
            },
            status: 'One-Time',
            currency: {
                main: '100.000 KWD',
                sub: '950.000 AED',
            },
        },
        {
            id: 4,
            resource: {
                title: 'Storage',
                limit: 'Limit: 10 GB',
            },
            usage: '2.1',
            justification: {
                main: '12 GB (Limit: 10)',
                date: 'Detected: 01 Jan',
            },
            status: 'Waived',
            currency: {
                main: '0.000 KWD',
                sub: '0.000 AED',
            },
        },
    ];

    const statusMap: Record<string, BadgeVariant> = {
        Paid: 'active',
        Failed: 'failed',
        Invoiced: 'purple',
        Resolved: 'success',
        'One-Time': 'blue',
        Waived: 'gray',
        'Cancellation Requested': 'warning',
    };

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Business Subscription Detail"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                />
                <div className="flex-1 px-8">
                    {/* Back Button */}
                    <div className="mt-6 mb-6">
                        <Link href="/superadmin/subscription-and-billing">
                            <IconButton>
                                <BackArrow className="h-4 w-4 text-iconColor" />
                                Back
                            </IconButton>
                        </Link>
                    </div>

                    {/* Business Info Card */}
                    <div className="rounded-xl border border-borderColor bg-[#F8FFEB] px-6 pb-8 shadow-xs">
                        <div className="mt-2 grid grid-cols-[1.5fr_1fr_1fr_1fr] p-4">
                            <div className="flex items-center gap-3">
                                <Dp className="h-20 w-20" />
                                <div>
                                    <h1 className="mb-3 font-medium text-gray-700">
                                        Business Name
                                    </h1>
                                    <h1 className="font-semibold text-gray-900">
                                        PizzaPalace . BIZ-2050
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-3 font-medium text-gray-700">
                                    Current Plan
                                </h1>
                                <h1 className="font-semibold text-gray-900">
                                    Pro (Monthly)
                                </h1>
                            </div>
                            <div>
                                <h1 className="mb-3 font-medium text-gray-700">
                                    Subscription Status
                                </h1>
                                <h1 className="font-semibold text-gray-900">
                                    <Badge variant="success" withDot={true}>
                                        Active
                                    </Badge>
                                </h1>
                            </div>
                            <div>
                                <h1 className="mb-3 font-medium text-gray-700">
                                    Business Name
                                </h1>
                                <h1 className="font-semibold text-gray-900">
                                    PizzaPalace . BIZ-2050
                                </h1>
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex justify-end gap-6 border-t border-primary pt-6">
                            <IconButton className="bg-white">
                                Login as User
                            </IconButton>
                            <IconButton
                                onClick={() => setIsContactModalOpen(true)}
                                className="bg-white"
                            >
                                View Contract
                            </IconButton>
                            <IconButton
                                onClick={() => setIsEditPlanModalOpen(true)}
                                className="bg-white"
                            >
                                <PencilIcon className="h-4 w-4" />
                                Edit Plan
                            </IconButton>
                        </div>
                    </div>

                    {/* Plan Summary */}
                    <p className="mt-8 text-lg font-semibold">Plan Summary</p>
                    <div className="mt-4 mb-8 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-4 pb-4 shadow-xs md:grid-cols-3 lg:grid-cols-3">
                        <StatCardAlt
                            title="Current Plan"
                            value="Pro Plan"
                            trend=""
                            trendText=""
                            trendType="positive"
                            trendIcon={TrendGreen}
                        />
                        <StatCardAlt
                            title="Billing Cycle"
                            value="Monthly (AED 450)"
                            trend=""
                            trendText=""
                            trendType="positive"
                            trendIcon={TrendGreen}
                        />
                        <StatCardAlt
                            title="Next Renewal"
                            value="12 Oct 2026"
                            trend=""
                            trendText=""
                            trendType="positive"
                            trendIcon={TrendGreen}
                        />
                    </div>

                    {/* Installed Apps & Add-ons */}
                    <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center px-4 py-5">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Installed Apps & Add-ons
                            </h2>
                        </div>
                        <TableContainerOne className="overflow-visible rounded-b-xl border-none shadow-none">
                            <Table className="">
                                <TableHeader>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        App Details
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Billing Amount
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Payment Cycle
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Installed Date
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        <div className="flex items-center gap-1">
                                            Status <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-md text-right font-medium text-gray-700">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {addOnData.map((item) => {
                                        const menuItems = [
                                            {
                                                label: 'Uninstall',
                                                onClick: () => {
                                                    setSelectedItem(item);
                                                    setIsSubMenuOpen(false);
                                                    setIsUninstallModalOpen(
                                                        true,
                                                    );
                                                },
                                            },
                                        ];

                                        return (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <p className="font-medium text-gray-900">
                                                        {item.app.appname}
                                                    </p>
                                                    <p>{item.app.appby}</p>
                                                </TableCell>
                                                <TableCell>
                                                    <p className="font-medium text-gray-900">
                                                        {item.billing.currency}
                                                    </p>
                                                    <p>
                                                        {
                                                            item.billing
                                                                .subCurrency
                                                        }
                                                    </p>
                                                </TableCell>
                                                <TableCell>
                                                    <p className="font-medium text-gray-900">
                                                        {item.cycle}
                                                    </p>
                                                </TableCell>
                                                <TableCell>
                                                    {item.installDate}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant="success"
                                                        withDot={true}
                                                        rounded="md"
                                                    >
                                                        {item.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="flex justify-end overflow-visible">
                                                    {item.status ===
                                                    'Active' ? (
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
                                                            {openMenuId ===
                                                                item.id && (
                                                                <SubMenu
                                                                    items={
                                                                        menuItems
                                                                    }
                                                                    onClose={() =>
                                                                        setOpenMenuId(
                                                                            null,
                                                                        )
                                                                    }
                                                                />
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <ActionButton>
                                                            <Menu />
                                                        </ActionButton>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </div>

                    {/* Usage Snapshot */}
                    <p className="mt-8 text-lg font-semibold">Usage Snapshot</p>
                    <div className="mt-4 mb-8 grid grid-cols-4 gap-6">
                        <SimpleCard
                            title="File Storage"
                            storage="128GB "
                            outOf=" / 64 GB"
                        />
                        <SimpleCard
                            title="Seats Used"
                            storage="2 "
                            outOf=" / 10"
                        />
                        <SimpleCard
                            title="POS Terminal Status"
                            storage="2 "
                            outOf="/ 3 Devices"
                        />
                        <SimpleCard
                            title="WhatsApp Usage"
                            storage="8000 "
                            outOf=" Messages sent"
                        />
                    </div>

                    {/* Billing History */}
                    <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center px-4 py-5">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Billing History
                            </h2>
                        </div>
                        <TableContainerOne className="overflow-visible rounded-b-xl border-none shadow-none">
                            <Table>
                                <TableHeader>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Invoice ID
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        <div className="flex items-center gap-1">
                                            Date
                                            <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Amount
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        <div className="flex items-center gap-1">
                                            Status <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Type of Charges
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Discount
                                    </TableHead>
                                    <TableHead className="text-md text-right font-medium text-gray-700">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {billingData.map((item) => {
                                        const billingMenuItems =
                                            item.status === 'Paid'
                                                ? [
                                                      {
                                                          label: 'View Invoice',
                                                          onClick: () => {
                                                              setSelectedBillingItem(
                                                                  item,
                                                              );
                                                              setOpenBillingMenuId(
                                                                  null,
                                                              );
                                                              setIsDownloadModalOpen(
                                                                  true,
                                                              );
                                                          },
                                                      },
                                                      {
                                                          label: 'Issue Refund',
                                                          onClick: () => {
                                                              setSelectedBillingItem(
                                                                  item,
                                                              );
                                                              setOpenBillingMenuId(
                                                                  null,
                                                              );
                                                              setIsRefundModalOpen(
                                                                  true,
                                                              );
                                                          },
                                                      },
                                                      {
                                                          label: 'Resend Receipt',
                                                          onClick: () => {
                                                              setOpenBillingMenuId(
                                                                  null,
                                                              );
                                                              handleResend(
                                                                  'Receipt Sent!',
                                                                  'The receipt has been resent to the client successfully.',
                                                              );
                                                          },
                                                      },
                                                  ]
                                                : [
                                                      {
                                                          label: 'View Invoice',
                                                          onClick: () => {
                                                              setSelectedBillingItem(
                                                                  item,
                                                              );
                                                              setOpenBillingMenuId(
                                                                  null,
                                                              );
                                                              setIsDownloadModalOpen(
                                                                  true,
                                                              );
                                                          },
                                                      },
                                                      {
                                                          label: 'Retry',
                                                          onClick: () => {
                                                              setOpenBillingMenuId(
                                                                  null,
                                                              );
                                                              handleResend(
                                                                  'Payment Retried!',
                                                                  'The payment has been retried successfully.',
                                                              );
                                                              // your retry logic here
                                                          },
                                                      },
                                                      {
                                                          label: 'Resend Invoice',
                                                          onClick: () => {
                                                              setOpenBillingMenuId(
                                                                  null,
                                                              );
                                                              handleResend(
                                                                  'Invoice Sent!',
                                                                  'The invoice has been resent to the client successfully.',
                                                              );
                                                          },
                                                      },
                                                  ];

                                        return (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <p className="font-medium text-gray-900">
                                                        {item.bussinessId}
                                                    </p>
                                                </TableCell>
                                                <TableCell>
                                                    <p className="font-medium text-gray-900">
                                                        {item.date}
                                                    </p>
                                                </TableCell>
                                                <TableCell>
                                                    <p className="font-medium text-gray-900">
                                                        {item.billing.currency}
                                                    </p>
                                                    <p>
                                                        {
                                                            item.billing
                                                                .subCurrency
                                                        }
                                                    </p>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant={
                                                            statusMap[
                                                                item.status
                                                            ] ?? 'gray'
                                                        }
                                                        withDot={true}
                                                        rounded="md"
                                                    >
                                                        {item.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    {item.typeOfCharges}
                                                </TableCell>
                                                <TableCell>
                                                    {item.discount}
                                                </TableCell>
                                                <TableCell className="flex justify-end overflow-visible">
                                                    <div className="relative inline-block">
                                                        <ActionButton
                                                            onClick={() =>
                                                                setOpenBillingMenuId(
                                                                    openBillingMenuId ===
                                                                        item.id
                                                                        ? null
                                                                        : item.id,
                                                                )
                                                            }
                                                        >
                                                            <Menu />
                                                        </ActionButton>
                                                        {openBillingMenuId ===
                                                            item.id && (
                                                            <SubMenu
                                                                items={
                                                                    billingMenuItems
                                                                }
                                                                onClose={() =>
                                                                    setOpenBillingMenuId(
                                                                        null,
                                                                    )
                                                                }
                                                            />
                                                        )}
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </div>

                    {/* Current Consumption Breakdown */}
                    <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center px-4 py-5">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Current Consuption Breakdown
                            </h2>
                        </div>
                        <TableContainerOne className="rounded-b-xl border-none shadow-none">
                            <Table>
                                <TableHeader>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Resources / Limit
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Usage
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Charge Justification
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        <div className="flex items-center gap-1">
                                            Status <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Month-to-Date Cost
                                    </TableHead>
                                    <TableHead className="text-md text-right font-medium text-gray-700">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {breakdownData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.resource.title}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {item.resource.limit}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.usage}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.justification.main}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {item.justification.date}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant={
                                                        statusMap[
                                                            item.status
                                                        ] ?? 'gray'
                                                    }
                                                    withDot={true}
                                                    rounded="full"
                                                >
                                                    {item.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.currency.main}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {item.currency.sub}
                                                </p>
                                            </TableCell>
                                            <TableCell className="flex justify-end">
                                                <ActionButton>
                                                    <Menu />
                                                </ActionButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </div>

                    {/* Auto-Pay Configuration */}
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold">
                            Auto-Pay Configuration
                        </h2>
                        <div className="mt-4 mb-4 flex gap-4">
                            <span>Current Status</span>
                            <span>
                                <Badge variant="success" withDot={true}>
                                    Active
                                </Badge>
                            </span>
                        </div>
                        <div className="mb-4 flex w-[512px] justify-between rounded-lg border border-borderColor p-6">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg border border-borderColor bg-white px-3 py-1">
                                    <MasterCard className="h-8 w-8" />
                                </div>
                                <div>
                                    <h1 className="text-sm font-medium">
                                        MasterCard ending in 1234
                                    </h1>
                                    <p className="mt-1 text-sm font-medium text-gray-600">
                                        Expiry 06/2025
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Badge
                                    variant="gray"
                                    withDot={false}
                                    rounded="md"
                                >
                                    Primary Method
                                </Badge>
                            </div>
                        </div>
                    </div>

                    {/* Notes Section */}
                    <div className="mt-8 mb-8">
                        <h3 className="mb-4 text-sm text-xl font-semibold text-gray-900">
                            Notes
                        </h3>
                        <div className="mb-4">
                            <textarea
                                className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-[#7AB621] focus:ring-[#7AB621]"
                                rows={5}
                                placeholder="The Business needs review"
                            ></textarea>
                        </div>
                        <IconButton>Update Note</IconButton>
                    </div>
                </div>
            </main>

            {/* ── Toast ──────────────────────────────────────────────────── */}
            {showToast && (
                <SuccessToast
                    title={toastTitle}
                    message={toastMessage}
                    actionText=""
                    onClose={() => setShowToast(false)}
                    onAction={() => {}}
                />
            )}

            {/* ── Contact Modal ───────────────────────────────────────────── */}
            {isContactModalOpen && (
                <ContactModal
                    businessName="PizzaPalace"
                    location="UAE"
                    onClose={() => setIsContactModalOpen(false)}
                />
            )}

            {/* ── Edit Plan Modal ─────────────────────────────────────────── */}
            {isEditPlanModalOpen && (
                <EditPlanModal
                    businessName="PizzaPalace"
                    onClose={() => setIsEditPlanModalOpen(false)}
                />
            )}

            {/* ── Uninstall Modal ─────────────────────────────────────────── */}
            <UninstallModal
                isOpen={isUninstallModalOpen}
                onClose={() => setIsUninstallModalOpen(false)}
                onConfirm={() => setIsUninstallModalOpen(false)}
                appName={selectedItem?.app.appname}
                appProvider={selectedItem?.app.appby}
                AppIcon={selectedItem?.AppIcon}
            />

            {/* ── Download / View Invoice Modal ───────────────────────────── */}
            {isDownloadModalOpen && selectedBillingItem && (
                <DownloadInvoiceModal
                    isOpen={isDownloadModalOpen}
                    onClose={() => setIsDownloadModalOpen(false)}
                    invoice={buildDownloadInvoice(selectedBillingItem)}
                />
            )}

            {/* ── Refund Modal ────────────────────────────────────────────── */}
            {isRefundModalOpen && selectedBillingItem && (
                <RefundModal
                    isOpen={isRefundModalOpen}
                    onClose={() => setIsRefundModalOpen(false)}
                    onConfirm={() => setIsRefundModalOpen(false)}
                    subscriber={{
                        name: 'PizzaPalace',
                        busId: 'BIZ-2050',
                        location: 'KSA',
                    }}
                    invoice={{
                        id: selectedBillingItem.bussinessId,
                        dateTime: selectedBillingItem.date,
                        typeOfCharge: selectedBillingItem.typeOfCharges,
                        amount: selectedBillingItem.billing.subCurrency,
                        amountRaw: 450,
                        currency: 'AED',
                    }}
                />
            )}
        </div>
    );
}
