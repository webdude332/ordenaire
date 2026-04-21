// import patternBg from '@/shared/images/icons/patternBg.svg';
// import Modal from '@/shared/sharedcomponents/modals/Modal';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
// import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';
// import { Plus } from 'lucide-react';
// import { useState } from 'react';

// interface MatchedItem {
//     id: number;
//     name: string;
//     cost: number;
// }

// interface AddVariantStockProps {
//     isOpen: boolean;
//     onClose: () => void;
//     onConfirm: (data: any) => void;
//     matchedItem: MatchedItem | null;
//     onUnlink: () => void;
// }

// const LinkIcon = () => (
//     <svg
//         className="h-4 w-4"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//     >
//         <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
//         />
//     </svg>
// );

// const CheckCircleIcon = () => (
//     <svg
//         className="h-5 w-5 text-green-500"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//     >
//         <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//     </svg>
// );

// export default function AddVariantStock({
//     isOpen,
//     onClose,
//     onConfirm,
//     matchedItem,
//     onUnlink,
// }: AddVariantStockProps) {
//     const [name, setName] = useState('');
//     const [sequence, setSequence] = useState('');
//     const [sellingPrice, setSellingPrice] = useState('');
//     const [tax, setTax] = useState('inherit');
//     const [consumptionQty, setConsumptionQty] = useState('1.000');

//     const baseCost = matchedItem?.cost ?? 0;
//     const variantUnitCost = (
//         baseCost * (parseFloat(consumptionQty) || 0)
//     ).toFixed(3);

//     const taxOptions = [
//         { label: 'Inherit from Base Item', value: 'inherit' },
//         { label: 'VAT (5%)', value: 'vat_5' },
//         { label: 'Excise Tax (50%)', value: 'excise_50' },
//         { label: 'No Tax', value: 'none' },
//     ];

//     const handleConfirm = () => {
//         onConfirm({
//             name,
//             sequence,
//             sellingPrice,
//             tax,
//             consumptionQty,
//             unitCost: variantUnitCost,
//             inventoryRule: `${consumptionQty} x Serving`,
//         });
//         // Reset form
//         setName('');
//         setSequence('');
//         setSellingPrice('');
//         setTax('inherit');
//         setConsumptionQty('1.000');
//     };

//     return (
//         <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
//             <div className="p-6 sm:p-8">
//                 {/* ── Header ─────────────────────────────────────────── */}
//                 <div className="mb-5">
//                     <div className="relative mb-6 flex items-start gap-4">
//                         <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
//                             <img
//                                 src={patternBg}
//                                 alt=""
//                                 className="max-w-none"
//                                 style={{
//                                     transform: 'scale(1.1)',
//                                     opacity: 0.7,
//                                 }}
//                             />
//                         </div>
//                         <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
//                             <Plus className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
//                         </div>
//                     </div>
//                     <h2 className="text-base font-semibold text-gray-900">
//                         Add Item Variant
//                     </h2>
//                 </div>

//                 {/* ── Form ───────────────────────────────────────────── */}
//                 <div className="space-y-4 rounded-xl border border-borderColor px-4 py-6 shadow-sm">
//                     {/* Row 1 — Variant Name + Display Sequence */}
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                 Variant Name
//                                 <span className="text-primary">*</span>
//                             </Label>
//                             <Input
//                                 placeholder='e.g. "Large Size"'
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                 Display Sequence (Optional)
//                             </Label>
//                             <Input
//                                 placeholder='e.g. "1"'
//                                 value={sequence}
//                                 onChange={(e) => setSequence(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     {/* Row 2 — Selling Price + Tax */}
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                 Selling Price
//                                 <span className="text-primary">*</span>
//                             </Label>
//                             <div className="relative">
//                                 <Input
//                                     placeholder="0.000"
//                                     className="pr-12"
//                                     value={sellingPrice}
//                                     onChange={(e) =>
//                                         setSellingPrice(e.target.value)
//                                     }
//                                 />
//                                 <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
//                                     KWD
//                                 </span>
//                             </div>
//                         </div>
//                         <div>
//                             <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                 Tax %<span className="text-primary">*</span>
//                             </Label>
//                             <CustomDropdown
//                                 label=""
//                                 options={taxOptions}
//                                 value={tax}
//                                 onChange={setTax}
//                                 placeholder="Inherit from Base Item"
//                             />
//                             <p className="mt-1 text-xs text-gray-400">
//                                 Tax for this variant will update when selected.
//                             </p>
//                         </div>
//                     </div>

//                     {/* ── Linked Inventory Card ───────────────────────── */}
//                     {matchedItem && (
//                         <div className="space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
//                             {/* Linked label */}
//                             <div className="flex items-center gap-2">
//                                 <CheckCircleIcon />
//                                 <span className="text-sm font-semibold text-gray-800">
//                                     Linked to: {matchedItem.name}
//                                 </span>
//                             </div>

