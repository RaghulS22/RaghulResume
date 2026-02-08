import { Briefcase } from 'lucide-react';
import { experiences } from '../data/resumeData';

const Experience = () => {
  return (
    <div className="section-container">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-start mb-4">
              <div className="bg-primary p-3 rounded-lg mr-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900">{exp.title}</h2>
                <p className="text-lg text-primary font-medium">{exp.company}</p>
                <p className="text-gray-500">{exp.period}</p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Key Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Visualization */}
      <div className="mt-12 card bg-gradient-to-r from-primary to-secondary text-white">
        <h2 className="text-2xl font-bold mb-4">Career Timeline</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex items-center">
              <div className="w-32 text-sm opacity-90">{exp.period}</div>
              <div className="flex-1 bg-white bg-opacity-20 rounded-full h-2 mx-4">
                <div className="bg-white rounded-full h-2" style={{ width: '80%' }}></div>
              </div>
              <div className="flex-1 text-sm">{exp.company}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
