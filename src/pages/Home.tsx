import { Link } from 'react-router-dom';
import { ArrowRight, Database, Layers, Network } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container py-20">
        <div className="text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {personalInfo.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn-primary inline-flex items-center justify-center">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Backend Development */}
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Network className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
              <p className="text-gray-600">
                Building scalable and robust backend services with C# and ASP.NET Web API, 
                microservices architecture, and RESTful APIs.
              </p>
            </div>

            {/* Mobile Development */}
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <Layers className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
              <p className="text-gray-600">
                Creating responsive and interactive user interfaces with React.js and TypeScript, 
                following modern frontend best practices and design principles.
              </p>
            </div>

            {/* Database Design */}
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <Database className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Database Design</h3>
              <p className="text-gray-600">
                Designing efficient database schemas and optimizing queries 
                for MySQL, MongoDB, and KQL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-16">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
