import SearchIcon from '@/shared/images/icons/inputSearch.svg?react';
import patternBg from '@/shared/images/icons/patternBg.svg';
import Plus from '@/shared/images/icons/plus.svg?react';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';

import { useState } from 'react';

// Optional: Replace with your actual SVG imports if you have them

const PlusOutlineIcon = () => (
    <svg
        className="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
        />
    </svg>
);

interface CreateNewGroupProps {
    isOpen: boolean;
    onClose: () => void;
    // We will wire up the actual submit logic later!
}

export default function CreateNewGroup({
    isOpen,
    onClose,
}: CreateNewGroupProps) {
    const [activeTab, setActiveTab] = useState<'library' | 'new'>('library');

    // State for inputs (ready to be connected later)
    const [searchQuery, setSearchQuery] = useState('');
    const [groupName, setGroupName] = useState('');
    const [displaySequence, setDisplaySequence] = useState('');
    const [minRequired, setMinRequired] = useState('1');
    const [maxAllowed, setMaxAllowed] = useState('1');

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header Section Aligned with AddVariant */}
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
                        Create Modifier Group
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Define a set of options (e.g. Cooking Temp, Sides)
                    </p>
                </div>

                {/* Main Content Box */}
                <div className="rounded-xl border border-borderColor bg-white px-4 py-6 shadow-sm">
                    {/* Tab Toggle */}
                    <div className="mb-8 flex justify-center">
                        <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
                            <button
                                onClick={() => setActiveTab('library')}
                                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                                    activeTab === 'library'
                                        ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Select from Library
                            </button>
                            <button
                                onClick={() => setActiveTab('new')}
                                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                                    activeTab === 'new'
                                        ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Create New
                            </button>
                        </div>
                    </div>

                    {/* DYNAMIC CONTENT: Select from Library */}
                    {activeTab === 'library' && (
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Search{' '}
                                    <span className="text-primary">*</span>
                                </Label>
                                <div className="relative">
                                    {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <SearchIcon />
                                    </div> */}
                                    <Input
                                        icon={SearchIcon}
                                        placeholder="Search existing groups..."
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Display Sequence (Optional)
                                </Label>
                                <Input
                                    placeholder="e.g. 1"
                                    value={displaySequence}
                                    onChange={(e) =>
                                        setDisplaySequence(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    )}

                    {/* DYNAMIC CONTENT: Create New */}
                    {activeTab === 'new' && (
                        <div className="space-y-6">
                            {/* Row 1 */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Group Name{' '}
                                        <span className="text-primary">*</span>
                                    </Label>
                                    <Input
                                        placeholder='e.g., "Burger Toppings"'
                                        value={groupName}
                                        onChange={(e) =>
                                            setGroupName(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Display Sequence (Optional)
                                    </Label>
                                    <Input
                                        placeholder="e.g. 1"
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
                    )}
                </div>
            </div>

            {/* Footer Aligned with AddVariant */}
            <div className="flex justify-between gap-4 border-t border-borderColor px-8 py-6">
                <div className="w-1/2">
                    <IconButton className="w-full" onClick={onClose}>
                        Cancel
                    </IconButton>
                </div>
                <div className="w-1/2">
                    <Button
                        className="w-full bg-[#7AB621] hover:bg-[#6aa31d]"
                        onClick={() => console.log('Submit clicked!')}
                    >
                        {activeTab === 'library' ? 'Add Group' : 'Create Group'}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
