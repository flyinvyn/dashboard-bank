"use client"

// import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import balance from '../../img/moneys.png'
import { FiChevronRight } from "react-icons/fi"
import { Moneys, CardReceive, CardSend } from "iconsax-react"
import axios from 'axios'

const ExpensesCard = () => {
    const [data, setData] = useState([])
    const [income, setIncome] = useState([])
    const [balance, setBalance] = useState([])
    useEffect(()=>{
        getExpenses();
        getIncome();
        getBalance();
    },[])

    const getExpenses = () =>{
        axios.get("http://localhost:3004/expenses")
        .then((res)=>{
            setData(res.data[0]);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const getIncome = () =>{
        axios.get("http://localhost:3004/income")
        .then((res)=>{
            setIncome(res.data[0]);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const getBalance = () =>{
        axios.get("http://localhost:3004/balance")
        .then((res)=>{
            setBalance(res.data[0]);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className='flex gap-4 mt-4'>
            <div className='w-44 h-52 hover:bg-color-main active:bg-color-main bg-color-main rounded-xl cursor-pointer border group'>
                <div className='flex justify-around items-center mt-3'>
                    <div className='w-14 h-14 rounded-full bg-sky-300'>
                        <Moneys
                            size={32}
                            variant="Outline"
                            className='mx-auto my-3 text-white'
                        />
                    </div>
                    <div>
                        <FiChevronRight className='text-white text-4xl' />
                    </div>
                </div>
                <div className='px-5 mt-8'>
                    <p className='text-white text-base font-semibold'>Balance</p>
                    <p className='text-white text-sm font-normal'>{balance.date}</p>
                    <p className='text-white text-2xl font-semibold pt-4'>${balance.total}</p>
                </div>
            </div>
            <div className='w-44 h-52 hover:bg-color-main active:bg-color-main rounded-xl cursor-pointer border group'>
                <div className='flex justify-around items-center mt-3'>
                    <div className='w-14 h-14 rounded-full group-hover:bg-sky-300 group-active:bg-sky-300 bg-gray-100'>
                        <CardReceive
                            size={32}
                            variant="Outline"
                            className='mx-auto my-3 text-color-main group-active:text-white group-hover:text-white focus:outline-none focus:ring focus:ring-violet-300'
                        />
                    </div>
                    <div>
                        <FiChevronRight className='group-hover:text-white group-active:text-white text-4xl text-color-primary' />
                    </div>
                </div>
                <div className='px-5 mt-8'>
                    <p className='group-active:text-white group-hover:text-white text-color-primary text-base font-semibold'>Income</p>
                    <p className='group-active:text-white group-hover:text-white text-[#AAAAAA] text-sm font-normal'>{income.date}</p>
                    <p className='group-active:text-white group-hover:text-white text-color-main text-2xl font-semibold pt-4'>${income.income}</p>
                </div>
            </div>
            <div className='w-44 h-52 hover:bg-color-main active:bg-color-main rounded-xl cursor-pointer border group'>
                <div className='flex justify-around items-center mt-3'>
                    <div className='w-14 h-14 rounded-full group-hover:bg-sky-300 group-active:bg-sky-300 bg-gray-100'>
                        <CardSend
                            size={32}
                            variant="Outline"
                            className='mx-auto my-3 text-color-main group-active:text-white group-hover:text-white focus:outline-none focus:ring focus:ring-violet-300'
                        />
                    </div>
                    <div>
                        <FiChevronRight className='group-hover:text-white group-active:text-white text-4xl text-color-primary' />
                    </div>
                </div>
                <div className='px-5 mt-8'>
                    <p className='group-active:text-white group-hover:text-white text-color-primary text-base font-semibold'>Expenses</p>
                    <p className='group-active:text-white group-hover:text-white text-[#AAAAAA] text-sm font-normal'>{data.date}</p>
                    <p className='group-active:text-white group-hover:text-white text-color-main text-2xl font-semibold pt-4'>${data.expenses}</p>
                </div>
            </div>
        </div>
    )
}

export default ExpensesCard