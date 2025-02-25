import React from 'react';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import { 
  Scissors, 
  BedDouble as Needle, 
  Ruler,
  MapPin,
  Mail,
  MessageCircle,
  Instagram
} from 'lucide-react';

function App() {
  const services = [
    {
      title: 'Tatuagem',
      icon: <Needle className="h-12 w-12 text-gold" />,
      description: 'Arte personalizada e profissional para marcar momentos especiais.',
    },
    {
      title: 'Piercing',
      icon: <Ruler className="h-12 w-12 text-gold" />,
      description: 'Aplicação segura e higiênica de piercings corporais.',
    },
    {
      title: 'Barbearia',
      icon: <Scissors className="h-12 w-12 text-gold" />,
      description: 'Cortes modernos e tratamento de barba com profissionais especializados.',
    },
  ];

  const testimonials = [
    {
      name: 'João Silva',
      text: 'Excelente trabalho! Muito profissional e ambiente super higienizado.',
      service: 'Tatuagem',
    },
    {
      name: 'Maria Oliveira',
      text: 'Adorei o resultado do meu piercing. Equipe muito atenciosa!',
      service: 'Piercing',
    },
    {
      name: 'Pedro Santos',
      text: 'O melhor corte que já fiz! Profissionais muito capacitados.',
      service: 'Barbearia',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <WhatsAppButton />
      <ChatBot />

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598887142487-3c854d51d2c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Estúdio de Tatuagem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-bebas text-gold mb-4">
              Dill Tattoo e Piercing
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 text-shadow">
              Agora também com Barbearia!
            </p>
            <a
              href="#contact"
              className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors"
            >
              Agende seu Horário
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bebas text-gold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bebas text-gold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bebas text-gold text-center mb-12">
            Nossa Galeria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Tatuagem"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://raw.githubusercontent.com/AstridNielsen-lab/Dill-Tattoo-e-Piercing/refs/heads/index/src/piercings.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=100"
              alt="Piercing"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Barbearia"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bebas text-gold text-center mb-12">
            Depoimentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black p-6 rounded-lg">
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="text-gold font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bebas text-gold text-center mb-12">
            Entre em Contato
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8976816063716!2d-46.5761223!3d-23.5375589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e33fa6407ed%3A0x7c3bc1bc1b0b866e!2sR.%20Bom%20Sucesso%2C%201503%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1647289845729!5m2!1sen!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bebas text-gold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-2 text-gold" />
                    Rua Bom Sucesso, 1503, Tatuapé
                  </p>
                  <p className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 mr-2 text-gold" />
                    ditattoostudio@hotmail.com
                  </p>
                  <a
                    href="https://wa.me/5511970404572"
                    className="flex items-center text-gray-300 hover:text-gold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2 text-gold" />
                    (11) 97040-4572
                  </a>
                  <a
                    href="https://instagram.com/dill_tatto_passione"
                    className="flex items-center text-gray-300 hover:text-gold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5 mr-2 text-gold" />
                    @dill_tatto_passione
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
