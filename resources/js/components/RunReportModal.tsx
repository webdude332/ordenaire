import infoIcon from '../images/icons/infoIcon.png';
import runIcon from '../images/icons/playIcon.png';
import Modal from './Modal';
import patternBg from '../images/icons/patternBg.png'; 

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
            <div className="p-6 sm:p-8 relative overflow-hidden">
                <div className="mb-6 flex items-start gap-4 relative">
                    
                    <div className="absolute left-0 top-0 h-12 w-12 flex items-center justify-center pointer-events-none">
                        <img 
                            src={patternBg} 
                            alt="" 
                            className="max-w-none" 
                            style={{ 
                                transform: 'scale(1.1)',
                                opacity: 2 
                            }} 
                        />
                    </div>
                    <div>
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                        <img src={runIcon} alt="" />
                    </div>
                    
                    <div className="pt-4 relative z-10">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Run Report Immediately
                        </h3>
                    </div>
                    </div>
                </div>

                <div className='border border-gray-200 rounded-lg p-4 mb-4'>
                                    <div className="mb-6 flex items-center gap-3 rounded-lg border border-blue-100 p-2 relative z-10">
                    <img src={infoIcon} alt="" />
                    <p className="text-sm">
                        Note: This is an extra, one-time execution and the
                        recurring schedule will NOT be affected.
                    </p>
                </div>
                <div className="mb-6 relative z-10">
                    <p className="mb-4 text-sm font-semibold text-gray-900">
                        You are about to generate and send the following report:
                    </p>
                    <div className="space-y-3 rounded-lg border border-green-200 bg-[#F8FFEB] p-4">
                        <div className="flex">
                            <div className="flex w-2/5 flex-col gap-y-4">
                                <p className="font-gray-500 text-sm font-medium">Report Name</p>
                                <p className="font-gray-500 text-sm font-medium">Tanent</p>
                                <p className="font-gray-500 text-sm font-medium">Template</p>
                                <p className="font-gray-500 text-sm font-medium">Date Range</p>
                                <p className="font-gray-500 text-sm font-medium">Recipients</p>
                            </div>
                            <div className="flex w-3/5 flex-col gap-y-4">
                                <p className="font-gray-500 text-sm font-medium">Monthly Summary</p>
                                <p className="font-gray-500 text-sm font-medium">Acme Corp</p>
                                <p className="font-gray-500 text-sm font-medium">Sales</p>
                                <p className="font-gray-500 text-sm font-medium">Last 30 Days (Nov 18 - Dec 18)</p>
                                <p className="font-gray-500 text-sm font-medium">abc@gmail.com, Admins</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mb-4 text-medium text-gray-800 relative z-10">
                    Are you sure you want to proceed?
                </p>
                </div>

                <div className="flex gap-3 relative z-10">
                    <button
                        onClick={onClose}
                        className="flex-1 rounded-lg border-2 border-[#CFCBD2] px-4 py-1.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                    >
                        Cancel
                    </button>
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
                            border: 'none',
                            backgroundColor: '#79B800',
                            boxShadow: `
                            inset 0 0 0 2px rgba(255, 255, 255, 0.12),
                            inset 0 0 0 2px rgba(255, 255, 255, 0),
                            inset 0px -2px 0px rgba(10, 13, 18, 0.05),
                            0px 1px 2px rgba(10, 13, 18, 0.05)
                            `,
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