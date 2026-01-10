import React from 'react';
import Modal from './Modal';
import patternBg from '../images/icons/patternBg.png';
import repotIcon from '../images/icons/reportIcon.png'

interface SimpleErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRetry: () => void;
}

export default function SimpleErrorModal({ isOpen, onClose, onRetry }: SimpleErrorModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* Added relative overflow-hidden */}
            <div className="p-6 sm:p-8 relative overflow-hidden">
                
                {/* Icon Wrapper */}
                <div className="mb-6 relative">
                     {/* Icon Container: Made relative */}
                    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-white mx-auto sm:mx-0">
                        
                        {/* --- PATTERN BACKGROUND --- */}
                        <div className="absolute flex items-center justify-center pointer-events-none">
                             <img 
                                src={patternBg} 
                                alt="" 
                                className="max-w-none" 
                                style={{ transform: 'scale(1.5)', opacity: 1 }} 
                            />
                        </div>
                        <img src={repotIcon} alt="" />
                    </div>
                </div>

                {/* Content (Z-10) */}
                <div className="relative z-10">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500 mb-4 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Report Generation Failed</h3>
                        <p className="text-base text-gray-600">System could not process the request.</p>
                        <p className="text-base text-gray-600">Please try again later.</p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Close
                        </button>
                        <button
                            onClick={onRetry}
                            className="flex-1 px-4 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}