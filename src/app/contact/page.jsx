"use-client"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import HeroSection from "../components/services-hero-section"
import CTASection from "../components/CTA-secton"



export default function HowWeWork() {
    return (
        <div className="bg-slate-100 text-black min-h-screen relative">
            <Navbar />

            {/* Hero Section */}
            <HeroSection
                title="Get in Touch"
                description="Have a question or want to collaborate? We'd love to hear from you."
                image="/images/contact-hero.svg" />

            {/* CTA Section */}
            <CTASection
                title="Let's Connect & Collaborate!"
                description="Reach out to our team for inquiries, partnerships, or support. We're here to help you innovate and grow."
                buttonText="Contact Us Now"
                buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdLBYxeALTTwSYYaMhB_1UJHMyi-KFzMJznYnSPln3xLcvrkw/viewform"
            />
            <Footer />
        </div>
    );
}
