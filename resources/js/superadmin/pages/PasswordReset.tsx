export default function PasswordReset() {
    return (
        <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white pt-24 font-sans">
            {/* 1. Subtle Grid Background */}
            <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
                <div
                    className="h-[600px] w-full max-w-4xl"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, #f3f4f6 1px, transparent 1px), 
              linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)
            `,
                        backgroundSize: '48px 48px', // Adjusts the square sizes of the grid
                        backgroundPosition: 'center top',
                        // This mask fades the grid out towards the bottom and edges so it doesn't look like a harsh box
                        WebkitMaskImage:
                            'radial-gradient(ellipse 70% 80% at 50% 20%, #000 40%, transparent 100%)',
                        maskImage:
                            'radial-gradient(ellipse 70% 80% at 50% 20%, #000 40%, transparent 100%)',
                    }}
                />
            </div>

            {/* 2. Main Content Container */}
            <div className="relative z-10 mt-10 flex w-full max-w-[420px] flex-col items-center px-6 text-center">
                {/* Checkmark Icon in Box */}
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
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                {/* Headings & Text */}
                <h1 className="mb-3 text-3xl font-bold tracking-tight text-gray-900">
                    Password reset
                </h1>

                <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                    Your password has been successfully reset. <br />
                    Click below to log in magically.
                </p>

                {/* Continue Button */}
                <button className="mb-6 w-full rounded-lg bg-[#7CB32A] py-3 font-medium text-white transition-colors duration-200 hover:bg-[#6FA125]">
                    Continue
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
