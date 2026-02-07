import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { Input, Label } from '@/components/ui/FormElements';
import { Link } from '@inertiajs/react';
import Info from '../images/icons/gray-info.svg?react';

// Icons
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import BackArrow from '../images/icons/backArrow.svg?react';
import DashBoardIcon from '../images/icons/dashBaordSvg.svg?react';

// NEW: Import validation system
import SuccessToast from '@/components/toasts/SuccessToast';
import { useFormValidation } from '@/utils/useFormValidation';
import { validationRules } from '@/utils/validationRules';
import { useState } from 'react';

// --- Types ---
interface PermissionRowProps {
    label: string;
    name: string;
}

const EditRole = () => {
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    // NEW: Form Validation Setup (Pre-filled with existing role data)
    const { values, errors, handleChange, handleBlur, validateAll } =
        useFormValidation({
            roleName: {
                value: 'Admin', // Pre-filled with existing role name
                validators: [
                    validationRules.required('Role Name'),
                    validationRules.minLength(3, 'Role Name'),
                ],
            },
            roleDescription: {
                value: 'Full system access with administrative privileges', // Pre-filled
                validators: [
                    validationRules.required('Role Description'),
                    validationRules.minLength(10, 'Role Description'),
                ],
            },
        });

    // NEW: Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateAll()) {
            console.log('Form is valid! Updating role...', values);
            // Your API call to update role
            // Example: await updateRole(roleId, values);
        } else {
            console.log('Please fix validation errors');
        }
    };

    // 1. Setup Breadcrumbs
    const breadcrumbs = [
        {
            label: 'Internal User Management',
            isActive: false,
            href: '/usermanagement',
        },
        {
            label: 'Roles & Permissions',
            isActive: false,
            href: '/rolesandpermissions',
        },
        { label: 'Edit Role', isActive: true, href: '/editrole' },
    ];

    // 2. Setup Tabs
    const tabs = [
        {
            label: 'User Profiles',
            isActive: false,
            href: '/usermanagement',
        },
        {
            label: 'Roles & Permissions',
            isActive: true,
            href: '/roles-permissions',
        },
    ];

    // 3. Permission Data List
    const permissionsList = [
        'Dashboard',
        'Internal User Management',
        'Business Management',
        'Subscription & Billing',
        'System Config',
        'Maintenance & Support',
        'Communication Mgmt',
        'Marketplace & Integrations',
        'Manage Approvals',
        'My Tickets',
    ];

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <SidePannel />

            {/* Main Content */}
            <main className="flex flex-1 flex-col">
                <div className="sticky top-0 z-10 bg-white">
                    <TopBar
                        title="Edit Role"
                        icon={DashBoardIcon}
                        breadcrumbs={breadcrumbs}
                        // tabs={tabs}
                    />
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-6">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link href="/usermanagement">
                            <IconButton className="">
                                <BackArrow className="h-5 w-5 text-[#B5B0BA]" />
                                Back to Roles & Permissions
                            </IconButton>
                        </Link>
                    </div>

                    {/* --- MAIN FORM CONTENT --- */}
                    <form className="space-y-8 pb-20" onSubmit={handleSubmit}>
                        {/* 1. ROLE DETAILS SECTION */}
                        <div className="grid grid-cols-1 gap-8 border-t border-[#E8E6EA] pt-8 lg:grid-cols-3">
                            {/* Left: Section Label */}
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-semibold text-[#19161A]">
                                    Role Details
                                </h3>
                            </div>

                            {/* Right: Inputs Card */}
                            <div className="rounded-xl border border-[#E8E6EA] bg-white p-4 shadow-xs lg:col-span-2">
                                <div className="space-y-8">
                                    {/* Role Name */}
                                    <div>
                                        <Label className="mb-2 text-sm font-medium">
                                            Role Name
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            placeholder="eg., Admin"
                                            value={values.roleName}
                                            onChange={handleChange('roleName')}
                                            onBlur={handleBlur('roleName')}
                                            error={errors.roleName}
                                        />
                                    </div>

                                    {/* Role Description */}
                                    <div>
                                        <Label className="mb-2 text-sm font-medium">
                                            Role Description
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            as="textarea"
                                            rows={5}
                                            placeholder="Enter a description..."
                                            value={values.roleDescription}
                                            onChange={handleChange(
                                                'roleDescription',
                                            )}
                                            onBlur={handleBlur(
                                                'roleDescription',
                                            )}
                                            error={errors.roleDescription}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. ASSIGN PERMISSIONS SECTION */}
                        <div className="grid grid-cols-1 gap-8 border-t border-[#E8E6EA] pt-8 lg:grid-cols-3">
                            {/* Left: Section Label */}
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-semibold text-[#19161A]">
                                    Assign Permissions
                                </h3>
                            </div>

                            {/* Right: Permissions List */}
                            <div className="lg:col-span-2">
                                <div className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
                                    {permissionsList.map((perm, index) => (
                                        <PermissionRow
                                            key={index}
                                            label={perm}
                                            name={`perm_${index}`}
                                        />
                                    ))}
                                </div>
                                {/* Legend Box */}
                                <div className="mt-4 rounded-xl border border-[#CFCBD2] bg-white p-4 shadow-xs">
                                    <div className="mb-2 flex items-center gap-2">
                                        <Info className="h-10 w-10" />
                                        <div className="w-full border-b border-[#E8E6EA] pb-2">
                                            <p className="w-full text-sm font-semibold text-gray-900">
                                                Permission Types Legend
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 pl-10">
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium text-gray-700">
                                                "✓"
                                            </span>{' '}
                                            = Full access (view, add, edit,
                                            delete)
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium text-gray-700">
                                                "View"
                                            </span>{' '}
                                            = Read only
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium text-gray-700">
                                                "-"
                                            </span>{' '}
                                            = No access
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. FOOTER BUTTONS */}
                        <div className="flex justify-end gap-3 border-t border-gray-200 pt-4">
                            <IconButton type="button">Delete role</IconButton>

                            <Link href="/usermanagement">
                                <IconButton type="button">Cancel</IconButton>
                            </Link>
                            <Button
                                type="submit"
                                onClick={() => setShowSuccessToast(true)}
                            >
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
            {showSuccessToast && (
                <SuccessToast
                    title="Role edited successfully"
                    message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    onClose={() => setShowSuccessToast(false)}
                    onAction={() => setShowSuccessToast(false)}
                    actionText="View Changes"
                    autoCloseDuration={2000}
                    redirectTo="/usermanagement"
                />
            )}
        </div>
    );
};

