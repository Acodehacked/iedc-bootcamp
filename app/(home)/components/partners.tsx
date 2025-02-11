'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import BlurContent from '@/app/components/BlurContent'

const Partners = () => {
    return (
        <div className="bg-white">
            <div className="screen md:justify-around items-center flex md:flex-row flex-col px-10 py-10">
                <div className="flex flex-col md:w-50">
                    <span className='text-primary text-xl font-semibold'>SJCET BOOTCAMP</span>
                    <span className='text-6xl md:mb-0 mb-10'>Our Partners</span>
                </div>
                <div className="flex flex-col md:w-50 md:gap-5">
                    <div className="flex md:flex-row flex-col w-full items-center">
                        <BlurContent>
                            <Image src={'/logo1.png'} className='w-[360px]' alt='' width={700} height={700} />
                        </BlurContent>
                        <BlurContent>
                            <Image src={'/logo2.png'} className='w-[200px]' alt='' width={700} height={700} />
                        </BlurContent>
                    </div>
                    <div className="flex md:flex-row flex-col w-full items-center">
                        <BlurContent>
                            <Image src={'/logo3.png'} className='w-[200px]' alt='' width={700} height={700} />
                        </BlurContent>
                        <BlurContent>
                            <Image src={'/logo4.png'} className='w-[360px]' alt='' width={700} height={700} />
                        </BlurContent>
                    </div>
                    <div className="flex md:flex-row flex-col w-full items-center">
                        <BlurContent>
                            <Image src={'/uLearn.webp'} className='w-[250px] sm:m-0 my-10' alt='' width={700} height={700} />
                        </BlurContent>
                        <BlurContent>
                            <Image src={'/logo6.png'} className='w-[250px]' alt='' width={700} height={700} />
                        </BlurContent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners