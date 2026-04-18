interface EditVariantProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: {
        name: string;
        sellingPrice: string;
        estimatedCost: string;
    }) => void;
}
import Pencil from '@/shared/images/icons/boldPencil.svg?react';
import patternBg from '@/shared/images/icons/patternBg.svg';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
export default function EditVariant({
    isOpen,
    onClose,
    onConfirm,
}: EditVariantProps) {
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
                                <Pencil className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
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
                                Variant Label
                                <span className="text-primary">*</span>
                            </Label>
                            <Input placeholder='e.g "Large Size"' />
                        </div>
                    </div>
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
                                Variant Label
                                <span className="text-primary">*</span>
                            </Label>
                            <Input placeholder='e.g "Large Size"' />
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
