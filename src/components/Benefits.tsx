import { Heart, TrendingUp, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { translations, t, type Lang } from '../i18n/utils';

const icons = [Heart, TrendingUp, Users];

export default function Benefits({ lang = 'ja' as Lang }) {
    const s = translations.benefits;

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-kinari-dark">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-base md:text-lg text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        {t(s.label, lang)}
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-sumi">
                        {t(s.title, lang)}
                    </h2>
                </AnimatedSection>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {s.items.map((benefit, index) => {
                        const Icon = icons[index];
                        return (
                            <AnimatedSection key={index} delay={index * 0.15}>
                                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center space-y-4 hover:-translate-y-1">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-kaede/10 rounded-full flex items-center justify-center">
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-kaede" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-sumi">
                                        {t(benefit.title, lang)}
                                    </h3>
                                    <p className="text-base sm:text-lg text-sumi/70 leading-relaxed">
                                        {t(benefit.description, lang)}
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
