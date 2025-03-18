import { Stack, Container, Divider, Box } from "@mui/joy";
import React, { useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useAnimation, motion, useInView } from "motion/react"
import Footer from "./Footer";
const linkStyleDesktop = {
     textDecoration: "none",
     color: "black",
     fontSize: "20px",
     fontWeight: "bold",
};
const linkStyleMobile = {
     textDecoration: "none",
     color: "black",
     fontSize: "20px",
     fontWeight: "bold",
     display: "block",
     margin: "10px 0 !important",
     paddingStart: "0px !important",
};
const Layout = () => {
     const isMobile = useMediaQuery('(max-width:800px)');
     const ref = useRef(null);
     const mainControls = useAnimation();
     return (
          <>
               <Container
                    sx={{
                         mt: 4,
                    }}>
                    <nav>
                         <Stack direction={"row"} spacing={2} >
                              <span>
                                   <Link style={isMobile ? linkStyleMobile : linkStyleDesktop} to="/">
                                        <img src="wide_.png" style={{
                                             width: "256px",
                                        }} ></img>
                                   </Link>
                              </span>
                              <Divider orientation="horizontal" sx={{
                                   flexGrow: 1,
                                   opacity: 0,
                              }} />
                              {
                                   !isMobile ? <Stack
                                        direction={"row"}
                                        sx={{ mt: "12px !important" }}
                                   >
                                        <Links linkStyle={isMobile ? linkStyleMobile : linkStyleDesktop} />
                                   </Stack> : <></>
                              }
                              {
                                   isMobile ? <Stack
                                        direction={"column"}
                                        sx={{
                                             mt: "12px !important",
                                        }}
                                   >
                                        <div className="navTextBox">
                                             <motion.span
                                                  ref={ref}
                                                  style={linkStyleMobile}
                                                  whileTap={{ scale: 2 }}
                                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                             >
                                                  ---
                                             </motion.span>
                                        </div>
                                   </Stack> : <></>
                              }
                         </Stack>
                         {
                              isMobile ? <Stack
                                   direction={"column"}
                                   sx={{
                                        mt: "12px !important",
                                   }}
                              >
                                   <Links linkStyle={linkStyleMobile} />
                              </Stack> : <></>
                         }
                    </nav >
               </Container >
               <Outlet />
               <Footer />
          </>
     )
};

export default Layout;

const Links = ({ linkStyle }) => {
     return (
          <>
               <span className="navTextBox">
                    <Link style={linkStyle} to="/">Home</Link>
               </span>
               <span className="navTextBox">
                    <Link style={linkStyle} to="/portfolio">Portfolio</Link>
               </span>
               <span className="navTextBox">
                    <Link style={linkStyle} to="/about">About Us</Link>
               </span>
               <span className="navTextBox">
                    <Link style={linkStyle} to="/contact-us">Contact Us</Link>
               </span>
          </>
     )
}