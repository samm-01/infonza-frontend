"use client";
import { motion } from "framer-motion";

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
            {/* <div className="absolute top-10 w-96 h-48 bg-primary opacity-30 blur-3xl"></div> */}
            <motion.div
                className="absolute top-10 w-96 h-48 bg-primary opacity-30 blur-3xl"
                animate={{ x: [0, 100, -50, 0], y: [0, 60, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>

    );
};

export default Hero;
