'use client'
import { motion } from 'framer-motion'
import React from 'react'

const BlurContent = ({children}:{children:React.ReactNode}) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ delay: 0.2, duration: 0.4, stiffness: 1 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        >
            {children}
        </motion.div>
    )
}

export default BlurContent