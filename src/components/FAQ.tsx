import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { translations, t, type Lang } from '../i18n/utils';

export default function FAQ({ lang = 'ja' as Lang }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const s = translations.faq;

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-kinari-dark">
            <div className="max-w-3xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-base md:text-lg text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        {t(s.label, lang)}
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-sumi">
                        {t(s.title, lang)}
                    </h2>
                </AnimatedSection>

                <div className="space-y-4">
                    {s.items.map((item, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-kinari/50 transition-colors duration-200"
                                >
                                    <span className="text-lg sm:text-xl font-medium text-sumi flex items-start gap-3">
                                        <span className="text-kaede font-serif font-bold flex-shrink-0">Q.</span>
                                        {t(item.question, lang)}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown className="w-5 h-5 text-sumi/40" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                                                <div className="border-t border-sumi/10 pt-4">
                                                    <p className="text-base sm:text-lg text-sumi/70 leading-relaxed flex items-start gap-3">
                                                        <span className="text-kaede font-serif font-bold flex-shrink-0">A.</span>
                                                        {t(item.answer, lang)}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
