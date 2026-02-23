import { School, Users, Crosshair, GraduationCap, PenTool, Instagram } from 'lucide-react';
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
                        クラス・料金案内
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
                    {/* Card 1: Kids/Students Class */}
                    <AnimatedSection delay={0.1}>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                            <div className="aspect-[16/9] overflow-hidden">
                                <img
                                    src="/images/kids-class.jpg"
                                    alt="生徒部（子供クラス）の様子"
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
                                            生徒部
                                        </h3>
                                        <p className="text-xs sm:text-sm text-sumi/50">幼児〜中学生</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <ul className="space-y-2 text-sm sm:text-base text-sumi/80">
                                        <li className="flex items-baseline gap-2">
                                            <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                            <span>月4回コース：<strong className="text-kaede font-serif text-lg sm:text-xl">月額 3,500円</strong></span>
                                        </li>
                                        <li className="flex items-baseline gap-2">
                                            <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                            <span>単発レッスン：<strong className="text-kaede font-serif text-lg sm:text-xl">1回 1,500円</strong></span>
                                        </li>
                                    </ul>
                                    <div className="text-xs sm:text-sm text-sumi/50 space-y-1">
                                        <p>※2人以上の場合は1人1,000円</p>
                                        <p>※時間：1回 1時間</p>
                                        <p>※日本習字入会金 1,000円</p>
                                    </div>
                                </div>
                                <div className="border-t border-sumi/10 pt-4">
                                    <p className="text-sm sm:text-base text-sumi/70 leading-relaxed">
                                        まずは「褒める」からスタート。
                                        <br />
                                        左利きのお子様も個性を大切に指導します。
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
                                    alt="成人部（大人クラス）の様子"
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
                                            成人部
                                        </h3>
                                        <p className="text-xs sm:text-sm text-sumi/50">高校生〜大人・保護者</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <ul className="space-y-2 text-sm sm:text-base text-sumi/80">
                                        <li className="flex items-baseline gap-2">
                                            <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                            <span>月4回コース：<strong className="text-kaede font-serif text-lg sm:text-xl">月額 5,500円</strong></span>
                                        </li>
                                        <li className="flex items-baseline gap-2">
                                            <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                            <span>単発レッスン：<strong className="text-kaede font-serif text-lg sm:text-xl">1回 1,500円</strong>（1時間）</span>
                                        </li>
                                        <li className="flex items-baseline gap-2">
                                            <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                            <span>延長：1時間半 2,000円 / 最大2時間 2,500円</span>
                                        </li>
                                    </ul>
                                    <div className="bg-kaede/5 rounded-lg px-4 py-3">
                                        <p className="text-sm sm:text-base text-sumi/80 font-medium">
                                            🎁 保護者割引：お子様2名以上ご入会で、
                                            <br />
                                            保護者様の月4回のお月謝が<strong className="text-kaede">4,400円</strong>に
                                        </p>
                                        <p className="text-xs text-sumi/50 mt-1">
                                            ※お子様分のお月謝は別途必要です
                                        </p>
                                    </div>
                                    <div className="text-xs sm:text-sm text-sumi/50 space-y-1">
                                        <p>※月3回以下の参加の月は、1回1,500円の単発レッスン料金での計算</p>
                                        <p>※日本習字入会金 2,000円</p>
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
                                        ピンポイント特化・
                                        <br className="sm:hidden" />
                                        他教室併用クラス
                                    </h3>
                                </div>
                            </div>
                            <div className="border-t border-sumi/10 pt-4">
                                <p className="text-sm sm:text-base text-sumi/70 leading-relaxed">
                                    「他の教室で毛筆しか習っていない」
                                    「筆ペンやボールペン字だけ習いたい」
                                    という方も大歓迎！
                                </p>
                                <p className="text-sm sm:text-base text-sumi/70 leading-relaxed mt-3">
                                    ご要望に沿って先生が
                                    <strong className="text-sumi">オリジナルのお手本を作成</strong>し
                                    指導します。
                                </p>
                                <p className="text-xs sm:text-sm text-sumi/50 mt-3">
                                    ※単発美文字レッスンのみの場合は入会金不要です
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
                                        資格取得・
                                        <br className="sm:hidden" />
                                        指導者育成コース
                                    </h3>
                                </div>
                            </div>
                            <div className="border-t border-sumi/10 pt-4">
                                <p className="text-sm sm:text-base text-sumi/70 leading-relaxed">
                                    将来、習字の先生になりたい方へ。
                                </p>
                                <p className="text-sm sm:text-base text-sumi/70 leading-relaxed mt-3">
                                    日本習字に入会し、初段以上を取得すれば
                                    指導者としての道が開けます。
                                    教室開業のサポートまで、
                                    <strong className="text-sumi">30年の実績を持つ先生が伴走</strong>します。
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* LINE CTA for Classes */}
                <AnimatedSection className="text-center mb-12 sm:mb-16" delay={0.3}>
                    <div className="space-y-3">
                        <p className="text-sm sm:text-base text-sumi/70 leading-relaxed">
                            各コースの詳細や単発レッスンのご予約は、
                            <br className="hidden sm:block" />
                            LINEでお気軽にお問い合わせください
                        </p>
                        <a href="https://lin.ee/edtrcMJ" className="inline-block">
                            <img
                                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                                alt="友だち追加"
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
                                    大切な名前に、光を当てるお手伝い。<br />
                                    ただ字を書くだけではなく、<br />
                                    ご依頼者様の「想い」を<br />
                                    筆に乗せてお届けします。
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
                                <div className="flex items-center justify-center gap-6">
                                    <a
                                        href="https://www.instagram.com/keisyu.eisuian"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-kaede/10 rounded-full flex items-center justify-center text-kaede hover:bg-kaede/20 transition-colors duration-300"
                                        title="書道作品 @keisyu.eisuian"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/sayakaclass0506"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-kaede/10 rounded-full flex items-center justify-center text-kaede hover:bg-kaede/20 transition-colors duration-300"
                                        title="教室 @sayakaclass0506"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                </div>
                                <p className="text-xs text-sumi/50">
                                    @keisyu.eisuian（書道作品）/ @sayakaclass0506（教室）
                                </p>
                                <a
                                    href="https://lin.ee/edtrcMJ"
                                    className="inline-block"
                                >
                                    <img
                                        src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                                        alt="友だち追加"
                                        height="36"
                                        className="h-9 sm:h-10"
                                    />
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
