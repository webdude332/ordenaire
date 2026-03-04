import RateModal, { RateFormData } from './RateModal';

interface AddNewRateModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: RateFormData) => void;
}

export default function AddNewRateModal({
    isOpen,
    onClose,
    onConfirm,
}: AddNewRateModalProps) {
    return (
        <RateModal
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={onConfirm}
            mode="add"
        />
    );
}
