import Edit from '@/images/icons/editIcon.svg?react';
import Eye from '@/images/icons/eyeIcon.svg?react';
import Profile from '@/images/icons/teaProfile.svg?react';

// Define the TypeScript interface for the component props
interface BusinessProfileHeaderProps {
    // Business Information
    businessName: string;
    businessId: string;
    serviceType: string;
    businessEmail: string;
    phoneNumber: string;
    preferredLanguage: string;

    // Location
    country: string;
    fullAddress: string;

    // Additional Info
    linkedWhatsApp: string;
    websiteUrl: string;

    // Status
    status: 'Active' | 'Inactive' | 'Pending';

    // Optional: Parent Business (if this is a branch)
    parentBusinessName?: string;
    parentBusinessId?: string;

    // Optional: Custom profile image
    profileImage?: string;

    // Optional: Button handlers
    onViewSubscription?: () => void;
    onEditBusiness?: () => void;
}

const BusinessProfileHeader = ({
    businessName,
    businessId,
    serviceType,
    businessEmail,
    phoneNumber,
    preferredLanguage,
    country,
    fullAddress,
    linkedWhatsApp,
    websiteUrl,
    status,
    parentBusinessName,
    parentBusinessId,
    profileImage,
    onViewSubscription,
    onEditBusiness,
}: BusinessProfileHeaderProps) => {
    // Status badge styling based on status
    const getStatusStyles = () => {
        switch (status) {
            case 'Active':
                return {
                    border: 'border-[#ABEFC6]',
                    bg: 'bg-[#ECFDF3]',
                    text: 'text-green-800',
                    dot: 'bg-green-600',
                };
            case 'Inactive':
                return {
                    border: 'border-gray-300',
                    bg: 'bg-gray-100',
                    text: 'text-gray-800',
                    dot: 'bg-gray-600',
                };
            case 'Pending':
                return {
                    border: 'border-yellow-300',
                    bg: 'bg-yellow-50',
                    text: 'text-yellow-800',
                    dot: 'bg-yellow-600',
                };
            default:
                return {
                    border: 'border-gray-300',
                    bg: 'bg-gray-100',
                    text: 'text-gray-800',
                    dot: 'bg-gray-600',
                };
        }
    };

    const statusStyles = getStatusStyles();

    return (
        <div className="mb-8 overflow-hidden">
            {/* 1. Green Banner */}
            <div
                className="relative h-48 w-full rounded-xl"
                style={{
                    background:
                        'var(--gradient-brand-80060045-deg, linear-gradient(45deg, var(--Colors-Brand-800, #42690B) 0%, var(--Colors-Brand-600, #79B800) 100%))',
                }}
            ></div>

            {/* 2. Profile Info Header */}
            <div className="px-8">
                <div className="flex items-start justify-between">
                    {/* Left Side: Avatar & Name */}
                    <div className="flex gap-6">
                        {/* Avatar */}
                        <div className="relative -mt-12">
                            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md">
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt={businessName}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <Profile className="h-24 w-24" />
                                )}
                            </div>
                        </div>

                        {/* Name & Role */}
                        <div className="pt-5">
                            <div className="mb-1 flex items-center gap-3">
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {businessName}
                                </h2>
                                <span className="rounded-full border border-[#E8E6EA] bg-[#F9F7FA] px-2 py-1 text-xs font-medium text-[#696170]">
                                    {serviceType}
                                </span>
                            </div>
                            <div className="mb-3 text-sm text-gray-500">
                                {businessId}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={onViewSubscription}
                                    className="flex items-center justify-center gap-2 rounded-lg border border-[#CFCBD2] px-4 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                                >
                                    <Eye className="h-4 w-4 text-iconColor" />
                                    Subscription Overview
                                </button>
                                <button
                                    onClick={onEditBusiness}
                                    className="flex items-center justify-center gap-2 rounded-lg border border-[#CFCBD2] px-4 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                                >
                                    <Edit className="h-4 w-4 text-iconColor" />
                                    Edit Business
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Status */}
                    <div className="flex items-center gap-2 pt-6">
                        <span className="text-sm text-gray-500">
                            Subscription Status:
                        </span>
                        <span
                            className={`inline-flex items-center rounded-lg border ${statusStyles.border} ${statusStyles.bg} px-2 py-0.5 text-xs font-medium ${statusStyles.text}`}
                        >
                            <span
                                className={`mr-1.5 h-1.5 w-1.5 rounded-full ${statusStyles.dot}`}
                            ></span>
                            {status}
                        </span>
                    </div>
                </div>
            </div>

            {/* 3. Info Grid (Footer of Card) */}
            <div className="mt-8 rounded-xl border border-[#E8E6EA] bg-[#F8FFEB] px-6 pt-6 pb-6">
                {/* First Row */}
                <div className="grid grid-cols-4 pt-6">
                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Business Email
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            {businessEmail}
                        </div>
                    </div>

                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Phone Number
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            {phoneNumber}
                        </div>
                    </div>

                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Preferred Language
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                            {preferredLanguage === 'English' && (
                                <span className="text-base">🇺🇸</span>
                            )}
                            {preferredLanguage}
                        </div>
                    </div>

                    {/* Parent Business (if exists) */}
                    {parentBusinessName && (
                        <div>
                            <div className="mb-2 text-xs font-medium text-gray-500">
                                Parent Business Name
                            </div>
                            <div className="text-sm font-medium text-green-700">
                                {parentBusinessName}{' '}
                                {parentBusinessId && `(${parentBusinessId})`}
                            </div>
                        </div>
                    )}
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-4 border-b border-[#8CDD05] py-6">
                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Country
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                            {country === 'Australia' && (
                                <span className="text-base">🇦🇺</span>
                            )}
                            {country}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Full Address
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            {fullAddress}
                        </div>
                    </div>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-4 py-6">
                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Linked WhatsApp Number
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            {linkedWhatsApp}
                        </div>
                    </div>

                    <div className="grid-col-4 lg:grid-col-4 md:grid-col-4 grid">
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Website URL
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            <a
                                href={websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {websiteUrl}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessProfileHeader;
