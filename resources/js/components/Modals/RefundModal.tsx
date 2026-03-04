import Modal from '@/components/Modal';
import Info from '@/images/icons/infoRing.svg?react';
import RefundIcon from '@/images/icons/refund.svg?react';
import { Bold, Image, Italic, Link, Underline } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import CustomDropdown from '../ui/CustomDropdown';
import IconButton from '../ui/IconButton';
import RadioGroup from '../ui/RadioGroup';

interface RefundModalProps {
    isOpen: boolean;
    onClose: () => void;
    subscriber: {
        name: string;
        busId: string;
        location: string;
    };
    invoice: {
        id: string;
        dateTime: string;
        typeOfCharge: string;
        amount: string;
        amountRaw: number;
        currency: string;
    };
    onConfirm: () => void;
}

const REFUND_METHODS = [
    'Original Payment Method',
    // 'Wallet Credit',
    'Bank Transfer',
    'Manual Adjustment',
];

export default function RefundModal({
    isOpen,
    onClose,
    subscriber,
    invoice,
    onConfirm,
}: RefundModalProps) {
    const [refundType, setRefundType] = useState<'full' | 'partial'>('full');
    const [partialAmount, setPartialAmount] = useState('0.000');
    const [method, setMethod] = useState('');
    const [methodDropdownOpen, setMethodDropdownOpen] = useState(false);
    const [note, setNote] = useState('');

    const handleSubmit = () => {
        onConfirm();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6">
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <RefundIcon />
                    </div>
                    <h2 className="text-md font-semibold text-gray-900">
                        Refund: {subscriber.name} · {subscriber.location}
                    </h2>
                </div>
                <div className="mb-3 rounded-xl border border-borderColor p-4">
                    <p className="text-md mb-3 font-semibold text-gray-900">
                        Invoice ID - &nbsp;{invoice.id}
                    </p>

                    {/* Green inner row */}
                    <div className="rounded-xl border border-borderColor bg-[#F8FFEB] px-4 pt-5 pb-7">
                        <div className="grid grid-cols-4 gap-4 text-sm">
                            <div>
                                <p className="mb-1 text-gray-700">
                                    Business Name
                                </p>
                                <p className="flex items-center gap-1 font-medium text-gray-900">
                                    {subscriber.name}{' '}
                                    <span className="inline-block h-1 w-1 rounded-full bg-gray-800"></span>{' '}
                                    {subscriber.busId}
                                </p>
                            </div>
                            <div>
                                <p className="mb-1 text-gray-700">Date/Time</p>
                                <p className="flex items-center gap-1 font-medium text-gray-900">
                                    {invoice.dateTime}
                                </p>
                            </div>
                            <div>
                                <p className="mb-1 text-gray-700">
                                    Type of Charges
                                </p>
                                <p className="font-medium text-gray-900">
                                    {invoice.typeOfCharge}
                                </p>
                            </div>
                            <div>
                                <p className="mb-1 text-gray-700">Amount</p>
                                <p className="font-medium text-gray-900">
                                    {invoice.amount}
                                </p>
                            </div>
                        </div>
                        {/* Green bottom line */}
                        <div className="mt-4 h-px bg-[#8CDD05]" />
                    </div>
                </div>

                {/* ── Apply Refund Card ───────────────────────────────── */}
                <div className="mb-4 rounded-xl border border-gray-200 p-5">
                    <p className="text-md mb-4 font-medium text-gray-900">
                        Apply Refund
                    </p>

                    {/* Partial Refund radio + amount input */}

                    <div className="mb-5 flex flex-col gap-3">
                        <div className="w-full">
                            <RadioGroup
                                name="refundType"
                                value={refundType}
                                onChange={setRefundType}
                                gap="flex-col gap-4"
                                options={[
                                    {
                                        value: 'full',
                                        label: `Full Refund (AED 450.00)`,
                                    },
                                    {
                                        value: 'partial',
                                        label: 'Partial Refund',
                                        suffix: (
                                            <div
                                                className={`flex w-48 items-center overflow-hidden rounded-lg border transition-opacity ${
                                                    refundType === 'partial'
                                                        ? 'border-gray-300 bg-white'
                                                        : 'border-gray-200 bg-gray-50 opacity-60'
                                                }`}
                                            >
                                                <span className="px-3 py-2 text-sm text-gray-400">
                                                    AED
                                                </span>
                                                <input
                                                    type="number"
                                                    value={partialAmount}
                                                    onChange={(e) =>
                                                        setPartialAmount(
                                                            e.target.value,
                                                        )
                                                    }
                                                    disabled={
                                                        refundType !== 'partial'
                                                    }
                                                    min={0}
                                                    max={invoice.amountRaw}
                                                    step={0.001}
                                                    className="w-full bg-transparent py-2 pr-3 text-sm text-gray-700 focus:outline-none disabled:text-gray-400"
                                                    placeholder="0.000"
                                                />
                                            </div>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="mb-5 w-1/2">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            Refund Method
                        </label>
                        <CustomDropdown
                            label="" // Passed as empty string because your component has the label rendering commented out
                            options={REFUND_METHODS.map((m) => ({
                                label: m,
                                value: m,
                            }))}
                            value={method}
                            onChange={setMethod}
                            placeholder="Select Method"
                        />
                    </div>

                    {/* Internal Note */}
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            Internal Note (For Approver)
                        </label>

                        {/* Toolbar */}
                        <div className="flex items-center gap-1 rounded-t-lg border border-b-0 border-gray-300 bg-white px-3 py-2">
                            {[
                                { icon: Bold, title: 'Bold' },
                                { icon: Italic, title: 'Italic' },
                                { icon: Underline, title: 'Underline' },
                            ].map(({ icon: Icon, title }) => (
                                <button
                                    key={title}
                                    type="button"
                                    title={title}
                                    className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <Icon className="h-4 w-4" strokeWidth={2} />
                                </button>
                            ))}
                            <div className="mx-1 h-4 w-px bg-gray-300" />
                            {[
                                { icon: Link, title: 'Link' },
                                { icon: Image, title: 'Image' },
                            ].map(({ icon: Icon, title }) => (
                                <button
                                    key={title}
                                    type="button"
                                    title={title}
                                    className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <Icon
                                        className="h-4 w-4"
                                        strokeWidth={1.8}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Textarea */}
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            rows={4}
                            placeholder="e.g., Approved based on the renewal agreement discussed with the client."
                            className="w-full resize-none rounded-b-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
                        />
                    </div>
                </div>

                {/* ── Approval Notice ─────────────────────────────────── */}
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-5 py-2">
                    <Info className="h-8 w-8" />
                    <span className="text-sm font-medium text-gray-700">
                        Needs approval from Super Admin
                    </span>
                </div>

                {/* ── Footer Buttons ─────────────────────────────────── */}
            </div>
            <div className="flex gap-3 border-t border-borderColor px-6 py-6">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Submit for Approval
                </Button>
            </div>
        </Modal>
    );
}
