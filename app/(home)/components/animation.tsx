'use client'
import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'

const transition = { duration: 3, yoyo: Infinity, ease: "easeInOut" }
const HeroAnimation = () => {
    const box: React.CSSProperties = {
        width: 100,
        height: 100,
        position: "absolute",
        top: 0,
        left: 0,
        offsetPath: `path("M1 279.361C56.8159 160.506 211.609 58.3054 423.016 269.767C499.347 363.705 782.689 559.976 908.975 309.742C1035.26 59.5074 784.288 -69.2102 714.351 40.3178C644.415 149.846 709.156 357.71 908.975 378.496C1068.83 395.125 1242.14 276.03 1321 207.009")`,
    }
    return (
        <div className='bottom-0 left-0 top-0 right-0 absolute z-[1] mt-[250px] w-full'>
            <div style={{ position: "relative" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} className='w-full min-h-[500px]'>
                    <motion.path
                        d="M1 279.361C56.8159 160.506 211.609 58.3054 423.016 269.767C499.347 363.705 782.689 559.976 908.975 309.742C1035.26 59.5074 784.288 -69.2102 714.351 40.3178C644.415 149.846 709.156 357.71 908.975 378.496C1068.83 395.125 1242.14 276.03 1321 207.009"
                        fill="transparent"
                        strokeWidth="2"
                        stroke="rgba(0,0,0,0.1)"
                        strokeDasharray="5,5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0.001 }}
                        animate={{ pathLength: 1 }}
                        transition={transition}
                    />
                </svg>
                <motion.div
                    style={box}
                    initial={{ offsetDistance: "0%", scale: 1 }}
                    animate={{ offsetDistance: "100%", scale: 3 }}
                    transition={transition}
                >
                    <Image src={'/smallairplane.png'} alt='' width={200} height={200} />
                </motion.div>
            </div>
        </div>
    )
}

export default HeroAnimation