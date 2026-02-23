import { MapPin, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const regularClassrooms = [
    {
        name: '波賀教室',
        address: '兵庫県宍粟市波賀町皆木443-1',
        schedule: '毎週水曜：10-12時 / 15-17時',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.5!2d134.5563!3d35.1611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5YWl6LOA55S65rOi6LOA55S655qG5pyo!5e0!3m2!1sja!2sjp!4v1!5m2!1sja!2sjp',
        mapLink: 'https://www.google.com/maps/search/兵庫県宍粟市波賀町皆木443-1',
    },
    {
        name: '山崎教室',
        address: '兵庫県宍粟市山崎町須賀沢1140-1 cafeきゃんてぃーん2階',
        schedule: '毎週火曜：16-17時 幼児部 / 17-18時 小学部 / 18-19時 中学部',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.5!2d134.5563!3d35.0611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zcafe%E3%81%8D%E3%82%83%E3%82%93%E3%81%A6%E3%81%83%E3%83%BC%E3%82%93!5e0!3m2!1sja!2sjp!4v1!5m2!1sja!2sjp',
        mapLink: 'https://www.google.com/maps/search/兵庫県宍粟市山崎町須賀沢1140-1',
    },
    {
        name: 'はこプラス教室',
        address: '兵庫県姫路市岡田333-1',
        schedule: '月3回土曜：10-12時',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.5!2d134.6563!3d34.8611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5aeT6Lev5biC5bKh55Sw!5e0!3m2!1sja!2sjp!4v1!5m2!1sja!2sjp',
        mapLink: 'https://www.google.com/maps/search/兵庫県姫路市岡田333-1',
    },
];

const irregularClassrooms = [
    { name: '新宮教室', address: 'たつの市新宮町上笹1182', mapLink: 'https://www.google.com/maps/search/たつの市新宮町上笹1182' },
    { name: '神河教室', address: '神崎郡神河町寺前64', mapLink: 'https://www.google.com/maps/search/神崎郡神河町寺前64' },
    { name: 'ポラリス教室', address: '姫路市相野86-6', mapLink: 'https://www.google.com/maps/search/姫路市相野86-6' },
    { name: 'たつの教室', address: '個人宅', mapLink: '' },
    { name: '明石教室', address: '個人宅', mapLink: '' },
    { name: '文殊荘教室', address: '神崎郡福崎町東田原1891', mapLink: 'https://www.google.com/maps/search/神崎郡福崎町東田原1891' },
    { name: 'モリ・リフォーム教室', address: '神崎郡福崎町福崎新189-3', mapLink: 'https://www.google.com/maps/search/神崎郡福崎町福崎新189-3' },
];

export default function AccessSchedule() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection className="text-center mb-12 sm:mb-16">
                    <p className="text-sm md:text-base text-kaede font-medium tracking-widest uppercase mb-3 sm:mb-4">
                        ACCESS & SCHEDULE
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sumi">
                        教室案内・アクセス
                    </h2>
                </AnimatedSection>

                {/* Regular Classrooms with Maps */}
                <AnimatedSection className="mb-12 sm:mb-16">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-sumi mb-6 sm:mb-8 flex items-center gap-2">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-kaede" />
                        定期教室
                    </h3>
                    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                        {regularClassrooms.map((classroom, index) => (
                            <div key={index} className="bg-kinari-dark rounded-lg overflow-hidden shadow-md">
                                {/* Map Embed */}
                                <div className="aspect-[4/3]">
                                    <iframe
                                        src={classroom.mapSrc}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`${classroom.name}の地図`}
                                    ></iframe>
                                </div>
                                {/* Info */}
                                <div className="p-4 sm:p-5 space-y-2">
                                    <h4 className="text-lg sm:text-xl font-serif font-bold text-sumi">
                                        {classroom.name}
                                    </h4>
                                    <a
                                        href={classroom.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs sm:text-sm text-kaede hover:text-kaede/80 transition-colors duration-300 flex items-start gap-1"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                                        <span>{classroom.address}</span>
                                    </a>
                                    <p className="text-xs sm:text-sm text-sumi/60">
                                        {classroom.schedule}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Irregular Classrooms */}
                <AnimatedSection className="mb-10 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-sumi mb-6 sm:mb-8 flex items-center gap-2">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-kaede" />
                        不定期教室（月1回〜）
                    </h3>
                    <div className="bg-kinari-dark rounded-lg p-6 sm:p-8">
                        <p className="text-sm sm:text-base text-sumi/70 mb-5">
                            次回開催日はLINEでお気軽にお問い合わせください。
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                            {irregularClassrooms.map((classroom, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-kaede rounded-full flex-shrink-0 mt-2"></span>
                                    <div>
                                        <span className="text-sm sm:text-base font-medium text-sumi">
                                            {classroom.name}
                                        </span>
                                        {classroom.mapLink ? (
                                            <a
                                                href={classroom.mapLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs sm:text-sm text-kaede hover:text-kaede/80 transition-colors duration-300 ml-1"
                                            >
                                                （{classroom.address}）
                                            </a>
                                        ) : (
                                            <span className="text-xs sm:text-sm text-sumi/50 ml-1">
                                                （{classroom.address}）
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* External Classrooms */}
                <AnimatedSection>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-sumi mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-kaede" />
                        外部委託教室
                    </h3>
                    <p className="text-sm sm:text-base text-sumi/70">
                        エディックきっず手柄校 / ルネス花北
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}
