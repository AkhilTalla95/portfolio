
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Talla Akhil Reddy",
  email: "akhiltalla95@gmail.com",
  phone: "+917569409349",
  linkedin: "https://www.linkedin.com/in/akhiltalla14/",
  github: "https://github.com/akhiltalla95",
  summary: "Dynamic and results-driven Software Developer with hands-on experience in building scalable, high-performance applications using modern web technologies, and robust software engineering practices. Adept at full-stack development, API engineering, database design, version control, with a strong understanding of data structures, algorithms, object-oriented programming, and distributed systems. Seeking a software development role where I can leverage technical depth, creative thinking, and a product-focused approach to contribute to innovative engineering teams.",
  education: [
    {
      institution: "Guru Nanak Institutions Technical Campus",
      location: "Hyderabad, Telangana",
      degree: "B.Tech in Computer Science Cybersecurity",
      period: "Nov 2021 – Aug 2025",
      score: "CGPA: 7.65"
    },
    {
      institution: "Sri Chaitanya Junior Kalasala",
      location: "Hyderabad, Telangana",
      degree: "Intermediate in MPC",
      period: "Jun 2019 – Mar 2021",
      score: "Percentage: 98%"
    },
    {
      institution: "Sri Chaitanya High School",
      location: "Kodad, Telangana",
      degree: "Secondary School Education",
      period: "Mar 2019",
      score: "CGPA: 9.3"
    }
  ],
  projects: [
    {
      title: "COVID-19 Dashboard",
      date: "Oct, 2025",
      description: "Developed a responsive single-page application (SPA) to track and visualize real-time Covid-19 statistics across Indian states and districts.",
      techStack: ["React.js", "Context API", "React Router DOM", "Tailwind CSS", "Recharts", "Fetch API"],
      features: [
        "State-wise filtering and sorting capabilities",
        "Interactive charts using Recharts for trend analysis",
        "Global Dark/Light theme toggle using React Context API",
        "Responsive design for mobile and desktop access"
      ]
    },
    {
      title: "Nxt Trendz – Cart Features",
      date: "May, 2025",
      description: "Developed an interactive shopping cart feature for the Nxt Trendz e-commerce application focusing on state management and user authentication.",
      techStack: ["React.js", "Context API", "React Router", "JavaScript (ES6+)", "HTML5", "CSS3", "React Icons"],
      features: [
        "Protected routes for unauthenticated users",
        "Advanced cart functionalities: increment/decrement, automatic removal",
        "Dynamic total amount and item count calculation",
        "Real-time UI updates with optimized array methods"
      ]
    }
  ],
  skills: [
    {
      name: "Programming & Development",
      skills: ["React JS", "Node.js", "Javascript", "Python", "C", "HTML", "CSS", "Bootstrap"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "Github", "VS Code"]
    },
    {
      name: "Specializations",
      skills: ["Cybersecurity", "Data Structures", "Algorithms", "API Engineering", "Database Design"]
    }
  ]
};
