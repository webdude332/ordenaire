import { FileText, Trash2, XCircle } from 'lucide-react';

interface Props {
    fileName: string;
    fileSize: string;
    onRetry: () => void;
}

export const UploadError = ({ fileName, fileSize, onRetry }: Props) => (
    <div className="rounded-lg border border-red-500 bg-white p-4">
        <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
                <div className="rounded-lg bg-red-50 p-2">
                    <FileText className="h-6 w-6 text-red-500" />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">
                        {fileName}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                            {fileSize} of {fileSize}
                        </span>
                        <span className="text-gray-300">|</span>
                        <span className="flex items-center gap-1 text-xs font-medium text-red-600">
                            <XCircle className="h-3.5 w-3.5" /> Failed
                        </span>
                    </div>
                    <button
                        onClick={onRetry}
                        className="mt-2 text-xs font-medium text-red-600 hover:underline"
                    >
                        Try again
                    </button>
                </div>
            </div>
            <button
                onClick={onRetry}
                className="cursor-pointer text-gray-400 hover:text-gray-600"
            >
                <Trash2 className="h-5 w-5" />
            </button>
        </div>
    </div>
);
