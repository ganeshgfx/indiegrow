import { Container, Stack, Box, Card, Typography, AspectRatio, CardContent, Button, Table, Divider } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import Reveal from "./Reveal";
import RevealMoveUp from "./RevealMoveUp";
import Logos from "./Logos";
import { chunked, randomFloat } from "./Utils";
import Space from "./Space";
import { FaArrowRight } from "react-icons/fa";
import Hover from "./Hover";
import { img } from "motion/react-client";
const Home = () => {
     const heaingStyle = {
          fontSize: "3rem",
          fontWeight: "900",
          color: "var(--brand-color)",
     }
     const isMobile = useMediaQuery('(max-width:800px)');
     return <>
          <Space />
          <Container >
               <Stack
                    //row for desktop and column-reverse for mobile
                    direction={isMobile ? "column-reverse" : "row"}
                    alignItems={"center"}
                    spacing={2}
               >
                    <Stack
                    >
                         <Reveal delay={0}>
                              <h1
                                   style={heaingStyle}
                              >
                                   Digital Solutions That
                                   Drive Results
                              </h1>
                         </Reveal>
                         <Space />
                         <Reveal delay={0.3}>
                              <p
                                   style={{
                                        textAlign: "justify",
                                        fontWeight: "500",
                                        fontSize: "1.2rem",
                                   }}
                              >
                                   We specialize in crafting innovative digital solutions from stunning websites to powerful mobile apps that empower businesses to thrive in a competitive landscape. Whether you’re looking to build, scale, or enhance your online presence, we’re here to transform your ideas into reality with precision, creativity, and cutting-edge technology
                              </p>
                         </Reveal>
                         <Reveal delay={0.5}>
                              <Space />
                              <Button
                                   variant="outlined"
                                   size="lg"
                                   color="primary"
                                   aria-label="Explore Bahamas Islands"
                                   sx={{
                                        ml: 'auto',
                                        alignSelf: 'center',
                                        fontWeight: 600,
                                        borderRadius: "0px",
                                        backgroundColor: "var(--brand-color)",
                                        color: "var(--brand-color-secondary)",
                                        transition: "all 0.6s ease",
                                        borderColor: "var(--brand-color)",
                                        borderWidth: 2,
                                        "&:hover": {
                                             backgroundColor: "var(--brand-color-secondary)",
                                             color: "var(--brand-color)",
                                             borderColor: "var(--brand-color)",
                                        }
                                   }}
                                   endDecorator={
                                        <FaArrowRight />
                                   }
                              >
                                   EXPLORE NOW
                              </Button>
                         </Reveal>
                    </Stack>
                    <Space />
                    <RevealMoveUp
                         delay={0.5}
                    >
                         <img src="hero_img.png" style={{
                              width: "400px",
                              zIndex: "1!important",
                         }} ></img>
                    </RevealMoveUp>
               </Stack>
          </Container>
          <Reveal delay={1} width="100%" >
               <Space />
               <Logos duration={0.4} delay={1} />
          </Reveal>
          <Container >
               <Reveal delay={2} width="100%" >
                    <Space />
                    <h2 style={{
                         fontSize: "2rem",
                         textAlign: "center",
                    }} >
                         Our Service
                    </h2>
                    <p
                         style={{
                              textAlign: "center",
                              fontSize: "2rem",
                              fontWeight: "500",
                              lineHeight: "1.5",
                         }}
                    >
                         “Explore our comprehensive range of professional services”
                    </p>
                    <Space />
               </Reveal>
          </Container>
          <RevealMoveUp >
               <Container >
                    <Stack
                         direction="row"
                         justifyContent="space-between"
                         spacing={2}
                         sx={{
                              width: "100%",
                         }}
                    >
                         <Stack
                              direction="column"
                              justifyContent="center"
                              spacing={2}
                              sx={{ flexGrow: 1 }}
                         >
                              <Box sx={{ flexGrow: 1 }}>
                                   <Card
                                        orientation="vertical" size="lg" variant="soft"
                                        sx={{
                                             height: "100%", width: "100%", borderRadius: "0px", padding: "0px", transition: "all 0.6s ease", cursor: "pointer", pb: 2,
                                        }}
                                   >
                                        <AspectRatio minHeight="120px" sx={{ pt: 2, px: 2, height: "100%", width: "100%" }}>
                                             <img
                                                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                                                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                                  loading="lazy"
                                                  alt=""
                                             />
                                        </AspectRatio>
                                        <Box sx={{ px: 3 }}>
                                             <h3
                                                  style={{
                                                       fontSize: "x-large",
                                                       textAlign: "center",
                                                       cursor: "pointer",
                                                  }}
                                             >Our Service</h3>
                                             <Typography textAlign={"center"} level="body-sm" sx={{
                                                  cursor: "pointer",
                                             }} >
                                                  Delivering tailored digital solutions to drive
                                                  your business growth.
                                             </Typography>
                                        </Box>
                                   </Card>
                              </Box>
                              <Box sx={{ flexGrow: 1 }}>
                                   <Card
                                        orientation="vertical" size="lg" variant="soft"
                                        sx={{
                                             height: "100%", width: "100%", borderRadius: "0px", padding: "0px", transition: "all 0.6s ease", cursor: "pointer", pb: 2,
                                        }}
                                   >
                                        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ pt: 2, px: 2, }}>
                                             <img
                                                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                                                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                                  loading="lazy"
                                                  alt=""
                                             />
                                        </AspectRatio>
                                        <Box sx={{ px: 3 }}>
                                             <h3
                                                  style={{
                                                       fontSize: "x-large",
                                                       textAlign: "center",
                                                       cursor: "pointer",
                                                  }}
                                             >Our Service</h3>
                                             <Typography textAlign={"center"} level="body-sm" sx={{
                                                  cursor: "pointer",
                                             }} >
                                                  Delivering tailored digital solutions to drive
                                                  your business growth.
                                             </Typography>
                                        </Box>
                                   </Card>
                              </Box>
                         </Stack>
                         <Stack
                              direction="column"
                              justifyContent="center"
                              spacing={2}
                              sx={{ flexGrow: 1 }}
                         >
                              <Box sx={{ flexGrow: .7 }} >
                                   <Card
                                        orientation="vertical" size="lg" variant="soft"
                                        sx={{
                                             height: "100%", width: "100%", borderRadius: "0px", padding: "0px", transition: "all 0.6s ease", cursor: "pointer", pb: 2,
                                        }}
                                   >
                                        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ pt: 2, px: 2, }}>
                                             <img
                                                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                                                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                                  loading="lazy"
                                                  alt=""
                                             />
                                        </AspectRatio>
                                        <Box sx={{ px: 3 }}>
                                             <h3
                                                  style={{
                                                       fontSize: "x-large",
                                                       textAlign: "center",
                                                       cursor: "pointer",
                                                  }}
                                             >Our Service</h3>
                                             <Typography textAlign={"center"} level="body-sm" sx={{
                                                  cursor: "pointer",
                                             }} >
                                                  Delivering tailored digital solutions to drive
                                                  your business growth.
                                             </Typography>
                                        </Box>
                                   </Card>
                              </Box>
                              <Box sx={{ flexGrow: 1 }} >
                                   <Card
                                        orientation="vertical"
                                        size="lg"
                                        variant="soft"
                                        sx={{
                                             height: "100%",
                                             width: "100%",
                                             borderRadius: "0px",
                                             padding: "0px",
                                             transition: "all 0.6s ease",
                                             cursor: "pointer",
                                             backgroundColor: "var(--brand-color)",
                                             pb: 2,
                                        }}
                                   >
                                        <AspectRatio minHeight="120px" maxHeight="200px"
                                             sx={{
                                                  pt: 2,
                                                  px: 2,
                                             }}
                                        >
                                             <img
                                                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                                                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                                  loading="lazy"
                                                  alt=""
                                             />
                                        </AspectRatio>
                                        <Box
                                             sx={{
                                                  px: 3
                                             }}
                                        >
                                             <h3
                                                  style={{
                                                       fontSize: "x-large",
                                                       textAlign: "center",
                                                       cursor: "pointer",
                                                       color: "var(--brand-color-secondary)!important",
                                                  }}
                                             >Our Service</h3>
                                             <Typography textAlign={"center"} level="body-sm" sx={{
                                                  cursor: "pointer",
                                                  color: "var(--brand-color-secondary)!important",
                                             }} >
                                                  Delivering tailored digital solutions to drive
                                                  your business growth.
                                             </Typography>
                                        </Box>
                                   </Card>
                              </Box>
                              <Box sx={{ flexGrow: .7 }} >
                                   <Card
                                        orientation="vertical" size="lg" variant="soft"
                                        sx={{
                                             height: "100%", width: "100%", borderRadius: "0px", padding: "0px", transition: "all 0.6s ease", cursor: "pointer", pb: 2,
                                        }}
                                   >
                                        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ pt: 2, px: 2, }}>
                                             <img
                                                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                                                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                                  loading="lazy"
                                                  alt=""
                                             />
                                        </AspectRatio>
                                        <Box sx={{ px: 3 }}>
                                             <h3
                                                  style={{
                                                       fontSize: "x-large",
                                                       textAlign: "center",
                                                       cursor: "pointer",
                                                  }}
                                             >Our Service</h3>
                                             <Typography textAlign={"center"} level="body-sm" sx={{
                                                  cursor: "pointer",
                                             }} >
                                                  Delivering tailored digital solutions to drive
                                                  your business growth.
                                             </Typography>
                                        </Box>
                                   </Card>
                              </Box>
                         </Stack>
                         <Stack
                              direction="column"
                              justifyContent="center"
                              spacing={2}
                              sx={{ flexGrow: 1 }}
                         >
                              <Box sx={{ flexGrow: 1 }}>
                                   <Card
                                        orientation="vertical" size="lg" variant="soft"
                                        sx={{
                                             height: "100%", width: "100%", borderRadius: "0px", padding: "0px", transition: "all 0.6s ease", cursor: "pointer", pb: 2,
                                        }}
                                   >
                                        <AspectRatio minHeight="120px" maxHeight="128px" sx={{ pt: 2, px: 2, }}>
                                             <img
                                                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                                                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                                  loading="lazy"
                                                  alt=""
                                             />
                                        </AspectRatio>
                                        <Box sx={{ px: 3 }}>
                                             <h3
                                                  style={{
                                                       fontSize: "x-large",
                                                       textAlign: "center",
                                                       cursor: "pointer",
                                                  }}
                                             >Our Service</h3>
                                             <Typography textAlign={"center"} level="body-sm" sx={{
                                                  cursor: "pointer",
                                             }} >
                                                  Delivering tailored digital solutions to drive
                                                  your business growth.
                                             </Typography>
                                        </Box>
                                   </Card>
                              </Box>
                              <Box sx={{ flexGrow: 1 }}>
                                   <Card
                                        orientation="vertical" size="lg" variant="soft"
                                        sx={{
                                             height: "100%", width: "100%", borderRadius: "0px", padding: "0px", transition: "all 0.6s ease", cursor: "pointer", pb: 2,
                                        }}
                                   >
                                        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ pt: 2, px: 2, }}>
                                             <img
                                                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                                                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                                  loading="lazy"
                                                  alt=""
                                             />
                                        </AspectRatio>
                                        <Box sx={{ px: 3 }}>
                                             <h3
                                                  style={{
                                                       fontSize: "x-large",
                                                       textAlign: "center",
                                                       cursor: "pointer",
                                                  }}
                                             >Our Service</h3>
                                             <Typography textAlign={"center"} level="body-sm" sx={{
                                                  cursor: "pointer",
                                             }} >
                                                  Delivering tailored digital solutions to drive
                                                  your business growth.
                                             </Typography>
                                        </Box>
                                   </Card>
                              </Box>
                         </Stack>
                    </Stack>
               </Container>
               <Space />
          </RevealMoveUp >
     </>
};
export default Home;
