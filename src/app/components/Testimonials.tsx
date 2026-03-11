import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Dueña de tienda de ropa',
    rating: 5,
    comment:
      'Excelente servicio y calidad. Los estampados quedaron perfectos y la entrega fue muy rápida. Definitivamente volveré a trabajar con ellos.',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Organizador de eventos',
    rating: 5,
    comment:
      'Pedí 100 camisas para un evento corporativo y el resultado superó mis expectativas. El diseño y los acabados son de primera calidad.',
  },
  {
    name: 'Ana Martínez',
    role: 'Emprendedora',
    rating: 5,
    comment:
      'El equipo de StampArte me ayudó desde el diseño hasta el producto final. Muy profesionales y atentos en todo momento.',
  },
  {
    name: 'Roberto Silva',
    role: 'Gerente de RRHH',
    rating: 5,
    comment:
      'Hemos trabajado con ellos durante 2 años para nuestros uniformes corporativos. Siempre cumplen con los plazos y la calidad es consistente.',
  },
  {
    name: 'Laura Pérez',
    role: 'Coach deportivo',
    rating: 5,
    comment:
      'Los bordados en los uniformes de mi equipo quedaron increíbles. La atención al detalle es impresionante. Muy recomendados.',
  },
  {
    name: 'Jorge Mendoza',
    role: 'Músico',
    rating: 5,
    comment:
      'Pedí mercancía personalizada para mi banda y quedó perfecta. El proceso fue muy sencillo y el resultado final es justo lo que necesitaba.',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
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
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-[#e2b714]/20" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#e2b714] text-[#e2b714]" />
                ))}
              </div>
              <p
                className="text-gray-700 mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem' }}
              >
                "{testimonial.comment}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p
                  className="text-[#1a1a2e]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-gray-500 text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
