import patternBg from '@/shared/images/icons/patternBg.svg';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import { useState } from 'react';

interface AddNewOssProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

export default function AddNewOss({ isOpen, onClose, onSave }: AddNewOssProps) {
    const [deviceName, setDeviceName] = useState('');
    const [displayMode, setDisplayMode] = useState('');
    const [soundAlerts, setSoundAlerts] = useState('ping_ready');

    const pairingCode = '492 - 118';

    const displayModeOptions = [
        { label: 'Ready & Preparing', value: 'ready_preparing' },
        { label: 'Ready Orders Only', value: 'ready_only' },
    ];

    const soundAlertOptions = [
        { label: "Ping when 'Ready'", value: 'ping_ready' },
        { label: 'Disabled', value: 'disabled' },
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
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

                {/* Content */}
                <div className="relative z-0 p-8 pb-4">
                    {/* Header */}
                    <div className="relative mb-6 flex items-start gap-4">
                        <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                            <img
                                src={patternBg}
                                alt=""
                                className="max-w-none"
                                style={{ transform: 'scale(1.1)', opacity: 2 }}
                            />
                        </div>
                        <div>
                            {/* Plus Icon Box */}
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border-2 border-gray-200 bg-white">
                                <svg
                                    className="h-5 w-5 text-gray-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </div>
                            {/* Title */}
                            <div className="relative z-10 pt-4">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Add Customer Screen (OSS)
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="space-y-6 rounded-lg border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        {/* Row 1: Device Name + Pairing Code */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Device Name
                                    <span className="text-[#8AC926]">*</span>
                                </Label>
                                <Input
                                    placeholder="e.g. Waiting Area TV"
                                    value={deviceName}
                                    onChange={(e) =>
                                        setDeviceName(e.target.value)
                                    }
                                />
                                <p className="mt-1.5 text-xs text-gray-500">
                                    Give this screen a name so you can identify
                                    it later.
                                </p>
                            </div>
                            <div>
                                <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    System Pairing Code
                                </Label>
                                <p className="text-2xl font-bold tracking-wide text-gray-900">
                                    {pairingCode}
                                </p>
                                <p className="mt-1.5 text-xs text-gray-500">
                                    Enter this unique code in the Ordenaire app
                                    or website on your TV/tablet.
                                </p>
                            </div>
                        </div>

                        {/* Row 2: Display Mode + Sound Alerts */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Display Mode
                                    <span className="text-[#8AC926]">*</span>
                                </Label>
                                <CustomDropdown
                                    label="Display Mode"
                                    options={displayModeOptions}
                                    value={displayMode}
                                    onChange={setDisplayMode}
                                    placeholder="Select a Mode"
                                />
                                <p className="mt-1.5 text-xs text-gray-500">
                                    Standard mode shows order progress. Use
                                    'Ready Only' for quick pickup counters.
                                </p>
                            </div>
                            <div>
                                <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Sound Alerts
                                </Label>
                                <CustomDropdown
                                    label="Sound Alerts"
                                    options={soundAlertOptions}
                                    value={soundAlerts}
                                    onChange={setSoundAlerts}
                                    placeholder="Ping when 'Ready'"
                                />
                            </div>
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
                            className="w-full justify-center border-none bg-[#8AC926] hover:bg-[#78b31f]"
                        >
                            Done
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
