"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import rectangle from '../../img/rectangle.png'
import gallery from '../../img/gallery.png'
import Link from 'next/link'
import axios from 'axios'

const Card = () => {
    const [data, setData] = useState([0])
    useEffect(() => {
        axios.get("http://localhost:3004/transaction?_sort=id&_order=desc")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className='w-96 h-52 bg-color-main rounded-xl relative rectangle'>
                {/* <Image src={rectangle} /> */}
                <div className='flex justify-between items-center px-8 pt-6'>
                    <div>
                        <p className='text-white text-base font-normal'>Name card</p>
                        <p className='text-white text-xl font-medium'>Syah Bandi</p>
                    </div>
                    <div>
                        <Image src={gallery} alt='card' />
                    </div>
                </div>
                <div className='absolute right-7 bottom-8'>
                    <p className='text-white text-xl font-semibold'>0918 8124 0042 8129</p>
                    <p className='text-white text-sm font-normal text-right'>12/20 - 124</p>
                </div>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-between items-center mt-5">
                <h2 className="text-color-primary font-semibold">Transaction History</h2>
                <Link href={'#'} className="text-color-main text-base font-medium hover:underline">See all</Link>
            </div>
            <div className='mt-4'>
                <p className='text-base text-[#AAAAAA] font-medium'>April 2023</p>
                {data.map((item, index) => (
                    <div className='bg-zinc-50 rounded-xl flex justify-between items-center mt-4 p-4' key={index}>
                        <div className=''>
                            <p className='text-color-primary text-base font-semibold'>{item.title}</p>
                            <p className='text-[#AAAAAA] text-base font-normal'>{item.date}</p>
                        </div>
                        <div>
                            <p className={`${item.id === 3 ? 'text-[#F3735E]' : 'text-[#7DD97B]'} text-xl font-semibold`}>${item.income}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card