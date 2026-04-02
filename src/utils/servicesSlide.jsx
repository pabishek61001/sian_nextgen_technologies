import React, { useRef } from 'react';
import { Parallax } from 'react-parallax';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Avatar,
    Divider,
    useTheme,
    Button,
    Stack,
    IconButton,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useNavigate } from 'react-router-dom';



const imageSlides = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        title: 'Artificial Intelligence Services',
        description: 'Leading the way in tech innovations with expert minds.',
        buttonText: 'Contact Us',
        slug: 'artificial-intelligence', // Add this
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80',
        title: 'Software Development',
        description: 'Connecting teams around the world for success.',
        buttonText: 'Contact Us',
        slug: 'software-development', // Add this
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        title: 'Web Application Development',
        description: 'Delivering impactful results to our clients.',
        buttonText: 'Contact Us',
        slug: 'web-application-development', // Add this
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        title: 'Research & Development (R&D) and Training',
        description: 'Leading the way in tech innovations with expert minds.',
        buttonText: 'Contact Us',
        slug: 'research-development-training', // Add this
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        title: 'Internship Opportunities',
        description: 'Delivering impactful results to our clients.',
        buttonText: 'Contact Us',
        slug: 'internship-opportunities', // Add this
    },
];


const ServicesSlide = () => {
    const theme = useTheme();
    const splideRef = useRef(null);
    const navigate = useNavigate();
    return (


        <Box py={10} px={3} bgcolor={theme.palette.background.paper}>

            <Grid item sx={{ display: { xs: 'flex', }, justifyContent: 'space-between', alignItems: 'center', width: "100%", mb: 4 }}>

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        background: 'linear-gradient(to right, #2563eb, #9333ea)', // Blue to Purple
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block' // Ensures the gradient only covers the text width
                    }}
                >
                    Our Services
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                    }}
                >
                    <IconButton
                        onClick={() => splideRef.current?.splide?.go('<')}
                        sx={{
                            backgroundColor: 'rgba(0,0,0,1)',
                            color: 'white',
                            '&:hover': { backgroundColor: 'rgba(0,0,0,1)' },
                        }}
                    >
                        <ArrowBack />
                    </IconButton>
                    <IconButton
                        onClick={() => splideRef.current?.splide?.go('>')}
                        sx={{
                            backgroundColor: 'rgba(0,0,0,1)',
                            color: 'white',
                            '&:hover': { backgroundColor: 'rgba(0,0,0,1)' },
                        }}
                    >
                        <ArrowForward />
                    </IconButton>
                </Box>
            </Grid>
            <Splide
                ref={splideRef}
                options={{
                    type: 'slide',
                    perPage: 3,
                    perMove: 1,
                    gap: '1rem',
                    breakpoints: {
                        2000: { perPage: 4 },
                        1024: { perPage: 3 },
                        640: { perPage: 1 },
                    },
                    arrows: false,
                    pagination: true,
                    autoplay: false,
                    pauseOnHover: true,
                }}
                // hasTrack={false}
                aria-label="Image carousel with overlay"
            >

                {imageSlides.map(({ imageUrl, title, description, buttonText }, idx) => (
                    <SplideSlide key={idx}>
                        <Box
                            onClick={() => navigate(`/services/${imageSlides[idx].slug}`)} // Navigate on click
                            sx={{
                                position: 'relative',
                                height: 450,
                                borderRadius: 3,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                boxShadow: 3,
                                '&:hover img': {
                                    transform: 'scale(1.1)',
                                    transition: 'transform 0.5s ease',
                                },
                                '&:hover .overlay': {
                                    backgroundColor: 'rgba(0,0,0,0.65)',
                                    transition: 'background-color 0.5s ease',
                                },
                            }}
                        >
                            {/* Background Image */}
                            <Box
                                component="img"
                                src={imageUrl}
                                alt={title}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                    display: 'block',
                                }}
                            />

                            {/* Overlay with dim background */}
                            <Box
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    bgcolor: 'rgba(0, 0, 0, 0.4)',
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',  // move text & button to bottom
                                    alignItems: 'start',
                                    textAlign: 'left',
                                    px: 3,
                                    pb: 3, // padding bottom for spacing
                                }}
                            >

                                <Typography variant="h6" fontWeight="bold" mb={1} sx={{}}>
                                    {title}
                                </Typography>
                                <Typography variant="subtitle2" mb={3} sx={{ maxWidth: 250, color: "grey.300" }}>
                                    {description}
                                </Typography>
                                <Button
                                    endIcon={<ArrowForward />}
                                    variant="text"

                                    size="small"
                                    sx={{ textTransform: 'uppercase', color: "grey.300" }}
                                >
                                    {buttonText}
                                </Button>
                            </Box>

                        </Box>
                    </SplideSlide>
                ))}

            </Splide>

        </Box>


    );
};

export default ServicesSlide;