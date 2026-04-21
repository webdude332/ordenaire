// import patternBg from '@/shared/images/icons/patternBg.svg';
// import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
// import Modal from '@/shared/sharedcomponents/modals/Modal';
// import Button from '@/shared/sharedcomponents/ui/Button';
// import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
// import IconButton from '@/shared/sharedcomponents/ui/IconButton';

// import { useEffect, useState } from 'react';

// interface OptionData {
//     id?: string;
//     name: string;
//     displaySequence: string;
//     additionalPrice: string;
//     estimatedCost: string;
// }

// interface EditOptionProps {
//     isOpen: boolean;
//     onClose: () => void;
//     onConfirm: (data: OptionData) => void;
//     parentGroupName: string;
//     initialData?: OptionData | null;
// }

// export default function EditOption({
//     isOpen,
//     onClose,
//     onConfirm,
//     parentGroupName,
//     initialData,
// }: EditOptionProps) {
//     const [optionName, setOptionName] = useState('');
//     const [displaySequence, setDisplaySequence] = useState('');
//     const [additionalPrice, setAdditionalPrice] = useState('');
//     const [estimatedCost, setEstimatedCost] = useState('');

//     useEffect(() => {
//         if (isOpen && initialData) {
//             setOptionName(initialData.name || '');
//             setDisplaySequence(initialData.displaySequence || '');
//             setAdditionalPrice(initialData.additionalPrice || '');
//             setEstimatedCost(initialData.estimatedCost || '');
//         }
//     }, [isOpen, initialData]);

//     const handleSave = () => {
//         onConfirm({
//             id: initialData?.id,
//             name: optionName,
//             displaySequence,
//             additionalPrice,
//             estimatedCost,
//         });
//     };

//     return (
//         <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
//             <div className="p-6 sm:p-8">
//                 {/* Header Section */}
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
//                         <div>
//                             <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
//                                 <PencilIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 text-gray-700 shadow-sm" />
//                             </div>
//                         </div>
//                     </div>
//                     <h2 className="text-base font-semibold text-gray-900">
//                         Edit Option
//                     </h2>
//                     <p className="mt-1 text-sm text-gray-500">
//                         Editing option in group:{' '}
//                         <span className="font-semibold text-gray-900">
//                             "{parentGroupName}"
//                         </span>
//                     </p>
//                 </div>

//                 {/* Main Content Box */}
//                 <div className="rounded-xl border border-borderColor bg-white px-4 py-6 shadow-sm">
//                     <div className="space-y-6">
//                         {/* Row 1 */}
//                         <div className="grid grid-cols-2 gap-6">
//                             <div>
//                                 <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Option Name{' '}
//                                     <span className="text-primary">*</span>
//                                 </Label>
//                                 <Input
//                                     value={optionName}
//                                     onChange={(e) =>
//                                         setOptionName(e.target.value)
//                                     }
//                                     placeholder=""
//                                 />
//                             </div>
//                             <div>
//                                 <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Display Sequence (Optional)
//                                 </Label>
//                                 <Input
//                                     value={displaySequence}
//                                     onChange={(e) =>
//                                         setDisplaySequence(e.target.value)
//                                     }
//                                     placeholder=""
//                                 />
//                             </div>
//                         </div>

//                         {/* Row 2 */}
//                         <div className="grid grid-cols-2 gap-6">
//                             <div>
//                                 <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Additional Price{' '}
//                                     <span className="text-primary">*</span>
//                                 </Label>
//                                 <div className="relative">
//                                     <Input
//                                         className="pr-12"
//                                         value={additionalPrice}
//                                         onChange={(e) =>
//                                             setAdditionalPrice(e.target.value)
//                                         }
//                                         placeholder=""
//                                     />
//                                     <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
//                                         KWD
//                                     </span>
//                                 </div>
//                             </div>
//                             <div>
//                                 <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Estimated Cost (Optional)
//                                 </Label>
//                                 <div className="relative">
//                                     <Input
//                                         className="pr-12"
//                                         value={estimatedCost}
//                                         onChange={(e) =>
//                                             setEstimatedCost(e.target.value)
//                                         }
//                                         placeholder=""
//                                     />
//                                     <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
//                                         KWD
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <div className="flex justify-between gap-4 border-t border-borderColor px-8 py-6">
//                 <div className="w-1/2">
//                     <IconButton className="w-full" onClick={onClose}>
//                         Cancel
//                     </IconButton>
//                 </div>
//                 <div className="w-1/2">
//                     <Button
//                         className="w-full bg-[#7AB621] hover:bg-[#6aa31d]"
//                         onClick={handleSave}
//                     >
//                         Save Changes
//                     </Button>
//                 </div>
//             </div>
//         </Modal>
//     );
// }

//new on off

import patternBg from '@/shared/images/icons/patternBg.svg';
import PencilIcon from '@/shared/images/icons/pencilIcon.svg?react';
import Modal from '@/shared/sharedcomponents/modals/Modal';
import Button from '@/shared/sharedcomponents/ui/Button';
import CustomDropdown from '@/shared/sharedcomponents/ui/CustomDropdown';
import { Input, Label } from '@/shared/sharedcomponents/ui/FormElements';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import RadioGroup from '@/shared/sharedcomponents/ui/RadioGroup';
import { useEffect, useState } from 'react';

