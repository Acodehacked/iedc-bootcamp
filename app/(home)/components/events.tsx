import { Carousel } from '@/components/ui/card-carousel';
import EmblaCarousel from '@/components/ui/carouselArrows';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image'
import React from 'react'

const EventsHome = () => {
    const OPTIONS: EmblaOptionsType = {
        inViewThreshold: 0.3,
        direction: 'rtl',
        align: 'end'
    }
    const slideData = [
        {
            title: "Mystic Mountains",
            button: "Explore Component",
            src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Urban Dreams",
            button: "Explore Component",
            src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Neon Nights",
            button: "Explore Component",
            src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Desert Whispers",
            button: "Explore Component",
            src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="pt-20 pb-10">
            <div className='screen sm:px-10 px-5'>
                <h4 className='text-7xl text-white p-0 m-0'><span className='font-semibold text-primary'>BOOTCAMP</span> EVENTS</h4>
            </div>
            <Carousel items={[
                <div className='w-[300px]'>
                    <Image src={'/event7.jpg'} className='' alt='' width={1500} height={2000} />
                    <div className="flex w-full justify-between pt-2 text-white/30">
                        <span className='text-primary'>01-10-2024</span>
                        <span>Expired</span>
                    </div>
                    <div className="text-white w-full pt-2">
                        <h1 className='text-2xl'>Wednesday cafe</h1>
                    </div>
                </div>,
                <div className='w-[300px]'>
                    <Image src={'/event6.jpg'} className='' alt='' width={1500} height={2000} />
                    <div className="flex w-full justify-between pt-2 text-white/30">
                        <span className='text-primary'>01-10-2024</span>
                        <span>Expired</span>
                    </div>
                    <div className="text-white w-full pt-2">
                        <h1 className='text-2xl'>Smart India Hackathon</h1>
                    </div>
                </div>,
                <div className='w-[375px]'>
                    <Image src={'/event5.jpg'} className='' alt='' width={1500} height={2000} />
                    <div className="flex w-full justify-between pt-2 text-white/30">
                        <span className='text-primary'>01-10-2024</span>
                        <span>Expired</span>
                    </div>
                    <div className="text-white w-full pt-2">
                        <h1 className='text-2xl'>Design Week</h1>
                    </div>
                </div>,
                <div className='w-[300px]'>
                    <Image src={'/event3.jpg'} className='' alt='' width={1500} height={2000} />
                    <div className="flex w-full justify-between pt-2 text-white/30">
                        <span className='text-primary'>01-10-2024</span>
                        <span>Expired</span>
                    </div>
                    <div className="text-white w-full pt-2">
                        <h1 className='text-2xl'>Top 20 Coders</h1>
                    </div>
                </div>,
                <div className='w-[375px]'>
                    <Image src={'/event2.jpg'} className='' alt='' width={1500} height={2000} />
                    <div className="flex w-full justify-between pt-2 text-white/30">
                        <span className='text-primary'>01-10-2024</span>
                        <span>Expired</span>
                    </div>
                    <div className="text-white w-full pt-2">
                        <h1 className='text-2xl'>Become a Bootcamp Executive</h1>
                    </div>
                </div>,
                <div className='w-[375px]'>
                    <Image src={'/event1.jpg'} className='' alt='' width={1500} height={2000} />
                    <div className="flex w-full justify-between pt-2 text-white/30">
                        <span className='text-primary'>01-10-2024</span>
                        <span>Expired</span>
                    </div>
                    <div className="text-white w-full pt-2">
                        <h1 className='text-2xl'>Smart India Hackathon</h1>
                    </div>
                </div>,
            ]} />
        </div>
    )
}

export default EventsHome