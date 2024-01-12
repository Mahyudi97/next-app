"use client"
import React from 'react'
import Image from 'next/image'

const HomePage = () => {
    const HomeIcon = require('../../../public/home-img.png')

  return (
    <>
        <div className='flex w-full bg-[#F5F7FA] px-[200px] py-[66px]'>
        <div className='flex-1 pt-[55px] font-semibold	text-[44px] leading-[52px] text-[#4D4D4D]'>
          <span>Lessons and insights</span><span className='text-[#4CAF4F]'> from 8 years</span>
          
          <p className='mt-[11px] text-[11px] font-normal leading-[16px]'>Where to grow your business as a photographer: site or social media?</p>

          <button className="mt-[22px] w-[133px] h-[36px] bg-[#4CAF4F] rounded-md btn btn-square btn-ghost text-white">
              Register
          </button>
        </div>
        <div className='flex'>
          <Image src={HomeIcon} alt='home icon' className='w-[272px] h-[283]'/>
        </div>
      </div>
      <div className="px-[100px] py-[11px]">
          <div className='w-full h-full text-center	'>
              <p className='text-[25px] text-[#4D4D4D] font-semibold	heading-[30px]'>Our Clients</p>  
              <p className='text-[12px] text-[#717171] font-normal	heading-[16px]'>We have been working with some Fortune 500+ clients</p>  
          </div>
      </div>
    </>
  )
}

export default HomePage