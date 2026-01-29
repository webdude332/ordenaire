import { useState, useRef } from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/ui/Button';
import { Input, Label } from '@/components/ui/FormElements';
import CustomDropdown from '@/components/ui/CustomDropdown';
import SingleDatePicker from '@/components/SingleDateRangePicker';
import FilePlusIcon from '@/images/icons/filePlus.svg?react';
import CloudIcon from '@/images/icons/cloudIcon.svg?react';
import TrashIcon from '@/images/icons/delIcon.svg?react';
import patternBg from '@/images/icons/patternBg.svg';
import Complete from '@/images/icons/complete.svg?react';
import Failed from '@/images/icons/failed.svg?react';

interface AddDocumentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (data: any) => void;
}

type UploadStatus = 'initial' | 'uploading' | 'success' | 'error';

export default function AddDocumentModal({
    isOpen,
    onClose,
    onAdd,
}: AddDocumentModalProps) {
    // --- State Management ---
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>('initial');
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Form States
    const [docName, setDocName] = useState('');
    const [docType, setDocType] = useState('Passport');
    const [expiryDate, setExpiryDate] = useState<Date | null>(null);

    const fileName = selectedFile?.name || "e.g. Passport_Scan_Noah.pdf";
    const fileSize = selectedFile ? `${(selectedFile.size / 1024).toFixed(0)} KB` : "0 KB";

    // --- Handlers ---
    const reset = () => {
        setUploadStatus('initial');
        setProgress(0);
        setSelectedFile(null);
        setDocName('');
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setDocName(file.name);
            startSimulatedUpload();
        }
    };

    const startSimulatedUpload = () => {
        setUploadStatus('uploading');
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploadStatus('success');
                    return 100;
                }
                return prev + 20;
            });
        }, 300);
    };

    const handleSubmit = () => {
        if (uploadStatus === 'success' && selectedFile) {
            onAdd({
                file: selectedFile,
                name: docName,
                type: docType,
                expiry: expiryDate
            });
            onClose();
            reset();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            {/* Debug Controls */}
            <div className="absolute top-0 left-0 z-50 flex gap-2 p-2 bg-gray-100 rounded-br-lg opacity-30 hover:opacity-100">
                <button onClick={reset} className="text-[10px] border bg-white px-2">Reset</button>
                <button onClick={() => setUploadStatus('error')} className="text-[10px] border bg-white px-2 text-red-500">Error</button>
            </div>

            <div className="relative overflow-hidden p-6 sm:p-8">
                {/* Header Section */}
                <div className="relative mb-6 flex items-start gap-4">
                    <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                        <img
                            src={patternBg}
                            alt=""
                            className="max-w-none"
                            style={{ transform: 'scale(1.1)', opacity: 0.7 }}
                        />
                    </div>
                    <div>
                        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                            <FilePlusIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                        </div>
                        <div className="relative z-10 pt-4">
                            <h3 className="text-md font-medium text-gray-900">Add Document</h3>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="relative z-10 mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-xs">
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm font-semibold text-gray-900 mb-1">Upload Document</p>
                            <p className="text-xs text-gray-500 mb-4">Accepted: PDF, PNG, DOC & JPG</p>
                            
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                className="hidden" 
                                accept=".pdf,.png,.doc,.jpg"
                                onChange={handleFileChange} 
                            />

                            {/* --- UPLOAD STATES --- */}
                            {uploadStatus === 'initial' && (
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full flex flex-col items-center justify-center space-y-2 rounded-lg border border-[#E8E6EA] p-6 shadow-xs cursor-pointer hover:bg-gray-50 transition-colors"
                                >
                                    <div className="rounded-md border border-gray-200 p-2 shadow-xs bg-white">
                                        <CloudIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <p className="text-sm">
                                        <span className="text-[#84cc16] font-bold">Click to upload</span> or drag and drop
                                    </p>
                                </div>
                            )}

                            {uploadStatus === 'error' && (
                                <div className="w-full rounded-lg border-2 border-[#FDA29B] bg-white p-4 flex items-center justify-between shadow-sm">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900">{fileName}</span>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-xs text-gray-500 pr-2 border-r border-gray-200">0 KB of 200 KB</span>
                                            <span className="text-xs text-[#D92D20] font-bold flex items-center gap-1.5">
                                                <Failed className="w-4 h-4" /> Failed
                                            </span>
                                        </div>
                                        <button onClick={() => fileInputRef.current?.click()} className="text-xs font-bold text-[#D92D20] underline text-left mt-2">Try again</button>
                                    </div>
                                    <button onClick={reset} className="text-gray-400 hover:text-gray-600">
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                </div>
                            )}

                            {(uploadStatus === 'uploading' || uploadStatus === 'success') && (
                                <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-900">{fileName}</span>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className="text-xs text-gray-500 pr-2 border-r border-gray-200">{fileSize} of {fileSize}</span>
                                                {uploadStatus === 'success' && (
                                                    <span className="text-[#079455] font-bold text-xs inline-flex items-center gap-1.5">
                                                        <Complete className="w-4 h-4" /> Complete
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <button onClick={reset} className="text-gray-400 hover:text-gray-600">
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                                        <div 
                                            className="h-full bg-[#84cc16] transition-all duration-300" 
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                    <div className="mt-1 flex justify-end">
                                        <span className="text-xs font-medium text-gray-500">{progress}%</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* --- FORM FIELDS --- */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <Label className="mb-2 text-sm font-medium">Document Name<span className="text-primary">*</span></Label>
                                <Input 
                                    placeholder="e.g. Passport_Scan_Noah.pdf" 
                                    value={docName} 
                                    onChange={(e) => setDocName(e.target.value)}
                                />
                            </div>
                            <div className="col-span-1">
                                <CustomDropdown 
                                    label="Document Type" 
                                    options={[{ label: 'Passport', value: 'Passport' }, { label: 'Visa', value: 'Visa' }]} 
                                    value={docType} 
                                    onChange={setDocType} 
                                    labelClassName="mb-2 text-sm font-medium"
                                />
                            </div>
                            <div className="col-span-1">
                                <Label className="mb-2 text-sm font-medium">Expiry Date</Label>
                                <SingleDatePicker />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-2 flex gap-4 border-t border-gray-100 bg-white px-8 py-5">
                <button
                    onClick={onClose}
                    className="flex-1 rounded-lg border border-gray-300 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                    Cancel
                </button>
                <div className="flex-1">
                    <Button 
                        onClick={handleSubmit} 
                        className={`w-full ${uploadStatus === 'success' ? 'bg-[#79B800] hover:bg-[#6aa300]' : ''}`}
                        disabled={uploadStatus !== 'success'}
                    >
                        Add Document
                    </Button>
                </div>
            </div>
        </Modal>
    );
}