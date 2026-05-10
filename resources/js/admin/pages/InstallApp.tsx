// import Button from '@/shared/sharedcomponents/ui/Button';
// import { Checkbox } from '@/shared/sharedcomponents/ui/FormElements';
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
// import TermsOfServiceModal from '../components/modals/TermsOfServiceModal';

// // Visa & Mastercard SVG logos inline (no external deps)
// const VisaLogo = () => (
//     <svg viewBox="0 0 60 20" className="h-5 w-10" fill="none">
//         <text
//             x="0"
//             y="16"
//             fontFamily="Arial"
//             fontWeight="bold"
//             fontSize="18"
//             fill="#1A1F71"
//         >
//             VISA
//         </text>
//     </svg>
// );

// const MastercardLogo = () => (
//     <svg viewBox="0 0 38 24" className="h-6 w-9">
//         <circle cx="13" cy="12" r="11" fill="#EB001B" />
//         <circle cx="25" cy="12" r="11" fill="#F79E1B" />
//         <path
//             d="M19 5.3A11 11 0 0125 12a11 11 0 01-6 6.7A11 11 0 0113 12a11 11 0 016-6.7z"
//             fill="#FF5F00"
//         />
//     </svg>
// );

// interface PaymentMethod {
//     id: string;
//     type: 'visa' | 'mastercard';
//     last4: string;
//     expiry: string;
//     isDefault: boolean;
// }

// const paymentMethods: PaymentMethod[] = [
//     {
//         id: '1',
//         type: 'visa',
//         last4: '1234',
//         expiry: '06/2025',
//         isDefault: true,
//     },
//     {
//         id: '2',
//         type: 'mastercard',
//         last4: '1234',
//         expiry: '06/2025',
//         isDefault: false,
//     },
// ];

// const orderItems = [
//     {
//         name: 'Employee Scheduling - Add on',
//         qty: 1,
//         unitPrice: 'KWD 5.000',
//         unit: 'Per month',
//         total: '5.000 KWD',
//     },
// ];

// export default function InstallApp() {
//     const [selectedCard, setSelectedCard] = useState('1');
//     const [agreed, setAgreed] = useState(false);
//     const [isTermsOpen, setIsTermsOpen] = useState(false);

//     return (
//         <div className="flex flex-1 flex-col gap-6">
//             {/* Back */}
//             <div>
//                 <IconButton href="/marketplace/explore/employee-scheduling">
//                     <svg
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                         />
//                     </svg>
//                     Back
//                 </IconButton>
//             </div>

//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//                 {/* Left: Card details */}
//                 <div>
//                     <div className="mb-3">
//                         <p className="text-base font-semibold text-gray-900">
//                             Card details{' '}
//                             <span className="text-[#8AC926]">*</span>
//                         </p>
//                         <p className="text-sm text-gray-500">
//                             Select your preferred payment method and proceed to
//                             confirm your transaction.
//                         </p>
//                     </div>

//                     <div className="space-y-3">
//                         {paymentMethods.map((card) => {
//                             const isSelected = selectedCard === card.id;
//                             return (
//                                 <button
//                                     key={card.id}
//                                     onClick={() => setSelectedCard(card.id)}
//                                     className={`w-full cursor-pointer rounded-xl border-2 p-4 text-left transition-all ${
//                                         isSelected
//                                             ? 'border-[#8AC926] bg-white shadow-sm'
//                                             : 'border-borderColor bg-white hover:border-gray-300'
//                                     }`}
//                                 >
//                                     <div className="flex items-start justify-between">
//                                         <div className="flex items-center gap-3">
//                                             {card.type === 'visa' ? (
//                                                 <VisaLogo />
//                                             ) : (
//                                                 <MastercardLogo />
//                                             )}
//                                             <div>
//                                                 <p className="text-sm font-medium text-gray-900">
//                                                     {card.type === 'visa'
//                                                         ? 'Visa'
//                                                         : 'Mastercard'}{' '}
//                                                     ending in {card.last4}
//                                                 </p>
//                                                 <p className="text-xs text-gray-500">
//                                                     Expiry {card.expiry}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         {/* Checkbox indicator */}
//                                         <div
//                                             className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${
//                                                 isSelected
//                                                     ? 'border-[#79B800] bg-[#79B800]'
//                                                     : 'border-gray-300 bg-white'
//                                             }`}
//                                         >
//                                             {isSelected && (
//                                                 <svg
//                                                     className="h-3 w-3 text-white"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                     stroke="currentColor"
//                                                     strokeWidth={3}
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         d="M5 13l4 4L19 7"
//                                                     />
//                                                 </svg>
//                                             )}
//                                         </div>
//                                     </div>
//                                     <div className="mt-3 flex items-center gap-3">
//                                         <button
//                                             onClick={(e) => {
//                                                 e.stopPropagation();
//                                             }}
//                                             className="text-xs text-gray-500 transition-colors hover:text-gray-700"
//                                         >
//                                             Set as default
//                                         </button>
//                                         <button
//                                             onClick={(e) => {
//                                                 e.stopPropagation();
//                                             }}
//                                             className="text-xs font-medium text-[#79B800] transition-colors hover:text-[#65a30d]"
//                                         >
//                                             Edit
//                                         </button>
//                                     </div>
//                                 </button>
//                             );
//                         })}

