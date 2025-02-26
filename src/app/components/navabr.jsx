"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">

            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <span className="text-2xl font-bold text-primary">CognifyAI</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <Link href="/features" className="hover:text-primary">Features</Link>
                    <Link href="/pricing" className="hover:text-primary">Pricing</Link>
                    <Link href="/faq" className="hover:text-primary">FAQ</Link>
                </div>

                {/* CTA Button */}
                <Link href="/contact" className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg">
                    Learn More
                </Link>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-2 text-center">
                    <Link href="/" className="block py-2 hover:text-primary">Home</Link>
                    <Link href="/features" className="block py-2 hover:text-primary">Features</Link>
                    <Link href="/pricing" className="block py-2 hover:text-primary">Pricing</Link>
                    <Link href="/faq" className="block py-2 hover:text-primary">FAQ</Link>
                    <Link href="/contact" className="block py-2 bg-primary text-white rounded-lg">Learn More</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
