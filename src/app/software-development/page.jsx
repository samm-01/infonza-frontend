"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroSection from "../components/services-hero-section";
import CTASection from "../components/CTA-secton";

const steps = [
    { title: "Discovery & Consultation", description: "Understanding business goals, target audience, and defining project scope.", icon: "🔍" },
    { title: "Planning & Wireframing", description: "Creating wireframes, system architecture, and choosing the right tech stack.", icon: "📝" },
    { title: "UI/UX Design", description: "Building interactive and user-friendly designs using Figma & Adobe XD.", icon: "🎨" },
    { title: "Development & Coding", description: "Implementing frontend and backend with Next.js, React, Node.js, MongoDB.", icon: "💻" },
    { title: "Testing & QA", description: "Ensuring security, performance, and functionality before deployment.", icon: "✔️" },
    { title: "Deployment & Launch", description: "Deploying to cloud platforms like AWS, Vercel with CI/CD pipelines.", icon: "🚀" },
    // { title: "Post-Launch Support", description: "Continuous updates, performance monitoring, and security patches.", icon: "🔧" },
];

export default function HowWeWork() {
    return (
        <div className="bg-slate-100 text-black min-h-screen relative">
            <Navbar />

            {/* Hero Section */}
            <HeroSection
                title="Our Development Process"
                description="We follow a systematic approach to build high-quality software solutions."
                image="/images/softwareDev-hero.svg"  // Make sure this file exists in /public/images/

            />
            {/* Process Timeline */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-12">Our Development Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-slate-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
                        >
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-gray-400 mt-2">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            {/* <section className="text-center py-16 bg-gray-800">
                <h2 className="text-4xl font-bold">Why Choose Us?</h2>
                <p className="text-gray-400 max-w-3xl mx-auto mt-4">We bring expertise, innovation, and a client-centric approach to every project.</p>
                <div className="mt-8 flex justify-center space-x-6">
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ Agile Development</div>
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ Scalable Solutions</div>
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ End-to-End Support</div>
                </div>
            </section> */}
            {/* CTA Section */}
            <CTASection
                title="Ready to Build with Us?"
                description="Get in touch with our experts and start your software development journey today."
                buttonText="Get a Free Consultation"
                buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdLBYxeALTTwSYYaMhB_1UJHMyi-KFzMJznYnSPln3xLcvrkw/viewform"
            />
            <Footer />
        </div>
    );
}
