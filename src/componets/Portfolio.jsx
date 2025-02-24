import { AspectRatio, Box, Button, Card, CardContent, Stack, Typography } from "@mui/joy";
import RevealMoveUp from "./RevealMoveUp";
import { chunked } from "./Utils";
import Hover from "./Hover";
const serviceData = [
     {
          img: "",
          title: "Web Development",
          description: "We design and develop custom websites that are tailored to your unique business needs.",
     },
     {
          img: "",
          title: "Web Development",
          description: "We design and develop custom websites that are tailored to your unique business needs.",
     },
     {
          img: "",
          title: "Web Development",
          description: "We design and develop custom websites that are tailored to your unique business needs.",
     },
     {
          img: "",
          title: "Web Development",
          description: "We design and develop custom websites that are tailored to your unique business needs.",
     },
     {
          img: "",
          title: "Web Development",
          description: "We design and develop custom websites that are tailored to your unique business needs.",
     },
     {
          img: "",
          title: "Web Development",
          description: "We design and develop custom websites that are tailored to your unique business needs.",
     },
     {
          img: "",
          title: "Web Development",
          description: "We design and develop custom websites that are tailored to your unique business needs.",
     },
     {
          img: "",
          title: "Web Development",
          description: "We design and develop custom websites that are tailored to your unique business needs.",
     },
     {
          img: "",
          title: "Web Development",
          description: "We design and develop custom websites that are tailored to your unique business needs.",
     },
]
const Portfolio = () => {
     return <RevealMoveUp>
          <Stack
               direction="column"
               gap={3}
               justifyContent="center"
          >
               {
                    chunked(serviceData, 3).map((data, i) => {
                         return <Stack
                              key={"serviceRow" + i}
                              direction="row"
                              gap={3}
                              justifyContent="center"
                         >
                              {
                                   data.map((data, i) => (
                                        <Hover
                                             key={"service" + i}
                                        >
                                             <Card
                                                  orientation="vertical"
                                                  size="lg"
                                                  variant="soft"
                                                  sx={{
                                                       maxWidth: "400px",
                                                       borderRadius: "0px",
                                                       padding: "0px",
                                                       transition: "all 0.6s ease",
                                                       cursor: "pointer",
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
                                                            }}
                                                       >{data.title}</h3>
                                                       <Typography textAlign={"center"} level="body-sm" sx={{
                                                            cursor: "pointer",
                                                       }} >
                                                            {data.description}
                                                       </Typography>
                                                  </Box>
                                                  <CardContent orientation="horizontal">
                                                       <Button
                                                            variant="outlined"
                                                            size="lg"
                                                            color="primary"
                                                            aria-label="Explore Bahamas Islands"
                                                            sx={{
                                                                 width: "100%",
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
                                                                      borderColor: "var(--brand-color-secondary)",
                                                                      fontWeight: 900,
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
                    })
               }
          </Stack>
     </RevealMoveUp>;
};

export default Portfolio;