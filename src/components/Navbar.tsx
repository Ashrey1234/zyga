import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'News', href: '#news' },
  { label: 'Get Involved', href: '#involved' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d2a52] shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/WhatsApp_Image_2026-03-30_at_18.34.21.jpeg"
            alt="ZYGA Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-[#2d7d32]"
          />
          <div className="leading-tight">
            <div className="text-white font-bold text-sm tracking-wider">ZANZIBAR YOUTH</div>
            <div className="text-[#4caf50] font-bold text-sm tracking-wider">GENDER ALLIANCE</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/80 hover:text-[#4caf50] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#involved"
              className="bg-[#2d7d32] hover:bg-[#1b5e20] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
            >
              Donate Now
            </a>
          </li>
        </ul>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#0d2a52] border-t border-white/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/80 hover:text-[#4caf50] font-medium border-b border-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#involved"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-[#2d7d32] text-white font-semibold py-2 rounded-full"
          >
            Donate Now
          </a>
        </div>
      )}
    </header>
  );
}
