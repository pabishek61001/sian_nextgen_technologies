import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import theme from './theme/Theme'
import { ThemeProvider } from '@mui/material/styles';
import "../src/css/App.css"
import AboutPage from './pages/AboutPage'
import WhyusPage from './pages/WhyusPage'
import ScrollToTop from 'react-scroll-to-top'
import { ArrowUpward } from '@mui/icons-material'
import { Fab, Zoom } from '@mui/material';
import PageNotfound from './pages/PageNotfound'
import ContactUs from './pages/ContactUs'
import Scroller from './components/Scroller'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import SianNextGen from './pages/rought'

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };




  return (
    <ThemeProvider theme={theme}>



      <Zoom in={visible}>
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <ArrowUpward />
        </Fab>
      </Zoom>


      <BrowserRouter>
        <Scroller />

        <Routes>
          <Route path='' element={<LandingPage />}></Route>
          <Route path='about' element={<AboutPage />}></Route>
          <Route path='services' element={<Services />}></Route>
          <Route path='why-us' element={<WhyusPage />}></Route>
          <Route path='contact-us' element={<ContactUs />}></Route>
          <Route path="/services/:servicename" element={<ServiceDetail />} />
          <Route path="/111" element={<SianNextGen />} />

          <Route path='*' element={<PageNotfound />}></Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App