//                         {/* Add new */}
//                         <button className="flex w-full cursor-pointer items-center gap-2 rounded-xl border border-dashed border-borderColor px-4 py-3 text-sm text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700">
//                             <svg
//                                 className="h-4 w-4"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M12 4v16m8-8H4"
//                                 />
//                             </svg>
//                             Add new payment method
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right: Order summary */}
//                 <div>
//                     <TableContainer>
//                         <Table>
//                             <TableHeader>
//                                 <TableHead>Item</TableHead>
//                                 <TableHead>Quantity</TableHead>
//                                 <TableHead>Unit price</TableHead>
//                                 <TableHead>Price</TableHead>
//                             </TableHeader>
//                             <TableBody>
//                                 {orderItems.map((item, i) => (
//                                     <TableRow key={i}>
//                                         <TableCell className="font-medium text-gray-900">
//                                             {item.name}
//                                         </TableCell>
//                                         <TableCell className="text-center">
//                                             {item.qty}
//                                         </TableCell>
//                                         <TableCell>
//                                             <div className="text-sm font-medium text-gray-900">
//                                                 {item.unitPrice}
//                                             </div>
//                                             <div className="text-xs text-gray-500">
//                                                 {item.unit}
//                                             </div>
//                                         </TableCell>
//                                         <TableCell className="font-medium text-gray-900">
//                                             {item.total}
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                                 <TableRow className="bg-gray-50">
//                                     <TableCell
//                                         colSpan={3}
//                                         className="font-bold text-gray-900"
//                                     >
//                                         Total
//                                     </TableCell>
//                                     <TableCell className="font-bold text-gray-900">
//                                         KWD 5.000
//                                     </TableCell>
//                                 </TableRow>
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </div>
//             </div>

//             {/* Terms checkbox */}
//             <div className="rounded-xl border border-borderColor p-4">
//                 <Checkbox
//                     label=""
//                     checked={agreed}
//                     onChange={(e) => setAgreed(e.target.checked)}
//                 />
//                 {/* Custom label with link */}
//                 <span className="-mt-6 ml-7 block text-sm text-gray-600">
//                     I agree to the{' '}
//                     <button
//                         onClick={() => setIsTermsOpen(true)}
//                         className="cursor-pointer font-semibold text-gray-900 underline transition-colors hover:text-[#79B800]"
//                     >
//                         [Terms of Service]
//                     </button>{' '}
//                     and authorize Ordinaire to save this payment method for
//                     future recurring charges. I consent to sharing my data with
//                     the app provider.
//                 </span>
//             </div>

//             {/* Footer actions */}
//             <div className="flex justify-end gap-3 border-t border-borderColor pt-5">
//                 <IconButton href="/marketplace/explore/employee-scheduling">
//                     Go back
//                 </IconButton>
//                 <Button disabled={!agreed}>Proceed to pay →</Button>
//             </div>

//             <TermsOfServiceModal
//                 isOpen={isTermsOpen}
//                 onClose={() => setIsTermsOpen(false)}
//             />
//         </div>
//     );
// }

//new

import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import marketplaceIcon from '@/shared/images/icons/dashBaordSvg.svg';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Checkbox } from '@/shared/sharedcomponents/ui/FormElements';
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
// import TermsOfServiceModal from './modals/TermsOfServiceModal';
import TermsOfServiceModal from '../components/modals/TermsOfServiceModal';
const VisaLogo = () => (
    <svg viewBox="0 0 60 20" className="h-5 w-10" fill="none">
        <text
            x="0"
            y="16"
            fontFamily="Arial"
            fontWeight="bold"
            fontSize="18"
            fill="#1A1F71"
        >
            VISA
        </text>
    </svg>
);

const MastercardLogo = () => (
    <svg viewBox="0 0 38 24" className="h-6 w-9">
        <circle cx="13" cy="12" r="11" fill="#EB001B" />
        <circle cx="25" cy="12" r="11" fill="#F79E1B" />
        <path
            d="M19 5.3A11 11 0 0125 12a11 11 0 01-6 6.7A11 11 0 0113 12a11 11 0 016-6.7z"
            fill="#FF5F00"
        />
    </svg>
);

interface PaymentMethod {
    id: string;
    type: 'visa' | 'mastercard';
    last4: string;
    expiry: string;
    isDefault: boolean;
}

const paymentMethods: PaymentMethod[] = [
    {
        id: '1',
        type: 'visa',
        last4: '1234',
        expiry: '06/2025',
        isDefault: true,
    },
    {
        id: '2',
        type: 'mastercard',
        last4: '1234',
        expiry: '06/2025',
        isDefault: false,
    },
];

const orderItems = [
    {
        name: 'Employee Scheduling - Add on',
        qty: 1,
        unitPrice: 'KWD 5.000',
        unit: 'Per month',
        total: '5.000 KWD',
    },
];