// ── Mock inventory items ───────────────────────────────────────────────────
const INVENTORY_ITEMS = [
    { id: 1, name: 'Cheese Slice', cost: 0.02, stock: 140 },
    { id: 2, name: 'Bacon Strip', cost: 0.05, stock: 80 },
    { id: 3, name: 'Spicy Ramen - (Master Recipe)', cost: 1.5, stock: 42 },
    { id: 4, name: 'Burger Recipe', cost: 2.25, stock: 30 },
    { id: 5, name: 'Coke Can', cost: 0.35, stock: 200 },
];

// ── Icons ──────────────────────────────────────────────────────────────────
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
interface OptionData {
    id?: string;
    name: string;
    displaySequence: string;
    additionalPrice: string;
    estimatedCost: string;
    tax?: string;
    optionTrackStock?: boolean;
    linkedInventoryItem?: any;
    consumptionQty?: string;
    unitCost?: string;
    inventoryRule?: string;
}

interface EditOptionProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: OptionData) => void;
    parentGroupName: string;
    initialData?: OptionData | null;
    trackStock?: boolean; // ← global track stock from parent
}

// ── Component ──────────────────────────────────────────────────────────────
export default function EditOption({
    isOpen,
    onClose,
    onConfirm,
    parentGroupName,
    initialData,
    trackStock = false,
}: EditOptionProps) {
    // ── Form state ─────────────────────────────────────────────────────────
    const [optionName, setOptionName] = useState('');
    const [displaySequence, setDisplaySequence] = useState('');
    const [additionalPrice, setAdditionalPrice] = useState('');
    const [estimatedCost, setEstimatedCost] = useState('');
    const [tax, setTax] = useState('inherit');

    // ── Per-option track stock state ───────────────────────────────────────
    const [optionTrackStock, setOptionTrackStock] = useState(false);
    const [linkedItem, setLinkedItem] = useState<
        (typeof INVENTORY_ITEMS)[0] | null
    >(null);
    const [consumptionQty, setConsumptionQty] = useState('1.000');
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    // ── Pre-fill from initialData ──────────────────────────────────────────
    useEffect(() => {
        if (isOpen && initialData) {
            setOptionName(initialData.name || '');
            setDisplaySequence(initialData.displaySequence || '');
            setAdditionalPrice(initialData.additionalPrice || '');
            setEstimatedCost(initialData.estimatedCost || '');
            setTax(initialData.tax || 'inherit');
            setOptionTrackStock(initialData.optionTrackStock || false);
            setLinkedItem(initialData.linkedInventoryItem || null);
            setConsumptionQty(initialData.consumptionQty || '1.000');
        }
    }, [isOpen, initialData]);

    // ── Calculations ───────────────────────────────────────────────────────
    const unitCost = linkedItem
        ? (linkedItem.cost * (parseFloat(consumptionQty) || 0)).toFixed(3)
        : '0.000';

    const filteredItems = searchQuery.trim()
        ? INVENTORY_ITEMS.filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : [];

    const taxOptions = [
        { label: 'Inherit from Base Item', value: 'inherit' },
        { label: 'VAT (5%)', value: 'vat_5' },
        { label: 'Excise Tax (50%)', value: 'excise_50' },
        { label: 'No Tax', value: 'none' },
    ];

    // ── Handlers ──────────────────────────────────────────────────────────
    const handleTrackStockToggle = (val: string) => {
        const isOn = val === 'on';
        setOptionTrackStock(isOn);
        if (!isOn) {
            setLinkedItem(null);
            setSearchQuery('');
            setShowDropdown(false);
            setConsumptionQty('1.000');
        }
    };

    const handleSave = () => {
        onConfirm({
            id: initialData?.id,
            name: optionName,
            displaySequence,
            additionalPrice,
            estimatedCost,
            tax,
            optionTrackStock,
            linkedInventoryItem: linkedItem,
            consumptionQty,
            unitCost,
            inventoryRule: linkedItem
                ? `${consumptionQty} x ${linkedItem.name.split(' ')[0]}`
                : 'N/A',
        });
    };

    const handleClose = () => {
        setSearchQuery('');
        setShowDropdown(false);
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
                            <PencilIcon className="h-12 w-12 rounded-lg border-2 border-gray-200 bg-white p-3 text-gray-700 shadow-sm" />
                        </div>
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Edit Option
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Editing option in group:{' '}
                        <span className="font-semibold text-gray-900">
                            "{parentGroupName}"
                        </span>
                    </p>
                </div>

                {/* ── Form ────────────────────────────────────────────── */}
                <div className="space-y-6 rounded-xl border border-borderColor bg-white px-4 py-6 shadow-sm">
                    {/* Row 1 — Option Name + Display Sequence */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Option Name{' '}
                                <span className="text-primary">*</span>
                            </Label>
                            <Input
                                value={optionName}
                                onChange={(e) => setOptionName(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Display Sequence (Optional)
                            </Label>
                            <Input
                                value={displaySequence}
                                onChange={(e) =>
                                    setDisplaySequence(e.target.value)
                                }
                                placeholder=""
                            />
                        </div>
                    </div>

                    {/* Row 2 — Additional Price + Tax or Estimated Cost */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Additional Price{' '}
                                <span className="text-primary">*</span>
                            </Label>
                            <div className="relative">
                                <Input
                                    className="pr-12"
                                    value={additionalPrice}
                                    onChange={(e) =>
                                        setAdditionalPrice(e.target.value)
                                    }
                                    placeholder=""
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    KWD
                                </span>
                            </div>
                        </div>
                        {trackStock ? (
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Tax %{' '}
                                    <span className="text-primary">*</span>
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={taxOptions}
                                    value={tax}
                                    onChange={setTax}
                                    placeholder="Inherit from Base Item"
                                />
                                <p className="mt-1 text-xs text-gray-400">
                                    Important for items with different tax rates
                                    (e.g., Alcohol vs Soda).
                                </p>
                            </div>
                        ) : (
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Estimated Cost (Optional)
                                </Label>
                                <div className="relative">
                                    <Input
                                        className="pr-12"
                                        value={estimatedCost}
                                        onChange={(e) =>
                                            setEstimatedCost(e.target.value)
                                        }
                                        placeholder=""
                                    />
                                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                        KWD
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ── Track Stock Section ──────────────────────────── */}
                    {trackStock && (
                        <div className="grid grid-cols-2 gap-6">
                            {/* Left — Track Stock toggle */}
                            <div>
                                <Label className="mb-2 text-sm font-medium text-gray-700">
                                    Track Stock?
                                </Label>
                                <RadioGroup
                                    name="edit_option_track_stock"
                                    label=""
                                    value={optionTrackStock ? 'on' : 'off'}
                                    onChange={handleTrackStockToggle}
                                    options={[
                                        { value: 'off', label: 'OFF' },
                                        { value: 'on', label: 'ON' },
                                    ]}
                                    gap="gap-6"
                                />
                            </div>

                            {/* Right — Link to Inventory Source */}
                            {optionTrackStock && (
                                <div>
                                    <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                        Link to Inventory Source
                                    </Label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                            <SearchIcon />
                                        </div>
                                        <Input
                                            placeholder='e.g., Search for "Cheese Slice" or "Bacon"'
                                            className="pl-9"
                                            value={
                                                linkedItem
                                                    ? `${linkedItem.name} (Stock: ${linkedItem.stock})`
                                                    : searchQuery
                                            }
                                            onChange={(e) => {
                                                setSearchQuery(e.target.value);
                                                setLinkedItem(null);
                                                setShowDropdown(true);
                                            }}
                                            onFocus={() => {
                                                if (
                                                    !linkedItem &&
                                                    searchQuery.trim()
                                                )
                                                    setShowDropdown(true);
                                            }}
                                        />
                                        {showDropdown &&
                                            filteredItems.length > 0 && (
                                                <ul className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                                                    {filteredItems.map(
                                                        (item) => (
                                                            <li
                                                                key={item.id}
                                                                className="flex cursor-pointer items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                                                                onMouseDown={() => {
                                                                    setLinkedItem(
                                                                        item,
                                                                    );
                                                                    setSearchQuery(
                                                                        '',
                                                                    );
                                                                    setShowDropdown(
                                                                        false,
                                                                    );
                                                                }}
                                                            >
                                                                <span>
                                                                    {item.name}
                                                                </span>
                                                                <span className="text-xs text-gray-400">
                                                                    Stock:{' '}
                                                                    {item.stock}
                                                                </span>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            )}
                                        {showDropdown &&
                                            searchQuery.trim() &&
                                            filteredItems.length === 0 && (
                                                <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-400 shadow-lg">
                                                    No matching inventory found.
                                                </div>
                                            )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* ── Consumption Rule + Unit Cost ─────────────────── */}
                    {trackStock && optionTrackStock && linkedItem && (
                        <>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Consumption Rule
                                </Label>
                                <div className="flex items-center gap-2">
                                    <Input
                                        className="w-32 text-center"
                                        value={consumptionQty}
                                        onChange={(e) =>
                                            setConsumptionQty(e.target.value)
                                        }
                                        placeholder="1.000"
                                    />
                                    <span className="text-sm text-gray-500">
                                        x {linkedItem.name.split(' ')[0]}
                                    </span>
                                </div>
                                <p className="mt-1 text-xs text-gray-400">
                                    Enter 1.0 for standard, 0.5 for small, etc.
                                </p>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                                <p className="text-sm text-gray-500">
                                    Unit Cost
                                </p>
                                <p className="font-semibold text-gray-900">
                                    {unitCost} KWD
                                </p>
                            </div>
                        </>
                    )}
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
                    <Button className="w-full" onClick={handleSave}>
                        Save Changes
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
