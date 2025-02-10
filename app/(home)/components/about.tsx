import React from 'react'
import Dot from './dot'

const About = () => {
    return (
        <div className='flex py-20 flex-col screen px-10 ' id='about'>
            <div className="main flex flex-col">
                <span className='text-primary font-semibold text-xl'>ABOUT</span>
                <span className='text-6xl text-white'>SJCET BOOTCAMP - IEDC</span>
                <span className='text-white/70 text-xl mt-5 font-light'>
                    The SJCET Startup Bootcamp- IEDC (Innovation and Entrepreneurship Development Centre) was set up on 9th March 2015 as a part of the Kerala Startup Mission (KSUM) initiative to develop a startup culture amongst students. The IEDCs are platforms set up in Engineering, Management, Arts & Science Colleges and Polytechnics with an aim to provide students an opportunity to experiment and innovate. KSUM has set up IEDCs in 226 institutions across the State which provide avenues for creative students to learn.....
                </span>
            </div>
            <div className="flex sm:flex-row flex-col w-full mt-5 border-t-[0.01rem] border-primary">
                <div className="w-50 flex flex-col pt-5 pe-5  pb-5 sm:border-b-[0rem] sm:border-r-[0.01rem] border-b-[0.01rem] border-primary">
                    <span className='sm:text-6xl text-4xl text-white flex items-end'>VISION<Dot /></span>
                    <span className='text-white/70 text-xl mt-5 font-light'>
                        To create an innovation culture among Innovators by introducing them the State-of-the-art technologies and positioning the Institution as a Learning and Innovation Platform by delivering technically competent and skilled Entrepreneurs.
                    </span>
                </div>
                <div className="w-50 flex flex-col mt-5 sm:ps-5">
                    <span className='sm:text-6xl text-4xl text-white flex items-end'>MISSION<Dot /></span>
                    <span className='text-white/70 text-xl mt-5 font-light'>
                    To create IEDC as an Innovation Platform and to create future founders by promoting Innovation, Technology and Business Learning among student community
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About