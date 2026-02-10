import { School, PenTool, MapPin, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Services() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-kinari-dark">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        CLASSES
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi">
                        クラス案内
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
                    {/* Regular Classes */}
                    <AnimatedSection delay={0.1}>
                        <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg space-y-5 sm:space-y-6 h-full">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-kaede/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <School className="w-6 h-6 sm:w-7 sm:h-7 text-kaede" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-sumi mb-3">
                                        定期クラス
                                    </h3>
                                    <ul className="space-y-2 text-sm sm:text-base text-sumi/70">
                                        <li className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                            <span>宍粟市波賀</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                            <span>宍粟市山崎</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                            <span>姫路（はこプラス）</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Monthly Classes */}
                    <AnimatedSection delay={0.2}>
                        <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg space-y-5 sm:space-y-6 h-full">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-kaede/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <School className="w-6 h-6 sm:w-7 sm:h-7 text-kaede" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-sumi mb-3">
                                        月1回・不定期クラス
                                    </h3>
                                    <ul className="space-y-2 text-sm sm:text-base text-sumi/70">
                                        <li className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                            <span>福崎</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                            <span>神河</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                            <span>明石・新宮・たつの</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Instagram Link for Schedule */}
                <AnimatedSection className="text-center" delay={0.3}>
                    <a
                        href="https://www.instagram.com/sayakaclass0506"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm sm:text-base text-kaede hover:text-kaede/80 font-medium transition-colors duration-300"
                    >
                        詳しい日程はInstagramをご確認ください →
                    </a>
                </AnimatedSection>

                {/* Commission Work Section */}
                <div className="mt-16 sm:mt-20">
                    <AnimatedSection className="text-center mb-10 sm:mb-12">
                        <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                            COMMISSION WORKS
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi mb-4">
                            筆耕・制作
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.15}>
                        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 sm:p-10 shadow-lg space-y-6 sm:space-y-8">
                            <div className="text-center space-y-4">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-kaede/10 rounded-full flex items-center justify-center">
                                    <PenTool className="w-7 h-7 sm:w-8 sm:h-8 text-kaede" />
                                </div>
                                <p className="text-base sm:text-lg md:text-xl text-sumi/80 leading-relaxed">
                                    ご依頼いただければ、<br />
                                    心を込めて書いて発送します。<br />
                                    大切な名前に、光を当てるお手伝い。
                                </p>
                            </div>

                            {/* Price List */}
                            <div className="border-t border-sumi/10 pt-6">
                                <ul className="space-y-3 text-sm sm:text-base text-sumi/80">
                                    <li className="flex justify-between items-baseline gap-4">
                                        <span>☀︎ 命名書</span>
                                        <span className="font-medium text-sumi whitespace-nowrap">2,000円〜</span>
                                    </li>
                                    <li className="flex justify-between items-baseline gap-4">
                                        <span>☀︎ のしがき・席札・ペナント書き</span>
                                        <span className="font-medium text-sumi whitespace-nowrap">1枚 200円〜</span>
                                    </li>
                                    <li className="flex justify-between items-baseline gap-4">
                                        <span>☀︎ 看板書き</span>
                                        <span className="font-medium text-sumi whitespace-nowrap">10,000円〜</span>
                                    </li>
                                    <li className="flex justify-between items-baseline gap-4">
                                        <span>☀︎ 表札書き</span>
                                        <span className="font-medium text-sumi whitespace-nowrap">3,000円〜</span>
                                    </li>
                                    <li className="flex justify-between items-baseline gap-4">
                                        <span>☀︎ 横断幕書き</span>
                                        <span className="font-medium text-sumi whitespace-nowrap">5,000円〜</span>
                                    </li>
                                </ul>
                                <p className="mt-4 text-xs sm:text-sm text-sumi/50 text-center">
                                    ⭕️ 大きさ、文字数により料金は変わります
                                </p>
                            </div>

                            {/* Links */}
                            <div className="border-t border-sumi/10 pt-6 text-center space-y-4">
                                <div>
                                    <p className="text-xs sm:text-sm text-sumi/50 mb-2">
                                        講師の書道作品はこちら
                                    </p>
                                    <a
                                        href="https://www.instagram.com/keisyu.eisuian"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm sm:text-base text-kaede hover:text-kaede/80 font-medium transition-colors duration-300"
                                    >
                                        <Instagram size={18} />
                                        <span>@keisyu.eisuian</span>
                                    </a>
                                </div>
                                <a
                                    href="https://www.instagram.com/sayakaclass0506"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-kaede text-white text-sm sm:text-base font-medium rounded-full hover:bg-kaede/90 transition-colors duration-300"
                                >
                                    お問い合わせはInstagramへ
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
