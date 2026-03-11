import Modal from '@/components/Modal';
import CustomDropdown from '@/components/ui/CustomDropdown';
import { Checkbox, Input, Label } from '@/components/ui/FormElements';
import { Calendar, Pencil } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface IncidentItem {
    id: number;
    dateTime: string;
    severity: 'Critical' | 'Major' | 'Minor';
    incident: string;
    status: 'Investigating' | 'Identified' | 'Monitoring' | 'Resolved';
    duration: string;
    affectedPlatform: string;
}

interface EditIncidentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: IncidentFormData) => void;
    incident: IncidentItem | null;
}

interface IncidentFormData {
    title: string;
    severity: string;
    affectedPlatform: string;
    currentStatus: string;
    incidentTime: string;
    displayOnLoginScreen: boolean;
}

// ─── Options ──────────────────────────────────────────────────────────────────

const PLATFORM_OPTIONS = [
    { label: 'Merchant Portal (Web)', value: 'merchant_portal' },
    { label: 'WhatsApp Marketing', value: 'whatsapp_marketing' },
    { label: 'POS App (iPad)', value: 'pos_app_ipad' },
    { label: 'KDS System', value: 'kds_system' },
    { label: 'Consumer Ordering App', value: 'consumer_ordering_app' },
    { label: 'Kiosk Machine', value: 'kiosk_machine' },
];

const SEVERITY_OPTIONS = [
    { label: 'Critical', value: 'critical' },
    { label: 'Major', value: 'major' },
    { label: 'Minor', value: 'minor' },
];

const STATUS_OPTIONS = [
    { label: '🟠 Investigating', value: 'investigating' },
    { label: '🔵 Identified', value: 'identified' },
    { label: '🔵 Monitoring', value: 'monitoring' },
    { label: '🟢 Resolved', value: 'resolved' },
];

const severityToValue = (s: IncidentItem['severity']) => s.toLowerCase();
const statusToValue = (s: IncidentItem['status']) => s.toLowerCase();

// ─── Component ────────────────────────────────────────────────────────────────

export default function EditIncidentModal({
    isOpen,
    onClose,
    onConfirm,
    incident,
}: EditIncidentModalProps) {
    const [title, setTitle] = useState('');
    const [severity, setSeverity] = useState('critical');
    const [affectedPlatform, setAffectedPlatform] = useState('pos_app_ipad');
    const [currentStatus, setCurrentStatus] = useState('monitoring');
    const [incidentTime, setIncidentTime] = useState('Sep 15, 2025 – 10:00 PM');
    const [displayOnLoginScreen, setDisplayOnLoginScreen] = useState(false);

    useEffect(() => {
        if (incident) {
            setTitle(incident.incident);
            setSeverity(severityToValue(incident.severity));
            setAffectedPlatform(incident.affectedPlatform || 'pos_app_ipad');
            setCurrentStatus(statusToValue(incident.status));
            setIncidentTime(incident.dateTime);
        }
    }, [incident]);

    const handleSubmit = () => {
        onConfirm({
            title,
            severity,
            affectedPlatform,
            currentStatus,
            incidentTime,
            displayOnLoginScreen,
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl">
            <div className="p-6 sm:p-8">
                {/* ── Header ──────────────────────────────────────────── */}
                <div className="mb-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gray-200 bg-white">
                        <Pencil className="h-4 w-4 text-gray-700" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                        Edit Incident Details
                    </h2>
                </div>

                <div className="space-y-4">
                    {/* ── Incident Details ─────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Incident Details
                        </h3>

                        {/* Title + Severity */}
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Title
                                </Label>
                                <Input
                                    placeholder='e.g., "WhatsApp OTP Failure"'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Severity
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={SEVERITY_OPTIONS}
                                    value={severity}
                                    onChange={setSeverity}
                                    placeholder="Select the Severity"
                                />
                            </div>
                        </div>

                        {/* Affected Platform */}
                        <div className="w-1/2">
                            <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                Affected Platform
                            </Label>
                            <CustomDropdown
                                label=""
                                options={PLATFORM_OPTIONS}
                                value={affectedPlatform}
                                onChange={setAffectedPlatform}
                                placeholder="Platforms affected"
                            />
                        </div>
                    </div>

                    {/* ── Status & Time ────────────────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-900">
                            Status & Time
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Current Status
                                </Label>
                                <CustomDropdown
                                    label=""
                                    options={STATUS_OPTIONS}
                                    value={currentStatus}
                                    onChange={setCurrentStatus}
                                    placeholder="Select the Current Status"
                                />
                            </div>
                            <div>
                                <Label className="mb-1.5 text-sm font-medium text-gray-700">
                                    Incident Time
                                </Label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                    </span>
                                    <input
                                        type="text"
                                        value={incidentTime}
                                        onChange={(e) =>
                                            setIncidentTime(e.target.value)
                                        }
                                        className="w-full rounded-lg border border-gray-300 py-2.5 pr-3 pl-9 text-sm text-gray-900 placeholder-gray-400 shadow-xs outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Display on Login Screen ──────────────────────── */}
                    <div className="rounded-xl border border-gray-200 p-4">
                        <Checkbox
                            label="Display this alert on the Merchant Login Screen?"
                            checked={displayOnLoginScreen}
                            onChange={(e) =>
                                setDisplayOnLoginScreen(e.target.checked)
                            }
                        />
                    </div>
                </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div className="flex gap-3 border-t border-gray-200 px-6 py-5">
                <IconButton className="w-full" onClick={onClose}>
                    Cancel
                </IconButton>
                <Button className="w-full" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </div>
        </Modal>
    );
}
