import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPartnerModal: () => void;
  onOpenConsultationModal: (defaultRegion?: string) => void;
}

export default function Navbar({ onOpenPartnerModal, onOpenConsultationModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'BGIT 소개', href: '#about' },
    { name: '파타야 가성비', href: '#packages' },
    { name: '파타야 고품격', href: '#packages' },
    { name: '여행지 안내', href: '#destinations' },
    { name: '서비스', href: '#services' },
    { name: '요금 안내', href: '#rate-notes' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start gap-6 lg:gap-10 py-0 min-h-0">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group py-0 my-0 leading-none shrink-0" aria-label="BGIT Thai">
            <img
              src="/assets/aistudio/logo_transparent.png"
              alt="BGIT Thai - Join With Thai Golfer / All Golf Service"
              style={{ width: '300px', height: 'auto' }}
              className="w-[300px] h-auto max-h-[114px] object-contain bg-transparent block my-0 group-hover:scale-[1.01] transition-transform duration-200"
            />
          </a>

          {/* Desktop Navigation Links (positioned close to logo) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-neutral-800 hover:text-neutral-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-neutral-900 hover:after:w-full after:transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="ml-auto flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultationModal()}
              className="px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 rounded-md"
            >
              상담
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartnerModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-800 bg-neutral-100 rounded-md text-center border border-neutral-200"
            >
              파트너(B2B) 상담
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-neutral-900 rounded-md text-center shadow-sm"
            >
              여행 상담 내용 작성
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
