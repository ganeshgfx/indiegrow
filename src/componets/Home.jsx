import { Button, Container, Stack } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import Reveal from "./Reveal";
import RevealMoveUp from "./RevealMoveUp";
import Logos from "./Logos";
import Space from "./Space";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const heaingStyle = {
    fontSize: "3rem",
    fontWeight: "900",
    color: "var(--brand-color)",
  };
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <>
      <Space />
      <Container>
        <Stack
          //row for desktop and column-reverse for mobile
          direction={isMobile ? "column-reverse" : "row"}
          alignItems={"center"}
          spacing={2}
        >
          <Stack>
            <Reveal delay={0}>
              <h1 style={heaingStyle}>Digital Solutions That Drive Results</h1>
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
                We specialize in crafting innovative digital solutions from
                stunning websites to powerful mobile apps that empower
                businesses to thrive in a competitive landscape. Whether you’re
                looking to build, scale, or enhance your online presence, we’re
                here to transform your ideas into reality with precision,
                creativity, and cutting-edge technology
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
                  ml: "auto",
                  alignSelf: "center",
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
                  },
                }}
                endDecorator={<FaArrowRight />}
              >
                EXPLORE NOW
              </Button>
            </Reveal>
          </Stack>
          <Space />
          <RevealMoveUp delay={0.5}>
            <img
              src="/public/newhero.png"
              className="h-[400px] w-[2000px]"
            ></img>
          </RevealMoveUp>
        </Stack>
      </Container>
      <Reveal delay={1} width="100%">
        <Space />
        <Logos duration={0.4} delay={1} />
      </Reveal>
      <Container>
        <Reveal delay={2} width="100%">
          <Space />
          <h2
            style={{
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
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
      <RevealMoveUp>
        <Container>
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
            ></Stack>
            <section className="text-gray-600 body-font">
              <div className="container px-5  mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                  <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-1/2 relative">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block"
                        src="/public/servicess/webdesign.png"
                      />
                      <span
                        className="bg-brand"
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          color: "white",
                          padding: "5px 10px",
                          fontSize: "25px",
                        }}
                      >
                        Website Design
                      </span>
                    </div>
                    <div className="md:p-2 p-1 w-1/2 relative">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block"
                        src="/public/servicess/brandbuild.png"
                      />
                      <span
                        className="bg-brand"
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          color: "white",
                          padding: "5px 10px",
                          fontSize: "25px",
                        }}
                      >
                        Brand Building
                      </span>
                    </div>
                    <div className="md:p-2 p-1 w-full relative">
                      <img
                        alt="gallery"
                        className="w-full h-full object-cover object-center block"
                        src="/public/servicess/graphicsdesign.png"
                      />
                      <span
                        className="bg-brand"
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          color: "white",
                          padding: "5px 10px",
                          fontSize: "25px",
                        }}
                      >
                        Website Design
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-full relative">
                      <img
                        alt="gallery"
                        className="w-full h-full object-cover object-center block"
                        src="/public/servicess/webdesign.png"
                      />
                      <span
                        className="bg-brand"
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          color: "white",
                          padding: "5px 10px",
                          fontSize: "25px",
                        }}
                      >
                        Graphics Design
                      </span>
                    </div>
                    <div className="md:p-2 p-1 w-1/2 relative">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block"
                        src="/public/servicess/brandbuild.png"
                      />
                      <span
                        className="bg-brand"
                        style={{
                          fontSize: "25px",
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          color: "white",
                          padding: "5px 10px",
                        }}
                      >
                        Digital Marketing
                      </span>
                    </div>
                    <div className="md:p-2 p-1 w-1/2 relative rounded border-amber-500">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block"
                        src="/public/servicess/brandbuild.png"
                      />
                      <span
                        className="bg-brand"
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          color: "white",
                          padding: "5px 10px",
                          fontSize: "25px",
                        }}
                      >
                        Website Design
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Stack>
        </Container>
        <Space />
      </RevealMoveUp>
    </>
  );
};
export default Home;
