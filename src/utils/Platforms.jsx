import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Stack,
    Tabs,
    Tab,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CampaignIcon from '@mui/icons-material/Campaign';
import { Computer, GroupAdd, Hotel, ImportExport, InfoSharp, Work } from '@mui/icons-material';

const tabCategories = [
    { id: 1, title: 'IT Solutions', icon: <Computer fontSize="medium" color="primary" /> },
    { id: 2, title: 'R&D and Training', icon: <Work fontSize="medium" color="primary" /> },
    // { id: 3, title: 'Labour Supply Under Contract', icon: <GroupAdd fontSize="medium" color="primary" /> },
    // { id: 4, title: 'Global Trading', icon: <ImportExport fontSize="medium" color="primary" /> },
    // { id: 5, title: 'Hospitality Services', icon: <Hotel fontSize="medium" color="primary" /> },
];

// Sample services for each tab (you can replace the others later)
const servicesMap = {
    1: [
        { id: 100, title: 'Artificial Intelligence Services', description: 'Tailor-made AI Chatbot, Voice Assistant, Prediction & Analysis tools, and more as per client requirements.' },
        { id: 1, title: 'Custom Software Development', description: 'Tailor-made software solutions crafted to perfectly fit your business needs and challenges.' },
        { id: 2, title: 'Web Application Development', description: 'Modern, responsive web apps designed to boost your online presence and enhance user experience' },
        { id: 3, title: 'Mobile App Development', description: 'High-performance mobile apps for iOS and Android, built to engage your customers on the go.' },
        { id: 4, title: 'Software Consulting', description: 'Expert guidance to help you strategize, plan, and execute successful software projects.' },
        { id: 5, title: 'Cloud Solutions & Migration', description: ' Seamless transition to the cloud to improve scalability, security, and reduce costs.' },
        { id: 6, title: 'Software Integration', description: 'Connecting your existing software systems for smooth, efficient business operations.' },
        { id: 7, title: 'API Development & Integration', description: 'Robust API creation and integration to enable seamless communication between platforms.' },
        { id: 8, title: 'UI/UX Design', description: 'Intuitive and attractive interfaces crafted to deliver the best user experience.' },
        { id: 9, title: 'QA & Testing Services', description: 'Comprehensive testing to ensure your software is reliable, secure, and bug-free.' },
        { id: 10, title: 'Maintenance & Support', description: 'Ongoing updates, troubleshooting, and technical support to keep your software running smoothly.' },
        { id: 11, title: 'Enterprise Software Solutions', description: 'Powerful ERP, CRM, and other enterprise-grade software to streamline your business processes.' },
        { id: 12, title: 'DevOps & Automation', description: 'Optimizing development and deployment pipelines for faster, more reliable software delivery' },
        { id: 13, title: 'Data Analytics & Business Intelligence', description: 'Transform raw data into actionable insights for smarter business decisions.' },
        { id: 14, title: 'Cybersecurity Solutions', description: 'Protect your digital assets with advanced security measures and threat prevention.' },
    ],
    2: [
        {
            title: "Internship and Technical Training Programs",
            description: "Hands-on internships and expert-led training designed to bridge academic knowledge with real-world applications.",
        },
        {
            title: "Research & Development in AI, Data Science, and IoT",
            description: "Encouraging innovation through guided R&D projects in cutting-edge technologies like AI, IoT, and Data Science.",
        },
        {
            title: "Embedded Systems & Microcontroller-Based Project Support",
            description: "Support and training for building reliable embedded systems and microcontroller-based solutions for real-world problems.",
        },
        {
            title: "Application of AI in Healthcare, Automation, and BI",
            description: "Training on applying AI in practical sectors like healthcare, industrial automation, and business intelligence.",
        },
        {
            title: "Web, Mobile, and Cloud-Based Solution Development",
            description: "Learn to develop full-stack applications with modern web, mobile, and scalable cloud technologies.",
        },
        {
            title: "End-to-End Prototype Development (Hardware + Software)",
            description: "From ideation to functional prototypes — integrating both hardware and software for a complete solution.",
        },
        {
            title: "Real-Time Data Processing & Dashboard Implementation",
            description: "Master real-time data pipelines, analytics, and build intuitive dashboards for monitoring and insights.",
        },
        {
            title: "Collaboration with Academic Institutions",
            description: "Partnering with colleges to support students in completing innovative and impactful final year projects.",
        },
        {
            title: "Mentorship for Startup Ideas and Innovation Projects",
            description: "Guided mentorship to help shape early-stage ideas into scalable innovations or startup ventures.",
        },
    ],
    // 3: [
    //     { id: 1, title: 'Deliver Skilled Workforce', description: 'We carefully vet and provide qualified personnel across various industries, ensuring they have the expertise and experience needed for your specific projects.        ' },
    //     { id: 2, title: 'Ensure Timely Deployment', description: 'We understand the importance of meeting project deadlines. Our efficient recruitment and deployment process guarantees that your workforce demands are fulfilled promptly without compromising quality.' },
    //     { id: 3, title: 'Maintain Compliance & Safety', description: ' We adhere strictly to industry standards, labour laws, and safety regulations, ensuring that all contract workers meet legal requirements and maintain a safe working environment.' },
    //     { id: 4, title: 'Flexible Staffing Solutions', description: 'Whether you need workers for a few days, weeks, or months, we tailor our labour supply services to align perfectly with your business timelines and budget.' },
    //     { id: 5, title: 'Ongoing Support & Management', description: 'Our team provides continuous support and management for all contract labour, handling payroll, documentation, and any issues that arise during the contract period.' },
    // ],
    // 4: [
    //     { id: 1, title: 'Documentation & Compliance', description: 'We manage all essential trade documentation and ensure compliance with international regulations to avoid delays and penalties.' },
    //     { id: 2, title: 'Shipment Tracking & Management', description: 'Stay informed with real-time tracking and updates on your cargo, from origin to destination.' },
    //     { id: 3, title: 'Customs Clearance Support', description: ' Our knowledgeable team works closely with customs authorities to facilitate swift clearance of your goods.' },
    //     { id: 4, title: 'Logistics Coordination', description: 'We coordinate with trusted freight forwarders, carriers, and warehouses to optimize shipping routes and reduce costs.' },
    //     { id: 5, title: 'Risk Management', description: 'We identify potential risks in your supply chain and implement strategies to mitigate disruptions.' },
    // ],
    // 5: [
    //     { id: 1, title: 'Reservation & Booking Management', description: 'Simplify bookings with integrated systems that handle online reservations, cancellations, and room assignments effortlessly.' },
    //     { id: 2, title: 'Guest Services & CRM', description: 'Enhance guest satisfaction with personalized services, loyalty programs, and effective communication tools.' },
    //     { id: 3, title: 'Billing & Payment Processing', description: ' Secure and seamless billing solutions that handle multiple payment methods, invoicing, and financial reporting.' },
    //     { id: 4, title: 'Operational Efficiency', description: 'Tools to manage housekeeping, maintenance, staff scheduling, and inventory, ensuring smooth day-to-day operations' },
    //     { id: 5, title: 'Analytics & Reporting', description: 'Gain insights into occupancy rates, revenue trends, and guest preferences to make informed business decisions.' },
    // ],
};

