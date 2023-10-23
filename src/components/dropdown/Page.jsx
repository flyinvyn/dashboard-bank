"use client"

import Link from 'next/link';
import { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div className=''>
                <button
                    type="button"
                    className="flex w-full px-2 py-2 text-sm font-medium text-color-primary border rounded-md"
                    onClick={toggleDropdown}
                >
                    <p>Monthly</p>
                    <div className='ml-5'>
                        {isOpen ? <RiArrowDropUpLine className='w-6 h-6' />
                            : <RiArrowDropDownLine className='w-6 h-6' />}
                    </div>
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link href="#" className="block px-4 py-2 text-sm font-medium text-color-primary hover:bg-gray-100">
                            Monthly
                        </Link>
                        <Link href="" className="block px-4 py-2 text-sm font-medium text-color-primary hover:bg-gray-100">
                            Weekly
                        </Link>
                        <Link href="" className="block px-4 py-2 text-sm font-medium text-color-primary hover:bg-gray-100">
                            Daily
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown
