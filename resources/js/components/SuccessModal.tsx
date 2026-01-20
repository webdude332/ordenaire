import React from 'react';
import Modal from './Modal';
import patternBg from '../images/icons/patternBg.png';
import reportOk from '../images/icons/reportOkIcon.png'
import successIcon from '../images/icons/successIcon.png'
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
                    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-white mx-auto sm:mx-0">
                        
                        {/* --- PATTERN BACKGROUND --- */}
                        {/* <div className="absolute flex items-center justify-center pointer-events-none">
                             <img 
                                src={patternBg} 
                                alt="" 
                                className="max-w-none" 
                                style={{ transform: 'scale(1.5)', opacity: 1 }} 
                            />
                        </div> */}

                        {/* Actual Icon */}
                        <img src={reportOk} alt="" />
                    </div>
                </div>

                {/* Content (Z-10) */}
                <div className="relative z-10">
                    <div className="text-center mb-8">
                        {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500 mb-4 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div> */}
                        <div className='inline-flex items-center justify-center w-20 h-20 rounded-full mb-4'>
                            <img src={successIcon} alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Report Generated Successfully</h3>
                        <p className="text-base text-gray-600">The 'Monthly Summary' has been emailed to 2 recipients.</p>
                    </div>

                    {/* <button
                        onClick={onClose}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Close
                    </button> */}
                    <IconButton className='w-full' onClick={onClose}>
                        Close
                    </IconButton>
                </div>
            </div>
        </Modal>
    );
}