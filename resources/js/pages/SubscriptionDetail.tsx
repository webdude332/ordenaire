import StatCardAlt from '@/components/cards/StatCardAlt';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/OuterTable';
import SidePannel from '@/components/SidePannel';
import TopBar from '@/components/TopBar';
import IconButton from '@/components/ui/IconButton';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
// import { TableHead } from '@/components/ui/Table';
import Badge, { BadgeVariant } from '@/components/Badge';
import SimpleCard from '@/components/cards/SimpleCard';
import Notes from '@/components/Notes';
import ActionButton from '@/components/ui/ActionButton';
import BackArrow from '@/images/icons/backArrow.svg?react';
import Dashboard from '@/images/icons/dashBaordSvg.svg?react';
import MasterCard from '@/images/icons/Mastercard.svg?react';
import Menu from '@/images/icons/menuVertical.svg?react';
import PencilIcon from '@/images/icons/pencilIcon.svg?react';
import Dp from '@/images/icons/pizzaPalaceDp.svg?react';
import TrendGreen from '@/images/icons/trendGreen.svg?react';
import { Link } from '@inertiajs/react';

export default function SubscriptionDetail() {
    const breadcrumbs = [
        {
            label: 'Subscription & Billing',
            isActive: false,
            href: '/subscriptionsandbilling',
        },
        {
            label: 'Subscribers',
            isActive: false,
            href: '/subscriptionsandbilling',
        },
        {
            label: 'Manage',
            isActive: true,
        },
    ];
    const addOnData = [
        {
            id: 1,
            app: {
                appname: 'Employee Scheduling',
                appby: 'by Global Tech Solutions',
            },
            billing: {
                currency: '5.000 KWD',
                subCurrency: '45.000 AED',
            },
            cycle: 'Monthly',
            installDate: '12 Aug 2025',
            status: 'Active',
        },
        {
            id: 1,
            app: {
                appname: 'Employee status',
                appby: 'by Ordenaire',
            },
            billing: {
                currency: '5.000 KWD',
                subCurrency: '45.000 AED',
            },
            cycle: 'Monthly',
            installDate: '12 Aug 2025',
            status: 'Active',
        },
    ];
    const billingData = [
        {
            id: 1,
            bussinessId: 'INV-2025-002',
            date: '03 Sept 2025',
            billing: {
                currency: '5.000 KWD',
                subCurrency: '45.000 AED',
            },
            status: 'Paid',
            typeOfCharges: 'Subscription',
            discount: '0.000 AED',
        },
        {
            id: 2,
            bussinessId: 'INV-2025-003',
            date: '03 Sept 2025',
            billing: {
                currency: '5.000 KWD',
                subCurrency: '45.000 AED',
            },
            status: 'Failed',
            typeOfCharges: 'Subscription',
            discount: '0.000 AED',
        },
        {
            id: 3,
            bussinessId: 'INV-2025-004',
            date: '03 Sept 2025',
            billing: {
                currency: '5.000 KWD',
                subCurrency: '45.000 AED',
            },
            status: 'Paid',
            typeOfCharges: 'Subscription',
            discount: '0.000 AED',
        },
    ];
    const statusMap: Record<string, BadgeVariant> = {
        Paid: 'active',
        Failed: 'error',
    };
    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Business Subscription Detail" // Changed title to be generic for the page
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                />
                <div className="flex-1 px-8">
                    <div className="mt-4 mb-4">
                        <Link href="/subscription-and-billing">
                            <IconButton>
                                <BackArrow className="h-4 w-4 text-iconColor" />
                                Back
                            </IconButton>
                        </Link>
                    </div>
                    <div className="rounded-xl border border-borderColor bg-[#F8FFEB] px-6 py-8 shadow-xs">
                        {/**other stuff */}
                        <div className="mt-2 grid grid-cols-[1.5fr_1fr_1fr_1fr] p-4">
                            <div className="flex items-center gap-3">
                                <Dp className="h-20 w-20" />
                                <div>
                                    <h1 className="mb-3 font-medium text-gray-700">
                                        Business Name
                                    </h1>
                                    <h1 className="font-semibold text-gray-900">
                                        PizzaPalace . BIZ-2050
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className="mb-3 font-medium text-gray-700">
                                        Current Plan
                                    </h1>
                                    <h1 className="font-semibold text-gray-900">
                                        Pro (Monthly)
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className="mb-3 font-medium text-gray-700">
                                        Subscription Status
                                    </h1>
                                    <h1 className="font-semibold text-gray-900">
                                        {/* <button className="flex items-center justify-center gap-2 rounded-xl bg-green-100 px-1.5 py-0.5 text-green-600">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                            Active
                                        </button> */}
                                        <Badge variant="success" withDot={true}>
                                            Active
                                        </Badge>
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className="mb-3 font-medium text-gray-700">
                                        Business Name
                                    </h1>
                                    <h1 className="font-semibold text-gray-900">
                                        PizzaPalace . BIZ-2050
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/**buttons */}
                        <div className="flex justify-end gap-6 border-t border-primary pt-6">
                            <IconButton className="bg-white">
                                Login as User
                            </IconButton>
                            <IconButton className="bg-white">
                                View Contract
                            </IconButton>
                            <IconButton className="bg-white">
                                <PencilIcon className="h-4 w-4" />
                                Edit Plan
                            </IconButton>
                        </div>
                    </div>
                    {/**plan summary */}
                    <p className="mt-5 text-lg font-semibold">Plan Summary</p>
                    <div className="mt-3 mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-4 pb-4 shadow-xs md:grid-cols-3 lg:grid-cols-3">
                        <StatCardAlt
                            title="Current Plan"
                            value="Pro Plan"
                            trend=""
                            trendText=""
                            trendType="positive"
                            trendIcon={TrendGreen}
                        />
                        <StatCardAlt
                            title="Billing Cycle"
                            value="Monthly (AED 450)"
                            trend=""
                            trendText=""
                            trendType="positive"
                            trendIcon={TrendGreen}
                        />
                        <StatCardAlt
                            title="Next Renewal"
                            value="12 Oct 2026"
                            trend=""
                            trendText=""
                            trendType="positive"
                            trendIcon={TrendGreen}
                        />
                    </div>
                    {/**installed apps table */}
                    <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center px-4 py-5">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Installed Apps & Add-ons
                            </h2>
                        </div>
                        <TableContainerOne>
                            <Table>
                                <TableHeader>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        App Details
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Billing Amount
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Payment Cycle
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Installed Date
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        <div className="flex items-center gap-1">
                                            Status <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {addOnData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.app.appname}
                                                </p>
                                                <p>{item.app.appby}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.billing.currency}
                                                </p>
                                                <p>
                                                    {item.billing.subCurrency}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.cycle}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                {item.installDate}
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant="success"
                                                    withDot={true}
                                                >
                                                    {item.status}
                                                </Badge>{' '}
                                            </TableCell>
                                            <TableCell>
                                                <ActionButton>
                                                    <Menu className="" />
                                                </ActionButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </div>
                    {/**Usage Snapshot */}

                    <p className="mt-5 text-lg font-semibold">Usage Snapshot</p>

                    <div className="mt-6 mb-6 grid grid-cols-4 gap-6">
                        <SimpleCard
                            title="File Storage"
                            storage="128GB "
                            outOf=" / 64 GB"
                        />
                        <SimpleCard
                            title="Seats Used"
                            storage="2 "
                            outOf=" / 10"
                        />
                        <SimpleCard
                            title="POS Terminal Status"
                            storage="2 "
                            outOf="/ 3 Devices"
                        />
                        <SimpleCard
                            title="WhatsApp Usage"
                            storage="8000 "
                            outOf=" Messages sent"
                        />
                    </div>
                    {/**Billing History */}
                    <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center px-4 py-5">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Billing History
                            </h2>
                        </div>
                        <TableContainerOne>
                            <Table>
                                <TableHeader>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Invoice ID
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        <div className="flex items-center gap-1">
                                            Date
                                            <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Amount
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        <div className="flex items-center gap-1">
                                            Status <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Type of Charges
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Discount
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {billingData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.bussinessId}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.date}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.billing.currency}
                                                </p>
                                                <p>
                                                    {item.billing.subCurrency}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                {/* <p className="">
                                                    {item.status}
                                                </p> */}
                                                <Badge
                                                    variant={
                                                        statusMap[
                                                            item.status
                                                        ] ?? 'gray'
                                                    }
                                                    withDot={true}
                                                    rounded="md"
                                                >
                                                    {item.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {item.typeOfCharges}
                                            </TableCell>
                                            <TableCell>
                                                {item.discount}
                                            </TableCell>
                                            <TableCell>
                                                <ActionButton>
                                                    <Menu className="" />
                                                </ActionButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </div>
                    {/**consuption */}
                    <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center px-4 py-5">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Current Consuption Breakdown
                            </h2>
                        </div>
                        <TableContainerOne>
                            <Table>
                                <TableHeader>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Invoice ID
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        <div className="flex items-center gap-1">
                                            Date
                                            <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Amount
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        <div className="flex items-center gap-1">
                                            Status <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Type of Charges
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Discount
                                    </TableHead>
                                    <TableHead className="text-md font-medium text-gray-700">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {billingData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.bussinessId}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.date}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p className="font-medium text-gray-900">
                                                    {item.billing.currency}
                                                </p>
                                                <p>
                                                    {item.billing.subCurrency}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                {/* <p className="">
                                                    {item.status}
                                                </p> */}
                                                <Badge
                                                    variant={
                                                        statusMap[
                                                            item.status
                                                        ] ?? 'gray'
                                                    }
                                                    withDot={true}
                                                    rounded="md"
                                                >
                                                    {item.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {item.typeOfCharges}
                                            </TableCell>
                                            <TableCell>
                                                {item.discount}
                                            </TableCell>
                                            <TableCell>
                                                <ActionButton>
                                                    <Menu className="" />
                                                </ActionButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </div>
                    {/**Payment Card */}
                    <div>
                        <h2>Auto-Pay Configuration</h2>
                        <span>Current Status</span> <span>Active</span>
                        <div className="flex w-[512px] justify-between rounded-lg border border-borderColor p-4">
                            <div className="flex gap-3">
                                <MasterCard />
                                <div>
                                    <h1>MasterCard ending in 1234</h1>
                                    <p>Expiry 06/2025</p>
                                </div>
                            </div>
                            <div>
                                <button>Primary Method</button>
                            </div>
                        </div>
                    </div>
                    {/**Notes Section */}
                    <Notes />
                </div>
            </main>
        </div>
    );
}
