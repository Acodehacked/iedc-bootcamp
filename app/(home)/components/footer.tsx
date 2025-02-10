import { div } from 'framer-motion/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='bg-black screen px-10 md:px-20 mt-[-90px] pt-[40px] rounded-t-[60px] relative z-[10]'>
                <Image className='invert w-[250px]' src={'/logo.png'} width={700} height={700} alt='' />
                <span className='text-primary text-xl mt-10'>Quick Links</span>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 pt-10">
                    <div className="flex flex-col gap-4 text-2xl text-white">
                        <Link className='hover:text-primary footer-link group' href='#'>Home<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={500} height={500} /></Link>
                        <Link className='hover:text-primary footer-link group' href='/#whyiedc'>WHY IEDC<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={500} height={500} /></Link>
                        <Link className='hover:text-primary footer-link group' href='/#summit'>SUMMIT 2022<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={500} height={500} /></Link>
                    </div>
                    <div className="flex flex-col gap-4 text-2xl text-white">
                        <Link className='hover:text-primary footer-link group' href='/#execom'>EXECOM<Image src={'/arrowwhite.png'} alt='' className='transition-all  w-[40px] opacity-0 group-hover:opacity-100' width={500} height={500} /></Link>
                        <Link className='hover:text-primary footer-link group' href='/#events'>EVENTS<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={500} height={500} /></Link>
                        <Link className='hover:text-primary footer-link group' href='https://sjcetpalai.ac.in/'>SJCET PALAI<Image src={'/arrowwhite.png'} alt='' className='transition-all w-[40px] opacity-0 group-hover:opacity-100' width={500} height={500} /></Link>
                    </div>
                    <div className="text-white pt-3">
                        <p>St. Joseph's College of Engineering and Technology</p>
                        <span className='text-zinc-400'>&copy; 2025 BOOTCAMP</span>
                    </div>
                </div>
                <div className="flex justify-end gap-5 w-full mt-10 p-6 text-white">
                    <span className='text-zinc-400'>Designed & Developed By Abin Antony</span>
                    <Link target='_blank' href={'https://abinantony-website.vercel.app'}>Portfolio</Link>
                    <Link target='_blank' href={'https://webcodecreators.com'}>Company</Link>
                    <Link target='_blank' href={'https://github.com/Acodehacked'}>Company</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer