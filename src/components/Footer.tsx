import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bebas text-gold mb-4">Contato</h3>
            <div className="space-y-2">
              <a
                href="https://wa.me/5511970404572"
                className="flex items-center text-gray-300 hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: (11) 97040-4572
              </a>
              <a
                href="mailto:ditattoostudio@hotmail.com"
                className="flex items-center text-gray-300 hover:text-gold"
              >
                <Mail className="h-4 w-4 mr-2" />
                ditattoostudio@hotmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bebas text-gold mb-4">Localização</h3>
            <a
              href="https://maps.google.com/?q=Rua+Bom+Sucesso,+1503,+Tatuapé"
              className="flex items-center text-gray-300 hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Rua Bom Sucesso, 1503, Tatuapé
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bebas text-gold mb-4">Redes Sociais</h3>
            <a
              href="https://instagram.com/dill_tatto_passione"
              className="flex items-center text-gray-300 hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4 mr-2" />
              @dill_tatto_passione
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>© 2024 Dill Tattoo e Piercing. Todos os direitos reservados.</p>
            <p className="mt-2">
              Desenvolvido por{' '}
              <a
                href="https://likelook.wixsite.com/solutions"
                className="text-gold hover:text-gold/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Like Look Solutions
              </a>
              {' '}- Programador Julio Campos Machado
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;