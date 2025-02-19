import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "motion/react"
import { del } from "motion/react-client";
const RevealMoveUp = ({ children, delay = 0, ...props }) => {
     const ref = useRef(null);
     const isInView = useInView(ref, {
          once: true,
          amount: 0.5,  // Element needs to be 50% visible
          margin: "0px 0px -100px 0px"  // Negative margin to trigger slightly before coming into view
     });
     const mainControls = useAnimation();
     useEffect(() => {
          console.log(isInView);
          if (isInView) {
               mainControls.start("visible");
          }
     }, [isInView, mainControls]);
     return <div ref={ref} style={{}} {...props}>
          <motion.div
               variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
               }}
               initial="hidden"
               animate={mainControls}
               transition={{ duration: 0.8, delay: delay, ease: "easeInOut" }}
          >{children}</motion.div>
     </div>;
};
export default RevealMoveUp;