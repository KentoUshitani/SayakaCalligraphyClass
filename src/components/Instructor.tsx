export default function Instructor() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div>
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-4">
                        INSTRUCTOR
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-sumi mb-8">
                        講師紹介
                    </h2>
                </div>

                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-sumi">
                        牛谷 日出心
                    </h3>
                    <p className="text-xl text-sumi/70">Ushitani Hideko</p>

                    <div className="pt-6 max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl text-sumi/80 leading-relaxed">
                            書く楽しさ、成長する喜びを伝え続けて30年。<br />
                            あなたの字が美しく変わる瞬間、そして表情が輝く瞬間を見るのが私の喜びです。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
