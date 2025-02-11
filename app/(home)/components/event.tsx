import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Event = {
    title: string,
    description: string,
    url: string,
    image: string,
    startDate: string,
    registerLastDate: string,
    eventDate: string,
    asp: number,
    status: boolean
}
const EventCard = ({ event,onclick }:{event:Event,onclick:()=>void}) => {
    return (
        <div onClick={()=>onclick()} className={cn(event.asp == 0 ? 'w-[300px]' : 'w-[373px]')}>
            <Image src={event.image} className='' alt='' width={1500} height={2000} />
            <div className="flex w-full justify-between pt-2 text-white/30">
                <span className='text-primary'>{event.eventDate}</span>
                <span>{event.status ? "OPEN NOW" : "EXPIRED"}</span>
            </div>
            <div className="text-white w-full pt-2">
                <h1 className='text-2xl'>{event.title}</h1>
            </div>
        </div>
    )
}

export default EventCard