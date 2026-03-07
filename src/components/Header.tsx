import { useState } from 'react';
import { Instagram, Menu, X, Globe } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { translations, t, type Lang } from '../i18n/utils';

const langOptions: { code: Lang; label: string; path: string }[] = [
  { code: 'ja', label: '日本語', path: '/' },
  { code: 'en', label: 'EN', path: '/en/' },
  { code: 'zh', label: '中文', path: '/zh/' },
  { code: 'ko', label: '한국어', path: '/ko/' },
];

export default function Header({ lang = 'ja' as Lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const s = translations.header;

  const navLinks = [
    { href: '#philosophy', label: t(s.nav.philosophy, lang) },
    { href: '#voices', label: t(s.nav.voices, lang) },
    { href: '#classes', label: t(s.nav.classes, lang) },
    { href: '#access', label: t(s.nav.access, lang) },
    { href: '#online', label: t(s.nav.online, lang) },
    { href: '#faq', label: t(s.nav.faq, lang) },
  ];

  const currentLang = langOptions.find(l => l.code === lang) ?? langOptions[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kinari/95 backdrop-blur-sm border-b border-sumi/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href={currentLang.path} className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-sumi hover:text-kaede transition-colors duration-300">
            {t(s.logo, lang)}
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
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm text-sumi hover:text-kaede transition-colors duration-300 rounded-lg hover:bg-sumi/5"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{currentLang.label}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 bg-white border border-sumi/10 rounded-lg shadow-lg overflow-hidden min-w-[100px] z-50"
                >
                  {langOptions.map((option) => (
                    <a
                      key={option.code}
                      href={option.path}
                      className={`block px-4 py-2.5 text-sm hover:bg-kinari transition-colors duration-200 whitespace-nowrap ${
                        option.code === lang ? 'text-kaede font-bold bg-kaede/5' : 'text-sumi'
                      }`}
                    >
                      {option.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://lin.ee/edtrcMJ"
              className="w-10 h-10 bg-[#06C755] text-white rounded-full flex items-center justify-center hover:bg-[#05b34c] transition-colors duration-300"
              title={t(s.lineTitle, lang)}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.508.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sayakaclass0506"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-kaede text-white rounded-full flex items-center justify-center hover:bg-kaede/90 transition-colors duration-300"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-sumi hover:text-kaede transition-colors duration-300"
            aria-label={t(s.menuLabel, lang)}
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
              {/* Mobile Language Switcher */}
              <div className="border-t border-sumi/10 pt-3 mt-3">
                <div className="flex items-center gap-2 px-4 py-2">
                  <Globe size={16} className="text-sumi/60" />
                  <div className="flex gap-2">
                    {langOptions.map((option) => (
                      <a
                        key={option.code}
                        href={option.path}
                        className={`px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                          option.code === lang
                            ? 'bg-kaede text-white font-bold'
                            : 'text-sumi/70 hover:bg-sumi/5'
                        }`}
                      >
                        {option.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
