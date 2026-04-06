import React, { ComponentType, ReactNode, SVGProps } from 'react';
import RightArrow from '../../shared/images/icons/chevron-right.svg?react';

interface TabItem {
    label: string;
    isActive: boolean;
    onClick?: () => void;
    href?: string;
    badge?: number | string;
}

interface BreadcrumbItem {
    label: string;
    isActive?: boolean;
    href?: string;
    onClick?: () => void;
}

interface TopBarProps {
    title: string;
    icon: string | ComponentType<SVGProps<SVGSVGElement>>;
    breadcrumbs: BreadcrumbItem[];
    tabs?: TabItem[];
    children?: ReactNode;
    iconClassName?: string;
}

export default function TopBar({
    title,
    icon,
    breadcrumbs,
    tabs,
    children,
    iconClassName = '',
}: TopBarProps) {
    const isIconComponent = typeof icon !== 'string';
    const IconComponent = isIconComponent
        ? (icon as ComponentType<SVGProps<SVGSVGElement>>)
        : null;

    const finalIconClass = `h-5 w-5 object-contain opacity-60 ${iconClassName}`;

    return (
        <header className="bg-white">
            <div className="px-8 py-6">
                <div className="flex items-start justify-between">
                    {/* LEFT SIDE */}
                    <div>
                        <div className="mb-2 flex items-center text-sm text-gray-500">
                            {isIconComponent && IconComponent ? (
                                <IconComponent className={finalIconClass} />
                            ) : (
                                <img
                                    src={icon as string}
                                    alt="icon"
                                    className={finalIconClass}
                                />
                            )}

                            {/* Breadcrumb Loop */}
                            {breadcrumbs.map((item, index) => (
                                <React.Fragment key={index}>
                                    <span className="mx-2">
                                        <RightArrow
                                            width={16}
                                            height={16}
                                            className="text-[#B5B0BA]"
                                        />
                                    </span>
                                    {item.isActive ? (
                                        <span className="rounded-md bg-[#F9F7FA] px-2 py-1 font-semibold text-[#363239]">
                                            {item.label}
                                        </span>
                                    ) : item.href ? (
                                        <a
                                            href={item.href}
                                            onClick={item.onClick}
                                            className="font-medium text-[#9C94A3] transition-colors hover:text-gray-700"
                                        >
                                            {item.label}
                                        </a>
                                    ) : item.onClick ? (
                                        <button
                                            onClick={item.onClick}
                                            className="font-medium text-[#9C94A3] transition-colors hover:text-gray-700"
                                        >
                                            {item.label}
                                        </button>
                                    ) : (
                                        <span className="font-medium text-[#9C94A3]">
                                            {item.label}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <h1 className="text-2xl font-semibold text-gray-900">
                            {title}
                        </h1>
                    </div>

                    {/* RIGHT SIDE: Action Buttons */}
                    <div className="flex items-center space-x-3">
                        {children}
                    </div>
                </div>
            </div>

            <div className="mt-2 px-8">
                <div className="flex space-x-8 border-b border-gray-200">
                    {tabs &&
                        tabs.length > 0 &&
                        tabs.map((tab, index) => {
                            const activeClass =
                                'cursor-pointer border-lime-500 text-[#578500]';
                            const inactiveClass =
                                'cursor-pointer border-transparent text-[#9C94A3] hover:text-gray-700';
                            const commonClasses =
                                'pb-3 text-sm font-semibold border-b-2 transition-colors';

                            return tab.href ? (
                                <a
                                    key={index}
                                    href={tab.href}
                                    className={`${commonClasses} ${tab.isActive ? activeClass : inactiveClass}`}
                                >
                                    {tab.label}
                                </a>
                            ) : (
                                <button
                                    key={index}
                                    onClick={tab.onClick}
                                    className={`${commonClasses} ${tab.isActive ? activeClass : inactiveClass}`}
                                >
                                    <span>{tab.label}</span>
                                    {/* ADDED: Badge rendering logic */}
                                    {tab.badge && (
                                        <span
                                            className={`ml-2 rounded-full border px-2 py-0.5 text-[10px] font-bold ${tab.isActive ? 'border-lime-200 bg-lime-100 text-lime-700' : 'border-gray-200 bg-gray-100 text-gray-600'}`}
                                        >
                                            {tab.badge}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                </div>
            </div>
        </header>
    );
}
