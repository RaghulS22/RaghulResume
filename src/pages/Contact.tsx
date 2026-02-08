import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="section-container">
      <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
      <p className="text-gray-600 mb-8">
        Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                <p className="font-semibold">Thank you for your message!</p>
                <p className="text-sm">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Direct Contact */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-start hover:text-primary transition-colors group"
              >
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="break-all">{personalInfo.contact.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="flex items-start hover:text-primary transition-colors group"
              >
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p>{personalInfo.contact.phone}</p>
                </div>
              </a>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>{personalInfo.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
            <div className="space-y-3">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Github className="h-6 w-6 text-gray-700 mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-gray-500">View my repositories</p>
                </div>
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Linkedin className="h-6 w-6 text-gray-700 mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-gray-500">Connect professionally</p>
                </div>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="card bg-gradient-to-br from-primary to-secondary text-white">
            <h2 className="text-xl font-semibold mb-2">Availability</h2>
            <p className="text-sm opacity-90">
              I'm currently open to new opportunities and freelance projects. 
              Let's discuss how we can work together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
