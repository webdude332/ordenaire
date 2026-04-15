import TrashIcon from '@/shared/images/icons/delBold.svg?react';
import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
import PlusIcon from '@/shared/images/icons/plus.svg?react';
import { useState } from 'react';

interface VariationTabProps {
    data: any;
    update: (field: string, value: any) => void;
}

interface Variant {
    id: string;
    name: string;
    sellingPrice: string;
    estimatedCost: string;
    locked?: boolean;
}

const VariationTab = ({ data, update }: VariationTabProps) => {
    const variants: Variant[] = data.variants || [
        {
            id: '1',
            name: 'Standard',
            sellingPrice: '3.000',
            estimatedCost: '2.000',
            locked: true,
        },
    ];

    const [editingId, setEditingId] = useState<string | null>(null);
    const [editValues, setEditValues] = useState({
        name: '',
        sellingPrice: '',
        estimatedCost: '',
    });

    const addVariant = () => {
        if (variants.length >= 3) return;
        const newVariant: Variant = {
            id: Date.now().toString(),
            name: '',
            sellingPrice: '0.000',
            estimatedCost: '0.000',
        };
        update('variants', [...variants, newVariant]);
        setEditingId(newVariant.id);
        setEditValues({
            name: '',
            sellingPrice: '0.000',
            estimatedCost: '0.000',
        });
    };

    const deleteVariant = (id: string) => {
        update(
            'variants',
            variants.filter((v) => v.id !== id),
        );
    };

    const startEdit = (v: Variant) => {
        setEditingId(v.id);
        setEditValues({
            name: v.name,
            sellingPrice: v.sellingPrice,
            estimatedCost: v.estimatedCost,
        });
    };

    const saveEdit = (id: string) => {
        update(
            'variants',
            variants.map((v) => (v.id === id ? { ...v, ...editValues } : v)),
        );
        setEditingId(null);
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">
                    Item Variants
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    Define specific versions of this item (e.g., Regular vs.
                    Large, or Spicy vs. Mild). You can add up to 3 Variants.
                </p>
            </div>

            {/* Table */}
            <div className="border-t border-gray-200">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 bg-gray-50 px-6 py-3 text-xs font-semibold text-gray-500">
                    <div className="col-span-4">Variant Name</div>
                    <div className="col-span-3">Selling Price</div>
                    <div className="col-span-3">Estimated Cost</div>
                    <div className="col-span-2 text-right">Actions</div>
                </div>

                {variants.map((variant) => (
                    <div key={variant.id} className="border-t border-gray-100">
                        {editingId === variant.id && !variant.locked ? (
                            <div className="grid grid-cols-12 gap-4 px-6 py-4">
                                <div className="col-span-4">
                                    <input
                                        autoFocus
                                        value={editValues.name}
                                        onChange={(e) =>
                                            setEditValues((p) => ({
                                                ...p,
                                                name: e.target.value,
                                            }))
                                        }
                                        placeholder="Variant name"
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                    />
                                </div>
                                <div className="col-span-3">
                                    <div className="relative">
                                        <input
                                            value={editValues.sellingPrice}
                                            onChange={(e) =>
                                                setEditValues((p) => ({
                                                    ...p,
                                                    sellingPrice:
                                                        e.target.value,
                                                }))
                                            }
                                            className="w-full rounded-lg border border-gray-300 py-2 pr-14 pl-3 text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                        />
                                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-gray-400">
                                            KWD
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <div className="relative">
                                        <input
                                            value={editValues.estimatedCost}
                                            onChange={(e) =>
                                                setEditValues((p) => ({
                                                    ...p,
                                                    estimatedCost:
                                                        e.target.value,
                                                }))
                                            }
                                            className="w-full rounded-lg border border-gray-300 py-2 pr-14 pl-3 text-sm focus:border-[#7AB621] focus:ring-1 focus:ring-[#7AB621] focus:outline-none"
                                        />
                                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-gray-400">
                                            KWD
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center justify-end">
                                    <button
                                        onClick={() => saveEdit(variant.id)}
                                        className="rounded-lg bg-[#7AB621] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#6aa31d]"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-12 gap-4 px-6 py-4">
                                <div className="col-span-4">
                                    <p className="font-medium text-gray-900">
                                        {variant.name}
                                    </p>
                                </div>
                                <div className="col-span-3">
                                    <p className="font-medium text-gray-900">
                                        {variant.sellingPrice}
                                    </p>
                                    <p className="text-xs text-gray-400">KWD</p>
                                </div>
                                <div className="col-span-3">
                                    <p className="font-medium text-gray-900">
                                        {variant.estimatedCost}
                                    </p>
                                    <p className="text-xs text-gray-400">KWD</p>
                                </div>
                                <div className="col-span-2 flex items-center justify-end gap-2">
                                    {variant.locked ? (
                                        <span className="text-sm text-gray-400">
                                            Locked
                                        </span>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() =>
                                                    startEdit(variant)
                                                }
                                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
                                            >
                                                <PencilIcon className="h-4 w-4 text-gray-400" />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    deleteVariant(variant.id)
                                                }
                                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
                                            >
                                                <TrashIcon className="h-4 w-4 text-gray-400" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Add Variant */}
                {variants.length < 3 && (
                    <div className="border-t border-gray-100 px-6 py-4">
                        <button
                            onClick={addVariant}
                            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                        >
                            <PlusIcon className="h-4 w-4" />
                            Add Variant
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VariationTab;
