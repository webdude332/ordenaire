// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainerOne,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/components/OuterTable';
// import Pagination from '@/components/Pagination';
// import InputSearch from '@/images/icons/inputSearch.svg?react';
// import Menu from '@/images/icons/menuVertical.svg?react';
// import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
// import TrendGreen from '@/images/icons/trendGreen.svg?react';
// import StatCardAlt from '../cards/StatCardAlt';
// import ActionButton from '../ui/ActionButton';
// import { Input } from '../ui/FormElements';
// import TableButton from '../ui/TableButton';

// const SubscriptionOverview = () => {
//     return (
//         <div>
//             <div className="mt-3 mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 shadow-xs md:grid-cols-2 lg:grid-cols-4">
//                 <StatCardAlt
//                     title="Monthly Recurring Revenue"
//                     value="$120,000"
//                     trend="12%"
//                     trendText="vs last month"
//                     trendType="positive"
//                     trendIcon={TrendGreen}
//                 />
//                 <StatCardAlt
//                     title="Active Subscribers"
//                     value="1,240"
//                     trend="4"
//                     trendText="New this month"
//                     trendType="positive"
//                     trendIcon={TrendGreen}
//                 />
//                 <StatCardAlt
//                     title="Action Required"
//                     value="6 Failed Payments"
//                     trend=""
//                     trendText="vs last month"
//                     trendType="negative"
//                     trendIcon={TrendGreen}
//                     coloredValue={true}
//                 />
//                 <StatCardAlt
//                     title="Churn Risk"
//                     value="91% Renewal Rate"
//                     trend=""
//                     trendText="vs last month"
//                     trendType="negative"
//                     trendIcon={TrendGreen}
//                 />
//             </div>
//             <div className="mt-8 border-t border-borderColor pt-8">
//                 <div>
//                     <div className="w-[300px]">
//                         <Input
//                             className="placeholder:text-md"
//                             placeholder="Search by business name"
//                             icon={InputSearch}
//                         />
//                     </div>
//                     <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
//                         <div className="flex items-center px-4 py-5">
//                             <h2 className="text-xl font-semibold text-gray-900">
//                                 Attention Required (Recent Alerts)
//                             </h2>
//                         </div>
//                         <TableContainerOne>
//                             <Table>
//                                 <TableHeader className="text-lg">
//                                     <TableHead className="font-semibold">
//                                         Business Name
//                                     </TableHead>
//                                     <TableHead className="font-semibold">
//                                         <div className="flex items-center gap-1">
//                                             Issue/Alert
//                                             <SelectorIcon />
//                                         </div>
//                                     </TableHead>
//                                     <TableHead className="font-semibold">
//                                         <div className="flex items-center gap-1">
//                                             Amount Pending
//                                             <SelectorIcon />
//                                         </div>
//                                     </TableHead>
//                                     <TableHead className="text-right font-semibold">
//                                         Actions
//                                     </TableHead>
//                                 </TableHeader>

