'use client'
import { Carousel } from '@/components/ui/card-carousel';
import EmblaCarousel from '@/components/ui/carouselArrows';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image'
import React from 'react'
import { AnimatePresence, motion } from 'motion/react';
import { EVENTS } from '@/constants';

const EventsHome = () => {
    const OPTIONS: EmblaOptionsType = {
        inViewThreshold: 0.3,
        direction: 'rtl',
        align: 'end'
    }

    return (
        <div className="pt-20 pb-10">
            <div className='screen sm:px-10 px-5'>
                <h4 className='text-7xl text-white p-0 m-0'><span className='font-semibold text-primary'>BOOTCAMP</span> EVENTS</h4>
            </div>
            <Carousel  />
        </div>
    )
}

export default EventsHome