import SuccessIcon from '@/images/icons/toastSuccess.svg?react';
import { router } from '@inertiajs/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface SuccessToastProps {
    title: string;
    message: string;
    actionText: string;
    onClose: () => void;
    onAction: () => void;
    autoCloseDuration?: number;
    redirectTo?: string;
}

const SuccessToast = ({
    title,
    message,
    actionText,
    onAction,
    onClose,
    autoCloseDuration = 2000,
    redirectTo,
}: SuccessToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
            if (redirectTo) {
                router.visit(redirectTo);
            }
        }, autoCloseDuration);
        return () => clearTimeout(timer);
    }, [autoCloseDuration, onClose, redirectTo]);
    return (
        <div className="animate-in slide-in-from-bottom-2 fixed right-80 bottom-4 z-50">
            <div className="flex w-full max-w-xl items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                {/* Icon */}
                <div className="flex flex-shrink-0 items-center justify-center rounded-full text-green-600">
                    <SuccessIcon className="h-12 w-12" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                    <p className="font-semibold text-gray-900">{title}</p>

                    {message && (
                        <p className="mt-1 text-sm text-gray-600">{message}</p>
                    )}

                    <div className="mt-2 flex gap-4 text-sm font-medium">
                        <button
                            onClick={onClose}
                            className="cursor-pointer font-semibold text-gray-600 hover:text-gray-900"
                        >
                            Dismiss
                        </button>

                        {actionText && onAction && (
                            <button
                                onClick={onAction}
                                className="cursor-pointer font-semibold text-[#578500]"
                            >
                                {actionText}
                            </button>
                        )}
                    </div>
                </div>

                {/* Close */}
                <button
                    onClick={onClose}
                    className="cursor-pointer text-gray-400 hover:text-gray-600"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

export default SuccessToast;
