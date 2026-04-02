import React from 'react';
import { Box, TextField, Button, Typography, Divider } from '@mui/material';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ApplicationForm from '../components/ApplicationForm.jsx';

const ContactUs = () => {
    return (
        <Box>
            <Header />

            <Box
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }}
                minHeight="100vh"
                width="100%"
                sx={{
                    background: '#fafafa',
                    py: { xs: 6, md: 10 },
                    px: { xs: 3, md: 10 },
                }}
            >
                {/* Left Section - Form */}
                <Box
                    flex={1}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    px={{ xs: 0, md: 6 }}
                    mb={{ xs: 5, md: 0 }}
                >
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Contact Our Team
                    </Typography>
                    <Divider sx={{ width: 80, height: 3, backgroundColor: '#1976d2', mb: 3 }} />

                    <Typography variant="body1" color="text.secondary" mb={4}>
                        Whether you have a question about services, pricing, or anything else — we're ready to answer.
                    </Typography>

                    <Box component="form" display="flex" flexDirection="column" gap={2}>
                        {/* <TextField label="Full Name" variant="outlined" fullWidth required />
                        <TextField label="Email Address" variant="outlined" type="email" fullWidth required />
                        <TextField label="Phone Number" variant="outlined" type="tel" fullWidth />
                        <TextField label="Company / Organization" variant="outlined" fullWidth />
                        <TextField
                            label="Your Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            required
                        />
                        <Button
                            type='submit'
                            variant="contained"
                            size="large"
                            sx={{
                                mt: 1,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                backgroundColor: '#1976d2',
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: '#125ea3',
                                },
                            }}
                        >
                            Send Message
                        </Button> */}

                        <ApplicationForm />
                    </Box>
                </Box>

                {/* Right Section - Image */}
                {/* <Box
                    flex={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <img
                        src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
                        alt="Contact Illustration"
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            borderRadius: '12px',
                            objectFit: 'cover',
                        }}
                    />
                </Box> */}
            </Box>

            <Footer />
        </Box>
    );
};

export default ContactUs;
