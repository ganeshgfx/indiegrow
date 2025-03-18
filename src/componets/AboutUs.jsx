import { Container, Typography, Grid, Card, Box, Divider, useTheme } from "@mui/joy";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DevicesIcon from '@mui/icons-material/Devices';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import CampaignIcon from '@mui/icons-material/Campaign';
import Reveal from "./Reveal";
import RevealMoveUp from "./RevealMoveUp";

const AboutUs = () => {
     const theme = useTheme();

     const services = [
          {
               icon: <DevicesIcon sx={{ fontSize: 40 }} />,
               title: "App & Website Development",
               description: "Custom digital solutions tailored to your business needs"
          },
          {
               icon: <BrandingWatermarkIcon sx={{ fontSize: 40 }} />,
               title: "Branding & Advertisement",
               description: "Strategic brand development and targeted advertising campaigns"
          },
          {
               icon: <CampaignIcon sx={{ fontSize: 40 }} />,
               title: "Digital Marketing & Creative Media",
               description: "Comprehensive digital marketing strategies and creative content"
          },
          {
               icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
               title: "Online Presence Optimization",
               description: "Enhanced visibility and engagement across digital platforms"
          }
     ];

     return (
          <Container sx={{
               py: { xs: 4, sm: 6, md: 8 },
               px: { xs: 2, sm: 3, md: 4 }
          }}>
               {/* Hero Section */}
               <Reveal width={"100%"} delay={0}>
                    <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
                         <Typography
                              level="h1"
                              fontSize={{ xs: "xl2", sm: "xl3", md: "xl4" }}
                              mb={2}
                         >
                              About IndieGrow™
                         </Typography>
                         <Typography
                              level="body1"
                              fontSize={{ xs: "md", sm: "lg" }}
                              mb={4}
                         >
                              Transforming Businesses, Catalyzing Growth
                         </Typography>
                         <Divider />
                    </Box>
               </Reveal>

               {/* Mission Statement */}
               <Reveal delay={0.3}>
                    <Box mb={{ xs: 4, sm: 6, md: 8 }} textAlign="center">
                         <Typography
                              level="h2"
                              fontSize={{ xs: "xl", sm: "xl2" }}
                              mb={2}
                         >
                              Our Mission
                         </Typography>
                         <Typography
                              level="body1"
                              fontSize={{ xs: "md", sm: "lg" }}
                         >
                              At IndieGrow, we're dedicated to transforming businesses through innovative digital solutions.
                              We combine creativity with strategic thinking to deliver exceptional results that drive growth
                              and success in the digital landscape.
                         </Typography>
                    </Box>
               </Reveal>

               {/* Services Grid */}
               <RevealMoveUp delay={0.5}>
                    <Grid
                         container
                         spacing={{ xs: 2, sm: 3, md: 4 }}
                         mb={{ xs: 4, sm: 5, md: 6 }}
                    >
                         {services.map((service, index) => (
                              <Grid key={index} xs={12} sm={6} md={3}>
                                   <Card variant="outlined" sx={{
                                        height: '100%',
                                        textAlign: 'center',
                                        p: { xs: 2, sm: 3 }
                                   }}>
                                        <Box mb={{ xs: 1, sm: 2 }}>
                                             {service.icon}
                                        </Box>
                                        <Typography
                                             level="h3"
                                             fontSize={{ xs: "md", sm: "lg" }}
                                             mb={1}
                                        >
                                             {service.title}
                                        </Typography>
                                        <Typography
                                             level="body2"
                                             fontSize={{ xs: "sm", sm: "md" }}
                                        >
                                             {service.description}
                                        </Typography>
                                   </Card>
                              </Grid>
                         ))}
                    </Grid>
               </RevealMoveUp>

               {/* Value Proposition */}
               <Reveal delay={0.7}>
                    <Box textAlign="center">
                         <Typography
                              level="h2"
                              fontSize={{ xs: "xl", sm: "xl2" }}
                              mb={2}
                         >
                              Why Choose IndieGrow
                         </Typography>
                         <Typography
                              level="body1"
                              fontSize={{ xs: "md", sm: "lg" }}
                         >
                              We're not just a social media agency – we're your partners in digital transformation.
                              Our comprehensive approach combines technical expertise with creative innovation to
                              deliver solutions that drive real business results. From app development to digital
                              marketing, we provide end-to-end services that help your business thrive in the
                              digital age.
                         </Typography>
                    </Box>
               </Reveal>
          </Container>
     );
};

export default AboutUs;