import { Heart, TrendingUp, Users } from 'lucide-react';

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
        <section className="py-20 px-6 bg-kinari-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-4">
                        BENEFITS
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-sumi">
                        教室で得られるもの
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center space-y-4"
                            >
                                <div className="w-16 h-16 mx-auto bg-kaede/10 rounded-full flex items-center justify-center">
                                    <Icon className="w-8 h-8 text-kaede" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-sumi">
                                    {benefit.title}
                                </h3>
                                <p className="text-sumi/70 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
