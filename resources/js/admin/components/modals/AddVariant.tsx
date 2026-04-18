import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import patternBg from '@shared/images/icons/patternBg.svg';
import { Plus } from 'lucide-react';

interface AddVariantProps {
    isOpen: boolean;
    onClose: () => void;
    // onConfirm: () => void;
    onConfirm: (data: {
        name: string;
        sellingPrice: string;
        estimatedCost: string;
    }) => void;
}

export default function AddVariant({
    isOpen,
    onClose,
    onConfirm,
}: AddVariantProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                <div className="mb-5">
                    <div className="relative mb-6 flex items-start gap-4">
                        <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                            <img
                                src={patternBg}
                                alt=""
                                className="max-w-none"
                                style={{
                                    transform: 'scale(1.1)',
                                    opacity: 0.7,
                                }}
                            />
                        </div>
                        <div>
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <Plus className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add Item Variant
                    </h2>
                </div>
                <div className="rounded-xl border border-borderColor px-4 py-6 shadow-sm">
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Variant Label
                                <span className="text-primary">*</span>
                            </Label>
                            <Input placeholder='e.g "Large Size"' />
                        </div>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Display Sequence (Optional)
                            </Label>
                            <Input placeholder='e.g "1"' />
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Selling Price
                                <span className="text-primary">*</span>
                            </Label>
                            <div className="relative">
                                <Input
                                    placeholder="0.000"
                                    className="pr-12"
                                    // Add your value={...} and onChange={...} here
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    KWD
                                </span>
                            </div>
                        </div>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Estimted Cost (Optional)
                                <span className="text-primary">*</span>
                            </Label>
                            <div className="relative">
                                <Input
                                    placeholder="0.000"
                                    className="pr-12"
                                    // Add your value={...} and onChange={...} here
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    KWD
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-4 border-t border-borderColor px-8 py-6">
                <div className="w-1/2">
                    <IconButton className="w-full">Cancel</IconButton>
                </div>
                <div className="w-1/2">
                    <Button className="w-full">Add Variant</Button>
                </div>
            </div>
        </Modal>
    );
}
