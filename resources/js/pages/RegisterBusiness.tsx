import Button from '@/components/ui/Button';
import CustomDropdown from '@/components/ui/CustomDropdown'; // Your component
import IconButton from '@/components/ui/IconButton';
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import { Link } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import LeftArrow from '../images/icons/backArrow.svg?react';
import BusinessProfileIcon from '../images/icons/businessProfileIcon.svg?react';
import ColorRight from '../images/icons/colorRight.svg?react';
import Dashboard from '../images/icons/dashBaordSvg.svg';
import MailIcon from '../images/icons/mailIcon.svg?react';

const RegisterBusiness = () => {
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);
    // --- Centralized Form State ---
    const [formData, setFormData] = useState({
        businessType: 'Choose type',
        isBranch: true,
        parentBusiness: '',
        address: '',
        country: 'Kuwait',
        city: '',
        language: 'English',
        branchAdmin: '',
        phoneCode: '+965',
        phone: '',
        email: '',
    });

    // Helper to update form data
    const updateForm = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // --- Options Data ---
    const typeOptions = [
        { label: 'Restaurant', value: 'Restaurant' },
        { label: 'Cafe', value: 'Cafe' },
        { label: 'Food Truck', value: 'Food Truck' },
        { label: 'Bakery', value: 'Bakery' },
        { label: 'Retail', value: 'Retail' },
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

    // Breadcrumbs
    const breadcrumbs = [
        {
            label: 'Business Management',
            isActive: false,
            href: '/business-management',
        },
        {
            label: 'Business Profiles',
            isActive: false,
            href: '/business-management',
        },
        { label: 'Register New Businesses', isActive: true },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />

            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Business Management"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={[
                        {
                            label: 'Business Profiles',
                            isActive: true,
                            onClick: () => {},
                        },
                        {
                            label: 'Multi-Tenancy & Franchise',
                            isActive: false,
                            onClick: () => {},
                        },
                        {
                            label: 'Feature Access & Beta',
                            isActive: false,
                            onClick: () => {},
                        },
                    ]}
                />

                <div className="flex-1 px-8 py-6">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link href="/busines-management">
                            <button className="text-md flex cursor-pointer items-center gap-2 rounded-lg border border-[#B5B0BA] bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                                <LeftArrow className="h-5 w-5 text-[#B5B0BA]" />
                                Go Back
                            </button>
                        </Link>
                    </div>

                    {/* Page Title */}
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        Register New Businesses
                    </h2>

                    {/* ================= TIMELINE STEPPER ================= */}


                    {/* ================= FORM SECTIONS ================= */}
                    <div className="space-y-10 pt-10">
                        {/* SECTION 1: Basic Business Info */}
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-3">
                                <h3 className="text-md font-semibold text-gray-700">
                                    Basic Business Info
                                </h3>
                            </div>

                            <div className="col-span-9 space-y-6 border border-[#E8E6EA] rounded-xl shadow-xs px-6 py-8 ">
                                {/* Row 1: Name & ID */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-md font-medium text-gray-700">
                                            Legal Business Name
                                            <span className="text-[#8CDD05]">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g., Tea Time Jumeirah"
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">
                                            Business ID (Auto-generated)
                                        </label>
                                        <input
                                            type="text"
                                            value="BIZ-2049"
                                            disabled
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Logo Upload */}
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-gray-700">
                                        Business logo
                                    </label>
                                    <p className="text-xs text-gray-500">
                                        Upload the Business logo.
                                    </p>
                                    <div className="flex items-center gap-4 pt-2">
                                        <BusinessProfileIcon className="h-20 w-20" />
                                        <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            Click to Upload
                                        </button>
                                    </div>
                                </div>

                                {/* Row 3: Type & Branch Toggle */}
                                <div className="space-y-6">
                                    {/* ROW 1: Business Type */}
                                    <div className="grid grid-cols-2 gap-6">
                                        <CustomDropdown
                                            label="Business Type"
                                            required
                                            value={formData.businessType}
                                            onChange={(val) =>
                                                updateForm('businessType', val)
                                            }
                                            options={typeOptions}
                                        />
                                        {/* Second column is empty intentionally to keep 'Business Type' on the left */}
                                    </div>

                                    {/* ROW 2: Toggle & Parent Business (Side-by-Side) */}
                                    <div className="grid grid-cols-2 items-start gap-6">
                                        {/* Left: Branch Toggle */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">
                                                Is this a Branch
                                            </label>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() =>
                                                        updateForm(
                                                            'isBranch',
                                                            !formData.isBranch,
                                                        )
                                                    }
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                                        formData.isBranch
                                                            ? 'bg-[#79B800]'
                                                            : 'bg-gray-200'
                                                    }`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                            formData.isBranch
                                                                ? 'translate-x-6'
                                                                : 'translate-x-1'
                                                        }`}
                                                    />
                                                </button>
                                                <span className="text-sm font-medium text-gray-700">
                                                    {formData.isBranch
                                                        ? 'YES'
                                                        : 'NO'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Right: Parent Business Dropdown */}
                                        <CustomDropdown
                                            label="Parent Business"
                                            disabled={!formData.isBranch}
                                            placeholder="Search by Business Name or ID..."
                                            value={formData.parentBusiness}
                                            onChange={(val) =>
                                                updateForm(
                                                    'parentBusiness',
                                                    val,
                                                )
                                            }
                                            options={parentOptions}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-full bg-gray-200"></div>

                        {/* SECTION 2: Location Details */}
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-3">
                                <h3 className="text-md font-semibold text-gray-700">
                                    Location Details
                                </h3>
                            </div>

                            <div className="col-span-9 space-y-6 border border-[#E8E6EA] rounded-xl shadow-xs px-6 py-8">
                                {/* Row 1: Address */}
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-gray-700">
                                        Full Address
                                        <span className="text-[#8CDD05]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter full address"
                                        value={formData.address}
                                        onChange={(e) =>
                                            updateForm(
                                                'address',
                                                e.target.value,
                                            )
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                    />
                                </div>

                                {/* Row 2: Country & City */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        {/* 3. COUNTRY DROPDOWN (With Custom Render for specific Flag HTML) */}
                                        <CustomDropdown
                                            label="Country"
                                            required
                                            value={formData.country}
                                            onChange={(val) =>
                                                updateForm('country', val)
                                            }
                                            options={countryOptions}
                                            renderOption={(option) => (
                                                <div className="flex items-center gap-2">
                                                    {/* Replicating your specific Kuwait Flag HTML */}
                                                    {option.value ===
                                                    'Kuwait' ? (
                                                        <div className="flex h-4 w-6 flex-col overflow-hidden rounded-sm border border-gray-200 bg-gray-100">
                                                            <div className="h-1 bg-green-600"></div>
                                                            <div className="h-1 bg-white"></div>
                                                            <div className="h-1 bg-red-600"></div>
                                                        </div>
                                                    ) : (
                                                        /* Fallback/Mock for UAE */
                                                        <div className="h-4 w-6 overflow-hidden rounded-sm border border-gray-200 bg-green-600"></div>
                                                    )}
                                                    <span>{option.label}</span>
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">
                                            City
                                            <span className="text-[#8CDD05]">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g., Dubai"
                                            value={formData.city}
                                            onChange={(e) =>
                                                updateForm(
                                                    'city',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Currency & Language */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">
                                            Currency (Auto-filled)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Based on Country, e.g., AED"
                                            disabled
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        {/* 4. LANGUAGE DROPDOWN */}
                                        <CustomDropdown
                                            label="Preferred Language"
                                            value={formData.language}
                                            onChange={(val) =>
                                                updateForm('language', val)
                                            }
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

                        {/* SECTION 3: Primary Contact */}
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-3">
                                <h3 className="text-md font-semibold text-gray-700">
                                    Primary Contact
                                </h3>
                            </div>

                            <div className="col-span-9 space-y-6 border border-[#E8E6EA] rounded-xl shadow-xs px-6 py-10">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">
                                            Branch Admin Name
                                            <span className="text-[#8CDD05]">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g., Omar Ali"
                                            value={formData.branchAdmin}
                                            onChange={(e) =>
                                                updateForm(
                                                    'branchAdmin',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">
                                            Phone number
                                            <span className="text-[#8CDD05]">
                                                *
                                            </span>
                                        </label>

                                        {/* Unified Container: One Border for both elements */}
                                        <div className="relative flex items-center rounded-lg border border-gray-300 bg-white transition-all focus-within:border-[#8CDD05] focus-within:ring-1 focus-within:ring-[#8CDD05]">
                                            {/* Left: Phone Code Trigger (Borderless) */}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setIsPhoneOpen(!isPhoneOpen)
                                                }
                                                className="flex items-center gap-1 pr-2 pl-3 text-sm text-gray-900 outline-none"
                                            >
                                                <span>
                                                    {formData.phoneCode}
                                                </span>
                                                <ChevronDown
                                                    className={`h-4 w-4 text-gray-400 transition-transform ${isPhoneOpen ? 'rotate-180' : ''}`}
                                                />
                                            </button>

                                            {/* Right: Phone Input (Borderless) */}
                                            <input
                                                type="text"
                                                placeholder="66778844"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    updateForm(
                                                        'phone',
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full border-none bg-transparent py-2.5 pr-3 pl-2 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-0"
                                            />

                                            {/* Absolute Dropdown Menu (Appears over the inputs) */}
                                            {isPhoneOpen && (
                                                <>
                                                    {/* Invisible backdrop to close on click outside */}
                                                    <div
                                                        className="fixed inset-0 z-10"
                                                        onClick={() =>
                                                            setIsPhoneOpen(
                                                                false,
                                                            )
                                                        }
                                                    />

                                                    <ul className="absolute top-full left-0 z-20 mt-1 max-h-48 w-24 overflow-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                                                        {phoneCodeOptions.map(
                                                            (option) => (
                                                                <li
                                                                    key={
                                                                        option.value
                                                                    }
                                                                >
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            updateForm(
                                                                                'phoneCode',
                                                                                option.value,
                                                                            );
                                                                            setIsPhoneOpen(
                                                                                false,
                                                                            );
                                                                        }}
                                                                        className={`block w-full px-4 py-2 text-left text-sm hover:bg-[#F8FFEB] hover:text-[#578500] ${
                                                                            formData.phoneCode ===
                                                                            option.value
                                                                                ? 'bg-[#F8FFEB] font-medium text-[#578500]'
                                                                                : 'text-gray-700'
                                                                        }`}
                                                                    >
                                                                        {
                                                                            option.label
                                                                        }
                                                                    </button>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-700">
                                            Email address
                                            <span className="text-[#8CDD05]">
                                                *
                                            </span>
                                        </label>
                                        <div className="relative flex items-center justify-center">
                                            <div className="pointer-events-none absolute top-2.5 left-3 text-gray-400">
                                                <MailIcon className="h-5 w-5" />
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="e.g., omar@teatime.com"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    updateForm(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 pl-10 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]"
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            This email will receive the initial
                                            invite in Step 4.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
                    <IconButton>Cancel</IconButton>
                    <Button>
                        Next: Operations
                        <ColorRight />
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default RegisterBusiness;
