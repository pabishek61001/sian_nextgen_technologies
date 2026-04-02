import React from 'react';
import { Container, Typography, Grid, Box, Paper, alpha, Button, Divider } from '@mui/material';
// Icons
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsSuggest from '@mui/icons-material/SettingsSuggest';
import Code from '@mui/icons-material/Code';

const InternshipOpportunities = () => {
    const benefits = [
        {
            title: "Hands‑On Professional Experience",
            icon: <LaptopMacIcon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            desc: "Work directly on real tasks and projects, giving you solid context for how software, AI, and web solutions are built and delivered in a professional environment."
        },
        {
            title: "Skill Development with Mentorship",
            icon: <Diversity3Icon fontSize="large" />,
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
            desc: "Learn industry‑standard technologies and workflows from experienced mentors — gaining insights that go far beyond textbooks."
        }
    ];

    const programFeatures = [
        { title: "Project‑Driven Learning", text: "You’ll be assigned meaningful tasks with clear goals that contribute to real solutions — not busywork.", icon: <SettingsSuggest sx={{ color: 'primary.main' }} /> },
        { title: "Mentor Support", text: "Each intern is paired with an experienced team member who provides guidance, feedback, and career insight.", icon: <GroupsIcon sx={{ color: 'primary.main' }} /> },
        { title: "Skill Workshops", text: "Optional sessions help you strengthen key areas like coding practices, tools, and soft skills.", icon: <SchoolIcon sx={{ color: 'primary.main' }} /> },
        { title: "Flexible Paths", text: "Opportunities across AI, software engineering, web development, R&D, and product support.", icon: <AutoGraphIcon sx={{ color: 'primary.main' }} /> }
    ];

    return (
        <Box sx={{ bgcolor: '#FFFFFF', pb: 15 }}>
            {/* Hero Section */}
            <Box sx={{
                pt: 15,
                pb: 25,
                mb: -12,
                textAlign: 'center'
            }}>
                <Container maxWidth="md">
                    <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 3, color: 'primary.light', display: 'block', mb: 2 }}>
                        Careers & Growth
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                        Internship Opportunities for Students
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 300, opacity: 0.9, lineHeight: 1.6, mb: 4 }}>
                        Learn, Build, and Grow with Real Tech Experience.
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7, maxWidth: 700, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        We offer internships for motivated students passionate about learning and ready to contribute to real projects across AI, software, and R&D.
                    </Typography>
                </Container>
            </Box>

            {/* Main Content: Zigzag Benefits */}
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {benefits.map((benefit, index) => (
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
                                    '&:hover': { boxShadow: '0 40px 80px -15px rgba(0,0,0,0.08)' }
                                }}
                            >
                                <Box sx={{ width: { xs: '100%', md: '45%' }, height: { xs: 300, md: 'auto' }, position: 'relative' }}>
                                    <Box component="img" src={benefit.image} sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />
                                    <Box sx={{
                                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                        p: 3, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.95)', color: 'primary.main',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)', backdropFilter: 'blur(8px)'
                                    }}>
                                        {benefit.icon}
                                    </Box>
                                </Box>
                                <Box sx={{ p: { xs: 2, md: 8 }, width: { xs: '100%', md: '55%' }, bgcolor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: '#1E293B' }}>{benefit.title}</Typography>
                                    <Typography variant="body1" sx={{ color: '#64748B', lineHeight: 1.8, fontSize: '1.1rem' }}>{benefit.desc}</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Additional Gains Grid */}
                <Box sx={{ mt: 15, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 8 }}>What You’ll Gain</Typography>
                    <Grid container spacing={4}>
                        {[
                            { title: "Portfolio & Career Boost", icon: <WorkspacePremiumIcon />, text: "Build real work that strengthens your portfolio and improves your chances in future job searches." },
                            { title: "Exposure to Modern Tech", icon: <Code />, text: "From version control to real team collaboration, experience the full rhythm of a tech workplace." },
                            { title: "Networking & Growth", icon: <AutoGraphIcon />, text: "Connect with professionals, enhance your resume, and step confidently into your future career." }
                        ].map((item, i) => (
                            <Grid size={{ xs: 12, md: 4 }} key={i}>
                                <Paper sx={{ p: 4, height: '100%', borderRadius: 6, border: '1px solid #E2E8F0', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', borderColor: 'primary.main' } }} elevation={0}>
                                    <Box sx={{ color: 'primary.main', mb: 2 }}>{item.icon}</Box>
                                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>{item.title}</Typography>
                                    <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.7 }}>{item.text}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* How it Works Section */}
                <Box sx={{ mt: 20, p: { xs: 5, md: 10 }, bgcolor: '#F8FAFC', borderRadius: 10, border: '1px solid #E2E8F0' }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 8, textAlign: 'center' }}>How Our Program Works</Typography>
                    <Grid container spacing={6}>
                        {programFeatures.map((feature, idx) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: { xs: "column", md: "row" } }}>
                                    <Box sx={{ p: 1.5, mb: 4, borderRadius: 2, bgcolor: 'white', boxShadow: 1, mr: 3, display: 'flex' }}>{feature.icon}</Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{feature.title}</Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6 }}>{feature.text}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Who Should Apply Section */}
                <Box sx={{ mt: 20, textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 8 }}>Who Should Apply</Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {[
                            "Passionate about technology and eager to learn",
                            "Self‑motivated and ready to take on real challenges",
                            "Looking to build practical skills and experience",
                            "Motivated to grow into future technology leaders"
                        ].map((text, i) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                                <Box sx={{ p: 4, height: '100%', bgcolor: alpha('#1976d2', 0.05), borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <LightbulbIcon sx={{ color: 'primary.main', mb: 2 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 700, color: '#1E293B' }}>{text}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Final CTA */}
                <Box sx={{
                    mt: 20,
                    p: { xs: 6, md: 10 },
                    background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                    borderRadius: 10,
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <PsychologyIcon sx={{ position: 'absolute', top: -30, right: -30, fontSize: 300, opacity: 0.05 }} />
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>Ready to Take the Next Step?</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.8, mb: 5, maxWidth: 700, mx: 'auto', fontWeight: 300 }}>
                        Apply today and begin your journey from student to skilled creator in the tech world. Real experience. Real learning. Real impact.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<RocketLaunchIcon />}
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            px: 8, py: 2,
                            borderRadius: 4,
                            fontWeight: 800,
                            '&:hover': { bgcolor: 'primary.dark', transform: 'scale(1.05)' },
                            transition: '0.3s'
                        }}
                    >
                        Apply Now
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default InternshipOpportunities;