import React from 'react';
import { Container, Typography, Grid, Box, Button, alpha } from '@mui/material';

// Import Specific Icons for each feature
import DevicesIcon from '@mui/icons-material/Devices'; // Web Design
import InsightsIcon from '@mui/icons-material/Insights'; // Data-driven
import SpeedIcon from '@mui/icons-material/Speed'; // Time-to-market
import ArchitectureIcon from '@mui/icons-material/Architecture'; // Customized
import TaskAltIcon from '@mui/icons-material/TaskAlt'; // End-to-end
import UpdateIcon from '@mui/icons-material/Update'; // Ongoing Support
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // CTA

const WhyChooseUs = () => {
    // Map icons to the features array
    const features = [
        {
            icon: <ArchitectureIcon fontSize="large" />,
            title: "Expertise Across Modern Technologies",
            desc: "Deep knowledge across AI, software, and web development for strategic technology delivery."
        },
        {
            icon: <DevicesIcon fontSize="large" />,
            title: "Customized, Scalable Solutions",
            desc: "Tailored to your goals and designed for growth."
        },
        {
            icon: <SpeedIcon fontSize="large" />,
            title: "Accelerated Time‑to‑Market",
            desc: "Agile delivery without sacrificing quality."
        },
        {
            icon: <InsightsIcon fontSize="large" />,
            title: "Data‑Driven, Business‑Centric Approach",
            desc: "We build solutions grounded in performance and outcomes."
        },
        {
            icon: <TaskAltIcon fontSize="large" />,
            title: "End‑to‑End Implementation",
            desc: "From discovery to deployment, we handle every step with precision."
        },
        {
            icon: <UpdateIcon fontSize="large" />,
            title: "Ongoing Support & Optimization",
            desc: "We ensure your solutions stay secure, fast, and future‑ready."
        },
    ];

    return (
        <Box sx={{
            bgcolor: '#FFFFFF', // Clean corporate white background
            py: { xs: 10, md: 15 }, // Increased vertical padding
            overflow: 'hidden'
        }}>
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography
                        variant="overline"
                        sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, mb: 1.5, display: 'block' }}
                    >
                        THE ADVANTAGE
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: '2.8rem', md: '3.8rem' },
                            color: '#0F172A', // Very dark slate for headers
                            mb: 2.5,
                            letterSpacing: '-1px' // Modern tight tracking
                        }}
                    >
                        Why Partner With Us?
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#64748B', maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
                        We combine strategic thinking with impeccable execution to deliver future-proof technology solutions.
                    </Typography>
                </Box>

                {/* Features Grid */}
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
                            <Box
                                sx={{
                                    p: 5, // Increased internal padding
                                    width: '100%',
                                    borderRadius: 6, // Larger corner radius
                                    background: 'transparent',
                                    border: '1px solid #E2E8F0',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Smooth pop transition
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    '&:hover': {
                                        transform: 'translateY(-12px)', // Significant lift
                                        boxShadow: `0px 25px 50px -12px ${alpha('#1976d2', 0.15)}`, // Subtle primary-colored shadow glow
                                        borderColor: alpha('#1976d2', 0.3),
                                        background: 'linear-gradient(145deg, #FFFFFF 0%, #F1F5F9 100%)', // Subtle gradient on hover
                                        '& .icon-box': {
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                            transform: 'scale(1.1)'
                                        }
                                    }
                                }}
                            >
                                <Box
                                    className="icon-box" // Class name for targeting in hover
                                    sx={{
                                        display: 'inline-flex',
                                        p: 2,
                                        borderRadius: 3,
                                        bgcolor: alpha('#1976d2', 0.08), // Soft initial icon background
                                        color: 'primary.main',
                                        mb: 3,
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    {feature.icon}
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#1E293B', lineHeight: 1.3 }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#64748B', lineHeight: 1.7, fontWeight: 400 }}>
                                    {feature.desc}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Conclusion / CTA Section - Glassmorphism Corporate Style */}
                <Box sx={{
                    mt: { xs: 10, md: 15 },
                    p: { xs: 5, md: 10 },
                    background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', // Dark Slate Corporate Gradient
                    color: 'white',
                    borderRadius: 10,
                    textAlign: 'left', // Align left for dynamic look
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3)'
                }}>
                    <Box sx={{ maxWidth: { md: '65%' }, mb: { xs: 4, md: 0 } }}>
                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2.5, fontSize: { xs: '2rem', md: '2.8rem' }, letterSpacing: '-0.5px' }}>
                            Let’s Build Digital Experiences That Work
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.8, fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 300 }}>
                            We collaborate with you to combine technology, intelligence, and purpose into solutions that perform today and evolve with your vision tomorrow.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<RocketLaunchIcon />}
                        sx={{
                            bgcolor: 'white', // White button for maximum contrast on dark BG
                            color: 'primary.main',
                            '&:hover': { bgcolor: '#F1F5F9', transform: 'scale(1.05)' },
                            px: 5,
                            py: 2.2,
                            borderRadius: 4,
                            fontWeight: 700,
                            fontSize: '1.05rem',
                            transition: 'all 0.3s',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Start Your Project
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default WhyChooseUs;