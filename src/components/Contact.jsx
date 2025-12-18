import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-sectionDark px-6 py-20 flex items-center"
    >
      <AnimatedSection animation="fade-scale">
        <div className="max-w-5xl mx-auto w-full">

          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Contact
          </h2>

          {/* Contact Card */}
          <div className="bg-beige border border-graySoft rounded-2xl p-10 shadow-sm grid md:grid-cols-2 gap-10">

            {/* Left Info */}
            <AnimatedSection animation="slide-left">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Feel free to reach out if you want to collaborate, discuss a project,
                  or simply connect. I’m always open to new opportunities and learning experiences.
                </p>

                <div className="space-y-4 text-gray-800">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-accent" />
                    <span>micahavrill14@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faPhone} className="text-accent" />
                    <span>+63 970 185 1670</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right CTA */}
            <AnimatedSection animation="slide-right">
              <div className="flex flex-col justify-center items-start h-full">
                <a
                  href="mailto:micahavrill14@gmail.com"
                  className="px-8 py-3 bg-accent text-white rounded-lg font-medium
                             hover:-translate-y-1 hover:shadow-md transition-all"
                >
                  Send Message
                </a>

                <p className="text-sm text-gray-600 mt-4">
                  I usually reply within 24–48 hours.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
