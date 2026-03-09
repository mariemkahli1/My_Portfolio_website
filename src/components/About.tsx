import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    
  ];

  const aboutData = {
    title: "About Me",
    description: "Dynamic and social professional, excelling in collaborative environments and building strong connections to achieve shared goals.",
    info: [
      { label: "Full Name", value: "Mariem KAHLI" },
      { label: "Gender", value: "Female" },
      { label: "Age", value: "24 Years Old" },
      { label: "Status", value: "Single" },
      { label: "City", value: "Sfax" },
      { label: "Nationality", value: "Tunisian" },
      { label: "Experience", value: "1 Year" },
      { label: "Full Time", value: "Available" },
      { label: "Freelance", value: "Available" },
      { label: "Phone", value: "(+216) 54 245 643" },
      { label: "Email", value: "kahli.mariem@enis.tn" },
      { label: "Languages", value: "Arabic, French, English, German" },
    ]
  };

  const experienceData = {
    title: "My Experience",
    description: "I have worked with various technologies and companies to build scalable and efficient web applications.",
    items: [
      { company: "PROGED Solutions", role: "SharePoint & Microsoft 365 Consultant | Full Stack Web Developer ", period: "06/2025 - Present" },
      { company: "PROGED Solutions", role: "Full Stack Web | Power Platform Developer Intern", period: "02/2025 - 05/2025" },
      { company: "PROGED Solutions", role: "Full Stack Web | Power Platform Developer Intern", period: "07/2024 - 08/2024" },
      { company: "Thales Group", role: "DevSecOps Intern", period: "06/2024 - 08/2024" },
      { company: "Mercarue", role: "Full Stack Web Intern", period: "06/2023 - 08/2023" },

    ]
  };

  const educationData = {
    title: "My Education",
    description: "My academic background has provided me with a strong foundation in computer science and software engineering.",
    items: [
      { school: "National Engineering School of Sfax (ENIS)", degree: "Computer Engineering and Applied Mathematics", period: "09/2022 - 06/2025" },
      { school: "Preparatory Institute for Engineering Studies of Sfax (IPEIS)", degree: "Physics and Chemistry", period: "09/2020 - 06/2022" },
      { school: "25 July 1957 High School", degree: "Baccalaureate in Experimental Sciences", period: "09/2019 - 06/2020" },
    ]
  };

const skillsData = {
    title: "My Skills",
    description: "Specialized in full-stack development with React and .NET, I bridge the gap between custom web architectures and the Microsoft ecosystem. My technical versatility is further strengthened by a solid proficiency in Java, allowing me to create intelligent, automated, and high-performance solutions.",
    categories: [
  {
    name: "Operating Systems",
    skills: ["Windows", "Linux"]
  },
  {
    name: "Programming Languages",
    skills: ["C#", "Python", "TypeScript", "JavaScript", "PHP", "Java"]
  },
  {
    name: "Microsoft Ecosystem & Power Platform", 
    skills: ["Power Automate ", "Power Apps", "SharePoint Online", "Dynamics 365 Business Central", "Power BI", "Azure DevOps"]
  },
  {
    name: "Frameworks & Web Tech",
    skills: ["React", "Angular", "Vue.js", ".NET", "Spring Boot"]
  },
  {
    name: "DevOps & Cloud Tools",
    skills: ["Docker", "Jenkins", "SonarQube", "Git", "Jira", "Selenium", "Talend"]
  },
  {
    name: "Databases",
    skills: ["MySQL" , "SQL Server", "PostgreSQL" ]
  }
]
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl font-bold">About <span className="text-primary">Me</span></h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-[600px] leading-relaxed">
                {aboutData.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
              {aboutData.info.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm whitespace-nowrap">{item.label}</span>
                  <span className="font-medium text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'experience':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl font-bold">My <span className="text-primary">Experience</span></h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-[600px]">
                {experienceData.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experienceData.items.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                  <span className="text-primary text-sm">{item.period}</span>
                  <h4 className="text-xl font-bold mt-2">{item.role}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.company}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'education':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl font-bold">My <span className="text-primary">Education</span></h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-[600px]">
                {educationData.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationData.items.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                  <span className="text-primary text-sm">{item.period}</span>
                  <h4 className="text-xl font-bold mt-2">{item.degree}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.school}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
     case 'skills':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl font-bold">My <span className="text-primary">Skills</span></h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-[600px]">
                {skillsData.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillsData.categories.map((category, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <h4 className="text-xl font-bold text-primary border-b border-primary/20 pb-2">
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-black/5 dark:border-white/5 font-medium hover:text-primary transition-colors shadow-sm text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        {/* Left Side - Tabs */}
        <div className="flex flex-col gap-8 lg:w-[400px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-bold">Why Hire Me?</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
             Transforming complex challenges into impactful, user-focused digital solutions through code and smart automation.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 text-center shadow-sm
                  ${activeTab === tab.id 
                    ? 'bg-white dark:bg-slate-800 text-primary border-2 border-primary' 
                    : 'bg-white dark:bg-slate-800 border-2 border-transparent hover:border-primary/20'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-grow min-h-[400px]">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;
