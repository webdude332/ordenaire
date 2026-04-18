import { CheckCircle2, FileText, Trash2 } from 'lucide-react';

interface Props {
    fileName: string;
    fileSize: string;
    progress: number;
    isComplete: boolean;
    onRemove: () => void;
}

export const UploadSuccess = ({
    fileName,
    fileSize,
    progress,
    isComplete,
    onRemove,
}: Props) => (
    <div
        className={`rounded-lg border ${isComplete ? 'border-[#8CDD05]' : 'border-gray-200'} bg-white p-4`}
    >
        <div className="mb-3 flex items-start justify-between">
            <div className="flex items-start gap-3">
                <div
                    className={`rounded-lg p-2 ${isComplete ? 'bg-[#F2FBD9]' : 'bg-gray-50'}`}
                >
                    <FileText
                        className={`h-6 w-6 ${isComplete ? 'text-[#79B800]' : 'text-gray-500'}`}
                    />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">
                        {fileName}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                            {fileSize} of {fileSize}
                        </span>
                        {isComplete && (
                            <>
                                <span className="text-gray-300">|</span>
                                <span className="flex items-center gap-1 text-xs font-medium text-[#79B800]">
                                    <CheckCircle2 className="h-3.5 w-3.5" />{' '}
                                    Complete
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <button
                onClick={onRemove}
                className="cursor-pointer text-gray-400 hover:text-gray-600"
            >
                <Trash2 className="h-5 w-5" />
            </button>
        </div>
        <div className="flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                <div
                    className="h-full rounded-full bg-[#79B800] transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <span className="text-xs font-medium text-gray-700">
                {progress}%
            </span>
        </div>
    </div>
);
