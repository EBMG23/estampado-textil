import { motion } from 'motion/react';
import { Send, FileText, CheckCircle, Cog, Package } from 'lucide-react';

const steps = [
  {
    icon: <Send className="w-8 h-8" />,
    title: 'Envíanos tu diseño',
    description: 'Comparte tu idea o diseño con nosotros por WhatsApp, email o en persona',
    number: '01',
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Cotización personalizada',
    description: 'Recibe una cotización detallada según tus necesidades en minutos',
    number: '02',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Aprobación del diseño',
    description: 'Revisamos juntos el diseño digital antes de iniciar la producción',
    number: '03',
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: 'Producción y estampado',
    description: 'Nuestro equipo experto trabaja en tu pedido con la mejor calidad',
    number: '04',
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: 'Entrega del pedido',
    description: 'Recibe tu pedido listo para usar en el tiempo acordado',
    number: '05',
  },
];

export function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-white"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Nuestro Proceso de Trabajo
          </h2>
          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Simple, rápido y profesional en cada paso
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center mb-12 last:mb-0"
            >
              {/* Number */}
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e2b714] to-[#c9a013] flex items-center justify-center shadow-xl">
                  <span
                    className="text-[#1a1a2e] text-2xl"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block w-12 h-0.5 bg-[#e2b714]/30 mx-4"></div>
              )}

              {/* Content */}
              <div className="flex-1 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 md:ml-8">
                <div className="flex items-start">
                  <div className="text-[#e2b714] mr-4 mt-1">{step.icon}</div>
                  <div>
                    <h3
                      className="text-xl md:text-2xl mb-2 text-white"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
