'use client'
import {motion} from 'framer-motion'
import { TextGenerateEffect } from '@/app/components/TextGenerateEffect'
import { desc, div } from 'framer-motion/client'
import React from 'react'
import { FaPeopleGroup } from 'react-icons/fa6'
import { SiDiscover } from 'react-icons/si'
import { GlobeIcon, NetworkIcon, TestTube2Icon } from 'lucide-react'
import { GiIncubator } from 'react-icons/gi'
import Image from 'next/image'

const data = [
    {
        icon:<FaPeopleGroup size={50}/>,
        title:'MENTORING',
        desc:'Startup bootcamp also provides mentoring support to help the students in developing innovative ideas, setting goals and exploring careers which is best suited.'
    },
    {
        icon: <GlobeIcon size={50}/>,
        title:'INNOVATION',
        desc:'Startup bootcamp provides students with assistance in projects through innovative ideas which can be utilised for future endeavours'
    },
    {
        icon: <NetworkIcon size={50}/>,
        title:'NETWORKING',
        desc:'Startup bootcamp also helps students in connecting them with other personalities to identify their potential and increase their opportunities'
    },
    {
        icon: <TestTube2Icon size={50}/>,
        title:'INCUBATION',
        desc:'Startup bootcamp provides incubation support to students by giving opportunity to express their innovative ideas and make it work'
    }
]
const WhyIedc = () => {
    return (
        <div id='whyiedc' className="bg-white pt-20 pb-20 rounded-b-[65px]">
            <section className="min-h-[70vh] pt-20 screen px-10 mt-10 border-t-[0.05rem] rounded-[95px] border-zinc-400 bg-white">
                <h1 className="w-full text-center text-6xl">WHY <span className="text-primary font-semibold">IEDC</span>?</h1>
                <TextGenerateEffect duration={1} className="font-medium text-center text-md" words="Here students take their first step as innovators and entrepreneurs" />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-4 mt-10">
                    {data.map((item,index)=>{
                        return <motion.div className='border-[0.01rem] flex flex-col items-start rounded-[45px] p-5 border-zinc-300' key={index}>
                            <span className='text-slate-700 py-6'>{item.icon}</span>
                            <h3 className='font-medium text-2xl'>{item.title}</h3>
                            <h3 className='font-regular text-md'>{item.desc}</h3>
                            <button className='bg-secondary group  flex items-center rounded-full px-4 mt-2 w-auto'>
                                <Image src={'/arrowblack.png'} alt='' className='transition-all w-[40px] opacity-50 group-hover:opacity-100' width={500} height={500} />
                                <span> LEARN MORE</span>
                            </button>
                        </motion.div>
                    })}
                </div>
            </section>
        </div>
    )
}

export default WhyIedc