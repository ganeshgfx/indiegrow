import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RevealMoveUp = ({ children, delay = 0, ...props }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // ✅ Mobile-friendly: only 10% visible needed
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div ref={ref} {...props}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: delay, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealMoveUp;
