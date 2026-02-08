import { PersonalInfo, Experience, Project, Skill, Education } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Java Spring Boot & Android Developer',
  bio: 'Passionate full-stack developer with expertise in building scalable backend services using Java Spring Boot and creating robust Android applications. Experienced in designing RESTful APIs, microservices architecture, and mobile app development with modern Android technologies.',
  contact: {
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    website: 'https://yourwebsite.com'
  }
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Java Spring Boot Developer',
    company: 'Tech Company Inc.',
    period: 'Jan 2022 - Present',
    description: [
      'Developed and maintained microservices architecture using Spring Boot, Spring Cloud, and Docker',
      'Designed and implemented RESTful APIs serving 1M+ daily requests with 99.9% uptime',
      'Led migration from monolithic architecture to microservices, improving scalability by 300%',
      'Implemented OAuth2 and JWT-based authentication and authorization systems'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis']
  },
  {
    id: 2,
    title: 'Android Developer',
    company: 'Mobile Solutions Ltd.',
    period: 'Jun 2020 - Dec 2021',
    description: [
      'Built native Android applications using Kotlin and Java with MVVM architecture',
      'Integrated RESTful APIs and implemented offline-first functionality using Room database',
      'Implemented push notifications using Firebase Cloud Messaging',
      'Published 3 apps on Google Play Store with 50K+ combined downloads'
    ],
    technologies: ['Android', 'Kotlin', 'Java', 'Retrofit', 'Room', 'Firebase', 'MVVM']
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Startup Ventures',
    period: 'Jan 2019 - May 2020',
    description: [
      'Developed full-stack applications using Spring Boot backend and Android frontend',
      'Implemented CI/CD pipelines using Jenkins and GitLab CI',
      'Collaborated with cross-functional teams using Agile/Scrum methodologies',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['Java', 'Spring Boot', 'Android', 'MySQL', 'Jenkins', 'Git']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Microservices Platform',
    description: 'Built a scalable e-commerce platform using Spring Boot microservices architecture with service discovery, API gateway, and distributed tracing.',
    technologies: ['Spring Boot', 'Spring Cloud', 'Eureka', 'Zuul', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    github: 'https://github.com/yourusername/ecommerce-platform'
  },
  {
    id: 2,
    title: 'Fitness Tracking Android App',
    description: 'Native Android application for tracking workouts and nutrition with offline support, real-time sync, and beautiful data visualizations.',
    technologies: ['Kotlin', 'Room', 'Retrofit', 'MPAndroidChart', 'Firebase', 'Material Design'],
    github: 'https://github.com/yourusername/fitness-tracker',
    demo: 'https://play.google.com/store/apps/details?id=com.example.fitness'
  },
  {
    id: 3,
    title: 'Real-Time Chat Application',
    description: 'Full-stack chat application with Spring Boot WebSocket backend and Android client supporting real-time messaging, file sharing, and group chats.',
    technologies: ['Spring Boot', 'WebSocket', 'MongoDB', 'Android', 'Kotlin', 'Socket.IO'],
    github: 'https://github.com/yourusername/chat-app'
  },
  {
    id: 4,
    title: 'Task Management REST API',
    description: 'RESTful API for task management with JWT authentication, role-based access control, and comprehensive API documentation using Swagger.',
    technologies: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Swagger', 'JUnit'],
    github: 'https://github.com/yourusername/task-api'
  }
];

export const skills: Skill[] = [
  {
    category: 'Backend Development',
    items: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'JPA', 'Maven', 'Gradle']
  },
  {
    category: 'Mobile Development',
    items: ['Android', 'Kotlin', 'Java', 'Jetpack Compose', 'MVVM', 'Room', 'Retrofit', 'Firebase']
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite']
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'AWS', 'Git', 'Linux']
  },
  {
    category: 'Architecture & Design',
    items: ['Microservices', 'RESTful APIs', 'Design Patterns', 'Clean Architecture', 'TDD', 'Agile/Scrum']
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    period: '2015 - 2019',
    description: 'Graduated with honors. Relevant coursework: Data Structures, Algorithms, Software Engineering, Mobile App Development'
  }
];
