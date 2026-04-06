// import { useState } from 'react';

// // --- ICONS ---
// import { default as ArrowDown } from '@shared/images/icons/chevron-down.svg?react';
// import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
// import Selector from '@shared/images/icons/selectorIcon.svg?react';
// import RadioGroup from '../ui/RadioGroup';
// import { Label, Input, Checkbox } from '../ui/FormElements';

// import { Plus } from 'lucide-react';
// import Badge from '../Badge'; // Using the Badge we perfected earlier
// import ActionButton from '../ui/ActionButton';
// import Button from '../ui/Button';
// import CustomDropdown from '../ui/CustomDropdown';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainerOne,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '../ui/Table';

// // --- TYPES ---
// interface BasePlan {
//     id: number;
//     name: string;
//     pricing: {
//         monthly: string;
//         yearly: string;
//     };
//     featuresCount: number;
//     subscribers: number;
//     status: 'Active' | 'Archived';
// }

// interface RegionalPricing {
//     id: number;
//     region: {
//         name: string;
//         code: 'UAE' | 'KSA';
//     };
//     basePlan: string;
//     pricing: {
//         monthly: string;
//         yearly: string;
//     };
//     subscribers: number;
//     status: 'Active' | 'Inactive';
// }

// // --- HELPER COMPONENTS ---
// const FlagIcon = ({ code }: { code: string }) => {
//     // You can replace these with actual SVG imports if you have them
//     const flags: Record<string, string> = {
//         UAE: '🇦🇪',
//         KSA: '🇸🇦',
//     };
//     return <span className="text-lg leading-none">{flags[code] || '🏳️'}</span>;
// };

// // Simple Dropdown Mock to match the screenshot controls
// const FilterButton = ({ label }: { label: string }) => (
//     <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
//         {label}
//         <ArrowDown className="h-4 w-4 text-gray-500" />
//     </button>
// );

// const PlansPricing = () => {
//     // --- STATE ---
//     const [activeTab, setActiveTab] = useState<'base' | 'regional'>('base');
//     const [selectedRegion, setSelectedRegion] = useState<string>('all');
//     const [selectedPlan, setSelectedPlan] = useState<string>('all');

//     // --- DATA ---
//     const basePlansData: BasePlan[] = [
//         {
//             id: 1,
//             name: 'Enterprise',
//             pricing: { monthly: '55.000 /mo', yearly: '550.000 /yr' },
//             featuresCount: 24,
//             subscribers: 12,
//             status: 'Active',
//         },
//         {
//             id: 2,
//             name: 'Pro',
//             pricing: { monthly: '35.000 /mo', yearly: '385.000 /yr' },
//             featuresCount: 14,
//             subscribers: 95,
//             status: 'Active',
//         },
//         {
//             id: 3,
//             name: 'Standard',
//             pricing: { monthly: '20.000 /mo', yearly: '220.000 /yr' },
//             featuresCount: 10,
//             subscribers: 185,
//             status: 'Archived',
//         },
//     ];

//     const regionalData: RegionalPricing[] = [
//         {
//             id: 1,
//             region: { name: 'UAE', code: 'UAE' },
//             basePlan: 'Standard',
//             pricing: {
//                 monthly: '249.000 AED /mo',
//                 yearly: '2,499.000 AED /yr',
//             },
//             subscribers: 412,
//             status: 'Active',
//         },
//         {
//             id: 2,
//             region: { name: 'Saudi Arabia', code: 'KSA' },
//             basePlan: 'Standard',
//             pricing: {
//                 monthly: '259.000 SAR /mo',
//                 yearly: '2,599.000 SAR /yr',
//             },
//             subscribers: 205,
//             status: 'Active',
//         },
//         {
//             id: 3,
//             region: { name: 'Saudi Arabia', code: 'KSA' },
//             basePlan: 'Pro',
//             pricing: {
//                 monthly: '359.000 SAR /mo',
//                 yearly: '3,599.000 SAR /yr',
//             },
//             subscribers: 88,
//             status: 'Active',
//         },
//         {
//             id: 4,
//             region: { name: 'UAE', code: 'UAE' },
//             basePlan: 'Pro',
//             pricing: {
//                 monthly: '389.000 AED /mo',
//                 yearly: '3,899.000 AED /yr',
//             },
//             subscribers: 50,
//             status: 'Active',
//         },
//     ];

