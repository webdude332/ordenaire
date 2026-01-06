import React from 'react';
import { Head } from '@inertiajs/react';
import TopBar from '@/components/TopBar';
import SidePannel from '../components/SidePannel';
import StatCard from '../components/StatCard';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import SimpleBarChart from '../components/SimpleBarChart';
import SimpleLineChart from '../components/SimpleLineChart';
import Button from '../components/Button';
import dashboardIcon from '../images/icons/dashboard-icon.png'; // Dashboard uses PNG
import btnLink from '../images/icons/btnLink.png';
import trendGreen from '../images/icons/trendGreen.png';
import trendRed from '../images/icons/trendRed.png';

export default function Dashboard() {
    return (
        <div className="flex h-screen overflow-hidden font-montserrat">
            <Head title="Ordenaire Dashboard" />
            <SidePannel />

            <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
                
                <TopBar 
                    title="Ordenaire Dashboard"
                    icon={dashboardIcon} // Passing the PNG icon
                    breadcrumbs={[
                        { label: 'Dashboard', isActive: true }
                    ]}
                    tabs={[
                        { label: 'Dashboard', isActive: true, href: '#' }
                    ]}
                >
                    {/* YOUR SPECIFIC DASHBOARD BUTTONS */}
                    <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                        <svg className="mr-2 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Date-range
                    </button>

                    <Button href="/reports">
                        <img src={btnLink} alt="" className="w-5 h-5 mr-2" />
                        Reports page
                    </Button>
                </TopBar>

                <main className="custom-scrollbar no-scrollbar flex-1 overflow-y-auto p-8 pb-20">
                    {/* ROW 1 */}
                    <div className="mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard title="Total Active Restaurants" value="1600" trend="841" trendType="positive" trendIcon={trendGreen} />
                        <StatCard title="Net Revenue (MTD)" value="$1,096.30" trend="841" trendType="positive" trendIcon={trendGreen} />
                        <StatCard title="Active Terminals" value="1415" trend="841" trendType="positive" trendIcon={trendGreen} />
                        <StatCard title="Active WhatsApp Users" value="778" trend="841" trendType="positive" trendIcon={trendGreen} />
                    </div>

                    {/* ROW 2 */}
                    <div className="mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard title="New Signups" value="32" trend="3" trendType="positive" trendIcon={trendGreen} />
                        <StatCard title="Suspended Businesses" value="4" trend="234" trendType="negative" trendIcon={trendRed} />
                        <StatCard title="Downgrades" value="3" trend="1" trendType="positive" trendIcon={trendGreen} />
                        <StatCard title="Avg. Uptime" value="99.96%" trend="841" trendType="positive" trendIcon={trendGreen} />
                    </div>

                    {/* ROW 3 */}
                    <div className="mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard title="Open Support Tickets" value="31" />
                        <StatCard title="System Health Status" value={<span className="flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-sm text-green-700"><span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>Good</span>} />
                        <StatCard title="Avg. Response Time" value="2h 11m" />
                        <StatCard title="Total Pending Approvals" value="10" />
                    </div>

                    {/* ROW 4 */}
                    <div className="mb-6 flex gap-6">
                        <div className='w-2/5'><PieChart /></div>
                        <div className='w-3/5'><LineChart /></div>
                    </div>

                    {/* ROW 5 */}
                    <div className="mb-6"><LineChart /></div>

                    {/* ROW 6 */}
                    <div className="flex gap-6">
                        <div className='w-1/2'><SimpleLineChart /></div>
                        <div className='w-1/2 h-auto'><SimpleBarChart /></div>
                    </div>
                </main>
            </div>
        </div>
    );
}