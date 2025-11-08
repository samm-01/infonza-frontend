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
            "A Superset-inspired SaaS platform connecting students, institutions, and employers. It offers placement automation, resume screening, and company dashboards for smooth recruitment workflows.",
        image: "/images/yuvahire.png",
        link: "https://yuvahire.com",
    },
    {
        title: "Select",
        description:
            "A recruitment automation tool for agencies, simplifying candidate sourcing, screening, and interview scheduling in one place.",
        image: "/images/yuvahire.png",
        link: "#",
    },
    {
        title: "Attendance Software",
        description:
            "A web-based employee attendance and payroll management solution designed for small and medium businesses.",
        image: "/images/yuvahire.png",
        link: "#",
    },
];


export default function About() {
    return (
        <div className="bg-slate-100 text-black min-h-screen relative">
            <Navbar />

            {/* Hero Section */}
            {/* Hero Section */}
            <HeroSection
                title="About Infonza"
                description="Empowering businesses with next-generation software, cloud, and digital solutions — built for scale, speed, and innovation."
                image="/images/about-hero.png"

            />


            {/* Our Products & Projects */}
            <section className="bg-slate-900 py-16 ">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl text-white font-bold mb-8">Our Products & Projects</h2>
                    <p className="text-gray-600 text-white max-w-3xl mx-auto mb-12">
                        Here’s a glimpse of the platforms we’ve built — from in-house SaaS products to custom solutions crafted for our clients across
                        industries like insurance, education, and real estate.
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
                                    <h3 className="text-2xl font-semibold mb-2 text-slate-900">
                                        {product.name}
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
            <section className="container mx-auto px-6">
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
                            Infonza is a Chandigarh-based software and cloud solutions company helping global businesses modernize through technology.
                            From startups to enterprises, we deliver scalable web, mobile, and cloud solutions using the latest frameworks and tools.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            We’re a team of developers, designers, and strategists passionate about transforming ideas into impactful digital products.
                        </p>
                    </motion.div>
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
