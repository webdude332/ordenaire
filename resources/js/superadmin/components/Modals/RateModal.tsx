// import Modal from '@superadmin/components/Modal';
// import CustomDropdown from '@superadmin/components/ui/CustomDropdown';
// import { Input, Label } from '@superadmin/components/ui/FormElements';
// import RadioGroup from '@superadmin/components/ui/RadioGroup';
// import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
// import { CheckCircle2, Info, Plus, Trash2 } from 'lucide-react';
// import { useState } from 'react';
// import Button from '../ui/Button';
// import IconButton from '../ui/IconButton';

// // ─── Types ────────────────────────────────────────────────────────────────────

// export interface RateFormData {
//     activitySku: string;
//     applicablePlan: string;
//     billingCycle: string;
//     baseAllowance: string;
//     chargeModel: 'per_unit' | 'flat_fee';
//     rate: string;
//     blockSize: string;
//     status: 'active' | 'archived';
// }

// interface RateModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     onConfirm: (data: RateFormData) => void;
//     mode: 'add' | 'edit';
//     defaultValues?: Partial<RateFormData>;
//     activeSubscribers?: number;
// }

// const ACTIVITY_OPTIONS = [
//     { label: 'Storage', value: 'storage' },
//     { label: 'Active Staff', value: 'active_staff' },
//     { label: 'Menu Items', value: 'menu_items' },
//     { label: 'POS Licenses', value: 'pos_licenses' },
//     { label: 'Kiosk Machines', value: 'kiosk_machines' },
//     { label: 'GenAI Usage', value: 'genai_usage' },
// ];

// const PLAN_OPTIONS = [
//     { label: 'Pro plan', value: 'pro' },
//     { label: 'Standard plan', value: 'standard' },
//     { label: 'Enterprise plan', value: 'enterprise' },
//     { label: 'All Plans', value: 'all' },
// ];

// const CYCLE_OPTIONS = [
//     { label: 'Monthly', value: 'monthly' },
//     { label: 'Quarterly', value: 'quarterly' },
//     { label: 'Yearly', value: 'yearly' },
// ];

// // ─── Shared Rate Form Modal ───────────────────────────────────────────────────

// export default function RateModal({
//     isOpen,
//     onClose,
//     onConfirm,
//     mode,
//     defaultValues,
//     activeSubscribers = 12,
// }: RateModalProps) {
//     const [activitySku, setActivitySku] = useState(
//         defaultValues?.activitySku ?? 'storage',
//     );
//     const [applicablePlan, setApplicablePlan] = useState(
//         defaultValues?.applicablePlan ?? 'pro',
//     );
//     const [billingCycle, setBillingCycle] = useState(
//         defaultValues?.billingCycle ?? 'monthly',
//     );
//     const [baseAllowance, setBaseAllowance] = useState(
//         defaultValues?.baseAllowance ?? '100',
//     );
//     const [chargeModel, setChargeModel] = useState<'per_unit' | 'flat_fee'>(
//         defaultValues?.chargeModel ?? 'per_unit',
//     );
//     const [rate, setRate] = useState(defaultValues?.rate ?? '2.000');
//     const [blockSize, setBlockSize] = useState(
//         defaultValues?.blockSize ?? '50',
//     );
//     const [status, setStatus] = useState<'active' | 'archived'>(
//         defaultValues?.status ?? 'active',
//     );

//     const cycleLabel =
//         CYCLE_OPTIONS.find((c) => c.value === billingCycle)?.label ?? 'Monthly';
//     const summary = `Charge ${rate} KWD ${cycleLabel} for every ${blockSize} extra Items.`;

//     const handleConfirm = () => {
//         onConfirm({
//             activitySku,
//             applicablePlan,
//             billingCycle,
//             baseAllowance,
//             chargeModel,
//             rate,
//             blockSize,
//             status,
//         });
//         onClose();
//     };

//     const isEdit = mode === 'edit';

