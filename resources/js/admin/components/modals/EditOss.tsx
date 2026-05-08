import patternBg from '@/shared/images/icons/patternBg.svg';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import { useState } from 'react';
import DeleteModal from './CustomDeleteModal';

interface EditOssProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
    onUnpair: () => void;
    initialDeviceName?: string;
    initialDisplayMode?: string;
    initialSoundAlerts?: string;
    pairingCode?: string;
}

export default function EditOss({
    isOpen,
    onClose,
    onSave,
    onUnpair,
    initialDeviceName = '',
    initialDisplayMode = 'ready_preparing',
    initialSoundAlerts = 'ping_ready',
    pairingCode = '492 - 118',
}: EditOssProps) {
    const [deviceName, setDeviceName] = useState(initialDeviceName);
    const [displayMode, setDisplayMode] = useState(initialDisplayMode);
    const [soundAlerts, setSoundAlerts] = useState(initialSoundAlerts);
    const [isUnpairModalOpen, setIsUnpairModalOpen] = useState(false);

    const displayModeOptions = [
        { label: 'Ready & Preparing', value: 'ready_preparing' },
        { label: 'Ready Orders Only', value: 'ready_only' },
    ];

    const soundAlertOptions = [
        { label: "Ping when 'Ready'", value: 'ping_ready' },
        { label: 'Disabled', value: 'disabled' },
    ];

    return (
        <>
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
                                    style={{
                                        transform: 'scale(1.1)',
                                        opacity: 2,
                                    }}
                                />
                            </div>
                            <div>
                                {/* Pencil Icon Box */}
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
                                            d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.213l-4 1 1-4 12.362-12.726z"
                                        />
                                    </svg>
                                </div>
                                {/* Title */}
                                <div className="relative z-10 pt-4">
                                    <h3 className="text-base font-semibold text-gray-900">
                                        Edit Customer Screen Details
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
                                        <span className="text-[#8AC926]">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        placeholder="e.g. Waiting Area TV"
                                        value={deviceName}
                                        onChange={(e) =>
                                            setDeviceName(e.target.value)
                                        }
                                    />
                                    <p className="mt-1.5 text-xs text-gray-500">
                                        Give this screen a name so you can
                                        identify it later.
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
                                        Enter this unique code in the Ordenaire
                                        app or website on your TV/tablet.
                                    </p>
                                </div>
                            </div>

                            {/* Row 2: Display Mode + Sound Alerts */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                        Display Mode
                                        <span className="text-[#8AC926]">
                                            *
                                        </span>
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
                            <button
                                onClick={() => setIsUnpairModalOpen(true)}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-400 bg-white px-4 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>
                                Unpair Device
                            </button>
                        </div>
                        <div className="flex-1">
                            <Button
                                onClick={onSave}
                                className="w-full justify-center border-none bg-[#8AC926] hover:bg-[#78b31f]"
                            >
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Unpair Confirmation Modal */}
            <DeleteModal
                isOpen={isUnpairModalOpen}
                onClose={() => setIsUnpairModalOpen(false)}
                onRetry={() => {
                    onUnpair();
                    setIsUnpairModalOpen(false);
                }}
                title="Disconnect Device"
                heading={`Are you sure you want to unpair ${deviceName || 'this device'}?`}
                subheading="This will immediately disconnect the device. The screen will return to pairing mode."
                confirmLabel="Yes, Disconnect"
                cancelLabel="No, Cancel!"
                showCheckbox={false}
            />
        </>
    );
}
