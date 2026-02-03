import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Layout Components
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import BusinessHeader from '@/components/ui/BusinessHeader';
import IconButton from '@/components/ui/IconButton';

// Icons (Using your existing imports where possible, added placeholders for new ones)
import BusinessPlan from '@/components/BusinessPlan';
import StatCard from '@/components/StatCard';
import Button from '@/components/ui/Button';
import backArrow from '@/images/icons/backArrow.png';
import UsersIcon from '@/images/icons/dashBaordSvg.svg?react';
import DelIcon from '@/images/icons/delIcon.svg?react';
import DownloadIcon from '@/images/icons/downloadIcon.svg?react';
import Eye from '@/images/icons/eyeIcon.svg?react';
import PlusIcon from '@/images/icons/plus.svg?react';
import TrendGreen from '@/images/icons/trendGreen.svg?react';
import UploadIcon from '@/images/icons/upload.svg?react';
import HealthAlert from '../components/HealthAlert';
// import IconButton from '@/components/ui/IconButton'

const AddonsTable = () => {
    const data = [
        {
            name: 'Inventory Management',
            status: 'Enabled',
            pricing: 'Free',
            installDate: '03 Sept 2025',
            endSub: '03 Sept 2026',
        },
        {
            name: 'WhatsApp Blast',
            status: 'Enabled',
            pricing: 'Free',
            installDate: '03 Sept 2025',
            endSub: '03 Sept 2026',
        },
        {
            name: 'QuickBooks',
            status: 'Trial',
            pricing: '20 KWD',
            installDate: '04 Sept 2025',
            endSub: '04 Sept 2025',
        },
        {
            name: 'Talabat',
            status: 'Disabled',
            pricing: 'Free',
            installDate: '05 Sept 2025',
            endSub: '05 Sept 2025',
        },
    ];

    const getStatusStyle = (status: any) => {
        switch (status) {
            case 'Enabled':
                return 'bg-[#ECFDF3] text-[#067647] ring-[#ABEFC6] rounded-xl';
            case 'Trial':
                return 'bg-blue-50 text-blue-700 ring-blue-600/20 rounded-xl';
            case 'Disabled':
                return 'bg-[#FEF3F2] text-[#B42318] ring-[#FECDCA] rounded-xl';
            default:
                return 'bg-gray-50 text-gray-700 ring-gray-600/20';
        }
    };

    return (
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs">
            <div className="border-b border-gray-200 px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900">
                    Add-ons & Marketplace Apps
                </h3>
            </div>
            <table className="min-w-full divide-y divide-gray-100">
                <thead className="border-b border-[#E8E6EA] bg-[#F9F9FB]">
                    <tr>
                        {[
                            'Add-on Name',
                            'Status',
                            'Pricing',
                            'Install Date',
                            'End of Subscription',
                        ].map((head) => (
                            <th
                                key={head}
                                className="px-6 py-3 text-left text-xs font-semibold text-gray-500"
                            >
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    {data.map((row, idx) => (
                        <tr key={idx}>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                {row.name}
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span
                                    className={`inline-flex items-center rounded px-2 py-1 text-xs font-medium ring-1 ring-inset ${getStatusStyle(row.status)}`}
                                >
                                    {row.status === 'Enabled' && (
                                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    )}
                                    {row.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {row.pricing}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {row.installDate} <br />
                                <span className="text-xs text-gray-400">
                                    11:30 AM
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {row.endSub} <br />
                                <span className="text-xs text-gray-400">
                                    11:30 AM
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const BillingTable = () => {
    return (
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900">
                    Billing History
                </h3>
                <Link>
                    <Button>View payment overview</Button>
                </Link>
            </div>
            <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-[#F9F9FB]">
                    <tr>
                        {[
                            'Invoice ID',
                            'Date',
                            'Amount',
                            'Status',
                            'Type of Charges',
                            'Discount (KWD)',
                        ].map((head) => (
                            <th
                                key={head}
                                className="px-6 py-3 text-left text-xs font-semibold text-gray-500"
                            >
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            INV-2025-002
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                            03 Sept 2025 <br />
                            <span className="text-xs">11:30 AM</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            450
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <span className="rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                                ● Paid
                            </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                            Subscription
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">0</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            INV-2025-003
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                            04 Sept 2025 <br />
                            <span className="text-xs">01:15 PM</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            30
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <span className="rounded bg-red-50 px-2 py-1 text-xs font-medium text-red-600">
                                ● Failed
                            </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                            Overage
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">950</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

/* --- MAIN PAGE COMPONENT --- */

const BusinessOverviewPage = () => {
    // TopBar State
    const [activeTab, setActiveTab] = useState('business_profiles');

    // Breadcrumbs
    const breadcrumbs = [
        { label: 'Business Management', isActive: false, href: '/business' },
        {
            label: 'Business Profiles',
            isActive: false,
            href: '/business/profiles',
        },
        { label: 'Business Overview', isActive: true },
    ];

    // Tabs
    const tabs = [
        {
            label: 'Business Profiles',
            isActive: activeTab === 'business_profiles',
            onClick: () => setActiveTab('business_profiles'),
        },
        {
            label: 'Multi-Tenancy & Franchise',
            isActive: activeTab === 'multi_tenancy',
            onClick: () => setActiveTab('multi_tenancy'),
        },
        {
            label: 'Feature Access & Beta',
            isActive: activeTab === 'feature_access',
            onClick: () => setActiveTab('feature_access'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <SidePannel />

            {/* Main Content */}
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Business Overview"
                    icon={UsersIcon} // Reusing UsersIcon as placeholder for Business Icon
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                />

                <div className="flex-1 overflow-y-auto px-8 py-6">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link
                            href="/business-management"
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-500 shadow-sm transition-colors hover:bg-gray-50"
                        >
                            <img
                                src={backArrow}
                                alt="Back"
                                className="h-4 w-4"
                            />
                            Back to Business overview
                        </Link>
                    </div>

                    {/* --- MAIN PROFILE CARD --- */}
                    <div className="mb-8 overflow-hidden rounded-xl bg-white">
                        <BusinessHeader />
                    </div>
                    <div className="mb-6 grid grid-cols-1 divide-x divide-borderColor rounded-lg border border-borderColor p-4 md:grid-cols-2 lg:grid-cols-4">
                        <BusinessPlan
                            title={'Current Plan'}
                            value={'Pro Yearly'}
                        />
                        <BusinessPlan
                            title={'Current Plan'}
                            value={'Pro Yearly'}
                        />
                        <BusinessPlan
                            title={'Current Plan'}
                            value={'Pro Yearly'}
                        />
                        <BusinessPlan
                            title={''}
                            value={'Auto Renew'}
                            trendType="negative"
                        />
                    </div>

                    {/* --- HEALTH ALERT --- */}
                    <HealthAlert />

                    {/* --- QUICK STATS --- */}
                    <div>
                        <h2 className="mb-3 text-2xl font-semibold">
                            Quick Stats
                        </h2>
                        <div className="mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 shadow-xs md:grid-cols-2 lg:grid-cols-4">
                            <StatCard
                                title="Order This Month"
                                value="1,240"
                                trend="12%"
                                trendType="positive"
                                trendIcon={TrendGreen}
                            />
                            <StatCard
                                title="Total Staff"
                                value="9"
                                trend="1"
                                trendType="positive"
                                trendIcon={TrendGreen}
                            />
                            <StatCard
                                title="POS Terminal Status"
                                value="2/3"
                                // trend="841"
                                // trendType="positive"
                                // trendIcon={trendGreen}
                            />
                            <StatCard
                                title="Credit Balance"
                                value="105.000 AED"
                                // trend="841"
                                // trendType="positive"
                                // trendIcon={trendGreen}
                            />
                        </div>
                    </div>

                    {/* --- ADD-ONS TABLE --- */}
                    <AddonsTable />

                    {/* --- BILLING HISTORY TABLE --- */}
                    <BillingTable />

                    {/* --- MULTI-TENANCY TABLE --- */}
                    <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs">
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Multi-Tenancy & Franchise
                            </h3>
                            <Link href="/business/registerwizard">
                                <IconButton>
                                    <PlusIcon className="h-4 w-4 text-iconColor" />{' '}
                                    Add New Outlet
                                </IconButton>
                            </Link>
                        </div>
                        <table className="min-w-full divide-y divide-gray-100">
                            <thead className="border-b border-borderColor bg-[#F9F9FB]">
                                <tr>
                                    {[
                                        'Outlet Info',
                                        'Package',
                                        'Address',
                                        'Branch Admin',
                                        'Status',
                                        'Actions',
                                    ].map((h) => (
                                        <th
                                            key={h}
                                            className="px-6 py-3 text-left text-xs font-semibold text-gray-500"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                <tr>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-900">
                                            TeaTime - Marina
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            BIZ-2041
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Standard
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        The Dubai Mall,
                                        <br />
                                        Downtown Dubai
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-900">
                                            Imran Ali
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            +971 55 9821654
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                                            ● Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="rounded-lg border border-[#CFCBD2] p-2 hover:bg-gray-50">
                                            <Eye className="h-4 w-4 text-iconColor" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-900">
                                            SushiWorld - Jumeirah Beach
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            BIZ-2048
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Standard
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Mall of the Emirates,
                                        <br />
                                        Al Barsha
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-900">
                                            Imran Ali
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            +971 55 9821654
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                                            ● Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="rounded-lg border border-[#CFCBD2] p-2 hover:bg-gray-50">
                                            <Eye className="h-4 w-4 text-iconColor" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* --- DOCUMENTS SECTION (Reused from your code) --- */}
                    <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs">
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Documents
                            </h3>
                            <button className="flex items-center gap-2 rounded-lg border border-[#CFCBD2] px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                <PlusIcon className="h-5 w-5 text-iconColor" />{' '}
                                Add other document
                            </button>
                        </div>
                        <table className="min-w-full divide-y divide-gray-100">
                            <thead className="bg-[#F9F9FB]">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                                        Document Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                                        File Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                                        Expiry Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        Trade License
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
                                            ● Not Uploaded
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        -
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <button className="flex items-center gap-1 rounded border border-[#CFCBD2] px-2 py-1 text-xs hover:bg-gray-50">
                                            <UploadIcon className="h-4 w-4 text-iconColor" />
                                            Upload
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        Trade License
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
                                            ● Not Uploaded
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        -
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <button className="flex items-center gap-1 rounded border border-[#CFCBD2] px-2 py-1 text-xs hover:bg-gray-50">
                                            <UploadIcon className="h-4 w-4 text-iconColor" />
                                            Upload
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        Tax/VAT Certificate
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="rounded bg-green-50 px-2 py-1 text-xs text-green-600">
                                            ● Tax_Cert_2025.pdf
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        30 Nov 2028
                                    </td>
                                    <td className="flex gap-2 px-6 py-4">
                                        <button className="flex items-center gap-1 rounded border border-[#CFCBD2] px-2 py-1 text-xs hover:bg-gray-50">
                                            <DownloadIcon className="h-4 w-4 text-iconColor" />{' '}
                                            Download
                                        </button>
                                        <button className="flex items-center gap-1 rounded border border-[#CFCBD2] px-2 py-1 text-xs hover:bg-gray-50">
                                            <DelIcon className="h-4 w-4 text-iconColor" />{' '}
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* --- NOTES SECTION (Reused from your code) --- */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-sm text-xl font-semibold text-gray-900">
                            Notes
                        </h3>
                        <div className="mb-4">
                            <textarea
                                className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-[#7AB621] focus:ring-[#7AB621]"
                                rows={3}
                                placeholder="The Business needs review"
                            ></textarea>
                        </div>
                        <IconButton>Update Note</IconButton>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BusinessOverviewPage;
