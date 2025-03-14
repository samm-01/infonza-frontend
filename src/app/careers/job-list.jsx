"use client";
import { useState } from "react";

const jobListings = [
    {
        title: "Frontend Developer",
        location: "Remote",
        type: "Full-time",
        description: "We are looking for a skilled Frontend Developer with experience in React and Tailwind CSS.",
    },
    {
        title: "Backend Developer",
        location: "Mumbai, India",
        type: "Full-time",
        description: "Join our team as a Backend Developer and work with Node.js, Express, and MongoDB.",
    },
    {
        title: "UI/UX Designer",
        location: "Remote",
        type: "Part-time",
        description: "Seeking a creative UI/UX Designer with experience in Figma and Adobe XD.",
    },
];

const CareersSection = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <section className="h-screen flex flex-col items-center justify-center text-center bg-black bg-gray-100 text-black py-16 px-6 md:px-16 pt-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-primary">Join Our Team</h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    We are always looking for talented individuals to be a part of our growing company.
                </p>
            </div>

            <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobListings.map((job, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-gray-500">{job.location} • {job.type}</p>
                        <p className="text-gray-700 mt-2">{job.description}</p>
                        <button
                            onClick={() => setSelectedJob(job)}
                            className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-80"
                        >
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>

            {selectedJob && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
                        <h3 className="text-xl font-semibold">{selectedJob.title}</h3>
                        <p className="text-gray-500">{selectedJob.location} • {selectedJob.type}</p>
                        <p className="text-gray-700 mt-2">{selectedJob.description}</p>
                        <a
                            href="mailto:careers@infonza.com"
                            className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-80"
                        >
                            Send Application
                        </a>
                        <button
                            onClick={() => setSelectedJob(null)}
                            className="block mt-4 text-gray-500 hover:text-black"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
        // <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
        //     <span className="bg-gray-800 text-sm px-4 py-1 rounded-full mb-4">🔵 Update 2.0: AI Integration</span>


        //     <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
        //         AI tools to bring your <br /> vision to life
        //     </h1>
        //     <p className="mt-4 text-lg text-gray-300 max-w-2xl">
        //         Unleash the power of AI to supercharge your creativity. Transform your ideas into stunning content effortlessly and in no time.
        //     </p>

        //     <div className="mt-6 flex space-x-4">
        //         <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg">Get Started</button>
        //         <button className="border border-primary text-primary px-6 py-3 rounded-lg text-lg">Learn More</button>
        //     </div>
        //     {/* <div className="absolute top-10 w-96 h-48 bg-primary opacity-30 blur-3xl"></div> */}

        // </section>
    );
};

export default CareersSection;