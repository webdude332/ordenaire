// import DeleteModal from '@/components/DeleteModal';
// import SidePannel from '@/components/SidePannel';
// import SingleDatePicker from '@/components/SingleDateRangePicker';
// import TopBar from '@/components/TopBar';
// import ActionButton from '@/components/ui/ActionButton';
// import Button from '@/components/ui/Button';
// import CustomDropdown from '@/components/ui/CustomDropdown';
// import { Input, Label } from '@/components/ui/FormElements';
// import IconButton from '@/components/ui/IconButton';
// import RadioGroup from '@/components/ui/RadioGroup';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/components/ui/Table';
// import ToggleSwitch from '@/components/ui/ToggleSwitch';
// import BackArrow from '@/images/icons/backArrow.svg?react';
// import DelIcon from '@/images/icons/delIcon.svg?react';
// import Profile from '@/images/icons/dp.svg?react';
// import MailIcon from '@/images/icons/mailIcon.svg?react';
// import PlusIcon from '@/images/icons/plus.svg?react';
// import { Link } from '@inertiajs/react';
// import { useState } from 'react';
// import DashBoardIcon from '../images/icons/dashBaordSvg.svg?react';

// // MODALS
// import AddDocumentModal from '@/components/Modals/AddDocumentModal'; // Integrated new modal
// import UpdateProfilePhotoModal from '@/components/Modals/PhotoUploadModal';

// const AddUser = () => {
//     // --- 1. UI State ---
//     const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//     const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
//     const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//     const [isActive, setIsActive] = useState(true);
//     const [selectedDocIndex, setSelectedDocIndex] = useState<number | null>(
//         null,
//     );

//     // --- 2. Form States ---
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [reportTemplate, setReportTemplate] = useState('');

//     // Profile Photo State
//     const [profileFile, setProfileFile] = useState<File | null>(null);
//     const [profilePreview, setProfilePreview] = useState<string | null>(null);

//     // Documents State (Now dynamic)
//     const [documents, setDocuments] = useState([
//         {
//             fileName: 'Contract_2025.pdf',
//             documentType: 'Employment',
//             expiry: '-',
//         },
//         {
//             fileName: 'Passport_Copy.jpg',
//             documentType: 'Proof of Identity',
//             expiry: '20 Nov 2028',
//         },
//     ]);

//     // --- 3. Validation State ---
//     const [errors, setErrors] = useState<{
//         fullName?: string;
//         email?: string;
//         phoneNumber?: string;
//     }>({});

//     // --- 4. Handlers ---
//     const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const val = e.target.value;
//         setFullName(val);
//         if (val.length > 0 && val.trim().length < 3) {
//             setErrors((prev) => ({
//                 ...prev,
//                 fullName: 'Full name must be at least 3 characters.',
//             }));
//         } else {
//             setErrors((prev) => ({ ...prev, fullName: undefined }));
//         }
//     };

