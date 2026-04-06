import { Head, Link } from '@inertiajs/react';
import blackLogo from '../../shared/images/icons/applogo.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function MyLogin() {
    const slides = [
        {
            title: 'Introducing Ordenaire',
            description:
                'Manage your restaurant with ease using our all-in-one platform. Streamline orders, track inventory, and boost your profits.',
            revenue: '$58,144',
        },
        {
            image: blackLogo,
            title: 'Introducing Ordenaire',
            description:
                'Manage your restaurant with ease using our all-in-one platform. Streamline orders, track inventory, and boost your profits.',
            revenue: '$58,144',
        },
        {
            title: 'Real-time Analytics',
            description:
                'Monitor your sales performance instantly with our high-fidelity data visualization tools.',
            revenue: '$12,450',
        },
        {
            title: 'New Slide',
            description:
                'New SlideNew SlideNew SlideNew SlideNew SlideNew SlideNew SlideNew SlideNew SlideNew Slide',
            revenue: '0000',
        },
    ];
    return (
        <div className="flex min-h-screen bg-white font-montserrat">
            <Head title="Log in - Ordenaire" />

            {/* LEFT SIDE: Login Form */}
            <div className="flex w-full flex-col justify-between p-8 lg:w-1/2 lg:p-16">
                {/* Logo top left */}
                <div className="mb-12">
                    <img src={blackLogo} alt="" />
                </div>

                {/* Form Container */}
                <div className="mx-auto w-full max-w-md">
                    <div className="mb-10">
                        <h2 className="mb-3 text-4xl font-bold text-gray-900">
                            Log in
                        </h2>
                        <p className="text-gray-500">
                            Welcome back! Please enter your details.
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-6"
                    >
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-[#84cc16]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="........"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-[#84cc16]"
                            />
                        </div>

                        <div className="flex justify-end">
                            <Link
                                href="/forgot-pass"
                                className="text-sm font-semibold text-[#65a30d] hover:text-[#4d7c0f]"
                            >
                                Forgot password
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#84cc16] px-6 py-3 font-bold text-white shadow-sm transition-colors hover:bg-[#65a30d]"
                        >
                            Sign in
                        </button>
                    </form>
                </div>

                {/* Footer Copyright */}
                <div className="mt-12 text-sm text-gray-400">© Ordenaire</div>
            </div>

            {/* RIGHT SIDE: Marketing/Image Area */}
            <div className="hidden p-6 lg:flex lg:w-1/2">
                <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[40px] bg-[#4d7c0f] p-12 text-center text-white">
                    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[40px] bg-[#4d7c0f] text-white">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000 }}
                            className="mySwiper h-full w-full pb-12"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="flex flex-col items-center justify-center p-12 text-center"
                                >
                                    {/* Dashboard Graphic Mockup */}
                                    <div className="relative mx-auto mb-16 w-full max-w-md">
                                        <div className="flex aspect-video items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                                            <div className="flex h-full w-full items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                                <span className="text-white/20 italic">
                                                    Dashboard Graphic
                                                </span>
                                            </div>
                                        </div>
                                        {/* Floating Revenue Card */}
                                        <div className="absolute -right-4 -bottom-6 w-40 transform rounded-2xl bg-white p-5 text-left text-black shadow-2xl transition-transform hover:scale-105">
                                            <div className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                                                Revenue
                                            </div>
                                            <div className="text-xl font-extrabold text-gray-900">
                                                {slide.revenue}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="mb-6 px-10 text-4xl leading-tight font-bold">
                                        {slide.title}
                                    </h3>
                                    <p className="mx-auto max-w-sm text-lg leading-relaxed text-green-50 opacity-90">
                                        {slide.description}
                                    </p>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom CSS for Swiper Dots to match the Lime Green */}
                        <style
                            dangerouslySetInnerHTML={{
                                __html: `
                            .swiper-pagination-bullet { background: rgba(255,255,255,0.4) !important; opacity: 1; }
                            .swiper-pagination-bullet-active { background: #D1FF70 !important; width: 12px; border-radius: 4px; transition: width 0.3s; }
                            .swiper { padding-bottom: 60px !important; }
                        `,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
