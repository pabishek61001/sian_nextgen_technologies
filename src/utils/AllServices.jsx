import { useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
import { ArrowBack, ArrowDropDown, ArrowDropUp, ArrowUpward } from '@mui/icons-material';

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CampaignIcon from '@mui/icons-material/Campaign'; // Digital Marketing
import CloudIcon from '@mui/icons-material/Cloud'; // Cloud Solutions
import SecurityIcon from '@mui/icons-material/Security'; // Cybersecurity
import SpeedIcon from '@mui/icons-material/Speed'; // Performance Optimization
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'; // API Integration
import SmartToyIcon from '@mui/icons-material/SmartToy'; // AI/Chatbot
import InsightsIcon from '@mui/icons-material/Insights'; // Analytics & SEO



const allServices = [
    {
        id: 1,
        title: "Custom Software Development",
        image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901772.jpg?w=740"
    },
    {
        id: 2,
        title: "Web Application Development",
        image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg?w=740"
    },
    {
        id: 3,
        title: "Mobile Application Development",
        image: "https://img.freepik.com/free-photo/app-development-desk_23-2148683343.jpg?w=740"
    },
    {
        id: 4,
        title: "Cloud Platforms & Infrastructure",
        image: "https://img.freepik.com/free-photo/cloud-computing-banner-background_53876-108506.jpg?w=740"
    },
    {
        id: 5,
        title: "Artificial Intelligence Solutions",
        image: "https://img.freepik.com/free-photo/ai-technology-brain-background_53876-110712.jpg?w=740"
    },
    {
        id: 6,
        title: "Data Analytics & Business Intelligence",
        image: "https://img.freepik.com/free-photo/data-analysis-concept_53876-161505.jpg?w=740"
    },
    {
        id: 7,
        title: "API Development & System Integration",
        image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=740"
    },
    {
        id: 8,
        title: "UI / UX Design",
        image: "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201872.jpg?w=740"
    },
    {
        id: 9,
        title: "Enterprise Software Solutions",
        image: "https://img.freepik.com/free-photo/digital-transformation-business_53876-108506.jpg?w=740"
    },
    {
        id: 10,
        title: "DevOps & Automation",
        image: "https://img.freepik.com/free-photo/technology-integrated-everyday-life_23-2151887047.jpg?w=740"
    },
    {
        id: 11,
        title: "Software Consulting",
        image: "https://img.freepik.com/free-photo/business-analysis-concept_53876-120585.jpg?w=740"
    },
    {
        id: 12,
        title: "Software Maintenance & Support",
        image: "https://img.freepik.com/free-photo/system-update-maintenance-concept_53876-124188.jpg?w=740"
    }
];

export default function AllServices() {
    const [showAll, setShowAll] = useState(false);
    const visibleServices = showAll ? allServices : allServices.slice(0, 4);

    return (
        <section className="px-6 md:px-10 py-20 md:py-28 ">

            {/* Header */}
            <div className="mb-16 max-w-xl">
                <p className="uppercase tracking-[2px] text-[#6aa9ff] font-semibold text-sm mb-2">
                    Services
                </p>

                <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                    Transform your business with advanced technologies
                </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

                {visibleServices.map((service, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-xl h-[200px] md:h-[320px] cursor-pointer group transition-all duration-300 hover:-translate-y-3"
                    >

                        {/* Image */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 transition-all duration-300 group-hover:from-black/90 group-hover:to-black/40"></div>

                        {/* Title */}
                        <h3 className="absolute bottom-5 left-5 right-5 font-semibold text-lg transition-transform duration-300 group-hover:-translate-y-1">
                            {service.title}
                        </h3>

                    </div>
                ))}

            </div>

            {/* Button */}
            <div className="text-center mt-16">

                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-8 py-3 border border-white/40 rounded-full text-white font-medium flex items-center gap-2 mx-auto transition-all duration-300 hover:bg-white hover:text-[#053d6b]"
                >
                    {showAll ? "View Less" : "View All Services"}

                    {showAll ? (
                        <ArrowDropUp />
                    ) : (
                        <ArrowDropDown />
                    )}
                </button>

            </div>

        </section>
    );
}
