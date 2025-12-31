// import React, { Fragment, ReactNode } from 'react';
// import { Dialog, Transition } from '@headlessui/react';

// interface ModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     children: ReactNode;
//     maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
// }

// export default function Modal({ isOpen, onClose, children, maxWidth = 'md' }: ModalProps) {
//     const maxWidthClass = {
//         sm: 'max-w-sm',
//         md: 'max-w-md',
//         lg: 'max-w-lg',
//         xl: 'max-w-xl',
//         '2xl': 'max-w-2xl',
//     }[maxWidth];

//     return (
//         <Transition appear show={isOpen} as={Fragment}>
//             <Dialog as="div" className="relative z-50" onClose={onClose}>
//                 {/* 1. BACKDROP: 
//                     - bg-gray-900/30: Adds a subtle dark tint (30% opacity).
//                     - backdrop-blur-sm: Blurs the content behind the modal.
//                 */}
//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm transition-opacity" />
//                 </Transition.Child>

//                 <div className="fixed inset-0 z-10 overflow-y-auto">
//                     <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                             enterTo="opacity-100 translate-y-0 sm:scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//                             leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                         >
//                             <Dialog.Panel className={`relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 w-full ${maxWidthClass} border border-gray-100`}>
                                
//                                 {/* 2. DECORATIVE RINGS (Top Left) */}
//                                 <div className="absolute top-0 left-0 -ml-10 -mt-10 z-0 pointer-events-none">
//                                      <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
//                                         <circle cx="40" cy="40" r="39.5" stroke="#F3F4F6" strokeWidth="2"/>
//                                         <circle cx="40" cy="40" r="69.5" stroke="#F3F4F6" strokeWidth="2"/>
//                                         <circle cx="40" cy="40" r="99.5" stroke="#F3F4F6" strokeWidth="2"/>
//                                         <circle cx="40" cy="40" r="129.5" stroke="#F3F4F6" strokeWidth="2"/>
//                                     </svg>
//                                 </div>

//                                 {/* Close Button */}
//                                 <button
//                                     onClick={onClose}
//                                     className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-500 p-1 rounded-md hover:bg-gray-50 transition-colors focus:outline-none"
//                                 >
//                                     <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>

//                                 {/* Content Container (Z-10 to sit above rings) */}
//                                 <div className="relative z-10 p-6 sm:p-8 font-montserrat">
//                                     {children}
//                                 </div>

//                             </Dialog.Panel>
//                         </Transition.Child>
//                     </div>
//                 </div>
//             </Dialog>
//         </Transition>
//     );
// }


import React, { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export default function Modal({ isOpen, onClose, children, maxWidth = 'md' }: ModalProps) {
    const maxWidthClass = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-4xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl'
    }[maxWidth];

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm transition-opacity" />
                </Transition.Child>

                {/* Modal Position */}
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className={`relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 w-full ${maxWidthClass} border border-gray-100`}>
                                
                                {/* REMOVED: SVG Decorative Rings were here */}

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-500 p-1 rounded-md hover:bg-gray-50 transition-colors focus:outline-none"
                                >
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Children Content */}
                                <div className="relative z-10">
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}   