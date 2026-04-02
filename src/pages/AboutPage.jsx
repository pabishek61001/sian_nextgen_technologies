import React from 'react';
import { Container, Typography, Grid, Box, Paper, Button, alpha, Stack } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{ bgcolor: '#FFFFFF' }}>

            <Header />
            {/* 1. Hero Section: The Identity */}
            <Box sx={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                color: 'white', pt: 15, pb: 20, textAlign: 'center'
            }}>
                <Container maxWidth="md">
                    <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 3, color: 'primary.light' }}>
                        Empowering Digital Evolution
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                        Sian Next Gen Technologies
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 300, opacity: 0.8, lineHeight: 1.6 }}>
                        A technology powerhouse dedicated to designing, developing, and delivering
                        modern digital solutions powered by AI, Software, and Data-Driven Intelligence.
                    </Typography>
                </Container>
            </Box>

            {/* 2. Who We Are: The Core Purpose */}
            <Container maxWidth="lg" sx={{ mt: -8, mb: 12 }}>
                <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: 8, border: '1px solid #E2E8F0', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0F172A', mb: 3 }}>
                                Beyond Writing Code — We Craft Solutions.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#64748B', lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                                We are a technology company focused on the full lifecycle of digital products.
                                From concept and architecture to deployment and continuous improvement, we manage
                                the entire ecosystem of modern software.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#64748B', lineHeight: 1.8, fontSize: '1.1rem' }}>
                                Our expertise spans across **Proprietary Software Products**, **SaaS Platforms**,
                                and **AI-powered solutions** designed to help organizations improve efficiency,
                                scalability, and data-backed decision-making.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box component="img"
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                                sx={{ width: '100%', borderRadius: 6, boxShadow: 4 }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            {/* 3. Our Mission: The Driving Force */}
            <Box sx={{ bgcolor: '#F8FAFC', py: 12 }}>
                <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 4 }}>Our Mission</Typography>
                    <Typography variant="h5" sx={{ maxWidth: 800, mx: 'auto', color: 'primary.main', fontWeight: 600, fontStyle: 'italic', mb: 4 }}>
                        "To build innovative software, AI-powered technologies, and data-driven platforms
                        that empower organizations to succeed in an increasingly digital and intelligent world."
                    </Typography>
                    <Box sx={{ width: 100, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: 2 }} />
                </Container>
            </Box>

            {/* 4. Global Operations & Infrastructure */}
            <Container maxWidth="lg" sx={{ py: 15 }}>
                <Grid container spacing={8} alignItems="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack spacing={4}>
                            <Box sx={{ display: 'flex' }}>
                                <PublicIcon sx={{ color: 'primary.main', fontSize: 40, mr: 2 }} />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>Global Operations</Typography>
                                    <Typography variant="body2" sx={{ color: '#64748B' }}>
                                        Operating within India and internationally, delivering digital products
                                        globally through cloud platforms, APIs, and mobile infrastructure.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <BusinessIcon sx={{ color: 'primary.main', fontSize: 40, mr: 2 }} />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>Technology Infrastructure</Typography>
                                    <Typography variant="body2" sx={{ color: '#64748B' }}>
                                        Secure, scalable, and high-performance solutions delivered via modern
                                        Cloud computing and AI/ML systems.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <VerifiedUserIcon sx={{ color: 'primary.main', fontSize: 40, mr: 2 }} />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>Reliability & Performance</Typography>
                                    <Typography variant="body2" sx={{ color: '#64748B' }}>
                                        Continuous maintenance, security enhancements, and system optimization
                                        built into every proprietary software product we license.
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 4 }}>How We Help Businesses Grow</Typography>
                        <Grid container spacing={3}>
                            {[
                                { title: "Strategic Automation", desc: "Automating repetitive workflows to free up high-value human capital." },
                                { title: "Data Transformation", desc: "Turning raw, unstructured data into actionable business intelligence." },
                                { title: "Scalable SaaS", desc: "Building proprietary tools that grow horizontally and vertically with your user base." },
                                { title: "Consultative Partnership", desc: "Providing end-to-end strategy from discovery to deployment." }
                            ].map((item, i) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={i}>
                                    <Paper elevation={0} sx={{ p: 3, bgcolor: '#F1F5F9', borderRadius: 4, height: '100%' }}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B' }}>{item.desc}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            {/* 5. Final CTA: Ready to Partner */}
            <Box sx={{
                bgcolor: '#0F172A', color: 'white', py: 12, textAlign: 'center',
                background: 'linear-gradient(45deg, #0F172A 30%, #1E293B 90%)'
            }}>
                <Container maxWidth="md">
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 4 }}>
                        Let’s Build Digital Experiences That Work
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.8, mb: 6, fontSize: '1.2rem' }}>
                        Combine technology, intelligence, and precision into solutions that deliver
                        real business impact. Partner with Sian Next Gen Technologies today.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/contact-us')}
                        startIcon={<RocketLaunchIcon />}
                        sx={{
                            px: 6, py: 2, borderRadius: 4, fontWeight: 800, fontSize: '1.1rem',
                            bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' }
                        }}
                    >
                        Schedule a Consultation
                    </Button>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};

export default AboutUs;