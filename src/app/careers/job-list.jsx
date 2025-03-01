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

    return ( // ✅ Added return statement
        <section className="min-h-screen bg-gray-100 text-black py-16 px-6 md:px-16">
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
    );
};

export default CareersSection;
