import { motion } from 'motion/react';
import { Printer, Palette, Film, Scissors, CircleDot, Copy } from 'lucide-react';

const services = [
  {
    icon: <Printer className="w-12 h-12" />,
    title: 'Estampado por Serigrafía',
    description: 'Ideal para grandes cantidades. Resultados duraderos y colores vibrantes.',
    time: '3-5 días hábiles',
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: 'Estampado por Sublimación',
    description: 'Colores brillantes y diseños fotográficos. Perfecto para prendas claras.',
    time: '2-4 días hábiles',
  },
  {
    icon: <Film className="w-12 h-12" />,
    title: 'Estampado DTF',
    description: 'Tecnología Direct to Film. Alta calidad en cualquier color de tela.',
    time: '2-3 días hábiles',
  },
  {
    icon: <Scissors className="w-12 h-12" />,
    title: 'Vinilo Textil',
    description: 'Flex y flock. Acabado profesional para logos y diseños sencillos.',
    time: '1-2 días hábiles',
  },
  {
    icon: <CircleDot className="w-12 h-12" />,
    title: 'Bordado Personalizado',
    description: 'Elegancia y distinción. Perfecto para uniformes corporativos.',
    time: '5-7 días hábiles',
  },
  {
    icon: <Copy className="w-12 h-12" />,
    title: 'Estampado por Transfer',
    description: 'Versatilidad y rapidez. Ideal para diseños complejos y pequeñas cantidades.',
    time: '2-3 días hábiles',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-[#1a1a2e]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Nuestros Servicios
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ofrecemos una amplia variedad de técnicas de estampado para adaptarnos a tus necesidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#e2b714] group"
            >
              <div className="text-[#e2b714] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3
                className="text-xl mb-3 text-[#1a1a2e]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                {service.title}
              </h3>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem' }}
              >
                {service.description}
              </p>
              <div className="flex items-center text-[#e2b714]">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                  {service.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
