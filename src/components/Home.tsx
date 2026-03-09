import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Download, Mail } from 'lucide-react';
import profil from '../assets/Mariem2.jpg';

const Home: React.FC = () => {
  const socialLinks = [
  { Icon: Github, href: "https://github.com/mariemkahli1" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/mariem-kahli/" },
  { Icon: Twitter, href: "https://x.com/KahliMarie3354" },
];
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
      

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Mariem KAHLI</span>
          </h1>
          
           <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed text-justify">
            Web Development Engineer, passionate and detail-oriented, with a solid command of software development technologies. 
            Driven by curiosity and a strong sense of challenge, I strive to design innovative, high-performance solutions tailored to user needs.
          </p>

      <div className="flex flex-wrap items-center gap-6">
         
            {/* <a 
  href="\Mariem_Kahli_CV.pdf" 
  download="Mariem_Kahli_CV.pdf" 
  className="flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold transition-all shadow-lg shadow-primary/20"
>
  <Download size={20} />
  <span>Download CV</span>
</a> */}
<a 
  href="/Mariem_Kahli_CV.pdf"  /* Chemin correct vers le dossier public */
  download="Mariem_Kahli_CV.pdf" 
  className="flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold transition-all shadow-lg shadow-primary/20"
>
  <Download size={20} />
  <span>Download CV</span>
</a>
            
            <div className="flex space-x-4">
               {socialLinks.map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                   href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                 className="p-3 bg-white text-slate-600 border-slate-200 shadow-sm dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700  rounded-2xl border hover:text-primary dark:hover:text-primary hover:border-primary transition-all"
                >

                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* Outer Solid Ring */}
            <div className="absolute inset-0 border-[1.5px] border-primary/60 rounded-full" />
            
            {/* Inner Dashed Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 border-[1.5px] border-dashed border-primary/40 rounded-full"
            />

            {/* Image Container with Floating Effect */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[90%] h-[98%] rounded-full overflow-hidden border-[6px] border-white dark:border-slate-800 shadow-2xl"
            >
              <img
                src={profil}
                alt="mariel Portrait"
                className="w-full h-full object-contain bg-slate-100"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Tech Badges - Matching Screenshot Style */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -right-2 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 z-20"
            >
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-inner">Ai</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[60%] -left-10 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 z-20"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-inner">Js</div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-4 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 z-20"
            >
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-inner">Ts</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
