import React from 'react';
import Modal from './Modal';
import repotIcon from '../images/icons/reportIcon.png'
import DelIcon from '../images/icons/delIcon.svg?react';
import patternBg from '../images/icons/patternBg.svg'
import RadioGroup from './ui/RadioGroup';
import IconButton from './ui/IconButton';
import Button from './ui/Button';

interface SimpleErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRetry: () => void;
}

export default function DeleteModal({ isOpen, onClose, onRetry }: SimpleErrorModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* Added relative overflow-hidden */}
            <div className="p-6 sm:p-8 relative overflow-hidden">
                
                {/* Icon Wrapper */}
                <div className="mb-6 relative">
                     {/* Icon Container: Made relative */}
                    <div className="mb-8 flex flex-col items-start gap-4">
                        {/* --- ICON WRAPPER WITH PATTERN --- */}
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center">
                            {/* 1. The Pattern Background (Centered behind icon) */}
                            <div className="pointer-events-none absolute inset-0 top-22 left-22 flex items-center justify-center">
                                <img
                                    src={patternBg}
                                    alt=""
                                    className="max-w-none"
                                    style={{
                                        transform: 'scale(1.1)',
                                        opacity: 1,
                                    }}
                                />
                            </div>

                            {/* 2. The Edit Icon (Sitting on top) */}
                            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                                <DelIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content (Z-10) */}
                <div className="relative z-10">
                    <div className="text-center mb-8">
                        <h3 className="text-4xl font-bold text-gray-900 mb-3">Are you sure?</h3>
                        <p className="text-lg text-gray-600 font-semibold">You will no be able to revover the deleted record!</p>
                    </div>
                    <div>
                        <RadioGroup className='pl-6 mt-12 mb-12' label="" name="frequency" options={['I confirm to proceed']} defaultValue="I confirm to proceed" />
                    </div>
                </div>
            </div>
                            <div className='px-4 py-6 border-t border-borderColor flex gap-2'>
                    <div className='w-1/2'>
                        <IconButton className='w-full' onClick={onClose}>
                            No, Cancel
                        </IconButton>
                    </div>
                    <div className='w-1/2'>
                        <Button className='w-full bg-[#F04438]' onClick={onRetry}>
                            Yes, Delete it!
                        </Button>
                    </div>
                </div>
        </Modal>
    );
}