import { Award, Calendar, GraduationCap } from 'lucide-react';

const credentials = [
    {
        icon: Award,
        label: '最高段位',
        value: '八段位',
        subtitle: '日本習字教育財団',
    },
    {
        icon: Calendar,
        label: '指導歴',
        value: '30年以上',
        subtitle: '指導実績 1000名以上',
    },
    {
        icon: GraduationCap,
        label: '資格',
        value: '教授免許',
        subtitle: '取得済',
    },
];

export default function Credentials() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-4">
                        QUALITY ASSURANCE
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-sumi">
                        実績・信頼
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {credentials.map((credential, index) => {
                        const Icon = credential.icon;
                        return (
                            <div
                                key={index}
                                className="text-center space-y-4 p-8 rounded-lg bg-kinari-dark hover:bg-kinari transition-colors duration-300"
                            >
                                <div className="w-16 h-16 mx-auto bg-kaede/10 rounded-full flex items-center justify-center">
                                    <Icon className="w-8 h-8 text-kaede" />
                                </div>
                                <p className="text-sm text-sumi/60 font-medium uppercase tracking-wide">
                                    {credential.label}
                                </p>
                                <p className="text-4xl md:text-5xl font-serif font-bold text-kaede">
                                    {credential.value}
                                </p>
                                <p className="text-sm text-sumi/70">
                                    {credential.subtitle}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
