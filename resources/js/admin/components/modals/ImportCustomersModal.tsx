// import Modal from '@/shared/sharedcomponents/modals/Modal';
// import { UploadDropzone } from '@/shared/sharedcomponents/upload/UploadDropzone';
// import { UploadError } from '@/shared/sharedcomponents/upload/UploadError';
// import { UploadSuccess } from '@/shared/sharedcomponents/upload/UploadSuccess';
// import Button from '@/superadmin/components/ui/Button';
// import { FileText } from 'lucide-react';
// import { useState } from 'react';

// interface ImportCustomersModalProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// export default function ImportCustomersModal({
//     isOpen,
//     onClose,
// }: ImportCustomersModalProps) {
//     const [uploadStatus, setUploadStatus] = useState<
//         'initial' | 'uploading' | 'success' | 'error'
//     >('initial');
//     const [progress, setProgress] = useState(0);

//     const simulateUpload = () => {
//         setUploadStatus('uploading');
//         setProgress(10);
//         const interval = setInterval(() => {
//             setProgress((prev) => {
//                 if (prev >= 100) {
//                     clearInterval(interval);
//                     setUploadStatus('success');
//                     return 100;
//                 }
//                 return prev + 20;
//             });
//         }, 400);
//     };

//     return (
//         <Modal isOpen={isOpen} onClose={onClose} maxWidth="2xl">
//             <div className="p-6">
//                 <h2 className="mb-1 text-xl font-semibold text-gray-900">
//                     Import Customers
//                 </h2>
//                 <p className="mb-6 text-sm text-gray-500">
//                     Add customers in bulk using a .CSV or .XLSX file.
//                 </p>

//                 <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-5">
//                     <h3 className="mb-1 font-medium text-gray-900">
//                         Download the template
//                     </h3>
//                     <p className="mb-4 text-sm text-gray-500">
//                         To avoid errors, please use our formatted template.
//                     </p>
//                     <button className="mb-6 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
//                         <FileText className="h-4 w-4" /> Download Sample.csv
//                     </button>

//                     <div className="rounded-lg bg-white p-4">
//                         {uploadStatus === 'initial' && (
//                             <UploadDropzone onClick={simulateUpload} />
//                         )}
//                         {uploadStatus === 'error' && (
//                             <UploadError
//                                 fileName="Customer.CSV"
//                                 fileSize="0 KB of 200 KB"
//                                 onRetry={() => setUploadStatus('initial')}
//                             />
//                         )}
//                         {(uploadStatus === 'uploading' ||
//                             uploadStatus === 'success') && (
//                             <UploadSuccess
//                                 fileName="Customer.CSV"
//                                 fileSize="200 KB"
//                                 progress={progress}
//                                 isComplete={uploadStatus === 'success'}
//                                 onRemove={() => setUploadStatus('initial')}
//                             />
//                         )}
//                         <p className="mt-4 text-center text-xs text-gray-500">
//                             Accepted files: .CSV, .XLSX (Max 5MB)
//                         </p>
//                     </div>

//                     <div className="mt-5 flex items-center gap-2">
//                         <input
//                             type="checkbox"
//                             id="updateExisting"
//                             className="h-4 w-4 rounded border-gray-300 text-[#79B800] focus:ring-[#79B800]"
//                             defaultChecked
//                         />
//                         <label
//                             htmlFor="updateExisting"
//                             className="text-sm text-gray-700"
//                         >
//                             Update existing customers if phone number matches.
//                         </label>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex gap-4 border-t border-gray-100 p-6">
//                 <button
//                     onClick={onClose}
//                     className="w-1/2 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 hover:bg-gray-50"
//                 >
//                     Cancel
//                 </button>
//                 <Button
//                     className="w-1/2 bg-[#79B800] hover:bg-[#6aa300]"
//                     disabled={uploadStatus !== 'success'}
//                 >
//                     Import Customers
//                 </Button>
//             </div>
//         </Modal>
//     );
// }

import Modal from '@/shared/sharedcomponents/modals/Modal';
import { Checkbox } from '@/shared/sharedcomponents/ui/FormElements';
import { UploadDropzone } from '@/shared/sharedcomponents/upload/UploadDropzone';
import { UploadError } from '@/shared/sharedcomponents/upload/UploadError';
import { UploadSuccess } from '@/shared/sharedcomponents/upload/UploadSuccess';
import Button from '@/superadmin/components/ui/Button';
import { Download, FileText } from 'lucide-react';
import { useState } from 'react';

interface ImportCustomersModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ImportCustomersModal({
    isOpen,
    onClose,
}: ImportCustomersModalProps) {
    const [uploadStatus, setUploadStatus] = useState<
        'initial' | 'uploading' | 'success' | 'error'
    >('initial');
    const [progress, setProgress] = useState(0);
    const [isChecked, setIsChecked] = useState(false);

    const simulateUpload = () => {
        setUploadStatus('uploading');
        setProgress(10);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploadStatus('success');
                    return 100;
                }
                return prev + 20;
            });
        }, 400);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="relative overflow-hidden p-6">
                {/* Rings Background */}
                <div className="pointer-events-none absolute -top-12 -left-12 z-0 opacity-40">
                    <svg
                        width="180"
                        height="180"
                        viewBox="0 0 180 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="90"
                            cy="90"
                            r="30"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx="90"
                            cy="90"
                            r="50"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx="90"
                            cy="90"
                            r="70"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx="90"
                            cy="90"
                            r="90"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />
                    </svg>
                </div>

                <div className="relative z-10">
                    <div className="mb-6 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                            <Download className="h-5 w-5 text-gray-700" />
                        </div>
                        <div className="pt-1">
                            <h2 className="mb-1 text-xl font-semibold text-gray-900">
                                Import Customers
                            </h2>
                            <p className="text-sm text-gray-500">
                                Add customers in bulk using a .CSV or .XLSX
                                file.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-5">
                        <h3 className="mb-1 font-medium text-gray-900">
                            Download the template
                        </h3>
                        <p className="mb-4 text-sm text-gray-500">
                            To avoid errors, please use our formatted template.
                        </p>
                        <button className="mb-6 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                            <FileText className="h-4 w-4" /> Download Sample.csv
                        </button>

                        <div className="rounded-lg bg-white p-4">
                            {uploadStatus === 'initial' && (
                                <UploadDropzone onClick={simulateUpload} />
                            )}
                            {uploadStatus === 'error' && (
                                <UploadError
                                    fileName="Customer.CSV"
                                    fileSize="0 KB of 200 KB"
                                    onRetry={() => setUploadStatus('initial')}
                                />
                            )}
                            {(uploadStatus === 'uploading' ||
                                uploadStatus === 'success') && (
                                <UploadSuccess
                                    fileName="Customer.CSV"
                                    fileSize="200 KB"
                                    progress={progress}
                                    isComplete={uploadStatus === 'success'}
                                    onRemove={() => setUploadStatus('initial')}
                                />
                            )}
                            <p className="mt-4 text-center text-xs text-gray-500">
                                Accepted files: .CSV, .XLSX (Max 5MB)
                            </p>
                        </div>

                        <div className="mt-5 flex items-center gap-2">
                            <Checkbox
                                label="Update existing customers if phone number
                                matches."
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 border-t border-gray-100 p-6">
                <button
                    onClick={onClose}
                    className="w-1/2 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                    Cancel
                </button>
                <Button
                    className="w-1/2 bg-[#79B800] hover:bg-[#6aa300]"
                    disabled={uploadStatus !== 'success'}
                >
                    Import Customers
                </Button>
            </div>
        </Modal>
    );
}
