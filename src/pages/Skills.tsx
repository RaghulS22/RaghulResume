import { CheckCircle } from 'lucide-react';
import { skills } from '../data/resumeData';

const Skills = () => {
  return (
    <div className="section-container">
      <h1 className="text-4xl font-bold mb-4">Skills & Technologies</h1>
      <p className="text-gray-600 mb-8">
        A comprehensive overview of my technical skills and expertise across various domains.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillCategory, index) => (
          <div 
            key={index} 
            className="card fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              {skillCategory.category}
            </h2>
            <div className="space-y-2">
              {skillCategory.items.map((skill, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skill Proficiency */}
      <div className="mt-12 card">
        <h2 className="text-2xl font-bold mb-6">Proficiency Levels</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">Java & Spring Boot</span>
              <span className="text-gray-600">Expert</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-primary h-3 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">Android Development</span>
              <span className="text-gray-600">Advanced</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-primary h-3 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">Microservices Architecture</span>
              <span className="text-gray-600">Advanced</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-primary h-3 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">Database Design & Optimization</span>
              <span className="text-gray-600">Advanced</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-primary h-3 rounded-full" style={{ width: '88%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">DevOps & Cloud</span>
              <span className="text-gray-600">Intermediate</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-primary h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-12 card bg-gradient-to-r from-primary to-secondary text-white">
        <h2 className="text-2xl font-bold mb-4">Certifications & Learning</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Oracle Certified Professional</h3>
            <p className="text-sm opacity-90">Java SE Developer</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 className="font-semibold mb-1">AWS Certified</h3>
            <p className="text-sm opacity-90">Solutions Architect Associate</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Google Associate</h3>
            <p className="text-sm opacity-90">Android Developer</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Spring Professional</h3>
            <p className="text-sm opacity-90">Certification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
