import { Facebook, Instagram, Music2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a1a2e] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="text-3xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="text-[#e2b714]" style={{ fontWeight: 800 }}>
                Stamp
              </span>
              <span className="text-white" style={{ fontWeight: 800 }}>
                Arte
              </span>
            </div>
            <p
              className="text-gray-400 mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem' }}
            >
              Tu socio de confianza en estampado y personalización textil. Calidad garantizada
              desde 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xl mb-4 text-[#e2b714]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-[#e2b714] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-400 hover:text-[#e2b714] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('precios')}
                  className="text-gray-400 hover:text-[#e2b714] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Precios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('galeria')}
                  className="text-gray-400 hover:text-[#e2b714] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Galería
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-400 hover:text-[#e2b714] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xl mb-4 text-[#e2b714]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Servicios
            </h3>
            <ul
              className="space-y-2 text-gray-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <li>Serigrafía</li>
              <li>Sublimación</li>
              <li>Estampado DTF</li>
              <li>Vinilo Textil</li>
              <li>Bordado</li>
              <li>Transfer</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3
              className="text-xl mb-4 text-[#e2b714]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e2b714] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e2b714] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e2b714] transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
            <p
              className="text-gray-400 mt-4"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
            >
              @stamparte
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p
              className="text-gray-400 text-center md:text-left"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
            >
              © {currentYear} StampArte. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#e2b714] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e2b714] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
