import AppIcon from '@/shared/images/icons/empsheduling.svg?react';
import Modal from '@/shared/sharedcomponents/modals/Modal';

interface TermsOfServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TermsOfServiceModal({
    isOpen,
    onClose,
}: TermsOfServiceModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="2xl">
            <div className="relative p-8">
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <AppIcon className="h-7 w-7" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                            Ordinaire Marketplace Terms of Service
                        </h2>
                        <p className="text-sm text-gray-500">
                            <span className="font-medium">Last Updated:</span>{' '}
                            January 27, 2026
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-h-[60vh] space-y-5 overflow-y-auto rounded-xl border border-borderColor p-6 text-sm leading-relaxed text-gray-700">
                    <p className="font-medium text-gray-900">
                        By installing or purchasing applications ("Apps") from
                        the Ordinaire Marketplace, you agree to the following
                        terms:
                    </p>

                    {[
                        {
                            title: '1. Subscription & Billing',
                            items: [
                                {
                                    label: 'Recurring Charges:',
                                    text: 'You authorize Ordinaire to charge your default payment method immediately for the initial term (monthly or yearly) and automatically for all subsequent renewal periods until you cancel.',
                                },
                                {
                                    label: 'Proration:',
                                    text: 'If you upgrade or downgrade an App mid-cycle, charges will be prorated based on the days remaining in your current billing period.',
                                },
                                {
                                    label: 'No Refunds:',
                                    text: 'Unless required by law, all fees paid for Marketplace Apps are non-refundable.',
                                },
                            ],
                        },
                        {
                            title: '2. Third-Party Data Sharing',
                            items: [
                                {
                                    label: 'Data Access:',
                                    text: "By installing this App, you grant the App Provider (whether Ordinaire or a third-party developer) permission to access specific data from your account as required for the App's functionality (e.g., Sales Data, Customer Profiles, Inventory Levels).",
                                },
                                {
                                    label: 'Responsibility:',
                                    text: "If the App is provided by a third-party developer, Ordinaire is not responsible for that developer's use, storage, or protection of your data once it leaves our platform.",
                                },
                            ],
                        },
                        {
                            title: '3. Cancellation',
                            items: [
                                {
                                    label: 'How to Cancel:',
                                    text: 'You may cancel this App subscription at any time via the "My Apps" section of the Marketplace.',
                                },
                                {
                                    label: 'Effect of Cancellation:',
                                    text: "Upon cancellation, access to the App's features will cease at the end of the current paid billing cycle. No further charges will be made.",
                                },
                            ],
                        },
                        {
                            title: '4. Disclaimer of Warranties',
                            items: [
                                {
                                    label: '"As Is":',
                                    text: 'All Apps are provided "as is" and "as available." Ordinaire does not guarantee that any App will be error-free or that it will meet your specific business requirements.',
                                },
                                {
                                    label: 'Liability:',
                                    text: 'Ordinaire shall not be liable for any indirect, incidental, or consequential damages (including lost profits or business interruption) resulting from the use or inability to use any Marketplace App.',
                                },
                            ],
                        },
                        {
                            title: '5. Governing Law & Jurisdiction',
                            items: [
                                {
                                    label: '',
                                    text: 'These Terms shall be governed by the laws of Kuwait. Any disputes arising from these Terms shall be resolved exclusively in the courts of Kuwait.',
                                },
                            ],
                        },
                        {
                            title: '6. Updates to Terms',
                            items: [
                                {
                                    label: '',
                                    text: 'Ordinaire reserves the right to modify these terms at any time. Continued use of the Marketplace after any such changes constitutes your acceptance of the new terms.',
                                },
                            ],
                        },
                    ].map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-2 font-semibold text-gray-900">
                                {section.title}
                            </h3>
                            <ul className="list-disc space-y-1.5 pl-5">
                                {section.items.map((item, i) => (
                                    <li key={i}>
                                        {item.label && (
                                            <span className="font-semibold">
                                                {item.label}{' '}
                                            </span>
                                        )}
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
}
