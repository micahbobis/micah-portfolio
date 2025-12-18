import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPhp,
  faVuejs,
  faBootstrap,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

const stack = [
  { name: "React.js", icon: faReact },
  { name: "Vue.js", icon: faVuejs },
  { name: "Vite", icon: faCode },
  { name: "Node.js", icon: faNodeJs },
  { name: "Express.js", icon: faCode },
  { name: "Spring Boot", icon: faCode },
  { name: "PHP", icon: faPhp },
  { name: "ASP.NET", icon: faCode },
  { name: "MySQL", icon: faDatabase },
  { name: "MongoDB", icon: faDatabase },
  { name: "HTML5", icon: faCode },
  { name: "CSS3", icon: faCode },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "Tailwind CSS", icon: faCode },
  { name: "JavaScript", icon: faCode },
  { name: "Git", icon: faGitAlt },
];

export default function About() {
  const techVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-beige px-6 relative overflow-hidden">
      <AnimatedSection animation="fade-up">
        <div className="max-w-5xl mx-auto w-full">
          {/* Title */}
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-12 text-center md:text-left relative z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          {/* Main Panel */}
          <div className="relative bg-gradient-to-br from-beige/80 to-accentLight/20 border border-graySoft rounded-3xl p-8 md:p-12 shadow-xl grid md:grid-cols-2 gap-10 z-10">

            {/* LEFT — ABOUT TEXT */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-16 h-1 bg-accent mb-4 rounded-full animate-pulse"></div>

              <motion.p
                className="text-gray-700 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                I’ve been developing systems and web applications since 2022,
                mastering both front-end and back-end technologies. I enjoy
                solving problems, optimizing performance, and creating clean and
                maintainable code.
              </motion.p>

              <motion.p
                className="text-gray-700 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                I am currently seeking opportunities to contribute to projects
                where I can leverage my skills in web development and grow in a
                collaborative environment.
              </motion.p>
            </motion.div>

            {/* RIGHT — TECH STACK */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-lg font-semibold text-gray-800 mb-4 text-center md:text-left">
                Core Tech Stack
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {stack.map((tech, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={techVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="px-4 py-2 text-sm rounded-full border border-graySoft
                               bg-white/90 text-gray-700 shadow-md flex items-center gap-2
                               hover:bg-accentLight hover:text-gray-900 cursor-pointer
                               transition-all duration-300"
                    whileHover={{ scale: 1.15, y: -5, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={tech.icon} className="text-lg text-accent" />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Floating accent circles */}
            <motion.div
              className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-accentLight opacity-30 blur-3xl"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0], opacity: [0.25, 0.35, 0.25] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-accentLight opacity-20 blur-3xl"
              animate={{ scale: [1, 1.1, 1], rotate: [0, -15, 0], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
