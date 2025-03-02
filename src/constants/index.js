import {
  agile,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  git,
  figma,
 analysis,
  roadmap,
  sprint,
  marketing,
  ui,
  jira,
  confluence,
  cake,
  cticket,
  uit,
  elite,
  appleStore,
  paradise,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Agile/Scrum",
    icon: agile,
  },
  {
    title: "Roadmap Development",
    icon: roadmap,
  },
  {
    title: "Sprint Planning",
    icon: sprint,
  },
  {
    title: "Digital Marketing",
    icon: marketing,
  },
  {
    title: "UI/UX Design",
    icon: ui,
  },

  {
    title: "Google Tag Manager",
    icon: analysis, 
  },];


const technologies = [
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Confluence",
    icon: confluence,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Associate Tech Product Manager",
    company_name: "Cake by VPBank",
    squad: "CTicket",
    icon: cticket,
    iconBg: "white",
    date: "Febuary 2025 - Present",
    points: [
      "Managed sprint planning and backlog prioritization across development teams",
      "Conducted user research to identify pain points and validate solutions through testing",
      "Collaborated with marketing and engineering teams to ensure cohesive product development",
    ],
  },
  {
    title: "Tech Product Owner Intern",
    company_name: "Cake by VPBank",
    squad: "CTicket",
    icon: cticket,
    iconBg: "white",
    date: "December 2025 - Febuary 2025",
    points: [
      "Served as Product Owner for CTicket, leading ticketing platform in Vietnam",
      "Developed product roadmap, redesigned booking flow UI and homepage for improved UX",
      "Implemented fee collection feature and led sprint planning sessions",
      "Coordinated with development teams to ensure timely feature delivery."
    ],
  },
  {
    title: "Tech Product Owner Intern",
    company_name: "Cake by VPBank",
    squad: "KYC Product Vison",
    icon: cake,
    iconBg: "white",
    date: "June 2024 - December 2024",
    points: [
      "Managed product backlog grooming sessions and authored user stories to enhance customer onboarding and KYC flows",
      "Developed and implemented NFC assistance module to resolve device compatibility issues and improve user experience during ID verification",
      "Collaborated with development team to implement new features and enhancements to KYC portal" ,
    ],
  },{
    title: "Student",
    company_name: "UIT",
    squad: "E-Commerce Major",
    icon: uit,
    iconBg: "white",
    date: "2021 - 2025",
    points: [
      "Gained hands-on experience in market research, user behavior analysis, and digital product strategy through academic projects",
      "Applied Agile methodologies in multiple course projects, demonstrating strong product management fundamentals",
      "Developed technical foundation in web development (ReactJS), database management, and system analysis, enabling effective collaboration with engineering teams"
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Elite Fitness",
    description:
      "Developed AI-powered fitness application using Machine Learning for movement tracking and BMI prediction",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: elite,
    source_code_link: "https://github.com/thienenpi/EliteFitness",
  },
  {
    name: "Apple Store",
    description:
      "My project of IS207.O13 course at UIT, it's a fullstack E-Commerce Website using React, PHP, MySQL,...",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      
    ],
    image: appleStore,
    source_code_link: "https://github.com/buubuu203/apple-store-is207",
  },
  {
    name: "Paradise",
    description:
      "A hotel management application for manager and staff to keep track of their hotel.",
    tags: [
      {
        name: "dart",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "green-text-gradient",
      },
      
    ],
    image: paradise,
    source_code_link: "https://github.com/ManhHoDinh/Paradise_Hotel_Management",
  },
];

export { services, technologies, experiences, testimonials, projects };