// --- Helper Component for Permission Rows ---
const PermissionRow = ({ label, name }: PermissionRowProps) => {
    return (
        <div className="flex flex-col justify-between gap-3 border-b border-[#E8E6EA] py-1.5">
            <span className="mb-2 w-1/3 text-sm font-medium text-gray-900 sm:mb-0">
                {label}
            </span>
            <div className="flex w-2/3 items-center gap-6 pb-4">
                {/* Option 1: Full Access */}
                <label className="group flex cursor-pointer items-center">
                    <div className="relative flex items-center justify-center">
                        <input
                            type="radio"
                            name={name}
                            className="peer sr-only"
                        />
                        <div className="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-[6px] peer-checked:border-[#7AB621]"></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
                        Full access
                    </span>
                </label>

                {/* Option 2: View */}
                <label className="group flex cursor-pointer items-center">
                    <div className="relative flex items-center justify-center">
                        <input
                            type="radio"
                            name={name}
                            className="peer sr-only"
                        />
                        <div className="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-[6px] peer-checked:border-[#7AB621]"></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
                        View
                    </span>
                </label>

                {/* Option 3: No Access (Default Checked) */}
                <label className="group flex cursor-pointer items-center">
                    <div className="relative flex items-center justify-center">
                        <input
                            type="radio"
                            name={name}
                            defaultChecked
                            className="peer sr-only"
                        />
                        <div className="h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:border-[6px] peer-checked:border-[#7AB621]"></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
                        No access
                    </span>
                </label>
            </div>
            {/* {successToast && (
                <SuccessToast
                    title="User added successfully"
                    message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    onClose={() => setSuccessToast(false)}
                    onAction={() => setSuccessToast(false)}
                    actionText="View Changes"
                    autoCloseDuration={2000}
                    redirectTo="/usermanagement"
                />
            )} */}
        </div>
    );
};

export default EditRole;
