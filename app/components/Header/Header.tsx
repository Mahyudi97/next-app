"use client"
import React, { useState } from 'react'
import { FaAlignJustify, FaXmark, FaHouse, FaUsers , FaListUl,  FaListCheck    } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'
import NexcentIcon from './../../../public/nexcent-icon.svg';


const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const handleSideBarButton = () => { setShowSideBar(!showSideBar); }

    const NavList = [ 
        { id: 0, title: 'Home', url: '', icon: <FaHouse /> }, 
        { id: 1, title: 'Users', url: 'users', icon: <FaUsers />}, 
        { id: 2, title: 'Posts', url: 'posts', icon: <FaListUl />} ,
        { id: 3, title: 'Todos', url: 'todos', icon: <FaListCheck  />} ];

  return (
    <>
        <div className="navbar px-[200px] py-[11px] bg-base-100 drop-shadow-md">
            <div className='w-full h-full font-medium text-base  text-[#4D4D4D]'>
                <div className="flex">
                    <button className="btn btn-square btn-ghost" onClick={() => handleSideBarButton()}>
                        <FaAlignJustify fontSize={23} />
                    </button>
                </div>
                <div className="flex-1">
                    <div className='flex pl-1'>
                        <Image src={NexcentIcon} alt='nexcent' width={24}height={16} />
                        <h1 className="ml-1 font-bold text-xl text-[#263238]">Next App</h1>
                    </div>
                </div>
                <div className='flex justify-center items-center px-5 hover:text-[#4CAF4F]'>
                    <Link href={'/'}>
                        Home
                    </Link>
                </div>
                <div className='flex justify-center items-center px-5 hover:text-[#4CAF4F]'>
                    <Link href={'/features'}>
                        Features
                    </Link>
                </div>
                <div className='flex justify-center items-center px-5 hover:text-[#4CAF4F]'>
                    <Link href={'/community'}>
                        Community
                    </Link>
                </div>
                <div className='flex justify-center items-center px-5 hover:text-[#4CAF4F]'>
                    <Link href={'/blog'}>
                        Blog
                    </Link>
                </div>
                <div className='flex justify-center items-center px-5 hover:text-[#4CAF4F]'>
                    <Link href={'/pricing'}>
                        Pricing
                    </Link>
                </div>
                <div className="flex">
                    <button className="w-[133px] h-[36px] bg-[#4CAF4F] rounded-md btn btn-square btn-ghost text-white">
                        Register Now {`${'->'}`}
                    </button>
                </div>
            </div>
        </div>
        {
            showSideBar && 
            <div className={styles.sidebar}>
                <div className='float-left'>
                    <Image src={NexcentIcon} alt='nexcent' width={40}height={40} />
                </div>
                <div className='float-right'>
                    <button className="absolute top-1 right-1 btn btn-ghost rounded-full" onClick={() => handleSideBarButton()}>
                        <FaXmark />
                    </button>
                </div>
                <div style={{clear: 'both'}}></div>
                <div className='w-full mt-10'>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 bg-[#F5F7FA] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search . . ."
                    />
                </div>
                <div className='w-full mt-5 font-semibold'>
                    {
                        NavList && 
                            NavList.map((data, key) => (
                                <>
                                    <Link href={`/${data.url}`} key={key}>
                                        <div className='w-full flex h-[40px] px-[20px] rounded-md cursor-pointer hover:bg-[#4CAF4F]'>
                                            <div className='flex my-auto'>
                                                {data.icon}
                                            </div>
                                            <div className='flex-1 my-auto ml-3'>
                                                {data.title}
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            ))
                    }
                </div>
            </div>
        }
    </>
  )
}

export default Header