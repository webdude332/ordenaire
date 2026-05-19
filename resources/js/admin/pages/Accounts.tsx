import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import { useEffect, useState } from 'react';
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg'; // Using the same icon placeholder

// Importing components from the accountstabs directory
import DailyClosing from '../components/accountstabs/DailyClosing';
import Expenses from '../components/accountstabs/Expenses';
import Overview from '../components/accountstabs/Overview';
import Payables from '../components/accountstabs/Payables';
import PayRoll from '../components/accountstabs/PayRoll';
import Taxes from '../components/accountstabs/Taxes';
import Transactions from '../components/accountstabs/Transactions';

type AccountsTabType =
    | 'overview'
    | 'payables'
    | 'payroll'
    | 'expenses'
    | 'taxes'
    | 'daily-closings'
    | 'transactions';

const Accounts = () => {
    const [notifOpen, setNotifOpen] = useState(false);

    const [activeTab, setActiveTab] = useState<AccountsTabType>(() => {
        const savedTab = localStorage.getItem('accounts_active_tab');
        return (savedTab as AccountsTabType) || 'overview';
    });

    useEffect(() => {
        localStorage.setItem('accounts_active_tab', activeTab);
    }, [activeTab]);

    // Helper object to map tab types to their display labels
    const tabLabels: Record<AccountsTabType, string> = {
        overview: 'Overview',
        payables: 'Payables (Suppliers)',
        payroll: 'Payroll (Salaries)',
        expenses: 'Expenses (OpEx)',
        taxes: 'Taxes',
        'daily-closings': 'Daily Closings',
        transactions: 'Transactions (Log)',
    };

    const breadcrumbs = [
        {
            label: 'Accounts',
            isActive: false,
            href: '/admin/accounts', // Assuming this is your route
        },
        {
            label: tabLabels[activeTab],
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Overview',
            isActive: activeTab === 'overview',
            onClick: () => setActiveTab('overview'),
        },
        {
            label: 'Payables (Suppliers)',
            isActive: activeTab === 'payables',
            onClick: () => setActiveTab('payables'),
        },
        {
            label: 'Payroll (Salaries)',
            isActive: activeTab === 'payroll',
            onClick: () => setActiveTab('payroll'),
        },
        {
            label: 'Expenses (OpEx)',
            isActive: activeTab === 'expenses',
            onClick: () => setActiveTab('expenses'),
        },
        {
            label: 'Taxes',
            isActive: activeTab === 'taxes',
            onClick: () => setActiveTab('taxes'),
        },
        {
            label: 'Daily Closings',
            isActive: activeTab === 'daily-closings',
            onClick: () => setActiveTab('daily-closings'),
        },
        {
            label: 'Transactions (Log)',
            isActive: activeTab === 'transactions',
            onClick: () => setActiveTab('transactions'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Accounts - Dashboard"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'overview' && <Overview />}
                    {activeTab === 'payables' && <Payables />}
                    {activeTab === 'payroll' && <PayRoll />}
                    {activeTab === 'expenses' && <Expenses />}
                    {activeTab === 'taxes' && <Taxes />}
                    {activeTab === 'daily-closings' && <DailyClosing />}
                    {activeTab === 'transactions' && <Transactions />}
                </div>
            </main>

            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
};

export default Accounts;
