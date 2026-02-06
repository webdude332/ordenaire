import { Link } from '@inertiajs/react';
import { FileText } from 'lucide-react';
import patternBg from '../images/icons/patternBg.svg';
import SuccessIcon from '../images/icons/successIcon.svg?react';
import Modal from './Modal';
import Button from './ui/Button';
import IconButton from './ui/IconButton';
interface BusinessRegistrationSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    businessName: string;
    onViewProfile: () => void;
}

export default function BusinessRegistrationSuccessModal({
    isOpen,
    onClose,
    businessName,
    onViewProfile,
}: BusinessRegistrationSuccessModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* Added relative overflow-hidden */}
            <div className="relative overflow-hidden p-6 sm:p-8">
                {/* Icon Wrapper */}
                <div className="relative mb-6">
                    {/* Icon Container with Pattern Background */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                        {/* 1. The Pattern Background (Centered behind icon) */}
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

                        {/* 2. The File Icon (Sitting on top) */}
                        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                            <FileText className="h-6 h-12 w-6 w-12 rounded-xl border border-borderColor bg-white p-3 text-gray-600" />
                        </div>
                    </div>
                </div>

                {/* Content with Border (Z-10) */}
                <div className="relative z-10">
                    <div className="rounded-xl border border-borderColor bg-white p-8 shadow-xs">
                        <div className="text-center">
                            <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full">
                                <SuccessIcon className="h-28 w-28" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-gray-900">
                                Registration Successful!
                            </h3>
                            <p className="text-base text-gray-600">
                                The business{' '}
                                <span className="font-semibold">
                                    {businessName}
                                </span>{' '}
                                has been successfully created.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Two Buttons Footer */}
            <div className="relative z-10 border-t border-borderColor px-6 pb-6 sm:px-8 sm:pb-8">
                <div className="grid grid-cols-2 gap-3 pt-6">
                    <Link href="/business-management">
                        <IconButton className="w-full" onClick={onClose}>
                            Close
                        </IconButton>
                    </Link>
                    <Link href="/business/businessoverview">
                        <Button className="w-full" onClick={onViewProfile}>
                            View Business Profile
                        </Button>
                    </Link>
                </div>
            </div>
        </Modal>
    );
}
