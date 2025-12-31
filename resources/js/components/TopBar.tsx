import { Link } from '@inertiajs/react';
import btnLink from '../images/icons/btnLink.png';
import rightArrow from '../images/icons/chevron-right.png';
import dashboardIcon from '../images/icons/dashboard-icon.png';
import Button from '../components/Button'

export default function TopBar() {
    return (
        <header className="bg-white">
            {/* TOP ROW: Breadcrumbs & Title vs. Actions */}
            <div className="px-8 py-6">
                <div className="flex items-start justify-between">
                    {/* LEFT SIDE: Breadcrumbs & Title */}
                    <div>
                        {/* Breadcrumb */}
                        <div className="mb-2 flex items-center text-sm text-gray-500">
                            <img src={dashboardIcon} alt="dashboard-icon" />
                            <span className="mx-2">
                                <img src={rightArrow} alt="" />
                            </span>
                            <span className="font-semibold">Dashboard</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-2xl font-bold text-gray-900">
                            Orderaire Dashboard
                        </h1>
                    </div>

                    {/* RIGHT SIDE: Action Buttons */}
                </div>
            </div>

            {/* BOTTOM ROW: Tabs */}
            <div className="mt-2 px-8">
                <div className="flex space-x-8 border-b border-gray-200">
                    <a
                        href="#"
                        className="border-b-2 border-lime-500 pb-3 text-sm font-medium text-gray-900"
                    >
                        Dashboard
                    </a>
                    {/* You can add inactive tabs here later if needed */}
                </div>
            </div>
            <div className="mt-4 mb-4 flex justify-end space-x-3 pr-8">
                {/* Date Range Button (Secondary) */}
                <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                    <svg
                        className="mr-2 h-4 w-4 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    Date-range
                </button>

                {/* Reports Page Button (Primary) */}
                <Button href="/reports">
                    <img src={btnLink} alt="" className=" w-5 h-5" />
                    Reports page
                </Button>
            </div>
        </header>
    );
}
