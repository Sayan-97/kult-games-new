"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
            <motion.div
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-900/10 blur-[120px] rounded-full"
            />
            <motion.div
                animate={{
                    x: [0, -120, 120, 0],
                    y: [0, 60, -60, 0],
                    scale: [1, 0.9, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/10 blur-[150px] rounded-full"
            />
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-fuchsia-900/5 blur-[100px] rounded-full"
            />
        </div>
    );
}
