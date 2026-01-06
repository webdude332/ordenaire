import React, { useState } from 'react';
import SidePannel from '@/components/SidePannel';
// import NewTopBar from '@/components/NewTopBar';
import { Link } from '@inertiajs/react';
import backArrow from '@/images/icons/backArrow.png'
import mailIcon from '@/images/icons/mailIcon.png'
import plusIcon from '@/images/icons/plusIcon.png'
import selectorIcon from '@/images/icons/selector-icon.png'
import delIcon from '@/images/icons/del-icon.png'
import download from '@/images/icons/downloadIcon.png'

const AddUser = () => {
    // State to manage the active tab in the TopBar
    const [activeTab, setActiveTab] = useState<'profiles' | 'roles'>('profiles');

    return (
        <div className="flex min-h-screen ">
            {/* 1. Sidebar */}
            <SidePannel />

            {/* 2. Main Content Area */}
            <main className="flex-1 flex flex-col">
                
                {/* Top Navigation with Dynamic Add User State */}
                {/* <NewTopBar 
                    activeTab={activeTab} 
                    onTabChange={setActiveTab} 
                    isAddUserPage={true} 
                /> */}

                {/* Page Content Container */}
                <div className="flex-1 px-8 py-6 overflow-y-auto">
                    
                    {/* "Back" Button */}
                    <div className="mb-8">
                        <Link 
    href="/usermanagement"  
    className="flex items-center gap-3 px-4 py-2 bg-white border border-[#CFCBD2] rounded-lg text-sm font-medium text-gray-700 w-[210px]"
>
    <img src={backArrow} alt="" />
    Back to User Profiles
</Link>
                    </div>

                    {/* --- FORM SECTION --- */}
                    <form className="space-y-8 pb-12">

                        {/* SECTION 1: Basic Information */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-[#E8E6EA] py-6">
                            {/* Left Column: Title & Description */}
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-bold text-gray-900">Basic information</h3>
                                <p className="text-sm text-gray-500 mt-1">Add User photo and personal details.</p>
                            </div>

                            {/* Right Column: Form Card */}
                            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                {/* Photo Upload */}
                                <div className="mb-6">
                                    <label className="block text-md font-semibold text-[#696170] mb-2">User photo</label>
                                    <p className="text-sm text-gray-500 mb-3">This will be displayed on the profile.</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                                            {/* Placeholder Image */}
                                            <img 
                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                                                alt="User" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <button type="button" className="px-4 py-2 bg-white border border-[#CFCBD2] rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 shadow-sm">
                                            Upload photo
                                        </button>
                                    </div>
                                </div>

                                {/* Inputs Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full name<span className="text-[#7AB621] ml-0.5">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            defaultValue="Noah Pierre"
                                            className="w-full rounded-lg border-gray-300 border px-3 py-2 text-gray-700 focus:ring-[#7AB621] focus:border-[#7AB621] outline-none shadow-sm"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email address<span className="text-[#7AB621] ml-0.5">*</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <img src={mailIcon} alt="" />
                                            </div>
                                            <input 
                                                type="email" 
                                                defaultValue="Noah@ordemark.com"
                                                className="w-full rounded-lg border-gray-300 border pl-10 pr-3 py-2 text-gray-700 focus:ring-[#7AB621] focus:border-[#7AB621] outline-none shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone number<span className="text-[#7AB621] ml-0.5">*</span>
                                        </label>
                                        <div className="flex rounded-lg shadow-sm">
                                            <div className="relative">
                                                <select className="h-full rounded-l-lg border-y border-l border-gray-300 bg-transparent py-2 pl-3 pr-7 text-gray-500 text-sm focus:border-[#7AB621] focus:ring-[#7AB621] outline-none appearance-none">
                                                    <option>+91</option>
                                                    <option>+1</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </div>
                                            </div>
                                            <input 
                                                type="text" 
                                                defaultValue="1825462385"
                                                className="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-[#7AB621] focus:ring-[#7AB621] outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Primary Role */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Primary Role<span className="text-[#7AB621] ml-0.5">*</span>
                                        </label>
                                        <div className="relative">
                                            <select className="w-full appearance-none rounded-lg border-gray-300 border px-3 py-2 text-gray-700 focus:ring-[#7AB621] focus:border-[#7AB621] outline-none shadow-sm bg-white">
                                                <option>Customer relationship manager</option>
                                                <option>Admin</option>
                                                <option>Viewer</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="mt-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center cursor-pointer">
                                            <div className="relative flex items-center justify-center">
                                                <input type="radio" name="status" defaultChecked className="peer sr-only" />
                                                <div className="w-4 h-4 border border-gray-300 rounded-full peer-checked:border-[#7AB621] peer-checked:border-4 transition-all"></div>
                                            </div>
                                            <span className="ml-2 text-sm text-gray-900">Active</span>
                                        </label>

                                        <label className="flex items-center cursor-pointer">
                                            <div className="relative flex items-center justify-center">
                                                <input type="radio" name="status" className="peer sr-only" />
                                                <div className="w-4 h-4 border border-gray-300 rounded-full peer-checked:border-[#7AB621] peer-checked:border-4 transition-all"></div>
                                            </div>
                                            <span className="ml-2 text-sm text-gray-900">Inactive</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        {/* SECTION 2: Add Document */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-bold text-gray-900">Add Document</h3>
                                <p className="text-sm text-gray-500 mt-1">Upload contracts, IDs, or certifications</p>
                            </div>

                            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="text-md font-semibold text-gray-900">Documents</h4>
                                    <button type="button" className="flex items-center px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                                        <span className="text-lg leading-none mr-1 font-light text-gray-400"><img src={plusIcon} alt="" /></span> Add document
                                    </button>
                                </div>

                                {/* Documents Table */}
                                <div className="border border-[#E8E6EA] rounded-lg overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-100">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">File Name</th>
                                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Document Type</th>
                                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center cursor-pointer">
                                                    Expiry 
                                                    <img src={selectorIcon} alt="" />
                                                </th>
                                                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-100">
                                            <tr>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Contract_2025.pdf</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">Employment</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-right">
                                                    <button type="button" className="text-gray-400 hover:text-red-500">
                                                        <img src={download} alt="" />
                                                    </button>  
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap text-right">
                                                    <button type="button" className="text-gray-400 hover:text-red-500">
                                                        <img src={delIcon} alt="" />
                                                    </button>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Passport_Copy.jpg</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">Proof of Identity</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">20 Nov 2028</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-right">
                                                    <button type="button" className="text-gray-400 hover:text-red-500">
                                                        <img src={delIcon} alt="" />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        {/* SECTION 3: Account Access */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1">
                                <h3 className="text-base font-bold text-gray-900">Account Access</h3>
                            </div>

                            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Account Expiry */}
                                    <div className=''>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Account Expiry</label>
                                        <div className="relative">
                                            <input 
                                                type="text" 
                                                placeholder="DD MMM YYYY"
                                                defaultValue="22 Aug 2025"
                                                className="w-full rounded-lg border-gray-300 border pl-3 pr-10 py-2 text-gray-400 focus:ring-[#7AB621] focus:border-[#7AB621] outline-none shadow-sm"
                                            />
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* MFA Toggle */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-3">Multi-Factor Authentication</label>
                                        <div className="flex items-center">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7AB621]"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-600">Active</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Buttons */}
                        <div className="flex justify-end items-center gap-4 pt-4">
                            <button type="button" className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 shadow-sm">
                                Cancel
                            </button>
                            <button type="submit" className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#7AB621] hover:bg-[#659F18] shadow-md transition-colors">
                                Save Changes
                            </button>
                        </div>

                    </form>
                </div>
            </main>
        </div>
    )
}

export default AddUser