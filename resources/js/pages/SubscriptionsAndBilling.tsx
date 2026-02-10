import SidePannel from '@/components/SidePannel';
import SubscriptionOverview from '@/components/subscriptiontabs/SubscriptionOverview';
import TopBar from '@/components/TopBar';
import Dashboard from '../images/icons/dashBaordSvg.svg';

const SubscriptionsAndBilling = () => {
    const breadcrumbs = [
        {
            label: 'Subscription & Billing',
            isActive: false,
            href: '/subscriptionsandbilling',
        },
        {
            label: 'Subscriptions & Billing',
            isActive: true,
        },
    ];
    const tabs = [
        {
            label: 'Subscription Overview',
            isActive: true,
        },
    ];
    return (
        <>
            <div className="flex min-h-screen">
                <SidePannel />
                <main className="flex flex-1 flex-col">
                    <TopBar
                        title="Subscription Overview"
                        icon={Dashboard}
                        breadcrumbs={breadcrumbs}
                        tabs={tabs}
                    />
                    <div className="flex-1 px-8 py-6">
                        <SubscriptionOverview />
                    </div>
                </main>
            </div>
        </>
    );
};

export default SubscriptionsAndBilling;
