import HealthIcon from '@/images/icons/warningRing.svg?react';
const HealthAlert = () => {
    return (
        <div className="py1 mb-8 flex items-start gap-4 rounded-xl border border-borderColor pt-2 pb-4 pl-2">
            <div className="">
                <HealthIcon className="h-10 w-10" />
            </div>
            <div className="pt-2">
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
