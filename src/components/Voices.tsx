import { MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const voices = [
    {
        label: '生徒部',
        labelSub: '保護者様の声',
        image: '/images/kids-class.jpg',
        text: '弱々しい小さな字だった子が、力強く大きな字を書くように！周りからも「字が綺麗になったね！」と褒められ、表情が明るくなりました。何事にも自信をもって積極的に取り組めるようになっています。',
    },
    {
        label: '成人部',
        labelSub: '生徒様の声',
        image: '/images/adult-class.jpg',
        text: '集中して字を書いていると迷いが消え、気持ちがスッキリします。字の上達とともに他の事にも自信を持てるようになり、趣味が同じ仲間と一緒に出掛けて楽しく過ごせるようになりました。',
    },
];

export default function Voices() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        VOICES
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi">
                        生徒さんたちの嬉しい変化
                    </h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                    {voices.map((voice, index) => (
                        <AnimatedSection key={index} delay={index * 0.2}>
                            <div className="bg-kinari-dark rounded-xl overflow-hidden shadow-md h-full">
                                {/* Photo */}
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={voice.image}
                                        alt={`${voice.label}の様子`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Text Bubble */}
                                <div className="p-6 sm:p-8 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <MessageCircle className="w-5 h-5 text-kaede flex-shrink-0" />
                                        <span className="text-sm sm:text-base font-bold text-kaede">
                                            {voice.label}
                                        </span>
                                        <span className="text-xs sm:text-sm text-sumi/50">
                                            {voice.labelSub}
                                        </span>
                                    </div>
                                    <div className="relative pl-4 border-l-2 border-kaede/30">
                                        <p className="text-sm sm:text-base text-sumi/80 leading-relaxed">
                                            「{voice.text}」
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
