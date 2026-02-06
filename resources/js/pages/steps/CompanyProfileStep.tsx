import Button from '@/components/ui/Button';
import CustomDropdown from '@/components/ui/CustomDropdown';
import { Input, Label } from '@/components/ui/FormElements';
import IconButton from '@/components/ui/IconButton';
import SearchableDropdown from '@/components/ui/SearchableDropdown';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import UploadDocumentModal from '@/components/UploadDocumentModal';
import BusinessProfileIcon from '@/images/icons/businessProfile.svg?react';
import ColorRight from '@/images/icons/colorRight.svg?react';
import MailIcon from '@/images/icons/mailIcon.svg?react';
import { Link } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

// NEW: Import validation system
import { useFormValidation } from '@/utils/useFormValidation';
import { validationRules } from '@/utils/validationRules';

interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext: () => void;
    onBack: () => void;
    isEditMode?: boolean;
    canNext?: boolean;
}

const CompanyProfileStep = ({
    data,
    update,
    onNext,
    onBack,
    canNext = true,
    isEditMode = false,
}: StepProps) => {
    // --- NEW: Form Validation Setup ---
    const { values, errors, handleChange, handleBlur, validateAll, setValue } =
        useFormValidation({
            legalName: {
                value: data.legalName || '',
                validators: [
                    validationRules.required('Legal Business Name'),
                    validationRules.minLength(3, 'Legal Business Name'),
                ],
            },
            address: {
                value: data.address || '',
                validators: [
                    validationRules.required('Full Address'),
                    validationRules.minLength(10, 'Full Address'),
                ],
            },
            city: {
                value: data.city || '',
                validators: [
                    validationRules.required('City'),
                    validationRules.minLength(2, 'City'),
                ],
            },
            branchAdmin: {
                value: data.branchAdmin || '',
                validators: [
                    validationRules.required('Branch Admin Name'),
                    validationRules.minLength(3, 'Branch Admin Name'),
                ],
            },
            phone: {
                value: data.phone || '',
                validators: [
                    validationRules.required('Phone Number'),
                    validationRules.phone(8),
                    validationRules.numeric(),
                ],
            },
            email: {
                value: data.email || '',
                validators: [
                    validationRules.required('Email Address'),
                    validationRules.email(),
                ],
            },
        });

    // --- UI State ---
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isActive, setIsActive] = useState(true);

    // --- Handlers ---
    const handleToggleChangee = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.checked;
        setIsActive(val);
        update('isBranch', val);

        if (!val) {
            update('parentBusiness', '');
        }
    };

    const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsActive(e.target.checked);
    };

    // NEW: Custom handler that updates both validation state and parent data
    const handleValidatedChange =
        (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(field)(e);
            update(field, e.target.value);
        };

    // NEW: Custom phone handler for numeric-only input
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        // Only allow numeric input and max 8 digits
        if ((val === '' || /^[0-9]+$/.test(val)) && val.length <= 8) {
            handleChange('phone')(e);
            update('phone', val);
        }
    };

    // NEW: Enhanced onNext with validation
    const handleNext = () => {
        if (validateAll()) {
            onNext();
        } else {
            console.log('Please fix validation errors before proceeding');
        }
    };

    const typeOptions = [
        { label: 'Full Service (Dine-in)', value: 'Full Service (Dine-in)' },
        { label: 'Quick Service (QSR)', value: 'Quick Service (QSR)' },
        { label: 'Cloud Kitchen', value: 'Cloud Kitchen' },
    ];

    const parentOptions = [
        { label: 'Tea Time HQ (BIZ-1001)', value: 'Tea Time HQ' },
        { label: 'Burger King Main (BIZ-1002)', value: 'Burger King Main' },
    ];

    const countryOptions = [
        { label: 'Kuwait', value: 'Kuwait' },
        { label: 'UAE', value: 'UAE' },
    ];

    const langOptions = [
        { label: 'English', value: 'English', flag: '🇺🇸' },
        { label: 'Arabic', value: 'Arabic', flag: '🇦🇪' },
    ];

    const phoneCodeOptions = [
        { label: '+965', value: '+965' },
        { label: '+971', value: '+971' },
        { label: '+966', value: '+966' },
    ];

    return (
        <div>
            <div className="space-y-8 border-t border-gray-200 pt-8">
                {/* Basic Business Info */}
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-900">
                            Basic Business Info
                        </h3>
                    </div>
                    <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">
                                    Legal Business Name
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    placeholder="e.g., Tea Time Jumeirah"
                                    value={values.legalName}
                                    onChange={handleValidatedChange(
                                        'legalName',
                                    )}
                                    onBlur={handleBlur('legalName')}
                                    error={errors.legalName}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">
                                    Business ID (Auto-generated)
                                </Label>
                                <Input
                                    placeholder="Business ID (Auto-generated)"
                                    value={data.businessId}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Business logo
                            </Label>
                            <p className="text-xs text-gray-500">
                                Upload the Business logo.
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F9F7FA] p-2">
                                    <BusinessProfileIcon className="h-8 w-8" />
                                </div>
                                <IconButton
                                    onClick={() => setIsUploadModalOpen(true)}
                                >
                                    Click To Upload
                                </IconButton>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label className="mb-2">
                                    Business Type
                                    <span className="text-primary">*</span>
                                </Label>
                                <CustomDropdown
                                    label=""
                                    required
                                    value={data.businessType}
                                    onChange={(val) =>
                                        update('businessType', val)
                                    }
                                    options={typeOptions}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 items-start gap-6">
                            <div className="space-y-2">
                                <Label className="mb-4 text-sm font-medium text-gray-700">
                                    Is this a Branch?
                                </Label>
                                <div className="flex items-center gap-3">
                                    <ToggleSwitch
                                        checked={data.isBranch}
                                        onChange={handleToggleChangee}
                                        statusLabel={
                                            data.isBranch ? 'Yes' : 'No'
                                        }
                                    />
                                </div>
                            </div>
                            <SearchableDropdown
                                label="Parent Business"
                                required={data.isBranch}
                                disabled={!data.isBranch}
                                placeholder="Search by Business Name or ID..."
                                value={data.parentBusiness}
                                onChange={(val) =>
                                    update('parentBusiness', val)
                                }
                                options={parentOptions}
                            />
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-gray-200"></div>

                {/* Location Details */}
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-900">
                            Location Details
                        </h3>
                    </div>
                    <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Full Address
                                <span className="text-primary">*</span>
                            </Label>
                            <Input
                                placeholder="Enter full address"
                                value={values.address}
                                onChange={handleValidatedChange('address')}
                                onBlur={handleBlur('address')}
                                error={errors.address}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label className="mb-2 text-sm font-medium text-gray-700">
                                    Country
                                    <span className="text-primary">*</span>
                                </Label>
                                <CustomDropdown
                                    label="Country"
                                    required
                                    value={data.country}
                                    onChange={(val) => update('country', val)}
                                    options={countryOptions}
                                    renderOption={(option) => (
                                        <div className="flex items-center gap-2">
                                            {option.value === 'Kuwait' ? (
                                                <div className="flex h-4 w-6 flex-col overflow-hidden rounded-sm border border-gray-200 bg-gray-100">
                                                    <div className="h-1 bg-green-600"></div>
                                                    <div className="h-1 bg-white"></div>
                                                    <div className="h-1 bg-red-600"></div>
                                                </div>
                                            ) : (
                                                <div className="h-4 w-6 overflow-hidden rounded-sm border border-gray-200 bg-green-600"></div>
                                            )}
                                            <span>{option.label}</span>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">
                                    City
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    placeholder="e.g., Dubai"
                                    value={values.city}
                                    onChange={handleValidatedChange('city')}
                                    onBlur={handleBlur('city')}
                                    error={errors.city}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">
                                    Currency (Auto-filled)
                                </Label>
                                <Input
                                    placeholder="Based on Country, e.g., AED"
                                    disabled
                                />
                            </div>
                            <div>
                                <Label className="mb-2 text-sm font-medium text-gray-700">
                                    Language
                                    <span className="text-primary">*</span>
                                </Label>
                                <CustomDropdown
                                    label="Preferred Language"
                                    value={data.language}
                                    onChange={(val) => update('language', val)}
                                    options={langOptions}
                                    renderOption={(option) => (
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">
                                                {option.flag}
                                            </span>
                                            <span>{option.label}</span>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-gray-200"></div>

                {/* Primary Contact */}
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-3">
                        <h3 className="text-sm font-semibold text-gray-900">
                            Primary Contact
                        </h3>
                    </div>
                    <div className="col-span-9 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">
                                    Branch Admin Name
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    placeholder="e.g., Omar Ali"
                                    value={values.branchAdmin}
                                    onChange={handleValidatedChange(
                                        'branchAdmin',
                                    )}
                                    onBlur={handleBlur('branchAdmin')}
                                    error={errors.branchAdmin}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">
                                    Phone Number
                                    <span className="text-primary">*</span>
                                </Label>
                                <div
                                    className={`relative flex items-center rounded-lg border bg-white transition-all focus-within:ring-1 ${
                                        errors.phone
                                            ? 'border-red-500 focus-within:border-red-500 focus-within:ring-red-500'
                                            : 'border-gray-300 focus-within:border-[#8CDD05] focus-within:ring-[#8CDD05]'
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsPhoneOpen(!isPhoneOpen)
                                        }
                                        className="flex items-center gap-1 pr-2 pl-3 text-sm text-gray-900 outline-none"
                                    >
                                        <span>{data.phoneCode}</span>
                                        <ChevronDown
                                            className={`h-4 w-4 text-gray-400 transition-transform ${isPhoneOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    <input
                                        type="text"
                                        placeholder="66778844"
                                        value={values.phone}
                                        onChange={handlePhoneChange}
                                        onBlur={handleBlur('phone')}
                                        className="w-full border-none bg-transparent py-2.5 pr-3 pl-2 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-0"
                                    />
                                    {isPhoneOpen && (
                                        <>
                                            <div
                                                className="fixed inset-0 z-10"
                                                onClick={() =>
                                                    setIsPhoneOpen(false)
                                                }
                                            />
                                            <ul className="absolute top-full left-0 z-20 mt-1 max-h-48 w-24 overflow-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                                                {phoneCodeOptions.map(
                                                    (option) => (
                                                        <li key={option.value}>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    update(
                                                                        'phoneCode',
                                                                        option.value,
                                                                    );
                                                                    setIsPhoneOpen(
                                                                        false,
                                                                    );
                                                                }}
                                                                className={`block w-full px-4 py-2 text-left text-sm hover:bg-[#F8FFEB] hover:text-[#578500] ${data.phoneCode === option.value ? 'bg-[#F8FFEB] font-medium text-[#578500]' : 'text-gray-700'}`}
                                                            >
                                                                {option.label}
                                                            </button>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </>
                                    )}
                                </div>
                                {errors.phone && (
                                    <p className="mt-1.5 text-xs font-medium text-red-600">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">
                                    Email Address
                                    <span className="text-primary">*</span>
                                </Label>
                                <Input
                                    icon={MailIcon}
                                    placeholder="e.g., omar@teatime.com"
                                    value={values.email}
                                    onChange={handleValidatedChange('email')}
                                    onBlur={handleBlur('email')}
                                    error={errors.email}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons - HIDDEN IF IN EDIT MODE */}
                {!isEditMode && (
                    <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                        <Link href="/business-management">
                            <IconButton onClick={onBack}>Cancel</IconButton>
                        </Link>
                        <Button onClick={handleNext} disabled={!canNext}>
                            Next: Operations <ColorRight />
                        </Button>
                    </div>
                )}
            </div>

            {/* Modal */}
            <UploadDocumentModal
                isOpen={isUploadModalOpen}
                onClose={() => setIsUploadModalOpen(false)}
                onUpload={() => setIsUploadModalOpen(false)}
            />
        </div>
    );
};

export default CompanyProfileStep;
