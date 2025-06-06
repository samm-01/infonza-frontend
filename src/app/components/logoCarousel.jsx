"use client";

import { motion } from "framer-motion";
import { AWSIcon, NodeIcon, NextIcon, MongoDBIcon, ReactIcon, MySQLIcon, FigmaIcon, FirebaseIcon, PHPIcon, LaravelIcon, AngularIcon, BootstrapIcon, DockerIcon } from "./icons";
import { useState } from "react";

const logos = [AWSIcon, AngularIcon, BootstrapIcon, DockerIcon, NodeIcon, NextIcon, MongoDBIcon, ReactIcon, MySQLIcon, FirebaseIcon, FigmaIcon, PHPIcon, LaravelIcon];


const LogoCarousel = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-white py-4">
            <div
                className="relative w-full overflow-hidden bg-gradient-to-b from-black to-[#0a021f] py-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex space-x-12"
                    initial={{ x: "100%" }}
                    animate={{ x: isHovered ? "0%" : "-100%" }} // ✅ Stops when hovered
                    transition={{
                        repeat: isHovered ? 0 : Infinity, // ✅ Stops repeating when hovered
                        ease: "linear",
                        duration: 25,
                    }}
                >
                    {[...logos, ...logos].map((Logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex items-center justify-center w-24 h-24 grayscale opacity-70 hover:grayscale-0 transition"
                        >
                            <Logo width={96} height={96} className="w-auto h-auto" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default LogoCarousel;