//                             {/* Unlink button */}
//                             <div>
//                                 <button
//                                     type="button"
//                                     onClick={onUnlink}
//                                     className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                                 >
//                                     <LinkIcon />
//                                     Unlink / Change
//                                 </button>
//                                 <p className="mt-1.5 text-xs text-gray-400">
//                                     Use this only if this variant is a totally
//                                     different item
//                                 </p>
//                             </div>

//                             {/* Consumption Rule */}
//                             <div>
//                                 <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Consumption Rule
//                                 </Label>
//                                 <div className="flex items-center gap-2">
//                                     <Input
//                                         className="w-28 text-center"
//                                         value={consumptionQty}
//                                         onChange={(e) =>
//                                             setConsumptionQty(e.target.value)
//                                         }
//                                         placeholder="1.000"
//                                     />
//                                     <span className="text-sm text-gray-500">
//                                         x Serving
//                                     </span>
//                                 </div>
//                                 <p className="mt-1 text-xs text-gray-400">
//                                     Enter 1.0 for standard, 0.5 for small, etc.
//                                 </p>
//                             </div>

//                             {/* Cost Display */}
//                             <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-3">
//                                 <div>
//                                     <p className="text-sm text-gray-500">
//                                         Base Cost
//                                     </p>
//                                     <p className="font-semibold text-gray-900">
//                                         {baseCost.toFixed(3)} KWD
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-gray-500">
//                                         Variant Unit Cost
//                                     </p>
//                                     <p className="font-semibold text-gray-900">
//                                         {variantUnitCost} KWD
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* ── Footer ─────────────────────────────────────────────── */}
//             <div className="flex justify-between gap-4 border-t border-borderColor px-8 py-6">
//                 <div className="w-1/2">
//                     <IconButton className="w-full" onClick={onClose}>
//                         Cancel
//                     </IconButton>
//                 </div>
//                 <div className="w-1/2">
//                     <Button
//                         className="w-full"
//                         onClick={handleConfirm}
//                         disabled={!name || !sellingPrice}
//                     >
//                         Save Variant
//                     </Button>
//                 </div>
//             </div>
//         </Modal>
//     );
// }

import patternBg from '@/shared/images/icons/patternBg.svg';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import { Plus } from 'lucide-react';
import { useState } from 'react';

// ── Mock inventory items ───────────────────────────────────────────────────
const INVENTORY_ITEMS = [
    { id: 1, name: 'Spicy Ramen - (Master Recipe)', cost: 1.5 },
    { id: 2, name: 'Burger Recipe', cost: 2.25 },
    { id: 3, name: 'Coke Can', cost: 0.35 },
    { id: 4, name: 'Chicken Wrap Recipe', cost: 1.8 },
    { id: 5, name: 'Caesar Salad Recipe', cost: 1.2 },
];

// ── Icons ──────────────────────────────────────────────────────────────────
const LinkIcon = () => (
    <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
    </svg>
);

const CheckCircleIcon = () => (
    <svg
        className="h-5 w-5 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

const SearchIcon = () => (
    <svg
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>
);

// ── Types ──────────────────────────────────────────────────────────────────
interface MatchedItem {
    id: number;
    name: string;
    cost: number;
}

interface AddVariantStockProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: any) => void;
    matchedItem: MatchedItem | null;
}

