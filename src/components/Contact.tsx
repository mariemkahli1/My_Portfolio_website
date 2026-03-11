import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('submitting');

    try {
      const result = await emailjs.sendForm(
        'service_q6cxd89', 
        'template_irv7w7n', 
        formRef.current, 
        'vT7ji2ZZhUd_kNZgX'
      );

      if (result.status === 200) {
        setStatus('success');
        formRef.current.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen pt-32 pb-24 bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')} <span className="text-primary">{t('contact.subtitle')}</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email</h3>
                <p className="text-slate-400">kahli.mariem@enis.tn</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Phone</h3>
                <p className="text-slate-400">+216 54 245 643</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Location</h3>
                <p className="text-slate-400">Tunis Street km 4, Sfax, Tunisia</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <div className="bg-slate-800 p-12 rounded-3xl border border-primary/20 flex flex-col items-center text-center space-y-4 shadow-xl transition-colors duration-300">
                <div className="p-4 bg-primary/20 text-primary rounded-full">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-2xl font-bold">{t('contact.success')}</h3>
                <p className="text-slate-400">
                  {t('language') === 'fr' ? "Merci de m'avoir contactée. Je vous répondrai dès que possible." : "Thank you for reaching out. I'll get back to you as soon as possible."}
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-primary font-bold hover:underline"
                >
                  {t('language') === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder={t('contact.name')}
                    className="w-full px-6 py-4 bg-slate-800 rounded-2xl border border-white/10 focus:border-primary outline-none transition-all duration-300"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={t('contact.email')}
                    className="w-full px-6 py-4 bg-slate-800 rounded-2xl border border-white/10 focus:border-primary outline-none transition-all duration-300"
                  />
                </div>
                <input
                  name="title"
                  type="text"
                  required
                  placeholder={t('language') === 'fr' ? 'Sujet' : 'Subject'}
                  className="w-full px-6 py-4 bg-slate-800 rounded-2xl border border-white/10 focus:border-primary outline-none transition-all duration-300"
                />
                <textarea
                  name="message"
                  required
                  placeholder={t('contact.message')}
                  rows={6}
                  className="w-full px-6 py-4 bg-slate-800 rounded-2xl border border-white/10 focus:border-primary outline-none transition-all duration-300 resize-none"
                ></textarea>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">
                    {t('contact.error')}
                  </p>
                )}

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{status === 'submitting' ? t('contact.sending') : t('contact.send')}</span>
                  <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
