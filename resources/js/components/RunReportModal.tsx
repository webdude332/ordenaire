// import infoIcon from '../images/icons/infoIcon.png';
import Button from '@/components/ui/Button';
import InfoIcon from '@/images/icons/infoRing.svg?react';
import patternBg from '../images/icons/patternBg.svg';
import RunIcon from '../images/icons/playBold.svg?react';
import Modal from './Modal';
import IconButton from './ui/IconButton';

interface RunReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function RunReportModal({
    isOpen,
    onClose,
    onConfirm,
}: RunReportModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div>
                <div className="relative overflow-hidden px-6 sm:p-8">
                    <div className="relative mb-6 flex items-start gap-4">
                        <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                            <img
                                src={patternBg}
                                alt=""
                                className="max-w-none"
                                style={{
                                    transform: 'scale(1.1)',
                                    opacity: 2,
                                }}
                            />
                        </div>
                        <div>
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <RunIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                            </div>

                            <div className="relative z-10 pt-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Run Report Immediately
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 rounded-lg border border-gray-200 bg-white px-4 py-8">
                        <div className="relative z-10 mb-6 flex items-center gap-3 rounded-lg border border-blue-100 p-2">
                            <InfoIcon className="h-10 w-10" />
                            <p className="text-sm">
                                Note: This is an extra, one-time execution and
                                the recurring schedule will NOT be affected.
                            </p>
                        </div>
                        <div className="relative z-10">
                            <p className="mb-4 text-sm font-semibold text-gray-900">
                                You are about to generate and send the following
                                report:
                            </p>
                            <div className="space-y-3 rounded-lg border border-[#E8E6EA] bg-[#F8FFEB] p-4 shadow-xs">
                                <div className="flex">
                                    <div className="flex w-2/5 flex-col gap-y-4">
                                        <p className="font-gray-500 text-sm font-medium">
                                            Report Name
                                        </p>
                                        <p className="font-gray-500 text-sm font-medium">
                                            Tanent
                                        </p>
                                        <p className="font-gray-500 text-sm font-medium">
                                            Template
                                        </p>
                                        <p className="font-gray-500 text-sm font-medium">
                                            Date Range
                                        </p>
                                        <p className="font-gray-500 text-sm font-medium">
                                            Recipients
                                        </p>
                                    </div>
                                    <div className="flex w-3/5 flex-col gap-y-4">
                                        <p className="font-gray-500 text-sm font-medium">
                                            Monthly Summary
                                        </p>
                                        <p className="font-gray-500 text-sm font-medium">
                                            Acme Corp
                                        </p>
                                        <p className="font-gray-500 text-sm font-medium">
                                            Sales
                                        </p>
                                        <p className="font-gray-500 text-sm font-medium">
                                            Last 30 Days (Nov 18 - Dec 18)
                                        </p>
                                        <p className="font-gray-500 text-sm font-medium">
                                            abc@gmail.com, Admins
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 flex gap-3 border-t border-gray-100 bg-white px-8 py-4">
                    <div className="w-1/2">
                        <IconButton className="w-full py-1" onClick={onClose}>
                            Cancel
                        </IconButton>
                    </div>

                    <div className="w-1/2">
                        <Button onClick={onConfirm} className="w-full py-2">
                            Confirm & run report
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
