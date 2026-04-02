import React from 'react'
import Header from '../components/Header'
import { Box, Divider } from '@mui/material'
import HeroSlider from '../utils/HeroSlider'
import AboutSection from '../utils/AboutSection';
import ServiceSection from '../utils/ServiceSection';
import TransformingBusiness from '../utils/TransformingBusiness';
import AllServices from '../utils/AllServices';
import Platforms from '../utils/Platforms';
import Footer from '../components/Footer';
import Testimonials from '../utils/Testimonials';
import OurTeam from '../components/OurTeam';
import HeroSection1 from '../utils/HeroSection1';
import HeroSection2 from '../utils/HeroSection2';
import ServicesSlide from '../utils/servicesSlide';
import HeroSection3 from '../utils/HeroSection3';
import WhyChooseUs from '../utils/WhyChooseUs';
import ApplicationForm from '../components/ApplicationForm';


const slides = [
    {
        src: 'https://img.freepik.com/premium-photo/trees-surround-corporate-buildings-cars-are-parked-street_848676-6833.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        title: 'Deploying Indias largest quantum computer',
        description: 'A stunning low-angle view of modern city skyscrapers.',
    },
    {
        src: 'https://img.freepik.com/premium-photo/trees-surround-corporate-buildings-cars-are-parked-street_848676-6833.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        title: 'Deploying Indias largest quantum computer',
        description: 'Trees and architecture blend in a calm corporate street scene.',
    },
    {
        src: 'https://img.freepik.com/premium-photo/trees-surround-corporate-buildings-cars-are-parked-street_848676-6833.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        title: 'Deploying Indias largest quantum computer',
        description: 'Professional signage on an office building with clean design.',
    },
];


const LandingPage = () => {
    return (
        <Box >

            <Header />
            {/* <HeroSlider slides={slides} options={{ loop: false }} /> */}
            <div className='p-2'>

                <HeroSection3 />
            </div>
            <AboutSection />
            <ServicesSlide />
            <WhyChooseUs />
            <ApplicationForm />
            {/* <TransformingBusiness /> */}
            {/* <ServiceSection /> */}
            {/* <AllServices /> */}
            {/* <Platforms /> */}
            {/* <Testimonials /> */}
            {/* <OurTeam /> */}
            <Footer />
        </Box>
    )
}

export default LandingPage