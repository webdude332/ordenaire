import ActionButton from '@/components/ui/ActionButton';
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import DelIcon from '@/images/icons/delIcon.svg?react';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import { GripVertical, Plus } from 'lucide-react';
import { useState } from 'react';

interface Category {
    id: number;
    name: string;
}

const INITIAL: Category[] = [
    { id: 1, name: 'Marketing' },
    { id: 2, name: 'Finance' },
    { id: 3, name: 'Analytics' },
    { id: 4, name: 'Delivery' },
];

export default function Settings() {
    const [categories, setCategories] = useState<Category[]>(INITIAL);
    const [newCat, setNewCat] = useState('');

    const addCategory = () => {
        const trimmed = newCat.trim();
        if (!trimmed) return;
        setCategories((prev) => [...prev, { id: Date.now(), name: trimmed }]);
        setNewCat('');
    };

    const deleteCategory = (id: number) =>
        setCategories((prev) => prev.filter((c) => c.id !== id));

    return (
        <div className="space-y-8">
            {/* ── App Categories ────────────────────────────────────── */}
            <div className="flex gap-10">
                {/* Left description */}
                <div className="w-64 flex-shrink-0">
                    <h2 className="text-sm font-semibold text-gray-900">
                        App Categories
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        These categories define the structure of the public
                        marketplace and the filter menu.
                    </p>
                </div>

                {/* Right card */}
                <div className="flex-1 rounded-xl border border-gray-200">
                    {/* Table header */}
                    <div className="grid grid-cols-[1fr_auto] border-b border-gray-100 px-4 py-3">
                        <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                            Category Name
                        </span>
                        <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                            Actions
                        </span>
                    </div>

                    {/* Category rows */}
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="grid grid-cols-[1fr_auto] items-center border-b border-gray-100 px-4 py-3 last:border-b-0"
                        >
                            <div className="flex items-center gap-3">
                                <GripVertical className="h-4 w-4 cursor-grab text-gray-300" />
                                <span className="text-sm text-gray-800">
                                    {cat.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ActionButton>
                                    <PencilIcon className="h-4 w-4 text-gray-400" />
                                </ActionButton>
                                <ActionButton
                                    onClick={() => deleteCategory(cat.id)}
                                >
                                    <DelIcon className="h-4 w-4 text-gray-400" />
                                </ActionButton>
                            </div>
                        </div>
                    ))}

                    {/* Add category inline input */}
                    <div className="flex items-center gap-3 px-4 py-4">
                        <input
                            value={newCat}
                            onChange={(e) => setNewCat(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === 'Enter' && addCategory()
                            }
                            placeholder="Enter category name..."
                            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                        />
                        <Button onClick={addCategory}>
                            <Plus className="mr-1.5 h-4 w-4" />
                            Add Category
                        </Button>
                    </div>
                </div>
            </div>

            {/* ── Footer ────────────────────────────────────────────── */}
            <div className="flex justify-end gap-3 border-t border-gray-200 pt-6">
                <IconButton onClick={() => setCategories(INITIAL)}>
                    Cancel
                </IconButton>
                <Button>Save Changes</Button>
            </div>
        </div>
    );
}
