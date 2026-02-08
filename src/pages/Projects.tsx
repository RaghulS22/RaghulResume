import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/resumeData';

const Projects = () => {
  return (
    <div className="section-container">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-gray-600 mb-8">
        Here are some of my recent projects showcasing my skills in Java Spring Boot and Android development.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="card group hover:scale-105 transition-transform duration-300 fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image Placeholder */}
            <div className="bg-gradient-to-br from-primary to-secondary h-48 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-6xl font-bold opacity-20">
                {project.title.charAt(0)}
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Code</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-12 text-center card bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
        <p className="text-gray-600 mb-6">
          Check out my GitHub profile for more projects and open-source contributions.
        </p>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center"
        >
          <Github className="mr-2 h-5 w-5" />
          Visit My GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
