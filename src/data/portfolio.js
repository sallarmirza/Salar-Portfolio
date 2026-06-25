import {
  Atom,
  Bot,
  Brain,
  ChartNoAxesColumn,
  Cloud,
  Code2,
  Container,
  Database,
  FolderGit,
  Plug,
  ScanSearch,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";

export const data = {
  name: "Salar Ahmed Mirza",
  shortName: ["SALAR", "AHMED", "MIRZA"], 
  title: "React.js · FastAPI · AI Automation Engineer",
  tagline:
    "A product-focused Developer & AI Automation Engineer from Pakistan, building scalable web systems and intelligent solutions where modern engineering meets real-world impact.",
  location: "Islamabad, Pakistan",
  availability: "Open to Work · Remote / On-site",
  focus: "React.js · FastAPI · AI Systems",
  about: [
  "Salar Ahmed Mirza, a Software Engineer and AI Automation Engineer from Pakistan who enjoys building products. My work spans React.js, FastAPI, Python, and AI orchestration frameworks, with a strong focus on creating scalable systems that solve practical business problems.",
  "I believe in understanding real-world challenges and engineering solutions that are reliable, intuitive, and impactful. I am constantly exploring new technologies in AI and software engineering, driven by a curiosity to learn, build, and create systems that make a meaningful difference."
],
  experienceImage: null,

  skills: [
  { name: "React.js",         sub: "Frontend Development",      icon: Atom },
  { name: "JavaScript",       sub: "ES6+ Development",          icon: Code2 },

  { name: "Python",           sub: "Backend & AI Development",  icon: Code2 },
  { name: "FastAPI",          sub: "API Development",           icon: Zap },
  { name: "REST APIs",        sub: "API Design & Integration",  icon: Plug },

  { name: "AI Automation",    sub: "Agentic Workflows",         icon: Brain },
  { name: "LangGraph",        sub: "AI Orchestration",          icon: Bot },
  { name: "Machine Learning", sub: "Model Development",         icon: ChartNoAxesColumn },
  { name: "LLM Integration",  sub: "OpenAI & AI Systems",       icon: Sparkles },
  { name: "RAG Pipelines",    sub: "Retrieval Systems",         icon: Bot },
  { name: "Computer Vision",  sub: "YOLO & OpenCV",             icon: ScanSearch },

  { name: "SQL",              sub: "Database Management",       icon: Database },
  { name: "Docker",           sub: "Containerization",          icon: Container },
  { name: "AWS",              sub: "Cloud Services",            icon: Cloud },

  { name: "Git & GitHub",     sub: "Version Control",           icon: FolderGit },
  { name: "Postman",          sub: "API Testing",              icon: Send },
],

  experience: [
    {
      company: "M3Hive",
      role: "AI Backend Developer",
      duration: "Nov 2025 – Present",
      description:
        "Worked on RAG pipelines, LLM integrations, and smart chatbot systems for production environments.",
    },
    {
      company: "Micro Merger",
      role: "Software Intern",
      duration: "2025",
      description:
        "Contributed to software development tasks and gained practical industry experience in a professional team environment.",
    },
  ],

  // tags are not yet rendered in Projects.jsx — add them to the component when ready
  projects: [
    {
      type: "Android · AI",
      name: "ScaffSmart ERP",
      description:
        "Android-based ERP for scaffolding businesses with inventory, client & employee management, and YOLOv8 object detection for counting scaffolding pipes.",
      tags: ["Kotlin", "Python", "Firebase", "YOLOv8", "Google Colab"],
      image: null,
    },
    {
      type: "ML · Mobile",
      name: "Emotion Detection App",
      description:
        "CNN-based emotion detection trained on 20,000+ images, integrated into a mobile app that recommends content for mental well-being.",
      tags: ["TensorFlow", "OpenCV", "Flutter", "CNN", "Python"],
      image: null,
    },
    {
      type: "Web · Frontend",
      name: "QuickCart",
      description:
        "Modular frontend e-commerce platform with reusable components, responsive design, and clean UI architecture.",
      tags: ["HTML5", "Bootstrap", "JavaScript"],
      image: null,
    },
    {
      type: "Web · Fullstack",
      name: "Attendance Management System",
      description:
        "Web-based attendance system with user & admin panels, attendance tracking, leave management, and report generation.",
      tags: ["React.js", "Python", "SQL"],
      image: null,
    },
  ],

  education: {
    degree: "BSSE",
    specialization: "Software Engineering",
    status: "Graduate",
  },

  socials: {
    email:"sallarmirza77@gmail.com",
    github: "https://github.com/sallarmirza",
    linkedin: "https://www.linkedin.com/in/salar-ahmed-mirza77/",
  },
}