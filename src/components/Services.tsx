import { School, Users, Crosshair, GraduationCap, PenTool, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { translations, t, type Lang } from '../i18n/utils';

export default function Services({ lang = 'ja' as Lang }) {
    const s = translations.services;

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-kinari-dark">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        {t(s.label, lang)}
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi">
                        {t(s.title, lang)}
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
                    {/* Card 1: Kids/Students Class */}
                    <AnimatedSection delay={0.1}>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                            <div className="aspect-[16/9] overflow-hidden">
                                <img
                                    src="/images/kids-class.jpg"
                                    alt={t(s.student.imgAlt, lang)}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 sm:p-8 space-y-5 sm:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-kaede/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <School className="w-6 h-6 sm:w-7 sm:h-7 text-kaede" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-sumi mb-1">
                                            {t(s.student.title, lang)}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-sumi/50">{t(s.student.subtitle, lang)}</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <ul className="space-y-2 text-sm sm:text-base text-sumi/80">
                                        <li className="flex items-baseline gap-2">
                                            <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                            <span>{t(s.student.monthly, lang)}<strong className="text-kaede font-serif text-lg sm:text-xl">{t(s.student.monthlyPrice, lang)}</strong></span>
                                        </li>
                                        <li className="flex items-baseline gap-2">
                                            <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                            <span>{t(s.student.single, lang)}<strong className="text-kaede font-serif text-lg sm:text-xl">{t(s.student.singlePrice, lang)}</strong></span>
                                        </li>
                                    </ul>
                                    <div className="text-xs sm:text-sm text-sumi/50 space-y-1">
                                        <p>{t(s.student.note1, lang)}</p>
                                        <p>{t(s.student.note2, lang)}</p>
                                        <p>{t(s.student.note3, lang)}</p>
                                    </div>
                                </div>
                                <div className="border-t border-sumi/10 pt-4">
                                    <p className="text-sm sm:text-base text-sumi/70 leading-relaxed whitespace-pre-line">
                                        {t(s.student.desc, lang)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Card 2: Adult & Parent Class */}
                    <AnimatedSection delay={0.2}>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                            <div className="aspect-[16/9] overflow-hidden">
                                <img
                                    src="/images/adult-class.jpg"
                                    alt={t(s.adult.imgAlt, lang)}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 sm:p-8 space-y-5 sm:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-kaede/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 sm:w-7 sm:h-7 text-kaede" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-sumi mb-1">
                                            {t(s.adult.title, lang)}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-sumi/50">{t(s.adult.subtitle, lang)}</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <ul className="space-y-2 text-sm sm:text-base text-sumi/80">
                                        <li className="flex items-baseline gap-2">
                                            <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                            <span>{t(s.adult.monthly, lang)}<strong className="text-kaede font-serif text-lg sm:text-xl">{t(s.adult.monthlyPrice, lang)}</strong></span>
                                        </li>
                                        <li className="flex items-baseline gap-2">
                                            <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                            <span>{t(s.adult.single, lang)}<strong className="text-kaede font-serif text-lg sm:text-xl">{t(s.adult.singlePrice, lang)}</strong>{t(s.adult.singleNote, lang)}</span>
                                        </li>
                                        <li className="flex items-baseline gap-2">
                                            <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                            <span>{t(s.adult.extension, lang)}</span>
                                        </li>
                                    </ul>
                                    <div className="bg-kaede/5 rounded-lg px-4 py-3">
                                        <p className="text-sm sm:text-base text-sumi/80 font-medium whitespace-pre-line">
                                            {t(s.adult.parentDiscount, lang)}<strong className="text-kaede">{t(s.adult.parentPrice, lang)}</strong>
                                            {lang === 'ja' ? 'に' : ''}
                                        </p>
                                        <p className="text-xs text-sumi/50 mt-1">
                                            {t(s.adult.parentNote, lang)}
                                        </p>
                                    </div>
                                    <div className="text-xs sm:text-sm text-sumi/50 space-y-1">
                                        <p>{t(s.adult.note1, lang)}</p>
                                        <p>{t(s.adult.note2, lang)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Card 3: Pinpoint / Multi-school Class */}
                    <AnimatedSection delay={0.3}>
                        <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg space-y-5 sm:space-y-6 h-full">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-kaede/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Crosshair className="w-6 h-6 sm:w-7 sm:h-7 text-kaede" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-sumi mb-2">
                                        {t(s.pinpoint.title1, lang)}
                                        <br className="sm:hidden" />
                                        {t(s.pinpoint.title2, lang)}
                                    </h3>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <ul className="space-y-2 text-sm sm:text-base text-sumi/80">
                                    <li className="flex items-baseline gap-2">
                                        <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                        <span>{t(s.adult.monthly, lang)}<strong className="text-kaede font-serif text-lg sm:text-xl">{t(s.adult.monthlyPrice, lang)}</strong></span>
                                    </li>
                                    <li className="flex items-baseline gap-2">
                                        <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                        <span>{t(s.adult.single, lang)}<strong className="text-kaede font-serif text-lg sm:text-xl">{t(s.adult.singlePrice, lang)}</strong>{t(s.adult.singleNote, lang)}</span>
                                    </li>
                                    <li className="flex items-baseline gap-2">
                                        <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                        <span>{t(s.adult.extension, lang)}</span>
                                    </li>
                                </ul>
                                <div className="text-xs sm:text-sm text-sumi/50 space-y-1">
                                    <p>{t(s.pinpoint.note, lang)}</p>
                                </div>
                            </div>
                            <div className="border-t border-sumi/10 pt-4">
                                <p className="text-sm sm:text-base text-sumi/70 leading-relaxed">
                                    {t(s.pinpoint.desc1, lang)}
                                </p>
                                <p className="text-sm sm:text-base text-sumi/70 leading-relaxed mt-3">
                                    {t(s.pinpoint.desc2, lang)}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Card 4: Qualification / Instructor Course */}
                    <AnimatedSection delay={0.4}>
                        <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg space-y-5 sm:space-y-6 h-full">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-kaede/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-kaede" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-sumi mb-2">
                                        {t(s.qualification.title1, lang)}
                                        <br className="sm:hidden" />
                                        {t(s.qualification.title2, lang)}
                                    </h3>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <ul className="space-y-2 text-sm sm:text-base text-sumi/80">
                                    <li className="flex items-baseline gap-2">
                                        <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                        <span>{t(s.adult.monthly, lang)}<strong className="text-kaede font-serif text-lg sm:text-xl">{t(s.adult.monthlyPrice, lang)}</strong></span>
                                    </li>
                                    <li className="flex items-baseline gap-2">
                                        <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                        <span>{t(s.adult.single, lang)}<strong className="text-kaede font-serif text-lg sm:text-xl">{t(s.adult.singlePrice, lang)}</strong>{t(s.adult.singleNote, lang)}</span>
                                    </li>
                                    <li className="flex items-baseline gap-2">
                                        <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                        <span>{t(s.adult.extension, lang)}</span>
                                    </li>
                                </ul>
                                <div className="text-xs sm:text-sm text-sumi/50 space-y-1">
                                    <p>{t(s.qualification.note, lang)}</p>
                                </div>
                            </div>
                            <div className="border-t border-sumi/10 pt-4">
                                <p className="text-sm sm:text-base text-sumi/70 leading-relaxed">
                                    {t(s.qualification.desc1, lang)}
                                </p>
                                <p className="text-sm sm:text-base text-sumi/70 leading-relaxed mt-3">
                                    {t(s.qualification.desc2, lang)}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* LINE CTA for Classes */}
                <AnimatedSection className="text-center mb-12 sm:mb-16" delay={0.3}>
                    <div className="space-y-3">
                        <p className="text-sm sm:text-base text-sumi/70 leading-relaxed whitespace-pre-line">
                            {t(s.classCta, lang)}
                        </p>
                        <a href="https://lin.ee/edtrcMJ" className="inline-block">
                            <img
                                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                                alt={t(s.addFriend, lang)}
                                height="36"
                                className="h-9 sm:h-10"
                            />
                        </a>
                    </div>
                </AnimatedSection>

                {/* Commission Work Section */}
                <div className="mt-4 sm:mt-8">
                    <AnimatedSection className="text-center mb-10 sm:mb-12">
                        <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                            {t(s.commission.label, lang)}
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi mb-4">
                            {t(s.commission.title, lang)}
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.15}>
                        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 sm:p-10 shadow-lg space-y-6 sm:space-y-8">
                            <div className="text-center space-y-4">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-kaede/10 rounded-full flex items-center justify-center">
                                    <PenTool className="w-7 h-7 sm:w-8 sm:h-8 text-kaede" />
                                </div>
                                <p className="text-base sm:text-lg md:text-xl text-sumi/80 leading-relaxed whitespace-pre-line">
                                    {t(s.commission.desc, lang)}
                                </p>
                            </div>

                            {/* Price List */}
                            <div className="border-t border-sumi/10 pt-6">
                                <ul className="space-y-3 text-sm sm:text-base text-sumi/80">
                                    <li className="flex justify-between items-baseline gap-4">
                                        <span>{t(s.commission.meimei, lang)}</span>
                                        <span className="font-medium text-sumi whitespace-nowrap">2,000円〜</span>
                                    </li>
                                    <li className="flex justify-between items-baseline gap-4">
                                        <span>{t(s.commission.noshi, lang)}</span>
                                        <span className="font-medium text-sumi whitespace-nowrap">1枚 200円〜</span>
                                    </li>
                                    <li className="flex justify-between items-baseline gap-4">
                                        <span>{t(s.commission.kanban, lang)}</span>
                                        <span className="font-medium text-sumi whitespace-nowrap">10,000円〜</span>
                                    </li>
                                    <li className="flex justify-between items-baseline gap-4">
                                        <span>{t(s.commission.hyousatsu, lang)}</span>
                                        <span className="font-medium text-sumi whitespace-nowrap">3,000円〜</span>
                                    </li>
                                    <li className="flex justify-between items-baseline gap-4">
                                        <span>{t(s.commission.oudanmaku, lang)}</span>
                                        <span className="font-medium text-sumi whitespace-nowrap">5,000円〜</span>
                                    </li>
                                </ul>
                                <p className="mt-4 text-xs sm:text-sm text-sumi/50 text-center">
                                    {t(s.commission.priceNote, lang)}
                                </p>
                            </div>

                            {/* Links */}
                            <div className="border-t border-sumi/10 pt-6 text-center space-y-5">
                                <p className="text-sm sm:text-base text-sumi/60 text-center">{t(s.commission.igLabel, lang)}</p>
                                <a
                                    href="https://www.instagram.com/keisyu.eisuian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 py-3 px-6 rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-medium hover:opacity-90 transition-opacity duration-300 mx-auto"
                                >
                                    <Instagram size={22} />
                                    <span className="text-sm sm:text-base">{t(s.commission.igFollow, lang)}</span>
                                </a>
                                <div className="text-center space-y-2">
                                    <p className="text-sm sm:text-base text-sumi/60">{t(s.commission.lineLabel, lang)}</p>
                                    <a href="https://lin.ee/edtrcMJ" className="inline-block">
                                        <img
                                            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                                            alt={t(s.addFriend, lang)}
                                            height="36"
                                            className="h-10 sm:h-11"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
