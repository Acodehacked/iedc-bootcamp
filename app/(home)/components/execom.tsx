'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { delay } from 'motion'
const Execom = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8
      }
    }
  };

  const listItem = {
    transition:{
      delay:0.5
    },
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return (
    <div className="bg-white py-5" id='execom'>
      <div className='screen sm:px-10 px-5'>
        <h4 className='text-6xl text-black'><span className='font-semibold text-primary'>IEDC</span> EXECOM</h4>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container} className="screen sm:px-10 px-5 pt-5 grid md:grid-cols-4 grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/CCO2024.png'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/CEO2024.png'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/CFO2024.png'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/CMO2024.png'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/COO2024.png'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/CSO2024.png'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/CTO2024.png'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/CVO2024.png'} alt='' width={500} height={700} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Execom