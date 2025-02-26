import Hero from "../components/hero"
import Navbar from '../components/navabr';
import TechStack from '../components/logoCarousel';
// import Stats from "@/components/Stats";

export default function Home() {
    return (
        <main className="bg-black text-white">
            <Navbar />
            <Hero />

            <TechStack />
            {/* <Stats /> */}
        </main>
    );
}
