// import SidePannel from '@/admin/components/SidePannel';
// import TopBar from '@/admin/components/TopBar';
// import AdMarket from '@/shared/images/icons/adMarket.svg?react';
// import En from '@/shared/images/icons/us.svg?react';
// import { useEffect, useState } from 'react';
// import Dashboard from '../../shared/images/icons/dashBaordSvg.svg';
// import Categories from '../components/menutabs/Categories';
// import Items from '../components/menutabs/Items';
// import KitchenStations from '../components/menutabs/KitchenStations';

// type MenuTabType = 'categories' | 'items' | 'kitchen-stations';

// const Menu = () => {
//     const [activeTab, setActiveTab] = useState<MenuTabType>(() => {
//         const savedTab = localStorage.getItem('menu_active_tab');
//         return (savedTab as MenuTabType) || 'categories';
//     });

//     useEffect(() => {
//         localStorage.setItem('menu_active_tab', activeTab);
//     }, [activeTab]);

//     const breadcrumbs = [
//         {
//             label: 'Menu',
//             isActive: false,
//             href: '/superadmin/menu', // Adjust to match your exact route
//         },
//         {
//             label:
//                 activeTab === 'items'
//                     ? 'Items'
//                     : activeTab === 'kitchen-stations'
//                       ? 'Kitchen Stations'
//                       : 'Categories',
//             isActive: true,
//         },
//     ];

//     const tabs = [
//         {
//             label: 'Categories',
//             isActive: activeTab === 'categories',
//             onClick: () => setActiveTab('categories'),
//         },
//         {
//             label: 'Items',
//             isActive: activeTab === 'items',
//             onClick: () => setActiveTab('items'),
//         },
//         {
//             label: 'Kitchen Stations',
//             isActive: activeTab === 'kitchen-stations',
//             onClick: () => setActiveTab('kitchen-stations'),
//         },
//     ];

//     return (
//         <div className="flex min-h-screen">
//             <SidePannel />
//             <main className="flex flex-1 flex-col">
//                 <TopBar
//                     title="Menu"
//                     icon={Dashboard} // Reusing the icon import from your reference
//                     breadcrumbs={breadcrumbs}
//                     tabs={tabs}
//                     onNotificationClick={() => setNotifOpen(true)}
//                 />
//                 <div className="flex-1 px-8 py-6">
//                     {activeTab === 'categories' && <Categories />}
//                     {activeTab === 'items' && <Items />}
//                     {activeTab === 'kitchen-stations' && <KitchenStations />}
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default Menu;

import NotificationPanel from '@/admin/components/NotificationPanel';
import SidePannel from '@/admin/components/SidePannel';
import TopBar from '@/admin/components/TopBar';
import { useEffect, useState } from 'react';
import Dashboard from '../../shared/images/icons/dashBaordSvg.svg';
import Categories from '../components/menutabs/Categories';
import Items from '../components/menutabs/Items';
import KitchenStations from '../components/menutabs/KitchenStations';

type MenuTabType = 'categories' | 'items' | 'kitchen-stations';

const Menu = () => {
    const [notifOpen, setNotifOpen] = useState(false);

    const [activeTab, setActiveTab] = useState<MenuTabType>(() => {
        const savedTab = localStorage.getItem('menu_active_tab');
        return (savedTab as MenuTabType) || 'categories';
    });

    useEffect(() => {
        localStorage.setItem('menu_active_tab', activeTab);
    }, [activeTab]);

    const breadcrumbs = [
        {
            label: 'Menu',
            isActive: false,
            href: '/admin/menu',
        },
        {
            label:
                activeTab === 'items'
                    ? 'Items'
                    : activeTab === 'kitchen-stations'
                      ? 'Kitchen Stations'
                      : 'Categories',
            isActive: true,
        },
    ];

    const tabs = [
        {
            label: 'Items',
            isActive: activeTab === 'items',
            onClick: () => setActiveTab('items'),
        },
        {
            label: 'Categories',
            isActive: activeTab === 'categories',
            onClick: () => setActiveTab('categories'),
        },

        {
            label: 'Kitchen Stations',
            isActive: activeTab === 'kitchen-stations',
            onClick: () => setActiveTab('kitchen-stations'),
        },
    ];

    return (
        <div className="flex min-h-screen">
            <SidePannel />
            <main className="flex flex-1 flex-col">
                <TopBar
                    title="Menu"
                    icon={Dashboard}
                    breadcrumbs={breadcrumbs}
                    tabs={tabs}
                    onNotificationClick={() => setNotifOpen(true)}
                />
                <div className="flex-1 px-8 py-6">
                    {activeTab === 'items' && <Items />}
                    {activeTab === 'categories' && <Categories />}
                    {activeTab === 'kitchen-stations' && <KitchenStations />}
                </div>
            </main>

            <NotificationPanel
                open={notifOpen}
                onClose={() => setNotifOpen(false)}
            />
        </div>
    );
};

export default Menu;
