import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Public, CarCrash } from "@mui/icons-material";

export default function AboutSection() {
    // Animation Variants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section className="relative max-w-7xl mx-auto py-24 px-6 md:px-12 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] bg-blue-50 rounded-full blur-[120px] opacity-60" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">


                {/* RIGHT: IMAGE COMPOSITION */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                >
                    {/* Main Image with decorative border */}
                    <div className="relative z-10 p-3 bg-white border border-gray-100 shadow-2xl rounded-[2.5rem]">
                        <img
                            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" // Higher quality team collab image
                            alt="Innovation at SIAN"
                            className="w-full h-[500px] object-cover rounded-[2rem]"
                        />
                    </div>

                    {/* Floating Glassmorphism Card */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 md:-left-10 z-20 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white max-w-[220px]"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                S
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase">Status</p>
                                <p className="text-xs font-bold text-gray-900">Live Optimization</p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-blue-600 h-full w-[85%]"></div>
                        </div>
                        <p className="text-[10px] mt-2 text-gray-500 font-medium italic">"Deploying AI modules..."</p>
                    </motion.div>

                    {/* Decorative Background Circles */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
                </motion.div>


                {/* LEFT: TEXT CONTENT */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.p
                        variants={fadeIn}
                        className="text-blue-600 font-bold tracking-[4px] uppercase text-xs mb-4 flex items-center gap-2"
                    >
                        <span className="w-8 h-[2px] bg-blue-600 inline-block"></span>
                        About Our Company
                    </motion.p>

                    <motion.h2
                        variants={fadeIn}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight"
                    >
                        Driving Innovation Through <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                            Intelligence & Tech
                        </span>
                    </motion.h2>

                    <motion.div variants={fadeIn} className="space-y-6">
                        <p className="text-gray-500 text-lg leading-relaxed">
                            SIAN Next Gen Technologies is a forward-thinking technology company focused on building modern digital solutions powered by <span className="text-gray-900 font-medium">software engineering, AI, and data-driven systems.</span>
                        </p>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            We specialize in high-performance web applications, cloud platforms, and AI-powered solutions that improve efficiency. From product design to deployment, we deliver technology that supports long-term success.
                        </p>
                    </motion.div>

                    {/* MODERN STATS CARDS */}
                    <motion.div
                        variants={fadeIn}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
                    >
                        {[
                            { label: "Digital Platforms", val: "10+", icon: <TrendingUp className="text-blue-600" /> },
                            { label: "AI Solutions", val: "NextGen", icon: <CarCrash className="text-blue-600" /> },
                            { label: "Global Reach", val: "Worldwide", icon: <Public className="text-blue-600" /> },
                        ].map((stat, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                                <div className="mb-3">{stat.icon}</div>
                                <h3 className="text-2xl font-black text-gray-900">{stat.val}</h3>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>


            </div>
        </section>
    );
}