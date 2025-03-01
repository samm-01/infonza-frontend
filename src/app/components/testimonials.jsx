import Image from "next/image";

const testimonials = [
    {
        text: "Tadbeer and her team delivered an outstanding website. Their willingness to address post-project issues, even a year later, was remarkable. I highly recommend them for top-notch web development.",
        name: "Dineth A.",
        image: "/avatars/dineth.jpg",
    },
    {
        text: "They expertly crafted my website with impressive speed and patience, making sure to accommodate all my specific requests. Their keen attention to detail and dedication resulted in a flawless final product.",
        name: "Karl B.",
        image: "/avatars/karl.jpg",
    },
    {
        text: "They exceeded expectations from start to finish, delivering a website that perfectly captures our brand. Their responsiveness, technical expertise, and innovative approach made the entire experience seamless.",
        name: "John G.",
        image: "/avatars/john.jpg",
    },
];

const TestimonialSection = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-16">

            <div className="container mx-auto relative">
                <div className="absolute top-10 left-2 w-40 h-40 bg-purple-500 opacity-30 blur-3xl"></div>

                {/* Header */}
                <h2 className="text-xl font-semibold text-primary mb-2">testimonials</h2>
                <h3 className="text-4xl font-bold text-black mb-4">
                    the secret to our sauce is empathy!
                </h3>
                <p className="text-gray max-w-2xl">
                    See what our satisfied customers have to say — they’re not just blowing hot air!
                </p>
                {/* <a href="#" className="text-black font-semibold underline mt-4 inline-block">read more ↗</a> */}
            </div>

            {/* Testimonial Cards */}
            <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                        <p className="text-black">{testimonial.text}</p>
                        <div className="flex items-center mt-4">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={50}
                                height={50}
                                className="rounded-full mr-4"
                            />
                            <h4 className="font-bold text-black">{testimonial.name}</h4>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default TestimonialSection;