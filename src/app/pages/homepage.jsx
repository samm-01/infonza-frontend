import Hero from "../components/hero"
import Navbar from '../components/navbar';
import TechStackCarousel from '../components/logoCarousel';
import Footer from '../components/footer';
import TestimonialSection from "../components/testimonials";
import TechStack from "../components/tech-stack";
import CheckAnimation from "../components/check";

export default function Home() {
    return (
        <main className="bg-black text-white">
            <Navbar />
            <Hero />
            <TechStack />
            <TestimonialSection />
            <TechStackCarousel />
            {/* <CheckAnimation /> */}
            <Footer />
        </main>
    );
}
