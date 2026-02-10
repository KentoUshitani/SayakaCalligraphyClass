import { useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { href: '#philosophy', label: '理念' },
  { href: '#benefits', label: '教室の魅力' },
  { href: '#credentials', label: '実績' },
  { href: '#classes', label: 'クラス案内' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kinari/95 backdrop-blur-sm border-b border-sumi/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-sumi hover:text-kaede transition-colors duration-300">
            清楓習字教室
          </a>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sumi hover:text-kaede transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Contact Button */}
          <a
            href="https://www.instagram.com/sayakaclass0506"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-kaede text-white rounded-full hover:bg-kaede/90 transition-colors duration-300 font-medium text-sm sm:text-base"
          >
            <Instagram size={18} />
            <span className="hidden sm:inline">お問い合わせ</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-sumi hover:text-kaede transition-colors duration-300"
            aria-label="メニューを開く"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-kinari/98 border-t border-sumi/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-sumi hover:text-kaede hover:bg-kaede/5 rounded-lg transition-colors duration-200 font-medium text-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