//     return (
//         <div className="w-full space-y-6">
//             {/* --- TOP HEADER --- */}
//             <div>
//                 <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//                     {/* Tab Switcher (Styled like your code) */}
//                     <div className="flex w-fit gap-1 rounded-lg bg-gray-50 p-1">
//                         <button
//                             onClick={() => setActiveTab('base')}
//                             className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
//                                 activeTab === 'base'
//                                     ? 'bg-white text-gray-900 shadow-sm'
//                                     : 'text-gray-600 hover:text-gray-900'
//                             }`}
//                         >
//                             Base Plans
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('regional')}
//                             className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
//                                 activeTab === 'regional'
//                                     ? 'bg-white text-gray-900 shadow-sm'
//                                     : 'text-gray-600 hover:text-gray-900'
//                             }`}
//                         >
//                             Regional Pricing
//                         </button>
//                     </div>

//                     {/* Right Side Actions */}
//                     <div className="flex items-center gap-3">
//                         {activeTab === 'regional' && (
//                             <>
//                                 <div className="flex items-center gap-2">
//                                     <div>
//                                         <CustomDropdown
//                                             label=""
//                                             options={[
//                                                 {
//                                                     label: 'Saudi Arabia',
//                                                     value: 'saudiarabia',
//                                                 },
//                                                 {
//                                                     label: 'Qatar',
//                                                     value: 'qatar',
//                                                 },
//                                                 {
//                                                     label: 'Bahrain',
//                                                     value: 'bahrain',
//                                                 },
//                                                 {
//                                                     label: 'Kuwait',
//                                                     value: 'kuwait',
//                                                 },
//                                             ]}
//                                             value={selectedRegion}
//                                             onChange={setSelectedRegion}
//                                             placeholder="Region: All"
//                                         />
//                                     </div>
//                                     <div>
//                                         <CustomDropdown
//                                             label=""
//                                             options={[
//                                                 {
//                                                     label: 'Super Admin',
//                                                     value: 'super admin',
//                                                 },
//                                                 {
//                                                     label: 'Admin',
//                                                     value: 'admin',
//                                                 },
//                                                 {
//                                                     label: 'Collaborator',
//                                                     value: 'Collaborator',
//                                                 },
//                                             ]}
//                                             value={selectedPlan}
//                                             onChange={setSelectedPlan}
//                                             placeholder="Plan: All"
//                                         />
//                                     </div>
//                                 </div>
//                             </>
//                         )}
//                         <Button className="py-2.5">
//                             <Plus className="h-4 w-4" />
//                             {activeTab === 'base'
//                                 ? 'Add New Plan'
//                                 : 'Add Regional Pricing'}
//                         </Button>
//                     </div>
//                 </div>
//             </div>

//             {/* --- MAIN CONTENT TABLES --- */}
//             <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
//                 {/* --- TAB 1: BASE PLANS --- */}
//                 {activeTab === 'base' && (
//                     <>
//                         <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//                             <h2 className="text-base font-semibold text-gray-900">
//                                 Plan List Table
//                             </h2>
//                         </div>
//                         <TableContainerOne className="rounded-b-xl border-none shadow-none">
//                             <Table>
//                                 <TableHeader>
//                                     <TableHead className="py-4 pl-6 text-xs font-semibold">
//                                         Plan Name
//                                     </TableHead>
//                                     <TableHead className="py-4 text-xs font-semibold">
//                                         Base Pricing (KWD)
//                                     </TableHead>
//                                     <TableHead className="py-4 text-xs font-semibold">
//                                         Features
//                                     </TableHead>
//                                     <TableHead className="py-4 text-center text-xs font-semibold">
//                                         Subscribers
//                                     </TableHead>
//                                     <TableHead className="py-4 text-xs font-semibold">
//                                         <div className="flex items-center gap-1">
//                                             Status
//                                             <Selector className="h-3 w-3" />
//                                         </div>
//                                     </TableHead>
//                                     <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
//                                         Actions
//                                     </TableHead>
//                                 </TableHeader>
//                                 <TableBody>
//                                     {basePlansData.map((plan) => (
//                                         <TableRow
//                                             key={plan.id}
//                                             className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
//                                         >
//                                             <TableCell className="py-4 pl-6">
//                                                 <span className="font-semibold text-gray-900">
//                                                     {plan.name}
//                                                 </span>
//                                             </TableCell>
//                                             <TableCell className="py-4">
//                                                 <div className="text-sm font-medium text-gray-900">
//                                                     {plan.pricing.monthly}
//                                                 </div>
//                                                 <div className="text-xs text-gray-500">
//                                                     {plan.pricing.yearly}
//                                                 </div>
//                                             </TableCell>
//                                             <TableCell className="py-4 font-medium text-gray-700">
//                                                 {plan.featuresCount} Active
//                                             </TableCell>
//                                             <TableCell className="py-4 text-center font-medium text-gray-700">
//                                                 {plan.subscribers}
//                                             </TableCell>
//                                             <TableCell className="py-4">
//                                                 <Badge
//                                                     variant={
//                                                         plan.status === 'Active'
//                                                             ? 'active'
//                                                             : 'archived'
//                                                     }
//                                                     withDot={true}
//                                                     rounded="md"
//                                                 >
//                                                     {plan.status}
//                                                 </Badge>
//                                             </TableCell>
//                                             <TableCell className="flex justify-end py-4 pr-6 text-right">
//                                                 <ActionButton>
//                                                     <PencilIcon className="h-4 w-4 text-gray-400" />
//                                                 </ActionButton>
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainerOne>
//                     </>
//                 )}

