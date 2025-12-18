import React from "react";

const ProjectCard = React.memo(({ title, desc, tech }) => (
  <div className="bg-beige rounded-xl shadow-md p-5 hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 border border-graySoft">
    <div className="h-32 bg-gray-200 mb-4 flex items-center justify-center rounded-xl text-gray-500">Screenshot</div>
    <h3 className="font-bold text-lg text-gray-800">{title}</h3>
    <p className="text-sm text-gray-700 mb-2">{desc}</p>
    <p className="text-xs text-gray-500 mb-2">{tech}</p>
    <div className="flex gap-4 text-accent text-sm">
      <a href="#">GitHub</a>
      <a href="#">Live</a>
    </div>
  </div>
));

export default ProjectCard;
