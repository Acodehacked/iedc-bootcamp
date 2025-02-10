import { Timeline } from '@/app/components/Timeline';
import Image from 'next/image';
import React from 'react'

const TimelinePage = () => {
    const data = [
        {
            title: "IEDC SUMMIT 2022",
            content: (
                <div>
                    <p className="text-neutral-800 text-2xl font-normal mb-8">
                        It’s the 6th edition of IEDC summit It was a 2 day long summit conducted on 5th March 2022 Hosted by St Joseph’s College of Engineering and Technology
                    </p>
                    <Image src={'/sjcet.jpg'} className='rounded-[30px]' alt='' width={800} height={500} />
                </div>
            ),
        },
        {
            title: "INDIA 500 STARTUP AWARD 2020",
            content: (
                <div>
                    <p className="text-neutral-800 text-2xl font-normal mb-8">
                        Hyperthink Technologies by SJCET graduates Mr. Anto Patrex and Mr.Tahseen Amin was nominated
                    </p>
                </div>
            ),
        },
        {
            title: "CASH GRANT OF INR 1 LAC",
            content: (
                <div>
                    <p className="text-neutral-800 text-2xl font-normal mb-8">
                        Cash grant was awarded from Idea Fest organized by KSUM Product prototype was E-LENDING MACHINE that enables lending and booking of development boards,sensors etc
                    </p>
                </div>
            ),
        },
        {
            title: "LAMAARA TECHNOLOGIES",
            content: (
                <div>
                    <p className="text-neutral-800 text-2xl font-normal mb-8">
                        Lamaara Techonologies were selected for idea grand in 2017 of 2 Lakhs
                        Lamara Techologies achieved investment at TIECON KERALA in the year 2019 from Chennai Angels
                        Cofounders was being named among the 50 most Influential People of 2019 in Kerala by the Kerala Insider.
                        Founded by Mr Anto Patrex and Mr Thomas Cyriac
                    </p>
                </div>
            ),
        },
        {
            title: "GRAND FINALE OF STARTUP INDIA",
            content: (
                <div>
                    <p className="text-neutral-800 text-2xl font-normal mb-8">
                        IEDC Startup Bootcamp SJCET bagged three prizes at the Grand Finale of Startup India Kerala Stratup Yatra in the year 2018 Organised by Startup India and Kerala Startup Mission at Technopark,Trivandram IDEA FEST 2021
                    </p>
                </div>
            ),
        },
        {
            title: "ENTREPRENEURSHIP ENABLER AWARD 2018",
            content: (
                <div>
                    <p className="text-neutral-800 text-2xl font-normal mb-8">
                        Entrepreneurship Enabler Award 2018 of Kerala Startup Mission Award was handovered by Sri M Sivasankar IAS( Secretary to CM and IT Secretary)
                    </p>
                </div>
            ),
        },
        {
            title: "ALL INDIA PERSISTENT INSPIRATION AWARD",
            content: (
                <div>
                    <p className="text-neutral-800 text-2xl font-normal mb-8">
                        Reon Saji, Praveen K S, Sandeep Salmon, Smitha John, Hanna George and Neethu Naduvathettu bagged the at the 2nd Smart India Hackathon, which is the world’s biggest Hackathon.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="bg-white">
            <div className="screen overflow-y-hidden pb-[40px]">
                <div className="px-10 pt-10">
                    <h4 className='text-6xl text-black'><span className='font-semibold text-primary'>BOOTCAMP</span> REWIND</h4>
                </div>
                <Timeline data={data} />
            </div>
        </div>
    )
}

export default TimelinePage