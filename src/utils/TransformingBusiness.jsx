import React, { useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Box, Typography, Button, Stack, IconButton, Grid, CardMedia } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const slides = [
    { id: 1, image: 'https://img.freepik.com/free-photo/close-up-business-partners-shaking-hands_23-2147972923.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740', title: 'IT Solutions', slug: '/services/it-solutions' },
    { id: 2, image: 'https://img.freepik.com/free-photo/business-partners-working-office_273609-6540.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740', title: 'R&D And Training', slug: '/services/R&D-and-Training' },
    { id: 3, image: 'https://img.freepik.com/free-photo/picture-two-young-businessmen-talking-station-holding-tablet_176420-6242.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740', title: 'Software-as-a-Service ', slug: '/services/labour-supply-under-contract' },
    { id: 4, image: 'https://img.freepik.com/free-photo/two-businesspeople-discussing-details-contract_1163-3971.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740', title: 'Artificial Intelligence & Data Science ', slug: '/services/global-trading' },
    { id: 41, image: 'https://img.freepik.com/free-photo/close-up-business-partners-shaking-hands_23-2147972923.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740', title: 'Hospitality Services', slug: '/services/hospitality-services' },
];

export default function TransformingBusiness() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const splideRef = useRef(null);

    return (
        <Box
            maxWidth='lg'
            mx='auto'
            sx={{ px: { xs: 2, md: 2 }, py: 6, backgroundColor: 'transparent', color: "white", overflow: "hidden" }}>


            <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={3}>
                {/* Title - Always shown */}
                <Grid item xs={12} md="auto">
                    <Typography variant="h5" gutterBottom textAlign="left" sx={{ mb: { xs: 0, md: 0 } }}>
                        Transforming Business
                    </Typography>
                </Grid>

                {/* Mobile only: count + nav buttons in row */}
                <Grid item sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        {currentSlide} / {slides.length}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            // alignItems: 'center',
                        }}
                    >
                        <IconButton
                            onClick={() => splideRef.current?.splide?.go('<')}
                            sx={{
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                color: 'white',
                                '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
                            }}
                        >
                            <NavigateBefore />
                        </IconButton>
                        <IconButton
                            onClick={() => splideRef.current?.splide?.go('>')}
                            sx={{
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                color: 'white',
                                '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
                            }}
                        >
                            <NavigateNext />
                        </IconButton>
                    </Box>
                </Grid>

                {/* Desktop only: navigation buttons on the right */}
                <Grid
                    item
                    md
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'flex-end',
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton
                            onClick={() => splideRef.current?.splide?.go('<')}
                            sx={{
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                color: 'white',
                                '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
                            }}
                        >
                            <NavigateBefore />
                        </IconButton>
                        <IconButton
                            onClick={() => splideRef.current?.splide?.go('>')}
                            sx={{
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                color: 'white',
                                '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
                            }}
                        >
                            <NavigateNext />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>


            {/* Splide Carousel */}
            <Splide
                ref={splideRef}
                options={{
                    type: 'loop',
                    perPage: 4,
                    perMove: 1,
                    gap: '1rem',
                    breakpoints: {
                        576: {
                            perPage: 1,
                        },
                    },
                    arrows: false,
                    pagination: false,
                }}
                onMoved={(splide) => setCurrentSlide(splide.index + 1)}
                hasTrack={false}
            >
                <div className="splide__track">
                    <ul className="splide__list">
                        {slides.map((slide) => (
                            <SplideSlide key={slide.id}>
                                <Box
                                    sx={{
                                        cursor: "pointer",
                                        position: 'relative',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        height: 500,
                                        backgroundImage: `url(${slide.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <NavLink to={slide.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {/* Overlay */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'black',
                                                WebkitMaskImage: `radial-gradient(
                                              circle at bottom,
                                              rgba(0, 0, 0, 1) 5%,
                                              rgba(0, 0, 0, 0) 100%,
                                              rgba(0, 0, 0, 0) 10%
                                            )`,
                                                WebkitMaskRepeat: 'no-repeat',
                                                WebkitMaskSize: 'cover',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-end',
                                                p: 3,
                                                color: '#fff',
                                                transition: 'background 0.3s ease, transform 0.3s ease',
                                                transform: 'translateY(0)',

                                                // Hover effect on the parent (assumes parent has :hover)
                                                ':hover &': {
                                                    background:
                                                        'linear-gradient(to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)) !important',
                                                },
                                            }}
                                        >
                                            <Typography variant="h6" sx={{ maxWidth: 200 }} fontWeight="bold" gutterBottom>
                                                {slide.title}
                                            </Typography>
                                            <Button
                                                size='medium'
                                                variant="text"
                                                endIcon={<ArrowForwardIcon />}
                                                sx={{
                                                    textTransform: "uppercase",
                                                    maxWidth: 300,
                                                    placeSelf: "self-start",
                                                    color: '#fff',
                                                    borderColor: '#fff',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                                    },
                                                }}
                                            >
                                                Read More
                                            </Button>
                                        </Box>
                                    </NavLink>
                                </Box>
                            </SplideSlide>
                        ))}
                    </ul>
                </div>


            </Splide>
        </Box>
    );
}
