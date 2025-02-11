'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-infinite-logo-slider'

const Summit = () => {
    return (
        <div className='w-full bg-white px-5 pb-20 pt-20' id='summit'>
            <div className="screen bg-black rounded-[45px] overflow-hidden w-full p-0">
                <div className="flex sm:flex-row flex-col items-center md:px-10 px-3 pt-10 justify-between ">
                    <h2 className='text-white py-3  text-6xl'>SUMMIT 2022</h2>
                    <button className='bg-primary group py-1 flex items-center rounded-[35px] px-4 mt-2 w-auto'>
                        <Image src={'/arrowblack.png'} alt='' className='transition-all w-[40px] opacity-50 group-hover:opacity-100' width={500} height={500} />
                        <span className='font-semibold'> SHOW EVENT</span>
                    </button>
                </div>
                <p className='text-white/70 text-xl mt-5 px-10 w-full'>
                    IEDC summit 2022 has been hosted by St. Joseph's College of Engineering and technology, Palai on 5th March 2022.This flagship event brought together all student innovators and all other connected stakeholders under one umbrella. More than 20 speakers were presented in the event. More than 3000 participants across more than 14 districts participated in this event. The summit witnessed a series of technology tracks, brainstorming sessions......
                </p>
                <div className="mt-3">
                    <Slider
                        width="450px"
                        duration={40}
                        blurBorders={true}
                        blurBorderColor={'#000'}
                    >
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/1.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/2.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/3.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/4.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                    </Slider>
                </div>
                <div className="mt-5 mb-8">
                    <Slider
                        width="450px"
                        duration={50}
                        blurBorders={true}
                        blurBorderColor={'#000'}
                    >
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/5.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/6.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/7.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                        <Slider.Slide>
                            <div className="px-3">
                                <Image src={'/8.jpg'} alt='' className='h-[240px] rounded-xl object-cover' width={2200} height={2200} />
                            </div>
                        </Slider.Slide>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Summit