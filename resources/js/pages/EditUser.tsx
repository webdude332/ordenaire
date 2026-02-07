import DeleteModal from '@/components/DeleteModal';
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import ActionButton from '@/components/ui/ActionButton';
import Button from '@/components/ui/Button';
import CustomDropdown from '@/components/ui/CustomDropdown';
import { Input, Label } from '@/components/ui/FormElements';
import IconButton from '@/components/ui/IconButton';
import RadioGroup from '@/components/ui/RadioGroup';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/Table';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import BackArrow from '@/images/icons/backArrow.svg?react';
import DelIcon from '@/images/icons/delIcon.svg?react';
import DownloadIcon from '@/images/icons/downloadIcon.svg?react';
import MailIcon from '@/images/icons/mailIcon.svg?react';
import PlusIcon from '@/images/icons/plus.svg?react';
import Profile from '@/images/icons/profile.svg?react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import DashBoardIcon from '../images/icons/dashBaordSvg.svg?react';

// Integrated Modals
import AddDocumentModal from '@/components/Modals/AddDocumentModal';
import ReplaceProfilePhotoModal from '@/components/Modals/ReplaceProfilePhotoModal';

// NEW: Import validation system
import SuccessToast from '@/components/toasts/SuccessToast';
import { useFormValidation } from '@/utils/useFormValidation';
import { validationRules } from '@/utils/validationRules';