//     return (
//         <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
//             <div className="p-6 sm:p-8">
//                 {/* ── Header ─────────────────────────────────────────── */}
//                 <div className="mb-5">
//                     <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
//                         {isEdit ? (
//                             <PencilIcon className="h-5 w-5 text-gray-700" />
//                         ) : (
//                             <Plus className="h-5 w-5 text-gray-700" />
//                         )}
//                     </div>
//                     <h2 className="text-base font-semibold text-gray-900">
//                         {isEdit ? 'Edit Rate' : 'Add Charge Rule'}
//                     </h2>
//                 </div>

//                 <div className="space-y-4">
//                     {/* ── Rule Scope ───────────────────────────────────── */}
//                     <div className="rounded-xl border border-gray-200 p-5">
//                         <h3 className="mb-4 text-sm font-semibold text-gray-900">
//                             Rule Scope
//                         </h3>

//                         <div className="mb-4 grid grid-cols-2 gap-4">
//                             <div>
//                                 <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Activity / SKU Name
//                                 </Label>
//                                 <CustomDropdown
//                                     label=""
//                                     options={ACTIVITY_OPTIONS}
//                                     value={activitySku}
//                                     onChange={setActivitySku}
//                                     placeholder="Select activity"
//                                     disabled={true}
//                                 />
//                             </div>
//                             <div>
//                                 <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Applicable Plan
//                                 </Label>
//                                 <CustomDropdown
//                                     label=""
//                                     options={PLAN_OPTIONS}
//                                     value={applicablePlan}
//                                     onChange={setApplicablePlan}
//                                     placeholder="Select plan"
//                                 />
//                             </div>
//                         </div>

//                         <div className="mb-4">
//                             <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                 Billing Cycle (Reset Freq)
//                             </Label>
//                             <CustomDropdown
//                                 label=""
//                                 options={CYCLE_OPTIONS}
//                                 value={billingCycle}
//                                 onChange={setBillingCycle}
//                                 placeholder="Select cycle"
//                             />
//                         </div>

//                         {/* Note banner */}
//                         <div className="flex items-start gap-2.5 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600">
//                             <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
//                             <span>
//                                 <span className="font-semibold">Note:</span>{' '}
//                                 Limits and charges reset based on this cycle.
//                             </span>
//                         </div>
//                     </div>

//                     {/* ── Usage Threshold ──────────────────────────────── */}
//                     <div className="rounded-xl border border-gray-200 p-5">
//                         <h3 className="mb-4 text-sm font-semibold text-gray-900">
//                             Usage Threshold
//                         </h3>
//                         <div>
//                             <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                 Base Allowance (Included in Plan)
//                             </Label>
//                             <div className="relative">
//                                 <Input
//                                     placeholder="100"
//                                     value={baseAllowance}
//                                     onChange={(e) =>
//                                         setBaseAllowance(e.target.value)
//                                     }
//                                     className="pr-12"
//                                 />
//                                 <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
//                                     GB
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ── Overage Pricing ──────────────────────────────── */}
//                     <div className="rounded-xl border border-gray-200 p-5">
//                         <h3 className="mb-4 text-sm font-semibold text-gray-900">
//                             Overage Pricing
//                         </h3>

//                         <div className="mb-4">
//                             <Label className="mb-2 text-sm font-medium text-gray-700">
//                                 Charge Model
//                             </Label>
//                             <RadioGroup
//                                 name={`charge_model_${mode}`}
//                                 value={chargeModel}
//                                 onChange={(val) =>
//                                     setChargeModel(
//                                         val as 'per_unit' | 'flat_fee',
//                                     )
//                                 }
//                                 options={[
//                                     {
//                                         value: 'per_unit',
//                                         label: 'Per Unit (Standard)',
//                                     },
//                                     { value: 'flat_fee', label: 'Flat Fee' },
//                                 ]}
//                                 gap="gap-6"
//                             />
//                         </div>

