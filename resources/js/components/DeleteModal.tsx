// import { useState } from 'react';
// import DelIcon from '../images/icons/delIcon.svg?react';
// import patternBg from '../images/icons/patternBg.svg';
// import Modal from './Modal';
// import Button from './ui/Button';
// import { DelCheckbox } from './ui/FormElements';
// import IconButton from './ui/IconButton';

// interface SimpleErrorModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     onRetry: () => void;
// }

// export default function DeleteModal({
//     isOpen,
//     onClose,
//     onRetry,
// }: SimpleErrorModalProps) {
//     const [confirmed, setConfirmed] = useState(false);
//     return (
//         <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
//             {/* Added relative overflow-hidden */}
//             <div className="relative overflow-hidden p-6 sm:p-8">
//                 {/* Icon Wrapper */}
//                 <div className="relative mb-6">
//                     {/* Icon Container: Made relative */}
//                     <div className="flex flex-col items-start gap-4">
//                         {/* --- ICON WRAPPER WITH PATTERN --- */}
//                         <div className="relative z-10 flex h-12 w-12 items-center justify-center">
//                             {/* 1. The Pattern Background (Centered behind icon) */}
//                             <div className="pointer-events-none absolute inset-0 top-22 left-22 flex items-center justify-center">
//                                 <img
//                                     src={patternBg}
//                                     alt=""
//                                     className="max-w-none"
//                                     style={{
//                                         transform: 'scale(1.1)',
//                                         opacity: 1,
//                                     }}
//                                 />
//                             </div>

//                             {/* 2. The Edit Icon (Sitting on top) */}
//                             <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
//                                 <DelIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
//                             </div>
//                         </div>
//                         <div className="text-md relative z-10 font-medium font-semibold">
//                             <h3>Delete record</h3>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Content (Z-10) */}
//                 <div className="relative z-10 rounded-xl border border-borderColor bg-white p-8 shadow-xs">
//                     <div className="mb-20 text-center">
//                         <h3 className="mb-3 text-4xl font-bold text-gray-900">
//                             Are you sure?
//                         </h3>
//                         <p className="text-lg font-semibold text-gray-600">
//                             You will no be able to revover the deleted record!
//                         </p>
//                     </div>
//                     <div className="mt-12 rounded-xl border border-borderColor py-4 pl-6">
//                         <DelCheckbox
//                             label="I confirm to proceed"
//                             checked={confirmed}
//                             onChange={(e) => setConfirmed(e.target.checked)}
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className="flex gap-2 border-t border-borderColor px-4 py-6">
//                 <div className="w-1/2">
//                     <IconButton className="w-full" onClick={onClose}>
//                         No, Cancel
//                     </IconButton>
//                 </div>
//                 <div className="w-1/2">
//                     <Button
//                         className={`w-full text-white ${
//                             confirmed
//                                 ? 'bg-[#F04438] hover:bg-[#FF0000]'
//                                 : 'cursor-not-allowed bg-gray-300'
//                         }`}
//                         disabled={!confirmed}
//                         onClick={onRetry}
//                     >
//                         Yes, Delete it!
//                     </Button>
//                 </div>
//             </div>
//         </Modal>
//     );
// }

import { useEffect, useState } from 'react';
import DelIcon from '../images/icons/delIcon.svg?react';
import patternBg from '../images/icons/patternBg.svg';
import Modal from './Modal';
import Button from './ui/Button';
import { DelCheckbox } from './ui/FormElements';
import IconButton from './ui/IconButton';

interface SimpleErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRetry: () => void;
}

export default function DeleteModal({
    isOpen,
    onClose,
    onRetry,
}: SimpleErrorModalProps) {
    const [confirmed, setConfirmed] = useState(false);

    // 🔑 RESET checkbox every time modal opens
    useEffect(() => {
        if (isOpen) {
            setConfirmed(false);
        }
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="relative overflow-hidden p-6 sm:p-8">
                <div className="relative mb-6">
                    <div className="flex flex-col items-start gap-4">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                            <div className="pointer-events-none absolute inset-0 top-22 left-22 flex items-center justify-center">
                                <img
                                    src={patternBg}
                                    alt=""
                                    className="max-w-none"
                                    style={{
                                        transform: 'scale(1.1)',
                                        opacity: 1,
                                    }}
                                />
                            </div>
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <DelIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                            </div>
                        </div>
                        <div className="text-md relative z-10 font-medium">
                            <h3>Delete record</h3>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 rounded-xl border border-borderColor bg-white p-8 shadow-xs">
                    <div className="mb-20 text-center">
                        <h3 className="mb-3 text-4xl font-bold text-gray-900">
                            Are you sure?
                        </h3>
                        <p className="text-lg font-semibold text-gray-600">
                            You will not be able to recover the deleted record!
                        </p>
                    </div>

                    <div className="mt-12 rounded-xl border border-borderColor py-4 pl-6">
                        <DelCheckbox
                            label="I confirm to proceed"
                            checked={confirmed}
                            onChange={(e) => setConfirmed(e.target.checked)}
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-2 border-t border-borderColor px-4 py-6">
                <div className="w-1/2">
                    <IconButton className="w-full" onClick={onClose}>
                        No, Cancel
                    </IconButton>
                </div>

                <div className="w-1/2">
                    <Button
                        className={`w-full text-white ${
                            confirmed
                                ? 'bg-[#F04438] hover:bg-[#FF0000]'
                                : 'cursor-not-allowed bg-gray-300'
                        }`}
                        disabled={!confirmed}
                        onClick={onRetry}
                    >
                        Yes, Delete it!
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
