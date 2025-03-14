"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import HeroSection from "../components/services-hero-section";
import Footer from "../components/footer";

const cloudSteps = [
    { title: "Cloud Consultation & Strategy", description: "Analyzing business needs and defining a scalable cloud strategy.", icon: "☁️" },
    { title: "Cloud Migration & Deployment", description: "Seamlessly moving infrastructure and applications to the cloud.", icon: "🚀" },
    { title: "Security & Compliance", description: "Implementing robust security protocols and ensuring compliance.", icon: "🔒" },
    { title: "Cloud Optimization", description: "Enhancing performance, reducing costs, and improving efficiency.", icon: "⚡" },
    { title: "Managed Cloud Services", description: "Ongoing cloud support, maintenance, and monitoring.", icon: "🔧" },
    { title: "AI & Automation in Cloud", description: "Leveraging AI-powered tools for automated cloud operations.", icon: "🤖" },
];

export default function CloudServices() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <HeroSection title="Cloud Solutions for Your Business" description="Leverage the power of cloud computing to drive innovation, scalability, and growth." />

            {/* Cloud Service Steps */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-12">Our Cloud Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cloudSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
                        >
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-gray-400 mt-2">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Our Cloud Services */}
            <section className="text-center py-16 bg-gray-800">
                <h2 className="text-4xl font-bold">Why Choose Our Cloud Solutions?</h2>
                <p className="text-gray-400 max-w-3xl mx-auto mt-4">We provide secure, scalable, and cost-effective cloud solutions tailored to your business.</p>
                <div className="mt-8 flex justify-center space-x-6">
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ Scalable Infrastructure</div>
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ 24/7 Cloud Monitoring</div>
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ AI-Powered Automation</div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16">
                <h2 className="text-4xl font-bold">Transform Your Business with Cloud</h2>
                <p className="text-gray-400 max-w-3xl mx-auto mt-4">Get in touch with our cloud experts to discuss the best solution for your business.</p>
                <a href="/contact" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-opacity-80">Get a Free Cloud Consultation</a>
            </section>

            <Footer />
        </div>
    );
}