//                         <div className="mb-4 grid grid-cols-2 gap-4">
//                             <div>
//                                 <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Rate (Price)
//                                 </Label>
//                                 <div className="relative">
//                                     <Input
//                                         placeholder="0.000"
//                                         value={rate}
//                                         onChange={(e) =>
//                                             setRate(e.target.value)
//                                         }
//                                         className="pr-14"
//                                     />
//                                     <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
//                                         KWD
//                                     </span>
//                                 </div>
//                             </div>
//                             <div>
//                                 <Label className="mb-1.5 text-sm font-medium text-gray-700">
//                                     Block Size
//                                 </Label>
//                                 <div className="relative">
//                                     <Input
//                                         placeholder="50"
//                                         value={blockSize}
//                                         onChange={(e) =>
//                                             setBlockSize(e.target.value)
//                                         }
//                                         className="pr-10"
//                                     />
//                                     <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
//                                         GB
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Summary banner */}
//                         <div className="flex items-start gap-2.5 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600">
//                             <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
//                             <span>
//                                 <span className="font-semibold">Summary:</span>{' '}
//                                 {summary}
//                             </span>
//                         </div>
//                     </div>

//                     {/* ── Availability ─────────────────────────────────── */}
//                     <div className="rounded-xl border border-gray-200 p-5">
//                         <h3 className="mb-4 text-sm font-semibold text-gray-900">
//                             Availability
//                         </h3>

//                         <RadioGroup
//                             name={`rate_status_${mode}`}
//                             label="Status"
//                             value={status}
//                             onChange={(val) =>
//                                 setStatus(val as 'active' | 'archived')
//                             }
//                             options={[
//                                 { value: 'active', label: 'Public (Active)' },
//                                 {
//                                     value: 'archived',
//                                     label: 'Hidden (Archived)',
//                                 },
//                             ]}
//                             gap="gap-6"
//                         />

//                         {/* Warning banner — only shown in edit mode */}
//                         {isEdit && (
//                             <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600">
//                                 <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
//                                 <span>
//                                     <span className="font-semibold">
//                                         Warning:
//                                     </span>{' '}
//                                     Changing the Rate will affect{' '}
//                                     {activeSubscribers} active subs on the next
//                                     billing cycle.
//                                 </span>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* ── Footer ─────────────────────────────────────────────── */}
//             {isEdit ? (
//                 <div className="flex items-center justify-between border-t border-gray-200 px-6">
//                     <div
//                         className="cursor-pointer font-medium text-gray-600 hover:text-gray-900"
//                         onClick={onClose}
//                     >
//                         Cancel
//                     </div>
//                     <div className="flex gap-3 py-5">
//                         <IconButton className="w-full" onClick={onClose}>
//                             <Trash2 className="h-4 w-4 text-iconColor" />
//                             Delete
//                         </IconButton>
//                         <Button className="w-full" onClick={handleConfirm}>
//                             Confirm
//                         </Button>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
//                     <IconButton className="w-full" onClick={onClose}>
//                         Cancel
//                     </IconButton>
//                     <Button className="w-full" onClick={handleConfirm}>
//                         Save Rule
//                     </Button>
//                 </div>
//             )}
//         </Modal>
//     );
// }

import Modal from '@/superadmin/components/Modal';
import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import { Input, Label } from '@/superadmin/components/ui/FormElements';
import RadioGroup from '@/superadmin/components/ui/RadioGroup';
import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
import { CheckCircle2, Info, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RateFormData {
    activitySku: string;
    applicablePlan: string;
    billingCycle: string;
    baseAllowance: string;
    chargeModel: 'per_unit' | 'flat_fee';
    rate: string;
    blockSize: string;
    status: 'active' | 'archived';
}

interface RateModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: RateFormData) => void;
    mode: 'add' | 'edit';
    defaultValues?: Partial<RateFormData>;
    activeSubscribers?: number;
}

