import React from 'react';
import Modal from './Modal';
import patternBg from '../images/icons/patternBg.png';
import ReportOk from '../images/icons/reportOk.svg?react'
// import successIcon from '../images/icons/successIcon.png'
import SuccessIcon from '../images/icons/successIcon.svg?react'
import IconButton from './ui/IconButton';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
             {/* Added relative overflow-hidden */}
            <div className="p-6 sm:p-8 relative overflow-hidden">
                
                {/* Icon Wrapper */}
                <div className="mb-6 relative">
                    {/* Icon Container: Made relative */}
                    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-white mx-auto sm:mx-0 border border-borderColor p-3 shadow-xs">
                        {/* <img src={reportOk} alt="" /> */}
                        <ReportOk className='w-8 h-8'/>
                    </div>
                </div>

                {/* Content (Z-10) */}
                <div className="relative z-10">
                    <div className="text-center mb-8">
                        <div className='inline-flex items-center justify-center w-20 h-20 rounded-full mb-4'>
                            {/* <img src={successIcon} alt="" /> */}
                            <SuccessIcon className='w-28 h-28'/>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Report Generated Successfully</h3>
                        <p className="text-base text-gray-600">The 'Monthly Summary' has been emailed to 2 recipients.</p>
                    </div>
                </div>
            </div>
                            <div className='px-6 py-6 border-t border-borderColor'>
                                        <IconButton className='w-full' onClick={onClose}>
                        Close
                    </IconButton>
                </div>
        </Modal>
    );
}