import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    useTheme,
    alpha,
    IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import {
    SmartToyOutlined,
    PsychologyOutlined,
    VisibilityOutlined,
    SettingsSuggestOutlined,
    AutoGraphOutlined,
    ArrowForward
} from '@mui/icons-material';

const cardVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    viewport: { once: true }
};

const SkillTag = ({ text }) => (
    <Box
        sx={{
            px: 1.5,
            py: 0.5,
            borderRadius: '4px',
            bgcolor: 'grey.50',
            border: '1px solid',
            borderColor: 'grey.100',
            display: 'inline-flex',
            alignItems: 'center',
            mr: 1,
            mb: 1
        }}
    >
        <Typography variant="caption" fontWeight={600} sx={{ color: 'text.secondary', fontSize: '0.65rem', textTransform: 'uppercase' }}>
            {text}
        </Typography>
    </Box>
);

const AIPracticeCard = ({ title, description, applications, bgImage, index }) => {
    const theme = useTheme();
    const isEven = index % 2 === 0;

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            sx={{
                py: { xs: 8, md: 12 },
                borderBottom: '1px solid',
                borderColor: 'grey.100'
            }}
        >
            <Grid container spacing={8} alignItems="center" flexDirection={isEven ? 'row' : 'row-reverse'}>
                {/* Content Side */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Stack spacing={3}>
                        <Typography
                            variant="caption"
                            sx={{
                                fontWeight: 900,
                                color: 'primary.main',
                                letterSpacing: 3,
                                textTransform: 'uppercase'
                            }}
                        >
                            0{index + 1} // Expertise
                        </Typography>

                        <Typography
                            variant="h3"
                            fontWeight={900}
                            sx={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}
                        >
                            {description}
                        </Typography>

                        <Box>
                            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 800 }}>
                                Applications:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {applications.map((app, i) => (
                                    <Typography
                                        key={i}
                                        variant="caption"
                                        sx={{
                                            px: 1.5, py: 0.5,
                                            bgcolor: 'grey.50',
                                            borderRadius: 3,
                                            border: '1px solid ',
                                            borderColor: 'grey.400',
                                            fontWeight: 600
                                        }}
                                    >
                                        {app}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>


                    </Stack>
                </Grid>

                {/* Image Side */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ position: 'relative' }}>
                        <Box
                            component={motion.div}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6 }}
                            sx={{
                                width: '100%',
                                height: '450px',
                                borderRadius: 10,
                                // borderRadius: isEven ? '60px 4px 60px 4px' : '4px 100px 4px 100px',
                                overflow: 'hidden',
                                boxShadow: `0 30px 60px ${alpha('#000', 0.12)}`,
                                position: 'relative'
                            }}
                        >
                            <Box
                                component="img"
                                src={bgImage}
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            {/* Decorative Glass Overlay */}
                            <Box sx={{
                                position: 'absolute',
                                inset: 0,
                                background: `linear-gradient(to bottom, transparent, ${alpha('#000', 0.6)})`,
                                display: 'flex',
                                alignItems: 'flex-end',
                                p: 4
                            }}>
                            </Box>
                        </Box>


                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

