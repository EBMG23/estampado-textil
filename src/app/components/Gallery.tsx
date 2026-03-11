import { motion } from 'motion/react';
import { useState } from 'react';

const galleryItems = [
  {
    image:
      'https://images.unsplash.com/photo-1641573335229-331ef3e6a2b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Serigrafía',
    type: 'Estampado múltiple',
  },
  {
    image:
      'https://images.unsplash.com/photo-1763951156339-8176306db936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'DTF',
    type: 'Alta definición',
  },
  {
    image:
      'https://images.unsplash.com/photo-1773166030553-0e81e2fd7226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Bordado',
    type: 'Personalización premium',
  },
  {
    image:
      'https://images.unsplash.com/photo-1617310208966-2710132cab3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Sublimación',
    type: 'Colores vibrantes',
  },
  {
    image:
      'https://images.unsplash.com/photo-1738071477099-cfbb428b6fe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Vinilo',
    type: 'Acabado profesional',
  },
  {
    image:
      'https://images.unsplash.com/photo-1586939735472-c24cb4621c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Transfer',
    type: 'Diseños complejos',
  },
  {
    image:
      'https://images.unsplash.com/photo-1715859091719-363edd477bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Personalizado',
    type: 'Textil personalizado',
  },
  {
    image:
      'https://images.unsplash.com/photo-1641573335229-331ef3e6a2b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Corporativo',
    type: 'Uniformes empresariales',
  },
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 bg-gray-50">
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
            Galería de Trabajos
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Conoce algunos de nuestros proyectos realizados con excelencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer aspect-square"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-[#1a1a2e]/50 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-white text-xl mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#e2b714]"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
                  >
                    {item.type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
