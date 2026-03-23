import React from 'react';

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Marketing Manager",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        message: "Amazing service and very professional!",
    },
    {
        name: "Amit Verma",
        role: "Startup Founder",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        message: "Truly the best experience I’ve had. Recommend!",
    },
    {
        name: "Sara Lee",
        role: "Creative Director",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        message: "Their attention to detail is unmatched.",
    },
    {
        name: "Ravi Kumar",
        role: "Product Designer",
        avatar: "https://randomuser.me/api/portraits/men/24.jpg",
        message: "Quick, clean, and creative! Loved it.",
    },
];

const Testimonials = () => {
    return (
        <div className="relative w-full overflow-hidden py-12">

            {/* Row 1 */}
            <div className="overflow-hidden bg-gray-900 py-2 whitespace-nowrap">
                <div className="flex gap-6 py-2 animate-[marquee_10s_linear_infinite]">
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={`row1-${index}`}
                            className=" min-w-[400px] max-w-xs  bg-white/10 backdrop-blur-md text-white p-5 rounded-xl shadow-md"
                        >
                            <div className="flex items-center gap-3 mb-3 ">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold">{item.name}</h4>
                                    <p className="text-xs text-white/70 ">{item.role}</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed opacity-90 ">“{item.message}”</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 - reverse scroll */}
            <div className="overflow-hidden bg-gray-900 py-2 whitespace-nowrap mt-2">
                <div className="flex gap-6 py-2 animate-[marqueeReverse_20s_linear_infinite]">
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={`row2-${index}`}
                            className=" min-w-[400px] max-w-xs  bg-white/10 backdrop-blur-md text-white p-5 rounded-xl shadow-md"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold">{item.name}</h4>
                                    <p className="text-xs text-white/70">{item.role}</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed opacity-90">“{item.message}”</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline keyframes */}
            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
        `}
            </style>
        </div>
    );
};

export default Testimonials;
