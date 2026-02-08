import { Download, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo, education } from '../data/resumeData';

const About = () => {
  return (
    <div className="section-container">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-gray-700 leading-relaxed">
              I specialize in developing enterprise-level applications with a focus on 
              clean code, best practices, and scalable architecture. My experience spans 
              across backend development with Spring Boot, mobile development with Android, 
              and various database technologies.
            </p>
          </div>

          {/* Education */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4 last:mb-0">
                <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                {edu.description && (
                  <p className="text-gray-700">{edu.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Interests */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Interests & Hobbies</h2>
            <ul className="grid grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">🚀</span> Open Source Contribution
              </li>
              <li className="flex items-center">
                <span className="mr-2">📚</span> Technical Writing
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎯</span> Problem Solving
              </li>
              <li className="flex items-center">
                <span className="mr-2">🏃</span> Fitness & Running
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a 
                    href={`mailto:${personalInfo.contact.email}`}
                    className="text-gray-800 hover:text-primary break-all"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a 
                    href={`tel:${personalInfo.contact.phone}`}
                    className="text-gray-800 hover:text-primary"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800">{personalInfo.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume */}
          <button className="w-full btn-primary flex items-center justify-center">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </button>

          {/* Quick Stats */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-3">
              <div>
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">20+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-gray-600">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
