import SidePannel from '@/components/SidePannel';
import { useState } from 'react';
// import NewTopBar from '@/components/NewTopBar';
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
import BackArrow from '@/images/icons/backArrow.svg?react';
import DelIcon from '@/images/icons/delIcon.svg?react';
import MailIcon from '@/images/icons/mailIcon.svg?react';
import PlusIcon from '@/images/icons/plus.svg?react';
import Profile from '@/images/icons/profile.svg?react';
import { Link } from '@inertiajs/react';
import DashBoardIcon from '../images/icons/dashBaordSvg.svg?react';

const AddUser = () => {
    const documents = [
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
    ];

    const [reportTemplate, setReportTemplate] = useState('');
    const templateOptions = [
        { label: 'Sales', value: 'sales' },
        { label: 'Usage', value: 'usage' },
        { label: 'Financial', value: 'financial' },
    ];
    // State to manage the active tab in the TopBar
    const [activeTab, setActiveTab] = useState<'profiles' | 'roles'>(
        'profiles',
    );
    const tabs = [
        {
            label: 'User Profiles',
            isActive: true,
            href: '/user-profiles',
        },
        {
            label: 'Roles & Permissions',
            isActive: false, // This tab is active in the design
            href: '/roles-permissions',
        },
    ];
    const breadcrumbs = [
        {
            label: 'Internal User Management',
            isActive: false,
            href: '/usermanagement',
        },
        { label: 'User Profiles', isActive: false, href: '/userprofiles' },
        { label: 'Add new User', isActive: true, href: '/adduser' },
    ];

    return (
        <div className="flex min-h-screen">
            {/* 1. Sidebar */}
            <SidePannel />

            {/* 2. Main Content Area */}
            <main className="flex flex-1 flex-col">
                {/* Top Navigation with Dynamic Add User State */}
                <TopBar
                    title="Add New User"
                    icon={DashBoardIcon}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />
                {/* Page Content Container */}
                <div className="flex-1 overflow-y-auto px-8 py-6">
                    {/* "Back" Button */}
                    <div className="mb-8">
                        <Link
                            href="/usermanagement"
                            className="flex w-[210px] items-center gap-3 rounded-lg border border-[#CFCBD2] bg-white px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            <BackArrow className="h-4 w-4 text-[#B5B0BA]" />
                            Back to User Profiles
                        </Link>
                    </div>

                    {/* --- FORM SECTION --- */}
                    <form className="space-y-8 pb-12">
                        {/* SECTION 1: Basic Information */}
                        <div className="grid grid-cols-1 gap-8 border-t border-[#E8E6EA] py-6 lg:grid-cols-3">
                            {/* Left Column: Title & Description */}
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-bold text-gray-900">
                                    Basic information
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Add User photo and personal details.
                                </p>
                            </div>

                            {/* Right Column: Form Card */}
                            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
                                {/* Photo Upload */}
                                <div className="mb-6">
                                    {/* <label className="text-md mb-2 block font-semibold text-[#696170]">
                                        User photo
                                    </label> */}
                                    <Label className="text-md font-semibold">
                                        User Photo
                                    </Label>
                                    <p className="mb-3 text-sm text-gray-500">
                                        This will be displayed on the profile.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                                            {/* Placeholder Image */}
                                            <Profile className="h-16 w-16" />
                                        </div>
                                        <IconButton>Upload Photo</IconButton>
                                    </div>
                                </div>

                                {/* Inputs Grid */}
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {/* Full Name */}
                                    <div>
                                        <Label className="mb-2 text-sm font-semibold text-gray-500">
                                            Phone Number{' '}
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <Input placeholder="eg., Noah Pierre" />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <Label className="mb-2 text-sm font-semibold text-gray-500">
                                            Email Address{' '}
                                            <span className="text-primary">
                                                *
                                            </span>{' '}
                                        </Label>
                                        <Input
                                            placeholder="eg., Noah@ordermark.com"
                                            icon={MailIcon}
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <Label className="mb-2 text-sm font-semibold text-gray-500">
                                            Phone Number{' '}
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <div className="flex rounded-lg border border-gray-300 shadow-xs focus-within:border-[#84cc16] focus-within:ring-1 focus-within:ring-[#84cc16]">
                                            <div className="relative">
                                                <select className="h-full appearance-none rounded-l-lg border-0 bg-white py-2.5 pr-7 pl-3 text-sm text-gray-900 outline-none focus:ring-0">
                                                    <option>+91</option>
                                                    <option>+1</option>
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
                                                placeholder="1825462385"
                                                className="!rounded-l-none !rounded-r-lg !border-0 !shadow-none focus:!ring-0"
                                            />
                                        </div>
                                    </div>

                                    {/* Primary Role */}
                                    <div>
                                        {' '}
                                        <CustomDropdown
                                            label="Primary Role"
                                            options={templateOptions}
                                            value={reportTemplate}
                                            onChange={setReportTemplate}
                                            placeholder="Customer relationship Manager"
                                        />
                                    </div>
                                </div>

                                {/* Status */}
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

                        {/* SECTION 2: Add Document */}
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
                                    <IconButton>
                                        <PlusIcon className="h-4 w-4 text-[#B5B0BA]" />
                                        Add Document
                                    </IconButton>
                                </div>

                                {/* Documents Table */}
                                <div className="">
                                    <TableContainer>
                                        <Table>
                                            <TableHeader>
                                                <TableHead>File Name</TableHead>
                                                <TableHead>
                                                    Document Type
                                                </TableHead>
                                                <TableHead>Expiry</TableHead>
                                                <TableHead className="text-right">
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
                                                        <TableCell className="flex items-center justify-center">
                                                            <ActionButton className="ml-auto">
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
                                    {/* Account Expiry */}
                                    <div className="">
                                        {/* <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Account Expiry
                                        </label> */}
                                        <Label className="mb-1 block text-sm font-medium text-gray-700">
                                            Account Expiry
                                        </Label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="DD MMM YYYY"
                                                defaultValue="22 Aug 2025"
                                                className="w-full rounded-lg border border-gray-300 py-2 pr-10 pl-3 text-gray-400 shadow-sm outline-none focus:border-[#7AB621] focus:ring-[#7AB621]"
                                            />
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
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

                                    {/* MFA Toggle */}
                                    <div>
                                        <label className="mb-3 block text-sm font-medium text-gray-600">
                                            Multi-Factor Authentication
                                        </label>
                                        <div className="flex items-center">
                                            <label className="relative inline-flex cursor-pointer items-center">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                    className="peer sr-only"
                                                />
                                                <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-[#7AB621] peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-600">
                                                    Active
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Buttons */}
                        <div className="flex items-center justify-end gap-4 pt-4">
                            <IconButton>Cancel</IconButton>
                            <Button>Send invite & Add User</Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AddUser;
