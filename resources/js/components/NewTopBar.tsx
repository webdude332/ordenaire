
// // import React from 'react';
// // import { Link } from '@inertiajs/react';
// // import btnLink from '../images/icons/btnLink.png';
// // import rightArrow from '../images/icons/chevron-right.png';
// // import dashBoardSvg from '../images/icons/dashBaordSvg.svg'; 
// // import Button from '../components/Button';
// // import searchIcon from '../images/icons/search-icon.png'

// // // 1. Define the props this component expects
// // interface TopBarProps {
// //     activeTab: 'profiles' | 'roles';
// //     onTabChange: (tab: 'profiles' | 'roles') => void;
// // }

// // export default function TopBar({ activeTab, onTabChange }: TopBarProps) {
// //     return (
// //         <header className="bg-white">
// //             {/* TOP ROW: Breadcrumbs & Title */}
// //             <div className="px-8 py-6">
// //                 <div className="flex items-start justify-between">
// //                     <div>
// //                         {/* Breadcrumb */}
// //                         <div className="mb-2 flex items-center text-sm text-gray-500">
// //                             <img 
// //                                 src={dashBoardSvg} 
// //                                 alt="Dashboard" 
// //                                 className="w-5 h-5 object-contain opacity-60" 
// //                             />
// //                             <span className="mx-2">
// //                                 <img src={rightArrow} alt="" className="w-3 h-3" />
// //                             </span>
// //                             <span className="font-semibold text-[#9C94A3]">
// //                                 Internal User Management
// //                             </span>
// //                             <span className="mx-2">
// //                                 <img src={rightArrow} alt="" className="w-3 h-3" />
// //                             </span>
// //                             {/* 2. DYNAMIC BREADCRUMB TEXT */}
// //                             <span className="font-semibold bg-[#F9F7FA] px-2 py-1 rounded-md text-gray-700">
// //                                 {activeTab === 'profiles' ? 'User Profiles' : 'Roles & Permissions'}
// //                             </span>
// //                         </div>

// //                         {/* 3. DYNAMIC MAIN TITLE */}
// //                         <h1 className="text-2xl font-bold text-gray-900">
// //                             {activeTab === 'profiles' ? 'Internal User Management' : 'Internal Role & Permissions'}
// //                         </h1>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* BOTTOM ROW: Tabs */}
// //             <div className="mt-2 px-8">
// //                 <div className="flex space-x-8 border-b border-gray-200">
                    
// //                     {/* TAB 1: USER PROFILES */}
// //                     <button
// //                         onClick={() => onTabChange('profiles')}
// //                         className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
// //                             activeTab === 'profiles'
// //                             ? 'border-lime-500 text-[#578500]' 
// //                             : 'border-transparent text-[#9C94A3] hover:text-gray-700'
// //                         }`}
// //                     >
// //                         User Profiles
// //                     </button>

// //                     {/* TAB 2: ROLES & PERMISSIONS */}
// //                     <button
// //                         onClick={() => onTabChange('roles')}
// //                         className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
// //                             activeTab === 'roles'
// //                             ? 'border-lime-500 text-[#578500]' 
// //                             : 'border-transparent text-[#9C94A3] hover:text-gray-700'
// //                         }`}
// //                     >
// //                         Roles & Permissions
// //                     </button>
// //                 </div>
// //             </div>
// //         </header>
// //     );
// // }
// import React from 'react';
// import { Link } from '@inertiajs/react';
// import btnLink from '../images/icons/btnLink.png';
// import rightArrow from '../images/icons/chevron-right.png';
// import dashBoardSvg from '../images/icons/dashBaordSvg.svg'; 
// import Button from '../components/Button';
// import searchIcon from '../images/icons/search-icon.png'

// // 1. Updated props interface to accept 'isAddUserPage'
// interface TopBarProps {
//     activeTab: 'profiles' | 'roles';
//     onTabChange: (tab: 'profiles' | 'roles') => void;
//     isAddUserPage?: boolean; // New optional prop
// }

