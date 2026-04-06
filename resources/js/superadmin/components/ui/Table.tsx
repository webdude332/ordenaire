import React from 'react';

export const TableContainer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>
        {children}
    </div>
);
export const TableContainerOne = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`overflow-hidden rounded-t-xl border border-gray-200 bg-white shadow-sm ${className}`}>
        {children}
    </div>
);

export const Table = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <table className={`w-full text-left text-sm text-gray-500 ${className}`}>
        {children}
    </table>
);

export const TableHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <thead className={`bg-gray-50 text-xs text-gray-500 border-b border-borderColor ${className}`}>
        <tr>{children}</tr>
    </thead>
);

export const TableHead = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <th scope="col" className={`px-6 py-4 font-medium ${className}`}>
        {children}
    </th>
);

export const TableBody = ({ children }: { children: React.ReactNode }) => (
    <tbody className="divide-y divide-gray-200 bg-white">
        {children}
    </tbody>
);

export const TableRow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <tr className={`hover:bg-gray-50 ${className}`}>
        {children}
    </tr>
);

export const TableCell = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <td className={`px-6 py-4 ${className}`}>
        {children}
    </td>
);