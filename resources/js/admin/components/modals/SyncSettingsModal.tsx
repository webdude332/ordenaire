import Modal from '@/shared/sharedcomponents/modals/Modal';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Checkbox } from '@/shared/sharedcomponents/ui/FormElements';
import Button from '@/superadmin/components/ui/Button';
import { Settings } from 'lucide-react';
import { useState } from 'react';

interface SyncSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SyncSettingsModal({
    isOpen,
    onClose,
}: SyncSettingsModalProps) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="relative overflow-hidden p-6">
                {/* Rings Background */}
                <div className="pointer-events-none absolute -top-12 -left-12 z-0 opacity-40">
                    <svg
                        width="180"
                        height="180"
                        viewBox="0 0 180 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="90"
                            cy="90"
                            r="30"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx="90"
                            cy="90"
                            r="50"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx="90"
                            cy="90"
                            r="70"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx="90"
                            cy="90"
                            r="90"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                    </svg>
                </div>

                <div className="relative z-10">
                    <div className="mb-6 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                            <Settings className="h-5 w-5 text-gray-700" />
                        </div>
                        <div className="pt-1">
                            <h2 className="mb-1 text-lg font-semibold text-gray-900">
                                Audience Auto-Sync Settings
                            </h2>
                            <p className="text-sm text-gray-500">
                                Control how often customer phone audiences are
                                refreshed for WhatsApp using Engage by
                                Ordenaire.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-5">
                        {/* Range Slider for Frequency */}
                        <div className="mb-8">
                            <label className="mb-4 block font-medium text-gray-900">
                                Sync frequency
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                defaultValue="80"
                                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#79B800]"
                            />
                            <div className="mt-2 text-right text-xs text-gray-500">
                                Every 24 hours
                            </div>
                        </div>

                        {/* Scope Checkboxes */}
                        <div className="mb-8">
                            <label className="mb-4 block font-medium text-gray-900">
                                Sync scope
                            </label>
                            <div className="flex flex-col gap-4">
                                {/* <label className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#79B800] focus:ring-[#79B800]"
                                        defaultChecked
                                    />
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            Include new customers
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Automatically add new profiles from
                                            POS and Website.
                                        </p>
                                    </div>
                                </label> */}
                                <Checkbox
                                    label="
                                            Include new customers
                                        "
                                    checked={isChecked}
                                    onChange={(e) =>
                                        setIsChecked(e.target.checked)
                                    }
                                    defaultChecked={true}
                                />
                                <label className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#79B800] focus:ring-[#79B800]"
                                        defaultChecked
                                    />
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            Update customer segments & tiers
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Refresh data when a customer moves
                                            tiers (e.g., New → Regular).
                                        </p>
                                    </div>
                                </label>
                                <label className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#79B800] focus:ring-[#79B800]"
                                    />
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            Include customers with no orders yet
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Include imported leads or guests who
                                            haven't made a purchase yet.
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Data History Dropdown */}
                        <div>
                            <label className="mb-2 block font-medium text-gray-900">
                                Data History
                            </label>
                            <p className="mb-2 text-sm text-gray-500">
                                Audience data look back
                            </p>
                            <CustomDropdown
                                label=""
                                options={[
                                    {
                                        label: 'Last 365 days (1 year - default)',
                                        value: '365',
                                    },
                                    { label: 'Last 30 days', value: '30' },
                                ]}
                                value="365"
                                onChange={() => {}}
                                placeholder=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 border-t border-gray-100 p-6">
                <button
                    onClick={onClose}
                    className="w-1/2 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                    Reset to default
                </button>
                <Button className="w-1/2 bg-[#79B800] hover:bg-[#6aa300]">
                    Save sync settings
                </Button>
            </div>
        </Modal>
    );
}