//     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const val = e.target.value;
//         setEmail(val);
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (val.length > 0 && !emailRegex.test(val)) {
//             setErrors((prev) => ({
//                 ...prev,
//                 email: 'Please enter a valid email address.',
//             }));
//         } else {
//             setErrors((prev) => ({ ...prev, email: undefined }));
//         }
//     };

//     const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const val = e.target.value;
//         if ((val === '' || /^[0-9]+$/.test(val)) && val.length <= 8) {
//             setPhoneNumber(val);
//             if (val.length > 0 && val.length < 8) {
//                 setErrors((prev) => ({
//                     ...prev,
//                     phoneNumber: 'Phone number must be at least 8 digits.',
//                 }));
//             } else {
//                 setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
//             }
//         }
//     };

//     const handleProfilePhotoSave = (file: File) => {
//         setProfileFile(file);
//         const previewUrl = URL.createObjectURL(file);
//         setProfilePreview(previewUrl);
//         setIsProfileModalOpen(false);
//     };

//     const handleAddNewDocument = (data: any) => {
//         const newDoc = {
//             fileName: data.name,
//             documentType: data.type,
//             expiry: data.expiry ? data.expiry.toLocaleDateString() : '-',
//         };
//         setDocuments((prev) => [...prev, newDoc]);
//         setIsUploadModalOpen(false);
//     };

//     const handleDeleteDoc = () => {
//         if (selectedDocIndex !== null) {
//             setDocuments((prev) =>
//                 prev.filter((_, i) => i !== selectedDocIndex),
//             );
//             setSelectedDocIndex(null);
//         }
//         setIsDeleteModalOpen(false);
//     };

//     const templateOptions = [
//         { label: 'Sales', value: 'sales' },
//         { label: 'Usage', value: 'usage' },
//         { label: 'Financial', value: 'financial' },
//     ];

//     const breadcrumbs = [
//         {
//             label: 'Internal User Management',
//             isActive: false,
//             href: '/usermanagement',
//         },
//         { label: 'User Profiles', isActive: false, href: '/userprofiles' },
//         { label: 'Add new User', isActive: true, href: '/adduser' },
//     ];

//     return (
//         <div className="flex min-h-screen">
//             <SidePannel />

//             <main className="flex flex-1 flex-col">
//                 <div className="sticky top-0 z-10 bg-white">
//                     <TopBar
//                         title="Add New User"
//                         icon={DashBoardIcon}
//                         breadcrumbs={breadcrumbs}
//                     />
//                 </div>

//                 <div className="flex-1 overflow-y-auto px-8 py-6">
//                     <div className="mb-8">
//                         <Link
//                             href="/usermanagement"
//                             className="flex w-[210px] items-center gap-3 rounded-lg border border-[#CFCBD2] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                         >
//                             <BackArrow className="h-4 w-4 text-[#B5B0BA]" />
//                             Back to User Profiles
//                         </Link>
//                     </div>

//                     <form
//                         className="space-y-8 pb-12"
//                         onSubmit={(e) => e.preventDefault()}
//                     >
//                         {/* SECTION 1: Basic Information */}
//                         <div className="grid grid-cols-1 gap-8 border-t border-[#E8E6EA] py-6 lg:grid-cols-3">
//                             <div className="lg:col-span-1">
//                                 <h3 className="text-base font-bold text-gray-900">
//                                     Basic information
//                                 </h3>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                     Add User photo and personal details.
//                                 </p>
//                             </div>

//                             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
//                                 <div className="mb-6">
//                                     <Label className="text-md font-semibold">
//                                         User Photo
//                                     </Label>
//                                     <p className="mb-3 text-sm text-gray-500">
//                                         This will be displayed on the profile.
//                                     </p>
//                                     <div className="flex items-center gap-4">
//                                         <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100">
//                                             {profilePreview ? (
//                                                 <img
//                                                     src={profilePreview}
//                                                     alt="Preview"
//                                                     className="h-full w-full object-cover"
//                                                 />
//                                             ) : (
//                                                 <Profile className="h-8 w-8" />
//                                             )}
//                                         </div>
//                                         <IconButton
//                                             onClick={() =>
//                                                 setIsProfileModalOpen(true)
//                                             }
//                                         >
//                                             Upload Photo
//                                         </IconButton>
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                                     <div>
//                                         <Label className="mb-2 text-sm font-medium">
//                                             Full Name{' '}
//                                             <span className="text-primary">
//                                                 *
//                                             </span>
//                                         </Label>
//                                         <Input
//                                             placeholder="eg., Noah Pierre"
//                                             value={fullName}
//                                             onChange={handleFullNameChange}
//                                             error={errors.fullName}
//                                         />
//                                     </div>
//                                     <div>
//                                         <Label className="mb-2 text-sm font-medium">
//                                             Email Address{' '}
//                                             <span className="text-primary">
//                                                 *
//                                             </span>
//                                         </Label>
//                                         <Input
//                                             placeholder="eg., Noah@ordermark.com"
//                                             icon={MailIcon}
//                                             value={email}
//                                             onChange={handleEmailChange}
//                                             error={errors.email}
//                                         />
//                                     </div>
//                                     <div>
//                                         <Label className="mb-2 text-sm font-medium">
//                                             Phone Number{' '}
//                                             <span className="text-primary">
//                                                 *
//                                             </span>
//                                         </Label>
//                                         <div
//                                             className={`flex rounded-lg border shadow-xs transition-colors focus-within:ring-1 ${errors.phoneNumber ? 'border-red-500 focus-within:ring-red-500' : 'border-gray-300 focus-within:border-[#84cc16] focus-within:ring-[#84cc16]'}`}
//                                         >
//                                             <div className="relative">
//                                                 <select className="h-full appearance-none rounded-l-lg border-0 bg-white py-2.5 pr-7 pl-3 text-sm text-gray-900 outline-none focus:ring-0">
//                                                     <option>+91</option>
//                                                     <option>+1</option>
//                                                 </select>
//                                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                                                     <svg
//                                                         className="h-3 w-3"
//                                                         fill="none"
//                                                         viewBox="0 0 24 24"
//                                                         stroke="currentColor"
//                                                     >
//                                                         <path
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             strokeWidth={2}
//                                                             d="M19 9l-7 7-7-7"
//                                                         />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                             <div className="h-6 w-px self-center bg-gray-300"></div>
//                                             <Input
//                                                 placeholder="1825462385"
//                                                 value={phoneNumber}
//                                                 onChange={handlePhoneChange}
//                                                 className="!rounded-l-none !rounded-r-lg !border-0 !shadow-none focus:!ring-0"
//                                             />
//                                         </div>
//                                         {errors.phoneNumber && (
//                                             <p className="mt-1.5 text-xs font-medium text-red-600">
//                                                 {errors.phoneNumber}
//                                             </p>
//                                         )}
//                                     </div>
//                                     <div>
//                                         <CustomDropdown
//                                             label="Primary Role"
//                                             options={templateOptions}
//                                             value={reportTemplate}
//                                             onChange={setReportTemplate}
//                                             placeholder="Customer relationship Manager"
//                                             labelClassName="mb-2 text-sm font-medium"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="mt-6">
//                                     <RadioGroup
//                                         label="Status"
//                                         name="status"
//                                         options={['Active', 'Inactive']}
//                                         defaultValue="Active"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <hr className="border-gray-200" />

//                         {/* SECTION 2: Add Document */}
//                         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//                             <div className="lg:col-span-1">
//                                 <h3 className="text-base font-bold text-gray-900">
//                                     Add Document
//                                 </h3>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                     Upload contracts, IDs, or certifications
//                                 </p>
//                             </div>
//                             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
//                                 <div className="mb-6 flex items-center justify-between">
//                                     <h4 className="text-md font-semibold text-gray-900">
//                                         Documents
//                                     </h4>
//                                     <IconButton
//                                         onClick={() =>
//                                             setIsUploadModalOpen(true)
//                                         }
//                                     >
//                                         <PlusIcon className="h-4 w-4 text-[#B5B0BA]" />
//                                         Add Document
//                                     </IconButton>
//                                 </div>
//                                 <TableContainer>
//                                     <Table>
//                                         <TableHeader>
//                                             <TableHead>File Name</TableHead>
//                                             <TableHead>Document Type</TableHead>
//                                             <TableHead>Expiry</TableHead>
//                                             <TableHead className="text-right">
//                                                 Action
//                                             </TableHead>
//                                         </TableHeader>
//                                         <TableBody>
//                                             {documents.map((doc, index) => (
//                                                 <TableRow key={index}>
//                                                     <TableCell className="font-medium text-gray-900">
//                                                         {doc.fileName}
//                                                     </TableCell>
//                                                     <TableCell className="text-gray-600">
//                                                         {doc.documentType}
//                                                     </TableCell>
//                                                     <TableCell className="text-gray-600">
//                                                         {doc.expiry}
//                                                     </TableCell>
//                                                     <TableCell className="flex justify-end">
//                                                         <ActionButton
//                                                             onClick={() => {
//                                                                 setSelectedDocIndex(
//                                                                     index,
//                                                                 );
//                                                                 setIsDeleteModalOpen(
//                                                                     true,
//                                                                 );
//                                                             }}
//                                                         >
//                                                             <DelIcon className="h-4 w-4 text-iconColor" />
//                                                         </ActionButton>
//                                                     </TableCell>
//                                                 </TableRow>
//                                             ))}
//                                         </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                             </div>
//                         </div>

//                         <hr className="border-gray-200" />

//                         {/* SECTION 3: Account Access */}
//                         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//                             <div className="lg:col-span-1">
//                                 <h3 className="text-base font-bold text-gray-900">
//                                     Account Access
//                                 </h3>
//                             </div>
//                             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
//                                 <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//                                     <div>
//                                         <Label className="mb-1 block text-sm font-medium">
//                                             Account Expiry
//                                         </Label>
//                                         <SingleDatePicker />
//                                     </div>
//                                     <div>
//                                         <Label className="mb-3 block text-sm font-medium">
//                                             Multi-Factor Authentication
//                                         </Label>
//                                         <ToggleSwitch
//                                             checked={isActive}
//                                             onChange={(e) =>
//                                                 setIsActive(e.target.checked)
//                                             }
//                                             statusLabel={
//                                                 isActive ? 'Active' : 'Inactive'
//                                             }
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-end gap-4 border-t border-borderColor pt-4">
//                             <IconButton>Cancel</IconButton>
//                             <Button type="submit">
//                                 Send invite & Add User
//                             </Button>
//                         </div>
//                     </form>
//                 </div>
//             </main>

//             {/* MODALS */}
//             <DeleteModal
//                 isOpen={isDeleteModalOpen}
//                 onClose={() => setIsDeleteModalOpen(false)}
//                 onRetry={handleDeleteDoc}
//             />

//             {/* NEW MODAL INTEGRATED HERE */}
//             <AddDocumentModal
//                 isOpen={isUploadModalOpen}
//                 onClose={() => setIsUploadModalOpen(false)}
//                 onAdd={handleAddNewDocument}
//             />

//             <UpdateProfilePhotoModal
//                 isOpen={isProfileModalOpen}
//                 onClose={() => setIsProfileModalOpen(false)}
//                 onSave={handleProfilePhotoSave}
//             />
//         </div>
//     );
// };

// export default AddUser;

//claude

// import DeleteModal from '@/components/DeleteModal';
// import SidePannel from '@/components/SidePannel';
// import SingleDatePicker from '@/components/SingleDateRangePicker';
// import TopBar from '@/components/TopBar';
// import ActionButton from '@/components/ui/ActionButton';
// import Button from '@/components/ui/Button';
// import CustomDropdown from '@/components/ui/CustomDropdown';
// import { Input, Label } from '@/components/ui/FormElements';
// import IconButton from '@/components/ui/IconButton';
// import RadioGroup from '@/components/ui/RadioGroup';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/components/ui/Table';
// import ToggleSwitch from '@/components/ui/ToggleSwitch';
// import BackArrow from '@/images/icons/backArrow.svg?react';
// import DelIcon from '@/images/icons/delIcon.svg?react';
// import Profile from '@/images/icons/dp.svg?react';
// import MailIcon from '@/images/icons/mailIcon.svg?react';
// import PlusIcon from '@/images/icons/plus.svg?react';
// import { Link } from '@inertiajs/react';
// import { useState } from 'react';
// import DashBoardIcon from '../images/icons/dashBaordSvg.svg?react';

// // MODALS
// import AddDocumentModal from '@/components/Modals/AddDocumentModal';
// import UpdateProfilePhotoModal from '@/components/Modals/PhotoUploadModal';

// // NEW: Import validation system
// import { useFormValidation } from '@/utils/useFormValidation';
// import { validationRules } from '@/utils/validationRules';

// const AddUser = () => {
//     // --- 1. Form Validation (NEW & IMPROVED) ---
//     const { values, errors, handleChange, handleBlur, validateAll, resetForm } =
//         useFormValidation({
//             fullName: {
//                 value: '',
//                 validators: [validationRules.minLength(3, 'Full name')],
//             },
//             email: {
//                 value: '',
//                 validators: [validationRules.email()],
//             },
//             phoneNumber: {
//                 value: '',
//                 validators: [validationRules.phone(8)],
//             },
//         });

//     // --- 2. UI State ---
//     const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//     const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
//     const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//     const [isActive, setIsActive] = useState(true);
//     const [selectedDocIndex, setSelectedDocIndex] = useState<number | null>(
//         null,
//     );

//     // --- 3. Other Form States ---
//     const [reportTemplate, setReportTemplate] = useState('');

//     // Profile Photo State
//     const [profileFile, setProfileFile] = useState<File | null>(null);
//     const [profilePreview, setProfilePreview] = useState<string | null>(null);

//     // Documents State
//     const [documents, setDocuments] = useState([
//         {
//             fileName: 'Contract_2025.pdf',
//             documentType: 'Employment',
//             expiry: '-',
//         },
//         {
//             fileName: 'Passport_Copy.jpg',
//             documentType: 'Proof of Identity',
//             expiry: '20 Nov 2028',
//         },
//     ]);

//     // --- 4. Handlers ---
//     const handleProfilePhotoSave = (file: File) => {
//         setProfileFile(file);
//         const previewUrl = URL.createObjectURL(file);
//         setProfilePreview(previewUrl);
//         setIsProfileModalOpen(false);
//     };

//     const handleAddNewDocument = (data: any) => {
//         const newDoc = {
//             fileName: data.name,
//             documentType: data.type,
//             expiry: data.expiry ? data.expiry.toLocaleDateString() : '-',
//         };
//         setDocuments((prev) => [...prev, newDoc]);
//         setIsUploadModalOpen(false);
//     };

//     const handleDeleteDoc = () => {
//         if (selectedDocIndex !== null) {
//             setDocuments((prev) =>
//                 prev.filter((_, i) => i !== selectedDocIndex),
//             );
//             setSelectedDocIndex(null);
//         }
//         setIsDeleteModalOpen(false);
//     };

//     // Custom phone handler to restrict input to numbers only and max 8 digits
//     const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const val = e.target.value;
//         // Only allow numeric input and max 8 digits
//         if ((val === '' || /^[0-9]+$/.test(val)) && val.length <= 8) {
//             handleChange('phoneNumber')(e);
//         }
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         // Validate all fields before submission
//         if (validateAll()) {
//             console.log('Form is valid! Submitting...', values);
//             // Your API call or form submission logic here
//             // Example: await createUser(values);
//         } else {
//             console.log('Form has validation errors');
//         }
//     };

//     const handleCancel = () => {
//         resetForm();
//         // Additional cancel logic if needed
//     };

//     const templateOptions = [
//         { label: 'Sales', value: 'sales' },
//         { label: 'Usage', value: 'usage' },
//         { label: 'Financial', value: 'financial' },
//     ];

//     const breadcrumbs = [
//         {
//             label: 'Internal User Management',
//             isActive: false,
//             href: '/usermanagement',
//         },
//         { label: 'User Profiles', isActive: false, href: '/userprofiles' },
//         { label: 'Add new User', isActive: true, href: '/adduser' },
//     ];

//     return (
//         <div className="flex min-h-screen">
//             <SidePannel />

//             <main className="flex flex-1 flex-col">
//                 <div className="sticky top-0 z-10 bg-white">
//                     <TopBar
//                         title="Add New User"
//                         icon={DashBoardIcon}
//                         breadcrumbs={breadcrumbs}
//                     />
//                 </div>

//                 <div className="flex-1 overflow-y-auto px-8 py-6">
//                     <div className="mb-8">
//                         <Link
//                             href="/usermanagement"
//                             className="flex w-[210px] items-center gap-3 rounded-lg border border-[#CFCBD2] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                         >
//                             <BackArrow className="h-4 w-4 text-[#B5B0BA]" />
//                             Back to User Profiles
//                         </Link>
//                     </div>

//                     <form className="space-y-8 pb-12" onSubmit={handleSubmit}>
//                         {/* SECTION 1: Basic Information */}
//                         <div className="grid grid-cols-1 gap-8 border-t border-[#E8E6EA] py-6 lg:grid-cols-3">
//                             <div className="lg:col-span-1">
//                                 <h3 className="text-base font-bold text-gray-900">
//                                     Basic information
//                                 </h3>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                     Add User photo and personal details.
//                                 </p>
//                             </div>

//                             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
//                                 <div className="mb-6">
//                                     <Label className="text-md font-semibold">
//                                         User Photo
//                                     </Label>
//                                     <p className="mb-3 text-sm text-gray-500">
//                                         This will be displayed on the profile.
//                                     </p>
//                                     <div className="flex items-center gap-4">
//                                         <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100">
//                                             {profilePreview ? (
//                                                 <img
//                                                     src={profilePreview}
//                                                     alt="Preview"
//                                                     className="h-full w-full object-cover"
//                                                 />
//                                             ) : (
//                                                 <Profile className="h-8 w-8" />
//                                             )}
//                                         </div>
//                                         <IconButton
//                                             onClick={() =>
//                                                 setIsProfileModalOpen(true)
//                                             }
//                                         >
//                                             Upload Photo
//                                         </IconButton>
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                                     <div>
//                                         <Label className="mb-2 text-sm font-medium">
//                                             Full Name{' '}
//                                             <span className="text-primary">
//                                                 *
//                                             </span>
//                                         </Label>
//                                         <Input
//                                             placeholder="eg., Noah Pierre"
//                                             value={values.fullName}
//                                             onChange={handleChange('fullName')}
//                                             onBlur={handleBlur('fullName')}
//                                             error={errors.fullName}
//                                         />
//                                     </div>
//                                     <div>
//                                         <Label className="mb-2 text-sm font-medium">
//                                             Email Address{' '}
//                                             <span className="text-primary">
//                                                 *
//                                             </span>
//                                         </Label>
//                                         <Input
//                                             placeholder="eg., Noah@ordermark.com"
//                                             icon={MailIcon}
//                                             value={values.email}
//                                             onChange={handleChange('email')}
//                                             onBlur={handleBlur('email')}
//                                             error={errors.email}
//                                         />
//                                     </div>
//                                     <div>
//                                         <Label className="mb-2 text-sm font-medium">
//                                             Phone Number{' '}
//                                             <span className="text-primary">
//                                                 *
//                                             </span>
//                                         </Label>
//                                         <div
//                                             className={`flex rounded-lg border shadow-xs transition-colors focus-within:ring-1 ${errors.phoneNumber ? 'border-red-500 focus-within:ring-red-500' : 'border-gray-300 focus-within:border-[#84cc16] focus-within:ring-[#84cc16]'}`}
//                                         >
//                                             <div className="relative">
//                                                 <select className="h-full appearance-none rounded-l-lg border-0 bg-white py-2.5 pr-7 pl-3 text-sm text-gray-900 outline-none focus:ring-0">
//                                                     <option>+91</option>
//                                                     <option>+1</option>
//                                                 </select>
//                                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                                                     <svg
//                                                         className="h-3 w-3"
//                                                         fill="none"
//                                                         viewBox="0 0 24 24"
//                                                         stroke="currentColor"
//                                                     >
//                                                         <path
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             strokeWidth={2}
//                                                             d="M19 9l-7 7-7-7"
//                                                         />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                             <div className="h-6 w-px self-center bg-gray-300"></div>
//                                             <Input
//                                                 placeholder="1825462385"
//                                                 value={values.phoneNumber}
//                                                 onChange={handlePhoneChange}
//                                                 onBlur={handleBlur(
//                                                     'phoneNumber',
//                                                 )}
//                                                 className="!rounded-l-none !rounded-r-lg !border-0 !shadow-none focus:!ring-0"
//                                             />
//                                         </div>
//                                         {errors.phoneNumber && (
//                                             <p className="mt-1.5 text-xs font-medium text-red-600">
//                                                 {errors.phoneNumber}
//                                             </p>
//                                         )}
//                                     </div>
//                                     <div>
//                                         <CustomDropdown
//                                             label="Primary Role"
//                                             options={templateOptions}
//                                             value={reportTemplate}
//                                             onChange={setReportTemplate}
//                                             placeholder="Customer relationship Manager"
//                                             labelClassName="mb-2 text-sm font-medium"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="mt-6">
//                                     <RadioGroup
//                                         label="Status"
//                                         name="status"
//                                         options={['Active', 'Inactive']}
//                                         defaultValue="Active"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <hr className="border-gray-200" />

//                         {/* SECTION 2: Add Document */}
//                         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//                             <div className="lg:col-span-1">
//                                 <h3 className="text-base font-bold text-gray-900">
//                                     Add Document
//                                 </h3>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                     Upload contracts, IDs, or certifications
//                                 </p>
//                             </div>
//                             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
//                                 <div className="mb-6 flex items-center justify-between">
//                                     <h4 className="text-md font-semibold text-gray-900">
//                                         Documents
//                                     </h4>
//                                     <IconButton
//                                         onClick={() =>
//                                             setIsUploadModalOpen(true)
//                                         }
//                                     >
//                                         <PlusIcon className="h-4 w-4 text-[#B5B0BA]" />
//                                         Add Document
//                                     </IconButton>
//                                 </div>
//                                 <TableContainer>
//                                     <Table>
//                                         <TableHeader>
//                                             <TableHead>File Name</TableHead>
//                                             <TableHead>Document Type</TableHead>
//                                             <TableHead>Expiry</TableHead>
//                                             <TableHead className="text-right">
//                                                 Action
//                                             </TableHead>
//                                         </TableHeader>
//                                         <TableBody>
//                                             {documents.map((doc, index) => (
//                                                 <TableRow key={index}>
//                                                     <TableCell className="font-medium text-gray-900">
//                                                         {doc.fileName}
//                                                     </TableCell>
//                                                     <TableCell className="text-gray-600">
//                                                         {doc.documentType}
//                                                     </TableCell>
//                                                     <TableCell className="text-gray-600">
//                                                         {doc.expiry}
//                                                     </TableCell>
//                                                     <TableCell className="flex justify-end">
//                                                         <ActionButton
//                                                             onClick={() => {
//                                                                 setSelectedDocIndex(
//                                                                     index,
//                                                                 );
//                                                                 setIsDeleteModalOpen(
//                                                                     true,
//                                                                 );
//                                                             }}
//                                                         >
//                                                             <DelIcon className="h-4 w-4 text-iconColor" />
//                                                         </ActionButton>
//                                                     </TableCell>
//                                                 </TableRow>
//                                             ))}
//                                         </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                             </div>
//                         </div>

//                         <hr className="border-gray-200" />

//                         {/* SECTION 3: Account Access */}
//                         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//                             <div className="lg:col-span-1">
//                                 <h3 className="text-base font-bold text-gray-900">
//                                     Account Access
//                                 </h3>
//                             </div>
//                             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
//                                 <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//                                     <div>
//                                         <Label className="mb-1 block text-sm font-medium">
//                                             Account Expiry
//                                         </Label>
//                                         <SingleDatePicker />
//                                     </div>
//                                     <div>
//                                         <Label className="mb-3 block text-sm font-medium">
//                                             Multi-Factor Authentication
//                                         </Label>
//                                         <ToggleSwitch
//                                             checked={isActive}
//                                             onChange={(e) =>
//                                                 setIsActive(e.target.checked)
//                                             }
//                                             statusLabel={
//                                                 isActive ? 'Active' : 'Inactive'
//                                             }
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-end gap-4 border-t border-borderColor pt-4">
//                             <IconButton type="button" onClick={handleCancel}>
//                                 Cancel
//                             </IconButton>
//                             <Button type="submit">
//                                 Send invite & Add User
//                             </Button>
//                         </div>
//                     </form>
//                 </div>
//             </main>

//             {/* MODALS */}
//             <DeleteModal
//                 isOpen={isDeleteModalOpen}
//                 onClose={() => setIsDeleteModalOpen(false)}
//                 onRetry={handleDeleteDoc}
//             />

//             <AddDocumentModal
//                 isOpen={isUploadModalOpen}
//                 onClose={() => setIsUploadModalOpen(false)}
//                 onAdd={handleAddNewDocument}
//             />

//             <UpdateProfilePhotoModal
//                 isOpen={isProfileModalOpen}
//                 onClose={() => setIsProfileModalOpen(false)}
//                 onSave={handleProfilePhotoSave}
//             />
//         </div>
//     );
// };

// export default AddUser;

// form validation hook

import DeleteModal from '@/components/DeleteModal';
import SidePannel from '@/components/SidePannel';
import SingleDatePicker from '@/components/SingleDateRangePicker';
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
import Profile from '@/images/icons/dp.svg?react';
import MailIcon from '@/images/icons/mailIcon.svg?react';
import PlusIcon from '@/images/icons/plus.svg?react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import DashBoardIcon from '../images/icons/dashBaordSvg.svg?react';

// MODALS
import AddDocumentModal from '@/components/Modals/AddDocumentModal';
import UpdateProfilePhotoModal from '@/components/Modals/PhotoUploadModal';

// NEW: Import validation system
import { useFormValidation } from '@/utils/useFormValidation';
import { validationRules } from '@/utils/validationRules';

const AddUser = () => {
    // --- 1. Form Validation (NEW & IMPROVED) ---
    const { values, errors, handleChange, handleBlur, validateAll, resetForm } =
        useFormValidation({
            fullName: {
                value: '',
                validators: [validationRules.minLength(3, 'Full name')],
            },
            email: {
                value: '',
                validators: [validationRules.email()],
            },
            phoneNumber: {
                value: '',
                validators: [validationRules.phone(8)],
            },
        });

    // --- 2. UI State --
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [selectedDocIndex, setSelectedDocIndex] = useState<number | null>(
        null,
    );

    // --- 3. Other Form States ---
    const [reportTemplate, setReportTemplate] = useState('');

    // Profile Photo State
    const [profileFile, setProfileFile] = useState<File | null>(null);
    const [profilePreview, setProfilePreview] = useState<string | null>(null);

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

    // --- 4. Handlers ---
    const handleProfilePhotoSave = (file: File) => {
        setProfileFile(file);
        const previewUrl = URL.createObjectURL(file);
        setProfilePreview(previewUrl);
        setIsProfileModalOpen(false);
    };

    const handleAddNewDocument = (data: any) => {
        const newDoc = {
            fileName: data.name,
            documentType: data.type,
            expiry: data.expiry ? data.expiry.toLocaleDateString() : '-',
        };
        setDocuments((prev) => [...prev, newDoc]);
        setIsUploadModalOpen(false);
    };

    const handleDeleteDoc = () => {
        if (selectedDocIndex !== null) {
            setDocuments((prev) =>
                prev.filter((_, i) => i !== selectedDocIndex),
            );
            setSelectedDocIndex(null);
        }
        setIsDeleteModalOpen(false);
    };

    // Custom phone handler to restrict input to numbers only and max 8 digits
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        // Only allow numeric input and max 8 digits
        if ((val === '' || /^[0-9]+$/.test(val)) && val.length <= 8) {
            handleChange('phoneNumber')(e);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate all fields before submission
        if (validateAll()) {
            console.log('Form is valid! Submitting...', values);
            // Your API call or form submission logic here
            // Example: await createUser(values);
        } else {
            console.log('Form has validation errors');
        }
    };

    const handleCancel = () => {
        resetForm();
        // Additional cancel logic if needed
    };

    const templateOptions = [
        { label: 'Sales', value: 'sales' },
        { label: 'Usage', value: 'usage' },
        { label: 'Financial', value: 'financial' },
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
            <SidePannel />

            <main className="flex flex-1 flex-col">
                <div className="sticky top-0 z-10 bg-white">
                    <TopBar
                        title="Add New User"
                        icon={DashBoardIcon}
                        breadcrumbs={breadcrumbs}
                    />
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-6">
                    <div className="mb-8">
                        <Link
                            href="/usermanagement"
                            className="flex w-[210px] items-center gap-3 rounded-lg border border-[#CFCBD2] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
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
                                    Add User photo and personal details.
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
                                                    alt="Preview"
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <Profile className="h-8 w-8" />
                                            )}
                                        </div>
                                        <IconButton
                                            onClick={() =>
                                                setIsProfileModalOpen(true)
                                            }
                                        >
                                            Upload Photo
                                        </IconButton>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <Label className="mb-2 text-sm font-medium">
                                            Full Name{' '}
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            placeholder="eg., Noah Pierre"
                                            value={values.fullName}
                                            onChange={handleChange('fullName')}
                                            onBlur={handleBlur('fullName')}
                                            error={errors.fullName}
                                        />
                                    </div>
                                    <div>
                                        <Label className="mb-2 text-sm font-medium">
                                            Email Address{' '}
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            placeholder="eg., Noah@ordermark.com"
                                            icon={MailIcon}
                                            value={values.email}
                                            onChange={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            error={errors.email}
                                        />
                                    </div>
                                    <div>
                                        <Label className="mb-2 text-sm font-medium">
                                            Phone Number{' '}
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </Label>
                                        <div
                                            className={`flex rounded-lg border shadow-xs transition-colors focus-within:ring-1 ${errors.phoneNumber ? 'border-red-500 focus-within:ring-red-500' : 'border-gray-300 focus-within:border-[#84cc16] focus-within:ring-[#84cc16]'}`}
                                        >
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
                                        <Label>&nbsp;</Label>
                                        <CustomDropdown
                                            label="Primary Role"
                                            options={templateOptions}
                                            value={reportTemplate}
                                            onChange={setReportTemplate}
                                            placeholder="Customer relationship Manager"
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
                                    <IconButton
                                        onClick={() =>
                                            setIsUploadModalOpen(true)
                                        }
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
                                                    <TableCell className="flex justify-end">
                                                        <ActionButton
                                                            onClick={() => {
                                                                setSelectedDocIndex(
                                                                    index,
                                                                );
                                                                setIsDeleteModalOpen(
                                                                    true,
                                                                );
                                                            }}
                                                        >
                                                            <DelIcon className="h-4 w-4 text-iconColor" />
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
                                        <SingleDatePicker />
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

                        <div className="flex items-center justify-end gap-4 border-t border-borderColor pt-4">
                            <Link className="/usermanagement">
                                <IconButton
                                    type="button"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </IconButton>
                            </Link>
                            <Link href="/users/profile">
                                <Button type="submit">
                                    Send invite & Add User
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>

            {/* MODALS */}
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onRetry={handleDeleteDoc}
            />

            <AddDocumentModal
                isOpen={isUploadModalOpen}
                onClose={() => setIsUploadModalOpen(false)}
                onAdd={handleAddNewDocument}
            />

            <UpdateProfilePhotoModal
                isOpen={isProfileModalOpen}
                onClose={() => setIsProfileModalOpen(false)}
                onSave={handleProfilePhotoSave}
            />
        </div>
    );
};

export default AddUser;
