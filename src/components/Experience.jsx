import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  const experience = [
    {
      title: "Full-Stack Web Development Projects",
      desc: "Built multiple full-stack web applications integrating front-end, back-end, and databases."
    },
    {
      title: "Debugging & Problem Solving",
      desc: "Focused on debugging complex issues and delivering real-world, scalable solutions."
    },
    {
      title: "UI & Responsiveness",
      desc: "Designed responsive and user-friendly interfaces using modern frameworks and CSS libraries."
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-sectionLight px-6 py-20">
      <AnimatedSection animation="fade-scale">
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Experience
          </h2>

          {/* Timeline Container */}
          <div className="relative border-l-2 border-graySoft pl-8 space-y-10">

            {experience.map((item, i) => (
              <AnimatedSection
                key={i}
                animation={i % 2 === 0 ? "slide-left" : "slide-right"}
              >
                <div className="relative bg-beige border border-graySoft rounded-xl p-6 shadow-sm hover:shadow-md transition">

                  {/* Dot */}
                  <span className="absolute -left-[14px] top-6 w-4 h-4 bg-accent rounded-full border-2 border-white"></span>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}

          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
