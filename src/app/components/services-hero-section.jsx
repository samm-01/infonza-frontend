"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = ({ title, description, image }) => {
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 relative overflow-hidden">
            {/* Animated Gradient Background */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1.2 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 bg-gradient-to-r from-purple-400  to-indigo-400 opacity-20 blur-3xl"
            ></motion.div>

            {/* Subtle Noise/Texture Overlay */}
            <div className="absolute inset-0 bg-[url('/textures/noise.png')] bg-cover bg-center opacity-25"></div>

            {/* Left Content */}
            <div className="md:w-1/2 z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-7xl font-extrabold text-primary"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-gray-400 text-2xl max-w-3xl mt-4"
                >
                    {description}
                </motion.p>
            </div>

            {/* Right Side Image */}
            <div className="md:w-1/2 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Image
                        src={image}
                        alt="Illustration"
                        width={600}
                        height={600}
                    // className="w-auto h-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
