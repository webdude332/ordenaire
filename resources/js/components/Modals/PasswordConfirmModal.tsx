import Modal from '@/components/Modal';
// import ReportOk from '../images/icons/reportOk.svg?react';
import ReportOk from '@/images/icons/reportOk.svg?react';
// import successIcon from '../images/icons/successIcon.png'
import IconButton from '@/components/ui/IconButton';
import SuccessIcon from '@/images/icons/successIcon.svg?react';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PasswordConfirmModal({
    isOpen,
    onClose,
}: SuccessModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* Added relative overflow-hidden */}
            <div className="relative overflow-hidden p-6 sm:p-8">
                {/* Icon Wrapper */}
                <div className="relative mb-6">
                    {/* Icon Container: Made relative */}
                    <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-borderColor bg-white p-3 shadow-xs sm:mx-0">
                        {/* <img src={reportOk} alt="" /> */}
                        <ReportOk className="h-8 w-8" />
                    </div>
                </div>

                {/* Content (Z-10) */}
                <div className="relative z-10">
                    <div className="mb-8 text-center">
                        <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full">
                            {/* <img src={successIcon} alt="" /> */}
                            <SuccessIcon className="h-28 w-28" />
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">
                            Password Reset Link Sent Successfully
                        </h3>
                        <p className="text-base text-gray-600">
                            The password reset link has been successfully sent
                            to the user's email address.
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-t border-borderColor px-6 py-6">
                <IconButton className="w-full" onClick={onClose}>
                    Close
                </IconButton>
            </div>
        </Modal>
    );
}
