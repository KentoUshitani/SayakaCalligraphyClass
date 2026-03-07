import AnimatedSection from './AnimatedSection';
import { translations, t, TB, type Lang } from '../i18n/utils';

export default function Instructor({ lang = 'ja' as Lang }) {
    const s = translations.instructor;

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <AnimatedSection className="text-center mb-10 sm:mb-12">
                    <p className="text-base md:text-lg text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        {t(s.label, lang)}
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-sumi">
                        {t(s.title, lang)}
                    </h2>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                        {/* Left: Photo */}
                        <div className="md:col-span-2 flex justify-center">
                            <div className="relative">
                                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-lg">
                                    <img
                                        src="/images/instructor-new.jpg"
                                        alt={t(s.imgAlt, lang)}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Decorative ring */}
                                <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-kaede/20 scale-110"></div>
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className="md:col-span-3 text-center md:text-left space-y-5 sm:space-y-6">
                            <div>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi">
                                    {t(s.name, lang)}
                                </h3>
                                {t(s.nameRomaji, lang) && (
                                    <p className="text-xl sm:text-2xl text-sumi/50 mt-1">{t(s.nameRomaji, lang)}</p>
                                )}
                            </div>

                            <div className="w-16 h-0.5 bg-kaede rounded-full mx-auto md:mx-0"></div>

                            <p className="text-lg sm:text-xl md:text-2xl text-sumi/80 leading-relaxed">
                                <TB text={s.p1} lang={lang} />
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-sumi/80 leading-relaxed">
                                <TB text={s.p2} lang={lang} />
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-sumi/80 leading-relaxed">
                                <TB text={s.p3} lang={lang} />
                            </p>

                            <ul className="space-y-2 text-base sm:text-lg text-sumi/70">
                                {[s.cred1, s.cred2, s.cred3, s.cred4].map((cred, i) => (
                                    <li key={i} className="flex items-center gap-2 justify-center md:justify-start">
                                        <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0"></span>
                                        {t(cred, lang)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