//                                 <TableBody>
//                                     <TableRow>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-800">
//                                                 Burger Town
//                                             </p>
//                                             <p className="mt-0.5">UAE</p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <button className="flex items-center justify-center gap-2 rounded-full border border-[#FECDCA] bg-[#FEF3F2] px-1.5 py-1 text-xs font-medium text-[#B42318]">
//                                                 <span className="h-1.5 w-1.5 rounded-full bg-[#F04438]"></span>
//                                                 Payment Failed
//                                             </button>
//                                             <p className="mt-0.5">
//                                                 Card Declined
//                                             </p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-800">
//                                                 50.000
//                                             </p>
//                                             <p className="mt-0.5"> KWD</p>
//                                         </TableCell>
//                                         <TableCell className="flex justify-end gap-2">
//                                             <TableButton>Retry</TableButton>
//                                             <ActionButton>
//                                                 <Menu />
//                                             </ActionButton>
//                                         </TableCell>
//                                     </TableRow>
//                                     {/**Row 2 */}
//                                     <TableRow>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-800">
//                                                 PizzaPalace
//                                             </p>
//                                             <p className="mt-0.5">KSA</p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <button className="flex items-center justify-center gap-2 rounded-full border border-[#FECDCA] bg-[#FEF3F2] px-1.5 py-1 text-xs font-medium text-[#B42318]">
//                                                 <span className="h-1 w-1 rounded-full bg-[#F04438]"></span>
//                                                 Payment Failed
//                                             </button>
//                                             <p className="mt-0.5">
//                                                 Card Declined
//                                             </p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-800">
//                                                 20.000
//                                             </p>
//                                             <p className="mt-0.5"> KWD</p>
//                                         </TableCell>
//                                         <TableCell className="flex justify-end gap-2">
//                                             <TableButton>Retry</TableButton>
//                                             <ActionButton>
//                                                 <Menu />
//                                             </ActionButton>
//                                         </TableCell>
//                                     </TableRow>
//                                     {/**Row 3 */}
//                                     <TableRow>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-800">
//                                                 SushiSpot
//                                             </p>
//                                             <p className="mt-0.5">Kuwait</p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <button className="flex items-center justify-center gap-2 rounded-full border border-[#F9DBAF] bg-[#FEF6EE] px-1.5 py-1 text-xs font-medium text-[#B93815]">
//                                                 <span className="h-1.5 w-1.5 rounded-full bg-[#EF6820]"></span>
//                                                 Expiring Soon
//                                             </button>
//                                             <p className="mt-0.5">
//                                                 Ends in 2 days
//                                             </p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-800">
//                                                 950.000
//                                             </p>
//                                             <p className="mt-0.5"> KWD</p>
//                                         </TableCell>
//                                         <TableCell className="flex justify-end gap-2">
//                                             <TableButton>Extend +7</TableButton>
//                                             <ActionButton>
//                                                 <Menu />
//                                             </ActionButton>
//                                         </TableCell>
//                                     </TableRow>
//                                     {/**Row 4 */}
//                                     <TableRow>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-800">
//                                                 Taco Haven
//                                             </p>
//                                             <p className="mt-0.5">Kuwait</p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <button className="flex items-center justify-center gap-2 rounded-full border border-[#FECDCA] bg-[#FEF3F2] px-1.5 py-1 text-xs font-medium text-[#B42318]">
//                                                 <span className="h-1.5 w-1.5 rounded-full bg-[#F04438]"></span>
//                                                 Payment Failed
//                                             </button>
//                                             <p className="mt-0.5">
//                                                 Card Declined
//                                             </p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-800">
//                                                 1000.000
//                                             </p>
//                                             <p className="mt-0.5"> KWD</p>
//                                         </TableCell>
//                                         <TableCell className="flex justify-end gap-2">
//                                             <TableButton>Retry</TableButton>
//                                             <ActionButton>
//                                                 <Menu />
//                                             </ActionButton>
//                                         </TableCell>
//                                     </TableRow>
//                                     {/**Row 5 */}
//                                     <TableRow>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-800">
//                                                 PastPalace
//                                             </p>
//                                             <p className="mt-0.5">Kuwait</p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <button className="flex items-center justify-center gap-2 rounded-full border border-[#FECDCA] bg-[#FEF3F2] px-1.5 py-1 text-xs font-medium text-[#B42318]">
//                                                 <span className="h-1.5 w-1.5 rounded-full bg-[#F04438]"></span>
//                                                 Expired
//                                             </button>
//                                             <p className="mt-0.5">
//                                                 60+ Days Overdue
//                                             </p>
//                                         </TableCell>
//                                         <TableCell>
//                                             <p className="font-medium text-gray-800">
//                                                 1050.000
//                                             </p>
//                                             <p className="mt-0.5"> KWD</p>
//                                         </TableCell>
//                                         <TableCell className="flex justify-end gap-2">
//                                             <TableButton>
//                                                 Reactivate
//                                             </TableButton>
//                                             <ActionButton>
//                                                 <Menu />
//                                             </ActionButton>
//                                         </TableCell>
//                                     </TableRow>
//                                 </TableBody>
//                             </Table>
//                         </TableContainerOne>
//                         <Pagination />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SubscriptionOverview;

import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/OuterTable';
import Pagination from '@/components/Pagination';
import InputSearch from '@/images/icons/inputSearch.svg?react';
import Menu from '@/images/icons/menuVertical.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import TrendGreen from '@/images/icons/trendGreen.svg?react';
import Badge, { BadgeVariant } from '../Badge'; // Import your Badge
import StatCardAlt from '../cards/StatCardAlt';
import ActionButton from '../ui/ActionButton';
import { Input } from '../ui/FormElements';
import TableButton from '../ui/TableButton';

// --- TYPES ---
interface AlertItem {
    id: number;
    businessName: string;
    location: string;
    alert: {
        label: string;
        subText: string;
        variant: BadgeVariant; // Maps to your Badge colors
    };
    amount: {
        value: string;
        currency: string;
    };
    actionLabel: string;
}

