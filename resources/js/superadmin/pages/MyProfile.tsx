import SidePannel from '@/superadmin/components/SidePannel';
import TopBar from '@/superadmin/components/TopBar';
import DashboardIcon from '@shared/images/icons/dashBaordSvg.svg?react';
import Profile from '@shared/images/icons/profile.svg?react';
// import MyProfileModal from '@superadmin/components/Modals/ReplacePhotoModal'
import ReplacePhotoModal from '@/superadmin/components/Modals/ReplacePhotoModal';

import { useState } from 'react';

// ─── Component ────────────────────────────────────────────────────────────────

export default function MyProfile() {
    const breadcrumbs = [{ label: 'My Profile', isActive: true }];
    const [isReplacePhotoOpen, setIsReplacePhotoOpen] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

    return (
        <div className="flex min-h-screen">
            <SidePannel />

            <main className="flex flex-1 flex-col">
                <TopBar
                    title="My Profile"
                    icon={DashboardIcon}
                    breadcrumbs={breadcrumbs}
                />

                <div className="flex-1 overflow-y-auto px-8 py-6">
                    <div className="space-y-6">
                        {/* ── Profile Card ──────────────────────────────────────── */}
                        <div className="overflow-hidden">
                            {/* 1. Green Banner */}
                            <div
                                className="relative h-48 w-full rounded-xl"
                                style={{
                                    background:
                                        'var(--gradient-brand-80060045-deg, linear-gradient(45deg, var(--Colors-Brand-800, #42690B) 0%, var(--Colors-Brand-600, #79B800) 100%))',
                                }}
                            ></div>

                            {/* 2. Profile Info Header */}
                            <div className="px-8">
                                <div className="flex items-start justify-between">
                                    {/* Left Side: Avatar & Name */}
                                    <div className="flex gap-6">
                                        {/* Avatar */}
                                        <div className="relative -mt-12">
                                            <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md">
                                                <Profile className="h-32 w-32" />
                                            </div>
                                        </div>

                                        {/* Name & Role */}
                                        <div className="pt-6">
                                            <div className="mb-1 flex items-center gap-3">
                                                <h2 className="text-2xl font-semibold text-gray-900">
                                                    Olivia Rhye
                                                </h2>
                                                <span className="rounded-full border border-[#D5FF85] bg-[#F8FFEB] px-2 py-1 text-xs font-medium text-primary">
                                                    Super Admin
                                                </span>
                                            </div>
                                            <div className="mb-3 text-sm text-gray-500">
                                                olivia@untitledui.com
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() =>
                                                        setIsReplacePhotoOpen(
                                                            true,
                                                        )
                                                    }
                                                    className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#CFCBD2] px-4 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                                                >
                                                    {/* <Eye className="h-4 w-4 text-iconColor" /> */}
                                                    Replace Photo
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Status */}
                                    <div className="flex items-center gap-2 pt-4">
                                        <span className="text-sm text-gray-500">
                                            Current status:
                                        </span>
                                        <span className="inline-flex items-center rounded-lg border border-[#ABEFC6] bg-[#ECFDF3] px-2 py-0.5 text-xs font-medium text-green-800">
                                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600 text-[#067647]"></span>
                                            Active
                                        </span>
                                    </div>
                                </div>

                                {/* 3. Info Grid (Footer of Card) */}
                            </div>
                            <div className="mt-8 rounded-xl border border-[#E8E6EA] bg-[#F8FFEB] px-6 pt-6 pb-6">
                                <div className="grid grid-cols-4 pt-6">
                                    {/* Column 1 */}
                                    <div>
                                        <div className="mb-2 text-xs font-medium text-gray-500">
                                            Phone Number
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">
                                            +91 89211 6114
                                        </div>
                                    </div>

                                    {/* Column 2 */}
                                    <div>
                                        <div className="mb-2 text-xs font-medium text-gray-500">
                                            Joining Date
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">
                                            22 Aug 2025
                                        </div>
                                    </div>

                                    {/* Column 3 */}
                                    <div>
                                        <div className="mb-2 text-xs font-medium text-gray-500">
                                            Account Expirey
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">
                                            Never
                                        </div>
                                    </div>
                                    {/**Column 4 */}
                                    <div>
                                        <div className="mb-2 text-xs font-medium text-gray-500">
                                            Multi Factor Authentication
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">
                                            Active
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 border-b border-[#8CDD05] py-6"></div>
                            </div>
                        </div>

                        {/* ── Quick Stats ───────────────────────────────────────── */}
                        <div className="">
                            <h2 className="mb-3 text-lg font-semibold text-gray-900">
                                Quick Stats
                            </h2>
                            <div className="grid grid-cols-3 divide-x divide-gray-200 rounded-xl border border-gray-200 py-6">
                                <div className="px-6 py-5">
                                    <p className="mb-2 text-sm text-gray-500">
                                        Tickets Solved (This month)
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">
                                        19 solved
                                    </p>
                                </div>
                                <div className="px-6 py-5">
                                    <p className="mb-2 text-sm text-gray-500">
                                        Pending Action Items
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">
                                        9 available
                                    </p>
                                </div>
                                <div className="px-6 py-5">
                                    <p className="mb-2 text-sm text-gray-500">
                                        Total Resolved (All Time)
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">
                                        1,245
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ReplacePhotoModal
                isOpen={isReplacePhotoOpen}
                onClose={() => setIsReplacePhotoOpen(false)}
                onConfirm={(file) => {
                    if (file) setProfilePhoto(URL.createObjectURL(file));
                }}
                currentPhoto={profilePhoto ?? undefined}
            />
        </div>
    );
}
