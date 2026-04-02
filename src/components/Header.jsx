// import React, { useState, useEffect, useRef } from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Box,
//     Drawer,
//     List,
//     ListItem,
//     ListItemText,
//     Button,
//     Slide,
//     useScrollTrigger,
//     Menu,
//     MenuItem,
//     ClickAwayListener,
//     MenuList,
//     Grow,
//     Popper
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Close } from '@mui/icons-material';
// import { NavLink } from 'react-router-dom';

// const navItems = [
//     { label: 'Home', href: '/' },
//     // { label: 'Global Trading', href: '/import-export' },
//     { label: 'About Us', href: '/about' },
//     // { label: 'Services', href: '/services' },
//     { label: 'Why Us', href: '/why-us' },
//     { label: 'Contact Us', href: '/contact-us' },
// ];



// const Header = () => {

//     const [show, setShow] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);


//     const HideOnScroll = ({ children }) => {
//         return (
//             <Slide appear={false} direction="down" in={show}>
//                 {children}
//             </Slide>
//         );
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [lastScrollY]);

//     const handleScroll = () => {
//         const currentScrollY = window.scrollY;

//         // Show when scrolling up, hide when scrolling down
//         if (currentScrollY < lastScrollY || currentScrollY < 10) {
//             setShow(true);
//         } else {
//             setShow(false);
//         }

//         setLastScrollY(currentScrollY);
//     };


//     const [mobileOpen, setMobileOpen] = useState(false);

//     const handleDrawerToggle = () => {
//         setMobileOpen((prev) => !prev);
//     };


//     const drawer = (
//         <Box sx={{ textAlign: 'center', bgcolor: "white", color: "black", height: "100%" }}>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     px: 2,
//                     py: 2,
//                 }}
//             >
//                 <Typography variant="h6" sx={{ fontWeight: 'bold', }}>
//                     SIAN NEXTGEN
//                 </Typography>
//                 <IconButton
//                     edge="end"
//                     onClick={(e) => {
//                         e.stopPropagation();
//                         setMobileOpen(false);
//                     }}
//                 >
//                     <Close />
//                 </IconButton>


//             </Box>
//             <List>
//                 {navItems.map((item) => (
//                     <ListItem component="a" href={item.href} key={item.label}>
//                         <ListItemText primary={item.label} />
//                     </ListItem>
//                 ))}

//             </List>
//         </Box>
//     );



//     return (
//         <div >
//             {/* Slide-aware AppBar */}
//             <HideOnScroll>
//                 <AppBar
//                     component="nav"
//                     // position="fixed"
//                     color="inherit"
//                     elevation={0}
//                     sx={{
//                         bgcolor: show && location.pathname !== '/' ? '#053d6b' : 'white',
//                     }}
//                 >
//                     <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', }}>
//                         <Typography
//                             variant="h6"
//                             component="a"
//                             href="/"
//                             sx={{
//                                 textDecoration: 'none',
//                                 color: location.pathname !== '/' ? 'whitesmoke' : "black",
//                                 fontWeight: 'bold',
//                                 fontSize: '1.5rem',
//                             }}
//                         >
//                             SIAN
//                         </Typography>



//                         {/* Desktop Menu */}
//                         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
//                             {navItems.map((item) => (
//                                 <Button
//                                     key={item.label}
//                                     component={NavLink}
//                                     to={item.href}
//                                     sx={{
//                                         fontSize: "0.9rem",
//                                         color: show && location.pathname !== '/' ? 'white' : 'black',
//                                         // '&:hover': { color: 'black', bgcolor: "#006cc52e" },
//                                     }}
//                                 >
//                                     {item.label}
//                                 </Button>
//                             ))}
//                         </Box>



//                         {/* Mobile Menu Button */}
//                         <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             edge="end"
//                             onClick={handleDrawerToggle}
//                             sx={{ display: { md: 'none' } }}
//                         >
//                             <MenuIcon sx={{ color: show && location.pathname !== '/' ? "white" : "black" }} />
//                         </IconButton>
//                     </Toolbar>
//                 </AppBar>
//             </HideOnScroll >

