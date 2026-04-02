import React from 'react';
import { Container, Typography, Grid, Box, Paper, alpha, Button, Stack } from '@mui/material';
// Icons
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SpeedIcon from '@mui/icons-material/Speed';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HubIcon from '@mui/icons-material/Hub';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const WhyUs = () => {

    const navigate = useNavigate();
    const valueProps = [
        {
            title: "Expertise Across Modern Technologies",
            icon: <PsychologyIcon fontSize="large" />,
            desc: "Deep knowledge across AI, software, and web development. We don't just use tools; we understand the strategic delivery of technology."
        },
        {
            title: "Customized, Scalable Solutions",
            icon: <HubIcon fontSize="large" />,
            desc: "Tailored to your specific business goals and designed for horizontal and vertical growth from day one."
        },
        {
            title: "Accelerated Time‑to‑Market",
            icon: <SpeedIcon fontSize="large" />,
            desc: "Our agile delivery cycles ensure you launch faster without sacrificing the long-term quality of your code."
        },
        {
            title: "Data‑Driven & Business‑Centric",
            icon: <AutoGraphIcon fontSize="large" />,
            desc: "We build solutions grounded in performance and outcomes. Every feature is engineered to move your business metrics."
        },
        {
            title: "End‑to‑End Implementation",
            icon: <WorkspacePremiumIcon fontSize="large" />,
            desc: "From discovery and system architecture to deployment and global operation—we handle every step with precision."
        },
        {
            title: "Ongoing Support & Optimization",
            icon: <ShieldMoonIcon fontSize="large" />,
            desc: "We ensure your solutions stay secure, fast, and future‑ready with continuous monitoring and system optimization."
        }
    ];

    return (
        <Box sx={{ bgcolor: '#FFFFFF', pb: 15 }}>

            <Header />

            {/* Hero Section */}
            <Box sx={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                color: 'white', pt: 15, pb: 25, mb: -12, textAlign: 'center'
            }}>
                <Container maxWidth="md">
                    <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 3, color: 'primary.light' }}>
                        The Sian Advantage
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, mb: 3, fontSize: { xs: '2.5rem', md: '3.8rem' } }}>
                        Why Partner With Us?
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 300, opacity: 0.8, maxWidth: 700, mx: 'auto' }}>
                        In a world of generic software, we provide the intelligent edge your organization
                        needs to outpace the competition through AI-powered precision.
                    </Typography>
                </Container>
            </Box>

            {/* Value Props Grid */}
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {valueProps.map((prop, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 5, height: '100%', borderRadius: 6,
                                    border: '1px solid #E2E8F0', bgcolor: '#FFFFFF',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)',
                                        borderColor: 'primary.main'
                                    }
                                }}
                            >
                                <Box sx={{
                                    display: 'inline-flex', p: 1.5, borderRadius: 3,
                                    bgcolor: alpha('#1976d2', 0.1), color: 'primary.main', mb: 3
                                }}>
                                    {prop.icon}
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#1E293B' }}>
                                    {prop.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.7 }}>
                                    {prop.desc}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* The "Difference" Section */}
                <Box sx={{ mt: 20 }}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h3" sx={{ fontWeight: 900, mb: 3, color: '#0F172A' }}>
                                We Own the Tech We Build.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#64748B', lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                                Unlike traditional agencies that just "hand over code," Sian Next Gen Technologies
                                creates, owns, and operates proprietary SaaS platforms. We understand the
                                complexities of scale because we live them every day in our own global operations.
                            </Typography>
                            <Stack spacing={3}>
                                {[
                                    "Proven proprietary AI & Data Science models",
                                    "Global operational experience (India & International)",
                                    "Flexible licensing models for scalable growth",
                                    "Full-lifecycle management from concept to continuous maintenance"
                                ].map((item, i) => (
                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ width: 10, height: 10, bgcolor: 'primary.main', borderRadius: '50%', mr: 2 }} />
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1E293B' }}>{item}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    p: 4, bgcolor: '#F1F5F9', borderRadius: 8,
                                    border: '1px solid #CBD5E1', position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <Typography variant="h5" sx={{ fontWeight: 900, mb: 3 }}>Our Performance Metrics</Typography>
                                <Stack spacing={4}>
                                    <Box>
                                        <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 900 }}>99.9%</Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 600 }}>System Availability & Reliability</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 900 }}>40%</Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 600 }}>Average Increase in Operational Efficiency</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 900 }}>Global</Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 600 }}>Deployment Capability across Web, Cloud & Mobile</Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Final CTA */}
                <Box sx={{
                    mt: 20, p: { xs: 6, md: 10 }, textAlign: 'center',
                    background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                    borderRadius: 10, color: 'white'
                }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
                        Let’s Build Digital Experiences That Work
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.8, mb: 6, maxWidth: 700, mx: 'auto', fontSize: '1.2rem' }}>
                        Every project is an opportunity to combine technology, intelligence, and
                        precision into solutions that leave a lasting impression.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/contact-us')}
                        startIcon={<RocketLaunchIcon />}
                        sx={{
                            px: 8, py: 2, borderRadius: 4, fontWeight: 800,
                            bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' }
                        }}
                    >
                        Work With Us
                    </Button>
                </Box>
            </Container>

            <Footer />
        </Box>
    );
};

export default WhyUs;