import Button from '@/components/ui/Button';
import { Head, Link } from '@inertiajs/react';

export default function ForgotPassword() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white font-montserrat">
            <Head title="Forgot Password - Ordenaire" />

            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            ></div>

            <div className="relative z-10 w-full max-w-md px-6 text-center">
                {/* Key Icon Container */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <svg
                        className="h-8 w-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        />
                    </svg>
                </div>

                {/* Header Text */}
                <h2 className="mb-2 text-3xl font-bold text-gray-900">
                    Forgot password?
                </h2>
                <p className="mb-10 text-gray-500">
                    No worries, we'll send you reset instructions.
                </p>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-6"
                >
                    {/* Email Input */}
                    <div className="text-left">
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-[#84cc16]"
                            required
                        />
                    </div>

                    <Button className="w-full py-3">Reset Password</Button>
                </form>

                {/* Back Link */}
                <div className="mt-8">
                    <Link
                        href="/my-login"
                        className="inline-flex items-center text-sm font-semibold text-gray-500 transition-colors hover:text-gray-800"
                    >
                        <svg
                            className="mr-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to log in
                    </Link>
                </div>
            </div>
        </div>
    );
}
