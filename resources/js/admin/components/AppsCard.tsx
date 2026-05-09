import React from 'react';

// Define the interface for app data
export interface AppData {
    icon: React.ReactNode; // Pass your own icon component here
    title: string;
    provider: string;
    description: string;
    features: string[]; // Array of feature strings
    price: string | null; // e.g., "5.000 KWD" or null for Free
    pricingTerm: string | null; // e.g., "per month", "One-time", or null
    isInstalled?: boolean; // Optional, defaults to false
}

export default function AppsCard({
    icon,
    title,
    provider,
    description,
    features,
    price,
    pricingTerm,
    isInstalled = false,
}: AppData) {
    return (
        <div className="flex h-full flex-col rounded-xl border border-borderColor bg-white p-4 shadow-xs">
            {/**Header - Icon and Title **/}
            <div className="mb-6 flex items-center gap-5">
                <div className="flex-shrink-0">{icon}</div>
                <div>
                    <h1 className="text-xl font-semibold text-gray-900">
                        {title}
                    </h1>
                    <p className="mt-1 text-base text-gray-500">
                        By {provider}
                    </p>
                </div>
            </div>

            {/**Content - Description and Features **/}
            <div className="flex flex-grow flex-col gap-6">
                <div>
                    <p className="line-clamp-3 text-base leading-relaxed text-gray-800">
                        {description}
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-gray-950">
                        Key Features
                    </h2>
                    <ul className="list-outside list-disc space-y-1.5 pl-6 text-base text-gray-600">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/**Footer - Price/Status and Action Button **/}
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-borderColor pt-5">
                {isInstalled ? (
                    // Installed Status Section
                    <div className="flex items-center gap-4">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-base font-semibold text-green-800 ring-1 ring-green-600/20 ring-inset">
                            Installed
                        </span>
                    </div>
                ) : (
                    // Pricing information section
                    <div className="flex items-baseline gap-2 text-base font-medium text-gray-950">
                        {price && pricingTerm ? (
                            <>
                                <span className="font-semibold">{price}</span>
                                <span className="text-gray-400">·</span>
                                <span className="font-medium text-gray-500">
                                    {pricingTerm}
                                </span>
                            </>
                        ) : price === null ? (
                            <span className="font-semibold">Free</span>
                        ) : null}
                    </div>
                )}

                <div className="flex-shrink-0">
                    <button className="cursor-pointer text-base font-semibold text-primary transition hover:text-primary/80">
                        {isInstalled ? 'Manage' : 'View Details'}
                    </button>
                </div>
            </div>
        </div>
    );
}
