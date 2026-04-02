import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// MUI Icons
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarsIcon from '@mui/icons-material/Stars';
import { useNavigate } from "react-router-dom";

const allServices = [
    { title: "Artificial Intelligence", desc: "Predictive Analysis & Chatbots.", icon: <PsychologyIcon /> },
    { title: "Custom Software", desc: "Tailored business logic.", icon: <CodeIcon /> },
    { title: "Web Apps", desc: "Scalable React/Next.js platforms.", icon: <DevicesIcon /> },
    { title: "Mobile Dev", desc: "Native iOS & Android apps.", icon: <DevicesIcon /> },
    { title: "Cloud Systems", desc: "AWS & Azure infrastructure.", icon: <CloudIcon /> },
    { title: "Cybersecurity", desc: "Threat prevention & audits.", icon: <SecurityIcon /> },
];

const ResponsiveHeroAesthetic = () => {

    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const duplicatedServices = [...allServices, ...allServices, ...allServices, ...allServices, ...allServices];

    return (
        <section className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col lg:flex-row text-gray-900 py-10">

            {/* --- NEW BACKGROUND DESIGN ELEMENTS --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* 1. Animated Grid Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* 2. Floating Mesh Blobs (Motion Effect) */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-blue-400/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-purple-400/10 rounded-full blur-[120px]"
                />

                {/* 3. Radial Vignette (Keeps the center clean) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_80%)]" />
            </div>
            {/* --- END BACKGROUND DESIGN ELEMENTS --- */}

            {/* BACKGROUND ACCENTS (Original) */}
            <div className="absolute -top-[5%] -left-[5%] w-[60vw] h-[60vh] bg-[radial-gradient(circle,_rgba(37,99,235,0.06)_0%,_rgba(255,255,255,0)_70%)] blur-[80px] z-0" />

            {/* LEFT: CONTENT */}
            <div className="relative z-10 flex-1 lg:flex-[1.2] flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-0 items-center lg:items-start text-center lg:text-left">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="flex items-center space-x-3 mb-6 justify-center lg:justify-start">
                        <div className="p-1 bg-blue-50 rounded-md flex"><StarsIcon className="text-blue-600 !text-base" /></div>
                        <span className="uppercase tracking-[0.2em] text-[10px] font-extrabold text-gray-500">Sian Next Gen</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl xl:text-6xl font-black leading-tight mb-6">
                        Engineering <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Next-Gen Scalability.
                        </span>
                    </h1>

                    <p className="text-gray-500 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
                        Designing the digital infrastructure of tomorrow. We bridge the gap between visionary research and world-class software execution.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button onClick={() => navigate("/contact-us")} className="flex items-center justify-center space-x-4 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95">
                            <span>Start Project</span>
                            <ArrowForwardIcon className="!text-xl" />
                        </button>
                        {/* <button className="bg-white border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-400 transition-all">
                            View Services
                        </button> */}
                    </div>
                </motion.div>
            </div>

            {/* RIGHT: THE TICKER */}
            <div className="relative z-10 py-10 flex-1 lg:flex-[0.8] bg-gray-50/30 backdrop-blur-[2px] flex items-center overflow-hidden h-[300px] md:h-[400px] lg:h-screen border-l border-gray-100">

                {/* Gradient Fades (Top/Bottom for Desktop, Left/Right for Mobile) */}
                <div className="absolute inset-0 z-20 pointer-events-none 
                    bg-[linear-gradient(to_right,#f9fafb_0%,transparent_15%,transparent_85%,#f9fafb_100%)]
                    lg:bg-[linear-gradient(to_bottom,#f9fafb_0%,transparent_15%,transparent_85%,#f9fafb_100%)]"
                />

                <motion.div
                    className="flex lg:flex-col gap-6 p-6"
                    animate={isMobile ? { x: [0, -1000] } : { y: [0, -800] }}
                    transition={{
                        x: { repeat: Infinity, duration: 20, ease: "linear" },
                        y: { repeat: Infinity, duration: 25, ease: "linear" }
                    }}
                >
                    {duplicatedServices.map((service, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 group p-6 w-[300px] md:w-[350px] bg-white/80 backdrop-blur-sm border border-black/5 rounded-[24px] flex items-center space-x-6 shadow-sm hover:border-blue-500 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="font-extrabold text-gray-900 text-lg leading-tight">{service.title}</h3>
                                <p className="text-sm text-gray-500">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ResponsiveHeroAesthetic;