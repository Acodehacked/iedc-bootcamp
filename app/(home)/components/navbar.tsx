'use client'
import React, { useEffect, useRef } from 'react'
import { useCycle } from 'motion/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDimensions } from '@/app/utils/use-dimension';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/app/components/Navigation';
import { X } from 'lucide-react';
import { BsDiscord, BsFacebook, BsGrid3X3Gap, BsInstagram, BsLinkedin, BsX, BsXLg, BsYoutube } from 'react-icons/bs';
import FadeContent from '@/app/components/FadeContent';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 3 + 200}px at 100% 0px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(0px at 100% 0px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    // const { height } = useDimensions(containerRef);

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen])
    return (
        <nav className='flex p-0 border-b-[0.01rem] border-zinc-200 justify-between fixed left-0 right-0 top-0 z-[999] bg-white items-center screen'>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <Image className='md:w-[280px] sm:w-[240px] w-[190px] ps-10' src={'/logo.png'} alt='logo' width={800} height={800} />
            </FadeContent>
            <div className='flex items-center'>
                <Link className="border-r-[0.01rem] hover:bg-zinc-100 flex items-center px-10 h-[90px]" href={'https://iedc-admin.vercel.app/'}>LOGIN</Link>

                <button onClick={() => toggleOpen()} className='w-[90px] flex justify-center hover:bg-zinc-100 items-center h-[90px] p-5'><Image alt='' src={'/Menu.png'} width={400} height={400} className='w-[50]' /></button>
            </div>
            <AnimatePresence>
                {isOpen && <motion.nav
                    exit={'closed'}
                    initial={'closed'}
                    className=' w-full overflow-hidden bg-white fixed left-0 z-[999] bottom-0 h-full   '
                    animate={'open'}
                    variants={sidebar}
                    ref={containerRef}
                >
                    <motion.div exit={'closed'} className="background bg-white" transition={{ duration: 300 }} variants={sidebar} />
                    <div className='p-10 flex flex-col  h-full justify-evenly'>
                        <div className="flex justify-end">
                            <button onClick={() => toggleOpen()} className='flex items-center bg-secondary hover:bg-black hover:text-white transition-all rounded-full px-5 py-2'>
                                <span className='text-4xl sm:flex hidden '>Close</span> <X size={40} />
                            </button>
                        </div>
                        <Navigation  toggle={toggleOpen} />
                        <div className="follow">
                            <h2>Follow us on</h2>
                            <div className="flex text-secondary-foreground/30 text-4xl gap-5 mt-3">
                                <BsLinkedin className='logo-icon' />
                                <BsInstagram className='logo-icon' />
                                <FaXTwitter className='logo-icon' />
                                <BsFacebook className='logo-icon' />
                                <BsDiscord className='logo-icon' />
                                <BsYoutube className='logo-icon' />
                            </div>
                        </div>
                    </div>
                </motion.nav>}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar