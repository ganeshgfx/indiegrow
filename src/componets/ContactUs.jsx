import Reveal from "./Reveal";

const ContactUs = () => {
     return <>
          {
               Array.from({ length: 100 }).map((_, i) => <Reveal key={i}>
                    <h1>Contact Us</h1>
               </Reveal>)
          }
     </>;
};

export default ContactUs;