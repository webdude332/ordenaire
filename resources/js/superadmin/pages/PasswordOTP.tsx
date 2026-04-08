export default function CheckEmail() {
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
                {/* Email Icon */}
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
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                    </svg>
                </div>

                {/* Headings & Text */}
                <h1 className="mb-3 text-3xl font-bold tracking-tight text-gray-900">
                    Check your email
                </h1>

                <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                    We sent a verification link to <br />
                    noah@ordenaire.com
                </p>

                {/* OTP Inputs */}
                <div className="mb-8 flex w-full justify-center gap-3">
                    <input
                        type="text"
                        value="3"
                        readOnly
                        className="h-16 w-14 rounded-lg border border-[#7CB32A] bg-transparent text-center text-3xl font-medium text-[#7CB32A] focus:outline-none"
                    />
                    <input
                        type="text"
                        value="0"
                        readOnly
                        className="h-16 w-14 rounded-lg border border-[#7CB32A] bg-transparent text-center text-3xl font-medium text-[#7CB32A] focus:outline-none"
                    />
                    {/* Active input with the double border effect */}
                    <input
                        type="text"
                        value="6"
                        readOnly
                        className="h-16 w-14 rounded-lg border border-[#7CB32A] bg-transparent text-center text-3xl font-medium text-[#7CB32A] outline outline-1 outline-offset-2 outline-[#7CB32A] focus:outline-none"
                    />
                    <input
                        type="text"
                        value=""
                        readOnly
                        className="h-16 w-14 rounded-lg border border-gray-200 bg-transparent text-center text-3xl font-medium text-gray-800 focus:outline-none"
                    />
                </div>

                {/* Verify Button */}
                <button className="mb-6 w-full rounded-lg bg-[#7CB32A] py-3 font-medium text-white transition-colors duration-200 hover:bg-[#6FA125]">
                    Verify email
                </button>

                {/* Resend Link */}
                <p className="mb-6 text-sm text-gray-500">
                    Didn't receive the email?{' '}
                    <button className="font-semibold text-[#7CB32A] hover:underline focus:outline-none">
                        Click to resend
                    </button>
                </p>

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