const EditUser = () => {
    // --- 1. Form Validation (NEW & IMPROVED) ---
    const { values, errors, handleChange, handleBlur, validateAll } =
        useFormValidation({
            fullName: {
                value: 'Noah Pierre', // Pre-filled with existing data
                validators: [
                    validationRules.required('Full Name'),
                    validationRules.minLength(3, 'Full Name'),
                ],
            },
            email: {
                value: 'Noah@ordemark.com', // Pre-filled with existing data
                validators: [
                    validationRules.required('Email Address'),
                    validationRules.email(),
                ],
            },
            phoneNumber: {
                value: '234945689654567', // Pre-filled with existing data
                validators: [
                    validationRules.required('Phone Number'),
                    validationRules.phone(8),
                ],
            },
        });

    // --- 2. UI State ---
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isDocModalOpen, setIsDocModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // Form States
    const [reportTemplate, setReportTemplate] = useState('customer_manager');
    const [isActive, setIsActive] = useState(true);
    const [successToast, setSuccessToast] = useState(false);

    // Documents State
    const [documents, setDocuments] = useState([
        {
            fileName: 'Contract_2025.pdf',
            documentType: 'Employment',
            expiry: '-',
        },
        {
            fileName: 'Passport_Copy.jpg',
            documentType: 'Proof of Identity',
            expiry: '20 Nov 2028',
        },
    ]);

    // Profile Preview (Initial state with existing user image)
    const [profilePreview, setProfilePreview] = useState<string | null>(null);

    // --- 3. Handlers ---
    const handleAddDocument = (data: any) => {
        const newDoc = {
            fileName: data.name,
            documentType: data.type,
            expiry: data.expiry ? data.expiry.toLocaleDateString() : '-',
        };
        setDocuments((prev) => [...prev, newDoc]);
    };

    const handleProfileReplace = (file: File | null) => {
        if (file) {
            setProfilePreview(URL.createObjectURL(file));
        } else {
            setProfilePreview(null); // Handle "Remove Photo"
        }
        setIsProfileModalOpen(false);
    };

    // NEW: Custom phone handler for numeric-only input
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        // Only allow numeric input and max 15 digits (keeping existing behavior)
        if (val === '' || /^[0-9]+$/.test(val)) {
            handleChange('phoneNumber')(e);
        }
    };

    // NEW: Handle form submission with validation
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateAll()) {
            console.log('Form is valid! Saving changes...', values);
            // Your API call to update user
            // Example: await updateUser(userId, values);
        } else {
            console.log('Form has validation errors');
        }
    };

    const breadcrumbs = [
        {
            label: 'Internal User Management',
            isActive: false,
            href: '/usermanagement',
        },
        { label: 'User Profiles', isActive: false, href: '/usermanagement' },
        { label: 'Edit User', isActive: true, href: '#' },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />

            <main className="flex flex-1 flex-col">
                <div className="sticky top-0 z-10 bg-white">
                    <TopBar
                        title="Edit User"
                        icon={DashBoardIcon}
                        breadcrumbs={breadcrumbs}
                    />
                </div>

                <div className="flex-1 overflow-y-auto px-8 pt-8">
                    <div className="mb-8">
                        <Link
                            href="/usermanagement"
                            className="flex w-[210px] items-center gap-3 rounded-lg border border-[#CFCBD2] bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            <BackArrow className="h-4 w-4 text-[#B5B0BA]" />
                            Back to User Profiles
                        </Link>
                    </div>

                    <form className="space-y-8 pb-12" onSubmit={handleSubmit}>
                        {/* SECTION 1: Basic Information */}
                        <div className="grid grid-cols-1 gap-8 border-t border-[#E8E6EA] py-6 lg:grid-cols-3">
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-bold text-gray-900">
                                    Basic information
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Update User photo and personal details.
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
                                <div className="mb-6">
                                    <Label className="text-md font-semibold">
                                        User Photo
                                    </Label>
                                    <p className="mb-3 text-sm text-gray-500">
                                        This will be displayed on the profile.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                                            {profilePreview ? (
                                                <img
                                                    src={profilePreview}
                                                    className="h-full w-full object-cover"
                                                    alt="User"
                                                />
                                            ) : (
                                                <Profile className="h-16 w-16" />
                                            )}
                                        </div>
                                        <IconButton
                                            onClick={() =>
                                                setIsProfileModalOpen(true)
                                            }
                                        >
                                            Replace photo
                                        </IconButton>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <Label className="mb-2 text-sm font-medium">
                                            Full Name
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            placeholder="Noah Pierre"
                                            value={values.fullName}
                                            onChange={handleChange('fullName')}
                                            onBlur={handleBlur('fullName')}
                                            error={errors.fullName}
                                        />
                                    </div>
                                    <div>
                                        <Label className="mb-2 text-sm font-medium">
                                            Email Address
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            placeholder="Noah@ordemark.com"
                                            icon={MailIcon}
                                            value={values.email}
                                            onChange={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            error={errors.email}
                                        />
                                    </div>
                                    <div>
                                        <Label className="mb-2 text-sm font-medium">
                                            Phone Number
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <div
                                            className={`flex rounded-lg border shadow-xs focus-within:ring-1 ${
                                                errors.phoneNumber
                                                    ? 'border-red-500 focus-within:ring-red-500'
                                                    : 'border-gray-300 focus-within:border-[#84cc16] focus-within:ring-[#84cc16]'
                                            }`}
                                        >
                                            <div className="relative">
                                                <select className="h-full appearance-none rounded-l-lg border-0 bg-white py-2.5 pr-7 pl-3 text-sm text-gray-900 outline-none focus:ring-0">
                                                    <option>+91</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                                    <svg
                                                        className="h-3 w-3"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="h-6 w-px self-center bg-gray-300"></div>
                                            <Input
                                                placeholder="234945689654567"
                                                value={values.phoneNumber}
                                                onChange={handlePhoneChange}
                                                onBlur={handleBlur(
                                                    'phoneNumber',
                                                )}
                                                className="!rounded-l-none !rounded-r-lg !border-0 !shadow-none focus:!ring-0"
                                            />
                                        </div>
                                        {errors.phoneNumber && (
                                            <p className="mt-1.5 text-xs font-medium text-red-600">
                                                {errors.phoneNumber}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Label className="mb-2 text-sm font-medium">
                                            Primary Role
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <CustomDropdown
                                            label="Primary Role"
                                            options={[
                                                {
                                                    label: 'Customer relationship manager',
                                                    value: 'customer_manager',
                                                },
                                            ]}
                                            value={reportTemplate}
                                            onChange={setReportTemplate}
                                            labelClassName="mb-2 text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <RadioGroup
                                        label="Status"
                                        name="status"
                                        options={['Active', 'Inactive']}
                                        defaultValue="Active"
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        {/* SECTION 2: Documents */}
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-bold text-gray-900">
                                    Add Document
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Upload contracts, IDs, or certifications
                                </p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
                                <div className="mb-6 flex items-center justify-between">
                                    <h4 className="text-md font-semibold text-gray-900">
                                        Documents
                                    </h4>
                                    <IconButton
                                        onClick={() => setIsDocModalOpen(true)}
                                    >
                                        <PlusIcon className="h-4 w-4 text-[#B5B0BA]" />
                                        Add Document
                                    </IconButton>
                                </div>

                                <TableContainer>
                                    <Table>
                                        <TableHeader>
                                            <TableHead>File Name</TableHead>
                                            <TableHead>Document Type</TableHead>
                                            <TableHead>Expiry</TableHead>
                                            <TableHead className="px-6 text-right">
                                                Action
                                            </TableHead>
                                        </TableHeader>
                                        <TableBody>
                                            {documents.map((doc, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium text-gray-900">
                                                        {doc.fileName}
                                                    </TableCell>
                                                    <TableCell className="text-gray-600">
                                                        {doc.documentType}
                                                    </TableCell>
                                                    <TableCell className="text-gray-600">
                                                        {doc.expiry}
                                                    </TableCell>
                                                    <TableCell className="flex justify-end gap-2 px-6">
                                                        <ActionButton>
                                                            <DownloadIcon className="h-4 w-4 text-[#B5B0BA]" />
                                                        </ActionButton>
                                                        <ActionButton
                                                            onClick={() =>
                                                                setIsDeleteModalOpen(
                                                                    true,
                                                                )
                                                            }
                                                        >
                                                            <DelIcon className="h-4 w-4 text-[#B5B0BA]" />
                                                        </ActionButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        {/* SECTION 3: Account Access */}
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-bold text-gray-900">
                                    Account Access
                                </h3>
                            </div>
                            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                    <div>
                                        <Label className="mb-1 block text-sm font-medium">
                                            Account Expiry
                                        </Label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                defaultValue="22 Aug 2025"
                                                className="w-full rounded-lg border border-gray-300 py-2 pr-10 pl-3 text-gray-900 shadow-sm outline-none focus:border-[#7AB621] focus:ring-[#7AB621]"
                                            />
                                            <div className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                                                <svg
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Label className="mb-3 block text-sm font-medium">
                                            Multi-Factor Authentication
                                        </Label>
                                        <ToggleSwitch
                                            checked={isActive}
                                            onChange={(e) =>
                                                setIsActive(e.target.checked)
                                            }
                                            statusLabel={
                                                isActive ? 'Active' : 'Inactive'
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Buttons */}
                        <div className="flex items-center justify-end gap-4 border-t border-borderColor pt-4">
                            <Link href="/usermanagement">
                                <IconButton type="button">Cancel</IconButton>
                            </Link>
                            <Button
                                onClick={() => setSuccessToast(true)}
                                type="submit"
                                className="bg-[#84cc16] hover:bg-[#76b614]"
                            >
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </main>

            {/* Modals */}
            <ReplaceProfilePhotoModal
                isOpen={isProfileModalOpen}
                onClose={() => setIsProfileModalOpen(false)}
                onSave={handleProfileReplace}
            />
            <AddDocumentModal
                isOpen={isDocModalOpen}
                onClose={() => setIsDocModalOpen(false)}
                onAdd={handleAddDocument}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onRetry={() => setIsDeleteModalOpen(false)}
            />
            {successToast && (
                <div>
                    <SuccessToast
                        title=""
                        message=""
                        actionText="view changes"
                        onAction={() => setSuccessToast(false)}
                        onClose={() => setSuccessToast(false)}
                    />
                </div>
            )}
            {successToast && (
                <div>
                    <SuccessToast
                        title="Changes Saved"
                        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor."
                        actionText="View changes"
                        onAction={() => {
                            setSuccessToast(false);
                        }}
                        onClose={() => setSuccessToast(false)}
                        autoCloseDuration={2000}
                        redirectTo="/usermanagement"
                    />
                </div>
            )}
        </div>
    );
};

export default EditUser;
