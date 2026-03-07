import { motion } from 'framer-motion';
import { translations, t, TB, type Lang } from '../i18n/utils';

export default function Hero({ lang = 'ja' as Lang }) {
    const s = translations.hero;

    return (
        <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
            {/* Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-kinari via-kinari-dark to-kinari opacity-60 -z-10"></div>

            {/* Decorative background circles */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-kaede/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-sumi/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Left: Text Content */}
                <motion.div
                    className="space-y-8 sm:space-y-10 text-center md:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {/* Main Catchphrase */}
                    <div className="space-y-4 sm:space-y-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-sumi leading-tight">
                            {t(s.title1, lang)}<br />
                            {t(s.title2, lang)}
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-kaede leading-relaxed">
                            {t(s.subtitle1, lang)}<br />
                            {t(s.subtitle2, lang)}
                        </p>
                    </div>

                    {/* Subtitle */}
                    <div className="space-y-3 sm:space-y-4">
                        <p className="text-lg sm:text-xl md:text-2xl text-sumi/80 font-medium">
                            {t(s.schoolName, lang)}
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-sumi/60 leading-relaxed">
                            <TB text={s.desc} lang={lang} />
                        </p>
                    </div>

                    {/* Campaign Banner */}
                    <motion.div
                        className="mt-6 sm:mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-white/80 backdrop-blur-sm border-2 border-kaede/30 rounded-xl px-5 sm:px-8 py-5 sm:py-6 text-center space-y-2.5">
                            <p className="text-xs sm:text-sm text-sumi/60 font-medium">
                                {t(s.campaignLabel, lang)}
                            </p>
                            <p className="text-lg sm:text-xl font-bold text-kaede">
                                {t(s.campaignTitle, lang)}
                            </p>
                            <p className="text-sm sm:text-base text-sumi/80 font-medium leading-relaxed">
                                <TB text={s.campaignDesc} lang={lang} />
                            </p>
                            <div className="pt-1 space-y-1.5">
                                <p className="text-xs text-sumi/50 leading-relaxed">
                                    <TB text={s.campaignNote} lang={lang} />
                                </p>
                                <a
                                    href="https://www.nihon-shuji.or.jp/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-xs sm:text-sm text-kaede hover:text-kaede/80 font-medium underline underline-offset-2 transition-colors duration-300"
                                >
                                    {t(s.campaignLink, lang)}
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* LINE CTA */}
                    <motion.div
                        className="text-center md:text-left space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <p className="text-sm sm:text-base text-sumi/70 leading-relaxed">
                            <TB text={s.ctaText} lang={lang} />
                        </p>
                        <a href="https://lin.ee/edtrcMJ" className="inline-block">
                            <img
                                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                                alt={t(s.addFriend, lang)}
                                height="36"
                                className="h-9 sm:h-10"
                            />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right: Calligraphy Image */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/calligraphy-main.jpg"
                            alt={t(s.imgAlt, lang)}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sumi/10 to-transparent"></div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-kaede/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-sumi/10 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
}
