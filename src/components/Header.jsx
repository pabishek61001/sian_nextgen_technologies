import React, { useState, useEffect, useRef } from 'react';
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
    useScrollTrigger,
    Menu,
    MenuItem,
    ClickAwayListener,
    MenuList,
    Grow,
    Popper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const navItems = [
    { label: 'Home', href: '/' },
    // { label: 'Global Trading', href: '/import-export' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Contact Us', href: '/contact-us' },
];



const Header = () => {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    const HideOnScroll = ({ children }) => {
        return (
            <Slide appear={false} direction="down" in={show}>
                {children}
            </Slide>
        );
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Show when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
            setShow(true);
        } else {
            setShow(false);
        }

        setLastScrollY(currentScrollY);
    };


    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };


    const drawer = (
        <Box sx={{ textAlign: 'center', bgcolor: "white", color: "black", height: "100%" }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 2,
                    py: 2,
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', }}>
                    SIAN NEXTGEN
                </Typography>
                <IconButton
                    edge="end"
                    onClick={(e) => {
                        e.stopPropagation();
                        setMobileOpen(false);
                    }}
                >
                    <Close />
                </IconButton>


            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem component="a" href={item.href} key={item.label}>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}

            </List>
        </Box>
    );



    return (
        <div >
            {/* Slide-aware AppBar */}
            <HideOnScroll>
                <AppBar
                    component="nav"
                    // position="fixed"
                    color="inherit"
                    elevation={0}
                    sx={{
                        bgcolor: show && location.pathname !== '/' ? '#053d6b' : 'white',
                    }}
                >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', }}>
                        <Typography
                            variant="h6"
                            component="a"
                            href="/"
                            sx={{
                                textDecoration: 'none',
                                color: location.pathname !== '/' ? 'whitesmoke' : "black",
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                            }}
                        >
                            SIAN
                        </Typography>



                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={NavLink}
                                    to={item.href}
                                    sx={{
                                        fontSize: "0.9rem",
                                        color: show && location.pathname !== '/' ? 'white' : 'black',
                                        // '&:hover': { color: 'black', bgcolor: "#006cc52e" },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>



                        {/* Mobile Menu Button */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon sx={{ color: "grey.700" }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll >

            {/* Mobile Drawer */}
            < Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }
                }
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { width: '100%' },
                }}
            >
                {drawer}
            </Drawer >

            {/* Placeholder Toolbar to offset fixed AppBar */}
            < Toolbar />
        </div>
    );
};

export default Header;
