import Hero from "../components/hero"
import Navbar from '../components/navbar';
import TechStack from '../components/logoCarousel';
import Footer from '../components/footer';
import TestimonialSection from "../components/testimonials";
import CheckAnimation from "../components/check";

export default function Home() {
    return (
        <main className="bg-black text-white">
            <Navbar />
            <Hero />
            <TestimonialSection />
            <TechStack />
            {/* <CheckAnimation /> */}
            <Footer />
        </main>
    );
}
