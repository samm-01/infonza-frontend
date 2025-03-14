"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const steps = [
    { title: "Discovery & Consultation", description: "Understanding business goals, target audience, and defining project scope.", icon: "🔍" },
    { title: "Planning & Wireframing", description: "Creating wireframes, system architecture, and choosing the right tech stack.", icon: "📝" },
    { title: "UI/UX Design", description: "Building interactive and user-friendly designs using Figma & Adobe XD.", icon: "🎨" },
    { title: "Development & Coding", description: "Implementing frontend and backend with Next.js, React, Node.js, MongoDB.", icon: "💻" },
    { title: "Testing & QA", description: "Ensuring security, performance, and functionality before deployment.", icon: "✔️" },
    { title: "Deployment & Launch", description: "Deploying to cloud platforms like AWS, Vercel with CI/CD pipelines.", icon: "🚀" },
    { title: "Post-Launch Support", description: "Continuous updates, performance monitoring, and security patches.", icon: "🔧" },
];

export default function HowWeWork() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Hero Section with Animated Background */}
            <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
                {/* Animated Background Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1.2 }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-black to-indigo-900 opacity-40 blur-3xl"
                ></motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold text-primary relative"
                >
                    How We Build Software
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-gray-400 max-w-3xl mt-4 relative"
                >
                    We follow a structured and agile approach to deliver high-quality web & mobile solutions.
                </motion.p>
            </section>

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
                <h2 className="text-4xl font-bold">Why Choose Us?</h2>
                <p className="text-gray-400 max-w-3xl mx-auto mt-4">We bring expertise, innovation, and a client-centric approach to every project.</p>
                <div className="mt-8 flex justify-center space-x-6">
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ Agile Development</div>
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ Scalable Solutions</div>
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ End-to-End Support</div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16">
                <h2 className="text-4xl font-bold">Ready to Build with Us?</h2>
                <p className="text-gray-400 max-w-3xl mx-auto mt-4">Get in touch with our experts and start your software development journey today.</p>
                <a href="/contact" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-opacity-80">Get a Free Consultation</a>
            </section>

            <Footer />
        </div>
    );
}