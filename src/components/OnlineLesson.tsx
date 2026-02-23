import { Smartphone, Send, PlayCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const steps = [
    {
        icon: Smartphone,
        step: '01',
        title: '自分のペースで書く',
        description: '毎月届く日本習字のお手本、または先生がご要望に合わせて作成したオリジナルのお手本を見ながらご自宅で練習。',
    },
    {
        icon: Send,
        step: '02',
        title: 'スマホで撮って送る',
        description: '完成した作品をスマホで撮影し、LINEで送付。',
    },
    {
        icon: PlayCircle,
        step: '03',
        title: '添削動画が届く',
        description: '先生が「実際に朱書き（添削）している手元の動画」と音声メッセージをLINEでお返しします。',
    },
];

export default function OnlineLesson() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        ONLINE LESSON
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-sumi leading-tight">
                        スマホ1つで、おうちが<br />
                        「心静まる書道教室」に。
                    </h2>
                </AnimatedSection>

                {/* Lead Copy */}
                <AnimatedSection className="mb-12 sm:mb-16">
                    <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6 text-center">
                        <p className="text-base sm:text-lg text-sumi/70 leading-relaxed">
                            対面教室と一律料金で、全国どこからでも受講可能です。
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-sumi/80 leading-relaxed">
                            難しいパソコン設定や
                            <br />
                            時間の拘束は不要です！
                        </p>
                    </div>
                </AnimatedSection>

                {/* Steps */}
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                    {steps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <AnimatedSection key={index} delay={index * 0.15}>
                                <div className="text-center space-y-4 p-6 sm:p-8 rounded-lg bg-kinari-dark h-full">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-kaede/10 rounded-full flex items-center justify-center">
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-kaede" />
                                    </div>
                                    <p className="text-xs sm:text-sm text-kaede font-bold tracking-widest">
                                        STEP {item.step}
                                    </p>
                                    <h3 className="text-lg sm:text-xl font-serif font-bold text-sumi">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-sumi/70 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
