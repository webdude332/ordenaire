import Badge from '@/superadmin/components/Badge';
import Button from '@/superadmin/components/ui/Button';
import CustomDropdown from '@/superadmin/components/ui/CustomDropdown';
import IconButton from '@/superadmin/components/ui/IconButton';
import ToggleSwitch from '@/superadmin/components/ui/ToggleSwitch';
import Info from '@shared/images/icons/infoRing.svg?react';
import SelectorIcon from '@shared/images/icons/selectorIcon.svg?react';
import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../OuterTable';
import SuccessToast from '../toasts/SuccessToast';

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMEZONE_OPTIONS = [
    { label: '(GMT+04:00) Dubai, Abu Dhabi', value: 'gmt+4' },
    { label: '(GMT+03:00) Riyadh', value: 'gmt+3' },
    { label: '(GMT+03:00) Kuwait', value: 'gmt+3k' },
    { label: '(GMT+00:00) UTC', value: 'utc' },
];

interface Session {
    id: number;
    device: string;
    browser: string;
    location: string;
    ip: string;
    status: string;
    isCurrent: boolean;
}

const SESSIONS: Session[] = [
    {
        id: 1,
        device: 'MacBook Pro',
        browser: 'Chrome • Current Session',
        location: 'Singapore',
        ip: '192.168.1.3',
        status: 'Now',
        isCurrent: true,
    },
    {
        id: 2,
        device: 'Windows PC',
        browser: 'Edge',
        location: 'Kuala Lumpur',
        ip: '192.168.1.3',
        status: '2 days ago',
        isCurrent: false,
    },
];

// ─── Row layout ───────────────────────────────────────────────────────────────

function SectionRow({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex gap-10 border-b border-gray-100 pb-8">
            <div className="w-56 flex-shrink-0 pt-1">
                <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
            </div>
            <div className="flex-1">{children}</div>
        </div>
    );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SecurityTab() {
    const [phone, setPhone] = useState('+971 50 123 4567');
    const [timezone, setTimezone] = useState('gmt+4');
    const [twoFA, setTwoFA] = useState(true);
    const [alertTicket, setAlertTicket] = useState(true);
    const [alertUrgent, setAlertUrgent] = useState(true);
    const [showToast, setShowToast] = useState(false);

    return (
        <div className="space-y-8">
            {/* ── Regional & Contact Info ───────────────────────────── */}
            <SectionRow title="Regional & Contact Info">
                <div className="rounded-xl border border-gray-200 p-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                Number
                            </label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16]"
                            />
                        </div>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                Time Zone
                            </label>
                            <CustomDropdown
                                label=""
                                options={TIMEZONE_OPTIONS}
                                value={timezone}
                                onChange={setTimezone}
                                placeholder="Select timezone"
                            />
                        </div>
                    </div>
                </div>
            </SectionRow>

            {/* ── Two-factor Authentication ─────────────────────────── */}
            <SectionRow title="Two-factor Authentication (2FA)">
                <div className="space-y-4 rounded-xl border border-gray-200 p-5">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-900">
                                Two-Factor Authentication (2FA)
                            </span>
                            <ToggleSwitch
                                checked={twoFA}
                                onChange={(e) => setTwoFA(e.target.checked)}
                                statusLabel="ON"
                            />
                        </div>
                        <p className="mt-1.5 text-sm text-gray-400">
                            When enabled, a 6-digit verification code will be
                            sent to your registered email every time you log in
                            from a new device.
                        </p>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-lg border border-gray-200 px-4 py-3">
                        <Info className="mt-0.5 h-8 w-8 flex-shrink-0 text-gray-400" />
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Note:</span> Ensure
                            you have access to your registered email before
                            turning this on.
                        </p>
                    </div>
                </div>
            </SectionRow>

            {/* ── Alert Preferences ────────────────────────────────── */}
            <SectionRow title="Alert Preferences">
                <div className="space-y-4 rounded-xl border border-gray-200 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <ToggleSwitch
                            checked={alertTicket}
                            onChange={(e) => setAlertTicket(e.target.checked)}
                        />
                        <span className="text-sm text-gray-700">
                            Email me when a new ticket is assigned
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <ToggleSwitch
                            checked={alertUrgent}
                            onChange={(e) => setAlertUrgent(e.target.checked)}
                        />
                        <span className="text-sm text-gray-700">
                            Email me for urgent system alerts
                        </span>
                    </div>
                </div>
            </SectionRow>

            {/* ── Active Sessions / Devices ─────────────────────────── */}
            <div className="flex gap-10">
                <div className="w-56 flex-shrink-0 pt-1">
                    <h2 className="text-sm font-semibold text-gray-900">
                        Active Sessions/Devices
                    </h2>
                </div>
                <div className="flex-1">
                    <div className="mb-4 flex justify-end">
                        <IconButton>Sign out of all other devices</IconButton>
                    </div>
                    <div className="rounded-xl border border-borderColor">
                        <TableContainerOne className="rounded-xl">
                            <Table>
                                <TableHeader>
                                    <TableHead className="font-semibold text-gray-600">
                                        Device
                                    </TableHead>
                                    <TableHead className="font-semibold text-gray-600">
                                        Location
                                    </TableHead>
                                    <TableHead className="font-semibold text-gray-600">
                                        IP Address
                                    </TableHead>
                                    <TableHead className="font-semibold text-gray-600">
                                        <div className="flex cursor-pointer items-center gap-1">
                                            Status <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="font-semibold text-gray-600">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {SESSIONS.map((s) => (
                                        <TableRow key={s.id}>
                                            <TableCell>
                                                <div className="font-medium text-gray-900">
                                                    {s.device}
                                                </div>
                                                <div className="text-xs text-gray-400">
                                                    {s.browser}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-gray-500">
                                                {s.location}
                                            </TableCell>
                                            <TableCell className="text-gray-500">
                                                {s.ip}
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant={
                                                        s.isCurrent
                                                            ? 'success'
                                                            : 'gray'
                                                    }
                                                    withDot
                                                    rounded="md"
                                                >
                                                    {s.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {!s.isCurrent && (
                                                    <IconButton className="!px-3 !py-1.5 text-xs">
                                                        Revoke
                                                    </IconButton>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </div>
                </div>
            </div>

            {/* ── Footer ────────────────────────────────────────────── */}
            <div className="flex justify-end gap-3 border-t border-gray-200 pt-6">
                <IconButton>Cancel</IconButton>
                <Button onClick={() => setShowToast(true)}>Save Changes</Button>
            </div>
            {showToast && (
                <SuccessToast
                    title="Changes saved successfully"
                    message="Your account settings have been updated and saved."
                    actionText="Dismiss"
                    onAction={() => console.log('Action clicked')}
                    onClose={() => setShowToast(false)}
                />
            )}
        </div>
    );
}
