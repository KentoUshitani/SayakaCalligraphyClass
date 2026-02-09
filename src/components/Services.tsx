import { School, PenTool, MapPin } from 'lucide-react';

export default function Services() {
    return (
        <section className="py-20 px-6 bg-kinari-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-4">
                        CLASSES
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-sumi">
                        クラス案内
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Regular Classes */}
                    <div className="bg-white rounded-lg p-8 shadow-lg space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-kaede/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <School className="w-7 h-7 text-kaede" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif font-bold text-sumi mb-3">
                                    定期クラス
                                </h3>
                                <ul className="space-y-2 text-sumi/70">
                                    <li className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                        <span>宍粟市波賀</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                        <span>宍粟市山崎</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                        <span>姫路（はこプラス）</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Classes */}
                    <div className="bg-white rounded-lg p-8 shadow-lg space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-kaede/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <School className="w-7 h-7 text-kaede" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif font-bold text-sumi mb-3">
                                    月1回・不定期クラス
                                </h3>
                                <ul className="space-y-2 text-sumi/70">
                                    <li className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                        <span>福崎</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                        <span>神河</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-kaede flex-shrink-0" />
                                        <span>明石・新宮・たつの</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Instagram Link for Schedule */}
                <div className="text-center">
                    <a
                        href="https://www.instagram.com/sayakaclass0506"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-kaede hover:text-kaede/80 font-medium transition-colors duration-300"
                    >
                        詳しい日程はInstagramをご確認ください →
                    </a>
                </div>

                {/* Commission Work Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-4">
                            COMMISSION WORKS
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-sumi mb-4">
                            筆耕・制作
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-lg p-10 shadow-lg text-center space-y-6">
                        <div className="w-16 h-16 mx-auto bg-kaede/10 rounded-full flex items-center justify-center">
                            <PenTool className="w-8 h-8 text-kaede" />
                        </div>
                        <p className="text-lg md:text-xl text-sumi/80 leading-relaxed">
                            ご依頼いただければ、心を込めて書いて発送します。<br />
                            大切な名前に、光を当てるお手伝い。
                        </p>
                        <p className="text-sumi/60">
                            命名書・看板・のし書き・表札など
                        </p>
                        <a
                            href="https://www.instagram.com/sayakaclass0506"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-kaede text-white font-medium rounded-full hover:bg-kaede/90 transition-colors duration-300"
                        >
                            お問い合わせはInstagramへ
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
