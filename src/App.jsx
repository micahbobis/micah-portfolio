import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-sectionLight text-gray-800">
      <ScrollProgress />
      <Navbar />
      <div className="pt-20">
        <Home />
        <About />
        <Projects />
        <ProjectCard />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
