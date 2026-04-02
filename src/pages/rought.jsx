import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// MUI Icons
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SecurityIcon from '@mui/icons-material/Security';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarsIcon from '@mui/icons-material/Stars';

const services = [
    {
        title: "Artificial Intelligence",
        desc: "Deploy proprietary neural architectures and LLMs designed for enterprise-grade automation and predictive accuracy.",
        icon: <PsychologyIcon className="!text-4xl" />,
        color: "from-blue-700 to-indigo-800",
        tag: "Intelligence"
    },
    {
        title: "Software Engineering",
        desc: "Architecting high-performance ecosystems with React, Next.js, and Go, ensuring sub-second latency and global scale.",
        icon: <CodeIcon className="!text-4xl" />,
        color: "from-slate-800 to-slate-900",
        tag: "Development"
    },
    {
        title: "Cloud Governance",
        desc: "Enterprise-grade AWS & Azure infrastructure with automated disaster recovery and zero-trust security protocols.",
        icon: <CloudQueueIcon className="!text-4xl" />,
        color: "from-indigo-600 to-blue-500",
        tag: "Infrastructure"
    },
    {
        title: "Cyber Resilience",
        desc: "End-to-end encryption and real-time threat intelligence to safeguard your organization's most sensitive digital assets.",
        icon: <SecurityIcon className="!text-4xl" />,
        color: "from-gray-900 to-black",
        tag: "Security"
    }
];

const ServiceCard = ({ service, index, progress, targetScale }) => {
    const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0 px-4">
            <motion.div
                style={{ scale }}
                className="relative w-full max-w-5xl min-h-[500px] rounded-[3rem] p-10 md:p-16 overflow-hidden shadow-2xl border border-gray-200 bg-white flex flex-col md:flex-row items-center gap-12"
            >
                {/* Abstract Background for Card */}
                <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${service.color} opacity-[0.02] z-0`} />

                <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-4 mb-8">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-xl`}>
                            {service.icon}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-l border-gray-200 pl-4">
                            {service.tag}
                        </span>
                    </div>

                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                        {service.title}
                    </h3>
                    <p className="text-slate-500 text-lg md:text-xl max-w-lg leading-relaxed mb-10">
                        {service.desc}
                    </p>

                    <button className="flex items-center gap-3 group text-blue-600 font-bold text-lg">
                        Explore Capability
                        <ArrowForwardIcon className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                <div className="relative z-10 hidden md:block">
                    <div className="text-[12rem] font-black text-slate-50 opacity-10 leading-none select-none">
                        0{index + 1}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function CorporateLanding() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <main ref={container} className="relative bg-white font-sans">

            {/* --- ABSTRACT BACKGROUND ELEMENTS --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
                    style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '48px 48px' }}
                />
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-50 rounded-full blur-[120px]" />
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
                        <StarsIcon className="text-blue-600 !text-sm" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                            The Standard in Next-Gen Tech
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black tracking-tight text-slate-900 mb-8 leading-[0.9]">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900">
                            Digital Legacies.
                        </span>
                    </h1>

                    <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                        SIAN Next-Gen provides the technical backbone for the world's most ambitious corporate transformations.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 transition-all">
                            Consult with our Partners
                        </button>
                        <button className="px-10 py-5 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                            View Case Studies
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* --- SERVICE STACK SECTION --- */}
            <section className="relative z-10 pb-[20vh]">
                <div className="sticky top-20 text-center mb-20 pointer-events-none">
                    <h2 className="text-sm font-black uppercase tracking-[0.5em] text-slate-300">
                        Operational Excellence
                    </h2>
                </div>

                {services.map((service, i) => {
                    const targetScale = 1 - ((services.length - i) * 0.04);
                    return (
                        <ServiceCard
                            key={i}
                            index={i}
                            service={service}
                            progress={scrollYProgress}
                            targetScale={targetScale}
                        />
                    );
                })}
            </section>

            {/* --- CORPORATE FOOTER CTA --- */}
            <section className="relative h-screen bg-slate-900 text-white flex flex-col items-center justify-center rounded-t-[5rem] overflow-hidden z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative z-10 text-center px-6"
                >
                    <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
                        Transcend the <br /> Ordinary.
                    </h2>
                    <p className="text-slate-400 text-xl max-w-xl mx-auto mb-12">
                        Connect with our executive team to begin your organization's digital evolution.
                    </p>
                    <button className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-slate-900 transition-all">
                        Inquire Privately
                    </button>
                </motion.div>
            </section>
        </main>
    );
}