"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import HeroSection from "../components/services-hero-section";
import CloudSteps from "./cloud-steps";
import CTASection from "../components/CTA-secton";

import Footer from "../components/footer";

export default function CloudServices() {
    return (
        <div className="bg-white text-black min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <HeroSection title="Cloud Solutions for Your Business" description="Leverage the power of cloud computing to drive innovation, scalability, and growth."
                image="/images/cloud-hero.svg"  // Make sure this file exists in /public/images/

            />

            {/* Cloud Service Steps */}
            <CloudSteps />
            {/* Why Choose Our Cloud Services */}
            {/* <section className="text-center py-16 bg-gray-800">
                <h2 className="text-4xl font-bold">Why Choose Our Cloud Solutions?</h2>
                <p className="text-gray-400 max-w-3xl mx-auto mt-4">We provide secure, scalable, and cost-effective cloud solutions tailored to your business.</p>
                <div className="mt-8 flex justify-center space-x-6">
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ Scalable Infrastructure</div>
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ 24/7 Cloud Monitoring</div>
                    <div className="bg-gray-900 p-6 rounded-lg">✔️ AI-Powered Automation</div>
                </div>
            </section> */}

            {/* CTA Section */}
            <CTASection
                title="Transform Your Business with Cloud"
                description="Get in touch with our cloud experts to discuss the best solution for your business."
                buttonText="Get a Free Cloud Consultation"
                buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdLBYxeALTTwSYYaMhB_1UJHMyi-KFzMJznYnSPln3xLcvrkw/viewform"
            />

            <Footer />
        </div>
    );
}