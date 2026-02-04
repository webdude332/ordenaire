import Modal from '@/components/Modal';
// import ReportOk from '../images/icons/reportOk.svg?react';
import ReportOk from '@/images/icons/reportOk.svg?react';
// import successIcon from '../images/icons/successIcon.png'
import IconButton from '@/components/ui/IconButton';
import patternBg from '@/images/icons/patternBg.svg';
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

                <div className="relative flex items-start gap-2">
                    <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                        <img
                            src={patternBg}
                            alt=""
                            className="max-w-none"
                            style={{ transform: 'scale(1.1)', opacity: 0.7 }}
                        />
                    </div>
                    <div>
                        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                            <ReportOk className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                        </div>
                        <div className="relative z-10 pt-4">
                            <h3 className="text-md font-semibold text-gray-900"></h3>
                        </div>
                    </div>
                </div>

                {/* Content (Z-10) */}
                <div className="relative z-10 rounded-lg border border-borderColor bg-white pt-8 shadow-xs">
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
