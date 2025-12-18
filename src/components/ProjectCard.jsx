import React from "react";

const ProjectCard = React.memo(({ title, desc, tech, github, live, img }) => (
  <div className="bg-beige rounded-xl shadow-md p-5 hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 border border-graySoft">
    
    <div className="h-32 mb-4 flex items-center justify-center rounded-xl overflow-hidden bg-gray-200">
      {img && (
        <img src={img} alt={title} className="w-full h-full object-cover" />
      )}
    </div>

    <h3 className="font-bold text-lg text-gray-800">{title}</h3>
    <p className="text-sm text-gray-700 mb-2">{desc}</p>
    <p className="text-xs text-gray-500 mb-4">{tech}</p>

    <div className="flex gap-4 text-accent text-sm font-medium">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Live
        </a>
      )}
    </div>
  </div>
));

export default ProjectCard;
