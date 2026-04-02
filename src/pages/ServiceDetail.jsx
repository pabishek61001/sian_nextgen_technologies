import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';

// Import your independent UI components
import ArtificialIntelligence from '../utils/services/AritificialIntelligence';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SoftwareDevelopment from '../utils/services/SoftwareDevelopement';
import WebApplicationDevelopment from '../utils/services/webapplicationDevelopment';
import ResearchDevelopment from '../utils/services/ResearchDevelopment';
import InternshipOpportunities from '../utils/services/InternshipOpportunities';

const ServiceDetail = () => {
    const { servicename } = useParams();

    return (

        <Box>
            <Header />

            <Container >

                {servicename === 'artificial-intelligence' && <ArtificialIntelligence />}
                {servicename === 'software-development' && <SoftwareDevelopment />}
                {servicename === 'web-application-development' && <WebApplicationDevelopment />}
                {servicename === 'research-development-training' && <ResearchDevelopment />}
                {servicename === 'internship-opportunities' && <InternshipOpportunities />}

            </Container>

            <Footer />
        </Box>
    );
};

export default ServiceDetail;