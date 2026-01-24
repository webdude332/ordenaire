import Button from '@/components/ui/Button';
import CustomDropdown from '@/components/ui/CustomDropdown';
import IconButton from '@/components/ui/IconButton';
import { useState } from 'react';
import ColorRight from '@/images/icons/colorRight.svg?react';
import Pencil from '@/images/icons/pencilIcon.svg?react';
import DelIcon from '@/images/icons/delIcon.svg?react';
import ActionButton from '@/components/ui/ActionButton';

interface StepProps {
    data: any;
    update: (field: string, value: any) => void;
    onNext: () => void;
    onBack: () => void;
    isEditMode?: boolean; // New
}

const TeamAccessStep = ({ data, update, onNext, onBack, isEditMode = false }: StepProps) => {
    const [localInput, setLocalInput] = useState({ fullName: '', email: '', role: 'Select Role' });
    const [inviteList, setInviteList] = useState([
        { id: 1, name: 'Omar Ali', email: 'omar@teatime.com', role: 'Primary Owner', roleColor: 'bg-[#F4F3FF] text-[#5925DC] border-[#D9D6FE]' },
        { id: 2, name: 'Sarah Lee', email: 'sarah@teatime.com', role: 'Super Admin', roleColor: 'bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]' },
        { id: 3, name: 'Noah Pierre', email: 'noah@ordemark.com', role: 'Admin', roleColor: 'bg-[#F9F7FA] text-[#696170] border-[#E8E6EA]' },
    ]);
    const roleOptions = [ { label: 'Super Admin', value: 'Super Admin' }, { label: 'Admin', value: 'Admin' }, { label: 'Manager', value: 'Manager' }, { label: 'Viewer', value: 'Viewer' } ];
    const updateLocalInput = (field: string, value: string) => { setLocalInput((prev) => ({ ...prev, [field]: value })); };

    return (
        <div>
            <div className="space-y-10 pt-6">
                {/* 1. Invite Management Team */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3"><h3 className="text-sm font-semibold text-gray-700">Invite Management Team</h3><p className="text-xs text-gray-500">Grant access to key staff members.</p></div>
                    <div className="col-span-9 rounded-xl border border-[#E8E6EA] bg-white p-6 shadow-xs">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1.5"><label className="text-sm font-medium text-gray-700">Full name<span className="text-[#8CDD05]">*</span></label><input type="text" placeholder="Enter Full name" value={localInput.fullName} onChange={(e) => updateLocalInput('fullName', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]" /></div>
                            <div className="space-y-1.5"><label className="text-sm font-medium text-gray-700">Email address<span className="text-[#8CDD05]">*</span></label><input type="email" placeholder="Enter Email address" value={localInput.email} onChange={(e) => updateLocalInput('email', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#8CDD05] focus:ring-1 focus:ring-[#8CDD05]" /></div>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-6"><div className="space-y-1.5"><CustomDropdown label="User Role" required placeholder="Select Role" value={localInput.role} onChange={(val) => updateLocalInput('role', val)} options={roleOptions} /></div></div>
                        <div className="mt-6 flex justify-end"><button className="rounded-lg border border-borderColor bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50">Add to List</button></div>
                    </div>
                </div>

                {/* 2. The Invite Queue */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3"><h3 className="text-sm font-semibold text-gray-700">The Invite Queue</h3></div>
                    <div className="col-span-9 overflow-hidden rounded-xl border border-[#E8E6EA] bg-white shadow-xs">
                        <table className="w-full text-left text-sm text-gray-500">
                            <thead className="bg-gray-50 text-xs text-gray-500"><tr><th className="px-6 py-4 font-medium">User Details</th><th className="px-6 py-4 font-medium">Role</th><th className="px-6 py-4 text-right font-medium">Actions</th></tr></thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {inviteList.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4"><div className="flex flex-col"><span className="font-medium text-gray-900">{user.name}</span><span className="text-gray-500">{user.email}</span></div></td>
                                        <td className="px-6 py-4"><span className={`inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-medium ${user.roleColor} ${user.roleColor.includes('border') ? '' : 'border-transparent'}`}><div className={`mr-1.5 h-1.5 w-1.5 rounded-full ${user.roleColor.includes('purple') ? 'bg-[#9B51E0]' : user.roleColor.includes('blue') ? 'bg-[#175CD3]' : 'bg-[#667085]'}`}></div>{user.role}</span></td>
                                        <td className="px-6 py-4 text-right">{user.role !== 'Primary Owner' && (<div className="flex items-center justify-end gap-2"><button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700"><ActionButton><Pencil className="h-4 w-4 text-iconColor" /></ActionButton></button><button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-red-600"><ActionButton><DelIcon className="h-4 w-4 text-iconColor" /></ActionButton></button></div>)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer Buttons - HIDDEN IN EDIT MODE */}
                {!isEditMode && (
                <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-8 py-4">
                    <IconButton onClick={onBack}>Cancel</IconButton>
                    <Button onClick={onNext}>
                        Next: Operations <ColorRight />
                    </Button>
                </div>
            )}
            </div>
        </div>
    );
};

export default TeamAccessStep;