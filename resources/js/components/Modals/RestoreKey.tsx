import Modal from '@/components/Modal';
import { RefreshCw } from 'lucide-react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

interface RestoreKeyProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    keyName?: string;
}

export default function RestoreKey({
    isOpen,
    onClose,
    onConfirm,
    keyName,
}: RestoreKeyProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-6">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <RefreshCw className="h-4 w-4 text-gray-500" />
                    </div>
                    <h2 className="text-sm font-semibold text-gray-900">
                        Restore Access
                    </h2>
                </div>

                {/* Card */}
                <div className="rounded-xl border border-gray-200 p-8 text-center">
                    <h3 className="mb-6 text-2xl font-bold text-gray-900">
                        Restore Access Key?
                    </h3>
                    <p className="mb-2 text-sm text-gray-700">
                        You are about to reactivate the key{' '}
                        <span className="font-bold">
                            {keyName ?? '[Key Name / ID]'}.
                        </span>
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                        This will immediately restore access for the associated
                        application. Are you sure you want to proceed?
                    </p>
                </div>
            </div>

            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={onConfirm}>
                    Yes, Restore Access
                </Button>
            </div>
        </Modal>
    );
}
