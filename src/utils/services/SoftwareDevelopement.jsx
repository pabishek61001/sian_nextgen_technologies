import React from 'react';
import { Container, Typography, Grid, Box, Paper, alpha, Divider, IconButton } from '@mui/material';
// Icons
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import TerminalIcon from '@mui/icons-material/Terminal';
import Code from '@mui/icons-material/Code';

const SoftwareDevelopment = () => {
    const expertise = [
        {
            title: "Web & Mobile Applications",
            icon: <DevicesIcon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", // Code background
            desc: "From sleek web platforms to powerful mobile apps, we create digital experiences that are fast, secure, and intuitive.",
            items: ["Enterprise web platforms", "Progressive web apps (PWAs)", "iOS and Android mobile apps", "Internal productivity tools"]
        },
        {
            title: "Enterprise Software Solutions",
            icon: <SettingsSuggestIcon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // Analytics/Data
            desc: "We build software that integrates deeply into your business ecosystem, streamlining workflows for maximum efficiency.",
            items: ["ERP and CRM systems", "Workflow automation tools", "Data management platforms", "Legacy system modernization"]
        },
        {
            title: "Cloud-Native Development",
            icon: <CloudQueueIcon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", // Cloud/Network
            desc: "Leverage the power of the cloud to scale effortlessly. We design architectures optimized for performance and resilience.",
            items: ["SaaS platforms", "Cloud-based analytics", "Microservices architecture", "Scalable APIs"]
        },
        {
            title: "Security & Compliance",
            icon: <EnhancedEncryptionIcon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Cyber security
            desc: "Security is built-in, not bolted on. We follow global compliance standards to protect your data and maintain trust.",
            items: ["Data encryption", "GDPR, HIPAA, SOC 2", "Secure authentication", "Continuous monitoring"]
        }
    ];

    return (
        <Box sx={{ bgcolor: '#FFFFFF', pb: 15 }}>
            {/* Hero / Header Section */}
            <Box sx={{
                pt: { xs: 10, md: 15 },
                pb: { xs: 20, md: 25 },
                mb: -12,
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Decoration */}
                <Box sx={{
                    position: 'absolute',
                    top: 0, right: 0,
                    width: '40%', height: '100%',
                    background: 'radial-gradient(circle, rgba(25, 118, 210, 0.15) 0%, transparent 70%)',
                    zIndex: 0
                }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <TerminalIcon sx={{ color: 'primary.light', mr: 1.5 }} />
                                <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, color: 'primary.light' }}>
                                    Engineering Excellence
                                </Typography>
                            </Box>
                            <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '3.8rem' }, lineHeight: 1.1 }}>
                                Building Software That Moves Your Business Forward
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.8, fontWeight: 300, lineHeight: 1.8, maxWidth: 600 }}>
                                We don’t just write code — we craft solutions. Our custom software development services are designed to meet your unique business needs, solve complex problems, and scale seamlessly as your business grows. Every line of code is intentional, every system is built for performance, and every solution is engineered to create a measurable impact.
                            </Typography>
                        </Grid>

                        {/* Hero Image */}
                        <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000"
                                alt="Software Engineering"
                                sx={{
                                    width: '100%',
                                    borderRadius: 8,
                                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    transform: 'perspective(1000px) rotateY(-5deg)'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Expertise Section */}
            <Container maxWidth="lg" sx={{ p: 1 }}>
                <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mb: 1 }}>
                            Our Expertise
                        </Typography>
                        <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', borderRadius: 2 }} />
                    </Box>
                </Box>

                <Grid container spacing={6}>
                    {expertise.map((skill, index) => (
                        <Grid size={{ xs: 12 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                    border: '1px solid #E2E8F0',
                                    transition: 'all 0.4s ease',
                                    display: 'flex',
                                    // Stack vertically on mobile, row on desktop
                                    flexDirection: {
                                        xs: 'column',
                                        md: index % 2 === 0 ? 'row' : 'row-reverse'
                                    },
                                }}
                            >
                                {/* LEFT/RIGHT SIDE: IMAGE BOX */}
                                <Box sx={{
                                    width: { xs: '100%', md: '45%' },
                                    height: { xs: 250, md: 'auto' },
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <Box
                                        className="card-image"
                                        component="img"
                                        src={skill.image}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 8,
                                            objectFit: 'cover',
                                            transition: 'transform 0.8s ease',
                                            filter: 'brightness(0.8)'
                                        }}
                                    />
                                    {/* Floating Icon - Centered on the image side */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        p: 2.5,
                                        borderRadius: 4,
                                        bgcolor: 'rgba(255,255,255,0.95)',
                                        color: 'primary.main',
                                        display: 'flex',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                        backdropFilter: 'blur(4px)'
                                    }}>
                                        {skill.icon}
                                    </Box>
                                </Box>

                                {/* LEFT/RIGHT SIDE: CONTENT BOX */}
                                <Box sx={{
                                    p: { xs: 2, md: 8 },
                                    width: { xs: '100%', md: '55%' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    bgcolor: '#FFFFFF'
                                }}>
                                    <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                                        Expertise Area {index + 1}
                                    </Typography>

                                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#1E293B' }}>
                                        {skill.title}
                                    </Typography>

                                    <Typography variant="body1" sx={{ color: '#64748B', mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                                        {skill.desc}
                                    </Typography>

                                    <Divider sx={{ mb: 4, borderStyle: 'dashed' }} />

                                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2.5, color: 'primary.main', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                                        Strategic Solutions:
                                    </Typography>

                                    <Grid container spacing={2}>
                                        {skill.items.map((item, i) => (
                                            <Grid size={{ xs: 12, sm: 6 }} key={i}>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    {/* <Box sx={{
                                                        width: 8, height: 8,
                                                        borderRadius: '50%',
                                                        bgcolor: 'primary.main',
                                                        mr: 2,
                                                        opacity: 0.6
                                                    }} /> */}
                                                    <IconButton size='small'><Code sx={{ fontSize: 16, color: "grey.800" }} /></IconButton>
                                                    <Typography variant="body2" sx={{ color: '#334155', fontWeight: 600 }}>
                                                        {item}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SoftwareDevelopment;