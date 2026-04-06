import patternBg from '../../shared/images/icons/patternBg.png';
import repotIcon from '../../shared/images/icons/reportIcon.png';
import Modal from './Modal';

interface SimpleErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRetry: () => void;
}

export default function SimpleErrorModal({
    isOpen,
    onClose,
    onRetry,
}: SimpleErrorModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* Added relative overflow-hidden */}
            <div className="relative overflow-hidden p-6 sm:p-8">
                {/* Icon Wrapper */}
                <div className="relative mb-6">
                    {/* Icon Container: Made relative */}
                    <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white sm:mx-0">
                        {/* --- PATTERN BACKGROUND --- */}
                        <div className="pointer-events-none absolute flex items-center justify-center">
                            <img
                                src={patternBg}
                                alt=""
                                className="max-w-none"
                                style={{ transform: 'scale(1.5)', opacity: 1 }}
                            />
                        </div>
                        <img src={repotIcon} alt="" />
                    </div>
                </div>

                {/* Content (Z-10) */}
                <div className="relative z-10">
                    <div className="mb-8 text-center">
                        <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-500 shadow-lg">
                            <svg
                                className="h-10 w-10 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">
                            Report Generation Failed
                        </h3>
                        <p className="text-base text-gray-600">
                            System could not process the request.
                        </p>
                        <p className="text-base text-gray-600">
                            Please try again later.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 rounded-lg border-2 border-gray-200 px-4 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            Close
                        </button>
                        <button
                            onClick={onRetry}
                            className="flex-1 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
