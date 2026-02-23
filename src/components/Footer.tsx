import { Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Footer() {
    return (
        <footer className="relative bg-sumi text-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative">
                <AnimatedSection>
                    <div className="text-center space-y-6 sm:space-y-8">
                        {/* Logo and Tagline */}
                        <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold">
                                清楓習字教室
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-white/60 uppercase tracking-wider">
                                SAYAKA CALLIGRAPHY
                            </p>
                            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                                字を書くと、心は「無」になる。<br />
                                気持ちがスッキリと、<br />
                                前向きになれる場所。
                            </p>
                        </div>

                        {/* Instagram Link */}
                        <a
                            href="https://www.instagram.com/sayakaclass0506"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg hover:text-kaede transition-colors duration-300"
                        >
                            <Instagram size={22} />
                            <span>@sayakaclass0506</span>
                        </a>

                        {/* Divider */}
                        <div className="w-16 h-px bg-white/30 mx-auto"></div>

                        {/* Copyright */}
                        <p className="text-white/70 text-xs sm:text-sm">
                            © {new Date().getFullYear()} 清楓習字教室 All Rights Reserved.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </footer>
    );
}
