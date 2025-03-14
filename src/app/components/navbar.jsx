"use client";
import { useState } from "react";
import Link from "next/link";
import TopBar from "./topbar";

// const services = [
//     {
//         title: "Development",
//         links: [
//             "Web App Developemt",
//             "Mobile App Development",
//             "Software Testing Services",
//             // "NoSQL Database Management",
//         ],
//     },
//     {
//         title: "Designing Services",
//         links: [
//             "UI/UX Development",
//             "Graphic Designing",
//             "Web App Designs",
//             // "Apache/Tomcat Middleware Services",
//             // "Openshift Middleware Services",
//             // "Linux Management Services",
//             // "AIX Management Services",
//         ],
//     },
//     {
//         title: "Cloud",
//         links: [
//             "Cloud Migration",
//             "Cloud Assessment",
//             "Cloud Strategy & Planning",
//             "Cloud Security & Compliance",
//             // "Cloud Optimization",
//         ],
//     },
//     // {
//     //     title: "Application",
//     //     links: [
//     //         "Application Support",
//     //         "Application Development",
//     //         "Application Modernization",
//     //     ],
//     // },
// ];

const resources = [
    {
        title: "Whitepapers",
        links: ["Industry Reports", "Technical Guides", "Best Practices"],
    },
    {
        title: "Case Studies",
        links: ["Customer Success Stories", "Project Insights"],
    },
    {
        title: "Blogs & Articles",
        links: ["Tech Insights", "Company News", "AI Trends"],
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

    return (
        <nav className="bg-white text-black fixed w-full top-0 z-50">
            <TopBar />

            <div className="py-2 container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <span className="text-2xl font-bold text-primary">infonza</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-primary ">About</Link>
                    {/* <div
                        className="relative cursor-pointer group"
                        onMouseOver={() => setDropdownOpen(true)}
                        onMouseOut={() => setDropdownOpen(false)}
                    >
                        <span className="hover:text-primary">Services +</span>
                        {dropdownOpen && (
                            <div
                                className="absolute left-0 top-full w-[600px] bg-white text-black shadow-lg p-4 rounded-lg grid grid-cols-3 gap-6"
                                onMouseOver={() => setDropdownOpen(true)}
                                onMouseOut={() => setDropdownOpen(false)}
                            >
                                {services.map((category, index) => (
                                    <div className="" key={index}>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            {category.links.map((link, linkIndex) => (
                                                <li key={linkIndex} className="hover:text-primary transition cursor-pointer">
                                                    {link}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div> */}

                    <Link href="/software-development" className="hover:text-primary">Software Development</Link>
                    <Link href="/designing" className="hover:text-primary">Designing Services</Link>
                    <Link href="/cloud-services" className="hover:text-primary">Cloud Services</Link>



                    {/* Resources Dropdown */}
                    {/* <div
                        className="relative cursor-pointer group"
                        onMouseEnter={() => setResourcesDropdownOpen(true)}
                        onMouseLeave={() => setResourcesDropdownOpen(false)}
                    >
                        <span className="hover:text-primary">Resources +</span>
                        {resourcesDropdownOpen && (
                            <div className="absolute left-0 top-full w-[400px] bg-white text-black shadow-lg p-6 rounded-lg grid grid-cols-1 gap-6">
                                {resources.map((category, index) => (
                                    <div key={index}>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            {category.links.map((link, linkIndex) => (
                                                <li key={linkIndex} className="hover:text-primary transition cursor-pointer">
                                                    {link}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div> */}

                    {/* <Link href="/features" className="hover:text-primary">Features</Link> */}
                    <Link href="/careers" className="hover:text-primary">Careers</Link>
                </div>

                {/* CTA Button */}
                <Link href="/contact" className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg">
                    Contact Us
                </Link>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-2 text-center">
                    <Link href="/" className="block py-2 hover:text-primary">About</Link>
                    {/* <Link href="/features" className="block py-2 hover:text-primary">Features</Link> */}
                    <Link href="/faq" className="block py-2 hover:text-primary">FAQ</Link>
                    <Link href="/contact" className="block py-2 bg-primary text-white rounded-lg">Contact Us</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;