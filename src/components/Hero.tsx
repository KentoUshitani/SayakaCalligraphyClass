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

                    {/* CTA Button */}
                    <motion.div
                        className="pt-4 sm:pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <a
                            href="https://www.instagram.com/sayakaclass0506"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-kaede text-white text-base sm:text-lg font-medium rounded-full hover:bg-kaede/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            教室の様子を見る
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
                            src="/calligraphy-hero.png"
                            alt="書道作品 - 清楓習字教室"
                            className="w-full h-auto object-cover"
                        />
                        {/* Subtle overlay for depth */}
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
