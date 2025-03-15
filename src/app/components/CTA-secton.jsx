"use client";

import Link from "next/link";

const CTASection = ({ title, description, buttonText, buttonLink }) => {
    return (
        <div className="bg-slate-100 md:p-20" >
            <section className="flex flex-col bg-black rounded-3xl items-center text-center py-16 px-6">
                {/* Title */}
                <h2 className="text-4xl font-bold text-white">{title}</h2>

                {/* Description */}
                <p className="text-white mt-2 max-w-2xl">{description}</p>

                {/* CTA Button */}
                <Link href={buttonLink}>
                    <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-opacity-80 transition">
                        {buttonText}
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default CTASection;
