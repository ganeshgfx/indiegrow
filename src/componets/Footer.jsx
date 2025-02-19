import { Stack, Container, Divider, Box, Sheet } from "@mui/joy";
const Footer = () => {
     const textStyle = {
          color: "var(--brand-color-secondary)",
     }
     return <Sheet
          sx={{
               backgroundColor: "var(--brand-color)",
               zIndex: 10,
               paddingTop: 2,
               paddingBottom: 2,
          }}
     >
          <Container>
               <p style={textStyle}>
                    © 2025 IndieGrow™. All rights reserved.
               </p>
               <p style={textStyle}>
                    Privacy Policy | Terms of Use | Cookie Policy
               </p>
          </Container>
     </Sheet>
};
export default Footer;