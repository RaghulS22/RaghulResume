import { PersonalInfo, Experience, Project, Skill, Education } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Raghul S',
  title: 'Full Stack Developer | .NET WinForm & ASP.NET web API | React TS',
  bio: 'I am a Full Stack Developer with 3+ years of experience in building scalable desktop and web applications using .NET technologies and modern front-end frameworks. I specialize in developing Windows-based desktop applications using WinForms and building RESTful APIs using ASP.NET Core Web API. I also create responsive user interfaces using React.js with TypeScript. I have hands-on experience working with SQL Server for data management, writing optimized queries, and troubleshooting real-time production issues.',
  contact: {
    email: 'raghulsekar99@gmail.com',
    phone: '+91 8110940104',
    location: 'Electronic city phase-2, Bengaluru, Karnataka',
    linkedin: 'https://www.linkedin.com/in/raghul24',
    github: 'https://github.com/RaghulS22',
    website: 'http://localhost:4173/about'
  }
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Developer(C# .NET WinForms & ASP.NET Web API)',
    company: 'Biblioso Technologies Pvt. Ltd.',
    period: 'April 2023 - Present',
    description: [
      'Developed and maintained microservices architecture using Spring Boot, Spring Cloud, and Docker',
      'Designed and implemented RESTful APIs serving 1M+ daily requests with 99.9% uptime',
      'Led migration from monolithic architecture to microservices, improving scalability by 300%',
      'Implemented OAuth2 and JWT-based authentication and authorization systems'
    ],
    technologies: ['C#', '.NET Core', 'C# .NET WinForms', 'ASP.NET Web API', 'SQL', 'React-TS']
  },
  {
    id: 2,
    title: 'DotNet Developer(C# .NET WinForms)',
    company: 'Axxonet Technologies Pvt. Ltd.',
    period: 'April 2021 - August 2022',
    description: [
      'Built native Android applications using Kotlin and Java with MVVM architecture',
      'Integrated RESTful APIs and implemented offline-first functionality using Room database',
      'Implemented push notifications using Firebase Cloud Messaging',
      'Published 3 apps on Google Play Store with 50K+ combined downloads'
    ],
    technologies: ['Android', 'Kotlin', 'Java', 'Retrofit', 'Room', 'Firebase', 'MVVM']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Microservices Platform',
    description: 'Built a scalable e-commerce platform using Spring Boot microservices architecture with service discovery, API gateway, and distributed tracing.',
    technologies: ['ASP.Net web API', 'React-TS', 'SQL server'],
    github: 'https://github.com/yourusername/ecommerce-platform'
  }
];

export const skills: Skill[] = [
  {
    category: 'Backend Development',
    items: ['C#', '.NET Core', 'ASP.NET Web API', 'Entity Framework', 'SQL Server',]
  },
  {
    category: 'Frontend Development',
    items: ['React.ts', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
  },
  {
    category: 'Databases',
    items: ['SQL', 'KQL']
  },
  {
    category: 'DevOps & Tools',
    items: ['Azure', 'Github',]
  },
  {
    category: 'Architecture & Design',
    items: ['Microservices', 'RESTful APIs', 'Design Patterns', 'Clean Architecture', 'TDD', 'Agile/Scrum']
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science Engineering',
    institution: 'SKP Engineering College, Tamil Nadu',
    period: '2019 - 2020',
    description: 'Graduated with honors. Relevant coursework: Data Structures, Algorithms, Software Engineering'
  }
];