//             {/* Mobile Drawer */}
//             < Drawer
//                 anchor="right"
//                 open={mobileOpen}
//                 onClose={handleDrawerToggle}
//                 ModalProps={{ keepMounted: true }
//                 }
//                 sx={{
//                     display: { xs: 'block', md: 'none' },
//                     '& .MuiDrawer-paper': { width: '100%' },
//                 }}
//             >
//                 {drawer}
//             </Drawer >

//             {/* Placeholder Toolbar to offset fixed AppBar */}
//             < Toolbar />
//         </div>
//     );
// };

// export default Header;



import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Button,
    Slide,
    Container,
    alpha
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Contact Us', href: '/contact-us' },
];

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setShow(true);
            } else {
                setShow(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const isDarkPage = location.pathname !== '/';

    return (
        <>
            <Slide appear={false} direction="down" in={show}>
                <AppBar
                    elevation={0}
                    sx={{
                        width: "100%",
                        bgcolor: 'transparent',
                        pt: 2, // Creates the "Floating" effect
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    <Container maxWidth="lg" sx={{ display: 'flex', width: "100%", }}>
                        <Toolbar
                            sx={{
                                borderRadius: '100px', // Capsule shape
                                border: '1px solid',
                                borderColor: isDarkPage ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
                                background: isDarkPage
                                    ? 'rgba(15, 23, 42, 0.8)' // Deep slate glass
                                    : 'rgba(255, 255, 255, 0.7)', // White glass
                                backdropFilter: 'blur(16px) saturate(180%)',
                                boxShadow: isDarkPage
                                    ? '0 4px 30px rgba(0, 0, 0, 0.1)'
                                    : '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                                px: { xs: 2, md: 3 },
                                width: "100%",
                                justifyContent: { xs: "space-between", },
                                minHeight: { xs: '60px', md: '70px' }
                            }}
                        >
                            {/* Brand / Logo */}
                            <Typography
                                variant="h6"
                                component={NavLink}
                                to="/"
                                sx={{
                                    textDecoration: 'none',
                                    color: isDarkPage ? '#fff' : '#0F172A',
                                    fontWeight: 900,
                                    fontSize: '1.4rem',
                                    letterSpacing: '-1px',
                                    '& span': { color: 'primary.main' }
                                }}
                            >
                                SIAN<span>.</span>
                            </Typography>

                            {/* Nav Links */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, ml: 'auto', mr: 2 }}>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        component={NavLink}
                                        to={item.href}
                                        sx={{
                                            px: 2.5,
                                            borderRadius: '50px',
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            color: isDarkPage ? 'rgba(255,255,255,0.7)' : '#64748B',
                                            transition: '0.3s',
                                            '&:hover': {
                                                color: isDarkPage ? '#fff' : 'primary.main',
                                                bgcolor: isDarkPage ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'
                                            },
                                            '&.active': {
                                                color: isDarkPage ? '#fff' : 'primary.main',
                                                bgcolor: isDarkPage ? 'rgba(255,255,255,0.1)' : alpha('#1976d2', 0.08),
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>

                            {/* Contact CTA Button */}
                            <Button
                                variant="contained"
                                component={NavLink}
                                to="/contact-us"
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    borderRadius: '50px',
                                    px: 3,
                                    textTransform: 'none',
                                    fontWeight: 700,
                                    boxShadow: 'none',
                                    '&:hover': { boxShadow: '0 8px 20px -6px rgba(25, 118, 210, 0.5)' }
                                }}
                            >
                                Start a Project
                            </Button>

                            {/* Mobile Burger */}
                            <IconButton
                                edge="end"
                                onClick={() => setMobileOpen(true)}
                                sx={{ display: { md: 'none' }, color: isDarkPage ? "#fff" : "#0F172A" }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: { width: '100%', maxWidth: '350px', p: 3, borderRadius: '24px 0 0 24px' }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>SIAN<span>.</span></Typography>
                    <IconButton onClick={() => setMobileOpen(false)}><Close /></IconButton>
                </Box>
                <List>
                    {navItems.map((item) => (
                        <ListItem
                            key={item.label}
                            component={NavLink}
                            to={item.href}
                            onClick={() => setMobileOpen(false)}
                            sx={{ borderRadius: 3, mb: 1, '&.active': { bgcolor: 'primary.50', color: 'primary.main' } }}
                        >
                            <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 700 }} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Header;