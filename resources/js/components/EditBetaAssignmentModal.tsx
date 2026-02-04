import { useState } from 'react';
// Icons
import BetaIcon from '@/images/icons/betaIcon.svg?react';
import patternBg from '@/images/icons/patternBg.svg';
import Modal from './Modal';
import Button from './ui/Button';
import CustomDropdown from './ui/CustomDropdown';
import { Input } from './ui/FormElements';
import IconButton from './ui/IconButton';
// Placeholder SVG
const BeakerIconPlaceholder = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 21a1.5 1.5 0 001.5-1.5v-6.75a4.5 4.5 0 00-2.25-3.906l-2.025-1.171A4.5 4.5 0 0014.25 6h-4.5a4.5 4.5 0 00-2.475 1.673L5.25 8.844a4.5 4.5 0 00-2.25 3.906v6.75a1.5 1.5 0 001.5 1.5h15zM10.5 2.25h3m-3.75 3.75h4.5"
        />
    </svg>
);

interface EditBetaProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

export default function EditBetaAssignmentModal({
    isOpen,
    onClose,
    onSave,
}: EditBetaProps) {
    // Pre-filled state simulation
    const [selectedFeature, setSelectedFeature] = useState('chatbot');
    const [rolloutStage, setRolloutStage] = useState('beta');

    const featureOptions = [{ label: 'Chat Bot', value: 'chatbot' }];
    const stageOptions = [{ label: 'Beta (Early Access)', value: 'beta' }];

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="3xl">
            <div className="relative overflow-hidden rounded-xl bg-white">
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

                <div className="relative z-0 p-8 pb-4">
                    <div className="mb-6 flex flex-col items-start gap-4">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center">
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
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <div className="rounded-lg border-2 border-gray-200 bg-white p-2.5">
                                    <BetaIcon className="h-8 w-8" />
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Edit Beta Assignment
                            </h3>
                        </div>
                    </div>

                    <div className="relative z-10 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-sm">
                        <div className="mb-6">
                            <h4 className="mb-4 text-sm font-semibold text-gray-900">
                                Basic Info
                            </h4>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <CustomDropdown
                                        label="Select Feature"
                                        options={featureOptions}
                                        value={selectedFeature}
                                        onChange={setSelectedFeature}
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Display Name{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input defaultValue="Live Chat Support" />
                                </div>
                                <div>
                                    <CustomDropdown
                                        label="Rollout Stage"
                                        options={stageOptions}
                                        value={rolloutStage}
                                        onChange={setRolloutStage}
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Version Tag{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <Input defaultValue="v2.1.0" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 border-t border-gray-100 pt-6">
                            <h4 className="mb-4 text-sm font-semibold text-gray-900">
                                Targeting & Availability
                            </h4>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Add Business Tags
                            </label>

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

                        <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-3">
                            <input
                                id="notify_edit"
                                type="checkbox"
                                defaultChecked
                                className="h-4 w-4 rounded border-gray-300 text-[#7AB621] focus:ring-[#7AB621]"
                            />
                            <label
                                htmlFor="notify_edit"
                                className="text-sm font-medium text-gray-700"
                            >
                                Notify selected users via Email/Push?
                            </label>
                        </div>
                    </div>
                </div>

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
                            Save Changes
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
