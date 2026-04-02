import React from 'react';
import { Widget } from '@typeform/embed-react';
import { Box, Container, Grid, Typography, Paper, alpha } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

const ApplicationForm = () => {
    return (
        <Box sx={{ py: 10, bgcolor: '#FFFFFF' }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="flex-start">

                    {/* Left Side: Context/Instructions (Makes the section feel smaller) */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1.5 }}>
                            Application Portal
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 900, mt: 1, mb: 3, color: '#0F172A' }}>
                            Ready to Start?
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#64748B', mb: 4, lineHeight: 1.7 }}>
                            Please fill out the form to the right. It usually takes less than 3 minutes. Once submitted, our team will review your profile and reach out within 48 hours.
                        </Typography>

                        {/* <Paper elevation={0} sx={{ p: 3, bgcolor: alpha('#1976d2', 0.05), borderRadius: 4, border: '1px solid', borderColor: alpha('#1976d2', 0.1) }}>
                            <Box sx={{ display: 'flex', mb: 2 }}>
                                <InfoOutlinedIcon sx={{ color: 'primary.main', mr: 2 }} />
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Important Note</Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: '#64748B' }}>
                                Ensure your portfolio link or resume is accessible (e.g., Google Drive link with "View" permissions).
                            </Typography>
                        </Paper> */}

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, color: '#94A3B8' }}>
                            <MarkEmailReadOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
                            <Typography variant="caption" sx={{ fontWeight: 500 }}>Encrypted & Secure Submission</Typography>
                        </Box>
                    </Grid>

                    {/* Right Side: The Form (Sized down) */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{
                            borderRadius: 6,
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px -12px rgba(0,0,0,0.12)',
                            border: '1px solid #E2E8F0',
                            height: '500px', // Reduced height for a tighter look
                            bgcolor: '#FFFFFF',
                            position: 'relative'
                        }}>
                            <Widget
                                id="ic8MOIZ8"
                                style={{ width: '100%', height: '100%' }}
                                className="my-form"
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default ApplicationForm;