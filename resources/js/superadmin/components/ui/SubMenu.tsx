import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface MenuItem {
    label: string;
    onClick?: () => void;
}

interface SubMenuProps {
    items: MenuItem[];
    onClose: () => void;
    positionAbove?: boolean; 
}

export default function SubMenu({ items, onClose, positionAbove = false }: SubMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    return (
        <div
            ref={menuRef}
            className={`absolute right-0 z-50 bg-white rounded-xl w-[300px] shadow-xl border border-borderColor ${
                positionAbove ? 'bottom-full mb-2' : 'top-full mt-2'
            }`}
        >
            <div className="px-3 py-2 flex justify-end">
                <X
                    onClick={onClose}
                    className="cursor-pointer hover:bg-gray-100 rounded text-primary"
                    size={22}
                />
            </div>
            <div className="flex flex-col p-2 items-start gap-2">
                {items.map((menuItem, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            menuItem.onClick?.();
                            onClose();
                        }}
                        className="text-gray-800 font-medium w-full text-left hover:bg-gray-50 px-2 py-2 rounded cursor-pointer"
                    >
                        {menuItem.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