const ACTIVITY_OPTIONS = [
    { label: 'Storage', value: 'storage' },
    { label: 'Active Staff', value: 'active_staff' },
    { label: 'Menu Items', value: 'menu_items' },
    { label: 'POS Licenses', value: 'pos_licenses' },
    { label: 'Kiosk Machines', value: 'kiosk_machines' },
    { label: 'GenAI Usage', value: 'genai_usage' },
];

const PLAN_OPTIONS = [
    { label: 'Pro plan', value: 'pro' },
    { label: 'Standard plan', value: 'standard' },
    { label: 'Enterprise plan', value: 'enterprise' },
    { label: 'All Plans', value: 'all' },
];

const CYCLE_OPTIONS = [
    { label: 'Monthly', value: 'monthly' },
    { label: 'Quarterly', value: 'quarterly' },
    { label: 'Yearly', value: 'yearly' },
];

const ACTIVITY_UNIT: Record<string, string> = {
    storage: 'GB',
    active_staff: 'Users',
    menu_items: 'Items',
    pos_licenses: 'Devices',
    kiosk_machines: 'Devices',
    genai_usage: 'Req',
};

// ─── Shared Rate Form Modal ───────────────────────────────────────────────────

export default function RateModal({
    isOpen,
    onClose,
    onConfirm,
    mode,
    defaultValues,
    activeSubscribers = 12,
}: RateModalProps) {
    const [activitySku, setActivitySku] = useState(
        defaultValues?.activitySku ?? 'storage',
    );
    const [applicablePlan, setApplicablePlan] = useState(
        defaultValues?.applicablePlan ?? 'pro',
    );
    const [billingCycle, setBillingCycle] = useState(
        defaultValues?.billingCycle ?? 'monthly',
    );
    const [baseAllowance, setBaseAllowance] = useState(
        defaultValues?.baseAllowance ?? '100',
    );
    const [chargeModel, setChargeModel] = useState<'per_unit' | 'flat_fee'>(
        defaultValues?.chargeModel ?? 'per_unit',
    );
    const [rate, setRate] = useState(defaultValues?.rate ?? '2.000');
    const [blockSize, setBlockSize] = useState(
        defaultValues?.blockSize ?? '50',
    );
    const [status, setStatus] = useState<'active' | 'archived'>(
        defaultValues?.status ?? 'active',
    );

    const unit = ACTIVITY_UNIT[activitySku] ?? 'Units';

    const cycleLabel =
        CYCLE_OPTIONS.find((c) => c.value === billingCycle)?.label ?? 'Monthly';
    const summary = `Charge ${rate} KWD ${cycleLabel} for every ${blockSize} extra ${unit}.`;

    const handleConfirm = () => {
        onConfirm({
            activitySku,
            applicablePlan,
            billingCycle,
            baseAllowance,
            chargeModel,
            rate,
            blockSize,
            status,
        });
        onClose();
    };

    const isEdit = mode === 'edit';

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ─────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        {isEdit ? (
                            <PencilIcon className="h-5 w-5 text-gray-700" />
                        ) : (
                            <Plus className="h-5 w-5 text-gray-700" />
                        )}
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        {isEdit ? 'Edit Rate' : 'Add Charge Rule'}
                    </h2>
                </div>

                <div className="space-y-4">
                    {/* ── Rule Scope ───────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Rule Scope
                        </h3>

                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Activity / SKU Name
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={ACTIVITY_OPTIONS}
                                    value={activitySku}
                                    onChange={setActivitySku}
                                    placeholder="Select activity"
                                    disabled={isEdit}
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Applicable Plan
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={PLAN_OPTIONS}
                                    value={applicablePlan}
                                    onChange={setApplicablePlan}
                                    placeholder="Select plan"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Billing Cycle (Reset Freq)
                            </Label>
                            <CustomDropdown
                                label=""
                                options={CYCLE_OPTIONS}
                                value={billingCycle}
                                onChange={setBillingCycle}
                                placeholder="Select cycle"
                            />
                        </div>

                        {/* Note banner */}
                        <div className="flex items-start gap-2.5 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600">
                            <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                            <span>
                                <span className="font-semibold">Note:</span>{' '}
                                Limits and charges reset based on this cycle.
                            </span>
                        </div>
                    </div>

                    {/* ── Usage Threshold ──────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Usage Threshold
                        </h3>
                        <div>
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Base Allowance (Included in Plan)
                            </Label>
                            <div className="relative">
                                <Input
                                    placeholder="100"
                                    value={baseAllowance}
                                    onChange={(e) =>
                                        setBaseAllowance(e.target.value)
                                    }
                                    className="pr-12"
                                />
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                    {unit}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ── Overage Pricing ──────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Overage Pricing
                        </h3>

                        <div className="mb-4">
                            <Label className="mb-2 text-sm font-medium text-gray-700">
                                Charge Model
                            </Label>
                            <RadioGroup
                                name={`charge_model_${mode}`}
                                value={chargeModel}
                                onChange={(val) =>
                                    setChargeModel(
                                        val as 'per_unit' | 'flat_fee',
                                    )
                                }
                                options={[
                                    {
                                        value: 'per_unit',
                                        label: 'Per Unit (Standard)',
                                    },
                                    { value: 'flat_fee', label: 'Flat Fee' },
                                ]}
                                gap="gap-6"
                            />
                        </div>

                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Rate (Price)
                                </Label>
                                <div className="relative">
                                    <Input
                                        placeholder="0.000"
                                        value={rate}
                                        onChange={(e) =>
                                            setRate(e.target.value)
                                        }
                                        className="pr-14"
                                    />
                                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                        KWD
                                    </span>
                                </div>
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Block Size
                                </Label>
                                <div className="relative">
                                    <Input
                                        placeholder="50"
                                        value={blockSize}
                                        onChange={(e) =>
                                            setBlockSize(e.target.value)
                                        }
                                        className="pr-10"
                                    />
                                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
                                        {unit}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Summary banner */}
                        <div className="flex items-start gap-2.5 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                            <span>
                                <span className="font-semibold">Summary:</span>{' '}
                                {summary}
                            </span>
                        </div>
                    </div>

                    {/* ── Availability ─────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Availability
                        </h3>

                        <RadioGroup
                            name={`rate_status_${mode}`}
                            label="Status"
                            value={status}
                            onChange={(val) =>
                                setStatus(val as 'active' | 'archived')
                            }
                            options={[
                                { value: 'active', label: 'Public (Active)' },
                                {
                                    value: 'archived',
                                    label: 'Hidden (Archived)',
                                },
                            ]}
                            gap="gap-6"
                        />

                        {/* Warning banner — only shown in edit mode */}
                        {isEdit && (
                            <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600">
                                <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                                <span>
                                    <span className="font-semibold">
                                        Warning:
                                    </span>{' '}
                                    Changing the Rate will affect{' '}
                                    {activeSubscribers} active subs on the next
                                    billing cycle.
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Footer ─────────────────────────────────────────────── */}
            {isEdit ? (
                <div className="flex items-center justify-between border-t border-gray-200 px-6">
                    <div
                        className="cursor-pointer font-medium text-gray-600 hover:text-gray-900"
                        onClick={onClose}
                    >
                        Cancel
                    </div>
                    <div className="flex gap-3 py-5">
                        <IconButton className="w-full" onClick={onClose}>
                            <Trash2 className="h-4 w-4 text-iconColor" />
                            Delete
                        </IconButton>
                        <Button className="w-full" onClick={handleConfirm}>
                            Confirm
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                    <IconButton className="w-full" onClick={onClose}>
                        Cancel
                    </IconButton>
                    <Button className="w-full" onClick={handleConfirm}>
                        Save Rule
                    </Button>
                </div>
            )}
        </Modal>
    );
}
