import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import profileImg from "../assets/profile.jpg";

export default function Home() {
  // Magnetic hover for image
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <AnimatedSection animation="fade-up">
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center
                   text-center px-6 bg-beige transition-colors"
      >
        {/* PROFILE IMAGE */}
        <motion.div
          className="mb-8 relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden
                       shadow-2xl ring-4 ring-white cursor-pointer"
          >
            <img
              src={profileImg}
              alt="Micah Avrill Bobis"
              className="w-full h-full object-cover grayscale-[10%]
                         hover:grayscale-0 transition duration-500"
            />
          </motion.div>

          {/* breathing glow */}
          <motion.div
            className="absolute -z-10 -top-2 w-40 h-40 md:w-48 md:h-48
                       rounded-full bg-accentLight blur-xl opacity-70"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* NAME WITH FADE-UP */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m Micah Avrill Bobis
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          className="max-w-3xl text-lg text-gray-700 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
         
  I’m a 3rd-year BSIT student passionate about crafting dynamic and scalable web applications 
  using modern web technologies and frameworks. I focus on delivering real-world solutions
  that enhance user experiences, optimize performance, and maintain clean, maintainable code. 
  I thrive on turning ideas into responsive, user-friendly interfaces that not only work flawlessly 
  but also leave a lasting impact for clients and end-users.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-accent text-white rounded-full shadow"
          >
            Contact Me
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-graySoft rounded-full"
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          className="flex gap-6 text-2xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a whileHover={{ y: -6, scale: 1.2 }} href="#">
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.a whileHover={{ y: -6, scale: 1.2 }} href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>
        </motion.div>
      </section>
    </AnimatedSection>
  );
}
