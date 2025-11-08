"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroSection from "../components/services-hero-section";
import CTASection from "../components/CTA-secton";

const projects = [
    {
        title: "GloveBox CRM",
        description:
            "A comprehensive SaaS based CRM solution tailored for small and medium-sized insurance agencies to manage customer relationships effectively.",
        image: "/images/portfolio-glovebox.png",
        link: "https://glovebox.io/gloveboxcrm/",
    },
    {
        title: "Readybuild ERP",
        description:
            "An ERP solution designed for construction companies to streamline project management, accounting, and resource planning.",
        image: "/images/portfolio-readybuild.png",
        link: "https://readybuild.com",
    },
    {
        title: "DNH Training",
        description:
            "An e-learning platform offering professional courses and certifications for various industries.",
        image: "/images/portfolio-dnh.png",
        link: "https://www.dnhtraining.com",
    },
    {
        title: "BuilderWing Marketplace",
        description:
            "A marketplace platform connecting homeowners with trusted contractors for home improvement projects.",
        image: "/images/portfolio-builderwing.png",
        link: "https://www.builderwing.com/",
    },

];

export default function Portfolio() {
    return (
        <div className="bg-slate-100 text-black min-h-screen relative">
            <Navbar />

            {/* Hero Section */}
            {/* Hero Section */}
            <HeroSection
                title="Portfolio"
                description="Empowering businesses with next-generation software, cloud, and digital solutions — built for scale, speed, and innovation."
                image="/images/about-hero.png"

            />


            {/* Our Projects */}
            <section className="container mx-auto px-6 pt-20">
                <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
                    Recent Client Projects
                </h2>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            } items-center mb-20 bg-white text-slate-900 rounded-2xl shadow-md`}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full md:w-1/2 h-80 object-cover rounded-l-2xl"
                        />
                        <div className="md:w-1/2 p-8">
                            <h3 className="text-3xl font-semibold">{project.title}</h3>
                            <p className="mt-4 text-gray-600">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                className="mt-6 inline-block bg-slate-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-slate-800 transition"
                            >
                                View Project →
                            </a>
                        </div>
                    </motion.div>
                ))}
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