//                 {/* --- TAB 2: REGIONAL PRICING --- */}
//                 {activeTab === 'regional' && (
//                     <>
//                         <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
//                             <h2 className="text-base font-semibold text-gray-900">
//                                 Regional Pricing Support
//                             </h2>
//                         </div>
//                         <TableContainerOne className="rounded-b-xl border-none shadow-none">
//                             <Table>
//                                 <TableHeader>
//                                     <TableHead className="py-4 pl-6 text-xs font-semibold">
//                                         Region
//                                     </TableHead>
//                                     <TableHead className="py-4 text-xs font-semibold">
//                                         Base Plan
//                                     </TableHead>
//                                     <TableHead className="py-4 text-xs font-semibold">
//                                         Local Pricing
//                                     </TableHead>
//                                     <TableHead className="py-4 text-center text-xs font-semibold">
//                                         Subscribers
//                                     </TableHead>
//                                     <TableHead className="py-4 text-xs font-semibold">
//                                         <div className="flex items-center gap-1">
//                                             Status
//                                             <Selector className="h-3 w-3" />
//                                         </div>
//                                     </TableHead>
//                                     <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
//                                         Actions
//                                     </TableHead>
//                                 </TableHeader>
//                                 <TableBody>
//                                     {regionalData.map((item) => (
//                                         <TableRow
//                                             key={item.id}
//                                             className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
//                                         >
//                                             <TableCell className="py-4 pl-6">
//                                                 <div className="flex items-center gap-2">
//                                                     <FlagIcon
//                                                         code={item.region.code}
//                                                     />
//                                                     <span className="font-medium text-gray-900">
//                                                         {item.region.name}
//                                                     </span>
//                                                 </div>
//                                             </TableCell>
//                                             <TableCell className="py-4 font-medium text-gray-700">
//                                                 {item.basePlan}
//                                             </TableCell>
//                                             <TableCell className="py-4">
//                                                 <div className="text-sm font-medium text-gray-900">
//                                                     {item.pricing.monthly}
//                                                 </div>
//                                                 <div className="text-xs text-gray-500">
//                                                     {item.pricing.yearly}
//                                                 </div>
//                                             </TableCell>
//                                             <TableCell className="py-4 text-center font-medium text-gray-700">
//                                                 {item.subscribers}
//                                             </TableCell>
//                                             <TableCell className="py-4">
//                                                 <Badge
//                                                     variant="active"
//                                                     withDot={true}
//                                                     rounded="md"
//                                                 >
//                                                     {item.status}
//                                                 </Badge>
//                                             </TableCell>
//                                             <TableCell className="flex justify-end py-4 pr-6 text-right">
//                                                 <ActionButton>
//                                                     <PencilIcon className="h-4 w-4 text-gray-400" />
//                                                 </ActionButton>
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainerOne>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PlansPricing;

import { useState } from 'react';

// --- ICONS ---
import PencilIcon from '@shared/images/icons/pencilIcon.svg?react';
import Selector from '@shared/images/icons/selectorIcon.svg?react';

