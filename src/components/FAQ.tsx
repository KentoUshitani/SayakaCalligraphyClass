import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const faqItems = [
    {
        question: '入会前に体験はできますか？',
        answer: '1回の単発レッスン（1,500円）としてお気軽にご参加いただき、教室の雰囲気をお試しください。',
    },
    {
        question: 'うちの子、落ち着きがないのですが…',
        answer: 'ご安心ください。集中力に繋がる遊びを取り入れた指導で、筆を持つと不思議とスイッチが入ります。',
    },
    {
        question: '他の習字教室に通っていても、筆ペンや硬筆だけ習えますか？',
        answer: '大歓迎です！学びたい内容に絞ってピンポイントで指導いたします。オリジナルのお手本をご用意します。',
    },
    {
        question: '道具は何を買えばいいですか？',
        answer: '今ならキャンペーンで、教室推奨の「書きやすい道具一式」をプレゼント中！手ぶらで体験にお越しください。',
    },
    {
        question: '入会金は必ずかかりますか？',
        answer: '「日本習字」に入会して段級位を取得する場合のみ必要です。単発の美文字レッスンをご希望の方は、入会金不要でご受講いただけます。',
    },
    {
        question: 'オンラインレッスンはパソコンが必要ですか？',
        answer: '不要です！スマホとLINEさえあれば動画での添削指導が受けられます。',
    },
    {
        question: '墨で服が汚れるのが心配です…。',
        answer: 'あらかじめ汚れても差し支えのない服装（黒っぽい服など）でお越しください。',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-kinari-dark">
            <div className="max-w-3xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        FAQ
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi">
                        よくある質問
                    </h2>
                </AnimatedSection>

                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-kinari/50 transition-colors duration-200"
                                >
                                    <span className="text-base sm:text-lg font-medium text-sumi flex items-start gap-3">
                                        <span className="text-kaede font-serif font-bold flex-shrink-0">Q.</span>
                                        {item.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown className="w-5 h-5 text-sumi/40" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                                                <div className="border-t border-sumi/10 pt-4">
                                                    <p className="text-sm sm:text-base text-sumi/70 leading-relaxed flex items-start gap-3">
                                                        <span className="text-kaede font-serif font-bold flex-shrink-0">A.</span>
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
