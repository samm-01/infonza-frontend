import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-16 relative overflow-hidden">
            {/* Blurry Background Effect in the Center */}
            <div className="absolute inset-80 flex justify-center items-center">
                <div className="w-72 h-72 bg-primary opacity-30 blur-3xl"></div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {/* Column 1: Logo & About */}
                <div>
                    <h2 className="text-4xl font-bold text-primary">infonza</h2>
                    <p className="text-gray-400 mt-2 text-md">
                        Software & Cloud Solutions for Global Businesses

                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                        {/* <li><Link href="/services" className="hover:text-primary">Services</Link></li> */}
                        {/* <li><Link href="/resources" className="hover:text-primary">Resources</Link></li> */}
                        <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Our Services</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="/software-development" className="hover:text-primary">Software Development</Link></li>
                        <li><Link href="/designing" className="hover:text-primary">Designing Services</Link></li>
                        <li><Link href="/cloud-services" className="hover:text-primary">Cloud Services</Link></li>
                        {/* <li><Link href="/services/cybersecurity" className="hover:text-primary">Cybersecurity</Link></li> */}
                    </ul>
                </div>

                {/* Column 4: Contact & Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
                    <p className="text-gray-400 text-sm">Email: support@infonza.com</p>
                    {/* <p className="text-gray-400 text-sm">Phone: +91 9915 820 125</p> */}
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.linkedin.com/company/infonza-innovations/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BPwZ2Y157R0OmSpn0VqPoPA%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="hover:text-primary cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/company/infonza-innovations/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BPwZ2Y157R0OmSpn0VqPoPA%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="hover:text-primary cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/company/infonza-innovations/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BPwZ2Y157R0OmSpn0VqPoPA%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="hover:text-primary cursor-pointer" />
                        </a>
                        {/* <a href="https://www.linkedin.com/company/infonza-innovations/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BPwZ2Y157R0OmSpn0VqPoPA%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-primary cursor-pointer" />
                        </a> */}
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4 relative z-10">
                &copy; {new Date().getFullYear()} Infonza. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