// export default function TopBar({ activeTab, onTabChange, isAddUserPage = false }: TopBarProps) {
    
//     // Helper to determine the main title
//     const getTitle = () => {
//         if (isAddUserPage) return 'Add new User';
//         return activeTab === 'profiles' ? 'Internal User Management' : 'Internal Role & Permissions';
//     };

//     return (
//         <header className="bg-white">
//             {/* TOP ROW: Breadcrumbs & Title */}
//             <div className="px-8 py-6">
//                 <div className="flex items-start justify-between">
//                     <div>
//                         {/* Breadcrumb */}
//                         <div className="mb-2 flex items-center text-sm text-gray-500">
//                             <img 
//                                 src={dashBoardSvg} 
//                                 alt="Dashboard" 
//                                 className="w-5 h-5 object-contain opacity-60" 
//                             />
                            
//                             {/* Standard Level 1 */}
//                             <span className="mx-2">
//                                 <img src={rightArrow} alt="" className="w-3 h-3" />
//                             </span>
//                             <span className="font-semibold text-[#9C94A3]">
//                                 Internal User Management
//                             </span>

//                             {/* DYNAMIC BREADCRUMB LOGIC */}
//                             {isAddUserPage ? (
//                                 <>
//                                     {/* Level 2: User Profiles (Plain Text) */}
//                                     <span className="mx-2">
//                                         <img src={rightArrow} alt="" className="w-3 h-3" />
//                                     </span>
//                                     <span className="font-semibold text-[#9C94A3]">
//                                         User Profiles
//                                     </span>

//                                     {/* Level 3: Add new user (Highlighted Pill) */}
//                                     <span className="mx-2">
//                                         <img src={rightArrow} alt="" className="w-3 h-3" />
//                                     </span>
//                                     <span className="font-semibold bg-[#F9F7FA] px-2 py-1 rounded-md text-gray-700">
//                                         Add new user
//                                     </span>
//                                 </>
//                             ) : (
//                                 <>
//                                     {/* Standard Level 2: Active Tab (Highlighted Pill) */}
//                                     <span className="mx-2">
//                                         <img src={rightArrow} alt="" className="w-3 h-3" />
//                                     </span>
//                                     <span className="font-semibold bg-[#F9F7FA] px-2 py-1 rounded-md text-gray-700">
//                                         {activeTab === 'profiles' ? 'User Profiles' : 'Roles & Permissions'}
//                                     </span>
//                                 </>
//                             )}
//                         </div>

//                         {/* DYNAMIC MAIN TITLE */}
//                         <h1 className="text-2xl font-bold text-gray-900">
//                             {getTitle()}
//                         </h1>
//                     </div>
//                 </div>
//             </div>

//             {/* BOTTOM ROW: Tabs */}
//             <div className="mt-2 px-8">
//                 <div className="flex space-x-8 border-b border-gray-200">
                    
//                     {/* TAB 1: USER PROFILES */}
//                     <button
//                         onClick={() => onTabChange('profiles')}
//                         className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
//                             activeTab === 'profiles'
//                             ? 'border-lime-500 text-[#578500]' 
//                             : 'border-transparent text-[#9C94A3] hover:text-gray-700'
//                         }`}
//                     >
//                         User Profiles
//                     </button>

//                     {/* TAB 2: ROLES & PERMISSIONS */}
//                     <button
//                         onClick={() => onTabChange('roles')}
//                         className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
//                             activeTab === 'roles'
//                             ? 'border-lime-500 text-[#578500]' 
//                             : 'border-transparent text-[#9C94A3] hover:text-gray-700'
//                         }`}
//                     >
//                         Roles & Permissions
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// }



import React from 'react';
import { Link } from '@inertiajs/react';
import rightArrow from '../images/icons/chevron-right.png';
import dashBoardSvg from '../images/icons/dashBaordSvg.svg'; 

