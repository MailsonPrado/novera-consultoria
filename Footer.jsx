import React from 'react';
import { Instagram, MessageCircle, Mail, Phone, ArrowUp } from 'lucide-react';
import noveraLogo from '../assets/novera_logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="novera-bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Conteúdo Principal do Footer */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <img 
                src={noveraLogo} 
                alt="Novera Logo" 
                className="h-16 w-auto mb-4"
              />
              <p className="novera-text-gray leading-relaxed mb-6">
                Consultoria estratégica de marketing e vendas para empresas que querem 
                destravar vendas, acelerar resultados e estruturar posicionamentos fortes no mercado.
              </p>
              
              {/* Redes Sociais */}
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/noveraconsultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:novera-bg-gold rounded-lg flex items-center justify-center smooth-transition group"
                >
                  <Instagram size={20} className="novera-text-white group-hover:novera-text-black" />
                </a>
                
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:novera-bg-gold rounded-lg flex items-center justify-center smooth-transition group"
                >
                  <MessageCircle size={20} className="novera-text-white group-hover:novera-text-black" />
                </a>
                
                <a
                  href="mailto:contato@noveraconsultoria.com.br"
                  className="w-10 h-10 bg-gray-800 hover:novera-bg-gold rounded-lg flex items-center justify-center smooth-transition group"
                >
                  <Mail size={20} className="novera-text-white group-hover:novera-text-black" />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-lg font-bold novera-text-white mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="novera-text-gray hover:novera-text-gold smooth-transition"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('quem-somos')}
                    className="novera-text-gray hover:novera-text-gold smooth-transition"
                  >
                    Quem Somos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicos')}
                    className="novera-text-gray hover:novera-text-gold smooth-transition"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contato')}
                    className="novera-text-gray hover:novera-text-gold smooth-transition"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-lg font-bold novera-text-white mb-4">
                Contato
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="novera-text-gold" />
                  <span className="novera-text-gray text-sm">contato@noveraconsultoria.com.br</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="novera-text-gold" />
                  <span className="novera-text-gray text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 novera-bg-gold rounded-full mt-1 flex-shrink-0"></div>
                  <span className="novera-text-gray text-sm">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Linha Divisória */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="novera-text-gray text-sm">
                © 2024 Novera Consultoria. Todos os direitos reservados.
              </div>

              {/* Botão Voltar ao Topo */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 novera-text-gray hover:novera-text-gold smooth-transition"
              >
                <span className="text-sm">Voltar ao topo</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="novera-text-gold text-2xl font-bold mb-1">+50</div>
                <div className="novera-text-gray text-sm">Empresas Atendidas</div>
              </div>
              <div>
                <div className="novera-text-gold text-2xl font-bold mb-1">+200%</div>
                <div className="novera-text-gray text-sm">Crescimento Médio</div>
              </div>
              <div>
                <div className="novera-text-gold text-2xl font-bold mb-1">5+</div>
                <div className="novera-text-gray text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

