import Modal from '@/superadmin/components/Modal';
import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import { Input, Label } from '@/superadmin/components/ui/FormElements';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

interface AddCurrencyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: { currency: string; exchangeRate: string }) => void;
}

const CURRENCY_OPTIONS = [
    { label: '🇺🇸 US Dollar (USD)', value: 'usd' },
    { label: '🇦🇪 UAE Dirham (AED)', value: 'aed' },
    { label: '🇸🇦 Saudi Riyal (SAR)', value: 'sar' },
    { label: '🇶🇦 Qatari Riyal (QAR)', value: 'qar' },
    { label: '🇧🇭 Bahraini Dinar (BHD)', value: 'bhd' },
    { label: '🇰🇼 Kuwaiti Dinar (KWD)', value: 'kwd' },
];

const CURRENCY_CODES: Record<string, string> = {
    usd: 'USD',
    aed: 'AED',
    sar: 'SAR',
    qar: 'QAR',
    bhd: 'BHD',
    kwd: 'KWD',
};

export default function AddCurrencyModal({
    isOpen,
    onClose,
    onConfirm,
}: AddCurrencyModalProps) {
    const [currency, setCurrency] = useState('usd');
    const [exchangeRate, setExchangeRate] = useState('3.33');

    const currencyCode = CURRENCY_CODES[currency] ?? 'USD';
    const preview = `1.000 KWD  =  ${parseFloat(exchangeRate || '0').toFixed(3)} ${currencyCode}`;

    const handleConfirm = () => {
        onConfirm({ currency, exchangeRate });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Plus className="h-5 w-5 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Add Currency
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                    {/* Select Currency */}
                    <div className="mb-4">
                        <Label className="mb-1.5 text-sm font-medium text-gray-700">
                            Select Currency
                        </Label>
                        <CustomDropdown
                            label=""
                            options={CURRENCY_OPTIONS}
                            value={currency}
                            onChange={setCurrency}
                            placeholder="Select currency"
                        />
                    </div>

                    {/* Exchange Rate */}
                    <div className="mb-1">
                        <Label className="mb-1.5 text-sm font-medium text-gray-700">
                            Exchange Rate (Multiplier)
                        </Label>
                        <Input
                            placeholder="0.000"
                            value={exchangeRate}
                            onChange={(e) => setExchangeRate(e.target.value)}
                        />
                        <p className="mt-1.5 text-xs text-gray-400">
                            Base: 1.000 KWD
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="my-4 border-t border-gray-200" />

                    {/* Preview Calculation */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-900">
                            Preview Calculation
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                            {preview}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleConfirm}>
                    Add Currency
                </Button>
            </div>
        </Modal>
    );
}
