import ArrowDown from '@/images/icons/chevron-down.svg?react'
import SearchIcon from '@/images/icons/searchIcon.svg?react' // Ensure you have a search icon
import { useState, useMemo, useRef, useEffect } from 'react';

interface Option {
    label: string;
    value: string;
    icon?: React.ReactNode;
}

interface SearchableDropdownProps {
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    labelClassName?: string;
    renderOption?: (option: Option) => React.ReactNode;
}

const SearchableDropdown = ({
    label,
    options,
    value,
    onChange,
    placeholder = 'Select option',
    required = false,
    disabled = false,
    renderOption,
    labelClassName = 'text-sm',
}: SearchableDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    // Filter logic
    const filteredOptions = useMemo(() => {
        return options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
            option.value.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [options, searchTerm]);

    // Focus input when dropdown opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
            if (!isOpen) setSearchTerm(''); 
        }
    };

    return (
        <div className="relative space-y-2">
            <label className={`block font-medium text-gray-700 ${labelClassName}`}>
                {label}
                {required && <span className="text-[#8CDD05] ml-1">*</span>}
            </label>

            <div
                onClick={handleToggle}
                className={`relative flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-sm transition-all shadow-xs cursor-pointer ${
                    disabled
                        ? 'cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400'
                        : isOpen
                            ? 'border-[#8CDD05] bg-white ring-1 ring-[#8CDD05]'
                            : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                }`}
            >
                <div className="flex items-center gap-2 w-full">
                    {/* Search Icon visible when open or if you want it always there */}
                    <SearchIcon className={`h-4 w-4 ${isOpen ? 'text-[#8CDD05]' : 'text-gray-400'}`} />
                    
                    {isOpen ? (
                        <input
                            ref={inputRef}
                            type="text"
                            className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                            placeholder={selectedOption ? selectedOption.label : placeholder}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking input
                        />
                    ) : (
                        <span className={`truncate ${selectedOption ? 'text-gray-900' : 'text-gray-400'}`}>
                            {selectedOption ? selectedOption.label : placeholder}
                        </span>
                    )}
                </div>

                <ArrowDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#8CDD05]' : 'text-gray-400'
                    }`}
                />
            </div>

            {isOpen && !disabled && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                    
                    <ul className="absolute top-full left-0 z-20 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <li key={option.value}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            onChange(option.value);
                                            setIsOpen(false);
                                            setSearchTerm('');
                                        }}
                                        className={`flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm transition-colors ${
                                            value === option.value
                                                ? 'bg-[#F8FFEB] font-medium text-[#578500]'
                                                : 'text-gray-700 hover:bg-[#F9F7FA] hover:text-gray-900'
                                        }`}
                                    >
                                        {renderOption ? renderOption(option) : (
                                            <>
                                                {option.icon}
                                                <span>{option.label}</span>
                                            </>
                                        )}
                                        {value === option.value && (
                                            <svg className="ml-auto h-4 w-4 text-[#578500]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="px-3 py-4 text-center text-xs text-gray-400">
                                No businesses found matches "{searchTerm}"
                            </li>
                        )}
                    </ul>
                </>
            )}
        </div>
    );
};

export default SearchableDropdown;