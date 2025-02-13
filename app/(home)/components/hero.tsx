'use client'
import AnimatedContent from '@/app/components/AnimatedContent';
import FadeContent from '@/app/components/FadeContent';
import SplitText from '@/app/components/SplitText';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroAnimation from './animation';

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function Hero() {
    return <section className="hero bg-white">
        <div className="main relative overflow-hidden min-h-[100vh] flex screen flex-col justify-center">
            <span className='absolute z-[3] w-[90px] border-l-[0.01rem] border-zinc-300 right-0 top-0 bottom-0'></span>
            <div className="flex flex-col items-start absolute z-[2]">
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                >
                    <Image alt='' src={'/avatargroup.png'} className='ms-10 w-[100px] h-[100px] object-cover select-none' height={800} width={800} />
                </AnimatedContent>
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1.4}
                    threshold={0.2}
                >
                    <h2 className='md:text-7xl sm:text-6xl text-6xl mb-10 px-10 text-start font-regular p-0 mt-[-10px]'>
                        Fueling Young Minds, <br />Building <span className='font-medium text-primary'>Bright</span> <br />Futures!
                    </h2>
                </AnimatedContent>

                <SplitText
                    text="Dream. Create. Elevate!"
                    className="text-2xl font-regular ps-10 text-center"
                    delay={15}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <span className='text-xl ps-10'></span>
                <FadeContent>
                    <Link href={'/'} className='bg-black group flex items-center justify-between w-auto rounded-r-full ps-10 pe-3 py-3 mt-3 text-white'>
                        <span className='text-3xl group-hover:tracking-widest transition-all tracking-wider'>JOIN NOW!</span>
                        <span className='bg-primary ms-20 rounded-full px-4'><Image className='w-[40px]' src={'/arrowwhite.png'} width={600} height={600} alt='' /> </span>
                    </Link>
                </FadeContent>

            </div>
            {/* <Image className='absolute z-[1] pt-[150px] wiggle' src={'/airplane.png'} alt='' height={3000} width={4000} /> */}
            <HeroAnimation />
        </div>
    </section>
}
