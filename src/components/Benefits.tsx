import { Heart, TrendingUp, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const benefits = [
    {
        icon: Heart,
        title: '心のデトックス',
        description: '集中して「無」になる時間。心が落ち着き、整う。',
    },
    {
        icon: TrendingUp,
        title: '一生モノの自信',
        description: '成長が見えるから楽しい。何でも挑戦したくなる心へ。',
    },
    {
        icon: Users,
        title: 'あなただけの指導法',
        description: '子供からお年寄りまで。個性に合わせたオーダーメイドの指導。',
    },
];

export default function Benefits() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-kinari-dark">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        BENEFITS
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi">
                        教室で得られるもの
                    </h2>
                </AnimatedSection>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <AnimatedSection key={index} delay={index * 0.15}>
                                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center space-y-4 hover:-translate-y-1">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-kaede/10 rounded-full flex items-center justify-center">
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-kaede" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-sumi">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-sumi/70 leading-relaxed">
                                        {benefit.description}
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
