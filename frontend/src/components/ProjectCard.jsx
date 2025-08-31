import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img 
        src={project.imageUrl || 'https://placehold.co/600x400/333/fff?text=Project'} 
        alt={project.title} 
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/333/fff?text=Image+Error'; }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href="#" className="text-indigo-400 hover:text-indigo-300 font-semibold">
          View Details &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
