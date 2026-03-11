import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En un caso real, aquí enviarías los datos a un servidor
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      quantity: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
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
            Contáctanos
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Estamos listos para ayudarte con tu proyecto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-[#1a1a2e]"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e2b714] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[#1a1a2e]"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                  >
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e2b714] transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-[#1a1a2e]"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e2b714] transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="service"
                    className="block mb-2 text-[#1a1a2e]"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                  >
                    Tipo de servicio *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e2b714] transition-colors bg-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="serigrafia">Serigrafía</option>
                    <option value="sublimacion">Sublimación</option>
                    <option value="dtf">DTF (Direct to Film)</option>
                    <option value="vinilo">Vinilo Textil</option>
                    <option value="bordado">Bordado</option>
                    <option value="transfer">Transfer</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-[#1a1a2e]"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                  >
                    Cantidad aproximada *
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e2b714] transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-[#1a1a2e]"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Descripción del pedido *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e2b714] transition-colors resize-none"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#e2b714] hover:bg-[#c9a013] text-[#1a1a2e] px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Enviar Solicitud
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-xl shadow-xl">
                <h3
                  className="text-2xl mb-6 text-white"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Información de Contacto
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[#e2b714] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p
                        className="text-gray-300 mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
                      >
                        Teléfono
                      </p>
                      <p
                        className="text-white"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[#e2b714] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p
                        className="text-gray-300 mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
                      >
                        Email
                      </p>
                      <p
                        className="text-white"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        info@stamparte.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#e2b714] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p
                        className="text-gray-300 mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
                      >
                        Ubicación
                      </p>
                      <p
                        className="text-white"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        Tu ciudad, País
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[#e2b714] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p
                        className="text-gray-300 mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
                      >
                        Horario
                      </p>
                      <p
                        className="text-white"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        Lun - Vie: 9:00 AM - 6:00 PM
                      </p>
                      <p
                        className="text-white"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        Sáb: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-xl h-64">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-2" />
                    <p
                      className="text-gray-600"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Mapa de ubicación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
