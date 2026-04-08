import Modal from '@/superadmin/components/Modal';
import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import { Input, Label } from '@/superadmin/components/ui/FormElements';
import RadioGroup from '@/superadmin/components/ui/RadioGroup';
// import DeleteRecordModal from '@superadmin/components/Modals/DeleteRecordModal';
import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import DeleteRecord from './DeleteRecord';

interface EditRegionalPricingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: RegionalPricingFormData) => void;
    onDelete?: () => void;
    pricing?: {
        country: string;
        targetBasePlan: string;
        monthlyPrice: string;
        annualPrice: string;
        status?: 'active' | 'archived';
        regionLabel?: string; // e.g. "Australia"
        planLabel?: string; // e.g. "Pro Plan"
    };
}

interface RegionalPricingFormData {
    country: string;
    targetBasePlan: string;
    monthlyPrice: string;
    annualPrice: string;
    status: 'active' | 'archived';
}

const COUNTRY_OPTIONS = [
    { label: '🇦🇪 UAE', value: 'uae' },
    { label: '🇸🇦 Saudi Arabia', value: 'ksa' },
    { label: '🇶🇦 Qatar', value: 'qatar' },
    { label: '🇧🇭 Bahrain', value: 'bahrain' },
    { label: '🇰🇼 Kuwait', value: 'kuwait' },
];

const BASE_PLAN_OPTIONS = [
    { label: 'Pro Plan', value: 'pro' },
    { label: 'Standard Plan', value: 'standard' },
    { label: 'Enterprise Plan', value: 'enterprise' },
];

export default function EditRegionalPricingModal({
    isOpen,
    onClose,
    onConfirm,
    onDelete,
    pricing,
}: EditRegionalPricingModalProps) {
    const [country, setCountry] = useState(pricing?.country ?? 'uae');
    const [targetBasePlan, setTargetBasePlan] = useState(
        pricing?.targetBasePlan ?? 'pro',
    );
    const [monthlyPrice, setMonthlyPrice] = useState(
        pricing?.monthlyPrice ?? '399.000',
    );
    const [annualPrice, setAnnualPrice] = useState(
        pricing?.annualPrice ?? '3,999.000',
    );
    const [status, setStatus] = useState<'active' | 'archived'>(
        pricing?.status ?? 'active',
    );
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const regionLabel = pricing?.regionLabel ?? 'Australia';
    const planLabel = pricing?.planLabel ?? 'Pro Plan';

    const handleSubmit = () => {
        onConfirm({
            country,
            targetBasePlan,
            monthlyPrice,
            annualPrice,
            status,
        });
        onClose();
    };

    const handleDeleteConfirm = () => {
        setIsDeleteModalOpen(false);
        onDelete?.();
        onClose();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
                <div className="p-6 sm:p-8">
                    <div className="mb-5">
                        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                            <PencilIcon className="h-5 w-5 text-gray-700" />
                        </div>
                        <h2 className="text-base font-semibold text-gray-900">
                            Edit Pricing: {regionLabel} - {planLabel}
                        </h2>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-5">
                        {/* Select Region & Plan */}
                        <div className="mb-6">
                            <h3 className="mb-4 text-base font-semibold text-gray-900">
                                Select Region & Plan
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Country
                                    </Label>
                                    <CustomDropdown
                                        disabled={true}
                                        label=""
                                        options={COUNTRY_OPTIONS}
                                        value={country}
                                        onChange={setCountry}
                                        placeholder="Select Country"
                                    />
                                </div>
                                <div>
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Target Plan
                                    </Label>
                                    <CustomDropdown
                                        label=""
                                        disabled={true}
                                        options={BASE_PLAN_OPTIONS}
                                        value={targetBasePlan}
                                        onChange={setTargetBasePlan}
                                        placeholder="Select Plan"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Set Local Price */}
                        <div className="mb-6">
                            <h3 className="mb-4 text-base font-semibold text-gray-900">
                                Set Local Price
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Monthly Price
                                    </Label>
                                    <Input
                                        placeholder="399.000"
                                        value={monthlyPrice}
                                        onChange={(e) =>
                                            setMonthlyPrice(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Annual Price
                                    </Label>
                                    <Input
                                        placeholder="3,999.000"
                                        value={annualPrice}
                                        onChange={(e) =>
                                            setAnnualPrice(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div>
                            <h3 className="mb-3 text-base font-semibold text-gray-900">
                                Availability
                            </h3>
                            <RadioGroup
                                name="regional_status_edit"
                                label="Status"
                                value={status}
                                onChange={(val) =>
                                    setStatus(val as 'active' | 'archived')
                                }
                                options={[
                                    {
                                        value: 'active',
                                        label: 'Public (Active)',
                                    },
                                    {
                                        value: 'archived',
                                        label: 'Hidden (Archived)',
                                    },
                                ]}
                                gap="gap-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                    <div className="flex flex-1 gap-3">
                        <IconButton
                            className="flex w-full items-center gap-2"
                            onClick={() => setIsDeleteModalOpen(true)}
                        >
                            <Trash2 className="h-4 w-4 text-gray-500" />
                            Delete
                        </IconButton>
                        <IconButton className="w-full" onClick={onClose}>
                            Cancel
                        </IconButton>
                        <Button className="w-full" onClick={handleSubmit}>
                            Save Price
                        </Button>
                    </div>
                </div>
            </Modal>

            <DeleteRecord
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
            />
        </>
    );
}
