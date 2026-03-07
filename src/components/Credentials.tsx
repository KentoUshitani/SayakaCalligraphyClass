import { Award, Calendar, GraduationCap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { translations, t, type Lang } from '../i18n/utils';

const icons = [Award, Calendar, GraduationCap];

export default function Credentials({ lang = 'ja' as Lang }) {
    const s = translations.credentials;

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-base md:text-lg text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        {t(s.label, lang)}
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-sumi">
                        {t(s.title, lang)}
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                    {s.items.map((credential, index) => {
                        const Icon = icons[index];
                        return (
                            <AnimatedSection key={index} delay={index * 0.15}>
                                <div className="text-center space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-lg bg-kinari-dark hover:bg-kinari transition-colors duration-300">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-kaede/10 rounded-full flex items-center justify-center">
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-kaede" />
                                    </div>
                                    <p className="text-sm sm:text-base text-sumi/60 font-medium uppercase tracking-wide">
                                        {t(credential.label, lang)}
                                    </p>
                                    <p className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-kaede">
                                        {t(credential.value, lang)}
                                    </p>
                                    <p className="text-sm sm:text-base text-sumi/70">
                                        {t(credential.subtitle, lang)}
                                    </p>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
