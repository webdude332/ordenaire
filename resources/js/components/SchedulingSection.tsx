import React, { useState, useRef, useEffect } from 'react';
import CustomDateRangePicker from '@/components/CustomDateRangePicker';
import CustomDropdown from '@/components/ui/CustomDropdown';
import IconButton from '@/components/ui/IconButton';
import Button from '@/components/ui/Button';
import RadioGroup from '@/components/ui/RadioGroup';
import { Input, Select, Label, RenderIcon } from '@/components/ui/FormElements'; // Assuming you moved helpers here
import CalenderIconSVG from '@/images/icons/calendar.svg?react';
import SearchIcon from '@/images/icons/searchIcon.svg?react';
import DownArrow from '@/images/icons/chevron-down.svg?react';

export default function SchedulingSection() {
    const [showPicker, setShowPicker] = useState(false);
    const [reportTemplate, setReportTemplate] = useState('');
    const pickerRef = useRef<HTMLDivElement>(null);

    const templateOptions = [
        { label: 'Sales', value: 'sales' },
        { label: 'Usage', value: 'usage' },
        { label: 'Financial', value: 'financial' },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setShowPicker(false);
            }
        };
        if (showPicker) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showPicker]);

    return (
        <div className="mb-8 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 bg-[#F9F7FA] px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">Report Scheduling & Export</h2>
                <button className="text-gray-400 hover:text-gray-600">
                    <RenderIcon icon={DownArrow} className="h-5 w-5 text-[#B5B0BA]" />
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 px-6 pt-6 md:grid-cols-2">
                <div className="space-y-4">
                    <div>
                        <Label>Assign to Tenant / Organization</Label>
                        <Input placeholder="Search for tenant..." icon={SearchIcon} />
                    </div>
                    <div>
                        <Label>Report Title</Label>
                        <Input placeholder='e.g., "Monthly Performance Report"' />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative" ref={pickerRef}>
                        <Label>Select Data Range</Label>
                        <div onClick={() => setShowPicker(true)}>
                            <Input placeholder="Jan 10, 2025 - Jul 10, 2025" icon={CalenderIconSVG} iconClassName="text-[#B5B0BA]" />
                        </div>
                        {showPicker && (
                            <div className="absolute z-50 mt-2 bg-white shadow-lg rounded-lg">
                                <CustomDateRangePicker />
                            </div>
                        )}
                    </div>
                    <div>
                        <CustomDropdown 
                            label="Report Template" 
                            options={templateOptions} 
                            value={reportTemplate} 
                            onChange={setReportTemplate} 
                            placeholder="templates—Sales, Usage, Financial" 
                            labelClassName='text-sm font-semibold'
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 mb-8 space-y-6 border-t border-gray-100 px-6 pt-6">
                <div><RadioGroup label="Export format" name="format" options={['CSV', 'PDF', 'Excel']} defaultValue="Excel" /></div>
                <div><RadioGroup label="Frequency" name="frequency" options={['Once', 'Daily', 'Weekly', 'Monthly']} defaultValue="Weekly" /></div>
            </div>

            <div className="flex justify-end gap-3 border-t border-gray-100 px-6 py-4">
                <IconButton>Cancel</IconButton>
                <IconButton>Download Report</IconButton>
                <Button href="">Schedule</Button>
            </div>
        </div>
    );
}