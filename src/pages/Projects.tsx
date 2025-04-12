import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">プロジェクト一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects; 