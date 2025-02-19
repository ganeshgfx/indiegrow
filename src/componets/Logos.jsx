import { Container, Box } from "@mui/joy";
import RevealRotate from "./RevealRotate";
import PropTypes from 'prop-types';
import { randomFloat } from "./Utils";
import Space from "./Space";
const Logos = ({ duration = 0.5, delay = 0 }) => {
     const logos = [
          "3d.png",
          "akshar.png",
          "fr.png",
          "hul.png",
          "hzc.png",
          "sc_dnhdd.png",
          "vijay.png"
     ];
     return <>
          <Container>
               <h2 style={{
                    textAlign: "center",
                    fontSize: "2rem",
               }} >
                    Our Valued Connections
               </h2>
               <Space />
          </Container>
          <Box sx={{
               width: "100%",
               backgroundColor: "var(--brand-color)",
          }}
          >
               <Container
                    sx={{
                         display: "flex",
                         flexWrap: "wrap",
                         justifyContent: "center",
                         zIndex: 10,
                    }}
               >
                    <Box
                         sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              justifyContent: "center",
                         }}
                    >
                         {
                              logos.map((logo, i) => <RevealRotate
                                   key={"clientLogo" + i}
                                   duration={duration}
                                   delay={delay + randomFloat(0, 1)}
                              >
                                   <Box
                                        sx={{
                                             m: 3,
                                             filter: "invert(1);",
                                        }}
                                   >
                                        <img src={"clientLogos/" + logo} style={{
                                             maxHeight: "64px",
                                        }} ></img>
                                   </Box>
                              </RevealRotate>
                              )
                         }
                    </Box>
               </Container >
          </Box >
     </>
}
Logos.propTypes = {
     duration: PropTypes.number,
     delay: PropTypes.number,
};
export default Logos;