const SubscriptionOverview = () => {
    // --- DYNAMIC DATA ---
    const tableData: AlertItem[] = [
        {
            id: 1,
            businessName: 'Burger Town',
            location: 'UAE',
            alert: {
                label: 'Payment Failed',
                subText: 'Card Declined',
                variant: 'error', // Red
            },
            amount: { value: '50.000', currency: 'KWD' },
            actionLabel: 'Retry',
        },
        {
            id: 2,
            businessName: 'PizzaPalace',
            location: 'KSA',
            alert: {
                label: 'Payment Failed',
                subText: 'Card Declined',
                variant: 'error', // Red
            },
            amount: { value: '20.000', currency: 'KWD' },
            actionLabel: 'Retry',
        },
        {
            id: 3,
            businessName: 'SushiSpot',
            location: 'Kuwait',
            alert: {
                label: 'Expiring Soon',
                subText: 'Ends in 2 days',
                variant: 'warning', // Orange
            },
            amount: { value: '950.000', currency: 'KWD' },
            actionLabel: 'Extend +7',
        },
        {
            id: 4,
            businessName: 'Taco Haven',
            location: 'Kuwait',
            alert: {
                label: 'Payment Failed',
                subText: 'Card Declined',
                variant: 'error', // Red
            },
            amount: { value: '1000.000', currency: 'KWD' },
            actionLabel: 'Retry',
        },
        {
            id: 5,
            businessName: 'PastPalace',
            location: 'Kuwait',
            alert: {
                label: 'Expired',
                subText: '60+ Days Overdue',
                variant: 'error', // Red
            },
            amount: { value: '1050.000', currency: 'KWD' },
            actionLabel: 'Reactivate',
        },
    ];

    return (
        <div>
            {/* --- STAT CARDS --- */}
            <div className="mt-3 mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 shadow-xs md:grid-cols-2 lg:grid-cols-4">
                <StatCardAlt
                    title="Monthly Recurring Revenue"
                    value="$120,000"
                    trend="12%"
                    trendText="vs last month"
                    trendType="positive"
                    trendIcon={TrendGreen}
                />
                <StatCardAlt
                    title="Active Subscribers"
                    value="1,240"
                    trend="4"
                    trendText="New this month"
                    trendType="positive"
                    trendIcon={TrendGreen}
                />
                <StatCardAlt
                    title="Action Required"
                    value="6 Failed Payments"
                    trend=""
                    trendText="vs last month"
                    trendType="negative"
                    trendIcon={TrendGreen}
                    coloredValue={true}
                />
                <StatCardAlt
                    title="Churn Risk"
                    value="91% Renewal Rate"
                    trend=""
                    trendText="vs last month"
                    trendType="negative"
                    trendIcon={TrendGreen}
                />
            </div>

            {/* --- TABLE SECTION --- */}
            <div className="mt-8 border-t border-borderColor pt-8">
                <div>
                    <div className="w-[300px]">
                        <Input
                            className="placeholder:text-md"
                            placeholder="Search by business name"
                            icon={InputSearch}
                        />
                    </div>
                    <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center px-4 py-5">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Attention Required (Recent Alerts)
                            </h2>
                        </div>
                        <TableContainerOne>
                            <Table>
                                <TableHeader className="text-lg">
                                    <TableHead className="font-semibold">
                                        Business Name
                                    </TableHead>
                                    <TableHead className="font-semibold">
                                        <div className="flex items-center gap-1">
                                            Issue/Alert
                                            <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="font-semibold">
                                        <div className="flex items-center gap-1">
                                            Amount Pending
                                            <SelectorIcon />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-right font-semibold">
                                        Actions
                                    </TableHead>
                                </TableHeader>

                                <TableBody>
                                    {tableData.map((item) => (
                                        <TableRow key={item.id}>
                                            {/* Column 1: Business */}
                                            <TableCell>
                                                <p className="font-medium text-gray-800">
                                                    {item.businessName}
                                                </p>
                                                <p className="mt-0.5">
                                                    {item.location}
                                                </p>
                                            </TableCell>

                                            {/* Column 2: Alert Badge */}
                                            <TableCell>
                                                <Badge
                                                    variant={item.alert.variant}
                                                    withDot={true}
                                                    rounded="full" // The screenshot shows pill shape here
                                                >
                                                    {item.alert.label}
                                                </Badge>
                                                <p className="mt-0.5 text-sm text-gray-500">
                                                    {item.alert.subText}
                                                </p>
                                            </TableCell>

                                            {/* Column 3: Amount */}
                                            <TableCell>
                                                <p className="font-medium text-gray-800">
                                                    {item.amount.value}
                                                </p>
                                                <p className="mt-0.5">
                                                    {' '}
                                                    {item.amount.currency}
                                                </p>
                                            </TableCell>

                                            {/* Column 4: Actions */}
                                            <TableCell className="flex justify-end gap-2">
                                                <TableButton>
                                                    {item.actionLabel}
                                                </TableButton>
                                                <ActionButton>
                                                    <Menu />
                                                </ActionButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionOverview;
