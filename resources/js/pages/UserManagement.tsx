import React from 'react';
import SidePannel from '@/components/SidePannel';
import { Head } from '@inertiajs/react';

export default function UserManagement() {
    return (
        <div className="flex h-screen bg-gray-50 font-sans">
            <Head title="User Management" />
            <SidePannel />
            <div className="flex-1 p-10">
                <h1 className="text-3xl font-bold">Internal User Management</h1>
                <p className="mt-4 text-gray-600">List of users will go here.</p>
            </div>
        </div>
    );
}