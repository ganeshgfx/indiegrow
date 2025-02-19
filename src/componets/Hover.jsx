import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "motion/react"
import { del } from "motion/react-client";

const Hover = ({ children, ...props }) => {
     return (
          <div {...props}>
               <motion.div
                    whileHover={{
                         scale: 1.05,
                         transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
               >
                    {children}
               </motion.div>
          </div>
     );
};

export default Hover;