import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faTools } from "@fortawesome/free-solid-svg-icons";
import AnimatedSection from "./AnimatedSection";

const skillSections = [
  { icon: faCode, title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js", "Vite", "Tailwind CSS", "Bootstrap"] },
  { icon: faDatabase, title: "Backend", skills: ["Node.js", "Express.js", "Spring Boot", "PHP", "ASP.NET"] },
  { icon: faTools, title: "Database & Tools", skills: ["MySQL", "MongoDB", "Git"] },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#fdfaf5] px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 border-b-2 border-gray-300 pb-4">Skills</h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {skillSections.map((section, i) => (
          <AnimatedSection key={i} animation={i % 2 === 0 ? "slide-left" : "slide-right"}>
            <div className="flex items-start gap-6">
              <div className="text-4xl text-gray-600 mt-1">
                <FontAwesomeIcon icon={section.icon} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-700">{section.title}</h3>
                <ul className="flex flex-wrap gap-3">
                  {section.skills.map((skill, idx) => (
                    <li key={idx} className="px-4 py-2 bg-[#fff3e6] rounded-full font-medium text-gray-800 hover:bg-[#ffe0b2] transition-colors duration-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
