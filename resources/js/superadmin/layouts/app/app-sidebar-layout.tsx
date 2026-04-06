import { type BreadcrumbItem } from '@/superadmin/types';
import { AppContent } from '@superadmin/components/app-content';
import { AppShell } from '@superadmin/components/app-shell';
import { AppSidebar } from '@superadmin/components/app-sidebar';
import { AppSidebarHeader } from '@superadmin/components/app-sidebar-header';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}
