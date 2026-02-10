import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/OuterTable';
import Menu from '@/images/icons/menuVertical.svg?react';
import SelectorIcon from '@/images/icons/selectorIcon.svg?react';
import TrendGreen from '@/images/icons/trendGreen.svg?react';
import StatCardAlt from '../cards/StatCardAlt';
import ActionButton from '../ui/ActionButton';
import { Input } from '../ui/FormElements';
import Pagination from '../ui/Pagination';
import TableButton from '../ui/TableButton';
const SubscriptionOverview = () => {
    return (
        <div>
            <div className="mb-6 grid grid-cols-1 gap-6 divide-x divide-gray-200 rounded-lg border border-gray-200 pt-6 pb-6 shadow-xs md:grid-cols-2 lg:grid-cols-4">
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
            <div>
                <div>
                    <Input className="w-[300px]" placeholder="Search" />
                    <div className="mt-8 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center px-4 py-5">
                            <h2 className="text-base font-semibold text-gray-900">
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
                                    <TableRow>
                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                Burger Town
                                            </p>
                                            <p className="mt-0.5">UAE</p>
                                        </TableCell>
                                        <TableCell>
                                            <button className="flex items-center justify-center gap-2 rounded-full border border-[#FECDCA] bg-[#FEF3F2] px-1.5 py-1 text-xs font-medium text-[#B42318]">
                                                <span className="h-1 w-1 rounded-full bg-[#F04438]"></span>
                                                Payment Failed
                                            </button>
                                            <p className="mt-0.5">
                                                Card Declined
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                50.000
                                            </p>
                                            <p className="mt-0.5"> KWD</p>
                                        </TableCell>
                                        <TableCell className="flex justify-end gap-2">
                                            <TableButton>Retry</TableButton>
                                            <ActionButton>
                                                <Menu />
                                            </ActionButton>
                                        </TableCell>
                                    </TableRow>
                                    {/**Row 2 */}
                                    <TableRow>
                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                PizzaPalace
                                            </p>
                                            <p className="mt-0.5">KSA</p>
                                        </TableCell>
                                        <TableCell>
                                            <button className="flex items-center justify-center gap-2 rounded-full border border-[#FECDCA] bg-[#FEF3F2] px-1.5 py-1 text-xs font-medium text-[#B42318]">
                                                <span className="h-1 w-1 rounded-full bg-[#F04438]"></span>
                                                Payment Failed
                                            </button>
                                            <p className="mt-0.5">
                                                Card Declined
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                20.000
                                            </p>
                                            <p className="mt-0.5"> KWD</p>
                                        </TableCell>
                                        <TableCell className="flex justify-end gap-2">
                                            <TableButton>Retry</TableButton>
                                            <ActionButton>
                                                <Menu />
                                            </ActionButton>
                                        </TableCell>
                                    </TableRow>
                                    {/**Row 3 */}
                                    <TableRow>
                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                SushiSpot
                                            </p>
                                            <p className="mt-0.5">Kuwait</p>
                                        </TableCell>
                                        <TableCell>
                                            <button className="flex items-center justify-center gap-2 rounded-full border border-[#FECDCA] bg-[#FEF3F2] px-1.5 py-1 text-xs font-medium text-[#B42318]">
                                                <span className="h-1 w-1 rounded-full bg-[#F04438]"></span>
                                                Expiring Soon
                                            </button>
                                            <p className="mt-0.5">
                                                Ends in 2 days
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                950.000
                                            </p>
                                            <p className="mt-0.5"> KWD</p>
                                        </TableCell>
                                        <TableCell className="flex justify-end gap-2">
                                            <TableButton>Extend +7</TableButton>
                                            <ActionButton>
                                                <Menu />
                                            </ActionButton>
                                        </TableCell>
                                    </TableRow>
                                    {/**Row 4 */}
                                    <TableRow>
                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                Taco Haven
                                            </p>
                                            <p className="mt-0.5">Kuwait</p>
                                        </TableCell>
                                        <TableCell>
                                            <button className="flex items-center justify-center gap-2 rounded-full border border-[#FECDCA] bg-[#FEF3F2] px-1.5 py-1 text-xs font-medium text-[#B42318]">
                                                <span className="h-1 w-1 rounded-full bg-[#F04438]"></span>
                                                Payment Failed
                                            </button>
                                            <p className="mt-0.5">
                                                Card Declined
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                1000.000
                                            </p>
                                            <p className="mt-0.5"> KWD</p>
                                        </TableCell>
                                        <TableCell className="flex justify-end gap-2">
                                            <TableButton>Retry</TableButton>
                                            <ActionButton>
                                                <Menu />
                                            </ActionButton>
                                        </TableCell>
                                    </TableRow>
                                    {/**Row 5 */}
                                    <TableRow>
                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                PastPalace
                                            </p>
                                            <p className="mt-0.5">Kuwait</p>
                                        </TableCell>
                                        <TableCell>
                                            <button className="flex items-center justify-center gap-2 rounded-full border border-[#FECDCA] bg-[#FEF3F2] px-1.5 py-1 text-xs font-medium text-[#B42318]">
                                                <span className="h-1 w-1 rounded-full bg-[#F04438]"></span>
                                                Payment Failed
                                            </button>
                                            <p className="mt-0.5">
                                                Card Declined
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className="font-medium text-gray-800">
                                                1050.000
                                            </p>
                                            <p className="mt-0.5"> KWD</p>
                                        </TableCell>
                                        <TableCell className="flex justify-end gap-2">
                                            <TableButton>
                                                Reactivate
                                            </TableButton>
                                            <ActionButton>
                                                <Menu />
                                            </ActionButton>
                                        </TableCell>
                                    </TableRow>
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
