import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-sumi text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-8">
                    {/* Logo and Tagline */}
                    <div className="space-y-4">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold">
                            清楓習字教室
                        </h3>
                        <p className="text-sm md:text-base text-white/60 uppercase tracking-wider">
                            SEIFU CALLIGRAPHY
                        </p>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            字を書くと、心は「無」になる。<br />
                            気持ちがスッキリと、前向きになれる場所。
                        </p>
                    </div>

                    {/* Instagram Link */}
                    <a
                        href="https://www.instagram.com/sayakaclass0506"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-lg hover:text-kaede transition-colors duration-300"
                    >
                        <Instagram size={24} />
                        <span>@sayakaclass0506</span>
                    </a>

                    {/* Divider */}
                    <div className="w-16 h-px bg-white/30 mx-auto"></div>

                    {/* Copyright */}
                    <p className="text-white/70 text-sm">
                        © {new Date().getFullYear()} 清楓習字教室 All Rights Reserved.
                    </p>
                    <p className="text-white/50 text-xs">
                        兵庫県
                    </p>
                </div>
            </div>
        </footer>
    );
}
