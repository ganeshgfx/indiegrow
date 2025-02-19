import { Container, Stack, Box, Card, Typography, AspectRatio, CardContent, Button } from "@mui/joy";
import Reveal from "./Reveal";
import RevealMoveUp from "./RevealMoveUp";
import Logos from "./Logos";
import { randomFloat } from "./Utils";
import Space from "./Space";
import { FaArrowRight } from "react-icons/fa";
import Hover from "./Hover";
const Home = () => {
     const heaingStyle = {
          fontSize: "3rem",
          fontWeight: "900",
          color: "var(--brand-color)",
     }
     return <>
          <Space />
          <Container>
               <Stack direction="row" alignItems={"center"} spacing={2} >
                    <Space />
                    <Stack>
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
          <RevealMoveUp >
               <Container>
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
                    <Stack
                         direction="row"
                         justifyContent="center"
                         spacing={2}
                    >
                         {
                              [
                                   {
                                        title: "Web Development",
                                        description: "We design and develop custom websites that are tailored to your unique business needs.",
                                   }
                              ].map((data, i) => (
                                   <Hover
                                        key={"service" + i}
                                   >
                                        <Card
                                             orientation="vertical"
                                             size="lg"
                                             variant="soft"
                                             sx={{
                                                  maxWidth: "512px",
                                                  borderRadius: "0px",
                                             }}
                                        >
                                             <div>
                                                  <Typography level="title-lg">{data.title}</Typography>
                                                  <Typography level="body-sm">
                                                       {data.description}
                                                  </Typography>
                                             </div>
                                             <AspectRatio minHeight="120px" maxHeight="200px">
                                                  <img
                                                       src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                                                       srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                                       loading="lazy"
                                                       alt=""
                                                  />
                                             </AspectRatio>
                                             <CardContent orientation="horizontal">
                                                  <div>
                                                       <Typography level="body-xs">Total price:</Typography>
                                                       <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>$2,900</Typography>
                                                  </div>
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
                                                  >
                                                       Explore
                                                  </Button>
                                             </CardContent>
                                        </Card>
                                   </Hover>
                              ))
                         }
                    </Stack>
               </Container>
               <Space />
          </RevealMoveUp >
     </>
};

export default Home;