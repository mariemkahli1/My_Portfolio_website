import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    'hero.title': "Hi, I'm",
    'hero.description': "Web Development Engineer, passionate and detail-oriented, with a solid command of software development technologies. Driven by curiosity and a strong sense of challenge, I strive to design innovative, high-performance solutions tailored to user needs.",
    'hero.download': 'Download CV',
    'hero.cv_file': '/Mariem_Kahli_CV_EN.pdf',
    'about.why': 'Why Hire Me?',
    'about.why_desc': 'Transforming complex challenges into impactful, user-focused digital solutions through code and smart automation.',
    'about.tab_me': 'About Me',
    'about.tab_edu': 'Education',
    'about.tab_exp': 'Experience',
    'about.tab_skills': 'Skills',
    'about.full_name': 'Full Name',
    'about.gender': 'Gender',
    'about.age': 'Age',
    'about.status': 'Status',
    'about.city': 'City',
    'about.experience': 'Experience',
    'about.experience_val':'1 year',
    'about.nationality': 'Nationality',
    'about.languages': 'Languages',
    'about.available': 'Available',
    'about.female': 'Female',
    'about.single': 'Single',
    'about.tunisian': 'Tunisian',
    'about.lang_list': 'Arabic, French, English, German',
    'about.exp_title': 'My Experience',
    'about.exp_desc': 'I have worked with various technologies and companies to build scalable and efficient web applications.',
    'about.edu_title': 'My Education',
    'about.edu_desc': 'My academic background has provided me with a strong foundation in computer science and software engineering.',
    'about.skills_title': 'My Skills',
    'about.skills_desc': 'Specialized in full-stack development with React and .NET, I bridge the gap between custom web architectures and the Microsoft ecosystem. My technical versatility is further strengthened by a solid proficiency in Java, allowing me to create intelligent, automated, and high-performance solutions.',
    'about.description':'Dynamic and social professional, excelling in collaborative environments and building strong connections to achieve shared goals.',
    'education.school1': 'National Engineering School of Sfax (ENIS)',
    'education.degree1': 'Computer Engineering and Applied Mathematics',
    'education.school2': 'Preparatory Institute for Engineering Studies of Sfax (IPEIS)',
    'education.degree2': 'Physics and Chemistry',
    'education.school3': '25 July 1957 High School',
    'education.degree3': 'Baccalaureate in Experimental Sciences',
    'skills.cat.os': 'Operating Systems',
    'skills.cat.prog': 'Programming Languages',
    'skills.cat.ms': 'Microsoft Ecosystem & Power Platform',
    'skills.cat.frameworks': 'Frameworks & Web Tech',
    'skills.cat.devops': 'DevOps & Cloud Tools',
    'skills.cat.db': 'Databases',
    'projects.title': 'Featured',
    'projects.subtitle': 'Projects',
    'projects.description': 'A selection of my recent work, showcasing my skills in development and design.',
    'projects.p1.title': 'Power Automate Workflow Management Solution',
    'projects.p1.desc': 'An intelligent solution for managing and analyzing Power Automate workflows, integrating AI for automatic error detection and correction.',
    'projects.p2.title': 'After-Sales Service Management Web Application',
    'projects.p2.desc': 'A web application designed to manage after-sales services.',
    'projects.p3.title': 'Dynamic Library Information System Website',
    'projects.p3.desc': 'A dynamic platform that allows efficient management of books and members.',
    'projects.p4.title': 'SPORTY Platform',
    'projects.p4.desc': 'A full-featured online store with payment integration and admin dashboard.',
    'contact.title': 'Get in',
    'contact.subtitle': 'Touch',
    'contact.description': "Let's connect to turn your business needs into powerful digital solutions. Together, we can bring your ideas to life through innovative development and smart automation.",
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message Sent!',
    'contact.error': 'Something went wrong. Please try again.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.hire': 'Recrutez-moi',
    'hero.title': "Salut, je suis",
    'hero.description': "Ingénieure en Développement Web, passionnée et soucieuse du détail, avec une solide maîtrise des technologies de développement logiciel. Animée par la curiosité et un fort sens du défi, je m'efforce de concevoir des solutions innovantes et performantes adaptées aux besoins des utilisateurs.",
    'hero.download': 'Télécharger CV',
    'hero.cv_file': '/Mariem_Kahli_CV_FR.pdf',
    'about.why': 'Pourquoi me recruter ?',
    'about.why_desc': 'Transformer des défis complexes en solutions numériques percutantes et centrées sur l’utilisateur grâce au code et à l’automatisation intelligente.',
    'about.tab_me': 'À Propos',
    'about.tab_edu': 'Formation',
    'about.tab_exp': 'Expérience',
    'about.tab_skills': 'Compétences',
    'about.full_name': 'Nom Complet',
    'about.gender': 'Genre',
    'about.age': 'Âge',
    'about.status': 'Statut',
    'about.city': 'Ville',
    'about.experience': 'Expérience',
    'about.experience_val':'1 an',
    'about.nationality': 'Nationalité',
    'about.languages': 'Langues',
    'about.available': 'Disponible',
    'about.female': 'Femme',
    'about.single': 'Célibataire',
    'about.tunisian': 'Tunisienne',
    'about.lang_list': 'Arabe, Français, Anglais, Allemand',
    'about.exp_title': 'Mon Expérience',
    'about.exp_desc': 'J’ai travaillé avec diverses technologies et entreprises pour créer des applications web évolutives et efficaces.',
    'about.edu_title': 'Ma Formation',
    'about.edu_desc': 'Mon parcours académique m’a permis d’acquérir de solides bases en informatique et en génie logiciel.',
    'about.skills_title': 'Mes Compétences',
    'about.description':'Professionnel dynamique et sociable, excellant dans les environnements collaboratifs et dans la création de relations solides afin d’atteindre des objectifs communs.',
    'about.skills_desc': 'Spécialisée dans le développement full-stack avec React et .NET, je fais le pont entre les architectures web personnalisées et l’écosystème Microsoft. Ma polyvalence technique est renforcée par une solide maîtrise de Java, me permettant de créer des solutions intelligentes, automatisées et performantes.',
    'education.school1': 'École Nationale d’Ingénieurs de Sfax (ENIS)',
    'education.degree1': 'Génie Informatique et Mathématiques Appliquées',
    'education.school2': 'Institut Préparatoire aux Études d’Ingénieurs de Sfax (IPEIS)',
    'education.degree2': 'Physique et Chimie',
    'education.school3': 'Lycée 25 Juillet 1957',
    'education.degree3': 'Baccalauréat en Sciences Expérimentales',
    'skills.cat.os': 'Systèmes d’Exploitation',
    'skills.cat.prog': 'Langages de Programmation',
    'skills.cat.ms': 'Écosystème Microsoft & Power Platform',
    'skills.cat.frameworks': 'Frameworks & Technologies Web',
    'skills.cat.devops': 'Outils DevOps & Cloud',
    'skills.cat.db': 'Bases de Données',
    'projects.title': 'Projets',
    'projects.subtitle': 'Phares',
    'projects.description': 'Une sélection de mes travaux récents, illustrant mes compétences en développement et en design.',
    'projects.p1.title': 'Solution De Gestion et Analyse des Workflows Power Automate',
    'projects.p1.desc': 'Une solution intelligente pour gérer et analyser les flux de travail Power Automate, intégrant l’IA pour la détection et la correction automatiques des erreurs.',
    'projects.p2.title': 'Application Web de Gestion de Service Après-Vente',
    'projects.p2.desc': 'Une application web conçue pour gérer les services après-vente.',
    'projects.p3.title': 'Site Web de Système d’Information de Bibliothèque Dynamique',
    'projects.p3.desc': 'Une plateforme dynamique permettant une gestion efficace des livres et des membres.',
    'projects.p4.title': 'Plateforme SPORTY',
    'projects.p4.desc': 'Une boutique en ligne complète avec intégration de paiement et tableau de bord administrateur.',
    'contact.title': 'Me',
    'contact.subtitle': 'Contacter',
    'contact.description': "Connectons-nous pour transformer vos besoins commerciaux en solutions numériques puissantes. Ensemble, nous pouvons donner vie à vos idées grâce à un développement innovant et une automatisation intelligente.",
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer le Message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message Envoyé !',
    'contact.error': 'Une erreur est survenue. Veuillez réessayer.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