// Styled components
const StyledListItem = styled(ListItem)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    transition: 'background-color 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    position: 'relative',
    paddingRight: theme.spacing(2),
    overflow: 'hidden',
    '&:hover': {
        borderBottom: '1px solid #000',
        borderRadius: 0,
        '& .hover-content': {
            opacity: 1,
            right: theme.spacing(2),
        },
    },
}));



export default function Platforms() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const currentServices = servicesMap[tabCategories[selectedTab].id] || [];

    return (
        <Box sx={{ py: 10, px: { xs: 3, md: 10 }, backgroundColor: '#fff', color: 'black' }}>
            <Typography variant="h5" gutterBottom textAlign="left" sx={{ mb: 2 }}>
                Your  <Box component="span" fontWeight="bold" color="primary.main"> Industry</Box>,&nbsp;
                Our  <Box component="span" fontWeight="bold" color="primary.main"> Innovation</Box>.
            </Typography>

            <Typography variant="body1" textAlign="left" sx={{ mb: 4, color: 'text.secondary' }}>
                Let’s build impact<Box component="span" fontWeight="bold" color="primary.main" display="inline"> together</Box>.
            </Typography>


            {/* Tabs */}
            <Tabs
                value={selectedTab}
                onChange={handleChange}
                variant="scrollable"
                // scrollButtons
                textColor="primary"
                allowScrollButtonsMobile
                indicatorColor="primary"
                sx={{ mb: 6 }}
            >
                {tabCategories.map((tab, index) => (
                    <Tab
                        key={tab.id}
                        label={
                            <Stack direction="row" alignItems="center" gap={1}>
                                {tab.icon}
                                <Typography variant="body1">{tab.title}</Typography>
                            </Stack>
                        }
                        sx={{ textTransform: 'none', minWidth: 200 }}
                    />
                ))}
            </Tabs>

            {/* Services under selected tab */}
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
                alignItems="center"
            // justifyContent="center"
            >
                {currentServices.map(({ id, title, description }) => (
                    <Grid key={id} size={{ xs: 12, sm: 6 }}>
                        <List disablePadding sx={{ borderBottom: "2px solid #eee" }}>
                            <StyledListItem>
                                <ListItemText
                                    primary={
                                        <Typography variant='h6' sx={{ fontWeight: 400, mb: 1 }}>
                                            {title}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography
                                            variant='subtitle2'
                                            color='textSecondary'
                                            fontWeight={300}
                                            sx={{
                                                mb: 2,
                                                display: '-webkit-box',
                                                WebkitLineClamp: 1,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {description}
                                        </Typography>

                                    }
                                />
                                <ArrowForwardIcon />
                            </StyledListItem>
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
