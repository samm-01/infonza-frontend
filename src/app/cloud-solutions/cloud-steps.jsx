"use client";
import { motion } from "framer-motion";

const cloudSteps = [
    { title: "Cloud Consultation & Strategy", description: "Analyzing business needs and defining a scalable cloud strategy.", icon: "☁️" },
    { title: "Cloud Migration & Deployment", description: "Seamlessly moving infrastructure and applications to the cloud.", icon: "🚀" },
    { title: "Security & Compliance", description: "Implementing robust security protocols and ensuring compliance.", icon: "🔒" },
    { title: "Cloud Optimization", description: "Enhancing performance, reducing costs, and improving efficiency.", icon: "⚡" },
    { title: "Managed Cloud Services", description: "Ongoing cloud support, maintenance, and monitoring.", icon: "🔧" },
    { title: "AI & Automation in Cloud", description: "Leveraging AI-powered tools for automated cloud operations.", icon: "🤖" },
];

export default function cloudStep() {
    return (
        <div className="bg-slate-100 text-black">
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
                            className="bg-slate-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
                        >
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-gray-400 mt-2">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}