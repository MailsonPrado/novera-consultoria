import React from 'react';
import { Award, Briefcase, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="quem-somos" className="py-20 novera-bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold novera-text-black mb-6">
              Quem <span className="novera-text-gold">Somos</span>
            </h2>
            <p className="text-xl novera-text-gray max-w-3xl mx-auto">
              A Novera nasceu com o propósito de ajudar empresas de médio porte que têm potencial, 
              mas não conseguem crescer por falta de estratégia comercial e de marketing bem definida.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Conteúdo Principal */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold novera-text-black">
                Nossa Missão
              </h3>
              <p className="text-lg novera-text-gray leading-relaxed">
                Queremos destravar vendas, acelerar resultados e estruturar posicionamentos 
                fortes no mercado, com base em dados, comunicação eficiente e inteligência comercial.
              </p>
              <p className="text-lg novera-text-gray leading-relaxed">
                Acreditamos que toda empresa tem potencial de crescimento, mas muitas vezes 
                falta a estratégia certa para transformar esse potencial em resultados concretos.
              </p>
              
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="novera-bg-gold p-2 rounded-lg">
                    <Target className="novera-text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold novera-text-black mb-1">Foco em Resultados</h4>
                    <p className="novera-text-gray">Estratégias baseadas em dados e métricas claras</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="novera-bg-gold p-2 rounded-lg">
                    <Users className="novera-text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold novera-text-black mb-1">Parceria Estratégica</h4>
                    <p className="novera-text-gray">Trabalhamos lado a lado com sua equipe</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="novera-bg-gold p-2 rounded-lg">
                    <Briefcase className="novera-text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold novera-text-black mb-1">Experiência Comprovada</h4>
                    <p className="novera-text-gray">Anos de experiência em consultoria estratégica</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem/Visual */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8 border-2 border-gray-200">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 novera-bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="novera-text-black" size={32} />
                    </div>
                    <h4 className="text-xl font-bold novera-text-black mb-2">Nossa Visão</h4>
                    <p className="novera-text-gray">
                      Ser referência regional e digital em consultoria estratégica, 
                      transformando empresas em líderes de mercado.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold novera-text-gold">+5</div>
                      <div className="text-sm novera-text-gray">Anos de Mercado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold novera-text-gold">+50</div>
                      <div className="text-sm novera-text-gray">Projetos Realizados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold novera-text-gold">+200%</div>
                      <div className="text-sm novera-text-gray">Crescimento Médio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold novera-text-gold">100%</div>
                      <div className="text-sm novera-text-gray">Satisfação</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-16 h-16 novera-bg-gold opacity-20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 novera-bg-gold opacity-10 rounded-full"></div>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold novera-text-black text-center mb-8">
              Nossos Valores
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 novera-bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-semibold novera-text-black mb-2">Excelência</h4>
                <p className="novera-text-gray">
                  Buscamos sempre a melhor solução para cada desafio, 
                  com qualidade e atenção aos detalhes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 novera-bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold novera-text-black mb-2">Transparência</h4>
                <p className="novera-text-gray">
                  Comunicação clara e honesta em todas as etapas do projeto, 
                  construindo confiança mútua.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 novera-bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-semibold novera-text-black mb-2">Inovação</h4>
                <p className="novera-text-gray">
                  Utilizamos as melhores práticas e tecnologias para 
                  entregar resultados superiores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

