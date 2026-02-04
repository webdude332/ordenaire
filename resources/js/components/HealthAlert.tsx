import HealthIcon from '@/images/icons/warningRing.svg?react';
const HealthAlert = () => {
    return (
        <div className="mt-6 mb-8 flex items-start gap-4 rounded-xl border border-borderColor p-4">
            <div className="">
                <HealthIcon className="h-12 w-12" />
            </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-900">
                    Health Status: Attention Needed
                </h3>
                <ul className="mt-1 ml-1 list-inside list-disc text-sm text-gray-600">
                    <li>Food Safety Certificate expiring 5 Feb 2026</li>
                    <li>1 unpaid Invoice (due Jan 12, 2026)</li>
                </ul>
            </div>
        </div>
    );
};

export default HealthAlert;
