//is edit mode

import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import {
    Checkbox,
    Input,
    Label,
} from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';
import { useState } from 'react';

// 1. IMPORT YOUR NEW SHARED MODAL
import UploadDocumentModal from '@/shared/sharedcomponents/modals/UploadDocumentModal';

// UPDATED: Added isEditMode and onSave, made onNext optional
interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext?: () => void;
    onBack: () => void;
    canNext?: boolean;
    isEditMode?: boolean;
    onSave?: () => void;
}

const DIETARY_LABELS = ['Spicy', 'Vegan', 'Gluten-Free', 'Contains Nuts'];

const ItemDetails = ({
    data,
    update,
    onNext,
    onBack,
    canNext = true,
    isEditMode = false,
    onSave,
}: StepProps) => {
    const [descLength, setDescLength] = useState(
        data.description ? data.description.length : 0,
    );

    // 2. ADD STATE FOR THE MODAL
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const toggleDietary = (label: string) => {
        const current: string[] = data.dietaryLabels || [];
        const updated = current.includes(label)
            ? current.filter((l) => l !== label)
            : [...current, label];
        update('dietaryLabels', updated);
    };

    const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value.slice(0, 128);
        update('description', val);
        setDescLength(val.length);
    };

    const categoryOptions = [
        { label: 'Select Category', value: '' },
        { label: 'Starters', value: 'starters' },
        { label: 'Main Course', value: 'main-course' },
        { label: 'Beverages', value: 'beverages' },
        { label: 'Specials', value: 'specials' },
    ];

    const kitchenOptions = [
        { label: 'Select Kitchen Station', value: '' },
        { label: 'Hot Station', value: 'hot_station' },
        { label: 'Cold Section', value: 'cold_section' },
        { label: 'Bar', value: 'bar' },
    ];

    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

    const handleToggle = (label: string) => {
        setSelectedLabels((prevSelected) => {
            if (prevSelected.includes(label)) {
                return prevSelected.filter((item) => item !== label);
            }
            return [...prevSelected, label];
        });
    };

    return (
        <div className="space-y-8 border-t border-gray-200 pt-8">
            {/* Basic Details */}
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Basic Details
                    </h3>
                </div>
                <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                    {/* Item Code + Item Name */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Item Code (auto-generated)
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <Input
                                value={data.itemCode}
                                disabled
                                placeholder="ITM-000145"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Item Name
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <Input
                                placeholder="e.g., Spicy Noodles"
                                value={data.itemName}
                                onChange={(e) =>
                                    update('itemName', e.target.value)
                                }
                            />
                        </div>
                    </div>

                    {/* Category + Kitchen Station */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <Label className="mb-2 text-sm font-medium text-gray-700">
                                Category
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <CustomDropdown
                                label=""
                                options={categoryOptions}
                                value={data.category}
                                onChange={(val) => update('category', val)}
                                placeholder="Select Category"
                            />
                        </div>
                        <div>
                            <Label className="mb-2 text-sm font-medium text-gray-700">
                                Kitchen Station
                                <span className="text-[#7AB621]">*</span>
                            </Label>
                            <CustomDropdown
                                label=""
                                options={kitchenOptions}
                                value={data.kitchenStation}
                                onChange={(val) =>
                                    update('kitchenStation', val)
                                }
                                placeholder="Select Kitchen Station"
                            />
                        </div>
                    </div>

                    {/* Preparation Time + Status */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Preparation Time
                            </Label>
                            <div className="relative">
                                <Input
                                    placeholder="00"
                                    value={data.preparationTime}
                                    onChange={(e) =>
                                        update(
                                            'preparationTime',
                                            e.target.value,
                                        )
                                    }
                                    className="pr-12"
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    Min
                                </span>
                            </div>
                        </div>
                        <div>
                            <Label className="mb-2 text-sm font-medium text-gray-700">
                                Status
                            </Label>
                            <div className="pt-1">
                                <RadioGroup
                                    name="item_status"
                                    label=""
                                    value={data.status}
                                    onChange={(val) => update('status', val)}
                                    options={[
                                        { value: 'active', label: 'Active' },
                                        {
                                            value: 'inactive',
                                            label: 'Inactive',
                                        },
                                    ]}
                                    gap="gap-6"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                            Image
                        </Label>
                        <p className="text-xs text-gray-500">
                            Upload the item's image
                        </p>
                        <div className="flex items-center gap-4 pt-1">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                                {data.image ? (
                                    <img
                                        src={URL.createObjectURL(data.image)}
                                        alt="preview"
                                        className="h-16 w-16 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="h-8 w-8 rounded-full bg-gray-300" />
                                )}
                            </div>

                            <IconButton
                                type="button"
                                onClick={() => setIsImageModalOpen(true)}
                            >
                                Choose file
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            {/* Description & Cautions */}
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Description & Cautions
                    </h3>
                </div>
                <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                    {/* Description */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                            Description
                        </Label>
                        <textarea
                            rows={4}
                            placeholder="e.g., Fresh hand-pulled noodles tossed in our signature spicy garlic chili oil..."
                            value={data.description}
                            onChange={handleDescChange}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                        />
                        <p className="text-right text-xs text-gray-400">
                            {128 - descLength} characters left
                        </p>
                    </div>

                    {/* Dietary Labels */}
                    <div className="space-y-3">
                        <Label className="text-sm font-semibold text-gray-700">
                            Dietary Labels & Allergens
                        </Label>
                        <div className="flex flex-wrap gap-3">
                            {DIETARY_LABELS.map((label) => (
                                <div
                                    key={label}
                                    className="flex items-center rounded-md border border-[#CFCBD2] bg-white px-2 py-1"
                                >
                                    <Checkbox
                                        label={label}
                                        checked={selectedLabels.includes(label)}
                                        onChange={() => handleToggle(label)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* UPDATED DYNAMIC FOOTER */}
            {isEditMode ? (
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                    <IconButton onClick={onBack}>Cancel</IconButton>
                    <Button onClick={onSave} disabled={!canNext}>
                        Save Changes
                    </Button>
                </div>
            ) : (
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                    <IconButton onClick={onBack}>Cancel</IconButton>
                    <IconButton
                        // @ts-ignore
                        onClick={() => console.log('Save as Draft', data)}
                    >
                        Save as Draft
                    </IconButton>
                    <Button onClick={onNext} disabled={!canNext}>
                        Continue to link inventory
                    </Button>
                </div>
            )}

            <UploadDocumentModal
                isOpen={isImageModalOpen}
                onClose={() => setIsImageModalOpen(false)}
                title="Upload Item Image"
                primaryBtnText="Add Image"
                successBtnText="Save Image"
                cancelBtnText="Cancel"
                onUpload={() => {
                    console.log('Upload triggered');
                    setIsImageModalOpen(false);
                }}
            />
        </div>
    );
};

export default ItemDetails;
