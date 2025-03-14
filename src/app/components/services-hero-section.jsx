"use client";

import { motion } from "framer-motion";

const HeroSection = ({ title, description }) => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
            {/* Animated Gradient Background */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1.2 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-black to-indigo-900 opacity-40 blur-3xl"
            ></motion.div>

            {/* Subtle Noise/Texture Overlay */}
            <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10"></div>

            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold text-primary relative"
            >
                {title}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-gray-400 max-w-3xl mt-4 relative"
            >
                {description}
            </motion.p>
        </section>
    );
};

export default HeroSection;
