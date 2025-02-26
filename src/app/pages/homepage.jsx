import Hero from "@/app/components/Hero";
import Navbar from '@/app/components/navabr';
import TechStack from '@/app/components/logoCarousel';
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
