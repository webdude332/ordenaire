import Edit from '@/images/icons/editIcon.svg?react';
import Eye from '@/images/icons/eyeIcon.svg?react';
import Profile from '@/images/icons/teaProfile.svg?react';

const BusinessHeader = () => {
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
            <div className="px-8 pb-8">
                <div className="flex items-start justify-between">
                    {/* Left Side: Avatar & Name */}
                    <div className="flex gap-6">
                        {/* Avatar */}
                        <div className="relative -mt-12">
                            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md">
                                <Profile className="h-24 w-24" />
                            </div>
                        </div>

                        {/* Name & Role */}
                        <div className="pt-3">
                            <div className="mb-1 flex items-center gap-3">
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Tea Time
                                </h2>
                                <span className="rounded-full border border-[#E8E6EA] bg-[#F9F7FA] px-2 py-1 text-xs font-medium text-[#696170]">
                                    Full Service (Dine in)
                                </span>
                            </div>
                            <div className="mb-3 text-sm text-gray-500">
                                BIZ-2049
                            </div>
                            <div className="flex gap-2">
                                <button className="flex items-center justify-center gap-2 rounded-lg border border-[#CFCBD2] px-4 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50">
                                    <Eye className="w-4 h-4 text-iconColor" />
                                    Send Password Reset Link
                                </button>
                                <button className="flex items-center justify-center gap-2 rounded-lg border border-[#CFCBD2] px-4 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50">
                                    <Edit className="w-4 h-4 text-iconColor" /> Send Password Reset Link
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Status */}
                    <div className="flex items-center gap-2 pt-4">
                        <span className="text-sm text-gray-500">
                            Current status:
                        </span>
                        <span className="inline-flex items-center rounded-lg border border-[#ABEFC6] bg-[#ECFDF3] px-2 py-0.5 text-xs font-medium text-green-800">
                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600 text-[#067647]"></span>
                            Active
                        </span>
                    </div>
                </div>

                {/* 3. Info Grid (Footer of Card) */}
            </div>
            <div className="mt-8 rounded-xl border border-[#E8E6EA] bg-[#F8FFEB] px-6 pt-6 pb-6">
                <div className="grid grid-cols-3 gap-8 pt-6">
                    {/* Column 1 */}
                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Business Email
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            info@ordemark.com
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Phone Number
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            +91 323323232 3233
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Prefered Language
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            English
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 border-b border-[#8CDD05] py-6">
                    {/* Column 1 */}
                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Country
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            Australia
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Full Address
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            123 Gourmet Lane, Sydney, NSW 2000, Australia
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3  py-6">
                    {/* Column 1 */}
                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                            Linked WhatsApp Number
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            +965 66487565
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <div className="mb-2 text-xs font-medium text-gray-500">
                           Website URL
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                            https://www.orderflock.com/
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessHeader;