interface TopBarProps {
    activeTab: 'profiles' | 'roles';
    onTabChange: (tab: 'profiles' | 'roles') => void;
    isAddUserPage?: boolean;
    isViewUserPage?: boolean; // New prop for the Profile View page
}

export default function TopBar({ 
    activeTab, 
    onTabChange, 
    isAddUserPage = false,
    isViewUserPage = false 
}: TopBarProps) {
    
    // Helper to determine the main title
    const getTitle = () => {
        if (isAddUserPage) return 'Add new User';
        if (isViewUserPage) return 'User Profiles'; // Title stays "User Profiles" on view page
        return activeTab === 'profiles' ? 'Internal User Management' : 'Internal Role & Permissions';
    };

    return (
        <header className="bg-white">
            {/* TOP ROW: Breadcrumbs & Title */}
            <div className="px-8 py-6">
                <div className="flex items-start justify-between">
                    <div>
                        {/* Breadcrumb */}
                        <div className="mb-2 flex items-center text-sm text-gray-500">
                            <img 
                                src={dashBoardSvg} 
                                alt="Dashboard" 
                                className="w-5 h-5 object-contain opacity-60" 
                            />
                            
                            {/* Level 1 */}
                            <span className="mx-2">
                                <img src={rightArrow} alt="" className="w-3 h-3" />
                            </span>
                            <span className="font-semibold text-[#9C94A3]">
                                Internal User Management
                            </span>

                            {/* DYNAMIC BREADCRUMB LOGIC */}
                            {isAddUserPage ? (
                                <>
                                    <span className="mx-2"><img src={rightArrow} alt="" className="w-3 h-3" /></span>
                                    <span className="font-semibold text-[#9C94A3]">User Profiles</span>
                                    <span className="mx-2"><img src={rightArrow} alt="" className="w-3 h-3" /></span>
                                    <span className="font-semibold bg-[#F9F7FA] px-2 py-1 rounded-md text-gray-700">Add new user</span>
                                </>
                            ) : isViewUserPage ? (
                                <>
                                    <span className="mx-2"><img src={rightArrow} alt="" className="w-3 h-3" /></span>
                                    <span className="font-semibold text-[#9C94A3]">User Profiles</span>
                                    <span className="mx-2"><img src={rightArrow} alt="" className="w-3 h-3" /></span>
                                    {/* The 'view' pill as seen in screenshot */}
                                    <span className="font-semibold bg-[#F9F7FA] px-2 py-1 rounded-md text-gray-700 lowercase">view</span>
                                </>
                            ) : (
                                <>
                                    <span className="mx-2"><img src={rightArrow} alt="" className="w-3 h-3" /></span>
                                    <span className="font-semibold bg-[#F9F7FA] px-2 py-1 rounded-md text-gray-700">
                                        {activeTab === 'profiles' ? 'User Profiles' : 'Roles & Permissions'}
                                    </span>
                                </>
                            )}
                        </div>

                        {/* DYNAMIC MAIN TITLE */}
                        <h1 className="text-2xl font-bold text-gray-900">
                            {getTitle()}
                        </h1>
                    </div>
                </div>
            </div>

            {/* BOTTOM ROW: Tabs */}
            <div className="mt-2 px-8">
                <div className="flex space-x-8 border-b border-gray-200">
                    <button
                        onClick={() => onTabChange('profiles')}
                        className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
                            activeTab === 'profiles'
                            ? 'border-lime-500 text-[#578500]' 
                            : 'border-transparent text-[#9C94A3] hover:text-gray-700'
                        }`}
                    >
                        User Profiles
                    </button>
                    <button
                        onClick={() => onTabChange('roles')}
                        className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
                            activeTab === 'roles'
                            ? 'border-lime-500 text-[#578500]' 
                            : 'border-transparent text-[#9C94A3] hover:text-gray-700'
                        }`}
                    >
                        Roles & Permissions
                    </button>
                </div>
            </div>
        </header>
    );
}