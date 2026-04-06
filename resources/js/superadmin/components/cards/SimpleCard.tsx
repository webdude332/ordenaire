interface cardProps {
    title: string;
    storage: string;
    outOf: string;
}

export default function SimpleCard({ title, storage, outOf }: cardProps) {
    return (
        <div className="rounded-xl border border-borderColor px-4 py-6 shadow-xs">
            <h1 className="mb-3 text-sm font-semibold text-gray-600">
                {title}
            </h1>
            <div className="mt-4 flex items-center gap-2">
                <span className="text-xl font-semibold">{storage}</span>{' '}
                <span className="text-md mt-1 font-medium text-gray-500">
                    {outOf}
                </span>
            </div>
        </div>
    );
}
