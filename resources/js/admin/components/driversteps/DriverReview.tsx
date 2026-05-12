import Button from '@/shared/sharedcomponents/ui/Button';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';

interface ReviewProps {
    data: any;
    onBack: () => void;
    onSubmit: () => void;
}

const DriverReview = ({ data, onBack, onSubmit }: ReviewProps) => {
    return (
        <div className="space-y-8 pt-4">
            {/* Driver Profile */}
            <div className="grid grid-cols-12 gap-8 border-b border-gray-100 pb-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Driver Profile
                    </h3>
                </div>
                <div className="relative col-span-9 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                            {data.image ? (
                                <img
                                    src={URL.createObjectURL(data.image)}
                                    alt="profile"
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <svg
                                    className="h-6 w-6 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            )}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">
                            {data.fullName || 'New Driver'} (
                            {data.staffId || 'STF-0001'})
                        </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                        <div className="text-gray-500">Branch</div>
                        <div className="font-medium text-gray-900">
                            {data.branch || 'Mirpur-1 (Main)'}
                        </div>

                        <div className="text-gray-500">Email</div>
                        <div className="font-medium text-gray-900">
                            {data.email || '-'}
                        </div>

                        <div className="text-gray-500">Phone</div>
                        <div className="font-medium text-gray-900">
                            {data.phone || '-'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Compensation & Documents */}
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Compensation & Documents
                    </h3>
                </div>
                <div className="col-span-9 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                        <div className="text-gray-500">Employment</div>
                        <div className="font-medium text-gray-900 capitalize">
                            {data.employmentType?.replace('_', '-') ||
                                'Full-Time'}
                        </div>

                        <div className="text-gray-500">Pay Structure</div>
                        <div className="font-medium text-gray-900">
                            Fixed Salary
                        </div>

                        <div className="text-gray-500">Rate</div>
                        <div className="font-medium text-gray-900">
                            {data.baseSalary || '0.000'} KWD / month
                        </div>

                        <div className="text-gray-500">Standard Schedule</div>
                        <div className="font-medium text-gray-900">
                            {data.workHours || '0'} Hours / Day •{' '}
                            {data.workDays || '0'} Days / Week
                        </div>

                        <div className="text-gray-500">Bank Details</div>
                        <div className="font-medium text-gray-900">
                            {data.accountHolder || 'N/A'}
                            <br />
                            {data.bankName || ''}
                            <br />
                            {data.iban || ''}
                        </div>

                        <div className="text-gray-500">Documents</div>
                        <div className="flex gap-2">
                            <span className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                                Passport
                            </span>
                            <span className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                                License
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                <IconButton onClick={onBack}>Back</IconButton>
                <Button onClick={onSubmit}>Submit & Invite Driver</Button>
            </div>
        </div>
    );
};

export default DriverReview;
