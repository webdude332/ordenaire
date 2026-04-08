import Badge from '@/superadmin/components/Badge';
import Modal from '@/superadmin/components/Modal';
import User from '@shared/images/icons/admin.svg?react';
import Amount from '@shared/images/icons/amount.svg?react';
import Phone from '@shared/images/icons/call.svg?react';
import Email from '@shared/images/icons/email.svg?react';
import Issue from '@shared/images/icons/issue.svg?react';
import PhoneBold from '@shared/images/icons/phoneBold.svg?react';
import Success from '@shared/images/icons/success.svg?react';

interface ContactInfo {
    adminName: string;
    phoneNumber: string;
    emailAddress: string;
}

interface ContextInfo {
    currentIssue: string;
    amountDue: string;
    walletBalance: string;
    lastSuccessfulPayment: string;
}

interface ContactModalProps {
    businessName: string;
    location?: string;
    alertLabel?: string;
    alertVariant?: 'error' | 'warning' | 'success' | 'blue' | 'gray';
    invoiceRef?: string;
    contactInfo?: ContactInfo;
    contextInfo?: ContextInfo;
    onClose: () => void;
}

// Mock data fallback based on businessName
const getMockData = (businessName: string) => ({
    contactInfo: {
        adminName: 'Ahmed Al-Sayed',
        phoneNumber: '+971 50 123 4567',
        emailAddress: `admin@${businessName.toLowerCase().replace(/\s/g, '')}.ae`,
    },
    contextInfo: {
        currentIssue: 'Payment Failed (Card Declined)',
        amountDue: '50.000 KWD (600.00 AED)',
        walletBalance: '0.000 KWD',
        lastSuccessfulPayment: '12 Oct 2025 (Visa ending in 4242)',
    },
});

export default function ContactModal({
    businessName,
    location = 'UAE',
    alertLabel = 'Payment Failed',
    alertVariant = 'error',
    invoiceRef = 'INV-2025-001',
    contactInfo,
    contextInfo,
    onClose,
}: ContactModalProps) {
    const mock = getMockData(businessName);
    const contact = contactInfo ?? mock.contactInfo;
    const context = contextInfo ?? mock.contextInfo;

    return (
        <Modal isOpen={true} onClose={onClose} maxWidth="xl">
            <div className="relative overflow-hidden p-6 sm:p-8">
                <div className="relative mb-6 flex items-start gap-4">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                        <PhoneBold className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                    </div>
                </div>

                <div className="relative z-10 rounded-xl border border-gray-200 bg-white shadow-xs">
                    {/* Title Area */}
                    <div className="flex flex-col items-center gap-3 px-6 py-6">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Contact Info: {businessName}, {location}
                        </h3>
                        <Badge
                            variant={alertVariant}
                            withDot={true}
                            rounded="full"
                        >
                            {alertLabel}
                        </Badge>
                        <p className="text-sm font-semibold text-gray-700">
                            Reference: Invoice #{invoiceRef}
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
                        <div>
                            <p className="mb-2 text-lg font-medium">Context</p>
                            <div className="grid grid-cols-2 rounded-xl border border-borderColor px-4 py-6">
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <Issue className="h-5 w-5" />
                                            <span className="font-medium text-gray-900">
                                                Current Issue
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Amount className="h-5 w-5" />
                                            <span className="font-medium text-gray-900">
                                                Amount Due
                                            </span>
                                        </div>
                                        {/* <div className="flex items-center gap-3">
                                            <Wallet className="h-5 w-5" />
                                            <span className="font-medium text-gray-900">
                                                Current Wallet Balance
                                            </span>
                                        </div> */}
                                        <div className="flex items-center gap-3">
                                            <Success className="h-5 w-5" />
                                            <span className="font-medium text-gray-900">
                                                Last Successfull Payment
                                            </span>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            {context.currentIssue}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            {context.amountDue}
                                        </span>
                                    </div>
                                    {/* <div>
                                        <span className="font-medium text-gray-900">
                                            {context.walletBalance}
                                        </span>
                                    </div> */}
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            {context.lastSuccessfulPayment}
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
