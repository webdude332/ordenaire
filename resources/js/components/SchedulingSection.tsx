// import React, { useState, useRef, useEffect } from 'react';
// import CustomDateRangePicker from '@/components/CustomDateRangePicker';
// import CustomDropdown from '@/components/ui/CustomDropdown';
// import IconButton from '@/components/ui/IconButton';
// import Button from '@/components/ui/Button';
// import RadioGroup from '@/components/ui/RadioGroup';
// import { Input, Select, Label, RenderIcon } from '@/components/ui/FormElements'; // Assuming you moved helpers here
// import CalenderIconSVG from '@/images/icons/calendar.svg?react';
// import SearchIcon from '@/images/icons/searchIcon.svg?react';
// import DownArrow from '@/images/icons/chevron-down.svg?react';

// export default function SchedulingSection() {
//     const [showPicker, setShowPicker] = useState(false);
//     const [reportTemplate, setReportTemplate] = useState('');
//     const pickerRef = useRef<HTMLDivElement>(null);

//     const templateOptions = [
//         { label: 'Sales', value: 'sales' },
//         { label: 'Usage', value: 'usage' },
//         { label: 'Financial', value: 'financial' },
//     ];

//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
//                 setShowPicker(false);
//             }
//         };
//         if (showPicker) document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, [showPicker]);

//     return (
//         <div className="mb-8 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
//             <div className="flex items-center justify-between border-b border-gray-200 bg-[#F9F7FA] px-6 py-4">
//                 <h2 className="text-lg font-semibold text-gray-900">Report Scheduling & Export</h2>
//                 {/* <button className="text-gray-400 hover:text-gray-600">
//                     <RenderIcon icon={DownArrow} className="h-5 w-5 text-[#B5B0BA]" />
//                 </button> */}
//             </div>

//             <div className="grid grid-cols-1 gap-6 px-6 pt-6 md:grid-cols-2">
//                 <div className="space-y-4">
//                     <div>
//                         <Label className='mb-2 text-sm font-medium'>Assign to Tenant / Organization</Label>
//                         <Input placeholder="Search for tenant..." icon={SearchIcon} />
//                     </div>
//                     <div>
//                         <Label className='mb-2 text-sm font-medium'>Report Title</Label>
//                         <Input placeholder='e.g., "Monthly Performance Report"' />
//                     </div>
//                 </div>
//                 <div className="space-y-4">
//                     <div className="relative" ref={pickerRef}>
//                         <Label className='mb-2 text-sm font-medium'>Select Data Range</Label>
//                         <div onClick={() => setShowPicker(true)}>
//                             <Input placeholder="Jan 10, 2025 - Jul 10, 2025" icon={CalenderIconSVG} iconClassName="text-[#B5B0BA]" />
//                         </div>
//                         {showPicker && (
//                             <div className="absolute z-50 mt-2 bg-white shadow-lg rounded-lg">
//                                 <CustomDateRangePicker />
//                             </div>
//                         )}
//                     </div>
//                     <div>
//                         <CustomDropdown
//                             label="Report Template"
//                             options={templateOptions}
//                             value={reportTemplate}
//                             onChange={setReportTemplate}
//                             placeholder="templates—Sales, Usage, Financial"
//                             labelClassName='mb-2 text-sm font-medium'
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-6 mb-8 space-y-6 border-t border-gray-100 px-6 pt-6">
//                 <div><RadioGroup label="Export format" name="format" options={['CSV', 'PDF', 'Excel']} defaultValue="Excel" /></div>
//                 <div><RadioGroup label="Frequency" name="frequency" options={['Once', 'Daily', 'Weekly', 'Monthly']} defaultValue="Weekly" /></div>
//             </div>

//             <div className="flex justify-end gap-3 border-t border-gray-100 px-6 py-4">
//                 <IconButton>Cancel</IconButton>
//                 <IconButton>Download Report</IconButton>
//                 <Button href="">Schedule</Button>
//             </div>
//         </div>
//     );
// }

// cluade.

import CustomDateRangePicker from '@/components/CustomDateRangePicker';
import Button from '@/components/ui/Button';
import CustomDropdown from '@/components/ui/CustomDropdown';
import { Input, Label } from '@/components/ui/FormElements';
import IconButton from '@/components/ui/IconButton';
import RadioGroup from '@/components/ui/RadioGroup';
import CalenderIconSVG from '@/images/icons/calendar.svg?react';
import SearchIcon from '@/images/icons/searchIcon.svg?react';
import { useEffect, useRef, useState } from 'react';

