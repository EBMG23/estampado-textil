import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const pricingData = [
  {
    title: 'Serigrafía',
    color: '#e2b714',
    tiers: [
      { range: '1-11 unidades', price: '$8.00' },
      { range: '12-24 unidades', price: '$6.50' },
      { range: '25-49 unidades', price: '$5.00' },
      { range: '50-99 unidades', price: '$4.00' },
      { range: '100+ unidades', price: '$3.00' },
    ],
  },
  {
    title: 'Sublimación',
    color: '#e2b714',
    tiers: [
      { range: '1-11 unidades', price: '$12.00' },
      { range: '12-24 unidades', price: '$10.00' },
      { range: '25-49 unidades', price: '$8.50' },
      { range: '50+ unidades', price: '$7.00' },
    ],
  },
  {
    title: 'DTF (Direct to Film)',
    color: '#e2b714',
    tiers: [
      { range: '1-11 unidades', price: '$10.00' },
      { range: '12-24 unidades', price: '$8.00' },
      { range: '25-49 unidades', price: '$6.50' },
      { range: '50+ unidades', price: '$5.50' },
    ],
  },
  {
    title: 'Vinilo Textil',
    color: '#e2b714',
    tiers: [
      { range: '1-11 unidades', price: '$9.00' },
      { range: '12-24 unidades', price: '$7.50' },
      { range: '25+ unidades', price: '$6.00' },
    ],
  },
  {
    title: 'Bordado',
    color: '#e2b714',
    special: true,
    description: 'Desde $15.00 c/u',
    note: '(según complejidad del diseño)',
  },
];

export function Pricing() {
  return (
    <section id="precios" className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
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
            Precios Competitivos
          </h2>
          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Calidad profesional al mejor precio del mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingData.map((pricing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-[#e2b714] to-[#c9a013] p-6 text-center">
                <h3
                  className="text-2xl text-[#1a1a2e]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {pricing.title}
                </h3>
              </div>
              <div className="p-6">
                {pricing.special ? (
                  <div className="text-center py-8">
                    <p
                      className="text-3xl text-[#1a1a2e] mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                    >
                      {pricing.description}
                    </p>
                    <p
                      className="text-gray-600"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem' }}
                    >
                      {pricing.note}
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {pricing.tiers?.map((tier, idx) => (
                      <li key={idx} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-[#e2b714] mr-3" />
                          <span
                            className="text-gray-700"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          >
                            {tier.range}
                          </span>
                        </div>
                        <span
                          className="text-[#1a1a2e]"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                        >
                          {tier.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#e2b714]/10 border border-[#e2b714]/30 rounded-xl p-6 max-w-4xl mx-auto"
        >
          <p
            className="text-gray-200 text-center"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9375rem' }}
          >
            <strong className="text-[#e2b714]">Nota importante:</strong> Los precios pueden variar
            según el número de colores, tamaño del diseño y tipo de prenda. Contáctanos para una
            cotización personalizada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
