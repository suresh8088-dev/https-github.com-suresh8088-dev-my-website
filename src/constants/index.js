
import {
    Code,
    Database,
    Layout,
    Server,
    Settings,
    Terminal,
    Github,
    Linkedin,
    Mail,
    Phone
} from "lucide-react";

export const PERSONAL_DETAILS = {
    name: "Suresh C",
    role: "Java Full Stack Developer",
    email: "sureshcksit@gmail.com",
    phone: "974-239-2763",
    about: "Building futuristic web experiences with robust backend architecture. Specializing in Java, Spring Boot, and modern frontend frameworks.",
    resumeLink: "/assets/Suresh's_resume(Ats Friendly).pdf"
};

export const PROJECTS = [
    {
        title: "Air Quality Prediction",
        description: "A machine learning powered application to predict and visualize air quality levels in real-time. Built with Python and Flask, featuring interactive dashboards.",
        tech: ["Python", "Flask", "ML Models", "Plotly"],
        image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop",
        links: {
            code: null,
            demo: null
        }
    },
    {
        title: "Pet Shop Management",
        description: "Comprehensive management system for pet shops handling inventory, sales, and billing. Optimized for performance and security.",
        tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=1974&auto=format&fit=crop",
        links: {
            code: "https://github.com/suresh8088-dev/pet-shop-management",
            demo: null
        }
    }
];

export const EXPERIENCE = [
    {
        id: 1,
        role: "Java Full Stack Developer Intern",
        company: "Tap Academy",
        period: "2025 - Present",
        description: "Building full-stack applications using Core Java, Spring Boot, Hibernate, and MySQL. Integrating REST APIs with React & Tailwind. Collaborating in Agile sprints and working on an Online Food Delivery System capstone.",
        technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "React", "Tailwind"]
    },
    {
        id: 2,
        role: "Front-End Developer Intern",
        company: "XCEL Crop",
        period: "2024",
        description: "Developed responsive UI components using React.js. Integrated frontend with backend APIs to ensure seamless data flow and user experience.",
        technologies: ["React.js", "JavaScript", "CSS", "API Integration"]
    }
];

export const SKILLS = [
    {
        title: "Languages",
        icon: Code,
        skills: ["Java", "Python", "C", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
        title: "Frameworks & Libs",
        icon: Layout,
        skills: ["Spring Boot", "Hibernate", "JDBC", "React.js", "Tailwind CSS", "Flask"]
    },
    {
        title: "Tools & Platforms",
        icon: Terminal,
        skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Eclipse", "MySQL"]
    },
    {
        title: "Concepts",
        icon: Settings,
        skills: ["REST APIs", "Data Structures", "Algorithms", "Agile Methodology", "OOPs", "DBMS"]
    }
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: Github,
        url: "https://github.com/suresh8088-dev"
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://linkedin.com/in/suresh-c-b8ba422a0"
    },
    {
        name: "Email",
        icon: Mail,
        url: `mailto:${PERSONAL_DETAILS.email}`
    },
    {
        name: "Phone",
        icon: Phone,
        url: `tel:${PERSONAL_DETAILS.phone.replace(/-/g, "")}`
    }
];
