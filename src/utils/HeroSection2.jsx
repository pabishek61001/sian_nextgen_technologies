import { useMediaQuery, useTheme } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const slides = [
    {
        title: "Building Intelligent Digital Solutions",
        description:
            "We design and develop modern software platforms, AI-powered systems, and scalable digital solutions that help organizations innovate.",
        image:
            "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMHNvbHV0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        title: "AI Powered Business Platforms",
        description:
            "Our platforms leverage artificial intelligence and data science to automate workflows and unlock valuable insights.",
        image:
            "https://plus.unsplash.com/premium_photo-1764691412522-9e46b18fb613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjBiYW5uZXJzfGVufDB8fDB8fHww",
    },
    {
        title: "Scalable SaaS & Cloud Systems",
        description:
            "We build secure SaaS platforms and cloud infrastructure that enable businesses to scale globally.",
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    },
];

const HeroSection2 = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <section className="relative w-full h-screen overflow-hidden p-2 ">

            <Splide
                options={{
                    type: "fade",
                    rewind: true,
                    autoplay: true,
                    interval: 6000,
                    speed: 1200,
                    arrows: isMobile ? false : true,
                    pagination: true,
                }}
            >
                {slides.map((slide, index) => (
                    <SplideSlide key={index}>

                        <div className="relative w-full h-screen flex items-center justify-center ">

                            {/* BACKGROUND IMAGE */}
                            <img
                                src={slide.image}
                                className="absolute inset-0 w-full h-full object-cover blur-[6px] brightness-75 scale-110 rounded-2xl "
                                alt=""
                            />

                            {/* GRADIENT OVERLAY */}
                            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20 "></div>

                            {/* CONTENT */}
                            <div className="relative max-w-5xl text-center text-white px-6">

                                <p className="uppercase tracking-[4px] text-sm text-blue-300 font-semibold mb-4">
                                    SIAN NEXT GEN TECHNOLOGIES
                                </p>

                                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                    {slide.title}
                                </h1>

                                <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                                    {slide.description}
                                </p>

                                <div className="flex justify-center gap-4 mt-10">

                                    <button className="bg-[#053d6b] btn px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                                        Explore
                                    </button>

                                    <button className="border border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition">
                                        Contact Us
                                    </button>

                                </div>

                            </div>

                        </div>

                    </SplideSlide>
                ))}
            </Splide>

        </section>
    );
};

export default HeroSection2;