export default function InstallApp() {
    const [selectedCard, setSelectedCard] = useState('1');
    const [agreed, setAgreed] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);

    const breadcrumbs = [
        { label: 'Marketplace', href: '/admin/marketplace', isActive: false },
        { label: 'Explore', href: '/admin/marketplace', isActive: false },
        {
            label: 'Employee App Overview',
            href: '/admin/marketplace/explore/employee-scheduling',
            isActive: false,
        },
        { label: 'Install App', isActive: true },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Payment and confirm"
                    icon={marketplaceIcon}
                    breadcrumbs={breadcrumbs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    <div className="flex flex-1 flex-col gap-6">
                        {/* Back */}
                        <div>
                            <IconButton href="/admin/marketplace/explore/employee-scheduling">
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                Back
                            </IconButton>
                        </div>

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            {/* Left: Card details */}
                            <div>
                                <div className="mb-3">
                                    <p className="text-base font-semibold text-gray-900">
                                        Card details{' '}
                                        <span className="text-[#8AC926]">
                                            *
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Select your preferred payment method and
                                        proceed to confirm your transaction.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {paymentMethods.map((card) => {
                                        const isSelected =
                                            selectedCard === card.id;
                                        return (
                                            <button
                                                key={card.id}
                                                onClick={() =>
                                                    setSelectedCard(card.id)
                                                }
                                                className={`w-full cursor-pointer rounded-xl border-2 p-4 text-left transition-all ${
                                                    isSelected
                                                        ? 'border-[#8AC926] bg-white shadow-sm'
                                                        : 'border-borderColor bg-white hover:border-gray-300'
                                                }`}
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-center gap-3">
                                                        {card.type ===
                                                        'visa' ? (
                                                            <VisaLogo />
                                                        ) : (
                                                            <MastercardLogo />
                                                        )}
                                                        <div>
                                                            <p className="text-sm font-medium text-gray-900">
                                                                {card.type ===
                                                                'visa'
                                                                    ? 'Visa'
                                                                    : 'Mastercard'}{' '}
                                                                ending in{' '}
                                                                {card.last4}
                                                            </p>
                                                            <p className="text-xs text-gray-500">
                                                                Expiry{' '}
                                                                {card.expiry}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${
                                                            isSelected
                                                                ? 'border-[#79B800] bg-[#79B800]'
                                                                : 'border-gray-300 bg-white'
                                                        }`}
                                                    >
                                                        {isSelected && (
                                                            <svg
                                                                className="h-3 w-3 text-white"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth={3}
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M5 13l4 4L19 7"
                                                                />
                                                            </svg>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="mt-3 flex items-center gap-3">
                                                    <button
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                        className="text-xs text-gray-500 transition-colors hover:text-gray-700"
                                                    >
                                                        Set as default
                                                    </button>
                                                    <button
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                        className="text-xs font-medium text-[#79B800] transition-colors hover:text-[#65a30d]"
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                            </button>
                                        );
                                    })}

                                    <button className="flex w-full cursor-pointer items-center gap-2 rounded-xl border border-dashed border-borderColor px-4 py-3 text-sm text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700">
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                        Add new payment method
                                    </button>
                                </div>
                            </div>

                            {/* Right: Order summary */}
                            <div>
                                <TableContainer>
                                    <Table>
                                        <TableHeader>
                                            <TableHead>Item</TableHead>
                                            <TableHead>Quantity</TableHead>
                                            <TableHead>Unit price</TableHead>
                                            <TableHead>Price</TableHead>
                                        </TableHeader>
                                        <TableBody>
                                            {orderItems.map((item, i) => (
                                                <TableRow key={i}>
                                                    <TableCell className="font-medium text-gray-900">
                                                        {item.name}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {item.qty}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {item.unitPrice}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {item.unit}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="font-medium text-gray-900">
                                                        {item.total}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            <TableRow className="bg-gray-50">
                                                <TableCell
                                                    colSpan={3}
                                                    className="font-bold text-gray-900"
                                                >
                                                    Total
                                                </TableCell>
                                                <TableCell className="font-bold text-gray-900">
                                                    KWD 5.000
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>

                        {/* Terms checkbox */}
                        <div className="rounded-xl border border-borderColor p-4">
                            <Checkbox
                                label=""
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <span className="-mt-6 ml-7 block text-sm text-gray-600">
                                I agree to the{' '}
                                <button
                                    onClick={() => setIsTermsOpen(true)}
                                    className="cursor-pointer font-semibold text-gray-900 underline transition-colors hover:text-[#79B800]"
                                >
                                    [Terms of Service]
                                </button>{' '}
                                and authorize Ordinaire to save this payment
                                method for future recurring charges. I consent
                                to sharing my data with the app provider.
                            </span>
                        </div>

                        {/* Footer actions */}
                        <div className="flex justify-end gap-3 border-t border-borderColor pt-5">
                            <IconButton href="/admin/marketplace/explore/employee-scheduling">
                                Go back
                            </IconButton>
                            <Button disabled={!agreed}>Proceed to pay →</Button>
                        </div>
                    </div>
                </div>
            </main>

            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
            <TermsOfServiceModal
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
            />
        </div>
    );
}
