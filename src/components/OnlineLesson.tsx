import { Smartphone, Send, PlayCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { translations, t, type Lang } from '../i18n/utils';

const stepIcons = [Smartphone, Send, PlayCircle];

export default function OnlineLesson({ lang = 'ja' as Lang }) {
    const s = translations.online;
    const sv = translations.services;

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        {t(s.label, lang)}
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-sumi leading-tight whitespace-pre-line">
                        {t(s.title, lang)}
                    </h2>
                </AnimatedSection>

                {/* Lead Copy */}
                <AnimatedSection className="mb-12 sm:mb-16">
                    <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6 text-center">
                        <p className="text-base sm:text-lg text-sumi/70 leading-relaxed">
                            {t(s.desc, lang)}
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-sumi/80 leading-relaxed whitespace-pre-line">
                            {t(s.noPC, lang)}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Pricing */}
                <AnimatedSection className="mb-12 sm:mb-16">
                    <div className="max-w-xl mx-auto bg-kinari-dark rounded-lg p-6 sm:p-8 shadow-md space-y-4">
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-sumi text-center mb-2">{t(s.pricingTitle, lang)}</h3>
                        <ul className="space-y-2 text-sm sm:text-base text-sumi/80">
                            <li className="flex items-baseline gap-2">
                                <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                <span>{t(sv.adult.monthly, lang)}<strong className="text-kaede font-serif text-lg sm:text-xl">{t(sv.adult.monthlyPrice, lang)}</strong></span>
                            </li>
                            <li className="flex items-baseline gap-2">
                                <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                <span>{t(sv.adult.single, lang)}<strong className="text-kaede font-serif text-lg sm:text-xl">{t(sv.adult.singlePrice, lang)}</strong>{t(sv.adult.singleNote, lang)}</span>
                            </li>
                            <li className="flex items-baseline gap-2">
                                <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                <span>{t(sv.adult.extension, lang)}</span>
                            </li>
                        </ul>
                        <div className="bg-kaede/5 rounded-lg px-4 py-3">
                            <p className="text-sm sm:text-base text-sumi/80 font-medium whitespace-pre-line">
                                {t(sv.adult.parentDiscount, lang)}<strong className="text-kaede">{t(sv.adult.parentPrice, lang)}</strong>
                                {lang === 'ja' ? 'に' : ''}
                            </p>
                            <p className="text-xs text-sumi/50 mt-1">
                                {t(sv.adult.parentNote, lang)}
                            </p>
                        </div>
                        <div className="text-xs sm:text-sm text-sumi/50 space-y-1">
                            <p>{t(sv.adult.note1, lang)}</p>
                            <p>{t(sv.adult.note2, lang)}</p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Steps */}
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                    {s.steps.map((item, index) => {
                        const Icon = stepIcons[index];
                        return (
                            <AnimatedSection key={index} delay={index * 0.15}>
                                <div className="text-center space-y-4 p-6 sm:p-8 rounded-lg bg-kinari-dark h-full">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-kaede/10 rounded-full flex items-center justify-center">
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-kaede" />
                                    </div>
                                    <p className="text-xs sm:text-sm text-kaede font-bold tracking-widest">
                                        STEP {String(index + 1).padStart(2, '0')}
                                    </p>
                                    <h3 className="text-lg sm:text-xl font-serif font-bold text-sumi">
                                        {t(item.title, lang)}
                                    </h3>
                                    <p className="text-sm sm:text-base text-sumi/70 leading-relaxed">
                                        {t(item.description, lang)}
                                    </p>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>

                {/* LINE CTA */}
                <AnimatedSection className="text-center mt-10 sm:mt-12">
                    <div className="space-y-3">
                        <p className="text-sm sm:text-base text-sumi/70 leading-relaxed whitespace-pre-line">
                            {t(s.cta, lang)}
                        </p>
                        <a href="https://lin.ee/edtrcMJ" className="inline-block">
                            <img
                                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                                alt={t(translations.common.addFriend, lang)}
                                height="36"
                                className="h-9 sm:h-10"
                            />
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
