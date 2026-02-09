import { useState } from 'react';
// Icons
import BetaIcon from '@/images/icons/betaIcon.svg?react';
import patternBg from '@/images/icons/patternBg.svg'; // Use your pattern path
import Modal from './Modal';
import Button from './ui/Button'; // Assuming your Button component
import CustomDropdown from './ui/CustomDropdown'; // Assuming your Dropdown
import { Checkbox, Input, Label } from './ui/FormElements'; // Assuming your Input
import IconButton from './ui/IconButton'; // Assuming your IconButton
interface AssignBetaModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

export default function EditBetaAssignmentModal({
    isOpen,
    onClose,
    onSave,
}: AssignBetaModalProps) {
    const [selectedFeature, setSelectedFeature] = useState('');
    const [rolloutStage, setRolloutStage] = useState('beta');

    // Hardcoded for UI demo - matching your screenshot
    const featureOptions = [
        { label: 'All features from backend', value: 'all' },
    ];
    const stageOptions = [{ label: 'Beta (Early Access)', value: 'beta' }];

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="3xl">
            <div className="relative overflow-hidden rounded-xl bg-white">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Modal Header & Icon */}
                <div className="relative z-0 p-8 pb-4">
                    <div className="mb-4 flex flex-col items-start gap-4">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                            {/* Pattern Background */}
                            <div className="pointer-events-none absolute inset-0 top-22 left-22 flex items-center justify-center">
                                <img
                                    src={patternBg}
                                    alt=""
                                    className="max-w-none"
                                    style={{
                                        transform: 'scale(1.1)',
                                        opacity: 1,
                                    }}
                                />
                            </div>
                            {/* Icon */}
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <div className="rounded-lg border-2 border-gray-200 bg-white p-2.5">
                                    {/* Use BeakerIconPlaceholder or your imported BeakerIcon */}
                                    <BetaIcon className="h-7 w-7" />
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-md font-medium text-gray-900">
                                Edit beta assignment
                            </h3>
                        </div>
                    </div>

                    {/* Form Container */}

                    <div className="relative z-10 mb-8 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-sm">
                        {/* Section: Basic Info */}
                        <div className="mb-6">
                            <h4 className="mb-4 text-sm font-semibold text-gray-900">
                                Basic Info
                            </h4>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <Label className="mb-2 text-sm font-medium text-gray-800">
                                        Select Feature
                                    </Label>
                                    <CustomDropdown
                                        label="Select Feature"
                                        options={featureOptions}
                                        value={selectedFeature}
                                        onChange={setSelectedFeature}
                                        placeholder="Chatbot"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Display Name{' '}
                                        <span className="text-primary">*</span>
                                    </label>
                                    <Input placeholder="e.g., Live Chat Support" />
                                </div>
                                <div>
                                    <Label className="mb-2 text-sm font-medium text-gray-800">
                                        Rollout Stage
                                    </Label>
                                    <CustomDropdown
                                        label="Rollout Stage"
                                        options={stageOptions}
                                        value={rolloutStage}
                                        onChange={setRolloutStage}
                                        placeholder="Beta (Early Access)"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Version Tag{' '}
                                        <span className="text-primary">*</span>
                                    </label>
                                    <Input placeholder="e.g., v2.1.0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 mb-8 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-sm">
                        {/* Section: Targeting */}
                        <div className="mb-6 pt-6">
                            <h4 className="mb-4 text-sm font-semibold text-gray-900">
                                Targeting & Availability
                            </h4>
                            <Label className="mb-4 text-sm font-medium text-gray-800">
                                Add Business Tags
                            </Label>

                            {/* Simulated Tag Input */}
                            <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus-within:border-[#7AB621] focus-within:ring-1 focus-within:ring-[#7AB621]">
                                <svg
                                    className="h-4 w-4 text-gray-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="M21 21l-4.35-4.35" />
                                </svg>

                                {/* Tags */}
                                <span className="flex items-center gap-1 rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                                    UAE{' '}
                                    <button className="ml-1 hover:text-blue-900">
                                        ×
                                    </button>
                                </span>
                                <span className="flex items-center gap-1 rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                                    StarBites{' '}
                                    <button className="ml-1 hover:text-blue-900">
                                        ×
                                    </button>
                                </span>

                                <input
                                    className="flex-1 border-none bg-transparent p-0 text-sm placeholder:text-gray-400 focus:ring-0"
                                    placeholder=""
                                />
                                <button className="text-gray-400 hover:text-gray-600">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 mb-4 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-sm">
                        {/* Checkbox */}
                        <div className="flex items-center gap-2">
                            <Checkbox
                                label="Notify selected users via Email/Push?"
                                defaultChecked={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-2 flex gap-4 border-t border-gray-100 bg-white px-8 py-5">
                    <div className="flex-1">
                        <IconButton
                            onClick={onClose}
                            className="w-full justify-center"
                        >
                            Cancel
                        </IconButton>
                    </div>
                    <div className="flex-1">
                        <Button
                            onClick={onSave}
                            className="w-full justify-center bg-[#7AB621] hover:bg-[#6ba31b]"
                        >
                            Save & Launch Beta
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
