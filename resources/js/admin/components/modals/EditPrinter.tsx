import patternBg from '@/shared/images/icons/patternBg.svg';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';
import { useEffect, useState } from 'react';
import DeleteModal from './CustomDeleteModal';

interface PrinterRecord {
    printerName: string;
    model: string;
    interfaceType: 'network' | 'bluetooth';
    ipAddress?: string;
    port?: string;
    macAddress?: string;
    assignment: string;
}

interface EditPrinterProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
    onUnpair: () => void;
    initialData?: Partial<PrinterRecord>;
}

const LinkIcon = () => (
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
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
    </svg>
);

export default function EditPrinter({
    isOpen,
    onClose,
    onSave,
    onUnpair,
    initialData = {},
}: EditPrinterProps) {
    const [printerName, setPrinterName] = useState(
        initialData.printerName ?? '',
    );
    const [model, setModel] = useState(initialData.model ?? '');
    const [interfaceType, setInterfaceType] = useState<'network' | 'bluetooth'>(
        initialData.interfaceType ?? 'network',
    );
    const [ipAddress, setIpAddress] = useState(initialData.ipAddress ?? '');
    const [port, setPort] = useState(initialData.port ?? '9100');
    const [macAddress, setMacAddress] = useState(initialData.macAddress ?? '');
    const [assignment, setAssignment] = useState(initialData.assignment ?? '');
    const [isUnpairModalOpen, setIsUnpairModalOpen] = useState(false);

    // Re-sync when a different record is opened
    useEffect(() => {
        setPrinterName(initialData.printerName ?? '');
        setModel(initialData.model ?? '');
        setInterfaceType(initialData.interfaceType ?? 'network');
        setIpAddress(initialData.ipAddress ?? '');
        setPort(initialData.port ?? '9100');
        setMacAddress(initialData.macAddress ?? '');
        setAssignment(initialData.assignment ?? '');
    }, [isOpen]);

    const modelOptions = [
        { label: 'Epson TM-T88V', value: 'epson_tm_t88v' },
        { label: 'Star', value: 'star' },
        { label: 'Zebra', value: 'zebra' },
        { label: 'Generic', value: 'generic' },
    ];

    const assignmentOptions = [
        { label: 'Orders • Hot Kitchen', value: 'orders_hot_kitchen' },
        { label: 'Orders • Grill Kitchen', value: 'orders_grill_kitchen' },
        { label: 'Customer Receipts', value: 'customer_receipts' },
    ];

    const interfaceOptions = [
        { value: 'network', label: 'Network (Ethernet/WiFi)' },
        { value: 'bluetooth', label: 'Bluetooth' },
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
                                        Edit Printer
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Form Card */}
                        <div className="space-y-6 rounded-lg border border-[#E8E6EA] bg-white p-6 shadow-xs">
                            {/* Row 1: Printer Name + Model */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                        Printer Name
                                        <span className="text-[#8AC926]">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        placeholder="e.g. Customer Receipts"
                                        value={printerName}
                                        onChange={(e) =>
                                            setPrinterName(e.target.value)
                                        }
                                    />
                                    <p className="mt-1.5 text-xs text-gray-500">
                                        Give this printer a name so you can
                                        identify it later.
                                    </p>
                                </div>
                                <div>
                                    <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                        Model
                                        <span className="text-[#8AC926]">
                                            *
                                        </span>
                                    </Label>
                                    <CustomDropdown
                                        label="Model"
                                        options={modelOptions}
                                        value={model}
                                        onChange={setModel}
                                        placeholder="Select Model"
                                    />
                                </div>
                            </div>

                            {/* Interface Type */}
                            <div>
                                <Label className="mb-2 block text-sm font-medium text-gray-700">
                                    Interface Type
                                    <span className="text-[#8AC926]">*</span>
                                </Label>
                                <RadioGroup
                                    name="interfaceType"
                                    options={interfaceOptions}
                                    value={interfaceType}
                                    onChange={(val) =>
                                        setInterfaceType(
                                            val as 'network' | 'bluetooth',
                                        )
                                    }
                                />
                            </div>

                            {/* Conditional Fields */}
                            {interfaceType === 'network' ? (
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                            IP Address
                                        </Label>
                                        <Input
                                            placeholder="0.0.0.0"
                                            value={ipAddress}
                                            onChange={(e) =>
                                                setIpAddress(e.target.value)
                                            }
                                        />
                                        <p className="mt-1.5 text-xs text-gray-500">
                                            Leave blank to configure on-site.
                                        </p>
                                    </div>
                                    <div>
                                        <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                            Port
                                        </Label>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="9100"
                                                value={port}
                                                onChange={(e) =>
                                                    setPort(e.target.value)
                                                }
                                                className="flex-1"
                                            />
                                            <button className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-600 transition-colors hover:bg-gray-50">
                                                <LinkIcon />
                                                Test Connection
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                        MAC Address (Optional)
                                    </Label>
                                    <Input
                                        placeholder="00:11:22:33:FF:EE"
                                        value={macAddress}
                                        onChange={(e) =>
                                            setMacAddress(e.target.value)
                                        }
                                    />
                                    <p className="mt-1.5 text-xs text-gray-500">
                                        Leave blank to pair later on the POS
                                        device.
                                    </p>
                                </div>
                            )}

                            {/* Assignment */}
                            <div>
                                <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Assignment
                                    <span className="text-[#8AC926]">*</span>
                                </Label>
                                <CustomDropdown
                                    label="Assignment"
                                    options={assignmentOptions}
                                    value={assignment}
                                    onChange={setAssignment}
                                    placeholder="Select Printer Assignment"
                                />
                                <p className="mt-1.5 text-xs text-gray-500">
                                    This determines which orders appear on this
                                    printer.
                                </p>
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
                heading={`Are you sure you want to remove ${printerName || 'this printer'}?`}
                subheading="This will immediately disconnect the device. Any scheduled print jobs for this printer will fail."
                confirmLabel="Yes, Remove"
                cancelLabel="No, Cancel!"
                showCheckbox={false}
            />
        </>
    );
}