// Form validations
import { useFormValidation } from '@/utils/useFormValidation';
import { validationRules } from '@/utils/validationRules';

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
            if (
                pickerRef.current &&
                !pickerRef.current.contains(event.target as Node)
            ) {
                setShowPicker(false);
            }
        };
        if (showPicker)
            document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [showPicker]);

    // Form validation - FIXED: Changed field names to match actual inputs
    const { values, errors, handleChange, handleBlur, validateAll, resetForm } =
        useFormValidation({
            tenantSearch: {
                value: '',
                validators: [
                    validationRules.required('Tenant / Organization'),
                    validationRules.minLength(3, 'Tenant / Organization'),
                ],
            },
            reportTitle: {
                value: '',
                validators: [
                    validationRules.required('Report Title'),
                    validationRules.minLength(3, 'Report Title'),
                ],
            },
        });

    // Handle form submission
    const handleSchedule = () => {
        if (validateAll()) {
            console.log('Form is valid! Scheduling report...', values);
            // Your schedule logic here
            // Example: await scheduleReport(values);
        } else {
            console.log('Please fix validation errors');
        }
    };

    const handleCancel = () => {
        resetForm();
        setReportTemplate('');
    };

    return (
        <div className="mb-8 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 bg-[#F9F7FA] px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">
                    Report Scheduling & Export
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 px-6 pt-6 md:grid-cols-2">
                <div className="space-y-4">
                    <div>
                        <Label className="mb-2 text-sm font-medium">
                            Assign to Tenant / Organization
                            <span className="text-primary">*</span>
                        </Label>
                        <Input
                            placeholder="Search for tenant..."
                            icon={SearchIcon}
                            value={values.tenantSearch}
                            onChange={handleChange('tenantSearch')}
                            onBlur={handleBlur('tenantSearch')}
                            error={errors.tenantSearch}
                        />
                    </div>
                    <div>
                        <Label className="mb-2 text-sm font-medium">
                            Report Title
                            <span className="text-primary">*</span>
                        </Label>
                        <Input
                            placeholder='e.g., "Monthly Performance Report"'
                            value={values.reportTitle}
                            onChange={handleChange('reportTitle')}
                            onBlur={handleBlur('reportTitle')}
                            error={errors.reportTitle}
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative" ref={pickerRef}>
                        <Label className="mb-2 text-sm font-medium">
                            Select Data Range
                        </Label>
                        <div onClick={() => setShowPicker(true)}>
                            <Input
                                placeholder="Jan 10, 2025 - Jul 10, 2025"
                                icon={CalenderIconSVG}
                                iconClassName="text-[#B5B0BA]"
                            />
                        </div>
                        {showPicker && (
                            <div className="absolute z-50 mt-2 rounded-lg bg-white shadow-lg">
                                <CustomDateRangePicker />
                            </div>
                        )}
                    </div>
                    <div>
                        <Label className="mb-2 text-sm font-medium">
                            &nbsp;
                            {/* <span className="text-primary">*</span> */}
                        </Label>
                        <CustomDropdown
                            label="Report Template"
                            options={templateOptions}
                            value={reportTemplate}
                            onChange={setReportTemplate}
                            placeholder="templates—Sales, Usage, Financial"
                            labelClassName="mb-2 text-sm font-medium"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 mb-8 space-y-6 border-t border-gray-100 px-6 pt-6">
                <div>
                    <RadioGroup
                        label="Export format"
                        name="format"
                        options={['CSV', 'PDF', 'Excel']}
                        defaultValue="Excel"
                    />
                </div>
                <div>
                    <RadioGroup
                        label="Frequency"
                        name="frequency"
                        options={['Once', 'Daily', 'Weekly', 'Monthly']}
                        defaultValue="Weekly"
                    />
                </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-gray-100 px-6 py-4">
                <IconButton type="button" onClick={handleCancel}>
                    Cancel
                </IconButton>
                <IconButton type="button">Download Report</IconButton>
                <Button type="button" onClick={handleSchedule}>
                    Schedule
                </Button>
            </div>
        </div>
    );
}
