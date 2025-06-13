// import React, { useEffect, useRef } from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
// import { Box, Button, Typography, useMediaQuery } from '@mui/material';
// import { ArrowBack, ArrowForward, NavigateBefore, NavigateNext } from '@mui/icons-material';
// import { IconButton } from '@mui/material';


// export default function HeroSlider({ slides }) {

//   const mobile = useMediaQuery((theme) => theme.breakpoints.down("md"))
//   const splideRef = useRef(null);

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         height: {
//           xs: '75vh',  // mobile
//           sm: '100vh',  // mobile
//           md: '100vh'
//         },
//         pt: {
//           xs: 5,  // mobile
//           sm: 'none',
//         },
//         py: {
//           xs: 5,  // mobile
//           sm: 6,
//         },
//         mb: 0,
//         // border: '1px solid white',
//         display: 'flex',
//         alignItems: 'center',
//         flexDirection: "column",
//         justifyContent: 'center',
//         overflow: 'hidden',
//         backgroundColor: 'transparent',
//       }}
//     >

//       <style>{`
//   .splide__slide {
//     position: relative;
//     transition:all 0s ease;
//   }

//   .splide__slide img {
//     width: 60vw;
//     height: 90vh;
//     object-fit: cover;
//     border-radius: 0.5rem;
//     transition: transform 0.5s ease, opacity 0.5s ease, width 0.5s ease;
//     opacity: 0.4;
//     filter: brightness(0.6);
//     pointer-events: none;
//     user-select: none;
//     border-radius:10px  !important;
//     // box-shadow: 0 5px 15px rgba(0,0,0,0.3);
//   }

//   .splide__slide.is-active img {
//     width: 100vw !important;
//     opacity: 1 !important;
//     filter: brightness(1) !important;
//     pointer-events: auto;
//     z-index: 10;

//     mask-image: radial-gradient(
//       ellipse at bottom right,
//       rgba(0, 0, 0, 1) 30%,
//       rgba(0, 0, 0, 0.6) 50%,
//       rgba(0, 0, 0, 0) 100%
//     );

//     // -webkit-mask-image: radial-gradient(
//     //   ellipse at bottom right,
//     //   rgba(0, 0, 0, 1) 30%,
//     //   rgba(0, 0, 0, 0.6) 30%,
//     //   rgba(0, 0, 0, 0) 100%
//     // );
//   }



//   .splide__slide.is-prev img,
//   .splide__slide.is-next img {
//     transform: scale(0.85) !important;
//     opacity: 0.2 !important;
//     z-index: 5;
//   }

//   .splide__track {
//     overflow: visible !important;
//   }

//   .splide__list {

//     padding-left: 10vw;
//     padding-right: 10vw;
//   }

//   .slide-overlay {
//     position: absolute;
//     top: -80px;
//     left: 0px;
//     right: 0px;
//     width: 100%;
//     padding: 1.5rem;
//     // background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
//     color: white;
//     z-index: 20;
//     border-top-left-radius: 0.5rem;
//     border-top-right-radius: 0.5rem;

//     display: none; /* hide by default */
//   }

//   .splide__slide.is-active .slide-overlay {
//     display: block; /* show only on active slide */
//   }

//   .slide-title {
//     // position: absolute;
//     // height:auto;
//     // top: -25px;
//         font-weight: 500;
//   }

//   .slide-desc {
//     // position: absolute;
//     // top: 50px;
//     font-size: 1rem;
//     // margin-top: 0.25rem;
//   }

//   @keyframes fadeSlideRight {
//     0% {
//       opacity: 0;
//       transform: translateX(100px);
//     }
//     100% {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }

//   .slide-title,
//   .slide-desc {
//     animation: fadeSlideRight 0.7s ease-in;
//   }



//   @media (max-width: 2000px) {
//     .splide__slide img {
//       height: 70vh;
//     }
//   }
//   @media (min-width: 801px) {
//     .splide__list {
//       padding-left: 10vw;
//       padding-right: 10vw;
//     }
//   }

// `}</style>

//       <Splide
//         ref={splideRef}
//         options={{
//           type: 'loop',
//           perPage: 3,
//           perMove: 1,
//           focus: 'center',
//           gap: '1rem',
//           pagination: true,
//           arrows: false,
//           autoplay: false,
//           pauseOnHover: true,
//           rewind: false,
//           speed: 700,
//           fixedWidth: '75vw',
//           trimSpace: false,
//           updateOnMove: true,
//           breakpoints: {
//             576: {
//               perPage: 1,
//               // gap: 3,
//               fixedWidth: '100vw',
//             },
//           },

//         }}

//         aria-label="Hero Image Slider"
//         className="w-full max-w-full"
//       >
//         {slides.map(({ src, title, description }, i) => (
//           <SplideSlide key={i}>
//             <div className="relative">
//               <div className="slide-overlay">
//                 <Typography data-aos='fade-right' className="slide-title" sx={{
//                   fontSize: { xs: "2rem", md: "3rem" }, maxWidth: 700
//                   // maxWidth: { xs: 200, md: '100%' }, 
//                 }}>
//                   {title}
//                 </Typography>
//                 <br />

//                 <Typography data-aos='fade-right' className="slide-desc" sx={{ display: { xs: "none", md: "block" }, fontSize: { xs: "1rem", md: "2rem" } }}>
//                   {description}
//                 </Typography>

//                 <Button size='large' endIcon={<ArrowForward />} variant='contained' color='secondary' sx={{ mt: { xs: 1, md: 3 }, color: 'white', }}>Read More</Button>
//               </div>
//               <Box
//                 className='splide__slide is-active'
//                 sx={{
//                   height: '400px',
//                   backgroundImage: `url('${src}')`,
//                   backgroundAttachment: 'fixed',
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   position: 'relative',
//                   color: 'white',
//                   textAlign: 'center',
//                   zIndex: 1,
//                   '&::before': {
//                     content: '""',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     background: `linear-gradient(180deg, #053d6b, transparent)`,
//                     // backgroundColor: 'rgba(5, 61, 107, 0.5)', // dark overlay
//                     zIndex: -1,
//                   },
//                 }}
//               />

//               {/* <img src={src} style={{ height: mobile ? 400 : 400, }} alt={title} /> */}
//             </div>
//           </SplideSlide>
//         ))}

//       </Splide>


//       {/* Custom Arrows Below the Slider */}
//       <Box
//         sx={{
//           width: 'fit-content',
//           mt: 3,
//           display: 'flex',
//           justifyContent: 'center',
//           gap: 2,
//           zIndex: 30,
//           mr: 3,
//           placeSelf: "self-end"
//         }}
//       >
//         <IconButton
//           onClick={() => splideRef.current?.splide?.go('<')}
//           sx={{
//             backgroundColor: 'rgba(0,0,0,0.4)',
//             color: 'white',
//             '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
//           }}
//         >
//           <ArrowBack />
//         </IconButton>
//         <IconButton
//           onClick={() => splideRef.current?.splide?.go('>')}
//           sx={{
//             backgroundColor: 'rgba(0,0,0,0.4)',
//             color: 'white',
//             '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
//           }}
//         >
//           <ArrowForward />
//         </IconButton>
//       </Box>




//     </Box >
//   );
// }


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

export default function WeddingHeroSlider() {
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
                      <>
                        <Typography
                          className="slide-subtitle"
                          variant="subtitle1"
                          sx={{
                            fontWeight: 300, ml: isMobile ? 2 : 3,
                          }}
                        >
                          {slide.subtitle}
                        </Typography>
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
                    }
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
