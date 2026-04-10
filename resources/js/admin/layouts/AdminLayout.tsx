import { type PropsWithChildren } from 'react';
import SidePannel from '../components/SidePannel';

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-gray-900 text-white">
                <SidePannel />
            </aside>
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}
