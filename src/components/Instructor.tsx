import AnimatedSection from './AnimatedSection';

export default function Instructor() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <AnimatedSection className="text-center mb-10 sm:mb-12">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        INSTRUCTOR
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi">
                        講師紹介
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
                                        alt="講師 牛谷日出心"
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
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-sumi">
                                    牛谷 日出心
                                </h3>
                                <p className="text-lg sm:text-xl text-sumi/50 mt-1">Ushitani Hideko</p>
                            </div>

                            <div className="w-16 h-0.5 bg-kaede rounded-full mx-auto md:mx-0"></div>

                            <p className="text-base sm:text-lg md:text-xl text-sumi/80 leading-relaxed">
                                「先生、昔から字がお上手だったんでしょう？」<br />
                                よくそう聞かれますが、実は小学生の頃は<br />
                                「字が雑」と怒られるような子供でした。
                            </p>
                            <p className="text-base sm:text-lg md:text-xl text-sumi/80 leading-relaxed">
                                転機は小学3年生。教室で「上手だね」と<br />
                                褒められたことで自信がつき、<br />
                                性格まで明るくなりました。
                            </p>
                            <p className="text-base sm:text-lg md:text-xl text-sumi/80 leading-relaxed">
                                指導歴30年。私が大切にしているのは<br />
                                「教えるのではなく、引き出す」こと。<br />
                                ダメなところを直すのではなく、<br />
                                その人だけが持つ「良いところ」を見つけ、<br />
                                光を当てるのが私の役目です。
                            </p>

                            <ul className="space-y-2 text-sm sm:text-base text-sumi/70">
                                <li className="flex items-center gap-2 justify-center md:justify-start">
                                    <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0"></span>
                                    日本習字教育財団 八段位
                                </li>
                                <li className="flex items-center gap-2 justify-center md:justify-start">
                                    <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0"></span>
                                    教授免許取得
                                </li>
                                <li className="flex items-center gap-2 justify-center md:justify-start">
                                    <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0"></span>
                                    兵庫県内12教室を運営
                                </li>
                                <li className="flex items-center gap-2 justify-center md:justify-start">
                                    <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0"></span>
                                    指導実績1000名以上
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
