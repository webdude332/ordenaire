// export default function ReviewConfirm() {
//     return <div>ReviewConfirm</div>;
// }

import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
import Button from '@/shared/sharedcomponents/ui/Button';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';

interface ReviewConfirmProps {
    data: any;
    onBack: () => void;
    onSubmit: () => void;
}

const ReviewConfirm = ({ data, onBack, onSubmit }: ReviewConfirmProps) => {
    return (
        <div className="space-y-8 border-t border-gray-200 pt-8">
            {/* Item Overview */}
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Item Overview
                    </h3>
                </div>
                <div className="col-span-9">
                    <div className="relative rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
                        <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
                            <PencilIcon className="h-4 w-4 text-gray-400" />
                        </button>

                        <div className="flex items-center gap-4">
                            {data.image ? (
                                <img
                                    src={URL.createObjectURL(data.image)}
                                    alt={data.itemName}
                                    className="h-14 w-14 rounded-full object-cover"
                                />
                            ) : (
                                <div className="h-14 w-14 rounded-full bg-gray-200" />
                            )}
                            <p className="text-lg font-bold text-gray-900">
                                {data.itemName || '—'}
                            </p>
                        </div>

                        <div className="mt-4 space-y-2">
                            <ReviewRow label="Item ID" value={data.itemCode} />
                            <ReviewRow
                                label="Category"
                                value={data.category || '—'}
                            />
                            <ReviewRow
                                label="Selling Price"
                                value={`${data.basePrice || '0.000'} KWD`}
                            />
                            <ReviewRow
                                label="Manual Tax"
                                value={data.manualTax || '—'}
                            />
                            <ReviewRow
                                label="Kitchen Station"
                                value={data.kitchenStation || '—'}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            {/* Stock & Costing */}
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Stock & Costing
                    </h3>
                </div>
                <div className="col-span-9">
                    <div className="relative rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
                        <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
                            <PencilIcon className="h-4 w-4 text-gray-400" />
                        </button>
                        <div className="space-y-2">
                            <ReviewRow
                                label="Inventory Tracking"
                                value={
                                    <span
                                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${data.trackStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}
                                    >
                                        {data.trackStock ? 'ON' : 'OFF'}
                                    </span>
                                }
                            />
                            <ReviewRow
                                label="Estimated Cost"
                                value={`${data.estimatedCost || '0.000'} KWD (Manual Entry)`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            {/* Variants & Modifiers */}
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Variants & Modifiers
                    </h3>
                </div>
                <div className="col-span-9">
                    <div className="relative rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
                        <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
                            <PencilIcon className="h-4 w-4 text-gray-400" />
                        </button>
                        <div className="space-y-2">
                            <ReviewRow
                                label="Variants"
                                value={
                                    data.variants?.length
                                        ? `${data.variants.length} Defined (${data.variants.map((v: any) => v.name).join(', ')})`
                                        : 'None'
                                }
                            />
                            <ReviewRow
                                label="Modifier Groups"
                                value={
                                    data.modifierGroups?.length
                                        ? `${data.modifierGroups.length} Active (${data.modifierGroups.map((g: any) => g.name).join(', ')})`
                                        : 'None'
                                }
                            />
                            <ReviewRow
                                label="Upsell Add-ons"
                                value={
                                    data.addOns?.length
                                        ? `${data.addOns.length} Linked (${data.addOns.map((a: any) => a.name).join(', ')})`
                                        : 'None'
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                <IconButton onClick={onBack}>Go Back</IconButton>
                <Button onClick={onSubmit}>Publish Item</Button>
            </div>
        </div>
    );
};

const ReviewRow = ({
    label,
    value,
}: {
    label: string;
    value: React.ReactNode;
}) => (
    <div className="flex items-center gap-4">
        <span className="w-36 flex-shrink-0 text-sm text-gray-500">
            {label}
        </span>
        <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
);

export default ReviewConfirm;
