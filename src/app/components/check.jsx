"use client";



import { motion } from "framer-motion";

const CheckAnimation = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white overflow-hidden">
            {/* Animated Background Blobs */}
            <motion.div
                className="absolute top-10 left-10 w-40 h-40 bg-purple-500 opacity-30 blur-3xl animate-move1"
                animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-10 right-20 w-32 h-32 bg-indigo-500 opacity-30 blur-2xl animate-move2"
                animate={{ x: [0, -40, 40, 0], y: [0, -20, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Hero Content */}
            <h1 className="text-6xl font-bold relative z-10">
                AI tools to bring your vision to life
            </h1>
            <p className="mt-4 text-lg text-gray-300 relative z-10">
                Unleash the power of AI to supercharge your creativity.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4 relative z-10">
                <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg">Get Started</button>
                <button className="border border-primary text-primary px-6 py-3 rounded-lg text-lg">Learn More</button>
            </div>
        </section>
    );
};

export default CheckAnimation;
