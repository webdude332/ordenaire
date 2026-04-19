import patternBg from '@/shared/images/icons/patternBg.svg';
import Plus from '@/shared/images/icons/plus.svg?react';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';

import { useState } from 'react';

interface OptionData {
    name: string;
    displaySequence: string;
    additionalPrice: string;
    estimatedCost: string;
}

interface AddOptionProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: OptionData) => void;
    parentGroupName: string; // To display "Adding to group: 'Extra Toppings'"
}

export default function AddOption({
    isOpen,
    onClose,
    onConfirm,
    parentGroupName,
}: AddOptionProps) {
    const [optionName, setOptionName] = useState('');
    const [displaySequence, setDisplaySequence] = useState('');
    const [additionalPrice, setAdditionalPrice] = useState('');
    const [estimatedCost, setEstimatedCost] = useState('');

    const handleSave = () => {
        onConfirm({
            name: optionName,
            displaySequence,
            additionalPrice,
            estimatedCost,
        });
        // Optional: clear form after saving
        setOptionName('');
        setDisplaySequence('');
        setAdditionalPrice('');
        setEstimatedCost('');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header Section */}
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
                        Add Option
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Adding to group:{' '}
                        <span className="font-semibold text-gray-900">
                            "{parentGroupName}"
                        </span>
                    </p>
                </div>

                {/* Main Content Box */}
                <div className="rounded-xl border border-borderColor bg-white px-4 py-6 shadow-sm">
                    <div className="space-y-6">
                        {/* Row 1 */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Option Name{' '}
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    placeholder="e.g. Extra Cheese"
                                    value={optionName}
                                    onChange={(e) =>
                                        setOptionName(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Display Sequence (Optional)
                                </Label>
                                <Input
                                    placeholder="e.g. 4"
                                    value={displaySequence}
                                    onChange={(e) =>
                                        setDisplaySequence(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Additional Price{' '}
                                    <span className="text-primary">*</span>
                                </Label>
                                <div className="relative">
                                    <Input
                                        placeholder="0.000"
                                        className="pr-12"
                                        value={additionalPrice}
                                        onChange={(e) =>
                                            setAdditionalPrice(e.target.value)
                                        }
                                    />
                                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                        KWD
                                    </span>
                                </div>
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Estimated Cost (Optional)
                                </Label>
                                <div className="relative">
                                    <Input
                                        placeholder="0.000"
                                        className="pr-12"
                                        value={estimatedCost}
                                        onChange={(e) =>
                                            setEstimatedCost(e.target.value)
                                        }
                                    />
                                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                        KWD
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between gap-4 border-t border-borderColor px-8 py-6">
                <div className="w-1/2">
                    <IconButton className="w-full" onClick={onClose}>
                        Cancel
                    </IconButton>
                </div>
                <div className="w-1/2">
                    <Button
                        className="w-full bg-[#7AB621] hover:bg-[#6aa31d]"
                        onClick={handleSave}
                    >
                        Save Option
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