import { Plus } from 'lucide-react';
import Badge from '../Badge';
// import AddNewPlanModal from '../Modals/AddNewPlanModal';
import AddNewPlanModal from '../Modals/AddNewPlan';
// import EditPlanModal from '../Modals/EditPlanModal';
import AddRegionalPricing from '../Modals/AddRegionalPricing';
import EditPlanModal from '../Modals/EditNewPlanModal';
import EditRegionalPricing from '../Modals/EditRegionalPricing';
import ActionButton from '../ui/ActionButton';
import Button from '../ui/Button';
import CustomDropdown from '../ui/CustomDropdown';
import {
    Table,
    TableBody,
    TableCell,
    TableContainerOne,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/Table';

// --- TYPES ---
interface BasePlan {
    id: number;
    name: string;
    pricing: {
        monthly: string;
        yearly: string;
    };
    featuresCount: number;
    subscribers: number;
    status: 'Active' | 'Archived';
}

interface RegionalPricing {
    id: number;
    region: {
        name: string;
        code: 'UAE' | 'KSA';
    };
    basePlan: string;
    pricing: {
        monthly: string;
        yearly: string;
    };
    subscribers: number;
    status: 'Active' | 'Inactive';
}

// --- HELPER COMPONENTS ---
const FlagIcon = ({ code }: { code: string }) => {
    const flags: Record<string, string> = {
        UAE: '🇦🇪',
        KSA: '🇸🇦',
    };
    return <span className="text-lg leading-none">{flags[code] || '🏳️'}</span>;
};

const PlansPricing = () => {
    // --- STATE ---
    const [activeTab, setActiveTab] = useState<'base' | 'regional'>('base');
    const [selectedRegion, setSelectedRegion] = useState<string>('all');
    const [selectedPlan, setSelectedPlan] = useState<string>('all');

    // Modal state
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEditPlan, setSelectedEditPlan] = useState<BasePlan | null>(
        null,
    );
    const [isAddRegionalOpen, setIsAddRegionalOpen] = useState(false);
    const [isEditRegionalOpen, setIsEditRegionalOpen] = useState(false);
    const [selectedRegionalItem, setSelectedRegionalItem] =
        useState<RegionalPricing | null>(null);
    // --- DATA ---
    const basePlansData: BasePlan[] = [
        {
            id: 1,
            name: 'Enterprise',
            pricing: { monthly: '55.000 /mo', yearly: '550.000 /yr' },
            featuresCount: 24,
            subscribers: 12,
            status: 'Active',
        },
        {
            id: 2,
            name: 'Pro',
            pricing: { monthly: '35.000 /mo', yearly: '385.000 /yr' },
            featuresCount: 14,
            subscribers: 95,
            status: 'Active',
        },
        {
            id: 3,
            name: 'Standard',
            pricing: { monthly: '20.000 /mo', yearly: '220.000 /yr' },
            featuresCount: 10,
            subscribers: 185,
            status: 'Archived',
        },
    ];

    const regionalData: RegionalPricing[] = [
        {
            id: 1,
            region: { name: 'UAE', code: 'UAE' },
            basePlan: 'Standard',
            pricing: {
                monthly: '249.000 AED /mo',
                yearly: '2,499.000 AED /yr',
            },
            subscribers: 412,
            status: 'Active',
        },
        {
            id: 2,
            region: { name: 'Saudi Arabia', code: 'KSA' },
            basePlan: 'Standard',
            pricing: {
                monthly: '259.000 SAR /mo',
                yearly: '2,599.000 SAR /yr',
            },
            subscribers: 205,
            status: 'Active',
        },
        {
            id: 3,
            region: { name: 'Saudi Arabia', code: 'KSA' },
            basePlan: 'Pro',
            pricing: {
                monthly: '359.000 SAR /mo',
                yearly: '3,599.000 SAR /yr',
            },
            subscribers: 88,
            status: 'Active',
        },
        {
            id: 4,
            region: { name: 'UAE', code: 'UAE' },
            basePlan: 'Pro',
            pricing: {
                monthly: '389.000 AED /mo',
                yearly: '3,899.000 AED /yr',
            },
            subscribers: 50,
            status: 'Active',
        },
    ];

    const handleEditClick = (plan: BasePlan) => {
        setSelectedEditPlan(plan);
        setIsEditModalOpen(true);
    };

    return (
        <div className="w-full space-y-6">
            {/* --- TOP HEADER --- */}
            <div>
                <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Tab Switcher */}
                    <div className="flex w-fit gap-1 rounded-lg bg-gray-50 p-1">
                        <button
                            onClick={() => setActiveTab('base')}
                            className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === 'base'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Base Plans
                        </button>
                        <button
                            onClick={() => setActiveTab('regional')}
                            className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === 'regional'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Regional Pricing
                        </button>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        {activeTab === 'regional' && (
                            <div className="flex items-center gap-2">
                                <CustomDropdown
                                    containerClassName="w-40"
                                    label=""
                                    options={[
                                        {
                                            label: 'Saudi Arabia',
                                            value: 'saudiarabia',
                                        },
                                        { label: 'Qatar', value: 'qatar' },
                                        { label: 'Bahrain', value: 'bahrain' },
                                        { label: 'Kuwait', value: 'kuwait' },
                                    ]}
                                    value={selectedRegion}
                                    onChange={setSelectedRegion}
                                    placeholder="Region: All"
                                />
                                <CustomDropdown
                                    label=""
                                    containerClassName="w-40"
                                    options={[
                                        {
                                            label: 'Super Admin',
                                            value: 'super admin',
                                        },
                                        { label: 'Admin', value: 'admin' },
                                        {
                                            label: 'Collaborator',
                                            value: 'Collaborator',
                                        },
                                    ]}
                                    value={selectedPlan}
                                    onChange={setSelectedPlan}
                                    placeholder="Plan: All"
                                />
                            </div>
                        )}
                        <Button
                            className="py-2.5"
                            // onClick={() => setIsAddModalOpen(true)}
                            onClick={() =>
                                activeTab === 'base'
                                    ? setIsAddModalOpen(true)
                                    : setIsAddRegionalOpen(true)
                            }
                        >
                            <Plus className="h-4 w-4" />
                            {activeTab === 'base'
                                ? 'Add New Plan'
                                : 'Add Regional Pricing'}
                        </Button>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT TABLES --- */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                {/* --- TAB 1: BASE PLANS --- */}
                {activeTab === 'base' && (
                    <>
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <h2 className="text-base font-semibold text-gray-900">
                                Plan List Table
                            </h2>
                        </div>
                        <TableContainerOne className="rounded-b-xl border-none shadow-none">
                            <Table>
                                <TableHeader>
                                    <TableHead className="py-4 pl-6 text-xs font-semibold">
                                        Plan Name
                                    </TableHead>
                                    <TableHead className="py-4 text-right text-xs font-semibold">
                                        Base Pricing (KWD)
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Features
                                    </TableHead>
                                    <TableHead className="py-4 text-center text-xs font-semibold">
                                        Subscribers
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        <div className="flex items-center gap-1">
                                            Status
                                            <Selector className="h-3 w-3" />
                                        </div>
                                    </TableHead>
                                    <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {basePlansData.map((plan) => (
                                        <TableRow
                                            key={plan.id}
                                            className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                        >
                                            <TableCell className="py-4 pl-6">
                                                <span className="font-semibold text-gray-900">
                                                    {plan.name}
                                                </span>
                                            </TableCell>
                                            <TableCell className="py-4 text-right">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {plan.pricing.monthly}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {plan.pricing.yearly}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 font-medium text-gray-700">
                                                {plan.featuresCount} Active
                                            </TableCell>
                                            <TableCell className="py-4 text-center font-medium text-gray-700">
                                                {plan.subscribers}
                                            </TableCell>
                                            <TableCell className="py-4">
                                                <Badge
                                                    variant={
                                                        plan.status === 'Active'
                                                            ? 'active'
                                                            : 'archived'
                                                    }
                                                    withDot={true}
                                                    rounded="md"
                                                >
                                                    {plan.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="flex justify-end py-4 pr-6 text-right">
                                                <ActionButton
                                                    onClick={() =>
                                                        handleEditClick(plan)
                                                    }
                                                >
                                                    <PencilIcon className="h-4 w-4 text-gray-400" />
                                                </ActionButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </>
                )}

                {/* --- TAB 2: REGIONAL PRICING --- */}
                {activeTab === 'regional' && (
                    <>
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <h2 className="text-base font-semibold text-gray-900">
                                Regional Pricing Support
                            </h2>
                        </div>
                        <TableContainerOne className="rounded-b-xl border-none shadow-none">
                            <Table>
                                <TableHeader>
                                    <TableHead className="py-4 pl-6 text-xs font-semibold">
                                        Region
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        Base Plan
                                    </TableHead>
                                    <TableHead className="py-4 text-right text-xs font-semibold">
                                        Local Pricing
                                    </TableHead>
                                    <TableHead className="py-4 text-center text-right text-xs font-semibold">
                                        Subscribers
                                    </TableHead>
                                    <TableHead className="py-4 text-xs font-semibold">
                                        <div className="flex items-center gap-1">
                                            Status
                                            <Selector className="h-3 w-3" />
                                        </div>
                                    </TableHead>
                                    <TableHead className="py-4 pr-6 text-right text-xs font-semibold">
                                        Actions
                                    </TableHead>
                                </TableHeader>
                                <TableBody>
                                    {regionalData.map((item) => (
                                        <TableRow
                                            key={item.id}
                                            className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                        >
                                            <TableCell className="py-4 pl-6">
                                                <div className="flex items-center gap-2">
                                                    <FlagIcon
                                                        code={item.region.code}
                                                    />
                                                    <span className="font-medium text-gray-900">
                                                        {item.region.name}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 font-medium text-gray-700">
                                                {item.basePlan}
                                            </TableCell>
                                            <TableCell className="py-4 text-right">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {item.pricing.monthly}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {item.pricing.yearly}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 text-right font-medium text-gray-700">
                                                {item.subscribers}
                                            </TableCell>
                                            <TableCell className="py-4">
                                                <Badge
                                                    variant="active"
                                                    withDot={true}
                                                    rounded="md"
                                                >
                                                    {item.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="flex justify-end py-4 pr-6 text-right">
                                                {/* <ActionButton>
                                                    <PencilIcon className="h-4 w-4 text-gray-400" />
                                                </ActionButton> */}
                                                <ActionButton
                                                    onClick={() => {
                                                        setSelectedRegionalItem(
                                                            item,
                                                        );
                                                        setIsEditRegionalOpen(
                                                            true,
                                                        );
                                                    }}
                                                >
                                                    <PencilIcon className="h-4 w-4 text-gray-400" />
                                                </ActionButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainerOne>
                    </>
                )}
            </div>

            {/* ── Add New Plan Modal ─────────────────────────────────── */}
            <AddNewPlanModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onConfirm={(data) => {
                    console.log('New plan:', data);
                    setIsAddModalOpen(false);
                }}
            />

            {/* ── Edit Plan Modal ────────────────────────────────────── */}
            {isEditModalOpen && selectedEditPlan && (
                <EditPlanModal
                    isOpen={isEditModalOpen}
                    onClose={() => {
                        setIsEditModalOpen(false);
                        setSelectedEditPlan(null);
                    }}
                    onConfirm={(data) => {
                        console.log('Updated plan:', data);
                        setIsEditModalOpen(false);
                        setSelectedEditPlan(null);
                    }}
                    plan={{
                        name: selectedEditPlan.name,
                        monthlyPrice: selectedEditPlan.pricing.monthly.replace(
                            ' /mo',
                            '',
                        ),
                        yearlyPrice: selectedEditPlan.pricing.yearly.replace(
                            ' /yr',
                            '',
                        ),
                        status:
                            selectedEditPlan.status === 'Active'
                                ? 'active'
                                : 'archived',
                    }}
                />
            )}
            <AddRegionalPricing
                isOpen={isAddRegionalOpen}
                onClose={() => setIsAddRegionalOpen(false)}
                onConfirm={(data) => {
                    console.log(data);
                    setIsAddRegionalOpen(false);
                }}
            />

            {isEditRegionalOpen && selectedRegionalItem && (
                <EditRegionalPricing
                    isOpen={isEditRegionalOpen}
                    onClose={() => setIsEditRegionalOpen(false)}
                    onConfirm={(data) => {
                        console.log(data);
                        setIsEditRegionalOpen(false);
                    }}
                    onDelete={() =>
                        console.log('deleted', selectedRegionalItem)
                    }
                    pricing={{
                        country: selectedRegionalItem.region.code.toLowerCase(),
                        targetBasePlan:
                            selectedRegionalItem.basePlan.toLowerCase(),
                        monthlyPrice: selectedRegionalItem.pricing.monthly,
                        annualPrice: selectedRegionalItem.pricing.yearly,
                        regionLabel: selectedRegionalItem.region.name,
                        planLabel: selectedRegionalItem.basePlan,
                    }}
                />
            )}
        </div>
    );
};

export default PlansPricing;
