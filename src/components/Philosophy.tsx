import AnimatedSection from './AnimatedSection';
import { translations, t, TB, type Lang } from '../i18n/utils';

export default function Philosophy({ lang = 'ja' as Lang }) {
    const s = translations.philosophy;

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Left: Image */}
                    <AnimatedSection className="order-2 md:order-1" direction="left">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="/calligraphy-workspace.png"
                                alt={t(s.imgAlt, lang)}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </AnimatedSection>

                    {/* Right: Content */}
                    <AnimatedSection className="order-1 md:order-2 space-y-6 sm:space-y-8 text-center md:text-left" direction="right">
                        {/* Title */}
                        <div>
                            <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                                {t(s.label, lang)}
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi mb-4 leading-tight">
                                {t(s.title1, lang)}<br />
                                <span className="text-kaede">{t(s.titleHighlight, lang)}</span>。
                            </h2>
                        </div>

                        {/* Divider */}
                        <div className="w-24 h-1 bg-kaede rounded-full mx-auto md:mx-0"></div>

                        {/* Content */}
                        <div className="text-base sm:text-lg md:text-xl text-sumi/80 leading-relaxed space-y-4 sm:space-y-6">
                            <p><TB text={s.p1} lang={lang} /></p>
                            <p><TB text={s.p2} lang={lang} /></p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
