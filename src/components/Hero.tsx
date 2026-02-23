import { motion } from 'framer-motion';

export default function Hero() {
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
                            字が整うと、<br />
                            心も整う。
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-kaede leading-relaxed">
                            あなたの内にある輝きを、<br />
                            筆に乗せて。
                        </p>
                    </div>

                    {/* Subtitle */}
                    <div className="space-y-3 sm:space-y-4">
                        <p className="text-lg sm:text-xl md:text-2xl text-sumi/80 font-medium">
                            清楓習字教室
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-sumi/60 leading-relaxed">
                            指導歴30年。兵庫県内12教室。<br />
                            清楓（さやか）習字教室へようこそ。
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
                                ＼ 日本最大の書道団体「日本習字」／
                            </p>
                            <p className="text-lg sm:text-xl font-bold text-kaede">
                                🌸 春の入会キャンペーン実施中 🌸
                            </p>
                            <p className="text-sm sm:text-base text-sumi/80 font-medium leading-relaxed">
                                今ご入会いただくと
                                <br />
                                「習字道具一式（最大8,000円相当）」プレゼント！
                                <br />
                                手ぶらでスタートできるチャンスです。
                            </p>
                            <div className="pt-1 space-y-1.5">
                                <p className="text-xs text-sumi/50 leading-relaxed">
                                    ※日本習字にご入会の場合、入会金のほかに会費（手本代）が発生します。
                                    <br />
                                    詳細は日本習字の公式サイトをご確認ください。
                                </p>
                                <a
                                    href="https://www.nihon-shuji.or.jp/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-xs sm:text-sm text-kaede hover:text-kaede/80 font-medium underline underline-offset-2 transition-colors duration-300"
                                >
                                    日本習字公式サイトはこちら
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
                            まずはLINEでお気軽にご相談・
                            <br className="sm:hidden" />
                            単発レッスン（1回1,500円）のお申し込みを！
                        </p>
                        <a href="https://lin.ee/edtrcMJ" className="inline-block">
                            <img
                                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                                alt="友だち追加"
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
                            alt="清楓習字教室 - 講師の書道作品"
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
