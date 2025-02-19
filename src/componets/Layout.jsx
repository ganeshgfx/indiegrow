import { Stack, Container, Divider, Box } from "@mui/joy";
import { Outlet, Link } from "react-router-dom";
import Reveal from "./Reveal";
import Footer from "./Footer";

const Layout = () => {
     let linkStyle = {
          textDecoration: "none",
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
     };
     return (
          <>
               <Container sx={{
                    mt: 8,
               }}>
                    <nav>
                         <Stack direction="row" spacing={2} >
                              <span>
                                   <Link style={linkStyle} to="/">
                                        <img src="wide_.png" style={{
                                             width: "256px",
                                        }} ></img>
                                   </Link>
                              </span>
                              <Divider orientation="horizontal" sx={{
                                   flexGrow: 1,
                                   opacity: 0,
                              }} />
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
                         </Stack>
                    </nav >
               </Container >
               <Outlet />
               <Footer />
          </>
     )
};

export default Layout;