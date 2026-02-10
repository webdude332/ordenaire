import CloudIcon from '@/images/icons/cloudIcon.svg?react';

export const UploadDropzone = ({ onClick }: { onClick: () => void }) => (
    <>
        <div
            onClick={onClick}
            className="flex cursor-pointer flex-col items-center justify-center space-y-3 rounded-lg border border-[#E8E6EA] p-4 shadow-xs transition-colors hover:border-gray-300"
        >
            <div className="bg-whit rounded-lg border border-borderColor p-4 shadow-xs">
                <CloudIcon className="h-5 w-5" />
            </div>
            <div>
                <p className="text-sm">
                    <span className="font-semibold text-textGreen">
                        Click to upload
                    </span>{' '}
                    or drag and drop
                </p>
            </div>
        </div>
    </>
);
