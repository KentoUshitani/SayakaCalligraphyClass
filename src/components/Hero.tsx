export default function Hero() {
    return (
        <section className="relative min-h-screen pt-24 pb-16 px-6 flex items-center justify-center overflow-hidden">
            {/* Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-kinari via-kinari-dark to-kinari opacity-60 -z-10"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Text Content */}
                <div className="space-y-10 text-center md:text-left">
                    {/* Main Catchphrase */}
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-sumi leading-tight">
                            字が整うと、<br />
                            心も整う。
                        </h1>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-kaede leading-relaxed">
                            あなたの内にある輝きを、<br />
                            筆に乗せて。
                        </p>
                    </div>

                    {/* Subtitle */}
                    <div className="space-y-4">
                        <p className="text-xl md:text-2xl text-sumi/80 font-medium">
                            清楓習字教室
                        </p>
                        <p className="text-lg md:text-xl text-sumi/60">
                            指導歴30年。兵庫県内12教室。<br />
                            清楓（さやか）習字教室へようこそ。
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                        <a
                            href="https://www.instagram.com/sayakaclass0506"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 bg-kaede text-white text-lg font-medium rounded-full hover:bg-kaede/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            教室の様子を見る
                        </a>
                    </div>
                </div>

                {/* Right: Calligraphy Image */}
                <div className="relative">
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
                </div>
            </div>
        </section>
    );
}
