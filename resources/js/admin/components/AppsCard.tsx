// import Badge from '@/shared/sharedcomponents/ui/Badge'; // adjust path
// import React from 'react';

// export interface AppData {
//     icon: React.ReactNode;
//     title: string;
//     provider: string;
//     description: string;
//     features: string[];
//     price: string | null;
//     pricingTerm: string | null;
//     isInstalled?: boolean;
// }

// export default function AppsCard({
//     icon,
//     title,
//     provider,
//     description,
//     features,
//     price,
//     pricingTerm,
//     isInstalled = false,
// }: AppData) {
//     return (
//         <div className="flex h-full flex-col rounded-xl border border-borderColor bg-white p-4 shadow-xs">
//             {/* Header */}
//             <div className="mb-6 flex items-center gap-5">
//                 <div className="flex-shrink-0">{icon}</div>
//                 <div>
//                     <h1 className="text-xl font-semibold text-gray-900">
//                         {title}
//                     </h1>
//                     <p className="mt-1 text-base text-gray-500">
//                         By {provider}
//                     </p>
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="flex flex-grow flex-col gap-6">
//                 <p className="line-clamp-3 text-base leading-relaxed text-gray-800">
//                     {description}
//                 </p>
//                 <div className="space-y-4">
//                     <h2 className="text-lg font-bold text-gray-950">
//                         Key Features
//                     </h2>
//                     <ul className="list-outside list-disc space-y-1.5 pl-6 text-base text-gray-600">
//                         {features.map((feature, index) => (
//                             <li key={index}>{feature}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             {/* Footer */}
//             <div className="mt-6 flex items-center border-t border-borderColor pt-5">
//                 {/* Left: price or installed badge */}
//                 <div className="flex flex-1 items-center">
//                     {isInstalled ? (
//                         <Badge variant="success" withDot>
//                             Installed
//                         </Badge>
//                     ) : price === 'Free' ||
//                       (price === null && pricingTerm === null) ? (
//                         <span className="text-base font-semibold text-gray-950">
//                             Free
//                         </span>
//                     ) : (
//                         <div className="flex items-baseline gap-2 text-base font-medium text-gray-950">
//                             <span className="font-semibold">{price}</span>
//                             {pricingTerm && (
//                                 <>
//                                     <span className="text-gray-400">·</span>
//                                     <span className="font-medium text-gray-500">
//                                         {pricingTerm}
//                                     </span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </div>

//                 {/* Divider */}
//                 <div className="mx-4 h-5 w-px bg-borderColor" />

//                 {/* Right: action button */}
//                 <button className="flex-shrink-0 cursor-pointer text-base font-semibold text-primary transition hover:text-primary/80">
//                     {isInstalled ? 'Manage' : 'View Details'}
//                 </button>
//             </div>
//         </div>
//     );
// }

//new

import Badge from '@/shared/sharedcomponents/ui/Badge';
import { router } from '@inertiajs/react';
import React from 'react';

export interface AppData {
    icon: React.ReactNode;
    title: string;
    provider: string;
    description: string;
    features: string[];
    price: string | null;
    pricingTerm: string | null;
    isInstalled?: boolean;
    slug?: string;
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
    slug = 'app',
}: AppData) {
    const handleAction = () => {
        if (isInstalled) {
            router.visit(`/admin/marketplace/my-apps/${slug}/manage`);
        } else {
            router.visit(`/admin/marketplace/explore/${slug}`);
        }
    };

    return (
        <div className="flex h-full flex-col rounded-xl border border-borderColor bg-white p-4 shadow-xs">
            {/* Header */}
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

            {/* Content */}
            <div className="flex flex-grow flex-col gap-6">
                <p className="line-clamp-3 text-base leading-relaxed text-gray-800">
                    {description}
                </p>
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

            {/* Footer */}
            <div className="mt-6 flex items-center border-t border-borderColor pt-5">
                <div className="flex flex-1 items-center">
                    {isInstalled ? (
                        <Badge variant="success" withDot>
                            Installed
                        </Badge>
                    ) : price === 'Free' ||
                      (price === null && pricingTerm === null) ? (
                        <span className="text-base font-semibold text-gray-950">
                            Free
                        </span>
                    ) : (
                        <div className="flex items-baseline gap-2 text-base font-medium text-gray-950">
                            <span className="font-semibold">{price}</span>
                            {pricingTerm && (
                                <>
                                    <span className="text-gray-400">·</span>
                                    <span className="font-medium text-gray-500">
                                        {pricingTerm}
                                    </span>
                                </>
                            )}
                        </div>
                    )}
                </div>
                <div className="mx-4 h-5 w-px bg-borderColor" />
                <button
                    onClick={handleAction}
                    className="flex-shrink-0 cursor-pointer text-base font-semibold text-primary transition hover:text-primary/80"
                >
                    {isInstalled ? 'Manage' : 'View Details'}
                </button>
            </div>
        </div>
    );
}
