"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BannerImage from "/public/images/hero.svg"; // Place your SVG inside the public folder

const Hero = () => {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left md:mx-20 bg-black text-white">
            {/* Left Content */}
            <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    Software & Cloud Solutions for Global Growth
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl">
                    Innovate Faster. Scale Smarter. Operate Seamlessly.
                </p>

                <div className="mt-6 flex space-x-4 justify-center md:justify-start">
                    <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg">Get Started</button>
                    <button className="border border-primary text-primary px-6 py-3 rounded-lg text-lg">Learn More</button>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center mt-10 md:mt-0">
                <Image
                    src={BannerImage}
                    alt="Work in Progress"
                    width={500}
                    height={500}
                    className="object-contain"
                    priority
                />
            </div>

            {/* Background Animation */}
            <motion.div
                className="absolute top-10 w-96 h-48 bg-primary opacity-30 blur-3xl"
                animate={{ x: [0, 100, -50, 0], y: [0, 60, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    );
};

export default Hero;
