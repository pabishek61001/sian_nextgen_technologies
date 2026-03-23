import { Splide, SplideSlide } from "@splidejs/react-splide";

const slides = [
    {
        title: "Building Intelligent Digital Solutions",
        description:
            "We design and develop modern software platforms, AI-powered systems, and scalable digital solutions that help organizations innovate.",
        image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop",
    },
    {
        title: "AI Powered Business Platforms",
        description:
            "Our platforms leverage artificial intelligence and data science to automate workflows and unlock valuable insights.",
        image:
            "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=1600&auto=format&fit=crop",
    },
    {
        title: "Scalable SaaS & Cloud Systems",
        description:
            "We build secure SaaS platforms and cloud infrastructure that enable businesses to scale globally.",
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    },
];

const HeroSection1 = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-br  rounded-xl py-24 mt-10">
            <div className="w-full max-w-7xl mx-auto">
                {/* background blur circles */}
                <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px]  rounded-full blur-[150px] opacity-40"></div>
                <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px]  rounded-full blur-[150px] opacity-40"></div>

                <div className="max-w-7xl mx-auto px-6">

                    <Splide
                        options={{
                            type: "fade",
                            perPage: 1,
                            speed: 1200,
                            autoplay: true,
                            interval: 5000,
                            pauseOnHover: false,
                            arrows: false,
                            pagination: true,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SplideSlide key={index}>

                                <div className="grid md:grid-cols-2 gap-16 items-center">

                                    {/* LEFT CONTENT */}
                                    <div className="space-y-6">

                                        <p className="text-blue-600 font-semibold tracking-[3px] uppercase text-sm">
                                            SIAN NEXT GEN TECHNOLOGIES
                                        </p>

                                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                                            {slide.title}
                                        </h1>

                                        <p className="text-gray-600 text-lg max-w-xl">
                                            {slide.description}
                                        </p>

                                        <div className="flex gap-4 pt-4">

                                            <button className="bg-blue-600 text-white px-7 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                                                Explore Solutions
                                            </button>

                                            <button className="border border-gray-300 px-7 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
                                                Contact Us
                                            </button>

                                        </div>

                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <div className="relative flex justify-center">

                                        <div className="absolute w-[320px] h-[320px] bg-blue-100 rounded-full blur-[80px] opacity-40"></div>

                                        <img
                                            src={slide.image}
                                            alt="technology"
                                            className="w-full h-[420px] object-cover rounded-2xl"
                                        />

                                    </div>

                                </div>

                            </SplideSlide>
                        ))}
                    </Splide>

                </div>

            </div>
        </section>
    );
};

export default HeroSection1;