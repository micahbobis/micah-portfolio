import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";
import portfolioImg from "../assets/IMG_6111.png"; // adjust path depende sa structure mo

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio website showcasing my projects, skills, and experience. Designed with reusable React components and a fully responsive layout.",
    tech: "React.js | Tailwind CSS",
    github: "https://github.com/micahbobis/micah-portfolio.git",
    live: "https://micah-portfolio-three.vercel.app/#contact",
    img: portfolioImg,
  },
  {
    title: "Interactive Dashboard",
    desc: "A dashboard application with dynamic charts, filters, and data visualization. Demonstrates front-end state management and responsive UI design.",
    tech: "Vue.js | Vite | Bootstrap",
    github: "https://github.com/micahbobis/micah-portfolio",
    live: "",
  },
  {
    title: "Todo / Task Tracker",
    desc: "A simple task management app allowing users to add, edit, and complete tasks. Highlights reusable components, client-side validation, and interactive UI.",
    tech: "React.js | Tailwind CSS",
    github: "https://github.com/username/todo-app",
    live: "https://todo-app.vercel.app/",
  },
  {
    title: "Task Management System",
    desc: "A full-stack application for multiple users to create, edit, and track tasks with JWT authentication. Demonstrates RESTful API design, database integration, and responsive UI.",
    tech: "Node.js | Express.js | React.js | MongoDB",
    github: "https://github.com/username/task-management",
    live: "",
  },
  {
    title: "Library / Inventory System",
    desc: "A backend-driven system to manage books or products. Implements CRUD operations, database design, server-side validation, and role management.",
    tech: "PHP | MySQL",
    github: "https://github.com/username/library-system",
    live: "",
  },
  {
    title: "Student Management System",
    desc: "A full-stack application to manage student records, courses, and grades. Demonstrates MVC architecture, REST API development, and backend problem-solving.",
    tech: "Spring Boot | MySQL",
    github: "https://github.com/username/student-management",
    live: "",
  },
  {
    title: "ASP.NET CRUD App",
    desc: "A web application with object-oriented backend logic for managing items or records. Includes authentication, form validation, and server-side error handling.",
    tech: "ASP.NET | MySQL",
    github: "https://github.com/username/aspnet-crud",
    live: "",
  },
  {
    title: "Event Management System",
    desc: "A full-stack application for managing events, registrations, and user roles. Showcases CRUD operations, API integration, and responsive UI.",
    tech: "React.js | Node.js | Express.js | MySQL",
    github: "https://github.com/username/event-management",
    live: "",
  },
  {
    title: "Workout Tracker / HMS Dashboard",
    desc: "A web app for tracking workouts or hospital metrics. Features user authentication, RESTful API endpoints, and data visualization with charts.",
    tech: "React.js | Node.js | MongoDB | Tailwind CSS",
    github: "https://github.com/username/workout-tracker",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-sectionLight">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 border-graySoft pb-4">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <AnimatedSection
            key={i}
            animation={
              i % 3 === 0
                ? "slide-left"
                : i % 3 === 1
                ? "slide-right"
                : "fade-scale"
            }
          >
            <ProjectCard {...p} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
