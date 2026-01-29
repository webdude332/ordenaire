import React from 'react';
import BackArrow from '../../images/icons/backArrow.svg?react'; // Adjust path if needed
import RightArrow from '../../images/icons/arrowRight.svg?react'; // Adjust path if needed

const Pagination = () => {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4">
            <div>
                <button className="cursor-pointer flex items-center justify-center rounded-lg border border-[#B5B0BA] bg-white p-1 hover:bg-gray-50">
                    <BackArrow className="h-5 w-5 text-[#B5B0BA]" />
                </button>
            </div>
            <div className=" flex items-center justify-between gap-2">
                {[1, 2, 3, 4, 5, 6].map((page) => (
                    <button
                        key={page}
                        className={`cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium ${
                            page === 1
                                ? 'bg-gray-100 text-[#696170]'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <div>
                <button className="cursor-pointer flex items-center justify-center rounded-lg border border-[#B5B0BA] bg-white p-1 hover:bg-gray-50">
                    <RightArrow className="h-5 w-5 text-[#B5B0BA]" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;