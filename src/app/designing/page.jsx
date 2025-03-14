"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const designSteps = [
    { title: "Research & Discovery", description: "Understanding your brand, audience, and goals to create a strong foundation.", icon: "🔍" },
    { title: "Wireframing & Prototyping", description: "Creating wireframes and interactive prototypes for a seamless user experience.", icon: "📝" },
    { title: "UI/UX Design", description: "Crafting visually stunning and user-friendly designs using Figma & Adobe XD.", icon: "🎨" },
    { title: "Branding & Identity", description: "Developing logos, color schemes, and brand guidelines for a consistent identity.", icon: "🏆" },
    { title: "Design Testing & Iteration", description: "Gathering feedback, making improvements, and refining designs for the best results.", icon: "✔️" },
    { title: "Final Handoff & Implementation", description: "Delivering production-ready designs and assisting with development integration.", icon: "🚀" },
];

export default function DesignServices() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-5xl font-bold text-primary">Our Design Process</h1>
                <p className="text-gray-400 max-w-3xl mt-4">We craft stunning, user-centric designs that elevate brands and enhance experiences.</p>
            </section>

            {/* Process Timeline */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-12">How We Design</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {designSteps.map((step, index) => (
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

            {/* Why Choose Us */}
            <section className="text-center py-16 bg-gray-800">
                <h2 className="text-4xl font-bold">Why Choose Our Design Services?</h2>
                <p className="text-gray-400 max-w-3xl mx-auto mt-4">We create engaging, innovative, and brand-focused designs tailored to your business.</p>
                <div className="mt-8 flex justify-center space-x-6">
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ Human-Centered Approach</div>
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ Pixel-Perfect Execution</div>
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ Scalable & Future-Ready</div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16">
                <h2 className="text-4xl font-bold">Let’s Design Something Amazing!</h2>
                <p className="text-gray-400 max-w-3xl mx-auto mt-4">Partner with us to create exceptional UI/UX experiences for your brand.</p>
                <a href="/contact" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-opacity-80">Get a Free Design Consultation</a>
            </section>

            <Footer />
        </div>
    );
}