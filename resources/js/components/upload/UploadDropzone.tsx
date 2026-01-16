import CloudIcon from '@/images/icons/cloudIcon.svg?react';

export const UploadDropzone = ({ onClick }: { onClick: () => void }) => (
    <>
        <div
            onClick={onClick}
            className="flex flex-col items-center justify-center space-y-3 rounded-lg border border-[#E8E6EA] p-4 shadow-xs cursor-pointer hover:border-gray-300 transition-colors"
        >
            <div className="bg-whit rounded-lg border border-borderColor p-4 shadow-xs">
                <CloudIcon className="h-5 w-5" />
            </div>
            <div>
                <p className="text-sm">
                    <span className="text-primary font-semibold">Click to upload</span>{' '}
                    or drag and drop
                </p>
            </div>
        </div>
    </>
);