import { Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kinari/95 backdrop-blur-sm border-b border-sumi/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl md:text-3xl font-serif font-bold text-sumi hover:text-kaede transition-colors duration-300">
            清楓習字教室
          </a>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#philosophy" className="text-sumi hover:text-kaede transition-colors duration-300 font-medium">
            理念
          </a>
          <a href="#benefits" className="text-sumi hover:text-kaede transition-colors duration-300 font-medium">
            教室の魅力
          </a>
          <a href="#credentials" className="text-sumi hover:text-kaede transition-colors duration-300 font-medium">
            実績
          </a>
          <a href="#classes" className="text-sumi hover:text-kaede transition-colors duration-300 font-medium">
            クラス案内
          </a>
        </nav>

        {/* Contact Button */}
        <a
          href="https://www.instagram.com/sayakaclass0506"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2.5 bg-kaede text-white rounded-full hover:bg-kaede/90 transition-colors duration-300 font-medium"
        >
          <Instagram size={20} />
          <span className="hidden sm:inline">お問い合わせ</span>
        </a>
      </div>
    </header>
  );
}
