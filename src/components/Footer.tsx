import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: `mailto:${personalInfo.contact.email}`, label: 'Email' },
    { icon: Github, href: personalInfo.contact.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.contact.linkedin, label: 'LinkedIn' },
    { icon: Globe, href: personalInfo.contact.website, label: 'Website' }
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                  aria-label={link.label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
            <p className="mt-1">Built with React & TypeScript</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
