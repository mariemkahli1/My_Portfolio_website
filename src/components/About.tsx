import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: t('about.tab_me') },
    { id: 'education', label: t('about.tab_edu') },
    { id: 'experience', label: t('about.tab_exp') },
    { id: 'skills', label: t('about.tab_skills') },
  ];

  const aboutData = {
    title: t('about.tab_me'),
    description: t('about.description'),
    info: [
      { label: t('about.full_name'), value: "Mariem KAHLI" },
      { label: t('about.gender'), value: t('about.female') },
      { label: t('about.age'), value: t('24') },
      { label: t('about.status'), value: t('about.single') },
      { label: t('about.city'), value: "Sfax" },
      { label: t('about.nationality'), value: t('about.tunisian') },
      { label: t('about.experience'), value: t('about.experience_val') },
      { label: "Full Time", value: t('about.available') },
      { label: "Freelance", value: t('about.available') },
      { label: "Phone", value: "(+216) 54 245 643" },
      { label: "Email", value: "kahli.mariem@enis.tn" },
      { label: t('about.languages'), value: t('about.lang_list') },
    ]
  };

  const experienceData = {
    title: t('about.exp_title'),
    description: t('about.exp_desc'),
    items: [
      { company: "PROGED Solutions", role: "SharePoint & Microsoft 365 Consultant | Full Stack Web Developer ", period: "06/2025 - Present" },
      { company: "PROGED Solutions", role: "Full Stack Web | Power Platform Developer Intern", period: "02/2025 - 05/2025" },
      { company: "PROGED Solutions", role: "Full Stack Web | Power Platform Developer Intern", period: "07/2024 - 08/2024" },
      { company: "Thales Group", role: "DevSecOps Intern", period: "06/2024 - 08/2024" },
      { company: "Mercarue", role: "Full Stack Web Intern", period: "06/2023 - 08/2023" },
    ]
  };

  const educationData = {
    title: t('about.edu_title'),
    description: t('about.edu_desc'),
    items: [
      { school: t('education.school1'), degree: t('education.degree1'), period: "09/2022 - 06/2025" },
      { school: t('education.school2'), degree: t('education.degree2'), period: "09/2020 - 06/2022" },
      { school: t('education.school3'), degree: t('education.degree3'), period: "09/2019 - 06/2020" },
    ]
  };

  const skillsData = {
    title: t('about.skills_title'),
    description: t('about.skills_desc'),
    categories: [
      {
        name: t('skills.cat.os'),
        skills: ["Windows", "Linux"]
      },
      {
        name: t('skills.cat.prog'),
        skills: ["C#", "Python", "TypeScript", "JavaScript", "PHP", "Java"]
      },
      {
        name: t('skills.cat.ms'),
        skills: ["Power Automate ", "Power Apps", "SharePoint Online", "Dynamics 365 Business Central", "Power BI", "Azure DevOps"]
      },
      {
        name: t('skills.cat.frameworks'),
        skills: ["React", "Angular", "Vue.js", ".NET", "Spring Boot"]
      },
      {
        name: t('skills.cat.devops'),
        skills: ["Docker", "Jenkins", "SonarQube", "Git", "Jira", "Selenium", "Talend"]
      },
      {
        name: t('skills.cat.db'),
        skills: ["MySQL", "SQL Server", "PostgreSQL"]
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
              <h3 className="text-4xl font-bold">{t('about.tab_me').split(' ')[0]} <span className="text-primary">{t('about.tab_me').split(' ').slice(1).join(' ')}</span></h3>
              <p className="text-slate-400 max-w-[600px] leading-relaxed">
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
              <h3 className="text-4xl font-bold">{t('about.exp_title').split(' ')[0]} <span className="text-primary">{t('about.exp_title').split(' ').slice(1).join(' ')}</span></h3>
              <p className="text-slate-400 max-w-[600px]">
                {experienceData.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experienceData.items.map((item, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-white/5 shadow-sm transition-colors duration-300">
                  <span className="text-primary text-sm">{item.period}</span>
                  <h4 className="text-xl font-bold mt-2">{item.role}</h4>
                  <p className="text-slate-400 text-sm">{item.company}</p>
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
              <h3 className="text-4xl font-bold">{t('about.edu_title').split(' ')[0]} <span className="text-primary">{t('about.edu_title').split(' ').slice(1).join(' ')}</span></h3>
              <p className="text-slate-400 max-w-[600px]">
                {educationData.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationData.items.map((item, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-white/5 shadow-sm transition-colors duration-300">
                  <span className="text-primary text-sm">{item.period}</span>
                  <h4 className="text-xl font-bold mt-2">{item.degree}</h4>
                  <p className="text-slate-400 text-sm">{item.school}</p>
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
              <h3 className="text-4xl font-bold">{t('about.skills_title').split(' ')[0]} <span className="text-primary">{t('about.skills_title').split(' ').slice(1).join(' ')}</span></h3>
              <p className="text-slate-400 max-w-[600px]">
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
                        className="bg-slate-800 px-4 py-2 rounded-lg border border-white/10 font-medium hover:text-primary transition-colors duration-300 shadow-sm text-sm"
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
    <section id="about" className="min-h-screen pt-32 pb-24 bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <div className="flex flex-col gap-8 lg:w-[400px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-bold">{t('about.why')}</h2>
            <p className="text-slate-400 leading-relaxed">
              {t('about.why_desc')}
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 text-center shadow-sm
                  ${activeTab === tab.id 
                    ? 'bg-slate-800 text-primary border-2 border-primary' 
                    : 'bg-slate-800 border-2 border-transparent hover:border-primary/20'
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
