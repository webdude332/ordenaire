import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import blackLogo from '../images/black-logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'

export default function MyLogin() {
    const slides = [
        {
            title: "Introducing Ordenaire",
            description: "Manage your restaurant with ease using our all-in-one platform. Streamline orders, track inventory, and boost your profits.",
            revenue: "$58,144"
        },
        {
            image : blackLogo,
            title: "Introducing Ordenaire",
            description: "Manage your restaurant with ease using our all-in-one platform. Streamline orders, track inventory, and boost your profits.",
            revenue: "$58,144"
        },
        {
            title: "Real-time Analytics",
            description: "Monitor your sales performance instantly with our high-fidelity data visualization tools.",
            revenue: "$12,450"
        },
        {
            title: "New Slide",
            description: "New SlideNew SlideNew SlideNew SlideNew SlideNew SlideNew SlideNew SlideNew SlideNew Slide",
            revenue: "0000"
        }
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-3">Log in</h2>
                        <p className="text-gray-500">Welcome back! Please enter your details.</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#84cc16] focus:border-transparent transition-all outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                            <input 
                                type="password" 
                                placeholder="........"
                                className="w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#84cc16] focus:border-transparent transition-all outline-none"
                            />
                        </div>

                        <div className="flex justify-end">
                            <Link 
                                href="/forgot-password" 
                                className="text-sm font-semibold text-[#65a30d] hover:text-[#4d7c0f]"
                            >
                                Forgot password
                            </Link>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-[#84cc16] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#65a30d] transition-colors shadow-sm"
                        >
                            Sign in
                        </button>
                    </form>
                </div>

                {/* Footer Copyright */}
                <div className="mt-12 text-sm text-gray-400">
                    © Ordenaire
                </div>
            </div>

            {/* RIGHT SIDE: Marketing/Image Area */}
            <div className="hidden lg:flex lg:w-1/2 p-6">
                <div className="relative w-full h-full rounded-[40px] bg-[#4d7c0f] overflow-hidden flex flex-col items-center justify-center p-12 text-center text-white">
                                        <div className="relative w-full h-full rounded-[40px] bg-[#4d7c0f] overflow-hidden flex flex-col items-center justify-center text-white">
                        
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000 }}
                            className="w-full h-full mySwiper pb-12"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index} className="flex flex-col items-center justify-center p-12 text-center">
                                    {/* Dashboard Graphic Mockup */}
                                    <div className="relative w-full max-w-md mb-16 mx-auto">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 aspect-video flex items-center justify-center">
                                            <div className="w-full h-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                                                <span className="text-white/20 italic">Dashboard Graphic</span>
                                            </div>
                                        </div>
                                        {/* Floating Revenue Card */}
                                        <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-5 shadow-2xl text-black text-left w-40 transform transition-transform hover:scale-105">
                                            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Revenue</div>
                                            <div className="text-xl font-extrabold text-gray-900">{slide.revenue}</div>
                                        </div>
                                    </div>

                                    <h3 className="text-4xl font-bold mb-6 px-10 leading-tight">
                                        {slide.title}
                                    </h3> 
                                    <p className="text-green-50 max-w-sm mx-auto text-lg opacity-90 leading-relaxed">
                                        {slide.description}
                                    </p>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom CSS for Swiper Dots to match the Lime Green */}
                        <style dangerouslySetInnerHTML={{ __html: `
                            .swiper-pagination-bullet { background: rgba(255,255,255,0.4) !important; opacity: 1; }
                            .swiper-pagination-bullet-active { background: #D1FF70 !important; width: 12px; border-radius: 4px; transition: width 0.3s; }
                            .swiper { padding-bottom: 60px !important; }
                        `}} />
                    </div>
                </div>
            </div>
        </div>
    );
}