import { MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { translations, t, type Lang } from '../i18n/utils';

const images = ['/images/kids-class.jpg', '/images/adult-class.jpg'];

export default function Voices({ lang = 'ja' as Lang }) {
    const s = translations.voices;

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        {t(s.label, lang)}
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi">
                        {t(s.title, lang)}
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                    {s.items.map((voice, index) => (
                        <AnimatedSection key={index} delay={index * 0.2}>
                            <div className="bg-kinari-dark rounded-xl overflow-hidden shadow-md h-full">
                                {/* Photo */}
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={images[index]}
                                        alt={t(voice.label, lang)}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Text Bubble */}
                                <div className="p-6 sm:p-8 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <MessageCircle className="w-5 h-5 text-kaede flex-shrink-0" />
                                        <span className="text-sm sm:text-base font-bold text-kaede">
                                            {t(voice.label, lang)}
                                        </span>
                                        <span className="text-xs sm:text-sm text-sumi/50">
                                            {t(voice.labelSub, lang)}
                                        </span>
                                    </div>
                                    <div className="relative pl-4 border-l-2 border-kaede/30">
                                        <p className="text-sm sm:text-base text-sumi/80 leading-relaxed">
                                            「{t(voice.text, lang)}」
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
