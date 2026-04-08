import Badge from '@/superadmin/components/Badge';
import Modal from '@/superadmin/components/Modal';
import User from '@shared/images/icons/admin.svg?react';
import Phone from '@shared/images/icons/call.svg?react';
import Email from '@shared/images/icons/email.svg?react';
import PhoneBold from '@shared/images/icons/phoneBold.svg?react';

interface ContactInfo {
    adminName: string;
    phoneNumber: string;
    emailAddress: string;
}

interface ExpiringContactModalProps {
    businessName: string;
    location?: string;
    alertLabel?: string;
    alertVariant?: 'error' | 'warning' | 'success' | 'blue' | 'gray';
    contactInfo?: ContactInfo;
    onClose: () => void;
}

// Mock data fallback
const getMockData = (businessName: string) => ({
    adminName: 'Ahmed Al-Sayed',
    phoneNumber: '+971 50 123 4567',
    emailAddress: `admin@${businessName.toLowerCase().replace(/\s/g, '')}.ae`,
});

export default function ExpiringContactModal({
    businessName,
    location = 'UAE',
    alertLabel = 'Expiring Soon',
    alertVariant = 'warning',
    contactInfo,
    onClose,
}: ExpiringContactModalProps) {
    const contact = contactInfo ?? getMockData(businessName);

    return (
        <Modal isOpen={true} onClose={onClose} maxWidth="xl">
            <div className="relative overflow-hidden p-6 sm:p-8">
                <div className="relative mb-6 flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                        <PhoneBold className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                    </div>
                </div>

                {/* Main Card */}
                <div className="relative z-10 rounded-xl border border-gray-200 bg-white shadow-xs">
                    {/* Title Area */}
                    <div className="flex flex-col items-center gap-3 px-6 py-6">
                        <h3 className="text-2xl font-bold text-gray-900">
                            General Info: {businessName}, {location}
                        </h3>
                        <Badge
                            variant={alertVariant}
                            withDot={true}
                            rounded="full"
                        >
                            {alertLabel}
                        </Badge>
                        <p className="text-sm font-semibold text-gray-700">
                            Subscription Renewal Reminder
                        </p>
                    </div>

                    <div className="space-y-6 p-6">
                        <div>
                            <p className="mb-2 text-lg font-medium">
                                Who to call
                            </p>
                            <div className="grid grid-cols-2 rounded-xl border border-borderColor bg-[#F8FFEB] px-4 py-6">
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <User className="h-5 w-5" />
                                            <span className="font-medium text-gray-900">
                                                Admin
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-4 w-4" />
                                            <span className="font-medium text-gray-900">
                                                Phone Number
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Email className="h-4 w-4" />
                                            <span className="font-medium text-gray-900">
                                                Email
                                            </span>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            {contact.adminName}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            {contact.phoneNumber}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            {contact.emailAddress}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
