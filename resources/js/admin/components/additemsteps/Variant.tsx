import Button from '@/shared/sharedcomponents/ui/Button';
import IconButton from '@/shared/sharedcomponents/ui/IconButton';
import { useState } from 'react';
import AddOnsTab from './AddOnsTab';
import ModifiersTab from './ModifiersTab';
import VariationTab from './VariationTab';

type SubTab = 'variation' | 'modifiers' | 'addons';

interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext: () => void;
    onBack: () => void;
    canNext?: boolean;
}

const Variant = ({
    data,
    update,
    onNext,
    onBack,
    canNext = true,
}: StepProps) => {
    const [activeSubTab, setActiveSubTab] = useState<SubTab>('variation');

    const subTabs: { key: SubTab; label: string }[] = [
        { key: 'variation', label: 'Variation' },
        { key: 'modifiers', label: 'Modifiers' },
        { key: 'addons', label: 'Add-ons' },
    ];

    return (
        <div className="space-y-6 border-t border-gray-200 pt-8">
            {/* Sub-tab Navigation */}
            <div className="flex items-center gap-1 rounded-xl border border-gray-200 bg-gray-100 p-1 shadow-sm">
                {subTabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveSubTab(tab.key)}
                        className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                            activeSubTab === tab.key
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Sub-tab Content */}
            <div>
                {activeSubTab === 'variation' && (
                    <VariationTab data={data} update={update} />
                )}
                {activeSubTab === 'modifiers' && (
                    <ModifiersTab data={data} update={update} />
                )}
                {activeSubTab === 'addons' && (
                    <AddOnsTab data={data} update={update} />
                )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                <IconButton onClick={onBack}>Go Back</IconButton>
                <IconButton onClick={() => console.log('Save as Draft')}>
                    Save as Draft
                </IconButton>
                <Button onClick={onNext} disabled={!canNext}>
                    Continue to Review
                </Button>
            </div>
        </div>
    );
};

export default Variant;
