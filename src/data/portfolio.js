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
    { name: "Postman",          sub: "API Testing",               icon: Send },
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

  projects: [
  {
    type: "AI · Automation",
    name: "AI Lead Generator",
    description:
      "An AI-powered lead generation platform that transforms customer inquiries into qualified leads through conversational AI. The system automates lead qualification, information extraction, reporting, and meeting scheduling while maintaining context-aware conversations.",

    tags: [
      "Python",
      "FastAPI",
      "LangGraph",
      "OpenAI",
      "PostgreSQL",
      "Docker",
      "WhatsApp API",
      "Redis"
    ],

    image: "/projects/ai-assistant cover photo.png",

    extendedDetails: {
      challenge:
        "Building a production-ready multi-agent workflow capable of maintaining long-running conversations across multiple states while dynamically qualifying leads and extracting business-critical information. The system needed to handle context management, retries, reporting, and external integrations without losing conversational continuity.",

      stack: [
        "Python",
        "FastAPI",
        "LangGraph",
        "OpenAI API",
        "PostgreSQL",
        "Docker",
        "WhatsApp Cloud API",
        "Redis"
      ],

      features: [
        "Multi-agent conversational workflow using LangGraph",
        "Automated lead qualification and scoring",
        "Conversation memory and state persistence",
        "Real-time reporting dashboard",
        "WhatsApp business integration",
        "Meeting booking automation",
        "Structured lead extraction"
      ],

      result:
        "Successfully built an intelligent lead generation platform that automates customer engagement and qualification workflows, significantly reducing manual intervention and enabling businesses to manage high volumes of inquiries efficiently."
    }
  },

  {
    type: "AI · Healthcare",
    name: "Nour Doc",
    description:
      "An AI-powered medical documentation assistant that records doctor-patient conversations, transcribes audio, extracts clinically relevant information, and automatically generates structured patient notes while filtering irrelevant discussion.",

    tags: [
      "Python",
      "FastAPI",
      "OpenAI",
      "Whisper",
      "RAG",
      "Vector Database",
      "Docker"
    ],

    image: "/projects/nourdoc.jpg",

    extendedDetails: {
      challenge:
        "Medical conversations are highly unstructured and often contain irrelevant information, interruptions, and context switches. The challenge was designing a system capable of accurately identifying clinically important details while maintaining patient privacy and generating structured medical notes automatically.",

      stack: [
        "FastAPI",
        "Python",
        "OpenAI API",
        "Whisper",
        "ChromaDB",
        "Docker"
      ],

      features: [
        "Audio transcription of consultations",
        "Automatic generation of patient notes",
        "Extraction of symptoms and diagnoses",
        "Filtering of irrelevant conversation",
        "Structured SOAP note generation",
        "Patient history management",
        "Secure storage architecture"
      ],

      result:
        "Created an AI-assisted documentation workflow that reduces administrative burden for healthcare professionals and enables faster, more accurate clinical record keeping."
    }
  },

  {
    type: "AI · SaaS",
    name: "AI CV Maker",
    description:
      "An AI-powered resume builder that generates professional and ATS-friendly resumes based on user experience, skills, and target job roles. The platform enables users to create customized resumes and export them as professionally formatted documents.",

    tags: [
      "React.js",
      "FastAPI",
      "OpenAI",
      "PostgreSQL",
      "PDF Generation"
    ],

    image: "/projects/cv-maker.jpg",

    extendedDetails: {
      challenge:
        "Transforming unstructured user information into professionally formatted resumes while ensuring ATS compatibility and generating high-quality content dynamically for different industries and job roles.",

      stack: [
        "React.js",
        "FastAPI",
        "OpenAI API",
        "PostgreSQL",
        "Python ReportLab"
      ],

      features: [
        "AI-generated professional summaries",
        "ATS-friendly formatting",
        "Dynamic resume templates",
        "Resume customization",
        "PDF export support",
        "Role-specific resume optimization",
        "Cover letter generation"
      ],

      result:
        "Built a complete AI resume generation platform capable of producing professional, print-ready resumes and helping users create personalized job application materials within minutes."
    }
  },

  {
    type: "Android · AI",
    name: "ScaffSmart ERP",
    description:
      "An Android-based ERP system developed for scaffolding businesses, providing inventory management, client management, employee management, and AI-powered inventory counting through computer vision.",

    tags: [
      "Kotlin",
      "Python",
      "Firebase",
      "YOLOv8",
      "Google Colab"
    ],

    image: "/projects/scaffmart.jpg",

    extendedDetails: {
      challenge:
        "Construction companies still rely heavily on manual inventory tracking and paperwork. The challenge was building an end-to-end ERP platform capable of automating scaffolding operations and accurately counting construction materials using computer vision.",

      stack: [
        "Kotlin",
        "Python",
        "Firebase",
        "YOLOv8",
        "Google Colab"
      ],

      features: [
        "Inventory management",
        "Client management",
        "Employee management",
        "Construction material tracking",
        "YOLOv8 object detection",
        "Automated pipe counting",
        "Mobile-first ERP platform"
      ],

      result:
        "Successfully developed an ERP platform that digitizes scaffolding business operations and significantly reduces manual inventory counting through AI-powered object detection."
    }
  },

  {
    type: "Android · Machine Learning",
    name: "Smart Weather",
    description:
      "A machine learning-based mobile application that predicts Air Quality Index (AQI) using weather data and location-based environmental parameters. The system combines live weather APIs with predictive models to generate localized air quality forecasts.",

    tags: [
      "Flutter",
      "Python",
      "XGBoost",
      "OpenWeather API",
      "Firebase"
    ],

    image: "/projects/smartweather.png",

    extendedDetails: {
      challenge:
        "Environmental conditions vary significantly between locations, making AQI prediction difficult. The challenge involved gathering weather data, preprocessing environmental parameters, and training predictive models capable of generating localized AQI forecasts.",

      stack: [
        "Flutter",
        "Python",
        "XGBoost",
        "OpenWeather API",
        "Firebase"
      ],

      features: [
        "Live weather integration",
        "AQI prediction engine",
        "Location-based forecasting",
        "Role-based access system",
        "Environmental analytics",
        "Historical data analysis",
        "Real-time predictions"
      ],

      result:
        "Developed a predictive environmental monitoring system capable of generating location-specific air quality forecasts and helping users make informed health and environmental decisions."
    }
  }
],
  education: {
    degree: "BSSE",
    specialization: "Software Engineering",
    status: "Graduate",
  },

  socials: {
    email: "sallarmirza77@gmail.com",
    github: "https://github.com/sallarmirza",
    linkedin: "https://www.linkedin.com/in/salar-ahmed-mirza77/",
  },
};