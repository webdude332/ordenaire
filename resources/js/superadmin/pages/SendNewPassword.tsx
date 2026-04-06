// export default function SendNewPassword() {
//     return <div>SendNewPassword</div>;
// }

export default function SetNewPassword() {
    return (
        <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white pt-24 font-sans">
            {/* Subtle Grid Background */}
            <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
                <div
                    className="h-[600px] w-full max-w-4xl"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, #f3f4f6 1px, transparent 1px), 
              linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)
            `,
                        backgroundSize: '48px 48px',
                        backgroundPosition: 'center top',
                        WebkitMaskImage:
                            'radial-gradient(ellipse 70% 80% at 50% 20%, #000 40%, transparent 100%)',
                        maskImage:
                            'radial-gradient(ellipse 70% 80% at 50% 20%, #000 40%, transparent 100%)',
                    }}
                />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 mt-10 flex w-full max-w-[420px] flex-col items-center px-6 text-center">
                {/* Lock Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                    </svg>
                </div>

                {/* Headings & Text */}
                <h1 className="mb-3 text-3xl font-bold tracking-tight text-gray-900">
                    Set new password
                </h1>

                <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                    Your new password must be different to <br />
                    previously used passwords.
                </p>

                {/* Form Fields */}
                <div className="mb-6 w-full text-left">
                    <div className="mb-4">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            placeholder="........"
                            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 transition-colors outline-none focus:border-[#7CB32A] focus:ring-1 focus:ring-[#7CB32A]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            Confirm new password
                        </label>
                        <input
                            type="password"
                            placeholder="........"
                            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 transition-colors outline-none focus:border-[#7CB32A] focus:ring-1 focus:ring-[#7CB32A]"
                        />
                    </div>

                    {/* Validation Checklist */}
                    <div className="mt-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300">
                                <svg
                                    className="h-2.5 w-2.5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500">
                                Must be at least 8 characters
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300">
                                <svg
                                    className="h-2.5 w-2.5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500">
                                Must contain one special character
                            </span>
                        </div>
                    </div>
                </div>

                {/* Reset Button */}
                <button className="mb-6 w-full rounded-lg bg-[#7CB32A] py-3 font-medium text-white transition-colors duration-200 hover:bg-[#6FA125]">
                    Reset password
                </button>

                {/* Back to Login Link */}
                <a
                    href="/login"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-gray-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to log in
                </a>
            </div>
        </div>
    );
}
