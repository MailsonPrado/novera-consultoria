import React from 'react';
import { ArrowRight, TrendingUp, Target, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen novera-gradient flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold novera-text-white leading-tight">
                Destravar Vendas.
                <br />
                <span className="novera-text-gold">Acelerar Resultados.</span>
              </h1>
              <p className="text-xl md:text-2xl novera-text-gray leading-relaxed">
                Consultoria estratégica de marketing e vendas para empresas que têm potencial, 
                mas precisam de estratégia comercial bem definida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contato')}
                className="novera-button px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300"
              >
                Fale Conosco
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="novera-button-outline px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300"
              >
                Nossos Serviços
              </button>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="novera-text-gold text-2xl md:text-3xl font-bold">+50</div>
                <div className="novera-text-gray text-sm">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="novera-text-gold text-2xl md:text-3xl font-bold">+200%</div>
                <div className="novera-text-gray text-sm">Crescimento Médio</div>
              </div>
              <div className="text-center">
                <div className="novera-text-gold text-2xl md:text-3xl font-bold">5+</div>
                <div className="novera-text-gray text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Elementos Visuais */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gold-500 smooth-transition">
                <TrendingUp className="novera-text-gold mb-4" size={32} />
                <h3 className="novera-text-white font-semibold mb-2">Crescimento</h3>
                <p className="novera-text-gray text-sm">Estratégias que geram resultados mensuráveis</p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gold-500 smooth-transition mt-8">
                <Target className="novera-text-gold mb-4" size={32} />
                <h3 className="novera-text-white font-semibold mb-2">Foco</h3>
                <p className="novera-text-gray text-sm">Posicionamento estratégico no mercado</p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gold-500 smooth-transition">
                <Users className="novera-text-gold mb-4" size={32} />
                <h3 className="novera-text-white font-semibold mb-2">Equipe</h3>
                <p className="novera-text-gray text-sm">Estruturação de times comerciais</p>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gold-500 smooth-transition mt-8">
                <div className="novera-text-gold mb-4 text-2xl font-bold">📊</div>
                <h3 className="novera-text-white font-semibold mb-2">Dados</h3>
                <p className="novera-text-gray text-sm">Decisões baseadas em inteligência comercial</p>
              </div>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -top-4 -right-4 w-24 h-24 novera-bg-gold opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 novera-bg-gold opacity-10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

