"use client";

import { useState } from "react";

const categories = [
    { name: "Front-end technologies", tools: ["React", "Next.js", "Tailwind CSS", "Vue.js"] },
    { name: "Backend technologies", tools: ["Node.js", "Express", "Django", "Spring Boot"] },
    { name: "Mobile", tools: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { name: "Cloud technologies", tools: ["AWS", "Google Cloud", "Azure", "DigitalOcean"] },
    { name: "Platforms", tools: ["Salesforce", "Adobe Commerce", "Power BI", "Oracle"] },
    { name: "Data storages", tools: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
];

const TechStack = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <section className="bg-white text-black py-16 px-6 md:px-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-primary">Tools and Technologies We Excel In</h2>
                <p className="text-slate-700 mt-4 max-w-2xl">
                    We continuously experiment with new technologies and frameworks through our in-house R&D to bring the best solutions to our clients.
                </p>

                <div className="mt-10 flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg">
                    {/* Categories */}
                    <div className="w-full md:w-2/5 bg-slate-200 p-6 flex flex-col space-y-4">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`text-left px-4 py-3 rounded-lg transition-all ${selectedCategory.name === category.name
                                    ? "bg-primary text-white font-bold text-xl"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 font-bold text-lg"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Tools Display */}
                    <div className="w-full md:w-3/5 p-6 flex flex-wrap gap-4 justify-center items-center">
                        {selectedCategory.tools.map((tool, index) => (
                            <div key={index} className="px-6 py-3 bg-slate-200 rounded-lg text-black text-lg shadow-md">
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
