import RateModal, { RateFormData } from './RateModal';

interface EditRateModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: RateFormData) => void;
    defaultValues?: Partial<RateFormData>;
    activeSubscribers?: number;
}

export default function EditRateModal({
    isOpen,
    onClose,
    onConfirm,
    defaultValues,
    activeSubscribers,
}: EditRateModalProps) {
    return (
        <RateModal
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={onConfirm}
            mode="edit"
            defaultValues={defaultValues}
            activeSubscribers={activeSubscribers}
        />
    );
}
