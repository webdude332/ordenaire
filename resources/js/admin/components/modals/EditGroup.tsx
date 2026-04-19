import patternBg from '@/shared/images/icons/patternBg.svg';
import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';

import { useEffect, useState } from 'react';

interface ModifierGroupData {
    id?: string;
    name: string;
    displaySequence: string;
    minRequired: string;
    maxAllowed: string;
}

interface EditGroupProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: ModifierGroupData) => void;
    initialData?: ModifierGroupData | null;
}

export default function EditGroup({
    isOpen,
    onClose,
    onConfirm,
    initialData,
}: EditGroupProps) {
    // State for inputs
    const [groupName, setGroupName] = useState('');
    const [displaySequence, setDisplaySequence] = useState('');
    const [minRequired, setMinRequired] = useState('0');
    const [maxAllowed, setMaxAllowed] = useState('1');

    // Auto-fill the form when the modal opens with existing data
    useEffect(() => {
        if (isOpen && initialData) {
            setGroupName(initialData.name || '');
            setDisplaySequence(initialData.displaySequence || '');
            setMinRequired(initialData.minRequired || '0');
            setMaxAllowed(initialData.maxAllowed || '1');
        } else if (isOpen && !initialData) {
            // Fallback if no data is passed
            setGroupName('');
            setDisplaySequence('');
            setMinRequired('0');
            setMaxAllowed('1');
        }
    }, [isOpen, initialData]);

    const handleSave = () => {
        onConfirm({
            id: initialData?.id, // Keep the ID so the parent knows which one to update
            name: groupName,
            displaySequence,
            minRequired,
            maxAllowed,
        });
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
                                {/* Using the Pencil icon from your shared icons */}
                                <PencilIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 text-gray-700 shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Edit Modifier Group
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Update the settings for this option group
                    </p>
                </div>

                {/* Main Content Box */}
                <div className="rounded-xl border border-borderColor bg-white px-4 py-6 shadow-sm">
                    <div className="space-y-6">
                        {/* Row 1 */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Group Name{' '}
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    value={groupName}
                                    onChange={(e) =>
                                        setGroupName(e.target.value)
                                    }
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Display Sequence (Optional)
                                </Label>
                                <Input
                                    value={displaySequence}
                                    onChange={(e) =>
                                        setDisplaySequence(e.target.value)
                                    }
                                    placeholder=""
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Minimum Required{' '}
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    value={minRequired}
                                    onChange={(e) =>
                                        setMinRequired(e.target.value)
                                    }
                                    placeholder=""
                                />
                                <p className="mt-1.5 text-xs text-gray-500">
                                    Enter 0 for Optional, 1 for Required.
                                </p>
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Maximum Allowed{' '}
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    value={maxAllowed}
                                    onChange={(e) =>
                                        setMaxAllowed(e.target.value)
                                    }
                                    placeholder=""
                                />
                                <p className="mt-1.5 text-xs text-gray-500">
                                    Enter 1 for Single Select, or higher for
                                    Multi-select.
                                </p>
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
                        Save Changes
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
