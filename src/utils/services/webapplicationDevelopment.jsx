import React from 'react';
import { Container, Typography, Grid, Box, Paper, alpha, Divider } from '@mui/material';
// Icons
import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';
import LayersIcon from '@mui/icons-material/Layers';
import SpeedIcon from '@mui/icons-material/Speed';
import TerminalIcon from '@mui/icons-material/Terminal';
import SearchIcon from '@mui/icons-material/Search';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const WebApplicationDevelopment = () => {
    const expertise = [
        {
            title: "Frontend Development",
            icon: <LanguageIcon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
            desc: "We create sleek, intuitive interfaces that engage users and enhance usability.",
            items: ["Responsive and adaptive web apps", "Interactive dashboards and data visualization", "Single-page applications (SPA)", "Progressive Web Apps (PWA)"]
        },
        {
            title: "Backend Development",
            icon: <StorageIcon fontSize="large" />,
            image: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2VuZCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
            desc: "Our robust backend systems handle complex logic, data, and integrations with precision.",
            items: ["Scalable server-side architectures", "API development and integration", "Database design and management", "Cloud-based microservices"]
        },
        {
            title: "Full-Stack Development",
            icon: <LayersIcon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=800",
            desc: "From the interface to the server, we deliver end-to-end web solutions that are seamless, secure, and scalable.",
            items: ["SaaS platforms and subscription services", "E-commerce marketplaces", "Internal workflow tools and portals", "Data-driven web platforms"]
        },
        {
            title: "Security & Performance",
            icon: <SpeedIcon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            desc: "Performance and protection go hand-in-hand. We optimize speed, reliability, and security for every web application we build.",
            items: ["Secure authentication and authorization", "Data encryption and compliance", "Load testing and performance optimization", "Continuous monitoring and maintenance"]
        }
    ];

    const processSteps = [
        { title: "Discover", icon: <SearchIcon />, text: "We begin by understanding your goals, workflows, and challenges. This allows us to define the right problem to solve and align every decision with your business objectives." },
        { title: "Design", icon: <ColorLensIcon />, text: "We craft thoughtful software and system architectures with elegant user experiences." },
        { title: "Develop", icon: <CodeIcon />, text: "We build high‑quality, scalable, durable solutions using industry‑leading practices." },
        { title: "Deploy", icon: <RocketLaunchIcon />, text: "We launch smoothly and integrate seamlessly with your systems for optimal reliability." },
        { title: "Optimize", icon: <TrendingUpIcon />, text: "Post‑launch, we continuously improve performance, functionality, and user experience." }
    ];

    return (
        <Box sx={{ bgcolor: '#FFFFFF', pb: 15 }}>
            {/* Hero Section */}
            <Box sx={{ pt: 15, pb: 25, mb: -12 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <TerminalIcon sx={{ color: 'primary.light', mr: 1.5 }} />
                                <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, color: 'primary.light' }}>
                                    Web Solutions
                                </Typography>
                            </Box>
                            <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '3.8rem' } }}>
                                Web Application Development
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.light' }}>
                                Digital Experiences Engineered to Perform
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.8, fontWeight: 300, lineHeight: 1.8, fontSize: '1.1rem' }}>
                                We design web applications that are not just functional, but exceptional. Every interface, every interaction, and every workflow is crafted to deliver speed, reliability, and measurable impact.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box className="card-image" component="img" src='https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJhY2tlbmQlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D' sx={{ width: '100%', height: '100%', maxHeight: 300, objectFit: 'cover', transition: 'transform 0.8s ease', borderRadius: 6 }} />
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            {/* Expertise Section - Alternating Layout */}
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#0F172A', mb: 6, textAlign: 'center' }}>
                    Our Expertise
                </Typography>

                <Grid container spacing={8}>
                    {expertise.map((skill, index) => (
                        <Grid size={{ xs: 12 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 10,
                                    overflow: 'hidden',
                                    border: '1px solid #E2E8F0',
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                }}
                            >
                                {/* Image Side */}
                                <Box sx={{ width: { xs: '100%', md: '45%' }, height: { xs: 300, md: 400 }, position: 'relative', overflow: 'hidden' }}>
                                    <Box className="card-image" component="img" src={skill.image} sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease', borderRadius: 6 }} />
                                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', p: 3, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.9)', color: 'primary.main', display: 'flex', boxShadow: '0 15px 35px rgba(0,0,0,0.2)', backdropFilter: 'blur(8px)' }}>
                                        {skill.icon}
                                    </Box>
                                </Box>

                                {/* Content Side */}
                                <Box sx={{ p: { xs: 4, md: 8 }, width: { xs: '100%', md: '55%' }, bgcolor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#1E293B' }}>{skill.title}</Typography>
                                    <Typography variant="body1" sx={{ color: '#64748B', mb: 4, lineHeight: 1.8, fontSize: '1.05rem' }}>{skill.desc}</Typography>
                                    <Divider sx={{ mb: 4 }} />
                                    <Grid container spacing={2}>
                                        {skill.items.map((item, i) => (
                                            <Grid size={{ xs: 12, sm: 6 }} key={i}>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', mr: 2 }} />
                                                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>{item}</Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Process Section */}
                <Box sx={{ mt: 20 }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#0F172A', mb: 8, textAlign: 'center' }}>
                        Our Process
                    </Typography>
                    <Grid container spacing={4} sx={{ display: 'flex', justifyContent: "center" }}>
                        {processSteps.map((step, index) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <Box sx={{ textAlign: 'center', p: 2 }}>
                                    <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: alpha('#1976d2', 0.1), color: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                                        {step.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#1E293B' }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6 }}>
                                        {step.text}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default WebApplicationDevelopment;