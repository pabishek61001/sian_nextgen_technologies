import React from 'react';
import { Container, Typography, Grid, Box, Paper, alpha, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// Icons
import ScienceIcon from '@mui/icons-material/Science';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BiotechIcon from '@mui/icons-material/Biotech';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const ResearchDevelopment = () => {
    const mainServices = [
        {
            title: "Research & Development (R&D)",
            icon: <ScienceIcon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
            desc: "We partner with you through every stage of innovation — from research and feasibility to prototyping and validation. R&D is focused on exploring new solutions, improving existing systems, and creating differentiated technology that gives you a lasting edge.",
            sectionTitle: "What We Offer:",
            items: [
                "Feasibility studies and market research",
                "Rapid prototyping and proof of concept",
                "Applied research tailored to your business goals",
                "Innovation strategy and technical exploration"
            ],
            whyTitle: "Why It Matters:",
            whyText: "R&D fuels business growth by helping you anticipate trends, develop breakthrough capabilities, and make informed decisions about future product direction. It’s a long‑term investment that accelerates innovation."
        },
        {
            title: "Training & Capability Building",
            icon: <SchoolIcon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
            desc: "Technology moves fast — and so should your team. Our training services are designed to equip your people with hands‑on expertise in modern technologies, frameworks, and best practices.",
            sectionTitle: "Training Focus Areas:",
            items: [
                "AI, machine learning & analytics workflows",
                "Software development best practices",
                "Cloud architecture & DevOps fundamentals",
                "Real‑world workshops with interactive learning",
                "Long‑term learning plans for sustainable growth"
            ],
            whyTitle: "Our Approach:",
            whyText: "Our training begins with a needs assessment to tailor content that aligns with your business objectives and the skill levels of your team."
        }
    ];

    return (
        <Box sx={{ bgcolor: '#FFFFFF', pb: 15 }}>
            {/* Hero Section */}
            <Box sx={{
                pt: 15,
                pb: 25,
                mb: -12
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <BiotechIcon sx={{ color: 'primary.light', mr: 1.5 }} />
                                <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 3, color: 'primary.light' }}>
                                    Innovation & Growth
                                </Typography>
                            </Box>
                            <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '3.8rem' } }}>
                                Research, Development & Training
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 300, opacity: 0.9, lineHeight: 1.6, maxWidth: 800 }}>
                                Bridging the gap between visionary research and practical team capability to ensure your competitive edge.
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box className="card-image" component="img" src='https://images.unsplash.com/photo-1768796370577-c6e8b708b980?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHJlc2VhcmNoJTIwYW5kJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D' sx={{ width: '100%', height: '100%', maxHeight: 300, objectFit: 'cover', transition: 'transform 0.8s ease', borderRadius: 6 }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Alternating Services Section */}
            <Container maxWidth="lg">
                <Grid container spacing={10}>
                    {mainServices.map((service, index) => (
                        <Grid size={{ xs: 12 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 10,
                                    overflow: 'hidden',
                                    border: '1px solid #E2E8F0',
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                    transition: 'all 0.4s ease',
                                    '&:hover': {
                                        boxShadow: '0 40px 80px -15px rgba(0,0,0,0.08)',
                                    }
                                }}
                            >
                                {/* Image / Visual Side */}
                                <Box sx={{ width: { xs: '100%', md: '45%' }, height: { xs: 350, md: 'auto' }, position: 'relative' }}>
                                    <Box
                                        component="img"
                                        src={service.image}
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
                                    />
                                    <Box sx={{
                                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                        p: 3, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.95)', color: 'primary.main',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)'
                                    }}>
                                        {service.icon}
                                    </Box>
                                </Box>

                                {/* Content Side */}
                                <Box sx={{ p: { xs: 5, md: 8 }, width: { xs: '100%', md: '55%' }, bgcolor: '#FFFFFF' }}>
                                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: '#0F172A' }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#64748B', mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                                        {service.desc}
                                    </Typography>

                                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'primary.main', mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                                        {service.sectionTitle}
                                    </Typography>
                                    <List sx={{ mb: 4 }}>
                                        {service.items.map((item, i) => (
                                            <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 35 }}>
                                                    <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} primaryTypographyProps={{ fontWeight: 600, color: '#334155' }} />
                                            </ListItem>
                                        ))}
                                    </List>

                                    <Box sx={{ p: 3, bgcolor: '#F8FAFC', borderRadius: 4, borderLeft: '4px solid', borderColor: 'primary.main' }}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1, color: '#1E293B' }}>
                                            {service.whyTitle}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6 }}>
                                            {service.whyText}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Synergy Section: How R&D and Training Work Together */}
                <Box sx={{ mt: 20, p: { xs: 5, md: 10 }, borderRadius: 10, background: 'linear-gradient(145deg, #F1F5F9 0%, #E2E8F0 100%)', position: 'relative', overflow: 'hidden' }}>
                    <PsychologyIcon sx={{ position: 'absolute', top: -20, right: -20, fontSize: 250, opacity: 0.03, color: '#000' }} />

                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: '50%', bgcolor: 'primary.main', color: 'white', mb: 3 }}>
                            <IntegrationInstructionsIcon />
                        </Box>
                        <Typography variant="h3" sx={{ fontWeight: 900, color: '#0F172A', mb: 2 }}>
                            How R&D and Training Work Together
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#64748B', fontWeight: 400 }}>
                            Innovation is more powerful when knowledge travels with it.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {[
                            { title: "Discovery & Sustainability", text: "You not only discover new solutions but also build internal expertise to sustain and scale them." },
                            { title: "Confident Deployment", text: "Your team becomes confident deploying real technology, not just theoretical knowledge." },
                            { title: "Closing the Gap", text: "You close the gap between vision and execution — fostering continuous innovation and performance improvement." }
                        ].map((point, idx) => (
                            <Grid size={{ xs: 12, md: 4 }} key={idx}>
                                <Paper elevation={0} sx={{ p: 4, height: '100%', borderRadius: 6, bgcolor: 'white', border: '1px solid #CBD5E1' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <TipsAndUpdatesIcon sx={{ mr: 1.5, color: 'primary.main' }} />
                                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#1E293B' }}>{point.title}</Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.7, fontSize: '1rem' }}>
                                        {point.text}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default ResearchDevelopment;