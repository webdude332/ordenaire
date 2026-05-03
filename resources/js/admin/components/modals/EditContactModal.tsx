// import Modal from '@/shared/sharedcomponents/modals/Modal';
// import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
// import Button from '@/superadmin/components/ui/Button';
// import { Pencil } from 'lucide-react';

// interface EditContactModalProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// export default function EditContactModal({
//     isOpen,
//     onClose,
// }: EditContactModalProps) {
//     return (
//         <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
//             <div className="p-6">
//                 <div className="mb-6 flex items-start gap-4">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white">
//                         <Pencil className="h-5 w-5 text-gray-600" />
//                     </div>
//                     <div>
//                         <h2 className="text-lg font-semibold text-gray-900">
//                             Edit contact
//                         </h2>
//                         <p className="text-sm text-gray-500">
//                             Manually add a customer to your contact list
//                         </p>
//                     </div>
//                 </div>

//                 <div className="flex flex-col gap-5 rounded-xl border border-gray-200 p-5">
//                     <div>
//                         <Input
//                             placeholder="Ahamad rashid"
//                             // defaultValue="Ahamad rashid"
//                         />
//                     </div>

//                     <div>
//                         <Label>
//                             Phone Number
//                             <span className="text-primary">*</span>
//                         </Label>
//                         <Input
//                             placeholder="+965 55998877"
//                             // defaultValue="+965 55998877"
//                         />
//                         <p className="mt-1 text-xs text-gray-500">
//                             Enter the number without the country code. Must be a
//                             valid WhatsApp number.
//                         </p>
//                     </div>

//                     <div>
//                         <label className="mb-3 block text-sm font-medium text-gray-700">
//                             Customer tag
//                         </label>
//                         <div className="flex items-center gap-6">
//                             <label className="flex items-center gap-2">
//                                 <input
//                                     type="radio"
//                                     name="tag"
//                                     className="h-4 w-4 text-[#79B800] focus:ring-[#79B800]"
//                                     defaultChecked
//                                 />
//                                 <span className="text-sm text-gray-700">
//                                     VIP
//                                 </span>
//                             </label>
//                             <label className="flex items-center gap-2">
//                                 <input
//                                     type="radio"
//                                     name="tag"
//                                     className="h-4 w-4 text-[#79B800] focus:ring-[#79B800]"
//                                 />
//                                 <span className="text-sm text-gray-700">
//                                     Regular
//                                 </span>
//                             </label>
//                             <label className="flex items-center gap-2">
//                                 <input
//                                     type="radio"
//                                     name="tag"
//                                     className="h-4 w-4 text-[#79B800] focus:ring-[#79B800]"
//                                 />
//                                 <span className="text-sm text-gray-700">
//                                     New
//                                 </span>
//                             </label>
//                         </div>
//                     </div>

//                     <div>
//                         <Input
//                             // label="Email address"
//                             placeholder="customer@email.com"
//                         />
//                     </div>

//                     <div>
//                         <label className="mb-2 block text-sm font-medium text-gray-700">
//                             WhatsApp consent
//                         </label>
//                         <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
//                             <div>
//                                 <p className="font-medium text-gray-900">
//                                     Opt-in status
//                                 </p>
//                                 <p className="text-sm text-gray-500">
//                                     Opted in on 24 Oct 2025 via WhatsApp reply
//                                 </p>
//                             </div>
//                             <div className="flex items-center gap-3">
//                                 <span className="flex items-center gap-1.5 rounded-md border border-green-200 bg-green-50 px-2.5 py-1 text-sm font-medium text-green-700">
//                                     <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>{' '}
//                                     Opted in
//                                 </span>
//                                 <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
//                                     Opt-out →
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex items-center justify-between border-t border-gray-100 p-6">
//                 <button className="text-sm font-medium text-red-600 hover:text-red-700">
//                     Delete contact
//                 </button>
//                 <div className="flex gap-3">
//                     <button
//                         onClick={onClose}
//                         className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
//                     >
//                         Cancel
//                     </button>
//                     <Button className="bg-[#79B800] px-6 hover:bg-[#6aa300]">
//                         Save changes
//                     </Button>
//                 </div>
//             </div>
//         </Modal>
//     );
// }

import Modal from '@/shared/sharedcomponents/modals/Modal';
import { Input } from '@/shared/sharedcomponents/ui/FormElements';
import Button from '@/superadmin/components/ui/Button';
import { Pencil } from 'lucide-react';

interface EditContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EditContactModal({
    isOpen,
    onClose,
}: EditContactModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="relative overflow-hidden p-6">
                {/* Rings Background */}
                <div className="pointer-events-none absolute -top-12 -left-12 z-0 opacity-40">
                    <svg
                        width="180"
                        height="180"
                        viewBox="0 0 180 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="90"
                            cy="90"
                            r="30"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx="90"
                            cy="90"
                            r="50"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx="90"
                            cy="90"
                            r="70"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx="90"
                            cy="90"
                            r="90"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                    </svg>
                </div>

                <div className="relative z-10">
                    <div className="mb-6 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                            <Pencil className="h-5 w-5 text-gray-700" />
                        </div>
                        <div className="pt-1">
                            <h2 className="mb-1 text-lg font-semibold text-gray-900">
                                Edit contact
                            </h2>
                            <p className="text-sm text-gray-500">
                                Manually add a customer to your contact list
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 rounded-xl border border-gray-200 p-5">
                        <div>
                            <Input placeholder="Ahamad rashid" />
                        </div>

                        <div>
                            <Input placeholder="+965 55998877" />
                            <p className="mt-1 text-xs text-gray-500">
                                Enter the number without the country code. Must
                                be a valid WhatsApp number.
                            </p>
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium text-gray-700">
                                Customer tag
                            </label>
                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="tag"
                                        className="h-4 w-4 text-[#79B800] focus:ring-[#79B800]"
                                        defaultChecked
                                    />
                                    <span className="text-sm text-gray-700">
                                        VIP
                                    </span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="tag"
                                        className="h-4 w-4 text-[#79B800] focus:ring-[#79B800]"
                                    />
                                    <span className="text-sm text-gray-700">
                                        Regular
                                    </span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="tag"
                                        className="h-4 w-4 text-[#79B800] focus:ring-[#79B800]"
                                    />
                                    <span className="text-sm text-gray-700">
                                        New
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <Input placeholder="customer@email.com" />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                WhatsApp consent
                            </label>
                            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                                <div>
                                    <p className="font-medium text-gray-900">
                                        Opt-in status
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Opted in on 24 Oct 2025 via WhatsApp
                                        reply
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1.5 rounded-md border border-green-200 bg-green-50 px-2.5 py-1 text-sm font-medium text-green-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>{' '}
                                        Opted in
                                    </span>
                                    <button className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
                                        Opt-out →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 p-6">
                <button className="text-sm font-medium text-red-600 transition-colors hover:text-red-700">
                    Delete contact
                </button>
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <Button className="bg-[#79B800] px-6 hover:bg-[#6aa300]">
                        Save changes
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
