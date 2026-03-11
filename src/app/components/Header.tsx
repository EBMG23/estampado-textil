import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a2e] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold">
              <span className="text-[#e2b714]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Stamp
              </span>
              <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Arte
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-[#e2b714] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-white hover:text-[#e2b714] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('precios')}
              className="text-white hover:text-[#e2b714] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-white hover:text-[#e2b714] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-white hover:text-[#e2b714] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-[#1a1a2e] py-4 space-y-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-4 py-2 text-white hover:text-[#e2b714] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left px-4 py-2 text-white hover:text-[#e2b714] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('precios')}
              className="block w-full text-left px-4 py-2 text-white hover:text-[#e2b714] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="block w-full text-left px-4 py-2 text-white hover:text-[#e2b714] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-4 py-2 text-white hover:text-[#e2b714] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
