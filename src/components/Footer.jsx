// Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, Divider, IconButton } from '@mui/material';
import { Mail, Phone, LocationOn, LinkedIn, Twitter, Instagram, GitHub } from '@mui/icons-material';

const Footer = () => {
    const colors = {
        deepBlue: "#041e35",
        brandBlue: "#053d6b",
        accentBlue: "#4fc3f7",
        textMuted: "#b0bec5",
    };

    const linkStyle = {
        color: colors.textMuted,
        fontSize: "0.9rem",
        textDecoration: "none",
        transition: "all 0.3s ease",
        "&:hover": {
            color: colors.accentBlue,
            transform: "translateX(5px)",
        },
    };

    return (
        <Box
            component="footer"
            sx={{
                background: `linear-gradient(135deg, ${colors.deepBlue} 0%, ${colors.brandBlue} 100%)`,
                color: '#ffffff',
                pt: { xs: 10, md: 12 },
                pb: 6,
                mt: 10,
                position: "relative",
                overflow: "hidden",
                // Subtle background glow for "Blue Mix" feel
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "20%",
                    left: "10%",
                    width: "300px",
                    height: "300px",
                    background: colors.accentBlue,
                    filter: "blur(150px)",
                    opacity: 0.05,
                    zIndex: 0
                }
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={8} sx={{ display: "flex", justifyContent: "space-evenly" }}>

                    {/* Column 1: Brand & Bio */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: "900", mb: 3, letterSpacing: "-1px" }}>
                            SIAN<span style={{ color: colors.accentBlue }}> NextGen</span>
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textMuted, lineHeight: 1.8, mb: 4 }}>
                            Innovating at the intersection of design and technology. We provide high-end full-stack solutions and AI-driven systems to help your corporate brand lead the digital era.
                        </Typography>
                        {/* <Stack direction="row" spacing={1}>
                            {[LinkedIn, Twitter, Instagram, GitHub].map((Icon, i) => (
                                <IconButton
                                    key={i}
                                    sx={{
                                        color: colors.textMuted,
                                        bgcolor: "rgba(255,255,255,0.03)",
                                        "&:hover": { color: colors.accentBlue, bgcolor: "rgba(79, 195, 247, 0.1)" }
                                    }}
                                >
                                    <Icon fontSize="small" />
                                </IconButton>
                            ))}
                        </Stack> */}
                    </Grid>

                    {/* Column 2: Navigation & Services */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", width: "100%", justifyContent: { xs: 'start', md: "center" } }}>
                        <Grid container spacing={2}>
                            <Grid size={12}>
                                <Typography variant="subtitle1" sx={{ fontWeight: "700", mb: 3 }}>Navigation</Typography>
                                <Stack spacing={2}>
                                    <Link href="/" sx={linkStyle}>Home</Link>
                                    <Link href="/about" sx={linkStyle}>About Us</Link>
                                    <Link href="/why-us" sx={linkStyle}>Why Choose Us</Link>
                                    <Link href="/contact" sx={linkStyle}>Contact</Link>
                                </Stack>
                            </Grid>
                            {/* <Grid size={6}>
                                <Typography variant="subtitle1" sx={{ fontWeight: "700", mb: 3 }}>Expertise</Typography>
                                <Stack spacing={2}>
                                    <Link href="#" sx={linkStyle}>Web Apps</Link>
                                    <Link href="#" sx={linkStyle}>E-Commerce</Link>
                                    <Link href="#" sx={linkStyle}>Cloud Tech</Link>
                                    <Link href="#" sx={linkStyle}>AI Systems</Link>
                                </Stack>
                            </Grid> */}
                        </Grid>
                    </Grid>

                    {/* Column 3: Contact Glassmorphism Card */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{
                            p: 4,
                            borderRadius: 4,
                            bgcolor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            backdropFilter: "blur(10px)"
                        }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "700", mb: 3 }}>Let's Connect</Typography>
                            <Stack spacing={3}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Mail sx={{ color: colors.accentBlue, fontSize: 20 }} />
                                    <Box>
                                        <Typography variant="caption" sx={{ color: colors.textMuted, display: "block" }}>Project Inquiries</Typography>
                                        <Typography variant="body2" fontWeight="600">siannextgen@gmail.com</Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Phone sx={{ color: colors.accentBlue, fontSize: 20 }} />
                                    <Box>
                                        <Typography variant="caption" sx={{ color: colors.textMuted, display: "block" }}>Support Line</Typography>
                                        <Typography variant="body2" fontWeight="600">+91 9944266255</Typography>
                                    </Box>
                                </Stack>
                                {/* <Stack direction="row" spacing={2} alignItems="center">
                                    <LocationOn sx={{ color: colors.accentBlue, fontSize: 20 }} />
                                    <Box>
                                        <Typography variant="caption" sx={{ color: colors.textMuted, display: "block" }}>Location</Typography>
                                        <Typography variant="body2" fontWeight="600">Tech Hub, India</Typography>
                                    </Box>
                                </Stack> */}
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 6, borderColor: "rgba(255, 255, 255, 0.05)" }} />

                {/* Bottom Bar */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="caption" sx={{ color: colors.textMuted }}>
                        © {new Date().getFullYear()} Sian NextGen. All rights reserved.
                        {/* <Link href="#" sx={{ ml: 2, color: "inherit", textDecoration: "none" }}>Privacy Policy</Link> */}
                    </Typography>
                    <Typography variant="caption" sx={{ color: colors.textMuted, fontStyle: "italic" }}>
                        Designed with precision for the modern enterprise.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;