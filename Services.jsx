import React from 'react';
import { BarChart3, Target, Megaphone, Users, TrendingUp, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search size={32} />,
      title: "Análise Comercial",
      description: "Diagnóstico completo da sua operação comercial, identificando gargalos e oportunidades de melhoria.",
      features: [
        "Auditoria de processos comerciais",
        "Análise de performance de vendas",
        "Mapeamento de oportunidades",
        "Relatório detalhado com plano de ação"
      ]
    },
    {
      icon: <Target size={32} />,
      title: "Posicionamento Estratégico",
      description: "Definição clara do posicionamento da sua marca no mercado, criando diferenciação competitiva.",
      features: [
        "Análise de mercado e concorrência",
        "Definição de proposta de valor",
        "Estratégia de posicionamento",
        "Plano de comunicação estratégica"
      ]
    },
    {
      icon: <Megaphone size={32} />,
      title: "Campanhas Digitais",
      description: "Criação e gestão de campanhas de marketing digital focadas em geração de leads qualificados.",
      features: [
        "Estratégia de marketing digital",
        "Criação de campanhas segmentadas",
        "Gestão de redes sociais",
        "Otimização de conversões"
      ]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Performance de Vendas",
      description: "Otimização do processo de vendas e treinamento de equipes para maximizar resultados.",
      features: [
        "Estruturação do funil de vendas",
        "Treinamento de equipes comerciais",
        "Implementação de CRM",
        "Acompanhamento de métricas"
      ]
    },
    {
      icon: <Users size={32} />,
      title: "Estruturação de Times",
      description: "Organização e capacitação de equipes comerciais para alta performance.",
      features: [
        "Definição de perfis e cargos",
        "Processos de recrutamento",
        "Treinamento e capacitação",
        "Sistema de metas e incentivos"
      ]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Inteligência Comercial",
      description: "Implementação de sistemas de análise e relatórios para tomada de decisão baseada em dados.",
      features: [
        "Dashboard de vendas",
        "Relatórios automatizados",
        "Análise de indicadores",
        "Previsão de resultados"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 novera-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold novera-text-white mb-6">
              Nossos <span className="novera-text-gold">Serviços</span>
            </h2>
            <p className="text-xl novera-text-gray max-w-3xl mx-auto">
              Oferecemos soluções completas em consultoria estratégica de marketing e vendas, 
              personalizadas para as necessidades específicas da sua empresa.
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-gold-500 smooth-transition hover:transform hover:scale-105"
              >
                <div className="novera-text-gold mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold novera-text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="novera-text-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 novera-bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="novera-text-gray text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Processo de Trabalho */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold novera-text-white text-center mb-12">
              Como <span className="novera-text-gold">Trabalhamos</span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 novera-bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold novera-text-black">1</span>
                </div>
                <h4 className="text-lg font-semibold novera-text-white mb-2">Diagnóstico</h4>
                <p className="novera-text-gray text-sm">
                  Análise completa da situação atual da empresa e identificação de oportunidades.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 novera-bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold novera-text-black">2</span>
                </div>
                <h4 className="text-lg font-semibold novera-text-white mb-2">Estratégia</h4>
                <p className="novera-text-gray text-sm">
                  Desenvolvimento de estratégias personalizadas baseadas nos objetivos da empresa.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 novera-bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold novera-text-black">3</span>
                </div>
                <h4 className="text-lg font-semibold novera-text-white mb-2">Implementação</h4>
                <p className="novera-text-gray text-sm">
                  Execução das estratégias com acompanhamento próximo e ajustes necessários.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 novera-bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold novera-text-black">4</span>
                </div>
                <h4 className="text-lg font-semibold novera-text-white mb-2">Resultados</h4>
                <p className="novera-text-gray text-sm">
                  Monitoramento contínuo e otimização para garantir o alcance dos objetivos.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700">
              <h3 className="text-2xl md:text-3xl font-bold novera-text-white mb-4">
                Pronto para <span className="novera-text-gold">Acelerar</span> seus Resultados?
              </h3>
              <p className="text-lg novera-text-gray mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos ajudar sua empresa 
                a alcançar o próximo nível de crescimento.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="novera-button px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300"
              >
                Solicitar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

