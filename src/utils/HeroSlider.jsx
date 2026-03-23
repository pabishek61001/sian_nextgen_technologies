import React, { useState, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Box, Typography, Button, keyframes, IconButton, useMediaQuery } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const slides = [
  {
    src: 'https://img.freepik.com/free-photo/giant-building-with-sun_1127-400.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    title: 'IGE recognized as one of the worlds top brands',
    subtitle: 'IGE recognized as one of the worlds top brands',
  },
  {
    src: 'https://img.freepik.com/free-photo/business-people-walking-outside-office-building_107420-74359.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    title: 'IGE recognized as one of the worlds top brands',
    subtitle: 'IGE recognized as one of the worlds top brands',
  },
  {
    src: 'https://img.freepik.com/free-photo/vertical-low-angle-shot-modern-glass-business-buildings-touching-sky_181624-5904.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    title: 'IGE recognized as one of the worlds top brands',
    subtitle: 'IGE recognized as one of the worlds top brands',
  },
  {
    src: 'https://img.freepik.com/free-photo/city_1127-2867.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    title: 'IGE recognized as one of the worlds top brands',
    subtitle: 'IGE recognized as one of the worlds top brands',
  },
  {
    src: 'https://img.freepik.com/free-photo/giant-building-with-sun_1127-400.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
    title: 'IGE recognized as one of the worlds top brands',
    subtitle: 'IGE recognized as one of the worlds top brands',
  },
];

const fadeSlideRight = keyframes`
0% {
  opacity: 0;
  transform: translateX(500px);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const splideRef = useRef(null);

  const isMobile = useMediaQuery(theme => theme.breakpoints.down("md"));


  return (
    <Box sx={{ width: '100%', overflow: 'hidden', py: 5 }}>
      <Splide
        ref={splideRef}
        onMove={(splide) => setActiveIndex(splide.index)}
        options={{
          type: 'loop',
          perPage: 3,
          focus: 'center',
          gap: '1rem',
          fixedWidth: '70%',
          arrows: false,
          pagination: false,
          autoplay: false,
          interval: 3000,
          speed: 800,
          breakpoints: {
            768: {
              perPage: 1,
              fixedWidth: '90%',
              gap: '0.5rem',
            },
          },
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                transform: activeIndex === index ? 'scale(1)' : 'scale(0.92)',
                opacity: activeIndex === index ? 1 : 0.15,
                transition: 'all 0.6s ease-in-out',
              }}
            >
              <img
                src={slide.src}
                alt={slide.title}
                style={{
                  width: '100%',
                  height: isMobile ? '60vh' : '75vh',
                  objectFit: 'cover',
                  borderRadius: '0.5rem',
                  maskImage:
                    'linear-gradient(to top, rgba(0,0,0,1) 15%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to top, rgba(0,0,0,1) 15%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 100%)',
                }}
              />
              <Box
                className="slide-content"
                sx={{
                  position: 'absolute',
                  top: '-20px',
                  left: 0,
                  width: '100%',
                  padding: '1.5rem',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  zIndex: 9999,
                }}
              >
                {activeIndex === index && (
                  <>
                    <Typography
                      className="slide-title"
                      sx={{
                        fontWeight: 600,
                        maxWidth: 600,
                        ml: isMobile ? 2 : 3,
                        fontSize: { xs: '2rem', md: '2rem', lg: '3rem' },
                        animation: `${fadeSlideRight} 1s ease-in`,
                      }}
                    >
                      {slide.title}
                    </Typography>

                    {
                      !isMobile &&
                      <Typography
                        className="slide-subtitle"
                        variant="subtitle1"
                        sx={{
                          fontWeight: 300, ml: isMobile ? 2 : 3,
                        }}
                      >
                        {slide.subtitle}
                      </Typography>

                    }

                    <Button
                      className="slide-button"
                      variant="contained"
                      color="secondary"
                      endIcon={<ArrowForward />}
                      sx={{
                        width: 'fit-content', mt: 1, ml: isMobile ? 2 : 3,
                      }}
                    >
                      Learn More
                    </Button>
                  </>
                )}
              </Box>


            </Box>
          </SplideSlide>
        ))}
      </Splide>
      {/* Custom Arrows Below the Slider */}
      <Box
        sx={{
          width: 'fit-content',
          mt: 3,
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          zIndex: 30,
          mr: 3,
          placeSelf: "self-end"
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
          <ArrowBack />
        </IconButton>
        <IconButton
          onClick={() => splideRef.current?.splide?.go('>')}
          sx={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: 'white',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box >
  );
}
