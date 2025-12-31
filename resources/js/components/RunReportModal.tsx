import alertIcon from '../images/icons/alert-circle.png';
import runIcon from '../images/icons/run-icon.png';
import Modal from './Modal';

interface RunReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function RunReportModal({
    isOpen,
    onClose,
    onConfirm,
}: RunReportModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* Header with Icon */}
                <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <img src={runIcon} alt="" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Run Report Immediately
                        </h3>
                    </div>
                </div>

                {/* Info Notice */}
                <div className="mb-6 flex items-start gap-3 rounded-lg border border-blue-100 p-4">
                    {/* <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                    <img src={alertIcon} alt="" />
                    <p className="text-sm">
                        Note: This is an extra, one-time execution and the
                        recurring schedule will NOT be affected.
                    </p>
                </div>

                {/* Report Details */}
                <div className="mb-6">
                    <p className="mb-4 text-sm font-medium text-gray-900">
                        You are about to generate and send the following report:
                    </p>
                    <div className="space-y-3 rounded-lg border border-green-200 bg-[#F8FFEB] p-4">
                        {/* <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Report Name</p>
                                <p className='text-sm font-semibold text-gray-600'>other</p>
                            </div>
                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Tanent</p>
                            </div>
                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Template</p>
                            </div>
                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Date Range</p>
                            </div>
                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Recipients</p>
                            </div>
                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Report Name</p>
                            </div>
                            <div>
                                <p className='text-sm font-semibold text-gray-600'>Report Name</p>
                            </div>
                        </div> */}
                        <div className="flex">
                            <div className="flex flex-col gap-y-4 w-1/2">
                                <p className="font-gray-500 text-sm font-medium">
                                    Report Name
                                </p>
                                <p className="font-gray-500 text-sm font-medium">
                                    Tanent
                                </p>
                                <p className="font-gray-500 text-sm font-medium">
                                    Template
                                </p>
                                <p className="font-gray-500 text-sm font-medium">
                                    Date Range
                                </p>
                                <p className="font-gray-500 text-sm font-medium">
                                    Recipients
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-4 w-1/2">
                                <p className='font-gray-500 text-sm font-medium'>Monthly Summary</p>
                                <p className='font-gray-500 text-sm font-medium'>Acme Corp</p>
                                <p className='font-gray-500 text-sm font-medium'>Sales</p>
                                <p className='font-gray-500 text-sm font-medium'>Last 30 Days (Nov 18 - Dec 18)</p>
                                <p className='font-gray-500 text-sm font-medium'>abc@gmail.com, Admins</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Confirmation Text */}
                <p className="mb-6 text-sm text-gray-700">
                    Are you sure you want to proceed?
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 rounded-lg border-2 border-gray-200 px-4 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    {/* <button
                        style={{
                            display: 'flex',
                            width: '434px',
                            padding: '10px 16px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '6px',
                            borderRadius: '8px',
                            border: '2px solid rgba(255, 255, 255, 0.12)',
                            background: '#79B800',
                            boxShadow:
                                '0 0 0 1px rgba(10, 13, 18, 0.18) inset, 0 -2px 0 0 rgba(10, 13, 18, 0.05) inset, 0 1px 2px 0 rgba(10, 13, 18, 0.05)',
                        }}
                        onClick={onConfirm}
                        className="flex-1 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                    >
                        Confirm & Run Report
                    </button> */}

                    <button
                    onClick={onConfirm}
  style={{
    display: 'flex',
    width: '434px',
    height: '44px',
    padding: '10px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    borderRadius: '8px',

    /* INSET BORDER */
    border: 'none',
    backgroundColor: '#79B800',
    boxShadow: `
      inset 0 0 0 2px rgba(255, 255, 255, 0.12),
      inset 0 0 0 2px rgba(255, 255, 255, 0),
      inset 0px -2px 0px rgba(10, 13, 18, 0.05),
      0px 1px 2px rgba(10, 13, 18, 0.05)
    `,

    /* Gradient overlay */
    backgroundImage:
      'linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0))',
    backgroundClip: 'padding-box',
  }}
  className="text-sm font-medium text-white transition-colors hover:bg-[#65a30d]"
>
  Confirm & run report
</button>
                </div>
            </div>
        </Modal>
    );
}
