import { motion } from "framer-motion";

const variants = {
  "slide-left": { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  "slide-right": { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  "fade-up": { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  "fade-scale": { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
};

export default function AnimatedSection({ children, animation = "fade-up" }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={variants[animation]}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}
