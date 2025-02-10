'use client'
import RootLayout from "./layout";
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export default function Template({ children }: { children: React.ReactNode }) {
    return <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
    >
        <motion.div
            initial={{
                clipPath: "inset(0% 50% 0% 50%)", // Starts as a narrow vertical rectangle
                opacity: 0,
                scale: 1.4,
                borderRadius: "30%",
                x: 100
            }}
            animate={{
                clipPath: "inset(0% 0% 0% 0%)", // Expands to show the full content
                opacity: 1,
                scale: 1,
                borderRadius: "0%",
                x: 0
            }}
            exit={{
                clipPath: "inset(0% 50% 0% 50%)", // Closes back to a narrow rectangle
                opacity: 0,
                scale: 1.4,
                borderRadius: "30%",
                x: -100
            }}
            transition={{
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    </AnimatePresence>;

}