// ── Component ──────────────────────────────────────────────────────────────
export default function AddVariantStock({
    isOpen,
    onClose,
    onConfirm,
    matchedItem,
}: AddVariantStockProps) {
    // ── Form state ─────────────────────────────────────────────────────────
    const [name, setName] = useState('');
    const [sequence, setSequence] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [tax, setTax] = useState('inherit');
    const [consumptionQty, setConsumptionQty] = useState('1.000');

    // ── Inventory link state ───────────────────────────────────────────────
    const [localMatchedItem, setLocalMatchedItem] =
        useState<MatchedItem | null>(matchedItem);
    const [isUnlinked, setIsUnlinked] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    // ── Calculations ───────────────────────────────────────────────────────
    const baseCost = localMatchedItem?.cost ?? 0;
    const variantUnitCost = (
        baseCost * (parseFloat(consumptionQty) || 0)
    ).toFixed(3);

    // ── Search filter ──────────────────────────────────────────────────────
    const filteredItems = searchQuery.trim()
        ? INVENTORY_ITEMS.filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : [];

    // ── Tax options ────────────────────────────────────────────────────────
    const taxOptions = [
        { label: 'Inherit from Base Item', value: 'inherit' },
        { label: 'VAT (5%)', value: 'vat_5' },
        { label: 'Excise Tax (50%)', value: 'excise_50' },
        { label: 'No Tax', value: 'none' },
    ];

    // ── Handlers ──────────────────────────────────────────────────────────
    const handleConfirm = () => {
        onConfirm({
            name,
            sequence,
            sellingPrice,
            tax,
            consumptionQty,
            unitCost: variantUnitCost,
            inventoryRule: `${consumptionQty} x Serving`,
        });
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setSequence('');
        setSellingPrice('');
        setTax('inherit');
        setConsumptionQty('1.000');
        setLocalMatchedItem(matchedItem);
        setIsUnlinked(false);
        setSearchQuery('');
        setShowDropdown(false);
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ──────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="relative mb-6 flex items-start gap-4">
                        <div className="pointer-events-none absolute inset-0 top-22 left-[-20px] flex items-center">
                            <img
                                src={patternBg}
                                alt=""
                                className="max-w-none"
                                style={{
                                    transform: 'scale(1.1)',
                                    opacity: 0.7,
                                }}
                            />
                        </div>
                        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                            <Plus className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 shadow-sm" />
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add Item Variant
                    </h2>
                </div>

                {/* ── Form ────────────────────────────────────────────── */}
                <div className="space-y-4 rounded-xl border border-borderColor px-4 py-6 shadow-sm">
                    {/* Row 1 — Variant Name + Display Sequence */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Variant Name
                                <span className="text-primary">*</span>
                            </Label>
                            <Input
                                placeholder='e.g. "Large Size"'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Display Sequence (Optional)
                            </Label>
                            <Input
                                placeholder='e.g. "1"'
                                value={sequence}
                                onChange={(e) => setSequence(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Row 2 — Selling Price + Tax */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Selling Price
                                <span className="text-primary">*</span>
                            </Label>
                            <div className="relative">
                                <Input
                                    placeholder="0.000"
                                    className="pr-12"
                                    value={sellingPrice}
                                    onChange={(e) =>
                                        setSellingPrice(e.target.value)
                                    }
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    KWD
                                </span>
                            </div>
                        </div>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Tax %<span className="text-primary">*</span>
                            </Label>
                            <CustomDropdown
                                label=""
                                options={taxOptions}
                                value={tax}
                                onChange={setTax}
                                placeholder="Inherit from Base Item"
                            />
                            <p className="mt-1 text-xs text-gray-400">
                                Tax for this variant will update when selected.
                            </p>
                        </div>
                    </div>

                    {/* ── Inventory Section ────────────────────────────── */}
                    {isUnlinked ? (
                        // SEARCH STATE — shown after clicking Unlink / Change
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-700">
                                Link to Inventory Source
                            </Label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                    <SearchIcon />
                                </div>
                                <Input
                                    placeholder='e.g., "Spicy Ramen Base" or "Cheese Slice"'
                                    className="pl-9"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setShowDropdown(true);
                                    }}
                                    onFocus={() => {
                                        if (searchQuery.trim())
                                            setShowDropdown(true);
                                    }}
                                />
                                {/* Dropdown results */}
                                {showDropdown && filteredItems.length > 0 && (
                                    <ul className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                                        {filteredItems.map((item) => (
                                            <li
                                                key={item.id}
                                                className="flex cursor-pointer items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                                                onMouseDown={() => {
                                                    setLocalMatchedItem(item);
                                                    setSearchQuery(item.name);
                                                    setShowDropdown(false);
                                                    setIsUnlinked(false);
                                                }}
                                            >
                                                <span>{item.name}</span>
                                                <span className="text-xs text-gray-400">
                                                    {item.cost.toFixed(3)} KWD
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {/* No results */}
                                {showDropdown &&
                                    searchQuery.trim() &&
                                    filteredItems.length === 0 && (
                                        <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-400 shadow-lg">
                                            No matching inventory found.
                                        </div>
                                    )}
                            </div>
                        </div>
                    ) : localMatchedItem ? (
                        // LINKED STATE — shown when item is linked
                        <div className="space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
                            {/* Linked label */}
                            <div className="flex items-center gap-2">
                                <CheckCircleIcon />
                                <span className="text-sm font-semibold text-gray-800">
                                    Linked to: {localMatchedItem.name}
                                </span>
                            </div>

                            {/* Unlink button */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsUnlinked(true);
                                        setSearchQuery('');
                                        setShowDropdown(false);
                                    }}
                                    className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    <LinkIcon />
                                    Unlink / Change
                                </button>
                                <p className="mt-1.5 text-xs text-gray-400">
                                    Use this only if this variant is a totally
                                    different item
                                </p>
                            </div>

                            {/* Consumption Rule */}
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Consumption Rule
                                </Label>
                                <div className="flex items-center gap-2">
                                    <Input
                                        className="w-28 text-center"
                                        value={consumptionQty}
                                        onChange={(e) =>
                                            setConsumptionQty(e.target.value)
                                        }
                                        placeholder="1.000"
                                    />
                                    <span className="text-sm text-gray-500">
                                        x Serving
                                    </span>
                                </div>
                                <p className="mt-1 text-xs text-gray-400">
                                    Enter 1.0 for standard, 0.5 for small, etc.
                                </p>
                            </div>

                            {/* Cost Display */}
                            <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-3">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Base Cost
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {baseCost.toFixed(3)} KWD
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Variant Unit Cost
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {variantUnitCost} KWD
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex justify-between gap-4 border-t border-borderColor px-8 py-6">
                <div className="w-1/2">
                    <IconButton className="w-full" onClick={handleClose}>
                        Cancel
                    </IconButton>
                </div>
                <div className="w-1/2">
                    <Button
                        className="w-full"
                        onClick={handleConfirm}
                        disabled={!name || !sellingPrice}
                    >
                        Save Variant
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
