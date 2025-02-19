import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "motion/react"
import { del } from "motion/react-client";
const RevealRotate = ({ children, duration = 0.8, delay = 0, ...props }) => {
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true });
     const mainControls = useAnimation();
     useEffect(() => {
          if (isInView) {
               mainControls.start("visible");
          }
     }, [isInView, mainControls]);
     return <div ref={ref} style={{
     }} {...props}>
          <motion.div
               style={{
                    transformOrigin: "left", // Added transform origin
               }}
               variants={{
                    hidden: {
                         //opacity: 0,
                         scaleX: 0,
                         //x: -100,
                    },
                    visible: {
                         //opacity: 1,
                         scaleX: 1,
                         //x: 0,
                    },
               }}
               initial="hidden"
               animate={mainControls}
               transition={{ duration: duration, delay: delay, ease: "easeInOut" }}
          >{children}</motion.div>
     </div>;
};
export default RevealRotate;