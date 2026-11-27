import React from "react";
import { motion } from "framer-motion";

function BlackGlassBox({ children, angle = "23deg", style = {}, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}

      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        borderRadius: 15,
        padding: 16,
        color: "#ffffff",

        background: `
          linear-gradient(
            ${angle},
            rgba(255, 255, 255, 0.26) 0%,
            rgba(10, 10, 12, 0.55) 40%,
            rgba(0, 0, 0, 0.75) 100%
          )
        `,

        backdropFilter: "blur(5px) contrast(105%)",
        WebkitBackdropFilter: "blur(12px) contrast(105%)",

        border: "1px solid rgba(255, 255, 255, 0.12)",

        boxShadow: `
          inset 0 1px 1px 0 rgba(255, 255, 255, 0.22),
          inset 1px 0 1px 0 rgba(255, 255, 255, 0.08),
          inset 0 -16px 32px -10px rgba(0, 0, 0, 0.5),
          0 20px 40px -12px rgba(0, 0, 0, 0.6)
        `,

        ...style, /* CUSTOM STYLING */
      }} {...props}
    >
      { children /* COMPONENTS INSIDE */ }
    </motion.div>
  )
};

export default BlackGlassBox;
