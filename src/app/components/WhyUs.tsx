import { motion } from 'motion/react';
import { Shield, Clock, Palette, Truck, Award, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Calidad Garantizada',
    description: 'Utilizamos los mejores materiales y técnicas del mercado',
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: 'Entrega Rápida',
    description: '3-5 días hábiles en la mayoría de nuestros servicios',
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: 'Diseño Incluido',
    description: 'Servicio de diseño gráfico profesional sin costo adicional',
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: 'Envíos Nacionales',
    description: 'Hacemos llegar tus pedidos a todo el país',
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: '+10 Años de Experiencia',
    description: 'Más de una década perfeccionando nuestro arte',
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: 'Materiales Premium',
    description: 'Solo trabajamos con insumos de primera calidad',
  },
];

export function WhyUs() {
  return (
    <section className="py-20 bg-white">
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
            ¿Por Qué Elegirnos?
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Somos tu mejor opción en estampado y personalización textil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="bg-gradient-to-br from-[#e2b714] to-[#c9a013] text-white p-4 rounded-full mb-4 shadow-lg">
                {feature.icon}
              </div>
              <h3
                className="text-xl mb-3 text-[#1a1a2e]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
