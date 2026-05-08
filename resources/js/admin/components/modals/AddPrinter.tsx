import patternBg from '@/shared/images/icons/patternBg.svg';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';
import { useState } from 'react';

interface AddPrinterProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
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

export default function AddPrinter({
    isOpen,
    onClose,
    onSave,
}: AddPrinterProps) {
    const [printerName, setPrinterName] = useState('');
    const [model, setModel] = useState('');
    const [interfaceType, setInterfaceType] = useState('network');
    const [ipAddress, setIpAddress] = useState('');
    const [port, setPort] = useState('9100');
    const [macAddress, setMacAddress] = useState('');
    const [assignment, setAssignment] = useState('');

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
                                    Add New Printer
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
                                    <span className="text-[#8AC926]">*</span>
                                </Label>
                                <Input
                                    placeholder="e.g. Customer Receipts"
                                    value={printerName}
                                    onChange={(e) =>
                                        setPrinterName(e.target.value)
                                    }
                                />
                                <p className="mt-1.5 text-xs text-gray-500">
                                    Give this printer a name so you can identify
                                    it later.
                                </p>
                            </div>
                            <div>
                                <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Model
                                    <span className="text-[#8AC926]">*</span>
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
                                onChange={setInterfaceType}
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
                                    Leave blank to pair later on the POS device.
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
                            Save Printer
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
