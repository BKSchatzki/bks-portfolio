import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function AnimatedSection({ children }) {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
          }
        });
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="section"
      ref={sectionRef}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
