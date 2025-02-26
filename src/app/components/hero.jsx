"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Automatically get all logos in the public/logos folder
const importLogos = () => {
    const context = require.context("/public/logos", false, /\.(svg)$/);
    return context.keys().map((file) => file.replace("./", "/logos/"));
};

const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
            <span className="bg-gray-800 text-sm px-4 py-1 rounded-full mb-4">🔵 Update 2.0: AI Integration</span>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                AI tools to bring your <br /> vision to life
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
                Unleash the power of AI to supercharge your creativity. Transform your ideas into stunning content effortlessly and in no time.
            </p>

            <div className="mt-6 flex space-x-4">
                <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg">Get Started</button>
                <button className="border border-primary text-primary px-6 py-3 rounded-lg text-lg">Learn More</button>
            </div>
            <div className="relative w-full overflow-hidden bg-gradient-to-b from-black to-[#0a021f] py-6">
                <motion.div
                    className="flex space-x-12 animate-marquee"
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <Image key={index} src={logo} alt="brand" width={100} height={40} className="grayscale opacity-70 hover:opacity-100 transition filter invert dark:invert-0" />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
