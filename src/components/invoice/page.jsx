"use client"

import Image from 'next/image'
import React from 'react'
import profile from '../../img/profile.png'
import profile2 from '../../img/Group.png'
import Link from 'next/link'
import { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"

const Invoice = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div>
                <p className='text-color-primary text-lg font-medium mt-5'>Latest Transaction</p>
                <div className='flex gap-4 mt-3'>
                    <div className="flex items-center px-4 py-2 space-x-2 bg-zinc-50 rounded-lg">
                        <Image src={profile} width={32} height={32} alt="profile" className="rounded-full dark:bg-gray-500" />
                        <div>
                            <h2 className="text-base font-semibold text-color-primary">Madrani Andi</h2>
                            <span className="flex items-center space-x-1">
                                <Link href="#" className="text-xs text-color-secondary font-normal hover:underline dark:text-gray-400">Madrani20@gmail.com</Link>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center px-4 py-2 space-x-2 bg-zinc-50 rounded-lg">
                        <Image src={profile2} width={32} height={32} alt="profile" className="rounded-full dark:bg-gray-500" />
                        <div>
                            <h2 className="text-base font-semibold text-color-primary">Josua Nunito</h2>
                            <span className="flex items-center space-x-1">
                                <Link href="#" className="text-xs text-color-secondary font-normal hover:underline dark:text-gray-400">Josh Nunito@gmail.com</Link>
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr className='mt-5 text-lg' />
            <div className='mt-5 grid grid-cols-2'>
                <div>
                    <label className='block text-color-primary text-base font-medium'>Customer name</label>
                    <input type="text" className='border-none px-4 py-3 text-base font-normal bg-zinc-50' placeholder='Type customer name' />
                </div>
                <div>
                    <label className='block text-color-primary text-base font-medium'>Customer email</label>
                    <input type="text" className='border-none px-4 py-3 bg-zinc-50' placeholder='Type customer email' />
                </div>
            </div>
            <div className='mt-5 grid grid-cols-2'>
                <div>
                    <label className='block text-color-primary text-base font-medium'>Item name</label>
                    <input type="text" className='border-none px-4 py-3 text-base font-normal bg-zinc-50' placeholder='Type customer name' />
                </div>
                <div>
                    <label className='block text-color-primary text-base font-medium'>Item mount</label>
                    <div className='bg-zinc-50'>
                        <button
                            type="button"
                            className="flex px-4 py-3 text-sm font-medium text-slate-500  rounded"
                            onClick={toggleDropdown}
                        >
                            <p>USD</p>
                            <div className='ml-5'>
                                {isOpen ? <RiArrowDropUpLine className='w-6 h-6' />
                                    : <RiArrowDropDownLine className='w-6 h-6' />}
                            </div>
                        </button>
                    </div>
                </div>

                {/* {isOpen && (
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
                )} */}

                
            </div>
            <div className='mt-5 flex justify-between'>
                <div className='active:outline outline-2 outline-color-main rounded-xl'>
                    <button className='py-4 px-16 text-color-main font-medium'>Add more details</button>
                </div>
                <div className='bg-color-main rounded-xl active:bg-sky-500'>
                    <button className='py-4 px-[90px] text-white font-medium'>Send Money</button>
                </div>
            </div>
        </>
    )
}

export default Invoice