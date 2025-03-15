
import Navbar from "../components/navbar";
import CareersSection from "./job-list.jsx";
import Footer from "../components/footer";
import HeroSection from "../components/services-hero-section";
import CTASection from "../components/CTA-secton";




export default function Careers() {

    return (
        <main className="bg-white text-black">
            <Navbar />
            {/* Hero Section */}
            <HeroSection
                title={
                    <>
                        Join Our Team <br /> at Infonza
                    </>
                }
                description="We empower businesses with cutting-edge technology. Join us to innovate, solve real-world challenges, and shape the future of tech."
                image="/images/careers-hero.svg"
            />
            {/* CTA Section */}
            <CTASection
                title="Join Our Team & Shape the Future!"
                description="Be a part of our innovative team, work on exciting projects, and grow your career with us."
                buttonText="Apply Now"
                buttonLink="https://forms.gle/your-google-form-link"
            />
            {/* <CareersSection /> */}
            <Footer />

        </main>
    );
};