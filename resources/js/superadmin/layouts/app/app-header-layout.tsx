import { type BreadcrumbItem } from '@/superadmin/types';
import { AppContent } from '@superadmin/components/app-content';
import { AppHeader } from '@superadmin/components/app-header';
import { AppShell } from '@superadmin/components/app-shell';
import type { PropsWithChildren } from 'react';

export default function AppHeaderLayout({
    children,
    breadcrumbs,
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell>
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent>{children}</AppContent>
        </AppShell>
    );
}
