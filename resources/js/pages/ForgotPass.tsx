// import React from 'react';
// import { Head, Link } from '@inertiajs/react';
// import applogo from '../images/applogo.png'

// export default function ForgotPassword() {
//     return (
//         <div className="flex min-h-screen flex-col items-center justify-center bg-[#121417] px-6 font-montserrat">
//             <Head title="Forgot Password - Ordenaire" />
//             <div className="mb-12">
//                 <img src={applogo} alt="app-logo" />
//             </div>
//             <div className="w-full max-w-[500px] rounded-[40px] bg-[#222529] p-10 md:p-16">
//                 <div className="text-center mb-10">
//                     <h2 className="text-4xl font-bold text-white mb-2">Forgot!</h2>
//                     <p className="text-gray-400 text-sm">
//                         Enter your email and we'll send you instructions to reset your password.
//                     </p>
//                 </div>

//                 <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
//                     <div>
//                         <label className="block text-xs font-medium text-gray-400 mb-2 ml-1">Email Address</label>
//                         <input 
//                             type="email" 
//                             placeholder="AdminJohn@biterush.com"
//                             className="w-full rounded-xl bg-[#33383E] border-none py-4 px-5 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#D1FF70] transition-all"
//                             required
//                         />
//                     </div>
//                     <div className="flex flex-col items-center space-y-6">
//                         <button 
//                             type="submit" 
//                             className="w-full bg-[#D1FF70] text-[#121417] font-bold py-3 px-6 rounded-xl hover:bg-[#b8e65a] transition-colors shadow-lg shadow-[#D1FF70]/10"
//                         >
//                             Send Reset Link
//                         </button>
//                         <Link 
//                             href="/login" 
//                             className="text-gray-400 hover:text-white text-sm underline decoration-gray-600 underline-offset-4 transition-colors"
//                         >
//                             Back to Login
//                         </Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }




import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function ForgotPassword() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center bg-white font-montserrat overflow-hidden">
            <Head title="Forgot Password - Ordenaire" />

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" 
                 style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 w-full max-w-md px-6 text-center">
                {/* Key Icon Container */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <svg 
                        className="h-8 w-8 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                </div>

                {/* Header Text */}
                <h2 className="mb-2 text-3xl font-bold text-gray-900">Forgot password?</h2>
                <p className="mb-10 text-gray-500">No worries, we'll send you reset instructions.</p>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    {/* Email Input */}
                    <div className="text-left">
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#84cc16]"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full rounded-lg bg-[#84cc16] py-3 font-bold text-white transition-colors hover:bg-[#65a30d] shadow-md"
                    >
                        Reset password
                    </button>
                </form>

                {/* Back Link */}
                <div className="mt-8">
                    <Link 
                        href="/my-login" 
                        className="inline-flex items-center text-sm font-semibold text-gray-500 transition-colors hover:text-gray-800"
                    >
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to log in
                    </Link>
                </div>
            </div>
        </div>
    );
}