const ArtificialIntelligence = () => {
    return (
        <Box sx={{ bgcolor: '#fff', color: '#111', overflowX: 'hidden' }}>
            {/* Split Hero with Modern Image Grid */}
            <Box sx={{ pt: { xs: 12, md: 12 }, pb: 5, borderBottom: '1px solid', borderColor: 'grey.50' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={8} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 3 }}>
                                    Artificial Intelligence Services
                                </Typography>
                                <Typography variant="h2" sx={{
                                    fontWeight: 900,
                                    // fontSize: { xs: '2.8rem', md: '5rem' },
                                    lineHeight: 1,
                                    mt: 2,
                                    mb: 4,
                                    // letterSpacing: '-0.05em'
                                }}>
                                    Transform Business with <br />
                                    <Box component="span" sx={{
                                        color: 'grey.800',
                                        // WebkitTextStroke: '1px #222',
                                        opacity: 0.3
                                    }}>
                                        Intelligent Solutions
                                    </Box>
                                </Typography>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem', maxWidth: '650px' }}>
                                    Harness the power of Artificial Intelligence to unlock new opportunities, streamline operations, and make smarter decisions. We design AI systems with precision — not just to function, but to elevate how your business operates. Each solution is thoughtfully crafted, seamlessly integrated, and built to deliver measurable impact.
                                </Typography>
                            </motion.div>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    {/* Main Hero Image */}
                                    <Box
                                        component="img"
                                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                                        sx={{
                                            width: '100%',
                                            height: '400px',
                                            objectFit: 'cover',
                                            borderRadius: '24px 4px 24px 4px', // Modern asymmetric border radius
                                            filter: 'grayscale(10%) contrast(110%)'
                                        }}
                                    />
                                    {/* Decorative UI element over image */}
                                    <Box sx={{
                                        position: 'absolute',
                                        bottom: -20,
                                        left: -20,
                                        p: 3,
                                        bgcolor: '#fff',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        borderRadius: 2,
                                        display: { xs: 'none', md: 'block' }
                                    }}>
                                        <Typography variant="h6" fontWeight={800} color="primary">99.9%</Typography>
                                        <Typography variant="caption" color="text.secondary">Accuracy in NLP Models</Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Expertise Section */}
            <Box sx={{ bgcolor: '#FAFAFA', py: 15 }}>
                <Box maxWidth="xl">
                    <Stack alignItems="center" sx={{ mb: 12 }}>
                        <Typography variant="h2" fontWeight={900} sx={{ letterSpacing: '-0.04em', mb: 2 }}>
                            Our AI Expertise
                        </Typography>
                        <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main' }} />
                    </Stack>

                    <Grid container spacing={3}>
                        <AIPracticeCard
                            title="Machine Learning Solutions"
                            icon={SmartToyOutlined}
                            bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
                            description="We create bespoke machine learning models that transform your data into a strategic asset — designed to perform reliably at scale."
                            applications={["Demand forecasting and dynamic pricing", "Fraud detection and risk scoring", "Recommendation engines", "Predictive maintenance in industrial systems"]}
                        />
                        <AIPracticeCard
                            title="Natural Language Processing (NLP)"
                            icon={PsychologyOutlined}
                            bgImage="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=600"
                            description="Language is complex — we make it actionable. Our NLP solutions interpret nuance, context, and intent, enabling sophisticated interfaces and deep text intelligence."
                            applications={["Conversational AI and chatbot interfaces", "Automated document analysis", "Sentiment and opinion tracking", "Internal knowledge assistants"]}
                        />
                        <AIPracticeCard
                            title="Computer Vision"
                            icon={VisibilityOutlined}
                            bgImage="https://images.unsplash.com/photo-1527430253228-e92d4fdfde2d?auto=format&fit=crop&q=80&w=600"
                            description="Images and videos contain a depth of untapped intelligence. We design computer vision systems that interpret visual data with precision and respond in real time. From high-accuracy object detection to automated visual analysis, our solutions transform raw imagery into actionable insight."
                            applications={["Quality control and defect detection", "Facial recognition", "Retail analytics", "Medical imaging analysis"]}
                        />
                        <AIPracticeCard
                            title="AI-Powered Automation"
                            icon={SettingsSuggestOutlined}
                            bgImage="https://images.unsplash.com/photo-1518433278988-2b2bb7030928?auto=format&fit=crop&q=80&w=600"
                            description="If a task is repetitive, we look for a way to automate it intelligently. We design AI-driven workflows that cut manual effort, reduce errors, and free up your team to focus on higher-value work."
                            applications={["End-to-end process automation", "Intelligent ticket routing", "Workflow optimization", "Data entry and validation automation"]}
                        />
                        <AIPracticeCard
                            title="Predictive Analytics"
                            icon={AutoGraphOutlined}
                            bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                            description="Anticipation is a competitive advantage. We design models that learn from your historical data to forecast trends, identify risks early, and reveal opportunities ahead of time. In complex, data-rich environments, we bring clarity to what comes next."
                            applications={["Customer churn prediction", "Sales and revenue forecasting", "Risk modeling", "Market trend analysis and strategic planning"]}
                        />
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default ArtificialIntelligence;