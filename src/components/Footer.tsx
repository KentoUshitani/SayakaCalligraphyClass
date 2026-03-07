import { Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { translations, t, TB, type Lang } from '../i18n/utils';

export default function Footer({ lang = 'ja' as Lang }) {
    const s = translations.footer;
    const h = translations.header;

    return (
        <footer className="relative bg-sumi text-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative">
                <AnimatedSection>
                    <div className="text-center space-y-6 sm:space-y-8">
                        {/* Logo and Tagline */}
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold">
                                {t(h.logo, lang)}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-white/60 uppercase tracking-wider">
                                SAYAKA CALLIGRAPHY
                            </p>
                            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                                <TB text={s.tagline} lang={lang} />
                            </p>
                        </div>

                        {/* Instagram Link */}
                        <a
                            href="https://www.instagram.com/sayakaclass0506"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg hover:text-kaede transition-colors duration-300"
                        >
                            <Instagram size={22} />
                            <span>@sayakaclass0506</span>
                        </a>

                        {/* LINE CTA Banner */}
                        <div className="space-y-2">
                            <p className="text-sm sm:text-base text-white/70">
                                {t(s.lineLabel, lang)}
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

                        {/* Divider */}
                        <div className="w-16 h-px bg-white/30 mx-auto"></div>

                        {/* Copyright */}
                        <p className="text-white/70 text-xs sm:text-sm">
                            © {new Date().getFullYear()} {t(s.copyright, lang)} All Rights Reserved.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </footer>
    );
}
