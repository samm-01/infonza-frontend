"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroSection from "../components/services-hero-section";
import CTASection from "../components/CTA-secton";

const products = [
    {
        title: "YuvaHire",
        description:
            "A SaaS platform connecting students, institutions, and employers. It offers placement automation and resume screening for smooth recruitment workflows.",
        image: "/images/yuvahire.png",
        link: "https://yuvahire.com",
    },
    {
        title: "Select",
        description:
            "A recruitment automation tool for agencies, simplifying candidate sourcing, screening, and interview scheduling in one place.",
        image: "/images/select.png",
        link: "https://select.yuvahire.com/",
    },
    {
        title: "YuvaTrack (Ongoing)",
        description:
            "A web-based employee attendance and payroll management solution designed for small and medium businesses.",
        image: "/images/yuvatrack.png",
        link: "#",
    },
];

export default function About() {
    return (
        <div className="bg-slate-100 text-black min-h-screen relative">
            <Navbar />

            {/* Hero Section */}
            <HeroSection
                title="About Infonza"
                description="Empowering businesses with next-generation software, cloud, and digital solutions — built for scale, speed, and innovation."
                image="/images/about-hero.png"
            />

            {/* Our Products & Projects */}
            <section className="bg-slate-900 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl text-white font-bold mb-8">
                        Infonza Products
                    </h2>
                    <p className="text-white max-w-3xl text-md mx-auto mb-12">
                        Innovative in-house solutions designed to simplify business operations and empower organizations.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6 text-left">
                                    <h3 className="text-xl font-semibold mb-2 text-slate-900">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                        {product.description}
                                    </p>
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700 transition"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.img
                        src="/images/about-hero.png"
                        alt="About Infonza"
                        className="w-full rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Infonza is a Chandigarh-based software and cloud solutions company
                            helping global businesses modernize through technology. From
                            startups to enterprises, we deliver scalable web, mobile, and
                            cloud solutions using the latest frameworks and tools.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            We’re a team of developers, designers, and strategists passionate
                            about transforming ideas into impactful digital products.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Recent Client Project Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
                        Recent Client Project
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <motion.img
                            src="/images/portfolio-glovebox.png"
                            alt="Recent Client Project"
                            className="w-full md:w-1/2 h-80 object-cover rounded-2xl shadow-md"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        />

                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-semibold mb-4">
                                Insurance Workflow Automation Platform
                            </h3>
                            <p className="text-gray-600 mb-6">
                                A custom-built system for streamlining quote generation, policy
                                binding, and client onboarding for insurance agencies. Built
                                with React, Node.js, and AWS, the platform enhances efficiency
                                by automating manual processes and providing real-time tracking.
                            </p>
                            <a
                                href="/portfolio"
                                className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
                            >
                                View All Projects →
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Join Hands with Infonza"
                description="Let’s transform your ideas into scalable, impactful digital products."
                buttonText="Talk to Our Team"
                buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdLBYxeALTTwSYYaMhB_1UJHMyi-KFzMJznYnSPln3xLcvrkw/viewform"
            />

            <Footer />
        </div>
    );
}
