import TopBar from '@/components/TopBar';
import { Head } from '@inertiajs/react';
import Button from '../components/Button';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import SidePannel from '../components/SidePannel';
import SimpleBarChart from '../components/SimpleBarChart';
import SimpleLineChart from '../components/SimpleLineChart';
import StatCard from '../components/StatCard';
import BtnLink from '../images/icons/colorLink.svg?react';
import dashboardIcon from '../images/icons/dashBaordSvg.svg?react'; // Dashboard uses PNG
import Calender from '../images/icons/date.svg?react';
import trendGreen from '../images/icons/trendGreen.png';
import trendRed from '../images/icons/trendRed.png';
import DateRangeButton from '../components/DateRangeButton'

export default function Dashboard() {
    return (
        <div className="flex h-screen overflow-hidden font-montserrat">
            <Head title="Ordenaire Dashboard" />
            <SidePannel />

            <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
                <TopBar
                    title="Ordenaire Dashboard"
                    icon={dashboardIcon}
                    iconClassName="text-red-900"
                    breadcrumbs={[{ label: 'Dashboard', isActive: true }]}
                    tabs={[{ label: 'Dashboard', isActive: true, href: '#' }]}
                >
                    {/* YOUR SPECIFIC DASHBOARD BUTTONS */}
                </TopBar>

                <main className="custom-scrollbar no-scrollbar flex-1 overflow-y-auto p-8 pb-20">
                    {/**Buttons */}
                    <div className="flex justify-end gap-4 pb-8">
                        {/* <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-1.5 text-sm font-semibold text-[#4F4955] shadow-sm transition-colors hover:bg-gray-50">
                            <Calender className="h-4 w-4 text-[#B5B0BA]" />
                            Date-range
                        </button> */}

                        <Button href="/reports" className="font-medium">
                            <BtnLink className="h-4 w-4" />
                            Reports Page
                        </Button>
                    </div>
                    {/* ROW 1 */}
                    <div className="mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 shadow-xs md:grid-cols-2 lg:grid-cols-4">
                        <StatCard
                            title="Total Active Restaurants"
                            value="1600"
                            trend="841"
                            trendType="positive"
                            trendIcon={trendGreen}
                        />
                        <StatCard
                            title="Net Revenue (MTD)"
                            value="$1,096.30"
                            trend="841"
                            trendType="positive"
                            trendIcon={trendGreen}
                        />
                        <StatCard
                            title="Active Terminals"
                            value="1415"
                            trend="841"
                            trendType="positive"
                            trendIcon={trendGreen}
                        />
                        <StatCard
                            title="Active WhatsApp Users"
                            value="778"
                            trend="841"
                            trendType="positive"
                            trendIcon={trendGreen}
                        />
                    </div>

                    {/* ROW 2 */}
                    <div className="mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 shadow-xs md:grid-cols-2 lg:grid-cols-4">
                        <StatCard
                            title="New Signups"
                            value="32"
                            trend="3"
                            trendType="positive"
                            trendIcon={trendGreen}
                        />
                        <StatCard
                            title="Suspended Businesses"
                            value="4"
                            trend="234"
                            trendType="negative"
                            trendIcon={trendRed}
                        />
                        <StatCard
                            title="Downgrades"
                            value="3"
                            trend="1"
                            trendType="positive"
                            trendIcon={trendGreen}
                        />
                        <StatCard
                            title="Avg. Uptime"
                            value="99.96%"
                            trend="841"
                            trendType="positive"
                            trendIcon={trendGreen}
                        />
                    </div>

                    {/* ROW 3 */}
                    <div className="mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 shadow-xs md:grid-cols-2 lg:grid-cols-4">
                        <StatCard title="Open Support Tickets" value="31" />
                        <StatCard
                            title="System Health Status"
                            value={
                                <span className="flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-sm text-green-700">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                    Good
                                </span>
                            }
                        />
                        <StatCard title="Avg. Response Time" value="2h 11m" />
                        <StatCard title="Total Pending Approvals" value="10" />
                    </div>

                    {/* ROW 4 */}
                    <div className="mb-6 flex gap-6">
                        <div className="w-2/5">
                            <PieChart />
                        </div>
                        <div className="w-3/5">
                            <LineChart />
                        </div>
                    </div>

                    {/* ROW 5 */}
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <SimpleLineChart />
                        </div>
                        <div className="h-auto w-1/2">
                            <SimpleBarChart />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
